"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useVCards } from "@/context/VCardsContext";
import { getEditToken, apiRestoreVCard, apiDeleteVCard } from "@/lib/vcards-api";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { VCardsErrorBoundary } from "./VCardsErrorBoundary";

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

const DuplicateIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h2v2m4 0h2a2 2 0 012 2v2m0 4v2a2 2 0 01-2 2h-2v-2m0-4V6" />
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

const menuItems: { label: string; Icon: React.ComponentType<{ className?: string }>; onClick?: () => void; href?: string; danger?: boolean }[] = [
  { label: "QR Code", Icon: QRIcon },
  { label: "Copy link", Icon: CopyLinkIcon },
  { label: "Duplicate", Icon: DuplicateIcon },
  { label: "Download vCard", Icon: DownloadIcon, onClick: () => {} },
  { label: "Inquiries", Icon: InquiriesIcon, href: "/inquiries" },
  { label: "Delete", Icon: TrashIcon, onClick: () => {}, danger: true },
  { label: "Disabled", Icon: ToggleIcon, onClick: () => {} },
];

const TOAST_DURATION_MS = 4000;

export const VCardsContent = () => {
  const router = useRouter();
  const { vCards, setVCards, createVCard, isLoading, error } = useVCards();
  const [duplicatingId, setDuplicatingId] = useState<string | null>(null);
  const [duplicateSuccessToast, setDuplicateSuccessToast] = useState(false);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [cardStatus, setCardStatus] = useState<Record<string, boolean>>({});
  const [disabledCardIds, setDisabledCardIds] = useState<Record<string, boolean>>({});

  // Sync card status from API vCards when they load
  useEffect(() => {
    if (vCards.length === 0) return;
    setCardStatus((prev) => {
      const next = { ...prev };
      vCards.forEach((c) => {
        if (!(c.id in next)) next[c.id] = c.status ?? true;
      });
      return next;
    });
  }, [vCards]);
  const [deleteConfirmCardId, setDeleteConfirmCardId] = useState<string | null>(null);
  const [qrModalCard, setQrModalCard] = useState<VCardItem | null>(null);
  const [showPerPage, setShowPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"name" | "viewCount" | "date">("date");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "disabled">("all");
  const [showViewChangeToast, setShowViewChangeToast] = useState(false);
  const [toastProgress, setToastProgress] = useState(100);
  const [copiedCardId, setCopiedCardId] = useState<string | null>(null);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [lastDeletedCard, setLastDeletedCard] = useState<{ card: VCardItem; token: string } | null>(null);
  const undoDeleteTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const UNDO_DURATION_MS = 10000;
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [showBulkDeleteConfirm, setShowBulkDeleteConfirm] = useState(false);
  const [showOnboardingTip, setShowOnboardingTip] = useState(true);
  const bulkDeleteModalRef = useRef<HTMLDivElement>(null);
  const deleteConfirmModalRef = useRef<HTMLDivElement>(null);
  const qrModalRef = useRef<HTMLDivElement>(null);
  useFocusTrap(bulkDeleteModalRef, showBulkDeleteConfirm, () => setShowBulkDeleteConfirm(false));
  useFocusTrap(deleteConfirmModalRef, deleteConfirmCardId !== null, () => handleDeleteConfirm(false));
  useFocusTrap(qrModalRef, qrModalCard !== null, () => setQrModalCard(null));

  const filteredCards = React.useMemo(() => {
    let list = vCards.filter((card) => {
      const matchSearch =
        !search ||
        (card.title ?? "").toLowerCase().includes(search.toLowerCase()) ||
        (card.slug ?? card.previewUrl ?? "").toLowerCase().includes(search.toLowerCase());
      const isDisabled = disabledCardIds[card.id];
      const matchStatus =
        statusFilter === "all" || (statusFilter === "active" && !isDisabled) || (statusFilter === "disabled" && isDisabled);
      return matchSearch && matchStatus;
    });
    const dir = sortDir === "asc" ? 1 : -1;
    list = [...list].sort((a, b) => {
      if (sortBy === "name") return dir * (a.title ?? "").localeCompare(b.title ?? "");
      if (sortBy === "viewCount") return dir * ((a.viewCount ?? 0) - (b.viewCount ?? 0));
      return dir * (a.date ?? "").localeCompare(b.date ?? "");
    });
    return list;
  }, [vCards, search, statusFilter, sortBy, sortDir, disabledCardIds]);

  const totalFiltered = filteredCards.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / showPerPage));
  const pageIndex = Math.min(currentPage, totalPages);
  const paginatedCards = React.useMemo(
    () => filteredCards.slice((pageIndex - 1) * showPerPage, pageIndex * showPerPage),
    [filteredCards, pageIndex, showPerPage]
  );
  const paginatedStart = totalFiltered === 0 ? 0 : (pageIndex - 1) * showPerPage + 1;
  const paginatedEnd = Math.min(pageIndex * showPerPage, totalFiltered);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter, showPerPage]);

  const getPublicUrl = (card: VCardItem) =>
    card.previewUrl.startsWith("http") ? card.previewUrl : (typeof window !== "undefined" ? window.location.origin : "") + (card.previewUrl.startsWith("/") ? card.previewUrl : `/${card.previewUrl}`);

  const handleDuplicate = (card: VCardItem) => {
    setOpenMenuId(null);
    const baseSlug = (card.slug || card.previewUrl?.replace(/^https?:\/\/[^/]+/, "").replace(/^\//, "") || "vcard").replace(/^-copy(-\d+)?$/, "");
    const newSlug = `${baseSlug}-copy`;
    const { id: _id, viewCount: _vc, inquiries: _inq, previewUrl: _pu, editToken: _et, ...rest } = card;
    const payload = { ...rest, slug: newSlug, title: card.title, date: card.date };
    setDuplicatingId(card.id);
    createVCard(payload)
      .then((newCard) => {
        setDuplicateSuccessToast(true);
        setTimeout(() => router.push(`/vcards/${newCard.id}/edit?duplicated=1`), 1200);
      })
      .catch(() => setDuplicatingId(null));
  };

  const copyCardLink = (card: VCardItem) => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(getPublicUrl(card));
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      setCopiedCardId(card.id);
      setShowCopyToast(true);
      copyTimeoutRef.current = setTimeout(() => {
        setCopiedCardId(null);
        setShowCopyToast(false);
        copyTimeoutRef.current = null;
      }, 2000);
    }
  };
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { t } = useLanguage();

  const handleSort = (column: "name" | "viewCount" | "date") => {
    if (sortBy === column) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else setSortBy(column);
    setCurrentPage(1);
  };

  const handleDeleteConfirm = (confirmed: boolean) => {
    if (!deleteConfirmCardId) return;
    if (confirmed) {
      const card = vCards.find((c) => c.id === deleteConfirmCardId);
      const token = getEditToken(deleteConfirmCardId);
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
      if (card && token) {
        setLastDeletedCard({ card, token });
        if (undoDeleteTimeoutRef.current) clearTimeout(undoDeleteTimeoutRef.current);
        undoDeleteTimeoutRef.current = setTimeout(() => {
          setLastDeletedCard(null);
          undoDeleteTimeoutRef.current = null;
        }, UNDO_DURATION_MS);
      }
    }
    setDeleteConfirmCardId(null);
  };

  const handleUndoDelete = () => {
    if (!lastDeletedCard) return;
    const { card, token } = lastDeletedCard;
    if (undoDeleteTimeoutRef.current) {
      clearTimeout(undoDeleteTimeoutRef.current);
      undoDeleteTimeoutRef.current = null;
    }
    setLastDeletedCard(null);
    apiRestoreVCard(card.id, token)
      .then(() => setVCards((prev) => [...prev, { ...card }]))
      .catch(() => {});
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
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (showBulkDeleteConfirm) setShowBulkDeleteConfirm(false);
      if (deleteConfirmCardId !== null) setDeleteConfirmCardId(null);
      if (qrModalCard !== null) setQrModalCard(null);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showBulkDeleteConfirm, deleteConfirmCardId, qrModalCard]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey) return;
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return;
      e.preventDefault();
      searchInputRef.current?.focus();
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  const toggleSelectAll = () => {
    if (selectedIds.size >= paginatedCards.length) setSelectedIds(new Set());
    else setSelectedIds(new Set(paginatedCards.map((c) => c.id)));
  };
  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const handleBulkDisable = () => {
    selectedIds.forEach((id) => setDisabledCardIds((p) => ({ ...p, [id]: true })));
    setSelectedIds(new Set());
  };
  const handleBulkDeleteConfirm = (confirmed: boolean) => {
    if (!confirmed) {
      setShowBulkDeleteConfirm(false);
      return;
    }
    const toDelete = [...selectedIds];
    toDelete.forEach((id) => {
      const token = getEditToken(id);
      if (token) apiDeleteVCard(id, token).catch(() => {});
    });
    setVCards((prev) => prev.filter((c) => !selectedIds.has(c.id)));
    setSelectedIds(new Set());
    setShowBulkDeleteConfirm(false);
  };
  const highlightSearch = (text: string) => {
    if (!search.trim()) return text;
    const parts = text.split(new RegExp(`(${search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === search.toLowerCase() ? <mark key={i} className="bg-amber-200 dark:bg-amber-800 rounded px-0.5">{part}</mark> : part
    );
  };

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

  const loadedBlockContent = (() => {
    if (isLoading || error) return null;
    return (
      <div>
        <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <SearchIcon />
            </span>
            <input
              ref={searchInputRef}
              type="search"
              placeholder={t("common.search")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-500"
              aria-label="Search vCards (press / to focus)"
            />
          </div>
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
        {/* Bulk actions */}
        {selectedIds.size > 0 && (
          <div className="flex flex-wrap items-center gap-3 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 dark:border-blue-800 dark:bg-blue-950/40">
            <span className="text-sm font-medium text-blue-800 dark:text-blue-200">{selectedIds.size} selected</span>
            <button type="button" onClick={handleBulkDisable} className="rounded-lg bg-white border border-blue-300 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-900/50 dark:text-blue-200">
              Disable selected
            </button>
            <button type="button" onClick={() => setShowBulkDeleteConfirm(true)} className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700">
              Delete selected
            </button>
            <button type="button" onClick={() => setSelectedIds(new Set())} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-300">
              Clear selection
            </button>
          </div>
        )}
        {/* Status filter */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Status:</span>
          <div className="flex rounded-lg border border-gray-200 bg-white overflow-hidden dark:border-gray-600 dark:bg-gray-800">
            {(["all", "active", "disabled"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setStatusFilter(f)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  statusFilter === f
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {f === "all" ? "All" : f === "active" ? "Active" : "Disabled"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* No results from filter */}
      {vCards.length > 0 && totalFiltered === 0 && (
        <div className="rounded-xl border border-gray-200 bg-white py-12 px-6 text-center dark:border-gray-700 dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-400">No vCards match your search or filter.</p>
          <button
            type="button"
            onClick={() => { setSearch(""); setStatusFilter("all"); setCurrentPage(1); }}
            className="mt-3 text-sm font-medium text-blue-600 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Onboarding tip when empty */}
      {vCards.length === 0 && showOnboardingTip && (
        <div className="mb-6 flex items-center justify-between gap-4 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 dark:border-blue-800 dark:bg-blue-950/40">
          <p className="text-sm text-blue-800 dark:text-blue-200">Get started in 3 steps: Create → Customize → Share your link.</p>
          <button type="button" onClick={() => setShowOnboardingTip(false)} className="shrink-0 rounded p-1 text-blue-600 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-900/50" aria-label="Dismiss">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      )}
      {/* Empty state with CTA */}
      {vCards.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white py-16 px-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-base font-medium text-gray-600 dark:text-gray-400">No vCards yet</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">Create your first vCard to get started.</p>
          <Link
            href="/vcards/new"
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 transition-colors"
          >
            Create your first vCard
          </Link>
        </div>
      )}

      {/* Table view (desktop) + Mobile card list */}
      {viewMode === "grid" && vCards.length > 0 && (
        <>
        {/* Desktop table */}
        <div className="hidden md:block rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="overflow-x-auto overflow-y-visible">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-700/50">
                  <th className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600"
                        checked={paginatedCards.length > 0 && selectedIds.size >= paginatedCards.length}
                        onChange={toggleSelectAll}
                        aria-label="Select all on page"
                      />
                      <button type="button" onClick={() => handleSort("name")} className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        VCARD NAME
                        {sortBy === "name" && (sortDir === "asc" ? <SortUpIcon /> : <span className="rotate-180 inline-block"><SortUpIcon /></span>)}
                      </button>
                    </div>
                  </th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">PREVIEW URL</th>
                  <th className="px-5 py-3.5">
                    <button type="button" onClick={() => handleSort("viewCount")} className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      VIEW COUNT
                      {sortBy === "viewCount" && (sortDir === "asc" ? <SortUpIcon /> : <span className="rotate-180 inline-block"><SortUpIcon /></span>)}
                    </button>
                  </th>
                  <th className="px-5 py-3.5">
                    <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">STATUS</span>
                  </th>
                  <th className="px-5 py-3.5">
                    <button type="button" onClick={() => handleSort("date")} className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      CREATED AT
                      {sortBy === "date" && (sortDir === "asc" ? <SortUpIcon /> : <span className="rotate-180 inline-block"><SortUpIcon /></span>)}
                    </button>
                  </th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white dark:divide-gray-700 dark:bg-gray-800">
                {paginatedCards.map((card) => (
                  <tr key={card.id} className="hover:bg-gray-50/80 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="px-5 py-4 align-middle">
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600"
                            checked={selectedIds.has(card.id)}
                            onChange={() => toggleSelect(card.id)}
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`Select ${card.title}`}
                          />
                          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
                            <Image src={card.image} alt={card.title} fill className="object-cover" sizes="40px" unoptimized={card.image.startsWith("data:")} />
                          </div>
                          <Link
                            href={`/vcards/${card.id}/edit`}
                            className="font-medium text-blue-600 hover:underline dark:text-blue-400 capitalize"
                          >
                            {highlightSearch(card.title ?? "")}
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
                                    <div
                                      key={label}
                                      role="button"
                                      tabIndex={0}
                                      onClick={() => {
                                        setDisabledCardIds((p) => ({ ...p, [card.id]: !p[card.id] }));
                                        setOpenMenuId(null);
                                      }}
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                          e.preventDefault();
                                          setDisabledCardIds((p) => ({ ...p, [card.id]: !p[card.id] }));
                                          setOpenMenuId(null);
                                        }
                                      }}
                                      className={itemClass}
                                    >
                                      <span className="flex h-5 w-5 shrink-0 items-center justify-center"><Icon /></span>
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
                                      onClick={() => {
                                        setDeleteConfirmCardId(card.id);
                                        setOpenMenuId(null);
                                      }}
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                          e.preventDefault();
                                          setDeleteConfirmCardId(card.id);
                                          setOpenMenuId(null);
                                        }
                                      }}
                                      className={itemClass}
                                    >
                                      <span className="flex h-5 w-5 shrink-0 items-center justify-center"><Icon /></span>
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
                                      onClick={() => {
                                        setQrModalCard(card);
                                        setOpenMenuId(null);
                                      }}
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                          e.preventDefault();
                                          setQrModalCard(card);
                                          setOpenMenuId(null);
                                        }
                                      }}
                                      className={itemClass}
                                    >
                                      <span className="flex h-5 w-5 shrink-0 items-center justify-center"><Icon /></span>
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
                                      onClick={() => {
                                        copyCardLink(card);
                                        setOpenMenuId(null);
                                      }}
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                          e.preventDefault();
                                          copyCardLink(card);
                                          setOpenMenuId(null);
                                        }
                                      }}
                                      className={itemClass}
                                    >
                                      <span className="flex h-5 w-5 shrink-0 items-center justify-center"><Icon /></span>
                                      <span>{label}</span>
                                    </div>
                                  );
                                }
                                if (label === "Duplicate") {
                                  return (
                                    <div
                                      key={label}
                                      role="button"
                                      tabIndex={0}
                                      onClick={() => handleDuplicate(card)}
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                          e.preventDefault();
                                          handleDuplicate(card);
                                        }
                                      }}
                                      className={itemClass}
                                    >
                                      <span className="flex h-5 w-5 shrink-0 items-center justify-center"><Icon /></span>
                                      <span>{duplicatingId === card.id ? "Duplicating…" : label}</span>
                                    </div>
                                  );
                                }
                                return (
                                  <div
                                    key={label}
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => {
                                      onClick?.();
                                      setOpenMenuId(null);
                                    }}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        onClick?.();
                                        setOpenMenuId(null);
                                      }
                                    }}
                                    className={itemClass}
                                  >
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center"><Icon /></span>
                                    <span>{label}</span>
                                  </div>
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
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 bg-gray-50 px-5 py-3 dark:border-gray-700 dark:bg-gray-800/50">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 dark:text-gray-400">{t("common.show")}</span>
              <select
                value={showPerPage}
                onChange={(e) => { setShowPerPage(Number(e.target.value)); setCurrentPage(1); }}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-500 dark:text-gray-400">Showing {paginatedStart}–{paginatedEnd} of {totalFiltered}</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={pageIndex <= 1}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Previous
              </button>
              <span className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400">
                Page {pageIndex} of {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={pageIndex >= totalPages}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: card list when grid view */}
        <div className="md:hidden space-y-3">
          {paginatedCards.map((card) => (
            <div
              key={card.id}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
                  <Image src={card.image} alt={card.title} fill className="object-cover" sizes="48px" unoptimized={card.image.startsWith("data:")} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-900 dark:text-white truncate">{card.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">/{card.slug ?? card.previewUrl?.replace(/^\/+/, "")} · {card.viewCount ?? 0} views</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/vcards/${card.id}/edit`}
                    className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white hover:bg-blue-700 transition-colors"
                  >
                    Edit
                  </Link>
                  <a
                    href={getPublicUrl(card)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Showing {paginatedStart}–{paginatedEnd} of {totalFiltered}</span>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={pageIndex <= 1} className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">Previous</button>
              <button type="button" onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={pageIndex >= totalPages} className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">Next</button>
            </div>
          </div>
        </div>
        </>
      )}

      {/* vCard gallery (cards) when gallery icon is selected – max 3 per row, larger cards */}
      {viewMode === "gallery" && vCards.length > 0 && (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {paginatedCards.map((card) => (
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
                        if (label === "Duplicate") {
                          return (
                            <div
                              key={label}
                              role="button"
                              tabIndex={0}
                              onClick={() => handleDuplicate(card)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  handleDuplicate(card);
                                }
                              }}
                              className={itemClass}
                              aria-disabled={duplicatingId === card.id}
                            >
                              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5"><Icon /></span>
                              <span>{duplicatingId === card.id ? "Duplicating…" : label}</span>
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
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {paginatedStart}–{paginatedEnd} of {totalFiltered}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={pageIndex <= 1}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 transition-colors"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600 dark:text-gray-400">Page {pageIndex} of {totalPages}</span>
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={pageIndex >= totalPages}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
      )}

      {/* Copy link toast */}
      {showCopyToast && (
        <div className="fixed bottom-6 right-6 z-[100001] rounded-lg bg-gray-900 text-white px-4 py-3 text-sm font-medium shadow-lg transition-opacity duration-200" role="status" aria-live="polite">
          Link copied!
        </div>
      )}
      {duplicateSuccessToast && (
        <div className="fixed bottom-6 right-6 z-[100001] rounded-lg bg-green-600 text-white px-4 py-3 text-sm font-medium shadow-lg transition-opacity duration-200" role="status" aria-live="polite">
          vCard duplicated. Opening editor…
        </div>
      )}
      {lastDeletedCard && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100001] flex items-center gap-3 rounded-lg bg-gray-900 text-white px-4 py-3 text-sm shadow-lg" role="status" aria-live="polite">
          <span>vCard deleted.</span>
          <button type="button" onClick={handleUndoDelete} className="font-medium text-blue-300 hover:text-white underline">
            Undo
          </button>
        </div>
      )}

      {/* Bulk delete confirmation modal */}
      {showBulkDeleteConfirm && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/50 backdrop-blur-md p-4" role="dialog" aria-modal="true" aria-labelledby="bulk-delete-modal-title">
          <div ref={bulkDeleteModalRef} className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-600 dark:bg-gray-800">
            <h2 id="bulk-delete-modal-title" className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Delete {selectedIds.size} vCards?</h2>
            <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">This cannot be undone. You can restore from the list within 10 seconds after deleting.</p>
            <div className="flex w-full gap-3">
              <button type="button" onClick={() => handleBulkDeleteConfirm(true)} className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-700">
                Yes, delete all
              </button>
              <button type="button" onClick={() => handleBulkDeleteConfirm(false)} className="flex-1 rounded-lg bg-gray-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-600">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirmation modal */}
      {deleteConfirmCardId !== null && (() => {
        const cardToDelete = vCards.find((c) => c.id === deleteConfirmCardId);
        const title = cardToDelete?.title || "this vCard";
        return (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/50 backdrop-blur-md p-4" role="dialog" aria-modal="true" aria-labelledby="delete-modal-title">
          <div ref={deleteConfirmModalRef} className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-600 dark:bg-gray-800 transition-opacity duration-200">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center text-red-500">
                <svg className="h-14 w-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h2 id="delete-modal-title" className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Delete vCard?
              </h2>
              <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                Are you sure you want to delete &quot;{title}&quot;? This cannot be undone.
              </p>
              <div className="flex w-full gap-3">
                <button
                  type="button"
                  onClick={() => handleDeleteConfirm(true)}
                  className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-700 transition-colors"
                >
                  Yes, delete
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteConfirm(false)}
                  className="flex-1 rounded-lg bg-gray-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        );
      })()}

      {/* QR Code modal – scan to open vCard page */}
      {qrModalCard !== null && (
        <div
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="qr-modal-title"
        >
          <div ref={qrModalRef} className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-600 dark:bg-gray-800">
            <div className="flex flex-col items-center text-center">
              <h2 id="qr-modal-title" className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
                QR Code
              </h2>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 capitalize">{qrModalCard.title}</p>
              <div className="mb-4 flex items-center justify-center rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-600 dark:bg-gray-700/50">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(getPublicUrl(qrModalCard))}&color=${(qrModalCard.qrCodeColor ?? "#000000").replace(/^#/, "")}&bgcolor=${(qrModalCard.qrBgColor ?? "#ffffff").replace(/^#/, "")}`}
                  alt={`QR Code for ${qrModalCard.title}`}
                  width={220}
                  height={220}
                  className="rounded-lg"
                />
              </div>
              <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
                Scan to open this vCard page
              </p>
              <div className="flex w-full flex-col gap-2">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
                        navigator.clipboard.writeText(getPublicUrl(qrModalCard));
                        setShowCopyToast(true);
                        setCopiedCardId(qrModalCard.id);
                        if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
                        copyTimeoutRef.current = setTimeout(() => {
                          setShowCopyToast(false);
                          setCopiedCardId(null);
                          copyTimeoutRef.current = null;
                        }, 2000);
                      }
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <CopyLinkIcon />
                    Copy link
                  </button>
                  <a
                    href={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(getPublicUrl(qrModalCard))}&color=${(qrModalCard.qrCodeColor ?? "#000000").replace(/^#/, "")}&bgcolor=${(qrModalCard.qrBgColor ?? "#ffffff").replace(/^#/, "")}`}
                    download="vcard-qr.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                  >
                    <DownloadIcon />
                    Download QR
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setQrModalCard(null)}
                  className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
      </div>
    );
  })();

  return (
    <VCardsErrorBoundary>
      <div>
      {/* Header */}
      <div className="border-b border-gray-200/80 dark:border-gray-800 pb-5 mb-1">
        <h1 className="page-title">{t("vcards.title")}</h1>
      </div>

      {/* Loading / Error – outside conditional so they always show when applicable */}
      {isLoading && (
        <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
          <div className="p-6 space-y-4">
            <div className="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="flex gap-4">
              <div className="h-10 flex-1 max-w-md bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="h-12 bg-gray-100 dark:bg-gray-700/50 rounded animate-pulse mb-3" />
              <div className="h-12 bg-gray-100 dark:bg-gray-700/50 rounded animate-pulse mb-3" />
              <div className="h-12 bg-gray-100 dark:bg-gray-700/50 rounded animate-pulse" />
            </div>
          </div>
        </div>
      )}
      {!isLoading && error && (
        <div className="flex flex-col items-center justify-center rounded-xl border border-amber-200 bg-amber-50 py-16 px-6 shadow-sm dark:border-amber-800 dark:bg-amber-950/30">
          <p className="text-base font-medium text-amber-800 dark:text-amber-200">{error}</p>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">Ensure DATABASE_URL is set in .env and run: npx prisma migrate dev</p>
        </div>
      )}

      {loadedBlockContent}
      </div>
    </VCardsErrorBoundary>
  );
};
