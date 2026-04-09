"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import {
     Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter,
     MessageCircle, ChevronDown, LayoutGrid, User, Sparkles, Globe, Palmtree,
     Plane, Cake, Camera, Maximize2, Sun, Calendar, Ticket, Wallet, Luggage, Briefcase, GlassWater, LifeBuoy, Umbrella, Upload, ArrowRight, Clock, Star, Cpu, Zap, Activity, BarChart3, TrendingUp
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

export function Temp27VCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
     const [qrCode, setQrCode] = useState<string>("");

     useEffect(() => {
          const url = `${baseUrl}/${slug}`;
          generateQrDataUrl(url).then(setQrCode);
     }, [baseUrl, slug]);

     const name = card.title || "Sarah Chen";
     const role = card.occupation || card.tagline || "Founding Partner @ Core Capital";
     const company = "Core Venture Capital Group";

     return (
          <div className="min-h-screen bg-[#020617] text-slate-200 font-sans flex justify-center py-0 px-0 sm:py-12 overflow-x-hidden relative">

               <div className="w-full max-w-[580px] bg-[#020617] relative flex flex-col shadow-[0_0_120px_rgba(0,0,0,0.5)] overflow-hidden sm:rounded-[60px] border border-white/5">

                    {/* Subtle Background Glows */}
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#A3A375]/10 blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#0F172A]/20 blur-[120px] pointer-events-none" />

                    {/* TRAVEL HERO SECTION (Image 1 style) */}
                    <section className="relative w-full">
                         <div className="relative h-[250px] w-full overflow-hidden">
                              <Image src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop" alt="Cover" fill className="object-cover" unoptimized={true} />
                              <div className="absolute top-6 right-6 z-20">
                                   <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
                                        <span className="text-white text-[10px] font-black tracking-widest uppercase">EN</span>
                                        <ChevronDown size={14} className="text-white/40" />
                                   </div>
                              </div>
                         </div>
                         <div className="px-5 -mt-16 relative z-10">
                              <div className="bg-white/95 backdrop-blur-xl rounded-[40px] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] border border-white/20 relative group min-h-[160px] ring-1 ring-black/5">
                                   <div className="relative w-36 h-36 shrink-0 bg-[#0A0A0A] rounded-[32px] overflow-hidden flex items-center justify-center border-[6px] border-white shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                                        {card.image ? (
                                             <Image src={card.image} alt={name} fill className="object-cover opacity-95 group-hover:scale-110 transition-transform duration-1000" unoptimized={true} />
                                        ) : (
                                             <div className="text-5xl font-black text-white">{name.charAt(0)}</div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                        <div className="absolute top-2 right-2 opacity-30">
                                             <Palmtree size={24} className="text-amber-400 rotate-12" />
                                        </div>
                                   </div>
                                   <div className="flex-1 text-center sm:text-left pt-3">
                                        <h1 className="text-[34px] font-serif italic text-[#0F172A] tracking-tight leading-tight mb-2 drop-shadow-sm">{name}</h1>
                                        <div className="mb-3">
                                             <span className="text-[#92400E] font-black text-[12px] uppercase tracking-[0.25em] border-b-2 border-amber-200/50 pb-1 inline-block">
                                                  {role}
                                             </span>
                                        </div>
                                        <p className="text-slate-500 font-medium text-[14px] leading-relaxed max-w-[300px] opacity-80">
                                             {card.description || "Every Journey Begins With A Single Step - Let's Go!"}
                                        </p>
                                   </div>
                                   <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex">
                                        <button className="w-16 h-16 bg-[#0F172A] text-white rounded-2xl flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:bg-slate-800 transition-all hover:scale-110 active:scale-95 group/grid ring-1 ring-white/10">
                                             <LayoutGrid size={28} className="group-hover/grid:rotate-90 transition-transform duration-700" />
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </section>



                    {/* ABOUT & CONTACT SECTION (Image 2 style) */}
                    {(!card.manageSection || card.manageSection.about || card.manageSection.contact) && (
                    <section className="px-8 pb-20 bg-white relative overflow-hidden">
                         {/* Decorative Map Icon (Top Left) */}
                         <div className="absolute top-10 left-6 opacity-30 pointer-events-none">
                              <MapPin size={40} className="text-[#A3A375]" />
                         </div>

                         {/* Description Text */}
                         {(!card.manageSection || card.manageSection.about) && (
                         <div className="pt-20 pb-16 text-center text-slate-700 max-w-[480px] mx-auto">
                              <p className="text-[19px] leading-relaxed font-serif italic text-slate-600">
                                   At <span className="font-extrabold text-[#0F172A] not-italic tracking-tighter">{card.title || "Desi Miles"}</span>, we specialize in crafting unforgettable travel experiences tailored to your dreams. Whether you're seeking a relaxing beach escape, an adventurous mountain trek, or a cultural city tour, our team is here to make every journey seamless.
                              </p>
                         </div>
                         )}

                         {/* Social Media Icons (Tan rounded squares) */}
                         <VCardSocialLinks 
                            card={card} 
                            layout="horizontal" 
                            variant="circular" 
                            iconSize={24}
                            itemClassName="bg-[#A3A375] rounded-[24px] shadow-xl ring-4 ring-white hover:bg-[#0F172A] hover:scale-110 transition-all duration-500"
                            containerClassName="flex justify-center gap-4 mb-20 flex-wrap relative z-10"
                         />

                         {/* Decorative Plane Icon (Floating Right) */}
                         <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none transform rotate-12 scale-150">
                              <Plane size={150} className="text-[#A3A375]" />
                         </div>

                         {/* Contact Grid Section */}
                         {(!card.manageSection || card.manageSection.contact) && (
                         <div className="relative text-center mb-24 pt-10">
                              <h2 className="text-[36px] font-serif italic text-[#0F172A] inline-block relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-[#A3A375] after:rounded-full mb-16 px-4">
                                   Contact Us
                              </h2>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14 max-w-[520px] mx-auto px-4">
                                   <ContactTile icon={Mail} value={card.email || "adventur@gmail.com"} />
                                   <ContactTile icon={Mail} value="exploration@gmail.com" />
                                   <ContactTile icon={Phone} value={card.phone || "+918527419630"} />
                                   <ContactTile icon={Phone} value="+919638527410" />
                                   <ContactTile icon={Cake} value={card.birthDate || "12th June, 1990"} />
                                   <ContactTile icon={MapPin} value={card.address || "India, Mumbai"} />
                              </div>
                         </div>
                         )}

                         {/* Decorative Camera Icon (Bottom Left) */}
                         <div className="absolute bottom-6 left-6 opacity-30 pointer-events-none">
                              <Camera size={48} className="text-[#0F172A]" />
                         </div>

                         {/* Save Contact Button (Keep functionality but style it) */}
                         <div className="flex justify-center pb-10">
                              <button
                                   onClick={onDownloadVCard}
                                   className="bg-[#0F172A] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#A3A375] transition-all flex items-center gap-3 shadow-xl"
                              >
                                   <User size={18} /> Save Node Data
                              </button>
                         </div>
                    </section>
                    )}

                    {/* GALLERY SECTION */}
                    {(!card.manageSection || card.manageSection.galleries) && (
                    <section className="px-8 pb-20 bg-white relative overflow-hidden">
                         <div className="absolute top-4 left-6 opacity-20 pointer-events-none">
                              <Camera size={60} className="text-[#A3A375]" />
                         </div>

                         <div className="relative text-center mb-12 pt-10">
                              <h2 className="text-[36px] font-serif italic text-[#0F172A] inline-block relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-[#A3A375] after:rounded-full mb-12 px-4">
                                   Gallery
                              </h2>
                         </div>

                         <div className="relative w-full aspect-[16/10] rounded-[48px] overflow-hidden border-[8px] border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] group cursor-pointer transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(163,163,117,0.3)]">
                              <Image
                                   src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
                                   alt="Gallery"
                                   fill
                                   className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                   unoptimized={true}
                              />
                              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
                              <div className="absolute top-6 right-6 w-14 h-14 bg-white/30 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white cursor-pointer hover:bg-white/50 transition-all shadow-xl scale-0 group-hover:scale-100 duration-500 ring-1 ring-white/20">
                                   <Maximize2 size={24} />
                              </div>
                         </div>
                    </section>
                    )}

                    {/* OUR SERVICES SECTION (Expanded 2x2 Grid) */}
                    {(!card.manageSection || card.manageSection.services) && (
                    <section className="px-8 pb-32 bg-white relative overflow-hidden">
                         <div className="relative text-center mb-16 pt-10">
                              <h2 className="text-[32px] font-black text-[#0F172A] inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1.5 after:bg-[#A3A375] after:rounded-full mb-8">
                                   Our Services
                              </h2>

                              {/* Island Decoration */}
                              <div className="absolute -right-4 top-0 opacity-40 pointer-events-none scale-x-[-1] flex flex-col items-center">
                                   <Sun size={24} className="text-[#A3A375] mb-1" />
                                   <Palmtree size={60} className="text-[#A3A375]" />
                                   <div className="w-20 h-4 bg-[#A3A375]/20 rounded-full blur-md" />
                              </div>
                         </div>

                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                              <ServiceCard
                                   image="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=600&auto=format&fit=crop"
                                   title="Flight Booking"
                                   description="Domestic and international flight reservations with competitive fares and flexible options."
                              />
                              <ServiceCard
                                   image="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=600&auto=format&fit=crop"
                                   title="Hotel Reservations"
                                   description="Bookings at a wide range of hotels — from budget stays to luxury resorts — with exclusive deals."
                              />
                              <ServiceCard
                                   image="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop"
                                   title="Airport Transfers"
                                   description="Reliable pickup and drop services between the airport and your destination for a smooth journey."
                              />
                              <ServiceCard
                                   image="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=600&auto=format&fit=crop"
                                   title="Tour Packages"
                                   description="Curated travel itineraries including sightseeing, accommodation, and activities for a complete experience."
                              />
                         </div>
                    </section>
                    )}

                    {/* MAKE AN APPOINTMENT SECTION */}
                    {(!card.manageSection || card.manageSection.appointments) && (
                    <section className="px-8 pb-20 bg-white relative overflow-hidden">
                         <div className="absolute top-4 left-6 opacity-20 pointer-events-none -rotate-12">
                              <Ticket size={60} className="text-[#A3A375]" />
                         </div>

                         <div className="relative text-center mb-10 pt-10">
                              <h2 className="text-[32px] font-black text-[#0F172A] inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1.5 after:bg-[#A3A375] after:rounded-full mb-8">
                                   Make an Appointment
                              </h2>
                         </div>

                         <div className="max-w-[500px] mx-auto relative group">
                              <input
                                   type="text"
                                   placeholder="Pick a Date"
                                   className="w-full h-16 bg-[#F5F5F0] border border-[#E5E5E0] rounded-2xl px-6 text-[#0F172A] font-bold text-lg focus:outline-none focus:border-[#A3A375] transition-all"
                                   onFocus={(e) => (e.target.type = "date")}
                              />
                              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-[#A3A375] transition-colors pointer-events-none">
                                   <Calendar size={20} />
                              </div>
                         </div>
                    </section>
                    )}

                    {/* PRODUCTS SECTION */}
                    {(!card.manageSection || card.manageSection.products) && (
                    <>
                    <section className="px-8 pb-32 bg-white relative overflow-hidden">
                         <div className="relative text-center mb-16 pt-10">
                              <h2 className="text-[32px] font-black text-[#0F172A] inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1.5 after:bg-[#A3A375] after:rounded-full mb-8">
                                   Products
                              </h2>

                              {/* Globe Decoration */}
                              <div className="absolute -right-4 top-0 opacity-40 pointer-events-none">
                                   <Globe size={100} className="text-[#A3A375]" />
                              </div>
                         </div>

                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                              <ProductCard
                                   image="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=600&auto=format&fit=crop"
                                   title="South India Spiritual Trail"
                                   price="₹ 27,000.00"
                              />
                              <ProductCard
                                   image="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop"
                                   title="Europe Delight Tour"
                                   price="₹ 230,000.00"
                              />
                         </div>
                    </section>

                    {/* VIEW MORE PRODUCTS BUTTON */}
                    <div className="flex justify-center pb-20 bg-white">
                         <button className="bg-[#A3A375] text-white px-8 py-4 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg hover:bg-[#8B8B5F] transition-all group">
                              View More Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                         </button>
                    </div>
                    </>
                    )}

                    {/* TESTIMONIALS SECTION */}
                    {(!card.manageSection || card.manageSection.testimonials) && (
                    <section className="px-8 pb-24 bg-white relative overflow-hidden">
                         <div className="absolute top-4 left-6 opacity-20 pointer-events-none -rotate-12">
                              <Wallet size={60} className="text-[#A3A375]" />
                         </div>

                         <div className="relative text-center mb-16 pt-10">
                              <h2 className="text-[32px] font-black text-[#0F172A] inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1.5 after:bg-[#A3A375] after:rounded-full mb-8">
                                   Testimonials
                              </h2>
                         </div>

                         <div className="relative bg-[#F5F5F0] border-2 border-[#E5E5E0] rounded-[40px] p-10 md:p-14 shadow-xl max-w-[500px] mx-auto group overflow-hidden text-center">
                              <div className="absolute top-6 left-8 text-[120px] text-[#A3A375]/10 leading-none select-none font-serif">“</div>
                              <div className="absolute bottom-6 right-8 text-[120px] text-[#A3A375]/10 leading-none select-none font-serif">”</div>

                              <div className="relative z-10 space-y-10">
                                   <p className="text-slate-600 text-center text-[17px] leading-relaxed font-medium">
                                        {card.testimonials?.[0]?.quote || "We wanted a spiritual and peaceful retreat, and the team helped us discover beautiful places in Himachal. It was exactly what we were hoping for."}
                                   </p>

                                   <div className="flex flex-col items-center gap-4">
                                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
                                             {card.testimonials?.[0]?.image ? (
                                                  <Image src={card.testimonials[0].image} alt="Author" fill className="object-cover" unoptimized={true} />
                                             ) : (
                                                  <div className="w-full h-full bg-[#A3A375] flex items-center justify-center text-white text-2xl font-black uppercase">
                                                       {card.testimonials?.[0]?.name?.charAt(0) || "A"}
                                                  </div>
                                             )}
                                        </div>
                                        <p className="text-[#0F172A] font-black text-xl tracking-tight">
                                             {card.testimonials?.[0]?.name || "Anjali Nair"}
                                        </p>
                                   </div>
                              </div>
                         </div>

                         {/* Pagination Dots */}
                         <div className="flex justify-center gap-2 mt-12">
                              <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                              <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                              <div className="h-2.5 w-8 rounded-full bg-[#0F172A]" />
                         </div>
                    </section>
                    )}

                    {/* BLOG SECTION */}
                    {(!card.manageSection || card.manageSection.blogs) && (
                    <section className="px-8 pb-40 bg-white relative overflow-hidden">
                         <div className="relative text-center mb-16 pt-10">
                              <h2 className="text-[32px] font-black text-[#0F172A] inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1.5 after:bg-[#A3A375] after:rounded-full mb-8">
                                   Blog
                              </h2>
                         </div>

                         {/* Suitcase Decoration (Top Right) */}
                         <div className="absolute top-10 right-10 opacity-40 pointer-events-none rotate-12 scale-125">
                              <Luggage size={80} className="text-[#A3A375]" />
                         </div>

                         {/* Blog Card */}
                         <div className="max-w-[500px] mx-auto rounded-[40px] overflow-hidden shadow-2xl border-2 border-white group bg-[#0F172A] flex flex-col hover:shadow-cyan-500/10 transition-all relative">
                              <div className="relative aspect-[16/10] w-full overflow-hidden">
                                   <Image
                                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=800&auto=format&fit=crop"
                                        alt="Blog"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                        unoptimized={true}
                                   />
                                   {/* Holographic Text (Overlay) */}
                                   <div className="absolute top-1/2 left-1/4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-start pointer-events-none">
                                        <span className="text-white font-serif italic text-3xl drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">travel sale</span>
                                        <div className="flex gap-3 mt-1">
                                             <Plane className="text-white/60" size={16} />
                                             <Sparkles className="text-white/60 animate-pulse" size={16} />
                                        </div>
                                   </div>
                              </div>
                              <div className="p-8 space-y-4">
                                   <h3 className="text-white font-black text-xl leading-snug tracking-tight">
                                        How We Create Personalized Travel Experiences for Every Client
                                   </h3>
                                   <p className="text-slate-400 text-xs leading-relaxed font-bold">
                                        Showcase your agency's services, from custom itineraries and private guides to 24/7 concierge assistance, making your expertise clear.
                                   </p>
                                   <div className="flex justify-end pt-4">
                                        <button className="text-[#A3A375] font-black text-sm flex items-center gap-2 hover:text-white transition-colors">
                                             Read More <ArrowRight size={16} />
                                        </button>
                                   </div>
                              </div>
                         </div>

                         {/* Pagination Dots */}
                         <div className="flex justify-center gap-2 mt-12">
                              <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                              <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                              <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                              <div className="h-2.5 w-8 rounded-full bg-[#0F172A]" />
                         </div>
                    </section>
                    )}

                    {/* BUSINESS HOURS SECTION */}
                    {(!card.manageSection || card.manageSection.businessHours) && (
                    <section className="px-8 pb-40 bg-white relative overflow-hidden text-center">
                         <div className="absolute top-4 left-6 opacity-20 pointer-events-none -rotate-12">
                              <GlassWater size={60} className="text-[#A3A375]" />
                         </div>

                         <div className="relative text-center mb-16 pt-10">
                              <h2 className="text-[32px] font-black text-[#0F172A] inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1.5 after:bg-[#A3A375] after:rounded-full mb-12">
                                   Business Hours
                              </h2>
                         </div>

                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[540px] mx-auto z-10 relative text-left">
                              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                                   <div key={day} className="bg-[#F5F5F0] rounded-2xl p-4 flex items-center gap-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 rounded-full bg-[#A3A375]/20 flex items-center justify-center text-[#A3A375] shrink-0 border-2 border-[#A3A375]/30">
                                             <Clock size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                             <span className="text-slate-500 font-bold text-xs uppercase tracking-wider leading-none mb-1">{day}:</span>
                                             <span className="text-[#0F172A] font-black text-[15px]">09:00 AM - 08:00 PM</span>
                                        </div>
                                   </div>
                              ))}
                              {/* Sunday Centered */}
                              <div className="sm:col-span-2 flex justify-center mt-2">
                                   <div className="bg-[#F5F5F0] rounded-2xl p-4 flex items-center gap-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow w-full sm:w-[70%]">
                                        <div className="w-12 h-12 rounded-full bg-[#A3A375]/20 flex items-center justify-center text-[#A3A375] shrink-0 border-2 border-[#A3A375]/30">
                                             <Clock size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                             <span className="text-slate-500 font-bold text-xs uppercase tracking-wider leading-none mb-1">Sunday:</span>
                                             <span className="text-[#0F172A] font-black text-[15px]">09:00 AM - 08:00 PM</span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    )}

                    {/* QR CODE SECTION */}
                    {(!card.manageSection || card.manageSection.qrCode) && (
                    <section className="px-8 pb-32 bg-white relative overflow-hidden">
                         <div className="relative text-center mb-16 pt-10">
                              <h2 className="text-[32px] font-black text-[#0F172A] inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1.5 after:bg-[#A3A375] after:rounded-full mb-12">
                                   QR Code
                              </h2>
                              <div className="absolute top-0 right-4 opacity-30 pointer-events-none">
                                   <Umbrella size={48} className="text-[#A3A375]" />
                              </div>
                         </div>

                         <div className="bg-[#0F172A] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-2xl max-w-[500px] mx-auto group border-2 border-white/5 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-tr from-[#A3A375]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                              <div className="relative w-44 h-44 bg-white rounded-3xl p-4 shadow-xl shrink-0 group-hover:scale-105 transition-transform duration-500">
                                   {qrCode && <Image src={qrCode} alt="QR Code" fill className="p-4" unoptimized={true} />}
                              </div>

                              <div className="text-center md:text-left space-y-4 relative z-10">
                                   <h3 className="text-white font-black text-2xl tracking-tight uppercase">Scan to Contact</h3>
                                   <p className="text-slate-400 text-sm leading-relaxed font-bold">
                                        Point your phone's camera at the QR code to quickly add our contact information. You can also use the "Add to Contacts" button for fast saving.
                                   </p>
                              </div>
                         </div>
                    </section>
                    )}

                    {/* CONTACT US SECTION (Refined) */}
                    {(!card.manageSection || card.manageSection.inquiries) && (
                    <section className="px-8 pb-40 bg-white relative overflow-hidden text-center">
                         <div className="relative mb-16 pt-10">
                              <h2 className="text-[32px] font-black text-[#0F172A] inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1.5 after:bg-[#A3A375] after:rounded-full mb-12">
                                   Inquiry
                              </h2>
                         </div>

                         {/* Lifebuoy Decoration */}
                         <div className="absolute top-20 left-6 opacity-30 pointer-events-none">
                              <LifeBuoy size={60} className="text-[#A3A375]" />
                         </div>

                         <div className="max-w-[500px] mx-auto bg-[#F5F5F0] border-2 border-slate-50 rounded-[40px] p-8 md:p-10 shadow-xl relative z-10 flex flex-col gap-5">
                              <input type="text" placeholder="Your Name" className="bg-white rounded-2xl p-5 h-14 font-bold border border-slate-200 outline-none focus:border-[#A3A375] transition-all text-sm" />
                              <input type="text" placeholder="Enter Phone Number" className="bg-white rounded-2xl p-5 h-14 font-bold border border-slate-200 outline-none focus:border-[#A3A375] transition-all text-sm" />
                              <input type="email" placeholder="Email Address" className="bg-white rounded-2xl p-5 h-14 font-bold border border-slate-200 outline-none focus:border-[#A3A375] transition-all text-sm" />
                              <textarea placeholder="Type a message here..." className="bg-white rounded-2xl p-5 h-32 font-bold border border-slate-200 outline-none focus:border-[#A3A375] transition-all text-sm resize-none"></textarea>

                              {/* File Upload Mockup */}
                              <div className="bg-white rounded-2xl p-5 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-50 transition-colors group">
                                   <Upload size={20} className="text-slate-400 group-hover:text-[#A3A375] transition-colors" />
                                   <span className="text-slate-500 font-black text-sm uppercase tracking-tighter">Choose File to upload</span>
                              </div>
                              <p className="text-left text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2 font-mono">Files Supported: JPG, PNG, JPEG</p>

                              <button className="bg-[#A3A375] text-white h-15 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:bg-[#8B8B5F] transition-all flex items-center justify-center gap-3 mt-4 py-5 px-10">
                                   Send Message
                              </button>
                         </div>
                    </section>
                    )}

                    {/* FOOTER INTERFACE */}
                    <footer className="py-24 text-center space-y-16 bg-[#0F172A] text-white relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
                         <VCardSocialLinks 
                            card={card} 
                            layout="horizontal" 
                            variant="circular" 
                            iconSize={24}
                            itemClassName="text-white/30 hover:text-[#A3A375] hover:scale-125 transition-all duration-500"
                            containerClassName="flex justify-center gap-12 relative z-10"
                         />
                         <div className="pt-12 border-t border-white/5 relative z-10 px-10">
                              <p className="text-[11px] font-black uppercase tracking-[0.8em] text-[#A3A375]/60 mb-3">Transmission Origin</p>
                              <p className="text-[14px] font-serif italic text-white/90 mb-6">{card.title || "Desi Miles"} International</p>
                              <div className="h-px w-20 bg-[#A3A375]/30 mx-auto mb-6" />
                              <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.4em]">Encrypted Identity Node © 2026 • Premium Series</p>
                         </div>
                    </footer>

               </div>

               {/* FONTS INFO */}
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
               <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600;1,700&family=Space+Grotesk:wght@300;400;500;700&display=swap" rel="stylesheet" />
               <style jsx global>{`
        body { font-family: 'Space Grotesk', sans-serif; scroll-behavior: smooth; }
        .font-serif { font-family: 'Cormorant Garamond', serif; }
      `}</style>
          </div>
     );
}

