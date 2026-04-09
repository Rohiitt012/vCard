"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { 
  Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, 
  MessageCircle, ChevronDown, LayoutGrid, User, Sparkles, Globe, 
  ArrowRight, Clock, Star, Utensils, Coffee, Wine, ChefHat, Salad, Flower2, Cake, Sparkle, Play, ArrowLeft, Share2, GlassWater, Bell, Lamp
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

export function Temp28VCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [qrCode, setQrCode] = useState<string>("");

  useEffect(() => {
    const url = `${baseUrl}/${slug}`;
    generateQrDataUrl(url).then(setQrCode);
  }, [baseUrl, slug]);

  const name = card.title || "Vanessa Joe";
  const role = card.occupation || card.tagline || "Event Manager";
  const organization = "Elite Event Planning Group";

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-200 font-sans flex justify-center py-0 px-0 sm:py-12 overflow-x-hidden relative">
      
      {/* EVENT WATERMARK */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.02] overflow-hidden select-none flex flex-col items-center justify-center p-20 gap-24">
           {Array.from({ length: 8 }).map((_, i) => (
                <h1 key={i} className="text-[25vw] font-serif font-black italic tracking-tighter transform rotate-12">EVENTS</h1>
           ))}
      </div>

      <div className="w-full max-w-[580px] bg-white relative flex flex-col shadow-[0_45px_150px_rgba(0,0,0,0.5)] overflow-hidden sm:rounded-[60px] border border-white/5">
        
        {/* NEW EVENT HERO SECTION */}
        <section className="relative min-h-[660px] w-full flex flex-col justify-end pb-16 overflow-hidden bg-black">
             {/* Background Image */}
             <div className="absolute inset-0 z-0 group">
                  <Image 
                       src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop" 
                       alt="Event" 
                       fill 
                       className="object-cover opacity-60 scale-110" 
                       unoptimized={true} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
             </div>

             {/* Floral Decoration */}
             <div className="absolute bottom-20 right-[-30px] opacity-20 pointer-events-none transform rotate-12 scale-[1.8]">
                  <Flower2 size={200} strokeWidth={0.5} className="text-[#F97316]" />
             </div>

             {/* Profile Info Row */}
             <div className="relative z-10 px-8 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 text-center md:text-left">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] shrink-0 group-hover:scale-105 transition-transform duration-700">
                       {card.image ? (
                            <Image src={card.image} alt={name} fill className="object-cover" unoptimized={true} />
                       ) : (
                            <div className="w-full h-full bg-[#F97316] flex items-center justify-center text-white text-5xl font-black">{name.charAt(0)}</div>
                       )}
                  </div>
                  <div className="space-y-2 pt-4">
                       <h1 className="text-[42px] font-black text-white tracking-tighter leading-none drop-shadow-lg">{name}</h1>
                       <p className="text-[#F97316] font-black text-2xl uppercase tracking-[0.1em]">{role}</p>
                  </div>
             </div>

             {/* Description Centered */}
             <div className="relative z-10 px-10 mb-12">
                  <p className="text-slate-300 text-[15px] leading-relaxed max-w-[480px] mx-auto text-center font-medium opacity-80 drop-shadow-md">
                       {card.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
                  </p>
             </div>

             <div className="relative z-10 px-10 pb-6">
                  <VCardSocialLinks 
                      card={card} 
                      layout="vertical" 
                      variant="circular" 
                      iconSize={20}
                      itemClassName="bg-white/5 border border-white/10 rounded-2xl p-4 w-full hover:bg-white/10 transition-all shadow-lg"
                  />
             </div>
        </section>

        {/* REFINED CONTACT SECTION */}
        <section className="px-10 pb-40 bg-[#0A0A0A] relative overflow-hidden">
             {/* Particles Overlay */}
             <div className="absolute inset-0 opacity-20 pointer-events-none">
                  {Array.from({ length: 20 }).map((_, i) => (
                       <div 
                            key={i} 
                            className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse" 
                            style={{ 
                                 top: `${Math.random() * 100}%`, 
                                 left: `${Math.random() * 100}%`,
                                 animationDelay: `${Math.random() * 2}s`
                            }} 
                       />
                  ))}
             </div>

             {/* Champagne Decoration */}
             <div className="absolute bottom-10 left-4 opacity-30 pointer-events-none transform -rotate-12 scale-110">
                  <div className="relative group">
                       <Wine size={80} strokeWidth={1} className="text-[#F97316]" />
                       <div className="absolute -top-4 -right-2 flex gap-1 animate-bounce">
                            <Sparkle size={12} className="text-[#F97316]" />
                            <Sparkle size={8} className="text-[#F97316] delay-500" />
                       </div>
                  </div>
             </div>

             <div className="relative z-10 flex items-center gap-4 mb-16">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#F97316] to-[#92400E] rounded-md shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">Contact</h2>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 relative z-10">
                  <div className="flex items-center gap-5 group">
                       <div className="w-16 h-16 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-white border border-white/5 shadow-2xl group-hover:scale-110 transition-transform">
                            <Mail size={24} strokeWidth={1.5} />
                       </div>
                       <div className="space-y-1">
                            <span className="text-[#F97316] font-black text-[10px] uppercase tracking-widest block">E-mail address</span>
                            <p className="text-white font-bold text-lg">{card.email || "jackie@gmail.com"}</p>
                       </div>
                  </div>
                  <div className="flex items-center gap-5 group">
                       <div className="w-16 h-16 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-white border border-white/5 shadow-2xl group-hover:scale-110 transition-transform">
                            <Phone size={24} strokeWidth={1.5} />
                       </div>
                       <div className="space-y-1">
                            <span className="text-[#F97316] font-black text-[10px] uppercase tracking-widest block">Mobile Number</span>
                            <p className="text-white font-bold text-lg">{card.phone || "+1 4078461474"}</p>
                       </div>
                  </div>
                  <div className="flex items-center gap-5 group">
                       <div className="w-16 h-16 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-white border border-white/5 shadow-2xl group-hover:scale-110 transition-transform">
                            <Cake size={24} strokeWidth={1.5} />
                       </div>
                       <div className="space-y-1">
                            <span className="text-[#F97316] font-black text-[10px] uppercase tracking-widest block">Date of Birth</span>
                            <p className="text-white font-bold text-lg">{card.birthDate || "12th June, 1990"}</p>
                       </div>
                  </div>
                  <div className="flex items-center gap-5 group">
                       <div className="w-16 h-16 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-white border border-white/5 shadow-2xl group-hover:scale-110 transition-transform">
                            <MapPin size={24} strokeWidth={1.5} />
                       </div>
                       <div className="space-y-1">
                            <span className="text-[#F97316] font-black text-[10px] uppercase tracking-widest block">Location</span>
                            <p className="text-white font-bold text-lg">{card.address || "New York, USA"}</p>
                       </div>
                  </div>
             </div>
        </section>

        {/* REFINED SERVICES SECTION */}
        <section className="px-10 pb-40 bg-[#0A0A0A] relative overflow-hidden">
             <div className="relative text-center mb-24 z-10">
                  <h2 className="text-4xl font-black text-white uppercase tracking-tight inline-block relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 lux-underline after:bg-[#F97316]">
                       Our Services
                  </h2>
             </div>

             <div className="space-y-16 max-w-[540px] mx-auto relative z-10">
                  <div className="flex items-start gap-8 group">
                       <div className="w-20 h-20 bg-[#1A1A1A] rounded-2xl flex items-center justify-center shrink-0 border border-white/10 shadow-3xl group-hover:bg-[#F97316] group-hover:text-white transition-all duration-500 hover:rotate-6">
                            <LayoutGrid size={32} strokeWidth={1.5} className="group-hover:scale-110 transition-transform text-[#F97316] group-hover:text-white" />
                       </div>
                       <div className="space-y-3 pt-2">
                            <h3 className="text-white font-black text-2xl tracking-tight">Web Design</h3>
                            <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>
                       </div>
                  </div>
                  <div className="flex items-start gap-8 group">
                       <div className="w-20 h-20 bg-[#1A1A1A] rounded-2xl flex items-center justify-center shrink-0 border border-white/10 shadow-3xl group-hover:bg-[#F97316] group-hover:text-white transition-all duration-500 hover:rotate-6">
                            <Sparkles size={32} strokeWidth={1.5} className="group-hover:scale-110 transition-transform text-[#F97316] group-hover:text-white" />
                       </div>
                       <div className="space-y-3 pt-2">
                            <h3 className="text-white font-black text-2xl tracking-tight">Branding Design</h3>
                            <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>
                       </div>
                  </div>
             </div>
        </section>

        {/* REFINED APPOINTMENT SECTION */}
        <section className="px-10 pb-40 bg-[#0A0A0A] relative overflow-hidden">
             {/* Cake Decoration */}
             <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-20 pointer-events-none transform -rotate-12 scale-125">
                  <Cake size={100} strokeWidth={1} className="text-[#F97316]" />
             </div>

             <div className="relative z-10 flex items-center gap-4 mb-16 px-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#F97316] to-[#92400E] rounded-md shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">Make an Appointment</h2>
             </div>

             <div className="max-w-[500px] mx-auto space-y-10 relative z-10 px-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
                       <label className="text-white font-bold text-xl sm:w-20">Date:</label>
                       <div className="relative flex-1 w-full">
                            <input 
                                 type="text" 
                                 placeholder="Pick a date" 
                                 className="w-full h-16 bg-[#1A1A1A] border border-white/10 rounded-xl px-6 text-white font-medium focus:outline-none focus:border-[#F97316]"
                                 onFocus={(e) => (e.target.type = "date")}
                            />
                            <Clock size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500" />
                       </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
                       <label className="text-white font-bold text-xl sm:w-20 pt-4">Hour:</label>
                       <div className="grid grid-cols-2 gap-4 flex-1 w-full">
                            {['8:10 - 20:00', '8:10 - 20:00', '8:10 - 20:00', '8:10 - 20:00'].map((time, idx) => (
                                 <button key={idx} className="h-14 bg-[#1A1A1A] rounded-xl text-slate-400 font-medium border border-white/5 hover:bg-[#222] hover:text-white transition-all text-sm">
                                      {time}
                                 </button>
                            ))}
                       </div>
                  </div>

                  <button className="w-full h-16 bg-gradient-to-r from-[#F97316] to-[#92400E] text-white rounded-xl font-black text-lg shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:scale-[1.02] active:scale-95 transition-all outline-none">
                       Make an Appointment
                  </button>
             </div>
        </section>

        {/* REFINED GALLERY SECTION */}
        <section className="px-10 pb-40 bg-[#0A0A0A] relative overflow-hidden">
             <div className="relative text-center mb-16 z-10">
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">Gallery</h2>
             </div>

             <div className="max-w-[500px] mx-auto relative group px-6">
                  <div className="relative aspect-video rounded-[32px] md:rounded-[40px] overflow-hidden border-2 border-white/5 shadow-3xl">
                       <Image 
                            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop" 
                            alt="Event Gallery" 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            unoptimized={true}
                       />
                       <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#0A0A0A] shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                            <Play size={32} className="ml-1" />
                       </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="absolute top-1/2 left-0 md:left-[-15px] -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-slate-400 cursor-pointer hover:bg-white/20 transition-all border border-white/5">
                       <ArrowLeft size={24} />
                  </div>
                  <div className="absolute top-1/2 right-0 md:right-[-15px] -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#F97316] to-[#92400E] rounded-2xl flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-110 transition-all border border-white/10">
                       <ArrowRight size={24} />
                  </div>
             </div>
        </section>

        {/* REFINED PRODUCTS SECTION */}
        <section className="px-10 pb-40 bg-[#0A0A0A] relative overflow-hidden">
             <div className="relative z-10 flex items-center gap-4 mb-20 px-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#F97316] to-[#92400E] rounded-md shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">Products</h2>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-14 relative z-10 px-4">
                  {[1, 2].map((prod) => (
                       <div key={prod} className="relative group">
                            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-white/5 z-10 shadow-2xl">
                                 <Image 
                                      src={prod === 1 ? "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800" : "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800"} 
                                      alt="Product" 
                                      fill 
                                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                      unoptimized={true}
                                 />
                                 {prod === 2 && (
                                      <div className="absolute bottom-4 right-4 flex flex-col gap-3">
                                           <div className="w-10 h-10 bg-[#1A1A1A]/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#F97316] border border-white/10 hover:scale-110 transition-transform cursor-pointer">
                                                <MessageCircle size={18} />
                                           </div>
                                           <div className="w-10 h-10 bg-[#1A1A1A]/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#F97316] border border-white/10 hover:scale-110 transition-transform cursor-pointer">
                                                <Share2 size={18} />
                                           </div>
                                      </div>
                                 )}
                            </div>
                            <div className="bg-[#111] rounded-[32px] p-8 -mt-10 pt-16 border border-white/5 shadow-2xl space-y-2 group-hover:bg-[#151515] transition-colors">
                                 <div className="flex justify-between items-center">
                                      <h3 className="text-white font-black text-xl tracking-tight">Laptop</h3>
                                      <span className="text-[#F97316] font-black text-xl">$200</span>
                                 </div>
                                 <p className="text-slate-500 text-xs font-medium">Dell Inspiron Core i3 11th Gen</p>
                            </div>
                       </div>
                  ))}

                  {/* Floating Action Menu */}
                  <div className="absolute bottom-[-15px] right-2 w-20 h-20 bg-gradient-to-br from-[#F97316] to-[#92400E] rounded-[24px] flex items-center justify-center text-white shadow-[0_20px_40px_rgba(249,115,22,0.4)] z-20 cursor-pointer hover:scale-110 transition-transform rotate-3 hover:rotate-0">
                       <LayoutGrid size={32} />
                  </div>
             </div>
        </section>

        {/* REFINED TESTIMONIAL SECTION */}
        <section className="px-10 pb-40 bg-[#0A0A0A] relative overflow-hidden">
             {/* Decorative Table/Bouquet Element */}
             <div className="absolute right-[-20px] bottom-10 opacity-30 pointer-events-none transform -rotate-12 scale-[1.4]">
                  <div className="relative">
                       <div className="w-40 h-1 bg-[#F97316]/40 rounded-full mb-2" />
                       <div className="w-32 h-64 bg-gradient-to-t from-[#F97316]/5 to-transparent border-x border-t border-[#F97316]/20 rounded-t-full flex items-center flex-col pt-8">
                            <GlassWater size={40} strokeWidth={1} className="text-[#F97316]" />
                            <Flower2 size={60} strokeWidth={1} className="text-[#F97316]/60 -mt-4" />
                       </div>
                  </div>
             </div>

             <div className="relative text-center mb-16 z-10">
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">Testimonial</h2>
             </div>

             <div className="max-w-[500px] mx-auto text-center space-y-10 relative z-10 px-4">
                  <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                       <Image 
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" 
                            alt="Testimonial Author" 
                            fill 
                            className="object-cover"
                            unoptimized={true}
                       />
                  </div>
                  <div className="space-y-6">
                       <p className="text-slate-300 text-[19px] leading-relaxed font-serif italic opacity-90 drop-shadow-md px-6">
                            "The attention to detail and creative vision brought our dream event to life. Every moment was perfectly orchestrated, leaving us to enjoy the celebration without a single worry!"
                       </p>
                       <div className="space-y-1">
                            <p className="text-[#F97316] font-black text-xl uppercase tracking-widest leading-none mb-1">Sarah Jenkins</p>
                            <div className="w-12 h-1 bg-amber-400/20 mx-auto rounded-full mb-1" />
                            <p className="text-white/30 text-[11px] font-bold uppercase tracking-[0.4em]">Bridal Client</p>
                       </div>
                  </div>
             </div>
        </section>

        {/* REFINED BLOG SECTION */}
        <section className="px-10 pb-40 bg-[#0A0A0A] relative overflow-hidden">
             <div className="relative z-10 flex items-center gap-4 mb-20 px-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#F97316] to-[#92400E] rounded-md shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">Blog</h2>
             </div>

             <div className="relative z-10 px-4 group">
                  <div className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-10">
                       {[
                            { title: "Men's Wear", img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=800" },
                            { title: "Luxury Fashion", img: "https://images.unsplash.com/photo-1445205170230-053b830c6050?q=80&w=800" },
                            { title: "Style Guide", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800" }
                       ].map((blog, idx) => (
                            <div key={idx} className="min-w-[300px] sm:min-w-[420px] space-y-8 flex-shrink-0 group/blog">
                                 <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border border-white/5">
                                      <Image 
                                           src={blog.img} 
                                           alt={blog.title} 
                                           fill 
                                           className="object-cover group-hover/blog:scale-110 transition-transform duration-[2s]" 
                                           unoptimized={true}
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/blog:opacity-100 transition-opacity" />
                                 </div>
                                 <div className="space-y-3 px-1">
                                      <h3 className="text-white font-black text-2xl tracking-tight leading-none">{blog.title}</h3>
                                      <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-2 max-w-[380px] opacity-80">
                                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                                      </p>
                                 </div>
                            </div>
                       ))}
                  </div>

                  {/* Pagination Dots */}
                  <div className="flex justify-center gap-3 mt-12 mb-4">
                       {[0, 1, 2, 3].map((dot) => (
                            <div 
                                 key={dot} 
                                 className={`w-2.5 h-2.5 rounded-full border transition-all duration-500 ${dot === 1 ? 'bg-[#F97316] border-[#F97316] scale-125' : 'bg-white/10 border-white/20'}`} 
                            />
                       ))}
                  </div>
             </div>
        </section>

        {/* REFINED QR SECTION */}
        <section className="px-10 pb-40 bg-[#0A0A0A] relative overflow-hidden">
             {/* Dining Decoration */}
             <div className="absolute top-1/2 left-[-20px] -translate-y-1/2 opacity-20 pointer-events-none transform -rotate-12 scale-150">
                  <div className="relative">
                       <Wine size={120} strokeWidth={0.5} className="text-[#F97316]" />
                       <div className="absolute top-10 left-10 w-32 h-1 bg-[#F97316]/30 rounded-full" />
                  </div>
             </div>

             <div className="relative text-center mb-16 z-10">
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">QR Code</h2>
             </div>

             <div className="max-w-[440px] mx-auto text-center relative z-10 px-4">
                  <div className="bg-white p-8 sm:p-10 rounded-[40px] shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative overflow-visible inline-block group">
                       <div className="absolute top-[-48px] left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-[6px] border-[#0A0A0A] overflow-hidden shadow-2xl bg-[#0A0A0A] group-hover:scale-110 transition-transform duration-500">
                            {card.image ? (
                                 <Image src={card.image} alt="QR Profile" fill className="object-cover" unoptimized={true} />
                            ) : (
                                 <div className="w-full h-full bg-[#F97316] flex items-center justify-center text-white text-3xl font-black">{name.charAt(0)}</div>
                            )}
                       </div>
                       <div className="relative w-56 h-56 sm:w-64 sm:h-64 mt-8 mx-auto">
                            {qrCode && <Image src={qrCode} alt="QR Code" fill className="p-2" unoptimized={true} />}
                       </div>
                  </div>
                  <div className="mt-14 px-4 overflow-visible">
                       <button className="w-full h-16 sm:w-auto sm:px-14 bg-gradient-to-r from-[#F97316] to-[#92400E] text-white rounded-xl font-black text-lg shadow-[0_15px_30px_rgba(249,115,22,0.4)] hover:scale-[1.05] active:scale-95 transition-all outline-none uppercase tracking-widest whitespace-nowrap">
                            Download My QR Code
                       </button>
                  </div>
             </div>
        </section>

        {/* REFINED BUSINESS HOURS SECTION */}
        <section className="px-10 pb-40 bg-[#0A0A0A] relative overflow-hidden">
             {/* Bell Decoration */}
             <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 opacity-20 pointer-events-none transform rotate-12 scale-[1.8]">
                  <Bell size={200} strokeWidth={0.5} className="text-[#F97316]" />
             </div>

             <div className="relative z-10 flex items-center gap-4 mb-20 px-6 max-w-[500px] mx-auto">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#F97316] to-[#92400E] rounded-md shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">Business Hours</h2>
             </div>

             <div className="max-w-[500px] mx-auto relative z-10 px-6">
                  <div className="bg-[#111] rounded-[48px] p-8 sm:p-12 border border-white/5 shadow-3xl text-white space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
                       {[
                            { day: "Sunday", time: "8:10 - 20:00" },
                            { day: "Monday", time: "8:10 - 20:00" },
                            { day: "Tuesday", time: "8:10 - 20:00" },
                            { day: "Wednesday", time: "8:10 - 20:00" },
                            { day: "Thursday", time: "8:10 - 20:00" },
                            { day: "Friday", time: "8:10 - 20:00" },
                            { day: "Saturday", time: "Closed" },
                       ].map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 hover:translate-x-2 transition-transform cursor-default">
                                 <span className="text-lg font-bold text-white/50">{item.day}:</span>
                                 <span className="text-lg font-black text-white tracking-tight">{item.time}</span>
                            </div>
                       ))}
                  </div>
             </div>
        </section>

        {/* REFINED CONTACT FORM SECTION */}
        <section className="px-10 pb-40 bg-[#0A0A0A] relative overflow-hidden">
             {/* Lantern Decoration */}
             <div className="absolute right-[-20px] bottom-10 opacity-30 pointer-events-none transform -rotate-12 scale-[1.2]">
                  <div className="relative">
                       <div className="w-1 h-20 bg-[#F97316]/20 mx-auto -mb-2" />
                       <Lamp size={160} strokeWidth={0.5} className="text-[#F97316]" />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#F97316]/5 blur-3xl rounded-full" />
                  </div>
             </div>

             <div className="relative text-center mb-20 z-10 transition-all">
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight inline-block relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#F97316]">
                       Contact Us
                  </h2>
             </div>

             <div className="max-w-[500px] mx-auto space-y-6 relative z-10 px-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <input 
                            type="text" 
                            placeholder="Full Name" 
                            className="h-16 bg-black border border-white/10 rounded-xl px-6 text-white focus:border-[#F97316] outline-none transition-all placeholder:text-white/20"
                       />
                       <input 
                            type="text" 
                            placeholder="Phone Number" 
                            className="h-16 bg-black border border-white/10 rounded-xl px-6 text-white focus:border-[#F97316] outline-none transition-all placeholder:text-white/20"
                       />
                  </div>
                  <input 
                       type="email" 
                       placeholder="Email Address" 
                       className="w-full h-16 bg-black border border-white/10 rounded-xl px-6 text-white focus:border-[#F97316] outline-none transition-all placeholder:text-white/20"
                  />
                  <textarea 
                       placeholder="Type a Message..." 
                       rows={4}
                       className="w-full bg-black border border-white/10 rounded-xl p-6 text-white focus:border-[#F97316] outline-none transition-all resize-none placeholder:text-white/20"
                  />
                  
                  <div className="flex justify-center pt-8">
                       <button className="h-16 px-14 bg-gradient-to-r from-[#F97316] to-[#92400E] text-white rounded-xl font-black text-lg shadow-[0_15px_30px_rgba(249,115,22,0.4)] hover:scale-[1.05] active:scale-95 transition-all outline-none uppercase tracking-widest whitespace-nowrap">
                            Send Message
                       </button>
                  </div>
             </div>
        </section>

        {/* CREATE YOUR VCARD CTA */}
        <section className="px-10 pb-16 bg-[#0A0A0A] relative z-10">
             <div className="max-w-[500px] mx-auto flex items-center gap-4 px-6 group cursor-pointer">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#F97316] to-[#92400E] rounded-md shadow-[0_0_15px_rgba(249,115,22,0.5)] group-hover:scale-110 transition-transform" />
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#F97316] transition-colors">Create Your VCard</h2>
             </div>
        </section>

        {/* DYNAMIC SECTIONS */}
        <div className="px-10 pb-10 border-t border-white/5 pt-10 bg-[#0A0A0A]">
        </div>

        {/* REFINED FOOTER */}
        <footer className="py-24 bg-[#0A0A0A] text-center space-y-12 border-t border-white/5">
             <VCardSocialLinks 
                card={card} 
                layout="horizontal" 
                variant="circular" 
                iconSize={24}
                itemClassName="hover:-translate-y-2 shadow-2xl transition-transform"
                containerClassName="flex justify-center gap-10 px-10"
             />
             <div className="space-y-4 px-10">
                  <p className="text-[11px] font-black text-white/30 uppercase tracking-[0.8em]">Event Identity Node</p>
                  <p className="text-[12px] font-bold text-[#F97316] uppercase tracking-widest">{organization} © 2026</p>
             </div>
        </footer>

      </div>
      
      {/* FONTS */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;900&family=Space+Grotesk:wght@300;400;700&display=swap" rel="stylesheet" />
      <style jsx global>{`
        body { font-family: 'Montserrat', sans-serif; }
        .font-serif { font-family: 'Space Grotesk', sans-serif; }
      `}</style>
    </div>
  );
}


