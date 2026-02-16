"use client";

import React from "react";
import Link from "next/link";

const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

// Premium card design variants - 10 unique designs, we'll use 20 cards (2 rounds)
const CARD_VARIANTS = [
  { name: "Riley Jorge", title: "UI/UX Designer", bg: "linear-gradient(180deg, #fff 0%, #1e3a5f 50%)", textTop: "text-gray-900", textBottom: "text-white", accent: "bg-gray-800", qrBg: "bg-gray-900" },
  { name: "John Powell", title: "UI/UX Designer", bg: "linear-gradient(135deg, #0d9488 0%, #134e4a 100%)", textTop: "text-white", textBottom: "text-white", accent: "bg-amber-400", qrBg: "bg-amber-500/30", pattern: "stripes" },
  { name: "Sarah Chen", title: "Product Manager", bg: "linear-gradient(180deg, #1f2937 0%, #111827 100%)", textTop: "text-white", textBottom: "text-gray-300", accent: "bg-cyan-400", qrBg: "bg-white/10", pattern: "grid" },
  { name: "Alex Morgan", title: "Creative Director", bg: "linear-gradient(120deg, #fff 0%, #dbeafe 50%, #1e40af 100%)", textTop: "text-gray-900", textBottom: "text-white", accent: "bg-blue-600", qrBg: "bg-blue-900/50" },
  { name: "Emma Davis", title: "Brand Strategist", bg: "linear-gradient(180deg, #fef3c7 0%, #b45309 100%)", textTop: "text-amber-900", textBottom: "text-white", accent: "bg-amber-700", qrBg: "bg-amber-900/40" },
  { name: "James Wilson", title: "Tech Lead", bg: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%)", textTop: "text-white", textBottom: "text-purple-100", accent: "bg-violet-300", qrBg: "bg-white/20", pattern: "dots" },
  { name: "Olivia Brown", title: "Marketing Head", bg: "linear-gradient(180deg, #ecfdf5 0%, #059669 100%)", textTop: "text-emerald-900", textBottom: "text-white", accent: "bg-emerald-600", qrBg: "bg-emerald-800/50" },
  { name: "Michael Lee", title: "Senior Developer", bg: "linear-gradient(90deg, #1e293b 0%, #0f172a 60%, #6366f1 100%)", textTop: "text-slate-100", textBottom: "text-indigo-100", accent: "bg-indigo-400", qrBg: "bg-slate-800" },
  { name: "Sophie Taylor", title: "Design Lead", bg: "linear-gradient(180deg, #fdf2f8 0%, #be185d 100%)", textTop: "text-pink-900", textBottom: "text-white", accent: "bg-pink-500", qrBg: "bg-pink-900/40" },
  { name: "Daniel Kim", title: "Growth Manager", bg: "linear-gradient(135deg, #0c4a6e 0%, #06b6d4 100%)", textTop: "text-white", textBottom: "text-cyan-100", accent: "bg-cyan-300", qrBg: "bg-white/15", pattern: "waves" },
];

const VirtualCard = ({
  name,
  title,
  bg,
  textTop,
  textBottom,
  accent,
  qrBg,
  pattern,
}: {
  name: string;
  title: string;
  bg: string;
  textTop: string;
  textBottom: string;
  accent: string;
  qrBg: string;
  pattern?: string;
}) => (
  <div
    className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200/50 dark:border-gray-700/50 aspect-[1.75/1] min-h-[140px] flex"
    style={{ background: bg }}
  >
    <div className="flex-1 p-3 flex flex-col justify-between min-w-0">
      <div className={`font-bold text-sm truncate ${textTop}`}>{name}</div>
      <div className={`text-[10px] opacity-90 ${textTop}`}>{title}</div>
      <div className="flex items-center gap-1.5 mt-1">
        <div className={`w-8 h-8 rounded ${qrBg} flex items-center justify-center`}>
          <div className="w-5 h-5 border-2 border-current opacity-80 rounded-sm" />
        </div>
        <div className={`flex-1 h-px ${pattern ? "opacity-60" : ""}`} style={{ background: "currentColor" }} />
      </div>
      <div className={`text-[9px] space-y-0.5 mt-1 ${textBottom}`}>
        <div className="flex items-center gap-1 truncate">✉ youremail@gmail.com</div>
        <div className="flex items-center gap-1 truncate">📍 534, Berlin Street</div>
        <div className="flex items-center gap-1 truncate">📞 (270) 603-5964</div>
      </div>
    </div>
    {pattern === "stripes" && (
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 4px, currentColor 4px, currentColor 5px)",
      }} />
    )}
    {pattern === "grid" && (
      <div className="absolute right-0 top-0 w-12 h-12 opacity-30 border-l-2 border-b-2 border-current rounded-bl-lg" />
    )}
    {pattern === "dots" && (
      <div className="absolute right-1 top-1 w-8 h-8 rounded-full border-2 border-current opacity-40" />
    )}
    {pattern === "waves" && (
      <div className="absolute right-0 bottom-0 w-16 h-10 opacity-20 rounded-tl-full" style={{ background: "currentColor" }} />
    )}
  </div>
);

export const VirtualBackgroundsContent = () => {
  // 20 cards: use 10 variants twice (shuffle order for randomness)
  const cardOrder = [
    0, 5, 1, 7, 2, 9, 3, 4, 6, 8, 1, 0, 8, 3, 5, 2, 7, 9, 4, 6,
  ];

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
        <h1 className="page-title">
          Virtual Backgrounds
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4 sm:mb-6 min-w-0">
        <p className="text-theme-sm text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
          <span className="font-semibold text-gray-700 dark:text-gray-300">Note:</span> Virtual Backgrounds will give you the business card images in which your logo, name, address, and phone will be written. We are exporting standard sizes of horizontal and vertical virtual backgrounds, which will be useful when you want to design your NFC card — you can directly give these images to NFC printing handlers. Also, you can share this with your friends too directly or set it as a profile/cover image.
        </p>
        <Link
          href="/virtual-backgrounds/add"
          className="btn-primary-premium inline-flex items-center gap-2 shrink-0 border-0"
        >
          <PlusIcon />
          Add Custom +
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {cardOrder.map((variantIndex, i) => {
          const v = CARD_VARIANTS[variantIndex];
          return (
            <Link
              key={i}
              href={`/virtual-backgrounds/add?template=${i}`}
              className="block relative rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              <VirtualCard
                name={v.name}
                title={v.title}
                bg={v.bg}
                textTop={v.textTop}
                textBottom={v.textBottom}
                accent={v.accent}
                qrBg={v.qrBg}
                pattern={v.pattern}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};
