"use client";

import React from "react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { useVCards } from "@/context/VCardsContext";

const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const getStatCards = (activeVCardsCount: number) => [
  {
    title: "Total Active vCards",
    value: String(activeVCardsCount),
    bgClass: "bg-orange-50 dark:bg-orange-950/30",
    borderClass: "border-orange-200 dark:border-orange-800",
    textClass: "text-orange-600 dark:text-orange-400",
    valueClass: "text-orange-700 dark:text-orange-300 font-semibold",
  },
  {
    title: "Total Deactivated vCards",
    value: "0",
    bgClass: "bg-green-50 dark:bg-green-950/30",
    borderClass: "border-green-200 dark:border-green-800",
    textClass: "text-green-600 dark:text-green-400",
    valueClass: "text-green-700 dark:text-green-300 font-semibold",
  },
  {
    title: "Today inquiries",
    value: "0",
    bgClass: "bg-red-50 dark:bg-red-950/30",
    borderClass: "border-red-200 dark:border-red-800",
    textClass: "text-red-600 dark:text-red-400",
    valueClass: "text-red-700 dark:text-red-300 font-semibold",
  },
  {
    title: "Today Appointments",
    value: "0",
    bgClass: "bg-amber-50 dark:bg-amber-950/30",
    borderClass: "border-amber-300 dark:border-amber-800",
    textClass: "text-amber-700 dark:text-amber-400",
    valueClass: "text-amber-800 dark:text-amber-300 font-semibold",
  },
  {
    title: "WhatsApp Store",
    value: "0",
    bgClass: "bg-teal-50 dark:bg-teal-950/30",
    borderClass: "border-teal-200 dark:border-teal-800",
    textClass: "text-teal-600 dark:text-teal-400",
    valueClass: "text-teal-700 dark:text-teal-300 font-semibold",
  },
  {
    title: "WhatsApp Store Order",
    value: "0",
    bgClass: "bg-violet-50 dark:bg-violet-950/30",
    borderClass: "border-violet-200 dark:border-violet-800",
    textClass: "text-violet-600 dark:text-violet-400",
    valueClass: "text-violet-700 dark:text-violet-300 font-semibold",
  },
  {
    title: "WhatsApp Store Pending Order",
    value: "0",
    bgClass: "bg-amber-50 dark:bg-amber-950/30",
    borderClass: "border-amber-200 dark:border-amber-700",
    textClass: "text-amber-600 dark:text-amber-400",
    valueClass: "text-amber-700 dark:text-amber-300 font-semibold",
  },
];

export const DashboardCards = () => {
  const { user } = useUser();
  const { vCards } = useVCards();
  const displayName = user?.name ?? "User";
  const activeVCardsCount = vCards.filter((c) => c.status).length;
  const statCards = getStatCards(activeVCardsCount);

  const cardBaseClass = "card-premium card-premium-hover rounded-2xl p-4 sm:p-5 md:p-6 min-h-[140px] sm:min-h-[160px] md:min-h-[168px] flex flex-col";

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-4">
      {/* Welcome / Add New Card - same size as others */}
      <div className={`${cardBaseClass} border-2 border-brand-200/90 dark:border-brand-800 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-gray-900 dark:via-gray-900/95 dark:to-brand-950/30 shadow-[var(--shadow-theme-lg)]`}>
        <h3 className="font-bold text-gray-900 dark:text-white text-base md:text-lg tracking-tight">
          Hey {displayName}
        </h3>
        <p className="mt-2 text-theme-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 line-clamp-3">
          Create your business vCard instantly – no tech skills needed!
        </p>
        <Link
          href="/vcards"
          className="btn-primary-premium mt-4 inline-flex items-center gap-2 w-fit border-0"
        >
          <PlusIcon />
          Add New Card
        </Link>
      </div>

      {/* Stat cards */}
      {statCards.map((card) => (
        <div
          key={card.title}
          className={`${cardBaseClass} border ${card.borderClass} ${card.bgClass}`}
        >
          <p className={`text-theme-sm font-semibold ${card.textClass}`}>{card.title}</p>
          <p className={`mt-3 text-2xl md:text-3xl font-bold tracking-tight ${card.valueClass} flex-1`}>{card.value}</p>
        </div>
      ))}
    </div>
  );
};
