"use client";
import React, { useEffect, useState } from "react";
import { SocialCircleIcon } from "@/components/SocialCircleIcon";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";
import { Mail, Phone, MapPin, Cake, Star, Download, Calendar, ExternalLink, Sparkles, MessageCircle, LayoutGrid, Share2 } from "lucide-react";
import { generateQrDataUrl, downloadQrPng } from "@/lib/qr";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

const DEFAULT_SERVICES = [
  {
    name: "Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icon: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=400"
  },
  {
    name: "Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icon: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400"
  }
];

const DEFAULT_PORTFOLIO = [
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icon: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=400"
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400"
  }
];

const DEFAULT_TESTIMONIALS = [
  {
    name: "John Martin",
    role: "CEO at California Institute",
    quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
  },
  {
    name: "Emily Watson",
    role: "CEO at ABB Technology",
    quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
  }
];

const BUSINESS_HOURS_DAY_ORDER = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const DEFAULT_BUSINESS_HOURS = {
  Monday: { open: "12:00 AM", close: "12:00 AM", isClosed: false },
  Tuesday: { open: "12:00 AM", close: "12:00 AM", isClosed: false },
  Wednesday: { open: "12:00 AM", close: "12:00 AM", isClosed: false },
  Thursday: { open: "12:00 AM", close: "12:00 AM", isClosed: false },
  Friday: { open: "12:00 AM", close: "12:00 AM", isClosed: false },
  Saturday: { open: "12:00 AM", close: "12:00 AM", isClosed: false },
  Sunday: { open: "12:00 AM", close: "12:00 AM", isClosed: true },
};

