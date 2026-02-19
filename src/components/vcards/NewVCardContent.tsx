"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useVCards } from "@/context/VCardsContext";

const HelpIcon = () => (
  <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const inputClass =
  "input-premium h-11 w-full px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400";
const labelClass = "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300";

type CoverType = "Image" | "Video" | "YouTube Link";

function formatCardDate() {
  return new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export function NewVCardContent() {
  const router = useRouter();
  const { setVCards } = useVCards();
  const [coverType, setCoverType] = useState<CoverType>("Image");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const urlAlias = (formData.get("urlAlias") as string)?.trim() || "my-vcard";
    const title = (formData.get("vCardName") as string)?.trim() || "New vCard";
    const newId = `vcard-${Date.now()}`;
    const newCard = {
      id: newId,
      title,
      date: formatCardDate(),
      image: "/images/user/owner.jpg",
      previewUrl: `https://openmyprofile.com/${urlAlias}`,
      viewCount: 0,
      status: true,
    };
    setVCards((prev) => [...prev, newCard]);
    router.push(`/vcards/${newId}/edit?created=1`);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Header: New vCard title + Back */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="page-title">New vCard</h1>
        <Link
          href="/vcards"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-violet-600 hover:bg-violet-50 dark:text-violet-400 dark:hover:bg-violet-950/30 transition-colors"
        >
          Back
        </Link>
      </div>

      {/* Form card - screenshot layout */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Row 1: URL Alias full width */}
          <div>
            <label className={`${labelClass} inline-flex items-center gap-1.5`}>
              URL Alias <span className="text-red-500">*</span>
              <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" aria-label="Help">
                <HelpIcon />
              </button>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                name="urlAlias"
                className={inputClass}
                placeholder="my-vCard-page-url"
              />
              <button
                type="button"
                className="shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Refresh alias"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>

          {/* Row 2: vCard Name + Occupation (two columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>
                vCard Name <span className="text-red-500">*</span>
              </label>
              <input type="text" name="vCardName" className={inputClass} placeholder="Enter vCard Name" />
            </div>
            <div>
              <label className={labelClass}>Occupation:</label>
              <input type="text" className={inputClass} placeholder="Enter Occupation" />
            </div>
          </div>

          {/* Row 3: Description (left) | Cover Type, Cover Image/Video/YouTube, Profile Image (right) */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left: Description with rich text toolbar */}
            <div className="lg:col-span-2 space-y-2">
              <label className={labelClass}>Description:</label>
              <div className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
                <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 px-2 py-1.5">
                  <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" title="Bold">
                    <span className="font-bold text-sm">B</span>
                  </button>
                  <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 italic" title="Italic">
                    <span className="text-sm">I</span>
                  </button>
                  <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 underline" title="Underline">
                    <span className="text-sm">U</span>
                  </button>
                  <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 line-through" title="Strikethrough">
                    <span className="text-sm">S</span>
                  </button>
                  <span className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-0.5" />
                  <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" title="Quote">
                    <span className="text-sm">&quot;</span>
                  </button>
                  <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" title="Code">
                    <span className="text-xs">&lt; /&gt;</span>
                  </button>
                  <select className="ml-1 h-8 min-w-[80px] rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 px-2">
                    <option>Normal</option>
                  </select>
                  <span className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-0.5" />
                  <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" title="Text color">
                    <span className="text-sm font-semibold">A</span>
                  </button>
                  <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" title="Highlight">
                    <span className="text-sm font-semibold">A</span>
                  </button>
                </div>
                <textarea
                  className="w-full min-h-[120px] px-4 py-3 text-sm text-gray-900 dark:text-white bg-transparent border-0 focus:ring-0 resize-none placeholder-gray-400"
                  placeholder="Enter Description of Your VCard"
                />
              </div>
              <button type="button" className="text-sm text-brand-600 dark:text-brand-400 hover:underline inline-flex items-center gap-1">
                ✨ Generate Description with AI
              </button>
            </div>

            {/* Right: Cover Type, then conditional Cover Image / Cover Video / YouTube Link, then Profile Image */}
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Cover Type:</label>
                <select
                  className={inputClass}
                  value={coverType}
                  onChange={(e) => setCoverType(e.target.value as CoverType)}
                >
                  <option>Image</option>
                  <option>Video</option>
                  <option>YouTube Link</option>
                </select>
              </div>

              {/* Cover Image - when Cover Type is Image */}
              {coverType === "Image" && (
                <div>
                  <label className={`${labelClass} inline-flex items-center gap-1.5`}>
                    Cover Image:
                    <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" aria-label="Help">
                      <HelpIcon />
                    </button>
                  </label>
                  <div className="relative mt-1.5 flex items-center justify-center h-24 w-full rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 overflow-hidden group">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#1e293b_0%,#334155_50%,#475569_100%)]" />
                    <button
                      type="button"
                      className="absolute top-1.5 right-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 z-10"
                      aria-label="Edit cover"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Allowed file types: png, jpg, jpeg.</p>
                </div>
              )}

              {/* Cover Video - when Cover Type is Video (circular, play icon, mp4) */}
              {coverType === "Video" && (
                <div>
                  <label className={`${labelClass} inline-flex items-center gap-1.5`}>
                    Cover Video:
                    <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" aria-label="Help">
                      <HelpIcon />
                    </button>
                  </label>
                  <div className="relative mt-1.5 flex items-center justify-center h-40 w-40 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 overflow-hidden group">
                    <svg className="w-14 h-14 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <button
                      type="button"
                      className="absolute top-1.5 right-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 z-10"
                      aria-label="Edit cover video"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Allowed file types: mp4.</p>
                </div>
              )}

              {/* YouTube Link - when Cover Type is YouTube Link */}
              {coverType === "YouTube Link" && (
                <div>
                  <label className={`${labelClass} inline-flex items-center gap-1.5`}>
                    YouTube URL:
                    <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" aria-label="Help">
                      <HelpIcon />
                    </button>
                  </label>
                  <input
                    type="url"
                    className={inputClass}
                    placeholder="https://www.youtube.com/watch?v=..."
                  />
                </div>
              )}

              {/* Profile Image - always visible */}
              <div>
                <label className={`${labelClass} inline-flex items-center gap-1.5`}>
                  Profile Image:
                  <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" aria-label="Help">
                    <HelpIcon />
                  </button>
                </label>
                <div className="relative mt-1.5 flex items-center justify-center h-28 w-28 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 overflow-hidden group">
                  <svg className="w-14 h-14 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <button
                    type="button"
                    className="absolute top-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 z-10"
                    aria-label="Edit profile image"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Allowed file types: png, jpg, jpeg.</p>
              </div>
            </div>
          </div>

          {/* Buttons: Save & Next (blue, left), Discard (right) - screenshot order */}
          <div className="flex justify-end gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button type="submit" className="btn-primary-premium inline-flex items-center justify-center">
              Save &amp; Next
            </button>
            <Link
              href="/vcards"
              className="btn-secondary-premium inline-flex items-center justify-center"
            >
              Discard
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
