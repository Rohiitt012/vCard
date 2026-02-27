'use client';

import React from "react";
import { useParams } from "next/navigation";
import { useVCards } from "@/context/VCardsContext";

export default function PublicVCardPage() {
  const params = useParams<{ slug: string }>();
  const slug = (Array.isArray(params.slug) ? params.slug[0] : params.slug).toLowerCase();
  const { vCards } = useVCards();

  const card = vCards.find((c) => {
    const fromSlug = c.slug?.toLowerCase();
    const fromPreview = c.previewUrl
      .replace(/^https?:\/\/[^/]+/, "")
      .replace(/^\/+/, "")
      .toLowerCase();
    return fromSlug === slug || fromPreview === slug;
  });

  if (!card) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-gray-600 text-sm md:text-base">This vCard does not exist.</p>
      </div>
    );
  }

  const headerGradient = card.templatePrimaryColor
    ? undefined
    : "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900";

  const primaryColor = card.templatePrimaryColor ?? "#facc15"; // amber-400 fallback

  const blogs = Array.isArray(card.blogs) ? card.blogs : [];
  const termsHtml = card.termsHtml;
  const privacyHtml = card.privacyHtml;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fdf7ec] px-4 py-8 flex flex-col items-center pb-12">
      <div className="relative w-full max-w-sm space-y-6 flex-shrink-0">
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-slate-800 via-slate-900 to-black shadow-2xl" />

        <div className="relative rounded-[3rem] overflow-hidden border border-black/40 bg-black/60">
          <div
            className={`h-40 w-full ${headerGradient ?? ""}`}
            style={headerGradient ? undefined : { backgroundColor: primaryColor }}
          />

          <div className="px-6 pb-8 pt-4 space-y-6">
            <div className="-mt-10 flex items-center gap-4">
              <div className="h-20 w-20 rounded-full border-4 border-white/30 bg-gray-700 overflow-hidden flex items-center justify-center text-2xl text-gray-300">
                {card.title.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-lg font-semibold text-white leading-tight">{card.title}</p>
                <p className="text-xs text-slate-300 mt-1">
                  {card.templateName ? `Template: ${card.templateName}` : "Digital Business Card"}
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-slate-200/90">
              Tap the button below to quickly save this contact to your phone. You can always come back to this page at
              <span className="font-medium"> /{slug}</span>.
            </p>

            <div className="mt-6 flex justify-center">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full px-7 py-2.5 text-xs font-semibold text-gray-900 shadow-md hover:opacity-90 transition-colors"
                style={{ backgroundColor: primaryColor }}
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-[10px] text-amber-300 font-bold">
                  +
                </span>
                Add to contact
              </button>
            </div>

            {termsHtml && (
              <div className="mt-4 rounded-2xl bg-black/70 border border-white/10 px-4 py-4 space-y-2">
                <h2 className="text-center text-xs font-semibold text-white tracking-wide">
                  Terms &amp; Conditions
                </h2>
                <div
                  className="text-[11px] text-slate-300 leading-relaxed max-h-56 overflow-y-auto space-y-1"
                  dangerouslySetInnerHTML={{ __html: termsHtml }}
                />
              </div>
            )}

            {privacyHtml && (
              <div className="mt-3 rounded-2xl bg-black/70 border border-white/10 px-4 py-4 space-y-2">
                <h2 className="text-center text-xs font-semibold text-white tracking-wide">
                  Privacy Policy
                </h2>
                <div
                  className="text-[11px] text-slate-300 leading-relaxed max-h-56 overflow-y-auto space-y-1"
                  dangerouslySetInnerHTML={{ __html: privacyHtml }}
                />
              </div>
            )}

            {blogs.length > 0 && (
              <div className="mt-4 rounded-2xl bg-black/70 border border-white/10 px-4 py-4 space-y-3">
                <h2 className="text-center text-xs font-semibold text-white tracking-wide">
                  Blog
                </h2>
                <div className="space-y-4 max-h-72 overflow-y-auto">
                  {blogs.map((blog) => (
                    <article
                      key={blog.id}
                      className="rounded-2xl overflow-hidden bg-black/60 border border-white/15"
                    >
                      {blog.icon && (
                        <div className="h-32 w-full bg-black">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={blog.icon}
                            alt={blog.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}
                      <div className="px-4 py-3 space-y-1">
                        <p className="text-[11px] font-semibold text-white truncate">{blog.title}</p>
                        <p className="text-[10px] text-slate-300 leading-snug line-clamp-3">
                          {blog.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

