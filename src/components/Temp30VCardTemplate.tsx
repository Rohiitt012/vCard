"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { 
     Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, 
     MessageCircle, ChevronDown, LayoutGrid, User, Sparkles, Globe, 
     ArrowRight, Clock, Star, Scale, ShieldCheck, Briefcase, Gavel, FileText,
     Activity, HeartPulse, Stethoscope, Microscope, Dna, Pill, Syringe, Plus, ArrowLeft, Play, Share2, Quote, Cake, FlaskConical, Heart, Thermometer
} from "lucide-react";
import { generateQrDataUrl } from "@/lib/qr";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";
import { getSocialIcon } from "@/lib/social-icons";

type Props = {
     card: VCardItem;
     slug: string;
     baseUrl: string;
     onDownloadVCard?: () => void;
};

export function Temp30VCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
     const [qrCode, setQrCode] = useState<string>("");

     useEffect(() => {
          const url = `${baseUrl}/${slug}`;
          generateQrDataUrl(url).then(setQrCode);
     }, [baseUrl, slug]);

     const name = card.title || "Dr. Rishi Verma";
     const role = card.occupation || card.tagline || "Neurosurgical Specialist";
     const company = card.company || "CITY GENERAL HOSPITAL";

     return (
          <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex justify-center py-0 px-0 overflow-x-hidden relative selection:bg-[#38b2ac] selection:text-white">

               {/* ELITE MEDICAL WATERMARK */}
               <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-[0.04] flex items-center justify-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[#38b2ac]/10 rounded-full blur-[200px]" />
                    <div className="relative w-full h-full opacity-30 mix-blend-multiply">
                         <Image
                              src="https://images.unsplash.com/photo-1576091160550-217359f42f8c?q=80&w=2000"
                              alt="Medical"
                              fill
                              className="object-cover grayscale brightness-110"
                              unoptimized={true}
                         />
                    </div>
               </div>

               <div className="w-full max-w-[740px] bg-white sm:rounded-[60px] relative flex flex-col shadow-[0_100px_200px_-50px_rgba(15,23,42,0.15)] overflow-hidden border border-white/50 ring-1 ring-slate-100 shadow-3xl">

                    {/* ELITE HERO IMAGE & LANGUAGE SELECTOR */}
                    {(!card.manageSection || card.manageSection.header) && (
                    <section className="relative h-[380px] w-full overflow-hidden group">
                         <Image
                              src="https://images.unsplash.com/photo-1559839734-2b71f1e3c770?q=80&w=1200"
                              alt="Surgical Equipment"
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-[6s] ease-out brightness-[0.85]"
                              unoptimized={true}
                         />
                         <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white" />

                         {/* Language Selector */}
                         <div className="absolute top-8 right-8 z-20">
                              <div className="bg-[#38b2ac] text-white px-5 py-2.5 rounded-xl font-black text-xs flex items-center gap-3 shadow-2xl hover:bg-[#2c8d88] transition-all cursor-pointer ring-4 ring-white/10 uppercase tracking-widest leading-none pt-[2.5px]">
                                   EN <ChevronDown size={14} strokeWidth={3} />
                              </div>
                         </div>
                    </section>
                    )}

                    {/* CENTERED PROFILE HUB - IMAGE 2 REDESIGN */}
                    {(!card.manageSection || card.manageSection.header) && (
                    <section className="relative px-12 -mt-28 mb-24 z-10 text-center space-y-16">
                         {/* Profile Image Node */}
                         <div className="relative group mx-auto w-fit">
                              <div className="absolute inset-0 bg-[#38b2ac]/10 rounded-full blur-3xl scale-125 group-hover:scale-150 transition-transform duration-1000" />
                              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border-[12px] border-white overflow-hidden shadow-[0_40px_80px_-20px_rgba(15,23,42,0.25)] ring-1 ring-slate-100">
                                   {card.image ? (
                                        <Image src={card.image} alt={name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized={true} />
                                   ) : (
                                        <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white text-6xl font-serif">{name.charAt(0)}</div>
                                   )}
                              </div>
                              {/* Floating Identity Badge */}
                              <div className="absolute top-6 -right-4 bg-white/90 backdrop-blur-3xl p-3.5 rounded-2xl shadow-2xl border border-white flex items-center justify-center ring-1 ring-slate-100/50 group-hover:scale-110 transition-transform duration-500">
                                   <LayoutGrid size={24} className="text-[#38b2ac]" strokeWidth={2.5} />
                              </div>
                         </div>

                         <div className="space-y-10">
                              <div className="space-y-4">
                                   <h1 className="text-5xl sm:text-6xl font-serif font-black tracking-tight text-slate-950 uppercase leading-none">{name}</h1>
                                   <div className="h-[1.5px] w-48 bg-slate-200 mx-auto rounded-full" />
                              </div>

                              {/* Verified Role Pill - Image 2 Style */}
                              <div className="inline-flex flex-col items-center gap-6">
                                   <div className="bg-[#38b2ac]/5 backdrop-blur-3xl border border-[#38b2ac]/10 px-8 py-3.5 rounded-full flex items-center gap-4 shadow-sm group hover:border-[#38b2ac]/30 transition-all cursor-default">
                                        <ShieldCheck size={20} className="text-[#38b2ac]" strokeWidth={3} />
                                        <span className="text-[#38b2ac] font-black text-xs uppercase tracking-[0.25em] pt-[1.5px] leading-none whitespace-nowrap">
                                             {role}
                                        </span>
                                   </div>
                                   <p className="text-[#38b2ac] font-black text-[10px] uppercase tracking-[0.6em] leading-none opacity-60">{company}</p>
                              </div>
                         </div>
                    </section>
                    )}

                    {/* CLINICAL SUMMARY SECTION */}
                    {(!card.manageSection || card.manageSection.header) && (
                    <section className="px-12 pb-32 text-center">
                         <p className="text-slate-500 font-medium text-lg leading-[1.9] max-w-[480px] mx-auto italic opacity-90">
                              {card.description || `A highly specialized medical professional who diagnoses and performs surgical treatment of disorders affecting the brain, spinal cord, and peripheral nerves.`}
                         </p>
                    </section>
                    )}

                    {/* PRIMARY ACTIONS - ELITE CLINICAL */}
                    {(!card.manageSection || card.manageSection.header) && (
                    <section className="px-12 pb-32">
                         <div className="flex flex-col gap-6">
                              <button
                                   onClick={onDownloadVCard}
                                   className="h-24 bg-slate-900 text-white rounded-[32px] font-black text-xl flex items-center justify-center gap-5 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.4)] hover:shadow-[#38b2ac]/30 transition-all group active:scale-95 border-b-[6px] border-slate-950 pt-1"
                              >
                                   <User size={28} strokeWidth={3} className="group-hover:rotate-12 transition-transform duration-500" />
                                   SAVE MEDICAL DATA
                              </button>
                              <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.8em]">Encrypted Clinical Identity Node</p>
                         </div>
                    </section>
                    )}

                    {/* MEDICAL CAPABILITIES GRID */}
                    {(!card.manageSection || card.manageSection.header) && (
                    <section className="px-12 pb-40">
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                              <ClinicalStatItem icon={Activity} label="Surgical Rate" value="98.4%" />
                              <ClinicalStatItem icon={HeartPulse} label="Care Quality" value="Global" />
                              <ClinicalStatItem icon={Microscope} label="Research" value="Elite V2" />
                              <ClinicalStatItem icon={Dna} label="Genomics" value="Active" />
                         </div>
                    </section>
                    )}

                    {/* ELITE CONTACT HUB */}
                    {(!card.manageSection || card.manageSection.contact) && (
                    <section className="px-12 pb-40 relative">
                         {/* Floating Stethoscope Decoration */}
                         <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none scale-150 -translate-x-12">
                              <Stethoscope size={180} strokeWidth={1.5} className="text-[#38b2ac] animate-pulse" />
                         </div>

                         <div className="relative z-10 space-y-20">
                               {/* Social Vertical Stack */}
                               {(!card.manageSection || card.manageSection.contact) && card.socialLinks && card.socialLinks.filter(l => l.url).length > 0 && (
                                    <div className="flex flex-col items-center w-full">
                                         <VCardSocialLinks 
                                             card={card} 
                                             layout="vertical" 
                                             variant="circular" 
                                             iconSize={20}
                                             itemClassName="bg-[#38b2ac]/5 border border-[#38b2ac]/10 rounded-2xl p-4 w-full max-w-[400px] hover:bg-[#38b2ac]/10 transition-all shadow-sm"
                                         />
                                    </div>
                               )}

                              <div className="text-center space-y-4">
                                   <h2 className="text-5xl font-serif font-black text-slate-900 tracking-tight">Contact</h2>
                                   <div className="w-12 h-1.5 bg-[#38b2ac] mx-auto rounded-full" />
                              </div>

                              <div className="grid grid-cols-1 gap-8">
                                   <MedicalContactCard icon={Mail} label="Registry Portal" value={card.email || "info@cityhospital.in"} />
                                   <MedicalContactCard icon={Mail} label="Alternate Inquiries" value="contact@cityhospital.org" />
                                   <MedicalContactCard icon={Phone} label="Emergency Line" value={card.phone || "+91 9810245678"} />
                                   <MedicalContactCard icon={Phone} label="General OPD" value="+91 9899011223" />
                                   <MedicalContactCard icon={Cake} label="Physician Credential" value="12th June, 1985" />
                                   <MedicalContactCard icon={MapPin} label="Medical District" value={card.address || "New Delhi, India"} />
                              </div>
                         </div>
                    </section>
                    )}

                    {/* CLINICAL ENDPOINTS - SIMPLIFIED */}
                    {(!card.manageSection || card.manageSection.contact) && (
                    <section className="px-12 pb-40 space-y-6">
                         <ClinicalDetail icon={Globe} label="Registry Portal" value={card.website || "www.cityhospital.med/rishi"} />
                    </section>
                    )}

                    {/* ELITE QR CREDENTIAL */}
                    {(!card.manageSection || card.manageSection.qrCode) && (
                    <section className="px-12 pb-40 relative group">
                         {/* Medicine Bottle Decoration */}
                         <div className="absolute -top-12 right-4 opacity-[0.15] scale-150 pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
                              <Pill size={120} strokeWidth={1.5} className="text-[#38b2ac]" />
                         </div>

                         <div className="text-center space-y-4 mb-20">
                              <h2 className="text-5xl font-serif font-black text-slate-900 tracking-tight">QR Code</h2>
                              <div className="w-12 h-1.5 bg-[#38b2ac] mx-auto rounded-full" />
                         </div>

                         <div className="bg-[#f0f9f9] border border-[#38b2ac]/10 rounded-[48px] p-10 flex flex-col sm:flex-row items-center gap-12 shadow-sm hover:shadow-2xl hover:shadow-[#38b2ac]/5 transition-all">
                              <div className="relative w-48 h-48 bg-white p-4 rounded-[32px] shadow-xl border-4 border-white ring-1 ring-[#38b2ac]/20 group-hover:rotate-1 transition-transform">
                                   {qrCode && <Image src={qrCode} alt="QR" fill className="p-4" unoptimized={true} />}
                              </div>
                              <div className="flex-1 text-center sm:text-left space-y-4">
                                   <h3 className="text-3xl font-serif font-black text-slate-900 leading-none">Scan to Contact</h3>
                                   <p className="text-slate-500 font-medium text-base leading-relaxed max-w-[320px]">
                                        Point your phone’s camera at the QR code to quickly add our contact information. You can also use the "Add to Contacts" button below for fast saving.
                                   </p>
                              </div>
                         </div>
                    </section>
                    )}

                    {/* CORE CLINICAL SERVICES */}
                    {(!card.manageSection || card.manageSection.services) && (
                    <section className="px-12 pb-40 relative">
                         {/* Stopwatch Path Decoration */}
                         <div className="absolute left-0 top-0 opacity-[0.1] -translate-x-12 translate-y-12 select-none pointer-events-none">
                              <Clock size={160} strokeWidth={1} className="text-[#38b2ac] -rotate-12" />
                         </div>

                         <div className="text-center space-y-4 mb-24">
                              <h2 className="text-5xl font-serif font-black text-slate-900 tracking-tight text-center">Our Services</h2>
                              <div className="w-12 h-1.5 bg-[#38b2ac] mx-auto rounded-full" />
                         </div>

                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 relative z-10">
                              <ServiceClinicalCard
                                   image="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800"
                                   title="Emergency Services (ER)"
                                   desc="24/7 urgent care for trauma, heart attacks, strokes, and other critical health emergencies."
                                   priority="LEVEL 1"
                                   icon={Stethoscope}
                              />
                              <ServiceClinicalCard
                                   image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800"
                                   title="ICU & Critical Care"
                                   desc="Intensive monitoring and treatment for patients with life-threatening conditions or after major surgeries."
                                   priority="CRITICAL"
                                   icon={Activity}
                              />
                              <ServiceClinicalCard
                                   image="https://images.unsplash.com/photo-1551606713-da4558f19da9?q=80&w=800"
                                   title="Surgical Services"
                                   desc="General and specialized surgeries such as orthopedic, cardiac, neurological, and minimally invasive procedures."
                                   priority="SPECIALIZED"
                                   icon={Microscope}
                              />
                              <ServiceClinicalCard
                                   image="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800"
                                   title="Pharmacy Services"
                                   desc="On-site pharmacy offering prescription medications and medical supplies."
                                   priority="DISPENSARY"
                                   icon={Pill}
                              />
                         </div>
                    </section>
                    )}

                    {/* CINEMATIC MEDICAL FACILITY GALLERY */}
                    {(!card.manageSection || card.manageSection.galleries) && (
                    <section className="px-12 pb-40 relative overflow-hidden">
                         {/* Test Tube Decoration */}
                         <div className="absolute top-0 right-4 opacity-[0.2] -translate-y-8 scale-125 select-none pointer-events-none group">
                              <FlaskConical size={120} strokeWidth={1.5} className="text-[#38b2ac] animate-pulse" />
                         </div>

                         <div className="text-center space-y-4 mb-20">
                              <h2 className="text-5xl font-serif font-black text-slate-900 tracking-tight">Gallery</h2>
                              <div className="w-12 h-1.5 bg-[#38b2ac] mx-auto rounded-full" />
                         </div>

                         <div className="relative group/gallery">
                              {/* Horizontal Gallery Flow */}
                              <div className="flex gap-10 overflow-x-auto pb-12 no-scrollbar px-2 snap-x snap-mandatory">
                                   {[
                                        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200",
                                        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200",
                                        "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200",
                                        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200"
                                   ].map((img, i) => (
                                        <div key={i} className="relative shrink-0 w-[420px] h-80 rounded-[40px] overflow-hidden shadow-2xl snap-center group/item ring-1 ring-slate-100">
                                             <Image src={img} alt="Facility" fill className="object-cover group-hover/item:scale-110 transition-transform duration-[5s] ease-out" unoptimized={true} />
                                             <div className="absolute inset-0 bg-black/5 group-hover/item:bg-transparent transition-colors" />

                                             {/* High-Accuracy Maximize Token */}
                                             <div className="absolute top-6 right-6 w-12 h-12 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center text-[#38b2ac] shadow-2xl opacity-0 group-hover/item:opacity-100 translate-y-2 group-hover/item:translate-y-0 transition-all duration-500 cursor-pointer border border-white">
                                                  <LayoutGrid size={20} strokeWidth={3} />
                                             </div>
                                        </div>
                                   ))}
                              </div>

                              {/* Aesthetic Scroll Indicator */}
                              <div className="flex justify-center gap-3">
                                   {[1, 2, 3].map(i => (
                                        <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === 1 ? "w-12 bg-[#38b2ac]" : "w-1.5 bg-slate-200"}`} />
                                   ))}
                              </div>
                         </div>
                    </section>
                    )}

                    {/* HEALTHCARE PACKAGES HUB */}
                    {(!card.manageSection || card.manageSection.products) && (
                    <section className="px-12 pb-40 relative group/products">
                         {/* Bandage Decoration */}
                         <div className="absolute top-0 left-4 opacity-[0.2] -translate-y-8 -rotate-12 scale-150 select-none pointer-events-none group-hover:rotate-0 transition-transform duration-1000">
                              <Plus size={120} strokeWidth={4} className="text-[#38b2ac] animate-pulse p-4 border-4 border-[#38b2ac] rounded-full" />
                         </div>

                         <div className="text-center space-y-4 mb-20">
                              <h2 className="text-5xl font-serif font-black text-slate-900 tracking-tight">Products</h2>
                              <div className="w-12 h-1.5 bg-[#38b2ac] mx-auto rounded-full" />
                         </div>

                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                              <HealthcareProductCard
                                   image="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800"
                                   title="Comprehensive Master Health Check-up"
                                   price="₹15,000.00"
                                   category="PREMIUM"
                              />
                              <HealthcareProductCard
                                   image="https://images.unsplash.com/photo-1579152276503-34e85741f021?q=80&w=800"
                                   title="Routine Health Check-Up"
                                   price="₹1,560.00"
                                   category="VITAL"
                              />
                         </div>
                    </section>
                    )}

                    {/* CLINICAL TESTIMONIALS CAROUSEL */}
                    {(!card.manageSection || card.manageSection.testimonials) && (
                    <section className="px-12 pb-40 relative group/testimonials">
                         {/* Care-Heart Decoration */}
                         <div className="absolute top-0 right-4 opacity-[0.2] -translate-y-12 scale-150 select-none pointer-events-none group-hover/testimonials:scale-[1.75] transition-transform duration-1000">
                              <div className="relative w-24 h-24 bg-[#38b2ac] rounded-full flex items-center justify-center text-white shadow-xl shadow-[#38b2ac]/20">
                                   <Plus size={32} strokeWidth={4} />
                                   <div className="absolute -top-4 -left-4 w-full h-full text-white/40">
                                        <Heart size={80} fill="currentColor" />
                                   </div>
                              </div>
                         </div>

                         <div className="text-center space-y-4 mb-20">
                              <h2 className="text-5xl font-serif font-black text-slate-900 tracking-tight">Testimonials</h2>
                              <div className="w-12 h-1.5 bg-[#38b2ac] mx-auto rounded-full" />
                         </div>

                         <div className="space-y-12">
                              <div className="bg-white border border-[#38b2ac]/10 p-16 rounded-[48px] shadow-2xl relative overflow-hidden group/card hover:border-[#38b2ac]/20 transition-all ring-1 ring-slate-100">
                                   <div className="absolute top-10 left-10 opacity-[0.08] text-[#38b2ac]">
                                        <Quote size={120} fill="currentColor" />
                                   </div>
                                   <div className="absolute bottom-10 right-10 opacity-[0.08] rotate-180 text-[#38b2ac]">
                                        <Quote size={120} fill="currentColor" />
                                   </div>

                                   <div className="relative z-10 text-center space-y-8 flex flex-col items-center">
                                        <div className="relative w-28 h-28 rounded-full border-[6px] border-[#f0f9f9] overflow-hidden shadow-xl ring-1 ring-[#38b2ac]/10 group-hover/card:scale-110 transition-transform">
                                             <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400" alt="Patient" fill className="object-cover" unoptimized={true} />
                                        </div>
                                        <div className="space-y-1">
                                             <h4 className="text-2xl font-serif font-black text-[#38b2ac] uppercase tracking-wider">Sandeep Mehta</h4>
                                             <div className="h-[1px] w-12 bg-[#38b2ac]/20 mx-auto" />
                                        </div>
                                        <p className="text-slate-500 font-medium text-xl leading-[1.8] max-w-[480px] italic opacity-90 group-hover/card:opacity-100 transition-opacity">
                                             "I came to City Hospital for a routine check-up and ended up receiving a diagnosis that saved my life. The medical team didn’t just treat me; they truly cared about my well-being."
                                        </p>
                                   </div>
                              </div>

                              {/* Aesthetic Pagination Nodes */}
                              <div className="flex justify-center gap-4">
                                   {[1, 2, 3, 4].map(i => (
                                        <div key={i} className={`h-2 rounded-full transition-all duration-500 ${i === 4 ? "w-10 bg-[#38b2ac]" : "w-2 bg-slate-200"}`} />
                                   ))}
                              </div>
                         </div>
                    </section>
                    )}

                    {/* CLINICAL INSIGHTS (BLOG) */}
                    {(!card.manageSection || card.manageSection.blogs) && (
                    <section className="px-12 pb-40 relative group/blog">
                         {/* Digital Thermometer Decoration */}
                         <div className="absolute bottom-0 right-10 opacity-[0.15] scale-150 translate-y-12 select-none pointer-events-none group-hover/blog:translate-x-4 transition-transform duration-1000 rotate-[45deg]">
                              <Thermometer size={140} strokeWidth={1} className="text-[#38b2ac]" />
                         </div>

                         <div className="text-center space-y-4 mb-24">
                              <h2 className="text-5xl font-serif font-black text-slate-900 tracking-tight">Blog</h2>
                              <div className="w-12 h-1.5 bg-[#38b2ac] mx-auto rounded-full" />
                         </div>

                         <div className="space-y-12 relative z-10">
                              {/* Large Feature Article */}
                              <div className="bg-white border border-slate-100 rounded-[48px] overflow-hidden shadow-2xl group/feature flex flex-col ring-1 ring-slate-100">
                                   <div className="relative h-[480px] w-full overflow-hidden">
                                        <Image src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?q=80&w=1200" alt="Smart Hospital" fill className="object-cover group-hover/feature:scale-105 transition-transform duration-[6s]" unoptimized={true} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                                        <div className="absolute top-10 right-10 bg-[#38b2ac] text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl border border-white/20">
                                             Feature Analysis
                                        </div>
                                   </div>
                                   <div className="p-16 bg-[#f0f9f9]/50 space-y-8">
                                        <h3 className="text-4xl font-serif font-black text-slate-900 leading-tight">The Role of Smart Hospitals</h3>
                                        <p className="text-slate-500 font-medium text-xl leading-relaxed max-w-[540px]">
                                             Explore how hospitals are embracing smart technologies, like IoT devices and AI, to enhance efficiency, reduce costs, and improve the patient experience.
                                        </p>
                                        <div className="flex justify-end pr-4">
                                             <div className="flex items-center gap-4 text-[#38b2ac] hover:gap-7 transition-all cursor-pointer font-black uppercase text-sm tracking-widest">
                                                  Read More <ArrowRight size={20} strokeWidth={3} />
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              {/* Clinical Navigation Nodes */}
                              <div className="flex justify-center gap-10">
                                   <div className="w-16 h-16 rounded-full bg-[#38b2ac]/5 border border-[#38b2ac]/10 flex items-center justify-center text-[#38b2ac] hover:bg-[#38b2ac] hover:text-white transition-all cursor-pointer shadow-sm hover:scale-110">
                                        <ArrowLeft size={24} strokeWidth={3} />
                                   </div>
                                   <div className="w-16 h-16 rounded-full bg-[#38b2ac]/5 border border-[#38b2ac]/10 flex items-center justify-center text-[#38b2ac] hover:bg-[#38b2ac] hover:text-white transition-all cursor-pointer shadow-sm hover:scale-110">
                                        <ArrowRight size={24} strokeWidth={3} />
                                   </div>
                               </div>
                          </div>
                    </section>
                    )}

                    {/* CLINICAL AVAILABILITY (BUSINESS HOURS) - REDESIGNED */}
                    {(!card.manageSection || card.manageSection.businessHours) && (
                    <section className="px-12 pb-40 relative group/hours">
                         {/* Cellular Decoration */}
                         <div className="absolute top-0 left-4 opacity-[0.15] -translate-y-8 -rotate-12 scale-150 select-none pointer-events-none group-hover/hours:rotate-0 transition-transform duration-1000">
                              <Dna size={120} strokeWidth={1} className="text-[#38b2ac] animate-pulse" />
                         </div>

                         <div className="text-center space-y-4 mb-24">
                              <h2 className="text-5xl font-serif font-black text-slate-900 tracking-tight">Business Hours</h2>
                              <div className="w-12 h-1.5 bg-[#38b2ac] mx-auto rounded-full" />
                         </div>

                         <div className="bg-white/50 backdrop-blur-3xl border border-slate-200 rounded-[64px] p-12 shadow-2xl space-y-10 relative z-10 ring-1 ring-slate-100">
                              <div className="grid grid-cols-1 gap-6">
                                   {[
                                        { day: "Monday", time: "09:00 AM - 08:00 PM", status: "OPEN" },
                                        { day: "Tuesday", time: "09:00 AM - 08:00 PM", status: "OPEN" },
                                        { day: "Wednesday", time: "09:00 AM - 08:00 PM", status: "OPEN" },
                                        { day: "Thursday", time: "09:00 AM - 08:00 PM", status: "OPEN" },
                                        { day: "Friday", time: "09:00 AM - 08:00 PM", status: "OPEN" },
                                        { day: "Saturday", time: "10:00 AM - 04:00 PM", status: "EMERGENCY ONLY" },
                                        { day: "Sunday", time: "CLOSED", status: "CLOSED" },
                                   ].map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-8 bg-white border border-slate-100 rounded-[32px] hover:shadow-xl hover:-translate-y-1 transition-all group/node ring-1 ring-slate-100/50">
                                             <div className="flex items-center gap-8">
                                                  <div className="w-16 h-16 bg-[#f0f9f9] rounded-2xl flex items-center justify-center text-[#38b2ac] group-hover/node:bg-[#38b2ac] group-hover/node:text-white transition-all duration-500 shadow-sm">
                                                       <Clock size={28} strokeWidth={2.5} />
                                                  </div>
                                                  <div className="space-y-1">
                                                       <p className="text-slate-950 font-black text-lg uppercase tracking-wider leading-none">{item.day}</p>
                                                       <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.1em]">{item.time}</p>
                                                  </div>
                                             </div>
                                             
                                             <div className="flex items-center gap-4">
                                                  <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border ${
                                                       item.status === "OPEN" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : 
                                                       item.status === "CLOSED" ? "bg-rose-50 text-rose-600 border-rose-100" : 
                                                       "bg-amber-50 text-amber-600 border-amber-100"
                                                  }`}>
                                                       {item.status}
                                                  </span>
                                                  <div className={`w-2.5 h-2.5 rounded-full ${
                                                       item.status === "OPEN" ? "bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.5)]" : 
                                                       item.status === "CLOSED" ? "bg-rose-500" : 
                                                       "bg-amber-500 animate-pulse"
                                                  }`} />
                                             </div>
                                        </div>
                                   ))}
                              </div>
                              
                              <div className="pt-4 text-center">
                                   <p className="text-[#38b2ac] font-black text-[10px] uppercase tracking-[0.8em] animate-pulse">Live Status Portal</p>
                              </div>
                         </div>
                    </section>
                    )}

                    {/* CLINICAL SCHEDULING (MAKE AN APPOINTMENT) */}
                    {(!card.manageSection || card.manageSection.appointments) && (
                    <section className="px-12 pb-40 relative group/apt">
                         {/* Pill Decoration */}
                         <div className="absolute top-0 right-4 opacity-[0.2] -translate-y-8 scale-150 rotate-[25deg] select-none pointer-events-none group-hover/apt:rotate-0 transition-transform duration-1000">
                              <Pill size={120} strokeWidth={1} className="text-[#38b2ac]" />
                         </div>

                         <div className="text-center space-y-4 mb-20">
                              <h2 className="text-5xl font-serif font-black text-slate-900 tracking-tight">Make an Appointment</h2>
                              <div className="w-12 h-1.5 bg-[#38b2ac] mx-auto rounded-full" />
                         </div>

                         <div className="bg-[#f0f9f9] border border-[#38b2ac]/10 p-10 rounded-[48px] shadow-sm hover:shadow-2xl hover:shadow-[#38b2ac]/5 transition-all">
                              <div className="bg-white border border-slate-200 rounded-3xl p-6 ring-1 ring-slate-100 focus-within:ring-2 focus-within:ring-[#38b2ac] transition-all">
                                   <input
                                        type="text"
                                        placeholder="Pick a Date"
                                        className="w-full bg-transparent border-none outline-none font-black text-slate-800 placeholder:text-slate-300 text-lg"
                                   />
                              </div>
                         </div>
                    </section>
                    )}

                    {/* PATIENT INQUIRIES HUB */}
                    {(!card.manageSection || card.manageSection.inquiries) && (
                    <section className="px-12 pb-16 relative group/inquiry">
                         {/* Syringe Decoration */}
                         <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-[0.12] scale-150 -rotate-[15deg] select-none pointer-events-none group-hover/inquiry:rotate-0 transition-transform duration-1000">
                              <Syringe size={160} strokeWidth={1} className="text-[#38b2ac]" />
                         </div>

                         <div className="text-center space-y-4 mb-24">
                              <h2 className="text-5xl font-serif font-black text-slate-900 tracking-tight">Inquiries</h2>
                              <div className="w-12 h-1.5 bg-[#38b2ac] mx-auto rounded-full" />
                         </div>

                         <div className="bg-[#f0f9f9] border border-[#38b2ac]/10 p-12 rounded-[60px] space-y-8 relative z-10 shadow-sm hover:shadow-2xl hover:shadow-[#38b2ac]/5 transition-all">
                              <div className="grid grid-cols-1 gap-6">
                                   <input type="text" placeholder="Your Name" className="w-full h-20 bg-white border border-slate-200 rounded-[28px] px-8 font-black text-slate-800 placeholder:text-slate-300 outline-none focus:ring-2 focus:ring-[#38b2ac] transition-all" />
                                   <input type="text" placeholder="Enter Phone Number" className="w-full h-20 bg-white border border-slate-200 rounded-[28px] px-8 font-black text-slate-800 placeholder:text-slate-300 outline-none focus:ring-2 focus:ring-[#38b2ac] transition-all" />
                                   <input type="text" placeholder="Email Address" className="w-full h-20 bg-white border border-slate-200 rounded-[28px] px-8 font-black text-slate-800 placeholder:text-slate-300 outline-none focus:ring-2 focus:ring-[#38b2ac] transition-all" />
                                   <textarea placeholder="Type a message here..." className="w-full h-56 bg-white border border-slate-200 rounded-[32px] p-8 font-black text-slate-800 placeholder:text-slate-300 outline-none focus:ring-2 focus:ring-[#38b2ac] transition-all resize-none" />
                              </div>
                              <button className="w-full h-24 bg-slate-900 text-white rounded-[32px] font-black text-xl flex items-center justify-center gap-4 hover:bg-[#38b2ac] transition-all shadow-2xl active:scale-95 group">
                                   SUBMIT CASE <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                              </button>
                         </div>
                    </section>
                    )}

                    <div className="px-12 pb-12 pt-8 relative z-10 border-t border-slate-100/50 text-slate-900">
                         <VCardDynamicSections 
                             card={card} 
                             exclude={[
                                 ...(!card.manageSection || card.manageSection.testimonials ? [] : ['testimonials'] as const),
                                 ...(!card.manageSection || card.manageSection.galleries ? [] : ['galleries'] as const),
                                 ...(!card.manageSection || card.manageSection.businessHours ? [] : ['businessHours'] as const),
                                 ...(!card.manageSection || card.manageSection.services ? [] : ['services'] as const),
                                 ...(!card.manageSection || card.manageSection.products ? [] : ['products'] as const),
                                 ...(!card.manageSection || card.manageSection.blogs ? [] : ['blogs'] as const),
                                 ...(!card.manageSection || card.manageSection.iframes ? [] : ['iframes'] as const),
                                 ...(!card.manageSection || card.manageSection.map ? [] : ['map'] as const),
                             ]}
                         />
                    </div>

                    {/* ELITE FOOTER */}
                    <footer className="py-32 bg-slate-950 text-white text-center space-y-20 relative overflow-hidden">
                         <div className="absolute inset-0 opacity-5 pointer-events-none">
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[#38b2ac]/20 rounded-full blur-[150px]" />
                         </div>

                         {card.socialLinks && card.socialLinks.filter(l => l.url).length > 0 && (
                              <div className="relative z-10 flex justify-center gap-14">
                                   {card.socialLinks.filter(l => l.url).map((social, idx) => {
                                        const Icon = getSocialIcon(social.platform);
                                        return (
                                             <a 
                                                  key={idx} 
                                                  href={social.url} 
                                                  target="_blank" 
                                                  rel="noopener noreferrer"
                                                  className="text-white/20 hover:text-[#38b2ac] hover:scale-125 transition-all cursor-pointer"
                                             >
                                                  <Icon size={32} strokeWidth={1} />
                                             </a>
                                        );
                                   })}
                              </div>
                         )}

                         <div className="relative z-10 space-y-6">
                              <p className="text-[11px] font-black text-white/20 uppercase tracking-[1em]">SYSTEM NODES ONLINE</p>
                              <p className="text-[12px] font-black text-[#38b2ac] uppercase tracking-[0.4em] leading-none pt-1">
                                   CITY GENERAL REGISTRY © 2026
                              </p>
                         </div>
                    </footer>

               </div>

               {/* FONTS INFO */}
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
               <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
               <style jsx global>{`
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
          </div>
     );
}

function ClinicalInsightCard({ theme, title, date, image }: { theme: string, title: string, date: string, image: string }) {
     return (
          <div className="bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full ring-1 ring-slate-100">
               <div className="relative h-56 w-full overflow-hidden">
                    <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-[4s]" unoptimized={true} />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl px-4 py-1.5 rounded-full shadow-lg border border-white">
                         <span className="text-[10px] font-black text-[#38b2ac] uppercase tracking-widest leading-none pt-[1px]">{theme}</span>
                    </div>
               </div>
               <div className="p-10 space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                         <h4 className="text-xl font-serif font-black text-slate-800 tracking-tight leading-[1.3] group-hover:text-[#38b2ac] transition-colors line-clamp-2">{title}</h4>
                         <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">{date}</p>
                    </div>
                    <div className="flex items-center gap-3 text-[#38b2ac] group-hover:gap-5 transition-all cursor-pointer">
                         <span className="text-xs font-black uppercase tracking-widest pt-[2px]">Read Analysis</span>
                         <ArrowRight size={16} strokeWidth={3} />
                    </div>
               </div>
          </div>
     );
}

function HealthcareProductCard({ image, title, price, category }: { image: string, title: string, price: string, category?: string }) {
     return (
          <div className="bg-white rounded-[60px] overflow-hidden border border-slate-100 shadow-2xl hover:shadow-[0_60px_100px_-30px_rgba(15,23,42,0.15)] hover:-translate-y-3 transition-all group flex flex-col h-full ring-1 ring-slate-100 relative">
               <div className="relative h-80 w-full overflow-hidden">
                    <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-[5s] ease-out brightness-95" unoptimized={true} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    {category && (
                         <div className="absolute top-8 left-8 bg-[#38b2ac] text-white px-5 py-2 rounded-2xl font-black text-[9px] uppercase tracking-[0.2em] shadow-2xl border border-white/20">
                              {category}
                         </div>
                    )}
                    <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-xl px-10 py-5 rounded-[28px] shadow-2xl border border-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                         <Star size={24} className="text-[#38b2ac]" fill="currentColor" />
                    </div>
               </div>
               <div className="p-12 space-y-8 flex-1 flex flex-col items-center text-center">
                    <h4 className="text-3xl font-serif font-black text-slate-900 tracking-tight leading-tight uppercase px-4">{title}</h4>
                    <div className="w-full h-px bg-slate-100" />
                    <div className="space-y-2">
                         <p className="text-[#38b2ac] font-black text-[10px] uppercase tracking-[0.4em] leading-none mb-1">Elite Package Rate</p>
                         <span className="text-4xl font-serif font-black text-[#38b2ac] tracking-tighter">{price}</span>
                    </div>
                    <div className="pt-4 flex items-center gap-4 text-slate-300 group-hover:text-[#38b2ac] transition-all cursor-pointer font-black uppercase text-[10px] tracking-widest">
                         Details <ArrowRight size={16} strokeWidth={3} />
                    </div>
               </div>
          </div>
     );
}

function ServiceClinicalCard({ image, title, desc, priority, icon: Icon }: { image: string, title: string, desc: string, priority?: string, icon?: any }) {
     return (
          <div className="bg-white border border-slate-100 rounded-[56px] overflow-hidden shadow-2xl hover:shadow-[0_40px_80px_-20px_rgba(56,178,172,0.15)] hover:-translate-y-2 transition-all group flex flex-col h-full ring-1 ring-slate-100/50">
               <div className="relative h-72 w-full overflow-hidden">
                    <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-[6s] ease-out" unoptimized={true} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                    {priority && (
                         <div className="absolute top-8 left-8 bg-[#38b2ac] text-white px-5 py-2 rounded-xl font-black text-[9px] uppercase tracking-[0.25em] shadow-2xl border border-white/20">
                              {priority}
                         </div>
                    )}
                    {Icon && (
                         <div className="absolute bottom-8 right-8 w-14 h-14 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-center text-[#38b2ac] shadow-2xl border border-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                              <Icon size={24} strokeWidth={2.5} />
                         </div>
                    )}
               </div>
               <div className="p-12 space-y-6 flex-1 flex flex-col items-center text-center">
                    <h4 className="text-3xl font-serif font-black text-slate-950 tracking-tight leading-none uppercase">{title}</h4>
                    <div className="w-12 h-1 bg-[#38b2ac]/20 rounded-full" />
                    <p className="text-slate-500 font-medium text-lg leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                         {desc}
                    </p>
               </div>
          </div>
     );
}

function MedicalContactCard({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
     return (
          <div className="flex items-center gap-8 p-6 bg-white border border-slate-100 rounded-[32px] hover:shadow-[0_30px_60px_-15px_rgba(56,178,172,0.15)] hover:-translate-y-1 transition-all group ring-1 ring-slate-100/50 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:rotate-12 transition-transform duration-700">
                    <Icon size={80} />
               </div>
               <div className="w-16 h-16 bg-[#f0f9f9] rounded-2xl flex items-center justify-center text-[#38b2ac] shrink-0 group-hover:bg-[#38b2ac] group-hover:text-white transition-all duration-500 shadow-sm border border-[#38b2ac]/5">
                    <Icon size={28} strokeWidth={2.5} />
               </div>
               <div className="space-y-1 text-left relative z-10">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mb-1">{label}</p>
                    <p className="text-lg font-black text-slate-900 tracking-tight leading-none pt-1">{value}</p>
               </div>
          </div>
     );
}

function ClinicalStatItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
     return (
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-[40px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center space-y-4">
               <div className="w-16 h-16 rounded-2xl bg-[#38b2ac]/10 flex items-center justify-center text-[#38b2ac] group-hover:bg-[#38b2ac] group-hover:text-white transition-all duration-500 shadow-sm">
                    <Icon size={32} strokeWidth={2} />
               </div>
               <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none block">{label}</p>
                    <p className="text-xl font-black text-slate-900 tracking-tight leading-none uppercase pt-2">{value}</p>
               </div>
          </div>
     );
}

function ClinicalDetail({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
     return (
          <div className="flex items-center gap-7 p-8 bg-white border border-slate-100 rounded-[32px] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all group">
               <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:bg-[#38b2ac] group-hover:scale-110 transition-all shadow-xl">
                    <Icon size={30} strokeWidth={1.5} />
               </div>
               <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none block">{label}</label>
                    <p className="text-base font-black text-slate-900 tracking-tight leading-none pt-2">{value}</p>
               </div>
          </div>
     );
}

