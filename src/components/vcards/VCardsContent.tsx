"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useVCards } from "@/context/VCardsContext";

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

const CopyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h2m0 8h2a2 2 0 002 2v2m0-8V6a2 2 0 012-2h2m0 8h2a2 2 0 002 2v2m0-8v2a2 2 0 012 2v2" />
  </svg>
);

const CopyLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const SortUpIcon = () => (
  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
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

type VCardBlog = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

type VCardItem = {
  id: string;
  title: string;
  date: string;
  image: string;
  previewUrl: string;
  slug?: string;
  viewCount: number;
  status: boolean;
  qrCodeColor?: string;
  qrBgColor?: string;
  selectedTemplateId?: number;
  templateName?: string;
  templatePrimaryColor?: string;
  termsHtml?: string;
  privacyHtml?: string;
  blogs?: VCardBlog[];
};

// Sample vCard data (1 card as in the design)
const initialVCards: VCardItem[] = [
  {
    id: "1",
    title: "website builder",
    date: "16 Feb 2026",
    image: "/images/user/owner.jpg",
    previewUrl: "/fbfgfg",
    slug: "fbfgfg",
    viewCount: 0,
    status: true,
  },
];

const menuItems: { label: string; Icon: React.ComponentType<{ className?: string }>; onClick?: () => void; href?: string; danger?: boolean }[] = [
  { label: "QR Code", Icon: QRIcon },
  { label: "Copy link", Icon: CopyLinkIcon },
  { label: "Download vCard", Icon: DownloadIcon, onClick: () => {} },
  { label: "Inquiries", Icon: InquiriesIcon, href: "/inquiries" },
  { label: "Delete", Icon: TrashIcon, onClick: () => {}, danger: true },
  { label: "Disabled", Icon: ToggleIcon, onClick: () => {} },
];

const TOAST_DURATION_MS = 4000;

export const VCardsContent = () => {
  const { vCards, setVCards } = useVCards();
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [cardStatus, setCardStatus] = useState<Record<string, boolean>>(
    Object.fromEntries(initialVCards.map((c) => [c.id, c.status]))
  );
  const [disabledCardIds, setDisabledCardIds] = useState<Record<string, boolean>>({});
  const [deleteConfirmCardId, setDeleteConfirmCardId] = useState<string | null>(null);
  const [qrModalCard, setQrModalCard] = useState<VCardItem | null>(null);
  const [showPerPage, setShowPerPage] = useState(10);
  const [showViewChangeToast, setShowViewChangeToast] = useState(false);
  const [toastProgress, setToastProgress] = useState(100);
  const [copiedCardId, setCopiedCardId] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copyCardLink = (card: VCardItem) => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(card.previewUrl);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      setCopiedCardId(card.id);
      copyTimeoutRef.current = setTimeout(() => {
        setCopiedCardId(null);
        copyTimeoutRef.current = null;
      }, 2000);
    }
  };
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { t } = useLanguage();
  const total = vCards.length;
  const start = total > 0 ? 1 : 0;
  const end = total;

  const handleDeleteConfirm = (confirmed: boolean) => {
    if (!deleteConfirmCardId) return;
    if (confirmed) {
      setVCards((prev) => prev.filter((c) => c.id !== deleteConfirmCardId));
      setCardStatus((prev) => {
        const next = { ...prev };
        delete next[deleteConfirmCardId];
        return next;
      });
      setDisabledCardIds((prev) => {
        const next = { ...prev };
        delete next[deleteConfirmCardId];
        return next;
      });
    }
    setDeleteConfirmCardId(null);
  };

  const handleViewModeChange = (mode: ViewMode) => {
    if (mode === viewMode) return;
    setViewMode(mode);
    setShowViewChangeToast(true);
    setToastProgress(100);
  };

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    };
  }, []);

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

  useEffect(() => {
    if (!showViewChangeToast) return;
    const startTime = Date.now();
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / TOAST_DURATION_MS) * 100);
      setToastProgress(remaining);
    }, 50);
    toastTimerRef.current = setTimeout(() => {
      setShowViewChangeToast(false);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    }, TOAST_DURATION_MS);
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [showViewChangeToast]);

  return (
    <>
      <div className="border-b border-gray-200/80 dark:border-gray-800 pb-5 mb-1">
        <h1 className="page-title">{t("vcards.title")}</h1>
      </div>

      {/* Toolbar: Search + View toggles – professional look */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="relative w-full sm:max-w-md">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <SearchIcon />
          </span>
          <input
            type="search"
            placeholder={t("common.search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-500"
          />
        </div>
        {/* View toggle + success toast (toast appears just above the buttons, near click) */}
        <div className="relative shrink-0">
          {/* Success toast – jaha click kiya (view buttons) uske pass, thoda upar */}
          {showViewChangeToast && (
            <div
              className="absolute bottom-full right-0 mb-2 z-[9999] w-[400px] max-w-[calc(100vw-2rem)]"
              role="alert"
              aria-live="polite"
            >
              {/* Same shape & size as design: wide rounded rectangle, white, green bar at bottom */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start gap-3 px-5 pt-5 pb-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-success-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1 pr-7">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{t("common.successful")}</p>
                    <p className="mt-1 text-sm font-normal text-gray-600 dark:text-gray-400">{t("common.vcardTableViewChanged")}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowViewChangeToast(false)}
                    className="absolute right-3 top-3 rounded p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    aria-label="Close notification"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                {/* Green progress bar along the very bottom edge */}
                <div className="h-1.5 w-full overflow-hidden rounded-b-2xl bg-gray-100 dark:bg-gray-700">
                  <div
                    className="h-full rounded-b-2xl bg-success-500 transition-all duration-75"
                    style={{ width: `${toastProgress}%` }}
                  />
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800">
              <button
                type="button"
                onClick={() => handleViewModeChange("grid")}
                className={`flex items-center justify-center w-11 h-11 transition-colors ${
                  viewMode === "grid"
                    ? "bg-blue-700 text-white"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                }`}
                aria-label="Table view"
              >
                <GridIcon />
              </button>
              <button
                type="button"
                onClick={() => handleViewModeChange("gallery")}
                className={`flex items-center justify-center w-11 h-11 border-l border-gray-200 dark:border-gray-600 transition-colors ${
                  viewMode === "gallery"
                    ? "bg-blue-700 text-white"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                }`}
                aria-label="Gallery view"
              >
                <GalleryIcon />
              </button>
            </div>
            <Link
              href="/vcards/new"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-800 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              New vCard
            </Link>
          </div>
        </div>
      </div>

      {/* Empty state – when no vCards */}
      {vCards.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white py-16 px-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-base font-medium text-gray-600 dark:text-gray-400">vCard not available</p>
        </div>
      )}

      {/* Table view – professional look (light grey header, white rows, blue accents) */}
      {viewMode === "grid" && vCards.length > 0 && (
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="overflow-x-auto overflow-y-visible">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-700/50">
                  <th className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600" />
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">VCARD NAME</span>
                      <SortUpIcon />
                    </div>
                  </th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">PREVIEW URL</th>
                  <th className="px-5 py-3.5">
                    <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">VIEW COUNT</span>
                  </th>
                  <th className="px-5 py-3.5">
                    <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                      STATUS
                      <SortUpIcon />
                    </span>
                  </th>
                  <th className="px-5 py-3.5">
                    <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">CREATED AT</span>
                  </th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white dark:divide-gray-700 dark:bg-gray-800">
                {vCards.map((card) => (
                  <tr key={card.id} className="hover:bg-gray-50/80 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="px-5 py-4 align-middle">
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600" />
                          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
                            <Image src={card.image} alt={card.title} fill className="object-cover" sizes="40px" unoptimized={card.image.startsWith("data:")} />
                          </div>
                          <Link
                            href={`/vcards/${card.id}/edit`}
                            className="font-medium text-blue-600 hover:underline dark:text-blue-400 capitalize"
                          >
                            {card.title}
                          </Link>
                        </div>
                        <span
                          className={`text-xs ml-12 block min-w-0 ${!card.templatePrimaryColor ? "text-gray-500 dark:text-gray-400" : ""}`}
                          style={card.templatePrimaryColor ? { color: card.templatePrimaryColor } : undefined}
                          title={card.templateName || undefined}
                        >
                          {card.templateName ? (
                            <>Template: <span className="font-medium">{card.templateName}</span></>
                          ) : (
                            <>Template: —</>
                          )}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 align-middle">
                      <div className="flex items-center gap-2">
                        {(() => {
                          const slug = (card.slug ?? card.previewUrl.replace(/^https?:\/\/[^/]+/, "").replace(/^\//, "")) || "vcard";
                          const localPath = `/${slug}`;
                          return (
                            <>
                              <a
                                href={localPath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline dark:text-blue-400 text-xs sm:text-sm truncate max-w-[200px]"
                              >
                                {slug}
                              </a>
                              <button
                                type="button"
                                onClick={() => navigator.clipboard?.writeText(`${window.location.origin}${localPath}`)}
                                className="flex-shrink-0 rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-600"
                                aria-label="Copy URL"
                              >
                                <CopyIcon />
                              </button>
                            </>
                          );
                        })()}
                      </div>
                    </td>
                    <td className="px-5 py-4 align-middle">
                      <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-blue-600 px-2 text-xs font-medium text-white dark:bg-blue-600">
                        {card.viewCount}
                      </span>
                    </td>
                    <td className="px-5 py-4 align-middle overflow-visible">
                      <div className="inline-flex items-center py-0.5 overflow-visible">
                        <button
                          type="button"
                          role="switch"
                          aria-checked={cardStatus[card.id] ?? card.status}
                          onClick={() => setCardStatus((prev) => ({ ...prev, [card.id]: !(prev[card.id] ?? card.status) }))}
                          className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-1 ${
                            cardStatus[card.id] ?? card.status
                              ? "bg-blue-600"
                              : "bg-gray-200 dark:bg-gray-600"
                          }`}
                        >
                          {/* White gola track ke andar hi: inset + chota thumb */}
                          <span
                            className={`pointer-events-none absolute left-1 top-1 inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                              cardStatus[card.id] ?? card.status ? "translate-x-[1.375rem]" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                    </td>
                    <td className="px-5 py-4 align-middle">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-600 dark:text-gray-300">
                        {card.date}
                      </span>
                    </td>
                    <td className="px-5 py-4 align-middle">
                      <div className="flex items-center gap-1.5">
                        <Link
                          href={`/vcards/${card.id}/analytic`}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                          aria-label="vCard Analytic"
                        >
                          <ChartIcon />
                        </Link>
                        <Link
                          href={`/vcards/${card.id}/email-subscription`}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                          aria-label="vCard Email Subscription"
                        >
                          <PeopleIcon />
                        </Link>
                        <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors" aria-label="Contact">
                          <PhoneIcon />
                        </button>
                        <Link
                          href={`/vcards/${card.id}/edit`}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                          aria-label="Edit"
                        >
                          <EditIcon />
                        </Link>
                        <button
                          type="button"
                          onClick={(e) => { e.preventDefault(); setOpenMenuId(openMenuId === card.id ? null : card.id); }}
                          className="relative flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                          aria-label="More options"
                          ref={openMenuId === card.id ? (menuRef as React.RefObject<HTMLButtonElement | null>) : undefined}
                        >
                          <ThreeDotsIcon />
                          {openMenuId === card.id && (
                            <div className="absolute right-0 top-full z-[100] mt-1 min-w-[200px] rounded-lg border border-gray-200 bg-white py-2 shadow-lg dark:border-gray-600 dark:bg-gray-800">
                              {menuItems.map(({ label, Icon, onClick, href, danger }) => {
                                const itemClass = `flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm whitespace-nowrap transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                                  danger ? "text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10" : "text-gray-700 dark:text-gray-300"
                                }`;
                                if (href) {
                                  return (
                                    <Link key={label} href={href} onClick={() => setOpenMenuId(null)} className={itemClass}>
                                      <span className="flex h-5 w-5 shrink-0 items-center justify-center"><Icon /></span>
                                      <span>{label}</span>
                                    </Link>
                                  );
                                }
                                if (label === "Disabled") {
                                  return (
                                    <button key={label} type="button" onClick={() => { setDisabledCardIds((p) => ({ ...p, [card.id]: !p[card.id] })); setOpenMenuId(null); }} className={itemClass}>
                                      <span className="flex h-5 w-5 shrink-0 items-center justify-center"><Icon /></span>
                                      <span>{label}</span>
                                    </button>
                                  );
                                }
                                if (label === "Delete") {
                                  return (
                                    <button key={label} type="button" onClick={() => { setDeleteConfirmCardId(card.id); setOpenMenuId(null); }} className={itemClass}>
                                      <span className="flex h-5 w-5 shrink-0 items-center justify-center"><Icon /></span>
                                      <span>{label}</span>
                                    </button>
                                  );
                                }
                                if (label === "QR Code") {
                                  return (
                                    <button key={label} type="button" onClick={() => { setQrModalCard(card); setOpenMenuId(null); }} className={itemClass}>
                                      <span className="flex h-5 w-5 shrink-0 items-center justify-center"><Icon /></span>
                                      <span>{label}</span>
                                    </button>
                                  );
                                }
                                if (label === "Copy link") {
                                  return (
                                    <button key={label} type="button" onClick={() => { copyCardLink(card); setOpenMenuId(null); }} className={itemClass}>
                                      <span className="flex h-5 w-5 shrink-0 items-center justify-center"><Icon /></span>
                                      <span>{label}</span>
                                    </button>
                                  );
                                }
                                return (
                                  <button key={label} type="button" onClick={() => { onClick?.(); setOpenMenuId(null); }} className={itemClass}>
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center"><Icon /></span>
                                    <span>{label}</span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap items-center gap-3 border-t border-gray-200 bg-gray-50 px-5 py-3 dark:border-gray-700 dark:bg-gray-800/50">
            <span className="text-sm text-gray-500 dark:text-gray-400">{t("common.show")}</span>
            <select
              value={showPerPage}
              onChange={(e) => setShowPerPage(Number(e.target.value))}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="text-sm text-gray-500 dark:text-gray-400">Showing {total} {t("common.results")}</span>
          </div>
        </div>
      )}

      {/* vCard gallery (cards) when gallery icon is selected – max 3 per row, larger cards */}
      {viewMode === "gallery" && vCards.length > 0 && (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {vCards.map((card) => (
          <article
            key={card.id}
            className={`group card-premium card-premium-hover overflow-hidden min-w-0 ${openMenuId === card.id || disabledCardIds[card.id] ? "overflow-visible" : ""}`}
          >
            {/* Mobile-preview style: gradient header + dark body (jaisa mobile preview me dikh rha) */}
            <div className={`relative w-full rounded-t-2xl ${openMenuId === card.id || disabledCardIds[card.id] ? "overflow-visible" : "overflow-hidden"}`} ref={openMenuId === card.id ? menuRef : undefined}>
              {disabledCardIds[card.id] && (
                <div className="absolute left-0 top-0 z-10 origin-top-left rotate-[-28deg]">
                  <div className="bg-gray-800/95 text-white text-sm font-bold uppercase tracking-wider py-2.5 pl-7 pr-6 shadow-lg whitespace-nowrap rounded-r-sm min-w-[120px] text-center">
                    Disabled
                  </div>
                </div>
              )}
              {/* Gradient header – same as mobile preview */}
              <div
                className="relative h-32 w-full rounded-t-2xl"
                style={{
                  background: card.templatePrimaryColor
                    ? `linear-gradient(to bottom, ${card.templatePrimaryColor}, ${card.templatePrimaryColor}dd)`
                    : "linear-gradient(to bottom, #7c3aed, #6d28d9)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent rounded-t-2xl" />
                {/* Hover overlay: edit + three-dot */}
                <div className="absolute inset-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-start justify-end">
                  <div className="flex items-center gap-1.5 rounded-full bg-white/90 dark:bg-gray-800/90 px-2 py-1.5 shadow-md">
                    <Link
                      href={`/vcards/${card.id}/edit`}
                      className="flex h-7 w-7 items-center justify-center rounded-lg text-brand-600 hover:bg-brand-50 dark:text-brand-400"
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
                      className="flex h-7 w-7 items-center justify-center rounded-lg text-brand-600 hover:bg-brand-50 dark:text-brand-400"
                      aria-label="More options"
                    >
                      <ThreeDotsIcon />
                    </button>
                  </div>
                </div>
              </div>
              {/* Dark body – avatar + title + template (mobile preview jaisa, larger) */}
              <div className="relative -mt-6 px-5 py-5 bg-[#142633] rounded-t-2xl">
                <div className="flex items-center gap-3">
                  <div
                    className="h-16 w-16 rounded-full border-2 overflow-hidden flex-shrink-0 bg-gray-600"
                    style={{ borderColor: card.templatePrimaryColor || "#8b5cf6" }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                      unoptimized={card.image.startsWith("data:")}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-semibold truncate capitalize" style={{ color: card.templatePrimaryColor || "#a78bfa" }}>
                      {card.title}
                    </p>
                    <p className="text-sm truncate opacity-90" style={{ color: card.templatePrimaryColor || "#a78bfa" }}>
                      {card.templateName ? `Template: ${card.templateName}` : "Template: —"}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 shrink-0">{card.date}</span>
                </div>
              </div>
              {/* Spacer for dropdown */}
              <div className="relative">
                  {/* Features dropdown: three-dot ke neeche, screenshot jaisa */}
                  {openMenuId === card.id && (
                    <div className="absolute right-0 top-full mt-2 z-[100] min-w-[200px] rounded-xl border border-gray-200 bg-white py-2 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                      {menuItems.map(({ label, Icon, onClick, href, danger }) => {
                        const itemClass = `flex w-full items-center gap-3 px-4 py-3 text-left text-sm whitespace-nowrap transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                          danger ? "text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10" : "text-gray-700 dark:text-gray-300"
                        }`;
                        if (href) {
                          return (
                            <Link key={label} href={href} onClick={() => setOpenMenuId(null)} className={itemClass}>
                              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5"><Icon /></span>
                              <span>{label}</span>
                            </Link>
                          );
                        }
                        if (label === "Disabled") {
                          return (
                            <div
                              key={label}
                              role="button"
                              tabIndex={0}
                              onClick={() => { setDisabledCardIds((p) => ({ ...p, [card.id]: !p[card.id] })); setOpenMenuId(null); }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  setDisabledCardIds((p) => ({ ...p, [card.id]: !p[card.id] }));
                                  setOpenMenuId(null);
                                }
                              }}
                              className={itemClass}
                            >
                              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5"><Icon /></span>
                              <span>{label}</span>
                            </div>
                          );
                        }
                        if (label === "Delete") {
                          return (
                            <div
                              key={label}
                              role="button"
                              tabIndex={0}
                              onClick={() => { setDeleteConfirmCardId(card.id); setOpenMenuId(null); }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  setDeleteConfirmCardId(card.id);
                                  setOpenMenuId(null);
                                }
                              }}
                              className={itemClass}
                            >
                              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5"><Icon /></span>
                              <span>{label}</span>
                            </div>
                          );
                        }
                        if (label === "QR Code") {
                          return (
                            <div
                              key={label}
                              role="button"
                              tabIndex={0}
                              onClick={() => { setQrModalCard(card); setOpenMenuId(null); }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  setQrModalCard(card);
                                  setOpenMenuId(null);
                                }
                              }}
                              className={itemClass}
                            >
                              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5"><Icon /></span>
                              <span>{label}</span>
                            </div>
                          );
                        }
                        if (label === "Copy link") {
                          return (
                            <div
                              key={label}
                              role="button"
                              tabIndex={0}
                              onClick={() => { copyCardLink(card); setOpenMenuId(null); }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  copyCardLink(card);
                                  setOpenMenuId(null);
                                }
                              }}
                              className={itemClass}
                            >
                              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5"><Icon /></span>
                              <span>{label}</span>
                            </div>
                          );
                        }
                        return (
                          <div
                            key={label}
                            role="button"
                            tabIndex={0}
                            onClick={() => { onClick?.(); setOpenMenuId(null); }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                onClick?.();
                                setOpenMenuId(null);
                              }
                            }}
                            className={itemClass}
                          >
                            <span className="flex-shrink-0 flex items-center justify-center w-5 h-5"><Icon /></span>
                            <span>{label}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
              </div>
            </div>
            {/* Action strip – mobile preview jaisa bottom bar (taller) */}
            <div
              className={`px-5 py-5 rounded-b-2xl flex items-center justify-center gap-2 flex-wrap ${!card.templatePrimaryColor ? "bg-violet-100/80 dark:bg-violet-900/30" : ""}`}
              style={card.templatePrimaryColor ? { backgroundColor: `${card.templatePrimaryColor}18` } : undefined}
            >
              <div className={`flex items-center gap-2 flex-wrap ${disabledCardIds[card.id] ? "justify-center" : ""}`}>
                {(disabledCardIds[card.id] ? [actionIcons[actionIcons.length - 1]] : actionIcons).map(({ Icon, color }, i) =>
                  i === 0 && !disabledCardIds[card.id] ? (
                    (() => {
                      const slug = (card.slug ?? card.previewUrl.replace(/^https?:\/\/[^/]+/, "").replace(/^\//, "")) || "vcard";
                      const localPath = `/${slug}`;
                      return (
                        <a
                          key={i}
                          href={localPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-9 h-9 rounded-full flex items-center justify-center ${color} hover:opacity-90 transition-opacity`}
                          aria-label="View vCard (public template)"
                        >
                          <Icon />
                        </a>
                      );
                    })()
                  ) : i === 1 && !disabledCardIds[card.id] ? (
                    <Link
                      key={i}
                      href={`/vcards/${card.id}/email-subscription`}
                      className={`w-9 h-9 rounded-full flex items-center justify-center ${color} hover:opacity-90 transition-opacity`}
                      aria-label="vCard Email Subscription"
                    >
                      <Icon />
                    </Link>
                  ) : i === 4 && !disabledCardIds[card.id] ? (
                    <Link
                      key={i}
                      href={`/vcards/${card.id}/analytic`}
                      className={`w-9 h-9 rounded-full flex items-center justify-center ${color} hover:opacity-90 transition-opacity`}
                      aria-label="vCard Analytic"
                    >
                      <Icon />
                    </Link>
                  ) : (
                    <button
                      key={i}
                      type="button"
                      className={`w-9 h-9 rounded-full flex items-center justify-center ${color} hover:opacity-90 transition-opacity`}
                      aria-label={disabledCardIds[card.id] ? "Analytics" : `Action ${i + 1}`}
                    >
                      <Icon />
                    </button>
                  )
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      )}

      {viewMode === "gallery" && vCards.length > 0 && (
      <p className="mt-6 text-theme-sm text-gray-600 dark:text-gray-400">
        Showing {start} - {end} Of {total}
      </p>
      )}

      {/* Delete confirmation modal */}
      {deleteConfirmCardId !== null && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/50 backdrop-blur-md p-4" role="dialog" aria-modal="true" aria-labelledby="delete-modal-title">
          <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-600 dark:bg-gray-800">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center text-red-500">
                <svg className="h-14 w-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h2 id="delete-modal-title" className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Delete !
              </h2>
              <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                Are you sure want to delete this &quot;VCard&quot; ?
              </p>
              <div className="flex w-full gap-3">
                <button
                  type="button"
                  onClick={() => handleDeleteConfirm(true)}
                  className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-700 transition-colors"
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteConfirm(false)}
                  className="flex-1 rounded-lg bg-gray-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-600 transition-colors"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QR Code modal – scan to open vCard page */}
      {qrModalCard !== null && (
        <div
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="qr-modal-title"
        >
          <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-600 dark:bg-gray-800">
            <div className="flex flex-col items-center text-center">
              <h2 id="qr-modal-title" className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
                QR Code
              </h2>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 capitalize">{qrModalCard.title}</p>
              <div className="mb-4 flex items-center justify-center rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-600 dark:bg-gray-700/50">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(qrModalCard.previewUrl)}&color=${(qrModalCard.qrCodeColor ?? "#000000").replace(/^#/, "")}&bgcolor=${(qrModalCard.qrBgColor ?? "#ffffff").replace(/^#/, "")}`}
                  alt={`QR Code for ${qrModalCard.title}`}
                  width={220}
                  height={220}
                  className="rounded-lg"
                />
              </div>
              <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
                Scan to open this vCard page
              </p>
              <div className="flex w-full gap-3">
                <a
                  href={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(qrModalCard.previewUrl)}&color=${(qrModalCard.qrCodeColor ?? "#000000").replace(/^#/, "")}&bgcolor=${(qrModalCard.qrBgColor ?? "#ffffff").replace(/^#/, "")}`}
                  download="vcard-qr.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  <DownloadIcon />
                  Download QR
                </a>
                <button
                  type="button"
                  onClick={() => setQrModalCard(null)}
                  className="flex-1 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
