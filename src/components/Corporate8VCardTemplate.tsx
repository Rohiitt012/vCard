"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { Mail, Phone, MapPin, Cake, Calendar, ExternalLink, Facebook, Instagram, Linkedin, Twitter, MessageCircle, ChevronDown, LayoutGrid, User, Sparkles, Globe, Maximize, ArrowRight, Quote, Clock, Upload } from "lucide-react";
import { generateQrDataUrl } from "@/lib/qr";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function Corporate8VCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [qrCode, setQrCode] = useState<string>("");

  useEffect(() => {
    const url = `${baseUrl}/${slug}`;
    generateQrDataUrl(url).then(setQrCode);
  }, [baseUrl, slug]);

  const name = card.title || "Kara Frederick";
  const role = card.occupation || card.tagline || "Make-up Artist";
  const tagline = "Making Every Look Picture-Perfect.";

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A3E31] font-sans flex justify-center px-0 py-0 overflow-x-hidden relative">
      <div className="w-full max-w-[540px] bg-white relative flex flex-col shadow-[0_30px_100px_rgba(0,0,0,0.05)] overflow-hidden">
        
        {/* FASHION/MAKEUP BANNER - Matching Image 12 */}
        <section className="relative h-[420px] w-full overflow-hidden shrink-0 group">
             {/* Main Banner Image */}
             <Image 
                src={(card as any).bannerImage || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200"} 
                alt="Makeup Banner" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
             />
             
             {/* Gradient Overlay for text readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

             {/* Vertical "FASHION" Outline Text */}
             <div className="absolute left-8 top-1/2 -translate-y-1/2 h-full flex items-center select-none pointer-events-none">
                 <h2 className="text-[120px] font-black text-transparent stroke-white/20 stroke-[2px] leading-none uppercase -rotate-90 origin-center whitespace-nowrap opacity-40 tracking-widest" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.3)' }}>
                    FASHION
                 </h2>
             </div>

             {/* Language Selector Top Right */}
             <div className="absolute top-6 right-6">
                 <button className="bg-[#D2B48C]/90 backdrop-blur-md text-white px-4 py-2 rounded-[8px] flex items-center gap-2 text-[14px] font-bold shadow-lg hover:bg-[#C19A6B] transition-all">
                     EN <ChevronDown size={16} />
                 </button>
             </div>

             {/* "WE LOVE MAKEUP" Headline Box */}
             <div className="absolute bottom-16 right-8 flex flex-col items-end max-w-[320px] animate-in slide-in-from-right-10 duration-1000">
                 <div className="bg-white px-4 py-1 mb-1">
                     <span className="text-[34px] font-black text-black leading-none uppercase tracking-tight">WE LOVE</span>
                 </div>
                 <div className="bg-[#D2B48C] px-6 py-2 mb-4 shadow-xl">
                     <span className="text-[48px] font-black text-white leading-none uppercase tracking-tighter">MAKEUP</span>
                 </div>
                 <p className="text-white/80 text-[13px] font-medium text-right leading-relaxed line-clamp-3">
                    {card.description || "Donec id nunc quis nunc tincidunt hendrerit. Aliquam facilisis laoreet mauris nec tincidunt. Phasellus tempor laoreet accumsan."}
                 </p>
             </div>
        </section>

        {/* IDENTITY CARD SECTION - Matching Image 12/13 */}
        <section className="px-6 -mt-32 relative z-20 pb-16">
            <div className="relative">
                {/* Floating Accessories from Image */}
                <div className="absolute -bottom-8 -left-8 w-32 h-32 pointer-events-none drop-shadow-2xl z-30 opacity-80 rotate-[-20deg]">
                    <Image src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=200" alt="Brush" fill className="object-contain" />
                </div>

                {/* Main Identity Box */}
                <div className="bg-[#F3E9DD] rounded-[40px] border-[1.5px] border-[#D2B48C]/30 p-8 shadow-[0_30px_60px_-15px_rgba(210,180,140,0.3)] relative group animate-in zoom-in duration-700">
                    
                    {/* Background Shopping Bags Watermark */}
                    <div className="absolute right-4 bottom-4 w-48 h-32 opacity-[0.1] select-none pointer-events-none overflow-hidden grayscale">
                        <Image src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=400" alt="Bags" fill className="object-cover" />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-8 relative z-10">
                        {/* Circle Portrait */}
                        <div className="relative w-44 h-44 shrink-0">
                            <div className="absolute inset-0 bg-white rounded-full scale-[1.05] shadow-inner" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-xl group-hover:scale-110 transition-transform duration-700">
                                {card.image ? (
                                    <Image src={card.image} alt={name} fill className="object-cover" unoptimized={card.image.startsWith("data:")} />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-[#D2B48C]/10 text-5xl font-black text-[#D2B48C]/40">{name.charAt(0)}</div>
                                )}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex flex-col text-center sm:text-left pt-2">
                            <h1 className="text-[34px] font-black text-[#2D241E] leading-none mb-2 tracking-tight">
                                {name}
                            </h1>
                            <p className="text-[17px] font-black italic text-[#C19A6B] mb-2 drop-shadow-sm">
                                {card.tagline || tagline}
                            </p>
                            <p className="text-[15px] font-bold text-[#4A3E31]/50 uppercase tracking-[0.2em]">
                                {role}
                            </p>
                        </div>
                    </div>

                    {/* Floating Menu Button on the Edge */}
                    <div className="absolute top-1/2 -right-8 -translate-y-1/2 z-40">
                        <button className="w-[64px] h-[64px] bg-[#C19A6B] rounded-[24px] shadow-[0_15px_30px_rgba(193,154,107,0.4)] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform ring-[6px] ring-white">
                            <LayoutGrid className="w-[28px] h-[28px] text-white" strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* ABOUT / DESCRIPTION SECTION - Matching Image 12 */}
        <section className="px-10 pb-20 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700 flex flex-col items-center">
            {/* Horizontal Line with Icon Decorator */}
            <div className="flex items-center w-full max-w-[400px] gap-4 mb-12">
                <div className="h-[1.5px] bg-[#D2B48C]/40 flex-1" />
                <Sparkles size={20} className="text-[#D2B48C]" />
                <div className="h-[1.5px] bg-[#D2B48C]/40 flex-1" />
            </div>

            <p className="text-[16px] sm:text-[18px] text-[#4A3E31]/80 text-center leading-[1.8] font-medium max-w-[460px]">
                A <strong className="text-[#2D241E] font-black underline decoration-[#D2B48C] decoration-[3px] underline-offset-4">Makeup Artist</strong> {card.description || "is a professional who specializes in enhancing or transforming a person's appearance using cosmetic products. They work across various industries including beauty, fashion, film, television, theater, and events."}
            </p>
        </section>

        {/* CUSTOM CONTACT SECTION - Matching Image 14 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            {/* Elegant Header with Decorative Divider */}
            <div className="flex flex-col items-center mb-16 relative">
                 {/* Floating Accessories in Corners */}
                 <div className="absolute -top-12 -left-4 w-16 h-16 pointer-events-none drop-shadow-lg opacity-80 rotate-[-15deg]">
                    <Image src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=100" alt="Brush" fill className="object-contain" />
                 </div>
                 <div className="absolute -top-4 -right-2 w-16 h-16 pointer-events-none drop-shadow-lg opacity-80 rotate-[30deg]">
                    <Image 
                        src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=200" 
                        alt="Eyeliner" 
                        fill 
                        className="object-contain"
                        sizes="80px"
                    />
                 </div>

                 <h2 className="text-[36px] font-black italic text-[#C19A6B] tracking-tight mb-2 font-serif">Contact</h2>
                 <div className="flex items-center gap-3 w-40">
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                    <div className="w-2 h-2 border border-[#D2B48C] rotate-45" />
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                 </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
                 <PremiumContactItem icon={Mail} value={card.email || "info@kara.com"} />
                 <PremiumContactItem icon={Mail} value="contact.kara@gmail.com" />
                 <PremiumContactItem icon={Phone} value={card.phone || "+919638527410"} />
                 <PremiumContactItem icon={Phone} value="+919685748545" />
                 <PremiumContactItem icon={Cake} value={card.birthDate || "02/06/1994"} />
                 <PremiumContactItem icon={MapPin} value={card.address || "Delhi - Noida"} />
            </div>

            {/* SCALLOPED SOCIAL LINKS - Matching Image 14 */}
            <div className="mt-16 flex flex-col items-center">
                <VCardSocialLinks 
                    card={card} 
                    layout="vertical" 
                    variant="circular" 
                    iconSize={22}
                    itemClassName="bg-[#F3E9DD] rounded-[24px] border border-[#D2B48C]/20 p-4 w-full max-w-[340px] shadow-md hover:border-[#C19A6B]/30"
                />
            </div>

            <div className="mt-16 flex flex-col items-center gap-6">
                <button 
                    onClick={onDownloadVCard}
                    className="w-full max-w-[340px] bg-[#C19A6B] text-white py-6 rounded-[24px] text-[18px] font-black tracking-tight shadow-xl shadow-[#C19A6B]/20 hover:bg-[#2D241E] transition-all duration-500 active:scale-95 flex items-center justify-center gap-3 group"
                >
                    <User size={22} className="group-hover:rotate-12 transition-transform" />
                    Save My Contact
                </button>
            </div>
        </section>

        {/* CUSTOM BUSINESS HOURS SECTION - Matching Image 22 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
            {/* Elegant Header */}
            <div className="flex flex-col items-center mb-16 relative pt-8">
                 {/* Floating Eyelash Box Icon Right Top */}
                 <div className="absolute top-0 right-[-10px] w-24 h-24 pointer-events-none drop-shadow-2xl z-30 opacity-90 rotate-[15deg]">
                    <Image 
                        src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=300" 
                        alt="Eyelashes" 
                        fill 
                        className="object-contain"
                        sizes="120px"
                    />
                 </div>

                 <h2 className="text-[36px] font-black italic text-[#C19A6B] tracking-tight mb-2 font-serif">Business Hours</h2>
                 <div className="flex items-center gap-3 w-40">
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                    <div className="w-2 h-2 border border-[#D2B48C] rotate-45" />
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                 </div>
            </div>

            {/* Hours Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
                 {[
                    { day: "Monday", hours: "06:00 AM - 10:30 PM" },
                    { day: "Tuesday", hours: "06:00 AM - 10:30 PM" },
                    { day: "Wednesday", hours: "06:00 AM - 10:30 PM" },
                    { day: "Thursday", hours: "06:00 AM - 10:30 PM" },
                    { day: "Friday", hours: "06:00 AM - 10:30 PM" },
                    { day: "Saturday", hours: "06:00 AM - 10:30 PM" }
                 ].map((h, idx) => {
                    const dynamicHours = (card as any).businessHours?.find((dh: any) => dh.day === h.day);
                    return <PremiumBusinessHour key={idx} day={h.day} hours={dynamicHours ? `${dynamicHours.startTime} - ${dynamicHours.endTime}` : h.hours} />;
                 })}
                 
                 {/* Centered Sunday */}
                 <div className="sm:col-span-2 flex justify-center">
                    <div className="w-full sm:w-1/2">
                         {(() => {
                            const dynamicHours = (card as any).businessHours?.find((dh: any) => dh.day === "Sunday");
                            return <PremiumBusinessHour day="Sunday" hours={dynamicHours ? `${dynamicHours.startTime} - ${dynamicHours.endTime}` : "06:00 AM - 10:30 PM"} />;
                         })()}
                    </div>
                 </div>
            </div>
        </section>

        {/* CUSTOM GALLERY SECTION - Matching Image 15 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
            {/* Elegant Header */}
            <div className="flex flex-col items-center mb-12 relative pt-8">
                 {/* Redesigned Premium Cross Icon - Matching Image 25 */}
                 <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none drop-shadow-xl opacity-90">
                    <div className="w-14 h-14 bg-[#FDFBF7] rounded-full border border-[#D2B48C]/10 flex items-center justify-center relative">
                         {/* Thin inner circle border */}
                         <div className="absolute inset-[10px] border border-[#2D241E]/40 rounded-full" />
                         {/* Clean centered cross */}
                         <div className="relative w-4 h-4 text-[#2D241E] flex items-center justify-center">
                            <div className="absolute w-[2px] h-full bg-current rotate-45 rounded-full" />
                            <div className="absolute h-[2px] w-full bg-current rotate-45 rounded-full" />
                         </div>
                    </div>
                 </div>

                 <h2 className="text-[36px] font-black italic text-[#C19A6B] tracking-tight mb-2 font-serif">Gallery</h2>
                 <div className="flex items-center gap-3 w-40">
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                    <div className="w-2 h-2 border border-[#D2B48C] rotate-45" />
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                 </div>
            </div>

            {/* Gallery Image Mockup */}
            <div className="relative group transition-all duration-700">
                <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden border border-[#D2B48C]/40 shadow-2xl">
                    <Image 
                        src={card.galleries?.[0]?.imageUrl || "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800"} 
                        alt="Gallery" 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Maximize Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-[#C19A6B]/80 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-[#C19A6B] transition-colors">
                        <Maximize size={18} strokeWidth={2.5} />
                    </div>
                </div>

                {/* Pagination Dots (Matching Image: dot dot DASH dot) */}
                <div className="flex justify-center items-center gap-3 mt-8">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D2B48C]/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D2B48C]/40" />
                    <div className="w-8 h-2.5 rounded-full bg-[#C19A6B]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D2B48C]/40" />
                </div>
            </div>
        </section>

        {/* CUSTOM PRODUCTS SECTION - Matching Image 15 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
            {/* Elegant Header */}
            <div className="flex flex-col items-center mb-16 relative">
                 {/* Floating Palette Icon in Right Top - Using reliable high-quality Unsplash image */}
                 <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none drop-shadow-2xl z-30 opacity-90 rotate-[15deg]">
                    <Image 
                        src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400" 
                        alt="Palette" 
                        fill 
                        className="object-contain"
                        sizes="100px"
                    />
                 </div>

                 <h2 className="text-[36px] font-black italic text-[#C19A6B] tracking-tight mb-2 font-serif">Products</h2>
                 <div className="flex items-center gap-3 w-40">
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                    <div className="w-2 h-2 border border-[#D2B48C] rotate-45" />
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                 </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {(card.products && card.products.length > 0 ? card.products : [
                    { title: "MAKEUP Artist Special Offer", price: "50", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400" },
                    { title: "BIG SALE Makeup Artist", price: "90", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400" }
                 ]).map((p: any, idx) => (
                    <div key={idx} className="relative group overflow-hidden rounded-[32px] bg-[#6E5C5B] p-1 shadow-2xl transition-all duration-500 hover:-translate-y-2">
                         <div className="relative aspect-[4/3] w-full rounded-[28px] overflow-hidden">
                             <Image src={p.image || p.imageUrl || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"} alt={p.title || p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                             {/* Text overlay similar to image */}
                             <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                         </div>
                         <div className="flex items-center justify-between px-6 py-4">
                            <h3 className="text-[12px] font-black text-white/90 uppercase tracking-widest truncate max-w-[70%]">{p.title || p.name}</h3>
                            <span className="text-[16px] font-black text-white tracking-tighter">₹{p.price}</span>
                         </div>
                    </div>
                 ))}
            </div>

            {/* View More Products Button - Matching Image 16 */}
            <div className="mt-12 flex justify-center">
                 <button className="bg-[#C19A6B]/80 hover:bg-[#C19A6B] text-white px-8 py-3.5 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-[#C19A6B]/20 transition-all active:scale-95">
                    View More Products <ArrowRight size={18} strokeWidth={2.5} />
                 </button>
            </div>
        </section>

        {/* CUSTOM OUR SERVICES SECTION - Matching Image 16 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
            {/* Elegant Header */}
            <div className="flex flex-col items-center mb-16 relative">
                 {/* Floating Accessories in Corners */}
                 <div className="absolute top-0 left-[-10px] w-20 h-20 pointer-events-none drop-shadow-xl opacity-80 rotate-[-10deg]">
                    <Image src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=150" alt="Perfume" fill className="object-contain" />
                 </div>
                 <div className="absolute top-10 right-[-10px] w-20 h-20 pointer-events-none drop-shadow-xl opacity-80 rotate-[20deg]">
                    <Image 
                        src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=200" 
                        alt="Eyeliner" 
                        fill 
                        className="object-contain"
                        sizes="100px"
                    />
                 </div>

                 <h2 className="text-[36px] font-black italic text-[#C19A6B] tracking-tight mb-2 font-serif">Our Services</h2>
                 <div className="flex items-center gap-3 w-40">
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                    <div className="w-2 h-2 border border-[#D2B48C] rotate-45" />
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                 </div>
            </div>

            {/* Services Grid - Expanded to 4 items and using high-quality reliable images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {(card.services && card.services.length >= 4 ? card.services : [
                    { 
                        name: "Fashion & Editorial Makeup", 
                        description: "High-definition, creative looks for photo shoots, runway shows, and fashion campaigns.", 
                        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800" 
                    },
                    { 
                        name: "HD Makeup", 
                        description: "Flawless finish makeup using high-definition products ideal for photos and videos.", 
                        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800" 
                    },
                    { 
                        name: "Theater & Stage Makeup", 
                        description: "Bold and expressive makeup for actors, dancers, and performers suited to stage lighting.", 
                        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800" 
                    },
                    { 
                        name: "Airbrush Makeup", 
                        description: "Lightweight, long-lasting makeup applied with an airbrush tool for a natural and...", 
                        image: "https://images.unsplash.com/photo-1522338255047-105ec746db95?q=80&w=800" 
                    }
                 ]).map((s: any, idx) => (
                    <div key={idx} className="bg-white rounded-[24px] overflow-hidden border border-[#D2B48C]/20 shadow-xl group transition-all duration-500 hover:-translate-y-2">
                        {/* Service Image */}
                        <div className="relative aspect-[16/11] w-full overflow-hidden">
                             <Image 
                                src={s.image || s.icon || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800"} 
                                alt={s.name} 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                sizes="(max-width: 768px) 100vw, 50vw"
                             />
                        </div>
                        {/* Text Area */}
                        <div className="bg-[#F3E9DD] p-6 text-center space-y-3 min-h-[160px] flex flex-col justify-center">
                            <h3 className="text-[19px] font-black text-[#C19A6B] leading-tight">{s.name}</h3>
                            <p className="text-[13px] font-medium text-[#4A3E31]/70 leading-relaxed">
                                {s.description}
                            </p>
                        </div>
                    </div>
                 ))}
            </div>
        </section>

        {/* CUSTOM INQUIRIES SECTION - Matching Image 23 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
            {/* Elegant Header */}
            <div className="flex flex-col items-center mb-12 relative pt-8">
                 {/* Floating Accessories in Corners */}
                 <div className="absolute top-0 left-[-20px] w-20 h-20 pointer-events-none drop-shadow-xl opacity-80 rotate-[-15deg]">
                    <Image src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=150" alt="Brush" fill className="object-contain" />
                 </div>
                 <div className="absolute top-[-10px] right-[-10px] w-20 h-20 pointer-events-none drop-shadow-xl opacity-80 rotate-[30deg]">
                    <Image src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=150" alt="Comb" fill className="object-contain" />
                 </div>

                 <h2 className="text-[36px] font-black italic text-[#C19A6B] tracking-tight mb-2 font-serif">Inquiries</h2>
                 <div className="flex items-center gap-3 w-40">
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                    <div className="w-2 h-2 border border-[#D2B48C] rotate-45" />
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                 </div>
            </div>

            {/* Inquiry Form Card */}
            <div className="bg-[#F3E9DD] rounded-[32px] p-8 border border-[#D2B48C]/20 shadow-lg space-y-6">
                 <div className="space-y-4">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full bg-white rounded-[16px] px-6 py-4 text-[15px] font-bold text-[#4A3E31] placeholder:text-[#C19A6B]/50 outline-none border border-transparent focus:border-[#C19A6B]/30 transition-all"
                    />
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full bg-white rounded-[16px] px-6 py-4 text-[15px] font-bold text-[#4A3E31] placeholder:text-[#C19A6B]/50 outline-none border border-transparent focus:border-[#C19A6B]/30 transition-all"
                    />
                    <input 
                        type="tel" 
                        placeholder="Enter Phone Number" 
                        className="w-full bg-white rounded-[16px] px-6 py-4 text-[15px] font-bold text-[#4A3E31] placeholder:text-[#C19A6B]/50 outline-none border border-transparent focus:border-[#C19A6B]/30 transition-all"
                    />
                    <textarea 
                        placeholder="Type a message here..." 
                        rows={5}
                        className="w-full bg-white rounded-[16px] px-6 py-4 text-[15px] font-bold text-[#4A3E31] placeholder:text-[#C19A6B]/50 outline-none border border-transparent focus:border-[#C19A6B]/30 transition-all resize-none"
                    />
                 </div>

                 {/* File Upload Mockup */}
                 <div className="space-y-4">
                    <button className="w-full bg-white rounded-[16px] border-[2px] border-dashed border-[#D2B48C]/40 py-5 flex items-center justify-center gap-3 text-[#C19A6B] font-bold group hover:border-[#C19A6B] transition-colors">
                        <Upload size={20} strokeWidth={2.5} className="group-hover:-translate-y-1 transition-transform" />
                        Choose File to upload
                    </button>
                    <p className="text-[12px] font-bold text-[#4A3E31]/50">Files Supported: JPG, PNG, JPEG</p>
                 </div>

                 {/* Submit Button */}
                 <div className="flex justify-center pt-4">
                    <button className="bg-[#C19A6B] text-white px-12 py-4 rounded-[20px] text-[18px] font-black tracking-tight shadow-xl shadow-[#C19A6B]/20 hover:bg-[#2D241E] transition-all duration-500 active:scale-95">
                        Send Message
                    </button>
                 </div>
            </div>
        </section>

        {/* PREMIUM DYNAMIC SECTIONS */}
        <div className="px-0 pb-16">
            <VCardDynamicSections card={card} />
        </div>

        {/* CUSTOM BLOG SECTION - Matching Image 19 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
            {/* Elegant Header */}
            <div className="flex flex-col items-center mb-12 relative pt-8">
                 {/* Floating Compact Powder Icon Left Top */}
                 <div className="absolute top-0 left-[-15px] w-24 h-24 pointer-events-none drop-shadow-2xl z-30 opacity-90 rotate-[-15deg]">
                    <Image 
                        src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=300" 
                        alt="Compact" 
                        fill 
                        className="object-contain"
                        sizes="100px"
                    />
                 </div>

                 <h2 className="text-[36px] font-black italic text-[#C19A6B] tracking-tight mb-2 font-serif">Blog</h2>
                 <div className="flex items-center gap-3 w-40">
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                    <div className="w-2 h-2 border border-[#D2B48C] rotate-45" />
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                 </div>
            </div>

            {/* Blog Post Card */}
            <div className="bg-white rounded-[32px] overflow-hidden border border-[#D2B48C]/20 shadow-xl group transition-all duration-500 hover:-translate-y-2">
                 {/* Blog Image */}
                 <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image 
                        src={(card.blogs?.[0] as any)?.imageUrl || (card.blogs?.[0] as any)?.image || "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200"} 
                        alt="Blog Feature" 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                 </div>
                 {/* Content Area */}
                 <div className="bg-[#F3E9DD] p-8 space-y-4 relative">
                      <h3 className="text-[22px] font-black text-[#C19A6B] leading-tight">
                        {card.blogs?.[0]?.title || "Seasonal Makeup Looks"}
                      </h3>
                      <p className="text-[14px] font-medium text-[#4A3E31]/70 leading-relaxed max-w-[90%]">
                        {card.blogs?.[0]?.description || "Highlight makeup trends for the current season (spring pastels, summer glow, fall tones, winter glam). Include product suggestions and mini tutorials to keep..."}
                      </p>
                      
                      {/* Read More Button Bottom Right */}
                      <div className="flex justify-end pt-2">
                        <button className="bg-[#C19A6B]/80 hover:bg-[#C19A6B] text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95 text-[14px]">
                            Read More <ArrowRight size={16} strokeWidth={2.5} />
                        </button>
                      </div>
                 </div>
            </div>

            {/* Blog Pagination Dots (dot dot dot DASH dot) */}
            <div className="flex justify-center items-center gap-3 mt-10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D2B48C]/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#D2B48C]/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#D2B48C]/40" />
                <div className="w-8 h-2.5 rounded-full bg-[#C19A6B]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#D2B48C]/40" />
            </div>
        </section>

        {/* CUSTOM TESTIMONIALS SECTION - Matching Image 20 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
            {/* Elegant Header */}
            <div className="flex flex-col items-center mb-16 relative pt-8">
                 {/* Floating Accessories in Corners */}
                 <div className="absolute top-0 left-[-20px] w-24 h-24 pointer-events-none drop-shadow-sm opacity-40 select-none grayscale invert contrast-75">
                    <Image src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=200" alt="Face Art" fill className="object-contain" />
                 </div>
                 <div className="absolute top-10 right-[-10px] w-20 h-20 pointer-events-none drop-shadow-xl opacity-80 rotate-[30deg]">
                    <Image src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=150" alt="Brush" fill className="object-contain" />
                 </div>

                 <h2 className="text-[36px] font-black italic text-[#C19A6B] tracking-tight mb-2 font-serif">Testimonials</h2>
                 <div className="flex items-center gap-3 w-40">
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                    <div className="w-2 h-2 border border-[#D2B48C] rotate-45" />
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                 </div>
            </div>

            {/* Testimonial Card Mockup */}
            <div className="relative pt-10">
                {/* Outer White Card */}
                <div className="bg-white rounded-[40px] border border-[#D2B48C]/30 p-8 shadow-xl flex flex-col items-center relative group transition-all duration-500 hover:shadow-2xl">
                    
                    {/* Overlapping Avatar */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#C19A6B] flex items-center justify-center text-white shadow-xl">
                            <Quote size={20} fill="currentColor" className="rotate-180" />
                        </div>
                        <div className="w-24 h-24 rounded-full border-[6px] border-white shadow-2xl overflow-hidden relative group-hover:scale-110 transition-transform duration-700">
                             <Image 
                                src={(card.testimonials?.[0] as any)?.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"} 
                                alt="Reviewer" 
                                fill 
                                className="object-cover"
                             />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-[#C19A6B] flex items-center justify-center text-white shadow-xl">
                            <Quote size={20} fill="currentColor" />
                        </div>
                    </div>

                    {/* Inner Beige Card */}
                    <div className="bg-[#F3E9DD] rounded-[32px] border border-[#D2B48C]/10 p-8 pt-12 mt-6 w-full text-center space-y-4">
                        <h3 className="text-[22px] font-black text-[#C19A6B] tracking-tight">
                            { (card.testimonials?.[0] as any)?.name || "Ankita Verma" }
                        </h3>
                        <p className="text-[15px] font-medium text-[#4A3E31]/80 leading-relaxed italic">
                            "{ (card.testimonials?.[0] as any)?.content || (card.testimonials?.[0] as any)?.review || "Their makeup artists are magicians! I got so many compliments at my party. Book in advance because they're always in demand." }"
                        </p>
                    </div>
                </div>

                {/* Testimonial Pagination Dots (dot dot dot DASH) */}
                <div className="flex justify-center items-center gap-3 mt-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D2B48C]/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D2B48C]/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D2B48C]/40" />
                    <div className="w-8 h-2.5 rounded-full bg-[#C19A6B]" />
                </div>
            </div>
        </section>

        {/* CUSTOM MAKE AN APPOINTMENT SECTION - Matching Image 18 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
            {/* Elegant Header - Simplified (Images Removed) */}
            <div className="flex flex-col items-center mb-12 relative">
                 <h2 className="text-[36px] font-black italic text-[#C19A6B] tracking-tight mb-2 font-serif">Make an Appointment</h2>
                 <div className="flex items-center gap-3 w-40">
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                    <div className="w-2 h-2 border border-[#D2B48C] rotate-45" />
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                 </div>
            </div>

            {/* Appointment Date Picker Mockup */}
            <div className="bg-[#F3E9DD] rounded-[32px] p-2 border border-[#D2B48C]/20 shadow-lg group transition-all duration-500 hover:shadow-xl">
                 <div className="bg-white rounded-[24px] px-8 py-6 flex items-center justify-between group-hover:bg-[#FDFBF7] transition-colors">
                     <span className="text-[17px] font-black italic text-[#C19A6B]/60 font-serif">Pick a Date</span>
                     <Calendar className="text-[#C19A6B]" size={22} strokeWidth={2.5} />
                 </div>
            </div>
        </section>

        {/* CUSTOM QR CODE SECTION - Matching Image 21 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
            {/* Elegant Header */}
            <div className="flex flex-col items-center mb-12 relative pt-8">
                 {/* Floating Accessories in Corners */}
                 <div className="absolute top-0 left-[-20px] w-20 h-20 pointer-events-none drop-shadow-xl opacity-80 rotate-[-15deg]">
                    <Image src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=150" alt="Mascara" fill className="object-contain" />
                 </div>

                 <h2 className="text-[36px] font-black italic text-[#C19A6B] tracking-tight mb-2 font-serif">QR Code</h2>
                 <div className="flex items-center gap-3 w-40">
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                    <div className="w-2 h-2 border border-[#D2B48C] rotate-45" />
                    <div className="h-[2px] bg-[#D2B48C]/60 flex-1" />
                 </div>
            </div>

            {/* QR Code Combined Card */}
            <div className="bg-[#F3E9DD] rounded-[32px] p-8 border border-[#D2B48C]/20 shadow-lg group transition-all duration-500 hover:shadow-xl flex flex-col sm:flex-row items-center gap-8">
                 {/* QR Image Box */}
                 <div className="relative w-40 h-40 bg-white p-3 rounded-[24px] shadow-inner shrink-0 group-hover:scale-105 transition-transform duration-700">
                      {qrCode ? (
                        <Image src={qrCode} alt="QR Code" fill className="object-contain p-2" />
                      ) : (
                        <div className="w-full h-full bg-gray-100 animate-pulse rounded-[16px]" />
                      )}
                 </div>
                 {/* Text Side */}
                 <div className="flex flex-col text-center sm:text-left space-y-3">
                      <h3 className="text-[24px] font-black text-[#C19A6B] tracking-tight">Scan to Contact</h3>
                      <p className="text-[14px] font-medium text-[#4A3E31]/70 leading-relaxed">
                        Point your phone's camera at the QR code to quickly add our contact information. You can also use the "Add to Contacts" button below for fast saving.
                      </p>
                 </div>
            </div>
        </section>

        {/* CUSTOM FOOTER BANNER & CREDIT - Matching Image 24 */}
        <section className="relative w-full mt-20">
             {/* Studio Graphic with Watermark effect */}
             <div className="relative w-full h-[320px] overflow-hidden group">
                  <Image 
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200" 
                    alt="Footer Studio" 
                    fill 
                    className="object-cover opacity-60 transition-opacity duration-1000 group-hover:opacity-80"
                  />
                  {/* Light Overlays from mockup */}
                  <div className="absolute inset-0 bg-white/40" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-transparent to-[#FDFBF7]" />
             </div>

             {/* Footer Credit Text */}
             <div className="py-12 flex justify-center items-center bg-white">
                  <p className="text-[14px] font-bold text-[#4A3E31]/40 tracking-tight">
                    Made By vCard Builder
                  </p>
             </div>
        </section>
      </div>
    </div>
  );
}

function PremiumBusinessHour({ day, hours }: { day: string, hours: string }) {
    return (
        <div className="relative pt-6 group transition-all duration-500 hover:-translate-y-1">
            {/* Floating Icon Box */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#C19A6B] rounded-[16px] flex items-center justify-center text-white shadow-xl z-20 group-hover:scale-110 transition-transform shadow-[#C19A6B]/20">
                <Clock size={20} strokeWidth={2.5} />
            </div>
            
            {/* Beige Content Card */}
            <div className="bg-[#F3E9DD] rounded-[24px] border border-[#D2B48C]/20 py-8 px-4 text-center shadow-lg shadow-[#D2B48C]/05 transition-all group-hover:shadow-xl group-hover:border-[#C19A6B]/30 min-h-[90px] flex items-center justify-center">
                <span className="text-[15px] font-black text-[#2D241E] leading-tight flex flex-col items-center">
                    <span className="mb-0.5">{day}:</span>
                    <span className="text-[#C19A6B]">{hours}</span>
                </span>
            </div>
        </div>
    );
}

function PremiumContactItem({ icon: Icon, value }: { icon: any, value?: string }) {
    if (!value) return null;
    return (
        <div className="relative pt-6 group transition-all duration-500 hover:-translate-y-1">
            {/* Floating Icon Box */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#C19A6B] rounded-[16px] flex items-center justify-center text-white shadow-xl z-20 group-hover:scale-110 transition-transform shadow-[#C19A6B]/20">
                <Icon size={20} strokeWidth={2.5} />
            </div>
            
            {/* Beige Content Card */}
            <div className="bg-[#F3E9DD] rounded-[24px] border border-[#D2B48C]/20 py-8 px-4 text-center shadow-lg shadow-[#D2B48C]/05 transition-all group-hover:shadow-xl group-hover:border-[#C19A6B]/30 min-h-[100px] flex items-center justify-center">
                <span className="text-[15px] font-black text-[#2D241E] break-all leading-tight">
                    {value}
                </span>
            </div>
        </div>
    );
}

function ContactItem({ icon: Icon, label, value }: { icon: any, label: string, value?: string }) {
    if (!value) return null;
    return (
        <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-[16px] bg-[#F3E9DD] flex items-center justify-center text-[#C19A6B] shrink-0 group-hover:bg-[#C19A6B] group-hover:text-white transition-all duration-300">
                <Icon size={22} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#C19A6B] uppercase tracking-widest leading-none mb-1">{label}</span>
                <span className="text-[15px] font-black text-[#2D241E] break-all leading-tight">{value}</span>
            </div>
        </div>
    );
}
