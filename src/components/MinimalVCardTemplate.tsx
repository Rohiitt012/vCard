"use client";
import React from "react";
import Image from "next/image";
import { 
  Mail, Phone, MapPin, Globe, Cake, Calendar, Clock,
  ArrowLeft, ArrowRight, Download, Share2,
  Instagram, Facebook, Linkedin, Twitter, Youtube, MessageCircle,
  Gem, Sparkles, LayoutGrid, Music, Mic2, Star
} from "lucide-react";

import { VCardSocialLinks } from "@/components/VCardSocialLinks";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { getSocialIcon } from "@/lib/social-icons";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

/** Minimal vCard Template - Redesigned with 'The Misfits' aesthetic */
export function MinimalVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "The Misfits";
  const role = card.occupation || card.tagline || "Musician";
  const bio = card.description || "Join us for an unforgettable evening as the maestro of melodies takes the stage, weaving magic with his soulful voice and timeless hits. Don't miss this extraordinary musical journey—mark your calendar and be part of the enchantment! 🌟";
  const tagline = card.tagline || "Bringing Indian Tunes To Life.";

  const heroSrc = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200";

  return (
    <div className="min-h-screen bg-white flex justify-center py-0 sm:py-12 px-0 sm:px-4 font-sans selection:bg-purple-500/10 overflow-x-hidden">
      <style jsx global>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .sunburst-bg {
          background: repeating-conic-gradient(
            from 0deg,
            #A855F7 0deg 2deg,
            transparent 2deg 10deg
          );
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-premium {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="w-full max-w-[500px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col relative sm:rounded-[48px] border border-gray-100">
        
        {/* 1. Header Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md px-6 py-5 border-b border-gray-100 flex items-center justify-between">
           <span className="text-xl font-black tracking-tighter">minimal</span>
           <div className="flex gap-5 overflow-x-auto no-scrollbar whitespace-nowrap px-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
              <span className="text-black">About</span>
              <span>Feature</span>
              <span>Pricing</span>
              <span>Clients</span>
           </div>
        </nav>

        {/* 2. Hero Image Section */}
        <section className="relative w-full py-12 px-8 flex flex-col gap-10">
           <div className="flex flex-col gap-4 animate-premium">
              <h1 className="text-[64px] font-black text-[#0F172A] leading-[0.9] tracking-tighter">
                Want<br/>anything<br/>to be<br/>easy<br/>with<br/>minimal<br/>vcard.
              </h1>
              <p className="text-sm font-medium text-gray-500 max-w-[280px] leading-relaxed">
                 {card.description || "Provide a network for all your needs with ease and fun. Discover interesting features."}
              </p>
           </div>

           {/* Hero Person Photo - Image 1 Style */}
           <div className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl animate-premium [animation-delay:200ms]">
              <Image 
                src={card.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800"} 
                alt={name} 
                fill 
                className="object-cover"
                unoptimized
              />
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                 <span className="text-white text-xs font-black tracking-widest uppercase">PIMJO</span>
              </div>
           </div>
        </section>

        {/* 3. Violet Identity Block (The Misfits Style) */}
        <section className="px-6 py-10 relative z-30 animate-premium [animation-delay:300ms]">
           <div className="bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] p-8 rounded-[40px] shadow-[0_40px_80px_rgba(109,40,217,0.3)] flex flex-col gap-8 relative overflow-hidden">
              {/* Abstract Waves Decoration */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <svg className="w-full h-full" viewBox="0 0 400 400">
                    <path d="M0,200 Q100,100 200,200 T400,200" fill="none" stroke="white" strokeWidth="40" />
                    <path d="M0,250 Q100,150 200,250 T400,250" fill="none" stroke="white" strokeWidth="40" />
                 </svg>
              </div>

              <div className="flex items-center gap-6 relative z-10">
                 {/* Profile/Logo Container */}
                 <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center shadow-2xl overflow-hidden shrink-0 transform -rotate-3 group-hover:rotate-0 transition-transform">
                    <div className="relative w-16 h-16">
                       <svg viewBox="0 0 100 100" className="w-full h-full text-purple-600 fill-current">
                          <path d="M50 10 Q70 10 70 30 Q70 50 50 50 Q30 50 30 70 Q30 90 50 90" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                          <circle cx="50" cy="50" r="10" />
                          <rect x="40" y="70" width="20" height="15" rx="5" />
                       </svg>
                    </div>
                 </div>

                 {/* Identity Info */}
                 <div className="flex-1">
                    <h2 className="text-3xl font-black text-white leading-tight mb-2">{name}</h2>
                    <p className="text-purple-200 text-xs font-black underline decoration-purple-400 underline-offset-8 mb-4">{tagline}</p>
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[10px] font-bold uppercase tracking-widest">
                       {role}
                    </span>
                 </div>

                 {/* Grid Menu Button */}
                 <div className="w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl flex items-center justify-center text-white shadow-2xl cursor-pointer hover:bg-white/30 transition-all hover:scale-105 active:scale-95">
                    <LayoutGrid size={28} />
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Bio Section with Musical Iconography */}
        <section className="bg-white px-10 py-12 text-center relative overflow-hidden">
           <div className="flex items-center justify-center gap-3 mb-8 animate-premium [animation-delay:400ms]">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                 <Music size={20} />
              </div>
              <h3 className="text-base font-black text-[#0F172A] tracking-tight">Experience the Magic of Arijit Sharma Live! 🎤</h3>
           </div>
           
           <p className="text-[15px] font-medium text-gray-400 leading-relaxed mb-12 max-w-[340px] mx-auto animate-premium [animation-delay:500ms]">
              {bio}
           </p>

           {/* 5. Sunburst Social Icons (Image 2 Style) */}
           <div className="flex flex-col items-center animate-premium [animation-delay:600ms] relative w-full">
              <VCardSocialLinks 
                  card={card} 
                  layout="vertical" 
                  variant="circular" 
                  iconSize={22}
                  itemClassName="w-full max-w-[400px] h-16 bg-white border-2 border-purple-50 rounded-[28px] hover:border-purple-600 hover:scale-[1.02] transition-all shadow-sm flex items-center p-4"
              />
              
            {/* Floating Decorative Elements */}
            <div className="absolute -left-12 top-0 animate-float opacity-40">
               <svg className="w-12 h-12 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,6V12L16,16L17.5,14.5L14,11V6H12Z" />
               </svg>
            </div>
         </div>
        </section>

        {/* 6. Wavy Divider Transition Top */}
        <div className="relative h-24 -mb-1 z-20">
           <svg className="w-full h-full fill-purple-700" preserveAspectRatio="none" viewBox="0 0 1440 320">
              <path d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,96C960,96,1056,160,1152,186.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
        </div>

        {/* 7. Contacts Section - Glassmorphism Style */}
        <section className="bg-purple-700 relative py-12 px-6 overflow-hidden">
           {/* Concert Overlay Background */}
           <div className="absolute inset-0 opacity-40 mix-blend-overlay">
              <Image 
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200"
                alt="Concert Background"
                fill
                className="object-cover"
                unoptimized
              />
           </div>

           <div className="relative z-10 flex flex-col items-center">
              <div className="mb-10 text-center">
                 <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Contacts</h3>
                 <div className="w-12 h-1 bg-white/40 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-2 gap-4 w-full">
                 {[
                   { icon: Mail, value: card.email || "a.sharma@gmail.com" },
                   { icon: Mail, value: "aaravsharma@ymail.com" },
                   { icon: Phone, value: card.phone || "+918527419630" },
                   { icon: Phone, value: "+919638527410" },
                   { icon: Cake, value: "12th June, 1990" },
                   { icon: MapPin, value: "India, Mumbai" },
                 ].map((item, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-3 shadow-lg group hover:bg-white/20 transition-all">
                       <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-purple-700 shadow-md shrink-0">
                          <item.icon size={16} />
                       </div>
                       <span className="text-[11px] font-black text-white truncate tracking-tight">{item.value}</span>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 8. Wavy Divider Transition Bottom */}
        <div className="relative h-24 -mt-1 z-20">
           <svg className="w-full h-full fill-white" preserveAspectRatio="none" viewBox="0 0 1440 320" transform="scale(1, -1)">
              <path d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,96C960,96,1056,160,1152,186.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
        </div>

        {/* 9. Gallery Section */}
        <section className="bg-white py-16 px-8 relative overflow-hidden">
           {/* Piano Decoration Left */}
           {/* Piano Decoration Left */}
           <div className="absolute left-[-10px] top-4 w-28 h-20 opacity-90">
              <Image 
                src="https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=400"
                alt="Piano Keys"
                fill
                className="object-contain"
                unoptimized
              />
           </div>

           <div className="flex flex-col items-center w-full">
              <h3 className="text-3xl font-black text-purple-600 mb-2">Gallery</h3>
              <div className="w-12 h-1 bg-purple-300 rounded-full mb-10" />

              {/* Carousel Slider */}
              <div className="relative w-full flex items-center justify-center gap-3 px-2">

                 {/* Left Arrow */}
                 <div className="shrink-0 w-10 h-20 rounded-2xl border-2 border-purple-500 flex items-center justify-center text-purple-500 cursor-pointer hover:bg-purple-50 transition-colors shadow-md">
                    <ArrowLeft size={20} />
                 </div>

                 {/* Center Card */}
                 <div className="flex-1 aspect-video relative rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(109,40,217,0.3)] border-2 border-purple-500 group">
                    <Image
                      src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800"
                      alt="Concert Gallery"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    {/* Fullscreen Button Top Right */}
                    <div className="absolute top-3 right-3 w-9 h-9 bg-purple-600 rounded-xl flex items-center justify-center text-white cursor-pointer shadow-lg hover:bg-purple-500 transition-colors">
                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                       </svg>
                    </div>
                    {/* Fullscreen Button Top Left */}
                    <div className="absolute top-3 left-3 w-9 h-9 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition-colors">
                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                       </svg>
                    </div>
                 </div>

                 {/* Right Arrow */}
                 <div className="shrink-0 w-10 h-20 rounded-2xl border-2 border-purple-500 flex items-center justify-center text-purple-500 cursor-pointer hover:bg-purple-50 transition-colors shadow-md">
                    <ArrowRight size={20} />
                 </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center gap-2.5 mt-8">
                 {[0,1,2,3,4].map((i) => (
                    <div key={i} className={`rounded-full transition-all duration-300 ${i === 1 ? 'w-7 h-3 bg-purple-600' : 'w-3 h-3 bg-gray-200 hover:bg-purple-200'}`} />
                 ))}
              </div>
           </div>
        </section>

        {/* Our Services Section - Header with Treble Clef Decoration */}
        <section className="bg-white pt-10 pb-6 px-8 relative overflow-visible">
           {/* Treble Clef Decoration Right */}
           <div className="absolute right-2 top-[-20px] w-20 h-24 opacity-90 pointer-events-none z-10">
              <Image 
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=300"
                alt="Musical Clef"
                fill
                className="object-contain"
                unoptimized
              />
           </div>

           <div className="flex flex-col items-center">
              <h3 className="text-3xl font-black text-purple-600 mb-2">Our Services</h3>
              <div className="w-12 h-1 bg-purple-300 rounded-full mb-8" />
           </div>
        </section>

        {/* Our Services Cards Grid */}
        <section className="bg-white px-6 pb-14">
           <div className="grid grid-cols-2 gap-5">
              {[
                {
                  title: "Music Production",
                  desc: "Transforming ideas into soundscapes, one beat at a time. Where creativity meets the rhythm of innovation in every track.",
                  img: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=600"
                },
                {
                  title: "Performance And Booking",
                  desc: "Bringing unforgettable live experiences to your stage, every time. Book the energy, feel the vibe – your next performance starts here.",
                  img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=600"
                },
                {
                  title: "Live Drumming",
                  desc: "Powerful rhythms that drive the crowd. Our live drumming brings raw energy to every performance and event.",
                  img: "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=600"
                },
                {
                  title: "Sound Mixing",
                  desc: "Precision audio blending for the perfect sound. Professional mixing straight from the studio to your ears.",
                  img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600"
                }
              ].map((service, i) => (
                <div key={i} className="group rounded-[28px] overflow-hidden border-2 border-purple-500 shadow-[0_8px_30px_rgba(109,40,217,0.15)] hover:shadow-[0_16px_40px_rgba(109,40,217,0.25)] hover:scale-[1.02] transition-all cursor-pointer">
                   {/* Photo Top */}
                   <div className="relative aspect-square w-full overflow-hidden">
                      <Image 
                        src={service.img}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                   </div>
                   {/* Purple Text Area Bottom */}
                   <div className="bg-purple-600 p-4 text-center">
                      <h4 className="text-[13px] font-black text-white leading-tight mb-2">{service.title}</h4>
                      <p className="text-[10px] font-medium text-purple-200 leading-relaxed">{service.desc}</p>
                   </div>
                </div>
              ))}
           </div>

           {/* Extra 2 Service Cards (Row 3) */}
           <div className="grid grid-cols-2 gap-5 mt-5">
              {[
                {
                  title: "Financial Services",
                  desc: "Royalty tracking, budgeting, income planning, and tax guidance for artists.",
                  img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600"
                },
                {
                  title: "Songwriting & Composition",
                  desc: "Original lyrics and melodies tailored for artists, ads, and films.",
                  img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=600"
                }
              ].map((service, i) => (
                <div key={i} className="group rounded-[28px] overflow-hidden border-2 border-purple-500 shadow-[0_8px_30px_rgba(109,40,217,0.15)] hover:shadow-[0_16px_40px_rgba(109,40,217,0.25)] hover:scale-[1.02] transition-all cursor-pointer">
                   <div className="relative aspect-square w-full overflow-hidden">
                      <Image 
                        src={service.img}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                   </div>
                   <div className="bg-purple-600 p-4 text-center">
                      <h4 className="text-[13px] font-black text-white leading-tight mb-2">{service.title}</h4>
                      <p className="text-[10px] font-medium text-purple-200 leading-relaxed">{service.desc}</p>
                   </div>
                </div>
              ))}
           </div>

           {/* Decorative Instrument Bottom Left */}
           <div className="relative h-16 mt-6">
              <div className="absolute left-[-10px] bottom-0 w-20 h-20 opacity-90">
                 <Image
                   src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=200"
                   alt="Music Decor"
                   fill
                   className="object-contain"
                   unoptimized
                 />
              </div>
           </div>
        </section>

        {/* Wavy Top Transition → Purple */}
        <div className="relative h-20 -mb-1 z-10 bg-white">
           <svg className="w-full h-full fill-purple-600" preserveAspectRatio="none" viewBox="0 0 1440 320">
              <path d="M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,218.7C672,192,768,160,864,160C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L0,320Z" />
           </svg>
        </div>

        {/* Make an Appointment Section */}
        <section className="relative bg-purple-600 py-14 px-6 overflow-hidden">
           {/* Concert Background Overlay */}
           <div className="absolute inset-0 opacity-30">
              <Image
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200"
                alt="Concert Bg"
                fill
                className="object-cover"
                unoptimized
              />
           </div>

           <div className="relative z-10 flex flex-col items-center">
              {/* Title */}
              <h3 className="text-3xl font-black text-white mb-3 text-center">Make an Appointment</h3>
              <div className="w-20 h-1 bg-white/50 rounded-full mb-10" />

              {/* Date Picker Pill */}
              <div className="w-full max-w-sm bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl px-5 py-4 flex items-center justify-between shadow-xl">
                 <span className="text-white/70 text-sm font-bold">Pick a Date</span>
                 <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white">
                    <Calendar size={20} />
                 </div>
              </div>
           </div>
        </section>

        {/* Wavy Bottom Transition → White */}
        <div className="relative h-20 -mt-1 z-10 bg-white">
           <svg className="w-full h-full fill-purple-600" preserveAspectRatio="none" viewBox="0 0 1440 320" style={{transform: "scaleY(-1)"}}>
              <path d="M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,218.7C672,192,768,160,864,160C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L0,320Z" />
           </svg>
        </div>

        {/* Products Section */}
        <section className="bg-white px-6 pt-10 pb-14 relative overflow-visible">
           {/* Cello/Violin Decoration Top Right */}
           <div className="absolute right-2 top-[-10px] w-16 h-28 opacity-90 pointer-events-none z-10">
              <Image
                src="https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=200"
                alt="Cello Decor"
                fill
                className="object-contain"
                unoptimized
              />
           </div>

           {/* Section Header */}
           <div className="flex flex-col items-center mb-10">
              <h3 className="text-3xl font-black text-purple-600 mb-2">Products</h3>
              <div className="w-12 h-1 bg-purple-300 rounded-full" />
           </div>

           {/* Products Grid */}
           <div className="grid grid-cols-2 gap-5">
              {[
                {
                  name: "Album Launch Package",
                  price: "₹ 45,000.00",
                  img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600"
                },
                {
                  name: "Pro Production Package",
                  price: "₹ 20,000.00",
                  img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600"
                }
              ].map((product, i) => (
                <div key={i} className="group rounded-[28px] overflow-hidden border-2 border-purple-500 shadow-[0_8px_30px_rgba(109,40,217,0.15)] hover:shadow-[0_16px_40px_rgba(109,40,217,0.3)] hover:scale-[1.02] transition-all cursor-pointer">
                   {/* Product Photo */}
                   <div className="relative aspect-square w-full overflow-hidden">
                      <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                   </div>
                   {/* Purple Info Panel */}
                   <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-4">
                      <p className="text-[13px] font-black text-white mb-3 leading-tight">{product.name}</p>
                      <p className="text-[15px] font-black text-white underline decoration-white/40 underline-offset-4 tracking-tight">{product.price}</p>
                   </div>
                </div>
              ))}
           </div>

           {/* View More Products Button */}
           <div className="flex justify-center mt-10">
              <button className="px-10 py-4 bg-gradient-to-r from-purple-700 to-purple-500 text-white font-black text-sm rounded-full shadow-xl shadow-purple-300 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                 View More Products →
              </button>
           </div>

           {/* Drums/Bongo Decoration Bottom Left */}
           <div className="absolute left-2 bottom-[-10px] w-20 h-20 opacity-90 pointer-events-none">
              <Image
                src="https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=200"
                alt="Drums Decor"
                fill
                className="object-contain"
                unoptimized
              />
           </div>
        </section>

        {/* Wavy Top Transition → Purple Testimonials */}
        <div className="relative h-20 -mb-1 z-10 bg-white">
           <svg className="w-full h-full fill-purple-700" preserveAspectRatio="none" viewBox="0 0 1440 320">
              <path d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,128C672,117,768,139,864,160C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L0,320Z" />
           </svg>
        </div>

        {/* Testimonials Section */}
        <section className="relative bg-purple-700 py-14 px-6 overflow-hidden">
           {/* Concert Background Overlay */}
           <div className="absolute inset-0 opacity-25">
              <Image
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200"
                alt="Concert Background"
                fill
                className="object-cover"
                unoptimized
              />
           </div>

           <div className="relative z-10 flex flex-col items-center">
              {/* Title */}
              <h3 className="text-3xl font-black text-white mb-3 text-center">Testimonials</h3>
              <div className="w-20 h-1 bg-white/40 rounded-full mb-10" />

              {/* Testimonial Card */}
              <div className="w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] p-8 shadow-2xl flex flex-col items-center text-center gap-5">
                 {/* Avatar */}
                 <div className="w-20 h-20 rounded-full border-4 border-purple-400 overflow-hidden shadow-xl relative">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
                      alt="Ankit Deshpande"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                 </div>

                 {/* Name */}
                 <h4 className="text-lg font-black text-white underline decoration-white/40 underline-offset-4">
                    Ankit Deshpande
                 </h4>

                 {/* Quote */}
                 <p className="text-[13px] font-medium text-purple-100 leading-relaxed max-w-xs">
                    " As a classical tabla player, I always looked for ways to reach a younger audience. This space helped me blend tradition with technology. The response has been incredible!""
                 </p>
              </div>
           </div>
        </section>

        {/* Wavy Bottom Transition → White */}
        <div className="relative h-20 -mt-1 z-10">
           <svg className="w-full h-full fill-purple-700" preserveAspectRatio="none" viewBox="0 0 1440 320" style={{transform: "scaleY(-1)"}}>
              <path d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,128C672,117,768,139,864,160C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L0,320Z" />
           </svg>
        </div>

        {/* Blog Section Header */}
        <section className="bg-white px-6 pt-12 pb-4 relative overflow-visible">
           {/* Djembe Drum Decoration Left */}
           <div className="absolute left-2 top-[-10px] w-14 h-24 opacity-90 pointer-events-none z-10">
              <Image
                src="https://images.unsplash.com/photo-1605020420620-20c943cc4669?q=80&w=200"
                alt="Djembe Drum"
                fill
                className="object-contain"
                unoptimized
              />
           </div>

           <div className="flex flex-col items-center">
              <h3 className="text-3xl font-black text-purple-600 mb-2">Blog</h3>
              <div className="w-8 h-1 bg-purple-400 rounded-full mb-8" />
           </div>
        </section>

        {/* Blog Cards Carousel */}
        <section className="bg-white pb-10 relative overflow-visible">

           {/* Horizontal Scroll Cards */}
           <div className="relative w-full overflow-hidden">
              <div className="flex overflow-x-auto gap-5 px-10 no-scrollbar snap-x snap-mandatory pb-4">
                 {[
                   {
                     title: "Performing & Sharing",
                     excerpt: "A musician's gift shines brightest when shared. Perform in local cafes, upload your covers, share your originals on social platforms,...",
                     img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800"
                   },
                   {
                     title: "Finding Your Sound",
                     excerpt: "Before you can share your music, you must discover what makes your voice unique. Experiment with genres, instruments and emotions...",
                     img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800"
                   },
                   {
                     title: "Studio Secrets",
                     excerpt: "What happens inside the recording booth stays the soul of the song. Learn the tools top producers use to get that perfect sound...",
                     img: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=800"
                   }
                 ].map((blog, i) => (
                    <div key={i} className="flex-none w-[80%] rounded-[28px] overflow-hidden border-2 border-purple-500 shadow-[0_8px_30px_rgba(109,40,217,0.2)] snap-center group">
                       {/* Photo */}
                       <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <Image
                            src={blog.img}
                            alt={blog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            unoptimized
                          />
                       </div>
                       {/* Purple Info Panel */}
                       <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-5">
                          <h4 className="text-base font-black text-white mb-3 leading-tight">{blog.title}</h4>
                          <p className="text-[11px] font-medium text-purple-200 leading-relaxed mb-4 line-clamp-2">{blog.excerpt}</p>
                          <div className="flex justify-end">
                             <button className="px-5 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-[11px] font-black hover:bg-white/30 transition-all flex items-center gap-2">
                                Read More →
                             </button>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Pagination Dots */}
           <div className="flex items-center justify-center gap-2.5 mt-4">
              {[0,1,2,3].map((i) => (
                 <div key={i} className={`rounded-full transition-all duration-300 ${i === 1 ? 'w-8 h-3 bg-purple-600' : 'w-3 h-3 bg-gray-200'}`} />
              ))}
           </div>

           {/* Mic Decoration Bottom Right */}
           <div className="absolute right-2 bottom-6 w-12 h-16 opacity-90 pointer-events-none">
              <Image
                src="https://images.unsplash.com/photo-1605020420620-20c943cc4669?q=80&w=200"
                alt="Mic Decor"
                fill
                className="object-contain"
                unoptimized
              />
           </div>
        </section>

        {/* Wavy Purple Bottom Divider */}
        <div className="relative h-16 z-10 bg-white">
           <svg className="absolute bottom-0 w-full fill-purple-600" preserveAspectRatio="none" viewBox="0 0 1440 120">
              <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" />
           </svg>
           <svg className="absolute bottom-0 w-full fill-purple-400 opacity-60" preserveAspectRatio="none" viewBox="0 0 1440 120">
              <path d="M0,80 C240,20 480,120 720,80 C960,20 1200,100 1440,60 L1440,120 L0,120 Z" />
           </svg>
        </div>

        {/* Business Hours Section */}
        <section className="relative bg-purple-700 py-14 px-6 overflow-hidden">
           {/* Concert BG Overlay */}
           <div className="absolute inset-0 opacity-25">
              <Image
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200"
                alt="Concert Background"
                fill
                className="object-cover"
                unoptimized
              />
           </div>

           <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-3xl font-black text-white mb-3 text-center">Business Hours</h3>
              <div className="w-20 h-1 bg-white/40 rounded-full mb-10" />

              {/* Hours Grid - 2 columns */}
              <div className="grid grid-cols-2 gap-4 w-full mb-4">
                 {[
                   { day: "Monday", hours: "09:00 AM – 09:00 PM" },
                   { day: "Tuesday", hours: "09:00 AM – 09:00 PM" },
                   { day: "Wednesday", hours: "09:00 AM – 09:00 PM" },
                   { day: "Thursday", hours: "09:00 AM – 09:00 PM" },
                   { day: "Friday", hours: "09:00 AM – 09:00 PM" },
                   { day: "Saturday", hours: "09:00 AM – 09:00 PM" },
                 ].map((item, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl flex items-center gap-3 shadow-md hover:bg-white/20 transition-all">
                       <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-purple-700 shadow-md shrink-0">
                          <Calendar size={16} />
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-white leading-none mb-1">{item.day} :</p>
                          <p className="text-[9px] font-bold text-purple-200 leading-none">{item.hours}</p>
                       </div>
                    </div>
                 ))}
              </div>

              {/* Sunday - Centered at Bottom */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl flex items-center gap-3 shadow-md w-[60%] hover:bg-white/20 transition-all">
                 <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-purple-700 shadow-md shrink-0">
                    <Calendar size={16} />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-white leading-none mb-1">Sunday :</p>
                    <p className="text-[9px] font-bold text-purple-200 leading-none">09:00 AM – 09:00 PM</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Wavy Bottom Transition → White */}
        <div className="relative h-16 z-10">
           <svg className="absolute bottom-0 w-full fill-purple-700" preserveAspectRatio="none" viewBox="0 0 1440 120" style={{transform:"scaleY(-1)"}}>
              <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" />
           </svg>
           <svg className="absolute bottom-0 w-full fill-purple-400 opacity-50" preserveAspectRatio="none" viewBox="0 0 1440 120" style={{transform:"scaleY(-1)"}}>
              <path d="M0,80 C240,20 480,120 720,80 C960,20 1200,100 1440,60 L1440,120 L0,120 Z" />
           </svg>
        </div>

        {/* QR Code Section Header */}
        <section className="bg-white px-6 pt-10 pb-4 relative overflow-visible">
           {/* Trumpet Decoration Left */}
           <div className="absolute left-2 top-2 w-16 h-16 opacity-90 pointer-events-none z-10">
              <Image
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=200"
                alt="Trumpet"
                fill
                className="object-contain"
                unoptimized
              />
           </div>
           <div className="flex flex-col items-center">
              <h3 className="text-3xl font-black text-purple-600 mb-2">QR Code</h3>
              <div className="w-8 h-1 bg-purple-400 rounded-full mb-6" />
           </div>
        </section>

        {/* 7. Footer Action Profile (Image 2 Footer) */}
        <section className="px-8 pb-12 space-y-5">
           <button 
             onClick={onDownloadVCard}
             className="w-full h-16 bg-[#1E1B4B] text-white rounded-[32px] font-black text-lg shadow-2xl shadow-indigo-900/20 hover:scale-[1.02] active:scale-95 transition-all"
           >
              SAVE CONNECTION
           </button>
           
           <div className="flex gap-4">
              <a href={`tel:${card.phone || ""}`} className="flex-1 h-14 bg-gray-50 rounded-[24px] flex items-center justify-center gap-2 text-indigo-900 font-bold border border-gray-100 italic transition-colors hover:bg-gray-100">
                 <Phone size={18} />
                 CALL NOW
              </a>
              <div className="w-14 h-14 bg-[#1E1B4B] rounded-[24px] flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all">
                 <Share2 size={20} />
              </div>
           </div>
        </section>

        {/* Minimalist Studio Footer */}
        <footer className="py-12 flex flex-col items-center border-t border-gray-50">
           <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em] mb-4">Powered by Pimjo Studios</p>
           <div className="flex gap-6 opacity-20 grayscale">
              <Instagram size={14} />
              <Twitter size={14} />
              <Linkedin size={14} />
           </div>
        </footer>

      </div>
    </div>
  );
}
