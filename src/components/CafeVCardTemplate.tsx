"use client";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe2, Cake, Calendar, ArrowLeft, ArrowRight, ExternalLink, UserPlus } from "lucide-react";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";

import type { VCardItem } from "@/context/VCardsContextTypes";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

const DEFAULT_STATS = [
  { label: "Students", value: "50K+" },
  { label: "Courses", value: "200+" },
  { label: "Rating", value: "4.9" },
];

const DEFAULT_PROGRAMS = [
  {
    name: "Live Cohort Programs",
    description: "Guided batches with weekly live sessions and assignments.",
    duration: "6–12 weeks",
    icon: "",
  },
  {
    name: "Self‑paced Courses",
    description: "Watch anytime with lifetime access and updates.",
    duration: "On‑demand",
    icon: "",
  },
  {
    name: "1:1 Mentoring Calls",
    description: "Personalized career and portfolio feedback sessions.",
    duration: "30–60 mins",
    icon: "",
  },
];

const DEFAULT_TESTIMONIALS = [
  {
    name: "Product Manager, XYZ",
    quote:
      "The courses were practical and to the point. I could apply learnings at work from week one.",
    role: "Professional",
    image: ""
  },
  {
    name: "Frontend Developer, ABC",
    quote:
      "Clear explanations and great projects. The mentor calls helped me switch roles confidently.",
    role: "Developer",
    image: ""
  },
];

