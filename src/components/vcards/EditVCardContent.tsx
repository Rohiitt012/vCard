"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useVCards } from "@/context/VCardsContext";

const HelpIcon = () => (
  <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const inputClass =
  "input-premium h-11 w-full px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400";
const labelClass = "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300";

const EditNavIcon = ({ id, active }: { id: string; active: boolean }) => {
  const base = "w-5 h-5 shrink-0";
  const color = active
    ? "text-white"
    : (
        {
          basic: "text-blue-500",
          templates: "text-red-500",
          dynamic: "text-purple-500",
          hours: "text-amber-500",
          qr: "text-purple-500",
          services: "text-amber-500",
          products: "text-amber-500",
          insta: "text-red-500",
          linkedin: "text-blue-600",
          galleries: "text-emerald-500",
          blogs: "text-emerald-500",
          testimonials: "text-red-500",
          iframes: "text-purple-500",
          appointments: "text-emerald-500",
          "social-links": "text-blue-500",
          "custom-links": "text-emerald-500",
          banner: "text-red-500",
          advanced: "text-orange-500",
          fonts: "text-orange-500",
          seo: "text-emerald-500",
          terms: "text-red-500",
          privacy: "text-red-500",
          "manage-section": "text-purple-500",
        } as Record<string, string | undefined>
      )[id] ?? "";

  const cn = `${base} ${color}`;

  switch (id) {
    case "basic":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "templates":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    case "dynamic":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8h-8m8 8H3" />
        </svg>
      );
    case "hours":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "qr":
      return (
        <svg className={`w-4 h-4 shrink-0 ${color}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
          <defs>
            <filter id="edit-vcard-qr-icon-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0.4" dy="0.4" stdDeviation="0.25" floodOpacity="0.4" />
            </filter>
          </defs>
          <g filter="url(#edit-vcard-qr-icon-shadow)">
            <rect x="0" y="0" width="6" height="6" rx="1.25" ry="1.25" />
            <rect x="9" y="0" width="6" height="6" rx="1.25" ry="1.25" />
            <rect x="0" y="9" width="6" height="6" rx="1.25" ry="1.25" />
            <rect x="9" y="9" width="6" height="6" rx="1.25" ry="1.25" />
            <rect x="4.5" y="14" width="6" height="6" rx="1.25" ry="1.25" />
            <rect x="13.5" y="14" width="6" height="6" rx="1.25" ry="1.25" />
          </g>
        </svg>
      );
    case "services":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "products":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      );
    case "insta":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.919-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.919.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
          <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM18.406 5.234a1.44 1.44 0 100 2.882 1.44 1.44 0 000-2.882z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368c0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM3.555 20.452h3.564V9H3.555v11.452z" />
        </svg>
      );
    case "galleries":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    case "blogs":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      );
    case "testimonials":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      );
    case "iframes":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9l3 3-3 3M15 9l3 3-3 3" />
        </svg>
      );
    case "appointments":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    case "custom-links":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      );
    case "social-links":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      );
    case "banner":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    case "advanced":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "fonts":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20L12 4l8 16M5 12h14" />
        </svg>
      );
    case "seo":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    case "terms":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    case "privacy":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      );
    case "manage-section":
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      );
    default:
      return (
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
  }
};

const SOCIAL_LINKS = [
  { id: "website", label: "WebSite URL" },
  { id: "facebook", label: "Facebook URL" },
  { id: "reddit", label: "Reddit URL" },
  { id: "youtube", label: "Youtube URL" },
  { id: "whatsapp", label: "WhatsApp URL" },
  { id: "tiktok", label: "Tiktok URL" },
  { id: "twitter", label: "Twitter URL" },
  { id: "instagram", label: "Instagram URL" },
  { id: "tumblr", label: "Tumblr URL" },
  { id: "linkedin", label: "LinkedIn URL" },
  { id: "pinterest", label: "Pinterest URL" },
  { id: "snapchat", label: "Snapchat" },
];

const SocialIcon = ({ id }: { id: string }) => {
  const base =
    "flex h-9 w-9 items-center justify-center rounded-full text-white shrink-0 shadow-md ring-1 ring-black/10 overflow-hidden";

  switch (id) {
    case "website":
      return (
        <div className={`${base} bg-blue-500`}>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </div>
      );
    case "facebook":
      return (
        <div className={`${base} bg-[#1877F2]`}>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      );
    case "reddit":
      return (
        <div className={`${base} bg-[#FF4500]`}>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.88-7.004 4.88-3.874 0-7.004-2.186-7.004-4.88 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484 1.05 3.64 1.05 1.157 0 2.798-.208 3.64-1.05a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.205.73-1.038 0-2.107-.286-2.805-.73a.326.326 0 0 0-.232-.094z" />
          </svg>
        </div>
      );
    case "youtube":
      return (
        <div className={`${base} bg-[#FF0000]`}>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>
      );
    case "whatsapp":
      return (
        <div className={`${base} bg-[#25D366]`}>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      );
    case "tiktok":
      return (
        <div className={`${base} bg-black`}>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
          </svg>
        </div>
      );
    case "twitter":
      return (
        <div className={`${base} bg-black`}>
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
      );
    case "instagram":
      return (
        <div className={`${base} bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]`}>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 6.5h.01" />
          </svg>
        </div>
      );
    case "tumblr":
      return (
        <div className={`${base} bg-[#36465D]`}>
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-5.411V9.747H5.909V6.648c3.63-1.31 4.512-4.596 4.71-6.469C10.63.051 11.183 0 12.009 0h3.359v6.114h4.69v3.633h-4.69v8.755c.149 1.125.479 2.676 2.924 2.676 1.383 0 2.443-.093 2.765-.134v3.861c-.455.062-2.008.204-3.494.204z" />
          </svg>
        </div>
      );
    case "linkedin":
      return (
        <div className={`${base} bg-[#0A66C2]`}>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </div>
      );
    case "pinterest":
      return (
        <div className={`${base} bg-[#E60023]`}>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.012-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
          </svg>
        </div>
      );
    case "snapchat":
      return (
        <div className={`${base} bg-[#FFFC00]`}>
          <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12 1.508-.149 2.629-.03 1.139-.09 2.294-.149 2.479-.06.24-.255.39-.465.39h-2.429c-.27 0-.509-.165-.629-.42-.075-.149-.12-.36-.149-.629-.06-.479-.12-1.569-.149-2.279-.03-.72-.09-1.95-.149-2.699-.045-.27-.24-.42-.465-.42H5.913c-.27 0-.509.165-.629.42-.075.149-.12.36-.149.629-.06.479-.12 1.569-.149 2.279-.03.72-.09 1.95-.149 2.699-.045.27-.24.42-.465.42H2.063c-.27 0-.509-.165-.629-.42-.075-.149-.12-.36-.149-.629-.06-.479-.12-1.569-.149-2.279-.03-.72-.09-1.95-.149-2.699-.045-.27-.24-.42-.465-.42-.225 0-.42.15-.465.42-.06.749-.12 1.979-.149 2.699-.03.71-.09 1.8-.149 2.279-.03.269-.075.48-.149.629-.12.255-.36.42-.629.42H.988c-.225 0-.42-.15-.465-.39-.06-.185-.12-1.34-.149-2.479-.03-1.121-.09-2.538-.149-2.629-1.872-.283-2.906-.702-3.146-1.271-.03-.076-.045-.15-.045-.225-.015-.239.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.014l.015-.015c.18-.344.21-.644.12-.868-.195-.45-.884-.675-1.333-.81-.135-.044-.255-.09-.344-.119-.824-.329-1.214-.719-1.214-1.168 0-.359.285-.689.734-.838.15-.06.33-.09.509-.09.12 0 .299.015.464.104.374.181.733.285 1.033.301.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847 1.583-3.545 4.94-3.821 5.93-3.821z" />
          </svg>
        </div>
      );
    default:
      return (
        <div className={`${base} bg-gray-400`}>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
      );
  }
};

const editNavItems = [
  { id: "basic", label: "Basic Details" },
  { id: "templates", label: "vCard Templates" },
  { id: "dynamic", label: "Dynamic vCard" },
  { id: "hours", label: "Business Hours" },
  { id: "qr", label: "Customize QR Code" },
  { id: "services", label: "Services" },
  { id: "products", label: "Products" },
  { id: "insta", label: "InstaEmbed" },
  { id: "linkedin", label: "LinkedInEmbed" },
  { id: "galleries", label: "Galleries" },
  { id: "blogs", label: "Blogs" },
  { id: "testimonials", label: "Testimonials" },
  { id: "iframes", label: "Iframes" },
  { id: "appointments", label: "Appointments" },
  { id: "social-links", label: "Social links - Website" },
  { id: "custom-links", label: "Custom Links" },
  { id: "banner", label: "Banner" },
  { id: "advanced", label: "Advanced" },
  { id: "fonts", label: "Fonts" },
  { id: "seo", label: "SEO" },
  { id: "terms", label: "Terms & Conditions" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "manage-section", label: "Manage Section" },
];

const APPOINTMENT_DAYS = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"] as const;
const BUSINESS_HOURS_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;
type BusinessHoursDay = (typeof BUSINESS_HOURS_DAYS)[number];
function getInitialBusinessHours(): Record<BusinessHoursDay, { enabled: boolean; start: string; end: string }> {
  const dayMap = BUSINESS_HOURS_DAYS.reduce(
    (acc, day) => {
      acc[day] = { enabled: false, start: "9:00 AM", end: "6:00 PM" };
      return acc;
    },
    {} as Record<BusinessHoursDay, { enabled: boolean; start: string; end: string }>
  );
  return dayMap;
}

function buildTimeOptions(): string[] {
  const options: string[] = [];
  const periods = ["AM", "PM"];
  const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  for (let p = 0; p < 2; p++) {
    for (const h of hours) {
      for (const m of [0, 15, 30, 45]) {
        options.push(`${h}:${m.toString().padStart(2, "0")} ${periods[p]}`);
      }
    }
  }
  return options;
}
const TIME_OPTIONS = buildTimeOptions();

/** Light gradients need dark placeholder content so it's visible */
function isLightTemplate(accent: string): boolean {
  return /from-(gray|sky|amber|rose|pink|lavender|stone|teal)-[123]00|to-white|via-sky-100|to-orange-200|to-pink-400|to-rose-500|to-pink-500/.test(accent);
}

/** Get a solid color from template accent for mobile preview (border, button, text) */
function getAccentPrimaryColor(accent: string): string {
  if (/emerald|teal|green/.test(accent)) return "#10b981";
  if (/lime/.test(accent)) return "#84cc16";
  if (/violet|purple/.test(accent)) return "#7c3aed";
  if (/amber|orange|yellow/.test(accent)) return "#f59e0b";
  if (/red|rose/.test(accent)) return "#e11d48";
  if (/blue|sky|indigo/.test(accent)) return "#3b82f6";
  if (/slate|gray|neutral|stone|zinc/.test(accent)) return "#64748b";
  if (/pink|fuchsia/.test(accent)) return "#ec4899";
  if (/cyan/.test(accent)) return "#06b6d4";
  return "#B4FF3B";
}

/** Get background color for Dynamic vCard from template accent (dark or light) */
function getAccentBgColor(accent: string): string {
  return isLightTemplate(accent) ? "#f1f5f9" : "#0f172a";
}

/** Slightly lighter/different shade for secondary background */
function getAccentBgSecondary(accent: string): string {
  return isLightTemplate(accent) ? "#e2e8f0" : "#1e293b";
}

/** Preview content type per template (screenshot-style: all show filled content like Dental Care / Boutique Shop) */
function getPreviewType(template: { id: number; name: string }): "flower" | "flower-shop" | "flower-snap" | "travel" | "travel-dark" | "personal" | "corporate" | "creative" | "generic" {
  const n = template.name.toLowerCase();
  // Executive Pro ko Flower-style preview ke sath dikhane ke liye
  if (n.includes("executive pro")) return "flower";
  if (n.includes("flower snap")) return "flower-snap";
  if (n.includes("flower garden") || n.includes("wedding planner") || n.includes("salon") || n.includes("boutique shop") || n.includes("floral") || n.includes("dental care")) return "flower";
  if (n.includes("flower shop") || (n.includes("garden") && !n.includes("flower garden"))) return "flower-shop";
  if (n.includes("travel explorer") || n.includes("travel agent")) return "travel";
  if (n.includes("tours") || n.includes("travel agency") || n.includes("horizon pro")) return "travel-dark";
  if (n.includes("executive") || n.includes("modern minimal") || n.includes("consulting") || n.includes("simple contact") || n.includes("nonprofit") || n.includes("insurance") || n.includes("restaurant") || n.includes("realtor") || n.includes("yoga") || n.includes("freelancer")) return "personal";
  if (n.includes("corporate") || n.includes("legal") || n.includes("finance pro")) return "corporate";
  if (n.includes("creative studio") || n.includes("marketing agency") || n.includes("agency bold")) return "creative";
  return "generic";
}

/** Content for mobile preview so it matches the selected template (includes Official Website & more) */
function getMobilePreviewContent(template: { id: number; name: string }): {
  name: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  extraLine?: string;
  officialWebsite?: string;
  address?: string;
  birthDate?: string;
  company?: string;
} {
  const pt = getPreviewType(template);
  const tName = template.name;
  const base = { ctaLabel: "Add to contact" as const };
  switch (pt) {
    case "flower-snap":
      return { ...base, name: "Flower Snap", subtitle: "Creative Flower & Garden.", description: "Best Plant Selling Company. Natural flowers and fresh arrangements. Visit Green Market Mumbai or order online.", ctaLabel: "Gallery", officialWebsite: "www.flowersnap.com", extraLine: "flowersnap@gmail.com · +91 98765 43210", address: "Green Market Mumbai" };
    case "flower":
      return { ...base, name: "Jenny Wilson", subtitle: "Flower Garden", description: "Elegant floral theme for boutiques and gardens. Contact for arrangements, events and custom bouquets. We deliver across the city.", officialWebsite: "www.flowergarden.com", extraLine: "jenny@gmail.com · +1234567890", address: "12th March, 1990 · Berlin, Germany" };
    case "flower-shop":
      return { ...base, name: "Flower Shop", subtitle: "Let Your Garden Bloom With Us", description: "Fresh blooms and custom arrangements. Visit our garden or order online. Same-day delivery available.", ctaLabel: "Gallery", officialWebsite: "www.bloomgarden.com", extraLine: "flowergarden@gmail.com · +44 20 7946 0958" };
    case "travel":
      return { ...base, name: "Bessie Cooper", subtitle: "Travel Agent", description: "Adventure and travel themed. Maps, itineraries and bespoke trips. Book your next journey with us.", ctaLabel: "Contact · Gallery", extraLine: "michael@gmail.com · +49 95864 12484", officialWebsite: "www.travelexplorer.com" };
    case "travel-dark":
      return { ...base, name: "Desi Miles", subtitle: "Tours & Travel Agency", description: "Every journey begins with a single step. Explore the world with us. Group tours and private getaways.", ctaLabel: "Contact · Gallery", extraLine: "advmur@gmail.com · +91888887700", officialWebsite: "www.desimiles.com" };
    case "personal":
      return { ...base, name: "Alex Morgan", subtitle: "Consultant · Freelancer", description: "Clean, professional profile. Get in touch for projects and collaboration. Available for consulting and workshops.", extraLine: "email@example.com · +1 234 567 890", officialWebsite: "www.alexmorgan.com", address: "New York, USA" };
    case "corporate":
      return { ...base, name: "Executive", subtitle: "Leadership · Board", description: "Professional corporate profile. Strategic advisory and board representation. contact@company.com for inquiries.", officialWebsite: "www.company.com", company: "Company Inc.", extraLine: "contact@company.com · +1 800 123 4567" };
    case "creative":
      return { ...base, name: "Creative Studio", subtitle: "Bold typography and visuals", description: "We create impactful designs and campaigns for brands worldwide. Branding, UI/UX and motion design.", officialWebsite: "www.creativestudio.com", extraLine: "hello@creativestudio.com" };
    default:
      return { ...base, name: "Jenny Wilson", subtitle: tName, description: "Property-focused layout with gallery and listings. Contact for viewings, valuations and investment opportunities.", extraLine: "jenny@gmail.com · +1234567890", address: "12th March, 1990 · Berlin, Germany", officialWebsite: "www.realestateplus.com" };
  }
}

const VCARD_TEMPLATES: { id: number; name: string; description: string; accent: string }[] = [
  {
    id: 11,
    name: "Cafe vCard",
    description: "Warm, inviting contact card for cafes and bistros.",
    accent: "from-amber-700 to-amber-900",
  },
  {
    id: 7,
    name: "Corporate vCard",
    description: "Professional vCard for businesses, agencies and teams.",
    accent: "from-blue-700 to-indigo-800",
  },
  {
    id: 3,
    name: "Creative vCard",
    description: "Bold portfolio vCard for designers, studios and creators.",
    accent: "from-violet-600 to-purple-800",
  },
  {
    id: 1,
    name: "Executive vCard",
    description: "Clean leadership vCard for founders, CXOs and managers.",
    accent: "from-slate-700 to-slate-900",
  },
  {
    id: 12,
    name: "Fitness vCard",
    description: "Energetic vCard for fitness trainers, gyms and coaches.",
    accent: "from-rose-600 to-red-700",
  },
  {
    id: 6,
    name: "Floral vCard",
    description: "Elegant vCard for florists, decorators and boutiques.",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: 10,
    name: "Legal vCard",
    description: "Formal vCard for lawyers, firms and legal consultants.",
    accent: "from-slate-800 to-slate-950",
  },
  {
    id: 9,
    name: "Medical vCard",
    description: "Trust-focused vCard for clinics, doctors and healthcare.",
    accent: "from-cyan-600 to-blue-700",
  },
  {
    id: 2,
    name: "Minimal vCard",
    description: "Simple, minimal vCard suitable for any profession.",
    accent: "from-gray-100 to-white",
  },
  {
    id: 8,
    name: "Photo vCard",
    description: "Image-first vCard for photographers and visual artists.",
    accent: "from-neutral-800 to-black",
  },
  {
    id: 4,
    name: "Property vCard",
    description: "Listing-friendly vCard for real estate and rentals.",
    accent: "from-amber-600 to-orange-700",
  },
  {
    id: 5,
    name: "Travel vCard",
    description: "Travel themed vCard for agents, guides and tours.",
    accent: "from-sky-600 to-blue-800",
  },
];

function getInitialAppointmentSchedule(): Record<
  string,
  { enabled: boolean; slots: { id: string; start: string; end: string }[] }
> {
  const o: Record<string, { enabled: boolean; slots: { id: string; start: string; end: string }[] }> = {};
  APPOINTMENT_DAYS.forEach((d, i) => {
    o[d] = { enabled: false, slots: [{ id: `slot-${i}-0`, start: "12:00 AM", end: "12:15 AM" }] };
  });
  return o;
}

type EditVCardContentProps = {
  vcardId?: string;
};

export function EditVCardContent({ vcardId }: EditVCardContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { vCards, setVCards } = useVCards();
  const currentCard = vcardId ? vCards.find((c) => c.id === vcardId) : undefined;
  const showCreatedSuccess = searchParams.get("created") === "1";

  const [activeSection, setActiveSection] = useState<string>("basic");
  const [activeTab, setActiveTab] = useState<"basic" | "personal" | "other">("basic");
  const [coverType, setCoverType] = useState<"Image" | "Video" | "YouTube Link">("Image");
  const [basicDetailsUpdated, setBasicDetailsUpdated] = useState(false);
  const [socialLinksView, setSocialLinksView] = useState<"social" | "custom">("social");
  const [socialLinksForm, setSocialLinksForm] = useState<Record<string, string>>({});

  // simple placeholder states where needed
  const [servicesSearch, setServicesSearch] = useState("");
  const [displayServiceEnquiryButton, setDisplayServiceEnquiryButton] = useState(true);
  const [displayImagesWithSlider, setDisplayImagesWithSlider] = useState(false);
  const [showServicesSuccessToast, setShowServicesSuccessToast] = useState(false);
  const [servicesSuccessMessage, setServicesSuccessMessage] = useState("");
  const [servicesToastProgress, setServicesToastProgress] = useState(100);
  const servicesToastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesProgressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [showNewServiceModal, setShowNewServiceModal] = useState(false);
  const [newServiceName, setNewServiceName] = useState("");
  const [newServiceUrl, setNewServiceUrl] = useState("");
  const [newServiceDescription, setNewServiceDescription] = useState("");
  const [newServiceIconPreview, setNewServiceIconPreview] = useState<string | null>(null);
  const newServiceIconInputRef = useRef<HTMLInputElement>(null);
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [previewService, setPreviewService] = useState<{
    name: string;
    description: string;
    url?: string;
    icon: string;
  } | null>(null);
  const [productsSearch, setProductsSearch] = useState("");
  const [showNewProductModal, setShowNewProductModal] = useState(false);
  const [newProductName, setNewProductName] = useState("");
  const [newProductCurrency, setNewProductCurrency] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductSort, setNewProductSort] = useState("");
  const [newProductUrl, setNewProductUrl] = useState("");
  const [newProductDescription, setNewProductDescription] = useState("");
  const [newProductIconPreview, setNewProductIconPreview] = useState<string | null>(null);
  const newProductIconInputRef = useRef<HTMLInputElement>(null);
  const [displayProductEnquiryButton, setDisplayProductEnquiryButton] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [previewProduct, setPreviewProduct] = useState<{
    name: string;
    description?: string;
    price?: string;
    currency?: string;
    url?: string;
    icon: string;
  } | null>(null);
  const [productsShowPerPage, setProductsShowPerPage] = useState(10);
  const [instaSearch, setInstaSearch] = useState("");
  const [showAddEmbedTagModal, setShowAddEmbedTagModal] = useState(false);
  const [showEmbedGuideModal, setShowEmbedGuideModal] = useState(false);
  const [embedGuideType, setEmbedGuideType] = useState<"instagram" | "linkedin">("instagram");
  const [addEmbedTagType, setAddEmbedTagType] = useState("");
  const [addEmbedTagValue, setAddEmbedTagValue] = useState("");
  const [linkedinSearch, setLinkedinSearch] = useState("");
  const [galleriesSearch, setGalleriesSearch] = useState("");
  const [showNewGalleryModal, setShowNewGalleryModal] = useState(false);
  const [newGalleryType, setNewGalleryType] = useState("");
  const [newGalleryImagePreview, setNewGalleryImagePreview] = useState<string | null>(null);
  const newGalleryImageInputRef = useRef<HTMLInputElement>(null);
  const [blogsSearch, setBlogsSearch] = useState("");
  const [showNewBlogModal, setShowNewBlogModal] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [previewBlog, setPreviewBlog] = useState<{ title: string; description: string; icon: string } | null>(null);
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogDescription, setNewBlogDescription] = useState("");
  const [newBlogIconPreview, setNewBlogIconPreview] = useState<string | null>(null);
  const newBlogIconInputRef = useRef<HTMLInputElement>(null);
  const [blogFormErrors, setBlogFormErrors] = useState<{ title?: string; description?: string; icon?: string }>({});
  const [testimonialsSearch, setTestimonialsSearch] = useState("");
  const [showNewTestimonialModal, setShowNewTestimonialModal] = useState(false);
  const [editingTestimonialId, setEditingTestimonialId] = useState<string | null>(null);
  const [newTestimonialName, setNewTestimonialName] = useState("");
  const [newTestimonialRole, setNewTestimonialRole] = useState("");
  const [newTestimonialQuote, setNewTestimonialQuote] = useState("");
  const [newTestimonialImagePreview, setNewTestimonialImagePreview] = useState<string | null>(null);
  const newTestimonialImageInputRef = useRef<HTMLInputElement>(null);
  const [testimonialFormErrors, setTestimonialFormErrors] = useState<{
    name?: string;
    role?: string;
    quote?: string;
    image?: string;
  }>({});
  const [iframesSearch, setIframesSearch] = useState("");
  const [customLinksSearch, setCustomLinksSearch] = useState("");
  const [customLinksShowPerPage, setCustomLinksShowPerPage] = useState(10);
  const [termsContent, setTermsContent] = useState("");
  const [privacyContent, setPrivacyContent] = useState("");
  const [qrDownloadSize, setQrDownloadSize] = useState(200);
  const [selectedTemplateId, setSelectedTemplateId] = useState<number | null>(null);
  const [dynamicPrimaryColor, setDynamicPrimaryColor] = useState("#B4FF3B");
  const [dynamicBgSecondary, setDynamicBgSecondary] = useState("#193743");
  const [dynamicBgColor, setDynamicBgColor] = useState("#0c2833");
  const [dynamicButtonTextColor, setDynamicButtonTextColor] = useState("#332b2b");
  const [dynamicLabelColor, setDynamicLabelColor] = useState("#ffffff");
  const [dynamicDescriptionColor, setDynamicDescriptionColor] = useState("#a6b8c0");
  const [stickyButtonPosition, setStickyButtonPosition] = useState<"left" | "right">("right");
  const [selectedButtonStyle, setSelectedButtonStyle] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10>(1);
  const termsEditorRef = useRef<HTMLDivElement | null>(null);
  const privacyEditorRef = useRef<HTMLDivElement | null>(null);

  const handleRichTextCommand = (command: "bold" | "italic" | "underline") => {
    if (typeof window === "undefined") return;
    document.execCommand(command, false);
  };

  const handleRichTextInput = (target: "terms" | "privacy") => {
    const ref = target === "terms" ? termsEditorRef : privacyEditorRef;
    const el = ref.current;
    if (!el) return;
    const html = el.innerHTML;
    if (target === "terms") {
      setTermsContent(html);
    } else {
      setPrivacyContent(html);
    }
  };

  const handleTermsSave = () => {
    if (!vcardId || !currentCard) return;
    setVCards((prev) =>
      prev.map((c) => (c.id === vcardId ? { ...c, termsHtml: termsContent } : c))
    );
    setTermsSaveSuccess(true);
  };

  const handlePrivacySave = () => {
    if (!vcardId || !currentCard) return;
    setVCards((prev) =>
      prev.map((c) => (c.id === vcardId ? { ...c, privacyHtml: privacyContent } : c))
    );
    setPrivacySaveSuccess(true);
  };

  const handleNewBlogSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: { title?: string; description?: string; icon?: string } = {};
    if (!newBlogTitle.trim()) errors.title = "Title is required.";
    if (!newBlogDescription.trim()) errors.description = "Description is required.";
    if (!newBlogIconPreview) errors.icon = "Blog icon is required.";
    setBlogFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    if (!vcardId || !currentCard) return;

    if (editingBlogId) {
      // Update existing blog
      setVCards((prev) =>
        prev.map((c) =>
          c.id === vcardId
            ? {
                ...c,
                blogs: (c.blogs ?? []).map((b) =>
                  b.id === editingBlogId
                    ? {
                        ...b,
                        title: newBlogTitle.trim(),
                        description: newBlogDescription.trim(),
                        icon: newBlogIconPreview!,
                      }
                    : b
                ),
              }
            : c
        )
      );
      setServicesSuccessMessage("vCard blog updated successfully.");
    } else {
      // Create new blog
      const newBlog = {
        id: `blog-${Date.now()}`,
        title: newBlogTitle.trim(),
        description: newBlogDescription.trim(),
        icon: newBlogIconPreview!,
      };

      setVCards((prev) =>
        prev.map((c) =>
          c.id === vcardId ? { ...c, blogs: [...(c.blogs ?? []), newBlog] } : c
        )
      );
      setServicesSuccessMessage("vCard blog created successfully.");
    }

    setShowServicesSuccessToast(true);

    setShowNewBlogModal(false);
    setEditingBlogId(null);
    setNewBlogTitle("");
    setNewBlogDescription("");
    setNewBlogIconPreview(null);
    setBlogFormErrors({});
  };

  const handleNewTestimonialSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: {
      name?: string;
      role?: string;
      quote?: string;
      image?: string;
    } = {};
    if (!newTestimonialName.trim()) errors.name = "Name is required.";
    if (!newTestimonialQuote.trim()) errors.quote = "Description is required.";
    if (!newTestimonialImagePreview) errors.image = "Image is required.";
    setTestimonialFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    if (!vcardId || !currentCard) return;

    if (editingTestimonialId) {
      setVCards((prev) =>
        prev.map((c) =>
          c.id === vcardId
            ? {
                ...c,
                testimonials: (c as any).testimonials
                  ? (c as any).testimonials.map((t: any) =>
                      t.id === editingTestimonialId
                        ? {
                            ...t,
                            name: newTestimonialName.trim(),
                            role: newTestimonialRole.trim() || "Client",
                            quote: newTestimonialQuote.trim(),
                            image: newTestimonialImagePreview!,
                          }
                        : t
                    )
                  : [],
              }
            : c
        )
      );
      setServicesSuccessMessage("Testimonial updated successfully.");
    } else {
      const newTestimonial = {
        id: `testimonial-${Date.now()}`,
        name: newTestimonialName.trim(),
        role: newTestimonialRole.trim() || "Client",
        quote: newTestimonialQuote.trim(),
        image: newTestimonialImagePreview!,
      };
      setVCards((prev) =>
        prev.map((c) =>
          c.id === vcardId
            ? {
                ...c,
                testimonials: [...(((c as any).testimonials as any[]) ?? []), newTestimonial],
              }
            : c
        )
      );
      setServicesSuccessMessage("Testimonial created successfully.");
    }

    setShowServicesSuccessToast(true);
    setShowNewTestimonialModal(false);
    setEditingTestimonialId(null);
    setNewTestimonialName("");
    setNewTestimonialRole("");
    setNewTestimonialQuote("");
    setNewTestimonialImagePreview(null);
    setTestimonialFormErrors({});
  };
  // Sync Dynamic vCard colors from selected vCard template (so selected template shows in Dynamic vCard)
  useEffect(() => {
    if (selectedTemplateId == null) return;
    const template = VCARD_TEMPLATES.find((t) => t.id === selectedTemplateId);
    if (!template) return;
    const primary = getAccentPrimaryColor(template.accent);
    setDynamicPrimaryColor(primary);
    setDynamicButtonTextColor(isLightTemplate(template.accent) ? "#332b2b" : "#ffffff");
    setDynamicBgColor(getAccentBgColor(template.accent));
    setDynamicBgSecondary(getAccentBgSecondary(template.accent));
    setDynamicLabelColor(isLightTemplate(template.accent) ? "#1e293b" : "#f8fafc");
    setDynamicDescriptionColor(isLightTemplate(template.accent) ? "#64748b" : "#94a3b8");
  }, [selectedTemplateId]);
  const [useQrConfiguration, setUseQrConfiguration] = useState(false);
  const [qrCodeColor, setQrCodeColor] = useState("#000000");
  const [qrBgColor, setQrBgColor] = useState("#ffffff");
  const [qrCreateSuccess, setQrCreateSuccess] = useState(false);
  const [templateSaveSuccess, setTemplateSaveSuccess] = useState(false);
  const [termsSaveSuccess, setTermsSaveSuccess] = useState(false);
  const [privacySaveSuccess, setPrivacySaveSuccess] = useState(false);
  const [seoSaveSuccess, setSeoSaveSuccess] = useState(false);
  const [fontFamily, setFontFamily] = useState<"default" | "outfit" | "inter" | "poppins" | "roboto">("default");
  const [fontSizePx, setFontSizePx] = useState(16);
  const profileImageInputRef = useRef<HTMLInputElement>(null);
  const [basicAlias, setBasicAlias] = useState("");
  const [basicAliasError, setBasicAliasError] = useState<string | null>(null);
  useEffect(() => {
    if (currentCard) {
      setQrCodeColor(currentCard.qrCodeColor ?? "#000000");
      setQrBgColor(currentCard.qrBgColor ?? "#ffffff");
      if (currentCard.selectedTemplateId != null) {
        setSelectedTemplateId(currentCard.selectedTemplateId);
      }
      const aliasFromSlug = currentCard.slug;
      const aliasFromPreview = currentCard.previewUrl
        .replace(/^https?:\/\/[^/]+/, "")
        .replace(/^\/+/, "");
      setBasicAlias((aliasFromSlug || aliasFromPreview || "").toLowerCase());
      setTermsContent(currentCard.termsHtml ?? "");
      setPrivacyContent(currentCard.privacyHtml ?? "");
      setDisplayProductEnquiryButton(currentCard.displayProductEnquiryButton ?? false);
      if (termsEditorRef.current) {
        termsEditorRef.current.innerHTML = currentCard.termsHtml ?? "";
      }
      if (privacyEditorRef.current) {
        privacyEditorRef.current.innerHTML = currentCard.privacyHtml ?? "";
      }

      // initialise social links form from current card
      const existingSocial = (currentCard.socialLinks ?? []) as { platform: string; url: string }[];
      const nextSocial: Record<string, string> = {};
      SOCIAL_LINKS.forEach((item) => {
        const match = existingSocial.find((l) => l.platform === item.id);
        nextSocial[item.id] = match?.url ?? "";
      });
      setSocialLinksForm(nextSocial);
    }
  }, [
    currentCard?.id,
    currentCard?.qrCodeColor,
    currentCard?.qrBgColor,
    currentCard?.selectedTemplateId,
    currentCard?.termsHtml,
    currentCard?.privacyHtml,
  ]);
  useEffect(() => {
    if (!qrCreateSuccess) return;
    const t = setTimeout(() => setQrCreateSuccess(false), 4000);
    return () => clearTimeout(t);
  }, [qrCreateSuccess]);
  useEffect(() => {
    if (!templateSaveSuccess) return;
    const t = setTimeout(() => setTemplateSaveSuccess(false), 3000);
    return () => clearTimeout(t);
  }, [templateSaveSuccess]);
  useEffect(() => {
    if (!termsSaveSuccess) return;
    const t = setTimeout(() => setTermsSaveSuccess(false), 3000);
    return () => clearTimeout(t);
  }, [termsSaveSuccess]);
  useEffect(() => {
    if (!privacySaveSuccess) return;
    const t = setTimeout(() => setPrivacySaveSuccess(false), 3000);
    return () => clearTimeout(t);
  }, [privacySaveSuccess]);
  useEffect(() => {
    if (!seoSaveSuccess) return;
    const t = setTimeout(() => setSeoSaveSuccess(false), 3000);
    return () => clearTimeout(t);
  }, [seoSaveSuccess]);
  useEffect(() => {
    if (!currentCard) return;
    if (currentCard.fontFamily) setFontFamily(currentCard.fontFamily);
    if (currentCard.fontSizePx) setFontSizePx(currentCard.fontSizePx);
  }, [currentCard?.id, currentCard?.fontFamily, currentCard?.fontSizePx]);
  const SERVICES_TOAST_DURATION_MS = 2000; // green line 2 sec
  useEffect(() => {
    if (!showServicesSuccessToast) return;
    setServicesToastProgress(100);
    const startTime = Date.now();
    servicesProgressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / SERVICES_TOAST_DURATION_MS) * 100);
      setServicesToastProgress(remaining);
    }, 50);
    servicesToastTimerRef.current = setTimeout(() => {
      setShowServicesSuccessToast(false);
      if (servicesProgressIntervalRef.current) clearInterval(servicesProgressIntervalRef.current);
    }, SERVICES_TOAST_DURATION_MS + 500);
    return () => {
      if (servicesToastTimerRef.current) clearTimeout(servicesToastTimerRef.current);
      if (servicesProgressIntervalRef.current) clearInterval(servicesProgressIntervalRef.current);
    };
  }, [showServicesSuccessToast]);
  const [showAdvancedPassword, setShowAdvancedPassword] = useState(false);
  const [advancedPassword, setAdvancedPassword] = useState("");
  const [removeBranding, setRemoveBranding] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [manageSectionSections, setManageSectionSections] = useState({
    header: true,
    galleries: true,
    blogs: true,
    map: true,
    linkedinFeed: true,
    contact: true,
    products: true,
    businessHours: true,
    banner: true,
    iframes: true,
    services: true,
    testimonials: true,
    appointments: true,
    instagramFeed: true,
    newsletterPopup: true,
  });
  const [otherToggles, setOtherToggles] = useState({
    languageLocalization: true,
    inquiryForm: true,
    downloadQrIcon: true,
    qrSection: true,
    userAffiliation: false,
    addToContact: true,
    hideStickyBar: false,
    whatsappShare: false,
  });

  const [appointmentType, setAppointmentType] = useState<"free" | "paid">("free");
  const [appointmentServices, setAppointmentServices] = useState<{ id: string; serviceName: string; amount: string }[]>(
    () => [{ id: "svc-0", serviceName: "", amount: "" }]
  );
  const [appointmentSchedule, setAppointmentSchedule] = useState(() => getInitialAppointmentSchedule());
  const [businessHoursWeekFormat, setBusinessHoursWeekFormat] = useState<"monday-sunday" | "sunday-saturday">("monday-sunday");
  const [businessHours, setBusinessHours] = useState(() => getInitialBusinessHours());
  const setBusinessHoursDay = (day: BusinessHoursDay, patch: Partial<{ enabled: boolean; start: string; end: string }>) => {
    setBusinessHours((prev) => ({ ...prev, [day]: { ...prev[day], ...patch } }));
  };

  const addAppointmentService = () => {
    setAppointmentServices((prev) => [...prev, { id: `svc-${Date.now()}`, serviceName: "", amount: "" }]);
  };
  const removeAppointmentService = (id: string) => {
    setAppointmentServices((prev) => (prev.length > 1 ? prev.filter((s) => s.id !== id) : prev));
  };
  const updateAppointmentService = (id: string, field: "serviceName" | "amount", value: string) => {
    setAppointmentServices((prev) => prev.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  const setDayEnabled = (day: string, enabled: boolean) => {
    setAppointmentSchedule((prev) => ({ ...prev, [day]: { ...prev[day], enabled } }));
  };
  const addSlot = (day: string) => {
    setAppointmentSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: [...prev[day].slots, { id: `slot-${Date.now()}`, start: "12:00 AM", end: "12:15 AM" }],
      },
    }));
  };
  const removeSlot = (day: string, slotId: string) => {
    setAppointmentSchedule((prev) => {
      const slots = prev[day].slots.filter((s) => s.id !== slotId);
      return { ...prev, [day]: { ...prev[day], slots: slots.length ? slots : [{ id: `slot-${day}-0`, start: "12:00 AM", end: "12:15 AM" }] } };
    });
  };
  const updateSlot = (day: string, slotId: string, field: "start" | "end", value: string) => {
    setAppointmentSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: prev[day].slots.map((s) => (s.id === slotId ? { ...s, [field]: value } : s)),
      },
    }));
  };
  const copyDayToOthers = (day: string) => {
    const slots = appointmentSchedule[day].slots;
    setAppointmentSchedule((prev) => {
      const next = { ...prev };
      APPOINTMENT_DAYS.forEach((d) => {
        if (d !== day)
          next[d] = {
            ...prev[d],
            slots: slots.map((s, i) => ({ id: `slot-${d}-${Date.now()}-${i}`, start: s.start, end: s.end })),
          };
      });
      return next;
    });
  };

  const setOtherToggle = (key: keyof typeof otherToggles) => {
    setOtherToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePreviewClick = () => {
    const pathOrUrl = currentCard?.previewUrl || (basicAlias ? `/${basicAlias}` : "");
    if (!pathOrUrl || typeof window === "undefined") return;

    const absoluteUrl = pathOrUrl.startsWith("http")
      ? pathOrUrl
      : `${window.location.origin}${
          pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`
        }`;

    window.open(absoluteUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Header: Edit vCard title + Back / Preview */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="page-title">Edit vCard</h1>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePreviewClick}
            className="btn-primary-premium inline-flex items-center gap-2"
          >
            <span className="hidden sm:inline">Preview</span>
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="btn-primary-premium inline-flex items-center gap-2"
          >
            <span className="hidden sm:inline">Back</span>
          </button>
        </div>
      </div>

      {/* Success banners */}
      {basicDetailsUpdated && (
        <div
          className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800 dark:border-green-800 dark:bg-green-950/40 dark:text-green-200"
          role="alert"
        >
          Basic Details updated successfully.
        </div>
      )}
      {!basicDetailsUpdated && showCreatedSuccess && (
        <div
          className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800 dark:border-green-800 dark:bg-green-950/40 dark:text-green-200"
          role="alert"
        >
          vCard created successfully.
        </div>
      )}
      {qrCreateSuccess && (
        <div
          className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800 dark:border-green-800 dark:bg-green-950/40 dark:text-green-200"
          role="alert"
        >
          Create QR successfully.
        </div>
      )}
      {termsSaveSuccess && (
        <div
          className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800 dark:border-green-800 dark:bg-green-950/40 dark:text-green-200"
          role="alert"
        >
          Terms &amp; Conditions updated successfully.
        </div>
      )}
      {privacySaveSuccess && (
        <div
          className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800 dark:border-green-800 dark:bg-green-950/40 dark:text-green-200"
          role="alert"
        >
          Privacy Policy updated successfully.
        </div>
      )}
      {seoSaveSuccess && (
        <div
          className="mb-6 rounded-lg border border-green-200 bg-green-500 px-4 py-3 text-sm font-medium text-white dark:border-green-700 dark:bg-green-600"
          role="alert"
        >
          SEO updated successfully.
        </div>
      )}

      {/* Global success toast (services, blogs, etc.) */}
      {showServicesSuccessToast && (
        <div
          className="fixed top-4 right-4 z-[100000] w-full max-w-md"
          role="alert"
          aria-live="polite"
        >
          <div className="rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
            <div className="flex items-start gap-3 px-5 pt-5 pb-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="min-w-0 flex-1 pr-8">
                <p className="text-sm font-bold text-gray-900 dark:text-white">Successful</p>
                <p className="mt-1 text-sm font-normal text-gray-600 dark:text-gray-400">{servicesSuccessMessage}</p>
              </div>
              <button
                type="button"
                onClick={() => setShowServicesSuccessToast(false)}
                className="absolute right-3 top-3 rounded p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="h-1.5 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
              <div
                className="h-full rounded-b bg-green-500 transition-[width] duration-75 ease-linear"
                style={{ width: `${servicesToastProgress}%` }}
              />
            </div>
            <div className="px-5 pb-5 pt-3 flex justify-end">
              <button
                type="button"
                onClick={() => setShowServicesSuccessToast(false)}
                className="rounded-lg bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-200 dark:hover:bg-blue-800/50"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left sidebar */}
        <nav className="lg:w-56 shrink-0">
          <div className="surface-premium overflow-hidden">
            {editNavItems.map((item) => {
              const isManageSection = item.id === "manage-section";
              const isCustomLinks = item.id === "custom-links";
              const isActive = activeSection === item.id;
              const activeBg = (isManageSection || isCustomLinks) && isActive ? "bg-[#4E38EE]" : isActive ? "bg-brand-500" : "";
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSection(item.id)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-colors rounded-lg ${
                    isActive ? `${activeBg} text-white` : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <EditNavIcon id={item.id} active={isActive} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Main content - single card, scrollable on hover */}
        <div className="flex-1 flex flex-col min-h-0 max-h-[calc(100vh-6rem)]">
          <div className="surface-premium group/card p-6 md:p-8 flex-1 min-h-0 overflow-x-hidden overflow-y-auto rounded-2xl transition-shadow hover:shadow-lg [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 dark:hover:[&::-webkit-scrollbar-thumb]:bg-gray-500">
            {/* Basic section with tabs */}
            {activeSection === "basic" && (
              <>
                <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                  <div className="flex gap-6">
                    {[
                      { id: "basic", label: "Basic Details" },
                      { id: "personal", label: "Personal Details" },
                      { id: "other", label: "Other Configurations" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id as typeof activeTab)}
                        className={`relative -mb-px px-1 pb-3 text-sm font-medium transition-colors ${
                          activeTab === tab.id
                            ? "text-brand-600 dark:text-brand-400"
                            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        }`}
                      >
                        {tab.label}
                        {activeTab === tab.id && (
                          <span className="absolute inset-x-0 -bottom-[1px] h-0.5 rounded-full bg-brand-500" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {activeTab === "basic" && (
                  <form
                    className="space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!vcardId || !currentCard) return;
                      const rawAlias = basicAlias.trim() || "my-vcard";
                      const alias = rawAlias.toLowerCase();
                      const aliasExists = vCards.some((card) => {
                        if (card.id === vcardId) return false;
                        const slug = (card.slug ??
                          card.previewUrl.replace(/^https?:\/\/[^/]+/, "").replace(/^\/+/, "")).toLowerCase();
                        return slug === alias;
                      });
                      if (aliasExists) {
                        setBasicAliasError("This URL Alias already exists. Please choose another.");
                        return;
                      }
                      setBasicAliasError(null);

                      setVCards((prev) =>
                        prev.map((card) =>
                          card.id === vcardId
                            ? {
                                ...card,
                                slug: alias,
                                previewUrl: `/${alias}`,
                              }
                            : card
                        )
                      );

                      setBasicDetailsUpdated(true);
                      setActiveTab("personal");
                    }}
                  >
                    {/* URL Alias - full width with help + refresh */}
                    <div>
                      <label className={`${labelClass} inline-flex items-center gap-1.5`}>
                        URL Alias <span className="text-red-500">*</span>
                        <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" aria-label="Help">
                          <HelpIcon />
                        </button>
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          className={`${inputClass} ${basicAliasError ? "border-red-500 focus:ring-red-500" : ""}`}
                          defaultValue={basicAlias}
                          onChange={(e) => setBasicAlias(e.target.value)}
                          placeholder="alias"
                        />
                        <button
                          type="button"
                          className="shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                          aria-label="Refresh alias"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </button>
                      </div>
                      {basicAliasError && (
                        <p className="mt-1 text-xs text-red-500">{basicAliasError}</p>
                      )}
                    </div>

                    {/* vCard Name */}
                    <div>
                      <label className={labelClass}>
                        vCard Name <span className="text-red-500">*</span>
                      </label>
                      <input type="text" className={inputClass} defaultValue="website builder" placeholder="Enter vCard name" />
                    </div>

                    {/* Two columns: Description (left) | Occupation, Cover Type, Cover Image, Profile Image (right) */}
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Left: Description with rich text toolbar */}
                      <div className="lg:col-span-2 space-y-2">
                        <label className={labelClass}>Description:</label>
                        <div className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
                          {/* Rich text toolbar */}
                          <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 px-2 py-1.5">
                            <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" title="Bold">
                              <span className="font-bold text-sm">B</span>
                            </button>
                            <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 italic" title="Italic">
                              <span className="text-sm">I</span>
                            </button>
                            <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 underline" title="Underline">
                              <span className="text-sm">U</span>
                            </button>
                            <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 line-through" title="Strikethrough">
                              <span className="text-sm">S</span>
                            </button>
                            <span className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-0.5" />
                            <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" title="Quote">
                              <span className="text-sm">&quot;</span>
                            </button>
                            <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" title="Code">
                              <span className="text-xs">&lt; /&gt;</span>
                            </button>
                            <select className="ml-1 h-8 min-w-[80px] rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 px-2">
                              <option>Normal</option>
                            </select>
                            <span className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-0.5" />
                            <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" title="Text color">
                              <span className="text-sm font-semibold">A</span>
                            </button>
                            <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" title="Highlight">
                              <span className="text-sm font-semibold">A</span>
                            </button>
                          </div>
                          <textarea
                            className="w-full min-h-[120px] px-4 py-3 text-sm text-gray-900 dark:text-white bg-transparent border-0 focus:ring-0 resize-none placeholder-gray-400"
                            placeholder="Write something..."
                            defaultValue="fbvjhgf"
                          />
                        </div>
                        <button type="button" className="text-sm text-brand-600 dark:text-brand-400 hover:underline inline-flex items-center gap-1">
                          ✨ Generate Description with AI
                        </button>
                      </div>

                      {/* Right: Occupation, Cover Type, conditional Cover Image/Video/YouTube, Profile Image */}
                      <div className="space-y-4">
                        <div>
                          <label className={labelClass}>Occupation:</label>
                          <input type="text" className={inputClass} placeholder="Enter Occupation" />
                        </div>
                        <div>
                          <label className={labelClass}>Cover Type:</label>
                          <select className={inputClass} value={coverType} onChange={(e) => setCoverType(e.target.value as "Image" | "Video" | "YouTube Link")}>
                            <option>Image</option>
                            <option>Video</option>
                            <option>YouTube Link</option>
                          </select>
                        </div>
                        {coverType === "Image" && (
                          <div>
                            <label className={`${labelClass} inline-flex items-center gap-1.5`}>
                              Cover Image:
                              <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" aria-label="Help">
                                <HelpIcon />
                              </button>
                            </label>
                            <div className="relative mt-1.5 flex items-center justify-center h-24 w-full rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 overflow-hidden group">
                              <div className="absolute inset-0 bg-[linear-gradient(135deg,#1e293b_0%,#334155_50%,#475569_100%)]" />
                              <button
                                type="button"
                                className="absolute top-1.5 right-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 z-10"
                                aria-label="Edit cover"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              </button>
                            </div>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Allowed file types: png, jpg, jpeg.</p>
                          </div>
                        )}
                        {coverType === "Video" && (
                          <div>
                            <label className={`${labelClass} inline-flex items-center gap-1.5`}>
                              Cover Video:
                              <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" aria-label="Help">
                                <HelpIcon />
                              </button>
                            </label>
                            <div className="relative mt-1.5 flex items-center justify-center h-40 w-40 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 overflow-hidden group">
                              <svg className="w-14 h-14 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                              <button
                                type="button"
                                className="absolute top-1.5 right-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 z-10"
                                aria-label="Edit cover video"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              </button>
                            </div>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Allowed file types: mp4.</p>
                          </div>
                        )}
                        {coverType === "YouTube Link" && (
                          <div>
                            <label className={`${labelClass} inline-flex items-center gap-1.5`}>
                              YouTube URL:
                              <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" aria-label="Help">
                                <HelpIcon />
                              </button>
                            </label>
                            <input type="url" className={inputClass} placeholder="https://www.youtube.com/watch?v=..." />
                          </div>
                        )}
                        <div>
                          <label className={`${labelClass} inline-flex items-center gap-1.5`}>
                            Profile Image:
                            <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" aria-label="Help">
                              <HelpIcon />
                            </button>
                          </label>
                          <input
                            ref={profileImageInputRef}
                            type="file"
                            accept="image/png,image/jpeg,image/jpg"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (!file || !vcardId || !currentCard) return;
                              const reader = new FileReader();
                              reader.onload = () => {
                                const dataUrl = reader.result as string;
                                setVCards((prev) =>
                                  prev.map((c) => (c.id === vcardId ? { ...c, image: dataUrl } : c))
                                );
                              };
                              reader.readAsDataURL(file);
                              e.target.value = "";
                            }}
                          />
                          <div className="relative mt-1.5 flex items-center justify-center h-28 w-28 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 overflow-hidden group">
                            {currentCard?.image ? (
                              <Image
                                src={currentCard.image}
                                alt="Profile"
                                fill
                                className="object-cover"
                                sizes="112px"
                                unoptimized={currentCard.image.startsWith("data:")}
                              />
                            ) : (
                              <svg className="w-14 h-14 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                              </svg>
                            )}
                            <button
                              type="button"
                              onClick={() => profileImageInputRef.current?.click()}
                              className="absolute top-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 z-10"
                              aria-label="Edit profile image"
                            >
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </button>
                          </div>
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Allowed file types: png, jpg, jpeg. Ye photo vCards list pe bhi dikhegi.</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button
                        type="button"
                        className="btn-secondary-premium inline-flex items-center justify-center"
                      >
                        Discard
                      </button>
                      <button
                        type="submit"
                        className="btn-primary-premium inline-flex items-center justify-center"
                      >
                        Save &amp; Next
                      </button>
                    </div>
                  </form>
                )}

                {activeTab === "personal" && (
                  <form className="space-y-5">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">vCard Details</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Left column */}
                      <div className="space-y-4">
                        <div>
                          <label className={labelClass}>
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input type="text" className={inputClass} placeholder="Enter First Name" />
                        </div>
                        <div>
                          <label className={labelClass}>Email:</label>
                          <input type="email" className={inputClass} placeholder="Enter Email Address" />
                        </div>
                        <div>
                          <label className={labelClass}>Alternate Email:</label>
                          <input type="email" className={inputClass} placeholder="Alternate Email" />
                        </div>
                        <div>
                          <label className={labelClass}>Location:</label>
                          <textarea className={`${inputClass} h-24 resize-y min-h-[80px]`} placeholder="Enter Your Location" />
                        </div>
                        <div>
                          <label className={labelClass}>Location URL:</label>
                          <input type="url" className={inputClass} placeholder="Enter Your Location URL" />
                        </div>
                        <div>
                          <label className={labelClass}>Company:</label>
                          <input type="text" className={inputClass} placeholder="Enter Company Name" />
                        </div>
                      </div>
                      {/* Right column */}
                      <div className="space-y-4">
                        <div>
                          <label className={labelClass}>
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input type="text" className={inputClass} placeholder="Enter Last Name" />
                        </div>
                        <div>
                          <label className={labelClass}>Phone:</label>
                          <div className="flex gap-2">
                            <select className={`${inputClass} w-[100px] shrink-0`}>
                              <option value="+91">🇮🇳 +91</option>
                              <option value="+1">+1</option>
                              <option value="+44">+44</option>
                            </select>
                            <input type="tel" className={`${inputClass} flex-1`} placeholder="Enter Phone Number" />
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>Alternate Phone:</label>
                          <div className="flex gap-2">
                            <select className={`${inputClass} w-[100px] shrink-0`}>
                              <option value="+91">🇮🇳 +91</option>
                              <option value="+1">+1</option>
                              <option value="+44">+44</option>
                            </select>
                            <input type="tel" className={`${inputClass} flex-1`} placeholder="Alternate Phone" />
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>Select Location Type:</label>
                          <select className={inputClass}>
                            <option>Link</option>
                            <option>Map</option>
                            <option>None</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Date Of Birth:</label>
                          <input type="text" className={inputClass} placeholder="Enter Date of Birth" />
                        </div>
                        <div>
                          <label className={labelClass}>Made By:</label>
                          <input type="text" className={inputClass} placeholder="Made By" />
                        </div>
                      </div>
                    </div>
                    {/* Second row: Made By URL, Job Title, Default Language, Cover Image Type */}
                    <div className="grid md:grid-cols-2 gap-4 pt-2 border-t border-gray-200 dark:border-gray-700 pt-6">
                      <div>
                        <label className={labelClass}>Made By URL:</label>
                        <input type="url" className={inputClass} placeholder="Made By URL" />
                      </div>
                      <div>
                        <label className={labelClass}>Job Title:</label>
                        <input type="text" className={inputClass} placeholder="Enter Job Title" />
                      </div>
                      <div>
                        <label className={labelClass}>Default Language:</label>
                        <select className={inputClass}>
                          <option>English</option>
                          <option>Hindi</option>
                          <option>Spanish</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Cover Image Type:</label>
                        <select className={inputClass}>
                          <option>Cover</option>
                          <option>Image</option>
                          <option>None</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-end gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button
                        type="button"
                        className="btn-secondary-premium inline-flex items-center justify-center"
                      >
                        Discard
                      </button>
                      <button
                        type="submit"
                        className="btn-primary-premium inline-flex items-center justify-center"
                      >
                        Save &amp; Next
                      </button>
                    </div>
                  </form>
                )}

                {activeTab === "other" && (
                  <div className="space-y-6">
                    {/* 8 toggle cards in 2x4 grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { key: "languageLocalization" as const, label: "Display Language Localization:", help: false },
                        { key: "inquiryForm" as const, label: "Display Inquiry Form:", help: false },
                        { key: "downloadQrIcon" as const, label: "Display Download Qr Icon:", help: false },
                        { key: "qrSection" as const, label: "Display Qr Section:", help: false },
                        { key: "userAffiliation" as const, label: "Display User Affiliation:", help: true },
                        { key: "addToContact" as const, label: "Display Add To Contact:", help: true },
                        { key: "hideStickyBar" as const, label: "Hide vCard Sticky Bar:", help: true },
                        { key: "whatsappShare" as const, label: "Display WhatsApp Share:", help: true },
                      ].map((item) => {
                        const on = otherToggles[item.key];
                        return (
                          <div
                            key={item.key}
                            className="flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-4 shadow-sm"
                          >
                            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-800 dark:text-gray-100 pr-2">
                              {item.label}
                              {item.help && (
                                <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" aria-label="Help">
                                  <HelpIcon />
                                </button>
                              )}
                            </span>
                            <button
                              type="button"
                              role="switch"
                              aria-checked={on}
                              onClick={() => setOtherToggle(item.key)}
                              className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                                on ? "bg-brand-500" : "bg-gray-200 dark:bg-gray-600"
                              }`}
                            >
                              <span
                                className={`pointer-events-none absolute left-1 top-1 inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                                  on ? "translate-x-[1.375rem]" : "translate-x-0"
                                }`}
                              />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    {/* QR Code download size slider */}
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-4 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <label className="text-sm font-medium text-gray-800 dark:text-gray-100">QR Code download size</label>
                        <div className="flex items-center gap-3 min-w-[120px]">
                          <input
                            type="range"
                            min={100}
                            max={400}
                            step={10}
                            value={qrDownloadSize}
                            onChange={(e) => setQrDownloadSize(Number(e.target.value))}
                            className="h-2 w-32 sm:flex-1 max-w-[200px] rounded-full appearance-none bg-gray-200 dark:bg-gray-600 accent-brand-500"
                          />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-12 shrink-0">{qrDownloadSize}px</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-3 pt-2">
                      <button
                        type="button"
                        className="btn-secondary-premium inline-flex items-center justify-center"
                      >
                        Discard
                      </button>
                      <button
                        type="button"
                        className="btn-primary-premium inline-flex items-center justify-center"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Templates – template grid + mobile view preview in phone frame */}
            {activeSection === "templates" && (
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div className="flex-1 min-w-0 space-y-4">
                  <label className={labelClass}>
                    Select Template: <span className="text-red-500">*</span>
                  </label>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 max-h-[70vh] overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600">
                  {VCARD_TEMPLATES.map((template) => {
                    const isSelected = selectedTemplateId === template.id;
                    return (
                      <button
                        key={template.id}
                        type="button"
                        onClick={() => setSelectedTemplateId(template.id)}
                        className={`group relative rounded-2xl border-2 p-0 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 overflow-hidden shadow-sm hover:shadow-md ${
                          isSelected
                            ? "border-brand-500 bg-white dark:bg-gray-800 shadow-md"
                            : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-brand-400 dark:hover:border-brand-500"
                        }`}
                      >
                        {/* Preview area: gradient + placeholder content + title bar; on hover content scrolls upward */}
                        <div className="relative mb-3 overflow-hidden rounded-t-2xl aspect-[9/16] w-full">
                          <div
                            className={`absolute inset-0 bg-gradient-to-b ${template.accent} transition-transform duration-500 ease-out group-hover:translate-y-[-12%]`}
                          />
                          {/* Template-specific preview content (screenshot-style) */}
                          {(() => {
                            const light = isLightTemplate(template.accent);
                            const bar = light ? "bg-gray-700/80" : "bg-white/70";
                            const circle = light ? "bg-gray-600/80" : "bg-white/80";
                            const icon = light ? "bg-gray-600/70" : "bg-white/50";
                            const text = light ? "text-gray-800/95" : "text-white/95";
                            const textSec = light ? "text-gray-700/90" : "text-white/80";
                            const pt = getPreviewType(template);
                            const base = "absolute inset-0 flex flex-col pt-2 px-2 pointer-events-none overflow-hidden";
                            if (pt === "flower") {
                              // Jenny Wilson / Flower Garden style preview (with contact + mini gallery) for flower-type templates (including Executive Pro)
                              return (
                                <div className={base}>
                                  <div className="h-full flex items-start justify-center">
                                    <div className="mt-1 mx-auto w-full max-w-[120px] rounded-2xl bg-white/95 shadow-sm overflow-hidden transition-transform duration-500 ease-out group-hover:-translate-y-2">
                                      {/* Top hero image */}
                                      <div
                                        className="h-14 w-full bg-cover bg-center"
                                        style={{ backgroundImage: "url('/images/cards/card-01.jpg')" }}
                                      />
                                      {/* Bottom white content */}
                                      <div className="px-2 pb-2 pt-1">
                                        <div className="flex items-end gap-1 -mt-5">
                                          <div className="w-8 h-8 rounded-lg bg-gray-200 border-[2px] border-white shadow-sm shrink-0" />
                                          <div className="flex-1 min-w-0">
                                            <p className="text-[8px] font-semibold text-emerald-800 leading-none truncate">
                                              Jenny Wilson
                                            </p>
                                            <p className="text-[7px] text-emerald-600 leading-none mt-0.5 truncate">
                                              Flower Garden
                                            </p>
                                          </div>
                                        </div>

                                        {/* Social icons row */}
                                        <div className="mt-2 flex justify-center gap-1.5">
                                          {[1, 2, 3, 4, 5].map((i) => (
                                            <div
                                              // eslint-disable-next-line react/no-array-index-key
                                              key={i}
                                              className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-100"
                                            />
                                          ))}
                                        </div>

                                        {/* Description line */}
                                        <p className="mt-2 text-[6px] leading-tight text-slate-600 text-center line-clamp-2">
                                          Lorem ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>

                                        {/* Compact contact row */}
                                        <div className="mt-2 grid grid-cols-2 gap-1 text-[6px] text-slate-700">
                                          <div className="flex items-center gap-0.5">
                                            <div className="h-3.5 w-3.5 rounded-lg bg-emerald-50 flex items-center justify-center text-[6px] text-emerald-700 shrink-0">
                                              ✉
                                            </div>
                                            <p className="truncate">jenny@gmail.com</p>
                                          </div>
                                          <div className="flex items-center gap-0.5">
                                            <div className="h-3.5 w-3.5 rounded-lg bg-emerald-50 flex items-center justify-center text-[6px] text-emerald-700 shrink-0">
                                              ☎
                                            </div>
                                            <p className="truncate">+1 234567890</p>
                                          </div>
                                        </div>

                                        {/* Mini gallery strip */}
                                        <div className="mt-2">
                                          <p className="text-[6px] font-semibold text-emerald-800 text-center">Gallery</p>
                                          <div className="mt-1 grid grid-cols-3 gap-0.5">
                                            {[1, 2, 3].map((i) => (
                                              // eslint-disable-next-line react/no-array-index-key
                                              <div
                                                key={i}
                                                className="aspect-[4/5] rounded-md overflow-hidden bg-emerald-50"
                                              >
                                                <div
                                                  className="w-full h-full bg-cover bg-center"
                                                  style={{
                                                    backgroundImage: `url('/images/product/product-0${i}.png')`,
                                                  }}
                                                />
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                            if (pt === "flower-shop") {
                              return (
                                <div className={base}>
                                  <div className={`rounded-full border-2 ${circle} w-10 h-10 mx-auto flex items-center justify-center mb-1`}>
                                    <span className={`text-[6px] font-bold ${text} text-center leading-tight`}>SHOP</span>
                                  </div>
                                  <p className={`text-[9px] font-semibold ${text} text-center`}>Flower Shop</p>
                                  <p className={`text-[7px] ${textSec} text-center mb-1`}>Let Your Garden Bloom With Us</p>
                                  <div className="flex justify-center gap-0.5 mb-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                      <div key={i} className={`w-3.5 h-3.5 rounded-full ${icon}`} />
                                    ))}
                                  </div>
                                  <p className={`text-[7px] ${textSec} text-center`}>flowergarden@gmail.com</p>
                                  <p className={`text-[6px] ${textSec} text-center mt-0.5`}>Official Website</p>
                                  <p className={`text-[8px] font-medium ${text} text-center mt-1 border-t border-white/30 pt-0.5`}>Gallery</p>
                                </div>
                              );
                            }
                            if (pt === "flower-snap") {
                              return (
                                <div className={base}>
                                  <div className={`rounded-full border-2 ${circle} w-10 h-10 mx-auto flex items-center justify-center mb-1`}>
                                    <span className={`text-[5px] font-bold ${text} text-center leading-tight`}>FS</span>
                                  </div>
                                  <p className={`text-[9px] font-semibold ${text} text-center`}>Flower Snap</p>
                                  <p className={`text-[7px] ${textSec} text-center mb-0.5`}>Creative Flower & Garden.</p>
                                  <p className={`text-[6px] ${textSec} text-center mb-1`}>Best Plant Selling Company</p>
                                  <p className={`text-[6px] ${textSec} text-center mb-1`}>Green Market Mumbai</p>
                                  <div className="flex justify-center gap-0.5 mb-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                      <div key={i} className={`w-3.5 h-3.5 rounded-full ${icon}`} />
                                    ))}
                                  </div>
                                  <p className={`text-[7px] ${textSec} text-center`}>flowersnap@gmail.com</p>
                                  <p className={`text-[6px] ${textSec} text-center mt-0.5`}>Official Website</p>
                                  <p className={`text-[8px] font-medium ${text} text-center mt-1 border-t border-white/30 pt-0.5`}>Gallery</p>
                                </div>
                              );
                            }
                            if (pt === "travel") {
                              return (
                                <div className={base}>
                                  <div className={`h-4 rounded ${bar} flex items-center justify-center mb-1`}>
                                    <span className={`text-[8px] font-bold ${text}`}>TRAVEL</span>
                                  </div>
                                  <div className={`w-9 h-9 rounded-sm ${circle} shrink-0 mx-auto mb-1`} />
                                  <p className={`text-[9px] font-semibold ${text} text-center`}>Bessie Cooper</p>
                                  <p className={`text-[8px] ${textSec} text-center mb-1`}>Travel Agent</p>
                                  <div className="flex justify-center gap-0.5 mb-1">
                                    {[1, 2, 3, 4].map((i) => (
                                      <div key={i} className={`w-3.5 h-3.5 rounded-full ${icon}`} />
                                    ))}
                                  </div>
                                  <p className={`text-[7px] ${textSec} text-center`}>michael@gmail.com · +49 95864 12484</p>
                                  <p className={`text-[6px] ${textSec} text-center mt-0.5`}>Official Website</p>
                                  <p className={`text-[8px] font-medium ${text} text-center mt-1 border-t border-white/30 pt-0.5`}>Contact · Gallery</p>
                                </div>
                              );
                            }
                            if (pt === "travel-dark") {
                              return (
                                <div className={base}>
                                  <div className={`w-8 h-6 rounded ${bar} flex items-center justify-center mx-auto mb-1`} />
                                  <p className={`text-[9px] font-bold ${text} text-center`}>Desi Miles</p>
                                  <p className={`text-[8px] ${textSec} text-center`}>Tours & Travel Agency</p>
                                  <p className={`text-[6px] ${textSec} text-center mt-0.5 leading-tight`}>Every Journey Begins With A Single Step</p>
                                  <div className="flex justify-center gap-0.5 my-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                      <div key={i} className={`w-3 h-3 rounded-full ${icon}`} />
                                    ))}
                                  </div>
                                  <p className={`text-[7px] ${textSec} text-center`}>advmur@gmail.com · +91888887700</p>
                                  <p className={`text-[6px] ${textSec} text-center mt-0.5`}>Official Website</p>
                                  <p className={`text-[8px] font-medium ${text} text-center mt-1 border-t border-white/30 pt-0.5`}>Contact · Gallery</p>
                                </div>
                              );
                            }
                            if (pt === "personal") {
                              return (
                                <div className="absolute inset-0 flex flex-col pointer-events-none overflow-hidden">
                                  {/* Cover Area */}
                                  <div className="h-[28%] w-full bg-white/10 relative">
                                    <div className={`absolute -bottom-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-[2px] border-white/30 ${circle} shadow-lg flex items-center justify-center backdrop-blur-sm`}>
                                      <svg className={`w-6 h-6 ${text} opacity-80`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                      </svg>
                                    </div>
                                  </div>
                                  {/* Content Area */}
                                  <div className="flex-1 flex flex-col items-center pt-7 px-3">
                                    <p className={`text-[11px] font-extrabold tracking-wide ${text} text-center mb-0.5 drop-shadow-sm`}>John Doe</p>
                                    <p className={`text-[7px] font-medium tracking-widest uppercase ${textSec} text-center mb-3 opacity-90`}>Executive Director</p>
                                    
                                    <div className="w-full flex justify-center gap-2 mb-4">
                                      {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className={`w-5 h-5 rounded-full ${icon} shadow-sm backdrop-blur-md flex items-center justify-center`}>
                                          <div className="w-2.5 h-2.5 rounded-[3px] bg-white/50" />
                                        </div>
                                      ))}
                                    </div>
                                    
                                    <div className="w-full space-y-1.5 px-1.5">
                                      <div className="flex items-center gap-2 rounded-md bg-white/10 backdrop-blur-sm px-2 py-[5px] shadow-sm border border-white/5">
                                        <div className={`w-3.5 h-3.5 rounded-full ${icon} shrink-0 flex items-center justify-center`}>
                                          <div className="w-1.5 h-1.5 rounded-sm bg-white/70" />
                                        </div>
                                        <div className="flex-1">
                                          <p className={`text-[4.5px] uppercase tracking-wider ${textSec} opacity-80`}>Email</p>
                                          <p className={`text-[6px] font-medium ${text}`}>john.doe@example.com</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2 rounded-md bg-white/10 backdrop-blur-sm px-2 py-[5px] shadow-sm border border-white/5">
                                        <div className={`w-3.5 h-3.5 rounded-full ${icon} shrink-0 flex items-center justify-center`}>
                                          <div className="w-1.5 h-1.5 rounded-sm bg-white/70" />
                                        </div>
                                        <div className="flex-1">
                                          <p className={`text-[4.5px] uppercase tracking-wider ${textSec} opacity-80`}>Phone</p>
                                          <p className={`text-[6px] font-medium ${text}`}>+1 234 567 8900</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2 rounded-md bg-white/10 backdrop-blur-sm px-2 py-[5px] shadow-sm border border-white/5">
                                        <div className={`w-3.5 h-3.5 rounded-full ${icon} shrink-0 flex items-center justify-center`}>
                                          <div className="w-1.5 h-1.5 rounded-sm bg-white/70" />
                                        </div>
                                        <div className="flex-1">
                                          <p className={`text-[4.5px] uppercase tracking-wider ${textSec} opacity-80`}>Location</p>
                                          <p className={`text-[6px] font-medium ${text}`}>New York, NY</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mt-auto mb-[2.5rem] w-full px-2">
                                      <div className={`w-full py-1.5 rounded-full ${icon} backdrop-blur-md shadow-md flex items-center justify-center border border-white/10`}>
                                        <p className={`text-[7.5px] font-bold uppercase tracking-widest ${text}`}>Save Contact</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                            if (pt === "corporate") {
                              return (
                                <div className={base}>
                                  <div className={`w-10 h-10 rounded-full ${circle} shrink-0 mx-auto mb-1`} />
                                  <p className={`text-[9px] font-semibold ${text} text-center`}>Executive</p>
                                  <p className={`text-[8px] ${textSec} text-center mb-1`}>Leadership · Board</p>
                                  <div className={`h-1.5 rounded ${bar} w-full max-w-[90%] mx-auto mb-1`} />
                                  <div className={`h-1.5 rounded ${bar} w-[70%] mx-auto mb-1`} />
                                  <p className={`text-[7px] ${textSec} text-center`}>contact@company.com</p>
                                  <p className={`text-[6px] ${textSec} text-center mt-0.5 border-t border-white/20 pt-0.5`}>Official Website</p>
                                </div>
                              );
                            }
                            if (pt === "creative") {
                              return (
                                <div className={base}>
                                  <p className={`text-[10px] font-bold ${text} text-center uppercase tracking-wider mt-2`}>Creative</p>
                                  <p className={`text-[8px] ${textSec} text-center mb-2`}>Studio</p>
                                  <div className={`h-2 rounded ${bar} w-full mb-0.5`} />
                                  <div className={`h-2 rounded ${bar} w-[85%] mx-auto mb-0.5`} />
                                  <div className={`h-2 rounded ${bar} w-[60%] mx-auto mb-1`} />
                                  <div className="flex justify-center gap-1">
                                    {[1, 2, 3].map((i) => (
                                      <div key={i} className={`w-6 h-6 rounded ${icon}`} />
                                    ))}
                                  </div>
                                </div>
                              );
                            }
                            // generic = same filled style as screenshot (Jenny Wilson style so no blank PREVIEW)
                            return (
                              <div className={base}>
                                <div className={`w-8 h-8 rounded-full ${circle} shrink-0 mx-auto mb-1`} />
                                <p className={`text-[9px] font-semibold ${text} text-center leading-tight`}>Jenny Wilson</p>
                                <p className={`text-[8px] ${textSec} text-center mb-1`}>{template.name}</p>
                                <div className="flex justify-center gap-1 mb-1">
                                  {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-4 h-4 rounded-full ${icon}`} />
                                  ))}
                                </div>
                                <p className={`text-[7px] ${textSec} text-center leading-tight px-0.5`}>jenny@gmail.com · +1234567890</p>
                                <p className={`text-[7px] ${textSec} text-center mt-0.5`}>12th March, 1990 · Berlin, Germany</p>
                                <p className={`text-[6px] ${textSec} text-center mt-0.5`}>Official Website</p>
                                <p className={`text-[8px] font-medium ${text} text-center mt-1 border-t border-white/30 pt-1`}>Gallery</p>
                              </div>
                            );
                          })()}
                          {/* Dark bar at bottom of preview with template name */}
                          <div className="absolute inset-x-0 bottom-0 h-10 flex items-center bg-gray-900/90 dark:bg-black/80 px-3">
                            <p className="text-sm font-semibold text-white truncate">{template.name}</p>
                          </div>
                        </div>
                        <div className="px-4 pb-4 pt-0">
                          <p className="text-[11px] leading-snug text-gray-500 dark:text-gray-400">{template.description}</p>
                        </div>
                        {isSelected && (
                          <span className="absolute top-3 right-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white shadow">
                            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                        )}
                      </button>
                    );
                  })}
                  </div>
                  {/* Save, Discard – left side */}
                  <div className="mt-6 w-full max-w-md space-y-4">
                    {templateSaveSuccess && (
                      <p className="text-sm font-medium text-green-600 dark:text-green-400 rounded-lg bg-green-50 dark:bg-green-900/20 px-3 py-2">
                        Template saved. It will show on the vCards list.
                      </p>
                    )}
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          if (!vcardId || !currentCard || selectedTemplateId == null) return;
                          const template = VCARD_TEMPLATES.find((t) => t.id === selectedTemplateId);
                          const primaryColor = template ? getAccentPrimaryColor(template.accent) : undefined;
                          setVCards((prev) =>
                            prev.map((c) =>
                              c.id === vcardId
                                ? { ...c, selectedTemplateId, templateName: template?.name, templatePrimaryColor: primaryColor }
                                : c
                            )
                          );
                          setTemplateSaveSuccess(true);
                          router.push("/vcards");
                        }}
                        disabled={selectedTemplateId == null}
                        className="flex-1 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => selectedTemplateId != null && setSelectedTemplateId(currentCard?.selectedTemplateId ?? null)}
                        className="flex-1 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                      >
                        Discard
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile view preview – selected template theme in phone frame */}
                {(() => {
                  const selectedTemplate =
                    selectedTemplateId != null ? VCARD_TEMPLATES.find((t) => t.id === selectedTemplateId) : null;
                  const accent = selectedTemplate?.accent ?? "from-lime-400 to-lime-500";
                  const primaryColor = selectedTemplate ? getAccentPrimaryColor(selectedTemplate.accent) : "#B4FF3B";
                  const isLight = selectedTemplate ? isLightTemplate(selectedTemplate.accent) : false;
                  const textOnPrimary = isLight ? "#1f2937" : "#ffffff";
                  const previewContent = selectedTemplate
                    ? getMobilePreviewContent(selectedTemplate)
                    : {
                        name: "Your Name",
                        subtitle: "Title / Profession",
                        description:
                          "Add your description and contact details. Choose a template to see its content here.",
                        ctaLabel: "Add to contact",
                      };
                  const previewType = selectedTemplate ? getPreviewType(selectedTemplate) : "generic";

                  return (
                    <div className="lg:w-[320px] shrink-0 flex flex-col items-center">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Mobile preview</p>
                      <div className="relative w-[320px] h-[640px] rounded-[2.25rem] bg-gray-900 shadow-2xl overflow-hidden border-[8px] border-gray-800 flex-shrink-0">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-24 h-5 rounded-b-2xl bg-black z-20" />
                        <div className="absolute inset-0 flex flex-col overflow-hidden">
                          {previewType === "flower" ? (
                            // Jenny Wilson / Flower Garden style full template preview inside phone
                            <div className="flex-1 bg-[#f6faf7] flex items-center justify-center px-4 py-6">
                              <div className="w-full max-w-[280px] rounded-[1.75rem] bg-white shadow-2xl overflow-hidden border border-emerald-100 relative">
                                <div className="absolute inset-0 pointer-events-none">
                                  <div className="absolute -left-4 top-8 w-10 h-10 rounded-full border border-emerald-100 bg-emerald-50/60" />
                                  <div className="absolute -right-4 bottom-8 w-10 h-10 rounded-full border border-emerald-100 bg-emerald-50/60" />
                                </div>
                                <div className="max-h-[520px] overflow-y-auto">
                                  <section className="relative">
                                    <div
                                      className="h-24 w-full bg-cover bg-center bg-no-repeat"
                                      style={{ backgroundImage: "url('/images/cards/card-01.jpg')" }}
                                    />
                                    <div className="px-4 pb-4 pt-3 bg-white relative">
                                      <div className="-mt-10 flex items-end gap-2">
                                        <div className="relative w-12 h-12 rounded-xl border-2 border-white shadow-md overflow-hidden flex-shrink-0 bg-emerald-100" />
                                        <div className="flex-1 min-w-0">
                                          <p className="text-sm font-semibold text-emerald-900 leading-tight truncate">
                                            Jenny Wilson
                                          </p>
                                          <p className="text-[11px] font-medium text-emerald-700 mt-0.5 truncate">
                                            Flower Garden
                                          </p>
                                        </div>
                                      </div>
                                      <div className="mt-3 flex justify-center gap-3">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                          // eslint-disable-next-line react/no-array-index-key
                                          <div
                                            key={i}
                                            className="h-7 w-7 rounded-full bg-emerald-50 text-emerald-600 text-[11px] flex items-center justify-center shadow-sm"
                                          >
                                            ●
                                          </div>
                                        ))}
                                      </div>
                                      <p className="mt-3 text-[10px] text-slate-600 text-center leading-snug">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                        has been the industry&apos;s standard dummy text ever since the 1500s.
                                      </p>

                                      {/* Contact row (email, phone, birth date, location) */}
                                      <div className="mt-4 grid grid-cols-2 gap-2 text-[9px] text-slate-700">
                                        <div className="flex items-center gap-1.5">
                                          <div className="h-6 w-6 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 text-[10px] shrink-0">
                                            ✉
                                          </div>
                                          <div className="min-w-0">
                                            <p className="text-[8px] text-slate-500">Email</p>
                                            <p className="truncate">jenny@gmail.com</p>
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                          <div className="h-6 w-6 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 text-[10px] shrink-0">
                                            ☎
                                          </div>
                                          <div className="min-w-0">
                                            <p className="text-[8px] text-slate-500">Phone</p>
                                            <p className="truncate">+1 234567890</p>
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                          <div className="h-6 w-6 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 text-[10px] shrink-0">
                                            🎂
                                          </div>
                                          <div className="min-w-0">
                                            <p className="text-[8px] text-slate-500">Birth Date</p>
                                            <p className="truncate">12th March, 1990</p>
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                          <div className="h-6 w-6 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 text-[10px] shrink-0">
                                            📍
                                          </div>
                                          <div className="min-w-0">
                                            <p className="text-[8px] text-slate-500">Location</p>
                                            <p className="truncate">Berlin, Germany</p>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Gallery section */}
                                      <div className="mt-4 pt-3 border-t border-emerald-50">
                                        <h3 className="text-[10px] font-semibold text-emerald-800 text-center flex items-center justify-center gap-2">
                                          <span className="flex-1 h-px bg-emerald-100" />
                                          Gallery
                                          <span className="flex-1 h-px bg-emerald-100" />
                                        </h3>
                                        <div className="mt-3 grid grid-cols-3 gap-2">
                                          {[1, 2, 3].map((i) => (
                                            // eslint-disable-next-line react/no-array-index-key
                                            <div
                                              key={i}
                                              className="aspect-[4/5] rounded-xl overflow-hidden bg-emerald-50"
                                            >
                                              <div
                                                className="w-full h-full bg-cover bg-center"
                                                style={{
                                                  backgroundImage: `url('/images/product/product-0${i}.png')`,
                                                }}
                                              />
                                            </div>
                                          ))}
                                        </div>
                                      </div>

                                      {/* Our Service – Dynamic from card data */}
                                      <div className="mt-4 pt-3 border-t border-emerald-50">
                                        <h3 className="text-[10px] font-semibold text-emerald-800 text-center flex items-center justify-center gap-2">
                                          <span className="flex-1 h-px bg-emerald-100" />
                                          Our Service
                                          <span className="flex-1 h-px bg-emerald-100" />
                                        </h3>
                                        {(((currentCard as any)?.services as any[]) ?? []).length > 0 ? (
                                          <div className="mt-3 space-y-2">
                                            {(((currentCard as any)?.services as any[]) ?? []).slice(0, 2).map((svc, idx) => (
                                              <div key={svc.id || idx} className="rounded-2xl border border-emerald-100 bg-white shadow-sm overflow-hidden flex">
                                                <div className="w-16 h-16 bg-emerald-50 shrink-0 overflow-hidden flex items-center justify-center">
                                                  {svc.icon ? (
                                                    <img src={svc.icon} alt={svc.name} className="h-full w-full object-cover" />
                                                  ) : (
                                                    <span className="text-emerald-300 font-bold text-lg">{idx + 1}</span>
                                                  )}
                                                </div>
                                                <div className="px-2 py-1.5 flex-1 min-w-0">
                                                  <p className="text-[9px] font-semibold text-slate-900 truncate">{svc.name}</p>
                                                  <p className="mt-0.5 text-[8px] text-slate-600 leading-snug line-clamp-2">
                                                    {svc.description}
                                                  </p>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        ) : (
                                          <div className="mt-3 py-4 text-center rounded-2xl border border-dashed border-emerald-100">
                                            <p className="text-emerald-300 text-[8px]">No services added yet.</p>
                                          </div>
                                        )}
                                      </div>

                                      {/* Make an Appointment – compact preview */}
                                      <div className="mt-4 pt-3 border-t border-emerald-50">
                                        <h3 className="text-[10px] font-semibold text-emerald-800 text-center flex items-center justify-center gap-2">
                                          <span className="flex-1 h-px bg-emerald-100" />
                                          Make an Appointment
                                          <span className="flex-1 h-px bg-emerald-100" />
                                        </h3>
                                        <div className="mt-3 space-y-2">
                                          <div>
                                            <p className="text-[8px] text-slate-600 mb-0.5">Date :</p>
                                            <div className="h-7 rounded-full border border-emerald-200 bg-white flex items-center justify-between px-2 text-[8px] text-slate-500">
                                              <span>Pick a date</span>
                                              <span>📅</span>
                                            </div>
                                          </div>
                                          <div>
                                            <p className="text-[8px] text-slate-600 mb-0.5">Hour:</p>
                                            <div className="flex gap-1 overflow-x-auto pb-0.5">
                                              {["8:10 - 20:00", "8:10 - 20:00", "8:10 - 20:00"].map((label, idx) => (
                                                <button
                                                  key={`${label}-${idx}`}
                                                  type="button"
                                                  className="px-2 py-1 rounded-full bg-white/60 border border-emerald-100 text-[8px] text-slate-600 whitespace-nowrap"
                                                >
                                                  {label}
                                                </button>
                                              ))}
                                            </div>
                                          </div>
                                          <button
                                            type="button"
                                            className="mt-1 w-full rounded-full bg-emerald-700 text-white text-[9px] font-semibold py-1.5 shadow-md"
                                          >
                                            Make An Appointment
                                          </button>
                                        </div>
                                      </div>

                                      {/* Product – compact two-column layout */}
                                      <div className="mt-4 pt-3 border-t border-emerald-50">
                                        <h3 className="text-[10px] font-semibold text-emerald-800 text-center flex items-center justify-center gap-2">
                                          <span className="flex-1 h-px bg-emerald-100" />
                                          Product
                                          <span className="flex-1 h-px bg-emerald-100" />
                                        </h3>
                                        <div className="mt-3 grid grid-cols-2 gap-2">
                                          {[1, 2].map((i) => (
                                            // eslint-disable-next-line react/no-array-index-key
                                            <div key={i} className="rounded-2xl bg-white border border-emerald-100 overflow-hidden">
                                              <div
                                                className="h-16 w-full bg-cover bg-center"
                                                style={{
                                                  backgroundImage: `url('/images/product/product-0${i}.png')`,
                                                }}
                                              />
                                              <div className="px-3 py-2">
                                                <div className="flex items-center justify-between text-[9px] text-slate-900 font-semibold">
                                                  <span>Flower Name</span>
                                                  <span>$25.00</span>
                                                </div>
                                                <p className="mt-0.5 text-[8px] text-slate-600">Lorem Ipsum dummy text</p>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>

                                      {/* Testimonials section */}
                                      {(((currentCard as any)?.testimonials as any[]) ?? []).length > 0 && (
                                        <div className="mt-4 pt-3 border-t border-emerald-50">
                                          <h3 className="text-[10px] font-semibold text-emerald-800 text-center flex items-center justify-center gap-2">
                                            <span className="flex-1 h-px bg-emerald-100" />
                                            Testimonials
                                            <span className="flex-1 h-px bg-emerald-100" />
                                          </h3>
                                          <div className="mt-3 space-y-3">
                                            {(((currentCard as any)?.testimonials as any[]) ?? []).slice(0, 2).map((t, idx) => (
                                              <div key={t.id || idx} className="rounded-2xl bg-white border border-emerald-100 px-3 py-3 flex gap-2">
                                                <div className="w-10 h-10 rounded-full bg-emerald-50 overflow-hidden flex-shrink-0">
                                                  {t.image ? (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
                                                  ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-xs font-bold text-emerald-600 bg-emerald-100">
                                                      {(t.name || "C")[0].toUpperCase()}
                                                    </div>
                                                  )}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                  <p className="text-[8px] text-slate-600 leading-snug line-clamp-3">
                                                    &quot;{t.quote}&quot;
                                                  </p>
                                                  <p className="mt-1 text-[9px] font-semibold text-slate-900">{t.name}</p>
                                                  <p className="text-[8px] text-emerald-600">- {t.role}</p>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      )}

                                      {/* Blog – compact layout */}
                                      <div className="mt-4 pt-3 border-t border-emerald-50">
                                        <h3 className="text-[10px] font-semibold text-emerald-800 text-center flex items-center justify-center gap-2">
                                          <span className="flex-1 h-px bg-emerald-100" />
                                          Blog
                                          <span className="flex-1 h-px bg-emerald-100" />
                                        </h3>
                                        <div className="mt-3 grid grid-cols-[1.1fr,1fr] gap-2 items-center">
                                          <div>
                                            <p className="text-[9px] font-semibold text-slate-900 mb-0.5">Lorem Ipsum</p>
                                            <p className="text-[8px] text-slate-600 leading-snug">
                                              Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has
                                              been the industry&apos;s standard.
                                            </p>
                                            <div className="mt-2 flex gap-1.5">
                                              <button
                                                type="button"
                                                className="h-5 w-5 rounded-full border border-emerald-300 text-emerald-700 flex items-center justify-center text-[8px]"
                                              >
                                                ←
                                              </button>
                                              <button
                                                type="button"
                                                className="h-5 w-5 rounded-full border border-emerald-300 text-emerald-700 flex items-center justify-center text-[8px]"
                                              >
                                                →
                                              </button>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-lg border border-emerald-200" />
                                            <div className="relative rounded-lg overflow-hidden border border-emerald-200">
                                              <div
                                                className="h-20 w-full bg-cover bg-center"
                                                style={{ backgroundImage: "url('/images/product/product-03.png')" }}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Business Hours – compact grid */}
                                      <div className="mt-4 pt-3 border-t border-emerald-50">
                                        <h3 className="text-[10px] font-semibold text-emerald-800 text-center flex items-center justify-center gap-2">
                                          <span className="flex-1 h-px bg-emerald-100" />
                                          Business Hours
                                          <span className="flex-1 h-px bg-emerald-100" />
                                        </h3>
                                        <div className="mt-3 grid grid-cols-2 gap-y-1.5 text-[8px] text-slate-700">
                                          <p>Sunday : 08:10 - 20:00</p>
                                          <p>Monday : 08:10 - 20:00</p>
                                          <p>Tuesday : 08:10 - 20:00</p>
                                          <p>Wednesday : 08:10 - 10:00</p>
                                          <p>Thursday : 08:10 - 20:00</p>
                                          <p>Friday : 08:10 - 20:00</p>
                                          <p className="col-span-2 text-center">Saturday : Closed</p>
                                        </div>
                                      </div>

                                      {/* QR Code – compact preview */}
                                      <div className="mt-4 pt-3 border-t border-emerald-50">
                                        <h3 className="text-[10px] font-semibold text-emerald-800 text-center flex items-center justify-center gap-2">
                                          <span className="flex-1 h-px bg-emerald-100" />
                                          QR Code
                                          <span className="flex-1 h-px bg-emerald-100" />
                                        </h3>
                                        <div className="mt-3 flex flex-col items-center gap-3">
                                          <div className="relative w-20 h-20 rounded-lg bg-white border border-emerald-100 flex items-center justify-center shadow-sm">
                                            <div className="w-16 h-16 bg-[radial-gradient(circle,_#000_40%,_transparent_41%)] [background-size:8px_8px]" />
                                          </div>
                                          <button
                                            type="button"
                                            className="px-4 py-1.5 rounded-full bg-emerald-700 text-white text-[9px] font-semibold shadow-md"
                                          >
                                            Download My QR Code
                                          </button>
                                        </div>
                                      </div>

                                      {/* Contact Us – compact form preview */}
                                      <div className="mt-4 pt-3 border-t border-emerald-50">
                                        <h3 className="text-[10px] font-semibold text-emerald-800 text-center flex items-center justify-center gap-2">
                                          <span className="flex-1 h-px bg-emerald-100" />
                                          Contact Us
                                          <span className="flex-1 h-px bg-emerald-100" />
                                        </h3>
                                        <div className="mt-3 space-y-1.5">
                                          <div className="h-6 rounded-full bg-slate-100 border border-slate-200 text-[8px] text-slate-400 flex items-center px-3">
                                            Full Name
                                          </div>
                                          <div className="h-6 rounded-full bg-slate-100 border border-slate-200 text-[8px] text-slate-400 flex items-center px-3">
                                            Email Address
                                          </div>
                                          <div className="h-6 rounded-full bg-slate-100 border border-slate-200 text-[8px] text-slate-400 flex items-center px-3">
                                            Phone Number
                                          </div>
                                          <div className="h-10 rounded-2xl bg-slate-100 border border-slate-200 text-[8px] text-slate-400 flex items-start px-3 py-1.5">
                                            Your Message
                                          </div>
                                          <button
                                            type="button"
                                            className="mt-1 w-full rounded-full bg-emerald-700 text-white text-[9px] font-semibold py-1.75 shadow-md"
                                          >
                                            Send Message
                                          </button>
                                        </div>
                                      </div>

                                      {/* Create Your vCard – link preview */}
                                      <div className="mt-4 pt-3 border-t border-emerald-50 mb-3">
                                        <h3 className="text-[10px] font-semibold text-emerald-800 text-center flex items-center justify-center gap-2">
                                          <span className="flex-1 h-px bg-emerald-100" />
                                          Create Your vCard
                                          <span className="flex-1 h-px bg-emerald-100" />
                                        </h3>
                                        <div className="mt-3 rounded-2xl overflow-hidden border border-emerald-100 bg-emerald-50/60">
                                          <div className="px-3 py-3 bg-[url('/images/cards/card-02.png')] bg-cover bg-center">
                                            <div className="rounded-full bg-white/95 border border-slate-200 px-3 py-1.5 flex items-center justify-between text-[8px] text-slate-700">
                                              <span className="truncate mr-2">
                                                https://vcards.infyom.com/marlonbrasil
                                              </span>
                                              <span className="shrink-0 text-[9px]">↗</span>
                                            </div>
                                          </div>
                                        </div>
                                        <button
                                          type="button"
                                          className="mt-3 w-full rounded-full bg-emerald-700 text-white text-[9px] font-semibold py-1.75 shadow-md"
                                        >
                                          Add to Contact
                                        </button>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                          ) : previewType === "travel-dark" ? (
                            /* Digital business card template style (screenshot) – not website style */
                            <div className="flex-1 overflow-y-auto flex flex-col bg-[#1A1A2E] text-left min-h-0 relative" data-single-page-template>
                              {/* Floating grid icon – top right */}
                              <button type="button" className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-[#38bdf8]/90 flex items-center justify-center shadow-lg">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 8a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm8-8a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zm0 8a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clipRule="evenodd" /></svg>
                              </button>
                              {/* Top banner – name, title, CTA (template header) */}
                              <header className="bg-black pt-4 pb-8 px-4 relative">
                                <div className="flex justify-end mb-2">
                                  <button type="button" className="text-white/80 text-[9px] flex items-center gap-0.5 border border-white/30 rounded-full px-2 py-1">EN <span>▼</span></button>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-10 h-10 rounded-full bg-[#ef4444] flex items-center justify-center text-white font-bold text-xs shrink-0">
                                    {(previewContent.name || "N").split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "N"}
                                  </div>
                                  <div>
                                    <h1 className="text-white text-sm font-bold leading-tight truncate">{previewContent.name || "Your Name"}</h1>
                                    <p className="text-white text-[9px] truncate">{previewContent.subtitle || "Title"}</p>
                                  </div>
                                </div>
                                <p className="text-white/90 text-[9px] mt-2 line-clamp-2">{previewContent.description}</p>
                                {previewContent.extraLine && <p className="text-white/70 text-[8px] mt-0.5 truncate">{previewContent.extraLine}</p>}
                                <button type="button" className="mt-3 w-full rounded-lg border border-white text-white text-[9px] font-medium py-2">Let&apos;s Build Your Brand Online – DM To Connect</button>
                              </header>
                              {/* Profile picture – centered, overlapping */}
                              <div className="flex justify-center -mt-6 relative z-10 px-4">
                                <div className="w-16 h-16 rounded-full border-4 border-[#1A1A2E] bg-slate-600 overflow-hidden shrink-0" />
                              </div>
                              {/* Name + role + company */}
                              <div className="text-center pt-2 px-4">
                                <p className="text-white text-sm font-bold inline-flex items-center gap-1">{previewContent.name} <span className="text-[#38bdf8]">✓</span></p>
                                <p className="text-white/90 text-[10px] mt-0.5">{previewContent.subtitle}</p>
                                <p className="text-white/80 text-[9px]">Founder & CEO · Aayzen Digital</p>
                              </div>
                              {/* Description */}
                              <div className="px-4 pt-3 text-center">
                                <p className="text-white/90 text-[9px] leading-snug">Helping businesses grow their online presence through <strong className="text-white">digital marketing, social media marketing,</strong> and brand-focused growth strategies.</p>
                                <p className="text-white/90 text-[9px] leading-snug mt-1.5">Also building smart <strong className="text-white">digital business card solutions</strong> to help professionals showcase and share their identity online.</p>
                              </div>
                              {/* Add to contact – primary CTA */}
                              <div className="px-4 pt-4">
                                <button type="button" className="w-full rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white text-[10px] font-semibold py-2.5 flex items-center justify-center gap-2 shadow-lg">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                                  Add to contact
                                </button>
                              </div>
                              {/* Title banner – OpenMyProfile style */}
                              <div className="mt-4 mx-4 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] py-2 px-3 text-center">
                                <p className="text-white text-[10px] font-bold">OpenMyProfile – Digital Business Card</p>
                              </div>
                              {/* Contact grid – 2x2 with icons in light blue circles */}
                              <div className="px-4 pt-4 grid grid-cols-2 gap-2">
                                <div className="flex items-start gap-2">
                                  <div className="w-8 h-8 rounded-full bg-[#38bdf8]/20 flex items-center justify-center shrink-0 text-[#38bdf8] text-xs">✉</div>
                                  <div className="min-w-0">
                                    <p className="text-white/60 text-[8px]">Email</p>
                                    <p className="text-white text-[9px] truncate">{previewContent.extraLine?.split("·")[0]?.trim() || previewContent.officialWebsite || "email@example.com"}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <div className="w-8 h-8 rounded-full bg-[#38bdf8]/20 flex items-center justify-center shrink-0 text-[#38bdf8] text-xs">📱</div>
                                  <div className="min-w-0">
                                    <p className="text-white/60 text-[8px]">Mobile Number</p>
                                    <p className="text-white text-[9px] truncate">{previewContent.extraLine?.split("·")[1]?.trim() || "+91 9977216140"}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <div className="w-8 h-8 rounded-full bg-[#38bdf8]/20 flex items-center justify-center shrink-0 text-[#38bdf8] text-xs">🎂</div>
                                  <div className="min-w-0">
                                    <p className="text-white/60 text-[8px]">Date of Birth</p>
                                    <p className="text-white text-[9px]">18/09/1996</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <div className="w-8 h-8 rounded-full bg-[#38bdf8]/20 flex items-center justify-center shrink-0 text-[#38bdf8] text-xs">📍</div>
                                  <div className="min-w-0">
                                    <p className="text-white/60 text-[8px]">Address</p>
                                    <p className="text-white text-[9px] truncate">Madhya Pradesh, India</p>
                                  </div>
                                </div>
                              </div>
                              {/* QR Code section – white card, QR + profile */}
                              <div className="px-4 pt-4">
                                <p className="text-white text-xs font-bold mb-2 flex items-center justify-between">
                                  QR Code
                                  <span className="w-7 h-7 rounded-full bg-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8]">
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 8a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm8-8a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zm0 8a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clipRule="evenodd" /></svg>
                                  </span>
                                </p>
                                <div className="bg-white rounded-2xl p-3 flex items-center gap-3">
                                  <div className="w-14 h-14 rounded-lg bg-black flex-shrink-0 [background-size:6px_6px]" style={{ backgroundImage: "radial-gradient(circle, #000 40%, transparent 41%)" }} />
                                  <div className="w-12 h-12 rounded-full bg-slate-300 flex-shrink-0" />
                                </div>
                              </div>
                               {/* Our Services – Dynamic from card data */}
                              <div className="px-4 pt-4">
                                <p className="text-white text-xs font-bold mb-3 text-center">Our Services</p>
                                <div className="grid grid-cols-2 gap-2">
                                  {(((currentCard as any)?.services as any[]) ?? []).length > 0 ? (
                                    (((currentCard as any)?.services as any[]) ?? []).slice(0, 4).map((svc, idx) => (
                                      <div key={svc.id || idx} className="rounded-xl border border-[#38bdf8]/30 bg-white/5 p-2">
                                        <div className="w-full h-10 rounded-lg bg-white/10 mb-1.5 flex items-center justify-center overflow-hidden">
                                          {svc.icon ? (
                                            <img src={svc.icon} alt={svc.name} className="h-full w-full object-cover" />
                                          ) : (
                                            <span className="text-[#38bdf8] text-xs font-bold">{idx + 1}</span>
                                          )}
                                        </div>
                                        <p className="text-white text-[10px] font-bold line-clamp-1">{svc.name}</p>
                                        <p className="text-white/70 text-[8px] mt-0.5 line-clamp-2">{svc.description}</p>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="col-span-2 text-center py-4 rounded-xl border border-dashed border-white/20">
                                       <p className="text-white/40 text-[9px]">No services added yet.</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                              {/* Gallery – 2 images + carousel dots */}
                              <div className="px-4 pt-4">
                                <p className="text-white text-xs font-bold mb-2 text-center">Gallery</p>
                                <div className="flex gap-2">
                                  <div className="flex-1 aspect-[4/3] rounded-xl border border-[#38bdf8]/30 bg-slate-600" />
                                  <div className="flex-1 aspect-[4/3] rounded-xl border border-[#38bdf8]/30 bg-slate-600" />
                                </div>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                  <span className="text-white/50 text-xs">◀</span>
                                  <span className="flex gap-1"><span className="w-1.5 h-1.5 rounded-full bg-white/40" /><span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" /><span className="w-1.5 h-1.5 rounded-full bg-white/40" /></span>
                                  <span className="text-white/50 text-xs">▶</span>
                                </div>
                              </div>
                              {/* Products – one product card */}
                              <div className="px-4 pt-4 pb-4">
                                <p className="text-white text-xs font-bold mb-2 text-center">Products</p>
                                <div className="rounded-2xl border border-[#38bdf8]/40 bg-gradient-to-b from-[#38bdf8]/20 to-transparent overflow-hidden">
                                  <div className="h-16 bg-white/10 flex items-center justify-center text-[#38bdf8] text-2xl">📱</div>
                                  <div className="p-2">
                                    <p className="text-white text-[10px] font-bold">Digital Business Card</p>
                                    <p className="text-white/70 text-[8px] mt-0.5 line-clamp-2">A smart digital business card to share your details, services, and links instantly.</p>
                                    <p className="text-white font-bold text-[10px] mt-1">₹2,999.00</p>
                                  </div>
                                </div>
                                <p className="text-center text-[#38bdf8] text-[9px] underline mt-2">View More Products</p>
                              </div>
                              {/* Social icons row */}
                              <div className="flex items-center justify-center gap-4 py-3 px-4 border-t border-white/10">
                                <span className="w-8 h-8 rounded-full border border-[#38bdf8]/40 flex items-center justify-center text-white text-xs">🌐</span>
                                <span className="w-8 h-8 rounded-full border border-[#38bdf8]/40 flex items-center justify-center text-white text-[10px] font-bold">X</span>
                                <span className="w-8 h-8 rounded-full border border-[#38bdf8]/40 flex items-center justify-center text-white text-[10px] font-bold">f</span>
                                <span className="w-8 h-8 rounded-full border border-[#38bdf8]/40 flex items-center justify-center text-white text-xs">📷</span>
                                <span className="w-8 h-8 rounded-full border border-[#38bdf8]/40 flex items-center justify-center text-white text-xs">▶</span>
                              </div>
                            </div>
                          ) : (
                            <div className="flex-1 flex flex-col bg-[#0f2630]">
                              <div className={`relative h-24 bg-gradient-to-b ${accent} rounded-t-[1.5rem] overflow-hidden`}>
                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                                <button
                                  type="button"
                                  className="absolute top-8 right-3 flex items-center gap-0.5 rounded-full px-2.5 py-1 text-xs font-medium shadow"
                                  style={{
                                    backgroundColor: isLight ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.2)",
                                    color: textOnPrimary,
                                  }}
                                >
                                  EN
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </button>
                              </div>
                              <div className="relative -mt-6 px-4 pb-2">
                                <div className="absolute inset-0 top-0 h-20 bg-[#142633] rounded-t-2xl" />
                                <div className="relative flex items-center gap-3 pt-2">
                                  <div
                                    className="h-14 w-14 rounded-full border-2 overflow-hidden bg-gray-600 flex-shrink-0"
                                    style={{ borderColor: primaryColor }}
                                  />
                                  <div className="flex-1 min-w-0">
                                    <p
                                      className="text-base font-semibold truncate"
                                      style={{ color: primaryColor }}
                                    >
                                      {previewContent.name}
                                    </p>
                                    <p
                                      className="text-xs opacity-90 truncate"
                                      style={{ color: primaryColor }}
                                    >
                                      {previewContent.subtitle}
                                    </p>
                                  </div>
                                  <button
                                    type="button"
                                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: primaryColor, color: textOnPrimary }}
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div className="flex-1 px-4 py-3 overflow-y-auto">
                                <p className="text-[11px] leading-relaxed text-gray-300">
                                  {previewContent.description}
                                </p>
                                {previewContent.extraLine && (
                                  <p className="text-[10px] text-gray-400 mt-2">{previewContent.extraLine}</p>
                                )}
                                {previewContent.officialWebsite && (
                                  <p className="text-[10px] text-gray-400 mt-1.5 flex items-center gap-1">
                                    <span className="text-gray-500">Official Website:</span>
                                    <span className="text-brand-400 underline">{previewContent.officialWebsite}</span>
                                  </p>
                                )}
                                {(previewContent.address || previewContent.company) && (
                                  <p className="text-[10px] text-gray-400 mt-1">
                                    {[previewContent.company, previewContent.address].filter(Boolean).join(" · ")}
                                  </p>
                                )}
                                <div className="mt-6 space-y-3">
                                  <button
                                    type="button"
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold"
                                    style={{ backgroundColor: primaryColor, color: textOnPrimary }}
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                                      />
                                    </svg>
                                    {previewContent.ctaLabel}
                                  </button>
                                  <div className="flex gap-2">
                                    <div className="flex-1 flex items-center justify-center rounded-full border border-white/40 h-9 text-white text-xs font-medium">
                                      fb
                                    </div>
                                    <div className="flex-1 flex items-center justify-center rounded-full border border-white/40 h-9 text-white text-xs font-medium">
                                      in
                                    </div>
                                    <div className="flex-1 flex items-center justify-center rounded-full border border-white/40 h-9 text-white text-xs font-medium">
                                      x
                                    </div>
                                  </div>
                                </div>
                                {(((currentCard as any)?.testimonials as any[]) ?? []).length > 0 && (
                                  <div className="mt-8 pt-4 border-t border-white/10">
                                    <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest text-center mb-4">
                                      Testimonials
                                    </p>
                                    <div className="space-y-3">
                                      {(((currentCard as any)?.testimonials as any[]) ?? []).slice(0, 2).map((t, idx) => (
                                        <div key={t.id || idx} className="rounded-xl bg-white/5 border border-white/10 p-3">
                                          <div className="flex items-center gap-2 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden shrink-0">
                                              {t.image ? (
                                                <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
                                              ) : (
                                                <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-white/40">
                                                  {(t.name || "C")[0].toUpperCase()}
                                                </div>
                                              )}
                                            </div>
                                            <div className="min-w-0">
                                              <p className="text-[10px] font-semibold text-white truncate">{t.name}</p>
                                              <p className="text-[8px] text-white/40 truncate">{t.role}</p>
                                            </div>
                                          </div>
                                          <p className="text-[9px] text-white/70 leading-relaxed line-clamp-3 italic">
                                            &quot;{t.quote}&quot;
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                                {(((currentCard as any)?.services as any[]) ?? []).length > 0 && (
                                  <div className="mt-8 pt-4 border-t border-white/10">
                                    <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest text-center mb-4">
                                      Services
                                    </p>
                                    <div className="grid grid-cols-1 gap-3">
                                      {(((currentCard as any)?.services as any[]) ?? []).slice(0, 3).map((svc, idx) => (
                                        <div key={svc.id || idx} className="rounded-xl bg-white/5 border border-white/10 p-3 flex items-start gap-3">
                                          <div className="w-10 h-10 rounded-lg bg-white/10 overflow-hidden shrink-0 flex items-center justify-center text-white/60 text-xs">
                                             {svc.icon ? (
                                               <img src={svc.icon} alt={svc.name} className="h-full w-full object-cover" />
                                             ) : (
                                               <span>{idx + 1}</span>
                                             )}
                                          </div>
                                          <div className="min-w-0">
                                            <p className="text-[10px] font-semibold text-white truncate">{svc.name}</p>
                                            <p className="text-[8px] text-white/60 leading-normal line-clamp-2">{svc.description}</p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                        {selectedTemplate ? `${selectedTemplate.name} on mobile` : "Template on mobile"}
                      </p>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Dynamic vCard – advanced controls + preview */}
            {activeSection === "dynamic" && (
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Controls */}
                <div className="flex-1 space-y-6 max-w-xl">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">Dynamic vCard</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Choose your brand colors and button style for the dynamic vCard layout.
                    </p>
                    {selectedTemplateId != null && (() => {
                      const t = VCARD_TEMPLATES.find((x) => x.id === selectedTemplateId);
                      return t ? (
                        <p className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-brand-500/10 px-3 py-1.5 text-sm font-medium text-brand-700 dark:text-brand-300">
                          <span className="inline-block h-2 w-2 rounded-full bg-brand-500" />
                          Using template: {t.name}
                        </p>
                      ) : null;
                    })()}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">
                        Primary Color:
                      </label>
                      <div className="rounded-md border border-gray-300 bg-white shadow-sm px-3 py-2">
                        <div className="h-6 rounded-md bg-gray-100 flex items-center">
                          <input
                            type="color"
                            value={dynamicPrimaryColor}
                            onChange={(e) => setDynamicPrimaryColor(e.target.value)}
                            className="h-5 w-full cursor-pointer rounded-md border-0 bg-transparent p-0 [appearance:none]"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">
                        Background Secondary color:
                      </label>
                      <div className="rounded-md border border-gray-300 bg-white shadow-sm px-3 py-2">
                        <div className="h-6 rounded-md bg-gray-100 flex items-center">
                          <input
                            type="color"
                            value={dynamicBgSecondary}
                            onChange={(e) => setDynamicBgSecondary(e.target.value)}
                            className="h-5 w-full cursor-pointer rounded-md border-0 bg-transparent p-0 [appearance:none]"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">
                        Background color:
                      </label>
                      <div className="rounded-md border border-gray-300 bg-white shadow-sm px-3 py-2">
                        <div className="h-6 rounded-md bg-gray-100 flex items-center">
                          <input
                            type="color"
                            value={dynamicBgColor}
                            onChange={(e) => setDynamicBgColor(e.target.value)}
                            className="h-5 w-full cursor-pointer rounded-md border-0 bg-transparent p-0 [appearance:none]"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">
                        Button Text Color:
                      </label>
                      <div className="rounded-md border border-gray-300 bg-white shadow-sm px-3 py-2">
                        <div className="h-6 rounded-md bg-gray-100 flex items-center">
                          <input
                            type="color"
                            value={dynamicButtonTextColor}
                            onChange={(e) => setDynamicButtonTextColor(e.target.value)}
                            className="h-5 w-full cursor-pointer rounded-md border-0 bg-transparent p-0 [appearance:none]"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">
                        Label Text Color:
                      </label>
                      <div className="rounded-md border border-gray-300 bg-white shadow-sm px-3 py-2">
                        <div className="h-6 rounded-md bg-gray-100 flex items-center">
                          <input
                            type="color"
                            value={dynamicLabelColor}
                            onChange={(e) => setDynamicLabelColor(e.target.value)}
                            className="h-5 w-full cursor-pointer rounded-md border-0 bg-transparent p-0 [appearance:none]"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">
                        Description Text Color:
                      </label>
                      <div className="rounded-md border border-gray-300 bg-white shadow-sm px-3 py-2">
                        <div className="h-6 rounded-md bg-gray-100 flex items-center">
                          <input
                            type="color"
                            value={dynamicDescriptionColor}
                            onChange={(e) => setDynamicDescriptionColor(e.target.value)}
                            className="h-5 w-full cursor-pointer rounded-md border-0 bg-transparent p-0 [appearance:none]"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">
                        Cards Background:
                      </label>
                      <div className="rounded-md border border-gray-300 bg-white shadow-sm px-3 py-2">
                        <div className="h-6 rounded-md bg-gray-100 flex items-center">
                          <input
                            type="color"
                            defaultValue="#ffffff"
                            className="h-5 w-full cursor-pointer rounded-md border-0 bg-transparent p-0 [appearance:none]"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">
                        Social Icon Color:
                      </label>
                      <div className="rounded-md border border-gray-300 bg-white shadow-sm px-3 py-2">
                        <div className="h-6 rounded-md bg-gray-100 flex items-center">
                          <input
                            type="color"
                            defaultValue="#ffffff"
                            className="h-5 w-full cursor-pointer rounded-md border-0 bg-transparent p-0 [appearance:none]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-medium text-gray-700 dark:text-gray-200">Sticky Button:</p>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setStickyButtonPosition("left")}
                        className={`min-w-[96px] rounded-md px-5 py-2 text-xs font-medium shadow-sm transition-colors ${
                          stickyButtonPosition === "left"
                            ? "bg-gray-800 text-white border-2 border-gray-800"
                            : "bg-gray-300 text-gray-900 hover:bg-gray-400"
                        }`}
                      >
                        Left
                      </button>
                      <button
                        type="button"
                        onClick={() => setStickyButtonPosition("right")}
                        className={`min-w-[96px] rounded-md px-5 py-2 text-xs font-medium transition-colors ${
                          stickyButtonPosition === "right"
                            ? "bg-gray-800 text-white border-2 border-black"
                            : "bg-gray-300 text-gray-900 hover:bg-gray-400"
                        }`}
                      >
                        Right
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-medium text-gray-700 dark:text-gray-200">Button Styles:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { n: 1, className: "rounded-md border-2 border-black bg-white text-gray-900" },
                        { n: 2, className: "rounded-md bg-gray-300 text-gray-800" },
                        { n: 3, className: "rounded-full bg-gray-300 text-gray-800" },
                        { n: 4, className: "rounded-md bg-gray-300 text-gray-800" },
                        { n: 5, className: "rounded-full border-2 border-black bg-white text-gray-900" },
                        { n: 6, className: "rounded-md border-2 border-dotted border-black bg-white text-gray-900" },
                        { n: 7, className: "rounded-md border border-black bg-white text-gray-900" },
                        { n: 8, className: "rounded-md bg-gray-300 text-gray-800" },
                        { n: 9, className: "rounded-[999px] rounded-bl-[2rem] bg-gray-300 text-gray-800" },
                        { n: 10, className: "rounded-md border border-gray-500 bg-white text-gray-800" },
                      ].map(({ n, className }) => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setSelectedButtonStyle(n as typeof selectedButtonStyle)}
                          className={`flex items-center justify-center px-4 py-2 text-xs font-semibold transition-all ${className} ${
                            selectedButtonStyle === n ? "ring-2 ring-brand-500 ring-offset-2" : ""
                          }`}
                        >
                          Style {n}
                        </button>
                      ))}
                    </div>
                  </div>

                  </div>

                {/* Phone preview – uses Dynamic vCard colors + sticky button position */}
                <div className="flex-1 flex justify-center">
                  <div className="relative w-[320px] h-[640px] rounded-[2.5rem] bg-black shadow-2xl overflow-hidden border-[10px] border-black/80">
                    <div className="absolute inset-x-16 top-2 h-5 rounded-full bg-black/60" />
                    <div className="absolute inset-0" style={{ backgroundColor: dynamicBgColor }} />
                    <div className="absolute top-0 left-0 right-0 h-40 rounded-b-3xl" style={{ backgroundColor: dynamicPrimaryColor }} />
                    <div className="absolute top-28 left-0 right-0 rounded-t-[3rem]" style={{ backgroundColor: dynamicBgSecondary }} />

                    {/* Sticky button – position left/right based on control */}
                    <div
                      className="absolute top-20 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                      style={{
                        backgroundColor: dynamicPrimaryColor,
                        left: stickyButtonPosition === "left" ? 12 : undefined,
                        right: stickyButtonPosition === "right" ? 12 : undefined,
                      }}
                    >
                      <svg className="w-5 h-5" style={{ color: dynamicButtonTextColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>

                    <div className="relative h-full w-full px-5 pt-24 pb-6 flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="h-16 w-16 rounded-full border-4 overflow-hidden bg-gray-500"
                          style={{ borderColor: dynamicPrimaryColor }}
                        />
                        <div>
                          <p className="text-base font-semibold" style={{ color: dynamicPrimaryColor }}>Pallavi Hegde</p>
                          <p className="text-xs" style={{ color: dynamicLabelColor }}>UI / UX Designer</p>
                        </div>
                      </div>

                      <p className="text-[11px] leading-relaxed" style={{ color: dynamicDescriptionColor }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>

                      <div className="mt-auto space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <button
                            type="button"
                            className={`inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold shadow ${
                              selectedButtonStyle === 9
                                ? "rounded-[999px] rounded-bl-[2rem]"
                                : selectedButtonStyle === 3 || selectedButtonStyle === 5
                                  ? "rounded-full"
                                  : "rounded-md"
                            }`}
                            style={
                              [2, 3, 4, 8, 9].includes(selectedButtonStyle)
                                ? { backgroundColor: dynamicPrimaryColor, color: dynamicButtonTextColor }
                                : {
                                    borderWidth: [1, 5, 6].includes(selectedButtonStyle) ? 2 : 1,
                                    borderStyle: selectedButtonStyle === 6 ? "dotted" : "solid",
                                    borderColor: dynamicPrimaryColor,
                                    color: dynamicPrimaryColor,
                                    backgroundColor: "transparent",
                                  }
                            }
                          >
                            <span className="mr-1.5">Add to contact</span>
                          </button>
                        </div>
                        <div className="flex items-center justify-between gap-3 text-xs">
                          {(["fb", "in", "x"] as const).map((label) => (
                            <div
                              key={label}
                              className={`flex-1 flex items-center justify-center h-9 ${
                                selectedButtonStyle === 9
                                  ? "rounded-[999px] rounded-bl-[2rem]"
                                  : selectedButtonStyle === 3 || selectedButtonStyle === 5
                                    ? "rounded-full"
                                    : "rounded-md"
                              }`}
                              style={{
                                borderWidth: [1, 5, 6].includes(selectedButtonStyle) ? 2 : 1,
                                borderStyle: selectedButtonStyle === 6 ? "dotted" : "solid",
                                borderColor: [2, 3, 4, 8, 9].includes(selectedButtonStyle) ? dynamicPrimaryColor : dynamicLabelColor,
                                color: [2, 3, 4, 8, 9].includes(selectedButtonStyle) ? dynamicButtonTextColor : dynamicLabelColor,
                                backgroundColor: [2, 3, 4, 8, 9].includes(selectedButtonStyle) ? dynamicPrimaryColor : "transparent",
                              }}
                            >
                              {label}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Business Hours – screenshot: Week Format, toggle per day, Closed button with moon icon */}
            {activeSection === "hours" && (
              <form className="space-y-6 max-w-xl">
                <div>
                  <label className={labelClass}>Week Format Type:</label>
                  <div className="relative max-w-xs">
                    <select
                      value={businessHoursWeekFormat}
                      onChange={(e) => setBusinessHoursWeekFormat(e.target.value as "monday-sunday" | "sunday-saturday")}
                      className={`${inputClass} pr-10`}
                    >
                      <option value="monday-sunday">Monday To Sunday</option>
                      <option value="sunday-saturday">Sunday To Saturday</option>
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  {(businessHoursWeekFormat === "sunday-saturday"
                    ? ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    : [...BUSINESS_HOURS_DAYS]
                  ).map((day) => {
                    const d = day as BusinessHoursDay;
                    const { enabled } = businessHours[d] ?? { enabled: false, start: "9:00 AM", end: "6:00 PM" };
                    return (
                      <div
                        key={day}
                        className="flex items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800/50 px-4 py-3"
                      >
                        <button
                          type="button"
                          role="switch"
                          aria-checked={enabled}
                          onClick={() => setBusinessHoursDay(d, { enabled: !enabled })}
                          className={`relative h-6 w-11 shrink-0 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                            enabled ? "bg-brand-500" : "bg-gray-200 dark:bg-white/10"
                          }`}
                        >
                          <span
                            className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition-transform ${
                              enabled ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </button>
                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 uppercase tracking-wide min-w-[100px]">
                          {day}
                        </span>
                        <button
                          type="button"
                          onClick={() => setBusinessHoursDay(d, { enabled: false })}
                          className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700/50 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                          </svg>
                          Closed
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            )}

            {/* QR section */}
            {activeSection === "qr" && (
              <div className="flex justify-center items-center min-h-[320px]">
                <div className="max-w-md w-full">
                  <div className="rounded-3xl border border-gray-200 bg-white dark:bg-gray-800/50 p-6 shadow-lg">
                    <form
                      className="space-y-5"
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!useQrConfiguration || !vcardId || !currentCard) return;
                        setVCards((prev) =>
                          prev.map((c) =>
                            c.id === vcardId ? { ...c, qrCodeColor, qrBgColor } : c
                          )
                        );
                        setQrCreateSuccess(true);
                      }}
                    >
                      <div className="space-y-4">
                        <div>
                          <label className={labelClass}>QR-Code Color:</label>
                          <div className="w-full h-9 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 overflow-hidden">
                            <input
                              type="color"
                              value={qrCodeColor}
                              onChange={(e) => setQrCodeColor(e.target.value)}
                              className="h-full w-full cursor-pointer border-0 p-0 block [appearance:none] [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-0 [&::-webkit-color-swatch]:rounded-[5px]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>Background Color:</label>
                          <div className="w-full h-9 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 overflow-hidden">
                            <input
                              type="color"
                              value={qrBgColor}
                              onChange={(e) => setQrBgColor(e.target.value)}
                              className="h-full w-full cursor-pointer border-0 p-0 block [appearance:none] [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-0 [&::-webkit-color-swatch]:rounded-[5px]"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className={labelClass}>Select Style</label>
                          <select className={`${inputClass} h-11`}>
                            <option>square</option>
                            <option>rounded</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Select Eye Style</label>
                          <select className={`${inputClass} h-11`}>
                            <option>square</option>
                            <option>rounded</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-1">
                        <button
                          type="button"
                          role="switch"
                          aria-checked={useQrConfiguration}
                          onClick={() => setUseQrConfiguration((prev) => !prev)}
                          className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                            useQrConfiguration ? "bg-brand-500" : "bg-gray-200 dark:bg-white/10"
                          }`}
                        >
                          <span
                            className={`absolute left-1 top-1 inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
                              useQrConfiguration ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </button>
                        <span className="text-sm text-gray-700 dark:text-gray-300">Use This Configuration</span>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="submit"
                          disabled={!useQrConfiguration}
                          className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-brand-500"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          Discard
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* Services / Products / Insta / LinkedIn / Galleries / Blogs / Testimonials / Iframes */}
            {activeSection === "services" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Service Section Label (Small Title)</label>
                    <input
                      type="text"
                      className={inputClass}
                      value={currentCard?.serviceTitleSmall || "Our Services"}
                      placeholder="e.g. Our Services"
                      onChange={(e) => {
                        if (!vcardId) return;
                        const val = e.target.value;
                        setVCards((prev) => prev.map((c) => (c.id === vcardId ? { ...c, serviceTitleSmall: val } : c)));
                      }}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Service Section Title (Main Title)</label>
                    <input
                      type="text"
                      className={inputClass}
                      value={currentCard?.serviceTitle || "Explore Our Services"}
                      placeholder="e.g. Explore Our Professional Treatments"
                      onChange={(e) => {
                        if (!vcardId) return;
                        const val = e.target.value;
                        setVCards((prev) => prev.map((c) => (c.id === vcardId ? { ...c, serviceTitle: val } : c)));
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="relative flex-1 max-w-sm">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      value={servicesSearch}
                      onChange={(e) => setServicesSearch(e.target.value)}
                      placeholder="Search"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        Display Service Enquiry Button
                      </span>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={displayServiceEnquiryButton}
                        onClick={() => {
                          setDisplayServiceEnquiryButton((prev) => !prev);
                          if (vcardId) {
                            setVCards((prev) =>
                              prev.map((c) =>
                                c.id === vcardId ? { ...c, displayServiceEnquiryButton: !displayServiceEnquiryButton } : c
                              )
                            );
                          }
                          setServicesSuccessMessage("Service Section Enquiry Button updated successfully.");
                          setShowServicesSuccessToast(true);
                        }}
                        className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                          displayServiceEnquiryButton ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-600"
                        }`}
                      >
                        <span
                          className={`pointer-events-none absolute left-1 top-1 inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                            displayServiceEnquiryButton ? "translate-x-[1.375rem]" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        Display Images with Slider
                      </span>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={displayImagesWithSlider}
                        onClick={() => {
                          setDisplayImagesWithSlider((prev) => !prev);
                          // Here you could also update the vcard data if there's a property for this
                          setServicesSuccessMessage("Display Images with Slider updated successfully.");
                          setShowServicesSuccessToast(true);
                        }}
                        className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                          displayImagesWithSlider ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-600"
                        }`}
                      >
                        <span
                          className={`pointer-events-none absolute left-1 top-1 inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                            displayImagesWithSlider ? "translate-x-[1.375rem]" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowNewServiceModal(true)}
                      className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 shrink-0"
                    >
                      Add Service
                    </button>
                  </div>
                </div>
                {/* New Service modal */}
                {showNewServiceModal && (
                  <div
                    className="fixed inset-0 z-[100001] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="new-service-title"
                  >
                    <div className="relative w-full max-w-lg min-h-[520px] rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-5">
                        <h2 id="new-service-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                          New Service
                        </h2>
                        <button
                          type="button"
                          onClick={() => {
                            setShowNewServiceModal(false);
                            setNewServiceName("");
                            setNewServiceUrl("");
                            setNewServiceDescription("");
                            setNewServiceIconPreview(null);
                          }}
                          className="rounded p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          aria-label="Close"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <form
                        className="p-6 pb-8 space-y-5"
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (!vcardId || !newServiceName.trim() || !newServiceDescription.trim() || !newServiceIconPreview) return;

                          if (editingServiceId) {
                            // update existing service
                            setVCards((prev) =>
                              prev.map((c) =>
                                c.id === vcardId
                                  ? {
                                      ...c,
                                      services: ((c as any).services ?? []).map((s: any) =>
                                        s.id === editingServiceId
                                          ? {
                                              ...s,
                                              name: newServiceName.trim(),
                                              url: newServiceUrl.trim() || undefined,
                                              description: newServiceDescription.trim(),
                                              icon: newServiceIconPreview,
                                            }
                                          : s,
                                      ),
                                    }
                                  : c,
                              ),
                            );
                            setServicesSuccessMessage("vCard service updated successfully.");
                          } else {
                            // create new service
                            const newService = {
                              id: `service-${Date.now()}`,
                              name: newServiceName.trim(),
                              url: newServiceUrl.trim() || undefined,
                              description: newServiceDescription.trim(),
                              icon: newServiceIconPreview,
                            };
                            setVCards((prev) =>
                              prev.map((c) =>
                                c.id === vcardId
                                  ? {
                                      ...c,
                                      services: [...((c as any).services ?? []), newService],
                                    }
                                  : c,
                              ),
                            );
                            setServicesSuccessMessage("vCard service created successfully.");
                          }
                          setShowServicesSuccessToast(true);
                          setShowNewServiceModal(false);
                          setNewServiceName("");
                          setNewServiceUrl("");
                          setNewServiceDescription("");
                          setNewServiceIconPreview(null);
                          setEditingServiceId(null);
                        }}
                      >
                        <div>
                          <label className={`${labelClass}`}>Name: <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            value={newServiceName}
                            onChange={(e) => setNewServiceName(e.target.value)}
                            placeholder="Enter Service Name"
                            className={`${inputClass} mt-1`}
                            required
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Service URL:</label>
                          <input
                            type="text"
                            value={newServiceUrl}
                            onChange={(e) => setNewServiceUrl(e.target.value)}
                            placeholder="Service URL"
                            className={`${inputClass} mt-1`}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Description: <span className="text-red-500">*</span></label>
                          <textarea
                            value={newServiceDescription}
                            onChange={(e) => setNewServiceDescription(e.target.value)}
                            placeholder="Enter Short Description"
                            rows={6}
                            className={`${inputClass} mt-1 resize-none min-h-[120px]`}
                            required
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Service Icon: <span className="text-red-500">*</span></label>
                          <input
                            ref={newServiceIconInputRef}
                            type="file"
                            accept=".png,.jpg,.jpeg"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (!file) return;
                              const reader = new FileReader();
                              reader.onload = () => setNewServiceIconPreview(reader.result as string);
                              reader.readAsDataURL(file);
                            }}
                          />
                          <div className="relative mt-2 inline-block">
                            <button
                              type="button"
                              onClick={() => newServiceIconInputRef.current?.click()}
                              className="relative flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 w-32 h-32 overflow-hidden"
                            >
                              {newServiceIconPreview ? (
                                <Image src={newServiceIconPreview} alt="Service icon" fill className="object-cover" unoptimized sizes="128px" />
                              ) : (
                                <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
                                  <svg className="w-10 h-10 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                                  </svg>
                                  <span className="text-xs">Icon</span>
                                </div>
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => newServiceIconInputRef.current?.click()}
                              className="absolute -top-1 -right-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                              aria-label="Edit icon"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </button>
                          </div>
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Allowed file types: png, jpg, jpeg.</p>
                        </div>
                        <div className="flex items-center justify-end gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setShowNewServiceModal(false);
                              setNewServiceName("");
                              setNewServiceUrl("");
                              setNewServiceDescription("");
                              setNewServiceIconPreview(null);
                            }}
                            className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                          >
                            Discard
                          </button>
                          <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
                      <thead className="text-xs uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <tr>
                          <th className="px-4 py-3">ICON</th>
                          <th className="px-4 py-3">NAME</th>
                          <th className="px-4 py-3">SERVICE URL</th>
                          <th className="px-4 py-3">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(() => {
                          const all = ((currentCard as any)?.services ?? []) as {
                            id?: string;
                            name: string;
                            url?: string;
                            description: string;
                            icon: string;
                          }[];
                          const filtered = servicesSearch.trim()
                            ? all.filter((s) =>
                                s.name.toLowerCase().includes(servicesSearch.toLowerCase()),
                              )
                            : all;
                          if (!filtered.length) {
                            return (
                              <tr>
                                <td
                                  colSpan={4}
                                  className="px-4 py-12 text-center text-gray-500 dark:text-gray-400"
                                >
                                  No Data Available
                                </td>
                              </tr>
                            );
                          }
                          return filtered.map((s) => (
                            <tr
                              key={s.id || s.name}
                              className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50/60 dark:hover:bg-gray-800/60"
                            >
                              <td className="px-4 py-3">
                                <div className="h-10 w-10 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src={s.icon} alt={s.name} className="w-full h-full object-cover" />
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                <p className="font-medium text-gray-900 dark:text-gray-100">{s.name}</p>
                              </td>
                              <td className="px-4 py-3 max-w-xs">
                                <p className="truncate text-gray-600 dark:text-gray-300 text-xs">
                                  {s.url || "-"}
                                </p>
                              </td>
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-3 text-lg">
                                  <button
                                    type="button"
                                    className="text-blue-500 hover:text-blue-600"
                                    aria-label="View service"
                                    onClick={() =>
                                      setPreviewService({
                                        name: s.name,
                                        description: s.description,
                                        url: s.url,
                                        icon: s.icon,
                                      })
                                    }
                                  >
                                    👁
                                  </button>
                                  <button
                                    type="button"
                                    className="text-blue-500 hover:text-blue-600"
                                    aria-label="Edit service"
                                    onClick={() => {
                                      setEditingServiceId(s.id ?? "");
                                      setNewServiceName(s.name);
                                      setNewServiceUrl(s.url || "");
                                      setNewServiceDescription(s.description);
                                      setNewServiceIconPreview(s.icon);
                                      setShowNewServiceModal(true);
                                    }}
                                  >
                                    ✏️
                                  </button>
                                  <button
                                    type="button"
                                    className="text-red-500 hover:text-red-600"
                                    aria-label="Delete service"
                                    onClick={() => {
                                      if (!vcardId) return;
                                      // eslint-disable-next-line no-alert
                                      if (!confirm("Delete this service?")) return;
                                      setVCards((prev) =>
                                        prev.map((c) =>
                                          c.id === vcardId
                                            ? {
                                                ...c,
                                                services: ((c as any).services ?? []).filter(
                                                  (x: any) => x.id !== s.id,
                                                ),
                                              }
                                            : c,
                                        ),
                                      );
                                    }}
                                  >
                                    🗑
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ));
                        })()}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Show</span>
                      <select className={`${inputClass} h-9 py-1 pr-8 w-20`}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                      </select>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Showing{" "}
                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                          {(((currentCard as any)?.services ?? []) as any[]).length}
                        </span>{" "}
                        results
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {previewService && (
              <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
                <div className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Service preview
                    </h2>
                    <button
                      type="button"
                      onClick={() => setPreviewService(null)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                      aria-label="Close preview"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="px-6 py-5 space-y-4">
                    <div className="h-40 w-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      {previewService.icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={previewService.icon}
                          alt={previewService.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-sm text-gray-400">
                          No image set for this service.
                        </span>
                      )}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                        {previewService.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">
                        {previewService.description}
                      </p>
                      {previewService.url && (
                        <a
                          href={previewService.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                          Open service link
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {previewProduct && (
              <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
                <div className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Product preview
                    </h2>
                    <button
                      type="button"
                      onClick={() => setPreviewProduct(null)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                      aria-label="Close preview"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="px-6 py-5 space-y-4">
                    <div className="h-40 w-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      {previewProduct.icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={previewProduct.icon}
                          alt={previewProduct.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-sm text-gray-400">
                          No image set for this product.
                        </span>
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                          {previewProduct.name}
                        </h3>
                        {previewProduct.price && (
                          <span className="text-sm font-semibold text-amber-600">
                            {previewProduct.currency ? `${previewProduct.currency} ` : ""}
                            {previewProduct.price}
                          </span>
                        )}
                      </div>
                      {previewProduct.description && (
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">
                          {previewProduct.description}
                        </p>
                      )}
                      {previewProduct.url && (
                        <a
                          href={previewProduct.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                          Open product link
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "products" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="relative flex-1 max-w-sm">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      value={productsSearch}
                      onChange={(e) => setProductsSearch(e.target.value)}
                      placeholder="Search"
                      className={`${inputClass} pl-10 rounded-lg border border-gray-200 dark:border-gray-600`}
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        Display Product Enquiry Button
                      </span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={displayProductEnquiryButton}
                      onClick={() => {
                        if (!vcardId) {
                          setDisplayProductEnquiryButton((prev) => !prev);
                          return;
                        }
                        setDisplayProductEnquiryButton((prev) => {
                          const next = !prev;
                          setVCards((cards) =>
                            cards.map((c) =>
                              c.id === vcardId ? { ...c, displayProductEnquiryButton: next } : c,
                            ),
                          );
                          return next;
                        });
                      }}
                      className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        displayProductEnquiryButton ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-600"
                      }`}
                    >
                        <span
                          className={`pointer-events-none absolute left-1 top-1 inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                            displayProductEnquiryButton ? "translate-x-[1.375rem]" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowNewProductModal(true)}
                      className="inline-flex items-center justify-center rounded-lg bg-[#2563eb] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1d4ed8] shrink-0"
                    >
                      Add Product
                    </button>
                  </div>
                </div>
                {/* New Product modal */}
                {showNewProductModal && (
                  <div
                    className="fixed inset-0 z-[100001] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="new-product-title"
                  >
                    <div className="relative w-full max-w-2xl min-h-[640px] rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800 max-h-[90vh] overflow-y-auto">
                      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-8 py-5 sticky top-0 bg-white dark:bg-gray-800 z-10">
                        <h2 id="new-product-title" className="text-xl font-semibold text-gray-900 dark:text-white">
                          New Product
                        </h2>
                        <button
                          type="button"
                          onClick={() => {
                            setShowNewProductModal(false);
                            setNewProductName("");
                            setNewProductCurrency("");
                            setNewProductPrice("");
                            setNewProductSort("");
                            setNewProductUrl("");
                            setNewProductDescription("");
                            setNewProductIconPreview(null);
                          }}
                          className="rounded p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          aria-label="Close"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <form
                        className="p-8 pb-10 space-y-6"
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (!vcardId || !newProductName.trim() || !newProductIconPreview) return;

                          if (editingProductId) {
                            // Update existing product
                            setVCards((prev) =>
                              prev.map((c) =>
                                c.id === vcardId
                                  ? {
                                      ...c,
                                      products: (c.products ?? []).map((p) =>
                                        p.id === editingProductId
                                          ? {
                                              ...p,
                                              name: newProductName.trim(),
                                              currency: newProductCurrency || undefined,
                                              price: newProductPrice || undefined,
                                              sort: newProductSort || undefined,
                                              url: newProductUrl || undefined,
                                              description: newProductDescription || undefined,
                                              icon: newProductIconPreview,
                                            }
                                          : p,
                                      ),
                                    }
                                  : c,
                              ),
                            );
                            setServicesSuccessMessage("Product updated successfully.");
                          } else {
                            // Create new product
                            const newProduct = {
                              id: `product-${Date.now()}`,
                              name: newProductName.trim(),
                              currency: newProductCurrency || undefined,
                              price: newProductPrice || undefined,
                              sort: newProductSort || undefined,
                              url: newProductUrl || undefined,
                              description: newProductDescription || undefined,
                              icon: newProductIconPreview,
                            };
                            setVCards((prev) =>
                              prev.map((c) =>
                                c.id === vcardId
                                  ? {
                                      ...c,
                                      products: [...(c.products ?? []), newProduct],
                                    }
                                  : c,
                              ),
                            );
                            setServicesSuccessMessage("Product added successfully.");
                          }
                          setShowServicesSuccessToast(true);
                          setShowNewProductModal(false);
                          setNewProductName("");
                          setNewProductCurrency("");
                          setNewProductPrice("");
                          setNewProductSort("");
                          setNewProductUrl("");
                          setNewProductDescription("");
                          setNewProductIconPreview(null);
                          setEditingProductId(null);
                        }}
                      >
                        <div>
                          <label className={labelClass}>Name: <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            value={newProductName}
                            onChange={(e) => setNewProductName(e.target.value)}
                            placeholder="Enter Product Name"
                            className={`${inputClass} mt-1`}
                            required
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Currency:</label>
                          <select
                            value={newProductCurrency}
                            onChange={(e) => setNewProductCurrency(e.target.value)}
                            className={`${inputClass} mt-1`}
                          >
                            <option value="">Select Currency</option>
                            <option value="USD">USD</option>
                            <option value="INR">INR</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className={labelClass}>Price:</label>
                            <input
                              type="text"
                              value={newProductPrice}
                              onChange={(e) => setNewProductPrice(e.target.value)}
                              placeholder="Enter Price"
                              className={`${inputClass} mt-1`}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>Sort:</label>
                            <input
                              type="text"
                              value={newProductSort}
                              onChange={(e) => setNewProductSort(e.target.value)}
                              placeholder="Sort"
                              className={`${inputClass} mt-1`}
                            />
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>Product URL:</label>
                          <input
                            type="text"
                            value={newProductUrl}
                            onChange={(e) => setNewProductUrl(e.target.value)}
                            placeholder="Enter Product URL"
                            className={`${inputClass} mt-1`}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Description:</label>
                          <textarea
                            value={newProductDescription}
                            onChange={(e) => setNewProductDescription(e.target.value)}
                            placeholder="Enter Short Description"
                            rows={6}
                            className={`${inputClass} mt-1 resize-none min-h-[120px]`}
                          />
                        </div>
                        <div>
                          <label className={`${labelClass} inline-flex items-center gap-1`}>
                            Product Icon: <span className="text-red-500">*</span>
                            <span className="text-gray-400 cursor-help" title="Upload product icon">?</span>
                          </label>
                          <input
                            ref={newProductIconInputRef}
                            type="file"
                            accept=".png,.jpg,.jpeg"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (!file) return;
                              const reader = new FileReader();
                              reader.onload = () => setNewProductIconPreview(reader.result as string);
                              reader.readAsDataURL(file);
                            }}
                          />
                          <div className="relative mt-2 inline-block">
                            <button
                              type="button"
                              onClick={() => newProductIconInputRef.current?.click()}
                              className="relative flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 w-40 h-40 overflow-hidden"
                            >
                              {newProductIconPreview ? (
                                <Image src={newProductIconPreview} alt="Product icon" fill className="object-cover" unoptimized sizes="160px" />
                              ) : (
                                <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
                                  <svg className="w-10 h-10 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                                  </svg>
                                  <span className="text-xs">Icon</span>
                                </div>
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => newProductIconInputRef.current?.click()}
                              className="absolute -top-1 -right-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                              aria-label="Edit icon"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </button>
                          </div>
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Allowed file types: png, jpg, jpeg.</p>
                        </div>
                        <div className="flex items-center justify-end gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setShowNewProductModal(false);
                              setNewProductName("");
                              setNewProductCurrency("");
                              setNewProductPrice("");
                              setNewProductSort("");
                              setNewProductUrl("");
                              setNewProductDescription("");
                              setNewProductIconPreview(null);
                            }}
                            className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                          >
                            Discard
                          </button>
                          <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                  <div className="overflow-x-auto overflow-y-visible">
                    <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
                      <thead className="text-xs uppercase text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <tr>
                          <th className="px-4 py-3 font-semibold">ICON</th>
                          <th className="px-4 py-3 font-semibold">
                            <span className="inline-flex items-center gap-1">
                              NAME
                              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                              </svg>
                            </span>
                          </th>
                          <th className="px-4 py-3 font-semibold">PRODUCT URL</th>
                          <th className="px-4 py-3 font-semibold">
                            <span className="inline-flex items-center gap-1">
                              PRICE
                              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                              </svg>
                            </span>
                          </th>
                          <th className="px-4 py-3 font-semibold">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(() => {
                          const all = (currentCard?.products ?? []) as {
                            id: string;
                            name: string;
                            currency?: string;
                            price?: string;
                            url?: string;
                            icon: string;
                          }[];
                          const filtered = productsSearch.trim()
                            ? all.filter((p) =>
                                p.name.toLowerCase().includes(productsSearch.toLowerCase()),
                              )
                            : all;
                          const rows = filtered.slice(0, productsShowPerPage);
                          if (!rows.length) {
                            return (
                              <tr>
                                <td
                                  colSpan={5}
                                  className="px-4 py-12 text-center text-gray-600 dark:text-gray-400"
                                >
                                  No Data Available
                                </td>
                              </tr>
                            );
                          }
                          return rows.map((p) => (
                            <tr
                              key={p.id}
                              className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50/60 dark:hover:bg-gray-800/60"
                            >
                              <td className="px-4 py-3">
                                <div className="h-10 w-10 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={p.icon}
                                    alt={p.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                <p className="font-medium text-gray-900 dark:text-gray-100">
                                  {p.name}
                                </p>
                              </td>
                              <td className="px-4 py-3 max-w-xs">
                                <p className="truncate text-gray-600 dark:text-gray-300 text-xs">
                                  {p.url || "-"}
                                </p>
                              </td>
                              <td className="px-4 py-3">
                                <p className="text-gray-900 dark:text-gray-100 text-sm">
                                  {p.price
                                    ? `${p.currency ? p.currency + " " : ""}${p.price}`
                                    : "-"}
                                </p>
                              </td>
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-3 text-lg">
                                  <button
                                    type="button"
                                    className="text-blue-500 hover:text-blue-600"
                                    aria-label="View product"
                                    onClick={() =>
                                      setPreviewProduct({
                                        name: p.name,
                                        description: p.description,
                                        price: p.price,
                                        currency: p.currency,
                                        url: p.url,
                                        icon: p.icon,
                                      })
                                    }
                                  >
                                    👁
                                  </button>
                                  <button
                                    type="button"
                                    className="text-blue-500 hover:text-blue-600"
                                    aria-label="Edit product"
                                    onClick={() => {
                                      setEditingProductId(p.id);
                                      setNewProductName(p.name);
                                      setNewProductCurrency(p.currency || "");
                                      setNewProductPrice(p.price || "");
                                      setNewProductSort(p.sort || "");
                                      setNewProductUrl(p.url || "");
                                      setNewProductDescription(p.description || "");
                                      setNewProductIconPreview(p.icon);
                                      setShowNewProductModal(true);
                                    }}
                                  >
                                    ✏️
                                  </button>
                                  <button
                                    type="button"
                                    className="text-red-500 hover:text-red-600"
                                    aria-label="Delete product"
                                    onClick={() => {
                                      if (!vcardId) return;
                                      // eslint-disable-next-line no-alert
                                      if (!confirm("Delete this product?")) return;
                                      setVCards((prev) =>
                                        prev.map((c) =>
                                          c.id === vcardId
                                            ? {
                                                ...c,
                                                products: (c.products ?? []).filter(
                                                  (x) => x.id !== p.id,
                                                ),
                                              }
                                            : c,
                                        ),
                                      );
                                    }}
                                  >
                                    🗑
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ));
                        })()}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Show</span>
                      <select
                        value={productsShowPerPage}
                        onChange={(e) => setProductsShowPerPage(Number(e.target.value))}
                        className={`${inputClass} h-9 py-1 pr-8 w-20 rounded-lg border border-gray-200 dark:border-gray-600`}
                      >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                      </select>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Showing{" "}
                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                          {(currentCard?.products ?? []).length}
                        </span>{" "}
                        results
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "insta" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="relative flex-1 max-w-sm">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      value={instaSearch}
                      onChange={(e) => setInstaSearch(e.target.value)}
                      placeholder="Search"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => { setEmbedGuideType("instagram"); setShowEmbedGuideModal(true); }}
                      className="inline-flex items-center justify-center rounded-lg bg-amber-400 hover:bg-amber-500 px-4 py-2.5 text-sm font-semibold text-gray-900 shrink-0"
                    >
                      How It works?
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddEmbedTagModal(true)}
                      className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 shrink-0"
                    >
                      Add Embed-Tag
                    </button>
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
                      <thead className="text-xs uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <tr>
                          <th className="px-4 py-3">TYPE</th>
                          <th className="px-4 py-3">EMBED-TAG</th>
                          <th className="px-4 py-3">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={3} className="px-4 py-12 text-center text-gray-500 dark:text-gray-400">
                            No Data Available
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Show</span>
                      <select className={`${inputClass} h-9 py-1 pr-8 w-20`}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                      </select>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Showing{" "}
                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                          {(((currentCard as any)?.services ?? []) as any[]).length}
                        </span>{" "}
                        results
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "linkedin" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="relative flex-1 max-w-sm">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      value={linkedinSearch}
                      onChange={(e) => setLinkedinSearch(e.target.value)}
                      placeholder="Search"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => { setEmbedGuideType("linkedin"); setShowEmbedGuideModal(true); }}
                      className="inline-flex items-center justify-center rounded-lg bg-orange-400 hover:bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shrink-0"
                    >
                      How It works?
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddEmbedTagModal(true)}
                      className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 shrink-0"
                    >
                      Add Embed-Tag
                    </button>
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
                      <thead className="text-xs uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <tr>
                          <th className="px-4 py-3">TYPE</th>
                          <th className="px-4 py-3">EMBED-TAG</th>
                          <th className="px-4 py-3">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={3} className="px-4 py-12 text-center text-gray-500 dark:text-gray-400">
                            No Data Available
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Show</span>
                      <select className={`${inputClass} h-9 py-1 pr-8 w-20`}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                      </select>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Showing 0 results</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "galleries" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="relative flex-1 max-w-sm">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      value={galleriesSearch}
                      onChange={(e) => setGalleriesSearch(e.target.value)}
                      placeholder="Search"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowNewGalleryModal(true)}
                    className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 shrink-0"
                  >
                    Add Gallery
                  </button>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
                      <thead className="text-xs uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <tr>
                          <th className="px-4 py-3">TYPE</th>
                          <th className="px-4 py-3">LINK</th>
                          <th className="px-4 py-3">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={3} className="px-4 py-12 text-center text-gray-500 dark:text-gray-400">
                            No Data Available
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Show</span>
                      <select className={`${inputClass} h-9 py-1 pr-8 w-20`}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                      </select>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Showing 0 results</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "blogs" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="relative flex-1 max-w-sm">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      value={blogsSearch}
                      onChange={(e) => setBlogsSearch(e.target.value)}
                      placeholder="Search"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 shrink-0"
                    onClick={() => setShowNewBlogModal(true)}
                  >
                    Add Blog
                  </button>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
                      <thead className="text-xs uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <tr>
                          <th className="px-4 py-3">ICON</th>
                          <th className="px-4 py-3">TITLE</th>
                          <th className="px-4 py-3">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(() => {
                          const allBlogs = currentCard?.blogs ?? [];
                          const filtered = blogsSearch.trim()
                            ? allBlogs.filter((b) =>
                                b.title.toLowerCase().includes(blogsSearch.toLowerCase())
                              )
                            : allBlogs;
                          if (!filtered.length) {
                            return (
                              <tr>
                                <td colSpan={3} className="px-4 py-12 text-center text-gray-500 dark:text-gray-400">
                                  No Data Available
                                </td>
                              </tr>
                            );
                          }
                          return filtered.map((blog) => (
                            <tr key={blog.id} className="border-t border-gray-100 dark:border-gray-800">
                              <td className="px-4 py-3">
                                <div className="h-12 w-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src={blog.icon} alt={blog.title} className="h-full w-full object-cover" />
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                <p className="font-medium text-gray-900 dark:text-gray-100">{blog.title}</p>
                              </td>
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-3 text-lg">
                                  <button
                                    type="button"
                                    className="text-blue-500 hover:text-blue-600"
                                    aria-label="View blog"
                                    onClick={() => {
                                      setPreviewBlog({
                                        title: blog.title,
                                        description: blog.description,
                                        icon: blog.icon,
                                      });
                                    }}
                                  >
                                    👁
                                  </button>
                                  <button
                                    type="button"
                                    className="text-blue-500 hover:text-blue-600"
                                    aria-label="Edit blog"
                                    onClick={() => {
                                      setEditingBlogId(blog.id);
                                      setNewBlogTitle(blog.title);
                                      setNewBlogDescription(blog.description);
                                      setNewBlogIconPreview(blog.icon);
                                      setShowNewBlogModal(true);
                                    }}
                                  >
                                    ✏️
                                  </button>
                                  <button
                                    type="button"
                                    className="text-blue-500 hover:text-blue-600"
                                    aria-label="Delete blog"
                                    onClick={() => {
                                      if (!vcardId) return;
                                      // eslint-disable-next-line no-alert
                                      if (!confirm("Delete this blog?")) return;
                                      setVCards((prev) =>
                                        prev.map((c) =>
                                          c.id === vcardId
                                            ? {
                                                ...c,
                                                blogs: (c.blogs ?? []).filter((b) => b.id !== blog.id),
                                              }
                                            : c
                                        )
                                      );
                                    }}
                                  >
                                    🗑
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ));
                        })()}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Show</span>
                      <select className={`${inputClass} h-9 py-1 pr-8 w-20`} defaultValue={10}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                      </select>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Showing {(currentCard?.blogs ?? []).length} results
                      </span>
                    </div>
                  </div>
                </div>

              {previewBlog && (
                <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
                  <div className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Blog preview</h2>
                      <button
                        type="button"
                        onClick={() => setPreviewBlog(null)}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                        aria-label="Close preview"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="px-6 py-5 space-y-4">
                      <div className="h-40 w-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        {previewBlog.icon ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={previewBlog.icon}
                            alt={previewBlog.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span className="text-sm text-gray-400">No image set for this blog.</span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                          {previewBlog.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">
                          {previewBlog.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

                {showNewBlogModal && (
                  <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
                    <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">New Blog</h2>
                        <button
                          type="button"
                          onClick={() => {
                            setShowNewBlogModal(false);
                            setBlogFormErrors({});
                          }}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                          aria-label="Close"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <form onSubmit={handleNewBlogSubmit} className="px-6 py-5 space-y-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                            Title: <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={newBlogTitle}
                            onChange={(e) => setNewBlogTitle(e.target.value)}
                            placeholder="Enter Blog Name"
                            className={`${inputClass} ${blogFormErrors.title ? "border-red-500 focus:ring-red-500" : ""}`}
                          />
                          {blogFormErrors.title && (
                            <p className="mt-1 text-xs text-red-500">{blogFormErrors.title}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                            Description: <span className="text-red-500">*</span>
                          </label>
                          <div className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
                            <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 px-2 py-1.5">
                              <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" title="Bold">
                                <span className="font-bold text-sm">B</span>
                              </button>
                              <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 italic" title="Italic">
                                <span className="text-sm">I</span>
                              </button>
                              <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 underline" title="Underline">
                                <span className="text-sm">U</span>
                              </button>
                              <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 line-through" title="Strikethrough">
                                <span className="text-sm">S</span>
                              </button>
                            </div>
                            <textarea
                              className={`w-full min-h-[120px] px-4 py-3 text-sm text-gray-900 dark:text-white bg-transparent border-0 focus:ring-0 resize-none placeholder-gray-400 ${
                                blogFormErrors.description ? "ring-1 ring-red-500" : ""
                              }`}
                              placeholder="Description"
                              value={newBlogDescription}
                              onChange={(e) => setNewBlogDescription(e.target.value)}
                            />
                          </div>
                          {blogFormErrors.description && (
                            <p className="mt-1 text-xs text-red-500">{blogFormErrors.description}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                            Blog Icon: <span className="text-red-500">*</span>
                          </label>
                          <div className="flex flex-col items-start gap-2">
                            <div className="relative inline-flex rounded-2xl border border-gray-200 bg-gray-50 p-1 shadow-sm">
                              <div className="h-24 w-24 rounded-xl overflow-hidden bg-white">
                                {newBlogIconPreview ? (
                                  // eslint-disable-next-line @next/next/no-img-element
                                  <img src={newBlogIconPreview} alt="Blog icon preview" className="h-full w-full object-cover" />
                                ) : (
                                  // eslint-disable-next-line @next/next/no-img-element
                                  <img
                                    src="/images/placeholder/blog-icon.png"
                                    alt="Default blog icon"
                                    className="h-full w-full object-cover"
                                  />
                                )}
                              </div>
                              <button
                                type="button"
                                onClick={() => newBlogIconInputRef.current?.click()}
                                className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-500 shadow hover:bg-gray-50"
                                aria-label="Change blog icon"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>
                              </button>
                              <input
                                ref={newBlogIconInputRef}
                                type="file"
                                accept="image/png,image/jpeg,image/jpg"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (!file) return;
                                  const reader = new FileReader();
                                  reader.onload = () => {
                                    setNewBlogIconPreview(reader.result as string);
                                  };
                                  reader.readAsDataURL(file);
                                }}
                              />
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Allowed file types: png, jpg, jpeg.
                            </p>
                          </div>
                          {blogFormErrors.icon && (
                            <p className="mt-1 text-xs text-red-500">{blogFormErrors.icon}</p>
                          )}
                        </div>

                        <div className="flex justify-end gap-2 pt-2 pb-1">
                          <button
                            type="button"
                            onClick={() => {
                              setShowNewBlogModal(false);
                              setBlogFormErrors({});
                            }}
                            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                          >
                            Discard
                          </button>
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeSection === "testimonials" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="relative flex-1 max-w-sm">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      value={testimonialsSearch}
                      onChange={(e) => setTestimonialsSearch(e.target.value)}
                      placeholder="Search"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 shrink-0"
                    onClick={() => {
                      setEditingTestimonialId(null);
                      setNewTestimonialName("");
                      setNewTestimonialRole("");
                      setNewTestimonialQuote("");
                      setNewTestimonialImagePreview(null);
                      setTestimonialFormErrors({});
                      setShowNewTestimonialModal(true);
                    }}
                  >
                    Add Testimonial
                  </button>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
                      <thead className="text-xs uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <tr>
                          <th className="px-4 py-3">IMAGE</th>
                          <th className="px-4 py-3">NAME</th>
                          <th className="px-4 py-3">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(() => {
                          const all = ((currentCard as any)?.testimonials as any[]) ?? [];
                          const filtered = testimonialsSearch.trim()
                            ? all.filter((t) =>
                                (t.name || "").toLowerCase().includes(testimonialsSearch.toLowerCase())
                              )
                            : all;
                          if (!filtered.length) {
                            return (
                              <tr>
                                <td colSpan={3} className="px-4 py-12 text-center text-gray-500 dark:text-gray-400">
                                  No Data Available
                                </td>
                              </tr>
                            );
                          }
                          return filtered.map((t) => (
                            <tr key={t.id} className="border-t border-gray-100 dark:border-gray-800">
                              <td className="px-4 py-3">
                                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={t.image}
                                    alt={t.name}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                <p className="font-medium text-gray-900 dark:text-gray-100">{t.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                              </td>
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-3 text-lg">
                                  <button
                                    type="button"
                                    className="text-blue-500 hover:text-blue-600"
                                    aria-label="View testimonial"
                                    onClick={() => {
                                      alert(`${t.name} – ${t.role}\n\n${t.quote}`);
                                    }}
                                  >
                                    👁
                                  </button>
                                  <button
                                    type="button"
                                    className="text-blue-500 hover:text-blue-600"
                                    aria-label="Edit testimonial"
                                    onClick={() => {
                                      setEditingTestimonialId(t.id);
                                      setNewTestimonialName(t.name);
                                      setNewTestimonialRole(t.role);
                                      setNewTestimonialQuote(t.quote);
                                      setNewTestimonialImagePreview(t.image);
                                      setTestimonialFormErrors({});
                                      setShowNewTestimonialModal(true);
                                    }}
                                  >
                                    ✏️
                                  </button>
                                  <button
                                    type="button"
                                    className="text-red-500 hover:text-red-600"
                                    aria-label="Delete testimonial"
                                    onClick={() => {
                                      if (!vcardId) return;
                                      // eslint-disable-next-line no-alert
                                      if (!confirm("Delete this testimonial?")) return;
                                      setVCards((prev) =>
                                        prev.map((c) =>
                                          c.id === vcardId
                                            ? {
                                                ...c,
                                                testimonials: (((c as any).testimonials as any[]) ?? []).filter(
                                                  (x) => x.id !== t.id
                                                ),
                                              }
                                            : c
                                        )
                                      );
                                    }}
                                  >
                                    🗑
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ));
                        })()}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Show</span>
                      <select className={`${inputClass} h-9 py-1 pr-8 w-20`}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                      </select>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Showing {(((currentCard as any)?.testimonials as any[]) ?? []).length} results
                      </span>
                    </div>
                  </div>
                </div>

                {showNewTestimonialModal && (
                  <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
                    <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {editingTestimonialId ? "Edit Testimonial" : "New Testimonial"}
                        </h2>
                        <button
                          type="button"
                          onClick={() => {
                            setShowNewTestimonialModal(false);
                            setEditingTestimonialId(null);
                            setTestimonialFormErrors({});
                          }}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                          aria-label="Close"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <form onSubmit={handleNewTestimonialSubmit} className="px-6 py-5 space-y-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                            Name: <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={newTestimonialName}
                            onChange={(e) => setNewTestimonialName(e.target.value)}
                            placeholder="Enter Testimonial Name"
                            className={`${inputClass} ${
                              testimonialFormErrors.name ? "border-red-500 focus:ring-red-500" : ""
                            }`}
                          />
                          {testimonialFormErrors.name && (
                            <p className="mt-1 text-xs text-red-500">{testimonialFormErrors.name}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                            Description: <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            rows={3}
                            value={newTestimonialQuote}
                            onChange={(e) => setNewTestimonialQuote(e.target.value)}
                            placeholder="Enter Short Description"
                            className={`${inputClass} ${
                              testimonialFormErrors.quote ? "border-red-500 focus:ring-red-500" : ""
                            }`}
                          />
                          {testimonialFormErrors.quote && (
                            <p className="mt-1 text-xs text-red-500">{testimonialFormErrors.quote}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                            Image: <span className="text-red-500">*</span>
                          </label>
                          <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                              {newTestimonialImagePreview ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={newTestimonialImagePreview}
                                  alt={newTestimonialName || "Preview"}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <span className="text-xs text-gray-400">No image</span>
                              )}
                            </div>
                            <div>
                              <input
                                ref={newTestimonialImageInputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (!file) return;
                                  const reader = new FileReader();
                                  reader.onload = () => {
                                    setNewTestimonialImagePreview(reader.result as string);
                                  };
                                  reader.readAsDataURL(file);
                                }}
                              />
                              <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                                onClick={() => newTestimonialImageInputRef.current?.click()}
                              >
                                Upload Image
                              </button>
                              {testimonialFormErrors.image && (
                                <p className="mt-1 text-xs text-red-500">{testimonialFormErrors.image}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-end gap-3 pt-2">
                          <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 px-4 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                            onClick={() => {
                              setShowNewTestimonialModal(false);
                              setEditingTestimonialId(null);
                              setTestimonialFormErrors({});
                            }}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
                          >
                            {editingTestimonialId ? "Update" : "Save"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeSection === "iframes" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="relative flex-1 max-w-sm">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      value={iframesSearch}
                      onChange={(e) => setIframesSearch(e.target.value)}
                      placeholder="Search"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 shrink-0"
                  >
                    Add Iframe
                  </button>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
                      <thead className="text-xs uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <tr>
                          <th className="px-4 py-3">URL</th>
                          <th className="px-4 py-3">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={2} className="px-4 py-12 text-center text-gray-500 dark:text-gray-400">
                            No Data Available
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Show</span>
                      <select className={`${inputClass} h-9 py-1 pr-8 w-20`}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                      </select>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Showing 0 results</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Appointments - simplified schedule */}
            {activeSection === "appointments" && (
              <div className="space-y-6">
                {/* Appointment Type */}
                <div>
                  <p className={`${labelClass} font-bold text-gray-900 dark:text-gray-100`}>Appointment Type :</p>
                  <div className="mt-2 flex gap-6">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input
                        type="radio"
                        name="appointmentType"
                        checked={appointmentType === "free"}
                        onChange={() => setAppointmentType("free")}
                        className="h-4 w-4 border-gray-300 text-[#4E38EE] focus:ring-[#4E38EE]"
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Free</span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-2">
                      <input
                        type="radio"
                        name="appointmentType"
                        checked={appointmentType === "paid"}
                        onChange={() => setAppointmentType("paid")}
                        className="h-4 w-4 border-gray-300 text-[#4E38EE] focus:ring-[#4E38EE]"
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Paid</span>
                    </label>
                  </div>
                </div>

                {/* Appointment By Services */}
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className={`${labelClass} font-bold text-gray-900 dark:text-gray-100`}>Appointment By Services :</p>
                    <button
                      type="button"
                      onClick={addAppointmentService}
                      className="inline-flex items-center gap-1.5 rounded-lg border-2 border-[#4E38EE] bg-transparent px-4 py-2 text-sm font-semibold text-[#4E38EE] hover:bg-[#4E38EE]/10"
                    >
                      <span className="text-lg leading-none">+</span> Add Service
                    </button>
                  </div>
                  <div className="mt-3 space-y-3">
                    {appointmentServices.map((svc) => (
                      <div key={svc.id} className="flex flex-wrap items-end gap-4">
                        <div className="min-w-[200px] flex-1">
                          <label className={labelClass}>Service Name:</label>
                          <select
                            value={svc.serviceName}
                            onChange={(e) => updateAppointmentService(svc.id, "serviceName", e.target.value)}
                            className={`${inputClass} rounded-lg`}
                          >
                            <option value="">Select Service</option>
                            <option value="Consultation">Consultation</option>
                            <option value="Follow-up">Follow-up</option>
                            <option value="Checkup">Checkup</option>
                          </select>
                        </div>
                        <div className="w-32">
                          <label className={labelClass}>Amount:</label>
                          <input
                            type="text"
                            value={svc.amount}
                            onChange={(e) => updateAppointmentService(svc.id, "amount", e.target.value)}
                            placeholder="Amount"
                            className={`${inputClass} rounded-lg`}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeAppointmentService(svc.id)}
                          className="mb-0.5 rounded p-1.5 text-[#EF4444] hover:bg-red-50 dark:hover:bg-red-900/20"
                          aria-label="Remove service"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weekly schedule */}
                <div className="space-y-0 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  {APPOINTMENT_DAYS.map((day) => (
                    <div
                      key={day}
                      className="flex flex-wrap items-center gap-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0 px-4 py-3 bg-white dark:bg-gray-900/50"
                    >
                      <div className="flex items-center gap-2 min-w-[120px]">
                        <input
                          type="checkbox"
                          checked={appointmentSchedule[day]?.enabled ?? false}
                          onChange={(e) => setDayEnabled(day, e.target.checked)}
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-[#4E38EE] focus:ring-[#4E38EE] dark:border-gray-600 dark:bg-gray-700"
                        />
                        <span className="text-sm font-bold uppercase text-gray-700 dark:text-gray-100">{day}</span>
                      </div>
                      <div className="flex flex-1 flex-wrap items-center gap-2">
                        {appointmentSchedule[day]?.slots.map((slot) => (
                          <div key={slot.id} className="flex items-center gap-2">
                            <select
                              value={slot.start}
                              onChange={(e) => updateSlot(day, slot.id, "start", e.target.value)}
                              className={`${inputClass} h-9 py-1 pr-8 w-28 rounded-lg text-sm`}
                            >
                              {TIME_OPTIONS.map((t) => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                            <span className="text-xs text-gray-500">To</span>
                            <select
                              value={slot.end}
                              onChange={(e) => updateSlot(day, slot.id, "end", e.target.value)}
                              className={`${inputClass} h-9 py-1 pr-8 w-28 rounded-lg text-sm`}
                            >
                              {TIME_OPTIONS.map((t) => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                            <button
                              type="button"
                              onClick={() => removeSlot(day, slot.id)}
                              className="rounded p-1 text-[#EF4444] hover:bg-red-50 dark:hover:bg-red-900/20"
                              aria-label="Delete time slot"
                            >
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => addSlot(day)}
                          className="rounded p-1.5 text-[#3B82F6] hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          aria-label="Add time slot"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={() => copyDayToOthers(day)}
                          className="rounded p-1.5 text-[#3B82F6] hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          aria-label="Copy to other days"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    className="btn-secondary-premium inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold"
                  >
                    Discard
                  </button>
                  <button
                    type="button"
                    className="btn-primary-premium inline-flex items-center justify-center rounded-lg bg-[#4E38EE] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4330d4]"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}

            {/* Social links - Website: same to same design as screenshot */}
            {activeSection === "social-links" && (
              <div className="space-y-6 max-w-4xl">
                <div className="space-y-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-semibold text-gray-900 dark:text-gray-100">Note :</span>{" "}
                    Uploaded icon name should be &quot;WeChat.png&quot; / &quot;Tumbler.png&quot; / &quot;XXX.png&quot;, while
                    downloading .vcf file that name will be used as label.
                  </p>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="rounded-lg bg-[#2563eb] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Add Social Link
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {SOCIAL_LINKS.slice(0, 6).map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <SocialIcon id={item.id} />
                        <input
                          type="text"
                          placeholder={item.label}
                          className={`${inputClass} flex-1`}
                          value={socialLinksForm[item.id] ?? ""}
                          onChange={(e) =>
                            setSocialLinksForm((prev) => ({
                              ...prev,
                              [item.id]: e.target.value,
                            }))
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {SOCIAL_LINKS.slice(6).map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <SocialIcon id={item.id} />
                        <input
                          type="text"
                          placeholder={item.label}
                          className={`${inputClass} flex-1`}
                          value={socialLinksForm[item.id] ?? ""}
                          onChange={(e) =>
                            setSocialLinksForm((prev) => ({
                              ...prev,
                              [item.id]: e.target.value,
                            }))
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-start gap-3 pt-4">
                  <button
                    type="button"
                    className="btn-primary-premium inline-flex items-center justify-center"
                    onClick={() => {
                      if (!vcardId) return;
                      setVCards((prev) =>
                        prev.map((c) =>
                          c.id === vcardId
                            ? {
                                ...c,
                                socialLinks: SOCIAL_LINKS.map((item) => ({
                                  platform: item.id,
                                  url: (socialLinksForm[item.id] ?? "").trim(),
                                })).filter((link) => link.url !== ""),
                              }
                            : c,
                        ),
                      );
                      setServicesSuccessMessage("Social links saved successfully.");
                      setShowServicesSuccessToast(true);
                    }}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn-secondary-premium inline-flex items-center justify-center"
                    onClick={() => {
                      if (!currentCard) return;
                      const existingSocial = (currentCard.socialLinks ?? []) as { platform: string; url: string }[];
                      const nextSocial: Record<string, string> = {};
                      SOCIAL_LINKS.forEach((item) => {
                        const match = existingSocial.find((l) => l.platform === item.id);
                        nextSocial[item.id] = match?.url ?? "";
                      });
                      setSocialLinksForm(nextSocial);
                    }}
                  >
                    Discard
                  </button>
                </div>
              </div>
            )}

            {/* Manage Section – 15 checkboxes, spacing as per screenshot */}
            {activeSection === "manage-section" && (
              <div className="w-full min-h-0 flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-[var(--shadow-premium)] overflow-hidden">
                {/* Card padding: significant & consistent on all sides */}
                <div className="flex-1 px-10 py-8 sm:px-12 sm:py-10">
                  {/* Columns: substantial equal gap; rows: consistent vertical gap */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-14 sm:gap-x-16 gap-y-4 mb-10">
                    {[
                      { key: "header" as const, label: "Header" },
                      { key: "contact" as const, label: "Contact" },
                      { key: "services" as const, label: "Services" },
                      { key: "galleries" as const, label: "Galleries" },
                      { key: "products" as const, label: "Products" },
                      { key: "testimonials" as const, label: "Testimonials" },
                      { key: "blogs" as const, label: "Blogs" },
                      { key: "businessHours" as const, label: "Business Hours" },
                      { key: "appointments" as const, label: "Appointments" },
                      { key: "map" as const, label: "Map" },
                      { key: "banner" as const, label: "Banner" },
                      { key: "instagramFeed" as const, label: "Instagram Feed" },
                      { key: "linkedinFeed" as const, label: "LinkedIn Feed" },
                      { key: "iframes" as const, label: "Iframes" },
                      { key: "newsletterPopup" as const, label: "News Letter popup" },
                    ].map(({ key, label }) => (
                      <label
                        key={key}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={manageSectionSections[key]}
                          onChange={() =>
                            setManageSectionSections((prev) => ({ ...prev, [key]: !prev[key] }))
                          }
                          className="h-5 w-5 shrink-0 rounded border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer checked:bg-indigo-600 checked:border-indigo-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500"
                        />
                        <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                          {label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Noticeable gap above buttons; small gap between buttons; buttons centered */}
                <div className="flex justify-center gap-2.5 px-10 sm:px-12 pt-2 pb-8 sm:pb-10 border-t border-gray-200 dark:border-gray-700">
                  <button
                    type="button"
                    className="btn-primary-premium inline-flex items-center justify-center min-w-[100px]"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn-secondary-premium inline-flex items-center justify-center min-w-[100px]"
                  >
                    Discard
                  </button>
                </div>
              </div>
            )}

            {/* Terms & Conditions – rich text editor */}
            {activeSection === "terms" && (
              <div className="space-y-4 max-w-4xl">
                <label className={`${labelClass} text-base font-semibold text-gray-900 dark:text-white`}>
                  Terms &amp; Conditions: <span className="text-red-500">*</span>
                </label>
                <div className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
                  <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 px-2 py-1.5">
                    <select className="h-8 min-w-[90px] rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 px-2 mr-1">
                      <option>Normal</option>
                      <option>Heading 1</option>
                      <option>Heading 2</option>
                      <option>Paragraph</option>
                    </select>
                    <span className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-0.5" />
                    <button
                      type="button"
                      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                      title="Bold"
                      onClick={() => handleRichTextCommand("bold")}
                    >
                      <span className="font-bold text-sm">B</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 italic"
                      title="Italic"
                      onClick={() => handleRichTextCommand("italic")}
                    >
                      <span className="text-sm">I</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 underline"
                      title="Underline"
                      onClick={() => handleRichTextCommand("underline")}
                    >
                      <span className="text-sm">U</span>
                    </button>
                  </div>
                  <div
                    ref={termsEditorRef}
                    className="w-full min-h-[280px] px-4 py-3 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-900 border-0 focus:ring-0 resize-none outline-none"
                    contentEditable
                    aria-label="Terms & Conditions"
                    onInput={() => handleRichTextInput("terms")}
                    suppressContentEditableWarning
                  />
                </div>
                <div className="flex justify-start gap-2.5 pt-2">
                  <button
                    type="button"
                    className="btn-primary-premium inline-flex items-center justify-center"
                    onClick={handleTermsSave}
                  >
                    Save
                  </button>
                  <button type="button" className="btn-secondary-premium inline-flex items-center justify-center">
                    Discard
                  </button>
                </div>
              </div>
            )}

            {/* Privacy Policy – rich text editor */}
            {activeSection === "privacy" && (
              <div className="space-y-4 max-w-4xl">
                <label className={`${labelClass} text-base font-semibold text-gray-900 dark:text-white`}>
                  Privacy Policy: <span className="text-red-500">*</span>
                </label>
                <div className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
                  <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 px-2 py-1.5">
                    <select className="h-8 min-w-[90px] rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 px-2 mr-1">
                      <option>Normal</option>
                      <option>Heading 1</option>
                      <option>Heading 2</option>
                      <option>Paragraph</option>
                    </select>
                    <span className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-0.5" />
                    <button
                      type="button"
                      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                      title="Bold"
                      onClick={() => handleRichTextCommand("bold")}
                    >
                      <span className="font-bold text-sm">B</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 italic"
                      title="Italic"
                      onClick={() => handleRichTextCommand("italic")}
                    >
                      <span className="text-sm">I</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 underline"
                      title="Underline"
                      onClick={() => handleRichTextCommand("underline")}
                    >
                      <span className="text-sm">U</span>
                    </button>
                  </div>
                  <div
                    ref={privacyEditorRef}
                    className="w-full min-h-[280px] px-4 py-3 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-900 border-0 focus:ring-0 resize-none outline-none"
                    contentEditable
                    aria-label="Privacy Policy"
                    onInput={() => handleRichTextInput("privacy")}
                    suppressContentEditableWarning
                  />
                </div>
                <div className="flex justify-start gap-2.5 pt-2">
                <button
                  type="button"
                  className="btn-primary-premium inline-flex items-center justify-center"
                  onClick={handlePrivacySave}
                >
                  Save
                </button>
                  <button type="button" className="btn-secondary-premium inline-flex items-center justify-center">
                    Discard
                  </button>
                </div>
              </div>
            )}

            {/* Custom Links – search, table with sort icons, Show dropdown, same as screenshot */}
            {activeSection === "custom-links" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="relative flex-1 max-w-sm">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </span>
                    <input type="text" placeholder="Search" className={`${inputClass} pl-10`} />
                  </div>
                  <button type="button" className="btn-primary-premium inline-flex items-center justify-center shrink-0">
                    Add Custom Link
                  </button>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
                      <thead className="text-xs uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <tr>
                          <th className="px-4 py-3">
                            <span className="inline-flex items-center gap-1">LINK NAME
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                              </svg>
                            </span>
                          </th>
                          <th className="px-4 py-3">
                            <span className="inline-flex items-center gap-1">LINK
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                              </svg>
                            </span>
                          </th>
                          <th className="px-4 py-3">
                            <span className="inline-flex items-center gap-1">SHOW AS BUTTON
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                              </svg>
                            </span>
                          </th>
                          <th className="px-4 py-3">
                            <span className="inline-flex items-center gap-1">OPEN IN NEW TAB
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                              </svg>
                            </span>
                          </th>
                          <th className="px-4 py-3">
                            <span className="inline-flex items-center gap-1">ACTION
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                              </svg>
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={5} className="px-4 py-12 text-center text-gray-500 dark:text-gray-400">
                            No Data Available
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Show</span>
                      <select className={`${inputClass} h-9 py-1 pr-8 w-20`} defaultValue={10}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                      </select>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Showing 0 results</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Banner – Title, Description, URL, Banner Button, Show Banner */}
            {activeSection === "banner" && (
              <div className="space-y-5 max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div>
                      <label className={labelClass}>
                        Title: <span className="text-red-500">*</span>
                      </label>
                      <input type="text" className={inputClass} placeholder="Title" />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Description: <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        className={`${inputClass} min-h-[100px] resize-y`}
                        placeholder="Enter Short Description"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className={labelClass}>
                        URL: <span className="text-red-500">*</span>
                      </label>
                      <input type="url" className={inputClass} placeholder="URL" />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Banner Button: <span className="text-red-500">*</span>
                      </label>
                      <input type="text" className={inputClass} placeholder="Banner Button" />
                    </div>
                    <label className="flex items-center gap-2.5 cursor-pointer mt-4">
                      <input
                        type="checkbox"
                        checked={showBanner}
                        onChange={(e) => setShowBanner(e.target.checked)}
                        className="h-5 w-5 rounded border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-500 focus:ring-2 focus:ring-brand-500/20 cursor-pointer checked:bg-brand-500 checked:border-brand-500"
                      />
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Show Banner</span>
                    </label>
                  </div>
                </div>
                <div className="flex justify-start gap-2.5 pt-2">
                  <button type="button" className="btn-primary-premium inline-flex items-center justify-center">
                    Save
                  </button>
                </div>
              </div>
            )}

            {/* Advanced – Password, Custom CSS, Custom JS, Remove branding */}
            {activeSection === "advanced" && (
              <div className="space-y-5 max-w-3xl">
                <div>
                  <label className={labelClass}>Password:</label>
                  <div className="relative">
                    <input
                      type={showAdvancedPassword ? "text" : "password"}
                      className={`${inputClass} pr-12`}
                      placeholder="Password"
                      value={advancedPassword}
                      onChange={(e) => setAdvancedPassword(e.target.value)}
                      autoComplete="off"
                    />
                    <button
                      type="button"
                      onClick={() => setShowAdvancedPassword(!showAdvancedPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      aria-label={showAdvancedPassword ? "Hide password" : "Show password"}
                    >
                      {showAdvancedPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Custom CSS:</label>
                  <textarea
                    className={`${inputClass} min-h-[140px] resize-y`}
                    placeholder="Enter Custom Css"
                  />
                </div>
                <div>
                  <label className={labelClass}>Custom JS:</label>
                  <textarea
                    className={`${inputClass} min-h-[140px] resize-y`}
                    placeholder="Enter Custom Js"
                  />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                    Remove branding?
                    <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" aria-label="Help">
                      <HelpIcon />
                    </button>
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={removeBranding}
                    onClick={() => setRemoveBranding(!removeBranding)}
                    className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                      removeBranding ? "bg-brand-500" : "bg-gray-200 dark:bg-gray-600"
                    }`}
                  >
                    <span
                      className={`pointer-events-none absolute left-1 top-1 inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                        removeBranding ? "translate-x-[1.375rem]" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <div className="flex justify-start gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (!vcardId || !currentCard) return;
                      setVCards((prev) =>
                        prev.map((card) =>
                          card.id === vcardId
                            ? {
                                ...card,
                                // yahan baad me actual SEO fields bind kar sakte hain
                              }
                            : card
                        )
                      );
                      setSeoSaveSuccess(true);
                    }}
                    className="btn-primary-premium inline-flex items-center justify-center"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn-secondary-premium inline-flex items-center justify-center"
                  >
                    Discard
                  </button>
                </div>
              </div>
            )}

            {/* Fonts – Font Family & Font Size, same design as screenshot */}
            {activeSection === "fonts" && (
              <div className="space-y-5 max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`${labelClass} font-semibold text-gray-800 dark:text-gray-200`}>
                      Font Family:
                    </label>
                    <select
                      className={inputClass}
                      value={fontFamily}
                      onChange={(e) =>
                        setFontFamily(e.target.value as "default" | "outfit" | "inter" | "poppins" | "roboto")
                      }
                    >
                      <option value="default">Default</option>
                      <option value="outfit">Outfit</option>
                      <option value="inter">Inter</option>
                      <option value="poppins">Poppins</option>
                      <option value="roboto">Roboto</option>
                    </select>
                  </div>
                  <div>
                    <label className={`${labelClass} font-semibold text-gray-800 dark:text-gray-200`}>
                      Font Size:
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min={1}
                        max={40}
                        value={fontSizePx}
                        onChange={(e) => setFontSizePx(Number(e.target.value))}
                        className="flex-1 accent-brand-500"
                      />
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200 w-10 text-right">
                        {fontSizePx}px
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (!vcardId || !currentCard) return;
                      setVCards((prev) =>
                        prev.map((card) =>
                          card.id === vcardId
                            ? {
                                ...card,
                                fontFamily,
                                fontSizePx,
                              }
                            : card
                        )
                      );
                      setSeoSaveSuccess(true);
                    }}
                    className="btn-primary-premium inline-flex items-center justify-center"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn-secondary-premium inline-flex items-center justify-center"
                  >
                    Discard
                  </button>
                </div>
              </div>
            )}

            {/* SEO – Site Title, Home Title, Meta Keyword, Meta Description, Google Analytics */}
            {activeSection === "seo" && (
              <div className="space-y-5 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Site Title:</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Enter Site Title"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Home Title:</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Enter Home Title"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Meta Keyword:</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Enter Meta Keyword"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Meta Description:</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Enter Meta Description"
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Google Analytics:</label>
                  <textarea
                    className={`${inputClass} min-h-[140px] resize-y`}
                    placeholder="Google Analytics Code"
                  />
                </div>
                <div className="flex justify-start gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setSeoSaveSuccess(true)}
                    className="btn-primary-premium inline-flex items-center justify-center"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn-secondary-premium inline-flex items-center justify-center"
                  >
                    Discard
                  </button>
                </div>
              </div>
            )}

            {/* Banner / Advanced */}
            {activeSection !== "basic" &&
              activeSection !== "templates" &&
              activeSection !== "dynamic" &&
              activeSection !== "hours" &&
              activeSection !== "qr" &&
              activeSection !== "services" &&
              activeSection !== "products" &&
              activeSection !== "insta" &&
              activeSection !== "linkedin" &&
              activeSection !== "galleries" &&
              activeSection !== "blogs" &&
              activeSection !== "testimonials" &&
              activeSection !== "iframes" &&
              activeSection !== "appointments" &&
              activeSection !== "social-links" &&
              activeSection !== "manage-section" &&
              activeSection !== "terms" &&
              activeSection !== "privacy" &&
              activeSection !== "seo" &&
              activeSection !== "fonts" &&
              activeSection !== "advanced" &&
              activeSection !== "banner" &&
              activeSection !== "custom-links" && (
                <p className="text-sm text-gray-500 dark:text-gray-400 py-8">Coming soon.</p>
              )}
          </div>
        </div>
      </div>

      {/* Guide modal – opens on "How It works?" (InstaEmbed = Instagram guide, LinkedinEmbed = LinkedIn guide) */}
      {showEmbedGuideModal && (
        <div
          className="fixed inset-0 z-[100001] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="embed-guide-title"
        >
          <div className="relative w-full max-w-lg rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-5">
              <h2 id="embed-guide-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                {embedGuideType === "linkedin" ? "Guide: Add Linkedin Embed Tag" : "Guide : Add Instagram Embed Tag"}
              </h2>
              <button
                type="button"
                onClick={() => setShowEmbedGuideModal(false)}
                className="rounded p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-6 space-y-4">
              {embedGuideType === "linkedin" ? (
                <>
                  <ol className="list-decimal list-inside space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <li className="pl-1">
                      Open Linkedin Post in the desktop version &amp; copy embed tag of that Post.
                    </li>
                    <li className="pl-1">
                      Add Embed tag into the vCard&apos;s Linkedin Embed section.
                    </li>
                    <li className="pl-1">
                      Now that post will be displayed in vCard.
                    </li>
                  </ol>
                  <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
                    <p className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                      <span className="mt-0.5 shrink-0 text-red-500" aria-hidden>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>
                        <span className="font-semibold">Note:</span> Only original Linkedin posts (containing &quot;ugcPost&quot; in the embed code) are accepted. Shared posts (containing &quot;share&quot;) are not supported.
                      </span>
                    </p>
                  </div>
                </>
              ) : (
                <ol className="list-decimal list-inside space-y-4 text-sm text-gray-700 dark:text-gray-300">
                  <li className="pl-1">
                    Open Instagram Post / Reel in the desktop version &amp; copy embed tag of that Post / Reel.
                  </li>
                  <li className="pl-1">
                    Add Embed tag into the vCard&apos;s Instagram Embed section.
                  </li>
                  <li className="pl-1">
                    Now that post will be displayed in vCard.
                  </li>
                </ol>
              )}
            </div>
          </div>
        </div>
      )}

      {/* New Gallery modal – opens from Add Gallery button */}
      {showNewGalleryModal && (
        <div
          className="fixed inset-0 z-[100001] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="new-gallery-title"
        >
          <div className="relative w-full max-w-lg rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-5">
              <h2 id="new-gallery-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                New Gallery
              </h2>
              <button
                type="button"
                onClick={() => {
                  setShowNewGalleryModal(false);
                  setNewGalleryType("");
                  setNewGalleryImagePreview(null);
                }}
                className="rounded p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form
              className="p-6 pb-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setShowNewGalleryModal(false);
                setNewGalleryType("");
                setNewGalleryImagePreview(null);
              }}
            >
              <div>
                <label className={labelClass}>Type: <span className="text-red-500">*</span></label>
                <select
                  value={newGalleryType}
                  onChange={(e) => setNewGalleryType(e.target.value)}
                  className={`${inputClass} mt-1`}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Galleries: <span className="text-red-500">*</span></label>
                <input
                  ref={newGalleryImageInputRef}
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = () => setNewGalleryImagePreview(reader.result as string);
                    reader.readAsDataURL(file);
                  }}
                />
                <div className="relative mt-2 inline-block">
                  <button
                    type="button"
                    onClick={() => newGalleryImageInputRef.current?.click()}
                    className="relative flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 w-32 h-32 overflow-hidden"
                  >
                    {newGalleryImagePreview ? (
                      <Image src={newGalleryImagePreview} alt="Gallery" fill className="object-cover" unoptimized sizes="128px" />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
                        <svg className="w-10 h-10 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                        </svg>
                        <span className="text-xs">Upload</span>
                      </div>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => newGalleryImageInputRef.current?.click()}
                    className="absolute -top-1 -right-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    aria-label="Edit"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Allowed file types: png, jpg, jpeg.</p>
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowNewGalleryModal(false);
                    setNewGalleryType("");
                    setNewGalleryImagePreview(null);
                  }}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Embed-Tag modal – opens from Add Embed-Tag button */}
      {showAddEmbedTagModal && (
        <div
          className="fixed inset-0 z-[100001] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="add-embed-tag-title"
        >
          <div className="relative w-full max-w-lg rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-5">
              <h2 id="add-embed-tag-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                Add Embed-Tag
              </h2>
              <button
                type="button"
                onClick={() => {
                  setShowAddEmbedTagModal(false);
                  setAddEmbedTagType("");
                  setAddEmbedTagValue("");
                }}
                className="rounded p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form
              className="p-6 pb-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setShowAddEmbedTagModal(false);
                setAddEmbedTagType("");
                setAddEmbedTagValue("");
              }}
            >
              <div>
                <label className={labelClass}>Type: <span className="text-red-500">*</span></label>
                <select
                  value={addEmbedTagType}
                  onChange={(e) => setAddEmbedTagType(e.target.value)}
                  className={`${inputClass} mt-1`}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="instagram">Instagram</option>
                  <option value="video">Video</option>
                  <option value="post">Post</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Embed-Tag: <span className="text-red-500">*</span></label>
                <textarea
                  value={addEmbedTagValue}
                  onChange={(e) => setAddEmbedTagValue(e.target.value)}
                  placeholder="Enter Short Description"
                  rows={4}
                  className={`${inputClass} mt-1 resize-none min-h-[100px]`}
                  required
                />
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddEmbedTagModal(false);
                    setAddEmbedTagType("");
                    setAddEmbedTagValue("");
                  }}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

