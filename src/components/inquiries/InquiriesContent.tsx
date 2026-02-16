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

type InquiryRow = {
  vcardName: string;
  name: string;
  email: string;
  phone: string;
  attachment: string;
  createdOn: string;
};

const inquiries: InquiryRow[] = [];

const tableColumns = [
  { key: "vcardName", label: "VCARD NAME" },
  { key: "name", label: "NAME" },
  { key: "email", label: "EMAIL" },
  { key: "phone", label: "PHONE" },
  { key: "attachment", label: "ATTACHMENT" },
  { key: "createdOn", label: "CREATED ON" },
  { key: "action", label: "ACTION" },
] as const;

export const InquiriesContent = () => {
  const [search, setSearch] = useState("");
  const [showRows, setShowRows] = useState(10);
  const hasData = inquiries.length > 0;

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
        <h1 className="page-title">Inquiries</h1>
      </div>

      <div className="w-full min-w-0 card-premium overflow-hidden">
        <div className="p-3 sm:p-4 border-b border-gray-200 dark:border-gray-800">
          <label className="sr-only">Search</label>
          <div className="relative w-full max-w-md">
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
        </div>

        <div className="overflow-x-auto">
          <Table className="min-w-[640px]">
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
                inquiries.map((row, index) => (
                  <TableRow
                    key={index}
                    className="border-b border-gray-100 dark:border-gray-800/80 hover:bg-gray-50 dark:hover:bg-white/[0.02]"
                  >
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                      {row.vcardName}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                      {row.name}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                      {row.email}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                      {row.phone}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                      {row.attachment}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                      {row.createdOn}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-sm text-gray-800 dark:text-gray-200">
                      —
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="px-5 py-12 text-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    No Data Available
                  </TableCell>
                </TableRow>
              )}
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
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing {inquiries.length} results
          </p>
        </div>
      </div>
    </>
  );
};
