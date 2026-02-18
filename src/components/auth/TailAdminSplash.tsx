"use client";

import Link from "next/link";
import React from "react";

/**
 * TailAdmin-style splash panel: dark blue background, grid pattern,
 * centered logo (bar chart icon) + brand name + taglines.
 * Template reference: Free and Open-Source Tailwind CSS Admin Dashboard.
 */
export default function TailAdminSplash() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-slate-900">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(71, 85, 105, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(71, 85, 105, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Subtle cell highlights */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(71, 85, 105, 0.08) 0%, transparent 40%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <Link href="/" className="flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg">
          {/* Logo: blue square with 3 white bars (bar chart style) */}
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-500 shadow-lg">
            <svg
              className="h-8 w-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <rect x="4" y="14" width="4" height="6" rx="1" />
              <rect x="10" y="10" width="4" height="10" rx="1" />
              <rect x="16" y="6" width="4" height="14" rx="1" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Open My Profile
          </span>
        </Link>
        <p className="mt-3 text-sm font-medium text-slate-300 sm:text-base">
          Free and Open-Source Tailwind CSS Admin
        </p>
        <p className="mt-1 text-sm text-slate-400">
          Dashboard Template
        </p>
      </div>
    </div>
  );
}
