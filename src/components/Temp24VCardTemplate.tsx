"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { 
  Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, 
  MessageCircle, Heart, ChevronDown, LayoutGrid, Globe, Clock, 
  Calendar, Star, Image as ImageIcon, Briefcase, User, Send, Smartphone
} from "lucide-react";
import { getSocialIcon } from "@/lib/social-icons";
import { generateQrDataUrl } from "@/lib/qr";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function Temp24VCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [qrCode, setQrCode] = useState<string>("");

  useEffect(() => {
    const url = `${baseUrl}/${slug}`;
    generateQrDataUrl(url).then(setQrCode);
  }, [baseUrl, slug]);

  const name = card.title || "Elite Wedding Planner";
  const tagline = card.tagline || "Trusted marriage bureau and expert wedding planners under one roof.";

  return (
    <div className="min-h-screen bg-[#FFF5F6] text-[#4C0519] selection:bg-rose-200 selection:text-rose-900 font-sans flex justify-center py-0 px-0 sm:py-12 overflow-x-hidden relative">
      
      {/* PREMIUM AMBIENT BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-rose-200/30 blur-[120px] rounded-full" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-pink-200/30 blur-[120px] rounded-full" />
           
           <div className="absolute top-1/4 left-10 text-rose-300 opacity-20 animate-bounce transition-all duration-[8s] infinite">
                <Heart size={40} className="fill-current" />
           </div>
           <div className="absolute bottom-1/4 right-10 text-rose-300 opacity-20 animate-pulse transition-all duration-[6s] infinite translate-y-20">
                <Heart size={32} className="fill-current" />
           </div>
           <div className="absolute top-2/3 left-[15%] text-pink-300 opacity-10 animate-spin transition-all duration-[10s] infinite">
                <Star size={60} className="fill-current" />
           </div>
      </div>

      <div className="w-full max-w-[580px] bg-white/70 backdrop-blur-3xl relative flex flex-col shadow-[0_100px_200px_-50px_rgba(159,18,57,0.15)] border border-white/40 overflow-hidden sm:rounded-[80px]">
        
        {/* PREMIUM NAVIGATION BAR */}
        <div className="absolute top-10 left-10 right-10 z-50 flex justify-between items-center">
             <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-rose-100 shadow-sm flex items-center gap-3">
                  <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-rose-900">Live Portfolio</span>
             </div>
             <button className="bg-rose-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
                  <Globe size={20} />
             </button>
        </div>

        {/* HERO SECTION */}
        {(!card.manageSection || card.manageSection.header) && (
        <section className="relative pt-40 pb-20 px-10 flex flex-col items-center text-center">
             <div className="relative inline-block mb-16">
                  <h1 className="text-[64px] sm:text-[84px] font-normal italic tracking-tight text-[#4C0519] leading-none mb-4" style={{ fontFamily: '"Great Vibes", cursive' }}>
                       {name}
                  </h1>
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-2 scale-x-150" />
             </div>

             <div className="relative mb-16 group">
                  <div className="absolute inset-0 bg-rose-500/10 rounded-t-full scale-110 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="absolute inset-[-15px] border-[2px] border-rose-100/50 rounded-t-full -z-10" />
                  <div className="absolute inset-[-30px] border-[1px] border-rose-50 rounded-t-full -z-10 opacity-50" />
                  
                  <div className="relative w-72 h-[480px] sm:w-80 sm:h-[520px] rounded-t-full overflow-hidden border-[8px] border-white shadow-[0_50px_100px_-20px_rgba(159,18,57,0.2)] bg-slate-50">
                        {card.image ? (
                           <Image src={card.image} alt={name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" unoptimized={true} />
                        ) : (
                           <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600" alt="Wedding Default" fill className="object-cover" unoptimized={true} />
                        )}
                  </div>

                  <div className="absolute -bottom-8 -right-16 w-52 h-52 select-none pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
                       <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-rose-500/80 drop-shadow-2xl">
                            <path d="M100 100 Q150 20 180 100 Q150 180 100 100 Q50 180 20 100 Q50 20 100 100" fill="white" />
                            <path d="M100 100 Q140 40 160 100 Q140 160 100 100 Q60 160 40 100 Q60 40 100 100" fill="currentColor" opacity="0.1" />
                            <circle cx="100" cy="100" r="14" fill="#881337" />
                       </svg>
                  </div>
             </div>

             <div className="max-w-md space-y-10">
                  <p className="text-rose-900/80 text-2xl font-medium leading-relaxed italic border-x border-rose-100 px-10 py-4">
                       “{tagline}”
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                         {['Certified Bureau', 'Premium Support', 'Soulmate Match'].map((tag, i) => (
                              <span key={i} className="px-6 py-3 bg-white text-rose-700 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-rose-100 shadow-sm hover:bg-rose-50 transition-colors">
                                   {tag}
                              </span>
                         ))}
                  </div>
             </div>
        </section>
        )}

        {/* BRANDED CALL-TO-ACTION */}
        <section className="px-10 pb-32">
             <div className="group relative">
                  <div className="absolute inset-0 bg-rose-400/30 blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                  <div className="bg-gradient-to-br from-[#881337] to-[#E11D48] rounded-[60px] p-16 text-center relative overflow-hidden shadow-2xl border border-white/20">
                       <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                       <div className="relative z-10 space-y-8">
                            <div className="w-28 h-28 bg-white/90 backdrop-blur-sm rounded-[40px] mx-auto flex items-center justify-center shadow-2xl rotate-3 group-hover:rotate-[15deg] transition-transform duration-700">
                                 <Heart className="text-rose-600 fill-rose-600" size={48} />
                            </div>
                            <div className="space-y-3">
                                 <h2 className="text-[40px] font-black tracking-tighter text-white leading-none">Life Partner Marriage Bureau</h2>
                                 <p className="text-rose-100 font-bold text-[10px] uppercase tracking-[0.4em] opacity-80 italic">Curating Purest Human Connections</p>
                            </div>
                            <button className="bg-white text-rose-600 px-12 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-rose-50 hover:-translate-y-2 transition-all active:scale-95">
                                 Find Your Soulmate
                            </button>
                       </div>
                  </div>
             </div>
        </section>

        {/* ABOUT SECTION */}
        {(!card.manageSection || card.manageSection.about) && (
        <section className="px-14 pb-40 text-center space-y-16">
             <div className="space-y-10 max-w-lg mx-auto">
                  <div className="space-y-4">
                       <p className="text-rose-400 font-black text-[10px] uppercase tracking-[0.5em]">The Philosophy</p>
                       <h3 className="text-[#4C0519] font-black italic text-[44px] leading-tight" style={{ fontFamily: '"Great Vibes", cursive' }}>Crafting Your Forever Story</h3>
                  </div>
                  <p className="text-[#4C0519]/80 text-xl leading-relaxed font-medium">
                       At <span className="font-black text-[#881337]">Life Partner Bureau</span>, we believe marriage is an art. We combine modern analytics with traditional values to find you a partner who doesn't just match your profile, but mirrors your soul.
                  </p>
                  <VCardSocialLinks 
                    card={card} 
                    layout="horizontal" 
                    variant="circular" 
                    iconSize={20}
                    itemClassName="shadow-lg hover:scale-110 transition-transform"
                    containerClassName="flex justify-center gap-6"
                  />
             </div>
        </section>
        )}

        {/* SERVICES SECTION */}
        {(!card.manageSection || card.manageSection.services) && (
        <div className="px-10 pb-40">
             <PremiumSectionTitle title="Our Services" subtitle="Luxury Matchmaking Ecosystem" />
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20">
                  <PremiumServiceCard 
                    title="Exclusive Consult" 
                    desc="Private one-on-one sessions for premium matchmaking." 
                    image="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600"
                  />
                  <PremiumServiceCard 
                    title="Elite Verification" 
                    desc="Deep-dive profile authentication for complete peace of mind." 
                    image="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600"
                  />
                  <PremiumServiceCard 
                    title="Cultural Alignment" 
                    desc="Bridging traditions and modern lifestyle preferences." 
                    image="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600"
                  />
                  <PremiumServiceCard 
                    title="Event Concierge" 
                    desc="Bespoke wedding coordination for the perfect celebration." 
                    image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600"
                  />
             </div>
        </div>
        )}

        {/* CONTACT GRID */}
        {(!card.manageSection || card.manageSection.contact) && (
        <section className="px-10 pb-40 relative">
             <PremiumSectionTitle title="Connect" subtitle="Reach Our Dedicated Desk" />
             <div className="grid grid-cols-2 gap-8 mt-20">
                  <WeddingContactCard icon={Phone} value={card.phone || "+91 8527419630"} />
                  <WeddingContactCard icon={Mail} value={card.email || "life.partner@marry.com"} />
                  <WeddingContactCard icon={User} label="Est." value={card.birthDate || "12th June, 1990"} isCake />
                  <WeddingContactCard icon={MapPin} value={card.address || "Heritage Plaza, Surat"} />
             </div>
        </section>
        )}

        {/* APPOINTMENT SECTION */}
        {(!card.manageSection || card.manageSection.appointments) && (
        <div className="px-10 pb-40">
             <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-[80px] p-16 border border-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 opacity-5">
                       <Calendar size={150} />
                  </div>
                  <PremiumSectionTitle title="Appointment" subtitle="The Beginning of Forever" centered={false} />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">
                       <div className="space-y-8">
                            <p className="text-rose-900/70 text-lg font-medium">Your journey starts with a simple conversation. Book a slot to meet our experts.</p>
                            <div className="flex gap-4">
                                 <div className="flex -space-x-4">
                                      {[1,2,3,4].map(i => (
                                        <div key={i} className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-xl">
                                             <Image src={`https://i.pravatar.cc/100?u=${i+10}`} alt="Expert" width={100} height={100} unoptimized={true} />
                                        </div>
                                      ))}
                                 </div>
                                 <div className="flex flex-col justify-center">
                                      <span className="text-base font-black text-rose-900 leading-none">Global Experts</span>
                                      <span className="text-[10px] text-rose-400 font-bold uppercase tracking-[0.3em] mt-2">Certified Matchmakers</span>
                                 </div>
                            </div>
                       </div>
                       <div className="bg-white rounded-[40px] p-8 shadow-2xl border border-rose-100 group">
                            <div className="space-y-4 text-center">
                                 <p className="text-[10px] font-black uppercase tracking-widest text-rose-300">Pick Your Date</p>
                                 <input 
                                      type="date" 
                                      className="w-full bg-rose-50 p-6 rounded-3xl outline-none text-rose-600 font-black text-xl text-center border-2 border-transparent focus:border-rose-200 transition-all"
                                 />
                                 <button className="w-full bg-rose-600 text-white py-5 rounded-3xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-rose-700 transition-all">Check Availability</button>
                            </div>
                       </div>
                  </div>
             </div>
        </div>
        )}

        {/* GALLERY SECTION */}
        {(!card.manageSection || card.manageSection.galleries) && (
        <div className="px-10 pb-40">
             <PremiumSectionTitle title="Visuals" subtitle="Glance of Success" />
             <div className="relative mt-20 group">
                  <div className="absolute inset-x-20 bottom-[-20px] h-10 bg-rose-300/40 blur-[100px] -z-10" />
                  <div className="rounded-[80px] overflow-hidden border-[12px] border-white shadow-[0_50px_100px_-30px_rgba(225,29,72,0.3)] relative aspect-[14/9] bg-slate-100">
                       <Image 
                            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200" 
                            alt="Gallery Success" fill className="object-cover group-hover:scale-105 transition-transform duration-[2s]" unoptimized={true}
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-rose-950/40 via-transparent to-transparent opacity-60" />
                       <div className="absolute top-10 right-10 flex gap-4">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30 cursor-pointer hover:bg-white hover:text-rose-600 transition-all">
                                 <ImageIcon size={24} />
                            </div>
                       </div>
                       <div className="absolute bottom-12 left-12">
                            <div className="bg-white/95 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-2xl">
                                 <p className="text-rose-950 font-black text-[10px] uppercase tracking-widest">Captured • Dec 2025</p>
                                 <p className="text-rose-600 italic font-black text-lg">Aryan & Saumya's Union</p>
                            </div>
                       </div>
                  </div>
                  <div className="flex justify-center gap-4 mt-16 items-center">
                       <div className="w-3 h-3 bg-rose-200 rounded-full" />
                       <div className="w-16 h-2 bg-rose-600 rounded-full shadow-lg" />
                       <div className="w-3 h-3 bg-rose-200 rounded-full" />
                       <div className="w-3 h-3 bg-rose-200 rounded-full" />
                  </div>
             </div>
        </div>
        )}

        {/* PRODUCTS SECTION */}
        {(!card.manageSection || card.manageSection.products) && (
        <div className="px-10 pb-40">
             <PremiumSectionTitle title="Investment" subtitle="Packages for Every Heart" />
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-20">
                  <PremiumProductCard 
                    title="Silver Match" 
                    price="999" 
                    img="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600" 
                  />
                  <PremiumProductCard 
                    title="Royal Gold" 
                    price="4,999" 
                    img="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600" 
                    featured 
                  />
             </div>
             <div className="mt-20 flex justify-center">
                  <button className="flex items-center gap-4 text-rose-900/60 font-black text-[11px] uppercase tracking-widest hover:text-rose-600 transition-colors">
                       View All Exclusive Plans <ChevronDown size={16} />
                  </button>
             </div>
        </div>
        )}

        {/* TESTIMONIALS */}
        {(!card.manageSection || card.manageSection.testimonials) && (
        <div className="px-10 pb-40">
             <div className="bg-white border border-rose-100 rounded-[80px] p-20 relative text-center shadow-2xl">
                  <div className="absolute top-10 left-10 text-rose-100 italic text-[120px] leading-none select-none opacity-50">“</div>
                  <PremiumSectionTitle title="Soul Tales" subtitle="What They Say About Us" />
                  
                  <div className="mt-24 space-y-12">
                       <p className="text-[26px] font-medium text-rose-950 italic leading-relaxed max-w-lg mx-auto">"I was skeptical until I met my match. The bureau's insight into compatibility is simply wizardry. Life-changing!"</p>
                       <div className="flex flex-col items-center gap-4">
                            <div className="w-24 h-24 rounded-full border-[6px] border-rose-50 shadow-2xl overflow-hidden mb-2">
                                 <Image src="https://i.pravatar.cc/200?u=priya" alt="Priya" width={200} height={200} unoptimized={true} />
                            </div>
                            <div className="space-y-1">
                                 <h4 className="text-xl font-black text-rose-800 tracking-tight">Priya Malhotra</h4>
                                 <p className="text-[10px] text-rose-400 font-bold uppercase tracking-[0.2em]">Joined the Club in Oct 2025</p>
                            </div>
                       </div>
                  </div>
             </div>
        </div>
        )}

        {/* HOURS SECTION */}
        {(!card.manageSection || card.manageSection.businessHours) && (
        <div className="px-10 pb-40">
             <PremiumSectionTitle title="Availability" subtitle="We Are Always Listening" />
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-20">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => (
                    <div key={i} className="bg-white/50 backdrop-blur-md p-8 rounded-[40px] border border-white text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group">
                         <p className="text-[10px] font-black text-rose-300 uppercase tracking-widest mb-6 group-hover:text-rose-500 transition-colors">{d}</p>
                         <div className="space-y-2">
                              <p className="text-sm font-black text-rose-950">09:00 AM</p>
                              <p className="text-xs font-bold text-rose-300">— to —</p>
                              <p className="text-sm font-black text-rose-950">08:00 PM</p>
                         </div>
                    </div>
                  ))}
                  <div className="col-span-2 sm:col-span-1 bg-rose-600 p-8 rounded-[40px] text-center shadow-2xl shadow-rose-200 flex flex-col justify-center items-center hover:scale-105 transition-transform">
                         <p className="text-[10px] font-black text-rose-200 uppercase tracking-widest mb-4">Sunday</p>
                         <p className="text-2xl font-black text-white italic tracking-tighter">Family Day</p>
                         <p className="text-[9px] text-rose-200 font-bold uppercase mt-2">(Closed)</p>
                  </div>
             </div>
        </div>
        )}

        {/* INQUIRY FORM */}
        {(!card.manageSection || card.manageSection.inquiries) && (
        <div className="px-10 pb-40" id="inquiries">
             <div className="bg-rose-950 rounded-[80px] p-20 text-white relative overflow-hidden shadow-2xl shadow-rose-950/40">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-900 to-rose-950 opacity-90" />
                  <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[100px]" />
                  
                  <div className="relative z-10">
                       <PremiumSectionTitle title="Inquiry" subtitle="Let's Start Your Journey" centered={false} invert />
                       <div className="mt-20 space-y-8 max-w-md">
                            {[
                              { label: 'Name', icon: User },
                              { label: 'Phone', icon: Phone },
                              { label: 'Email', icon: Mail }
                            ].map((field, idx) => (
                              <div key={idx} className="relative group">
                                   <input 
                                     className="w-full bg-white/5 border border-white/10 p-7 pl-16 rounded-3xl outline-none focus:bg-white focus:text-rose-950 transition-all font-bold group-hover:border-white/30" 
                                     placeholder={field.label}
                                   />
                                   <div className="absolute left-6 top-1/2 -translate-y-1/2 text-rose-500 group-focus-within:text-rose-600 transition-colors">
                                        <field.icon size={24} />
                                   </div>
                              </div>
                            ))}
                            <button className="w-full bg-white text-rose-950 p-7 rounded-[32px] font-black text-xs uppercase tracking-[0.4em] shadow-2xl hover:bg-rose-50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-6">
                                 Send Message <Send size={24} className="mb-1" />
                            </button>
                       </div>
                  </div>
             </div>
        </div>
        )}

        {/* QR SECTION */}
        {(!card.manageSection || card.manageSection.qrCode) && (
        <section className="px-10 py-40 bg-white flex flex-col items-center">
             <PremiumSectionTitle title="QR Code" subtitle="Save Our Legacy Directly" />
             <div className="mt-24 relative">
                  <div className="absolute inset-[-30px] border-[2px] border-rose-50 rounded-full animate-pulse opacity-50" />
                  <div className="bg-white p-10 rounded-[64px] shadow-[0_40px_100px_-20px_rgba(159,18,57,0.15)] border-2 border-rose-50 relative group">
                         <div className="relative w-56 h-56 group-hover:scale-110 transition-transform duration-700">
                              {qrCode && <Image src={qrCode} alt="QR Code" fill className="object-contain p-4" unoptimized={true} />}
                         </div>
                  </div>
             </div>
             
             <div className="mt-20 text-center space-y-10">
                   <div className="space-y-4">
                        <h4 className="text-[40px] font-black text-rose-950 italic tracking-tighter leading-none" style={{ fontFamily: '"Great Vibes", cursive' }}>Scan the Love</h4>
                        <p className="text-rose-400 font-bold max-w-sm mx-auto leading-relaxed text-sm tracking-wide">Sync our contact details with your device instantly. Every connection counts.</p>
                   </div>
                   <button 
                     onClick={onDownloadVCard}
                     className="bg-rose-950 text-white px-12 py-5 rounded-[28px] font-black text-[10px] uppercase tracking-[0.4em] hover:bg-rose-800 transition-all shadow-2xl flex items-center gap-4 mx-auto"
                   >
                        <User size={20} /> Add to Contacts
                   </button>
             </div>
        </section>
        )}

        {/* DYNAMIC SECTIONS */}
        <div className="px-0 pb-20">
            <VCardDynamicSections 
                card={card} 
                exclude={Object.entries(card.manageSection || {})
                .filter(([_, value]) => !value)
                .map(([key]) => key === 'instagramFeed' ? 'iframes' : key as any)
                }
            />
        </div>

        {/* FOOTER */}
        <footer className="py-32 text-center bg-rose-50/50 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
             
             <VCardSocialLinks 
                card={card} 
                layout="horizontal" 
                variant="circular" 
                iconSize={20}
                itemClassName="shadow-lg hover:scale-110 transition-transform"
                containerClassName="flex justify-center gap-6 mb-24 flex-wrap"
             />
             <div className="space-y-6">
                  <div className="flex items-center justify-center gap-6">
                        <div className="h-[1px] w-12 bg-rose-200" />
                        <Heart className="text-rose-600 fill-rose-600" size={24} />
                        <div className="h-[1px] w-12 bg-rose-200" />
                  </div>
                  <p className="text-[14px] font-black text-rose-300 uppercase tracking-[1em]">LIFE IS BEAUTIFUL</p>
                  <p className="text-[10px] font-bold text-rose-200 tracking-[0.2em]">Curated Excellence © 2026 • Premium Matrimony</p>
             </div>
        </footer>

        {/* FIXED BOTTOM ACTION BAR */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-[420px]">
             <div className="bg-[#4C0519]/90 backdrop-blur-3xl px-3 py-3 rounded-[36px] border border-white/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] flex justify-between items-center text-white">
                  <a href={`tel:${card.phone || '+918527419630'}`} className="flex-1 flex flex-col items-center justify-center h-16 hover:bg-white/10 rounded-3xl transition-colors">
                       <Phone size={20} className="mb-1" />
                       <span className="text-[8px] font-black uppercase tracking-widest">Call</span>
                  </a>
                  <a href={`mailto:${card.email || 'info@marriage.com'}`} className="flex-1 flex flex-col items-center justify-center h-16 hover:bg-white/10 rounded-3xl transition-colors">
                       <Mail size={20} className="mb-1" />
                       <span className="text-[8px] font-black uppercase tracking-widest">Email</span>
                  </a>
                  <div className="px-3">
                       <button 
                         onClick={onDownloadVCard}
                         className="w-16 h-16 bg-rose-600 rounded-[24px] shadow-2xl shadow-rose-600/40 flex items-center justify-center hover:bg-rose-500 transition-all hover:scale-110 active:scale-95"
                       >
                            <Calendar size={28} />
                       </button>
                  </div>
                  <a href="#inquiries" className="flex-1 flex flex-col items-center justify-center h-16 hover:bg-white/10 rounded-3xl transition-colors">
                       <MessageCircle size={20} className="mb-1" />
                       <span className="text-[8px] font-black uppercase tracking-widest">Chat</span>
                  </a>
                  <a href={`https://wa.me/${(card.phone || '918527419630').replace(/[^0-9]/g, '')}`} className="flex-1 flex flex-col items-center justify-center h-16 hover:bg-white/10 rounded-3xl transition-colors">
                       <Smartphone size={20} className="mb-1" />
                       <span className="text-[8px] font-black uppercase tracking-widest">WA</span>
                  </a>
             </div>
        </div>

      </div>
      
      {/* FONTS AND PRECONNECT */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Outfit:wght@300;400;600;900&display=swap" rel="stylesheet" />
      <style jsx global>{`
        body { font-family: 'Outfit', sans-serif; }
      `}</style>
    </div>
  );
}

