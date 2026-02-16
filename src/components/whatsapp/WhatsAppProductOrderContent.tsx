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

const FilterIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

type OrderRow = {
  storeName: string;
  orderId: string;
  name: string;
  phone: string;
  status: string;
  orderDate: string;
  amount: string;
};

const orders: OrderRow[] = [];

const tableColumns = [
  { key: "storeName", label: "STORE NAME" },
  { key: "orderId", label: "ORDER ID" },
  { key: "name", label: "NAME" },
  { key: "phone", label: "PHONE" },
  { key: "status", label: "STATUS" },
  { key: "orderDate", label: "ORDER DATE" },
  { key: "amount", label: "AMOUNT" },
  { key: "action", label: "ACTION" },
] as const;

export const WhatsAppProductOrderContent = () => {
  const [search, setSearch] = useState("");
  const [showRows, setShowRows] = useState(10);
  const hasData = orders.length > 0;

  return (
    <>
      {/* Page title */}
      <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
        <h1 className="page-title">WhatsApp Product Order</h1>
      </div>

      {/* Search + Table card - full width */}
      <div className="w-full min-w-0 card-premium overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <label className="sr-only">Search</label>
          <div className="relative flex-1 max-w-md sm:max-w-sm">
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
          <button
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-500 text-white hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 shrink-0"
            aria-label="Filter"
          >
            <FilterIcon />
          </button>
        </div>

        <div className="overflow-x-auto">
          <Table className="min-w-[700px]">
            <TableHeader>
              <TableRow className="bg-slate-100 dark:bg-gray-800/80">
                {tableColumns.map((col, i) => (
                  <TableCell
                    key={col.key}
                    isHeader
                    className={`px-5 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 ${
                      i === 0 ? "rounded-tl-lg" : ""
                    } ${i === tableColumns.length - 1 ? "rounded-tr-lg" : ""}`}
                  >
                    <span className="inline-flex items-center gap-1">
                      {col.label}
                      {col.key !== "action" && <SortIcon />}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {hasData ? (
                orders.map((row, index) => (
                  <TableRow
                    key={index}
                    className="border-b border-gray-100 dark:border-gray-800/80 hover:bg-gray-50 dark:hover:bg-white/[0.02]"
                  >
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                      {row.storeName}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                      {row.orderId}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                      {row.name}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                      {row.phone}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                      {row.status}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                      {row.orderDate}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                      {row.amount}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                      —
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="px-5 py-12 text-center text-sm text-gray-500 dark:text-gray-400"
                  >
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
            Showing {orders.length} results
          </p>
        </div>
      </div>
    </>
  );
};
