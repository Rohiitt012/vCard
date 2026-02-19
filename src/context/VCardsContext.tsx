"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type VCardItem = {
  id: string;
  title: string;
  date: string;
  image: string;
  previewUrl: string;
  viewCount: number;
  status: boolean;
};

function getCreationDate() {
  return new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

const initialVCards: VCardItem[] = [
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

type VCardsContextType = {
  vCards: VCardItem[];
  setVCards: (cards: VCardItem[] | ((prev: VCardItem[]) => VCardItem[])) => void;
};

const VCardsContext = createContext<VCardsContextType | undefined>(undefined);

export function VCardsProvider({ children }: { children: React.ReactNode }) {
  const [vCards, setVCardsState] = useState<VCardItem[]>(initialVCards);

  const setVCards = useCallback((arg: VCardItem[] | ((prev: VCardItem[]) => VCardItem[])) => {
    setVCardsState(typeof arg === "function" ? arg : () => arg);
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

export { initialVCards };
