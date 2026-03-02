"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getEditToken, apiListSubscriptions } from "@/lib/vcards-api";

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const SortIcon = () => (
  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
  </svg>
);

const BackIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

type VCardEmailSubscriptionContentProps = {
  vcardId: string;
};

export function VCardEmailSubscriptionContent({ vcardId }: VCardEmailSubscriptionContentProps) {
  const [search, setSearch] = useState("");
  const [showPerPage, setShowPerPage] = useState(10);
  const [subscriptions, setSubscriptions] = useState<{ email: string; createdAt: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = getEditToken(vcardId);
    if (!token) {
      setLoading(false);
      setError("You can only view subscriptions for vCards you created on this device.");
      return;
    }
    apiListSubscriptions(vcardId, token)
      .then(setSubscriptions)
      .catch((e) => setError(e instanceof Error ? e.message : "Failed to load"))
      .finally(() => setLoading(false));
  }, [vcardId]);

  const filtered = subscriptions.filter((s) => s.email.toLowerCase().includes(search.toLowerCase()));
  const total = filtered.length;
  const displayed = filtered.slice(0, showPerPage);

  return (
    <>
      <div className="border-b border-gray-200/80 dark:border-gray-800 pb-5 mb-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="page-title">vCard Email Subscription</h1>
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
        <div className="p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="relative w-full max-w-md">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <SearchIcon />
            </span>
            <input
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-700/50">
                <th className="px-5 py-3.5">
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                    EMAIL
                    <SortIcon />
                  </span>
                </th>
                <th className="px-5 py-3.5">
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                    CREATED AT
                    <SortIcon />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white dark:divide-gray-700 dark:bg-gray-800">
              {loading ? (
                <tr>
                  <td colSpan={2} className="px-5 py-16 text-center text-sm text-gray-500 dark:text-gray-400">
                    Loading…
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={2} className="px-5 py-16 text-center text-sm text-red-600 dark:text-red-400">
                    {error}
                  </td>
                </tr>
              ) : displayed.length > 0 ? (
                displayed.map((row, index) => (
                  <tr key={`${row.email}-${row.createdAt}-${index}`} className="hover:bg-gray-50/80 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="px-5 py-4 text-gray-900 dark:text-gray-200">{row.email}</td>
                    <td className="px-5 py-4 text-gray-600 dark:text-gray-400">{new Date(row.createdAt).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="px-5 py-16 text-center text-sm text-gray-500 dark:text-gray-400">
                    No subscriptions yet. Add a subscribe form on your public vCard page to collect emails.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-gray-200 bg-gray-50 px-5 py-3 dark:border-gray-700 dark:bg-gray-800/50">
          <span className="text-sm text-gray-500 dark:text-gray-400">Show</span>
          <select
            value={showPerPage}
            onChange={(e) => setShowPerPage(Number(e.target.value))}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Showing {displayed.length} of {total} results
          </span>
        </div>
      </div>
    </>
  );
}
