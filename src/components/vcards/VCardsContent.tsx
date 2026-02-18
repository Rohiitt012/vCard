"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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

const EditIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const ThreeDotsIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="6" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="12" cy="18" r="1.5" />
  </svg>
);

const QRIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const InquiriesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TrashIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const ToggleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
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

const menuItems = [
  { label: "QR Code", Icon: QRIcon, onClick: () => {} },
  { label: "Download vCard", Icon: DownloadIcon, onClick: () => {} },
  { label: "Inquiries", Icon: InquiriesIcon, onClick: () => {} },
  { label: "Delete", Icon: TrashIcon, onClick: () => {}, danger: true },
  { label: "Disabled", Icon: ToggleIcon, onClick: () => {} },
];

export const VCardsContent = () => {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const total = sampleVCards.length;
  const start = 1;
  const end = total;

  useEffect(() => {
    if (!openMenuId) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenuId]);

  return (
    <>
      <div className="border-b border-gray-200/80 dark:border-gray-800 pb-5 mb-1">
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
            className="input-premium w-full pl-10 pr-4 py-2.5 text-sm min-h-[42px]"
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
            className={`group card-premium card-premium-hover overflow-hidden ${openMenuId === card.id ? "overflow-visible" : ""}`}
          >
            <div className={`relative aspect-[16/10] w-full bg-gray-200 dark:bg-gray-800 rounded-t-2xl ${openMenuId === card.id ? "overflow-visible" : "overflow-hidden"}`} ref={openMenuId === card.id ? menuRef : undefined}>
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Hover overlay: edit + three-dot, dropdown three-dot ke bilkul paas */}
              <div className="absolute inset-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 flex items-start justify-end">
                <div className="relative flex flex-col items-end">
                  <div className="flex items-center gap-1.5 rounded-full bg-white/90 dark:bg-gray-800/90 px-2.5 py-1.5 shadow-md">
                    <Link
                      href={`/vcards/${card.id}/edit`}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-brand-600 hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-500/20 transition-colors"
                      aria-label="Edit"
                    >
                      <EditIcon />
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenMenuId(openMenuId === card.id ? null : card.id);
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-brand-600 hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-500/20 transition-colors"
                      aria-label="More options"
                    >
                      <ThreeDotsIcon />
                    </button>
                  </div>
                  {/* Features dropdown: three-dot ke neeche, screenshot jaisa */}
                  {openMenuId === card.id && (
                    <div className="absolute right-0 top-full mt-2 z-[100] min-w-[200px] rounded-xl border border-gray-200 bg-white py-2 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                      {menuItems.map(({ label, Icon, onClick, danger }) => (
                        <button
                          key={label}
                          type="button"
                          onClick={() => {
                            onClick();
                            setOpenMenuId(null);
                          }}
                          className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm whitespace-nowrap transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                            danger ? "text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10" : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          <span className="flex-shrink-0 flex items-center justify-center w-5 h-5">
                            <Icon />
                          </span>
                          <span>{label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
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
