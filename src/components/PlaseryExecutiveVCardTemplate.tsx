/* Plasery-style executive vCard single-page layout (Tailwind CSS only) */
"use client";

import React from "react";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContext";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

const DEFAULT_FACTS = [
  { label: "Years Experience", value: "25" },
  { label: "Surgical Specialists", value: "35" },
  { label: "Improved Smiles", value: "9876" },
];

const DEFAULT_FEATURES = [
  {
    title: "Committed Surgical Team",
    icon: "users",
    description: "A dedicated team of qualified specialists focused on safe, precise outcomes.",
  },
  {
    title: "High Standard of Surgery",
    icon: "syringe",
    description: "International standards in surgery, sterilisation and patient after‑care.",
  },
];

const DEFAULT_SERVICES = [
  { title: "Face Retouching", description: "Advanced non-invasive treatments to rejuvenate your facial features and restore a youthful glow." },
  { title: "Mommy Makeover", description: "A customized combination of procedures designed to help mothers restore their pre-pregnancy bodies." },
  { title: "Breast Implants", description: "Expert breast augmentation using the latest techniques and high-quality implants for natural results." },
  { title: "Body Procedures", description: "Comprehensive body contouring solutions including tummy tucks and skin tightening treatments." },
  { title: "Liposuction", description: "Targeted fat removal to sculpt and refine your body's natural silhouette with minimal downtime." },
  { title: "Lips Surgery", description: "Precision lip enhancement and reconstruction for a perfectly balanced and aesthetic appearance." },
];

const DEFAULT_PRIMARY_COLOR = "#0d6efd"; // Plasery primary blue

