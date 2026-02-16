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

// Colors from design: dark blue, bright green, lavender, medium gray, black, red-orange, orange-amber
const featureTags: { name: string; bg: string }[] = [
  { name: "Services", bg: "#4a4ae9" },
  { name: "Testimonials", bg: "#50b750" },
  { name: "Hide Branding", bg: "#8c7cdd" },
  { name: "Enquiry Form", bg: "#a0a0a0" },
  { name: "Social Links", bg: "#333333" },
  { name: "Custom Links", bg: "#f74a4a" },
  { name: "Password Protection", bg: "#f3b23c" },
  { name: "Custom CSS", bg: "#4a4ae9" },
  { name: "Custom JS", bg: "#50b750" },
  { name: "Custom Fonts", bg: "#8c7cdd" },
  { name: "Products", bg: "#a0a0a0" },
  { name: "Appointments", bg: "#333333" },
  { name: "Gallery", bg: "#f74a4a" },
  { name: "Analytics", bg: "#f3b23c" },
  { name: "SEO", bg: "#4a4ae9" },
  { name: "Blog", bg: "#50b750" },
  { name: "Affiliation", bg: "#8c7cdd" },
  { name: "Custom QR Code", bg: "#a0a0a0" },
  { name: "Instagram Feed", bg: "#333333" },
  { name: "Iframes", bg: "#f74a4a" },
  { name: "Dynamic vCard", bg: "#f3b23c" },
  { name: "Allow Custom Domain", bg: "#4a4ae9" },
  { name: "WhatsApp Stores", bg: "#50b750" },
  { name: "LinkedIn Feed", bg: "#8c7cdd" },
];

const subscriptionRow = {
  planName: "Free",
  amount: "0",
  subscribedDate: "16th Feb, 2026",
  expiredDate: "23rd Feb, 2026",
  status: "Active",
};

export const ManageSubscriptionContent = () => {
  const [search, setSearch] = useState("");
  const [featureSearch, setFeatureSearch] = useState("");
  const [showRows, setShowRows] = useState(10);

  const filteredFeatures = featureTags.filter((f) =>
    f.name.toLowerCase().includes(featureSearch.toLowerCase())
  );

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
        <h1 className="page-title">Manage Subscription</h1>
      </div>

      {/* Plan overview card */}
      <div className="card-premium overflow-hidden min-w-0">
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4 sm:mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Free</h2>
              <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>No of vCards: 1</li>
                <li>No. of WhatsApp Stores: 0</li>
                <li className="text-green-600 dark:text-green-400 font-medium">Active till 23rd Feb, 2026</li>
                <li>₹0.00/Month</li>
                <li>Trial Days: 7 Days Remaining</li>
                <li>Subscribed Date: 16th Feb 2026</li>
              </ul>
            </div>
            <button type="button" className="btn-primary-premium shrink-0">
              Upgrade Plan
            </button>
          </div>

          {/* Subscribed Date + Features tags (design match) */}
          <p className="text-[15px] text-[#444444] dark:text-gray-400 mb-4">
            Subscribed Date: 16th Feb 2026
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            {filteredFeatures.map((f) => (
              <span
                key={f.name}
                className="inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium text-white"
                style={{ backgroundColor: f.bg }}
              >
                {f.name}
              </span>
            ))}
          </div>

          {/* Search inside card */}
          <div className="max-w-md">
            <label className="sr-only">Search features</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <SearchIcon />
              </span>
              <input
                type="search"
                placeholder="Search"
                value={featureSearch}
                onChange={(e) => setFeatureSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subscription history table */}
      <div className="card-premium overflow-hidden min-w-0">
        <div className="p-3 sm:p-4 border-b border-gray-200 dark:border-gray-800">
          <label className="sr-only">Search</label>
          <div className="relative max-w-md">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <SearchIcon />
            </span>
            <input
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table className="min-w-[500px]">
            <TableHeader>
              <TableRow className="bg-slate-100 dark:bg-gray-800/80">
                <TableCell
                  isHeader
                  className="px-5 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 rounded-tl-lg"
                >
                  <span className="inline-flex items-center gap-1">PLAN NAME <SortIcon /></span>
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                >
                  <span className="inline-flex items-center gap-1">AMOUNT <SortIcon /></span>
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                >
                  <span className="inline-flex items-center gap-1">SUBSCRIBED DATE <SortIcon /></span>
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                >
                  <span className="inline-flex items-center gap-1">EXPIRED DATE <SortIcon /></span>
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 rounded-tr-lg"
                >
                  <span className="inline-flex items-center gap-1">STATUS <SortIcon /></span>
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-gray-100 dark:border-gray-800/80 hover:bg-gray-50 dark:hover:bg-white/[0.02]">
                <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                  {subscriptionRow.planName}
                </TableCell>
                <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                  {subscriptionRow.amount}
                </TableCell>
                <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                  {subscriptionRow.subscribedDate}
                </TableCell>
                <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                  {subscriptionRow.expiredDate}
                </TableCell>
                <TableCell className="px-5 py-4 text-sm">
                  <span className="inline-flex items-center justify-center rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
                    {subscriptionRow.status}
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-3 sm:px-4 py-3 border-t border-gray-200 dark:border-gray-800">
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
          <p className="text-sm text-gray-500 dark:text-gray-400">Showing 1 results</p>
        </div>
      </div>
    </>
  );
};
