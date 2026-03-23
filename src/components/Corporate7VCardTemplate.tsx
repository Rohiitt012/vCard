"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { Mail, Phone, MapPin, Cake, Calendar, ExternalLink, Facebook, Instagram, Linkedin, Twitter, MessageCircle, Monitor, PenTool, Layout, Code, User } from "lucide-react";
import { generateQrDataUrl } from "@/lib/qr";
import { getSocialIcon } from "@/lib/social-icons";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function Corporate7VCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [qrCode, setQrCode] = useState<string>("");

  useEffect(() => {
    const url = `${baseUrl}/${slug}`;
    generateQrDataUrl(url).then(setQrCode);
  }, [baseUrl, slug]);

  const name = card.title || "I'm cooporate-7";
  const role = card.occupation || card.tagline || "a cooporate-7";

  return (
    <div className="min-h-screen bg-[#F0F4FF] text-slate-800 font-sans flex justify-center px-0 py-0 overflow-x-hidden relative">
      <div className="w-full max-w-[540px] bg-white/70 backdrop-blur-3xl relative flex flex-col shadow-[0_0_100px_rgba(44,95,214,0.1)] overflow-hidden border-x border-white/40">
        
        {/* PREMIUM AMBIENT BACKGROUND GLOWS */}
        <div className="absolute top-[10%] right-[-150px] w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute top-[40%] left-[-150px] w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-100px] w-[350px] h-[350px] bg-orange-300/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />

        {/* FLOATING BACKGROUND WATERMARKS */}
        <div className="absolute top-[15%] left-[-10%] select-none opacity-[0.03] text-[120px] font-black text-indigo-900 -rotate-12 pointer-events-none z-0 tracking-tighter uppercase">
            {name.split(' ')[0]}
        </div>
        <div className="absolute top-[50%] right-[-30%] select-none opacity-[0.02] text-[160px] font-black text-purple-900 rotate-90 pointer-events-none z-0 tracking-widest uppercase">
            PREMIUM
        </div>
        <div className="absolute bottom-[10%] left-[-5%] select-none opacity-[0.03] text-[100px] font-black text-indigo-900 -rotate-45 pointer-events-none z-0 uppercase tracking-tight">
            EST 2024
        </div>

        {/* SUPER PREMIUM HEADER - LAYERED MAC-STYLE WAVES */}
        <div className="relative h-[320px] w-full overflow-hidden shadow-sm">
            <svg className="absolute inset-0 w-full h-full scale-[1.1]" preserveAspectRatio="none" viewBox="0 0 500 320" fill="none">
                <rect width="500" height="320" fill="url(#bg_main)"/>
                
                {/* Layered Glass Waves */}
                <path d="M0 120C120 60 250 220 400 140C550 60 550 200 550 200V320H0V120Z" fill="url(#wave_v1)" opacity="0.4" />
                <path d="M-50 160C100 120 200 280 350 200C500 120 500 240 500 240V320H-50V160Z" fill="url(#wave_v2)" opacity="0.6" />
                <path d="M0 240C150 200 300 340 450 260C600 180 500 320 500 320V320H0V240Z" fill="white"/>

                <defs>
                    <linearGradient id="bg_main" x1="0" y1="0" x2="500" y2="320" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4F46E5" /> {/* Indigo */}
                        <stop offset="0.5" stopColor="#7C3AED" /> {/* Violet */}
                        <stop offset="1" stopColor="#EA580C" /> {/* Orange */}
                    </linearGradient>
                    <linearGradient id="wave_v1" x1="0" y1="120" x2="500" y2="320" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0891B2" /> {/* Cyan */}
                        <stop offset="1" stopColor="#2563EB" /> {/* Royal Blue */}
                    </linearGradient>
                    <linearGradient id="wave_v2" x1="0" y1="160" x2="500" y2="320" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9333EA" /> {/* Purple */}
                        <stop offset="1" stopColor="#DB2777" /> {/* Pink */}
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* IDENTITY SECTION - Refined Glass Layout */}
        <section className="px-8 -mt-24 relative z-10 mb-10 flex flex-col items-center animate-in fade-in slide-in-from-bottom-5 duration-700">
            {/* Profile Photo - Larger with signature glow */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-orange-400 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-1000" />
                <div className="relative w-52 h-52 rounded-full border-[10px] border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden bg-white shrink-0 mb-6 transition-transform duration-700 hover:scale-[1.02]">
                    {card.image ? (
                        <Image
                            src={card.image}
                            alt={name}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            unoptimized={card.image.startsWith("data:")}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-50 uppercase text-6xl font-black text-slate-200">
                            {name.charAt(0)}
                        </div>
                    )}
                </div>
            </div>

            {/* Identity Info - Elegant Typography */}
            <div className="flex flex-col items-center">
                <div className="relative mb-2">
                    <h1 className="text-[38px] font-black text-[#1e1b4b] leading-none tracking-tight text-center drop-shadow-sm">
                        {name}
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <div className="h-[2px] w-8 bg-gradient-to-r from-transparent via-[#6366f1]/40 to-transparent rounded-full" />
                    <p className="text-[14px] font-black text-[#6366f1] tracking-[0.3em] uppercase opacity-70">
                        {role}
                    </p>
                    <div className="h-[2px] w-8 bg-gradient-to-r from-transparent via-[#6366f1]/40 to-transparent rounded-full" />
                </div>
            </div>
        </section>

        {/* SOCIAL LINKS BOX - Glassmorphism Dock */}
        <section className="px-6 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-orange-500/5 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/40 backdrop-blur-3xl rounded-[32px] py-8 px-8 shadow-[0_20px_50px_-20px_rgba(30,27,75,0.1)] border border-white flex items-center justify-center gap-6 sm:gap-10 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(30,27,75,0.15)] group-hover:-translate-y-1">
                    {card.socialLinks?.filter(link => link.url).map((link) => (
                        <SocialIcon key={link.platform} platform={link.platform} href={link.url} />
                    ))}
                </div>
            </div>
        </section>

        {/* PROFESSIONAL CONTACT SECTION - Matching Image 3 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            {/* BACKGROUND WATERMARKS (Professional) */}
            <div className="absolute top-[30%] left-[10%] opacity-[0.03] text-[80px] select-none pointer-events-none -rotate-12 translate-x-[-20%]">💼</div>
            <div className="absolute bottom-[20%] right-[5%] opacity-[0.03] text-[90px] select-none pointer-events-none rotate-12 translate-x-[20%]">💰</div>

            <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                    <h2 className="text-[32px] font-black text-[#1e1b4b] tracking-tight">Contact</h2>
                    <div className="flex items-center gap-0">
                        <div className="w-24 h-[3px] bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" />
                        <div className="w-3 h-3 bg-blue-500 rotate-45 transform ml-[-4px]" />
                    </div>
                </div>

                {/* Network/People Icon from Image */}
                <div className="relative w-16 h-16 opacity-80">
                    <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-20" />
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-500">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                        <circle cx="12" cy="8" r="3" fill="currentColor" opacity="0.4" />
                        <circle cx="7" cy="16" r="2.5" fill="currentColor" />
                        <circle cx="17" cy="16" r="2.5" fill="currentColor" />
                        <path d="M12 12V15" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M7 16H17" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                    </svg>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-10">
                <ProfessionalContactItem icon={Mail} value={card.email} label="E-mail address" />
                <ProfessionalContactItem icon={Phone} value={card.phone} label="Mobile Number" />
                <ProfessionalContactItem icon={Cake} value={card.birthDate} label="Date of Birth" />
                <ProfessionalContactItem icon={MapPin} value={card.address} label="Location" />
            </div>
            
            <div className="flex flex-col items-center gap-6 pt-16">
                <button 
                    onClick={onDownloadVCard}
                    className="relative group overflow-hidden bg-[#1e1b4b] text-white rounded-[24px] px-14 py-6 text-[18px] font-black tracking-tight shadow-2xl shadow-indigo-200 transition-all duration-500 hover:scale-105 hover:shadow-indigo-300 active:scale-95 w-full max-w-[320px]"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center justify-center gap-3">
                        Add To Contact
                    </span>
                </button>
                
                {card.website && (
                  <a 
                    href={card.website.startsWith('http') ? card.website : `https://${card.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-black text-[#1e1b4b]/40 hover:text-[#6366f1] transition-colors uppercase tracking-[0.3em] flex items-center gap-2 group"
                   >
                    Visit Portfolio
                    <ExternalLink size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                )}
            </div>
        </section>

        {/* OUR SERVICES SECTION - Matching Image 4 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400">
            {/* BACKGROUND WATERMARKS (Services) */}
            <div className="absolute top-[5%] left-[5%] opacity-[0.03] text-[70px] select-none pointer-events-none -rotate-12">€</div>
            <div className="absolute top-[2%] right-[10%] opacity-[0.03] text-[70px] select-none pointer-events-none rotate-12">$</div>
            <div className="absolute bottom-[5%] left-[15%] opacity-[0.03] text-[60px] select-none pointer-events-none rotate-45">💼</div>
            <div className="absolute bottom-[2%] right-[5%] opacity-[0.03] text-[70px] select-none pointer-events-none -rotate-12">🤝</div>

            <div className="flex items-center justify-end mb-10">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-0">
                        <div className="w-3 h-3 bg-blue-500 rotate-45 transform mr-[-4px] z-10" />
                        <div className="w-24 h-[3px] bg-gradient-to-l from-blue-400 to-blue-500 rounded-full" />
                    </div>
                    <h2 className="text-[32px] font-black text-[#1e1b4b] tracking-tight">Our Services</h2>
                </div>
            </div>

            <div className="space-y-6">
                {(card.services && card.services.length > 0 ? card.services : [
                    { name: "Web Design", description: "There are many variations of passages of Lorem Ipsum but the majority have suffered alteration in some form", icon: "browser" },
                    { name: "Web Design", description: "There are many variations of passages of Lorem Ipsum but the majority have suffered alteration in some form", icon: "pen-tool" },
                    { name: "Web Design", description: "There are many variations of passages of Lorem Ipsum but the majority have suffered alteration in some form", icon: "browser" },
                    { name: "Web Design", description: "There are many variations of passages of Lorem Ipsum but the majority have suffered alteration in some form", icon: "browser" }
                ]).map((svc, idx) => (
                    <ServiceCard key={idx} service={svc} />
                ))}
            </div>
        </section>

        {/* MAKE AN APPOINTMENT SECTION - Matching Image 5 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            {/* BACKGROUND WATERMARKS (Appointment) */}
            <div className="absolute top-[5%] right-[2%] opacity-[0.03] text-[90px] select-none pointer-events-none rotate-12">🤝</div>

            <div className="flex items-center justify-start mb-10 gap-4">
                <h2 className="text-[30px] font-black text-[#1e1b4b] tracking-tight shrink-0">Make An Appointment</h2>
                <div className="flex items-center gap-0 w-full">
                    <div className="w-full h-[3px] bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" />
                    <div className="w-3 h-3 bg-blue-500 rotate-45 transform ml-[-4px]" />
                </div>
            </div>

            <div className="space-y-8">
                {/* DATE SELECTOR */}
                <div className="flex items-center gap-6">
                    <span className="text-[18px] font-black text-[#1e1b4b] min-w-[70px]">Date:</span>
                    <div className="flex-1 relative group">
                        <input 
                            type="text" 
                            placeholder="Pick a date"
                            readOnly
                            className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 text-[15px] text-slate-400 placeholder-slate-300 focus:outline-none focus:border-blue-400 transition-colors cursor-pointer shadow-sm group-hover:shadow-md"
                        />
                        <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-blue-500" size={24} />
                    </div>
                </div>

                {/* HOUR SELECTOR */}
                <div className="flex items-start gap-6">
                    <span className="text-[18px] font-black text-[#1e1b4b] min-w-[70px] pt-4">Hour:</span>
                    <div className="flex-1 grid grid-cols-2 gap-3">
                        {["8:10 - 20:00", "8:10 - 20:00", "8:10 - 20:00", "8:10 - 20:00"].map((slot, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-2xl py-5 text-center text-[#1e1b4b]/60 text-[16px] font-medium shadow-sm hover:border-blue-400 hover:text-blue-500 transition-all cursor-pointer">
                                {slot}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* GALLERY SECTION - Matching Image 6 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <div className="flex items-center justify-end mb-10 gap-4">
                <div className="flex items-center gap-0 w-full max-w-[150px]">
                    <div className="w-3 h-3 bg-blue-500 rotate-45 transform mr-[-4px] z-10" />
                    <div className="w-full h-[3px] bg-gradient-to-l from-blue-400 to-blue-500 rounded-full" />
                </div>
                <h2 className="text-[30px] font-black text-[#1e1b4b] tracking-tight shrink-0">Gallery</h2>
            </div>
            
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {((card as any).gallery && (card as any).gallery.length > 0 ? (card as any).gallery : [
                    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400",
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400",
                    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400"
                ]).slice(0, 3).map((imgUrl: any, idx: number) => (
                    <div key={idx} className="aspect-square relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                        <Image src={(imgUrl as any).url || imgUrl} alt="Gallery" fill className="object-cover" />
                    </div>
                ))}
            </div>
        </section>

        {/* PRODUCTS SECTION - Matching Image 6 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-600">
            <div className="absolute top-[5%] right-[-5%] opacity-[0.03] text-[100px] select-none pointer-events-none -rotate-12">€</div>
            
            <div className="flex items-center mb-10 gap-4">
                <h2 className="text-[30px] font-black text-[#1e1b4b] tracking-tight shrink-0">Products</h2>
                <div className="flex items-center gap-0 w-full max-w-[150px]">
                    <div className="w-full h-[3px] bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" />
                    <div className="w-3 h-3 bg-blue-500 rotate-45 transform ml-[-4px]" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {((card as any).products && (card as any).products.length > 0 ? (card as any).products : [
                    { name: "Lorem 1", price: "25", description: "Lorem is dummy text", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400" },
                    { name: "Lorem 2", price: "155", description: "Lorem is dummy text", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400" }
                ]).map((prod: any, idx: number) => (
                    <div key={idx} className="bg-white rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-50 flex flex-col group transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                        <div className="aspect-[4/3] relative overflow-hidden">
                            <Image src={(prod as any).image} alt={prod.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="p-5 space-y-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-[17px] font-black text-[#1e1b4b] tracking-tight truncate">{prod.name}</h3>
                                <span className="text-[16px] font-black text-blue-500">${prod.price}</span>
                            </div>
                            <p className="text-[13px] font-medium text-slate-400 leading-tight truncate">
                                {prod.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* BLOG SECTION - Refined Overlapping Layout (Matching Image 7) */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-700">
            <div className="absolute bottom-[0%] left-[-5%] opacity-[0.03] text-[100px] select-none pointer-events-none rotate-12">📄</div>

            <div className="flex items-center justify-end mb-12 gap-4">
                <div className="flex items-center gap-0 w-full max-w-[200px]">
                    {/* Share-style Node Icon from image */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-[1.5px] border-blue-400 bg-white shadow-sm z-20">
                         <div className="relative w-6 h-6">
                            <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-blue-500" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-blue-500" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500" />
                            <svg className="absolute inset-0 w-full h-full text-blue-500 opacity-30" viewBox="0 0 24 24"><path d="M18 8l-6 4 6 4M6 12l6-4M6 12l6 4" stroke="currentColor" strokeWidth="2" /></svg>
                         </div>
                    </div>
                    <div className="w-full h-[3px] bg-gradient-to-l from-blue-400 to-blue-500 rounded-full ml-[-24px]" />
                </div>
                <h2 className="text-[30px] font-black text-[#1e1b4b] tracking-tight shrink-0">Blog</h2>
            </div>
            
            <div className="space-y-8">
                {((card as any).blogs && (card as any).blogs.length > 0 ? (card as any).blogs : [
                    { title: "Coding", description: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400" }
                ]).slice(0, 1).map((blog: any, idx: number) => (
                    <div key={idx} className="relative">
                        {/* Main Image - Rounded */}
                        <div className="w-[85%] aspect-[5/4] sm:aspect-square relative rounded-[40px] overflow-hidden shadow-2xl">
                             <Image src={(blog as any).image} alt={blog.title} fill className="object-cover" />
                        </div>
                        
                        {/* Overlapping Glass Card */}
                        <div className="absolute top-[20%] right-[-5%] w-[70%] bg-white rounded-[24px] p-6 sm:p-8 shadow-[0_15px_45px_rgba(30,27,75,0.1)] border border-blue-50 z-10">
                           <h3 className="text-[20px] font-black text-[#1e1b4b] tracking-tight mb-2">{blog.title}</h3>
                           <p className="text-[14px] font-medium text-slate-400 leading-relaxed">
                               {blog.description}
                           </p>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <div className="flex justify-end gap-3 pt-4 pr-10">
                    <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-[#1e1b4b]/40 hover:border-blue-400 hover:text-blue-500 transition-all cursor-pointer">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-[#1e1b4b]/40 hover:border-blue-400 hover:text-blue-500 transition-all cursor-pointer">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </section>

        {/* TESTIMONIALS SECTION - Matching Image 7 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-800">
            <div className="flex items-center mb-16 gap-4">
                <h2 className="text-[30px] font-black text-[#1e1b4b] tracking-tight shrink-0">Testimonials</h2>
                <div className="flex items-center gap-0 w-full max-w-[150px]">
                    <div className="w-full h-[3px] bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" />
                    <div className="w-3 h-3 bg-blue-500 rotate-45 transform ml-[-4px]" />
                </div>
            </div>

            <div className="relative group flex flex-col items-center">
                {((card as any).testimonials && (card as any).testimonials.length > 0 ? (card as any).testimonials : [
                    { name: "Jane Doe", role: "CEO", quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" }
                ]).slice(0, 1).map((t: any, idx: number) => (
                    <div key={idx} className="flex flex-col items-center text-center max-w-[400px]">
                        {/* Large Central Portrait with blue ring */}
                        <div className="relative w-40 h-40 rounded-full border-[6px] border-[#3B82F6] p-1.5 shadow-xl bg-white mb-8 group-hover:scale-[1.05] transition-transform duration-700">
                            <div className="relative w-full h-full rounded-full overflow-hidden">
                                <Image src={(t as any).image} alt={t.name} fill className="object-cover" />
                            </div>
                        </div>

                        <div className="space-y-1 mb-6">
                            <h3 className="text-[22px] font-black text-[#1e1b4b] tracking-tight">{t.name}</h3>
                            <p className="text-[14px] font-black text-slate-400 tracking-[0.2em] uppercase">{t.role}</p>
                        </div>

                        {/* Large Quotes Layout */}
                        <div className="relative px-10">
                            <div className="absolute top-[-20px] left-[-10px] text-[100px] leading-none text-slate-200 opacity-60 font-serif select-none pointer-events-none">“</div>
                            <p className="italic text-[16px] font-medium text-slate-400 leading-relaxed px-2">
                                {t.quote}
                            </p>
                            <div className="absolute bottom-[-50px] right-[-10px] text-[100px] leading-none text-slate-200 opacity-60 font-serif select-none pointer-events-none">”</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* BUSINESS HOURS SECTION - Matching Image 9 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            {/* BACKGROUND WATERMARKS (Business Hours) */}
            <div className="absolute top-[0%] right-[0%] opacity-[0.03] text-[100px] select-none pointer-events-none -rotate-12 translate-x-[20%]">🕒</div>
            <div className="absolute bottom-[0%] left-[0%] opacity-[0.03] text-[100px] select-none pointer-events-none rotate-12 translate-x-[-20%]">🕒</div>

            <div className="flex items-center mb-16 gap-4">
                <h2 className="text-[30px] font-black text-[#1e1b4b] tracking-tight shrink-0">Business Hours</h2>
                <div className="flex items-center gap-0 w-full max-w-[150px]">
                    <div className="w-full h-[3px] bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" />
                    <div className="w-3 h-3 bg-blue-500 rotate-45 transform ml-[-4px]" />
                </div>
            </div>

            <div className="bg-white rounded-[32px] border-[1.5px] border-blue-200 p-10 shadow-[0_20px_60px_rgba(30,27,75,0.05)] transition-all duration-700 hover:shadow-xl group-hover:-translate-y-2">
                <div className="space-y-4">
                    {(((card as any).businessHours && Array.isArray((card as any).businessHours) && (card as any).businessHours.length > 0) ? (card as any).businessHours : [
                        { day: "Sunday", time: "08:10 - 20:00" },
                        { day: "Monday", time: "08:10 - 20:00" },
                        { day: "Tuesday", time: "08:10 - 20:00" },
                        { day: "Wednesday", time: "08:10 - 10:00" },
                        { day: "Thursday", time: "08:10 - 20:00" },
                        { day: "Friday", time: "08:10 - 20:00" },
                        { day: "Saturday", time: "Closed" }
                    ]).map((row: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between group/row">
                            <span className="text-[18px] font-black text-[#1e1b4b] tracking-tight transition-transform group-hover/row:translate-x-1">{row.day} :</span>
                            <span className={`text-[17px] font-medium tracking-tight ${row.time === 'Closed' ? 'text-[#1e1b4b]/40' : 'text-slate-500'}`}>
                                {row.time}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* QR CODE SECTION - Matching Image 8 (MOVED HERE) */}
        {qrCode && (
            <section className="px-8 pb-16 relative z-10 animate-in zoom-in duration-700 delay-500">
                {/* BACKGROUND WATERMARKS (QR) */}
                <div className="absolute bottom-[2%] right-[5%] opacity-[0.03] text-[90px] select-none pointer-events-none rotate-12">🕒</div>

                <div className="flex items-center justify-end mb-16 gap-4">
                    <div className="flex items-center gap-0 w-full max-w-[150px]">
                        <div className="w-3 h-3 bg-blue-500 rotate-45 transform mr-[-4px] z-10" />
                        <div className="w-full h-[3px] bg-gradient-to-l from-blue-400 to-blue-500 rounded-full" />
                    </div>
                    <h2 className="text-[30px] font-black text-[#1e1b4b] tracking-tight shrink-0">QR Code</h2>
                </div>

                <div className="relative group flex flex-col items-center">
                    {/* Pagination Dots (Decorative from Image) */}
                    <div className="flex gap-2 mb-8">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <div className="w-2 h-2 rounded-full bg-slate-200" />
                        <div className="w-2 h-2 rounded-full bg-slate-200" />
                    </div>

                    <div className="relative w-full max-w-[400px] aspect-[5/4] bg-white rounded-[32px] border-[1.5px] border-blue-200 p-8 pt-16 flex flex-col items-center justify-center gap-8 shadow-[0_20px_60px_rgba(30,27,75,0.05)] transition-all duration-700 hover:shadow-xl group-hover:-translate-y-2">
                        {/* Overlapping portrait from image */}
                        <div className="absolute -top-12 w-24 h-24 rounded-full border-[6px] border-[#3B82F6] p-1 shadow-xl bg-white overflow-hidden group-hover:scale-110 transition-transform duration-700">
                             {card.image ? (
                                <Image src={card.image} alt={name} fill className="object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-slate-50 text-2xl font-black text-slate-200">{name.charAt(0)}</div>
                            )}
                        </div>
                        
                        <div className="relative w-48 h-48 bg-white p-2 rounded-2xl group-hover:scale-[1.05] transition-transform duration-700">
                            <Image src={qrCode} alt="QR Code" fill className="object-contain" />
                        </div>

                        {/* Download button from image style */}
                        <a 
                            href={qrCode} 
                            download="vcard-qr.png"
                            className="w-full max-w-[280px] bg-[#3B82F6] text-white py-4 rounded-[16px] text-[16px] font-black tracking-tight text-center shadow-lg shadow-blue-200 hover:bg-blue-600 transition-all active:scale-95"
                        >
                            Download My QR Code
                        </a>
                    </div>
                </div>
            </section>
        )}

        {/* CONTACT US FORM SECTION - Matching Image 10 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <div className="flex items-center justify-end mb-16 gap-4">
                <div className="flex items-center gap-0 w-full max-w-[150px]">
                    <div className="w-3 h-3 bg-blue-500 rotate-45 transform mr-[-4px] z-10" />
                    <div className="w-full h-[3px] bg-gradient-to-l from-blue-400 to-blue-500 rounded-full" />
                </div>
                <h2 className="text-[30px] font-black text-[#1e1b4b] tracking-tight shrink-0">Contact Us</h2>
            </div>

            <div className="bg-white rounded-[32px] p-2 flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-[14px] font-black text-slate-600 block pl-1">Your Name</label>
                        <div className="relative group">
                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-400"><User size={20} /></span>
                            <input type="text" className="w-full bg-white border border-slate-100 rounded-2xl py-4 pl-14 pr-4 focus:border-blue-400 focus:outline-none transition-all shadow-sm group-hover:shadow-md" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[14px] font-black text-slate-600 block pl-1">Phone</label>
                        <div className="relative group">
                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-400"><Phone size={20} /></span>
                            <input type="text" className="w-full bg-white border border-slate-100 rounded-2xl py-4 pl-14 pr-4 focus:border-blue-400 focus:outline-none transition-all shadow-sm group-hover:shadow-md" />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[14px] font-black text-slate-600 block pl-1">E-mail</label>
                    <div className="relative group">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-400"><Mail size={20} /></span>
                        <input type="email" className="w-full bg-white border border-slate-100 rounded-2xl py-4 pl-14 pr-4 focus:border-blue-400 focus:outline-none transition-all shadow-sm group-hover:shadow-md" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[14px] font-black text-slate-600 block pl-1">Your Message</label>
                    <textarea placeholder="Type a Message..." className="w-full bg-white border border-slate-100 rounded-2xl py-5 px-6 min-h-[150px] focus:border-blue-400 focus:outline-none transition-all shadow-sm hover:shadow-md" />
                </div>

                <button className="w-full sm:w-max mx-auto bg-[#3B82F6] text-white py-5 px-16 rounded-[20px] text-[18px] font-black tracking-tight shadow-xl shadow-blue-100 hover:bg-blue-600 transition-all active:scale-95">
                    Send Message
                </button>
            </div>
        </section>

        {/* CREATE YOUR VCARD SECTION - Matching Image 11 */}
        <section className="px-8 pb-16 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-600">
            {/* BACKGROUND WATERMARKS (Skyline) */}
            <div className="absolute inset-x-0 bottom-[10%] opacity-[0.03] text-[120px] select-none pointer-events-none text-center">🏙️</div>

            <div className="flex items-center mb-16 gap-4">
                <h2 className="text-[30px] font-black text-[#1e1b4b] tracking-tight shrink-0">Create Your Vcard</h2>
                <div className="flex items-center gap-0 w-full max-w-[150px]">
                    <div className="w-full h-[3px] bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" />
                    <div className="w-3 h-3 bg-blue-500 rotate-45 transform ml-[-4px]" />
                </div>
            </div>

            <div className="flex flex-col items-center gap-10">
                <div className="w-full bg-white rounded-3xl border border-slate-100 p-8 flex items-center justify-between shadow-[0_15px_45px_rgba(30,27,75,0.03)] group cursor-pointer hover:border-blue-200 transition-all">
                    <span className="text-[16px] font-medium text-slate-500 truncate">{baseUrl}/{slug}</span>
                    <ExternalLink size={24} className="text-blue-400 group-hover:text-blue-500" />
                </div>

                <button 
                    onClick={onDownloadVCard}
                    className="bg-[#3B82F6] text-white py-5 px-16 rounded-[20px] text-[18px] font-black tracking-tight shadow-xl shadow-blue-100 hover:bg-blue-600 transition-all active:scale-95"
                >
                    Add To Contact
                </button>
            </div>
        </section>

        {/* PREMIUM DYNAMIC SECTIONS */}
        <div className="px-0 pb-16">
            <VCardDynamicSections card={card} />
        </div>

        {/* FOOTER - Refined */}
        <footer className="py-12 text-center border-t border-slate-100 bg-white/30 backdrop-blur-md relative z-10">
            <p className="text-[12px] font-black text-slate-400 uppercase tracking-[0.5em] opacity-60">
               &copy; {new Date().getFullYear()} · CORPORATE ELITE VII
            </p>
        </footer>

      </div>
    </div>
  );
}

function SocialIcon({ platform, href }: { platform: string, href: string }) {
    const colors: Record<string, string> = {
        facebook: "#1877F2",
        instagram: "#E4405F",
        linkedin: "#0A66C2",
        whatsapp: "#25D366",
        twitter: "#1DA1F2"
    };
    const color = colors[platform.toLowerCase()] || "#6366f1";
    const Icon = getSocialIcon(platform);

    return (
        <a href={href} target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 active:scale-95">
            <div style={{ color }} className="w-10 h-10 flex items-center justify-center">
                 <Icon size={32} />
            </div>
        </a>
    );
}

function ProfessionalContactItem({ icon: Icon, value, label }: { icon: any, value?: string, label: string }) {
    if (!value) return null;
    return (
        <div className="flex items-start gap-4 transition-transform hover:translate-x-1 duration-300 group">
            <div className="w-14 h-14 rounded-2xl border-[1.5px] border-blue-200 bg-white flex items-center justify-center text-blue-500 shrink-0 shadow-sm group-hover:border-blue-400 group-hover:shadow-md transition-all">
                <Icon size={26} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col pt-1">
                <span className="text-[15px] font-black text-[#1e1b4b] tracking-tight">{label}</span>
                <span className="text-[15px] font-medium text-slate-400 leading-tight">{value}</span>
            </div>
        </div>
    );
}

function ServiceCard({ service }: { service: any }) {
    return (
        <div className="bg-white rounded-[24px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-50 flex items-center gap-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group">
            <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0 group-hover:scale-110 transition-transform">
                <GetServiceIcon name={service.name || service.icon} />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-[19px] font-black text-[#1e1b4b] tracking-tight">{service.name}</h3>
                <p className="text-[14px] font-medium text-slate-400 leading-[1.6] line-clamp-2">
                    {service.description}
                </p>
            </div>
        </div>
    );
}

function GetServiceIcon({ name }: { name: string }) {
    const n = name.toLowerCase();
    if (n.includes('web') || n.includes('design')) return <Monitor size={38} strokeWidth={1.5} />;
    if (n.includes('pen') || n.includes('creative')) return <PenTool size={38} strokeWidth={1.5} />;
    if (n.includes('code') || n.includes('dev')) return <Code size={38} strokeWidth={1.5} />;
    return <Layout size={38} strokeWidth={1.5} />;
}

function getSocialLink(card: VCardItem, platform: string) {
    const link = card.socialLinks?.find(s => s.platform?.toLowerCase() === platform.toLowerCase());
    return link?.url || "#";
}
