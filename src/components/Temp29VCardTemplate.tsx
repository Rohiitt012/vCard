"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { 
  Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, 
  MessageCircle, ChevronDown, LayoutGrid, User, Sparkles, Globe, 
  ArrowRight, Clock, Star, Zap, Activity, Cpu, Camera, Lightbulb,
  HeartPulse, Stethoscope, Dna, Pill, Plus, ShieldCheck, Microscope, Syringe, Cake, Play, Share2, Scissors, Quote, ArrowLeft
} from "lucide-react";
import { generateQrDataUrl } from "@/lib/qr";
import { getSocialIcon } from "@/lib/social-icons";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function Temp29VCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [qrCode, setQrCode] = useState<string>("");

  useEffect(() => {
    const url = `${baseUrl}/${slug}`;
    generateQrDataUrl(url).then(setQrCode);
  }, [baseUrl, slug]);

  const name = card.title || "Pallavi Hegde";
  const role = card.occupation || card.tagline || "Doctor at Doctored";
  const company = card.company || "DOCTORED MEDICAL GROUP";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex justify-center py-0 px-0 sm:py-24 overflow-x-hidden relative selection:bg-indigo-600 selection:text-white">
      
      {/* ULTRA-PREMIUM ELITE MEDICAL BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
           {/* Dynamic Gradient Orbs (Luxury Feel) */}
           <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-200/20 blur-[180px] animate-pulse rounded-full" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-rose-100/10 blur-[180px] animate-pulse delay-1000 rounded-full" />
           
           {/* High-Fidelity Medical Grid */}
           <div className="absolute inset-0 opacity-[0.03]" 
                style={{ backgroundImage: 'linear-gradient(#4F46E5 1px, transparent 1px), linear-gradient(90deg, #4F46E5 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                
           {/* Floating Medical Symbols */}
           <div className="absolute top-[15%] right-[2%] opacity-[0.05] animate-bounce-slow">
                <Dna size={160} strokeWidth={1} className="text-indigo-600 rotate-12" />
           </div>
           <div className="absolute bottom-[20%] left-[2%] opacity-[0.05] animate-bounce-slow delay-1000">
                <Stethoscope size={160} strokeWidth={1} className="text-indigo-600 -rotate-12" />
           </div>
      </div>

      <div className="w-full max-w-[640px] bg-white sm:rounded-[100px] relative flex flex-col shadow-[0_120px_200px_-50px_rgba(15,23,42,0.18)] overflow-hidden border border-white/50 ring-1 ring-slate-100/50">
        
        {/* ULTRA-CINEMATIC HERO REDESIGN */}
        <section className="relative pt-36 pb-32 px-12 overflow-hidden border-b border-slate-50 text-center">
             {/* Dynamic High-Def Pulse Background */}
             <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none">
                       <path 
                            d="M0,200 L100,200 L120,160 L140,240 L160,200 L300,200 L320,180 L340,220 L360,200 L500,200 L530,150 L560,250 L590,200 L800,200 L820,170 L840,230 L860,200 L1000,200" 
                            stroke="#4338CA" 
                            strokeWidth="3" 
                            fill="none"
                            className="animate-pulse"
                       />
                  </svg>
             </div>

             <div className="relative z-10 max-w-[500px] mx-auto space-y-16">
                  {/* Floating Identity Status */}
                  <div className="flex flex-col items-center gap-6">
                       <div className="inline-flex items-center gap-4 bg-indigo-50/80 backdrop-blur-3xl px-6 py-2.5 rounded-full border border-indigo-100/50 shadow-sm shadow-indigo-500/10">
                            <ShieldCheck size={18} className="text-indigo-600 focus-within:animate-ping" strokeWidth={3} />
                            <span className="text-indigo-900 font-extrabold text-[10px] uppercase tracking-[0.4em] pt-[2px]">Verified Clinician</span>
                       </div>
                       <div className="text-slate-300 font-black text-[9px] uppercase tracking-[0.6em] leading-none">ID: REG-2026-XP09</div>
                  </div>

                  {/* Profile Hub - Central Focus */}
                  <div className="relative group mx-auto w-fit">
                       <div className="absolute inset-0 bg-indigo-500/10 rounded-[80px] blur-[100px] animate-pulse scale-75 group-hover:scale-125 transition-transform duration-1000" />
                       <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-[80px] border-[14px] border-slate-50 overflow-hidden shadow-[0_60px_120px_-30px_rgba(15,23,42,0.3)] ring-1 ring-slate-100/50 group-hover:shadow-[0_80px_140px_-30px_rgba(79,70,229,0.4)] transition-all duration-700">
                            {card.image ? (
                                 <Image src={card.image} alt={name} fill className="object-cover group-hover:scale-110 transition-transform duration-[4s]" unoptimized={true} />
                            ) : (
                                 <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white text-7xl font-black">{name.charAt(0)}</div>
                            )}
                       </div>
                       
                       {/* Floating Heart Hub */}
                       <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-rose-500 rounded-full flex items-center justify-center shadow-3xl border-[10px] border-white text-white group-hover:scale-110 transition-transform duration-500">
                            <HeartPulse size={40} className="animate-pulse" />
                       </div>
                  </div>

                  <div className="space-y-8">
                       <div className="space-y-4">
                            <h1 className="text-6xl font-black text-slate-950 tracking-[-0.05em] leading-[0.9] flex flex-col items-center">
                                 {name.split(' ').map((word, i) => (
                                      <span key={i} className={i === 1 ? "text-indigo-600 outline-indigo-200" : ""}>{word}</span>
                                 ))}
                            </h1>
                            <div className="flex items-center justify-center gap-5">
                                 <div className="h-[2px] w-8 bg-indigo-600 rounded-full" />
                                 <span className="text-indigo-600 font-black text-base uppercase tracking-[0.5em] leading-none pt-1">{role}</span>
                                 <div className="h-[2px] w-8 bg-indigo-600 rounded-full" />
                            </div>
                       </div>
                       
                       <p className="text-slate-400 font-medium text-lg leading-[1.8] max-w-[420px] mx-auto opacity-80">
                            {card.description || "Advancing medical innovation through compassionate precision and evidence-based patient transformation."}
                       </p>
                  </div>
             </div>
        </section>

        {/* ULTRA-PREMIUM ACTION HUB */}
        <section className="px-12 py-24 relative z-10">
             <div className="space-y-10">
                  <button 
                       onClick={onDownloadVCard}
                       className="group relative w-full h-28 bg-slate-950 text-white rounded-[40px] font-black text-2xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.45)] hover:shadow-[0_40px_80px_-10px_rgba(79,70,229,0.3)] transition-all flex items-center justify-center gap-6 active:scale-[0.98] border-b-[8px] border-slate-900 pt-2"
                  >
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                       <User size={36} strokeWidth={2.5} className="group-hover:scale-110 transition-transform duration-500" />
                       <span className="uppercase tracking-[0.4em] text-sm pt-1">Save Profile Node</span>
                  </button>

                  <div className="grid grid-cols-2 gap-8">
                       <a href={`mailto:${card.email || ""}`} className="bg-white/90 backdrop-blur-3xl border border-white hover:border-indigo-200 text-slate-900 py-10 rounded-[48px] font-black text-xs flex flex-col items-center justify-center gap-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-10px_rgba(79,70,229,0.15)] transition-all uppercase tracking-[0.4em] group ring-1 ring-slate-100/50">
                            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white group-hover:bg-indigo-600 group-hover:scale-110 transition-all shadow-xl">
                                 <Mail size={28} strokeWidth={1.5} />
                            </div>
                            <span>Email Portal</span>
                       </a>
                       <a href={`tel:${card.phone || ""}`} className="bg-white/90 backdrop-blur-3xl border border-white hover:border-indigo-200 text-slate-900 py-10 rounded-[48px] font-black text-xs flex flex-col items-center justify-center gap-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-10px_rgba(79,70,229,0.15)] transition-all uppercase tracking-[0.4em] group ring-1 ring-slate-100/50">
                            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white group-hover:bg-indigo-600 group-hover:scale-110 transition-all shadow-xl">
                                 <Phone size={28} strokeWidth={1.5} />
                            </div>
                            <span>Direct Line</span>
                       </a>
                  </div>
             </div>
        </section>

        {/* SOCIAL & CONTACT GRID - ULTRA PREMIUM */}
        <section className="px-12 pb-32 relative z-10">
              <div className="flex justify-center mb-16">
                  <VCardSocialLinks 
                      card={card} 
                      layout="vertical" 
                      variant="circular" 
                      iconSize={20}
                      itemClassName="bg-white border border-slate-100 rounded-2xl p-4 w-full max-w-[400px] hover:bg-slate-50 transition-all shadow-sm"
                  />
              </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-2">
                  <MedicalContactGridItem icon={Mail} label="Official Email" value={card.email || "jackie@gmail.com"} />
                  <MedicalContactGridItem icon={Phone} label="Direct Line" value={card.phone || "+1 4078461474"} />
                  <MedicalContactGridItem icon={Cake} label="Patient DOB" value={card.birthDate || "12th June, 1990"} />
                  <MedicalContactGridItem icon={MapPin} label="Medical HQ" value={card.address || "New York, USA"} />
             </div>
        </section>

        {/* MAKE AN APPOINTMENT SECTION */}
        <section className="px-12 pb-40 relative z-10">
             <div className="relative text-center mb-16">
                  {/* Syringe Decoration */}
                  <div className="absolute right-0 top-0 opacity-10 transform -rotate-12 translate-x-4">
                       <Syringe size={100} strokeWidth={1} className="text-slate-900" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">Make an Appointment</h2>
             </div>

             <div className="bg-white rounded-[48px] p-8 sm:p-12 shadow-3xl border border-slate-50 space-y-12">
                  <div className="space-y-4">
                       <label className="text-slate-900 font-bold text-lg opacity-60">Date:</label>
                       <div className="relative">
                            <input 
                                 type="text" 
                                 placeholder="Pick a date" 
                                 className="w-full h-18 bg-slate-50/50 border border-slate-100 rounded-3xl px-8 text-slate-900 font-bold focus:outline-none focus:border-indigo-600 transition-all cursor-pointer py-5"
                                 onFocus={(e) => (e.target.type = "date")}
                            />
                            <Clock size={20} className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-400" />
                       </div>
                  </div>

                  <div className="space-y-6">
                       <label className="text-slate-900 font-bold text-lg opacity-60">Hour:</label>
                       <div className="grid grid-cols-2 gap-4">
                            {['8:10 - 20:00', '8:10 - 20:00', '8:10 - 20:00', '8:10 - 20:00'].map((time, idx) => (
                                 <button key={idx} className="h-16 bg-white border border-slate-100 rounded-3xl text-slate-900 font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm">
                                      {time}
                                 </button>
                            ))}
                       </div>
                  </div>
                  
                  <button className="w-full h-20 bg-slate-900 text-white rounded-[32px] font-black text-xl shadow-[0_20px_40px_rgba(15,23,42,0.2)] hover:bg-slate-800 transition-all outline-none">
                       Make an Appointment
                  </button>
             </div>
        </section>

        {/* REFINED SERVICES SECTION - ULTRA PREMIUM */}
        <section className="px-12 pb-40 relative z-10 overflow-hidden">
             <div className="flex flex-col items-center mb-20 text-center">
                  <span className="text-indigo-600 font-black text-xs uppercase tracking-[0.5em] mb-4">Core Competencies</span>
                  <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Our Insights & Care</h2>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <MedicalServiceGridItem icon={Stethoscope} title="Expert Consultation" description="Advanced diagnostic screenings and personalized care plans for your health." />
                  <MedicalServiceGridItem icon={HeartPulse} title="Cardiac Care" description="Specialized monitoring and heart health solutions using state-of-the-art tech." />
             </div>
        </section>

        {/* REFINED GALLERY SECTION */}
        <section className="pb-40 relative z-10 overflow-hidden">
             {/* Medical Icons Pattern Background */}
             <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex flex-wrap gap-20 p-20 rotate-[-5deg]">
                  {[HeartPulse, Pill, Dna, Stethoscope, Microscope, Activity].map((Icon, idx) => (
                       <Icon key={idx} size={100} />
                  ))}
             </div>

             <div className="px-12 mb-16 relative">
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight text-center">Gallery</h2>
             </div>

             <div className="relative px-12">
                  <div className="flex gap-8 overflow-x-auto no-scrollbar pb-10">
                       {card.galleries && card.galleries.length > 0 ? (
                            card.galleries.map((item, idx) => (
                                 <div key={idx} className="relative min-w-[85vw] sm:min-w-[480px] aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] group bg-white border border-slate-100">
                                      <Image src={item.imageUrl} alt="Gallery" fill className="object-cover" unoptimized={true} />
                                      <div className="absolute inset-0 bg-slate-900/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                           <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
                                                <Play size={40} fill="currentColor" />
                                           </div>
                                      </div>
                                 </div>
                            ))
                       ) : (
                            [1, 2, 3].map((i) => (
                                 <div key={i} className="relative min-w-[85vw] sm:min-w-[480px] aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] group">
                                      <Image 
                                           src={i === 1 ? "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800" : i === 2 ? "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800" : "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800"} 
                                           alt="Gallery" fill className="object-cover" unoptimized={true} 
                                      />
                                      <div className="absolute inset-0 bg-slate-900/5 flex items-center justify-center">
                                           <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-2xl group-hover:scale-125 transition-transform">
                                                <Play size={32} fill="currentColor" />
                                           </div>
                                      </div>
                                 </div>
                            ))
                       )}
                  </div>
             </div>
        </section>

        {/* REFINED PRODUCTS SECTION */}
        <section className="pb-40 relative z-10 overflow-hidden">
             <div className="px-12 mb-16 relative flex items-center justify-between">
                  {/* Medicine Bottle Decoration */}
                  <div className="opacity-10 absolute top-[-50px] right-0 pointer-events-none">
                       <Pill size={140} strokeWidth={1} className="text-slate-900" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight text-center flex-1">Our Products</h2>
             </div>

             <div className="relative px-12">
                  <div className="flex gap-10 overflow-x-auto no-scrollbar pb-10">
                       {card.products && card.products.length > 0 ? (
                            card.products.map((item, idx) => (
                                 <div key={idx} className="relative min-w-[85vw] sm:min-w-[520px] bg-white rounded-[48px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-50 p-6 flex gap-8 group/prod hover:shadow-3xl transition-all">
                                      <div className="w-[45%] h-full relative rounded-[32px] overflow-hidden border border-slate-100">
                                           <Image src={item.icon} alt={item.name} fill className="object-cover group-hover/prod:scale-110 transition-transform duration-700" unoptimized={true} />
                                      </div>
                                      <div className="flex-1 space-y-3 pt-6 pr-12 relative h-full">
                                           <h4 className="text-slate-900 font-black text-2xl tracking-tight leading-none">{item.name}</h4>
                                           <p className="text-slate-400 font-medium text-sm leading-relaxed line-clamp-3">
                                                {item.description || "Premium medical-grade supplements designed for optimal health and vitality."}
                                           </p>
                                           <div className="pt-4 flex items-end gap-1">
                                                <span className="text-slate-900 font-black text-3xl leading-none">{item.currency || "$"}{item.price || "200"}</span>
                                           </div>
                                           
                                           {/* Floating Card Actions */}
                                           <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl border border-slate-50 cursor-pointer hover:bg-slate-900 hover:text-white transition-all">
                                                     <MessageCircle size={22} />
                                                </div>
                                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl border border-slate-50 cursor-pointer hover:bg-slate-900 hover:text-white transition-all">
                                                     <Share2 size={22} />
                                                </div>
                                           </div>
                                      </div>
                                 </div>
                            ))
                       ) : (
                            [1, 2, 3].map((i) => (
                                 <div key={i} className="relative min-w-[85vw] sm:min-w-[520px] bg-white rounded-[48px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-100 p-6 flex gap-8 group/prod hover:shadow-3xl transition-all">
                                      <div className="w-[45%] aspect-square relative rounded-[40px] overflow-hidden bg-slate-50">
                                           <Image src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800" alt="Supplements" fill className="object-cover group-hover/prod:scale-110 transition-transform duration-700" unoptimized={true} />
                                      </div>
                                      <div className="flex-1 space-y-3 pt-6 pr-14 relative">
                                           <h4 className="text-slate-900 font-black text-2xl tracking-tight leading-none">V-Complex</h4>
                                           <p className="text-slate-400 font-medium text-sm leading-relaxed line-clamp-3">
                                                Advanced medical supplements crafted for cellular regeneration and immune boost.
                                           </p>
                                           <div className="pt-4">
                                                <span className="text-slate-900 font-black text-3xl leading-none">$200</span>
                                           </div>
                                           
                                           <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl border border-slate-50 cursor-pointer hover:bg-slate-900 hover:text-white transition-all">
                                                     <MessageCircle size={22} />
                                                </div>
                                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl border border-slate-50 cursor-pointer hover:bg-slate-900 hover:text-white transition-all">
                                                     <Share2 size={22} />
                                                </div>
                                           </div>
                                      </div>
                                 </div>
                            ))
                       )}
                       {/* See All Scroll Action */}
                       <div className="min-w-32 flex items-center justify-center">
                            <div className="w-24 h-24 bg-slate-950 rounded-full flex items-center justify-center text-white shadow-3xl hover:scale-110 hover:bg-indigo-600 transition-all cursor-pointer">
                                 <LayoutGrid size={36} />
                            </div>
                       </div>
                  </div>
             </div>
        </section>

        {/* REFINED TESTIMONIALS SECTION */}
        <section className="pb-40 relative z-10 overflow-hidden">
             {/* Medical Icons Pattern Background Overlay */}
             <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex flex-wrap gap-20 p-20 rotate-[-5deg] z-0">
                  {[HeartPulse, Pill, Dna, Stethoscope, Microscope, Activity].map((Icon, idx) => (
                       <Icon key={idx} size={100} />
                  ))}
             </div>

             <div className="px-12 mb-16 relative">
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight text-center">Testimonials</h2>
             </div>

             <div className="px-12 relative z-10">
                  <div className="bg-slate-900 rounded-[48px] p-10 sm:p-14 relative flex flex-col sm:flex-row items-center gap-10 shadow-3xl text-left border border-white/5 group">
                       <Quote className="absolute top-10 right-10 text-white opacity-[0.05] group-hover:opacity-10 transition-opacity" size={140} strokeWidth={1} />
                       <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shrink-0 shadow-2xl relative">
                            {card.testimonials && card.testimonials[0] ? (
                                 <Image src={card.testimonials[0].image} alt="Author" fill className="object-cover" unoptimized={true} />
                            ) : (
                                 <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" alt="Author" fill className="object-cover" unoptimized={true} />
                            )}
                       </div>
                       <div className="space-y-6 relative z-10">
                            <p className="text-white text-2xl font-medium leading-[1.8] opacity-80 italic max-w-[450px]">
                                 "{card.testimonials && card.testimonials[0] ? card.testimonials[0].quote : "The care and level of expertise provided here is simply transformative. A world-class medical hub."}"
                            </p>
                            <div className="space-y-1">
                                 <p className="text-indigo-400 font-black text-xl uppercase tracking-widest">{card.testimonials && card.testimonials[0] ? card.testimonials[0].name : "Sarah Johnson"}</p>
                                 <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{card.testimonials && card.testimonials[0] ? card.testimonials[0].role : "Patient / Clinical Director"}</p>
                            </div>
                       </div>
                  </div>
             </div>
        </section>

        {/* REFINED BLOG SECTION */}
        <section className="pb-40 relative z-10 overflow-hidden bg-white">
             <div className="px-12 mb-16 relative text-center">
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">Our Insights</h2>
             </div>

             <div className="flex flex-col sm:flex-row gap-0 group">
                  <div className="flex-1 px-12 pb-20 pt-10 space-y-8 relative">
                       {/* Scissors Decoration */}
                       <div className="w-24 h-24 opacity-[0.05] mb-6">
                            <Scissors size={80} strokeWidth={1} className="text-slate-900" />
                       </div>
                       <div className="space-y-6">
                            <h4 className="text-slate-900 font-black text-5xl tracking-tight leading-[1.1]">Clinical Advancement</h4>
                            <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-[420px]">
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                            </p>
                       </div>
                       
                       {/* Scroll Navigation Overlay Bottom Left */}
                       <div className="absolute bottom-0 left-0 w-full sm:w-[120%] h-32 bg-slate-950 flex items-center px-12 gap-8 z-20 rounded-tr-[48px]">
                            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-slate-950 transition-all">
                                 <ArrowLeft size={24} />
                            </div>
                            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-slate-950 transition-all">
                                 <ArrowRight size={24} />
                            </div>
                            <span className="text-white/20 text-xs font-black uppercase tracking-[0.5em] ml-4">Archives 2026</span>
                       </div>
                  </div>
                  
                  <div className="flex-1 px-12 pb-20 sm:pb-32 pt-10 relative z-10">
                       <div className="relative aspect-[4/3] rounded-[60px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-8 border-white ring-1 ring-slate-100">
                            <Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800" alt="Blog" fill className="object-cover group-hover:scale-110 transition-transform duration-[4s]" unoptimized={true} />
                       </div>
                  </div>
             </div>
        </section>

        {/* CLINICAL EXCELLENCE (PHILOSOPHY) */}
        <section className="px-12 py-32 relative z-10">
             <div className="flex flex-col sm:flex-row gap-20">
                  <div className="flex-1 space-y-12">
                       <div className="space-y-4">
                            <h3 className="text-xs font-black text-indigo-600 uppercase tracking-[0.5em]">Clinical Manifesto</h3>
                            <h2 className="text-4xl font-black tracking-tight text-slate-900 italic leading-[1.2]">
                                 "Redefining the standard of care through patient-centric innovation."
                            </h2>
                       </div>
                       <blockquote className="text-slate-500 font-medium text-lg leading-relaxed border-l-4 border-indigo-600 pl-8 py-2">
                            Our philosophy centers on bridging the gap between advanced medical science and deep human compassion to transform lives daily.
                       </blockquote>
                  </div>
                  <div className="grid grid-cols-2 gap-8 shrink-0">
                       <MedicalStat icon={HeartPulse} label="Care" value="HOLISTIC" />
                       <MedicalStat icon={Activity} label="Impact" value="GLOBAL" />
                       <MedicalStat icon={Microscope} label="Research" value="CORE V2" />
                       <MedicalStat icon={Zap} label="Uptime" value="24/7" />
                  </div>
             </div>
        </section>

        {/* ADVANCED MEDICAL REPORTS (PORTFOLIO) */}
        <section className="px-12 pb-40 relative z-10">
             <div className="flex items-center justify-between mb-16">
                  <h3 className="text-xs font-black text-indigo-600 uppercase tracking-[0.5em]">Whitepapers & Insights</h3>
                  <div className="flex gap-2">
                       <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-900 hover:text-white transition-all">
                            <ArrowRight size={16} className="rotate-180" />
                       </div>
                       <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                            <ArrowRight size={16} />
                       </div>
                  </div>
             </div>
             
             <div className="grid grid-cols-1 gap-14">
                  {[
                       { title: "Neuro-Regenerative Process", role: "Case Study / Clinical Research", img: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=800" },
                       { title: "Next-Gen Patient Privacy", role: "Whitepaper / Cyber Security", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800" }
                  ].map((item, idx) => (
                       <div key={idx} className="group relative">
                            <div className="relative aspect-[16/8] overflow-hidden rounded-[40px] shadow-3xl border border-slate-100 ring-4 ring-slate-50">
                                 <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[3s]" unoptimized={true} />
                                 <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-12 translate-y-20 group-hover:translate-y-0 transition-transform duration-700">
                                      <h4 className="text-white text-3xl font-black uppercase tracking-tight">{item.title}</h4>
                                      <p className="text-indigo-400 font-bold text-xs uppercase tracking-[0.3em] mt-3 opacity-0 group-hover:opacity-100 transition-opacity delay-300">{item.role}</p>
                                 </div>
                            </div>
                       </div>
                  ))}
             </div>
        </section>

        {/* CLINICAL DATA TERMINALS */}
        <section className="px-12 pb-40 relative z-10">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <HealthTerm icon={Globe} label="Secure Portal" value={card.website || "reg.doctor.medical"} />
                  <HealthTerm icon={MapPin} label="HQ Clinic" value={card.address || "Medical District, Block 42"} />
                  <HealthTerm icon={ShieldCheck} label="Registry ID" value="#MD-PALLAVI-2026" />
                  <HealthTerm icon={Clock} label="Clinic Status" value="Accepting Patients" />
             </div>
        </section>

        {/* REFINED BUSINESS HOURS SECTION */}
        <section className="px-12 pb-40 relative z-10 overflow-hidden">
             <div className="px-12 mb-16 relative text-center">
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">Business Hours</h2>
             </div>

             <div className="bg-slate-900 rounded-[48px] p-10 sm:p-14 shadow-3xl text-white relative group border border-white/5">
                  <div className="space-y-6">
                       {[
                            { day: "Sunday", hours: "08:10 - 20:00" },
                            { day: "Monday", hours: "08:10 - 20:00" },
                            { day: "Tuesday", hours: "08:10 - 20:00" },
                            { day: "Wednesday", hours: "08:10 - 10:00" },
                            { day: "Thursday", hours: "08:10 - 20:00" },
                            { day: "Friday", hours: "08:10 - 20:00" },
                            { day: "Saturday", hours: "Closed" }
                       ].map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 hover:translate-x-2 transition-transform cursor-default">
                                 <span className="text-xl font-black tracking-tight">{item.day} :</span>
                                 <span className={`text-xl font-bold ${item.hours === 'Closed' ? 'text-indigo-400' : 'opacity-60'}`}>{item.hours}</span>
                            </div>
                       ))}
                  </div>
             </div>
        </section>

        {/* REFINED QR CODE SECTION */}
        <section className="px-12 pb-40 relative z-10 overflow-hidden">
             <div className="relative mb-24 text-center">
                  {/* Stethoscope Decoration */}
                  <div className="absolute right-0 top-[-20px] opacity-10 transform scale-150 rotate-12 pointer-events-none">
                       <Stethoscope size={100} strokeWidth={1} className="text-slate-900" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">QR Code</h2>
             </div>

             <div className="relative max-w-[420px] mx-auto group">
                  <div className="bg-white rounded-[48px] p-10 pt-20 shadow-[0_50px_100px_rgba(15,23,42,0.1)] border border-slate-100 relative shadow-2xl">
                       {/* Floating Profile Overlap */}
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-[8px] border-slate-900 overflow-hidden shadow-2xl bg-white ring-8 ring-white">
                            {card.image ? (
                                 <Image src={card.image} alt={name} fill className="object-cover" unoptimized={true} />
                            ) : (
                                 <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white text-4xl font-black">{name.charAt(0)}</div>
                            )}
                       </div>
                       
                       <div className="relative aspect-square w-full mb-10 bg-slate-50/50 rounded-[32px] p-8 shadow-inner border border-slate-100">
                            {qrCode && <Image src={qrCode} alt="QR" fill className="p-4" unoptimized={true} />}
                       </div>

                       <button className="w-full bg-slate-900 text-white py-8 rounded-[28px] font-black text-lg hover:bg-indigo-600 transition-all shadow-xl uppercase tracking-widest leading-none pt-[5px]">
                            Download My QR Code
                       </button>
                  </div>
             </div>
        </section>

        {/* REFINED CONTACT FORM SECTION */}
        <section className="px-12 pb-40 relative z-10 overflow-hidden">
             <div className="relative mb-20 flex items-center justify-center gap-6">
                  {/* Blister Pack Decoration */}
                  <div className="absolute left-0 top-0 opacity-20 -translate-x-4 pointer-events-none">
                       <LayoutGrid size={100} strokeWidth={1} className="text-slate-900 rotate-12" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight text-center">Contact Us</h2>
             </div>

             <div className="max-w-[580px] mx-auto space-y-8">
                  <div className="grid grid-cols-1 gap-5">
                       <input 
                            type="text" 
                            placeholder="Full Name" 
                            className="w-full h-18 bg-white/80 border border-slate-200 rounded-3xl px-8 text-slate-900 font-bold placeholder:text-slate-300 focus:outline-none focus:border-indigo-600 transition-all shadow-sm py-5 px-8" 
                       />
                       <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="w-full h-18 bg-white/80 border border-slate-200 rounded-3xl px-8 text-slate-900 font-bold placeholder:text-slate-300 focus:outline-none focus:border-indigo-600 transition-all shadow-sm py-5 px-8" 
                       />
                       <input 
                            type="tel" 
                            placeholder="Phone Number" 
                            className="w-full h-18 bg-white/80 border border-slate-200 rounded-3xl px-8 text-slate-900 font-bold placeholder:text-slate-300 focus:outline-none focus:border-indigo-600 transition-all shadow-sm py-5 px-8" 
                       />
                       <textarea 
                            rows={5} 
                            placeholder="Your Message" 
                            className="w-full bg-white/80 border border-slate-200 rounded-[40px] p-8 text-slate-900 font-bold placeholder:text-slate-300 focus:outline-none focus:border-indigo-600 transition-all shadow-sm" 
                       />
                  </div>
                  
                  <div className="flex justify-center pt-6">
                       <button className="h-20 px-20 bg-slate-900 text-white rounded-[28px] font-black text-xl shadow-[0_20px_50px_rgba(15,23,42,0.2)] hover:bg-slate-800 transition-all uppercase tracking-widest text-sm pt-[4px]">
                            Send Message
                       </button>
                  </div>
             </div>
        </section>

        {/* REFINED SUBSCRIBE SECTION */}
        <section className="px-12 pb-40 relative z-10 overflow-hidden bg-white/50 border-t border-slate-50 pt-32">
             <div className="relative mb-16 text-center space-y-4">
                  {/* Syringe Decoration */}
                  <div className="absolute right-0 bottom-[-40px] opacity-10 transform -rotate-45 translate-x-4 pointer-events-none">
                       <Syringe size={140} strokeWidth={1} className="text-slate-900" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">Subscribe to {name}</h2>
                  <p className="text-slate-400 font-medium text-lg leading-relaxed">Sign up to get exclusive medical updates <br/> directly from our clinical portal.</p>
             </div>

             <div className="max-w-[520px] mx-auto">
                  <div className="flex bg-white rounded-[40px] p-3 shadow-[0_50px_100px_rgba(15,23,42,0.08)] border border-slate-100 h-24">
                       <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="flex-1 bg-transparent px-8 text-slate-900 font-bold focus:outline-none placeholder:text-slate-300 py-4 h-full" 
                       />
                       <button className="h-full px-12 bg-slate-900 text-white rounded-[32px] flex items-center justify-center hover:bg-slate-800 transition-all shadow-xl">
                            <Mail size={32} strokeWidth={1.5} />
                       </button>
                  </div>
             </div>
        </section>

        {/* PUBLIC VCARD HUB */}
        <section className="px-12 pb-32 relative z-10 overflow-hidden text-center bg-slate-100/30 pt-32 border-t border-white shadow-inner">
             <div className="space-y-16">
                  <div className="space-y-6">
                       <h2 className="text-4xl font-black text-slate-900 tracking-tight">Create Your Medical ID</h2>
                       <div className="bg-white border-2 border-white rounded-[40px] p-8 max-w-[540px] mx-auto flex items-center justify-between group cursor-pointer hover:shadow-2xl transition-all shadow-sm ring-1 ring-slate-100">
                            <span className="text-slate-400 font-bold text-lg truncate">v-identity.clinical/expert/{slug}</span>
                            <Sparkles size={24} className="text-indigo-600 group-hover:rotate-12 transition-transform" />
                       </div>
                  </div>
                  
                  <div className="pt-8">
                       <button 
                            onClick={onDownloadVCard}
                            className="h-28 px-24 bg-slate-950 text-white rounded-[40px] font-black text-2xl shadow-[0_40px_80px_rgba(15,23,42,0.4)] hover:scale-[1.05] active:scale-95 transition-all outline-none border-b-[8px] border-slate-900 pt-2"
                       >
                            Add to Contact
                       </button>
                  </div>
             </div>
        </section>

        {/* DYNAMIC SECTIONS */}
        <div className="px-12 pb-16 pt-16 bg-white relative z-10 border-t border-slate-50">
             <VCardDynamicSections card={card} />
        </div>

        {/* PREMIUM HEALTHCARE FOOTER */}
        <footer className="py-24 bg-slate-950 text-white text-center space-y-16 rounded-t-[60px] relative z-20 overflow-hidden shadow-[0_-50px_100px_rgba(0,0,0,0.2)]">
             <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                       <pattern id="hex-footer" width="40" height="69.2" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                            <path d="M20 0 L40 11.5 L40 34.6 L20 46.1 L0 34.6 L0 11.5 Z" fill="none" stroke="white" strokeWidth="0.5" />
                       </pattern>
                       <rect width="100%" height="100%" fill="url(#hex-footer)" />
                  </svg>
             </div>
             <VCardSocialLinks 
                card={card} 
                layout="horizontal" 
                variant="circular" 
                iconSize={24}
                itemClassName="hover:scale-125 transition-all text-white/20 hover:text-indigo-400"
                containerClassName="relative z-10 flex justify-center gap-14"
             />
             <div className="relative z-10 space-y-6">
                  <p className="text-[11px] font-black text-white/20 uppercase tracking-[1em]">SYSTEM NODES ACTIVE</p>
                  <p className="text-[12px] font-bold text-indigo-400 uppercase tracking-[0.4em] leading-none">{company} © 2026</p>
             </div>
        </footer>

      </div>
      
      {/* FONTS INFO */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <style jsx global>{`
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .outline-text-white {
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.1);
          color: transparent;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

function MedicalServiceGridItem({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
     return (
          <div className="bg-slate-900 rounded-[48px] p-10 flex flex-col items-center text-center space-y-8 group hover:translate-y-[-8px] transition-all shadow-2xl relative overflow-hidden">
               <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl group-hover:scale-110 transition-transform">
                    <Icon size={44} strokeWidth={1.5} />
               </div>
               <div className="space-y-4">
                    <h4 className="text-white font-black text-3xl tracking-tight leading-none">{title}</h4>
                    <p className="text-white/60 font-medium text-base leading-relaxed line-clamp-3 px-2">
                         {description}
                    </p>
               </div>
          </div>
     );
}

function MedicalContactGridItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
     return (
          <div className="bg-white/80 backdrop-blur-3xl rounded-[40px] p-8 flex items-center gap-6 group hover:translate-y-[-8px] transition-all shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden ring-1 ring-slate-100 hover:ring-indigo-200">
               {/* Accent Gradient */}
               <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-indigo-600 transition-all shadow-xl">
                    <Icon size={30} strokeWidth={1.5} />
               </div>
               <div className="space-y-1">
                    <span className="text-slate-400 font-black text-[10px] uppercase tracking-widest leading-none block">{label}</span>
                    <p className="text-slate-900 font-black text-lg tracking-tight leading-none break-all">{value}</p>
               </div>
          </div>
     );
}

function MedicalStat({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
     return (
          <div className="bg-white border border-slate-100 p-8 rounded-[32px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center space-y-4">
               <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                    <Icon size={32} strokeWidth={2.5} />
               </div>
               <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{label}</p>
                    <p className="text-lg font-black text-slate-900 tracking-tight uppercase leading-none">{value}</p>
               </div>
          </div>
     );
}

function HealthTerm({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
     return (
          <div className="flex items-center gap-6 p-8 bg-slate-50/50 rounded-[32px] border border-slate-100/50 hover:bg-white hover:shadow-2xl transition-all group">
               <div className="w-14 h-14 flex items-center justify-center text-indigo-600 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform ring-1 ring-slate-100">
                    <Icon size={26} strokeWidth={2.5} />
               </div>
               <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">{label}</label>
                    <p className="text-base font-black tracking-tight text-slate-800 leading-none mt-1">{value}</p>
               </div>
          </div>
     );
}
