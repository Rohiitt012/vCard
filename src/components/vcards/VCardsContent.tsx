"use client";

import React, { useState } from "react";
import Image from "next/image";

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const GridIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const GalleryIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9h18M9 21V9" />
  </svg>
);

// Action icons for vCard (globe, folder, people, phone, analytics)
const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <path strokeWidth={2} strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);
const FolderIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);
const PeopleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const ChartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v16" />
  </svg>
);

type ViewMode = "grid" | "gallery";

const actionIcons = [
  { Icon: GlobeIcon, color: "bg-green-500 text-white" },
  { Icon: FolderIcon, color: "bg-amber-500 text-white" },
  { Icon: PeopleIcon, color: "bg-blue-500 text-white" },
  { Icon: PhoneIcon, color: "bg-violet-500 text-white" },
  { Icon: ChartIcon, color: "bg-sky-400 text-white" },
];

// Sample vCard data (1 card as in the design)
const sampleVCards = [
  {
    id: "1",
    title: "website builder",
    date: "16 Feb 2026",
    image: "/images/user/owner.jpg",
  },
];

export const VCardsContent = () => {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const total = sampleVCards.length;
  const start = 1;
  const end = total;

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
        <h1 className="page-title">vCards</h1>
      </div>

      {/* Toolbar: Search + View toggles */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="relative w-full sm:max-w-md">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <SearchIcon />
          </span>
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-premium w-full pl-10 pr-4 py-2.5 text-sm"
          />
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-colors ${
              viewMode === "grid"
                ? "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white shadow-sm"
                : "bg-brand-600 border-brand-600 text-white"
            }`}
            aria-label="Grid view"
          >
            <GridIcon />
          </button>
          <button
            type="button"
            onClick={() => setViewMode("gallery")}
            className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-colors ${
              viewMode === "gallery"
                ? "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white shadow-sm"
                : "bg-brand-600 border-brand-600 text-white"
            }`}
            aria-label="Gallery view"
          >
            <GalleryIcon />
          </button>
        </div>
      </div>

      {/* vCard grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {sampleVCards.map((card) => (
          <article
            key={card.id}
            className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-theme-md hover:shadow-theme-lg transition-shadow"
          >
            <div className="relative aspect-[16/10] w-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="bg-violet-100/80 dark:bg-violet-900/30 px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base capitalize">
                  {card.title}
                </h3>
                <span className="text-theme-xs text-gray-600 dark:text-gray-400 shrink-0">
                  {card.date}
                </span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {actionIcons.map(({ Icon, color }, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`w-9 h-9 rounded-full flex items-center justify-center ${color} hover:opacity-90 transition-opacity`}
                    aria-label={`Action ${i + 1}`}
                  >
                    <Icon />
                  </button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Showing count */}
      <p className="mt-6 text-theme-sm text-gray-600 dark:text-gray-400">
        Showing {start} - {end} Of {total}
      </p>
    </>
  );
};
