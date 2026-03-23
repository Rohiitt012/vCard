"use client";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { Mail, Phone, MapPin, Cake, Target, Presentation, Calendar, ChevronLeft, ChevronRight, LayoutGrid, Share2, MessageCircle, ExternalLink, User, Sparkles } from "lucide-react";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function Corporate1VCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "Corporate Profile";
  const role = card.occupation || card.tagline || "Founder · CXO · Advisor";
  const email = card.email;
  const phone = card.phone;
  const address = card.address;

  const services = card.services && card.services.length > 0 ? card.services : [];

  return (
    <div className="min-h-screen bg-[#FDFEFE] text-[#0F172A] font-sans flex justify-center px-0 py-0 overflow-x-hidden">
      <div className="w-full max-w-[540px] bg-white relative flex flex-col shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08)] pb-10">
        
        {/* TOP BANNER WITH SLANTED EDGE */}
        <section className="relative h-[360px] w-full overflow-hidden">
           <Image 
             src={(card as any).bannerImage || "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200"} 
             alt="Banner" 
             fill 
             className="object-cover" 
           />
           <div className="absolute inset-0 bg-black/20"></div>
           
           {/* Slanted Bottom Edge */}
           <div 
             className="absolute bottom-[-1px] left-0 right-0 h-48 bg-white z-10" 
             style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}
           />
        </section>

        {/* PROFILE PHOTO - CENTERED OVERLAP */}
        <section className="relative px-8 pt-0 pb-10 z-20 -mt-24 flex flex-col items-center">
            <div className="relative w-48 h-48 rounded-full border-4 border-white overflow-hidden shadow-2xl bg-white">
                {card.image ? (
                    <Image
                        src={card.image}
                        alt={name}
                        fill
                        className="object-cover"
                        unoptimized={card.image.startsWith("data:")}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100">
                        <span className="text-6xl font-black text-slate-300">
                            {name.charAt(0).toUpperCase()}
                        </span>
                    </div>
                )}
            </div>

            {/* IDENTITY INFO - CENTERED */}
            <div className="text-center mt-10 space-y-4">
               <h1 className="text-[42px] font-black text-[#111827] tracking-tight leading-none mb-2">
                  {name}
               </h1>
               <p className="text-[18px] font-medium text-[#4B7098]">
                  {role}
               </p>
            </div>

            {/* ACTION BUTTONS (Optional based on design needs) */}
            <div className="mt-10 w-full flex flex-col gap-4">
                <button
                    onClick={() => onDownloadVCard?.()}
                    className="w-full h-16 rounded-2xl bg-[#3B82F6] text-white font-black text-lg shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all hover:scale-[1.02] active:scale-95"
                >
                    Add to Contact
                </button>
            </div>
        </section>

        {/* SOCIAL LINKS - CENTERED */}
        {card.socialLinks && card.socialLinks.filter(l => l.url).length > 0 && (
          <section className="px-8 pb-10 flex flex-col items-center">
              <VCardSocialLinks 
                  card={card} 
                  layout="vertical" 
                  variant="circular" 
                  iconSize={24}
                  itemClassName="w-full max-w-[400px] h-16 bg-white border border-slate-100 rounded-2xl flex items-center p-4 hover:border-blue-500 hover:scale-[1.02] transition-all shadow-sm"
              />
          </section>
        )}

        {/* CONTACT DATA */}
        {(email || phone || address) && (
            <section className="px-8 py-10 bg-[#F9FBFF] border-y border-slate-100 space-y-8">
                {email && (
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600">
                           <Mail className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">Email</p>
                           <p className="text-[16px] font-bold text-slate-900">{email}</p>
                        </div>
                    </div>
                )}
                {phone && (
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600">
                           <Phone className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                           <p className="text-[16px] font-bold text-slate-900">{phone}</p>
                        </div>
                    </div>
                )}
                {address && (
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600">
                           <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">Location</p>
                           <p className="text-[16px] font-bold text-slate-900">{address}</p>
                        </div>
                    </div>
                )}
            </section>
        )}

        {/* Dynamic Sections */}
        <VCardDynamicSections card={card} />
        
        <footer className="px-8 py-10 text-center text-[10px] font-black text-slate-300 uppercase tracking-widest">
           {name} &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