/* --- PREMIUM HELPER COMPONENTS --- */

function PremiumSectionTitle({ title, subtitle, centered = true, invert = false }: { title: string, subtitle: string, centered?: boolean, invert?: boolean }) {
     return (
          <div className={`${centered ? 'text-center' : 'text-left'} space-y-4`}>
               <p className={`${invert ? 'text-rose-400' : 'text-rose-400'} font-black text-[10px] uppercase tracking-[0.6em]`}>{subtitle}</p>
               <h3 className={`${invert ? 'text-white' : 'text-[#4C0519]'} font-black italic text-[48px] leading-tight relative inline-block`} style={{ fontFamily: '"Great Vibes", cursive' }}>
                    {title}
                    <div className={`absolute bottom-2 left-0 w-full h-4 ${invert ? 'bg-white/10' : 'bg-rose-100'} -z-10`} />
               </h3>
          </div>
     );
}

function PremiumServiceCard({ title, desc, image }: { title: string, desc: string, image: string }) {
     return (
          <div className="flex flex-col rounded-[50px] overflow-hidden border-[6px] border-white shadow-xl group hover:shadow-2xl hover:-translate-y-2 transition-all bg-white">
               <div className="relative h-64 w-full overflow-hidden">
                    <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]" unoptimized={true} />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="p-10 text-center space-y-4">
                    <h4 className="text-xl font-black text-rose-950 uppercase tracking-tighter leading-none">{title}</h4>
                    <p className="text-sm text-rose-400 font-medium leading-relaxed">{desc}</p>
               </div>
          </div>
     );
}

