"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

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
        <svg className={cn} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"
          />
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

/** Preview content type per template (screenshot-style: all show filled content like Dental Care / Boutique Shop) */
function getPreviewType(template: { id: number; name: string }): "flower" | "flower-shop" | "travel" | "travel-dark" | "personal" | "corporate" | "creative" | "generic" {
  const n = template.name.toLowerCase();
  if (n.includes("flower garden") || n.includes("wedding planner") || n.includes("salon") || n.includes("boutique shop") || n.includes("floral") || n.includes("dental care")) return "flower";
  if (n.includes("flower shop") || (n.includes("garden") && !n.includes("flower garden"))) return "flower-shop";
  if (n.includes("travel explorer") || n.includes("travel agent")) return "travel";
  if (n.includes("tours") || n.includes("travel agency") || n.includes("horizon pro")) return "travel-dark";
  if (n.includes("executive") || n.includes("modern minimal") || n.includes("consulting") || n.includes("simple contact") || n.includes("nonprofit") || n.includes("insurance") || n.includes("restaurant") || n.includes("realtor") || n.includes("yoga") || n.includes("freelancer")) return "personal";
  if (n.includes("corporate") || n.includes("legal") || n.includes("finance pro")) return "corporate";
  if (n.includes("creative studio") || n.includes("marketing agency") || n.includes("agency bold")) return "creative";
  return "generic";
}

