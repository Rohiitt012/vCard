"use client";

import React from "react";

const totalMB = 40;
const usedMB = 0;
const usedPercent = totalMB > 0 ? (usedMB / totalMB) * 100 : 0;
// Show a tiny blue sliver when used is 0 so "Used Storage" is visible in the chart
const chartUsedPercent = usedPercent === 0 ? 1 : usedPercent;

const VCARDS_CATEGORIES = [
  { name: "Products", mb: 0, percent: 0 },
  { name: "Services", mb: 0, percent: 0 },
  { name: "Testimonials", mb: 0, percent: 0 },
  { name: "Social Icon", mb: 0, percent: 0 },
  { name: "Blogs", mb: 0, percent: 0 },
  { name: "Gallery", mb: 0, percent: 0 },
  { name: "Profile And Cover", mb: 0, percent: 0 },
];

const WHATSAPP_CATEGORIES = [
  { name: "Products", mb: 0, percent: 0 },
  { name: "Product Category", mb: 0, percent: 0 },
  { name: "Profile And Cover", mb: 0, percent: 0 },
];

const SETTING_CATEGORIES = [
  { name: "PWA", mb: 0, percent: 0 },
  { name: "Avatar", mb: 0, percent: 0 },
];

function StoragePieChart() {
  return (
    <div className="relative w-48 h-48 mx-auto">
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `conic-gradient(
            #1e40af 0deg ${chartUsedPercent * 3.6}deg,
            #c4b5fd ${chartUsedPercent * 3.6}deg 360deg
          )`,
        }}
      />
    </div>
  );
}

function CategoryRow({ name, mb, percent }: { name: string; mb: number; percent: number }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800/80 last:border-0">
      <span className="text-sm text-gray-700 dark:text-gray-300">{name}</span>
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {mb.toFixed(2)} MB, {percent.toFixed(2)}%
      </span>
    </div>
  );
}

export const StorageContent = () => {
  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
        <h1 className="page-title">Storage</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Storage Overview */}
        <div className="card-premium p-6">
          <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-6">
            Storage Overview
          </h2>
          <StoragePieChart />
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-blue-700 dark:bg-blue-600" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Used Storage</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-violet-300 dark:bg-violet-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Unused Storage</span>
            </div>
          </div>
          <p className="mt-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
            {usedMB} MB / {totalMB} MB
          </p>
        </div>

        {/* Storage Used */}
        <div className="card-premium p-6">
          <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
            Storage Used
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">vCards</h3>
              <div className="pl-2">
                {VCARDS_CATEGORIES.map((cat) => (
                  <CategoryRow key={cat.name} name={cat.name} mb={cat.mb} percent={cat.percent} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">WhatsApp Store</h3>
              <div className="pl-2">
                {WHATSAPP_CATEGORIES.map((cat) => (
                  <CategoryRow key={cat.name} name={cat.name} mb={cat.mb} percent={cat.percent} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Setting</h3>
              <div className="pl-2">
                {SETTING_CATEGORIES.map((cat) => (
                  <CategoryRow key={cat.name} name={cat.name} mb={cat.mb} percent={cat.percent} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
