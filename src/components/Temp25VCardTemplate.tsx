"use client"; // test
import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { 
  Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, 
  MessageCircle, ChevronDown, LayoutGrid, User, Sparkles, Globe, 
  ArrowRight, Clock, Zap, Activity, Cpu, Heart, Download, Share2, Languages, Maximize, Baby, Calendar
} from "lucide-react";
import { generateQrDataUrl } from "@/lib/qr";
import { getSocialIcon } from "@/lib/social-icons";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
  </svg>
);

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function Temp25VCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [qrCode, setQrCode] = useState<string>("");

  useEffect(() => {
    const url = `${baseUrl}/${slug}`;
    generateQrDataUrl(url).then(setQrCode);
  }, [baseUrl, slug]);

  const name = card.title || "Elite Professional";
  const role = card.occupation || card.tagline || "Founder & CEO";
  const orgName = "Umeed Bal Kendra";
  const mission = "A child-focused non-profit organization dedicated to uplifting underprivileged children through education, healthcare, nutrition, and emotional well-being. We believe every child deserves a safe childhood, equal opportunities, and a hopeful future.";

  return (
    <div className="min-h-screen bg-[#F8FAFB] text-[#0A2E28] font-sans flex justify-center py-0 px-0 sm:py-12 overflow-x-hidden relative">
      
      {/* PREMIUM NAVIGATION */}
      <div className="absolute top-8 left-8 right-8 z-50 flex justify-between items-center pointer-events-none">
           <div className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-2xl border border-emerald-100 shadow-sm flex items-center gap-3 pointer-events-auto">
                <Languages size={18} className="text-emerald-600" />
                <span className="text-xs font-black uppercase tracking-widest text-emerald-900 flex items-center gap-1">
                     EN <ChevronDown size={14} />
                </span>
           </div>
           <div className="flex gap-3 pointer-events-auto">
                <button className="bg-white text-emerald-600 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border border-emerald-50 hover:scale-110 active:scale-95 transition-all">
                     <Share2 size={20} />
                </button>
                <button className="bg-emerald-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
                     <Download size={20} />
                </button>
           </div>
      </div>

      <div className="w-full max-w-[580px] bg-white relative flex flex-col shadow-[0_50px_100px_-20px_rgba(2,44,34,0.12)] overflow-hidden sm:rounded-[48px]">
        
        {/* NPO HERO SECTION */}
        <section className="relative pt-32 pb-40 px-10 overflow-hidden">
             <div className="absolute inset-0 z-0">
                  <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200" alt="Background" fill className="object-cover opacity-10" unoptimized={true} />
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-emerald-50/50" />
             </div>
             
             <div className="relative z-10 space-y-12">
                   <div className="space-y-4">
                        <h1 className="text-[56px] sm:text-[68px] font-serif font-black text-[#022C22] leading-[1.0] tracking-tight">
                             UMEED <br/> BAL KENDRA
                        </h1>
                        <div className="w-16 h-1.5 bg-[#F59E0B] rounded-full" />
                   </div>

                   <p className="text-[#022C22]/80 text-[17px] leading-relaxed font-medium max-w-md">
                        {mission}
                   </p>

                  <div className="flex gap-4">
                       <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden rotate-[-12deg] group">
                            <Image src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=300" alt="Child" fill className="object-cover group-hover:scale-110 transition-transform" unoptimized={true} />
                       </div>
                       <div className="relative w-40 h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden -mt-10 group">
                            <Image src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=400" alt="Education" fill className="object-cover group-hover:scale-110 transition-transform" unoptimized={true} />
                       </div>
                  </div>
             </div>

             <div className="absolute bottom-0 left-0 w-full leading-[0] z-20 translate-y-[1px]">
                  <svg viewBox="0 0 1440 320" className="w-full h-auto fill-white">
                       <path d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,154.7C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                  </svg>
             </div>
        </section>

        {/* ORGANIZATION BRAND CARD */}
        <section className="px-8 -mt-10 relative z-30">
             <div className="bg-[#022C22] rounded-[40px] p-8 sm:p-10 relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(2,44,34,0.4)] group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-20" />
                  <div className="flex flex-col sm:flex-row items-center gap-8 relative z-10 text-center sm:text-left">
                       <div className="w-28 h-28 bg-white rounded-[32px] flex items-center justify-center shadow-xl p-6 group-hover:rotate-12 transition-transform duration-500 text-[#F59E0B]">
                            <Heart size={42} className="fill-[#F59E0B]" />
                       </div>
                       <div className="space-y-3 flex-1">
                            <h2 className="text-3xl font-black text-white tracking-tight">{orgName}</h2>
                            <div className="space-y-2">
                                 <p className="text-emerald-100/90 font-semibold text-lg leading-snug">Guiding Children Towards A Better Tomorrow.</p>
                                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                                      <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                                      <p className="text-white/60 font-black text-[10px] uppercase tracking-[0.2em]">{role}</p>
                                 </div>
                            </div>
                       </div>
                  </div>
             </div>
        </section>

        {/* IMPACT STATISTICS GRID */}
        <section className="px-8 pt-10 pb-20 grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-30">
             <StatBox label="Children" value="12k+" icon={Baby} />
             <StatBox label="Schools" value="85+" icon={Globe} />
             <StatBox label="Volunteers" value="2.5k" icon={User} />
             <StatBox label="Districts" value="12" icon={MapPin} />
        </section>

        {/* MISSION & SOCIAL SECTION */}
        <section className="px-10 pb-32 text-center relative overflow-hidden">
             <div className="max-w-xl mx-auto space-y-20 relative z-10">
                  <p className="text-emerald-900/90 text-[20px] sm:text-[23px] leading-relaxed font-bold italic tracking-tight">
                       {mission}
                  </p>

                  <VCardSocialLinks 
                    card={card} 
                    layout="horizontal" 
                    variant="circular" 
                    iconSize={24}
                    itemClassName="hover:scale-110 shadow-lg transition-transform"
                    containerClassName="flex py-10 justify-center"
                  />

                  <div className="pt-6">
                       <div className="inline-block relative group cursor-pointer transition-transform hover:-translate-y-1">
                            <div className="absolute inset-0 bg-[#F59E0B] translate-x-1 translate-y-1 rounded-2xl opacity-20 blur-sm group-hover:opacity-40" />
                            <div className="relative bg-[#022C22] px-14 py-5 rounded-2xl">
                                 <span className="text-2xl font-black text-white tracking-widest uppercase">
                                      Contact Us
                                 </span>
                            </div>
                       </div>
                  </div>
             </div>
        </section>

        {/* CONTACT YELLOW GRID */}
        <section className="px-10 pb-40">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
                  <ModernContactCard icon={Mail} value={card.email || "contact@careforkidsindia.org"} />
                  <ModernContactCard icon={Mail} value="info.cfk@ngoindia.in" />
                  <ModernContactCard icon={Phone} value={card.phone || "+91 96385 27410"} />
                  <ModernContactCard icon={Phone} value="+91 85274 19630" />
                  <ModernContactCard icon={Clock} value={card.birthDate || "12th June, 1990"} />
                  <ModernContactCard icon={MapPin} value={card.address || "India, Delhi"} />
             </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="px-10 pb-40 relative overflow-hidden">
             <div className="absolute top-10 left-[-20px] opacity-20 rotate-12 scale-150">
                  <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
                       <path d="M10,50 Q30,30 50,50 T90,50 T130,50 T170,50" stroke="#006B5D" strokeWidth="4" />
                  </svg>
             </div>
             <div className="text-center space-y-20 relative z-10">
                  <div className="inline-block relative group cursor-pointer transition-transform hover:-translate-y-1">
                       <div className="absolute inset-0 bg-[#F59E0B]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                       <h3 className="relative text-3xl font-black text-[#022C22] tracking-widest uppercase border-b-4 border-[#F59E0B] inline-block pb-2">
                            Gallery
                       </h3>
                  </div>
                  <div className="relative group px-4">
                       <div className="absolute inset-0 bg-emerald-100 rounded-[60px] blur-3xl opacity-20" />
                       <div className="relative rounded-[40px] overflow-hidden border-[8px] border-white shadow-[0_30px_60px_-15px_rgba(2,44,34,0.2)] bg-white aspect-[16/10] group">
                            <Image 
                                 src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200" 
                                 alt="Gallery" fill className="object-cover group-hover:scale-105 transition-transform duration-[2s]" unoptimized={true} 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#022C22]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                                 <p className="text-white font-bold text-xl">Uplifting communities through education.</p>
                            </div>
                            <div className="absolute top-6 right-6 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shadow-xl transition-all group-hover:scale-110">
                                 <Maximize size={24} />
                            </div>
                       </div>
                  </div>
             </div>
        </section>

        {/* OUR SERVICES SECTION */}
        <section className="px-10 pb-40 relative">
             <div className="text-center space-y-20">
                  <div className="inline-block relative group cursor-pointer transition-transform hover:-translate-y-1">
                       <div className="absolute top-[-50px] left-[-60px] w-24 h-24 opacity-20">
                            <Baby size={80} className="text-[#022C22]" />
                       </div>
                       <h3 className="relative text-3xl font-black text-[#022C22] tracking-widest uppercase border-b-4 border-[#F59E0B] inline-block pb-2">
                            Impact Areas
                       </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                       <ImpactCard title="Education" desc="Empowering minds with quality learning tools." image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400" />
                       <ImpactCard title="Health" desc="Bridging the gap in pediatric healthcare." image="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=400" />
                       <ImpactCard title="Nutrition" desc="Ensuring no child goes to bed hungry." image="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=400" />
                       <ImpactCard title="Sanitation" desc="Clean water and hygiene for every child." image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400" />
                  </div>
             </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section className="px-10 pb-40 relative">
             <div className="text-center space-y-20">
                  <div className="inline-block relative group cursor-pointer transition-transform hover:-translate-y-2">
                       <div className="absolute top-[-30px] right-[-40px] w-24 h-24 opacity-60 pointer-events-none rotate-12">
                            <Sparkles size={80} className="text-emerald-900/10" />
                       </div>
                       <div className="absolute inset-0 bg-yellow-400 translate-x-3 translate-y-3 -skew-x-[15deg] rounded-sm" />
                       <div className="relative bg-[#006B5D] px-24 py-6 -skew-x-[15deg] rounded-sm">
                            <span className="inline-block skew-x-[15deg] text-4xl font-black text-white tracking-tighter uppercase leading-none">
                                 Products
                            </span>
                       </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                       <ProductSimpleCard title="Education Kit Box" image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600" isYellow={false} />
                       <ProductSimpleCard title="Learning Flashcards Set" image="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=600" isYellow={true} />
                  </div>
                  <div className="pt-6">
                       <button className="bg-[#022C22] text-white px-12 py-5 rounded-2xl font-black text-lg flex items-center gap-3 mx-auto hover:bg-[#065F46] transition-all shadow-xl hover:-translate-y-1">
                            Visit Our Store <ArrowRight size={22} />
                       </button>
                  </div>
             </div>
        </section>


        {/* TESTIMONIALS SECTION */}
        <section className="px-10 pb-40 relative">
             <div className="text-center space-y-20">
                  <div className="inline-block relative group cursor-pointer transition-transform hover:-translate-y-1">
                       <h3 className="relative text-3xl font-black text-[#022C22] tracking-widest uppercase border-b-4 border-[#F59E0B] inline-block pb-2">
                            Voices of Change
                       </h3>
                  </div>
                  <div className="bg-white rounded-[40px] p-8 sm:p-12 relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(2,44,34,0.1)] text-left flex flex-col sm:flex-row items-center gap-10 border border-emerald-50">
                       <div className="relative w-40 h-40 shrink-0">
                            <div className="relative w-full h-full rounded-[35%] overflow-hidden border-4 border-[#F59E0B] shadow-xl rotate-3">
                                 <Image src="https://i.pravatar.cc/300?u=ritika" alt="Ritika" fill className="object-cover -rotate-3 scale-110" unoptimized={true} />
                            </div>
                       </div>
                       <div className="space-y-4 flex-1 text-center sm:text-left">
                            <p className="text-lg sm:text-xl font-medium text-[#022C22]/80 leading-relaxed italic">
                                 "Umeed Bal Kendra isn't just an NGO; it's a beacon of hope for thousands of children who now have a chance at a brighter, dignified future."
                            </p>
                            <div className="space-y-1">
                                 <h4 className="text-xl font-black text-[#022C22] tracking-tight uppercase">Ritika Sharma</h4>
                                 <p className="text-sm font-bold text-[#F59E0B] uppercase tracking-widest">Philanthropist</p>
                            </div>
                       </div>
                  </div>
             </div>
        </section>

        {/* BLOG SECTION */}
        <section className="px-10 pb-40 relative">
             <div className="absolute top-[-30px] right-5 opacity-[0.08] select-none pointer-events-none">
                  <h2 className="text-[100px] font-serif font-black text-emerald-950 leading-none">DONATION</h2>
             </div>
             <div className="text-center space-y-20 relative z-10">
                  <div className="inline-block relative group cursor-pointer transition-transform hover:-translate-y-1">
                       <h3 className="relative text-3xl font-black text-[#022C22] tracking-widest uppercase border-b-4 border-[#F59E0B] inline-block pb-2">
                            Latest Stories
                       </h3>
                  </div>
                  <div className="max-w-4xl mx-auto group bg-white rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(2,44,34,0.1)] border border-emerald-50 transition-all hover:shadow-2xl">
                       <div className="relative h-72 w-full overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200" alt="Blog" fill className="object-cover group-hover:scale-105 transition-transform duration-[2s]" unoptimized={true} />
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#022C22]">
                                 Mission Update
                            </div>
                       </div>
                       <div className="p-10 text-left space-y-6">
                            <h4 className="text-2xl font-black text-[#022C22] leading-tight tracking-tight">Why Education is the Strongest Tool Against Child Poverty</h4>
                            <p className="text-[16px] font-medium text-[#022C22]/60 leading-relaxed">A deep dive into how structured learning environments transform lives and break cycles of poverty in urban settlements.</p>
                            <button className="text-[#022C22] font-black text-sm uppercase tracking-wider flex items-center gap-2 group/btn">
                                 Read Full Story <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                            </button>
                       </div>
                  </div>
             </div>
        </section>

        {/* BUSINESS HOURS SECTION */}
        <section className="px-10 pb-40 relative overflow-hidden">
             <div className="absolute top-10 left-0 w-64 h-16 bg-yellow-400 -skew-x-[20deg] -translate-x-12 opacity-80 blur-sm" />
             <div className="text-center space-y-24 relative z-10">
                  <div className="inline-block relative group cursor-pointer transition-transform hover:-translate-y-2">
                       <div className="absolute inset-0 bg-yellow-400 translate-x-3 translate-y-3 -skew-x-[15deg] rounded-sm" />
                       <div className="relative bg-[#006B5D] px-24 py-6 -skew-x-[15deg] rounded-sm">
                            <span className="inline-block skew-x-[15deg] text-4xl font-black text-white tracking-tighter uppercase leading-none">
                                 Business Hours
                            </span>
                       </div>
                  </div>
                  <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16">
                       <HourCard day="Monday" time="09:00 AM - 06:00 PM" />
                       <HourCard day="Tuesday" time="09:00 AM - 06:00 PM" />
                       <HourCard day="Wednesday" time="09:00 AM - 06:00 PM" />
                       <HourCard day="Thursday" time="09:00 AM - 06:00 PM" />
                       <HourCard day="Friday" time="09:00 AM - 06:00 PM" />
                       <HourCard day="Saturday" time="10:00 AM - 04:00 PM" />
                  </div>
                  <div className="mt-16 flex justify-center">
                       <div className="w-full sm:w-[calc(50%-20px)]">
                            <HourCard day="Sunday" time="Closed" isSunday />
                       </div>
                  </div>
             </div>
        </section>

        {/* INQUIRIES SECTION */}
        <section className="px-10 pb-40 relative overflow-hidden">
             <div className="absolute top-20 left-0 w-32 h-32 opacity-80 pointer-events-none z-20">
                  <Baby size={100} className="text-emerald-900" />
             </div>
             <div className="text-center space-y-24 relative z-10">
                  <div className="inline-block relative group cursor-pointer transition-transform hover:-translate-y-2">
                       <div className="absolute inset-0 bg-yellow-400 translate-x-3 translate-y-3 -skew-x-[15deg] rounded-sm" />
                       <div className="relative bg-[#006B5D] px-24 py-6 -skew-x-[15deg] rounded-sm">
                            <span className="inline-block skew-x-[15deg] text-4xl font-black text-white tracking-tighter uppercase leading-none">
                                 Inquiries
                            </span>
                       </div>
                  </div>
                  <div className="max-w-4xl mx-auto relative bg-[#022C22] rounded-[48px] p-8 sm:p-14 space-y-8 overflow-hidden shadow-2xl">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            <PremiumInput placeholder="Your Name" />
                            <PremiumInput placeholder="Email Address" type="email" />
                       </div>
                       <PremiumInput placeholder="Phone Number" type="tel" />
                       <textarea placeholder="How can you help or what do you need?" rows={4} className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 px-8 text-white placeholder:text-white/40 font-medium focus:border-[#F59E0B] focus:outline-none transition-all resize-none" />
                       
                       <button className="w-full bg-[#F59E0B] text-[#022C22] py-6 rounded-3xl font-black text-xl shadow-xl hover:bg-white hover:scale-[1.02] active:scale-95 transition-all">
                            Submit Inquiry
                       </button>
                  </div>
             </div>
        </section>

        {/* QR CODE SECTION */}
        <section className="px-10 pb-40 relative">
             <div className="text-center space-y-20 relative z-10">
                  <div className="inline-block relative group cursor-pointer transition-transform hover:-translate-y-2">
                       <div className="absolute inset-0 bg-yellow-400 translate-x-3 translate-y-3 -skew-x-[15deg] rounded-sm" />
                       <div className="relative bg-[#006B5D] px-24 py-6 -skew-x-[15deg] rounded-sm">
                            <span className="inline-block skew-x-[15deg] text-4xl font-black text-white tracking-tighter uppercase leading-none">
                                 QR Code
                            </span>
                       </div>
                  </div>
                  <div className="bg-white rounded-[40px] p-8 sm:p-12 border border-emerald-50 shadow-[0_40px_80px_-20px_rgba(2,44,34,0.1)] relative overflow-hidden flex flex-col sm:flex-row items-center gap-12 text-left">
                       <div className="relative w-44 h-44 shrink-0 bg-white p-5 rounded-3xl border border-emerald-100 shadow-xl">
                            {qrCode && <Image src={qrCode} alt="QR Code" fill className="object-contain p-2" unoptimized={true} />}
                       </div>
                       <div className="space-y-4 flex-1">
                            <h4 className="text-2xl font-black text-[#022C22] tracking-tight uppercase">Scan to Support</h4>
                            <p className="text-base font-medium text-[#022C22]/60 leading-relaxed">Instantly access our official platform to learn more about our ongoing projects and how you can contribute.</p>
                       </div>
                  </div>
             </div>
        </section>

        {/* FINAL ADD TO CONTACT SECTION (STEP 283 INSPIRED) */}
        <section className="relative h-80 flex items-center justify-center overflow-hidden">
             {/* Background Illustration */}
             <div className="absolute inset-0 opacity-20 grayscale hover:grayscale-0 transition-all duration-1000">
                  <Image 
                       src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200" 
                       alt="Community Support" fill className="object-cover" unoptimized={true} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
             </div>

             <div className="relative z-10 w-full px-8">
                  <button 
                       onClick={onDownloadVCard}
                       className="w-full bg-[#022C22] text-white py-8 rounded-3xl shadow-2xl hover:bg-[#065F46] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-5 group"
                  >
                       <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform text-[#F59E0B]">
                            <User size={28} strokeWidth={3} />
                       </div>
                       <span className="text-2xl font-black tracking-tight uppercase">Add to contact</span>
                  </button>
             </div>
        </section>

        {/* DYNAMIC SECTIONS */}
        <div className="px-0 pb-10">
             <VCardDynamicSections card={card} />
        </div>

        {/* FOOTER */}
        <footer className="py-24 text-center bg-[#022C22]/5 relative">
             <VCardSocialLinks 
                card={card} 
                layout="horizontal" 
                variant="circular" 
                iconSize={20}
                itemClassName="hover:-translate-y-1 shadow-lg transition-transform"
                containerClassName="flex justify-center mb-14 px-8"
             />
             <div className="space-y-4">
                  <p className="text-[11px] font-black text-[#022C22]/40 uppercase tracking-[0.4em]">Designed for Impact Leaders</p>
                  <p className="text-[10px] font-bold text-[#022C22]/30">Umeed Bal Kendra © 2026. All rights reserved.</p>
             </div>
        </footer>

      </div>
      
      {/* FONTS */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;900&family=Playfair+Display:ital,wght@0,900;1,900&display=swap" rel="stylesheet" />
      <style jsx global>{`
        body { font-family: 'Outfit', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </div>
  );
}

function StatBox({ label, value, icon: Icon }: { label: string, value: string, icon: any }) {
     return (
          <div className="bg-white p-5 rounded-3xl border border-emerald-50 shadow-[0_15px_30px_-10px_rgba(2,44,34,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all group">
               <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-[#022C22] group-hover:bg-[#F59E0B] transition-colors">
                         <Icon size={16} />
                    </div>
                    <span className="text-[10px] font-black text-[#022C22]/40 uppercase tracking-widest">{label}</span>
               </div>
               <p className="text-3xl font-black text-[#022C22] tracking-tighter">{value}</p>
          </div>
     );
}

function ModernContactCard({ icon: Icon, value }: { icon: any, value: string }) {
     if (!value) return null;
     return (
          <div className="bg-white border border-emerald-50 relative rounded-3xl py-8 px-6 flex flex-col items-center justify-center shadow-[0_10px_30px_-10px_rgba(2,44,34,0.05)] group hover:shadow-[0_20px_40px_-15px_rgba(2,44,34,0.1)] transition-all">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 bg-[#022C22] rounded-2xl flex items-center justify-center text-white border-4 border-white shadow-xl group-hover:bg-[#F59E0B] group-hover:text-[#022C22] transition-colors">
                         <Icon size={24} strokeWidth={2.5} />
                    </div>
               </div>
               <p className="text-[15px] font-bold text-[#022C22]/80 text-center leading-tight tracking-tight px-2 mt-2">
                    {value}
               </p>
          </div>
     );
}

function ImpactCard({ title, desc, image }: { title: string, desc: string, image: string }) {
     return (
          <div className="bg-white rounded-[40px] overflow-hidden group shadow-[0_20px_50px_-15px_rgba(2,44,34,0.08)] hover:-translate-y-2 transition-all duration-500 border border-emerald-50">
               <div className="relative h-56 w-full overflow-hidden">
                    <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" unoptimized={true} />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent" />
                    <h4 className="absolute bottom-6 left-8 text-2xl font-black text-white leading-none tracking-tight">{title}</h4>
               </div>
               <div className="p-8 text-left">
                    <p className="text-sm font-semibold text-[#022C22]/60 leading-relaxed">{desc}</p>
               </div>
          </div>
     );
}

function PremiumInput({ placeholder, type = "text" }: { placeholder: string, type?: string }) {
     return (
          <input 
               type={type} 
               placeholder={placeholder} 
               className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white placeholder:text-white/40 font-medium focus:border-[#F59E0B] focus:bg-white/10 focus:outline-none transition-all" 
          />
     );
}

function ProductSimpleCard({ title, image, isYellow }: { title: string, image: string, isYellow?: boolean }) {
     return (
          <div className="bg-white rounded-[40px] overflow-hidden group shadow-[0_20px_50px_-15px_rgba(2,44,34,0.08)] hover:-translate-y-2 transition-all duration-500 border border-emerald-50">
               <div className="relative h-64 w-full overflow-hidden p-4">
                    <div className="relative w-full h-full rounded-[32px] overflow-hidden">
                         <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]" unoptimized={true} />
                    </div>
               </div>
               <div className="p-8 text-left pt-2">
                    <h4 className="text-xl font-black text-[#022C22] tracking-tight">{title}</h4>
               </div>
          </div>
     );
}

function HourCard({ day, time, isSunday }: { day: string, time: string, isSunday?: boolean }) {
     return (
          <div className="bg-white border border-emerald-100 rounded-[32px] p-8 flex justify-between items-center group hover:bg-[#022C22] transition-colors shadow-sm">
               <div className="space-y-1">
                    <h5 className="text-[#022C22] group-hover:text-white font-black text-lg uppercase tracking-wider">{day}</h5>
                    <p className="text-[#022C22]/40 group-hover:text-white/60 font-bold text-xs">Standard Hours</p>
               </div>
               <div className={`px-4 py-2 rounded-xl text-sm font-black ${isSunday ? 'bg-red-50 text-red-600 group-hover:bg-red-500 group-hover:text-white' : 'bg-emerald-50 text-emerald-700 group-hover:bg-[#F59E0B] group-hover:text-[#022C22]'} transition-colors`}>
                    {time}
               </div>
          </div>
     );
}