export function CafeVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "LearnHub Academy";
  const tagline =
    card.tagline || "Live & self‑paced courses for busy professionals.";
  const description =
    card.description ||
    "Join students learning from world‑class mentors. Upgrade your skills with practical, industry‑ready courses.";

  const stats =
    (card as any).stats && (card as any).stats.length >= 3
      ? (card as any).stats
      : DEFAULT_STATS;

  const programs =
    card.services && card.services.length > 0
      ? card.services
      : card.products && card.products.length > 0
      ? card.products
      : DEFAULT_PROGRAMS;

  const testimonials =
    (card.testimonials && card.testimonials.length > 0)
      ? card.testimonials
      : DEFAULT_TESTIMONIALS;

  const businessHours = card.businessHours;

  const websiteUrl =
    card.website && card.website.trim()
      ? card.website.trim().startsWith("http")
        ? card.website.trim()
        : `https://${card.website.trim()}`
      : undefined;

  return (
    <div className="min-h-screen bg-[#f0f1f3] flex justify-center px-4 py-6 sm:py-10">
      <div className="w-full max-w-[540px] rounded-[32px] bg-white shadow-2xl overflow-hidden">
        {/* 1. Premium Floral Hero */}
        <section className="relative bg-white overflow-visible pb-6">
          <div className="h-52 w-full relative overflow-hidden rounded-t-[32px]">
            <Image
              src="https://images.unsplash.com/photo-1507290439931-a861b5a38200?q=80&w=1000&auto=format&fit=crop"
              alt="Cover"
              fill
              className="object-cover opacity-95 scale-105"
              priority
            />
            <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/p6.png')] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white" />
          </div>

          <div className="relative z-20 px-8 -mt-20 sm:-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end gap-6">
              <div className="relative shrink-0 group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#1a5f6e]/20 to-rose-200/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-36 h-36 sm:w-44 sm:h-44 bg-white p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] rounded-2xl border border-white relative">
                  <div className="w-full h-full relative overflow-hidden bg-slate-50 rounded-xl">
                    {card.image ? (
                      <Image
                        src={card.image}
                        alt={name}
                        fill
                        className="object-cover"
                        unoptimized={card.image.startsWith("data:")}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl font-black text-[#1a5f6e]/20">
                        {name.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute -top-10 -left-10 w-28 h-28 pointer-events-none select-none drop-shadow-md">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#1a5f6e] opacity-[0.15] rotate-[15deg]">
                    <path d="M50 10 Q60 30 50 50 Q40 30 50 10" fill="currentColor" />
                    <path d="M10 50 Q30 40 50 50 Q30 60 10 50" fill="currentColor" />
                    <path d="M90 50 Q70 40 50 50 Q70 60 90 50" fill="currentColor" />
                    <circle cx="50" cy="50" r="5" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <div className="pt-4 sm:pb-4 flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1a5f6e]/5 rounded-full mb-3 no-print">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#1a5f6e]" />
                   <span className="text-[10px] font-black text-[#1a5f6e] uppercase tracking-[0.2em]">Verified Professional</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#1a5f6e] leading-[1.1] flex items-center justify-center sm:justify-start gap-2">
                  {name}
                  <span className="text-[#c5a47e] text-2xl animate-float">🍃</span>
                </h1>
                <p className="text-lg font-bold text-slate-800 tracking-tight mt-1.5 opacity-90">
                  {tagline}
                </p>
              </div>

              <div className="absolute right-0 top-0 opacity-[0.05] pointer-events-none select-none -mr-8 -mt-8 rotate-12 scale-150">
                 <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="#1a5f6e" strokeWidth="0.2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2v20M2 12h20" />
                    <path d="m19.07 4.93-14.14 14.14M4.93 4.93l14.14 14.14" />
                 </svg>
              </div>
            </div>

            <VCardSocialLinks 
                card={card} 
                layout="horizontal" 
                variant="circular" 
                iconSize={18}
                itemClassName="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#1a5f6e] hover:text-white transition-all duration-300"
                containerClassName="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-6 no-print w-full relative z-10"
            />

            <div className="mt-8 flex flex-wrap items-center gap-3 no-print">
              {['About', 'Work', 'Writing', 'Contact'].map((item) => (
                <button
                  key={item}
                  className="px-6 py-2 rounded-xl border border-slate-100 text-[11px] font-black text-slate-800 bg-slate-50 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  {item}
                </button>
              ))}
              <div className="ml-auto pl-4 border-l border-slate-200 h-8 flex items-center gap-2">
                  <div className="relative w-2 h-2">
                    <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping" />
                    <div className="absolute inset-0 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Live Now</span>
              </div>
            </div>

            <p className="mt-10 text-sm text-slate-600 leading-[1.8] font-medium max-w-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {stats.slice(0, 3).map((s: any, idx: number) => (
                <div
                  key={idx}
                  className="group flex items-center gap-2.5 rounded-2xl border border-slate-100 bg-white px-5 py-3 shadow-sm hover:shadow-md hover:border-[#1a5f6e]/20 transition-all duration-300"
                >
                  <span className="text-sm font-black text-[#1a5f6e] group-hover:scale-110 transition-transform">
                    {s.value ?? s}
                  </span>
                  <div className="w-px h-3 bg-slate-200" />
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    {s.label || s.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Contact Grid */}
        <section className="relative px-8 py-10 border-t border-slate-100/50 bg-[#fcfcfd]/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group flex items-center gap-4 p-5 rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#1a5f6e]/10 transition-all duration-500">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#1a5f6e]/5 flex items-center justify-center text-[#1a5f6e] group-hover:bg-[#1a5f6e] group-hover:text-white transition-all duration-500">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Email</p>
                <p className="text-xs font-black text-slate-900 break-all leading-tight">
                  {card.email || "jenny@gmail.com"}
                </p>
              </div>
            </div>
            <div className="group flex items-center gap-4 p-5 rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#1a5f6e]/10 transition-all duration-500">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#1a5f6e]/5 flex items-center justify-center text-[#1a5f6e] group-hover:bg-[#1a5f6e] group-hover:text-white transition-all duration-500">
                <Phone className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">WhatsApp</p>
                <p className="text-xs font-black text-slate-900 leading-tight">
                  {card.phone || "+1 1234567890"}
                </p>
              </div>
            </div>
            <div className="group flex items-center gap-4 p-5 rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#1a5f6e]/10 transition-all duration-500">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#1a5f6e]/5 flex items-center justify-center text-[#1a5f6e] group-hover:bg-[#1a5f6e] group-hover:text-white transition-all duration-500">
                <Cake className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Date of Birth</p>
                <p className="text-xs font-black text-slate-900 leading-tight">
                  {card.birthDate 
                    ? new Date(card.birthDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' }) 
                    : "12th March"}
                </p>
              </div>
            </div>
            <div className="group flex items-center gap-4 p-5 rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#1a5f6e]/10 transition-all duration-500">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#1a5f6e]/5 flex items-center justify-center text-[#1a5f6e] group-hover:bg-[#1a5f6e] group-hover:text-white transition-all duration-500">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Base Location</p>
                <p className="text-xs font-black text-slate-900 leading-tight line-clamp-2">
                  {card.address || "Berlin, Germany"}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none scale-[2]">
             <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 2 4 7 4 11s8 11 8 11s8-7 8-11s-8-9-8-9Z"/></svg>
          </div>
        </section>

        {/* 3. Visual Story Gallery - Professional 2x2 Grid */}
        <section className="px-8 py-16 bg-white border-t border-slate-100/50 relative overflow-hidden">
          <div className="flex flex-col items-center mb-16">
             <div className="text-[#1a5f6e] opacity-20 mb-4 scale-150">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
             </div>
             <div className="flex flex-col items-center text-center">
                <p className="text-[10px] font-black text-[#c5a47e] uppercase tracking-[0.4em] mb-4">The Collection</p>
                <h2 className="text-4xl font-serif font-black text-[#1a5f6e] tracking-tight">Visual Story</h2>
                <div className="w-12 h-1 bg-slate-100 rounded-full mt-6" />
             </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative aspect-[4/5] rounded-[32px] overflow-hidden bg-slate-50 border-8 border-[#f8f9fa] shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:border-white">
                <Image
                  src={i === 1 
                    ? "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600&auto=format&fit=crop" 
                    : i === 2 
                    ? "https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=600&auto=format&fit=crop" 
                    : i === 3
                    ? "https://images.unsplash.com/photo-1490750916424-8b897fdc213e?q=80&w=600&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop"}
                  alt="Gallery"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-12 pb-4">
            {[0, 1, 2].map(idx => (
              <div key={idx} className={`h-1 rounded-full transition-all duration-500 ${idx === 0 ? 'bg-[#1a5f6e] w-8' : 'bg-slate-200 w-2'}`} />
            ))}
          </div>
        </section>

        {/* 4. Professional Services */}
        <section className="px-8 py-16 bg-[#f8f9fa] border-t border-slate-100/50 relative overflow-hidden">
          <div className="absolute top-10 right-0 text-[#1a5f6e]/5 -mr-20 pointer-events-none select-none">
             <h3 className="text-[120px] font-serif font-black leading-none opacity-20">Lux</h3>
          </div>

          <div className="flex flex-col items-center mb-12 relative z-10">
             <p className="text-[10px] font-black text-[#1a5f6e] uppercase tracking-[0.4em] mb-4">Exquisite Selection</p>
             <h2 className="text-4xl font-serif font-black text-slate-900 tracking-tight text-center">Professional Services</h2>
             <div className="w-16 h-1.5 bg-[#1a5f6e] rounded-full mt-6" />
          </div>

          <div className="flex overflow-x-auto gap-8 pb-10 snap-x -mx-4 px-4 no-scrollbar">
            {programs.map((p: any, idx: number) => (
              <div key={idx} className="shrink-0 w-[280px] snap-center rounded-[32px] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-2xl hover:border-[#1a5f6e]/10">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={p.icon || "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=400&auto=format&fit=crop"}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-black text-slate-900 leading-tight group-hover:text-[#1a5f6e] transition-colors">{p.name || p.title || "Elite Experience"}</h3>
                  <p className="mt-3 text-xs text-slate-400 leading-[1.6] line-clamp-3 font-medium">
                    {p.description || "Crafting moments of beauty and professionalism through our dedicated service excellence."}
                  </p>
                  <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-sm font-black text-slate-900">
                      {(p.currency && p.price) ? `${p.currency}${p.price}` : "Premium"}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#1a5f6e] group-hover:bg-[#1a5f6e] group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2">
            {[0, 1, 2].map(idx => (
              <div key={idx} className={`h-1 rounded-full transition-all duration-500 ${idx === 0 ? 'bg-slate-900 w-8' : 'bg-slate-200 w-2'}`} />
            ))}
          </div>
        </section>

        {/* 5. Appointment Section */}
        <section className="relative min-h-[520px] border-t border-slate-100/50 overflow-hidden group">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop" 
              alt="Booking Background" 
              fill 
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[3s]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a5f6e]/70 to-[#1a5f6e]/90 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 px-8 py-16 flex flex-col items-center text-center">
             <p className="text-[10px] font-black text-rose-200 uppercase tracking-[0.4em] mb-4">Availability</p>
             <h2 className="text-4xl font-serif font-black text-white tracking-tight mb-12">Book an Appointment</h2>

             <div className="w-full max-w-sm space-y-8">
                <div className="space-y-3 text-left">
                  <label className="text-[11px] font-black text-rose-100 uppercase tracking-widest pl-1">Selected Date</label>
                  <div className="relative group/input">
                     <div className="w-full h-16 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-6 flex items-center text-white text-sm font-bold shadow-2xl transition-all group-hover/input:bg-white/15">
                       Tuesday, 24th March
                     </div>
                     <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-rose-200" />
                  </div>
                </div>

                <div className="space-y-4 text-left">
                  <label className="text-[11px] font-black text-rose-100 uppercase tracking-widest pl-1">Available Slots</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['09:00 AM', '11:00 AM', '02:00 PM', '04:30 PM'].map((time, i) => (
                      <button key={i} className={`h-12 rounded-xl border border-white/10 backdrop-blur-md text-[11px] font-bold transition-all ${i === 1 ? 'bg-white text-[#1a5f6e] border-white shadow-xl' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full h-16 rounded-2xl bg-[#c5a47e] text-white font-black text-sm tracking-widest shadow-[0_20px_40px_rgba(197,164,126,0.3)] hover:bg-[#b4936d] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 uppercase">
                  Confirm Booking
                </button>
             </div>
          </div>

          <div className="absolute top-0 right-0 w-48 h-48 text-white/5 pointer-events-none select-none -mr-12 -mt-12">
             <svg width="100%" height="100%" viewBox="0 0 100 100" fill="currentColor"><circle cx="100" cy="0" r="100" /></svg>
          </div>
        </section>

        {/* 6. Featured Products */}
        <section className="px-8 py-16 bg-white border-t border-slate-100/50 relative overflow-hidden">
          <div className="flex flex-col items-center mb-12 relative z-10">
             <p className="text-[10px] font-black text-[#1a5f6e] uppercase tracking-[0.4em] mb-4">The Collection</p>
             <h2 className="text-4xl font-serif font-black text-slate-900 tracking-tight text-center">Featured Products</h2>
             <div className="w-16 h-1 bg-rose-200 rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {(card.products && card.products.length > 0 ? card.products : [1, 2, 3, 4]).slice(0, 4).map((p: any, idx: number) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-square w-full rounded-[32px] overflow-hidden bg-slate-50 border border-slate-100 shadow-sm transition-all duration-700 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
                  <Image
                    src={p.icon || "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=400&auto=format&fit=crop"}
                    alt={p.name || "Product"}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="mt-5 px-1">
                   <div className="flex justify-between items-center mb-1">
                     <h3 className="text-sm font-black text-slate-900 group-hover:text-[#1a5f6e] transition-colors">{p.name || "Signature Item"}</h3>
                     <span className="text-sm font-black text-[#1a5f6e]">
                        {(p.currency && p.price) ? `${p.currency}${p.price}` : "$45"}
                     </span>
                   </div>
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">In Stock</p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-10 right-0 text-[#c5a47e] opacity-[0.08] pointer-events-none -mr-12 scale-[2]">
             <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 2 4 7 4 11s8 11 8 11s8-7 8-11s-8-9-8-9Z"/></svg>
          </div>
        </section>

        {/* 7. Client Satisfaction */}
        <section className="px-8 py-20 bg-[#1a5f6e] relative overflow-hidden">
          <div className="flex flex-col items-center mb-16 relative z-10 text-center">
             <p className="text-[10px] font-black text-rose-200 uppercase tracking-[0.4em] mb-4">Recognition</p>
             <h2 className="text-4xl font-serif font-black text-white tracking-tight">Client Satisfaction</h2>
             <div className="w-12 h-1 bg-white/20 rounded-full mt-6" />
          </div>

          <div className="relative z-10 max-w-sm mx-auto">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 pt-12 shadow-2xl rounded-[40px] relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="w-20 h-20 rounded-full border-4 border-[#1a5f6e] overflow-hidden shadow-xl ring-4 ring-white/10">
                   <Image 
                     src={testimonials[0]?.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"} 
                     alt="User" 
                     width={80} 
                     height={80} 
                     className="object-cover"
                   />
                </div>
              </div>
              <div className="text-white/20 absolute top-8 left-8 scale-[2]">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H3.017V21H5.017Z" /></svg>
              </div>
              <div className="text-center space-y-6">
                 <p className="text-sm text-white/90 font-medium leading-[1.8] italic">
                   "{testimonials[0]?.quote || "The attention to detail and commitment to quality is truly exceptional. Highly recommended for any professional needs."}"
                 </p>
                 <div>
                    <h3 className="text-lg font-black text-white">{testimonials[0]?.name || "Anonymous Client"}</h3>
                    <p className="text-[10px] font-black text-rose-200 uppercase tracking-widest mt-1 opacity-80">
                      - {testimonials[0]?.role || "Verified Customer"}
                    </p>
                 </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none select-none">
             <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-[120px]" />
          </div>
        </section>

        {/* 8. Editorial Insights */}
        <section className="px-8 py-20 bg-white border-t border-slate-100/50 relative overflow-hidden">
          <div className="flex flex-col items-center mb-16 relative z-10">
             <p className="text-[10px] font-black text-[#1a5f6e] uppercase tracking-[0.4em] mb-4">Latest Stories</p>
             <h2 className="text-4xl font-serif font-black text-slate-900 tracking-tight text-center">Editorial Insights</h2>
             <div className="w-24 h-[2px] bg-slate-100 mt-6" />
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-[#fcfcfd] rounded-[48px] -rotate-1 transition-transform group-hover:rotate-1 duration-700" />
            <div className="relative flex flex-col sm:flex-row gap-10 p-4">
              <div className="flex-1 space-y-6 flex flex-col justify-center order-2 sm:order-1">
                 <div className="inline-flex items-center gap-2 text-[10px] font-black text-[#1a5f6e] uppercase tracking-widest">
                    <span>{card.date ? new Date(card.date).toLocaleDateString() : "Mar 24, 2026"}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>Inspiration</span>
                 </div>
                 <h3 className="text-3xl font-serif font-black text-slate-900 leading-tight">
                   {card.blogs?.[0]?.title || "The Art of High-Performance Professionalism"}
                 </h3>
                 <p className="text-sm text-slate-500 leading-relaxed font-medium">
                   {card.blogs?.[0]?.description || "Explore the intersection of efficiency and aesthetics in modern business environments. A curated guide to excellence..."}
                 </p>
                 <div className="pt-4 flex items-center gap-6">
                   <button className="text-xs font-black text-slate-900 uppercase tracking-widest border-b-2 border-[#1a5f6e] pb-1 hover:text-[#1a5f6e] transition-colors">
                     Read Full Story
                   </button>
                   <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all">
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                   </div>
                 </div>
              </div>
              <div className="w-full sm:w-[240px] shrink-0 order-1 sm:order-2">
                 <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-2 transition-transform duration-700">
                   <Image
                     src={card.blogs?.[0]?.icon || "https://images.unsplash.com/photo-1490750916424-8b897fdc213e?q=80&w=600&auto=format&fit=crop"}
                     alt="Blog"
                     fill
                     className="object-cover"
                   />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Business Hours */}
        <section className="px-8 py-20 bg-[#f8f9fa] border-t border-slate-100/50 relative overflow-hidden">
          <div className="flex flex-col items-center mb-16 relative z-10">
             <p className="text-[10px] font-black text-[#1a5f6e] uppercase tracking-[0.4em] mb-4">Availability</p>
             <h2 className="text-4xl font-serif font-black text-slate-900 tracking-tight text-center">Business Hours</h2>
             <div className="w-16 h-1.5 bg-[#c5a47e] rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-2xl mx-auto">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => {
              const hours = businessHours?.[day.toLowerCase()];
              const isOpen = hours && hours.enabled;
              
              return (
                <div key={day} className="group flex items-center justify-between py-4 border-b border-slate-100 hover:border-[#1a5f6e]/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-widest">{day}</span>
                  </div>
                  <span className={`text-[11px] font-black tracking-wider ${isOpen ? 'text-[#1a5f6e]' : 'text-slate-300 uppercase'}`}>
                    {isOpen ? `${hours.start} - ${hours.end}` : "Closed"}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1a5f6e]/5 pointer-events-none select-none scale-[3]">
             <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.1">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
             </svg>
          </div>
        </section>

        {/* 10. QR Code */}
        <section className="px-8 py-16 bg-white border-t border-slate-100/50 relative overflow-hidden">
          <div className="flex items-center justify-center gap-4 mb-16">
             <div className="h-0.5 bg-slate-900 flex-1 max-w-[80px]" />
             <h2 className="text-2xl font-black text-[#1a5f6e] tracking-tight text-center">Connection</h2>
             <div className="h-0.5 bg-slate-900 flex-1 max-w-[80px]" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-10">
            <div className="relative w-full sm:w-1/2 h-48 opacity-40 pointer-events-none select-none">
              <Image 
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=400&auto=format&fit=crop" 
                alt="Decoration" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col items-center gap-8">
               <div className="relative w-44 h-44 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-slate-50 rounded-2xl">
                  <Image 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${baseUrl}/${slug}`} 
                    alt="QR Code" 
                    fill 
                    className="object-contain p-2"
                    unoptimized
                  />
               </div>
               <button className="w-full h-12 rounded-xl bg-[#1a5f6e] text-white text-[11px] font-black tracking-widest shadow-xl hover:bg-[#134954] transition-all uppercase">
                 Download My QR
               </button>
            </div>
          </div>
        </section>

        {/* 11. Contact Us */}
        <section className="px-8 py-20 bg-[#f8f9fa] border-t border-slate-100/50 relative overflow-hidden">
          <div className="flex flex-col items-center mb-16 relative z-10">
             <p className="text-[10px] font-black text-[#1a5f6e] uppercase tracking-[0.4em] mb-4">Inquiry</p>
             <h2 className="text-4xl font-serif font-black text-slate-900 tracking-tight text-center">Get in Touch</h2>
             <div className="w-16 h-1.5 bg-rose-200 rounded-full mt-6" />
          </div>

          <div className="space-y-4 relative z-10 max-w-sm mx-auto">
            <input type="text" placeholder="Full Name" className="w-full h-16 rounded-2xl bg-white border border-slate-100 px-6 text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-[#1a5f6e] focus:border-transparent transition-all shadow-sm" />
            <input type="email" placeholder="Email Address" className="w-full h-16 rounded-2xl bg-white border border-slate-100 px-6 text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-[#1a5f6e] focus:border-transparent transition-all shadow-sm" />
            <textarea placeholder="Your Message" rows={4} className="w-full rounded-2xl bg-white border border-slate-100 px-6 py-5 text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-[#1a5f6e] focus:border-transparent transition-all shadow-sm resize-none" />
            <button className="w-full h-16 rounded-2xl bg-[#1a5f6e] text-white font-black text-sm tracking-widest shadow-2xl hover:bg-[#134954] hover:-translate-y-1 transition-all duration-300 uppercase">
              Send Message
            </button>
          </div>
        </section>

        {/* 12. URL Banner */}
        <section className="relative px-8 py-16 text-center border-t border-slate-100/50 overflow-hidden">
           <div className="absolute inset-0 z-0">
             <Image 
               src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop" 
               alt="Banner" 
               fill 
               className="object-cover blur-xl opacity-30 brightness-150"
             />
           </div>
           
           <div className="relative z-10 space-y-8">
             <h2 className="text-3xl font-serif font-black text-slate-900 tracking-tight">Claim Your Presence</h2>
             <div className="max-w-md mx-auto h-20 rounded-[32px] bg-white/40 backdrop-blur-3xl border border-white/50 shadow-2xl flex items-center px-4">
                <div className="flex-1 bg-white/80 h-12 rounded-2xl flex items-center px-6 text-sm font-black text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap">
                   {baseUrl}/{slug}
                </div>
                <button className="ml-3 w-12 h-12 rounded-2xl bg-[#1a5f6e] text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
                   <ExternalLink className="w-5 h-5" />
                </button>
             </div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Designed by learnhub academy</p>
           </div>
        </section>

        {/* 13. Dynamic Content Fallback */}
        <VCardDynamicSections card={card} exclude={['testimonials']} />

        {/* 14. Floral Footer */}
        <section className="relative h-48 w-full overflow-hidden pointer-events-none select-none">
          <Image 
            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop" 
            alt="Floral Footer" 
            fill 
            className="object-cover object-bottom opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/20" />
        </section>
      </div>
    </div>
  );
}
