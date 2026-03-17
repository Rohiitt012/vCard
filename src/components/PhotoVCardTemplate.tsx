"use client";
import React from "react";
import Image from "next/image";
import { 
  Mail, Phone, MapPin, Globe, Cake, Calendar, Clock,
  ArrowLeft, ArrowRight, Download, Share2,
  Instagram, Facebook, Linkedin, Twitter, Youtube, MessageCircle,
  Gem, Sparkles, LayoutGrid, Music, Mic2, Star
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
  const name = card.title || "The Misfits";
  const role = card.occupation || card.tagline || "Musician";
  const bio = card.description || "Join us for an unforgettable evening as the maestro of melodies takes the stage, weaving magic with his soulful voice and timeless hits. Don't miss this extraordinary musical journey—mark your calendar and be part of the enchantment! 🌟";
  const tagline = card.tagline || "Bringing Indian Tunes To Life.";

  const avatarSrc = card.image || "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400";
  const heroSrc = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200";

  return (
    <div className="min-h-screen bg-white flex justify-center py-0 sm:py-12 px-0 sm:px-4 font-sans selection:bg-purple-500/10">
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
      `}</style>

      <div className="w-full max-w-[500px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col relative sm:rounded-[40px]">
        
        {/* 1. Header Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md px-6 py-4 border-b border-gray-100 flex items-center justify-between">
           <span className="text-lg font-black tracking-tighter">minimal</span>
           <div className="flex gap-4 overflow-x-auto no-scrollbar whitespace-nowrap px-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <span>About</span>
              <span>Feature</span>
              <span>Pricing</span>
              <span>Clients</span>
           </div>
        </nav>

        {/* 2. Hero Image */}
        <section className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={heroSrc}
            alt="Concert Hero"
            fill
            className="object-cover"
            unoptimized
            priority
          />
          {/* Violet Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
        </section>

        {/* 3. Floating Identity Card */}
        <section className="px-6 -mt-32 relative z-30 animate-premium">
           <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-6 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.2)] flex items-center gap-5 relative overflow-hidden">
              {/* Profile/Logo Container */}
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden shrink-0">
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
                 <h2 className="text-2xl font-black text-white leading-tight mb-1">{name}</h2>
                 <p className="text-purple-300 text-xs font-black underline decoration-purple-500/50 underline-offset-4 mb-2">{tagline}</p>
                 <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{role}</span>
              </div>

              {/* Grid Menu Button */}
              <div className="absolute right-4 bottom-1/2 translate-y-1/2 w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-purple-900/40 cursor-pointer hover:bg-purple-500 transition-colors">
                 <LayoutGrid size={24} />
              </div>
           </div>
        </section>

        {/* 4. Wavy Transition Divider */}
        <div className="relative h-20 -mt-10 overflow-hidden z-20">
           <svg className="absolute bottom-0 w-full h-full fill-white" preserveAspectRatio="none" viewBox="0 0 1440 320">
              <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,208C960,235,1056,245,1152,224C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
        </div>

        {/* 5. Bio/CTA Section */}
        <section className="bg-white px-8 pb-12 text-center">
           <div className="flex items-center justify-center gap-2 mb-6 animate-premium [animation-delay:400ms]">
              <Music size={20} className="text-purple-600" />
              <h3 className="text-sm font-black text-gray-900 tracking-tight">Experience the Magic of Arijit Sharma Live! 🎤</h3>
           </div>
           
           <p className="text-sm font-medium text-gray-500 leading-relaxed mb-10 animate-premium [animation-delay:500ms]">
              {bio}
           </p>

           {/* 6. Sunburst Social Icons */}
           <div className="flex justify-center gap-6 animate-premium [animation-delay:600ms]">
              {[
                { icon: Globe, label: "Web" },
                { icon: Facebook, label: "FB" },
                { icon: Instagram, label: "IG" },
                { icon: Linkedin, label: "LN" },
                { icon: MessageCircle, label: "WA" }
              ].map((social, i) => (
                <div key={i} className="relative group">
                   {/* Radial Sunburst Ring */}
                   <div className="absolute inset-[-12px] opacity-0 group-hover:opacity-100 transition-opacity sunburst-bg rounded-full animate-[spin_20s_linear_infinite]" />
                   
                   <div className="relative w-14 h-14 rounded-full border-2 border-purple-100 flex items-center justify-center text-purple-600 bg-white hover:border-purple-600 hover:scale-110 transition-all cursor-pointer shadow-sm group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                      <social.icon size={22} />
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 7. Action Button Container */}
        <section className="px-8 pb-10 space-y-4">
           <button 
             onClick={onDownloadVCard}
             className="w-full h-16 bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-[24px] font-black text-lg shadow-xl shadow-purple-200 hover:scale-[1.02] transition-all"
           >
              SAVE CONNECTION
           </button>
           
           <div className="flex gap-4">
              <a href={`tel:${card.phone || ""}`} className="flex-1 h-14 bg-gray-50 rounded-[20px] flex items-center justify-center gap-2 text-violet-900 font-bold border border-violet-100 italic transition-all active:scale-95">
                 <Phone size={18} />
                 CALL NOW
              </a>
              <div className="w-14 h-14 bg-violet-900 rounded-[20px] flex items-center justify-center text-white shadow-lg cursor-pointer active:scale-95">
                 <Share2 size={20} />
              </div>
           </div>
        </section>

        {/* Minimalist Footer */}
        <footer className="py-12 border-t border-gray-50 flex flex-col items-center">
           <div className="w-10 h-1bg-gray-100 rounded-full mb-8" />
           <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em]">Powered by Pimjo Studios</p>
        </footer>

      </div>
    </div>
  );
}

// Icon Helper
function SocialIcon({ platform }: { platform: string }) {
  const p = platform.toLowerCase();
  if (p.includes("facebook")) return <Facebook size={18} />;
  if (p.includes("whatsapp")) return <MessageCircle size={18} />;
  if (p.includes("linkedin")) return <Linkedin size={18} />;
  if (p.includes("instagram")) return <Instagram size={18} />;
  if (p.includes("twitter")) return <Twitter size={18} />;
  if (p.includes("youtube")) return <Youtube size={18} />;
  return <Globe size={18} />;
}
