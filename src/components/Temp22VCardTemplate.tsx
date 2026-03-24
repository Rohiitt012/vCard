"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle, Cake, ExternalLink, Calendar, Star, Clock, User } from "lucide-react";
import { generateQrDataUrl } from "@/lib/qr";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function Temp22VCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [qrCode, setQrCode] = useState<string>("");

  useEffect(() => {
    const url = `${baseUrl}/${slug}`;
    generateQrDataUrl(url).then(setQrCode);
  }, [baseUrl, slug]);

  const name = card.title || "Luccy Morries";
  const role = card.occupation || card.tagline || "a full stack developer";


  return (
    <div className="min-h-screen bg-[#6C76EF] flex justify-center items-center p-0 sm:p-4 overflow-x-hidden relative">
      {/* BACKGROUND DECORATIONS (BOKEH EFFECT) */}
      <div className="absolute top-[20%] right-[-50px] w-64 h-64 bg-yellow-400/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[30%] left-[10%] w-48 h-48 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-56 h-56 bg-yellow-300/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[60%] right-[20%] w-24 h-24 bg-yellow-200/50 rounded-full blur-2xl pointer-events-none" />
      
      {/* SHAPES AT THE BOTTOM */}
      <div className="absolute bottom-[-20px] left-[-20px] w-0 h-0 border-l-[150px] border-l-transparent border-t-[150px] border-t-pink-400/60 rotate-[15deg] pointer-events-none" />
      <div className="absolute bottom-[-40px] right-[-10px] w-40 h-40 bg-yellow-400 rounded-full pointer-events-none" />

      <div className="w-full max-w-[500px] bg-white/10 backdrop-blur-2xl rounded-[50px] shadow-2xl overflow-hidden border border-white/30 flex flex-col relative z-10 m-4 sm:m-0">
        
        {/* HEADER BANNER - GALAXY */}
        <div className="relative h-[280px] w-full overflow-hidden">
             <Image 
                src="https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1200" 
                alt="Galaxy Banner" 
                fill 
                className="object-cover"
                priority
             />
             <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* CONTENT ENVELOPE */}
        <div className="px-8 pb-12 -mt-24 relative z-20">
             
             {/* Profile Area */}
             <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-8">
                  <div className="relative w-44 h-44 rounded-[40px] overflow-hidden border-4 border-white/30 shadow-2xl bg-slate-200 shrink-0">
                       {card.image ? (
                           <Image 
                               src={card.image} 
                               alt={name} 
                               fill 
                               className="object-cover" 
                               unoptimized={card.image.startsWith("data:")}
                           />
                       ) : (
                           <Image 
                               src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" 
                               alt="Default Profile" 
                               fill 
                               className="object-cover"
                           />
                       )}
                  </div>

                  <div className="text-center sm:text-left flex-1 mb-4">
                       <h1 className="text-[38px] font-black text-white leading-tight drop-shadow-lg tracking-tight">
                            {name}
                       </h1>
                       <p className="text-white/90 text-[20px] font-semibold leading-none mt-1">
                            {role}
                       </p>
                  </div>
             </div>

             <div className="flex justify-center sm:justify-start gap-4 mb-12">
                   <VCardSocialLinks 
                        card={card} 
                        layout="horizontal" 
                        variant="circular" 
                        iconSize={28}
                        itemClassName="shadow-lg hover:scale-110 transition-transform"
                        containerClassName="flex gap-4"
                   />

             </div>

             {/* CONTACT INFO GRID */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6 mb-4">
                  <div className="flex items-center gap-5">
                       <div className="w-12 h-12 flex items-center justify-center shrink-0">
                            <Mail size={28} className="text-white drop-shadow-md" />
                       </div>
                       <div className="flex flex-col overflow-hidden">
                            <span className="text-white text-[16px] font-bold truncate">{card.email || "mluccy@gmail.com"}</span>
                       </div>
                  </div>
                  <div className="flex items-center gap-5">
                       <div className="w-12 h-12 flex items-center justify-center shrink-0">
                            <Phone size={28} className="text-white rotate-[15deg] drop-shadow-md" />
                       </div>
                       <div className="flex flex-col overflow-hidden">
                            <span className="text-white text-[16px] font-bold truncate">{card.phone || "+94 83066 14769"}</span>
                       </div>
                  </div>
                  <div className="flex items-center gap-5">
                       <div className="w-12 h-12 flex items-center justify-center shrink-0">
                            <Cake size={28} className="text-white drop-shadow-md" />
                       </div>
                       <div className="flex flex-col overflow-hidden">
                            <span className="text-white text-[16px] font-bold truncate">{card.birthDate || "30 - october 1997"}</span>
                       </div>
                  </div>
                  <div className="flex items-center gap-5">
                       <div className="w-12 h-12 flex items-center justify-center shrink-0">
                            <MapPin size={28} className="text-white drop-shadow-md" />
                       </div>
                       <div className="flex flex-col overflow-hidden">
                            <span className="text-white text-[16px] font-bold truncate">{card.address || "Surat - India"}</span>
                       </div>
                  </div>
             </div>

             {/* OUR SERVICES SECTION */}
             <section className="mt-16 relative">
                  <div className="text-center mb-8 flex flex-col items-center">
                       <h2 className="text-[32px] font-black text-white uppercase tracking-tight drop-shadow-md">Our Services</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                       {(card.services && card.services.length > 0 
                         ? card.services 
                         : [
                            { name: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", icon: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400" },
                            { name: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", icon: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=400" },
                            { name: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", icon: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400" },
                            { name: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", icon: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400" }
                         ]
                       ).map((service, idx) => (
                           <div key={idx} className="bg-white/10 backdrop-blur-xl rounded-[30px] p-4 flex flex-col items-start border border-white/20 shadow-xl overflow-hidden group">
                                <div className="relative w-full aspect-square rounded-[20px] overflow-hidden mb-6 shadow-lg">
                                     <Image 
                                         src={service.icon || "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=400"} 
                                         alt={service.name} 
                                         fill 
                                         className="object-cover group-hover:scale-105 transition-transform duration-500"
                                     />
                                </div>
                                <div className="space-y-3 px-2 pb-2">
                                     <h3 className="text-[20px] font-black text-white leading-tight">
                                          {service.name}
                                     </h3>
                                     <p className="text-[13px] font-medium text-white/70 leading-relaxed line-clamp-5">
                                          {service.description}
                                     </p>
                                </div>
                           </div>

                       ))}
                  </div>
             </section>

             {/* TESTIMONIAL SECTION */}
             <section className="mt-16 relative">
                  <div className="text-center mb-8 flex flex-col items-center">
                       <h2 className="text-[32px] font-black text-white uppercase tracking-tight drop-shadow-md">Testimonial</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 px-0">
                       {(card.testimonials && card.testimonials.length > 0
                         ? card.testimonials
                         : [
                            { id: "1", name: "Richard Moor", role: "CEO Founder at coinbase.com", quote: "Inside Casey's head is a seemingly inexhaustible font of ideas which he uses to reliably surprise and delight me with every creative design challenge.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200" },
                            { id: "2", name: "Donald Bridges", role: "CEO Founder at switchcoin", quote: "By far the easiest graphic designer I've had the pleasure of working with. He was very insightful from the beginning", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200" }
                         ]
                       ).map((t: any, idx) => (
                           <div key={idx} className="bg-white/10 backdrop-blur-xl rounded-[40px] p-8 flex flex-col items-center text-center border border-white/20 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-2xl pointer-events-none" />
                                <div className="relative w-28 h-28 rounded-full overflow-hidden mb-6 border-2 border-white/30 shadow-lg group-hover:scale-105 transition-transform duration-500">
                                     <Image 
                                         src={t.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"} 
                                         alt={t.name} 
                                         fill 
                                         className="object-cover" 
                                     />
                                </div>
                                <div className="flex gap-1.5 mb-6">
                                     {[1, 2, 3, 4, 5].map(s => <Star key={s} size={18} className="fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <p className="text-[14px] font-medium text-white leading-relaxed mb-6 italic">
                                     â€œ{t.quote || t.review}â€
                                </p>
                                <div className="space-y-1">
                                     <h4 className="text-[18px] font-black text-white drop-shadow-sm">{t.name}</h4>
                                     <p className="text-[12px] font-bold text-white/50 uppercase tracking-widest">{t.role}</p>
                                </div>
                           </div>

                       ))}
                  </div>
             </section>

             {/* BUSINESS HOURS SECTION */}
             <section className="mt-16 relative">
                  <div className="text-center mb-8 flex flex-col items-center">
                       <h2 className="text-[32px] font-black text-white uppercase tracking-tight drop-shadow-md">Business Hours</h2>
                  </div>

                  <div className="space-y-4 relative z-10 px-0">
                       {(card.businessHours 
                         ? Object.entries(card.businessHours).map(([day, bh]) => ({ 
                             day, 
                             hours: bh.enabled ? `${bh.start} - ${bh.end}` : 'Closed' 
                           }))
                         : [
                            { day: "Monday", hours: "12:00 AM - 12:00 AM" },
                            { day: "Tuesday", hours: "12:00 AM - 12:00 AM" },
                            { day: "Wednesday", hours: "12:00 AM - 12:00 AM" },
                            { day: "Thursday", hours: "12:00 AM - 12:00 AM" },
                            { day: "Friday", hours: "12:00 AM - 12:00 AM" },
                            { day: "Saturday", hours: "12:00 AM - 12:00 AM" },
                            { day: "Sunday", hours: "Closed" }
                         ]
                       ).map((bh, idx) => (
                           <div key={idx} className="bg-white/10 backdrop-blur-xl rounded-[30px] p-5 flex items-center gap-6 border border-white/20 shadow-xl relative overflow-hidden group hover:bg-white/15 transition-all">
                                <div className="w-16 h-16 rounded-[22px] bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-lg">
                                     <Calendar size={30} className="drop-shadow-sm opacity-90" />
                                </div>
                                <div className="flex flex-col text-left">
                                     <span className="text-[14px] font-bold text-white/60 mb-1">{bh.day}</span>
                                     <span className="text-[20px] font-black text-white tracking-tight leading-none">{bh.hours}</span>
                                </div>
                           </div>

                       ))}
                  </div>
             </section>

             {/* CONTACT US SECTION */}
             <section className="mt-16 relative">
                  <div className="text-center mb-8 flex flex-col items-center">
                       <h2 className="text-[32px] font-black text-white uppercase tracking-tight drop-shadow-md">Contact Us</h2>
                  </div>

                  <form className="bg-white/10 backdrop-blur-xl rounded-[40px] p-8 sm:p-10 border border-white/20 shadow-xl relative z-10" onSubmit={(e) => e.preventDefault()}>
                       <div className="flex flex-col lg:flex-row gap-8">
                            {/* Left Side Inputs */}
                            <div className="flex-1 space-y-6">
                                 <div className="space-y-2">
                                      <label className="text-white/70 text-[14px] font-bold ml-2">Your Name</label>
                                      <div className="relative">
                                           <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                <User size={20} className="text-white/60" />
                                           </div>
                                           <input 
                                             type="text" 
                                             className="w-full bg-white/5 border border-white/30 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all font-semibold"
                                           />
                                      </div>
                                 </div>
                                 <div className="space-y-2">
                                      <label className="text-white/70 text-[14px] font-bold ml-2">E-mail</label>
                                      <div className="relative">
                                           <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                <Mail size={20} className="text-white/60" />
                                           </div>
                                           <input 
                                             type="email" 
                                             className="w-full bg-white/5 border border-white/30 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all font-semibold"
                                           />
                                      </div>
                                 </div>
                                 <div className="space-y-2">
                                      <label className="text-white/70 text-[14px] font-bold ml-2">Phone</label>
                                      <div className="relative">
                                           <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                <Phone size={20} className="text-white/60" />
                                           </div>
                                           <input 
                                             type="tel" 
                                             className="w-full bg-white/5 border border-white/30 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all font-semibold"
                                           />
                                      </div>
                                 </div>
                            </div>

                            {/* Right Side Message */}
                            <div className="flex-1 flex flex-col space-y-2">
                                 <label className="text-white/70 text-[14px] font-bold ml-2">Your Message</label>
                                 <textarea 
                                   className="w-full h-full min-h-[150px] bg-white/5 border border-white/30 rounded-3xl p-6 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all font-semibold resize-none"
                                   placeholder="Type a Message.."
                                 ></textarea>
                            </div>
                       </div>

                       <div className="mt-10 flex justify-center">
                            <button 
                              type="submit"
                              className="bg-white text-[#FF7EB3] px-14 py-4 rounded-2xl font-black text-[18px] shadow-xl hover:bg-slate-50 transition-all active:scale-95"
                            >
                                 Send Message
                            </button>
                       </div>
                  </form>
             </section>

             {/* DYNAMIC SECTIONS */}
             <div className="mt-16 pt-12 border-t border-white/20 text-white space-y-12">
                  <VCardDynamicSections card={card} exclude={['services', 'testimonials', 'businessHours']} />
             </div>

             {/* QR CODE SECTION (Pink Horizontal Card) */}
             <div className="mt-16 relative">
                  <div className="bg-[#FF7EB3] rounded-[40px] p-10 flex flex-col items-center border border-white/20 shadow-2xl relative overflow-hidden">
                       <h2 className="text-[26px] font-black text-white mb-8 drop-shadow-sm">QR Code</h2>
                       
                       <div className="flex flex-col sm:flex-row items-center justify-center gap-10 w-full">
                            {/* QR Code Left */}
                            <div className="relative w-44 h-44 flex items-center justify-center bg-white/20 rounded-3xl p-2 border border-white/30">
                                 {qrCode && (
                                     <Image 
                                         src={qrCode} 
                                         alt="QR Code" 
                                         fill 
                                         className="object-contain p-2 brightness-0 invert" 
                                     />
                                 )}
                            </div>

                            {/* Info & Download Right */}
                            <div className="flex flex-col items-center gap-6">
                                 <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/40 shadow-lg">
                                      {card.image ? (
                                          <Image src={card.image} alt={name} fill className="object-cover" />
                                      ) : (
                                          <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" alt="Profile" fill className="object-cover" />
                                      )}
                                 </div>
                                 <button 
                                   onClick={() => {
                                      const link = document.createElement('a');
                                      link.href = qrCode;
                                      link.download = `vcard-qr-${slug}.png`;
                                      link.click();
                                   }}
                                   className="bg-white text-[#FF7EB3] px-8 py-4 rounded-2xl font-black text-[15px] shadow-xl hover:bg-slate-50 transition-all active:scale-95"
                                 >
                                      Download My QR Code
                                 </button>
                            </div>
                       </div>
                  </div>
             </div>

             {/* CREATE YOUR VCARD SECTION */}
             <section className="mt-16 pb-12 relative overflow-visible">
                  <div className="text-center mb-8 flex flex-col items-center">
                       <h2 className="text-[28px] font-black text-white drop-shadow-md">Create Your VCard</h2>
                  </div>

                  <div className="space-y-12 relative z-10 flex flex-col items-center">
                       {/* URL Pill */}
                       <a 
                           href={`${baseUrl}/${slug}`}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-full bg-white/10 backdrop-blur-2xl rounded-full py-6 px-10 flex items-center justify-between group cursor-pointer border border-white/20 shadow-xl"
                       >
                           <span className="text-[16px] font-bold text-white truncate pr-4">
                               {baseUrl.replace(/^https?:\/\//, '')}/{slug}
                           </span>
                           <ExternalLink className="w-6 h-6 text-white opacity-60 group-hover:opacity-100 transition-opacity" />
                       </a>

                       {/* Add To Contact Button */}
                       <button 
                           onClick={onDownloadVCard}
                           className="bg-white text-[#FF7EB3] rounded-2xl px-14 py-5 text-[20px] font-black tracking-tight shadow-2xl hover:bg-slate-50 transition-all active:scale-95"
                       >
                           Add To Contact
                       </button>
                  </div>
             </section>
        </div>

        {/* FLOATING ACTION BUTTONS */}
        <div className="fixed bottom-10 right-10 flex flex-col gap-5 z-[100] scale-90 sm:scale-100 origin-bottom-right">
             {/* WhatsApp FAB */}
             <div className="w-14 h-14 bg-white/40 backdrop-blur-2xl rounded-full border border-white/40 flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer">
                  <MessageCircle size={24} />
             </div>
             {/* Share FAB */}
             <div className="w-14 h-14 bg-white/40 backdrop-blur-2xl rounded-full border border-white/40 flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer">
                  <ExternalLink size={24} />
             </div>
             {/* Menu FAB */}
             <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer border border-white/30">
                  <div className="grid grid-cols-2 gap-1">
                       <div className="w-2.5 h-2.5 bg-white rounded-sm" />
                       <div className="w-2.5 h-2.5 bg-white rounded-sm" />
                       <div className="w-2.5 h-2.5 bg-white rounded-sm" />
                       <div className="w-2.5 h-2.5 bg-white rounded-sm" />
                  </div>
             </div>
        </div>

        {/* FOOTER */}
        <div className="py-10 text-center bg-black/5 border-t border-white/10 mt-auto">
             <p className="text-[12px] font-black text-white/50 uppercase tracking-[0.4em]">
                &copy; {new Date().getFullYear()} Â· Digital Profile Elito
             </p>
        </div>

      </div>
    </div>
  );
}
