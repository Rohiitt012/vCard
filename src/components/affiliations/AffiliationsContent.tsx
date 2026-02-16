"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const SortIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
  </svg>
);

const REFERRAL_URL = "https://openmyprofile.com/register?referral-code=HXJNTPRVVS";

type TabType = "affiliation" | "withdrawal";

const affiliationRows: { user: string; amount: string; date: string }[] = [];

export const AffiliationsContent = () => {
  const [activeTab, setActiveTab] = useState<TabType>("affiliation");
  const [search, setSearch] = useState("");
  const [showRows, setShowRows] = useState(10);
  const [copied, setCopied] = useState(false);

  const copyReferralLink = () => {
    navigator.clipboard.writeText(REFERRAL_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hasData = affiliationRows.length > 0;

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
        <h1 className="page-title">Affiliations</h1>
      </div>

      {/* Referral Link */}
      <div className="card-premium p-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center min-w-0">
          <input
            type="text"
            readOnly
            value={REFERRAL_URL}
            className="flex-1 min-w-0 h-11 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 px-4 py-2.5 text-sm text-gray-800 dark:text-gray-200"
          />
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              type="button"
              onClick={copyReferralLink}
              className="rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <button
              type="button"
              className="rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-orange-600"
            >
              How It works?
            </button>
            <button
              type="button"
              className="rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600"
            >
              Send Invite
            </button>
          </div>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl bg-violet-600 dark:bg-violet-700 p-5 shadow-sm text-white">
          <p className="font-bold text-sm md:text-base">Total Affiliation Amount</p>
          <p className="mt-1 text-2xl font-semibold">₹0.00</p>
        </div>
        <div className="rounded-xl bg-emerald-600 dark:bg-emerald-700 p-5 shadow-sm text-white">
          <p className="font-bold text-sm md:text-base">Current Amount</p>
          <p className="mt-1 text-2xl font-semibold">₹0.00</p>
        </div>
      </div>

      {/* Note */}
      <p className="text-theme-sm text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
        <span className="font-semibold text-gray-700 dark:text-gray-300">Note:</span> Your affiliate links will be displayed at the bottom of your vCards page. When someone registers through your link and then purchases a subscription, you will be rewarded with 10%.
      </p>

      {/* Tabs + Table card */}
      <div className="w-full min-w-0 card-premium overflow-hidden">
        <div className="flex border-b border-gray-200 dark:border-gray-800">
          <button
            type="button"
            onClick={() => setActiveTab("affiliation")}
            className={`px-5 py-3.5 text-sm font-medium transition-colors ${
              activeTab === "affiliation"
                ? "bg-brand-500 text-white"
                : "bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            Affiliation
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("withdrawal")}
            className={`px-5 py-3.5 text-sm font-medium transition-colors ${
              activeTab === "withdrawal"
                ? "bg-brand-500 text-white"
                : "bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            Withdrawal
          </button>
        </div>

        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <label className="sr-only">Search</label>
          <div className="relative max-w-xs">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <SearchIcon />
            </span>
            <input
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table className="min-w-[500px]">
            <TableHeader>
              <TableRow className="bg-slate-100 dark:bg-gray-800/80">
                <TableCell
                  isHeader
                  className="rounded-tl-lg px-5 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                >
                  <span className="inline-flex items-center gap-1">
                    USER
                    <SortIcon />
                  </span>
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                >
                  <span className="inline-flex items-center gap-1">
                    AFFILIATION AMOUNT OR PERCENTAGE
                    <SortIcon />
                  </span>
                </TableCell>
                <TableCell
                  isHeader
                  className="rounded-tr-lg px-5 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                >
                  <span className="inline-flex items-center gap-1">
                    DATE
                    <SortIcon />
                  </span>
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activeTab === "withdrawal" ? (
                <TableRow>
                  <TableCell colSpan={3} className="px-5 py-12 text-center text-sm text-gray-500 dark:text-gray-400">
                    No Data Available
                  </TableCell>
                </TableRow>
              ) : hasData ? (
                affiliationRows.map((row, index) => (
                  <TableRow
                    key={index}
                    className="border-b border-gray-100 dark:border-gray-800/80 hover:bg-gray-50 dark:hover:bg-white/[0.02]"
                  >
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">{row.user}</TableCell>
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">{row.amount}</TableCell>
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">{row.date}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="px-5 py-12 text-center text-sm text-gray-500 dark:text-gray-400">
                    No Data Available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>Show</span>
            <select
              value={showRows}
              onChange={(e) => setShowRows(Number(e.target.value))}
              className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing {activeTab === "affiliation" ? affiliationRows.length : 0} results
          </p>
        </div>
      </div>
    </>
  );
};
