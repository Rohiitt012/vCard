"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { 
  Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, 
  MessageCircle, ChevronDown, LayoutGrid, User, Sparkles, Globe, 
  ArrowRight, Clock, Star, Home, Key, Shield, Award, Send,
  Briefcase, TrendingUp, Users, Building2, Calendar, CheckCircle2
} from "lucide-react";
import { generateQrDataUrl } from "@/lib/qr";
import { getSocialIcon } from "@/lib/social-icons";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function Temp26VCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [qrCode, setQrCode] = useState<string>("");

  useEffect(() => {
    const url = `${baseUrl}/${slug}`;
    generateQrDataUrl(url).then(setQrCode);
  }, [baseUrl, slug]);

  const name = card.title || "Julian Vane";
  const role = card.occupation || card.tagline || "Luxury Estate Consultant";
  const company = "Vane & Co. Global Properties";

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans flex justify-center py-0 px-0 sm:py-12 overflow-x-hidden relative">
      
      {/* WATERMARK BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-[0.03]">
           <h1 className="text-[30vw] font-black text-white leading-none whitespace-nowrap rotate-90 translate-x-1/2">ESTATE</h1>
           <h1 className="text-[30vw] font-black text-white leading-none whitespace-nowrap -rotate-90 -translate-x-1/2 mt-[50vh]">LUXURY</h1>
      </div>

      <div className="w-full max-w-[580px] bg-[#0F172A] relative flex flex-col shadow-[0_100px_200px_-50px_rgba(0,0,0,0.8)] overflow-hidden sm:rounded-[40px] border border-white/10">
        
        {/* HERO SECTION */}
        <section className="relative h-[550px] overflow-hidden">
             <Image 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" 
                  alt="Luxury Property" fill className="object-cover scale-110 brightness-75" unoptimized={true} 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
             
             <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-20">
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                       <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/80">Premium Partner</span>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-[#EAB308] text-[#0F172A] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
                       <Award size={24} strokeWidth={2.5} />
                  </button>
             </div>

             <div className="absolute bottom-0 left-0 w-full px-10 pb-16 z-10 text-center">
                  <div className="relative w-40 h-40 rounded-3xl overflow-hidden mx-auto mb-8 border-4 border-[#EAB308] shadow-2xl rotate-3">
                       {card.image ? (
                            <Image src={card.image} alt={name} fill className="object-cover -rotate-3 scale-110" unoptimized={true} />
                       ) : (
                            <div className="w-full h-full bg-[#EAB308] flex items-center justify-center text-[#0F172A] text-5xl font-black">{name.charAt(0)}</div>
                       )}
                  </div>
                  <h1 className="text-5xl font-serif font-black tracking-tight text-white mb-3 uppercase leading-none">{name}</h1>
                  <p className="text-[#EAB308] font-bold tracking-[0.3em] uppercase text-xs">{role}</p>
             </div>
        </section>

        {/* BRAND IDENTITY & TAGLINE */}
        <section className="px-10 py-12 bg-white/5 backdrop-blur-sm border-y border-white/10 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                  <div className="grid grid-cols-10 gap-2 p-2 pt-[10px]">
                       {Array.from({ length: 100 }).map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-white rounded-full" />
                       ))}
                  </div>
             </div>
             <h2 className="text-2xl font-serif font-black tracking-widest text-white uppercase mb-4 leading-none">{company}</h2>
             <div className="max-w-[320px] mx-auto h-0.5 bg-gradient-to-r from-transparent via-[#EAB308] to-transparent mb-6 opacity-30" />
             <p className="text-white/60 font-medium text-lg italic leading-relaxed">
                  "Redefining modern luxury through exclusive architectural curation and discrete white-glove service."
             </p>
        </section>

        {/* STATS COUNTDOWN DASHBOARD */}
        <section className="px-10 py-20 bg-gradient-to-b from-[#111A2E] to-[#0F172A] border-b border-white/5">
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                  <PropertyStat label="ESTATES" value="450+" icon={Building2} />
                  <PropertyStat label="YEARS" value="18" icon={Clock} />
                  <PropertyStat label="CLIENTS" value="1.2k" icon={Users} />
                  <PropertyStat label="VOLUME" value="$2.4B" icon={TrendingUp} />
             </div>
        </section>

        {/* QUICK CONTACT ACTIONS */}
        <section className="px-10 pt-16 pb-24">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href={`tel:${card.phone || ""}`} className="bg-[#EAB308] text-[#0F172A] py-6 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_20px_40px_rgba(234,179,8,0.2)] active:scale-95">
                       <Phone size={20} fill="currentColor" /> INITIATE CALL
                  </a>
                  <a href={`mailto:${card.email || ""}`} className="bg-white/10 text-white py-6 rounded-2xl font-black text-lg flex items-center justify-center gap-3 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all active:scale-95">
                       <Mail size={20} /> SEND INQUIRY
                  </a>
             </div>
             
             <div className="mt-8">
                  <button 
                       onClick={onDownloadVCard}
                       className="w-full bg-white text-[#0F172A] py-7 rounded-2xl font-black text-2xl flex items-center justify-center gap-5 shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:bg-[#EAB308] transition-all group active:scale-95 uppercase tracking-tighter"
                  >
                       <User size={30} strokeWidth={3} className="group-hover:rotate-12 transition-transform" /> 
                       SAVE DIGITAL NODE
                  </button>
             </div>
        </section>

        {/* ABOUT / PHILOSOPHY SECTION */}
        <section className="px-10 pb-40 relative">
             <div className="absolute top-[-20px] left-[-20px] opacity-10">
                  <Sparkles size={120} className="text-[#EAB308]" />
             </div>
             <div className="space-y-10 relative z-10">
                  <div className="space-y-4">
                       <h3 className="text-xs font-black text-[#EAB308] uppercase tracking-[0.5em] border-l-4 border-[#EAB308] pl-6 h-[20px] flex items-center">The Vision</h3>
                       <h2 className="text-4xl font-serif font-black tracking-tight text-white leading-tight">Beyond Conventional Brokerage.</h2>
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed font-medium">
                       {card.description || "With nearly two decades of focus on ultra-high-net-worth portfolios, Julian Vane provides more than just access—he provides insight. Specializing in off-market acquisitions and bespoke lifestyle integration across Europe and the Americas."}
                  </p>
                  <div className="flex gap-4">
                       <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-[#EAB308]" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Confidentiality</span>
                       </div>
                       <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-[#EAB308]" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Global Reach</span>
                       </div>
                  </div>
             </div>
        </section>

        {/* SERVICES / IMPACT AREAS */}
        <section className="px-10 pb-40 relative">
             <div className="grid grid-cols-1 gap-12">
                  <ServiceBlock 
                       title="Portfolio Strategy" 
                       desc="Tailored investment Roadmaps for global real estate asset classes." 
                       icon={Briefcase}
                  />
                  <ServiceBlock 
                       title="Off-Market Access" 
                       desc="Exclusive entry to private listings not available to the public domain." 
                       icon={Key}
                  />
                  <ServiceBlock 
                       title="Architecture Curation" 
                       desc="Selecting properties based on historical significance and design excellence." 
                       icon={Home}
                  />
             </div>
        </section>

        {/* MARKET INSIGHTS / BLOG PREVIEW */}
        <section className="px-10 pb-40 bg-[#0F172A] relative">
             <div className="space-y-12">
                  <div className="flex justify-between items-end">
                       <div className="space-y-2">
                            <h3 className="text-[10px] font-black text-[#EAB308] uppercase tracking-[0.4em] leading-none">Perspective</h3>
                            <h2 className="text-3xl font-serif font-black text-white italic">Market Insights</h2>
                       </div>
                       <button className="text-[10px] font-black text-white/40 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                            Archives <ArrowRight size={14} />
                       </button>
                  </div>
                  <div className="grid grid-cols-1 gap-8">
                       <InsightCard 
                            title="The Rise of Micro-States: Real Estate in 2026" 
                            date="March 2026" 
                            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600" 
                       />
                       <InsightCard 
                            title="Sustainable Grandeur: Green Tech meets Luxury" 
                            date="Feb 2026" 
                            image="https://images.unsplash.com/photo-1518005020951-ecc849106200?q=80&w=600" 
                       />
                  </div>
             </div>
        </section>

        {/* PERSISTENT CORE DETAILS */}
        <section className="px-10 pb-40">
             <div className="bg-white/5 rounded-[40px] p-8 space-y-4 border border-white/10">
                  <EstateDetail icon={Globe} label="Digital Headquarters" value={card.website || "www.vane-global.luxury"} />
                  <EstateDetail icon={MapPin} label="Global Hub" value={card.address || "Mayfair, London | Fifth Ave, NY"} />
                  <div className="grid grid-cols-2 gap-4">
                       <EstateDetail icon={Calendar} label="Consultation" value="By Appointment" />
                       <EstateDetail icon={Shield} label="Security" value="V4 Verified" />
                  </div>
             </div>
        </section>

        {/* PORTFOLIO SHOWCASE */}
        <section className="px-10 pb-40 space-y-12">
             <div className="text-center space-y-4">
                  <h3 className="text-[10px] font-black text-[#EAB308] uppercase tracking-[0.5em]">The Collection</h3>
                  <h2 className="text-4xl font-serif font-black text-white uppercase tracking-tighter">Iconic Properties</h2>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <PropertyCard image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600" title="Celestial Penthouse" price="$14,500,000" />
                  <PropertyCard image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600" title="Veridian Sands Manor" price="$22,000,000" />
                  <PropertyCard image="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600" title="The Onyx Pavilion" price="$9,800,000" />
                  <PropertyCard image="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=600" title="Aura Lakeside" price="$11,200,000" />
             </div>
             <button className="w-full py-6 rounded-2xl border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#0F172A] transition-all">
                  Request Full Access Portfolio
             </button>
        </section>

        {/* INQUIRY / BOOKING FORM */}
        <section className="px-10 pb-40 relative">
             <div className="bg-[#111A2E] rounded-[48px] p-8 sm:p-12 border border-white/10 shadow-2xl space-y-10">
                  <div className="text-center space-y-4">
                       <h4 className="text-2xl font-serif font-black text-white uppercase italic">Private Consultation</h4>
                       <p className="text-white/40 text-sm font-medium">Request a discrete viewing or strategy session.</p>
                  </div>
                  <div className="space-y-4">
                       <PremiumInput placeholder="Legal Name" />
                       <PremiumInput placeholder="Contact Endpoint (Email/Phone)" />
                       <textarea placeholder="Portfolio interest or message..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 text-white placeholder:text-white/30 font-medium focus:border-[#EAB308] focus:outline-none transition-all resize-none" />
                       <button className="w-full bg-[#EAB308] text-[#0F172A] py-7 rounded-2xl font-black text-xl shadow-xl hover:bg-white hover:scale-[1.02] active:scale-95 transition-all uppercase leading-none pt-[5px]">
                            Connect Discrete
                       </button>
                  </div>
             </div>
        </section>

        {/* QR CREDENTIAL IDENTITY */}
        <section className="px-10 pb-40">
             <div className="bg-white p-12 rounded-[50px] text-center space-y-10 relative overflow-hidden group shadow-[0_50px_100px_rgba(255,255,255,0.05)]">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#EAB308]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-[#EAB308]/40 transition-all duration-1000" />
                  <div className="space-y-2">
                       <h4 className="text-[#0F172A] text-2xl font-serif font-black tracking-tight uppercase">Identity Node Access</h4>
                       <p className="text-[#0F172A]/40 font-bold text-[10px] uppercase tracking-[0.3em] leading-none pt-1">Scan for immediate sync</p>
                  </div>
                  <div className="relative w-64 h-64 mx-auto bg-[#0F172A] p-6 rounded-[48px] shadow-2xl transition-transform group-hover:scale-110">
                       {qrCode && <Image src={qrCode} alt="QR" fill className="p-8 invert" unoptimized={true} />}
                  </div>
             </div>
        </section>

        {/* TRUST BADGE / PARTNERS */}
        <section className="px-10 pb-40">
             <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                  <LogoPlaceholder label="NAR" />
                  <LogoPlaceholder label="LeadingRE" />
                  <LogoPlaceholder label="LuxuryRE" />
                  <LogoPlaceholder label="Forbes Global" />
             </div>
        </section>

        {/* DYNAMIC SECTIONS */}
        <div className="px-0 pb-10 border-t border-white/5 pt-10">
             <VCardDynamicSections card={card} />
        </div>

        {/* FOOTER INTERFACE */}
        <footer className="py-24 bg-white/5 border-t border-white/10 text-center space-y-16">
             {card.socialLinks && card.socialLinks.filter(l => l.url).length > 0 && (
                  <div className="flex justify-center gap-6">
                       {card.socialLinks.filter(l => l.url).map((social, idx) => {
                            const Icon = getSocialIcon(social.platform);
                            return (
                                 <a 
                                      key={idx} 
                                      href={social.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="w-16 h-16 rounded-[24px] bg-[#0F172A] border border-white/10 flex items-center justify-center text-[#EAB308] hover:bg-[#EAB308] hover:text-[#0F172A] hover:-translate-y-2 transition-all cursor-pointer shadow-xl"
                                 >
                                      <Icon size={24} strokeWidth={1.5} />
                                 </a>
                            );
                       })}
                  </div>
             )}
             <div className="space-y-6">
                  <div className="inline-block px-10 py-4 border border-white/10 rounded-full bg-white/5">
                       <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.8em]">Julian Vane Global Identity Node</p>
                  </div>
                  <div className="pt-8">
                       <p className="text-[9px] font-bold text-[#EAB308] tracking-widest uppercase">ESTATE CORE SYSTEM © 2026. All Rights Reserved.</p>
                  </div>
             </div>
        </footer>

      </div>
      
      {/* FONTS REGISTRY */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;800&display=swap" rel="stylesheet" />
      <style jsx global>{`
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-serif { font-family: 'Cinzel', serif; }
      `}</style>
    </div>
  );
}

function EstateDetail({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
     return (
          <div className="bg-white/5 rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all group flex items-start gap-5">
               <div className="w-12 h-12 rounded-2xl bg-[#EAB308]/10 flex items-center justify-center text-[#EAB308] group-hover:bg-[#EAB308] group-hover:text-[#0F172A] transition-colors shrink-0 shadow-lg">
                    <Icon size={20} />
               </div>
               <div className="space-y-1 overflow-hidden">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-widest leading-none pt-[5px] inline-block">{label}</span>
                    <p className="text-white font-medium break-all tracking-tight truncate">{value}</p>
               </div>
          </div>
     );
}

function PropertyStat({ label, value, icon: Icon }: { label: string, value: string, icon: any }) {
     return (
          <div className="text-center group space-y-4">
               <div className="w-12 h-12 mx-auto bg-white/5 rounded-2xl flex items-center justify-center text-[#EAB308] group-hover:bg-[#EAB308] group-hover:text-[#0F172A] transition-all duration-500 shadow-xl">
                    <Icon size={20} />
               </div>
               <div className="space-y-0.5">
                    <p className="text-2xl font-serif font-black text-white transition-colors group-hover:text-[#EAB308]">{value}</p>
                    <span className="text-[9px] font-black text-white/30 uppercase tracking-widest whitespace-nowrap">{label}</span>
               </div>
          </div>
     );
}

function ServiceBlock({ title, desc, icon: Icon }: { title: string, desc: string, icon: any }) {
     return (
          <div className="flex gap-8 group">
               <div className="w-16 h-16 bg-white/5 rounded-[24px] flex items-center justify-center text-[#EAB308] group-hover:bg-[#EAB308] group-hover:text-[#0F172A] transition-all shrink-0 border border-white/5 shadow-2xl rotate-3 group-hover:rotate-0">
                    <Icon size={28} />
               </div>
               <div className="space-y-2 pt-2 border-b border-white/5 pb-8 flex-1">
                    <h4 className="text-2xl font-serif font-black text-white uppercase tracking-tight">{title}</h4>
                    <p className="text-white/50 text-base leading-relaxed font-medium">{desc}</p>
               </div>
          </div>
     );
}

function InsightCard({ title, date, image }: { title: string, date: string, image: string }) {
     return (
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-[#EAB308]/30 transition-all flex flex-col sm:flex-row shadow-2xl">
               <div className="w-full sm:w-48 h-48 sm:h-auto relative overflow-hidden">
                    <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]" unoptimized={true} />
               </div>
               <div className="p-8 space-y-4 flex-1">
                    <span className="text-[10px] font-black text-[#EAB308] uppercase tracking-widest">{date}</span>
                    <h4 className="text-xl font-serif font-black text-white leading-tight group-hover:text-[#EAB308] transition-colors line-clamp-2">{title}</h4>
                    <button className="text-[10px] font-black text-white/40 uppercase tracking-widest flex items-center gap-2 group/btn">
                         Explore Piece <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
               </div>
          </div>
     );
}

function PropertyCard({ image, title, price }: { image: string, title: string, price: string }) {
     return (
          <div className="group cursor-pointer">
               <div className="relative h-64 rounded-3xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
                    <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-[2s]" unoptimized={true} />
                    <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-black text-[#EAB308] tracking-widest whitespace-nowrap leading-none pt-[5px] border border-white/10">
                         PREMIUM LISTING
                    </div>
               </div>
               <div className="space-y-1 pl-4">
                    <h5 className="text-xl font-serif font-black uppercase text-white tracking-wide transition-colors group-hover:text-[#EAB308]">{title}</h5>
                    <p className="text-white/40 font-bold text-sm tracking-widest">{price}</p>
               </div>
          </div>
     );
}

function PremiumInput({ placeholder }: { placeholder: string }) {
     return (
          <input type="text" placeholder={placeholder} className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 text-white placeholder:text-white/30 font-medium focus:border-[#EAB308] focus:bg-white/10 focus:outline-none transition-all" />
     );
}

function LogoPlaceholder({ label }: { label: string }) {
     return (
          <div className="text-white font-serif font-black text-2xl tracking-widest uppercase italic border-b-2 border-transparent hover:border-[#EAB308] transition-all cursor-default select-none">
               {label}
          </div>
     );
}
