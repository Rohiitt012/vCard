"use client";

import type React from "react";
import { createContext, useState, useContext, useEffect, useCallback } from "react";
import en from "@/messages/en.json";

// Hindi and other languages – import for bundling
import hi from "@/messages/hi.json";

const messages: Record<string, Record<string, unknown>> = { en, hi };

export type Locale = string;

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "app-locale";

function getNested(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const k of keys) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[k];
  }
  return typeof current === "string" ? current : undefined;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setLocaleState(saved);
      document.documentElement.lang = saved === "hi" ? "hi" : saved;
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale === "hi" ? "hi" : newLocale;
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      if (!mounted) return key;
      const dict = messages[locale] ?? messages.en;
      const value = getNested(dict as Record<string, unknown>, key);
      if (value) return value;
      const enVal = getNested(messages.en as Record<string, unknown>, key);
      return enVal ?? key;
    },
    [locale, mounted]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
