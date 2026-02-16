"use client";

import React, { useEffect, useRef } from "react";

export function ContentSearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full mb-4 sm:mb-5">
      <label htmlFor="content-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full max-w-2xl mx-auto">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input
          ref={inputRef}
          id="content-search"
          type="text"
          placeholder="Search or type command..."
          className="w-full h-11 sm:h-12 pl-11 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 text-gray-800 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-brand-500 transition-all duration-200 shadow-sm"
        />
      </div>
    </div>
  );
}
