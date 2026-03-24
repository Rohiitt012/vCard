"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageCircle, Star, Cake, Globe, ExternalLink, Clock, LayoutGrid } from "lucide-react";
import { generateQrDataUrl } from "@/lib/qr";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function Temp23VCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [qrCode, setQrCode] = useState<string>("");
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    const url = `${baseUrl}/${slug}`;
    generateQrDataUrl(url).then(setQrCode);

    // Loader timeout
    const t = setTimeout(() => setLoaderVisible(false), 1500);
    return () => clearTimeout(t);
  }, [baseUrl, slug]);

  const name = card.title || "Braxton Reyes";
  const role = card.occupation || card.tagline || "a freelancer UI/UX Designer";


  return (
    <div className="min-h-screen bg-[#010214] flex justify-center items-center p-0 sm:p-4 overflow-x-hidden relative">
      
      {/* MINIMAL PRELOADER */}
      {loaderVisible && (
          <div className="fixed inset-0 z-[99999] bg-[#010214] flex items-center justify-center transition-opacity duration-1000">
               <div className="w-24 h-24 bg-[#1A1C35] rounded-[24px] flex items-center justify-center animate-pulse border border-white/5">
                    <div className="w-12 h-12 bg-white rounded-sm" />
               </div>
          </div>
      )}

      {/* GLOW DECORATIONS */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-[500px] bg-[#0A0B1E] rounded-[40px] shadow-2xl overflow-hidden border border-white/5 flex flex-col relative z-10 m-4 sm:m-0">
        
        {/* HEADER - ABSTRACT BLUE SHARDS */}
        <div className="relative h-[250px] w-full bg-black overflow-hidden flex items-center justify-center">
             {/* Abstract Shards (Using Gradients and skewed divs) */}
             <div className="absolute inset-0 bg-black" />
             <div className="absolute top-[-20%] right-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-blue-900/50 via-blue-600/30 to-transparent rotate-12" />
             <div className="absolute top-0 right-[-30%] w-full h-full bg-blue-600/40 skew-x-[-45deg] blur-sm opacity-60" />
             <div className="absolute top-[-10%] left-[-20%] w-[80%] h-full bg-blue-800/20 skew-x-[45deg]" />
             <div className="absolute bottom-0 left-[-40%] w-full h-[80%] bg-blue-500/20 skew-y-[20deg] blur-xl" />
             
             {/* Subshards for more detail */}
             <div className="absolute top-[20%] left-[10%] w-[40%] h-[60%] bg-gradient-to-tr from-blue-400/20 to-transparent skew-x-[-20deg]" />
             <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[40%] bg-blue-700/30 skew-x-[15deg] blur-md" />
        </div>

        {/* CONTENT AREA */}
        <div className="px-6 sm:px-10 pb-12 -mt-16 relative z-20">
             
             {/* Profile Photo */}
             <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-10">
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-[6px] border-[#0A0B1E] shadow-2xl bg-slate-800 shrink-0">
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
                               src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400" 
                               alt="Default Profile" 
                               fill 
                               className="object-cover"
                           />
                       )}
                  </div>

                  <div className="text-center sm:text-left flex-1 mb-2">
                       <h1 className="text-[32px] font-black text-white leading-tight tracking-tight">
                            {name}
                       </h1>
                       <p className="text-white/60 text-[18px] font-medium mt-1">
                            {role}
                       </p>
                  </div>
             </div>

             {/* SOCIAL ICONS BAR */}
              <VCardSocialLinks 
                   card={card} 
                   layout="horizontal" 
                   variant="circular" 
                   iconSize={24}
                   itemClassName="shadow-lg hover:scale-110 transition-transform"
                   containerClassName="flex justify-center sm:justify-start gap-4 mb-12"
              />

             {/* INFO GRID CARD */}
             <div className="bg-[#1A1C35] rounded-[32px] p-8 grid grid-cols-2 gap-y-10 mb-12 border border-white/5">
                  <div className="flex flex-col items-center text-center">
                       <div className="w-12 h-12 rounded-full bg-[#0A0B1E] flex items-center justify-center text-white mb-3 shadow-lg">
                            <Mail size={20} />
                       </div>
                       <p className="text-white/40 text-[12px] mb-1 uppercase tracking-wider font-semibold">E-mail address</p>
                       <p className="text-white font-bold text-[14px] truncate w-full px-2">{card.email || "braxtonreyes@gmail.com"}</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                       <div className="w-12 h-12 rounded-full bg-[#0A0B1E] flex items-center justify-center text-white mb-3 shadow-lg">
                            <Phone size={20} />
                       </div>
                       <p className="text-white/40 text-[12px] mb-1 uppercase tracking-wider font-semibold">Mobile Number</p>
                       <p className="text-white font-bold text-[14px]">{card.phone || "+49 95864 12484"}</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                       <div className="w-12 h-12 rounded-full bg-[#0A0B1E] flex items-center justify-center text-white mb-3 shadow-lg">
                            <Cake size={20} />
                       </div>
                       <p className="text-white/40 text-[12px] mb-1 uppercase tracking-wider font-semibold">Date of Birth</p>
                       <p className="text-white font-bold text-[14px]">{card.birthDate || "4 December 1998"}</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                       <div className="w-12 h-12 rounded-full bg-[#0A0B1E] flex items-center justify-center text-white mb-3 shadow-lg">
                            <MapPin size={20} />
                       </div>
                       <p className="text-white/40 text-[12px] mb-1 uppercase tracking-wider font-semibold">Location</p>
                       <p className="text-white font-bold text-[14px]">{card.address || "Berlin - Germany"}</p>
                  </div>
             </div>

             {/* SERVICES SECTION */}
             <div className="mb-16">
                  <h2 className="text-white text-[28px] font-bold text-center mb-10">Our Services</h2>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-10">
                       {(card.services && card.services.length > 0 ? card.services : [
                           { name: "UI/UX Design", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=400" },
                           { name: "Web Development", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400" },
                           { name: "App Development", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400" },
                           { name: "Motion Graphics", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400" },
                       ]).map((service: any, idx: number) => (
                           <div key={idx} className="flex flex-col">
                                <div className="relative aspect-square rounded-[24px] overflow-hidden mb-4 shadow-xl border border-white/5">
                                     <Image 
                                         src={service.image || service.icon || "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=400"} 
                                         alt={service.name} 
                                         fill 
                                         className="object-cover"
                                     />
                                </div>
                                <h4 className="text-white font-bold text-[18px] mb-2">{service.name}</h4>
                                <p className="text-white/40 text-[13px] leading-[1.6] line-clamp-6">{service.description}</p>
                           </div>
                       ))}
                  </div>
             </div>

             {/* TESTIMONIAL SECTION */}
             <div className="mb-16">
                  <h2 className="text-white text-[28px] font-bold text-center mb-10 underline decoration-white/20 underline-offset-8">Testimonial</h2>
                  <div className="bg-[#1A1C35] rounded-[32px] p-10 flex flex-col items-center text-center border border-white/5 relative overflow-hidden">
                       <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white mb-6">
                            {(card.testimonials && card.testimonials[0]?.image) ? (
                                <Image src={card.testimonials[0].image} alt="Testimonial" fill className="object-cover" />
                            ) : (
                                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200" alt="Default Testimonial" fill className="object-cover" />
                            )}
                       </div>
                       <h4 className="text-white font-bold text-[20px] mb-4">{(card.testimonials && card.testimonials[0]?.name) || "Janni Lopez"}</h4>
                       <p className="text-white/40 text-[15px] leading-[1.8] italic font-medium">
                            â€œ{(card.testimonials && card.testimonials[0]?.quote) || "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."}â€
                       </p>
                       {/* Pagination dots */}
                       <div className="flex gap-2 mt-8">
                            <div className="w-2 h-2 rounded-full bg-white opacity-100" />
                            <div className="w-2 h-2 rounded-full bg-white opacity-30" />
                            <div className="w-2 h-2 rounded-full bg-white opacity-30" />
                       </div>
                  </div>
             </div>

             {/* QR CODE SECTION */}
             <div className="mb-16">
                  <h2 className="text-white text-[28px] font-bold text-center mb-10 underline decoration-white/20 underline-offset-8">QR Code</h2>
                  <div className="relative pt-12">
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 w-24 h-24 rounded-full overflow-hidden border-4 border-[#0A0B1E] bg-[#0A0B1E] shadow-2xl">
                           {card.image ? (
                               <Image src={card.image} alt={name} fill className="object-cover" unoptimized={card.image.startsWith("data:")} />
                           ) : (
                               <div className="w-full h-full flex items-center justify-center bg-blue-900 text-3xl font-bold text-white">{name.charAt(0)}</div>
                           )}
                       </div>
                       <div className="bg-white rounded-[32px] p-10 flex flex-col items-center shadow-2xl">
                            <div className="relative w-64 h-64 mb-10 transition-transform hover:scale-105 duration-500">
                                 {qrCode && <Image src={qrCode} alt="QR Code" fill className="object-contain" />}
                            </div>
                            <button 
                                onClick={() => {
                                    if (qrCode) {
                                        const link = document.createElement('a');
                                        link.href = qrCode;
                                        link.download = `${slug}-qr.png`;
                                        link.click();
                                    }
                                }}
                                className="bg-[#1A1C35] text-white px-10 py-5 rounded-2xl font-bold text-[16px] shadow-lg hover:opacity-90 transition-all active:scale-95"
                            >
                                Download My QR Code
                            </button>
                       </div>
                  </div>
             </div>

             {/* BUSINESS HOURS SECTION */}
             <div className="mb-16">
                  <h2 className="text-white text-[28px] font-bold text-center mb-10 underline decoration-white/20 underline-offset-8">Business Hours</h2>
                  <div className="space-y-4">
                       {[
                           { day: "Monday", hours: card.businessHours?.monday || "12:00 AM - 12:00 AM" },
                           { day: "Tuesday", hours: card.businessHours?.tuesday || "12:00 AM - 12:00 AM" },
                           { day: "Wednesday", hours: card.businessHours?.wednesday || "12:00 AM - 12:00 AM" },
                           { day: "Thursday", hours: card.businessHours?.thursday },
                           { day: "Friday", hours: card.businessHours?.friday },
                           { day: "Saturday", hours: card.businessHours?.saturday },
                           { day: "Sunday", hours: card.businessHours?.sunday },
                       ].map((item, idx) => {
                           const bh = item.hours as any;
                           const isClosed = !bh || (typeof bh === 'object' && !bh.enabled) || (typeof bh === 'string' && bh.toLowerCase().includes('closed'));
                           const displayHours = typeof bh === 'object' && bh.start ? `${bh.start} - ${bh.end}` : (bh || (item.day === "Sunday" ? "Closed" : "12:00 AM - 12:00 AM"));

                           return (
                               <div key={idx} className="bg-[#1A1C35] rounded-2xl p-5 flex items-center gap-6 border border-white/5">
                                    <div className="w-14 h-14 rounded-xl bg-[#0A0B1E] flex items-center justify-center text-white shrink-0">
                                         <Clock size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                         <span className="text-white font-bold text-[18px]">{item.day}</span>
                                         <span className={isClosed ? "text-red-400 font-medium" : "text-white/60 font-medium"}>
                                             {displayHours}
                                         </span>
                                    </div>
                               </div>
                           );
                       })}
                  </div>
             </div>

             {/* DYNAMIC SECTIONS */}
             <div className="space-y-12 text-white">
                  <VCardDynamicSections card={card} exclude={['services', 'testimonials', 'businessHours']} />
             </div>

             {/* ENQUIRIES SECTION */}
             <div className="mb-24">
                  <h2 className="text-white text-[28px] font-bold text-center mb-10">Enquiries</h2>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                       <div>
                            <label className="block text-white font-bold mb-3">Your Name</label>
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                className="w-full bg-white text-slate-800 placeholder-slate-400 py-5 px-6 rounded-2xl outline-none border-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                            />
                       </div>
                       <div>
                            <label className="block text-white font-bold mb-3">Email</label>
                            <input 
                                type="email" 
                                placeholder="E-mail Address" 
                                className="w-full bg-white text-slate-800 placeholder-slate-400 py-5 px-6 rounded-2xl outline-none border-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                            />
                       </div>
                       <div>
                            <label className="block text-white font-bold mb-3">Phone</label>
                            <input 
                                type="tel" 
                                placeholder="Mobile Number" 
                                className="w-full bg-white text-slate-800 placeholder-slate-400 py-5 px-6 rounded-2xl outline-none border-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                            />
                       </div>
                       <div>
                            <label className="block text-white font-bold mb-3">Your Message</label>
                            <textarea 
                                rows={5} 
                                placeholder="Type a message here..." 
                                className="w-full bg-white text-slate-800 placeholder-slate-400 py-5 px-6 rounded-2xl outline-none border-none focus:ring-2 focus:ring-blue-500 transition-all font-medium resize-none"
                            ></textarea>
                       </div>
                       <div className="flex justify-end pt-4">
                            <button className="bg-[#1A1C35] text-white px-12 py-5 rounded-[20px] font-bold text-[18px] shadow-xl hover:bg-blue-900 transition-all active:scale-95">
                                 Send Message
                            </button>
                       </div>
                  </form>
             </div>

             {/* CREATE YOUR VCARD SECTION */}
             <div className="mb-24 flex flex-col items-center">
                  <h2 className="text-white text-[28px] font-bold text-center mb-10">Create Your VCard</h2>
                  
                  {/* URL PILL */}
                  <div className="w-full bg-white rounded-2xl py-6 px-8 flex items-center justify-between shadow-2xl mb-12">
                       <span className="text-[#1A1C35] font-bold text-[16px] truncate pr-4">
                            {baseUrl}/{slug}
                       </span>
                       <ExternalLink size={20} className="text-[#1A1C35] shrink-0" />
                  </div>

                  <button 
                    onClick={onDownloadVCard}
                    className="bg-[#1A1C35] text-white px-12 py-5 rounded-[20px] font-bold text-[18px] shadow-xl hover:bg-blue-900 transition-all active:scale-95 border border-white/5"
                  >
                        Add To Contact
                  </button>
             </div>
        </div>

        {/* FOOTER */}
        <div className="py-10 text-center bg-black/40 border-t border-white/5 mt-auto">
             <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.5em]">
                &copy; {new Date().getFullYear()} Â· Digital Profile Luxe
             </p>
        </div>

      </div>
    </div>
  );
}

function InfoItem({ icon: Icon, value }: { icon: any, value: string }) {
    if (!value) return null;
    return (
        <div className="flex items-center gap-6 group">
             <div className="w-12 h-12 rounded-2xl bg-[#1A1C35] flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                <Icon size={24} />
             </div>
             <span className="text-white/80 text-[16px] font-semibold tracking-tight">{value}</span>
        </div>
    );
}
