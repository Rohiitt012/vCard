import React, { useEffect, useState } from "react";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { Mail, Phone, MapPin, Cake, Target, Presentation, Calendar, ChevronLeft, ChevronRight, LayoutGrid, Share2, MessageCircle, ExternalLink, User, Sparkles, Star, Download } from "lucide-react";
import { generateQrDataUrl } from "@/lib/qr";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

const DEFAULT_SERVICES = [
  {
    name: "Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icon: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=400"
  },
  {
    name: "Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icon: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400"
  }
];

const DEFAULT_PORTFOLIO = [
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icon: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=400"
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400"
  }
];

const DEFAULT_TESTIMONIALS = [
  {
    name: "Shane Watson",
    role: "CEO at Tarsons",
    quote: "Lorem ipsum dolor sit amet, consectetur elit. Proin dignissim porttitor sollicitudin. Duis ante, aliquet a nisl ac, pharetra suscipit quam.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
  }
];

const DEFAULT_BUSINESS_HOURS = {
  Monday: { start: "12:00 AM", end: "12:00 AM", enabled: true },
  Tuesday: { start: "12:00 AM", end: "12:00 AM", enabled: true },
  Wednesday: { start: "12:00 AM", end: "12:00 AM", enabled: true },
  Thursday: { start: "12:00 AM", end: "12:00 AM", enabled: true },
  Friday: { start: "12:00 AM", end: "12:00 AM", enabled: true },
  Saturday: { start: "12:00 AM", end: "12:00 AM", enabled: true },
  Sunday: { start: "12:00 AM", end: "12:00 AM", enabled: false },
};

