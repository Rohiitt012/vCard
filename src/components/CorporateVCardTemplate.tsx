"use client";
import { SocialCircleIcon } from "@/components/SocialCircleIcon";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { Mail, Phone, MapPin, Cake, Target, Presentation, Calendar, ChevronLeft, ChevronRight, LayoutGrid, Share2, MessageCircle, ExternalLink, User, Sparkles } from "lucide-react";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
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

export function CorporateVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
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

  const testimonials =
    card.testimonials && card.testimonials.length > 0
      ? card.testimonials
      : DEFAULT_TESTIMONIALS;

  const products =
    card.products && card.products.length > 0
      ? card.products
      : DEFAULT_PRODUCTS_LIST;

  const blogs =
    card.blogs && card.blogs.length > 0
      ? card.blogs
      : DEFAULT_BLOGS_LIST;

  const email = card.email;
  const phone = card.phone;
  const address = card.address;

  const websiteUrl =
    card.website && card.website.trim()
      ? card.website.trim().startsWith("http")
        ? card.website.trim()
        : `https://${card.website.trim()}`
      : undefined;

  const primaryColor = card.templatePrimaryColor || "#3B82F6"; // Vibrant blue
  const accentColor = "#FF8933"; // Orange from social icons in image 1

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-[#0F172A] font-sans flex justify-center px-0 py-0 overflow-x-hidden">
      <div className="w-full max-w-[540px] bg-white relative flex flex-col shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08)]">
        
        {/* TOP BANNER */}
        <section className="relative h-[320px] w-full overflow-hidden">
           <Image 
             src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200" 
             alt="Banner" 
             fill 
             className="object-cover" 
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30"></div>
           
           {/* Angled Mask Transition */}
           <div 
             className="absolute bottom-[-1px] left-0 right-0 h-40 bg-white z-10" 
             style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}
           />
        </section>

        {/* IDENTITY SECTION (Image 1 Style Overlap - Centered) */}
        <section className="relative px-8 pt-0 pb-10 z-20 -mt-24 flex flex-col items-center text-center">
            {/* Profile Image with thick white border */}
            <div className="relative group shrink-0 mb-6">
                <div className="absolute -inset-1 rounded-[40px] bg-white opacity-20 blur-md pointer-events-none" />
                <div className="relative w-44 h-44 rounded-full border-4 border-white overflow-hidden shadow-2xl bg-[#0A0C14]">
                    {card.image ? (
                        <Image
                            src={card.image}
                            alt={name}
                            fill
                            className="object-cover"
                            unoptimized={card.image.startsWith("data:")}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950">
                            <span className="text-5xl font-bold text-white/20">
                                {name.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Name and Role */}
            <div className="space-y-2 mb-8">
                <h1 className="text-[32px] font-bold text-slate-900 leading-tight">
                    {name}
                </h1>
                <p className="text-[17px] font-medium text-slate-400">
                    {role}
                </p>
            </div>

            {/* Social Icons row (Image 1 Style) */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
                {card.socialLinks && card.socialLinks.length > 0 ? (
                    card.socialLinks.map((link, idx) => (
                        <SocialCircleIcon
                            key={idx}
                            platform={link.platform}
                            url={link.url}
                            size={44}
                            className="shadow-none ring-0 transition-transform hover:scale-110"
                        />
                    ))
                ) : (
                    <div className="flex gap-6">
                        {['facebook', 'instagram', 'linkedin', 'whatsapp', 'twitter'].map(p => (
                            <SocialCircleIcon key={p} platform={p} size={44} className="shadow-none ring-0" />
                        ))}
                    </div>
                )}
            </div>

            {/* CONTACT CARDS GRID MOVED TO START (Image 1 Style) */}
            {(email || phone || address || card.birthDate) && (
                <div className="w-full max-w-md grid grid-cols-2 gap-x-4 gap-y-12 pb-6">
                    {email && (
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="w-12 h-12 bg-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <Mail className="w-6 h-6" />
                            </div>
                            <p className="text-[14px] font-bold text-slate-800 break-all">{email}</p>
                        </div>
                    )}
                    {card.birthDate && (
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="w-12 h-12 bg-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <Cake className="w-6 h-6" />
                            </div>
                            <p className="text-[14px] font-bold text-slate-800">{card.birthDate}</p>
                        </div>
                    )}
                    {phone && (
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="w-12 h-12 bg-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <Phone className="w-6 h-6" />
                            </div>
                            <p className="text-[14px] font-bold text-slate-800">{phone}</p>
                        </div>
                    )}
                    {address && (
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="w-12 h-12 bg-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <p className="text-[14px] font-bold text-slate-800 leading-snug">{address}</p>
                        </div>
                    )}
                </div>
            )}

           {/* DESCRIPTION */}
           <div className="max-w-md">
              <p className="text-[15px] text-slate-500 leading-relaxed italic font-medium">
                {description}
              </p>
           </div>
        </section>

        {/* STATS SECTION (Image 2 style) */}
        <section className="px-8 pb-12">
            <div className="grid grid-cols-3 gap-3">
              {stats.slice(0, 3).map((s: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-slate-100 p-5 flex flex-col gap-2 shadow-sm transition-all hover:shadow-md hover:border-slate-200"
                >
                  <span className="text-xl font-black text-slate-900 leading-none">
                    {s.value ?? s}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                    {s.label || s.title}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button (Image 2 style) */}
            <div className="pt-8">
              <button
                type="button"
                onClick={() => onDownloadVCard?.()}
                className="w-full flex items-center justify-center gap-3 rounded-[24px] bg-blue-500 py-5 text-sm font-black text-white shadow-[0_20px_40px_rgba(59,130,246,0.2)] hover:bg-blue-400 transition-all hover:scale-[1.02] active:scale-95"
              >
                + Download vCard / Add to contact
              </button>
            </div>
        </section>

        {/* EXPERTISE / SERVICES */}
        <section className="px-8 py-16 bg-white border-t border-slate-50">
           <div className="mb-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-blue-600 font-bold mb-2">Expertise</p>
              <h2 className="text-2xl font-black italic tracking-tight text-slate-900">How I create value</h2>
           </div>
           
           <div className="grid gap-6">
              {services.map((s: any, idx: number) => (
                <div key={idx} className="group p-8 rounded-[40px] bg-slate-50/50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 flex flex-col sm:flex-row gap-8 items-start">
                   <div className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-110 transition-transform shadow-inner">
                      {s.icon ? (
                        <img src={s.icon} alt={s.title} className="w-8 h-8 object-contain" />
                      ) : (
                        <span className="text-3xl select-none opacity-40">✦</span>
                      )}
                   </div>
                   <div className="space-y-2">
                      <h3 className="font-black text-xl tracking-tight">{s.name || s.title}</h3>
                      <p className="text-[15px] text-gray-400 leading-relaxed font-light">{s.description || s.details}</p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* PROCESS / HOW WE WORK */}
        <section className="px-8 py-16 bg-[#F8FAFC] border-t border-slate-100">
           <div className="mb-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-violet-600 font-bold mb-2">The Process</p>
              <h2 className="text-2xl font-black italic tracking-tight uppercase text-slate-900">Idea to Launch</h2>
           </div>
 
           <div className="grid gap-4 sm:grid-cols-3">
              {processSteps.slice(0, 3).map((step: any, idx: number) => (
                <div key={idx} className="relative p-6 rounded-[32px] bg-white border border-slate-100 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                   <span className="text-[10px] font-black text-violet-600/50 uppercase tracking-widest">{step.label || `0${idx + 1} · STEP`}</span>
                   <h3 className="font-bold text-[16px] text-slate-900">{step.title}</h3>
                   <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-3">{step.description}</p>
                </div>
              ))}
           </div>
        </section>
         {/* SHOWCASE / RECENT WORK */}
        <section className="px-8 py-16 bg-white border-t border-slate-100">
           <div className="mb-10 text-center">
              <p className="text-[10px] tracking-[0.3em] uppercase text-indigo-600 font-bold mb-2 text-center">Portfolio</p>
              <h2 className="text-2xl font-black italic tracking-tight uppercase text-center text-slate-900">Selected Initiatives</h2>
           </div>
 
           <div className="grid gap-6 sm:grid-cols-2">
              {showcaseSource.map((item: any, idx: number) => (
                <article key={idx} className="group rounded-[48px] bg-slate-50 border border-slate-100 overflow-hidden flex flex-col transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-100">
                   <div className="h-40 relative bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden">
                       <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-200 text-4xl font-black uppercase tracking-tighter italic">Creative</div>
                   </div>
                   <div className="p-8 space-y-2 flex-1 flex flex-col justify-end text-center">
                      <h3 className="text-lg font-black text-slate-900">{item.title || item.name}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed italic">{item.description || "Premium advisory and project delivery."}</p>
                   </div>
                </article>
              ))}
           </div>
        </section>

        {/* CLIENTS LOGOS */}
        {clientLogos && clientLogos.length > 0 && (
           <section className="px-8 py-12 bg-white border-t border-slate-50">
              <div className="flex flex-wrap items-center justify-center gap-4 opacity-40 grayscale">
                 {clientLogos.map((c: any, idx: number) => (
                   <div key={idx} className="px-4 py-2 rounded-full border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {typeof c === "string" ? c : c.name}
                   </div>
                 ))}
              </div>
           </section>
        )}

        {/* PROFLIE PHOTO WITH GLOW (Image 2 Footer Identity) */}
        <section className="mt-12 px-8 pb-20 flex flex-col items-center relative overflow-hidden bg-white">
           {/* Background Glows */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
           
           <div className="relative group">
              {/* Outer Pulsing Glow */}
              <div className="absolute -inset-8 rounded-[60px] bg-blue-500/20 opacity-40 blur-[50px] group-hover:opacity-60 transition-opacity animate-pulse" />
              
              <div className="relative h-72 w-72 rounded-[48px] overflow-hidden border-4 border-white bg-slate-50 shadow-2xl">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={name}
                    fill
                    className="object-cover"
                    unoptimized={card.image.startsWith("data:")}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-100">
                    <span className="text-7xl font-bold text-slate-300">{name.charAt(0)}</span>
                  </div>
                )}
              </div>

              {/* Slug Badge (Image 1 Badge style) */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl bg-white border border-slate-100 px-8 py-3 text-[11px] font-black text-blue-600 tracking-widest uppercase shadow-2xl backdrop-blur-xl">
                /{slug}
              </div>
           </div>
        </section>

        {/* OUR SERVICES - EXPERTISE VALUE DESIGN (MATCH IMAGE) */}
        {services && services.length > 0 && (
           <section className="px-8 py-32 bg-white border-t border-slate-50 relative overflow-hidden">
              <div className="relative z-10 max-w-xl mx-auto">
                 {/* Heading Group */}
                 <div className="mb-20">
                    <p className="text-[14px] font-black tracking-[0.2em] text-[#3F51B5] mb-2 uppercase">EXPERTISE</p>
                    <h2 className="text-[40px] font-black text-[#111827] tracking-tight leading-none italic">
                       How I create value
                    </h2>
                 </div>

                 <div className="flex flex-col gap-6">
                    {services.map((s: any, idx: number) => (
                       <div 
                         key={idx} 
                         className="group flex items-center gap-8 p-12 bg-white rounded-[50px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] border border-slate-50 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(63,81,181,0.12)] hover:translate-y-[-5px]"
                       >
                          {/* Sparkle Icon Container */}
                          <div className="flex-shrink-0">
                             <div className="w-24 h-24 rounded-full bg-[#EBF3FF] flex items-center justify-center text-[#94A3B8]">
                                <Sparkles className="w-10 h-10 fill-[#94A3B8] stroke-none" />
                             </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 space-y-3">
                             <h3 className="text-[26px] font-black text-[#111827] tracking-tight">
                                {s.name || s.title}
                             </h3>
                             <p className="text-[17px] font-medium text-slate-400 leading-snug max-w-[340px]">
                                {s.description || s.details}
                             </p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </section>
        )}

        {/* MAKE AN APPOINTMENT (Image Style) */}
        <section className="px-8 py-20 bg-white border-t border-slate-100 relative z-10">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#0f172a] tracking-tight text-center">Make An Appointment</h2>
           </div>

           <div className="max-w-md mx-auto space-y-8">
              {/* Date Input */}
              <div className="space-y-4">
                 <label className="text-sm font-black text-[#0f172a] uppercase tracking-widest block">Date:</label>
                 <div className="relative group">
                    <input 
                       type="text" 
                       placeholder="Pick a date" 
                       readOnly
                       className="w-full h-16 px-6 rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-300 font-bold focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all cursor-pointer shadow-sm"
                    />
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                       <Calendar className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                    </div>
                 </div>
              </div>

              {/* Hour Selection */}
              <div className="space-y-4">
                 <label className="text-sm font-black text-[#0f172a] uppercase tracking-widest block">Hour:</label>
                 <div className="grid grid-cols-4 gap-3">
                    {['8:10 - 20:00', '8:10 - 20:00', '8:10 - 20:00', '8:10 - 20:00'].map((time, idx) => (
                       <div 
                          key={idx} 
                          className="h-14 rounded-xl border border-slate-100 bg-white flex items-center justify-center text-[9px] font-black text-slate-400 shadow-sm transition-all hover:border-orange-500 hover:text-orange-500 hover:shadow-orange-500/10 cursor-pointer"
                       >
                          {time}
                       </div>
                    ))}
                 </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                 <button 
                    type="button"
                    className="w-full h-16 rounded-2xl bg-[#FF7222] text-white font-black text-lg shadow-xl shadow-orange-500/20 hover:bg-[#E65F1B] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                 >
                    Book Appointment
                 </button>
              </div>
           </div>
        </section>

        {/* GALLERY SECTION (Image Style) */}
        <section className="px-8 py-20 bg-white border-t border-slate-100 relative overflow-hidden">
           {/* Decorative Illustration (Top Right) */}
           <div className="absolute top-10 right-4 w-40 h-32 opacity-80 pointer-events-none select-none z-0">
              <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-40">
                 <path d="M40 100 L60 80 L80 100 L100 80 L120 100" stroke="#cbd5e1" strokeWidth="2" fill="none" />
                 <circle cx="30" cy="40" r="10" fill="#f1f5f9" />
                 <circle cx="170" cy="50" r="8" fill="#f1f5f9" />
                 <path d="M140 30 Q160 10 180 30" stroke="#cbd5e1" strokeWidth="2" fill="none" />
                 {/* Simplified people silhuettes */}
                 <rect x="130" y="60" width="20" height="40" rx="4" fill="#94a3b8" />
                 <rect x="155" y="65" width="20" height="40" rx="4" fill="#64748b" />
                 <circle cx="140" cy="50" r="8" fill="#94a3b8" />
                 <circle cx="165" cy="55" r="8" fill="#64748b" />
              </svg>
           </div>
           
           <div className="relative z-10">
              <div className="text-center mb-10">
                 <h2 className="text-3xl font-black text-[#0f172a] tracking-tight">Gallery</h2>
              </div>

              <div className="space-y-6">
                 {/* Main Image Display */}
                 <div className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                    <Image 
                       src={gallery[0].imageUrl} 
                       alt="Gallery Image" 
                       fill 
                       className="object-cover"
                    />
                 </div>

                 {/* Premium Pagination Dots (Orange Pill Style) */}
                 <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-2.5 rounded-full bg-orange-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-200" />
                 </div>
              </div>
           </div>
        </section>

        {/* TESTIMONIALS SECTION (Image Style) */}
        <section className="px-8 py-20 bg-white border-t border-slate-100 relative overflow-hidden">
           {/* Decorative Illustration (Top Left) */}
           <div className="absolute top-10 left-4 w-48 h-36 opacity-80 pointer-events-none select-none z-0">
              <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
                 <rect x="20" y="20" width="100" height="80" rx="4" stroke="#64748b" strokeWidth="2" fill="#f8fafc" />
                 <path d="M40 50 Q60 30 80 50 L100 40" stroke="#64748b" strokeWidth="1.5" fill="none" />
                 <circle cx="45" cy="70" r="5" fill="#cbd5e1" />
                 <circle cx="65" cy="70" r="5" fill="#cbd5e1" />
                 <circle cx="85" cy="70" r="5" fill="#cbd5e1" />
                 <rect x="130" y="30" width="40" height="60" rx="4" stroke="#cbd5e1" strokeWidth="1.5" />
                 <line x1="135" y1="40" x2="165" y2="40" stroke="#cbd5e1" strokeWidth="1.5" />
                 <line x1="135" y1="50" x2="165" y2="50" stroke="#cbd5e1" strokeWidth="1.5" />
                 <line x1="135" y1="60" x2="155" y2="60" stroke="#cbd5e1" strokeWidth="1.5" />
              </svg>
           </div>

           <div className="relative z-10">
              <div className="text-center mb-12">
                 <h2 className="text-3xl font-black text-[#0f172a] tracking-tight text-center">Testimonials</h2>
              </div>

              <div className="relative flex flex-col items-center">
                 {/* Navigation Arrows */}
                 <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-0">
                    <button className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500 transition-all pointer-events-auto shadow-sm">
                       <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500 transition-all pointer-events-auto shadow-sm">
                       <ChevronRight className="w-6 h-6" />
                    </button>
                 </div>

                 {/* Content */}
                 <div className="w-full max-w-sm flex flex-col items-center text-center space-y-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100">
                       <Image 
                          src={testimonials[0].image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"} 
                          alt={testimonials[0].name} 
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                       />
                    </div>

                    <div className="space-y-1">
                       <h3 className="text-xl font-black text-orange-500">{testimonials[0].name}</h3>
                       <p className="text-sm font-bold text-[#0f172a] opacity-80">{testimonials[0].role || 'Customer'}</p>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed font-bold max-w-[280px]">
                       {testimonials[0].quote}
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* PRODUCTS SECTION (Image Style) */}
        <section className="px-8 py-20 bg-white border-t border-slate-100 relative">
           <div className="flex justify-between items-start mb-12">
              <div className="flex-1 text-center pl-16">
                 <h2 className="text-3xl font-black text-[#0f172a] tracking-tight text-center">Products</h2>
              </div>
              
              {/* Floating Icons (Top Right) */}
              <div className="flex flex-col gap-3 -mt-4">
                 <div className="w-12 h-12 rounded-full border border-orange-200 bg-white flex items-center justify-center text-orange-500 shadow-sm">
                    <MessageCircle className="w-6 h-6" />
                 </div>
                 <div className="w-12 h-12 rounded-full border border-orange-200 bg-white flex items-center justify-center text-orange-500 shadow-sm relative">
                    <Share2 className="w-6 h-6" />
                 </div>
                 <div className="w-14 h-14 rounded-full bg-[#f97316] flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                    <LayoutGrid className="w-7 h-7" />
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
              {products.slice(0, 2).map((prod: any, idx: number) => (
                 <div key={idx} className="rounded-[32px] overflow-hidden bg-[#fff7ed] shadow-md transition-transform hover:scale-[1.02]">
                    <div className="h-40 relative">
                       <Image 
                          src={prod.icon || "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=400"} 
                          alt={prod.name} 
                          fill 
                          className="object-cover"
                       />
                    </div>
                    <div className="p-5 flex justify-between items-end">
                       <div>
                          <h3 className="text-[15px] font-black text-[#0f172a] mb-1">{prod.name}</h3>
                          <p className="text-[11px] font-bold text-slate-400">{prod.description || 'Lorem Ipsum'}</p>
                       </div>
                       <div className="text-xl font-black text-orange-500">
                          {prod.currency || '$'}{prod.price || '0'}
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* BLOG SECTION (Image Style) */}
        <section className="px-8 py-24 bg-white border-t border-slate-100 relative overflow-hidden">
           {/* Decorative Illustration (Full Background Center) */}
           <div className="absolute inset-x-0 bottom-0 top-12 opacity-80 pointer-events-none select-none z-0">
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
                 {/* Gear icons */}
                 <circle cx="150" cy="250" r="30" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" />
                 <circle cx="150" cy="250" r="15" stroke="#94a3b8" strokeWidth="2" />
                 {/* Bars / Charts */}
                 <rect x="280" y="200" width="12" height="60" fill="#e2e8f0" rx="2" />
                 <rect x="300" y="180" width="12" height="80" fill="#cbd5e1" rx="2" />
                 <rect x="320" y="220" width="12" height="40" fill="#94a3b8" rx="2" />
                 {/* Lines / Grid */}
                 <path d="M100 200 L350 200" stroke="#f1f5f9" strokeWidth="2" />
                 <path d="M100 230 L350 230" stroke="#f1f5f9" strokeWidth="2" />
                 <path d="M100 260 L350 260" stroke="#f1f5f9" strokeWidth="2" />
                 <path d="M150 180 V280" stroke="#f1f5f9" strokeWidth="2" />
                 {/* Abstract Shapes */}
                 <circle cx="50" cy="230" r="8" fill="#e2e8f0" />
                 <path d="M40 80 Q60 60 80 80 T120 80" stroke="#cbd5e1" strokeWidth="2" fill="none" />
              </svg>
           </div>
           
           <div className="relative z-10 flex flex-col items-center">
              <div className="bg-white px-10 py-4 border border-slate-200 shadow-sm rounded-lg mb-8">
                 <h2 className="text-3xl font-black text-[#0f172a] tracking-wider uppercase text-center">Blog</h2>
              </div>
              
              {/* Premium Carousel Display (Image Style) */}
              <div className="w-full relative px-2">
                 <div className="flex items-center gap-4 overflow-hidden py-4">
                    {/* Left preview (static for design) */}
                    <div className="min-w-[120px] h-64 rounded-[32px] overflow-hidden opacity-40 blur-[1px] -ml-28">
                       <Image 
                          src={blogs[2 % blogs.length]?.icon || blogs[0].icon} 
                          alt="Prev" 
                          fill 
                          className="object-cover"
                       />
                    </div>

                    {/* Active Main Card */}
                    <div className="min-w-[320px] flex-1">
                       <div className="bg-white rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 transition-transform duration-500">
                          <div className="h-48 relative">
                             <Image 
                                src={blogs[0].icon} 
                                alt={blogs[0].title} 
                                fill 
                                className="object-cover"
                             />
                          </div>
                          <div className="p-8 text-left bg-white">
                             <h3 className="text-2xl font-black text-[#1e293b] mb-3">{blogs[0].title || "Loreum Ipsum"}</h3>
                             <p className="text-sm text-slate-400 leading-relaxed font-bold italic">
                                {blogs[0].description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}
                             </p>
                          </div>
                       </div>
                    </div>

                    {/* Right preview (static for design) */}
                    <div className="min-w-[120px] h-64 rounded-[32px] overflow-hidden opacity-40 blur-[1px]">
                       <Image 
                          src={blogs[1 % blogs.length]?.icon || blogs[0].icon} 
                          alt="Next" 
                          fill 
                          className="object-cover"
                       />
                    </div>
                 </div>

                 {/* Pagination Dots (Orange Pill Style) */}
                 <div className="flex items-center justify-center gap-2 mt-8">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-200" />
                    <div className="w-8 h-2.5 rounded-full bg-orange-500 shadow-sm" />
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-200" />
                 </div>
              </div>
           </div>
        </section>

        {/* BUSINESS HOURS SECTION (Image Style - Grid Layout) */}
        <section className="px-8 py-20 bg-white border-t border-slate-100 relative overflow-hidden">
           <div className="text-center mb-12">
              <h2 className="text-[32px] font-bold text-[#3F51B5] tracking-tight text-center">Business Hours</h2>
           </div>

           <div className="max-w-xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                 {[
                   { day: 'Sunday', time: '08:10 - 20:00' },
                   { day: 'Monday', time: '08:10 - 20:00' },
                   { day: 'Tuesday', time: '08:10 - 20:00' },
                   { day: 'Wednesday', time: '08:10 - 10:00' },
                   { day: 'Thursday', time: '08:10 - 20:00' },
                   { day: 'Friday', time: '08:10 - 20:00' },
                   { day: 'Saturday', time: 'Closed' },
                 ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[#F0F5FA] rounded-md py-4 px-6 flex items-center justify-center transition-all hover:bg-[#E1EBF5]"
                    >
                       <span className="text-[17px] font-bold text-[#3F51B5] whitespace-nowrap">
                          {item.day} : {item.time}
                       </span>
                    </div>
                 ))}
              </div>
           </div>

           {/* Subtle Watermark Decoration (Bottom Right) */}
           <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10 pointer-events-none select-none">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-20">
                 <circle cx="50" cy="50" r="40" stroke="#cbd5e1" strokeWidth="2" />
                 <path d="M50 20 V50 L70 60" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
              </svg>
           </div>
        </section>

        {/* QR CODE SECTION (Image Style) */}
        <section className="px-8 py-20 bg-white border-t border-slate-100 relative overflow-hidden">
           {/* Decorative Illustration (Top Right) */}
           <div className="absolute top-10 right-4 w-48 h-36 opacity-30 pointer-events-none select-none z-0">
              <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                 <rect x="20" y="20" width="160" height="110" rx="4" stroke="#cbd5e1" strokeWidth="2" fill="#f8fafc" opacity="0.4" />
                 <line x1="40" y1="40" x2="140" y2="40" stroke="#cbd5e1" strokeWidth="3" />
                 <rect x="40" y="55" width="20" height="50" fill="#e2e8f0" />
                 <rect x="70" y="70" width="20" height="35" fill="#cbd5e1" />
                 <rect x="100" y="45" width="20" height="60" fill="#94a3b8" />
                 <circle cx="150" cy="50" r="15" fill="#f1f5f9" stroke="#cbd5e1" />
              </svg>
           </div>

           <div className="relative z-10">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-black text-[#0f172a] tracking-tight text-center uppercase">QR Code</h2>
              </div>

              <div className="max-w-xs mx-auto relative pt-8">
                 {/* Floating Profile Image */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-4 border-orange-500 overflow-hidden shadow-xl z-20 bg-white">
                    {card.image ? (
                       <Image src={card.image} alt={name} fill className="object-cover" />
                    ) : (
                       <div className="w-full h-full flex items-center justify-center bg-slate-100 text-[#0f172a] font-bold">{name.charAt(0)}</div>
                    )}
                 </div>

                 {/* QR Card Body */}
                 <div className="bg-white rounded-[24px] p-8 pt-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] text-center">
                    <div className="relative aspect-square w-full max-w-[180px] mx-auto mb-10 border border-slate-50 p-2 rounded-xl">
                       {/* QR Code Placeholder (Using an SVG to match design style) */}
                       <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-90 text-[#0f172a]">
                          <path d="M10 10h30v30H10zM10 60h30v30H10zM60 10h30v30H60z" fill="currentColor" />
                          <path d="M20 20h10v10H20zM20 70h10v10H20zM70 20h10v10H70z" fill="white" />
                          <path d="M45 10h10v10H45zM45 25h10v10H45zM45 40h10v10H45zM45 55h10v10H45zM45 70h10v10H45zM45 85h10v10H45z" fill="currentColor" />
                          <path d="M10 45h10v10H10zM25 45h10v10H25zM60 45h10v10H60zM75 45h10v10H75zM90 45h10v10H90z" fill="currentColor" />
                          <path d="M60 60h10v10H60zM80 60h10v10H80zM70 70h10v10H70zM60 80h10v10H60zM80 80h10v10H80z" fill="currentColor" />
                       </svg>
                    </div>

                    <button className="w-full py-4 rounded-xl bg-[#f97316] text-white font-black text-sm uppercase tracking-wide shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-600 hover:scale-[1.02]">
                       Download My QR Code
                    </button>
                 </div>
              </div>
           </div>
        </section>
            {/* CONTACT US SECTION (Image Style - Redesigned) */}
        <section className="px-8 py-20 bg-[#F4F7FB] border-t border-slate-100 relative overflow-hidden">
           {/* Abstract Background Shapes */}
           <div className="absolute top-20 right-[-50px] w-[300px] h-[300px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
           <div className="absolute bottom-10 left-[-30px] w-[200px] h-[200px] bg-blue-50/50 rounded-full blur-2xl pointer-events-none" />
           
           <div className="relative z-10">
              <div className="text-center mb-12">
                 <h2 className="text-[32px] font-bold text-[#3F51B5] tracking-tight text-center">Contact Us</h2>
              </div>

              <div className="max-w-xl mx-auto space-y-6">
                 {/* Name Field */}
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-[#3F51B5] ml-1">Your Name</label>
                    <div className="relative">
                       <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-900">
                          <User className="w-6 h-6" />
                       </span>
                       <input 
                          type="text" 
                          className="w-full h-[60px] pl-16 pr-6 rounded-lg bg-white border border-slate-300 text-slate-900 focus:border-[#3F51B5] focus:ring-1 focus:ring-[#3F51B5] outline-none transition-all"
                       />
                    </div>
                 </div>

                 {/* Email Field */}
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-[#3F51B5] ml-1">E-mail</label>
                    <div className="relative">
                       <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-900">
                          <Mail className="w-6 h-6" />
                       </span>
                       <input 
                          type="email" 
                          className="w-full h-[60px] pl-16 pr-6 rounded-lg bg-white border border-slate-300 text-slate-900 focus:border-[#3F51B5] focus:ring-1 focus:ring-[#3F51B5] outline-none transition-all"
                       />
                    </div>
                 </div>

                 {/* Phone Field */}
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-[#3F51B5] ml-1">Phone</label>
                    <div className="relative">
                       <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-900">
                          <Phone className="w-6 h-6" />
                       </span>
                       <input 
                          type="tel" 
                          className="w-full h-[60px] pl-16 pr-6 rounded-lg bg-white border border-slate-300 text-slate-900 focus:border-[#3F51B5] focus:ring-1 focus:ring-[#3F51B5] outline-none transition-all"
                       />
                    </div>
                 </div>

                 {/* Message Field */}
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-[#3F51B5] ml-1">Message</label>
                    <div className="relative">
                       <textarea 
                          placeholder="Type a message here..." 
                          rows={6}
                          className="w-full p-6 rounded-lg bg-white border border-slate-300 text-slate-900 focus:border-[#3F51B5] focus:ring-1 focus:ring-[#3F51B5] outline-none transition-all resize-none"
                       />
                    </div>
                 </div>
                 
                 <div className="flex justify-end pt-2">
                    <button className="px-10 h-[54px] rounded-lg bg-[#3241A9] text-white font-bold text-base shadow-lg hover:bg-[#28348a] transition-all hover:translate-y-[-2px] active:translate-y-0">
                       Send Message
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* FOOTER CTA & ILLUSTRATION (Image Style) */}
        <section className="bg-white border-t border-slate-100">
           {/* Detailed Corporate Illustration */}
           <div className="px-8 py-10 flex justify-center bg-white">
              <div className="w-full max-w-md h-64 relative opacity-60">
                  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                    {/* Background Soft Glow */}
                    <circle cx="200" cy="150" r="100" fill="url(#illust_glow)" opacity="0.4" />
                    
                    {/* Main Floating Card (Glassmorphism effect) */}
                    <rect x="80" y="60" width="240" height="160" rx="24" fill="white" fillOpacity="0.8" stroke="#E2E8F0" strokeWidth="2" />
                    <rect x="100" y="85" width="120" height="12" rx="6" fill="#F1F5F9" />
                    <rect x="100" y="105" width="80" height="12" rx="6" fill="#F1F5F9" />
                    <rect x="100" y="125" width="160" height="12" rx="6" fill="#F1F5F9" />
                    
                    {/* Accent Elements */}
                    <circle cx="270" cy="115" r="30" fill="#3B82F6" fillOpacity="0.1" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path d="M260 115 L280 115 M270 105 L270 125" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                    
                    {/* Floating Growth Nodes */}
                    <g className="animate-pulse" style={{ animationDuration: '3s' }}>
                      <rect x="300" y="40" width="40" height="40" rx="12" fill="#FF7222" shadow-lg="true" />
                      <path d="M312 65 L320 57 L328 65" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    
                    <g className="animate-bounce" style={{ animationDuration: '4s' }}>
                      <rect x="40" y="180" width="60" height="60" rx="20" fill="#3F51B5" />
                      <circle cx="70" cy="210" r="12" stroke="white" strokeWidth="2" opacity="0.6" />
                    </g>

                    {/* Connecting Abstract Lines */}
                    <path d="M40 80 Q100 40 160 80 T280 80" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.5" />
                    <path d="M300 220 Q240 260 180 220 T60 220" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.5" />

                    <defs>
                      <radialGradient id="illust_glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 150) rotate(90) scale(150)">
                        <stop stopColor="#3B82F6" stopOpacity="0.2" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
              </div>
           </div>

           {/* Create Your VCard Promotion Section */}
           <div className="bg-[#fff5f1] px-8 py-20 flex flex-col items-center">
              <h2 className="text-3xl font-black text-[#0f172a] tracking-tight mb-12 text-center">Create Your Vcard</h2>
              
              {/* URL Display Box */}
              <div className="w-full max-w-sm bg-white rounded-2xl h-16 px-6 flex items-center justify-between shadow-sm border border-slate-100 mb-8">
                 <span className="text-sm font-bold text-[#0f172a] truncate opacity-80">
                    {baseUrl}/{slug}
                 </span>
                 <ExternalLink className="w-5 h-5 text-orange-500 shrink-0" />
              </div>

              {/* Final Add to Contact Button */}
              <div className="w-full max-w-sm">
                 <button 
                    onClick={() => onDownloadVCard?.()}
                    className="w-full h-16 rounded-2xl bg-[#FF7222] text-white font-black text-lg shadow-xl shadow-orange-500/20 hover:bg-[#E65F1B] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center"
                 >
                    Add to Contact
                 </button>
              </div>
           </div>
        </section>

        {/* Footer info */}
        <footer className="px-8 py-10 border-t border-white/5 flex flex-col items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
           <span>{name} © {new Date().getFullYear()}</span>
        </footer>
      </div>
    </div>
  );
}
