"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { Mail, Phone, MapPin, Cake, Target, Presentation, Calendar, ChevronLeft, ChevronRight, LayoutGrid, Share2, MessageCircle, ExternalLink, User, Sparkles, ChevronDown, Globe, Instagram, Youtube, Linkedin, Maximize, ArrowRight, Wifi, Clock, ArrowLeft, Cpu } from "lucide-react";
import { getSocialIcon } from "@/lib/social-icons";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";
import { downloadQrPng } from "@/lib/qr";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  qrDataUrl?: string;
  onDownloadVCard?: () => void;
};

const DEFAULT_STATS = [
  { label: "Years experience", value: "10+" },
  { label: "Projects delivered", value: "20+" },
  { label: "Key clients", value: "5+" },
];

const DEFAULT_EXPERTISE = [
  {
    title: "Strategy",
    description: "Positioning, roadmaps and decision support for leadership and boards.",
  },
  {
    title: "Design",
    description: "Brand, product and communication systems that feel consistent and premium.",
  },
  {
    title: "Development",
    description: "Modern, performant frontends and internal tools for your team.",
  },
];

const DEFAULT_PROCESS_STEPS = [
  {
    label: "01 · Discovery",
    title: "Understand context & goals",
    description: "Stakeholder conversations, current assets review and success metrics.",
  },
  {
    label: "02 · Direction",
    title: "Shape strategy & narrative",
    description: "Positioning, messaging, structure and a clear execution roadmap.",
  },
  {
    label: "03 · Delivery",
    title: "Design, build & handover",
    description: "Interfaces, systems and documentation ready for your team to run.",
  },
];

const DEFAULT_CLIENTS = [
  "Acme Group",
  "Northwind",
  "Globex",
  "Vertex Capital",
  "Studio One",
  "Nimbus Labs",
];

const DEFAULT_FAQ = [
  {
    question: "Which type of work do you usually take on?",
    answer:
      "Leadership profiles, corporate sites, internal tools and design systems for growth‑stage teams.",
  },
  {
    question: "How do projects typically start?",
    answer:
      "We begin with a short discovery call to understand context, timelines and success metrics, then shape an engagement.",
  },
  {
    question: "Do you work with existing in‑house teams?",
    answer:
      "Yes. Most work happens alongside your product, brand or engineering team with shared tools and rituals.",
  },
];

const DEFAULT_SHOWCASE = [
  {
    title: "Typefolio Corporate Site",
    description: "End‑to‑end corporate presence: positioning, visuals and responsive build.",
  },
  {
    title: "Leadership Profile System",
    description: "Modular profile pages for founders and CXOs across multiple brands.",
  },
];

