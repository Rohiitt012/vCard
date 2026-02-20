"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

const VCARDS_STORAGE_KEY = "vcards-list";

export type VCardItem = {
  id: string;
  title: string;
  date: string;
  image: string;
  previewUrl: string;
  viewCount: number;
  status: boolean;
  /** QR code foreground (modules) color - hex e.g. #000000 */
  qrCodeColor?: string;
  /** QR code background color - hex e.g. #ffffff */
  qrBgColor?: string;
  /** Selected vCard template id (from VCARD_TEMPLATES) – saved when user saves in Edit */
  selectedTemplateId?: number;
  /** Selected template display name – shown on vCards list */
  templateName?: string;
  /** Primary color (hex) of saved template – used for card strip on vCards list */
  templatePrimaryColor?: string;
};

function getCreationDate() {
  return new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

const defaultVCards: VCardItem[] = [
  {
    id: "1",
    title: "website builder",
    date: getCreationDate(),
    image: "/images/user/owner.jpg",
    previewUrl: "https://openmyprofile.com/fbfgfg",
    viewCount: 0,
    status: true,
  },
];

function loadVCardsFromStorage(): VCardItem[] {
  if (typeof window === "undefined") return defaultVCards;
  try {
    const raw = localStorage.getItem(VCARDS_STORAGE_KEY);
    if (!raw) return defaultVCards;
    const parsed = JSON.parse(raw) as VCardItem[];
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultVCards;
  } catch {
    return defaultVCards;
  }
}

type VCardsContextType = {
  vCards: VCardItem[];
  setVCards: (cards: VCardItem[] | ((prev: VCardItem[]) => VCardItem[])) => void;
};

const VCardsContext = createContext<VCardsContextType | undefined>(undefined);

export function VCardsProvider({ children }: { children: React.ReactNode }) {
  const [vCards, setVCardsState] = useState<VCardItem[]>(defaultVCards);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setVCardsState(loadVCardsFromStorage());
    setHydrated(true);
  }, []);

  const setVCards = useCallback((arg: VCardItem[] | ((prev: VCardItem[]) => VCardItem[])) => {
    setVCardsState((prev) => {
      const next = typeof arg === "function" ? arg(prev) : arg;
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(VCARDS_STORAGE_KEY, JSON.stringify(next));
        } catch (_) {}
      }
      return next;
    });
  }, []);

  return (
    <VCardsContext.Provider value={{ vCards, setVCards }}>
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

export const initialVCards = defaultVCards;
