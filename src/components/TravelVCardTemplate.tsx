"use client";
import React from "react";
import Image from "next/image";
import { 
  Mail, Phone, MapPin, Globe2, Cake, Calendar, 
  ArrowLeft, ArrowRight, ExternalLink, UserPlus,
  Plane, Camera, Facebook, Linkedin, Instagram, Twitter
} from "lucide-react";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";
import type { VCardItem } from "@/context/VCardsContextTypes";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function TravelVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "Bessie Cooper";
  const role = card.occupation || card.tagline || "Travel Agent";
  const description =
    card.description ||
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center px-4 py-8">
      <div className="w-full max-w-[540px] bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100 flex flex-col">
        
        {/* 1. Dynamic Travel Hero */}
        <section className="relative h-[320px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop"
            alt="Mountains"
            fill
            className="object-cover"
            priority
          />
          {/* Watermark Text - Darker and more stylized */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="text-[110px] sm:text-[130px] font-black text-slate-900/10 tracking-widest uppercase select-none">
              TRAVEL
            </h1>
          </div>
          
          {/* Animated Plane Trail with a Loop (Spiral) */}
          <div className="absolute inset-0 pointer-events-none">
            <svg viewBox="0 0 500 300" className="w-full h-full">
              <path 
                d="M 420 100 C 380 280, 100 250, 200 150 C 300 50, 450 180, 350 250" 
                fill="none" 
                stroke="white" 
                strokeWidth="2" 
                strokeDasharray="6,6" 
                className="opacity-40"
              />
              <path 
                d="M 420 100 C 380 280, 100 250, 200 150 C 300 50, 450 180, 350 250" 
                fill="none" 
                id="planePath"
              />
              <g className="animate-plane-follow">
                 <Plane 
                   className="text-amber-400 drop-shadow-lg" 
                   size={28} 
                   fill="currentColor"
                   x="315" y="105" // Starting position near the start of the path
                 />
              </g>
            </svg>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </section>

        {/* 2. Profile & Info Section */}
        <section className="px-8 -mt-24 relative z-10 pb-12">
          <div className="flex items-end gap-6 relative group/profile">
            {/* Camera icon watermark - refined opacity */}
            <div className="absolute -right-6 top-8 opacity-[0.03] -rotate-12 pointer-events-none group-hover/profile:opacity-[0.06] group-hover/profile:-rotate-6 transition-all duration-700">
               <Camera size={160} strokeWidth={0.5} />
            </div>

            {/* Profile Avatar with Enhanced Shadow/Glow */}
            <div className="relative shrink-0">
               <div className="w-32 h-32 rounded-[36px] overflow-hidden border-[6px] border-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] bg-slate-50 relative group-hover/profile:scale-105 transition-transform duration-500 will-change-transform">
                  {card.image ? (
                    <Image 
                      src={card.image} 
                      alt={name} 
                      fill 
                      className="object-cover"
                      unoptimized={card.image.startsWith("data:")}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100 text-sky-600 text-4xl font-extrabold uppercase">
                       {name.charAt(0)}
                    </div>
                  )}
               </div>
               {/* Verified badge style overlay */}
               <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-white rounded-2xl shadow-lg border-2 border-slate-50 flex items-center justify-center text-xl">
                  ✨
               </div>
            </div>

            {/* Name & Role - Improved Typography */}
            <div className="pb-3 flex-1 relative">
               <h2 className="text-[28px] font-black text-[#1E293B] tracking-tight leading-7 mb-1">
                 {name}
               </h2>
               <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-amber-500 font-extrabold text-sm tracking-widest uppercase">
                    {role}
                  </p>
               </div>
            </div>
          </div>

          {/* Social Icons Container */}
          <VCardSocialLinks 
              card={card} 
              layout="horizontal" 
              variant="circular" 
              iconSize={21}
              itemClassName="hover:scale-110 active:scale-95 transition-all"
              containerClassName="mt-8 flex flex-wrap gap-3"
          />

          {/* Contact Details List - Refined as per user image */}
          <div className="mt-12 relative">
             {/* Palm watermarks */}
             <div className="absolute -left-12 -top-12 opacity-[0.03] pointer-events-none rotate-45">
                <Globe2 size={120} />
             </div>
             <div className="absolute -right-12 -bottom-12 opacity-[0.03] pointer-events-none -rotate-12">
                <Globe2 size={120} />
             </div>

             <div className="flex items-center gap-2 mb-8">
               <div className="w-1.5 h-8 bg-amber-400 rounded-full" />
               <h3 className="text-2xl font-black text-[#2D3E50]">Contact</h3>
             </div>

             <div className="flex flex-col md:flex-row gap-8 items-start relative">
                {/* Left side: Travel Illustration */}
                <div className="relative w-full md:w-1/2 aspect-square max-w-[240px] mx-auto md:mx-0">
                   {/* Suitcase & Monuments Illustration Placeholder */}
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                         <Image 
                           src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=400&auto=format&fit=crop" 
                           alt="Travel Illustration" 
                           fill 
                           className="object-contain rounded-3xl"
                         />
                         {/* Backpack floating icon top right style */}
                         <div className="absolute -top-6 -right-6 w-20 h-20 opacity-90 drop-shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="w-full h-full bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">🎒</div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Right side: Contact List - Professional Cards */}
                <div className="w-full md:w-1/2 space-y-3">
                   {[
                     { icon: Mail, label: "Email", value: card.email || "michael@gmail.com", color: "text-blue-600", bg: "bg-blue-50/50" },
                     { icon: Phone, label: "Phone", value: card.phone || "+49 95864 12484", color: "text-emerald-600", bg: "bg-emerald-50/50" },
                     { icon: Cake, label: "Birthday", value: card.birthDate || "4 December 1995", color: "text-rose-600", bg: "bg-rose-50/50" },
                     { icon: MapPin, label: "Location", value: card.address || "Berlin - Germany", color: "text-amber-600", bg: "bg-amber-50/50" }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 p-3 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 hover:shadow-sm transition-all duration-300 group/item">
                       <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center ${item.color} shadow-sm group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform`}>
                         <item.icon size={18} strokeWidth={2.5} />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-widest font-black text-slate-400 leading-none mb-1">{item.label}</span>
                          <p className="text-sm font-bold text-[#1E293B]">{item.value}</p>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-16 relative">
            {/* Travel Stickers/Decorations */}
            <div className="absolute -left-8 -top-12 w-20 h-20 pointer-events-none drop-shadow-xl z-10 rotate-[-15deg]">
               <span className="text-4xl block">🎒</span>
               <span className="text-4xl block ml-4 -mt-2">👒</span>
            </div>
            
            <div className="absolute top-0 left-1/3 opacity-[0.03] pointer-events-none">
               <div className="w-24 h-24 border-2 border-slate-900 rounded-xl flex items-center justify-center rotate-12">
                  <span className="text-[10px] font-black uppercase tracking-widest">Travel Log</span>
               </div>
            </div>

            <div className="absolute -left-12 top-1/2 opacity-[0.04] -rotate-12 pointer-events-none">
               <div className="border-4 border-slate-400 p-2 rounded-lg text-slate-400 font-black text-xs flex flex-col items-center">
                  <span className="text-[8px]">CERTIFIED</span>
                  <span className="text-lg">TRAVEL</span>
                  <span className="text-[8px]">2026</span>
               </div>
            </div>

            <div className="absolute -right-4 -bottom-6 w-16 h-16 pointer-events-none drop-shadow-xl z-20">
               <div className="relative w-full h-full bg-amber-400 rounded-2xl flex items-center justify-center text-4xl shadow-lg border-2 border-white">
                  🧳
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                     <span className="text-[10px] font-bold mt-4">😊</span>
                  </div>
               </div>
            </div>

            <div className="flex items-center justify-end gap-2 mb-8">
               <h3 className="text-2xl font-black text-[#2D3E50]">Gallery</h3>
               <div className="w-1.5 h-8 bg-amber-400 rounded-full" />
            </div>

            {/* Gallery Slider - Colosseum Illustration */}
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[16/10] group">
               <Image 
                 src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop" 
                 alt="Colosseum" 
                 fill 
                 className="object-cover"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white shadow-2xl rounded-full flex items-center justify-center text-[#2D3E50] cursor-pointer hover:scale-110 transition-transform">
                     <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-[#2D3E50] border-b-[8px] border-b-transparent ml-1" />
                  </div>
               </div>
               
               {/* Slider Controls */}
               <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 flex justify-between items-center pointer-events-none">
                  <button className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white pointer-events-auto hover:bg-white/40 transition-colors">
                     <ArrowLeft size={18} />
                  </button>
                  <button className="w-9 h-9 bg-[#2b4266] rounded-lg flex items-center justify-center text-white pointer-events-auto shadow-lg hover:translate-x-1 transition-transform">
                     <ArrowRight size={18} />
                  </button>
               </div>
            </div>
          </div>

          {/* Our Service Section - Dynamic or Mock List */}
          <div className="mt-8 overflow-x-auto pb-6 scrollbar-hide">
             <div className="flex gap-6 min-w-max px-2">
                {(((card as any)?.services as any[]) ?? []).length > 0 ? (
                  (((card as any)?.services as any[]) ?? []).map((svc, idx) => (
                    <div key={svc.id || idx} className="w-[340px] bg-white rounded-[32px] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex items-center gap-4 border border-slate-50 transition-transform hover:scale-[1.02]">
                       <div className="relative w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                          {svc.icon ? (
                            <img src={svc.icon} alt={svc.name} className="h-full w-full object-cover" />
                          ) : (
                            <Image 
                              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=200&auto=format&fit=crop" 
                              alt="Service placeholder" 
                              fill 
                              className="object-cover"
                            />
                          )}
                       </div>
                       <div className="flex-1 space-y-2">
                          <h4 className="text-lg font-black text-[#2D3E50] truncate">{svc.name}</h4>
                          <p className="text-[11px] text-slate-400 leading-snug line-clamp-3">
                             {svc.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                          </p>
                          <p className="text-xl font-black text-[#2b4266] pt-1">
                             {svc.price ? `$${svc.price}` : "$000"}
                          </p>
                       </div>
                    </div>
                  ))
                ) : (
                  // Default Mock Services as seen in user image
                  [1, 2, 3].map((i) => (
                    <div key={i} className="w-[340px] bg-white rounded-[32px] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex items-center gap-4 border border-slate-50">
                       <div className="relative w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                          <Image 
                             src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=200&auto=format&fit=crop" 
                             alt="Colosseum service" 
                             fill 
                             className="object-cover"
                          />
                       </div>
                       <div className="flex-1 space-y-2">
                          <h4 className="text-lg font-black text-[#2D3E50]">Laptop</h4>
                          <p className="text-[11px] text-slate-400 leading-snug line-clamp-3">
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                          </p>
                          <p className="text-xl font-black text-[#2b4266] pt-1">$000</p>
                       </div>
                    </div>
                  ))
                )}
             </div>
          </div>

          {/* Appointment Section */}
          <div className="mt-20 relative">
             {/* Decorative Icons */}
             <div className="absolute -left-6 -top-10 w-24 h-24 z-10 pointer-events-none drop-shadow-2xl">
                <div className="relative w-full h-full flex items-center justify-center">
                   <Plane className="text-sky-600 rotate-[-15deg]" size={48} />
                   <div className="absolute bottom-2 right-2 w-10 h-10 bg-amber-400 rounded-2xl flex items-center justify-center border-4 border-white">
                      <span className="text-white text-xl">✓</span>
                   </div>
                </div>
             </div>
             
             <div className="absolute -right-6 -top-12 w-24 h-24 opacity-[0.05] pointer-events-none rotate-12">
                <ExternalLink size={80} />
             </div>

             <div className="flex items-center justify-end gap-2 mb-10">
                <h3 className="text-2xl font-black text-[#2D3E50]">Make a Appointment</h3>
                <div className="w-1.5 h-8 bg-amber-400 rounded-full" />
             </div>

             <div className="relative rounded-[40px] overflow-hidden p-8 md:p-12 shadow-2xl min-h-[400px]">
                {/* Background with blur */}
                <div className="absolute inset-0">
                   <Image 
                     src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=800&auto=format&fit=crop" 
                     alt="Airport Background" 
                     fill 
                     className="object-cover blur-[2px]"
                   />
                   <div className="absolute inset-0 bg-slate-900/60" />
                </div>

                <div className="relative z-10 space-y-8">
                   {/* Pick a Date */}
                   <div className="w-full h-14 rounded-full border border-white/40 bg-white/5 backdrop-blur-md px-6 flex items-center text-white/90 font-medium">
                      Pick a date
                   </div>

                   {/* Time Slots Grid */}
                   <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-14 rounded-3xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-white font-bold text-sm hover:bg-slate-800 transition-colors cursor-pointer">
                           8:10 - 20:00
                        </div>
                      ))}
                   </div>

                   {/* Submit Button */}
                   <div className="pt-4">
                      <button className="w-full h-14 rounded-[28px] bg-amber-400 text-[#2b4266] font-black text-base shadow-xl hover:scale-[1.02] transition-transform active:scale-95">
                         Make an Appointment
                      </button>
                   </div>
                </div>
             </div>
          </div>

          {/* Product Section */}
          <div className="mt-20 relative">
             {/* Product Decorations */}
             <div className="absolute -left-4 -top-8 opacity-20 pointer-events-none rotate-[-15deg]">
                <Globe2 size={60} />
             </div>
             <div className="absolute -right-4 -top-12 w-24 h-24 pointer-events-none drop-shadow-xl z-10 rotate-[15deg]">
                <span className="text-5xl block">👜</span>
             </div>

             <div className="flex items-center gap-2 mb-8">
               <div className="w-1.5 h-8 bg-amber-400 rounded-full" />
               <h3 className="text-2xl font-black text-[#2D3E50]">Product</h3>
             </div>

             <div className="overflow-x-auto pb-6 scrollbar-hide">
                <div className="flex gap-4 min-w-max px-2">
                   {(((card as any)?.products as any[]) ?? []).length > 0 ? (
                     (((card as any)?.products as any[]) ?? []).map((prod, idx) => (
                       <div key={prod.id || idx} className="w-[260px] bg-slate-50/50 rounded-[32px] p-3 border border-slate-100 shadow-sm transition-transform hover:scale-[1.02]">
                          <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4">
                             {prod.icon ? (
                               <img src={prod.icon} alt={prod.name} className="h-full w-full object-cover" />
                             ) : (
                               <div className="w-full h-full bg-slate-200" />
                             )}
                          </div>
                          <div className="px-1 flex justify-between items-start mb-1">
                             <h4 className="text-sm font-black text-[#2D3E50]">{prod.name}</h4>
                             <p className="text-sm font-black text-emerald-500">${prod.price || "125"}</p>
                          </div>
                          <p className="px-1 text-[10px] text-slate-400 line-clamp-2">{prod.description || "It is a long established"}</p>
                       </div>
                     ))
                   ) : (
                     // Placeholder Products
                     [
                       { title: "Statue of Liberty", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400" },
                       { title: "The Colosseum", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=400" }
                     ].map((item, i) => (
                       <div key={i} className="w-[220px] bg-slate-50/50 rounded-[32px] p-3 border border-slate-100 shadow-sm">
                          <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4">
                             <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
                          </div>
                          <div className="px-1 flex justify-between items-start mb-1">
                             <h4 className="text-sm font-black text-[#2D3E50]">Lorem Ipsum</h4>
                             <p className="text-sm font-black text-emerald-500">$125</p>
                          </div>
                          <p className="px-1 text-[10px] text-slate-400">It is a long established</p>
                       </div>
                     ))
                   )}
                </div>
             </div>
          </div>

          {/* Testimonial Section */}
          <div className="mt-20 relative px-2">
             {/* Testimonial Decorations */}
             <div className="absolute -left-6 -top-16 w-24 h-24 z-10 pointer-events-none drop-shadow-xl rotate-[-10deg]">
                <div className="relative w-full h-full bg-red-400 rounded-2xl flex items-center justify-center text-4xl shadow-lg border-2 border-white">
                   🧳
                </div>
             </div>
             <div className="absolute left-1/2 top-0 opacity-[0.05] pointer-events-none -translate-x-1/2">
                <div className="w-20 h-20 border-2 border-slate-400 rounded-full flex items-center justify-center rotate-12">
                   <span className="text-4xl">👜</span>
                </div>
             </div>
             <div className="absolute -right-8 -bottom-8 opacity-[0.05] pointer-events-none rotate-[-15deg]">
                <Globe2 size={100} />
             </div>

             <div className="flex items-center justify-end gap-2 mb-12">
                <h3 className="text-2xl font-black text-[#2D3E50]">Testimonial</h3>
                <div className="w-1.5 h-8 bg-amber-400 rounded-full" />
             </div>

             {/* Testimonial Card */}
             <div className="relative bg-slate-50/50 rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-sm">
                <div className="absolute -top-6 left-8 text-[80px] text-amber-400 leading-none opacity-50 select-none font-serif">“</div>
                
                <div className="relative z-10 space-y-8">
                   <p className="text-slate-400 text-sm italic leading-relaxed md:text-base">
                      {card.testimonials?.[0]?.quote || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}
                   </p>
                   
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-md">
                         {card.testimonials?.[0]?.image ? (
                           <img src={card.testimonials[0].image} alt="Testimonial author" className="w-full h-full object-cover" />
                         ) : (
                           <div className="w-full h-full bg-slate-400" />
                         )}
                      </div>
                      <div>
                         <p className="font-black text-[#2D3E50]">{card.testimonials?.[0]?.name || "Dianne Russell"}</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
          {/* Blog Section (Premium Dark Style with Brush Edges) */}
          <div className="mt-24 -mx-8 relative overflow-visible">
             {/* Top Brush Edge (SVG Path for realism) */}
             <div className="absolute -top-[47px] left-0 w-full h-12 z-20">
                <svg viewBox="0 0 540 48" className="w-full h-full fill-[#2D3E50]">
                   <path d="M0,48 Q20,10 40,35 T80,20 T120,40 T160,15 T200,35 T240,10 T280,30 T320,5 T360,25 T400,0 T440,20 T480,5 T520,25 T540,10 L540,48 L0,48 Z" />
                </svg>
             </div>
             
             <div className="bg-[#2D3E50] px-8 py-20 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-10">
                   <div className="w-1.5 h-8 bg-amber-400 rounded-full" />
                   <h3 className="text-2xl font-black text-white">Blog</h3>
                </div>

                <div className="absolute -right-10 top-0 opacity-[0.05] pointer-events-none rotate-12">
                   <Globe2 size={160} className="text-white" />
                </div>

                {/* Featured Blog Card */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                   <div className="w-full md:w-3/5 aspect-[16/10] rounded-[32px] overflow-hidden border-2 border-white/20 shadow-2xl relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" 
                        alt="Palm Trees" 
                        fill 
                        className="object-cover"
                      />
                   </div>
                   <div className="w-full md:w-2/5 space-y-3">
                      <h4 className="text-xl font-bold text-white">Lorem Ipsum</h4>
                      <p className="text-white/60 text-xs leading-relaxed line-clamp-4">
                         Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard.
                      </p>
                      <div className="flex gap-3 pt-4 justify-end md:justify-start">
                         <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2D3E50] shadow-xl hover:scale-110 transition-transform">
                            <ArrowLeft size={16} />
                         </button>
                         <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2D3E50] shadow-xl hover:scale-110 transition-transform">
                            <ArrowRight size={16} />
                         </button>
                      </div>
                   </div>
                </div>
             </div>

             {/* Bottom Brush Edge (SVG Path) */}
             <div className="absolute -bottom-[47px] left-0 w-full h-12 z-20">
                <svg viewBox="0 0 540 48" className="w-full h-full fill-[#2D3E50] rotate-180">
                   <path d="M0,48 Q20,10 40,35 T80,20 T120,40 T160,15 T200,35 T240,10 T280,30 T320,5 T360,25 T400,0 T440,20 T480,5 T520,25 T540,10 L540,48 L0,48 Z" />
                </svg>
             </div>
          </div>

          {/* Business Hours Section (Pill style as per latest image) */}
          <div className="mt-28 relative">
             <div className="absolute left-1/2 -top-12 -translate-x-1/2 opacity-[0.05] pointer-events-none">
                <Plane size={140} className="text-slate-900 -rotate-12" />
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => {
                   const hours = card.businessHours?.[day.toLowerCase()];
                   return (
                      <div key={day} className="h-14 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-700 font-bold text-sm shadow-sm">
                         {day} : {hours?.enabled ? `${hours.start} - ${hours.end}` : "08:10 - 20:00"}
                      </div>
                   );
                })}
             </div>
             
             <div className="mt-4 h-14 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-700 font-bold text-sm shadow-sm max-w-[80%] mx-auto">
                Saturday : {card.businessHours?.["saturday"]?.enabled ? `${card.businessHours["saturday"].start} - ${card.businessHours["saturday"].end}` : "Closed"}
             </div>
          </div>

          {/* QR Code Section */}
          <div className="mt-20 relative">
             <div className="flex items-center gap-2 mb-10">
                <div className="w-1.5 h-8 bg-amber-400 rounded-full" />
                <h3 className="text-2xl font-black text-[#2D3E50]">QR Code</h3>
             </div>

             <div className="absolute right-0 -top-8 w-24 h-24 pointer-events-none drop-shadow-xl z-10">
                <div className="relative w-full h-full flex items-center justify-center">
                   <div className="bg-sky-400 w-16 h-20 rounded-t-xl rounded-b-sm border-2 border-slate-800 relative shadow-lg">
                      <div className="absolute top-2 inset-x-2 h-1 bg-white opacity-40 rounded" />
                      <div className="absolute top-4 inset-x-2 flex flex-col gap-1">
                         <div className="w-full h-0.5 bg-slate-800" />
                         <div className="w-full h-0.5 bg-slate-800" />
                      </div>
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-4 border-2 border-slate-800 rounded-t-lg" />
                   </div>
                   <div className="absolute -right-2 bottom-0 text-3xl">🛂</div>
                </div>
             </div>

             {/* QR Code Background Container */}
             <div className="relative rounded-[40px] overflow-hidden p-12 md:p-20 shadow-2xl flex items-center justify-center">
                <div className="absolute inset-0">
                   <Image 
                     src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" 
                     alt="Beach Background" 
                     fill 
                     className="object-cover scale-150 blur-[8px]"
                   />
                   <div className="absolute inset-0 bg-slate-900/40" />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-8">
                   <div className="bg-slate-900/90 p-8 rounded-[40px] shadow-2xl border border-white/10 backdrop-blur-xl group hover:scale-105 transition-transform cursor-pointer">
                      <div className="w-44 h-44 bg-white p-4 rounded-3xl relative">
                        <Image 
                           src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${baseUrl}/${slug}`} 
                           alt="QR Code" 
                           fill 
                           className="p-4"
                           unoptimized
                        />
                      </div>
                   </div>
                   
                   <button className="h-12 px-10 rounded-full bg-amber-400 text-[#2b4266] font-black text-sm shadow-xl hover:scale-105 transition-transform active:scale-95">
                      Download My QR Code
                   </button>
                </div>
             </div>
          </div>

          {/* Contact Us Section */}
          <div className="mt-24 relative">
             {/* Ticket Icon decoration */}
             <div className="absolute -left-10 -top-8 w-24 h-24 z-10 pointer-events-none drop-shadow-2xl rotate-[-15deg]">
                <div className="relative w-full h-full p-2 border-4 border-slate-300 rounded-2xl bg-white flex flex-col items-center justify-center">
                   <Plane size={24} className="text-sky-500 mb-1" />
                   <div className="w-full flex justify-around px-2">
                      <div className="w-1 h-3 bg-slate-200 rounded-full" />
                      <div className="w-1 h-3 bg-slate-200 rounded-full" />
                      <div className="w-1 h-3 bg-slate-200 rounded-full" />
                   </div>
                   <span className="text-[8px] font-black mt-1">TRAVEL</span>
                </div>
             </div>

             <div className="flex items-center justify-end gap-2 mb-10">
                <h3 className="text-2xl font-black text-[#2D3E50]">Contact Us</h3>
                <div className="w-1.5 h-8 bg-amber-400 rounded-full" />
             </div>

             {/* Inquiry Form */}
             <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                   <input 
                     type="text" 
                     placeholder="Full Name" 
                     className="h-14 rounded-2xl border-2 border-slate-100 px-6 text-sm font-medium focus:outline-none focus:border-amber-400 transition-colors"
                   />
                   <input 
                     type="text" 
                     placeholder="Phone Number" 
                     className="h-14 rounded-2xl border-2 border-slate-100 px-6 text-sm font-medium focus:outline-none focus:border-amber-400 transition-colors"
                   />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full h-14 rounded-2xl border-2 border-slate-100 px-6 text-sm font-medium focus:outline-none focus:border-amber-400 transition-colors"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full rounded-2xl border-2 border-slate-100 p-6 text-sm font-medium focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
                
                <div className="pt-4 flex flex-col items-center relative">
                   {/* Compass Icon */}
                   <div className="absolute left-0 bottom-0 opacity-20 pointer-events-none rotate-[-15deg]">
                      <div className="w-16 h-16 border-2 border-slate-400 rounded-full flex items-center justify-center">
                         <div className="w-0.5 h-10 bg-slate-400 rotate-45" />
                         <div className="w-0.5 h-10 bg-slate-400 rotate-[135deg] absolute" />
                         <span className="absolute -top-1 font-bold text-[8px]">N</span>
                         <span className="absolute -bottom-1 font-bold text-[8px]">S</span>
                         <span className="absolute -left-1 font-bold text-[8px]">W</span>
                         <span className="absolute -right-1 font-bold text-[8px]">E</span>
                      </div>
                   </div>

                   <button className="h-12 px-12 rounded-2xl bg-amber-400 text-[#2b4266] font-black text-sm shadow-xl hover:scale-105 transition-transform active:scale-95">
                      Send Message
                   </button>

                   {/* Small Plane Icon bottom right */}
                   <div className="absolute right-0 bottom-0 opacity-80 pointer-events-none scale-x-[-1] animate-pulse">
                      <div className="flex items-center gap-1">
                         <span className="text-3xl">✈️</span>
                         <div className="flex flex-col gap-0.5 items-end">
                            <div className="w-2 h-0.5 bg-sky-200 rounded-full" />
                            <div className="w-4 h-0.5 bg-sky-100 rounded-full" />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
          {/* Create Your Vcard Section */}
          <div className="mt-28 relative">
             <div className="flex items-center gap-2 mb-10">
                <div className="w-1.5 h-8 bg-amber-400 rounded-full" />
                <h3 className="text-2xl font-black text-[#2D3E50]">Create Your Vcard</h3>
             </div>

             <div className="absolute right-0 -top-12 w-32 h-32 pointer-events-none drop-shadow-xl z-10">
                <div className="relative w-full h-full">
                   <div className="absolute top-0 right-0 text-5xl">🌍</div>
                   <div className="absolute top-4 right-8 text-3xl rotate-12">✈️</div>
                   <div className="absolute bottom-4 right-4 text-4xl">💼</div>
                </div>
             </div>

             <div className="relative group">
                <div className="w-full h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-between px-6 shadow-xl border border-white/10 group-hover:border-amber-400 transition-colors cursor-pointer overflow-hidden">
                   <p className="text-white/90 text-sm font-medium truncate pr-4">
                      {`${baseUrl.replace(/^https?:\/\//, '')}/${slug}`}
                   </p>
                   <ExternalLink size={20} className="text-amber-400 shrink-0" />
                </div>
                {/* Decorative paper plane */}
                <div className="absolute -top-10 right-1/4 opacity-10 rotate-12">
                   <Plane size={60} />
                </div>
             </div>
          </div>

          {/* Decorative Footer Action Section */}
          <div className="mt-32 relative pb-20 overflow-visible">
             {/* Background Travel Illustrations */}
             <div className="absolute inset-x-0 bottom-0 pointer-events-none z-0">
                <div className="relative w-full h-56 flex items-end justify-between px-4 opacity-80">
                   {/* Left side accessory (Suitcase/Bag) */}
                   <div className="relative w-40 h-40 -ml-8 mb-4">
                      <div className="absolute bottom-0 left-0 w-32 h-44 bg-sky-200 rounded-t-3xl rounded-b-lg border-4 border-white shadow-2xl skew-x-[-1deg]">
                         <div className="absolute top-4 inset-x-4 h-1 bg-white opacity-40" />
                         <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-6 border-4 border-slate-300 rounded-t-xl" />
                      </div>
                      <div className="absolute bottom-4 left-24 text-4xl -rotate-12">🧭</div>
                   </div>

                   {/* Right side accessory (Suitcase/Glasses) */}
                   <div className="relative w-40 h-40 -mr-8 mb-4 flex flex-col items-end">
                      <div className="absolute bottom-0 right-0 w-36 h-36 bg-blue-100 rounded-2xl border-4 border-white shadow-2xl rotate-3">
                         <div className="absolute top-6 inset-x-4 flex gap-2">
                            <div className="w-full h-1 bg-slate-200 rounded-full" />
                            <div className="w-full h-1 bg-slate-200 rounded-full" />
                         </div>
                      </div>
                      <div className="absolute bottom-12 right-24 text-3xl rotate-12">🕶️</div>
                      <div className="absolute bottom-0 right-32 text-4xl">🗺️</div>
                   </div>
                </div>
                
                {/* Palm and leaf decorations */}
                <div className="absolute -left-10 bottom-0 text-6xl opacity-20 rotate-12">🌿</div>
                <div className="absolute -right-10 bottom-10 text-6xl opacity-20 -rotate-12">🌴</div>
             </div>

             <div className="relative z-10 flex flex-col items-center">
                <button 
                  onClick={onDownloadVCard}
                  className="h-16 px-16 rounded-2xl bg-amber-400 text-[#2b4266] font-black text-lg shadow-[0_15px_30px_rgba(251,191,36,0.3)] hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-3"
                >
                  <UserPlus size={22} strokeWidth={3} />
                  Add to Contact
                </button>
             </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-10 bg-[#2b4266] text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] text-center">
           Designed with passion for travelers
        </footer>
      </div>

       <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% { transform: translateY(0px) rotate(210deg); }
          50% { transform: translateY(-12px) rotate(215deg); }
          100% { transform: translateY(0px) rotate(210deg); }
        }
        .animate-plane-follow {
          animation: float 5s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        section {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}} />
    </div>
  );
}
