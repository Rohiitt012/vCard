"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Har desh ki language ke saath us desh ka flag + country code
const LANGUAGES: { code: string; countryCode: string; name: string; flag: string }[] = [
  { code: "en", countryCode: "US", name: "English", flag: "🇺🇸" },
  { code: "hi", countryCode: "IN", name: "हिन्दी", flag: "🇮🇳" },
  { code: "ar", countryCode: "AE", name: "Arabic", flag: "🇦🇪" },
  { code: "zh", countryCode: "CN", name: "Chinese", flag: "🇨🇳" },
  { code: "fr", countryCode: "FR", name: "French", flag: "🇫🇷" },
  { code: "de", countryCode: "DE", name: "German", flag: "🇩🇪" },
  { code: "it", countryCode: "IT", name: "Italian", flag: "🇮🇹" },
  { code: "ja", countryCode: "JP", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", countryCode: "KR", name: "Korean", flag: "🇰🇷" },
  { code: "fa", countryCode: "IR", name: "Persian", flag: "🇮🇷" },
  { code: "pt", countryCode: "PT", name: "Portuguese", flag: "🇵🇹" },
  { code: "ru", countryCode: "RU", name: "Russian", flag: "🇷🇺" },
  { code: "es", countryCode: "ES", name: "Spanish", flag: "🇪🇸" },
  { code: "tr", countryCode: "TR", name: "Turkish", flag: "🇹🇷" },
  { code: "vi", countryCode: "VN", name: "Vietnamese", flag: "🇻🇳" },
];

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <span className="text-lg leading-none shrink-0" aria-hidden title={current.countryCode}>
          {current.flag}
        </span>
        <span className="max-w-[120px] truncate">{current.countryCode} {current.name}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-gray-500 transition-transform dark:text-gray-400 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute left-0 top-full z-50 mt-2 max-h-[70vh] w-[220px] overflow-y-auto rounded-xl border border-gray-200 bg-white py-2 shadow-lg dark:border-gray-600 dark:bg-gray-800"
          role="listbox"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={locale === lang.code}
              onClick={() => {
                setLocale(lang.code);
                setIsOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                locale === lang.code
                  ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                  : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50"
              }`}
            >
              <span className="text-lg leading-none shrink-0" title={lang.countryCode}>{lang.flag}</span>
              <span>{lang.countryCode} {lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
