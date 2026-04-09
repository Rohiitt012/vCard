import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Mail, Phone, MapPin, Globe2, Cake, Calendar, Quote,
  ArrowRight, ExternalLink, UserPlus,
  Play, CheckCircle2, LayoutGrid, Upload,
  Facebook, Linkedin, Instagram, Twitter, Youtube, MessageCircle,
  Gem, Award, Sparkles, Building2
} from "lucide-react";

import { generateQrDataUrl } from "@/lib/qr";
import type { VCardItem } from "@/context/VCardsContextTypes";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function PropertyVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [qrDataUrl, setQrDataUrl] = useState("");

  useEffect(() => {
    if (!slug) return;
    const url = `${baseUrl}/${slug}`;
    generateQrDataUrl(url).then(setQrDataUrl);
  }, [slug, baseUrl]);

  const name = card.title || "Urban Nest Paradise";
  const role = card.occupation || card.tagline || "Property Consultant • Investor";
  const tagline = card.tagline || "Where The City Meets The Skyline. (Urban)";

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center py-12 px-4 font-sans selection:bg-[#B48B47]/30 relative overflow-hidden">
      {/* Background Decorative Elements - Lighter version */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#B48B47]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-[520px] bg-white rounded-[60px] shadow-[0_48px_120px_-20px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col relative border border-white/20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
        
        {/* 1. Header Navigation - Premium Slim */}
        <nav className="px-10 py-5 flex items-center justify-between bg-white/90 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100">
          <div className="flex items-center gap-3 group cursor-pointer">
             <div className="w-12 h-12 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:rotate-6 transition-transform">
                <Building2 size={24} className="text-[#B48B47]" />
             </div>
             <div className="flex flex-col">
                <span className="text-[15px] font-black text-[#0F172A] leading-none uppercase tracking-[-0.05em]">PRISTINE</span>
                <span className="text-[11px] font-bold text-[#B48B47] uppercase tracking-[0.3em] leading-tight">ESTATES</span>
             </div>
          </div>
          <div className="bg-[#B48B47]/5 text-[#B48B47] px-4 py-2 rounded-2xl text-[10px] font-black flex items-center gap-2 border border-[#B48B47]/10 hover:bg-[#B48B47]/10 transition-colors cursor-pointer">
             <Gem size={12} />
             PREMIUM ACCESS
          </div>
        </nav>

        {/* 2. Experimental Hero Section */}
        <section className="relative aspect-[4/3] w-full group overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600585157388-cc7d6a3199c0?q=80&w=1200&auto=format&fit=crop"
            alt="Luxury Villa"
            fill
            className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          
          {/* Floating Agent Card Overlay */}
          <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-2xl p-6 rounded-[32px] border border-white/20 shadow-2xl flex items-center gap-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
             <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#B48B47]/50">
                <Image 
                  src={card.image || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400"} 
                  alt="Agent" 
                  fill 
                  className="object-cover"
                  unoptimized
                />
             </div>
             <div className="flex-1">
                <h4 className="text-white font-black text-lg tracking-tight">{card.title || "Agent Profile"}</h4>
                <p className="text-[#B48B47] text-xs font-bold uppercase tracking-widest">{role}</p>
             </div>
             <div className="w-10 h-10 bg-[#B48B47] rounded-full flex items-center justify-center text-white hover:rotate-90 transition-transform cursor-pointer">
                <ArrowRight size={20} />
             </div>
          </div>

          <div className="absolute top-6 right-6">
             <span className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-[10px] font-black border border-white/20">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                LIVE VIEWING
             </span>
          </div>
        </section>

        {/* 3. Identity Banner - Suspended Glass Light */}
        <section className="px-8 -mt-20 relative z-20">
           <div className="bg-white rounded-[40px] p-8 shadow-[0_64px_96px_-24px_rgba(15,23,42,0.15)] border border-slate-100 relative overflow-hidden group">
              {/* Animated Accent Light */}
              <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-[#B48B47] rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity" />

              <div className="flex flex-col sm:flex-row items-center gap-8 relative z-10">
                 {/* Premium Logo Ring */}
                 <div className="relative shrink-0 w-32 h-32">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#B48B47]/30 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-white to-slate-50 border-[4px] border-[#B48B47] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(180,139,71,0.1)]">
                       <LayoutGrid className="text-[#B48B47] mb-1" size={32} strokeWidth={2.5} />
                       <div className="w-10 h-[2px] bg-[#B48B47] rounded-full" />
                       <span className="text-[8px] font-black text-[#0F172A] uppercase tracking-[0.4em] mt-1">PRIME</span>
                    </div>
                 </div>

                 <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                       <h1 className="text-3xl font-black text-[#0F172A] tracking-tighter">{card.title || "Urban Nest"}</h1>
                       <div className="w-6 h-6 bg-[#B48B47] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(180,139,71,0.4)]">
                          <CheckCircle2 size={14} className="text-white" strokeWidth={3} />
                       </div>
                    </div>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                       <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[10px] font-black text-[#B48B47] uppercase tracking-widest">{card.company || "Luxury Real Estate"}</span>
                       <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Partner</span>
                    </div>
                    <p className="text-xs font-medium text-slate-500 leading-relaxed italic border-l-2 border-[#B48B47] pl-3">
                       "{tagline}"
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Connection Grid - Modern Tile-based */}
        <section className="px-10 pt-20 pb-16">
           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
              {[
                { icon: Facebook, color: "#1877F2", label: "Facebook" },
                { icon: Twitter, color: "#1DA1F2", label: "X.com" },
                { icon: Youtube, color: "#FF0000", label: "Youtube" },
                { icon: MessageCircle, color: "#25D366", label: "WhatsApp" }
              ].map((social, i) => (
                <div key={i} className="group cursor-pointer">
                   <div className="aspect-square rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col items-center justify-center gap-3 transition-all hover:bg-white hover:shadow-2xl hover:translate-y-[-8px]">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xl rotate-[-4deg] group-hover:rotate-0 transition-transform" style={{ backgroundColor: social.color }}>
                         <social.icon size={22} fill="currentColor" />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{social.label}</span>
                   </div>
                </div>
              ))}
           </div>

           <div className="flex flex-col gap-5">
              <button 
                onClick={onDownloadVCard}
                className="group relative h-18 w-full overflow-hidden rounded-3xl bg-[#0F172A] text-white font-black text-lg shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.02] active:scale-95"
              >
                 <div className="absolute inset-x-0 bottom-0 h-1 bg-[#B48B47] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                 <div className="flex items-center justify-center gap-3 h-16">
                    <UserPlus size={24} className="text-[#B48B47]" />
                    SAVE TO CONTACTS
                    <Sparkles size={20} className="text-[#B48B47] animate-pulse" />
                 </div>
              </button>

              <div className="flex items-center justify-between px-2 pt-4">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00A99D]/10 flex items-center justify-center text-[#00A99D]">
                       <Award size={20} />
                    </div>
                    <div>
                       <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Certificated By</p>
                       <p className="text-[11px] font-black text-[#0F172A]">ROYAL PROPERTY BOARD</p>
                    </div>
                 </div>
                 <div className="flex -space-x-3">
                     {[
                       "1534528741775-53994a69daeb",
                       "1507003211169-0a1dd7228f2d",
                       "1544005313-94ddf0286df2"
                     ].map((id, i) => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-white relative overflow-hidden shadow-md">
                          <Image 
                            src={`https://images.unsplash.com/photo-${id}?q=80&w=100&h=100&auto=format&fit=crop`} 
                            alt="Trusted User" 
                            fill 
                            className="object-cover" 
                            unoptimized
                          />
                       </div>
                     ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-[#B48B47] flex items-center justify-center text-[10px] font-black text-white shadow-md">+12</div>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. Details Section - Luxurious Contrast */}
        <section className="px-8 py-20 space-y-8 relative z-10">
           <div className="p-8 rounded-[48px] bg-slate-50 border border-slate-100 relative overflow-hidden group hover:bg-white hover:shadow-2xl transition-all">
              <div className="absolute top-4 right-8 text-[#B48B47]/10 group-hover:text-[#B48B47]/20 transition-colors">
                 <MapPin size={100} strokeWidth={1} />
              </div>
              <div className="relative z-10 flex flex-col gap-6">
                 <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#B48B47]/10 text-[#B48B47] text-[10px] font-black tracking-widest mb-4">HEADQUARTERS</span>
                    <h5 className="text-2xl font-black text-[#0F172A] leading-tight">
                       {card.address || "Empire State Tower, Sky Level 112"}
                    </h5>
                 </div>
                 <div className="flex items-center gap-4 py-2 border-t border-slate-200">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#B48B47]">
                       <Globe2 size={24} />
                    </div>
                    <p className="text-sm font-bold text-slate-600 break-all">{card.website || "www.pristineestates.global"}</p>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Mail, label: "Official Email", value: card.email || "partner@pristine.com", theme: "#0F172A" },
                { icon: Phone, label: "Secured Line", value: card.phone || "+1 888 LUXURY", theme: "#B48B47" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-[36px] border border-slate-100 bg-white flex flex-col gap-4 shadow-sm hover:shadow-xl transition-all">
                   <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-black/5" style={{ backgroundColor: item.theme }}>
                      <item.icon size={22} />
                   </div>
                   <div>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                      <p className="text-[13px] font-black text-[#0F172A] break-all">{item.value}</p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 6. Gallery - Cinematic Presentation Light */}
        <section className="px-8 py-20 relative z-10">
           <div className="text-center mb-16">
              <span className="text-[10px] font-black text-[#B48B47] uppercase tracking-[0.6em] mb-4 block underline underline-offset-8">PORTFOLIO EXHIBITION</span>
              <h3 className="text-4xl font-black text-[#0F172A] px-4 tracking-tighter">
                 Exclusive Gallery
              </h3>
              <div className="w-20 h-1.5 bg-gradient-to-r from-transparent via-[#B48B47] to-transparent mx-auto mt-6 rounded-full" />
           </div>

           <div className="relative group p-2 border border-slate-100 rounded-[48px] overflow-hidden bg-slate-50">
              <div className="relative aspect-[16/10] rounded-[42px] overflow-hidden shadow-2xl">
                 {(card.galleries && card.galleries.length > 0 ? card.galleries.slice(0, 1) : [{ imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800" }]).map((item: any, idx: number) => (
                    <Image 
                       key={idx}
                       src={item.imageUrl || "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800"} 
                       alt="Portfolio" 
                       fill 
                       className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                       unoptimized
                    />
                 ))}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                    <div className="flex items-center justify-between w-full">
                       <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-white font-black text-xl">The Aurora Residency</p>
                          <p className="text-[#B48B47] text-xs font-bold uppercase tracking-widest">Iconic Architecture</p>
                       </div>
                       <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#0F172A] shadow-white/20 shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                          <LayoutGrid size={24} />
                       </button>
                    </div>
                 </div>
              </div>
           </div>

           <div className="flex justify-center gap-3 mt-12">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === 0 ? 'w-10 bg-[#B48B47]' : 'w-3 bg-white/20'}`} />
              ))}
           </div>
        </section>

        {/* 7. Services - Premium Feature Cards */}
        <section className="px-8 py-24 bg-white">
           <div className="flex items-end justify-between mb-20 px-4">
              <div className="text-left">
                 <span className="text-[10px] font-black text-[#B48B47] uppercase tracking-[0.4em] mb-4 block underline underline-offset-8">OUR SERVICE</span>
                 <h3 className="text-4xl font-black text-[#0F172A] tracking-tighter">What We Handle</h3>
              </div>
              <div className="hidden sm:flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                 <span className="text-[10px] font-black text-slate-400">FILTER SERVICE</span>
                 <ArrowRight size={14} className="rotate-90 text-[#B48B47]" />
              </div>
           </div>

           <div className="space-y-8">
              {(card.services && card.services.length > 0 ? card.services : [
                 { 
                   name: "Private Concierge", 
                   description: "Bespoke property scouting for high-net-worth investors requiring total discretion.",
                   image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400"
                 },
                 { 
                   name: "Asset Optimization", 
                   description: "Strategic portfolio management aimed at maximizing rental yields and capital gains.",
                   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400"
                 }
              ]).map((svc: any, idx: number) => (
                <div key={idx} className="group relative bg-slate-50 rounded-[48px] p-4 border border-slate-100 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all flex flex-col sm:flex-row items-center gap-8">
                   <div className="relative w-full sm:w-48 aspect-square rounded-[36px] overflow-hidden shrink-0 shadow-2xl shadow-black/10">
                      <Image 
                        src={svc.image || svc.icon || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400"} 
                        alt={svc.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        unoptimized
                      />
                   </div>
                   <div className="flex-1 text-center sm:text-left py-4 sm:pr-8">
                      <h4 className="text-2xl font-black text-[#0F172A] mb-3">{svc.name}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{svc.description}</p>
                      <button className="mt-6 flex items-center gap-2 text-[#B48B47] text-xs font-black uppercase tracking-widest hover:translate-x-2 transition-transform">
                         DETAILS <ArrowRight size={14} />
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 8. Featured Products - Luxury Grid */}
        <section className="px-8 py-24 bg-slate-50">
           <div className="text-center mb-20">
              <span className="text-[10px] font-black text-[#B48B47] uppercase tracking-[0.4em] mb-4 block">COLLECTION 2024</span>
              <h3 className="text-4xl font-black text-[#0F172A] tracking-tighter">Curated Assets</h3>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                 {["Penthouse", "Villa", "Commercial"].map(t => (
                   <span key={t} className="px-5 py-2 rounded-full bg-white text-[10px] font-black text-slate-500 border border-slate-200 select-none">{t}</span>
                 ))}
              </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {(card.products && card.products.length > 0 ? card.products : [
                 { 
                   name: "Palazzo del Mare", 
                   price: "8.5M", 
                   image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=400"
                 },
                 { 
                   name: "The Zenith SkyLoft", 
                   price: "4.2M", 
                   image: "https://images.unsplash.com/photo-1556912177-c54030639a60?q=80&w=400"
                 }
              ]).map((prod: any, idx: number) => (
                <div key={idx} className="group flex flex-col gap-5">
                   <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl transition-transform hover:translate-y-[-10px]">
                      <Image 
                        src={prod.image || prod.icon || "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=400"} 
                        alt={prod.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                        unoptimized
                      />
                      <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/30">
                         <p className="text-white font-black text-lg">₹ {prod.price}</p>
                      </div>
                      <div className="absolute inset-x-4 bottom-4 bg-[#0F172A]/90 backdrop-blur-md p-6 rounded-[36px] border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                         <h4 className="text-white font-black text-lg mb-1">{prod.name}</h4>
                         <button className="w-full py-3 bg-[#B48B47] rounded-2xl text-white font-black text-xs uppercase tracking-widest mt-2 hover:bg-[#A37A3B] transition-colors">
                            RESERVE UNIT
                         </button>
                      </div>
                   </div>
                   <div className="text-center">
                      <h4 className="text-lg font-black text-[#0F172A] tracking-tight">{prod.name}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">AVAILABLE EXCLUSIVELY</p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 9. Testimonials - Floating Bubble Style */}
        <section className="px-8 py-24 bg-white relative overflow-hidden">
           <div className="absolute bottom-[-10%] right-[-5%] text-slate-50 select-none">
              <Quote size={300} fill="currentColor" />
           </div>

           <div className="relative z-10">
              <div className="flex flex-col items-center text-center">
                 <div className="w-24 h-24 rounded-[36px] bg-[#B48B47] rotate-[15deg] group mb-10 overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Image 
                       src={card.testimonials?.[0]?.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"} 
                       alt="Author" 
                       fill
                       className="object-cover -rotate-[15deg] scale-125"
                       unoptimized
                    />
                 </div>
                 
                 <Quote className="text-[#B48B47] mb-8" size={48} />
                 
                 <p className="text-[#0F172A] text-2xl font-black italic leading-[1.4] tracking-tight px-6 mb-12">
                   "{card.testimonials?.[0]?.quote || "The attention to detail and market insight provided was unparalleled. A truly royal experience."}"
                 </p>

                 <div className="bg-[#0F172A] text-white py-4 px-10 rounded-full shadow-2xl shadow-black/20">
                    <h4 className="text-lg font-black tracking-tight">{card.testimonials?.[0]?.name || "Julian Vance"}</h4>
                    <p className="text-[#B48B47] text-[10px] font-bold uppercase tracking-[0.3em]">{card.testimonials?.[0]?.role || "CEO, VANCE CAPITALS"}</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 10. Scheduling & QR Combo */}
        <section className="px-8 py-24 bg-slate-50">
           <div className="grid grid-cols-1 gap-12">
              {/* QR Premium Card */}
              <div className="bg-white rounded-[56px] p-10 border border-slate-100 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.08)] flex flex-col items-center text-center">
                 <div className="relative group mb-10">
                    <div className="absolute inset-[-20px] rounded-full border border-dashed border-[#B48B47]/30 animate-[spin_30s_linear_infinite]" />
                    <div className="relative w-48 h-48 bg-white p-5 rounded-[40px] shadow-2xl flex items-center justify-center border border-slate-100">
                       {qrDataUrl ? (
                          <Image src={qrDataUrl} alt="QR Code" width={160} height={160} className="w-full h-full" unoptimized />
                       ) : (
                          <div className="w-full h-full bg-slate-50 animate-pulse rounded-3xl" />
                       )}
                    </div>
                 </div>
                 <h4 className="text-2xl font-black text-[#0F172A] mb-4">Express Digital Sync</h4>
                 <p className="text-sm text-slate-500 max-w-[280px] font-medium leading-relaxed">
                    Scan to instantly integrate this profile into your professional network ecosystem.
                 </p>
                 <button className="mt-10 px-10 py-5 bg-[#0F172A] rounded-3xl text-white font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-transform flex items-center gap-3">
                    <Sparkles size={20} className="text-[#B48B47]" />
                    GENERATE NEW CODE
                 </button>
              </div>

              {/* Inquiry Modern Form */}
              <div className="space-y-6">
                 <div className="text-center mb-12">
                    <span className="text-[10px] font-black text-[#B48B47] uppercase tracking-[0.4em] mb-4 block">DIRECT INQUIRY</span>
                    <h3 className="text-3xl font-black text-[#0F172A]">Get Priority Response</h3>
                 </div>
                 <div className="bg-white p-10 rounded-[56px] shadow-[0_32px_64px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
                    <div className="space-y-4">
                       {[
                         { placeholder: "Full Name", type: "text" },
                         { placeholder: "Email Address", type: "email" },
                         { placeholder: "Subject of Interest", type: "text" }
                       ].map((f, i) => (
                         <input 
                           key={i}
                           type={f.type}
                           placeholder={f.placeholder}
                           className="w-full h-16 bg-slate-50 border border-slate-100 rounded-2xl px-6 text-[#0F172A] text-sm focus:border-[#B48B47] transition-all outline-none"
                         />
                       ))}
                       <textarea 
                          placeholder="Your Message..." 
                          rows={4}
                          className="w-full bg-slate-50 border border-slate-100 rounded-3xl p-6 text-[#0F172A] text-sm focus:border-[#B48B47] transition-all outline-none resize-none"
                       />
                       <button className="w-full h-20 bg-[#B48B47] rounded-3xl text-white font-black text-xl shadow-2xl shadow-[#B48B47]/20 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-3 mt-4">
                          SEND SECURELY
                          <ArrowRight size={24} />
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Footer - Elegant Finish */}
        <footer className="px-10 py-16 bg-white flex flex-col items-center gap-10">
           <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B48B47]" />
              <div className="w-10 h-px bg-slate-200" />
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.6em] px-4">THE PRISTINE IDENTITY</span>
              <div className="w-10 h-px bg-slate-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#B48B47]" />
           </div>
           
           <div className="flex flex-col items-center text-center gap-2 opacity-40">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Digital Asset Management © 2024</p>
              <div className="flex gap-4">
                 {["Privacy", "Terms", "Support"].map(l => (
                   <span key={l} className="text-[9px] font-black text-[#0F172A] cursor-pointer hover:text-[#B48B47] transition-colors">{l}</span>
                 ))}
              </div>
           </div>
        </footer>
      </div>
    </div>
  );
}
