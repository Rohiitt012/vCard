"use client";
import React from "react";
import Image from "next/image";
import { 
  Facebook, Instagram, Twitter, Youtube, Linkedin, MessageCircle,
  Download, Phone, Mail, MapPin, Globe, ChevronDown, Heart, Stethoscope, Clock,
  Cake, Maximize2, ArrowRight, CalendarClock, Upload, Share2, User
} from "lucide-react";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";
import { getSocialIcon } from "@/lib/social-icons";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function MedicalVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "Pet Care Veterinary Clinic";
  const role = card.occupation || card.tagline || "Emergency & Critical Care Veterinarian";
  const bio = card.description || "At Pet Care Veterinary Clinic, we provide world-class medical attention for your furry companions. Our team specializes in critical care and emergency medicine, ensuring your pets are always in safe hands.";

  const heroImg = "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1200"; // High-end vet image
  const profileImg = card.image || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400";

  return (
    <div className="min-h-screen bg-[#F8F9FD] text-[#333333] font-sans flex justify-center py-0 px-0 overflow-x-hidden">
      <div className="w-full max-w-[500px] bg-white relative flex flex-col shadow-2xl">
        
        {/* Header / Hero Section */}
        <section className="relative h-[320px] w-full overflow-hidden">
           <Image
             src={heroImg}
             alt="Veterinarian"
             fill
             className="object-cover"
             priority
             unoptimized
           />
           
           {/* Language Selector (Top Right) */}
           <div className="absolute top-6 right-6 z-10">
              <button className="flex items-center gap-1.5 px-4 py-2 bg-[#6366F1] text-white rounded-lg font-bold text-sm shadow-md transition-transform hover:scale-105 active:scale-95">
                 EN <ChevronDown size={14} />
              </button>
           </div>
        </section>

        {/* --- BRANDING BLOCK (Wide Pill with Logo) --- */}
        <section className="relative -mt-16 z-20 px-4">
           <div className="bg-white rounded-full shadow-[0_10px_40px_-10px_rgba(99,102,241,0.2)] border border-[#ECECFE] flex items-center p-2 pr-10 relative overflow-hidden min-h-[140px]">
              
              {/* Paw Print Background Pattern (Right) */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.05] pointer-events-none select-none overflow-hidden">
                 <div className="grid grid-cols-2 gap-4 translate-x-10 translate-y-4 rotate-12">
                    {[...Array(6)].map((_, i) => (
                       <svg key={i} width="40" height="40" viewBox="0 0 24 24" fill="#6366F1">
                          <path d="M12,5c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S12.55,5,12,5z M12,9c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1 S12.55,9,12,9z M12,1c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S12.55,1,12,1z M12,13c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3 S13.66,13,12,13z" />
                       </svg>
                    ))}
                 </div>
              </div>

              {/* Circular Logo */}
              <div className="relative w-[110px] h-[110px] shrink-0">
                 <div className="absolute inset-0 rounded-full border-[3px] border-[#6366F1] -m-1 opacity-20" />
                 <div className="relative w-full h-full rounded-full bg-white shadow-xl overflow-hidden border-2 border-[#ECECFE] flex items-center justify-center">
                    {/* Recreating the Pet Care Logo */}
                    <div className="relative w-full h-full p-2 flex flex-col items-center justify-center text-center">
                       <span className="text-[10px] font-black tracking-tight text-[#1E293B] mb-1">PET CARE</span>
                       <div className="w-12 h-12 relative">
                          {/* paw icon central */}
                          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#6366F1]">
                             <path d="M12,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM6,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,7c-2.21,0-4,1.79-4,4h8c0-2.21-1.79-4-4-4Z" />
                          </svg>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Text Area */}
              <div className="ml-6 flex-1 z-10">
                 <h1 className="text-2xl font-black text-[#1E293B] leading-none mb-2">
                    {name}
                 </h1>
                 <p className="text-[13px] font-bold text-[#64748B] uppercase tracking-wide">
                    {role}
                 </p>
              </div>
           </div>
        </section>

        {/* Content Body */}
        <div className="px-8 pt-10 pb-20 space-y-12 relative overflow-hidden">
           
           {/* Decorative Elements (Floating) */}
           <div className="absolute top-[20%] -left-4 w-12 h-12 opacity-80 rotate-12 pointer-events-none">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-[#A5B4FC]">
                 <path d="M4.5,11L4.5,11C3.12,11,2,9.88,2,8.5v-3C2,4.12,3.12,3,4.5,3h0C5.88,3,7,4.12,7,5.5v3C7,9.88,5.88,11,4.5,11z M5.5,5.5v3 c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3c0-0.55,0.45-1,1-1S5.5,4.95,5.5,5.5z M22,8.5v-3C22,4.12,20.88,3,19.5,3h0 C18.12,3,17,4.12,17,5.5v3c0,1.38,1.12,2.5,2.5,2.5h0C20.88,11,22,9.88,22,8.5z" />
              </svg>
           </div>
           
           <div className="absolute top-[40%] -right-4 w-10 h-10 opacity-30 rotate-45 text-[#6366F1] font-black pointer-events-none">
              <span className="text-4xl">Ã—</span>
           </div>

           <div className="absolute top-[50%] -right-8 w-16 h-16 opacity-40 -rotate-12 pointer-events-none">
              {/* Band-aid SVG */}
              <svg viewBox="0 0 100 100" className="w-full h-full fill-[#A5B4FC]/40">
                 <rect x="10" y="40" width="80" height="20" rx="10" transform="rotate(-45 50 50)" />
                 <rect x="40" y="40" width="20" height="20" rx="2" transform="rotate(-45 50 50)" fill="#6366F1/20" />
              </svg>
           </div>

           {/* Welcome / About Section */}
           <section id="about" className="text-center">
              <p className="text-[#475569] font-medium leading-relaxed text-[15px]">
                 Welcome to <strong className="text-[#1E293B]">PetCare</strong> Pet Clinic, where your pet&apos;s health is our top priority. We offer expert veterinary care, routine checkups, vaccinations, and emergency services for dogs, cats, and other small animals. Our experienced team ensures compassionate treatment in a clean, stress-free environment. Whether it&apos;s a minor illness or a major procedure, your furry friends are in safe hands. We also provide grooming, dental care, and nutrition advice to keep pets happy and healthy. Trust us to be your partner in lifelong pet wellness!
              </p>
           </section>

           {/* Redesigned Social Identity Icons */}
           <section className="flex flex-col items-center py-8 relative">
                <VCardSocialLinks 
                    card={card} 
                    layout="vertical" 
                    variant="circular" 
                    iconSize={20}
                    itemClassName="bg-white rounded-[24px] border border-slate-100 shadow-sm p-3 w-full max-w-[400px] hover:border-[#6366F1]/30 hover:shadow-md h-14"
                />
            </section>

           {/* Contact Divider */}
           <div className="flex items-center gap-4 py-4">
              <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
              <h2 className="text-2xl font-black text-[#1E293B] tracking-tight uppercase">Contact</h2>
              <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
           </div>

           {/* Detailed Contact Grid */}
            {/* Redesigned Contact Grid (Pill Style) */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-4 pt-4">
               {[
                 { icon: <Mail size={16} />, text: card.email || "petcare@gmail.com" },
                 { icon: <Mail size={16} />, text: "petcare.official@gmail.com" },
                 { icon: <Phone size={16} />, text: card.phone || "+918527419630" },
                 { icon: <Phone size={16} />, text: "+919638527410" },
                 { icon: <Cake size={16} />, text: "12th June, 1990" },
                 { icon: <MapPin size={16} />, text: card.address || "Gujrat Surat" }
               ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-3 flex items-center gap-3 transition-all hover:border-[#6366F1]/30 hover:shadow-md group h-14 relative overflow-hidden">
                     <div className="w-8 h-8 shrink-0 bg-[#6366F1]/5 rounded-full flex items-center justify-center text-[#6366F1] transition-transform group-hover:scale-110">
                        {item.icon}
                     </div>
                     <span className="text-[11px] font-black text-[#1E1B4B] break-all leading-tight">
                        {item.text}
                     </span>
                  </div>
               ))}
            </div>

            {/* --- NEW SECTION: GALLERIES --- */}
           <section className="relative">
              <div className="flex justify-center mb-10">
                 <div className="px-12 py-3 rounded-full border border-[#6366F1]/20 bg-white shadow-sm z-10">
                    <span className="text-xl font-black text-[#1E293B] tracking-tight">Galleries</span>
                 </div>
              </div>

              {/* Decorative Leaves */}
              <div className="absolute top-0 -left-6 w-24 h-24 opacity-20 rotate-12 pointer-events-none">
                 <svg viewBox="0 0 24 24" className="w-full h-full fill-[#10B981]">
                    <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l0.95-2.3C7.65,17,9,14,13,13c2,0,3,0.67,4,2c1.26,1.68,1.5,5,1.5,5l2,0 c0,0-0.51-5.52-2.47-8.15C17.4,11.02,15.42,10.13,13.4,10c-1.37-0.09-2.22,0.11-2.92,0.4C11.53,9.54,14.6,8.23,17,8z" />
                 </svg>
              </div>

              {/* Gallery Scroll */}
              <div className="flex gap-4 overflow-x-auto pb-6 -mx-4 px-4 no-scrollbar list-none">
                 {[
                   "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600",
                   "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=600",
                   "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=600",
                   "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=600"
                 ].map((src, i) => (
                    <div key={i} className="min-w-[280px] h-[200px] rounded-[32px] overflow-hidden shadow-lg border-2 border-white relative group">
                       <Image 
                          src={src} 
                          alt={`Gallery ${i}`} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          unoptimized
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#6366F1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                 ))}
              </div>

              <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-20 -rotate-45 pointer-events-none">
                 <svg viewBox="0 0 24 24" className="w-full h-full fill-[#10B981]">
                    <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l0.95-2.3C7.65,17,9,14,13,13c2,0,3,0.67,4,2c1.26,1.68,1.5,5,1.5,5l2,0 c0,0-0.51-5.52-2.47-8.15C17.4,11.02,15.42,10.13,13.4,10c-1.37-0.09-2.22,0.11-2.92,0.4C11.53,9.54,14.6,8.23,17,8z" />
                 </svg>
              </div>
           </section>
           {/* ---------------------------- */}

           {/* --- OUR SERVICES SECTION --- */}
           <section className="relative pt-6 px-1">
              {/* Header with Decorative Icon */}
              <div className="flex items-center justify-center gap-4 mb-12 relative">
                 <div className="absolute -left-4 -top-8 w-16 h-16 opacity-90 -rotate-12 z-10 pointer-events-none">
                    {/* Medical Kit Icon */}
                    <div className="w-full h-full bg-[#6366F1] rounded-2xl flex items-center justify-center shadow-lg relative border-2 border-white">
                       <div className="w-10 h-3 bg-[#4F46E5] absolute -top-1 rounded-t-lg rounded-b-none" />
                       <div className="w-8 h-8 rounded-full border-4 border-white/30 flex items-center justify-center">
                          <div className="w-4 h-1 bg-white rounded-full" />
                          <div className="w-1 h-4 bg-white rounded-full absolute" />
                       </div>
                    </div>
                 </div>
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
                 <h2 className="text-3xl font-black text-[#1E293B] tracking-tight">Our Services</h2>
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-6">
                 {[
                   { 
                      title: "Pet Surgery", 
                      desc: "Soft tissue and orthopedic surgeries performed with advanced equipment and care.",
                      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600" 
                   },
                   { 
                      title: "Diagnostic Testing", 
                      desc: "Blood tests, X-rays, ultrasounds, and lab services for accurate diagnosis.",
                      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600" 
                   },
                   { 
                      title: "Nutrition & Diet Consultation", 
                      desc: "Personalized diet plans and food recommendations for optimal pet health.",
                      img: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=600" 
                   },
                   { 
                      title: "General Health Checkups", 
                      desc: "Routine physical exams to monitor your pet's overall health and wellness.",
                      img: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=600" 
                   },
                   { 
                      title: "Vaccinations & Immunizations", 
                      desc: "Protection against common diseases through scheduled vaccines for pets of all ages.",
                      img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600" 
                   },
                   { 
                      title: "Emergency & Critical Care", 
                      desc: "Immediate treatment for accidents, injuries, or sudden illness.",
                      img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=600" 
                   }
                 ].map((service, i) => (
                    <div key={i} className="bg-white rounded-[32px] border border-[#ECECFE] shadow-sm p-3 flex flex-col items-center text-center relative overflow-hidden group transition-all hover:shadow-md">
                       {/* Service Image */}
                       <div className="w-full h-[140px] rounded-[24px] overflow-hidden mb-4 border border-[#ECECFE] relative">
                          <Image 
                             src={service.img} 
                             alt={service.title} 
                             fill
                             className="object-cover group-hover:scale-110 transition-transform duration-700"
                             unoptimized
                          />
                       </div>

                       {/* Content */}
                       <h3 className="text-[17px] font-black text-[#6366F1] leading-tight mb-2">
                          {service.title}
                       </h3>
                       <p className="text-[11px] text-slate-500 font-bold leading-relaxed px-1">
                          {service.desc}
                       </p>

                       {/* Subtle Paw Pattern (Bottom Right) */}
                       <div className="absolute right-2 bottom-2 w-10 h-10 opacity-[0.05] pointer-events-none rotate-12">
                          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#6366F1]">
                             <path d="M12,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM6,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,7c-2.21,0-4,1.79-4,4h8c0-2.21-1.79-4-4-4Z" />
                          </svg>
                       </div>
                    </div>
                 ))}
              </div>
           </section>

           {/* --- MAKE AN APPOINTMENT SECTION --- */}
           <section className="relative pt-6">
              {/* Header with Decorative Icons */}
              <div className="flex items-center justify-center gap-4 mb-10 relative">
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
                 <h2 className="text-3xl font-black text-[#1E293B] tracking-tight whitespace-nowrap">Make an Appointment</h2>
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
                 
                 {/* Decorative Band-aids (Right) */}
                 <div className="absolute -right-2 -top-10 flex flex-col gap-2 translate-y-4">
                    <div className="w-16 h-6 bg-[#6366F1] rounded-full rotate-12 flex items-center justify-center shadow-lg border border-white">
                       <div className="w-4 h-4 bg-white/20 rounded-sm" />
                    </div>
                    <div className="w-16 h-6 bg-[#6366F1]/20 rounded-full flex items-center justify-center shadow-sm border border-[#6366F1]/20">
                       <div className="w-4 h-4 bg-[#6366F1]/40 rounded-sm" />
                    </div>
                 </div>
              </div>

              {/* Date Picker Input Placeholder */}
              <div className="px-1">
                 <div className="bg-[#6366F1]/5 border border-[#6366F1]/10 rounded-[28px] p-2 relative overflow-hidden group transition-all hover:bg-[#6366F1]/10">
                    <div className="bg-white rounded-[20px] p-5 flex items-center gap-4 shadow-sm border border-[#ECECFE]">
                       <span className="text-slate-400 font-bold text-lg">Pick a Date</span>
                    </div>

                    {/* Subtle Paw Pattern (Bottom Right) */}
                    <div className="absolute right-4 bottom-4 w-12 h-12 opacity-[0.05] pointer-events-none -rotate-12 translate-x-2 translate-y-2">
                       <svg viewBox="0 0 24 24" className="w-full h-full fill-[#6366F1]">
                          <path d="M12,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM6,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,7c-2.21,0-4,1.79-4,4h8c0-2.21-1.79-4-4-4Z" />
                       </svg>
                    </div>
                 </div>
              </div>
           </section>

           {/* --- NEW SECTION: FEATURED GALLERY (Carousel style) --- */}
           <section className="relative pt-6">
              {/* Header with Decorative Icon */}
              <div className="flex items-center justify-center gap-4 mb-10 relative px-1">
                 <div className="absolute -left-6 -top-8 w-20 h-20 opacity-90 -rotate-12 z-10 pointer-events-none">
                    {/* Pet Carrier Icon Helper */}
                    <div className="w-full h-full bg-[#6366F1]/10 rounded-2xl flex flex-col items-center justify-center border-2 border-white shadow-md relative overflow-hidden">
                       <div className="w-12 h-6 bg-[#6366F1]/40 rounded-t-sm mb-1 flex gap-1 px-1 pt-1">
                          {[...Array(5)].map((_, i) => <div key={i} className="w-full h-full bg-white/40 rounded-sm" />)}
                       </div>
                       <div className="w-12 h-6 bg-[#6366F1] rounded-b-sm" />
                       <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-[#4F46E5] rounded-full" />
                    </div>
                 </div>
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
                 <h2 className="text-3xl font-black text-[#1E293B] tracking-tight whitespace-nowrap">Gallery</h2>
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
              </div>

              {/* Main Carousel Image Container */}
              <div className="px-1 group">
                 <div className="relative w-full h-[320px] rounded-[32px] overflow-hidden border-[3px] border-[#6366F1]/10 shadow-lg group-hover:shadow-[#6366F1]/20 transition-all">
                    <Image 
                       src="https://images.unsplash.com/photo-1581594658553-35942489a29a?q=80&w=1200" 
                       alt="Clinical Practice" 
                       fill
                       className="object-cover group-hover:scale-105 transition-transform duration-1000"
                       unoptimized
                    />
                    
                    {/* Maximize Icon (Top Right) */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#6366F1] shadow-md border border-[#ECECFE]">
                       <Maximize2 size={18} strokeWidth={3} />
                    </div>
                 </div>

                 {/* Pagination Dots */}
                 <div className="flex justify-center gap-2 mt-6">
                    <div className="w-3 h-3 rounded-full bg-[#6366F1]" />
                    {[...Array(4)].map((_, i) => (
                       <div key={i} className="w-3 h-3 rounded-full bg-[#6366F1]/30" />
                    ))}
                 </div>
              </div>
           </section>

           {/* --- PRODUCTS SECTION --- */}
           <section className="relative pt-6 px-1">
              {/* Header with Decorative Icon */}
              <div className="flex items-center justify-center gap-4 mb-12 relative">
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
                 <h2 className="text-3xl font-black text-[#1E293B] tracking-tight">Products</h2>
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
                 
                 {/* Decorative Paw Badge (Right) */}
                 <div className="absolute -right-4 -top-10 w-20 h-20 opacity-90 rotate-12 z-10 pointer-events-none">
                    <div className="w-full h-full rounded-full bg-[#6366F1]/20 border-[3px] border-[#6366F1] flex items-center justify-center shadow-lg backdrop-blur-sm">
                       <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#6366F1]">
                          <path d="M12,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM6,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,7c-2.21,0-4,1.79-4,4h8c0-2.21-1.79-4-4-4Z" />
                       </svg>
                    </div>
                 </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                 {[
                   { 
                      title: "First-Aid Kits", 
                      price: "â‚¹ 2,500.00",
                      img: "https://images.unsplash.com/photo-1603398938378-e54eab446df1?q=80&w=600" 
                   },
                   { 
                      title: "Dental Care Kits", 
                      price: "â‚¹ 599.00",
                      img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=600" 
                   }
                 ].map((product, i) => (
                    <div key={i} className="bg-white rounded-[32px] border border-[#ECECFE] shadow-sm p-3 flex flex-col items-center text-center relative overflow-hidden group transition-all hover:shadow-md">
                       {/* Product Image */}
                       <div className="w-full h-[140px] rounded-[24px] overflow-hidden mb-4 border border-[#ECECFE] relative">
                          <Image 
                             src={product.img} 
                             alt={product.title} 
                             fill
                             className="object-cover group-hover:scale-110 transition-transform duration-700"
                             unoptimized
                          />
                       </div>

                       {/* Content */}
                       <h3 className="text-[17px] font-black text-[#1E293B] leading-tight mb-3">
                          {product.title}
                       </h3>
                       <div className="text-[18px] font-black text-[#6366F1]">
                          {product.price}
                       </div>

                       {/* Subtle Paw Pattern (Bottom Right) */}
                       <div className="absolute right-2 bottom-2 w-10 h-10 opacity-[0.05] pointer-events-none rotate-12">
                          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#6366F1]">
                             <path d="M12,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM6,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,7c-2.21,0-4,1.79-4,4h8c0-2.21-1.79-4-4-4Z" />
                          </svg>
                       </div>
                    </div>
                 ))}
              </div>

              {/* View More Button */}
              <div className="flex justify-center">
                 <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center gap-2 shadow-lg shadow-[#6366F1]/20 transition-all active:scale-95">
                    View More Products <ArrowRight size={18} />
                 </button>
              </div>
           </section>

           {/* --- BLOG SECTION --- */}
           <section className="relative pt-6 px-1">
              {/* Header with Decorative Icon */}
              <div className="flex items-center justify-center gap-4 mb-10 relative">
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
                 <h2 className="text-3xl font-black text-[#1E293B] tracking-tight">Blog</h2>
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
                 
                 {/* Decorative Medicine Bottle (Right) */}
                 <div className="absolute -right-2 -top-12 w-16 h-20 opacity-90 rotate-12 z-10 pointer-events-none">
                    <div className="w-full h-full bg-[#6366F1] rounded-xl flex flex-col items-center justify-center shadow-lg relative border-2 border-white overflow-hidden">
                       <div className="w-full h-4 bg-[#4143D1] absolute top-0" />
                       <div className="w-8 h-4 bg-[#4143D1] absolute -top-4 rounded-t-sm" />
                       <div className="w-8 h-8 rounded-full border-4 border-white/20 flex items-center justify-center mt-2">
                          <div className="w-4 h-1 bg-white rounded-full" />
                          <div className="w-1 h-4 bg-white rounded-full absolute" />
                       </div>
                    </div>
                 </div>
              </div>

              {/* Blog Card Container */}
              <div className="group">
                 <div className="bg-white rounded-[32px] border border-[#ECECFE] shadow-sm p-4 relative overflow-hidden transition-all hover:shadow-md">
                    {/* Blog Image */}
                    <div className="w-full h-[220px] rounded-[24px] overflow-hidden mb-6 border border-[#ECECFE] relative">
                       <Image 
                          src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800"
                          alt="Pet Vaccination" 
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-1000"
                          unoptimized
                       />
                    </div>

                    {/* Content */}
                    <div className="pr-4 pb-12">
                       <h3 className="text-[20px] font-black text-[#1E293B] leading-tight mb-4 group-hover:text-[#6366F1] transition-colors">
                          The Importance of Regular Vaccinations for Pets
                       </h3>
                       <p className="text-[14px] text-slate-500 font-bold leading-relaxed mb-6">
                          Why timely shots are essential for protecting your furry friend from preventable diseases.
                       </p>
                    </div>

                    {/* Read More Button (Bottom Right) */}
                    <div className="absolute right-4 bottom-6 z-10">
                       <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-5 py-2.5 rounded-2xl font-black text-xs flex items-center gap-2 shadow-md shadow-[#6366F1]/20 transition-all active:scale-95">
                          Read More <ArrowRight size={14} />
                       </button>
                    </div>

                    {/* Subtle Paw Pattern (Bottom Right) */}
                    <div className="absolute right-0 bottom-0 w-24 h-24 opacity-[0.05] pointer-events-none translate-x-4 translate-y-4">
                       <svg viewBox="0 0 24 24" className="w-full h-full fill-[#6366F1]">
                          <path d="M12,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM6,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,7c-2.21,0-4,1.79-4,4h8c0-2.21-1.79-4-4-4Z" />
                       </svg>
                    </div>
                 </div>

                 {/* Pagination Dots */}
                 <div className="flex justify-center gap-2 mt-8">
                    <div className="w-3 h-3 rounded-full bg-[#6366F1]" />
                    {[...Array(4)].map((_, i) => (
                       <div key={i} className="w-3 h-3 rounded-full bg-[#6366F1]/30" />
                    ))}
                 </div>
              </div>
           </section>

           {/* --- TESTIMONIALS SECTION --- */}
           <section className="relative pt-6 px-1">
              {/* Header with Decorative Icon */}
              <div className="flex items-center justify-center gap-4 mb-10 relative">
                 <div className="absolute -left-6 -top-10 w-16 h-20 opacity-90 -rotate-12 z-10 pointer-events-none">
                    {/* Pet Care Bottle Icon Helper (Shampoo/Spray) */}
                    <div className="w-full h-full bg-[#6366F1] rounded-xl flex flex-col items-center justify-center shadow-lg relative border-2 border-white overflow-hidden">
                       <div className="w-full h-4 bg-[#4143D1] absolute top-0" />
                       <div className="w-10 h-3 bg-[#1E1B4B] absolute -top-2 rounded-sm" />
                       <div className="w-8 h-8 rounded-full border-4 border-white/20 flex items-center justify-center mt-2">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white opacity-40">
                             <path d="M12,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM6,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,7c-2.21,0-4,1.79-4,4h8c0-2.21-1.79-4-4-4Z" />
                          </svg>
                       </div>
                    </div>
                 </div>
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
                 <h2 className="text-3xl font-black text-[#1E293B] tracking-tight">Testimonials</h2>
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
              </div>

              {/* Testimonial Card */}
              <div className="group">
                 <div className="bg-white rounded-[32px] border border-[#ECECFE] shadow-sm p-8 relative overflow-hidden text-center transition-all hover:shadow-md">
                    {/* Centered Avatar */}
                    <div className="flex justify-center mb-6">
                       <div className="w-24 h-24 rounded-full border-[3px] border-[#6366F1] p-1 shadow-md bg-white">
                          <div className="w-full h-full rounded-full overflow-hidden relative">
                             <Image 
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
                                alt="Ritika Sharma" 
                                fill
                                className="object-cover"
                                unoptimized
                             />
                          </div>
                       </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                       <h3 className="text-[22px] font-black text-[#1E293B] leading-tight mb-4">
                          Ritika Sharma
                       </h3>
                       <p className="text-[14px] text-slate-500 font-bold leading-relaxed max-w-xs mx-auto italic">
                          &quot;My dog had an allergic reaction late at night, and the emergency care team here was quick, kind, and so professional. I&apos;m forever grateful!&quot;
                       </p>
                    </div>

                    {/* Left Quote Icon Decor */}
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-[0.1] text-[#6366F1] pointer-events-none">
                       <svg viewBox="0 0 24 24" className="w-12 h-12 fill-currentColor">
                          <path d="M14.017 21L14.017 18C14.017 16.883 14.914 16 16.017 16L19.017 16C19.569 16 20.017 15.552 20.017 15L20.017 12C20.017 11.448 19.569 11 19.017 11L15.017 11C13.914 11 13.017 10.117 13.017 9.017L13.017 6.017C13.017 4.914 13.914 4.017 15.017 4.017L18.017 4.017C20.226 4.017 22.017 5.808 22.017 8.017L22.017 15C22.017 18.314 19.33 21 16.017 21L14.017 21ZM4.017 21L4.017 18C4.017 16.883 4.914 16 6.017 16L9.017 16C9.569 16 10.017 15.552 10.017 15L10.017 12C10.017 11.448 9.569 11 9.017 11L5.017 11C3.914 11 3.017 10.117 3.017 9.017L3.017 6.017C3.017 4.914 3.914 4.017 5.017 4.017L8.017 4.017C10.226 4.017 12.017 5.808 12.017 8.017L12.017 15C12.017 18.314 9.33 21 6.017 21L4.017 21Z" />
                       </svg>
                    </div>

                    {/* Subtle Paw Pattern (Bottom Right) */}
                    <div className="absolute right-0 bottom-0 w-32 h-32 opacity-[0.05] pointer-events-none translate-x-4 translate-y-4">
                       <svg viewBox="0 0 24 24" className="w-full h-full fill-[#6366F1]">
                          <path d="M12,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM6,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,7c-2.21,0-4,1.79-4,4h8c0-2.21-1.79-4-4-4Z" />
                       </svg>
                    </div>
                 </div>

                 {/* Pagination Dots */}
                 <div className="flex justify-center gap-2 mt-8">
                    <div className="w-3 h-3 rounded-full bg-[#6366F1]" />
                    {[...Array(4)].map((_, i) => (
                       <div key={i} className="w-3 h-3 rounded-full bg-[#6366F1]/30" />
                    ))}
                 </div>
              </div>
           </section>

           {/* --- BUSINESS HOURS SECTION --- */}
           <section className="relative pt-6 px-1">
              {/* Header with Decorative Icon */}
              <div className="flex items-center justify-center gap-4 mb-12 relative">
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
                 <h2 className="text-3xl font-black text-[#1E293B] tracking-tight whitespace-nowrap">Business Hours</h2>
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
                 
                 {/* Decorative Purple Retail Decor (Right) */}
                 <div className="absolute -right-4 -top-12 w-20 h-20 opacity-90 rotate-12 z-10 pointer-events-none">
                    <div className="w-full h-full bg-[#6366F1] rounded-2xl flex flex-col items-center justify-center shadow-lg relative border-2 border-white overflow-hidden">
                       <div className="w-full h-8 bg-[#4143D1] absolute top-0" />
                       <div className="w-10 h-10 rounded-full border-4 border-white/20 flex items-center justify-center mt-4">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                             <circle cx="12" cy="12" r="8" opacity="0.4" />
                             <path d="M12,4c-4.42,0-8,3.58-8,8s3.58,8,8,8s8-3.58,8-8S16.42,4,12,4z M12,18c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6 S15.31,18,12,18z" />
                          </svg>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Hours Grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 pt-4">
                 {[
                   { day: "Monday :", time: "09:00 AM - 10:00 PM" },
                   { day: "Tuesday :", time: "09:00 AM - 10:00 PM" },
                   { day: "Wednesday :", time: "09:00 AM - 10:00 PM" },
                   { day: "Thursday :", time: "09:00 AM - 10:00 PM" },
                   { day: "Friday :", time: "09:00 AM - 10:00 PM" },
                   { day: "Saturday :", time: "09:00 AM - 10:00 PM" }
                 ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-[24px] border border-[#6366F1]/10 shadow-sm p-4 pt-10 relative overflow-hidden flex flex-col items-center">
                       
                       {/* Paw container for Icon (Top Center) */}
                       <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center">
                          <svg className="absolute inset-0 w-full h-full fill-[#F1F5F9] stroke-[#E2E8F0] stroke-[1px]" viewBox="0 0 24 24">
                             <path d="M12,18.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S13.38,18.5,12,18.5z M12,15.5c-0.55,0-1,0.45-1,1 s0.45,1,1,1s1-0.45,1-1S12.55,15.5,12,15.5z M7,13.5c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S8.1,13.5,7,13.5z M17,13.5 c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S18.1,13.5,17,13.5z M12,10.5c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,10.5,12,10.5z" />
                          </svg>
                          <div className="relative z-10 text-[#6366F1]">
                             <CalendarClock size={18} />
                          </div>
                       </div>

                       {/* Subtle Paw Background Pattern (Right) */}
                       <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.04] pointer-events-none p-2">
                          <svg className="w-full h-full fill-[#6366F1]" viewBox="0 0 24 24">
                             <path d="M12,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM6,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,7c-2.21,0-4,1.79-4,4h8c0-2.21-1.79-4-4-4Z" />
                          </svg>
                       </div>

                       <div className="text-center z-10">
                          <div className="text-sm font-black text-slate-400 mb-1">{item.day}</div>
                          <div className="text-sm font-black text-[#1E293B]">{item.time}</div>
                       </div>
                    </div>
                 ))}
                 
                 {/* Sunday - Centered at bottom */}
                 <div className="col-span-2 flex justify-center mt-2">
                    <div className="bg-white rounded-[24px] border border-[#6366F1]/10 shadow-sm p-4 pt-10 relative overflow-hidden flex flex-col items-center w-[280px]">
                       <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center">
                          <svg className="absolute inset-0 w-full h-full fill-[#F1F5F9] stroke-[#E2E8F0] stroke-[1px]" viewBox="0 0 24 24">
                             <path d="M12,18.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S13.38,18.5,12,18.5z M12,15.5c-0.55,0-1,0.45-1,1 s0.45,1,1,1s1-0.45,1-1S12.55,15.5,12,15.5z M7,13.5c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S8.1,13.5,7,13.5z M17,13.5 c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S18.1,13.5,17,13.5z M12,10.5c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,10.5,12,10.5z" />
                          </svg>
                          <div className="relative z-10 text-[#6366F1]">
                             <CalendarClock size={18} />
                          </div>
                       </div>
                       <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.04] pointer-events-none p-2">
                          <svg className="w-full h-full fill-[#6366F1]" viewBox="0 0 24 24">
                             <path d="M12,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM6,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,7c-2.21,0-4,1.79-4,4h8c0-2.21-1.79-4-4-4Z" />
                          </svg>
                       </div>
                       <div className="text-center z-10">
                          <div className="text-sm font-black text-slate-400 mb-1">Sunday :</div>
                          <div className="text-sm font-black text-[#1E293B]">Closed</div>
                       </div>
                    </div>
                 </div>
              </div>
           </section>



           {/* --- NEW SECTION: QR CODE --- */}
           <section className="relative pt-6 px-1">
              {/* Header with Decorative Icon */}
              <div className="flex items-center justify-center gap-4 mb-10 relative">
                 <div className="absolute -left-6 -top-10 w-20 h-20 opacity-90 -rotate-12 z-10 pointer-events-none">
                    {/* Pet Treat/Food Bag Icon Helper */}
                    <div className="w-full h-full bg-[#6366F1] rounded-xl flex flex-col items-center justify-center shadow-lg relative border-2 border-white overflow-hidden">
                       <div className="w-full h-4 bg-[#4143D1] absolute top-1/2 -translate-y-1/2" />
                       <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center z-10 border border-white/30">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                             <path d="M12,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM6,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,7c-2.21,0-4,1.79-4,4h8c0-2.21-1.79-4-4-4Z" />
                          </svg>
                       </div>
                       <div className="absolute top-0 left-0 w-full h-1.5 bg-[#4143D1]" />
                       <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#4143D1]" />
                    </div>
                 </div>
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
                 <h2 className="text-3xl font-black text-[#1E293B] tracking-tight whitespace-nowrap">QR Code</h2>
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
              </div>

              {/* QR Code Card */}
              <div className="bg-[#6366F1]/5 border border-[#6366F1]/10 rounded-[32px] p-6 relative overflow-hidden flex items-center gap-6 group transition-all hover:bg-[#6366F1]/10">
                 {/* QR Image Placeholder */}
                 <div className="shrink-0 w-32 h-32 bg-white rounded-[24px] border border-[#6366F1]/20 p-3 shadow-md flex items-center justify-center relative z-10">
                    <div className="w-full h-full relative opacity-90">
                       <Image 
                          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" 
                          alt="Contact QR Code" 
                          fill
                          className="object-contain"
                          unoptimized
                       />
                    </div>
                 </div>

                 {/* Text Content */}
                 <div className="relative z-10">
                    <h3 className="text-[20px] font-black text-[#1E293B] mb-2 tracking-tight">Scan to Contact</h3>
                    <p className="text-[13px] text-slate-500 font-bold leading-relaxed">
                       Point your phone&apos;s camera at the QR code to quickly add our contact information. You can also use the &quot;Add to Contacts&quot; button below for fast saving.
                    </p>
                 </div>

                 {/* Subtle Paw Pattern (Bottom Right) */}
                 <div className="absolute right-0 bottom-0 w-32 h-32 opacity-[0.05] pointer-events-none translate-x-4 translate-y-4">
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-[#6366F1]">
                       <path d="M12,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM6,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,7c-2.21,0-4,1.79-4,4h8c0-2.21-1.79-4-4-4Z" />
                    </svg>
                 </div>
              </div>
           </section>

           {/* --- INQUIRIES SECTION --- */}
           <section className="relative pt-6 px-1">
              {/* Header with Decorative Icon */}
              <div className="flex items-center justify-center gap-4 mb-10 relative">
                 <div className="absolute -left-6 -top-10 w-24 h-24 opacity-90 -rotate-12 z-10 pointer-events-none">
                    {/* Pet Clinic House Icon Helper */}
                    <div className="w-full h-full relative flex items-center justify-center">
                       <div className="absolute bottom-0 w-16 h-16 bg-[#6366F1] rounded-b-md shadow-lg" />
                       <div className="absolute bottom-16 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[40px] border-b-[#D1D5DB]" />
                       <div className="absolute bottom-16 w-0 h-0 border-l-[36px] border-r-[36px] border-b-[36px] border-b-[#E5E7EB]" />
                       <div className="absolute bottom-0 w-10 h-12 bg-[#1E1B4B] rounded-t-full" />
                       <div className="absolute bottom-8 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
                             <path d="M12,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM6,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,7c-2.21,0-4,1.79-4,4h8c0-2.21-1.79-4-4-4Z" />
                          </svg>
                       </div>
                    </div>
                 </div>
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
                 <h2 className="text-3xl font-black text-[#1E293B] tracking-tight whitespace-nowrap">Inquiries</h2>
                 <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent flex-1" />
              </div>

              {/* Inquiry Form Card */}
              <div className="bg-white border border-[#ECECFE] rounded-[32px] p-6 shadow-sm relative overflow-hidden">
                 <div className="space-y-4 relative z-10">
                    <div className="space-y-3">
                       <input type="text" placeholder="Your Name" className="w-full h-14 px-6 bg-[#F8F7FF] border border-[#ECECFE] rounded-[24px] focus:ring-2 focus:ring-[#6366F1]/20 focus:border-[#6366F1] outline-none text-[#1E293B] font-bold placeholder:text-slate-400 transition-all shadow-inner" />
                       <input type="email" placeholder="Email Address" className="w-full h-14 px-6 bg-[#F8F7FF] border border-[#ECECFE] rounded-[24px] focus:ring-2 focus:ring-[#6366F1]/20 focus:border-[#6366F1] outline-none text-[#1E293B] font-bold placeholder:text-slate-400 transition-all shadow-inner" />
                       <input type="tel" placeholder="Enter Phone Number" className="w-full h-14 px-6 bg-[#F8F7FF] border border-[#ECECFE] rounded-[24px] focus:ring-2 focus:ring-[#6366F1]/20 focus:border-[#6366F1] outline-none text-[#1E293B] font-bold placeholder:text-slate-400 transition-all shadow-inner" />
                       <textarea placeholder="Type a message here..." rows={4} className="w-full px-6 py-4 bg-[#F8F7FF] border border-[#ECECFE] rounded-[24px] focus:ring-2 focus:ring-[#6366F1]/20 focus:border-[#6366F1] outline-none text-[#1E293B] font-bold placeholder:text-slate-400 transition-all shadow-inner resize-none" />
                    </div>

                    <div className="bg-[#F8F7FF] border-2 border-dashed border-[#ECECFE] rounded-[24px] p-6 flex flex-col items-center gap-3 cursor-pointer group transition-all hover:border-[#6366F1] hover:bg-[#6366F1]/5">
                       <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-[#6366F1] group-hover:scale-110 transition-all">
                          <Upload size={22} />
                       </div>
                       <span className="text-slate-500 font-bold group-hover:text-[#6366F1]">Choose File to upload</span>
                    </div>

                    <div className="px-1 flex justify-between items-center">
                       <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Files Supported: JPG, PNG, JPEG</p>
                    </div>

                    <button className="w-full h-16 bg-[#6366F1] text-white rounded-[24px] font-black text-[18px] shadow-xl shadow-[#6366F1]/30 hover:bg-[#4F46E5] transition-all active:scale-95 flex items-center justify-center">
                       Send Message
                    </button>
                 </div>

                 {/* Subtle Paw Pattern (Bottom Right) */}
                 <div className="absolute right-0 bottom-0 w-32 h-32 opacity-[0.05] pointer-events-none translate-x-4 translate-y-4">
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-[#6366F1]">
                       <path d="M12,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM6,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm6,7c-2.21,0-4,1.79-4,4h8c0-2.21-1.79-4-4-4Z" />
                    </svg>
                 </div>
              </div>

              {/* Decorative Band-aid (Bottom Left) */}
              <div className="absolute -left-4 -bottom-4 w-12 h-12 opacity-80 rotate-45 pointer-events-none">
                 <div className="w-full h-full bg-white rounded-lg border border-slate-100 flex flex-wrap gap-1 p-2 shadow-sm">
                    {[...Array(4)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#6366F1]/20" />)}
                 </div>
              </div>
           </section>

           {/* Core Actions */}
           <div className="space-y-4">
              <button 
                 onClick={() => onDownloadVCard?.()}
                 className="w-full h-16 bg-[#6366F1] text-white rounded-2xl font-black text-lg shadow-xl shadow-[#6366F1]/30 hover:bg-[#4F46E5] transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                 <Download size={22} />
                 SAVE TO CONTACTS
              </button>
           </div>

        </div>

                 {/* Minimal Footer */}
         <footer className="py-12 border-t border-slate-100/60 flex flex-col items-center gap-4 bg-white">
            <p className="text-[#6366F1] font-black text-[15px] tracking-tight hover:scale-105 transition-transform cursor-pointer">
               Made By vCard Builder
            </p>
            <div className="flex flex-col items-center gap-2">
               <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#6366F1] flex items-center justify-center text-white shadow-sm shadow-[#6366F1]/20">
                     <Heart size={10} fill="currentColor" />
                  </div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.5em] opacity-80">
                     Healthy Pets Â· Happy Life
                  </span>
               </div>
               {/* Fixed Name variable usage if needed, or just hardcode generic if props are tricky, but 'name' is available in scope */}
               <p className="text-[9px] text-slate-300 font-bold opacity-60">Â© {new Date().getFullYear()} {typeof name !== 'undefined' ? name : 'PetCare'}</p>
            </div>
         </footer>

      </div>
    </div>
  );
}
// Minimal Social Icon Helper for Small Containers
function SocialIconSmall({ platform }: { platform: string }) {
  const Icon = getSocialIcon(platform);
  return <Icon size={18} />;
}