const SocialCircleIcon = ({ platform }: { platform: string }) => {
  const id = platform.toLowerCase();
  const base =
    "flex h-9 w-9 items-center justify-center rounded-full text-white shrink-0 shadow-md ring-1 ring-black/10 overflow-hidden";

  switch (id) {
    case "website":
      return (
        <div className={`${base} bg-blue-500`}>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
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
    case "x":
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
            <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12 1.508-.149 2.629-.03 1.139-.09 2.294-.149 2.479-.06.24-.255.39-.465.39h-2.429c-.27 0-.509-.165-.629-.42-.075-.149-.12-.36-.149-.629-.06-.479-.12-1.569-.149-2.279-.03-.72-.09-1.95-.149-2.699-.045-.27-.24-.42-.465-.42H5.913c-.27 0-.509.165-.629.42-.075.149-.12.36-.149.629-.06.479-.12 1.569-.149 2.279-.03.72-.09 1.95-.149 2.699-.045.27-.24.42-.465.42H2.063c-.27 0-.42-.15-.465-.39-.06-.185-.12-1.34-.149-2.479-.03-1.121-.09-2.538-.149-2.629-1.872-.283-2.906-.702-3.146-1.271-.03-.076-.045-.15-.045-.225-.015-.239.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.014l.015-.015c.18-.344.21-.644.12-.868-.195-.45-.884-.675-1.333-.81-.135-.044-.255-.09-.344-.119-.824-.329-1.214-.719-1.214-1.168 0-.359.285-.689.734-.838.15-.06.33-.09.509-.09.12 0 .299.015.464.104.374.181.733.285 1.033.301.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847 1.583-3.545 4.94-3.821 5.93-3.821z" />
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


export function PlaseryExecutiveVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [showTerms, setShowTerms] = React.useState(false);
  const [showPrivacy, setShowPrivacy] = React.useState(false);
  const primaryColor = card.templatePrimaryColor || DEFAULT_PRIMARY_COLOR;

  const name = card.title || "Plasery";
  const role = card.occupation || card.tagline || "Plastic Surgery Clinic";

  const email = card.email || "info@example.com";
  const phone = card.phone || "+012 345 6789";
  const address = card.address || "Your Clinic Address, City, Country";

  const aboutTitle = (card as any).aboutTitle || "The Leading Plastic Surgery Clinic";
  const aboutDescription =
    card.description ||
    "We approach plastic surgery with precision and artistic vision to reveal each patient's unique beauty. Every treatment is personalised, with safety and long‑term wellbeing at the centre of our work.";

  const facts =
    (card as any).stats && Array.isArray((card as any).stats) && (card as any).stats.length >= 3
      ? (card as any).stats
      : DEFAULT_FACTS;

  const services = card.services && card.services.length > 0 ? card.services : DEFAULT_SERVICES;
  const serviceTitleSmall = card.serviceTitleSmall || "Our Services";
  const serviceTitle = card.serviceTitle || "Explore Our Plastic Surgery Treatment";

  const blogs = (card as any).blogs && Array.isArray((card as any).blogs) && (card as any).blogs.length > 0
    ? (card as any).blogs
    : null;

  const testimonials = (card as any).testimonials && Array.isArray((card as any).testimonials) && (card as any).testimonials.length > 0
    ? (card as any).testimonials
    : [
        {
          name: "Lily Taylor",
          role: "Client",
          quote: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.",
        },
        {
          name: "Olivia Smith",
          role: "Client",
          quote: "At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
        },
        {
          name: "Ava Brown",
          role: "Client",
          quote: "Nonumy et labore et tempor diam tempor erat. Sed duo clita tempor justo.",
        },
      ];

  const socialLinks = (card as any).socialLinks && Array.isArray((card as any).socialLinks) && (card as any).socialLinks.length > 0
    ? (card as any).socialLinks
    : [];

  const websiteUrl =
    card.website && card.website.trim()
      ? card.website.trim().startsWith("http")
        ? card.website.trim()
        : `https://${card.website.trim()}`
      : undefined;

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900 flex justify-center px-2 py-4 sm:px-4 sm:py-8">
      {/* Narrow card width to match screenshot-style layout */}
      <div className="w-full max-w-[540px] rounded-[32px] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] border border-sky-100 overflow-hidden">
        {/* Topbar / Header Section */}
        <div className="bg-white px-2 pt-2 pb-0 sm:px-4 sm:pt-4 border-b border-slate-100">
          <div className="grid grid-cols-3 items-center gap-2 mb-4">
            {/* Left: Email */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-2 sm:gap-3 px-2">
              <div className="flex h-10 w-6 sm:h-12 sm:w-8 items-center justify-center rounded-full bg-slate-500 text-white shrink-0 shadow-sm">
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">Email Us</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 leading-tight break-all max-w-[80px] sm:max-w-[120px]">{email}</p>
              </div>
            </div>

            {/* Center: Brand Name */}
            <div className="text-center border-x border-slate-100 px-2 py-1 flex flex-col items-center justify-center">
              <p className="text-[7.5px] sm:text-[9px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-0.5 sm:mb-1 whitespace-nowrap">
                Executive Vcard
              </p>
              <p className="text-sm sm:text-lg font-extrabold text-slate-600 tracking-tight lowercase">
                executive
              </p>
            </div>

            {/* Right: Call Us */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-2 sm:gap-3 px-2">
              <div className="flex h-10 w-6 sm:h-12 sm:w-8 items-center justify-center rounded-full bg-slate-500 text-pink-500 shrink-0 shadow-sm">
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">Call Us</p>
                <div className="text-[9px] sm:text-[10px] text-slate-500 leading-tight">
                  <p>{phone.split(' ')[0]}</p>
                  <p>{phone.split(' ').slice(1).join(' ')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex items-center justify-around py-3 border-t border-slate-50">
            <button
              type="button"
              onClick={() => onDownloadVCard?.()}
              className="inline-flex items-center justify-center rounded-full border-[1.5px] border-slate-200 bg-white px-5 sm:px-8 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-colors"
            >
              Download<br/>Now
            </button>
            <button
              type="button"
              onClick={() => onDownloadVCard?.()}
              className="inline-flex items-center justify-center rounded-full border-[1.5px] border-slate-200 bg-white px-5 sm:px-8 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-colors"
            >
              Make<br/>Appointment
            </button>
          </div>
        </div>

        {/* Hero (same copy as Plasery hero) */}
        <section
          id="top"
          className="bg-sky-600 text-white px-4 sm:px-8 pt-8 pb-8"
        >
          <div className="flex flex-col-reverse gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm font-medium text-sky-100">
                Welcome to Plasery
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Change Your Life Permanantly
              </h1>
              <p className="text-base sm:text-lg text-sky-50/90">
                We will make you attractive
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => onDownloadVCard?.()}
                  className="inline-flex items-center justify-center rounded-full bg-white text-sky-700 font-semibold text-[12px] sm:text-xs px-5 sm:px-6 py-2.5 shadow-lg hover:bg-slate-100"
                >
                  Read More
                </button>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/80 bg-transparent after:absolute after:h-16 after:w-16 after:rounded-full after:border after:border-white/20 after:animate-ping"
                  >
                    <span className="ml-0.5 text-sm">▶</span>
                  </button>
                  <p className="hidden sm:block text-sm text-sky-50">
                    Play Video
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-sky-100/90 pt-3">
                You can always return to this profile at{" "}
                <span className="font-semibold">
                  {baseUrl}/{slug}
                </span>
                .
              </p>
            </div>

            {/* Portrait */}
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="relative h-64 w-64 rounded-3xl bg-sky-300/20 border border-sky-100/40 overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="256px"
                    unoptimized={card.image.startsWith("data:")}
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-5xl font-semibold text-white/90">
                    {name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-sky-900/80 backdrop-blur px-3 py-2 text-[11px]">
                  <p className="font-semibold">{name}</p>
                  <p className="text-sky-100/80">{role}</p>
                </div>
              </div>

              {/* Social Links (below profile) */}
              {socialLinks && socialLinks.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                  {socialLinks.map((link: any, idx: number) => {
                    return (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center hover:scale-110 transition-transform"
                        title={link.platform}
                      >
                        <SocialCircleIcon platform={link.platform} />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="px-4 sm:px-8 pt-8 pb-10 bg-white"
        >
          <div className="flex flex-col gap-6 items-start">
            {(card as any).coverImage && (
              <div className="relative w-full min-h-[220px] overflow-hidden rounded-3xl mb-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 via-sky-50 to-white" />
                <div className="absolute inset-4 rounded-3xl overflow-hidden shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
                  <Image
                    src={(card as any).coverImage}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="400px"
                    unoptimized={(card as any).coverImage.toString().startsWith("data:")}
                  />
                </div>
                <div className="absolute top-4 right-4 w-24 h-24 rounded-2xl bg-white shadow-lg border border-slate-100 flex flex-col items-center justify-center text-center text-xs">
                  <p className="text-2xl font-bold text-sky-600">
                    {(facts[0] && (facts[0].value ?? facts[0])) || "25"}
                  </p>
                  <p className="text-[11px] text-slate-600 leading-tight">Years Experience</p>
                </div>
              </div>
            )}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                {aboutTitle}
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                {aboutDescription}
              </p>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 text-sm">
                {(card.products && card.products.length > 0 ? card.products : DEFAULT_FEATURES).map((item: any, idx: number) => (
                  <div
                    key={item.id || item.title || idx}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3"
                  >
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-sm overflow-hidden"
                      style={{ backgroundColor: primaryColor }}
                    >
                      {item.icon && (item.icon.startsWith("data:") || item.icon.startsWith("http")) ? (
                        <Image
                          src={item.icon}
                          alt={item.name || item.title}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                          unoptimized={item.icon.startsWith("data:")}
                        />
                      ) : (
                        <span className="text-lg">
                          {item.icon === "users" ? "👨‍⚕️" : item.icon === "syringe" ? "💉" : "🎁"}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-slate-900">
                        {item.name || item.title}
                      </p>
                      <p className="text-[12px] text-slate-600 leading-relaxed line-clamp-2">
                        {item.description || "No description provided."}
                      </p>
                      {item.price && (
                        <p className="text-[12px] font-bold text-sky-600 mt-0.5">
                          {item.currency || "INR"} {item.price}
                        </p>
                      )}
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-[11px] font-semibold text-sky-600 hover:underline"
                        >
                          View details →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {card.products && card.products.length > 0 && card.displayProductEnquiryButton && (
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white hover:bg-black transition-colors"
                  >
                    Product enquiry
                  </a>
                </div>
              )}
              <div className="pt-2 border-t border-slate-100 mt-2 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt={name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-sm font-semibold text-slate-700">
                      {name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="text-[13px] text-slate-700">
                  <p className="font-semibold">Call us: {phone}</p>
                  <p className="text-slate-500">{address}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facts */}
        <section
          id="facts"
          className="bg-slate-50 px-4 sm:px-8 py-9 border-t border-slate-100"
        >
          <div className="grid gap-4 grid-cols-2 items-stretch">
            <div className="col-span-2 sm:col-span-1">
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                Important Facts
              </h2>
              <p className="text-sm text-slate-600">
                A quick view of our experience and outcomes.
              </p>
            </div>
            {facts.slice(0, 3).map((item: any, idx: number) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className="bg-white h-full rounded-2xl border border-slate-100 px-4 py-4 flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <span className="text-lg">
                      {idx === 0 ? "📅" : idx === 1 ? "👨‍⚕️" : "😊"}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">
                    {item.value ?? item}
                  </p>
                </div>
                <p className="text-sm font-medium text-slate-700">
                  {item.label || item.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services (Explore Our Plastic Surgery Treatment) */}
        <section
          id="services"
          className="px-4 sm:px-8 py-10 bg-slate-50 border-t border-slate-100"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <p
                className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1"
                style={{ color: primaryColor }}
              >
                {serviceTitleSmall}
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                {serviceTitle}
              </h2>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 text-[13px]">
            {services.map((svc: any, idx: number) => (
              <div
                key={svc.id || idx}
                className="rounded-2xl border border-slate-100 bg-white px-4 py-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 overflow-hidden shrink-0 shadow-inner">
                    {svc.icon ? (
                      <Image src={svc.icon} alt={svc.name || svc.title} width={48} height={48} className="object-cover" unoptimized={!!svc.icon.startsWith("data:")} />
                    ) : (
                      <span className="text-sky-600 font-bold text-lg">{idx + 1}</span>
                    )}
                  </div>
                  {svc.url && (
                    <a
                      href={svc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center justify-center rounded-full border border-sky-500 text-sky-600 text-[10px] px-4 py-1.5 hover:bg-sky-50 font-semibold"
                    >
                      Read More
                    </a>
                  )}
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-slate-900 mb-2">
                    {svc.name || svc.title}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-normal">
                    {svc.description || svc.details || "No description provided."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Appointment (Call Now and Get a 20% Discount) */}
        <section className="bg-sky-600 text-white px-4 sm:px-0 py-10 border-t border-slate-200">
          <div className="max-w-xl mx-auto flex flex-col gap-0 overflow-hidden rounded-3xl shadow-[0_18px_50px_rgba(15,23,42,0.45)]">
            <div className="bg-sky-700/90 px-6 sm:px-10 py-8 flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
                Call Now and Get a <span className="text-sky-200">20%</span> Discount
              </h2>
              <p className="text-3xl font-bold mb-4">{phone}</p>
              <button
                type="button"
                onClick={() => onDownloadVCard?.()}
                className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold px-6 py-2.5 hover:bg-black"
              >
                Make Appointment
              </button>
            </div>
            <div className="bg-slate-900/95 px-6 sm:px-10 py-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
                Make Appointment
              </h2>
              <form
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <select className="col-span-1 rounded-md bg-white text-slate-800 px-3 py-2.5 text-sm">
                  <option>Select A Service</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                  <option>Service 3</option>
                </select>
                <select className="col-span-1 rounded-md bg-white text-slate-800 px-3 py-2.5 text-sm">
                  <option>Select Doctor</option>
                  <option>Doctor 1</option>
                  <option>Doctor 2</option>
                  <option>Doctor 3</option>
                </select>
                <input
                  type="text"
                  className="col-span-1 rounded-md bg-white text-slate-800 px-3 py-2.5 text-sm"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="col-span-1 rounded-md bg-white text-slate-800 px-3 py-2.5 text-sm"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  className="col-span-1 rounded-md bg-white text-slate-800 px-3 py-2.5 text-sm"
                  placeholder="Appointment Date"
                />
                <input
                  type="text"
                  className="col-span-1 rounded-md bg-white text-slate-800 px-3 py-2.5 text-sm"
                  placeholder="Appointment Time"
                />
                <button
                  type="submit"
                  className="col-span-1 sm:col-span-2 mt-1 inline-flex items-center justify-center rounded-md bg-sky-500 text-white font-semibold py-2.5 hover:bg-sky-400"
                >
                  Make Appointment
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Team (Meet Our Surgical Specialists) */}
        <section className="bg-white px-4 sm:px-8 py-10 border-t border-slate-100">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Meet Our Surgical Specialists
              </h2>
            </div>
            <div className="grid gap-5 grid-cols-2 text-sm">
              {[
                { name: "Dr. Boris Johnson", role: "Plastic Surgeon" },
                { name: "Dr. Amelia Jones", role: "Plastic Surgeon" },
                { name: "Dr. Ava Brown", role: "Plastic Surgeon" },
                { name: "Dr. Alexander Bell", role: "Plastic Surgeon" },
              ].map((doc) => (
                <div key={doc.name} className="rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden flex flex-col">
                  <div className="h-32 bg-slate-200" />
                  <div className="px-4 py-4 text-center">
                    <p className="text-[14px] font-semibold text-slate-900">
                      {doc.name}
                    </p>
                    <p className="text-[12px] text-slate-500">{doc.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blogs (Latest Updates / Articles) */}
        {blogs && blogs.length > 0 && (
          <section className="bg-sky-50 px-4 sm:px-8 py-10 border-t border-slate-100">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1" style={{ color: primaryColor }}>
                  Latest Updates
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  Our Latest Blogs
                </h2>
              </div>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                {blogs.map((blog: any) => (
                  <div key={blog.id || blog.title} className="rounded-2xl overflow-hidden bg-white shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col group">
                    <div className="h-40 w-full relative bg-slate-100 overflow-hidden">
                      {blog.icon ? (
                         <Image src={blog.icon} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                      ) : (
                         <div className="w-full h-full flex items-center justify-center text-slate-400">No Image</div>
                      )}
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                         {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-[15px] font-bold text-slate-900 leading-snug mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-[12px] text-slate-600 leading-relaxed line-clamp-3 mb-4 flex-1">
                        {blog.description}
                      </p>
                      <button type="button" className="text-left text-[11px] font-bold text-sky-600 mt-auto flex items-center gap-1 hover:text-sky-800 transition-colors uppercase tracking-wider">
                        Read Story <span className="text-lg leading-none">&rsaquo;</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials */}
        <section className="bg-slate-50 px-4 sm:px-8 py-10 border-t border-slate-100">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                What Our Clients Say!
              </h2>
            </div>
            <div className="max-w-xl mx-auto">
              <div className="space-y-4">
                {testimonials.map((t: any, idx: number) => (
                  <div
                    key={t.id || idx}
                    className="rounded-2xl bg-white border border-slate-200 px-4 py-8 text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    {t.image ? (
                      <div className="mx-auto mb-4 h-20 w-20 rounded-full overflow-hidden relative border-2 border-slate-200 shadow-sm">
                        <Image src={t.image} alt={t.name || "Testimonial"} fill className="object-cover" unoptimized={!!t.image.startsWith("data:")} />
                      </div>
                    ) : (
                      <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-slate-200 border border-slate-100 flex items-center justify-center text-slate-500 font-bold text-xl">
                        {(t.name || "C")[0].toUpperCase()}
                      </div>
                    )}
                    <p className="text-[14px] sm:text-[15px] text-slate-700 mb-4 italic px-4 leading-relaxed">
                      &quot;{t.quote || t.text}&quot;
                    </p>
                    <div className="pt-2 border-t border-slate-100 mt-2">
                       <p className="text-[16px] font-bold text-slate-900">
                        {t.name}
                      </p>
                      <p className="text-[12px] text-slate-500 mt-0.5 tracking-wide uppercase font-medium">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* Contact */}
        <section
          id="contact"
          className="px-4 sm:px-8 py-9 bg-slate-50 border-t border-slate-100"
        >
          <div className="flex flex-col gap-8 items-start">
            <div className="space-y-3">
              <p
                className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1"
                style={{ color: primaryColor }}
              >
                Contact
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Book your confidential consultation
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-xl">
                Reach out via phone or email for consultation requests, second opinions or surgical
                planning. All conversations are handled with strict confidentiality.
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${email}`}
                className="block rounded-2xl bg-white border border-slate-200 px-4 py-3 hover:border-sky-400/80 transition-colors"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Email
                </p>
                <p className="mt-1 text-slate-900 break-all">{email}</p>
              </a>
              <a
                href={`tel:${phone}`}
                className="block rounded-2xl bg-white border border-slate-200 px-4 py-3 hover:border-sky-400/80 transition-colors"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Phone
                </p>
                <p className="mt-1 text-slate-900">{phone}</p>
              </a>
              <div className="rounded-2xl bg-white border border-slate-200 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Location
                </p>
                <p className="mt-1 text-slate-900">{address}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms & Conditions Section */}
        {card.termsHtml && (
          <section id="terms-conditions" className="px-4 sm:px-8 py-9 bg-white border-t border-slate-100">
            <div className="space-y-3">
              <p
                className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1"
                style={{ color: primaryColor }}
              >
                Legal
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Terms & Conditions
              </h2>
              <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 text-[13px] text-slate-600 leading-relaxed overflow-hidden prose prose-slate max-w-none prose-sm" dangerouslySetInnerHTML={{ __html: card.termsHtml }} />
            </div>
          </section>
        )}

        {/* Privacy Policy Section */}
        {card.privacyHtml && (
          <section id="privacy-policy" className="px-4 sm:px-8 py-9 bg-slate-50 border-t border-slate-100">
            <div className="space-y-3">
              <p
                className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1"
                style={{ color: primaryColor }}
              >
                Privacy
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Privacy Policy
              </h2>
              <div className="mt-4 p-5 rounded-2xl bg-white border border-slate-100 text-[13px] text-slate-600 leading-relaxed overflow-hidden prose prose-slate max-w-none prose-sm" dangerouslySetInnerHTML={{ __html: card.privacyHtml }} />
            </div>
          </section>
        )}

        {/* Footer (dark, multi-column, like Plasery) */}
        <footer className="bg-slate-900 text-slate-200 pt-8 border-t border-slate-800">
          <div className="max-w-xl mx-auto px-4 sm:px-8 pb-6 grid gap-6 grid-cols-1 sm:grid-cols-2 text-[13px]">
            <div>
              <p className="text-xl font-semibold mb-2">
                Plasery
              </p>
              <p className="text-[12px] text-slate-400">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {socialLinks && socialLinks.length > 0 ? (
                  socialLinks.map((link: any, idx: number) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded bg-slate-800 text-slate-200 text-[10px] sm:text-xs flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors"
                      title={link.platform}
                    >
                      {link.platform.substring(0, 2).toUpperCase()}
                    </a>
                  ))
                ) : (
                  [1, 2, 3, 4].map((i) => (
                    <button
                      key={i}
                      type="button"
                      className="h-8 w-8 rounded bg-slate-800 text-slate-200 text-xs flex items-center justify-center"
                    >
                      in
                    </button>
                  ))
                )}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-2">Address</p>
              <p className="text-[12px] text-slate-400">
                123 Street, New York, USA
              </p>
              <p className="text-[12px] text-slate-400 mt-1">{phone}</p>
              <p className="text-[12px] text-slate-400 mt-1">{email}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-2">Quick Links</p>
              <div className="flex flex-col gap-1 text-[12px] text-slate-400">
                <button type="button" className="text-left hover:text-white">
                  About Us
                </button>
                <button type="button" className="text-left hover:text-white">
                  Contact Us
                </button>
                <button type="button" className="text-left hover:text-white">
                  Our Services
                </button>
                <button
                  type="button"
                  className="text-left hover:text-white"
                  onClick={() => {
                    const el = document.getElementById("privacy-policy");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    else setShowPrivacy(true); // Fallback to modal if section not in body
                  }}
                >
                  Privacy Policy
                </button>
                <button
                  type="button"
                  className="text-left hover:text-white"
                  onClick={() => {
                    const el = document.getElementById("terms-conditions");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    else setShowTerms(true); // Fallback to modal if section not in body
                  }}
                >
                  Terms &amp; Condition
                </button>
                <button type="button" className="text-left hover:text-white">
                  Support
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-2">Newsletter</p>
              <p className="text-[12px] text-slate-400 mb-3">
                Dolor amet sit justo amet elitr clita ipsum elitr est.
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-full bg-transparent border border-slate-600 px-3 pr-20 py-2 text-[12px] text-slate-200 placeholder:text-slate-500"
                />
                <button
                  type="button"
                  className="absolute right-1 top-1 rounded-full bg-sky-500 text-white text-[11px] px-3 py-1.5"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800">
            <div className="max-w-xl mx-auto px-4 sm:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
              <p>
                © {new Date().getFullYear()} Your Site Name, All Right Reserved.
              </p>
              <p>
                Designed by HTML Codex. Distributed by ThemeWagon.
              </p>
            </div>
          </div>
        </footer>

        {showTerms && card.termsHtml && (
          <LegalSection
            title="Terms & Conditions"
            html={card.termsHtml}
            onClose={() => setShowTerms(false)}
          />
        )}
        {showPrivacy && card.privacyHtml && (
          <LegalSection
            title="Privacy Policy"
            html={card.privacyHtml}
            onClose={() => setShowPrivacy(false)}
          />
        )}
      </div>
    </div>
  );
}

function LegalSection({
  title,
  html,
  onClose,
}: {
  title: string;
  html?: string;
  onClose: () => void;
}) {
  if (!html) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative flex h-full max-h-[80vh] w-full max-w-xl flex-col bg-white overflow-hidden rounded-3xl shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 text-sm text-gray-700 leading-relaxed prose prose-slate max-w-none">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  );
}