const VCARD_TEMPLATES: { id: number; name: string; description: string; accent: string }[] = [
  { id: 1, name: "Executive Pro", description: "Clean, authoritative layout for leaders and executives.", accent: "from-slate-700 to-slate-900" },
  { id: 2, name: "Modern Minimal", description: "Minimalist design with ample white space and clarity.", accent: "from-gray-100 to-white" },
  { id: 3, name: "Creative Studio", description: "Bold typography and visuals for creatives.", accent: "from-violet-600 to-purple-800" },
  { id: 4, name: "Real Estate Plus", description: "Property-focused layout with gallery and listings.", accent: "from-amber-600 to-orange-700" },
  { id: 5, name: "Travel Explorer", description: "Adventure and travel themed with maps and itineraries.", accent: "from-sky-600 to-blue-800" },
  { id: 6, name: "Flower Garden", description: "Elegant floral theme for boutiques and gardens.", accent: "from-emerald-500 to-teal-600" },
  { id: 7, name: "Corporate Blue", description: "Professional corporate style with trust cues.", accent: "from-blue-700 to-indigo-800" },
  { id: 8, name: "Photographer Pro", description: "Portfolio-first layout for photographers.", accent: "from-neutral-800 to-black" },
  { id: 9, name: "Medical Practice", description: "Trust and clarity for healthcare professionals.", accent: "from-cyan-600 to-blue-700" },
  { id: 10, name: "Legal Counsel", description: "Formal and authoritative for law firms.", accent: "from-slate-800 to-slate-950" },
  { id: 11, name: "Café & Bistro", description: "Warm and inviting for food & beverage.", accent: "from-amber-700 to-amber-900" },
  { id: 12, name: "Fitness Coach", description: "Energetic and action-oriented design.", accent: "from-rose-600 to-red-700" },
  { id: 13, name: "Tech Innovator", description: "Sleek and tech-forward for startups.", accent: "from-indigo-600 to-violet-700" },
  { id: 14, name: "Wedding Planner", description: "Romantic and detailed for events.", accent: "from-pink-500 to-rose-600" },
  { id: 15, name: "Consulting Pro", description: "Strategic and refined for consultants.", accent: "from-slate-600 to-slate-800" },
  { id: 16, name: "Urban Nest", description: "Real estate with modern, urban twist.", accent: "from-emerald-700 to-teal-800" },
  { id: 17, name: "Fashion Forward", description: "Style-focused layout for fashion brands.", accent: "from-fuchsia-600 to-pink-700" },
  { id: 18, name: "Architect Studio", description: "Structure and visual balance for architects.", accent: "from-stone-600 to-neutral-800" },
  { id: 19, name: "Chef's Table", description: "Culinary and premium restaurant style.", accent: "from-orange-600 to-red-600" },
  { id: 20, name: "Startup Hub", description: "Dynamic and youthful for startups.", accent: "from-blue-500 to-cyan-600" },
  { id: 21, name: "Wellness Guide", description: "Calm and holistic wellness theme.", accent: "from-teal-500 to-emerald-600" },
  { id: 22, name: "Event Manager", description: "Dates and details prominently displayed.", accent: "from-violet-500 to-purple-600" },
  { id: 23, name: "Art Gallery", description: "Spacious and artistic presentation.", accent: "from-neutral-700 to-stone-900" },
  { id: 24, name: "Finance Pro", description: "Numbers and trust for financial services.", accent: "from-green-700 to-emerald-800" },
  { id: 25, name: "Education Plus", description: "Clear and informative for educators.", accent: "from-blue-600 to-sky-700" },
  { id: 26, name: "Salon & Spa", description: "Relaxing and luxurious beauty theme.", accent: "from-rose-400 to-pink-500" },
  { id: 27, name: "Auto Dealer", description: "Showcase vehicles and contact options.", accent: "from-slate-600 to-gray-800" },
  { id: 28, name: "Construction Pro", description: "Strong and reliable for construction.", accent: "from-amber-800 to-yellow-900" },
  { id: 29, name: "Music Studio", description: "Rhythm and brand for musicians.", accent: "from-indigo-800 to-purple-900" },
  { id: 30, name: "Pet Care", description: "Friendly and approachable for pet services.", accent: "from-lime-500 to-green-600" },
  { id: 31, name: "Interior Design", description: "Aesthetic and visual for designers.", accent: "from-amber-100 to-orange-200" },
  { id: 32, name: "Marketing Agency", description: "Bold and creative for agencies.", accent: "from-red-600 to-orange-600" },
  { id: 33, name: "Nonprofit", description: "Mission and impact focused layout.", accent: "from-green-600 to-teal-700" },
  { id: 34, name: "Restaurant Pro", description: "Menu and ambiance focused.", accent: "from-red-800 to-rose-900" },
  { id: 35, name: "Yoga & Mind", description: "Serene and balanced wellness.", accent: "from-lavender-500 to-violet-600" },
  { id: 36, name: "Dental Care", description: "Clean and reassuring for dental.", accent: "from-sky-400 to-blue-500" },
  { id: 37, name: "Insurance Pro", description: "Trust and coverage emphasis.", accent: "from-blue-800 to-indigo-900" },
  { id: 38, name: "Realtor Elite", description: "Listings and contact for realtors.", accent: "from-amber-500 to-orange-600" },
  { id: 39, name: "Freelancer One", description: "Portfolio and skills showcase.", accent: "from-slate-500 to-gray-700" },
  { id: 40, name: "Boutique Shop", description: "Product and style for retail.", accent: "from-pink-400 to-rose-500" },
  { id: 41, name: "Consultant Plus", description: "Expertise and clarity for consultants.", accent: "from-indigo-700 to-blue-800" },
  { id: 42, name: "Developer Code", description: "Tech and projects for developers.", accent: "from-zinc-800 to-neutral-900" },
  { id: 43, name: "Coach Life", description: "Goals and motivation for coaches.", accent: "from-cyan-500 to-teal-600" },
  { id: 44, name: "Designer Grid", description: "Visual and structured for designers.", accent: "from-gray-600 to-slate-700" },
  { id: 45, name: "Writer's Block", description: "Typography and content focused.", accent: "from-stone-500 to-neutral-600" },
  { id: 46, name: "Tutor Learn", description: "Clear and educational for tutors.", accent: "from-blue-500 to-indigo-600" },
  { id: 47, name: "Photographer Wed", description: "Wedding and portrait focus.", accent: "from-rose-300 to-pink-400" },
  { id: 48, name: "Agency Bold", description: "Creative agency with strong identity.", accent: "from-orange-500 to-red-600" },
  { id: 49, name: "Classic Business", description: "Timeless professional layout.", accent: "from-slate-500 to-slate-700" },
  { id: 50, name: "Horizon Pro", description: "Modern wide layout with impact.", accent: "from-brand-500 to-indigo-600" },
  {
    id: 51,
    name: "Simple Contact",
    description: "Clean layout with sky header, profile, social links, contact block and Our Services section.",
    accent: "from-sky-200 via-sky-100 to-white",
  },
  {
    id: 52,
    name: "Reporter Profile",
    description: "Dark editorial layout with hero banner, reporter bio, contact rows and QR section.",
    accent: "from-neutral-900 to-slate-800",
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
  const showCreatedSuccess = searchParams.get("created") === "1";

  const [activeSection, setActiveSection] = useState<string>("basic");
  const [activeTab, setActiveTab] = useState<"basic" | "personal" | "other">("basic");
  const [coverType, setCoverType] = useState<"Image" | "Video" | "YouTube Link">("Image");
  const [basicDetailsUpdated, setBasicDetailsUpdated] = useState(false);
  const [socialLinksView, setSocialLinksView] = useState<"social" | "custom">("social");

  // simple placeholder states where needed
  const [servicesSearch, setServicesSearch] = useState("");
  const [productsSearch, setProductsSearch] = useState("");
  const [displayProductEnquiryButton, setDisplayProductEnquiryButton] = useState(false);
  const [productsShowPerPage, setProductsShowPerPage] = useState(10);
  const [instaSearch, setInstaSearch] = useState("");
  const [linkedinSearch, setLinkedinSearch] = useState("");
  const [galleriesSearch, setGalleriesSearch] = useState("");
  const [blogsSearch, setBlogsSearch] = useState("");
  const [testimonialsSearch, setTestimonialsSearch] = useState("");
  const [iframesSearch, setIframesSearch] = useState("");
  const [customLinksSearch, setCustomLinksSearch] = useState("");
  const [customLinksShowPerPage, setCustomLinksShowPerPage] = useState(10);
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
  // Sync Dynamic vCard colors from selected vCard template
  useEffect(() => {
    if (selectedTemplateId == null) return;
    const template = VCARD_TEMPLATES.find((t) => t.id === selectedTemplateId);
    if (!template) return;
    const primary = getAccentPrimaryColor(template.accent);
    setDynamicPrimaryColor(primary);
    setDynamicButtonTextColor(isLightTemplate(template.accent) ? "#332b2b" : "#ffffff");
  }, [selectedTemplateId]);
  const [showAdvancedPassword, setShowAdvancedPassword] = useState(false);
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

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Header: Edit vCard title + Back */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="page-title">Edit vCard</h1>
        <button
          type="button"
          onClick={() => router.back()}
          className="btn-primary-premium inline-flex items-center gap-2"
        >
          <span className="hidden sm:inline">Back</span>
        </button>
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
                          className={inputClass}
                          defaultValue="fbfgfg"
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
                          <div className="relative mt-1.5 flex items-center justify-center h-28 w-28 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 overflow-hidden group">
                            <svg className="w-14 h-14 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            <button
                              type="button"
                              className="absolute top-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 z-10"
                              aria-label="Edit profile image"
                            >
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </button>
                          </div>
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Allowed file types: png, jpg, jpeg.</p>
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
                              return (
                                <div className={base}>
                                  <div className={`w-8 h-8 rounded-full ${circle} shrink-0 mx-auto mb-1`} />
                                  <p className={`text-[9px] font-semibold ${text} text-center leading-tight`}>Jenny Wilson</p>
                                  <p className={`text-[8px] ${textSec} text-center mb-1`}>Flower Garden</p>
                                  <div className="flex justify-center gap-1 mb-1">
                                    {[1, 2, 3, 4].map((i) => (
                                      <div key={i} className={`w-4 h-4 rounded-full ${icon}`} />
                                    ))}
                                  </div>
                                  <p className={`text-[7px] ${textSec} text-center leading-tight px-0.5`}>jenny@gmail.com · +1234567890</p>
                                  <p className={`text-[7px] ${textSec} text-center mt-0.5`}>12th March, 1990 · Berlin, Germany</p>
                                  <p className={`text-[8px] font-medium ${text} text-center mt-1.5 border-t border-white/30 pt-1`}>Gallery</p>
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
                                  <p className={`text-[8px] font-medium ${text} text-center mt-1 border-t border-white/30 pt-0.5`}>Contact · Gallery</p>
                                </div>
                              );
                            }
                            if (pt === "personal") {
                              return (
                                <div className={base}>
                                  <div className={`w-10 h-10 rounded-full ${circle} shrink-0 mx-auto mb-1`} />
                                  <p className={`text-[9px] font-semibold ${text} text-center`}>Name</p>
                                  <p className={`text-[8px] ${textSec} text-center mb-1`}>Title / Profession</p>
                                  <div className="flex justify-center gap-1 mb-1">
                                    {[1, 2, 3, 4].map((i) => (
                                      <div key={i} className={`w-4 h-4 rounded-full ${icon}`} />
                                    ))}
                                  </div>
                                  <p className={`text-[7px] ${textSec} text-center`}>email@example.com · +1 234 567 890</p>
                                  <p className={`text-[7px] ${textSec} text-center`}>Location</p>
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
                                <p className={`text-[8px] font-medium ${text} text-center mt-1.5 border-t border-white/30 pt-1`}>Gallery</p>
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
                </div>

                {/* Mobile view preview – selected template theme in phone frame */}
                {(() => {
                  const selectedTemplate = selectedTemplateId != null ? VCARD_TEMPLATES.find((t) => t.id === selectedTemplateId) : null;
                  const accent = selectedTemplate?.accent ?? "from-lime-400 to-lime-500";
                  const primaryColor = selectedTemplate ? getAccentPrimaryColor(selectedTemplate.accent) : "#B4FF3B";
                  const isLight = selectedTemplate ? isLightTemplate(selectedTemplate.accent) : false;
                  const textOnPrimary = isLight ? "#1f2937" : "#ffffff";
                  return (
                    <div className="lg:w-[320px] shrink-0 flex flex-col items-center">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Mobile preview</p>
                      <div className="relative w-[280px] h-[560px] rounded-[2.25rem] bg-gray-900 shadow-2xl overflow-hidden border-[8px] border-gray-800 flex-shrink-0">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-24 h-5 rounded-b-2xl bg-black z-20" />
                        <div className="absolute inset-0 flex flex-col bg-[#0f2630] overflow-hidden">
                          <div className={`relative h-24 bg-gradient-to-b ${accent} rounded-t-[1.5rem] overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                            <button
                              type="button"
                              className="absolute top-8 right-3 flex items-center gap-0.5 rounded-full px-2.5 py-1 text-xs font-medium shadow"
                              style={{ backgroundColor: isLight ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.2)", color: textOnPrimary }}
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
                                <p className="text-base font-semibold truncate" style={{ color: primaryColor }}>Pallavi Hegde</p>
                                <p className="text-xs opacity-90" style={{ color: primaryColor }}>UI / UX Designer</p>
                              </div>
                              <button
                                type="button"
                                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: primaryColor, color: textOnPrimary }}
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="flex-1 px-4 py-3 overflow-y-auto">
                            <p className="text-[11px] leading-relaxed text-gray-300">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                              industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                              scrambled it to make a type specimen book.
                            </p>
                            <div className="mt-6 space-y-3">
                              <button
                                type="button"
                                className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold"
                                style={{ backgroundColor: primaryColor, color: textOnPrimary }}
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                                Add to contact
                              </button>
                              <div className="flex gap-2">
                                <div className="flex-1 flex items-center justify-center rounded-full border border-white/40 h-9 text-white text-xs font-medium">fb</div>
                                <div className="flex-1 flex items-center justify-center rounded-full border border-white/40 h-9 text-white text-xs font-medium">in</div>
                                <div className="flex-1 flex items-center justify-center rounded-full border border-white/40 h-9 text-white text-xs font-medium">x</div>
                              </div>
                            </div>
                          </div>
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

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-200"
                    >
                      Discard
                    </button>
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

            {/* Hours - simplified */}
            {activeSection === "hours" && (
              <form className="space-y-6 max-w-xl">
                <div>
                  <label className={labelClass}>Week Format Type:</label>
                  <div className="relative max-w-xs">
                    <select className={`${inputClass} pr-10`}>
                      <option>Monday To Sunday</option>
                      <option>Sunday To Saturday</option>
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <div
                      key={day}
                      className="flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
                    >
                      <div className="flex items-center gap-2 min-w-[120px]">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500"
                        />
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-100">{day}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <select className={`${inputClass} h-9 py-1 pr-8 w-28`}>
                          <option>09:00 AM</option>
                        </select>
                        <span className="text-xs text-gray-500">to</span>
                        <select className={`${inputClass} h-9 py-1 pr-8 w-28`}>
                          <option>06:00 PM</option>
                        </select>
                      </div>
                      <button
                        type="button"
                        className="ml-auto text-xs font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        Closed
                      </button>
                    </div>
                  ))}
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
                  <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
                    <form className="space-y-5">
                      <div className="space-y-4">
                        <div>
                          <label className={labelClass}>QR-Code Color:</label>
                          <div className="w-full h-11 rounded-lg border border-gray-300 bg-white overflow-hidden">
                            <input
                              type="color"
                              defaultValue="#000000"
                              className="h-full w-full cursor-pointer border-0 p-0 block [appearance:none] [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-0 [&::-webkit-color-swatch]:rounded-[7px]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>Background Color:</label>
                          <div className="w-full h-11 rounded-lg border border-gray-300 bg-white overflow-hidden">
                            <input
                              type="color"
                              defaultValue="#000000"
                              className="h-full w-full cursor-pointer border-0 p-0 block [appearance:none] [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-0 [&::-webkit-color-swatch]:rounded-[7px]"
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
                          className="relative inline-flex h-6 w-11 shrink-0 rounded-full bg-gray-200 transition-colors"
                        >
                          <span className="absolute left-1 top-1 inline-block h-4 w-4 translate-x-0 rounded-full bg-white" />
                        </button>
                        <span className="text-sm text-gray-700">Use This Configuration</span>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-200"
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
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 shrink-0"
                  >
                    Add Service
                  </button>
                </div>
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
                        <tr>
                          <td colSpan={4} className="px-4 py-12 text-center text-gray-500 dark:text-gray-400">
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
                        onClick={() => setDisplayProductEnquiryButton((prev) => !prev)}
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
                      className="inline-flex items-center justify-center rounded-lg bg-[#2563eb] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1d4ed8] shrink-0"
                    >
                      Add Product
                    </button>
                  </div>
                </div>
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
                        <tr>
                          <td colSpan={5} className="px-4 py-12 text-center text-gray-600 dark:text-gray-400">
                            No Data Available
                          </td>
                        </tr>
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
                        Showing <span className="font-semibold text-gray-900 dark:text-gray-100">0</span> results
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
                      className="inline-flex items-center justify-center rounded-lg bg-amber-400 hover:bg-amber-500 px-4 py-2.5 text-sm font-semibold text-gray-900 shrink-0"
                    >
                      How It works?
                    </button>
                    <button
                      type="button"
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
                      className="inline-flex items-center justify-center rounded-lg bg-orange-400 hover:bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shrink-0"
                    >
                      How It works?
                    </button>
                    <button
                      type="button"
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
                        <input type="text" placeholder={item.label} className={`${inputClass} flex-1`} />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {SOCIAL_LINKS.slice(6).map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <SocialIcon id={item.id} />
                        <input type="text" placeholder={item.label} className={`${inputClass} flex-1`} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-start gap-3 pt-4">
                  <button type="button" className="btn-primary-premium inline-flex items-center justify-center">
                    Save
                  </button>
                  <button type="button" className="btn-secondary-premium inline-flex items-center justify-center">
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
                    <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-500" aria-label="Increase">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-500" aria-label="Decrease">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <span className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-0.5" />
                    <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" title="Bold">
                      <span className="font-bold text-sm">B</span>
                    </button>
                    <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 italic" title="Italic">
                      <span className="text-sm">I</span>
                    </button>
                    <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 underline" title="Underline">
                      <span className="text-sm">U</span>
                    </button>
                  </div>
                  <textarea
                    className="w-full min-h-[280px] px-4 py-3 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-900 border-0 focus:ring-0 resize-none placeholder-gray-400"
                    placeholder="Terms & Conditions"
                  />
                </div>
                <div className="flex justify-start gap-2.5 pt-2">
                  <button type="button" className="btn-primary-premium inline-flex items-center justify-center">
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
                    <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-500" aria-label="Increase">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-500" aria-label="Decrease">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <span className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-0.5" />
                    <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" title="Bold">
                      <span className="font-bold text-sm">B</span>
                    </button>
                    <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 italic" title="Italic">
                      <span className="text-sm">I</span>
                    </button>
                    <button type="button" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 underline" title="Underline">
                      <span className="text-sm">U</span>
                    </button>
                  </div>
                  <textarea
                    className="w-full min-h-[280px] px-4 py-3 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-900 border-0 focus:ring-0 resize-none placeholder-gray-400"
                    placeholder="Privacy Policy"
                  />
                </div>
                <div className="flex justify-start gap-2.5 pt-2">
                  <button type="button" className="btn-primary-premium inline-flex items-center justify-center">
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
                  <button type="button" className="btn-primary-premium inline-flex items-center justify-center">
                    Save
                  </button>
                  <button type="button" className="btn-secondary-premium inline-flex items-center justify-center">
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
                    <select className={inputClass} defaultValue="default">
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
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Font size in px"
                    />
                  </div>
                </div>
                <div className="flex justify-start gap-2.5 pt-2">
                  <button type="button" className="btn-primary-premium inline-flex items-center justify-center">
                    Save
                  </button>
                  <button type="button" className="btn-secondary-premium inline-flex items-center justify-center">
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
                  <button type="button" className="btn-primary-premium inline-flex items-center justify-center">
                    Save
                  </button>
                  <button type="button" className="btn-secondary-premium inline-flex items-center justify-center">
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
    </div>
  );
}

