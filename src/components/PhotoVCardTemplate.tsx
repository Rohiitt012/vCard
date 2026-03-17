"use client";
import React from "react";
import Image from "next/image";
import { 
  Mail, Phone, MapPin, Globe, Cake, Calendar, Clock,
  ArrowLeft, ArrowRight, Download, Share2, ExternalLink,
  Instagram, Facebook, Linkedin, Twitter, Youtube, MessageCircle,
  Heart, Sparkles
} from "lucide-react";
import { SocialCircleIcon } from "@/components/SocialCircleIcon";
import type { VCardItem } from "@/context/VCardsContextTypes";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function PhotoVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "Michael Vice";
  const role = card.occupation || card.tagline || "PHOTOGRAPHER";
  const bio = card.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  const profileImg = card.image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400";

  return (
    <div className="min-h-screen bg-[#F4F4F4] text-[#222222] font-sans flex justify-center px-0 py-0 overflow-x-hidden">
      <div className="w-full max-w-[500px] bg-white relative flex flex-col shadow-2xl">
        

        {/* Content Section (Light Cream) */}
        <section className="flex-1 bg-[#F4F4F4] px-8 pt-12 pb-20 relative">
           
           {/* Identity Row: Name (Left) + Circular Profile (Right) */}
           <div className="flex justify-between items-start mb-12">
              <div className="pt-8">
                 <h1 className="text-4xl font-black text-[#111111] mb-2 tracking-tight">
                    {name}
                 </h1>
                 <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">
                    {role}
                 </p>
              </div>

              {/* Profile Image with Curved Text */}
              <div className="relative w-48 h-48 shrink-0 flex items-center justify-center">
                 {/* Invisible circle path for text */}
                 <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 200 200">
                    <path
                       id="textCircle"
                       d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                       fill="none"
                    />
                    <text className="text-[17px] font-black uppercase tracking-[0.4em] fill-[#333333]">
                       <textPath xlinkHref="#textCircle">
                          CAPTURE · MOMENTS · CAPTURE · MOMENTS ·
                       </textPath>
                    </text>
                 </svg>

                 {/* Main Profile Photo */}
                 <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[#E5E5E5] shadow-lg z-10 transition-transform hover:scale-105">
                    <Image 
                       src={profileImg} 
                       alt={name} 
                       fill 
                       className="object-cover" 
                       unoptimized={profileImg.startsWith("https://images.unsplash.com") || profileImg.startsWith("data:")}
                    />
                 </div>
                 
                 {/* Decorative Dots */}
                 <div className="absolute top-[15%] right-[5%] w-2 h-2 bg-slate-900 rounded-full" />
                 <div className="absolute bottom-[15%] left-[5%] w-2 h-2 bg-slate-900 rounded-full" />
              </div>
           </div>

           {/* Social Icons (Hollow Minimalist Style) */}
           <div className="flex flex-wrap items-center gap-4 mb-14">
              {['facebook', 'whatsapp', 'linkedin', 'instagram', 'twitter'].map((platform, idx) => (
                 <div key={idx} className="w-14 h-14 rounded-full border border-slate-300 flex items-center justify-center text-slate-800 bg-white shadow-sm transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:scale-110 cursor-pointer">
                    <SocialIcon platform={platform} />
                 </div>
              ))}
           </div>

           {/* Description Text */}
           <div className="mb-14 px-2">
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                 {bio}
              </p>
           </div>

           {/* --- NEW SECTION: LENS & CONTACT DETAILS --- */}
           <div className="mb-14">
              <div className="border-t border-slate-300 w-full mb-10" />
              
              <div className="flex items-center gap-8">
                 {/* Large Camera Lens Illustration */}
                 <div className="relative w-48 h-48 shrink-0">
                    <Image
                       src="https://images.unsplash.com/photo-1617005082133-548c4dd27f35?q=80&w=600"
                       alt="Lens"
                       fill
                       className="object-contain drop-shadow-2xl"
                       unoptimized
                    />
                 </div>

                 {/* Contact Info List */}
                 <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                          <Mail className="text-white fill-current w-5 h-5" />
                       </div>
                       <span className="text-[15px] font-bold text-slate-900 tracking-tight">
                          {card.email || "michael@gmail.com"}
                       </span>
                    </div>

                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                          <Phone className="text-white fill-current w-5 h-5" />
                       </div>
                       <span className="text-[15px] font-bold text-slate-900 tracking-tight">
                          {card.phone || "+1 4078461474"}
                       </span>
                    </div>

                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                          <Cake className="text-white fill-current w-5 h-5" />
                       </div>
                       <span className="text-[15px] font-bold text-slate-900 tracking-tight">
                          {card.birthDate || "12th June, 1990"}
                       </span>
                    </div>

                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                          <MapPin className="text-white fill-current w-5 h-5" />
                       </div>
                       <span className="text-[15px] font-bold text-slate-900 tracking-tight">
                          {card.address || "New York, USA"}
                       </span>
                    </div>
                 </div>
              </div>

              <div className="border-t border-slate-300 w-full mt-10" />
           </div>
           {/* --- NEW SECTION: GALLERY CAROUSEL --- */}
           <div className="mb-14 relative group">
              <div className="flex justify-center mb-10">
                 <div className="px-10 py-3 rounded-full border-2 border-slate-900 bg-white shadow-sm">
                    <span className="text-xl font-black text-slate-900 tracking-tight">Gallery</span>
                 </div>
              </div>

              {/* Decorative Floating Camera */}
              <div className="absolute -top-6 -right-4 w-32 h-32 z-10 pointer-events-none">
                 <Image 
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400" 
                    alt="Camera" 
                    fill 
                    className="object-contain drop-shadow-2xl opacity-90 group-hover:rotate-12 transition-transform duration-500"
                    unoptimized
                 />
              </div>

              {/* Gallery Scroll Container */}
              <div className="relative flex items-center gap-6 overflow-hidden pb-10">
                 {/* Left Peek */}
                 <div className="min-w-[40%] aspect-[3/4] rounded-[32px] overflow-hidden opacity-40 -ml-[15%] shadow-xl">
                    <Image 
                       src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600" 
                       alt="Portrait 1" 
                       fill 
                       className="object-cover"
                       unoptimized
                    />
                 </div>

                 {/* Center Main Image */}
                 <div className="min-w-[70%] aspect-[4/5] rounded-[48px] overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] z-10 border-4 border-white">
                    <Image 
                       src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800" 
                       alt="Main Portrait" 
                       fill 
                       className="object-cover"
                       unoptimized
                    />
                 </div>

                 {/* Right Peek */}
                 <div className="min-w-[40%] aspect-[3/4] rounded-[32px] overflow-hidden opacity-40 shadow-xl">
                    <Image 
                       src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600" 
                       alt="Portrait 2" 
                       fill 
                       className="object-cover"
                       unoptimized
                    />
                 </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2">
                 {[0, 1, 2, 3, 4].map((dot) => (
                    <div 
                       key={dot} 
                       className={`w-2.5 h-2.5 rounded-full transition-all ${dot === 2 ? 'bg-black scale-125' : 'bg-slate-300'}`} 
                    />
                 ))}
              </div>
           </div>
           {/* ------------------------------------------------ */}

           {/* --- NEW SECTION: OUR SERVICES (Ref Image) --- */}
           <div className="mb-14">
              <div className="flex justify-center mb-10">
                 <div className="px-14 py-3 rounded-full border border-slate-900 bg-white shadow-sm">
                    <span className="text-xl font-black text-slate-900 tracking-tight">Our Services</span>
                 </div>
              </div>

              <div className="grid grid-cols-2 relative">
                 {/* Vertical Divider */}
                 <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-900" />
                 
                 {/* Wedding Service */}
                 <div className="pr-6 space-y-4">
                    <div className="w-12 h-12 flex items-center justify-center text-slate-900 group">
                       <Heart size={40} className="fill-current stroke-[1.5]" />
                    </div>
                    <div className="space-y-1">
                       <h3 className="text-lg font-black text-slate-900 tracking-tight leading-tight">Wedding Photoshoot</h3>
                       <p className="text-[13px] text-slate-500 leading-relaxed">
                          Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                       </p>
                    </div>
                 </div>

                 {/* Fashion Service */}
                 <div className="pl-6 space-y-4">
                    <div className="w-12 h-12 flex items-center justify-center text-slate-900">
                       <Sparkles size={40} className="fill-current stroke-[1.5]" />
                    </div>
                    <div className="space-y-1">
                       <h3 className="text-lg font-black text-slate-900 tracking-tight leading-tight">Fashion Photoshoot</h3>
                       <p className="text-[13px] text-slate-500 leading-relaxed">
                          Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
           {/* --- NEW SECTION: MAKE AN APPOINTMENT (Dark Theme) --- */}
           <div className="mb-14 -mx-8 bg-[#111111] relative overflow-hidden">
              {/* Background Vintage Camera Image */}
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-60">
                 <Image 
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800" 
                    alt="Vintage Camera" 
                    fill 
                    className="object-cover object-right"
                    unoptimized
                 />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 p-8 pt-12 pb-14 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-transparent">
                 <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-3xl font-black text-white tracking-tight">Make an Appointment</h2>
                    <div className="h-px bg-white/20 flex-1" />
                 </div>

                 <div className="max-w-[80%] space-y-4">
                    {/* Date Picker (Mock) */}
                    <div className="w-full h-14 rounded-full border border-white/20 px-6 flex items-center justify-between text-white/50 bg-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors">
                       <span className="text-sm font-bold tracking-wide">Pick a date</span>
                       <Calendar size={20} className="text-white" />
                    </div>

                    {/* Time Slots Grid */}
                    <div className="grid grid-cols-2 gap-3">
                       {Array(4).fill("8:10 - 20:00").map((slot, i) => (
                          <div key={i} className="h-14 rounded-3xl border border-white/20 flex items-center justify-center text-white font-bold text-sm bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer tracking-tight">
                             {slot}
                          </div>
                       ))}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                       <button className="w-full h-16 bg-[#F4F4F4] text-[#111111] rounded-full font-black text-lg shadow-2xl hover:bg-white transition-all active:scale-95">
                          Book Appointment
                       </button>
                    </div>
                 </div>
              </div>
           </div>
           {/* --- NEW SECTION: PRODUCTS (2-Column Grid) --- */}
           <div className="mb-14 px-2">
              <div className="flex justify-center items-center relative mb-12">
                 <div className="px-14 py-3 rounded-full border border-slate-900 bg-white shadow-sm z-10">
                    <span className="text-xl font-black text-slate-900 tracking-tight">Products</span>
                 </div>
                 
                 {/* Decorative Compass Image */}
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full overflow-hidden border-2 border-slate-200 shadow-lg">
                    <Image 
                       src="https://images.unsplash.com/photo-1548345680-f5475ee511d7?q=80&w=200" 
                       alt="Compass" 
                       fill 
                       className="object-cover"
                       unoptimized
                    />
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                 {/* Product 1: Digital Camera */}
                 <div className="space-y-4 group">
                    <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                       <Image 
                          src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=600" 
                          alt="Digital Camera" 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          unoptimized
                       />
                    </div>
                    <div className="space-y-1">
                       <div className="flex justify-between items-start">
                          <h3 className="text-lg font-black text-slate-900 leading-tight">Digital Camera</h3>
                          <span className="text-lg font-black text-slate-900 tracking-tight">$25.00</span>
                       </div>
                       <p className="text-[13px] text-slate-500 font-medium">Lorem Ipsum dummy text</p>
                    </div>
                 </div>

                 {/* Product 2: Camera Lens */}
                 <div className="space-y-4 group">
                    <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                       <Image 
                          src="https://images.unsplash.com/photo-1617005082133-548c4dd27f35?q=80&w=600" 
                          alt="Camera Lens" 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          unoptimized
                       />
                    </div>
                    <div className="space-y-1">
                       <div className="flex justify-between items-start">
                          <h3 className="text-lg font-black text-slate-900 leading-tight">Camera Lens</h3>
                          <span className="text-lg font-black text-slate-900 tracking-tight">$25.00</span>
                       </div>
                       <p className="text-[13px] text-slate-500 font-medium">Lorem Ipsum dummy text</p>
                    </div>
                 </div>
              </div>
           </div>
           {/* --- NEW SECTION: TESTIMONIALS (Ref Image) --- */}
           <div className="mb-14 relative px-2">
              <div className="flex justify-center mb-12">
                 <div className="px-14 py-3 rounded-full border border-slate-900 bg-white shadow-sm z-10">
                    <span className="text-xl font-black text-slate-900 tracking-tight">Testimonial</span>
                 </div>
              </div>

              {/* Decorative Tripod Element */}
              <div className="absolute -top-4 -left-6 w-36 h-36 opacity-30 pointer-events-none -rotate-12 translate-x-[-10%] translate-y-[-10%]">
                 <Image 
                    src="https://images.unsplash.com/photo-1590605272619-abb735aa2641?q=80&w=400" 
                    alt="Tripod Head" 
                    fill 
                    className="object-contain grayscale"
                    unoptimized
                 />
              </div>

              <div className="flex flex-col items-center text-center space-y-8">
                 {/* Identity Circle with Arrows */}
                 <div className="flex items-center gap-10">
                    <button className="text-slate-900 hover:scale-110 transition-transform">
                       <div className="w-10 h-0.5 bg-slate-900 relative">
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 border-l-2 border-t-2 border-slate-900 -rotate-45" />
                       </div>
                    </button>

                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-slate-200 shadow-xl">
                       <Image 
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400" 
                          alt="Testimonial Author" 
                          fill 
                          className="object-cover grayscale"
                          unoptimized
                       />
                    </div>

                    <button className="text-slate-900 hover:scale-110 transition-transform">
                       <div className="w-10 h-0.5 bg-slate-900 relative">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 border-r-2 border-t-2 border-slate-900 rotate-45" />
                       </div>
                    </button>
                 </div>

                 {/* Quote & Author */}
                 <div className="space-y-6 max-w-[90%] mx-auto">
                    <p className="text-sm font-medium text-slate-500 leading-relaxed italic">
                       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    </p>
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">
                       Richard Madden
                    </h4>
                 </div>
              </div>
           </div>
           {/* --- NEW SECTION: BLOG (Ref Image) --- */}
           <div className="mb-14 relative group">
              <div className="flex justify-center mb-10">
                 <div className="px-14 py-3 rounded-full border border-slate-900 bg-white shadow-sm">
                    <span className="text-xl font-black text-slate-900 tracking-tight">Blog</span>
                 </div>
              </div>

              {/* Decorative Floating Lens */}
              <div className="absolute -top-10 -right-6 w-32 h-32 z-10 pointer-events-none overflow-hidden rounded-full">
                 <Image 
                    src="https://images.unsplash.com/photo-1617005082133-548c4dd27f35?q=80&w=400" 
                    alt="Lens Ornament" 
                    fill 
                    className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700 -rotate-45"
                    unoptimized
                 />
              </div>

              {/* Blog Scroll Container */}
              <div className="relative flex items-center gap-6 overflow-hidden pb-10">
                 {/* Left Peek Post */}
                 <div className="min-w-[40%] aspect-[4/5] rounded-[24px] overflow-hidden opacity-40 -ml-[15%] shadow-xl relative">
                    <Image 
                       src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=600" 
                       alt="Blog 1" 
                       fill 
                       className="object-cover grayscale"
                       unoptimized
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                       <h5 className="text-white font-black text-sm">Lorem Ipsum</h5>
                    </div>
                 </div>

                 {/* Center Main Post */}
                 <div className="min-w-[70%] aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] z-10 relative">
                    <Image 
                       src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800" 
                       alt="Main Blog" 
                       fill 
                       className="object-cover grayscale"
                       unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                       <h5 className="text-white text-2xl font-black mb-3 tracking-tight">Lorem Ipsum</h5>
                       <p className="text-white/80 text-sm font-medium leading-relaxed line-clamp-2">
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking.
                       </p>
                    </div>
                 </div>

                 {/* Right Peek Post */}
                 <div className="min-w-[40%] aspect-[4/5] rounded-[24px] overflow-hidden opacity-40 shadow-xl relative">
                    <Image 
                       src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600" 
                       alt="Blog 2" 
                       fill 
                       className="object-cover grayscale"
                       unoptimized
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                       <h5 className="text-white font-black text-sm">Lorem Ipsum</h5>
                    </div>
                 </div>
              </div>
           </div>
           {/* --- NEW SECTION: BUSINESS HOURS (Ref Image) --- */}
           <div className="mb-14 px-2 relative min-h-[400px]">
              <div className="flex justify-center mb-12">
                 <div className="px-14 py-3 rounded-full border border-slate-900 bg-white shadow-sm z-10">
                    <span className="text-xl font-black text-slate-900 tracking-tight">Business Hours</span>
                 </div>
              </div>

              <div className="flex justify-between items-start">
                 {/* Hours List */}
                 <div className="w-1/2 space-y-4 pt-4">
                    {[
                      { day: "Sunday", time: "08:10 - 20:00" },
                      { day: "Monday", time: "08:10 - 20:00" },
                      { day: "Tuesday", time: "08:10 - 20:00" },
                      { day: "Wednesday", time: "08:10 - 20:00" },
                      { day: "Thursday", time: "08:10 - 20:00" },
                      { day: "Friday", time: "08:10 - 20:00" },
                      { day: "Saturday", time: "Closed" }
                    ].map((item, idx) => (
                       <div key={idx} className="flex justify-between items-center text-slate-900">
                          <span className="text-lg font-black tracking-tight">{item.day} :</span>
                          <span className={`${item.time === "Closed" ? "text-slate-900" : "text-slate-900"} text-lg font-black tracking-tight`}>
                             {item.time}
                          </span>
                       </div>
                    ))}
                 </div>

                 {/* Camera on Tripod Image */}
                 <div className="absolute right-[-20%] bottom-0 w-[65%] h-[450px] pointer-events-none z-0">
                    <Image 
                       src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000" 
                       alt="Camera on Tripod" 
                       fill 
                       className="object-contain drop-shadow-2xl"
                       unoptimized
                    />
                 </div>
              </div>
           </div>
           {/* --- NEW SECTION: QR CODE (Dark Theme) --- */}
           <div className="mb-14 -mx-8 bg-black py-16 px-8 relative overflow-hidden">
              {/* Section Header with Lines */}
              <div className="flex items-center gap-4 mb-14">
                 <div className="h-px bg-white/20 flex-1" />
                 <h2 className="text-3xl font-black text-white tracking-tight uppercase">QR Code</h2>
                 <div className="h-px bg-white/20 flex-1" />
              </div>

              <div className="flex items-center justify-center gap-12 mb-14">
                 {/* Identity Circle (Left) - Reusing Curved Text Motif */}
                 <div className="relative w-48 h-48 shrink-0 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 200 200">
                       <path
                          id="qrTextCircle"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                          fill="none"
                       />
                       <text className="text-[17px] font-black uppercase tracking-[0.4em] fill-white">
                          <textPath xlinkHref="#qrTextCircle">
                             CAPTURE · MOMENTS · CAPTURE · MOMENTS ·
                          </textPath>
                       </text>
                    </svg>

                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl z-10 bg-[#C08C5D]">
                       <Image 
                          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400" 
                          alt="Photographer" 
                          fill 
                          className="object-cover"
                          unoptimized
                       />
                    </div>
                    {/* Decorative Dot */}
                    <div className="absolute top-[10%] right-[10%] w-2 h-2 bg-white rounded-full z-20 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                 </div>

                 {/* QR Code Container (Right) */}
                 <div className="relative w-52 h-52 bg-white p-4 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center group overflow-hidden">
                    <div className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-full h-full">
                       <Image 
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${baseUrl}/${slug}`} 
                          alt="VCard QR Code" 
                          fill 
                          className="object-contain"
                          unoptimized
                       />
                    </div>
                 </div>
              </div>

              {/* Download Button */}
              <div className="flex justify-center">
                 <button className="w-full max-w-[340px] h-16 bg-[#F4F4F4] text-black rounded-full font-black text-lg shadow-xl hover:bg-white hover:scale-[1.02] transition-all active:scale-95">
                    Download My QR Code
                 </button>
              </div>
           </div>
           {/* --- NEW SECTION: CONTACT US (Ref Image) --- */}
           <div className="mb-14 relative px-2">
              {/* Decorative Gear (Top Left) */}
              <div className="absolute -top-12 -left-6 w-32 h-32 opacity-80 pointer-events-none rotate-[15deg]">
                 <Image 
                    src="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=400" 
                    alt="Camera Gear" 
                    fill 
                    className="object-contain grayscale"
                    unoptimized
                 />
              </div>

              <div className="flex justify-center mb-12">
                 <div className="px-14 py-3 rounded-full border border-slate-900 bg-white shadow-sm z-10">
                    <span className="text-xl font-black text-slate-900 tracking-tight">Contact Us</span>
                 </div>
              </div>

              <div className="space-y-10 relative z-10">
                 <div className="grid grid-cols-2 gap-8">
                    <div className="relative">
                       <input 
                          type="text" 
                          placeholder="Full Name" 
                          className="w-full bg-transparent border-b border-slate-900 pb-2 text-[15px] font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
                       />
                    </div>
                    <div className="relative">
                       <input 
                          type="text" 
                          placeholder="Phone Number" 
                          className="w-full bg-transparent border-b border-slate-900 pb-2 text-[15px] font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
                       />
                    </div>
                 </div>

                 <div className="relative">
                    <input 
                       type="email" 
                       placeholder="Email Address" 
                       className="w-full bg-transparent border-b border-slate-900 pb-2 text-[15px] font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
                    />
                 </div>

                 <div className="relative">
                    <textarea 
                       placeholder="Your Message" 
                       rows={1}
                       className="w-full bg-transparent border-b border-slate-900 pb-2 text-[15px] font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 transition-colors resize-none"
                    />
                 </div>

                 <div className="flex justify-center pt-4">
                    <button className="w-full max-w-[340px] h-16 bg-black text-white rounded-full font-black text-lg shadow-xl hover:bg-slate-800 transition-all active:scale-95">
                       Send Message
                    </button>
                 </div>
              </div>

              {/* Decorative Gear (Bottom Right) */}
              <div className="absolute -bottom-10 -right-6 w-32 h-48 opacity-80 pointer-events-none">
                 <Image 
                    src="https://images.unsplash.com/photo-1590605272485-2c8aed8db384?q=80&w=400" 
                    alt="Monopod" 
                    fill 
                    className="object-contain grayscale"
                    unoptimized
                 />
              </div>
           </div>
           {/* ----------------------------------------------- */}

           {/* --- NEW SECTION: CREATE YOUR VCARD & ADD TO CONTACT (Ref) --- */}
           <div className="mb-14 relative px-2">
              {/* CTA Banner */}
              <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mb-10 group">
                 <Image 
                    src="https://images.unsplash.com/photo-1542038783-0ad457d23695?q=80&w=1200" 
                    alt="Create VCard Background" 
                    fill 
                    className="object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-1000"
                    unoptimized
                 />
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h2 className="text-2xl font-black text-white tracking-[0.3em] uppercase mb-6">Create Your VCard</h2>
                    <div className="w-full max-w-[400px] h-14 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-between px-6 text-white/90">
                       <span className="text-sm font-bold truncate pr-4">{baseUrl}/{slug}</span>
                       <ExternalLink size={18} />
                    </div>
                 </div>
              </div>

              {/* Final Add to Contact Row */}
              <div className="flex items-center justify-center relative py-10">
                 {/* Decorative Vintage Camera */}
                 <div className="absolute left-[-5%] w-32 h-32 pointer-events-none -translate-y-4">
                    <Image 
                       src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=400" 
                       alt="Vintage Camera" 
                       fill 
                       className="object-contain grayscale -rotate-12 opacity-90 drop-shadow-xl"
                       unoptimized
                    />
                 </div>

                 <button 
                    onClick={() => onDownloadVCard?.()}
                    className="w-full max-w-[300px] h-16 bg-black text-white rounded-full font-black text-lg shadow-xl hover:bg-slate-800 transition-all active:scale-95 z-10"
                 >
                    Add to Contact
                 </button>
              </div>
           </div>
           {/* ------------------------------------------------------------- */}

           {/* Core Actions (VCard Requirement) */}
           <div className="grid grid-cols-2 gap-4">
              <button 
                 onClick={() => onDownloadVCard?.()}
                 className="col-span-2 h-16 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                 <Download size={20} />
                 SAVE TO CONTACTS
              </button>
              
              <a href={`tel:${card.phone || ""}`} className="h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center gap-2 text-slate-900 font-bold transition-all hover:bg-slate-50 active:scale-95">
                 <Phone size={18} />
                 CALL NOW
              </a>
              
              <button className="h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center gap-2 text-slate-900 font-bold transition-all hover:bg-slate-50 active:scale-95">
                 <Share2 size={18} />
                 SHARE
              </button>
           </div>
        </section>

        {/* Minimal Footer */}
        <footer className="py-12 bg-[#F4F4F4] border-t border-slate-200 flex flex-col items-center">
           <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] italic">
              PHOTOGRAPHY PORTFOLIO · {new Date().getFullYear()}
           </span>
        </footer>

      </div>
    </div>
  );
}

// Minimal Social Icon Helper
function SocialIcon({ platform }: { platform: string }) {
  const p = platform.toLowerCase();
  const size = 20;
  if (p.includes("facebook")) return <Facebook size={size} />;
  if (p.includes("whatsapp")) return <MessageCircle size={size} />;
  if (p.includes("linkedin")) return <Linkedin size={size} />;
  if (p.includes("instagram")) return <Instagram size={size} />;
  if (p.includes("twitter")) return <Twitter size={size} />;
  if (p.includes("youtube")) return <Youtube size={size} />;
  return <Globe size={size} />;
}