function ProductCard({ image, title, price }: { image: string, title: string, price: string }) {
     return (
          <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white group relative bg-[#0F172A] flex flex-col h-full ring-1 ring-white/10 transition-all duration-700 hover:translate-y-[-8px] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]">
               <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                         src={image}
                         alt={title}
                         fill
                         className="object-cover group-hover:scale-110 transition-transform duration-1000"
                         unoptimized={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               </div>
               <div className="p-8 text-center flex-1 flex flex-col justify-between relative z-10">
                    <h3 className="text-white font-black text-xl tracking-tight mb-6 group-hover:text-[#A3A375] transition-colors">{title}</h3>
                    <p className="text-[#A3A375] text-[24px] font-serif italic tracking-widest">{price}</p>
               </div>
          </div>
     );
}

function ServiceCard({ image, title, description }: { image: string, title: string, description: string }) {
     return (
          <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white group relative bg-[#0F172A] flex flex-col h-full transition-all duration-700 hover:translate-y-[-8px] ring-1 ring-white/10 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]">
               <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                         src={image}
                         alt={title}
                         fill
                         className="object-cover group-hover:scale-110 transition-transform duration-1000"
                         unoptimized={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               </div>
               <div className="p-8 text-center flex-1 flex flex-col justify-center relative z-10">
                    <h3 className="text-white font-serif italic text-2xl mb-3 tracking-tight group-hover:text-[#A3A375] transition-colors">{title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-bold opacity-80">{description}</p>
               </div>
          </div>
     );
}

function ContactTile({ icon: Icon, value }: { icon: any, value: string }) {
     return (
          <div className="relative pt-8 group cursor-default">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#0F172A] rounded-2xl flex items-center justify-center border-[6px] border-white z-10 shadow-xl transition-all duration-500 group-hover:bg-[#A3A375] group-hover:scale-110">
                    <Icon size={24} className="text-white" />
               </div>
               <div className="bg-white text-[#0F172A] pt-12 pb-8 px-6 rounded-[40px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] text-center transition-all duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] ring-1 ring-black/5 group-hover:translate-y-[-4px]">
                    <p className="text-[16px] font-bold tracking-tight truncate">{value}</p>
               </div>
          </div>
     );
}

function StatCard({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) {
     return (
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl hover:border-slate-600 transition-all group">
               <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center bg-slate-800 group-hover:scale-110 transition-transform" style={{ color }}>
                    <Icon size={20} />
               </div>
               <p className="text-3xl font-black text-white mb-1 tracking-tighter">{value}</p>
               <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
          </div>
     );
}

function TechDetail({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
     return (
          <div className="flex items-center gap-6 p-5 rounded-3xl bg-slate-900/30 border border-slate-900/50 hover:bg-slate-900/60 transition-all group">
               <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all">
                    <Icon size={20} strokeWidth={2.5} />
               </div>
               <div className="space-y-0.5">
                    <label className="text-[9px] font-black text-slate-600 uppercase tracking-widest leading-none block">{label}</label>
                    <p className="text-sm font-bold text-slate-300 tracking-tight lowercase">{value}</p>
               </div>
          </div>
     );
}
