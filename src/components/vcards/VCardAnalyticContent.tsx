"use client";

import React from "react";
import Link from "next/link";
import { useVCards } from "@/context/VCardsContext";

const BackIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const ChartLineIcon = () => (
  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v16" />
  </svg>
);

type VCardAnalyticContentProps = {
  vcardId: string;
};

export function VCardAnalyticContent({ vcardId }: VCardAnalyticContentProps) {
  const { vCards } = useVCards();
  const card = vCards.find((c) => c.id === vcardId);
  const viewCount = card?.viewCount ?? 0;

  return (
    <>
      <div className="border-b border-gray-200/80 dark:border-gray-800 pb-5 mb-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="page-title">vCard Analytic</h1>
          <Link
            href="/vcards"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <BackIcon />
            Back
          </Link>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">vCard Analytic</h2>
          <span className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-sm text-gray-700 dark:text-gray-300">
            <ChartLineIcon />
            Total views
          </span>
        </div>

        <div className="p-4 sm:p-5 space-y-6">
          <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-100 dark:border-blue-800/50 p-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{viewCount}</p>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">Page views</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Each time someone opens your vCard link, the count increases.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
