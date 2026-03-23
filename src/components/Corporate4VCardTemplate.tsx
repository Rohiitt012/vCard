"use client";
import React, { useEffect, useState } from "react";
import { SocialCircleIcon } from "@/components/SocialCircleIcon";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { Mail, Phone, MapPin, Cake, Star, Download, Calendar, ExternalLink, Sparkles } from "lucide-react";
import { generateQrDataUrl } from "@/lib/qr";

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

const DEFAULT_BLOGS = [
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600"
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600"
  }
];

const DEFAULT_TESTIMONIALS = [
  {
    name: "Mabelle Becker",
    role: "CEO at Go Fashion",
    review: "Designing systems useful for the user is the most interesting element in the entire field of design, whic each project.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
  },
  {
    name: "Zack Lee",
    role: "CEO at Go Fashion",
    review: "Designing systems useful for the user is the most interesting element in the entire field of design, which each project.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
  }
];

const DEFAULT_BUSINESS_HOURS = [
  { day: "Monday", hours: "12:00 AM - 12:00 AM" },
  { day: "Tuesday", hours: "12:00 AM - 12:00 AM" },
  { day: "Wednesday", hours: "12:00 AM - 12:00 AM" },
  { day: "Thursday", hours: "12:00 AM - 12:00 AM" },
  { day: "Friday", hours: "12:00 AM - 12:00 AM" },
  { day: "Saturday", hours: "12:00 AM - 12:00 AM" },
  { day: "Sunday", hours: "12:00 AM - 12:00 AM" }
];

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function Corporate4VCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [qrCode, setQrCode] = useState<string>("");

  useEffect(() => {
    const url = `${baseUrl}/${slug}`;
    generateQrDataUrl(url).then(setQrCode);
  }, [baseUrl, slug]);

  const name = card.title || "Alexa Nairobi";
  const role = card.occupation || card.tagline || "Frontend Developer";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans flex justify-center px-0 py-0 overflow-x-hidden relative">
      <div className="w-full max-w-[540px] bg-[#fdfdfd] relative flex flex-col shadow-[0_0_80px_rgba(44,95,86,0.1)] overflow-hidden border-x border-slate-100">
        
        {/* AMBIENT BACKGROUND GLOWS */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2C5F56]/[0.02] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-[-100px] w-[400px] h-[400px] bg-[#5A9294]/[0.03] rounded-full blur-[100px] pointer-events-none" />

        {/* GLOBAL BACKGROUND WATERMARKS */}
        <div className="absolute top-[10%] left-[-15%] select-none opacity-[0.03] text-[120px] font-black text-[#2C5F56] -rotate-12 pointer-events-none z-0 uppercase tracking-tighter">
            {name.split(' ')[0]}
        </div>
        <div className="absolute top-[35%] right-[-25%] select-none opacity-[0.03] text-[150px] font-black text-[#2C5F56] rotate-90 pointer-events-none z-0 uppercase tracking-widest">
            CORPORATE
        </div>
        <div className="absolute top-[60%] left-[-10%] select-none opacity-[0.02] text-[140px] font-black text-[#2C5F56] -rotate-45 pointer-events-none z-0 uppercase">
            ESTD 2024
        </div>
        <div className="absolute bottom-[5%] right-[-10%] select-none opacity-[0.03] text-[100px] font-black text-[#2C5F56] rotate-12 pointer-events-none z-0 uppercase tracking-widest">
            ELITE
        </div>
        
        {/* BANNER SECTION */}
        <div className="relative h-[320px] w-full overflow-hidden">
            <Image 
                src={(card as any).bannerImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200"} 
                alt="Banner" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105"
                priority
            />
            {/* Soft Bottom Gradient to pop the profile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* IDENTITY SECTION (Asymmetric Profile Layout) */}
        <section className="px-8 -mt-32 relative z-10 mb-8">
            <div className="flex flex-row items-start gap-8">
                {/* Profile Photo - Large with thick signature white border */}
                <div className="relative w-52 h-52 rounded-full border-[10px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden bg-white shrink-0 transition-transform duration-500 hover:scale-[1.02]">
                    {card.image ? (
                        <Image
                            src={card.image}
                            alt={name}
                            fill
                            className="object-cover"
                            unoptimized={card.image.startsWith("data:")}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-50 uppercase text-6xl font-black text-slate-200">
                            {name.charAt(0)}
                        </div>
                    )}
                </div>

                {/* Identity Info (Right of Photo) */}
                <div className="pt-[115px] space-y-5 flex-1">
                    <div className="relative bg-white/70 backdrop-blur-md p-4 -ml-4 rounded-[20px] border border-white/80 shadow-[0_15px_30px_-10px_rgba(44,95,86,0.12)]">
                        {/* Title Watermark Overlay for the name area */}
                        <div className="absolute -top-4 -left-1 select-none opacity-[0.03] text-[58px] font-black text-[#2C5F56] pointer-events-none z-0 whitespace-nowrap leading-none tracking-tighter">
                            {name}
                        </div>
                        <div className="relative z-10 flex flex-col gap-1.5">
                            <h1 className="text-[32px] sm:text-[36px] font-black bg-gradient-to-r from-[#1A4D4E] via-[#2C5F56] to-[#4ca393] bg-clip-text text-transparent tracking-tighter leading-[1.1] text-left drop-shadow-sm">
                                {name}
                            </h1>
                            <div className="flex items-center gap-3">
                                <div className="h-[2px] w-6 bg-gradient-to-r from-[#5A9294] to-transparent rounded-full" />
                                <p className="text-[13px] font-black text-[#5A9294] tracking-[0.2em] text-left uppercase">
                                    {role}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Minimal Border Social Icons (Manual SVGs for exact match) */}
                    <div className="flex items-center gap-3">
                        {card.socialLinks?.filter(link => link.url).map((link) => (
                            <SocialCircleIcon key={link.platform} platform={link.platform} url={link.url} size={48} className="w-12 h-12 rounded-full border border-[#2C5F56]/60 flex items-center justify-center text-[#2C5F56] hover:bg-[#2C5F56] hover:text-white transition-all duration-300 cursor-pointer group p-0 bg-transparent shadow-none ring-0" />
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* CONTACT PILLS GRID (Premium Redesign) */}
        <section className="px-8 pb-16 relative z-10">
            <div className="grid grid-cols-2 gap-5">
                {[
                    { icon: Mail, value: card.email || "alexa@gmail.com" },
                    { icon: Cake, value: card.birthDate || "17 April 1997" },
                    { icon: Phone, value: card.phone || "+1 97939 97930" },
                    { icon: MapPin, value: card.address || "Washington - USA" }
                ].map((item, idx) => (
                    <div key={idx} className="group relative">
                        {/* Soft Glow Hover Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#2C5F56]/20 to-[#4ca393]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative bg-white/60 backdrop-blur-md rounded-full py-5 px-7 flex items-center gap-4 transition-all duration-300 group-hover:bg-white border border-white shadow-[0_10px_30px_-10px_rgba(44,95,86,0.08)] group-hover:shadow-[0_15px_30px_-10px_rgba(44,95,86,0.2)] group-hover:-translate-y-1 cursor-pointer overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#2C5F56]/[0.05] to-transparent rounded-full group-hover:scale-150 transition-transform duration-500" />
                            <item.icon className="relative w-5.5 h-5.5 text-[#2C5F56] shrink-0 opacity-80 group-hover:opacity-100 transition-all group-hover:scale-110" />
                            <span className="text-[14px] font-black text-[#2C5F56] truncate tracking-tight text-left">
                                {item.value}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* OUR SERVICES SECTION (Premium Editorial Style) */}
        <section className="px-8 pb-16 relative overflow-visible">
            {/* Background Watermark */}
            <div className="absolute top-40 right-[-20px] pointer-events-none select-none z-0">
                <span className="text-[120px] font-black text-[#2C5F56]/[0.03] uppercase tracking-[0.2em] whitespace-nowrap rotate-90 origin-right">
                    Corporate
                </span>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-[-40px] w-48 h-48 border border-[#2C5F56]/10 rounded-full" />
            <div className="absolute top-10 left-[-20px] w-20 h-20 bg-[#F1F7F4] rounded-full" />
            
            <div className="text-center mb-10 relative z-10 flex flex-col items-center">
                <span className="text-[10px] font-black text-[#5A9294] tracking-[0.3em] uppercase mb-2">What we do</span>
                <h2 className="text-[32px] font-black bg-gradient-to-r from-[#1A4D4E] to-[#4ca393] bg-clip-text text-transparent uppercase tracking-[0.15em] drop-shadow-sm">Our Services</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#2C5F56]/30 to-transparent mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-2 gap-6 relative z-10">
                {(card.services && card.services.length > 0 ? card.services : DEFAULT_SERVICES).map((service, idx) => (
                    <div key={idx} className="relative bg-white/60 backdrop-blur-xl rounded-[40px] p-5 flex flex-col items-start text-left shadow-[0_20px_40px_rgba(44,95,86,0.04)] border border-white transition-all duration-500 hover:shadow-[0_30px_60px_rgba(44,95,86,0.12)] hover:-translate-y-2 group overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#2C5F56]/10 to-transparent rounded-full blur-[20px] group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                        <div className="relative w-full aspect-square rounded-[30px] overflow-hidden mb-8 shadow-inner bg-slate-100 ring-4 ring-white/50">
                            <Image 
                                src={service.icon || "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=400"} 
                                alt={service.name} 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="px-2 pb-4 space-y-4">
                            <h3 className="text-lg font-black text-[#1A4D4E] leading-tight group-hover:text-[#2C5F56] transition-colors">
                                {service.name}
                            </h3>
                            <p className="text-[12px] font-medium text-slate-400 leading-relaxed line-clamp-6">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* BLOGS SECTION (Vertical Editorial Style) */}
        <section className="px-8 pb-16 relative overflow-visible">
            <div className="text-center mb-10 relative z-10 flex flex-col items-center">
                <span className="text-[10px] font-black text-[#5A9294] tracking-[0.3em] uppercase mb-2">Stories & News</span>
                <h2 className="text-[32px] font-black bg-gradient-to-r from-[#1A4D4E] to-[#4ca393] bg-clip-text text-transparent uppercase tracking-[0.15em] drop-shadow-sm">Latest Blogs</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#2C5F56]/30 to-transparent mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-2 gap-6 relative z-10">
                {(card.blogs && card.blogs.length > 0 ? (card.blogs as any[]) : DEFAULT_BLOGS).map((blog, idx) => (
                    <div key={idx} className="relative bg-white/60 backdrop-blur-xl rounded-[40px] p-5 flex flex-col items-start text-left shadow-[0_20px_40px_rgba(44,95,86,0.04)] border border-white transition-all duration-500 hover:shadow-[0_30px_60px_rgba(44,95,86,0.12)] hover:-translate-y-2 group overflow-hidden">
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-[#2C5F56]/10 to-transparent rounded-full blur-[20px] group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                        <div className="relative w-full aspect-[4/5] rounded-[30px] overflow-hidden mb-8 shadow-inner bg-slate-100 ring-4 ring-white/50">
                            <Image 
                                src={blog.image || blog.icon || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600"} 
                                alt={blog.title} 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="px-2 pb-4 space-y-4">
                            <h3 className="text-lg font-black text-[#1A4D4E] leading-tight group-hover:text-[#2C5F56] transition-colors">
                                {blog.title}
                            </h3>
                            <p className="text-[12px] font-medium text-slate-400 leading-relaxed line-clamp-6">
                                {blog.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* TESTIMONIAL SECTION */}
        <section className="px-8 pb-16 relative overflow-visible">
            {/* Background Watermark */}
            <div className="absolute top-20 left-[-10px] pointer-events-none select-none z-0">
                <span className="text-[130px] font-black text-[#2C5F56]/[0.04] uppercase tracking-[0.3em] whitespace-nowrap">
                    Elite
                </span>
            </div>
            
            <div className="text-center mb-10 relative z-10 flex flex-col items-center">
                <span className="text-[10px] font-black text-[#5A9294] tracking-[0.3em] uppercase mb-2">What they say</span>
                <h2 className="text-[32px] font-black bg-gradient-to-r from-[#1A4D4E] to-[#4ca393] bg-clip-text text-transparent uppercase tracking-[0.15em] drop-shadow-sm">Testimonial</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#2C5F56]/30 to-transparent mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-2 gap-6 relative z-10">
                {(card.testimonials && card.testimonials.length > 0 ? (card.testimonials as any[]) : DEFAULT_TESTIMONIALS).map((t, idx) => (
                    <div key={idx} className="relative bg-white/60 backdrop-blur-xl rounded-[32px] p-8 flex flex-col items-center text-center shadow-[0_15px_35px_rgba(44,95,86,0.04)] border border-white transition-all hover:shadow-[0_25px_50px_rgba(44,95,86,0.1)] group overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2C5F56]/[0.08] to-transparent rounded-full blur-[20px] pointer-events-none" />
                        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-10 ring-4 ring-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                            <Image 
                                src={t.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"} 
                                alt={t.name} 
                                fill 
                                className="object-cover"
                            />
                        </div>
                        <p className="text-[14px] font-medium text-slate-800 leading-relaxed mb-8 italic">
                            “{t.review}”
                        </p>
                        <div className="flex gap-1 mb-8">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-[17px] font-black text-[#2C5F56]">{t.name}</h4>
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{t.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* QR CODE SECTION (Full-width Mint Background) */}
        <section className="bg-[#E2F0E5] pt-16 pb-20 relative overflow-hidden">
            {/* Geometric Mesh Watermark */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2C5F56 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#2C5F56]/10 blur-[100px]" />
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-white/40 blur-[80px]" />

            {/* Floating Action Buttons (Premium Glass Dock) */}
            <div className="absolute right-6 -top-12 flex flex-col items-center bg-white/60 backdrop-blur-2xl rounded-full p-2 py-3 shadow-[0_20px_50px_rgba(44,95,86,0.15)] border border-white/80 z-30 gap-4">
                
                {/* WhatsApp */}
                <div className="group relative w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-[#25D366] hover:shadow-[0_10px_20px_rgba(37,211,102,0.3)] transition-all duration-300 cursor-pointer z-10">
                    <div className="absolute inset-0 bg-[#25D366]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <svg className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                
                {/* Apps / Menu */}
                <div className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-[#1A4D4E] to-[#36796E] shadow-md flex items-center justify-center hover:scale-110 hover:shadow-[0_10px_20px_rgba(44,95,86,0.3)] transition-all duration-300 cursor-pointer z-10 border border-white/20">
                    <div className="absolute inset-0 bg-[#1A4D4E]/40 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <svg className="w-5 h-5 text-white relative z-10" stroke="currentColor" fill="none" strokeWidth={2.5} viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
                </div>
                
                {/* Share */}
                <div className="group relative w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-[#2C5F56] hover:shadow-[0_10px_20px_rgba(44,95,86,0.3)] transition-all duration-300 cursor-pointer z-10">
                    <div className="absolute inset-0 bg-[#2C5F56]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <svg className="w-5 h-5 text-[#2C5F56] group-hover:text-white transition-colors relative z-10" stroke="currentColor" fill="none" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m.496-1.638A4.002 4.002 0 0115 10c1.391 0 2.624.707 3.354 1.776M9.18 14.98a4.002 4.002 0 01-3.354-1.776m12.748 0A4.002 4.002 0 0115 14c-1.391 0-2.624-.707-3.354-1.776M9 12c0 .482.114.938.316 1.342m-.496-1.638A4.002 4.002 0 003 12c0 2.209 1.791 4 4 4 1.104 0 2.103-.447 2.828-1.171M9 12c0-.482-.114-.938-.316-1.342m.496 1.638A4.002 4.002 0 0115 14h6.5M3 12h6.5m0 0a4.002 4.002 0 013.354-1.776M15 10a4 4 0 100-8 4 4 0 000 8zm0 12a4 4 0 100-8 4 4 0 000 8z" /></svg>
                </div>
            </div>

            <div className="text-center mb-10">
                <h2 className="text-[28px] font-black text-[#1A4D4E] uppercase tracking-[0.2em]">QR Code</h2>
                <div className="w-12 h-1 bg-[#2C5F56]/20 mx-auto mt-4 rounded-full" />
            </div>

            <div className="flex justify-center relative px-8 z-10">
                <div className="relative bg-white rounded-[40px] p-12 pt-20 shadow-2xl w-full max-w-[400px]">
                    {/* Overlapping Profile on QR Card */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-[6px] border-white shadow-xl overflow-hidden bg-white">
                         {card.image ? (
                            <Image src={card.image} alt={name} fill className="object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-slate-50 text-3xl font-black text-slate-200">{name.charAt(0)}</div>
                        )}
                    </div>
                    
                    {qrCode && (
                        <div className="relative aspect-square w-full">
                            <Image src={qrCode} alt="QR Code" fill className="object-contain p-2" />
                        </div>
                    )}
                </div>
            </div>
        </section>

        {/* BUSINESS HOURS SECTION */}
        <section className="px-8 pb-16 relative overflow-visible">
            <div className="text-center mb-10 relative z-10 flex flex-col items-center">
                <span className="text-[10px] font-black text-[#5A9294] tracking-[0.3em] uppercase mb-2">Availability</span>
                <h2 className="text-[32px] font-black bg-gradient-to-r from-[#1A4D4E] to-[#4ca393] bg-clip-text text-transparent uppercase tracking-[0.15em] drop-shadow-sm">Business Hours</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#2C5F56]/30 to-transparent mt-4 rounded-full" />
            </div>

            <div className="space-y-4 relative z-10">
                {(card.businessHours 
                  ? Object.entries(card.businessHours).map(([day, bh]) => ({ 
                      day, 
                      hours: bh.enabled ? `${bh.start} - ${bh.end}` : 'Closed' 
                    }))
                  : DEFAULT_BUSINESS_HOURS
                ).map((bh, idx) => (
                    <div key={idx} className="relative bg-white/60 backdrop-blur-xl rounded-[24px] p-4 flex items-center gap-6 shadow-[0_10px_30px_rgba(44,95,86,0.04)] border border-white hover:shadow-[0_20px_40px_rgba(44,95,86,0.1)] hover:-translate-y-1 transition-all group overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#2C5F56]/[0.05] to-transparent rounded-full blur-[10px] pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                        <div className="w-16 h-16 rounded-[18px] bg-gradient-to-br from-[#1A4D4E] to-[#2C5F56] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform shadow-md">
                            <Calendar className="w-8 h-8 opacity-90 shadow-sm" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-[14px] font-bold text-slate-400 mb-1">{bh.day}</span>
                            <span className="text-[18px] font-black text-[#1A4D4E] tracking-tight">{bh.hours}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* CONTACT US SECTION */}
        <section className="px-8 pb-16 relative overflow-visible">
            <div className="text-center mb-10 relative z-10 flex flex-col items-center">
                <span className="text-[10px] font-black text-[#5A9294] tracking-[0.3em] uppercase mb-2">Get in touch</span>
                <h2 className="text-[32px] font-black bg-gradient-to-r from-[#1A4D4E] to-[#4ca393] bg-clip-text text-transparent uppercase tracking-[0.15em] drop-shadow-sm">Contact Us</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#2C5F56]/30 to-transparent mt-4 rounded-full" />
            </div>

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-5">
                    <input 
                        type="text" 
                        placeholder="Full Name"
                        className="w-full bg-white/60 backdrop-blur-md border border-white rounded-[20px] px-8 py-5 text-[15px] font-bold text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2C5F56]/40 transition-all shadow-[0_5px_15px_rgba(44,95,86,0.03)]"
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail Address"
                        className="w-full bg-white/60 backdrop-blur-md border border-white rounded-[20px] px-8 py-5 text-[15px] font-bold text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2C5F56]/40 transition-all shadow-[0_5px_15px_rgba(44,95,86,0.03)]"
                    />
                    <input 
                        type="tel" 
                        placeholder="Mobile Number"
                        className="w-full bg-white/60 backdrop-blur-md border border-white rounded-[20px] px-8 py-5 text-[15px] font-bold text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2C5F56]/40 transition-all shadow-[0_5px_15px_rgba(44,95,86,0.03)]"
                    />
                    <textarea 
                        placeholder="Write a Message"
                        rows={6}
                        className="w-full bg-white/60 backdrop-blur-md border border-white rounded-[30px] px-8 py-6 text-[15px] font-bold text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2C5F56]/40 transition-all shadow-[0_5px_15px_rgba(44,95,86,0.03)] resize-none"
                    ></textarea>
                </div>

                <div className="flex justify-center pt-4">
                    <button 
                        type="submit"
                        className="bg-gradient-to-r from-[#2C5F56] to-[#5A9294] text-white rounded-[18px] px-12 py-5 text-[16px] font-black tracking-tight shadow-xl shadow-[#2C5F56]/20 hover:scale-105 hover:shadow-2xl transition-all active:scale-95"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </section>

        {/* CREATE YOUR VCARD SECTION */}
        <section className="px-8 pb-20 relative overflow-visible">
            <div className="text-center mb-10 relative z-10 flex flex-col items-center">
                <span className="text-[10px] font-black text-[#5A9294] tracking-[0.3em] uppercase mb-2">Connect</span>
                <h2 className="text-[32px] font-black bg-gradient-to-r from-[#1A4D4E] to-[#4ca393] bg-clip-text text-transparent uppercase tracking-[0.15em] drop-shadow-sm">Save Contact</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#2C5F56]/30 to-transparent mt-4 rounded-full" />
            </div>

            <div className="space-y-12 relative z-10 flex flex-col items-center">
                {/* URL Pill */}
                <a 
                    href={`${baseUrl}/${slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white/60 backdrop-blur-md rounded-[24px] py-6 px-10 flex items-center justify-between group cursor-pointer transition-all hover:bg-white hover:shadow-[0_20px_40px_rgba(44,95,86,0.12)] border border-white shadow-[0_10px_30px_rgba(44,95,86,0.03)]"
                >
                    <span className="text-[15px] font-black text-[#2C5F56] truncate pr-4">
                        {baseUrl.replace(/^https?:\/\//, '')}/{slug}
                    </span>
                    <ExternalLink className="w-5 h-5 text-[#2C5F56] opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* Add To Contact Button */}
                <button 
                    onClick={onDownloadVCard}
                    className="bg-gradient-to-r from-[#2C5F56] to-[#5A9294] text-white rounded-[18px] px-12 py-5 text-[17px] font-black tracking-tight shadow-xl shadow-[#2C5F56]/20 hover:scale-105 hover:shadow-2xl transition-all active:scale-95"
                >
                    Add To Contact
                </button>
            </div>
        </section>

        {/* DYNAMIC SECTIONS FALLBACK (Products, Galleries, etc) */}
        <div className="px-0 pb-12">
            <VCardDynamicSections card={card} exclude={['services', 'blogs', 'testimonials', 'businessHours', 'products']} />
        </div>

        {/* MINIMAL FOOTER */}
        <footer className="py-10 text-center border-t border-slate-50 bg-slate-50/30">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
               &copy; {new Date().getFullYear()} · Corporate Elite v4
            </p>
        </footer>

      </div>
    </div>
  );
}