export function Corporate2VCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [qrCode, setQrCode] = useState<string>("");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const url = `${baseUrl}/${slug}`;
    generateQrDataUrl(url).then(setQrCode);
  }, [baseUrl, slug]);
  const name = card.title || "Corporate Profile";
  const role = card.occupation || card.tagline || "Founder Â· CXO Â· Advisor";
  const email = card.email;
  const phone = card.phone;
  const address = card.address;
  const birthDate = card.birthDate;
  const testimonials =
    card.testimonials && card.testimonials.length > 0 ? card.testimonials : DEFAULT_TESTIMONIALS;
  const activeTestimonial =
    testimonials[(testimonialIndex + testimonials.length) % testimonials.length];

  useEffect(() => {
    setTestimonialIndex(0);
  }, [card.id, testimonials.length]);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-[#1A1E29] font-sans flex justify-center px-0 py-0 overflow-x-hidden">
      <div className="w-full max-w-[540px] bg-white relative flex flex-col shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] pb-20 overflow-hidden">
        
        {/* TOP BANNER - DARK WITH GLOW */}
        <section className="relative h-[280px] w-full overflow-hidden bg-[#0A0C14]">
           <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-bl from-blue-950/20 via-transparent to-red-950/30"></div>
           <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-red-600/10 blur-[100px] rounded-full"></div>
           <div className="absolute top-[-30px] right-[-30px] w-[150px] h-[150px] bg-blue-500/10 blur-[80px] rounded-full"></div>
        </section>

        {/* IDENTITY SECTION - LEFT ALIGNED OVERLAP */}
        <section className="relative px-8 pt-0 pb-10 z-20 -mt-24">
            {/* Background Decorative Arcs (Image 1 Style) */}
            <div className="absolute top-10 right-[-180px] w-[400px] h-[400px] pointer-events-none select-none z-0">
               {/* Red Outer Arc */}
               <div className="absolute inset-0 rounded-full border-[60px] border-[#FF5E5E] scale-[1.2] translate-x-12 translate-y-12"></div>
               {/* Yellow Middle Arc */}
               <div className="absolute inset-0 rounded-full border-[60px] border-[#FFC15E] scale-[1.0] translate-x-32 translate-y-32"></div>
               {/* Dark Blue Inner Arc */}
               <div className="absolute inset-0 rounded-full bg-[#1A1E29] scale-[0.8] translate-x-48 translate-y-48"></div>
            </div>

            <div className="relative z-10">
               {/* Profile Image */}
               <div className="relative w-44 h-44 rounded-full border-4 border-white overflow-hidden shadow-2xl bg-white mb-8">
                   {card.image ? (
                       <Image
                           src={card.image}
                           alt={name}
                           fill
                           className="object-cover"
                           unoptimized={card.image.startsWith("data:")}
                       />
                   ) : (
                       <div className="w-full h-full flex items-center justify-center bg-slate-100 uppercase text-6xl font-black text-slate-300">
                           {name.charAt(0)}
                       </div>
                   )}
               </div>

               {/* Name and Title */}
               <div className="space-y-3 mb-10 text-left">
                  <h1 className="text-[44px] font-black text-[#1A1E29] leading-none tracking-tight">
                     {name}
                  </h1>
                  <p className="text-[20px] font-medium text-slate-400 capitalize">
                     {role}
                  </p>
               </div>

               {/* Social Icons row (Branded as per Image 1) */}
               <div className="mb-8">
                  <VCardSocialLinks
                     card={card}
                     iconSize={16}
                     layout="horizontal"
                     variant="circular"
                     containerClassName="flex justify-start flex-wrap gap-4"
                  />
               </div>

               {/* Contact List (Image 1 List style) */}
               <div className="space-y-10 mb-12">
                  {email && (
                     <div className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#FF5E5E] group-hover:bg-[#FF5E5E] group-hover:text-white transition-colors">
                           <Mail className="w-6 h-6" />
                        </div>
                        <p className="text-[17px] font-bold text-[#1A1E29] hover:text-[#FF5E5E] transition-colors break-all">
                           {email}
                        </p>
                     </div>
                  )}
                  {birthDate && (
                     <div className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#FF5E5E] group-hover:bg-[#FF5E5E] group-hover:text-white transition-colors">
                           <Cake className="w-6 h-6" />
                        </div>
                        <p className="text-[17px] font-bold text-[#1A1E29]">
                           {birthDate}
                        </p>
                     </div>
                  )}
                  {phone && (
                     <div className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#FF5E5E] group-hover:bg-[#FF5E5E] group-hover:text-white transition-colors">
                           <Phone className="w-6 h-6" />
                        </div>
                        <p className="text-[17px] font-bold text-[#1A1E29]">
                           {phone}
                        </p>
                     </div>
                  )}
                  {address && (
                     <div className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#FF5E5E] group-hover:bg-[#FF5E5E] group-hover:text-white transition-colors">
                           <MapPin className="w-6 h-6" />
                        </div>
                        <p className="text-[17px] font-bold text-[#1A1E29] leading-snug">
                           {address}
                        </p>
                     </div>
                  )}
               </div>

               {/* Action Button */}
               <div className="pt-6">
                   <button
                       onClick={() => onDownloadVCard?.()}
                       className="w-full h-18 py-6 rounded-3xl bg-[#1A1E29] text-white font-black text-xl shadow-[0_25px_50px_rgba(26,30,41,0.25)] hover:bg-[#2A2E39] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center"
                   >
                       Add to Contact
                   </button>
               </div>
            </div>
        </section>

        {/* OUR SERVICES SECTION (Image Style) */}
        {(true) && (
           <section className="px-8 py-16 relative">
              {/* Decorative Side Arc (Image Style) */}
              <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#323743] pointer-events-none z-0" />
              
              <div className="relative z-10">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#323743]">Our Services</h2>
                 </div>

                 <div className="grid grid-cols-2 gap-6">
                    {(card.services && card.services.length > 0 ? card.services : DEFAULT_SERVICES).map((s, idx) => (
                      <div key={idx} className="bg-white rounded-[40px] border border-slate-100 p-4 shadow-sm pb-8">
                        <div className="relative w-full aspect-square rounded-[32px] overflow-hidden mb-6 bg-slate-50">
                          {s.icon ? (
                            <Image
                              src={s.icon}
                              alt={s.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-200">
                              <Sparkles className="w-12 h-12" />
                            </div>
                          )}
                        </div>

                        <div className="space-y-3 px-2">
                          <h3 className="text-lg font-black text-[#323743] leading-tight">{s.name}</h3>
                          <p className="text-[13px] font-medium text-slate-400 leading-relaxed line-clamp-6">
                            {s.description}
                          </p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
           </section>
        )}

        {/* PORTFOLIO / WORKS SECTION (Image Style) */}
        {(true) && (
           <section className="px-8 py-16 relative overflow-hidden bg-[#F8FAFC]">
              {/* Decorative Side Arc on Left (Image Style) */}
              <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#E5E9F0] pointer-events-none z-0" />
              
              <div className="relative z-10 w-full text-center mb-12">
                 <h2 className="text-3xl font-bold text-[#323743]">Portfolio</h2>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-6 pb-12">
                 {(card.blogs && card.blogs.length > 0 ? card.blogs : DEFAULT_PORTFOLIO).map((item, idx) => (
                    <div key={idx} className="bg-white rounded-[40px] border border-slate-100 p-4 shadow-sm pb-8">
                       <div className="relative w-full aspect-square rounded-[32px] overflow-hidden mb-6 bg-slate-50">
                          {item.icon ? (
                             <Image 
                                src={item.icon} 
                                alt={item.title} 
                                fill 
                                className="object-cover"
                             />
                          ) : (
                             <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-200 uppercase font-black text-2xl italic">
                                WORK
                             </div>
                          )}
                       </div>
                       
                       <div className="space-y-3 px-2 text-left">
                          <h3 className="text-lg font-black text-[#323743] leading-tight">
                             {item.title}
                          </h3>
                          <p className="text-[13px] font-medium text-slate-400 leading-relaxed line-clamp-6">
                             {item.description}
                          </p>
                       </div>
                    </div>
                 ))}
              </div>
           </section>
        )}

        {/* TESTIMONIAL SECTION (Image Style) */}
        <section className="px-8 py-16 relative bg-white">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#323743]">Testimonial</h2>
           </div>

           <div className="relative group p-10 bg-white rounded-[40px] border border-slate-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] mb-12">
              <div className="flex justify-between items-start gap-6">
                 <div className="flex-1 space-y-6">
                    {/* Stars */}
                    <div className="flex gap-1 text-orange-400">
                       {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                    {/* Quote */}
                    <p className="text-[15px] font-medium text-slate-400 leading-relaxed italic">
                       {activeTestimonial.quote}
                    </p>
                    {/* Author */}
                    <div className="pt-4 border-t border-slate-50">
                       <p className="text-[14px] font-black text-slate-400">
                          <span className="text-slate-400">{activeTestimonial.name}</span>
                          <span className="mx-2 opacity-30">-</span>
                          <span className="font-medium">{activeTestimonial.role}</span>
                       </p>
                    </div>
                 </div>

                 {/* Author Image on Right */}
                 <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-50 flex-shrink-0">
                    <Image 
                       src={activeTestimonial.image || DEFAULT_TESTIMONIALS[0].image} 
                       alt={activeTestimonial.name || "Author"} 
                       width={112} 
                       height={112} 
                       className="w-full h-full object-cover"
                    />
                 </div>
              </div>

              {/* Floating Action Buttons Side Menu */}
              <div className="absolute top-1/2 -right-10 -translate-y-1/2 flex flex-col gap-4 z-50">
                  <button
                     type="button"
                     onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                     className="w-16 h-16 rounded-full bg-white border border-[#FF5E5E]/20 shadow-lg flex items-center justify-center text-[#FF5E5E] cursor-pointer hover:bg-[#FF5E5E] hover:text-white transition-colors"
                     aria-label="Previous testimonial"
                  >
                     <MessageCircle className="w-8 h-8" />
                  </button>
                  <div className="w-20 h-20 rounded-full bg-[#FF5E5E] shadow-2xl flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                     <LayoutGrid className="w-10 h-10" />
                  </div>
                  <button
                     type="button"
                     onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                     className="w-16 h-16 rounded-full bg-white border border-[#FF5E5E]/20 shadow-lg flex items-center justify-center text-[#FF5E5E] cursor-pointer hover:bg-[#FF5E5E] hover:text-white transition-colors"
                     aria-label="Next testimonial"
                  >
                     <Share2 className="w-8 h-8" />
                  </button>
              </div>
           </div>

           {/* Carousel Dots */}
           <div className="flex justify-center gap-2 mb-8">
              {testimonials.map((_, idx) => (
                <button
                  key={`testimonial-dot-${idx}`}
                  type="button"
                  onClick={() => setTestimonialIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    idx === testimonialIndex ? "bg-[#FF5E5E]" : "bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
           </div>
        </section>

        {/* QR CODE SECTION (Image Style) */}
        <section className="px-8 py-16 relative bg-white">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#323743]">Qr Code</h2>
           </div>

           <div className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] flex items-center justify-between gap-8 relative overflow-hidden">
              <div className="flex flex-col items-center gap-8 flex-1">
                 {/* Profile Mini circular overlap */}
                 <div className="w-32 h-32 rounded-full border-8 border-[#F0F2F5] shadow-inner overflow-hidden bg-slate-50">
                    <Image 
                       src={card.image || DEFAULT_TESTIMONIALS[0].image} 
                       alt="Profile" 
                       width={128} 
                       height={128} 
                       className="w-full h-full object-cover"
                    />
                 </div>
                 
                 {/* Download Button */}
                 <button 
                    className="w-full h-14 rounded-full bg-[#FF5E5E] text-white font-black text-sm shadow-xl shadow-red-500/20 hover:scale-[1.02] active:scale-95 transition-all"
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = qrCode;
                        link.download = `${slug}-qrcode.png`;
                        link.click();
                    }}
                 >
                    Download My QR Code
                 </button>
              </div>

              {/* QR Image */}
              <div className="w-48 h-48 bg-white border border-slate-50 p-2 rounded-xl flex items-center justify-center shrink-0">
                 {qrCode ? (
                    <img src={qrCode} alt="QR Code" className="w-full h-full" />
                 ) : (
                    <div className="w-full h-full bg-slate-50 animate-pulse rounded-lg" />
                 )}
              </div>
           </div>
        </section>

        {/* BUSINESS HOURS SECTION (Image Style) */}
        <section className="px-8 py-16 relative bg-white">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#323743]">Business Hours</h2>
           </div>

           <div className="space-y-4">
              {Object.entries(card.businessHours || DEFAULT_BUSINESS_HOURS).map(([day, hrs]: [string, any]) => (
                 <div key={day} className="flex items-center gap-6 p-5 bg-[#F8FAFC] rounded-[32px] border border-slate-50">
                    {/* Icon Box */}
                    <div className="w-14 h-14 bg-[#FF5E5E] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                       <Calendar className="w-7 h-7" />
                    </div>

                    <div className="space-y-1">
                       <p className="text-[13px] font-medium text-slate-400 leading-none">
                          {day}
                       </p>
                       <p className="text-[17px] font-black text-[#1A1E29]">
                          {hrs.enabled ? `${hrs.start} - ${hrs.end}` : "Closed"}
                       </p>
                    </div>
                 </div>
               ))}
          </div>
        </section>

        {/* CONTACT US SECTION (Image Style) */}
        <section className="px-8 py-16 relative bg-white">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#323743]">Contact Us</h2>
           </div>

           <div className="space-y-4">
              <input 
                 type="text" 
                 placeholder="Full Name" 
                 className="w-full h-16 px-6 rounded-2xl bg-[#F0F2F5] text-[#1A1E29] placeholder-slate-400 font-medium border-none focus:ring-2 focus:ring-[#FF5E5E]/20 transition-all outline-none"
              />
              <input 
                 type="email" 
                 placeholder="E-mail Address" 
                 className="w-full h-16 px-6 rounded-2xl bg-[#F0F2F5] text-[#1A1E29] placeholder-slate-400 font-medium border-none focus:ring-2 focus:ring-[#FF5E5E]/20 transition-all outline-none"
              />
              <input 
                 type="tel" 
                 placeholder="Phone Number" 
                 className="w-full h-16 px-6 rounded-2xl bg-[#F0F2F5] text-[#1A1E29] placeholder-slate-400 font-medium border-none focus:ring-2 focus:ring-[#FF5E5E]/20 transition-all outline-none"
              />
              <textarea 
                 placeholder="Type a message here..." 
                 className="w-full h-56 p-6 rounded-2xl bg-[#F0F2F5] text-[#1A1E29] placeholder-slate-400 font-medium border-none focus:ring-2 focus:ring-[#FF5E5E]/20 transition-all outline-none resize-none"
              ></textarea>
              
              <div className="flex justify-end pt-2">
                 <button className="h-16 px-10 rounded-full bg-[#FF5E5E] text-white font-black text-sm shadow-xl shadow-red-500/20 hover:scale-[1.02] active:scale-95 transition-all">
                    Send Message
                 </button>
              </div>
           </div>
        </section>

        {/* CREATE YOUR VCARD SECTION (Image Style) */}
        <section className="px-8 py-16 relative bg-white">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#323743]">Create Your VCard</h2>
           </div>

           <div className="space-y-12">
              <div className="w-full p-6 rounded-2xl border-2 border-[#F0F2F5] bg-white flex items-center justify-between group cursor-pointer hover:border-[#FF5E5E]/20 transition-colors shadow-[0_10px_30px_-5px_rgba(0,0,0,0.02)]">
                 <p className="text-[17px] font-bold text-[#FF5E5E] truncate pr-4">
                    {baseUrl}/{slug}
                 </p>
                 <ExternalLink className="w-6 h-6 text-[#FF5E5E]" />
              </div>

              <div className="flex justify-center">
                 <button 
                    onClick={() => onDownloadVCard?.()}
                    className="h-18 px-12 py-6 rounded-full bg-[#FF5E5E] text-white font-black text-xl shadow-[0_25px_50px_rgba(255,94,94,0.3)] hover:scale-[1.05] active:scale-95 transition-all flex items-center justify-center"
                 >
                    Add To Contact
                 </button>
              </div>
           </div>
        </section>

        {/* Bottom Red Slanted Detail (Image Style) */}
        <div className="absolute bottom-0 left-[-100px] w-[200px] h-[400px] bg-[#FF5E5E] skew-x-[-20deg] pointer-events-none z-0 opacity-90 transform-gpu"></div>

        {/* Dynamic Sections */}
        <VCardDynamicSections card={card} exclude={['services', 'blogs', 'testimonials', 'businessHours']} />
        
        {/* Footer info */}
        <footer className="px-8 py-10 mt-10 border-t border-slate-50 flex flex-col items-center gap-4 text-[11px] font-black text-slate-300 uppercase tracking-[0.3em]">
           <span>{name} &copy; {new Date().getFullYear()}</span>
        </footer>

        {/* Small Red Accent at Bottom Right (Image 1 style) */}
        <div className="absolute bottom-[-40px] right-[-40px] w-32 h-32 bg-[#FF5E5E] rounded-full blur-[80px] pointer-events-none opacity-40"></div>
      </div>
    </div>
  );
}
