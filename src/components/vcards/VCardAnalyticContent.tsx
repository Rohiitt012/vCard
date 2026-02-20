"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

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

const CalendarIcon = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// Generate date labels from Jan 20 to Feb 19, 2026
const dateCategories = [
  "20-01-26", "21-01-26", "22-01-26", "23-01-26", "24-01-26", "25-01-26", "26-01-26", "27-01-26", "28-01-26", "29-01-26", "30-01-26", "31-01-26",
  "01-02-26", "02-02-26", "03-02-26", "04-02-26", "05-02-26", "06-02-26", "07-02-26", "08-02-26", "09-02-26", "10-02-26", "11-02-26", "12-02-26", "13-02-26", "14-02-26", "15-02-26", "16-02-26", "17-02-26", "18-02-26", "19-02-26",
];
const chartData = [...Array(30).fill(0), 1]; // 0 for most dates, 1 on last day (31 points for 31 categories)

type VCardAnalyticContentProps = {
  vcardId: string;
};

export function VCardAnalyticContent({ vcardId: _vcardId }: VCardAnalyticContentProps) {
  const [dateRange] = useState("Jan 20, 2026 - Feb 19, 2026");

  const options: ApexOptions = {
    chart: {
      type: "line",
      height: 310,
      toolbar: { show: false },
      fontFamily: "inherit",
    },
    colors: ["#2563eb"],
    stroke: { curve: "straight", width: 2 },
    markers: { size: 0, hover: { size: 5 } },
    grid: {
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    dataLabels: { enabled: false },
    tooltip: { enabled: true },
    xaxis: {
      type: "category",
      categories: dateCategories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { fontSize: "11px" }, rotate: -45 },
    },
    yaxis: {
      min: 0,
      max: 1,
      tickAmount: 1,
      labels: { style: { fontSize: "12px", colors: ["#6B7280"] } },
    },
  };

  const series = [{ name: "Views", data: chartData }];

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
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 text-blue-600 dark:text-blue-400">
              <ChartLineIcon />
            </span>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-sm text-gray-700 dark:text-gray-300">
              <CalendarIcon />
              <span>{dateRange}</span>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="max-w-full overflow-x-auto">
            <div className="min-w-[500px]" id="vcard-analytic-chart">
              <ReactApexChart options={options} series={series} type="line" height={310} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