function PremiumProductCard({ title, price, img, featured = false }: { title: string, price: string, img: string, featured?: boolean }) {
     return (
          <div className={`group relative rounded-[60px] overflow-hidden border-8 border-white shadow-2xl transition-all hover:-translate-y-4 ${featured ? 'scale-110 sm:z-10' : ''}`}>
               <div className="relative h-80 w-full overflow-hidden bg-rose-50">
                    <Image src={img} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" unoptimized={true} />
                    {featured && (
                         <div className="absolute top-8 left-8 bg-rose-600 text-white px-5 py-2 rounded-2xl font-black text-[9px] uppercase tracking-[0.3em] shadow-xl">Best Value</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-10 left-10 text-white text-left">
                         <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-80">Premium Access</p>
                         <h4 className="text-2xl font-black uppercase tracking-tighter">{title}</h4>
                    </div>
               </div>
               <div className={`p-10 text-center space-y-8 ${featured ? 'bg-rose-950 text-white' : 'bg-white'}`}>
                    <div className="inline-block relative">
                         <p className="text-[44px] font-black leading-none tracking-tight">₹{price}</p>
                         <p className="text-[10px] uppercase tracking-widest mt-2 opacity-50">One Time Membership</p>
                    </div>
                    <button className={`w-full py-6 rounded-[32px] font-black text-[10px] uppercase tracking-[0.4em] transition-all ${featured ? 'bg-rose-600 text-white shadow-2xl hover:bg-rose-500' : 'bg-rose-50 text-rose-900 hover:bg-rose-950 hover:text-white'}`}>
                         Get Started
                    </button>
               </div>
          </div>
     );
}

function WeddingContactCard({ icon: Icon, value, isCake, label }: { icon: any, value: string, isCake?: boolean, label?: string }) {
    if (!value) return null;
    return (
        <div className="bg-white border-4 border-white rounded-[48px] p-8 pt-16 relative flex flex-col items-center justify-center group hover:shadow-2xl transition-all shadow-sm ring-1 ring-rose-50 hover:ring-rose-200 min-h-[140px]">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-rose-50 rounded-[36px] overflow-hidden flex items-center justify-center text-rose-500 shadow-xl group-hover:bg-rose-600 group-hover:text-white transition-all group-hover:rotate-[15deg] group-hover:scale-110">
                  <div className="relative w-full h-full flex items-center justify-center p-3">
                       <Heart className="absolute inset-0 w-full h-full text-rose-100 group-hover:text-rose-500/20" size={80} />
                       <div className="relative z-10">
                            <Icon size={32} />
                       </div>
                  </div>
             </div>
             {label && <p className="text-[10px] font-black text-rose-300 uppercase tracking-widest mb-2">{label}</p>}
             <p className="text-lg font-black text-rose-950 text-center leading-tight tracking-tighter px-2">
                {value}
             </p>
        </div>
    );
}