const DEFAULT_GALLERY = [
  { imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200" },
];

const DEFAULT_TESTIMONIALS = [
  {
    name: "Ronald Richards",
    role: "Founding Partner",
    quote: "Their strategic insight and design leadership transformed our corporate identity. The level of detail and execution across our product ecosystem was exceptional.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
  }
];

const DEFAULT_PRODUCTS_LIST = [
  {
    name: "Brand Strategy",
    description: "Positioning & Narrative",
    price: "1500",
    currency: "$",
    icon: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400"
  },
  {
    name: "Design System",
    description: "Multi-platform UI Kit",
    price: "2400",
    currency: "$",
    icon: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=400"
  }
];

const DEFAULT_BLOGS_LIST = [
  {
    title: "The Future of CXO Branding",
    description: "How digital identity is shaping leadership trust in 2024.",
    icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600"
  },
  {
    title: "Scaling Design Systems",
    description: "Moving from modular components to unified brand narratives.",
    icon: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600"
  },
  {
    title: "Organic Growth Loops",
    description: "Leveraging internal rituals for external market positioning.",
    icon: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600"
  }
];

export function CorporateVCardTemplate({ card, slug, baseUrl, qrDataUrl, onDownloadVCard }: Props) {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const name = card.title || "Corporate Profile";
  const role = card.occupation || card.tagline || "Founder · CXO · Advisor";
  const description =
    card.description ||
    "Strategic partner for brands, boards and teams. Helping organisations plan, design and ship ambitious initiatives.";

  const stats =
    (card as any).stats && Array.isArray((card as any).stats) && (card as any).stats.length >= 3
      ? (card as any).stats
      : DEFAULT_STATS;

  const services =
    card.services && card.services.length > 0
      ? card.services
      : DEFAULT_EXPERTISE;

  const showcaseSource =
    (card.blogs && card.blogs.length > 0 && card.blogs.slice(0, 2)) ||
    (card.products && card.products.length > 0 && card.products.slice(0, 2)) ||
    DEFAULT_SHOWCASE;

  const processSteps =
    (card as any).processSteps && Array.isArray((card as any).processSteps)
      ? (card as any).processSteps
      : DEFAULT_PROCESS_STEPS;

  const clientLogos =
    (card as any).clientLogos && Array.isArray((card as any).clientLogos)
      ? (card as any).clientLogos
      : DEFAULT_CLIENTS;

  const faqItems =
    (card as any).faqs && Array.isArray((card as any).faqs) && (card as any).faqs.length > 0
      ? (card as any).faqs
      : DEFAULT_FAQ;

  const gallery =
    card.galleries && card.galleries.length > 0
      ? card.galleries
      : DEFAULT_GALLERY;

  const addedTestimonials =
    card.testimonials && card.testimonials.length > 0 ? card.testimonials : [];
  const testimonials = addedTestimonials.length > 0 ? addedTestimonials : [DEFAULT_TESTIMONIALS[0]];
  const activeTestimonial =
    testimonials[(activeTestimonialIndex + testimonials.length) % testimonials.length];

  const products =
    card.products && card.products.length > 0
      ? card.products
      : DEFAULT_PRODUCTS_LIST;
  const activeProduct = products[(activeProductIndex + products.length) % products.length];

  const blogs =
    card.blogs && card.blogs.length > 0
      ? card.blogs
      : DEFAULT_BLOGS_LIST;
  const addedBlogs = card.blogs && card.blogs.length > 0 ? card.blogs : [];
  const addedEmbedTags = (card.embedTags || []).filter((e) => (e.value || "").trim().length > 0);
  const getInstagramEmbedUrl = (raw: string): string | null => {
    const text = raw || "";
    const directUrlMatch = text.match(/https?:\/\/(www\.)?instagram\.com\/(p|reel)\/[A-Za-z0-9_-]+/i);
    if (directUrlMatch?.[0]) return `${directUrlMatch[0].replace(/\/+$/, "")}/embed`;

    const permalinkMatch = text.match(/data-instgrm-permalink=['"]([^'"]+)['"]/i);
    if (permalinkMatch?.[1]) {
      return `${permalinkMatch[1].replace(/\/+$/, "")}/embed`;
    }
    return null;
  };
  const getLinkedInEmbedUrl = (raw: string): string | null => {
    const text = raw || "";
    const iframeSrcMatch = text.match(/<iframe[^>]*src=['"]([^'"]+)['"]/i);
    if (iframeSrcMatch?.[1] && /linkedin\.com\/embed\/feed\/update/i.test(iframeSrcMatch[1])) {
      return iframeSrcMatch[1];
    }
    const directUrlMatch = text.match(/https?:\/\/(www\.)?linkedin\.com\/embed\/feed\/update\/[^\s"'<>]+/i);
    if (directUrlMatch?.[0]) return directUrlMatch[0];
    return null;
  };
  const getIframeUrl = (raw: string): string | null => {
    const text = raw || "";
    const iframeSrcMatch = text.match(/<iframe[^>]*src=['"]([^'"]+)['"]/i);
    if (iframeSrcMatch?.[1]) return iframeSrcMatch[1];
    const directUrlMatch = text.match(/https?:\/\/[^\s"'<>]+/i);
    if (directUrlMatch?.[0]) return directUrlMatch[0];
    return null;
  };
  const addedInstagramEmbeds = addedEmbedTags
    .map((embed) => ({ ...embed, embedUrl: getInstagramEmbedUrl(embed.value) }))
    .filter((embed) => !!embed.embedUrl);
  const addedLinkedInEmbeds = addedEmbedTags
    .filter((embed) => (embed.section ?? "") === "linkedin")
    .map((embed) => ({ ...embed, embedUrl: getLinkedInEmbedUrl(embed.value) }))
    .filter((embed) => !!embed.embedUrl);
  const addedIframes = addedEmbedTags
    .filter((embed) => (embed.section ?? "") === "iframes")
    .map((embed) => ({ ...embed, embedUrl: getIframeUrl(embed.value) }))
    .filter((embed) => !!embed.embedUrl);

  const normalizeCustomLinkUrl = (raw: string) => {
    const text = (raw || "").trim();
    if (!text) return "";
    if (/^https?:\/\//i.test(text)) return text;
    return `https://${text}`;
  };

  const addedCustomLinks = (card.customLinks || []).filter(
    (l) => (l.name || "").trim().length > 0 && (l.url || "").trim().length > 0
  );

  const hasAnyEmbeddedPosts =
    addedInstagramEmbeds.length > 0 || addedLinkedInEmbeds.length > 0;

  const email = card.email;
  const phone = card.phone;
  const address = card.address;
  const hasRenderableHtml = (html?: string) =>
    !!html && html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim().length > 0;
  const showTerms = hasRenderableHtml(card.termsHtml);
  const showPrivacy = hasRenderableHtml(card.privacyHtml);
  const businessHourRows = ((): { day: string; time: string }[] => {
    const source = card.businessHours;
    if (source) {
      return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => {
        const item = source[day];
        if (!item || !item.enabled) return { day, time: "Closed" };
        return { day, time: `${item.start} - ${item.end}` };
      });
    }
    return [
      { day: "Monday", time: "12:00 AM - 12:00 AM" },
      { day: "Tuesday", time: "12:00 AM - 12:00 AM" },
      { day: "Wednesday", time: "12:00 AM - 12:00 AM" },
      { day: "Thursday", time: "12:00 AM - 12:00 AM" },
      { day: "Friday", time: "12:00 AM - 12:00 AM" },
      { day: "Saturday", time: "12:00 AM - 12:00 AM" },
      { day: "Sunday", time: "Closed" },
    ];
  })();
  const appointmentTypeLabel = card.appointmentType === "paid" ? "Paid" : "Free";
  const appointmentRows =
    (card.appointmentServices || []).filter(
      (svc) => (svc.serviceName || "").trim().length > 0 || (svc.amount || "").trim().length > 0
    );

  const websiteUrl =
    card.website && card.website.trim()
      ? card.website.trim().startsWith("http")
        ? card.website.trim()
        : `https://${card.website.trim()}`
      : undefined;

  const primaryColor = card.templatePrimaryColor || "#3B82F6"; // Vibrant blue
  const accentColor = "#FF8933"; // Orange from social icons in image 1

  useEffect(() => {
    setActiveTestimonialIndex(0);
  }, [card.id, testimonials.length]);

  useEffect(() => {
    if (hasAnyEmbeddedPosts) return;
    if (addedTestimonials.length <= 1) return;
    const timer = setInterval(() => {
      setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [addedTestimonials.length, testimonials.length, hasAnyEmbeddedPosts]);

  useEffect(() => {
    setActiveProductIndex(0);
  }, [card.id, products.length]);

  useEffect(() => {
    if (hasAnyEmbeddedPosts) return;
    if (products.length <= 1) return;
    const timer = setInterval(() => {
      setActiveProductIndex((prev) => (prev + 1) % products.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [products.length, hasAnyEmbeddedPosts]);

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-[#0F172A] font-sans flex justify-center px-0 py-0 overflow-x-hidden">
      <div className="w-full max-w-[540px] bg-white relative flex flex-col shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08)]">
        
        {/* DYNAMIC HEADER: DARK PROGRAMMING THEME FOR COOPORATE-6 OR DEFAULT WAVY BANNER */}
        {slug === "cooporate-6" ? (
             <section className="bg-[#111113] relative w-full pt-8 pb-10 px-6 sm:px-8 flex flex-col justify-between overflow-hidden min-h-[360px] shrink-0 border-b-[3px] border-[#ff7b1c]">
                 {/* Top Right EN Button */}
                 <div className="absolute top-5 right-5 bg-gradient-to-tr from-[#ff6b00] to-[#ff983a] text-white text-[10px] font-black uppercase px-2 py-1 flex items-center gap-1 z-30 shadow-[0_4px_10px_rgba(255,107,0,0.3)] rounded-[3px]">
                     EN <ChevronDown className="w-3 h-3" />
                 </div>

                 {/* Text Content */}
                 <div className="relative z-20 w-full mt-2 mb-8">
                     <h1 className="text-[38px] font-black text-white leading-none tracking-tight mb-3">
                         Programming
                     </h1>
                     <p className="text-[#a4a4aa] text-[15px] leading-snug font-medium max-w-[210px]">
                         Start your business with the best programming
                     </p>
                 </div>

                 {/* Laptop Illustration Layout */}
                 <div className="absolute bottom-4 right-[-5%] sm:right-0 w-[240px] h-[240px] z-10 pointer-events-none drop-shadow-[0_10px_30px_rgba(255,107,0,0.15)] flex flex-col items-center justify-center">
                     
                     <Image 
                         src={(card as any).bannerImage || "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800"} 
                         alt="Programming" 
                         fill 
                         className="object-contain opacity-90 mix-blend-screen" 
                         unoptimized={(card as any).bannerImage?.startsWith("data:")} 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/20 to-transparent"></div>

                     {/* Floating syntax/language tags relative to laptop */}
                     <div className="absolute top-0 right-[40%] border-[1.5px] border-[#ec4899] text-[#ec4899] rounded-full px-2.5 py-0.5 text-[9px] font-bold bg-[#111113]/90">Python</div>
                     <div className="absolute top-[20%] left-[-5%] border-[1.5px] border-[#38bdf8] text-[#38bdf8] rounded-full px-2.5 py-0.5 text-[9px] font-bold bg-[#111113]/90">Golang</div>
                     <div className="absolute top-[18%] right-0 border-[1.5px] border-[#d946ef] text-[#d946ef] rounded-full px-2.5 py-0.5 text-[9px] font-bold bg-[#111113]/90">Kotlin</div>
                     <div className="absolute bottom-[40%] left-[5%] border-[1.5px] border-[#14b8a6] text-[#14b8a6] rounded-full px-2.5 py-0.5 text-[9px] font-bold bg-[#111113]/90">C++</div>
                     <div className="absolute bottom-[35%] right-[10%] border-[1.5px] border-[#a855f7] text-[#a855f7] rounded-full px-2.5 py-0.5 text-[9px] font-bold bg-[#111113]/90">TypeScript</div>
                     <div className="absolute bottom-[20%] right-[-5%] border-[1.5px] border-[#f43f5e] text-[#f43f5e] rounded-full px-2.5 py-0.5 text-[9px] font-bold bg-[#111113]/90">JavaScript</div>
                 </div>

                 {/* Bottom Floating HTML chat bubble */}
                 <div className="absolute bottom-6 left-6 z-30 pointer-events-none">
                     <div className="bg-gradient-to-br from-[#ffa03a] to-[#f06100] text-white text-[12px] font-black tracking-wider px-3.5 py-1.5 shadow-[0_4px_10px_rgba(240,97,0,0.3)] relative rounded-[4px]">
                         HTML
                         <div className="absolute -bottom-1.5 left-3 border-t-[6px] border-t-[#f06100] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></div>
                     </div>
                 </div>

                 {/* Bottom Right FAB Grid overlapping the border */}
                 <div className="absolute bottom-[-22px] right-6 z-40 w-12 h-12 bg-gradient-to-br from-[#ff9b44] to-[#f06100] rounded-full shadow-[0_4px_15px_rgba(240,97,0,0.4)] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform ring-4 ring-[#111113]">
                     <LayoutGrid className="w-[18px] h-[18px] text-white" strokeWidth={2.5} />
                 </div>
             </section>
        ) : (
             <section className="relative h-[260px] w-full overflow-hidden shrink-0">
               <Image 
                 src={(card as any).bannerImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200"} 
                 alt="Banner" 
                 fill 
                 className="object-cover" 
               />
             </section>
        )}

        {/* IDENTITY SECTION (Target Layout) */}
        {slug === "cooporate-6" ? (
          <>
             <section className="relative bg-[#111113] px-6 pt-12 pb-14 z-20 flex flex-col items-center">
                 {/* The Main Profile Box */}
                 <div className="w-full max-w-[460px] h-[160px] sm:h-[180px] bg-[#1a1a1c] border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative flex text-left mt-6">
                     
                     {/* Clean Clip-Path Strategy for the Slanted Separator */}
                     <div className="absolute inset-y-0 left-0 w-[45%] bg-[#0a0a0a] z-10 flex items-center justify-center" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)' }}>
                         {/* The shape holding the code bracket */}
                         <div className="relative z-30 w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] bg-black flex items-center justify-center shadow-2xl ml-[-15%]" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                             <div className="flex font-black text-[30px] sm:text-[38px] tracking-tighter items-center">
                                 <span className="text-[#ff7b1c]">{"<"}</span>
                                 <span className="text-white transform rotate-[10deg] scale-110 mx-1.5 -translate-y-[1px]">{"/"}</span>
                                 <span className="text-[#ff7b1c]">{">"}</span>
                             </div>
                         </div>
                     </div>

                     {/* The gray slanted border effect sitting neatly beneath the clip-path */}
                     <div className="absolute inset-y-0 left-0 w-[45%] z-0 pointer-events-none">
                         <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-white/20 transform -skew-x-[14deg] origin-bottom-right drop-shadow-lg"></div>
                     </div>

                     {/* Right Details Side */}
                     <div className="absolute inset-y-0 right-0 w-[65%] h-full p-4 pl-6 sm:pl-8 flex flex-col justify-center z-10">
                         {/* Code background with blend */}
                         <div className="absolute inset-0 z-0 opacity-20 overflow-hidden mix-blend-screen pointer-events-none">
                             <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400" fill className="object-cover" alt="code bg" unoptimized />
                             <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#111113]/80 to-[#111113]/40"></div>
                         </div>
                         
                         {/* Text Content */}
                         <div className="relative z-10 w-full mt-1">
                             <h2 className="text-[22px] sm:text-[26px] font-black text-white leading-tight mb-1 tracking-tight drop-shadow-md">{name || "Chris Morries"}</h2>
                             {/* Subtext typing animation line */}
                             <p className="text-[13px] sm:text-[15px] font-bold text-[#f06100] tracking-wide flex items-center whitespace-nowrap drop-shadow-md">
                                 {role || "Turning Ideas Into Code"}
                                 <span className="animate-pulse w-[2px] h-[14px] bg-[#f06100] ml-1.5"></span>
                             </p>
                         </div>
                     </div>
                 </div>
                  {/* Social Vertical Stack */}
                  <div className="mt-8 flex flex-col items-center w-full max-w-[460px] pb-6">
                      <VCardSocialLinks 
                          card={card} 
                          layout="vertical" 
                          variant="circular" 
                          iconSize={20}
                          itemClassName="bg-[#1a1a1c] border border-white/10 rounded-2xl p-4 w-full hover:bg-[#222] transition-all"
                      />
                  </div>

                 {/* Decorator Glass on the left bottom */}
                 <div className="absolute bottom-6 left-6 z-10 pointer-events-none opacity-80 w-6 h-6 transform -rotate-[15deg]">
                     <svg viewBox="0 0 24 24" fill="none" stroke="#f06100" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-md">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                     </svg>
                 </div>

                 {/* BIO TEXT */}
                 <div className="w-full max-w-[460px] text-center px-1 sm:px-2 mt-8 z-20">
                     <p className="text-[#c6c6cc] text-[13px] sm:text-[14.5px] leading-relaxed">
                         A <strong className="text-white">programmer</strong> is a professional who creates software applications or systems by writing instructions in a programming language. They use logic, problem-solving skills, and technical knowledge to develop solutions for specific tasks or problems. Programmers work with languages such as <strong className="text-white">Python, Java, C++, JavaScript, and many others</strong>, depending on the project's needs.
                     </p>
                 </div>
             </section>

             {/* CONTACTS SECTION */}
             <section className="relative w-full pt-16 pb-20 px-6 sm:px-8 flex flex-col items-center border-[0.5px] border-t-white/10 border-b-white/10 overflow-hidden bg-[#0f0f11]">
                 {/* Background mix */}
                 <div className="absolute inset-0 z-0">
                     <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800" fill className="object-cover opacity-[0.10] mix-blend-screen" alt="code bg" unoptimized />
                     <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-[#111113]/90 to-[#111113]"></div>
                 </div>

                 {/* Floating Chat Bubble C++ on top right */}
                 <div className="absolute top-10 w-full max-w-[480px] z-10 pointer-events-none flex justify-end px-2">
                     <div className="bg-gradient-to-br from-[#ffa03a] to-[#f06100] text-white text-[15px] font-black tracking-wider px-3.5 py-1.5 shadow-[0_4px_10px_rgba(240,97,0,0.3)] relative rounded-[4px]">
                         C++
                         <div className="absolute -bottom-1.5 right-3 border-t-[6px] border-t-[#f06100] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></div>
                     </div>
                 </div>

                 {/* Title */}
                 <div className="relative z-10 text-center mb-10 flex items-center justify-center gap-2">
                     <ChevronLeft className="w-7 h-7 text-white/80" strokeWidth={1} />
                     <h2 className="text-[26px] font-black text-[#f06100] tracking-wide">Contacts</h2>
                     <ChevronRight className="w-7 h-7 text-white/80" strokeWidth={1} />
                 </div>

                 {/* Contact Pills Grid */}
                 <div className="relative z-10 w-full max-w-[480px] grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {[
                         { icon: <Mail className="w-[18px] h-[18px] text-[#f06100]" strokeWidth={2.5}/>, value: email || "chris.morries.dev@gmail.com" },
                         { icon: <Mail className="w-[18px] h-[18px] text-[#f06100]" strokeWidth={2.5}/>, value: "info.chrismorries@outlook.com" },
                         { icon: <Phone className="w-[18px] h-[18px] text-[#f06100]" strokeWidth={2.5}/>, value: phone || "+91 9876543210" },
                         { icon: <Phone className="w-[18px] h-[18px] text-[#f06100]" strokeWidth={2.5}/>, value: "+91 7894561230" },
                         { icon: <Cake className="w-[18px] h-[18px] text-[#f06100]" strokeWidth={2.5}/>, value: "12th June, 1990" },
                         { icon: <MapPin className="w-[18px] h-[18px] text-[#f06100]" strokeWidth={2.5}/>, value: address || "India - Pune" }
                     ].map((item, idx) => (
                         <div key={idx} className="relative w-full h-[54px] bg-[#1d1d1f] border-[1.5px] border-white/5 rounded-[8px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.4)] group hover:border-[#f06100]/50 transition-all flex items-center">
                             {/* Darker left section with slanted clip */}
                             <div className="absolute inset-y-0 left-0 w-[28%] bg-[#0a0a0a] z-10 flex items-center justify-center p-1" style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 100%)' }}>
                                 {item.icon}
                             </div>
                             {/* The slanted gray separator line sitting right on the edge */}
                             <div className="absolute inset-y-0 left-0 w-[28%] z-0 pointer-events-none">
                                <div className="absolute top-[-20%] bottom-[-20%] right-[-1px] w-[1.5px] bg-white/20 transform -skew-x-[16deg] origin-bottom-right drop-shadow-lg"></div>
                             </div>

                             {/* Right text section */}
                             <div className="pl-[33%] pr-3 flex items-center w-full h-full">
                                 <span className="text-[12px] sm:text-[13px] font-bold text-white truncate w-full leading-tight">
                                     {item.value}
                                 </span>
                             </div>
                         </div>
                     ))}
                 </div>
             </section>

             {/* QR CODE SECTION (Exclusive for cooporate-6) */}
             <section className="relative w-full pt-14 pb-16 px-6 sm:px-8 flex flex-col items-center bg-[#111113] overflow-hidden">
                 {/* Top Left Floating JAVA Chat Bubble */}
                 <div className="absolute top-10 w-full max-w-[500px] z-20 pointer-events-none flex justify-start px-2 sm:px-4">
                     <div className="bg-gradient-to-br from-[#ffa03a] to-[#f06100] text-white text-[15px] font-black tracking-wider px-3.5 py-1.5 shadow-[0_4px_10px_rgba(240,97,0,0.3)] relative rounded-[4px] ml-2">
                         JAVA
                         <div className="absolute -bottom-1.5 left-3 border-t-[6px] border-t-[#f06100] border-r-[5px] border-r-transparent border-l-[5px] border-l-transparent"></div>
                     </div>
                 </div>

                 {/* Middle Right Wireframe Globe Icon */}
                 <div className="absolute top-20 right-[-10px] sm:right-6 z-0 opacity-[0.35] pointer-events-none">
                     <Globe className="w-16 h-16 text-[#f06100]" strokeWidth={1} />
                 </div>

                 {/* Title */}
                 <div className="relative z-10 text-center mb-10 mt-6 flex items-center justify-center gap-2">
                     <ChevronLeft className="w-7 h-7 text-white/80" strokeWidth={1} />
                     <h2 className="text-[26px] font-black text-[#f06100] tracking-wide">QR Code</h2>
                     <ChevronRight className="w-7 h-7 text-white/80" strokeWidth={1} />
                 </div>

                 {/* Main QR Card */}
                 <div className="relative z-10 w-full max-w-[460px] min-h-[160px] sm:min-h-[180px] bg-[#1a1a1c] border-[1px] border-white/5 rounded-2xl overflow-hidden shadow-2xl flex text-left">
                     {/* Left Logo Side */}
                     <div className="absolute inset-y-0 left-0 w-[42%] bg-[#111113] z-10 flex items-center justify-center pl-2 pr-4 sm:pl-3 sm:pr-6" style={{ clipPath: 'polygon(0 0, 88% 0, 100% 100%, 0 100%)' }}>
                         {/* QR Code Container */}
                         <div className="relative z-30 w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] bg-white rounded-[10px] flex items-center justify-center p-2.5 shadow-[0_0_20px_rgba(0,0,0,0.6)] ml-1">
                             {qrDataUrl ? (
                               <Image src={qrDataUrl} alt="QR Code" fill className="object-contain p-2" />
                             ) : (
                               <div className="w-full h-full border border-gray-200 flex items-center justify-center rounded-lg">
                                 <span className="text-[10px] text-gray-400 font-bold">QR</span>
                               </div>
                             )}
                         </div>
                     </div>
                     
                     {/* The slanted gray separator line sitting right on the edge */}
                     <div className="absolute inset-y-0 left-0 w-[42%] z-20 pointer-events-none">
                        <div className="absolute top-[-10%] bottom-[-10%] right-[0.5px] w-[1.5px] bg-white/10 transform skew-x-[8deg] origin-bottom-right"></div>
                     </div>

                     {/* Right Text Side */}
                     <div className="absolute inset-y-0 right-0 w-[58%] h-full p-4 sm:p-6 flex flex-col justify-center">
                         {/* Subtle gradient bg overlay inside text area */}
                         <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

                         <div className="relative z-10 pl-2">
                            <h3 className="text-[17px] sm:text-[19px] font-black text-[#f06100] tracking-tight mb-2">Scan to Contact</h3>
                            <p className="text-[11px] sm:text-[12px] font-medium text-white/90 leading-[1.6]">
                                Point your phone&apos;s camera at the QR code to quickly add our contact information. 
                                You can also use the &quot;Add to Contacts&quot; button below for fast saving.
                            </p>
                         </div>
                     </div>
                 </div>

                 {/* Bottom Right Floating PHP Chat Bubble */}
                 <div className="absolute bottom-6 right-2 sm:right-6 z-10 pointer-events-none flex justify-end">
                     <div className="bg-gradient-to-br from-[#ffa03a] to-[#f06100] text-white text-[15px] font-black tracking-wider px-3.5 py-1.5 shadow-[0_4px_10px_rgba(240,97,0,0.3)] relative rounded-[4px]">
                         PHP
                         <div className="absolute -bottom-1.5 left-3 border-t-[6px] border-t-[#f06100] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></div>
                     </div>
                 </div>
             </section>

             {/* OUR SERVICES SECTION (Exclusive for cooporate-6) */}
             <section className="relative w-full pt-10 pb-20 px-6 sm:px-8 flex flex-col items-center bg-[#111113]">
                 {/* Title */}
                 <div className="relative z-10 text-center mb-12 flex items-center justify-center gap-2">
                     <ChevronLeft className="w-7 h-7 text-white/80" strokeWidth={1} />
                    <h2 className="text-[26px] font-black text-[#f06100] tracking-wide">
                      {card.serviceTitleSmall || "Our Services"}
                    </h2>
                     <ChevronRight className="w-7 h-7 text-white/80" strokeWidth={1} />
                 </div>

                {card.serviceTitle && (
                  <p className="text-[16px] font-black text-white/90 tracking-tight mb-8 text-center">
                    {card.serviceTitle}
                  </p>
                )}

                 {/* Grid for Service Cards */}
                <div
                  className={`w-full max-w-[500px] ${
                    card.displayImagesWithSlider
                      ? "flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4"
                      : "grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-5"
                  }`}
                >
                     {(services?.length > 0 ? services : [
                         { title: "Custom Software Development", desc: "Building tailored desktop, web, or mobile applications to meet specific business needs." },
                         { title: "Website & Web Application Development", desc: "Creating responsive, user-friendly websites and online platforms." },
                         { title: "API Development & Integration", desc: "Connecting different software systems to work together seamlessly." },
                         { title: "Database Design & Management", desc: "Creating, optimizing, and maintaining databases for storing and managing data." },
                         { title: "Software Maintenance & Bug Fixing", desc: "Updating existing applications, fixing errors, and improving performance." },
                         { title: "Automation & Scripting Solutions", desc: "Writing scripts to automate repetitive tasks and improve efficiency." }
                    ]).map((s: any, idx: number) => (
                        <div
                          key={idx}
                          className={`relative bg-[#1a1a1c] border border-white/5 rounded-[12px] overflow-hidden shadow-2xl flex flex-col group transition-all hover:bg-[#1d1d1f] ${
                            card.displayImagesWithSlider ? "min-w-[260px] snap-start" : ""
                          }`}
                        >
                             {/* The Image Section with Slanted Clip Path cutting the bottom edge */}
                             <div className="relative w-full h-[155px] sm:h-[140px] z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)' }}>
                                 {s.icon || s.image ? (
                                    <Image src={s.icon || s.image} alt={s.name || s.title} fill className="object-cover opacity-80 mix-blend-lighten group-hover:opacity-100 transition-opacity" />
                                 ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-[#0c0c0e] to-[#222] flex items-center justify-center">
                                       <Target className="w-10 h-10 text-white/20" />
                                    </div>
                                 )}
                             </div>

                             {/* Bottom half text description */}
                             <div className="px-5 pt-3 pb-8 flex flex-col items-center text-center relative z-20 -mt-1">
                                <h3 className="text-[14.5px] sm:text-[13.5px] font-black text-[#f06100] mb-2.5 leading-snug px-1 drop-shadow-md">
                                    {s.name || s.title}
                                </h3>
                                <p className="text-[12.5px] sm:text-[12px] font-medium text-white/90 leading-relaxed">
                                    {s.description || s.details || s.desc}
                                </p>
                             </div>

                             {/* DECORATIVE HOVER CORNER BRACKETS */}
                             {/* Top Right Bracket */}
                             <div className="absolute top-[-1px] right-[-1px] w-5 h-5 sm:w-6 sm:h-6 border-t-[1.5px] border-r-[1.5px] border-[#f06100] rounded-tr-[12px] z-30 transition-all opacity-90 group-hover:scale-105 origin-top-right"></div>
                             {/* Bottom Left Bracket */}
                             <div className="absolute bottom-[-1px] left-[-1px] w-5 h-5 sm:w-6 sm:h-6 border-b-[1.5px] border-l-[1.5px] border-[#f06100] rounded-bl-[12px] z-30 transition-all opacity-90 group-hover:scale-105 origin-bottom-left"></div>
                         </div>
                     ))}
                 </div>
             </section>

             {/* GALLERY SECTION (Exclusive for cooporate-6) */}
             <section className="relative w-full pt-16 pb-20 px-4 sm:px-6 flex flex-col items-center bg-[#111113] overflow-hidden">
                 {/* Floating Chat Bubble PHYTON on top left */}
                 <div className="absolute top-10 w-full max-w-[500px] z-10 pointer-events-none flex justify-start px-2 sm:px-4">
                     <div className="bg-gradient-to-br from-[#ffa03a] to-[#f06100] text-white text-[15px] font-black tracking-wider px-3.5 py-1.5 shadow-[0_4px_10px_rgba(240,97,0,0.3)] relative rounded-[4px] ml-1 sm:ml-2">
                         PHYTON
                         <div className="absolute -bottom-1.5 left-4 border-t-[6px] border-t-[#f06100] border-r-[5px] border-r-transparent border-l-[5px] border-l-transparent"></div>
                     </div>
                 </div>

                 {/* Cloud Upload Icon on top right */}
                 <div className="absolute top-10 right-4 sm:right-10 z-0 flex flex-col items-center justify-center transform scale-[1.05] pointer-events-none">
                     <svg width="65" height="50" viewBox="0 0 24 24" className="drop-shadow-lg">
                        <path fill="#ffffff" d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1388 20.1835 10.2023 17.8687 10.0249C17.33 6.64388 14.9602 4 12 4C9.03983 4 6.66996 6.64388 6.13133 10.0249C3.81646 10.2023 2 12.1388 2 14.5C2 16.9853 4.01472 19 6.5 19H17.5Z"/>
                        <path fill="#f06100" d="M12 9L8 14h3v6h2v-6h3l-4-5z"/>
                     </svg>
                 </div>

                 {/* Title */}
                 <div className="relative z-10 text-center mb-14 mt-4 flex items-center justify-center gap-2">
                     <ChevronLeft className="w-7 h-7 text-white/80" strokeWidth={1} />
                     <h2 className="text-[26px] font-black text-[#f06100] tracking-wide">Gallery</h2>
                     <ChevronRight className="w-7 h-7 text-white/80" strokeWidth={1} />
                 </div>

                 {/* Custom CSS Laptop Mockup Wrapper */}
                 <div className="relative z-10 w-full max-w-[480px] flex flex-col items-center px-1">
                     {/* Outer Screen Bezel */}
                     <div className="w-[92%] sm:w-[94%] bg-[#252528] rounded-t-[16px] sm:rounded-t-[20px] p-[5px] sm:p-[6px] pb-0 relative shadow-[0_-5px_30px_rgba(0,0,0,0.5)] z-20">
                         {/* Inner Screen Bezel with screen bounds */}
                         <div className="w-full bg-[#111] rounded-t-[10px] sm:rounded-t-[14px] p-[2px] pb-0 border border-white/5 border-b-0 relative">
                             {/* The actual Screen Canvas */}
                             <div className="relative w-full aspect-[16/10] bg-black rounded-t-[8px] sm:rounded-t-[12px] overflow-hidden flex items-center justify-center">
                                 <Image 
                                     src={gallery?.[0]?.imageUrl || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800"} 
                                     alt="Gallery Image" 
                                     fill 
                                     className="object-cover opacity-90 transition-opacity hover:opacity-100" 
                                     unoptimized={(gallery as any)?.[0]?.imageUrl?.startsWith("data:")}
                                 />
                                 
                                 {/* Fullscreen Maximize Button */}
                                 <div className="absolute top-4 right-4 w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] bg-gradient-to-br from-[#ff9b44] to-[#f06100] rounded-full flex items-center justify-center cursor-pointer shadow-[0_4px_15px_rgba(240,97,0,0.4)] z-40 hover:scale-105 transition-transform group">
                                     <Maximize className="w-5 h-5 text-white opacity-95 group-hover:opacity-100" strokeWidth={2.5} />
                                 </div>
                             </div>
                         </div>
                     </div>
                     
                     {/* Laptop Base Hinge / Lower Lip */}
                     <div className="w-full h-[14px] sm:h-[18px] bg-gradient-to-b from-[#6e6e73] via-[#4c4c52] to-[#2b2b2e] rounded-b-[20px] sm:rounded-b-[24px] relative z-30 flex justify-center -mt-[1px] shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                         {/* Central thumb indent for opening lid */}
                         <div className="w-[18%] h-[35%] bg-gradient-to-b from-[#111] to-[#333] rounded-b-md absolute top-0 shadow-inner"></div>
                     </div>
                     {/* Bottom resting shadow / Table light reflection */}
                     <div className="w-[85%] h-1 sm:h-1.5 bg-black/80 rounded-b-[100%] shadow-[0_8px_20px_black] z-10 -mt-[1px]"></div>
                 </div>

                 {/* Pagination Dots */}
                 <div className="flex justify-center gap-[6px] sm:gap-[8px] mt-10 z-10 relative">
                     <div className="w-[16px] h-[7px] rounded-sm bg-[#f06100] shadow-[0_0_8px_rgba(240,97,0,0.5)] cursor-pointer"></div>
                     <div className="w-[16px] h-[7px] rounded-sm bg-white hover:bg-white/80 cursor-pointer shadow-sm"></div>
                     <div className="w-[16px] h-[7px] rounded-sm bg-white hover:bg-white/80 cursor-pointer shadow-sm"></div>
                     <div className="w-[16px] h-[7px] rounded-sm bg-white hover:bg-white/80 cursor-pointer shadow-sm"></div>
                 </div>
             </section>

             {/* BLOG SECTION (Exclusive for cooporate-6) */}
             <section className="relative w-full pt-16 pb-20 px-4 sm:px-6 flex flex-col items-center bg-[#111113] overflow-hidden">
                 {/* Floating Chat Bubble OBJECTIVE-C on top left */}
                 <div className="absolute top-10 w-full max-w-[500px] z-10 pointer-events-none flex justify-start px-2 sm:px-4">
                     <div className="bg-gradient-to-br from-[#ffa03a] to-[#f06100] text-white text-[15px] font-black tracking-wider px-3.5 py-1.5 shadow-[0_4px_10px_rgba(240,97,0,0.3)] relative rounded-[4px] ml-1 sm:ml-2">
                         OBJECTIVE-C
                         <div className="absolute -bottom-1.5 left-4 border-t-[6px] border-t-[#f06100] border-r-[5px] border-r-transparent border-l-[5px] border-l-transparent"></div>
                     </div>
                 </div>

                 {/* Search/Analytics Icon on top right */}
                 <div className="absolute top-10 right-4 sm:right-10 z-0 flex flex-col items-center justify-center transform scale-[1.05] pointer-events-none">
                     <div className="relative w-[65px] h-[50px]">
                         {/* Window icon with chart */}
                         <div className="absolute right-0 top-0 w-[45px] h-[35px] bg-[#1a1a1c] border border-white/10 rounded-md overflow-hidden shadow-lg p-1.5">
                             <div className="flex gap-1 mb-1">
                                 <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                                 <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                                 <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                             </div>
                             <div className="flex items-end gap-[2px] h-[15px]">
                                 <div className="w-1.5 h-[40%] bg-[#f06100]"></div>
                                 <div className="w-1.5 h-[70%] bg-[#f06100]"></div>
                                 <div className="w-1.5 h-[50%] bg-[#f06100]"></div>
                                 <div className="w-1.5 h-[90%] bg-[#f06100]"></div>
                             </div>
                         </div>
                         {/* Magnifying glass overlaying it */}
                         <div className="absolute bottom-1 left-2 w-[34px] h-[34px] flex items-center justify-center z-10">
                             <div className="w-[18px] h-[18px] border-[3px] border-[#f06100] rounded-full relative bg-[#111113]">
                                 <div className="absolute -bottom-2 -right-2 w-[10px] h-[3px] bg-[#f06100] rotate-45 transform origin-top-left"></div>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Title */}
                 <div className="relative z-10 text-center mb-14 mt-4 flex items-center justify-center gap-2">
                     <ChevronLeft className="w-7 h-7 text-white/80" strokeWidth={1} />
                     <h2 className="text-[26px] font-black text-[#f06100] tracking-wide">Blog</h2>
                     <ChevronRight className="w-7 h-7 text-white/80" strokeWidth={1} />
                 </div>

                 {/* Custom CSS Laptop Mockup Wrapper */}
                 <div className="relative z-10 w-full max-w-[480px] flex flex-col items-center px-1">
                     {/* Outer Screen Bezel */}
                     <div className="w-[92%] sm:w-[94%] bg-[#252528] rounded-t-[16px] sm:rounded-t-[20px] p-[5px] sm:p-[6px] pb-0 relative shadow-[0_-5px_30px_rgba(0,0,0,0.5)] z-20">
                         {/* Inner Screen Bezel with screen bounds */}
                         <div className="w-full bg-[#111] rounded-t-[10px] sm:rounded-t-[14px] p-[2px] pb-0 border border-white/5 border-b-0 relative">
                             {/* The actual Screen Canvas */}
                             <div className="relative w-full aspect-[16/10] bg-[#1a1a1c] rounded-t-[8px] sm:rounded-t-[12px] overflow-hidden">
                                 {/* Blog Content Layout */}
                                 <div className="absolute inset-0 flex flex-col">
                                     {/* Hero Image Area */}
                                     <div className="relative w-full h-[65%]">
                                         <Image 
                                             src={blogs?.[0]?.icon || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800"} 
                                             alt="Blog Hero" 
                                             fill 
                                             className="object-cover opacity-90"
                                         />
                                         {/* Gradient Overlay */}
                                         <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1c] via-transparent to-transparent"></div>
                                     </div>
                                     
                                     {/* Blog Text Area */}
                                     <div className="flex-1 bg-[#1a1a1c] p-4 pt-1 flex flex-col justify-start relative text-left">
                                         {/* Read More Button Overlapping */}
                                         <div className="absolute top-[-18px] right-4 bg-gradient-to-r from-[#ff6b00] to-[#ffa03a] text-white px-4 py-1.5 rounded-full text-[12px] font-black flex items-center gap-1.5 shadow-lg shadow-[#f06100]/30 cursor-pointer hover:scale-105 transition-transform z-20">
                                             Read More <ArrowRight className="w-3.5 h-3.5 stroke-[3px]" />
                                         </div>

                                         <h3 className="text-[15px] sm:text-[17px] font-black text-[#f06100] leading-tight mb-2 tracking-tight">
                                             {blogs?.[0]?.title || "Top 10 Programming Languages to Learn in 2025"}
                                         </h3>
                                         <p className="text-[11px] sm:text-[12px] text-white/70 leading-relaxed line-clamp-2">
                                             {blogs?.[0]?.description || "A detailed guide to the most in-demand programming languages in the coming year, including Python, JavaScript, Go, Rust, and..."}
                                         </p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     
                     {/* Laptop Base Hinge / Lower Lip */}
                     <div className="w-full h-[14px] sm:h-[18px] bg-gradient-to-b from-[#6e6e73] via-[#4c4c52] to-[#2b2b2e] rounded-b-[20px] sm:rounded-b-[24px] relative z-30 flex justify-center -mt-[1px] shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                         {/* Central thumb indent for opening lid */}
                         <div className="w-[18%] h-[35%] bg-gradient-to-b from-[#111] to-[#333] rounded-b-md absolute top-0 shadow-inner"></div>
                     </div>
                     {/* Bottom resting shadow / Table light reflection */}
                     <div className="w-[85%] h-1 sm:h-1.5 bg-black/80 rounded-b-[100%] shadow-[0_8px_20px_black] z-10 -mt-[1px]"></div>
                 </div>

                 {/* Pagination Dots */}
                 <div className="flex justify-center gap-[6px] sm:gap-[8px] mt-10 z-10 relative">
                     <div className="w-[14px] h-[7px] rounded-sm bg-[#f06100] shadow-[0_0_8px_rgba(240,97,0,0.5)] cursor-pointer"></div>
                     <div className="w-[14px] h-[7px] rounded-sm bg-white hover:bg-white/80 cursor-pointer shadow-sm"></div>
                     <div className="w-[14px] h-[7px] rounded-sm bg-white hover:bg-white/80 cursor-pointer shadow-sm"></div>
                     <div className="w-[14px] h-[7px] rounded-sm bg-white hover:bg-white/80 cursor-pointer shadow-sm"></div>
                 </div>
             </section>

             {/* PRODUCTS SECTION (Exclusive for cooporate-6) */}
             <section className="relative w-full pt-16 pb-20 flex flex-col items-center bg-[#111113] overflow-hidden">
                 {/* Top Right Floating JS Chat Bubble */}
                 <div className="absolute top-8 w-full max-w-[500px] z-10 pointer-events-none flex justify-end px-4 sm:px-6">
                     <div className="bg-gradient-to-br from-[#ffa03a] to-[#f06100] text-white text-[15px] font-black tracking-wider px-3.5 py-1.5 shadow-[0_4px_10px_rgba(240,97,0,0.3)] relative rounded-[4px] mr-2">
                         JS
                         <div className="absolute -bottom-1.5 right-3 border-t-[6px] border-t-[#f06100] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></div>
                     </div>
                 </div>

                 {/* Top Left Wifi Logo Icon */}
                 <div className="absolute top-10 left-4 sm:left-8 z-10 pointer-events-none">
                     <div className="w-[46px] h-[46px] bg-gradient-to-br from-[#ff9b44] to-[#f06100] rounded-full flex flex-col items-center justify-center shadow-[0_4px_15px_rgba(240,97,0,0.4)]">
                         <Wifi className="w-[22px] h-[22px] text-white" strokeWidth={2.5} />
                     </div>
                 </div>

                 {/* Title */}
                 <div className="relative z-10 text-center mb-14 mt-4 flex items-center justify-center gap-2 px-6">
                     <ChevronLeft className="w-7 h-7 text-white/80" strokeWidth={1} />
                     <h2 className="text-[26px] font-black text-[#f06100] tracking-wide">Products</h2>
                     <ChevronRight className="w-7 h-7 text-white/80" strokeWidth={1} />
                 </div>

                 {/* Products Horizontal Scroll/Carousel Setup */}
                 <div className="w-full relative z-10 mb-8 max-w-[600px] mx-auto">
                     <div 
                        className="flex overflow-x-auto gap-4 sm:gap-6 px-6 sm:px-8 pb-10 snap-x snap-mandatory hide-scrollbar" 
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                     >
                         <style jsx>{`
                            .hide-scrollbar::-webkit-scrollbar { display: none; }
                         `}</style>
                         
                         {(products?.length > 0 ? products : [
                             { title: "Management Website", price: 250.00, image: "https://plus.unsplash.com/premium_photo-1661292026194-672957b4477c?q=80&w=600" },
                             { title: "Billing & Invoicing Software", price: 1479.99, image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600" },
                             { title: "Inventory Management System", price: 2548.00, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" }
                         ]).map((p: any, idx: number) => (
                             <div key={idx} className="relative bg-[#1a1a1c] border border-white/5 rounded-[12px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex flex-col group min-w-[250px] sm:min-w-[270px] max-w-[250px] sm:max-w-[270px] shrink-0 snap-center transition-all hover:bg-[#1d1d1f]">
                                 {/* Image Section cleanly sliced exactly matching previous design tilts */}
                                 <div className="relative w-full h-[160px] sm:h-[180px] z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 86%, 0 100%)' }}>
                                     <Image 
                                        src={p.image || p.imageUrl || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"} 
                                        alt={p.name || p.title} 
                                        fill 
                                        className="object-cover opacity-90 transition-transform group-hover:scale-110 duration-500" 
                                        unoptimized 
                                     />
                                     <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1a1a1c] to-transparent pointer-events-none opacity-80" />
                                 </div>

                                 {/* Bottom Details Section */}
                                 <div className="px-4 py-6 flex flex-col items-center justify-center text-center relative z-20 pb-8 mt-[-8px]">
                                     <h3 className="text-[15px] sm:text-[16px] font-black text-white mb-2.5 leading-snug px-1">
                                         {p.name || p.title}
                                     </h3>
                                     <span className="text-[17px] sm:text-[19px] font-black text-[#f06100]">
                                         ${Number(p.price || 0).toLocaleString('en-US', {minimumFractionDigits: 2})}
                                     </span>
                                 </div>

                                 {/* DECORATIVE HOVER CORNER BRACKETS */}
                                 <div className="absolute top-[-1px] right-[-1px] w-5 h-5 sm:w-6 sm:h-6 border-t-[1.5px] border-r-[1.5px] border-[#f06100] rounded-tr-[12px] z-30 transition-all opacity-90 group-hover:scale-105 origin-top-right"></div>
                                 <div className="absolute bottom-[-1px] left-[-1px] w-5 h-5 sm:w-6 sm:h-6 border-b-[1.5px] border-l-[1.5px] border-[#f06100] rounded-bl-[12px] z-30 transition-all opacity-90 group-hover:scale-105 origin-bottom-left"></div>
                             </div>
                         ))}
                     </div>
                 </div>

                 {/* View More Products Button */}
                 <div className="mt-2 relative z-20">
                    <a href={websiteUrl || "#"} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-[6px] bg-gradient-to-r from-[#ff6b00] to-[#ffa03a] text-white text-[14px] font-black tracking-wide px-8 py-3.5 rounded-full shadow-[0_5px_15px_rgba(240,97,0,0.4)] transition-all hover:scale-[1.03] cursor-pointer">
                        <span className="underline underline-offset-[4px] decoration-2 decoration-white/90">View More Products</span>
                        <ArrowRight className="w-[18px] h-[18px] stroke-[2.5px]" />
                    </a>
                 </div>
             </section>

             {/* TESTIMONIALS SECTION (Exclusive for cooporate-6) */}
             <section className="relative w-full pt-16 pb-20 px-6 sm:px-8 flex flex-col items-center border-[0.5px] border-t-white/10 overflow-hidden bg-[#0a0a0c]">
                 {/* Background Ambient Image */}
                 <div className="absolute inset-0 z-0">
                     <Image src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1200" fill className="object-cover opacity-[0.12] mix-blend-screen" alt="code bg" unoptimized />
                     <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-[#111113]/90 to-[#111113]"></div>
                 </div>

                 {/* Top Left Floating CSS Chat Bubble */}
                 <div className="absolute top-12 w-full max-w-[500px] z-10 pointer-events-none flex justify-start px-2 sm:px-4">
                     <div className="bg-gradient-to-br from-[#ffa03a] to-[#f06100] text-white text-[15px] font-black tracking-wider px-3.5 py-1.5 shadow-[0_4px_10px_rgba(240,97,0,0.3)] relative rounded-[4px] ml-2">
                         CSS
                         <div className="absolute -bottom-1.5 left-3 border-t-[6px] border-t-[#f06100] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></div>
                     </div>
                 </div>

                 {/* Top Right CSS IDE Window Icon */}
                 <div className="absolute top-10 right-4 sm:right-8 z-10 pointer-events-none flex opacity-90 scale-[1.1] sm:scale-[1.2]">
                     <div className="w-[52px] h-[44px] bg-[#1a1a1c]/80 backdrop-blur rounded-[6px] border border-white/10 p-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.6)]">
                         {/* Window buttons */}
                         <div className="flex gap-[3.5px] mb-[6px] px-[2px]">
                            <div className="w-[4.5px] h-[4.5px] bg-[#ff5f56] rounded-full"></div>
                            <div className="w-[4.5px] h-[4.5px] bg-[#ffbd2e] rounded-full"></div>
                            <div className="w-[4.5px] h-[4.5px] bg-[#27c93f] rounded-full"></div>
                         </div>
                         {/* Code lines */}
                         <div className="space-y-[3px] px-[2px]">
                            <div className="w-[65%] h-[2.5px] bg-[#f06100]/90 rounded-full"></div>
                            <div className="w-[45%] h-[2.5px] bg-white/40 rounded-full ml-[6px]"></div>
                            <div className="w-[85%] h-[2.5px] bg-white/30 rounded-full"></div>
                            <div className="w-[55%] h-[2.5px] bg-[#f06100]/70 rounded-full ml-[10px]"></div>
                         </div>
                     </div>
                 </div>

                 {/* Title */}
                 <div className="relative z-10 text-center mb-16 mt-6 flex items-center justify-center gap-2">
                     <ChevronLeft className="w-7 h-7 text-white/80" strokeWidth={1} />
                     <h2 className="text-[26px] font-black text-[#f06100] tracking-wide">Testimonials</h2>
                     <ChevronRight className="w-7 h-7 text-white/80" strokeWidth={1} />
                 </div>

                 {/* Testimonial Card */}
                 <div className="relative z-10 w-full max-w-[500px] min-h-[170px] sm:min-h-[190px] bg-[#1a1a1c] border-[1.5px] border-white/10 rounded-2xl sm:rounded-3xl overflow-visible shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex mt-2">
                     
                     {/* Left Image Side precisely sliced */}
                     <div className="absolute inset-y-0 left-0 w-[35%] bg-[#111] z-10 overflow-hidden rounded-l-[14px] sm:rounded-l-[22px]" style={{ clipPath: 'polygon(0 0, 78% 0, 100% 100%, 0 100%)' }}>
                         <Image 
                            src={testimonials?.[0]?.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"} 
                            alt="Testimonial Profile" 
                            fill 
                            className="object-cover" 
                            unoptimized 
                         />
                     </div>
                     
                     {/* The slanted gray separator line sitting right on the diagonal edge */}
                     <div className="absolute inset-y-0 left-0 w-[35%] z-20 pointer-events-none">
                        <div className="absolute top-[-10%] bottom-[-10%] right-[-1px] w-[2px] bg-white/10 transform -skew-x-[12deg] origin-bottom-right drop-shadow-lg"></div>
                     </div>

                     {/* Right Text Side */}
                     <div className="pl-[38%] pr-5 sm:pr-8 py-6 sm:py-8 flex flex-col justify-center w-full min-h-full">
                         <div className="relative z-10 text-center sm:text-left flex flex-col items-center sm:items-center w-full pl-2">
                             <h3 className="text-[17px] sm:text-[19px] font-black text-[#f06100] mb-2 sm:mb-3">
                                 {testimonials?.[0]?.name || "Michael Thompson"}
                             </h3>
                             <p className="text-[12px] sm:text-[13px] font-medium text-white/90 leading-[1.65] text-center px-1">
                                 {(testimonials?.[0] as any)?.review || (testimonials?.[0] as any)?.quote || "Working with Chris Morries was a game-changer for our business. The custom software he built has streamlined our operations and saved us countless hours every week."}
                             </p>
                         </div>
                     </div>

                     {/* OVERLAPPING QUOTE BADGES */}
                     {/* Top Left Quote Badge */}
                     <div className="absolute -top-[22px] left-[26%] sm:left-[28%] w-[44px] h-[44px] bg-[#1a1a1c] border-[1.5px] border-white/10 rounded-full flex items-center justify-center shadow-lg z-30">
                         <span className="font-serif text-[38px] text-[#f06100] leading-none mb-[-20px] ml-[2px]">“</span>
                     </div>
                     
                     {/* Bottom Right Quote Badge */}
                     <div className="absolute -bottom-[22px] right-4 sm:right-8 w-[44px] h-[44px] bg-[#1a1a1c] border-[1.5px] border-white/10 rounded-full flex items-center justify-center shadow-lg z-30">
                         <span className="font-serif text-[38px] text-[#f06100] leading-none mb-[-20px] ml-[2px]">”</span>
                     </div>
                 </div>

                 {/* Pagination Dots */}
                 <div className="flex justify-center gap-[6px] sm:gap-[8px] mt-[48px] z-10 relative">
                     <div className="w-[14px] h-[7px] rounded-sm bg-[#f06100] shadow-[0_0_8px_rgba(240,97,0,0.5)] cursor-pointer"></div>
                     <div className="w-[14px] h-[7px] rounded-sm bg-white hover:bg-white/80 cursor-pointer shadow-sm"></div>
                     <div className="w-[14px] h-[7px] rounded-sm bg-white hover:bg-white/80 cursor-pointer shadow-sm"></div>
                     <div className="w-[14px] h-[7px] rounded-sm bg-white hover:bg-white/80 cursor-pointer shadow-sm"></div>
                     <div className="w-[14px] h-[7px] rounded-sm bg-white hover:bg-white/80 cursor-pointer shadow-sm"></div>
                 </div>
             </section>

             {/* BUSINESS HOURS SECTION (Exclusive for cooporate-6) */}
             <section className="relative w-full pt-16 pb-20 px-6 sm:px-8 flex flex-col items-center overflow-hidden bg-[#0a0a0c]">
                 {/* Background Image with Overlay */}
                 <div className="absolute inset-0 z-0">
                     <Image 
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200" 
                        fill 
                        className="object-cover opacity-[0.12] mix-blend-screen" 
                        alt="workstation bg" 
                        unoptimized 
                     />
                     <div className="absolute inset-0 bg-gradient-to-b from-[#111113] via-[#111113]/95 to-[#111113]"></div>
                 </div>

                 {/* Top Left Floating API Icon */}
                 <div className="absolute top-10 w-full max-w-[500px] z-10 pointer-events-none flex justify-start px-2 sm:px-4">
                    <div className="flex items-center gap-2.5 scale-[0.85] sm:scale-100 origin-left">
                        <ArrowLeft className="w-5 h-5 text-[#f06100]" strokeWidth={3} />
                        <div className="w-[52px] h-[38px] bg-[#1a1a1c] border border-white/10 rounded-md p-1.5 shadow-xl relative flex flex-col">
                            <div className="flex gap-[3.5px] mb-[4px]">
                                <div className="w-[3.5px] h-[3.5px] bg-white/20 rounded-full"></div>
                                <div className="w-[3.5px] h-[3.5px] bg-white/20 rounded-full"></div>
                                <div className="w-[3.5px] h-[3.5px] bg-white/20 rounded-full"></div>
                            </div>
                            <span className="text-[10px] font-black text-[#f06100] text-center tracking-tighter mt-auto">API</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-[#f06100]" strokeWidth={3} />
                    </div>
                 </div>

                 {/* Top Right Floating SQL Chat Bubble */}
                 <div className="absolute top-10 w-full max-w-[500px] z-10 pointer-events-none flex justify-end px-2 sm:px-4">
                     <div className="bg-gradient-to-br from-[#ffa03a] to-[#f06100] text-white text-[15px] font-black tracking-wider px-3.5 py-1.5 shadow-[0_4px_10px_rgba(240,97,0,0.3)] relative rounded-[4px] mr-2">
                         SQL
                         <div className="absolute -bottom-1.5 right-4 border-t-[6px] border-t-[#f06100] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></div>
                     </div>
                 </div>

                 {/* Title */}
                 <div className="relative z-10 text-center mb-16 mt-6 flex items-center justify-center gap-2">
                     <ChevronLeft className="w-7 h-7 text-white/80" strokeWidth={1} />
                     <h2 className="text-[26px] font-black text-[#f06100] tracking-wide">Business Hours</h2>
                     <ChevronRight className="w-7 h-7 text-white/80" strokeWidth={1} />
                 </div>

                 {/* Hours Grid */}
                 <div className="relative z-10 w-full max-w-[520px] grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 px-2">
                     {((card as any).businessHours && Array.isArray((card as any).businessHours) && (card as any).businessHours.length > 0 ? (card as any).businessHours : [
                         { day: 'Monday', time: '10:00 - 18:00' },
                         { day: 'Tuesday', time: '10:00 - 18:00' },
                         { day: 'Wednesday', time: '10:00 - 18:00' },
                         { day: 'Thursday', time: '10:00 - 18:00' },
                         { day: 'Friday', time: '10:00 - 18:00' },
                         { day: 'Saturday', time: 'Closed' },
                         { day: 'Sunday', time: 'Closed' },
                     ]).map((item: any, idx: number) => {
                         const isSunday = item.day?.toLowerCase() === 'sunday' || idx === 6;
                         const isClosed = (item.time || item.value)?.toLowerCase().includes('closed');
                         
                         return (
                             <div key={idx} className={`relative h-[62px] bg-[#1a1a1c]/80 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden shadow-2xl flex items-center group transition-all hover:bg-[#202022] ${isSunday ? 'sm:col-span-2 sm:w-[54%] sm:mx-auto' : ''}`}>
                                 {/* Icon Section with slanted clip */}
                                 <div className="absolute inset-y-0 left-0 w-[24%] bg-[#0a0a0c] z-10 flex items-center justify-center" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)' }}>
                                     <div className="relative">
                                         <Calendar className="w-[20px] h-[20px] text-[#f06100]" strokeWidth={2.5} />
                                         <div className="absolute -bottom-1 -right-1.5 w-4 h-4 bg-[#0a0a0c] rounded-full flex items-center justify-center">
                                             <Clock className="w-3 h-3 text-[#f06100]" strokeWidth={3} />
                                         </div>
                                     </div>
                                 </div>
                                 {/* Separator Line */}
                                 <div className="absolute inset-y-0 left-0 w-[24%] z-0 pointer-events-none">
                                    <div className="absolute top-0 bottom-0 right-[2px] w-[1.5px] bg-white/10 transform -skew-x-[14deg] origin-bottom-right"></div>
                                 </div>

                                 {/* Text Section */}
                                 <div className="pl-[28%] pr-4 w-full flex flex-col justify-center">
                                     <span className="text-[13px] font-black text-white/95 mb-0.5 tracking-tight uppercase">{item.day}</span>
                                     <span className="text-[15px] font-black tracking-wide text-[#f06100]">
                                         {item.time || item.value || (isClosed ? "Closed" : "10:00 - 18:00")}
                                     </span>
                                 </div>
                             </div>
                         );
                     })}
                 </div>
             </section>

             {/* MAKE AN APPOINTMENT SECTION (Exclusive for cooporate-6) */}
             <section className="relative w-full pt-16 pb-20 px-6 sm:px-8 flex flex-col items-center overflow-hidden bg-[#0f0f11] border-t-[0.5px] border-white/5">
                 {/* Top Left Floating SHELL Chat Bubble */}
                 <div className="absolute top-10 w-full max-w-[500px] z-10 pointer-events-none flex justify-start px-2 sm:px-4">
                     <div className="bg-gradient-to-br from-[#ffa03a] to-[#f06100] text-white text-[15px] font-black tracking-wider px-3.5 py-1.5 shadow-[0_4px_10px_rgba(240,97,0,0.3)] relative rounded-[4px] ml-1 sm:ml-2">
                         SHELL
                         <div className="absolute -bottom-1.5 left-4 border-t-[6px] border-t-[#f06100] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></div>
                     </div>
                 </div>

                 {/* Top Right Floating CPU/Circuit Icon */}
                 <div className="absolute top-10 right-6 sm:right-10 z-0 opacity-80 pointer-events-none scale-110">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 3V5M15 3V5M9 19V21M15 19V21M3 9H5M3 15H5M19 9H21M19 15H21" stroke="#f06100" strokeWidth="1.2" strokeLinecap="round"/>
                        <rect x="7" y="7" width="10" height="10" rx="2" stroke="#f06100" strokeWidth="1.2"/>
                        <circle cx="12" cy="12" r="2.5" fill="#f06100" fillOpacity="0.4"/>
                        <circle cx="12" cy="12" r="1.2" fill="#f06100"/>
                        {/* More lines for circuit feel */}
                        <path d="M12 7V9M12 15V17M7 12H9M15 12H17" stroke="#f06100" strokeWidth="0.8" strokeLinecap="round"/>
                    </svg>
                 </div>

                 {/* Title */}
                 <div className="relative z-10 text-center mb-16 mt-6 flex items-center justify-center gap-2 px-6">
                     <ChevronLeft className="w-7 h-7 text-white/80" strokeWidth={1} />
                     <h2 className="text-[26px] font-black text-[#f06100] tracking-wide">Make an Appointment</h2>
                     <ChevronRight className="w-7 h-7 text-white/80" strokeWidth={1} />
                 </div>

                 {/* Appointment Input Area */}
                 <div className="relative z-10 w-full max-w-[500px]">
                     {/* Decorative bottom-left corner accent mimicking design */}
                     <div className="absolute -bottom-1 -left-1 w-12 h-12 border-b-[2px] border-l-[2px] border-[#f06100] rounded-bl-[16px] z-0 opacity-80"></div>
                     {/* Decorative top-right corner accent mimicking design */}
                     <div className="absolute -top-1 -right-1 w-12 h-12 border-t-[2px] border-r-[2px] border-[#f06100] rounded-tr-[16px] z-0 opacity-30"></div>

                     {/* Main Container */}
                     <div className="relative z-10 w-full bg-[#1a1a1c] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center shadow-2xl">
                         <div className="w-full relative h-[56px] bg-[#111] border border-white/5 rounded-xl px-5 flex items-center justify-between group cursor-pointer hover:border-[#f06100]/30 transition-all">
                             <span className="text-white font-bold text-[15px] tracking-wide">Pick a Date</span>
                             <Calendar className="w-6 h-6 text-white/60 group-hover:text-[#f06100] transition-colors" strokeWidth={1.5} />
                         </div>
                     </div>
                 </div>
             </section>

             {/* INQUIRIES SECTION (Exclusive for cooporate-6) */}
             <section className="relative w-full pt-16 pb-20 px-6 sm:px-8 flex flex-col items-center overflow-hidden bg-[#111113] border-t-[0.5px] border-white/5">
                 {/* Top Left Floating SWIFT Chat Bubble */}
                 <div className="absolute top-10 w-full max-w-[500px] z-10 pointer-events-none flex justify-start px-2 sm:px-4">
                     <div className="bg-gradient-to-br from-[#ffa03a] to-[#f06100] text-white text-[15px] font-black tracking-wider px-3.5 py-1.5 shadow-[0_4px_10px_rgba(240,97,0,0.3)] relative rounded-[4px] ml-1 sm:ml-2">
                         SWIFT
                         <div className="absolute -bottom-1.5 left-4 border-t-[6px] border-t-[#f06100] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></div>
                     </div>
                 </div>

                 {/* Top Right Floating Code/Analytics Icon */}
                 <div className="absolute top-10 right-6 sm:right-10 z-0 opacity-80 pointer-events-none">
                     <div className="relative w-[60px] h-[50px] flex items-center justify-center">
                         {/* Window with code lines */}
                         <div className="absolute top-0 right-0 w-[42px] h-[32px] bg-[#1a1a1c] border border-white/10 rounded-md p-1.5 flex flex-col gap-1 shadow-lg">
                             <div className="w-[80%] h-0.5 bg-[#f06100]/60 rounded-full"></div>
                             <div className="w-[50%] h-0.5 bg-[#f06100]/40 rounded-full"></div>
                             <div className="w-[90%] h-0.5 bg-[#f06100]/50 rounded-full"></div>
                         </div>
                         {/* Magnifying glass overlay */}
                         <div className="absolute bottom-1 left-2 w-[24px] h-[24px] border-[2.5px] border-[#f06100] rounded-full relative bg-[#111113]">
                             <div className="absolute -bottom-1.5 -right-1.5 w-[8px] h-[2.5px] bg-[#f06100] rotate-45 transform origin-top-left"></div>
                         </div>
                         {/* Chart icon */}
                         <div className="absolute bottom-2 right-2 flex items-end gap-[1px] h-3">
                             <div className="w-1 h-[40%] bg-[#f06100]"></div>
                             <div className="w-1 h-[70%] bg-[#f06100]"></div>
                             <div className="w-1 h-[100%] bg-[#f06100]"></div>
                         </div>
                     </div>
                 </div>

                 {/* Title */}
                 <div className="relative z-10 text-center mb-16 mt-6 flex items-center justify-center gap-2 px-6">
                     <ChevronLeft className="w-7 h-7 text-white/80" strokeWidth={1} />
                     <h2 className="text-[26px] font-black text-[#f06100] tracking-wide">Inquiries</h2>
                     <ChevronRight className="w-7 h-7 text-white/80" strokeWidth={1} />
                 </div>

                 {/* Main Inquiries Card */}
                 <div className="relative z-10 w-full max-w-[500px]">
                     {/* Decorative corner accents mirroring Appointment section */}
                     <div className="absolute -top-1.5 -right-1.5 w-16 h-16 border-t-[2.5px] border-r-[2.5px] border-[#f06100] rounded-tr-[24px] z-0 opacity-80"></div>
                     <div className="absolute -bottom-1.5 -left-1.5 w-16 h-16 border-b-[2.5px] border-l-[2.5px] border-[#f06100] rounded-bl-[24px] z-0 opacity-80"></div>

                     {/* The Dark Form Box */}
                     <div className="relative z-10 w-full bg-[#1a1a1c] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-2xl">
                         <div className="flex flex-col gap-4">
                             <input type="text" placeholder="Your Name" className="w-full h-14 bg-[#111] border border-white/5 rounded-xl px-5 text-white font-medium focus:border-[#f06100]/40 outline-none transition-all" />
                             <input type="tel" placeholder="Enter Phone Number" className="w-full h-14 bg-[#111] border border-white/5 rounded-xl px-5 text-white font-medium focus:border-[#f06100]/40 outline-none transition-all" />
                             <input type="email" placeholder="Email Address" className="w-full h-14 bg-[#111] border border-white/5 rounded-xl px-5 text-white font-medium focus:border-[#f06100]/40 outline-none transition-all" />
                             <textarea 
                                placeholder="Type a message here..." 
                                className="w-full h-32 bg-[#111] border border-white/5 rounded-xl px-5 py-4 text-white font-medium focus:border-[#f06100]/40 outline-none transition-all resize-none"
                             ></textarea>
                             
                             {/* File Upload Area */}
                             <div className="relative w-full h-14 bg-[#111] border border-white/5 border-dashed rounded-xl px-5 flex items-center justify-center gap-2 cursor-pointer group hover:bg-[#151517] transition-all">
                                 <svg className="w-5 h-5 text-white/60 group-hover:text-[#f06100] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
                                 </svg>
                                 <span className="text-white/80 font-bold tracking-wide">Choose File to upload</span>
                             </div>
                             <p className="text-[11px] text-white/30 font-bold uppercase tracking-wider -mt-1 ml-1">Files Supported: JPG, PNG, JPEG</p>
                         </div>

                         {/* Submit Button */}
                         <div className="mt-4 flex justify-center">
                             <button className="bg-gradient-to-r from-[#ff6b00] to-[#ffa03a] text-white px-10 py-4 rounded-xl font-black text-[16px] tracking-wide shadow-lg shadow-[#f06100]/30 hover:scale-105 active:scale-95 transition-all">
                                 Send Message
                             </button>
                         </div>
                     </div>
                 </div>
             </section>
          </>
        ) : (
             <section className="relative bg-gradient-to-br from-[#e1def4] to-[#d6f0f5] px-6 pt-0 pb-12 z-20 flex flex-col items-center">
            {/* Top row: Profile & Name */}
            <div className="flex w-full items-center gap-4 -mt-16 mb-8 px-2 max-w-[460px]">
                {/* Profile Image with outline */}
                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full border-[6px] border-white overflow-hidden shadow-md bg-white shrink-0">
                    {card.image ? (
                        <Image src={card.image} alt={name} fill className="object-cover" unoptimized={card.image.startsWith("data:")} />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-100">
                            <span className="text-4xl font-bold text-slate-400">{name.charAt(0).toUpperCase()}</span>
                        </div>
                    )}
                </div>
                
                {/* Name and Role */}
                <div className="flex flex-col justify-center pt-16 flex-1 text-left">
                    {(() => {
                        const isOriginalName = name.startsWith("I'm");
                        const parts = name.split(' ');
                        const safeName = isOriginalName ? name : `I'm ${parts[0]} ${parts.slice(1).join(' ')}`;
                        return (
                            <>
                                <h1 className="text-[22px] md:text-[25px] font-black text-[#372b61] leading-tight tracking-tight">
                                    {safeName}
                                </h1>
                                <p className="text-[14px] md:text-[15px] font-bold text-[#8174aa] pt-1">
                                    a {role.replace(/^A\s|^a\s/i, '')}
                                </p>
                            </>
                        );
                    })()}
                </div>
            </div>

            {/* Social Icons row (Target Style: circular brand icons) */}
            <div className="mt-8 flex flex-col items-center w-full max-w-[460px] pb-6">
                <VCardSocialLinks 
                    card={card} 
                    layout="vertical" 
                    variant="circular" 
                    iconSize={20}
                    itemClassName="bg-white border border-slate-100 rounded-2xl p-4 w-full hover:bg-slate-50 transition-all shadow-sm"
                />
            </div>

            {/* CONTACT CARDS GRID (Target Style: 2x2 white cards) */}
            {(email || phone || address || card.birthDate) && (
                <div className="w-full max-w-[460px] grid grid-cols-2 gap-4 pb-6">
                    {email && (
                        <div className="bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-3 shadow-sm border border-transparent hover:border-slate-100 transition-colors">
                            <Mail className="w-8 h-8 text-[#867ba9]" strokeWidth={2} />
                            <p className="text-[14px] sm:text-[15px] font-bold text-[#372b61] break-all w-full">{email}</p>
                        </div>
                    )}
                    {card.birthDate && (
                        <div className="bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-3 shadow-sm border border-transparent hover:border-slate-100 transition-colors">
                            <Cake className="w-8 h-8 text-[#867ba9]" strokeWidth={2} />
                            <p className="text-[14px] sm:text-[15px] font-bold text-[#372b61] w-full">{card.birthDate}</p>
                        </div>
                    )}
                    {phone && (
                        <div className="bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-3 shadow-sm border border-transparent hover:border-slate-100 transition-colors">
                            <Phone className="w-8 h-8 text-[#867ba9]" strokeWidth={2} />
                            <p className="text-[14px] sm:text-[15px] font-bold text-[#372b61] w-full">{phone}</p>
                        </div>
                    )}
                    {address && (
                        <div className="bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-3 shadow-sm border border-transparent hover:border-slate-100 transition-colors">
                            <MapPin className="w-8 h-8 text-[#867ba9]" strokeWidth={2} />
                            <p className="text-[14px] sm:text-[15px] font-bold text-[#372b61] leading-snug w-full line-clamp-2">{address}</p>
                        </div>
                    )}
                </div>
            )}
         </section>
        )}

        {slug !== "cooporate-6" && (
          <>
            {/* OUR SERVICES SECTION (Requested Design) */}
            <section className="px-6 pb-16 bg-gradient-to-b from-[#d6f0f5] to-[#c2eaef] relative z-10 flex flex-col items-center">
                <p className="text-[12px] font-black text-[#372b61] uppercase tracking-[0.12em] mb-2 text-center">
                  {card.serviceTitleSmall || "Our Services"}
                </p>
                <h2 className="text-[28px] font-black text-[#372b61] mb-8 tracking-tight">
                  {card.serviceTitle || "Explore Our Services"}
                </h2>

                <div
                  className={`w-full max-w-[460px] ${
                    card.displayImagesWithSlider
                      ? "flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4"
                      : "grid grid-cols-2 gap-4"
                  }`}
                >
                    {services.map((s: any, idx: number) => (
                        <div
                          key={idx}
                          className={`border border-[#b4bbd4] rounded-3xl p-3.5 flex flex-col gap-3 bg-white/20 backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.02)] transition-all hover:bg-white/40 hover:-translate-y-1 ${
                            card.displayImagesWithSlider ? "min-w-[220px] snap-start flex-shrink-0" : ""
                          }`}
                        >
                            <div className="w-full aspect-square rounded-2xl overflow-hidden relative border border-white/50 shadow-sm bg-white/50">
                                {s.icon ? (
                                    <Image src={s.icon} alt={s.name || s.title} fill className="object-cover" />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center text-[#51437c] gap-2">
                                        <Target className="w-8 h-8 opacity-50" />
                                    </div>
                                )}
                            </div>
                            <div className="px-1 pb-1">
                                <h3 className="text-[14px] sm:text-[15px] font-black text-[#4b3f7a] mb-1.5 leading-tight">
                                    {s.name || s.title}
                                </h3>
                                <p className="text-[11px] sm:text-[12px] font-medium text-[#686d8a] leading-relaxed line-clamp-6">
                                    {s.description || s.details}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {card.displayServiceEnquiryButton && (
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="mt-10 inline-flex items-center justify-center rounded-lg bg-white/10 border border-white/20 px-6 py-3.5 text-white text-[13px] font-bold tracking-wide hover:bg-white/20 transition-colors shadow-sm"
                  >
                    Service Enquiry
                  </button>
                )}
            </section>

            {/* PRODUCTS SECTION (Show added products after services) */}
            <section className="px-6 pb-14 bg-gradient-to-b from-[#c2eaef] to-[#bfe7ec] relative z-10 flex flex-col items-center">
                <h2 className="text-[28px] font-black text-[#372b61] mb-8 tracking-tight">Products</h2>

                <div className="w-full max-w-[420px] relative">
                    <div className="border border-[#b4bbd4] rounded-3xl p-2.5 flex flex-col gap-2.5 bg-white/20 backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.02)] transition-all">
                        <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden relative border border-white/50 shadow-sm bg-white/50">
                            {activeProduct?.icon ? (
                                <Image src={activeProduct.icon} alt={activeProduct.name || "Product"} fill className="object-cover" />
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center text-[#51437c] gap-2">
                                    <Presentation className="w-8 h-8 opacity-50" />
                                </div>
                            )}
                        </div>
                        <div className="px-1 pb-1">
                            <h3 className="text-[14px] sm:text-[16px] font-black text-[#4b3f7a] mb-1 leading-tight">
                                {activeProduct?.name || "Product"}
                            </h3>
                            <p className="text-[11px] sm:text-[12px] font-medium text-[#686d8a] leading-relaxed line-clamp-3">
                                {activeProduct?.description || "Product description"}
                            </p>
                            {(activeProduct?.price || activeProduct?.currency) && (
                                <p className="mt-1.5 text-[14px] font-black text-[#372b61]">
                                    {activeProduct?.currency || "INR"} {activeProduct?.price || ""}
                                </p>
                            )}
                        </div>
                    </div>

                    {products.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() => setActiveProductIndex((prev) => (prev - 1 + products.length) % products.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-[#4b3f7a] shadow-md hover:bg-white"
                          aria-label="Previous product"
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveProductIndex((prev) => (prev + 1) % products.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-[#4b3f7a] shadow-md hover:bg-white"
                          aria-label="Next product"
                        >
                          ›
                        </button>
                      </>
                    )}
                </div>

                {products.length > 1 && (
                  <div className="flex justify-center gap-2.5 mt-6 mb-2">
                    {products.map((_, idx) => (
                      <button
                        key={`product-dot-${idx}`}
                        type="button"
                        onClick={() => setActiveProductIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          idx === activeProductIndex ? "bg-[#8271aa]" : "bg-[#d6d8eb] hover:bg-[#bfc4df]"
                        }`}
                        aria-label={`Show product ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
            </section>

            {/* EMBED TAGS SECTION (Show added embed tags after products) */}
            {addedInstagramEmbeds.length > 0 && (
              <section className="px-6 pb-14 bg-gradient-to-b from-[#bfe7ec] to-[#c2eaef] relative z-10 flex flex-col items-center">
                <h2 className="text-[28px] font-black text-[#372b61] mb-8 tracking-tight">Insta Embedded Posts</h2>
                <div className="w-full max-w-[460px] space-y-4">
                  {addedInstagramEmbeds.map((embed) => (
                    <div
                      key={embed.id}
                      className="rounded-2xl border border-[#d5dcec] bg-white p-4 shadow-sm"
                    >
                      <p className="mb-3 text-[12px] font-bold uppercase tracking-wide text-[#6f78a0]">
                        {embed.type}
                      </p>
                      <iframe
                        src={embed.embedUrl!}
                        title={`${embed.type} embed`}
                        className="w-full min-h-[520px] rounded-xl border border-gray-200"
                        loading="lazy"
                        allow="encrypted-media"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* LINKEDIN EMBED TAGS SECTION (Show after InstaEmbed) */}
            {addedLinkedInEmbeds.length > 0 && (
              <section className="px-6 pb-14 bg-gradient-to-b from-[#bfe7ec] to-[#c2eaef] relative z-10 flex flex-col items-center">
                <h2 className="text-[28px] font-black text-[#372b61] mb-8 tracking-tight">LinkedIn Embedded Posts</h2>
                <div className="w-full max-w-[460px] space-y-4">
                  {addedLinkedInEmbeds.map((embed) => (
                    <div
                      key={embed.id}
                      className="rounded-2xl border border-[#d5dcec] bg-white p-4 shadow-sm"
                    >
                      <p className="mb-3 text-[12px] font-bold uppercase tracking-wide text-[#6f78a0]">
                        {embed.type}
                      </p>
                      <iframe
                        src={embed.embedUrl!}
                        title={`${embed.type} linkedin embed`}
                        className="w-full min-h-[520px] rounded-xl border border-gray-200"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* BLOG SECTION (Show added blogs just below products) */}
            {addedBlogs.length > 0 && (
              <section className="px-6 pb-14 bg-gradient-to-b from-[#bfe7ec] to-[#c2eaef] relative z-10 flex flex-col items-center">
                <h2 className="text-[28px] font-black text-[#372b61] mb-8 tracking-tight">Blogs</h2>

                <div className="w-full max-w-[460px] grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {addedBlogs.map((blog) => (
                    <article
                      key={blog.id}
                      className="border border-[#b4bbd4] rounded-3xl p-2.5 flex flex-col gap-2.5 bg-white/20 backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.02)]"
                    >
                      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/50 shadow-sm bg-white/50">
                        {blog.icon ? (
                          <Image src={blog.icon} alt={blog.title || "Blog"} fill className="object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#51437c]">
                            <Presentation className="w-8 h-8 opacity-50" />
                          </div>
                        )}
                      </div>
                      <div className="px-1 pb-1">
                        <h3 className="text-[14px] sm:text-[15px] font-black text-[#4b3f7a] mb-1 leading-tight line-clamp-2">
                          {blog.title || "Blog"}
                        </h3>
                        <p className="text-[11px] sm:text-[12px] font-medium text-[#686d8a] leading-relaxed line-clamp-4">
                          {blog.description || ""}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* TESTIMONIALS SECTION (Requested Design) */}
            <section className="px-6 py-10 bg-gradient-to-b from-[#c2eaef] to-[#edf3f7] relative z-10 flex flex-col items-center">
                <h2 className="text-[28px] font-black text-[#372b61] mb-8 tracking-tight">Testimonial</h2>
                
                <div className="w-full max-w-[460px] relative mt-2">
                    <div className="bg-white rounded-[24px] p-6 sm:p-8 shadow-sm relative z-20">
                        <p className="text-[13px] sm:text-[14px] leading-relaxed font-bold text-[#867ba9] mb-8">
                            &ldquo;{activeTestimonial?.quote || "Designing systems useful for the user is the most interesting element in the entire field of design, which makes it goosebumps with each completed project."}&rdquo;
                        </p>
                        
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-100 bg-slate-50">
                                <Image 
                                    src={activeTestimonial?.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"} 
                                    alt={activeTestimonial?.name || "Scarlett Aria"} 
                                    width={48} 
                                    height={48} 
                                    className="object-cover w-full h-full" 
                                />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-[15px] font-black text-[#372b61] tracking-tight mb-0.5">{activeTestimonial?.name || "Scarlett Aria"}</h4>
                                <p className="text-[12px] font-medium text-[#aba6c9]">{activeTestimonial?.role || "CEO General Electric"}</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements mimicking the screenshot layout */}
                    <div className="absolute right-0 bottom-0 pointer-events-none w-full h-full z-30">
                        {/* WhatsApp Button */}
                        <button
                            type="button"
                            onClick={() => setActiveTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                            className="absolute right-14 sm:right-16 bottom-[82px] sm:bottom-[86px] w-[42px] h-[42px] bg-white rounded-full border-[1.5px] border-[#eff5fc] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.06)] pointer-events-auto hover:-translate-y-1 transition-transform"
                            aria-label="Previous testimonial"
                        >
                            <MessageCircle className="w-5 h-5 text-[#8dbce7]" strokeWidth={2.5} />
                        </button>
                        {/* Share Button */}
                        <button
                            type="button"
                            onClick={() => setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                            className="absolute right-16 -bottom-5 w-[42px] h-[42px] bg-white rounded-full border-[1.5px] border-[#eff5fc] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.06)] pointer-events-auto hover:-translate-y-1 transition-transform"
                            aria-label="Next testimonial"
                        >
                            <Share2 className="w-5 h-5 text-[#8dbce7]" strokeWidth={2.5} />
                        </button>
                        {/* Main Grid Button */}
                        <div className="absolute right-1 lg:-right-4 bottom-5 w-14 h-14 bg-gradient-to-br from-[#9ac7f4] to-[#8dbce7] rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 pointer-events-auto hover:scale-105 transition-transform cursor-pointer">
                            <LayoutGrid className="w-[22px] h-[22px] text-white" strokeWidth={2.5} />
                        </div>
                        {/* Stars */}
                        <div className="absolute right-20 bottom-[44px] flex gap-0.5 text-[#fbdd70] text-[15px]">
                            <span>★</span><span>★</span><span>★</span>
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2.5 mt-16 mb-6">
                    {(addedTestimonials.length > 0 ? addedTestimonials : [DEFAULT_TESTIMONIALS[0]]).map((_, idx) => (
                      <button
                        key={`testimonial-dot-${idx}`}
                        type="button"
                        onClick={() => setActiveTestimonialIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          idx === activeTestimonialIndex ? "bg-[#8271aa]" : "bg-[#d6d8eb] hover:bg-[#bfc4df]"
                        }`}
                        aria-label={`Show testimonial ${idx + 1}`}
                      />
                    ))}
                </div>
            </section>

            {/* QR CODE SECTION (Requested Design) */}
            <section className="px-6 py-16 bg-white relative z-10 flex flex-col items-center">
                <h2 className="text-[28px] font-black text-[#372b61] mb-12 tracking-tight">QR Code</h2>
                
                <div className="w-full max-w-[400px] flex flex-row items-center justify-between gap-4 px-2">
                    {/* Left: QR Code */}
                    <div className="w-40 h-40 sm:w-44 sm:h-44 shrink-0 rounded-2xl flex items-center justify-center">
                        {qrDataUrl ? (
                            <Image src={qrDataUrl} alt="QR Code" width={176} height={176} className="w-full h-full object-contain mix-blend-multiply" />
                        ) : (
                            <div className="w-full h-full bg-slate-50 flex items-center justify-center rounded-2xl border-2 border-slate-100 text-[#372b61]">
                                <Target className="w-10 h-10 opacity-30" />
                            </div>
                        )}
                    </div>

                    {/* Right: Avatar & Button */}
                    <div className="flex flex-col items-center justify-center gap-7">
                        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-sm bg-slate-50">
                            {card.image ? (
                            <Image 
                                src={card.image} 
                                alt={name} 
                                width={128} 
                                height={128} 
                                className="object-cover w-full h-full" 
                                unoptimized={card.image.startsWith("data:")}
                            />
                            ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#c2eaef] text-[#372b61] text-3xl font-black">{name.charAt(0)}</div>
                            )}
                        </div>
                        
                        {/* Dark Purple Button */}
                        <button
                          type="button"
                          onClick={() => {
                            if (typeof window === "undefined") return;
                            downloadQrPng(`${window.location.origin}/${slug}`, "vcard-qr.png", {
                              fgColor: card.qrCodeColor || "#000000",
                              bgColor: card.qrBgColor || "#ffffff",
                              dotStyle: card.qrDotStyle || "square",
                              eyeStyle: card.qrEyeStyle || "square",
                            });
                          }}
                          className="bg-[#3b326b] text-white text-[11px] sm:text-[12px] font-bold tracking-wide px-5 py-3 rounded-lg hover:bg-[#2b254a] transition-colors shadow-md"
                        >
                            Download My QR Code
                        </button>
                    </div>
                </div>
            </section>

            {/* BUSINESS HOURS SECTION (Requested Design) */}
            <section className="px-6 py-16 bg-gradient-to-br from-[#dfdcf2] to-[#d1eaf0] relative z-10 flex flex-col items-center">
                <h2 className="text-[28px] font-black text-[#372b61] mb-10 tracking-tight">Business Hours</h2>

                {appointmentRows.length > 0 && (
                  <div className="w-full max-w-[460px] mb-6 rounded-2xl border border-[#d9d3ef] bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-[16px] font-black text-[#372b61]">Appointment Services</h3>
                      <span className="rounded-full bg-[#ece8fb] px-3 py-1 text-[11px] font-bold text-[#4b3f7a]">
                        {appointmentTypeLabel}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {appointmentRows.map((svc) => (
                        <div
                          key={svc.id}
                          className="flex items-center justify-between rounded-xl border border-[#ece8fb] bg-[#faf9ff] px-3 py-2"
                        >
                          <span className="text-[13px] font-semibold text-[#4b3f7a]">{svc.serviceName || "Service"}</span>
                          <span className="text-[12px] font-black text-[#372b61]">
                            {card.appointmentType === "paid" ? `INR ${svc.amount || "0"}` : "Free"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="w-full max-w-[460px] flex flex-col gap-4">
                    {businessHourRows.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-3 flex flex-row items-center gap-5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 shrink-0 bg-[#352a5f] rounded-xl flex items-center justify-center text-white shadow-inner">
                                <Calendar className="w-6 h-6 text-[#efebf8]" strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[12px] md:text-[13px] font-bold text-[#958ebe] mb-1">
                                    {item.day}
                                </span>
                                <span className="text-[14px] md:text-[15px] font-black text-[#372b61]">
                                    {item.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {card.displayServiceEnquiryButton && (
                  <button
                    type="button"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className="mt-10 inline-flex items-center justify-center rounded-lg bg-white/10 border border-white/20 px-6 py-3.5 text-white text-[13px] font-bold tracking-wide hover:bg-white/20 transition-colors shadow-sm"
                  >
                    Service Enquiry
                  </button>
                )}
            </section>

            {/* CONTACT US SECTION (Requested Design) */}
            <section className="px-5 py-16 bg-gradient-to-b from-[#d1eaf0] to-[#dfdcf2] relative z-10 flex flex-col items-center">
                <h2 id="contact" className="text-[28px] font-black text-[#372b61] mb-10 tracking-tight">
                  Contact Us
                </h2>
                
                <div className="w-full max-w-[460px] bg-white rounded-2xl p-6 md:p-8 shadow-[0_10px_20px_rgba(0,0,0,0.03)] border border-white">
                    <form className="flex flex-col md:flex-row gap-5">
                        {/* Left Column */}
                        <div className="flex-1 flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[13px] font-bold text-[#6f6393]">Your Name</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9892c4]">
                                        <User className="w-4 h-4" strokeWidth={2.5} />
                                    </span>
                                    <input type="text" className="w-full h-10 pl-10 pr-3 rounded-[8px] border border-[#d6d0f0] bg-white text-sm text-[#372b61] outline-none focus:border-[#6f6393] transition-colors" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[13px] font-bold text-[#6f6393]">E-mail</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9892c4]">
                                        <Mail className="w-4 h-4" strokeWidth={2.5} />
                                    </span>
                                    <input type="email" className="w-full h-10 pl-10 pr-3 rounded-[8px] border border-[#d6d0f0] bg-white text-sm text-[#372b61] outline-none focus:border-[#6f6393] transition-colors" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[13px] font-bold text-[#6f6393]">Phone</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9892c4]">
                                        <Phone className="w-4 h-4" strokeWidth={2.5} />
                                    </span>
                                    <input type="tel" className="w-full h-10 pl-10 pr-3 rounded-[8px] border border-[#d6d0f0] bg-white text-sm text-[#372b61] outline-none focus:border-[#6f6393] transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex-1 flex flex-col gap-1.5">
                            <label className="text-[13px] font-bold text-[#6f6393]">Your Message</label>
                            <div className="relative h-full">
                                <textarea 
                                    placeholder="Type a Message.."
                                    className="w-full h-[140px] md:h-full p-3 pt-3.5 rounded-[8px] border border-[#d6d0f0] bg-white text-[13px] text-[#372b61] outline-none focus:border-[#6f6393] transition-colors resize-none placeholder:text-[#a09bc3]"
                                ></textarea>
                            </div>
                        </div>
                    </form>

                    {/* Submit button */}
                    <div className="mt-8 flex justify-center">
                        <button type="button" className="bg-[#3b326b] flex items-center justify-center text-white text-[13px] font-bold tracking-wide px-8 py-3 rounded-lg hover:bg-[#2e2652] transition-all shadow-md">
                            Send Message
                        </button>
                    </div>
                </div>
            </section>

            {(showTerms || showPrivacy) && (
              <section className="px-5 py-10 bg-gradient-to-b from-[#dfdcf2] to-[#dfdcf2] relative z-10 flex flex-col items-center">
                <div className="w-full max-w-[460px] space-y-6">
                  {showTerms && (
                    <div className="bg-white rounded-2xl p-6 md:p-7 border border-[#e7e3f7] shadow-[0_10px_20px_rgba(0,0,0,0.03)]">
                      <h3 className="text-[22px] font-black text-[#372b61] mb-3 tracking-tight">Terms &amp; Conditions</h3>
                      <div
                        className="prose prose-sm max-w-none text-[#45396f]"
                        dangerouslySetInnerHTML={{ __html: card.termsHtml ?? "" }}
                      />
                    </div>
                  )}
                  {showPrivacy && (
                    <div className="bg-white rounded-2xl p-6 md:p-7 border border-[#e7e3f7] shadow-[0_10px_20px_rgba(0,0,0,0.03)]">
                      <h3 className="text-[22px] font-black text-[#372b61] mb-3 tracking-tight">Privacy Policy</h3>
                      <div
                        className="prose prose-sm max-w-none text-[#45396f]"
                        dangerouslySetInnerHTML={{ __html: card.privacyHtml ?? "" }}
                      />
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* IFRAMES SECTION (Show at the end, before Create Your VCard) */}
            {addedIframes.length > 0 && (
              <section className="px-6 pb-14 bg-gradient-to-b from-[#dfdcf2] to-[#dfdcf2] relative z-10 flex flex-col items-center">
                <h2 className="text-[28px] font-black text-[#372b61] mb-8 tracking-tight">Iframes</h2>
                <div className="w-full max-w-[460px] space-y-4">
                  {addedIframes.map((frame) => (
                    <div key={frame.id} className="rounded-2xl border border-[#d5dcec] bg-white p-4 shadow-sm">
                      <p className="mb-3 text-[12px] font-bold uppercase tracking-wide text-[#6f78a0]">URL</p>
                      <iframe
                        src={frame.embedUrl!}
                        title={`iframe ${frame.id}`}
                        className="w-full min-h-[420px] rounded-xl border border-gray-200"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CUSTOM LINKS SECTION (Show after Iframes) */}
            {addedCustomLinks.length > 0 && (
              <section className="px-6 pb-14 bg-gradient-to-b from-[#dfdcf2] to-[#dfdcf2] relative z-10 flex flex-col items-center">
                <h2 className="text-[28px] font-black text-[#372b61] mb-8 tracking-tight">Custom Links</h2>
                <div className="w-full max-w-[460px] space-y-3.5">
                  {addedCustomLinks.map((link) => {
                    const href = normalizeCustomLinkUrl(link.url);
                    const asButton = !!link.showAsButton;
                    const isRounded = (link.buttonType ?? "square") === "rounded";
                    const tone = link.color || "#4E5CF1";
                    return (
                      <a
                        key={link.id}
                        href={href}
                        target={link.openInNewTab ? "_blank" : "_self"}
                        rel={link.openInNewTab ? "noopener noreferrer" : undefined}
                        className={
                          asButton
                            ? `w-full inline-flex items-center justify-between gap-3 px-5 py-3.5 text-white font-bold tracking-wide shadow-sm hover:shadow-md transition-all ${
                                isRounded ? "rounded-full" : "rounded-xl"
                              }`
                            : "w-full inline-flex items-center justify-between gap-3 px-5 py-3.5 rounded-xl border border-[#d5dcec] bg-white hover:bg-[#f8f7ff] transition-colors"
                        }
                        style={asButton ? { backgroundColor: tone } : undefined}
                      >
                        <span className={asButton ? "text-[14px] text-white truncate" : "text-[14px] text-[#45396f] font-semibold truncate"}>
                          {link.name}
                        </span>
                        <ArrowRight className={asButton ? "w-4 h-4 text-white shrink-0" : "w-4 h-4 text-[#6b61a0] shrink-0"} />
                      </a>
                    );
                  })}
                </div>
              </section>
            )}

            {/* CREATE YOUR VCARD SECTION (Requested Design) */}
            <section className="px-6 py-12 pb-20 bg-gradient-to-b from-[#dfdcf2] to-[#c2eaef] relative z-10 flex flex-col items-center">
                <h2 className="text-[28px] font-black text-[#372b61] tracking-tight mb-8">Create Your VCard</h2>

                <div className="w-full max-w-[460px] bg-white rounded-2xl py-5 px-6 flex items-center justify-center gap-3 shadow-sm mb-12 border border-[#ffffff]">
                    <span className="text-[14px] md:text-[15px] font-bold text-[#45396f] truncate">
                        {baseUrl}/{slug}
                    </span>
                    <ExternalLink className="w-5 h-5 text-[#45396f] shrink-0 pointer-events-none" strokeWidth={2.5} />
                </div>

                <button 
                    onClick={() => onDownloadVCard?.()}
                    className="bg-[#3b326b] flex items-center justify-center text-white text-[13px] font-bold tracking-wide px-8 py-3.5 rounded-lg hover:bg-[#2b2450] transition-colors shadow-md"
                >
                    Add To Contact
                </button>
            </section>
          </>
        )}


        {/* Footer info */}
        <footer className="px-8 py-10 border-t border-white/5 flex flex-col items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
           <span>{name} © {new Date().getFullYear()}</span>
        </footer>
      </div>
    </div>
  );
}

