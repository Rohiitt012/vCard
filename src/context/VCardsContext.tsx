"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";
import {
  getEditToken,
  setEditToken,
  removeEditToken,
  apiListVCards,
  apiCreateVCard,
  apiUpdateVCard,
  apiDeleteVCard,
} from "@/lib/vcards-api";
import type { VCardItem } from "./VCardsContextTypes";

const LOCAL_VCARDS_KEY = "vcards-local-storage";

function loadVCardsFromStorage(): VCardItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(LOCAL_VCARDS_KEY);
    if (!raw) return [];
    const list = JSON.parse(raw);
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function saveVCardsToStorage(cards: VCardItem[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_VCARDS_KEY, JSON.stringify(cards));
  } catch (_) {}
}

function createLocalVCard(payload: { slug: string; title: string; [k: string]: unknown }): VCardItem {
  const id = "local-" + Date.now() + "-" + Math.random().toString(36).slice(2, 9);
  const slug = (payload.slug || payload.title || "vcard").toString().replace(/\s+/g, "-").toLowerCase();
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  return {
    id,
    title: (payload.title as string) || "Untitled",
    date: new Date().toISOString().slice(0, 10),
    image: (payload.image as string) || "",
    previewUrl: `${baseUrl}/${slug}`,
    slug,
    viewCount: 0,
    status: true,
    ...(payload as Partial<VCardItem>),
  };
}

export type {
  VCardBlog,
  VCardSocialLink,
  VCardBusinessHours,
  VCardInquiry,
  VCardItem,
} from "./VCardsContextTypes";

type VCardsContextType = {
  vCards: VCardItem[];
  setVCards: (cards: VCardItem[] | ((prev: VCardItem[]) => VCardItem[])) => void;
  createVCard: (payload: { slug: string; title: string; [k: string]: unknown }) => Promise<VCardItem>;
  isLoading: boolean;
  error: string | null;
};

const VCardsContext = createContext<VCardsContextType | undefined>(undefined);

export function VCardsProvider({ children }: { children: React.ReactNode }) {
  const [vCards, setVCardsState] = useState<VCardItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const useLocalOnlyRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    apiListVCards()
      .then((list) => {
        if (cancelled) return;
        useLocalOnlyRef.current = false;
        setVCardsState((list as VCardItem[]) || []);
        setError(null);
      })
      .catch(() => {
        if (!cancelled) {
          useLocalOnlyRef.current = true;
          const local = loadVCardsFromStorage();
          setVCardsState(local);
          setError(null);
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (useLocalOnlyRef.current && vCards) {
      saveVCardsToStorage(vCards);
    }
  }, [vCards]);

  const setVCards = useCallback((arg: VCardItem[] | ((prev: VCardItem[]) => VCardItem[])) => {
    setVCardsState((prev) => {
      const next = typeof arg === "function" ? arg(prev) : arg;
      if (!useLocalOnlyRef.current) {
        for (const c of prev) {
          if (!next.find((n) => n.id === c.id)) {
            const token = getEditToken(c.id);
            if (token) {
              apiDeleteVCard(c.id, token).catch(() => {});
              removeEditToken(c.id);
            }
          }
        }
        for (const card of next) {
          const p = prev.find((x) => x.id === card.id);
          if (p && JSON.stringify(p) !== JSON.stringify(card)) {
            const token = getEditToken(card.id);
            if (token) {
              const payload = { ...card };
              apiUpdateVCard(card.id, payload, token)
                .then((updated) => {
                  setVCardsState((prev2) => prev2.map((x) => (x.id === card.id ? (updated as VCardItem) : x)));
                })
                .catch((err) => { console.error('[VCardsContext] API update failed:', err); });
            }
          }
        }
      }
      return next;
    });
  }, []);

  const createVCard = useCallback(
    async (payload: { slug: string; title: string; [k: string]: unknown }): Promise<VCardItem> => {
      if (useLocalOnlyRef.current) {
        const card = createLocalVCard(payload);
        setEditToken(card.id, "local");
        setVCardsState((prev) => {
          const next = [...prev, card];
          saveVCardsToStorage(next);
          return next;
        });
        return card;
      }
      try {
        const created = await apiCreateVCard(payload);
        const card = created as unknown as VCardItem;
        if (created.editToken) {
          setEditToken(created.id, created.editToken as string);
        }
        setVCardsState((prev) => [...prev, card]);
        return card;
      } catch {
        useLocalOnlyRef.current = true;
        const card = createLocalVCard(payload);
        setEditToken(card.id, "local");
        setVCardsState((prev) => {
          const next = [...prev, card];
          saveVCardsToStorage(next);
          return next;
        });
        return card;
      }
    },
    []
  );

  return (
    <VCardsContext.Provider value={{ vCards, setVCards, createVCard, isLoading, error }}>
      {children}
    </VCardsContext.Provider>
  );
}

export function useVCards() {
  const context = useContext(VCardsContext);
  if (context === undefined) {
    throw new Error("useVCards must be used within a VCardsProvider");
  }
  return context;
}