export function Corporate3VCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [qrCode, setQrCode] = useState<string>("");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const url = `${baseUrl}/${slug}`;
    generateQrDataUrl(url).then(setQrCode);
  }, [baseUrl, slug]);

  const name = card.title || "cooporate 3";
  const role = card.occupation || card.tagline || "A Freelancer UI/UX Designer";
  const testimonials =
    card.testimonials && card.testimonials.length > 0 ? card.testimonials : DEFAULT_TESTIMONIALS;
  const activeTestimonial =
    testimonials[(testimonialIndex + testimonials.length) % testimonials.length];

  useEffect(() => {
    setTestimonialIndex(0);
  }, [card.id, testimonials.length]);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-[#0A0C14] text-white font-sans flex justify-center px-0 py-0 overflow-x-hidden text-center">
      <div className="w-full max-w-[540px] bg-[#0D121F] relative flex flex-col shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] pb-20 overflow-hidden">
        
        {/* PREMIUM TOP SECTION */}
        <section className="relative">
           {/* High-End Colorful Banner */}
           <div className="relative h-[340px] w-full">
              <Image 
                 src={(card as any).bannerImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200"} 
                 alt="Banner" 
                 fill 
                 className="object-cover"
              />
              {/* Subtle mask for smooth transition */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D121F] via-transparent to-black/10"></div>
           </div>

           {/* DARK IDENTITY CONTENT */}
           <div className="pt-28 pb-16 px-8 relative">
              {/* Profile Image - Large Overlapping with Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                 <div className="relative group">
                    <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-blue-400/30 to-purple-400/30 blur-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-40 h-40 rounded-full border-[5px] border-[#0D121F] overflow-hidden shadow-2xl bg-[#0D121F]">
                       <div className="absolute inset-0 border-[3px] border-[#88C6E5]/40 rounded-full z-10 pointer-events-none"></div>
                       {card.image ? (
                           <Image
                               src={card.image}
                               alt={name}
                               fill
                               className="object-cover"
                               unoptimized={card.image.startsWith("data:")}
                           />
                       ) : (
                           <div className="w-full h-full flex items-center justify-center bg-slate-900 uppercase text-6xl font-black text-slate-700">
                               {name.charAt(0)}
                           </div>
                       )}
                    </div>
                 </div>
              </div>

              {/* Sophisticated Dot Grid Pattern (Bottom Right) */}
              <div className="absolute right-6 bottom-10 opacity-15 grid grid-cols-4 gap-2.5">
                 {[...Array(24)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                 ))}
              </div>

              {/* Name and Role */}
              <div className="space-y-4 mb-14 relative z-10">
                 <h1 className="text-[48px] font-black text-white tracking-tight leading-none">
                    {name}
                 </h1>
                 <p className="text-[22px] font-medium text-slate-400/90 tracking-tight">
                    {role}
                 </p>
              </div>

              {/* Premium Social Icons row (Custom Gloss Style) */}
              <div className="flex justify-center flex-wrap gap-7 items-center relative z-10">
                  <VCardSocialLinks
                    card={card}
                    layout="horizontal"
                    variant="circular"
                    iconSize={20}
                    // Keep all icons inside one premium container.
                    containerClassName="flex"
                  />
              </div>
           </div>
        </section>

        {/* CONTACT INFO GRID SECTION (Image Style) */}
        <section className="px-8 pb-16 relative z-10">
           <div className="grid grid-cols-2 gap-y-10 gap-x-4">
              {/* Email */}
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 rounded-full border-2 border-[#3F51B5] bg-[#0A0C14] flex items-center justify-center text-[#88C6E5] shrink-0">
                    <Mail className="w-6 h-6" />
                 </div>
                 <div className="text-left overflow-hidden">
                    <p className="text-[12px] font-medium text-slate-400">E-mail address</p>
                    <p className="text-[15px] font-bold text-white truncate">{card.email || "aryan631@gmail.com"}</p>
                 </div>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 rounded-full border-2 border-[#3F51B5] bg-[#0A0C14] flex items-center justify-center text-[#88C6E5] shrink-0">
                    <Phone className="w-6 h-6" />
                 </div>
                 <div className="text-left">
                    <p className="text-[12px] font-medium text-slate-400">Mobile Number</p>
                    <p className="text-[15px] font-bold text-white">{card.phone || "+1 97939 97930"}</p>
                 </div>
              </div>
              {/* DOB */}
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 rounded-full border-2 border-[#3F51B5] bg-[#0A0C14] flex items-center justify-center text-[#88C6E5] shrink-0">
                    <Cake className="w-6 h-6" />
                 </div>
                 <div className="text-left">
                    <p className="text-[12px] font-medium text-slate-400">Date of Birth</p>
                    <p className="text-[15px] font-bold text-white">{card.birthDate || "17 April 1997"}</p>
                 </div>
              </div>
              {/* Location */}
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 rounded-full border-2 border-[#3F51B5] bg-[#0A0C14] flex items-center justify-center text-[#88C6E5] shrink-0">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <div className="text-left">
                    <p className="text-[12px] font-medium text-slate-400">Location</p>
                    <p className="text-[15px] font-bold text-white">{card.address || "Washington - USA"}</p>
                 </div>
              </div>
           </div>
           
           {/* Horizontal Divider Line */}
           <div className="mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
        </section>

         {/* OUR SERVICES SECTION (Dark Style - Image Style) */}
        <section className="px-8 pb-16 relative z-10">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white">Our Services</h2>
           </div>

           <div className="grid grid-cols-2 gap-6">
              {(card.services && card.services.length > 0 ? card.services : DEFAULT_SERVICES).map((s, idx) => (
                 <div key={idx} className="bg-[#151B29]/60 border border-white/5 rounded-[40px] p-4 flex flex-col items-start text-left shadow-2xl pb-8 group hover:border-white/10 transition-colors">
                    <div className="relative w-full aspect-square rounded-[32px] overflow-hidden mb-6">
                       <Image 
                          src={s.icon || "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=400"} 
                          alt={s.name} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                       />
                    </div>
                    <div className="space-y-2 px-2">
                       <h3 className="text-base font-black text-white leading-tight">{s.name}</h3>
                       <p className="text-[12px] font-medium text-slate-400 leading-relaxed line-clamp-6">
                          {s.description}
                       </p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* TESTIMONIAL SECTION (Image Style) */}
        <section className="px-8 pb-20 relative z-10">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white">Testimonial</h2>
           </div>

           <div className="flex flex-col gap-8 relative">
              {/* Floating Buttons (As per Screenshot) */}
              <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-xl border border-blue-50 cursor-pointer hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                 </div>
                 <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                    <LayoutGrid className="w-8 h-8" />
                 </div>
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-xl border border-blue-50 cursor-pointer hover:scale-110 transition-transform">
                    <Share2 className="w-6 h-6" />
                 </div>
              </div>

              <div className="bg-white rounded-3xl p-8 flex gap-6 items-start shadow-xl text-left border border-slate-50">
                <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-slate-50">
                  <Image
                    src={activeTestimonial.image || "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=40"}
                    alt={activeTestimonial.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
                    {activeTestimonial.quote}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-[14px] font-bold text-slate-800">
                    - {activeTestimonial.name} -{" "}
                    <span className="text-slate-400 font-medium">{activeTestimonial.role}</span>
                  </p>
                </div>
              </div>

              {testimonials.length > 1 && (
                <div className="flex items-center justify-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={`testimonial-dot-${idx}`}
                      type="button"
                      onClick={() => setTestimonialIndex(idx)}
                      className={`h-2.5 w-2.5 rounded-full transition-colors ${
                        idx === testimonialIndex ? "bg-blue-400" : "bg-white/35 hover:bg-white/60"
                      }`}
                      aria-label={`Show testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
           </div>
        </section>

        {/* QR CODE SECTION (Image Style) */}
        <section className="px-8 pb-16 relative z-10">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white">QR Code</h2>
           </div>

           <div className="bg-white rounded-[40px] p-10 flex gap-12 items-center shadow-2xl border border-slate-50">
              {/* QR Image */}
              <div className="w-56 h-56 bg-white p-2 shrink-0">
                 {qrCode ? (
                    <img src={qrCode} alt="vCard QR" className="w-full h-full object-contain" />
                 ) : (
                    <div className="w-full h-full bg-slate-50 animate-pulse rounded-2xl" />
                 )}
              </div>

              {/* Identity & Download */}
              <div className="flex-1 flex flex-col items-center gap-6">
                 <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-50 shadow-lg">
                    {card.image ? (
                       <Image src={card.image} alt={name} width={128} height={128} className="w-full h-full object-cover" />
                    ) : (
                       <div className="w-full h-full bg-slate-100 flex items-center justify-center text-3xl font-black text-slate-300">
                          {name.charAt(0)}
                       </div>
                    )}
                 </div>
                 <h3 className="text-xl font-black text-slate-800">{name}</h3>
                 <button 
                  onClick={() => qrCode && downloadQrPng(qrCode, `${slug}-vcard-qr`)}
                  className="w-full py-4 px-6 rounded-2xl bg-[#54a3f4] text-white font-bold text-[15px] shadow-lg shadow-blue-500/30 hover:bg-blue-400 transition-colors flex items-center justify-center gap-3"
                 >
                    Download My QR Code
                 </button>
              </div>
           </div>
        </section>

        {/* BUSINESS HOURS SECTION (Dark Style - Image Style) */}
        <section className="px-8 pb-16 relative z-10">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white">Business Hours</h2>
           </div>

           <div className="flex flex-col gap-4">
              {BUSINESS_HOURS_DAY_ORDER.map((day) => {
                 const hours = (card.businessHours as any)?.[day] || (DEFAULT_BUSINESS_HOURS as any)[day];
                 return (
                    <div key={day} className="bg-[#151B29]/60 border border-white/5 rounded-3xl p-6 flex items-center gap-6 shadow-xl transition-all hover:border-white/10 group">
                       <div className="w-16 h-16 bg-[#252B39] rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                          <Calendar className="w-7 h-7" />
                       </div>
                       <div className="flex flex-col items-start gap-1">
                          <span className="text-[15px] font-bold text-blue-400 uppercase tracking-widest">{day}</span>
                          <span className="text-lg font-black text-white">
                             {hours.isClosed ? "Closed" : `${hours.open} - ${hours.close}`}
                          </span>
                       </div>
                    </div>
                 );
              })}
           </div>
        </section>

        {/* BLOGS SECTION (Moved between Business Hours and Enquiries) */}
        <section className="px-8 pb-16 relative z-10">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white">Blogs</h2>
           </div>

           <div className="grid grid-cols-2 gap-6">
              {(card.blogs && card.blogs.length > 0 ? card.blogs : DEFAULT_PORTFOLIO).map((item, idx) => (
                 <div key={idx} className="bg-[#151B29]/60 border border-white/5 rounded-[40px] p-4 flex flex-col items-start text-left shadow-2xl pb-8 group hover:border-white/10 transition-colors">
                    <div className="relative w-full aspect-square rounded-[32px] overflow-hidden mb-6">
                       <Image 
                          src={item.icon || "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=400"} 
                          alt={item.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                       />
                    </div>
                    <div className="space-y-2 px-2">
                       <h3 className="text-base font-black text-white leading-tight">{item.title}</h3>
                       <p className="text-[12px] font-medium text-slate-400 leading-relaxed line-clamp-6">
                          {item.description}
                       </p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* ENQUIRIES / CONTACT FORM SECTION (Dark Style - Image Style) */}
        <section className="px-8 pb-32 relative z-10">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white">Enquiries</h2>
           </div>

           <form className="max-w-md mx-auto space-y-5">
              <input 
                 type="text" 
                 placeholder="Full Name" 
                 className="w-full h-16 px-8 rounded-2xl bg-[#1E293B] border border-white/5 text-white placeholder:text-slate-400 font-bold focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
              />
              <input 
                 type="email" 
                 placeholder="E-mail Address" 
                 className="w-full h-16 px-8 rounded-2xl bg-[#1E293B] border border-white/5 text-white placeholder:text-slate-400 font-bold focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
              />
              <input 
                 type="tel" 
                 placeholder="Phone Number" 
                 className="w-full h-16 px-8 rounded-2xl bg-[#1E293B] border border-white/5 text-white placeholder:text-slate-400 font-bold focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
              />
              <textarea 
                 placeholder="Type a message here..." 
                 rows={6}
                 className="w-full px-8 py-6 rounded-3xl bg-[#1E293B] border border-white/5 text-white placeholder:text-slate-400 font-bold focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
              />
              
              <div className="pt-8 flex justify-center">
                 <button 
                  type="button"
                  className="px-16 py-5 rounded-full bg-[#54a3f4] text-white font-black text-lg shadow-xl shadow-blue-500/20 hover:bg-blue-400 transition-all hover:scale-[1.02] active:scale-95"
                 >
                    Send Message
                 </button>
              </div>
           </form>
        </section>

        {/* CREATE YOUR VCARD SECTION (Dark Style - Image Style) */}
        <section className="px-8 pb-32 relative z-10">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white">Create Your VCard</h2>
           </div>

           <div className="max-w-md mx-auto space-y-12">
              {/* URL Display Box */}
              <div className="w-full h-18 py-6 px-10 rounded-2xl bg-white flex items-center justify-between shadow-2xl">
                 <span className="text-[#54a3f4] font-bold text-lg truncate pr-4">
                    {baseUrl}/{slug}
                 </span>
                 <ExternalLink className="w-6 h-6 text-[#54a3f4] shrink-0" />
              </div>

              {/* Add To Contact Button */}
              <div className="flex justify-center">
                 <button 
                  type="button"
                  onClick={() => onDownloadVCard?.()}
                  className="px-16 py-5 rounded-full bg-[#54a3f4] text-white font-black text-lg shadow-xl shadow-blue-500/20 hover:bg-blue-400 transition-all hover:scale-[1.02] active:scale-95 text-center"
                 >
                    Add To Contact
                 </button>
              </div>
           </div>
        </section>

        {/* PREMIUM SIGNATURE FOOTER (Dark) */}
        <footer className="bg-[#0D121F] py-24 px-8 relative overflow-hidden text-center">
            {/* Subtle Gradient Line Top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            {/* Background Glow */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none opacity-50" />

            <div className="relative z-10 space-y-10">
                {/* Brand Badge */}
                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md">
                    <Sparkles className="w-4 h-4 text-[#54a3f4] fill-[#54a3f4]/20" />
                    <span className="text-[12px] font-black text-white uppercase tracking-[0.3em]">
                       {name}
                    </span>
                </div>
                
                {/* Copyright Line */}
                <div className="space-y-3">
                    <p className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.5em] leading-relaxed">
                       &copy; {new Date().getFullYear()} Â· Corporate Elite Edition
                    </p>
                    <div className="flex justify-center flex-wrap gap-2 text-[10px] font-black text-slate-700 uppercase tracking-widest">
                       <span>Secure</span>
                       <span>Â·</span>
                       <span>Verified</span>
                       <span>Â·</span>
                       <span>Premium</span>
                    </div>
                </div>

                <div className="pt-4 opacity-20">
                    <div className="w-1 h-1 rounded-full bg-white mx-auto"></div>
                </div>
            </div>
        </footer>
      </div>
    </div>
  );
}
