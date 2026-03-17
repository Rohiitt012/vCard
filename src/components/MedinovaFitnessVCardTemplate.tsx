"use client";
import { SocialCircleIcon } from "@/components/SocialCircleIcon";
/* Medinova-style fitness vCard single-page layout (Tailwind CSS, narrow card) */
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

const DEFAULT_PRIMARY = "#facc15"; // Fitness Yellow

const DEFAULT_SERVICES = [
  { title: "Personal Training", icon: "🏋️", description: "1:1 coaching focused on strength, mobility and form." },
  { title: "Group Classes", icon: "🤸", description: "High‑energy sessions for weight loss and conditioning." },
  { title: "Nutrition Coaching", icon: "🥗", description: "Custom meal guidance aligned with your fitness goals." },
  { title: "Strength Programs", icon: "💪", description: "Progressive programming for muscle gain and performance." },
  { title: "Online Coaching", icon: "📱", description: "Remote check‑ins, training plans and accountability." },
  { title: "Recovery & Mobility", icon: "🧘", description: "Sessions designed to improve mobility and prevent injury." },
];

const DEFAULT_PACKAGES = [
  {
    name: "Starter",
    label: "Kickstart Program",
    price: "₹2,999",
  },
  {
    name: "Pro",
    label: "Transformation Program",
    price: "₹7,499",
    featured: true,
  },
  {
    name: "Elite",
    label: "1:1 Coaching",
    price: "Custom",
  },
];

export function MedinovaFitnessVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const primaryColor = card.templatePrimaryColor || DEFAULT_PRIMARY;

  const name = card.title || "FitNova";
  const role = card.occupation || card.tagline || "Fitness Coach · Trainer";
  const phone = card.phone || "+012 345 6789";
  const email = card.email || "coach@example.com";
  const address = card.address || "Your Studio Address, City";

  // Robust check for testimonials in both top-level and potential nested data property
  const rawTestimonials = (card as any).testimonials || (card as any).data?.testimonials || (card as any).testmonials;
  const hasUserTestimonials = Array.isArray(rawTestimonials) && rawTestimonials.length > 0;


  const testimonials = hasUserTestimonials 
    ? rawTestimonials 
    : [
        { name: "Akash", quote: "Lost 8kg in 3 months while improving overall strength and energy.", image: "" },
        { name: "Neha", quote: "Sessions are challenging but safe. Programming feels tailored to my lifestyle.", image: "" },
        { name: "Rohan", quote: "Great balance of strength, conditioning and mobility. I feel stronger and pain-free.", image: "" }
      ];
  const heroTitle =
    (card as any).headline || "Best Fitness Training Solution In Your City";

  const services =
    card.services && card.services.length > 0 ? card.services : DEFAULT_SERVICES;

  const packages = (card as any).packages && Array.isArray((card as any).packages)
    ? (card as any).packages
    : DEFAULT_PACKAGES;

  return (
    <>
      <div className="min-h-screen bg-[#111111] text-slate-100 flex justify-center px-2 py-4 sm:px-4 sm:py-8">
        <div className="w-full max-w-[540px] rounded-[32px] bg-[#0A0A0A] shadow-[0_24px_80px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden transition-shadow duration-500 ease-out hover:shadow-[0_32px_120px_rgba(0,0,0,0.7)]">
          {/* Premium Dark Fitness Hero – Inspired by Reference */}
          <section className="relative h-[610px] w-full overflow-hidden bg-[#0A0A0A]">
            {/* Main Hero Background */}
            <div className="absolute inset-0">
               <Image
                 src={(card as any).coverImage || "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop"}
                 alt="Fitness Background"
                 fill
                 className="object-cover opacity-60 scale-110"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/40" />
            </div>

            {/* Top Bar Overlay */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
               <div className="flex items-center gap-2">
                 <div className="h-2 w-10 bg-[#facc15] rounded-full" />
                 <div className="h-2 w-4 bg-white/20 rounded-full" />
               </div>
               <button className="bg-[#facc15] text-black px-3.5 py-1.5 rounded-lg font-black text-xs flex items-center gap-2 shadow-xl hover:scale-105 transition-transform">
                 EN <span className="text-[8px] opacity-60">▼</span>
               </button>
            </div>

            {/* Centered Profile Pill Card */}
            <div className="absolute bottom-10 left-0 right-0 px-5 z-20">
               <div className="relative max-w-[440px] mx-auto h-[120px]">
                  {/* The Integrated Pill Container */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xl rounded-[60px] border-x-[3px] border-[#facc15] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex items-center px-5">
                     {/* Circular Profile Avatar with Yellow Glow */}
                     <div className="relative h-20 w-20 flex-shrink-0 group">
                        <div className="absolute inset-0 rounded-full bg-[#facc15] animate-pulse opacity-20 group-hover:opacity-40" />
                        <div className="absolute inset-0 rounded-full border-[3px] border-[#facc15] p-1.5">
                           <div className="relative h-full w-full rounded-full overflow-hidden bg-slate-800">
                              {card.image ? (
                                <Image src={card.image} alt={name} fill className="object-cover" unoptimized={card.image.startsWith('data:')} />
                              ) : (
                                <div className="h-full w-full flex items-center justify-center text-2xl font-black text-[#facc15]">
                                  {name.charAt(0)}
                                </div>
                              )}
                           </div>
                        </div>
                     </div>

                     {/* Profile Identity Details */}
                     <div className="ml-5 flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                           <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic truncate">
                              {name}
                           </h2>
                           <div className="flex-shrink-0 bg-[#facc15] rounded-full p-0.5 shadow-[0_0_10px_rgba(250,204,21,0.5)]">
                              <svg className="w-3.5 h-3.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                           </div>
                        </div>
                        <p className="text-[#facc15] font-black uppercase tracking-[0.2em] text-[10px] opacity-80 mt-1">
                           {role}
                        </p>
                     </div>
                  </div>

                  {/* Grid Action Button (Image Reference) */}
                  <button 
                    onClick={() => onDownloadVCard?.()}
                    className="absolute -top-4 -right-2 h-16 w-16 rounded-[22px] bg-[#facc15] text-black shadow-[0_15px_30px_rgba(250,204,21,0.3)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 z-30"
                  >
                     <div className="grid grid-cols-2 gap-1.5 focus:outline-none">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="w-1.5 h-1.5 bg-black rounded-[2px]" />
                        ))}
                     </div>
                  </button>
               </div>
            </div>

            {/* Artistic Dumbbell Decoration */}
            <div className="absolute bottom-6 right-8 opacity-20 -rotate-45 pointer-events-none hidden sm:block">
               <svg width="100" height="40" viewBox="0 0 100 40" fill="white">
                  <rect x="0" y="5" width="12" height="30" rx="3" />
                  <rect x="15" y="10" width="8" height="20" rx="2" />
                  <rect x="23" y="15" width="54" height="10" />
                  <rect x="77" y="10" width="8" height="20" rx="2" />
                  <rect x="88" y="5" width="12" height="30" rx="3" />
               </svg>
            </div>
          </section>

          {/* Premium About & Contact Section – Inspired by Reference */}
          <section className="bg-[#0A0A0A] px-6 py-12 no-print relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-20 left-0 opacity-10 pointer-events-none">
              <svg width="120" height="120" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" fill="none" />
                <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="1" fill="none" />
              </svg>
            </div>

            {/* About Text Description */}
            <div className="max-w-md mx-auto text-center mb-10">
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                {card.description || "A Fitness Trainer helps individuals improve their health and physical performance through customized workout routines, goal setting, and motivation. They guide clients in proper exercise techniques, monitor progress, and promote a balanced lifestyle through fitness and wellness coaching."}
              </p>
            </div>

            {/* Centered Yellow Social Icons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
              {card.socialLinks && card.socialLinks.length > 0 ? (
                card.socialLinks.slice(0, 5).map((link, idx) => (
                  <SocialCircleIcon 
                    key={idx} 
                    platform={link.platform} 
                    url={link.url} 
                    size={48} 
                    bgColor="#facc15"
                    iconColor="#000000"
                  />
                ))
              ) : (
                ["website", "x", "instagram", "linkedin", "whatsapp"].map((p, idx) => (
                  <SocialCircleIcon key={idx} platform={p} size={48} bgColor="#facc15" iconColor="#000000" />
                ))
              )}
            </div>

            {/* Contact Heading with Separator Lines */}
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-px w-20 bg-[#facc15]/30" />
              <h2 className="text-3xl font-black italic uppercase tracking-widest text-white">Contact</h2>
              <div className="h-px w-20 bg-[#facc15]/30" />
            </div>

            {/* 2x3 Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 max-w-2xl mx-auto">
              {[
                { label: card.email || "coach@fitness.com", icon: "✉" },
                { label: card.phone || "+91 9876543210", icon: "📞" },
                { label: (card as any).alternatePhone || "+91 9012345678", icon: "📞" },
                { label: (card as any).alternateEmail || "official@fitness.com", icon: "✉" },
                { label: (card as any).birthday || "12/06/1985", icon: "🎂" },
                { label: card.address || "Surat, Atlanta", icon: "📍" },
              ].map((item, idx) => (
                <div key={idx} className="relative pt-5">
                   {/* Overlapping Yellow Icon Circle */}
                   <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#facc15] flex items-center justify-center shadow-lg shadow-[#facc15]/20 z-10">
                     <span className="text-black text-lg font-bold">{item.icon}</span>
                   </div>
                   {/* Dark Pill Container */}
                   <div className="bg-[#111111] border border-white/5 rounded-[30px] py-6 px-4 text-center">
                     <p className="text-white text-sm font-semibold tracking-tight truncate">{item.label}</p>
                   </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Premium Dark Style */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-16">
              <button
                type="button"
                onClick={() => onDownloadVCard?.()}
                className="flex-1 max-w-[200px] rounded-full bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] py-4 shadow-2xl hover:bg-[#facc15] transition-colors"
              >
                Add To Contact
              </button>
              <button
                type="button"
                className="flex-1 max-w-[200px] rounded-full border-2 border-[#facc15] text-[#facc15] text-[10px] font-black uppercase tracking-[0.2em] py-4 hover:bg-[#facc15] hover:text-black transition-all"
              >
                Book Session
              </button>
            </div>
          </section>


          {/* Premium Our Services Section – Inspired by Reference */}
          <section className="bg-[#0A0A0A] px-6 py-16 relative overflow-hidden border-t border-white/5">
            {/* Kettlebell decoration */}
            <div className="absolute top-6 right-6 opacity-30 pointer-events-none rotate-12">
               <svg width="80" height="80" viewBox="0 0 24 24" fill="#facc15">
                  <path d="M12 2c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm-8 12c0-2.209 1.791-4 4-4s4 1.791 4 4a2 2 0 1 1-4 0c0-1.103-.897-2-2-2s-2 .897-2 2a2 2 0 1 1-4 0zm16 0c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" opacity=".2"/>
                  <path d="M12 2a4 4 0 0 0-4 4c1.11 0 2.1.45 2.83 1.17C10.15 7.6 10 8.1 10 8.63v.37h4v-.37c0-.53-.15-1.03-.83-1.46.73-.72 1.72-1.17 2.83-1.17a4 4 0 0 0-4-4zm0 2a2 2 0 0 1 1.15 3.64c-.1.08-.15.2-.15.33v.03h-2V7.97c0-.13-.05-.25-.15-.33A2 2 0 0 1 12 4zM4.47 10.89C2.47 11.85 1 13.78 1 16v4c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-4c0-2.22-1.47-4.15-3.47-5.11C18.15 13.92 19 15.36 19 17v1H5v-1c0-1.64.85-3.08 1.47-6.11z"/>
               </svg>
            </div>

            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-px w-20 bg-[#facc15]/30" />
              <h2 className="text-3xl font-black italic uppercase tracking-widest text-white">Our Services</h2>
              <div className="h-px w-20 bg-[#facc15]/30" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 max-w-2xl mx-auto">
              {services.map((svc: any, idx: number) => (
                <div key={idx} className="bg-[#111111] border border-white/5 rounded-[40px] p-5 flex flex-col transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#facc15]/5">
                  <div className="relative h-56 w-full rounded-[30px] overflow-hidden mb-6 shadow-xl">
                     <Image
                       src={svc.image || "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop"}
                       alt={svc.name || svc.title}
                       fill
                       className="object-cover transition-transform duration-500 hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="px-2 pb-2 text-center">
                     <h3 className="text-[#facc15] text-xl font-black italic uppercase mb-4 tracking-tight leading-none">{svc.name || svc.title}</h3>
                     <p className="text-slate-400 text-sm leading-relaxed px-1">
                       {svc.description || svc.details || "Experience customized fitness sessions with certified trainers who develop personalized workout routines focusing on your specific body goals."}
                     </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Slider Indicators */}
            <div className="flex justify-center items-center gap-3 mt-12">
               {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${i === 1 ? 'bg-[#facc15] w-6' : 'bg-white/10'}`} />
               ))}
            </div>
          </section>

          {/* Premium QR Code Section – Inspired by Reference */}
          <section className="bg-[#0A0A0A] px-6 py-12 relative overflow-hidden border-t border-white/5">
            {/* Dumbbell decoration */}
            <div className="absolute top-8 left-6 opacity-30 pointer-events-none rotate-12">
               <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                  <path d="M6,5V19H8V5H6M16,5V19H18V5H16M2,9V15H4V9H2M20,9V15H22V9H20M9,11V13H15V11H9Z" />
               </svg>
            </div>

            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-px w-20 bg-[#facc15]/30" />
              <h2 className="text-3xl font-black italic uppercase tracking-widest text-white">QR Code</h2>
              <div className="h-px w-20 bg-[#facc15]/30" />
            </div>

            <div className="max-w-xl mx-auto">
               <div className="bg-[#111111] border border-white/10 rounded-[40px] p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                  {/* QR Code Container with Yellow Border */}
                  <div className="relative p-3 bg-white rounded-3xl border-4 border-[#facc15] shadow-[0_0_25px_rgba(250,204,21,0.2)]">
                     <div className="h-32 w-32 bg-slate-100 flex items-center justify-center overflow-hidden">
                        {/* Mock QR Code - In a real app, this would be generated */}
                        <svg className="w-full h-full text-black p-2" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M3,3H9V9H3V3M5,5V7H7V5H5M15,3H21V9H15V3M17,5V7H19V5H17M3,15H9V21H3V15M5,17V19H7V17H5M15,15H21V21H15V15M17,17V19H19V17H17M10,3H14V5H10V3M10,6H11V7H10V6M11,8H12V9H11V8M12,6H13V7H12V6M13,8H14V9H13V8M10,10H11V11H10V10M11,12H12V13H11V12M12,10H13V11H12V10M13,12H14V13H13V12M3,10H4V11H3V10M4,12H5V13H4V12M5,10H6V11H5V10M6,12H7V13H6V12M7,10H8V11H7V10M8,12H9V13H8V12M10,15H11V16H10V15M11,17H12V18H11V17M12,15H13V16H12V15M13,17H14V18H13V17M10,19H11V20H10V19M11,21H12V22H11V21M12,19H13V20H12V19M13,21H14V22H13V21M15,10H16V11H15V10M16,12H17V13H16V12M17,10H18V11H17V10M18,12H19V13H18V12M19,10H20V11H19V10M20,12H21V13H20V12M21,10H22V11H21V10M22,12H23V13H22V12" />
                        </svg>
                     </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                     <h3 className="text-white text-2xl font-black mb-4">Scan to Contact</h3>
                     <p className="text-slate-400 text-sm leading-relaxed">
                        Point your phone's camera at the QR code to quickly add our contact information. You can also use the "Add to Contacts" button below for fast saving.
                     </p>
                  </div>
               </div>
            </div>
          </section>

          {/* Premium Gallery Section – Inspired by Reference */}
          <section className="bg-[#0A0A0A] px-6 py-16 relative overflow-hidden border-t border-white/5">
            {/* Water bottle decoration (top right) */}
            <div className="absolute top-6 right-8 opacity-40 pointer-events-none z-10">
               <svg width="45" height="90" viewBox="0 0 50 100" fill="gray">
                  <path d="M15,10 L35,10 L35,20 L40,20 L40,25 L10,25 L10,20 L15,20 L15,10 Z M10,30 L40,30 L45,40 L45,90 C45,95 40,100 35,100 L15,100 C10,100 5,95 5,90 L5,40 L10,30 Z" />
                  <rect x="20" y="0" width="10" height="10" rx="2" />
               </svg>
            </div>

            {/* Dumbbell decoration 2 (bottom left) */}
            <div className="absolute bottom-12 left-6 opacity-30 pointer-events-none -rotate-12">
               <svg width="70" height="35" viewBox="0 0 100 40" fill="gray">
                  <rect x="0" y="5" width="12" height="30" rx="3" />
                  <rect x="15" y="10" width="8" height="20" rx="2" />
                  <rect x="23" y="15" width="54" height="10" />
                  <rect x="77" y="10" width="8" height="20" rx="2" />
                  <rect x="88" y="5" width="12" height="30" rx="3" />
               </svg>
            </div>

            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-px w-20 bg-[#facc15]/30" />
              <h2 className="text-3xl font-black italic uppercase tracking-widest text-white">Gallery</h2>
              <div className="h-px w-20 bg-[#facc15]/30" />
            </div>

            <div className="max-w-2xl mx-auto">
               {/* Main Gallery Slider Item */}
               <div className="relative aspect-[16/9] w-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                  {/* Gallery Image */}
                  <Image 
                    src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop"
                    alt="Gallery training session"
                    fill
                    className="object-cover"
                  />
                  {/* Dark Overlay for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Floating Yellow Zoom Icon (Exact Reference Style) */}
                  <div className="absolute top-6 right-6 h-10 w-10 bg-[#facc15] rounded-[14px] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                     <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                     </svg>
                  </div>
               </div>

               {/* Slider Pagination Dots */}
               <div className="flex justify-center items-center gap-3 mt-10">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i} 
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${i === 1 ? 'bg-[#facc15] w-6' : 'bg-white/10'}`} 
                    />
                  ))}
               </div>
            </div>
          </section>

          {/* Premium Products Section – Inspired by Reference */}
          <section className="bg-[#0A0A0A] px-6 py-16 relative overflow-hidden border-t border-white/5">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-px w-20 bg-[#facc15]/30" />
              <h2 className="text-3xl font-black italic uppercase tracking-widest text-white">Products</h2>
              <div className="h-px w-20 bg-[#facc15]/30" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 max-w-2xl mx-auto">
              {[
                { 
                  name: "Weight Loss / Transformation Package", 
                  price: "₹6,500.00",
                  image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop"
                },
                { 
                  name: "Group Class Package", 
                  price: "₹2,000.00",
                  image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
                }
              ].map((p, idx) => (
                <div key={idx} className="bg-[#111111] border border-white/5 rounded-[40px] p-5 flex flex-col transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#facc15]/5">
                  <div className="relative h-48 w-full rounded-[30px] overflow-hidden mb-6 shadow-xl">
                     <Image
                       src={p.image}
                       alt={p.name}
                       fill
                       className="object-cover transition-transform duration-500 hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="px-2 pb-2 text-center">
                     <h3 className="text-white text-lg font-bold mb-3 px-4 min-h-[56px] flex items-center justify-center leading-tight">
                        {p.name}
                     </h3>
                     <p className="text-[#facc15] text-2xl font-black italic">
                        {p.price}
                     </p>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Products Button */}
            <div className="flex justify-center mt-12">
               <button
                 type="button"
                 className="inline-flex items-center gap-2 bg-[#facc15] text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#facc15]/20 hover:scale-105 active:scale-95 transition-all"
               >
                 View More Products
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                 </svg>
               </button>
            </div>
          </section>

          {/* Premium Testimonials Section – Inspired by Reference */}
          <section className="bg-[#0A0A0A] px-6 py-16 relative overflow-hidden border-t border-white/5">
            {/* Dumbbell decoration (top right) */}
            <div className="absolute top-10 right-6 opacity-30 pointer-events-none rotate-12">
               <svg width="70" height="35" viewBox="0 0 100 40" fill="white">
                  <rect x="0" y="5" width="12" height="30" rx="3" />
                  <rect x="15" y="10" width="8" height="20" rx="2" />
                  <rect x="23" y="15" width="54" height="10" />
                  <rect x="77" y="10" width="8" height="20" rx="2" />
                  <rect x="88" y="5" width="12" height="30" rx="3" />
               </svg>
            </div>

            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-px w-20 bg-[#facc15]/30" />
              <h2 className="text-3xl font-black italic uppercase tracking-widest text-white">Testimonials</h2>
              <div className="h-px w-20 bg-[#facc15]/30" />
            </div>

            <div className="max-w-2xl mx-auto">
               <div className="bg-[#111111] border border-white/10 rounded-[40px] p-10 flex flex-col items-center text-center shadow-2xl">
                  {/* Large Quote Icon */}
                  <div className="text-[#facc15] mb-6">
                     <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 16.6569 20.6738 18 19.017 18H17.017C16.4647 18 16.017 18.4477 16.017 19V21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C8.56925 16 9.01697 15.5523 9.01697 15V9C9.01697 8.44772 8.56925 8 8.01697 8H4.01697C3.46468 8 3.01697 8.44772 3.01697 9V12C3.01697 12.5523 2.56925 13 2.01697 13H0.0169678C-0.535317 13 -0.983032 12.5523 -0.983032 12V9C-0.983032 7.34315 0.360113 6 2.01697 6H8.01697C9.67382 6 11.017 7.34315 11.017 9V15C11.017 16.6569 9.67382 18 8.01697 18H6.01697C5.46468 18 5.01697 18.4477 5.01697 19V21H3.01697Z" />
                     </svg>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-300 text-lg leading-relaxed font-medium italic mb-8">
                     "{testimonials[0].quote || "Joining this gym was the best decision of my life. I lost 12 kgs in just 4 months with their transformation program. The trainers are motivating, and the diet plans are practical!"}"
                  </p>

                  <div className="w-40 h-px bg-white/10 mb-8" />

                  {/* Client Info */}
                  <div className="flex flex-col items-center gap-4">
                     <h4 className="text-white text-xl font-bold tracking-tight">{testimonials[0].name || "Priya Sharma"}</h4>
                     {/* Avatar with yellow ring */}
                     <div className="relative h-20 w-20 p-1 rounded-2xl bg-[#facc15] shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                        <div className="h-full w-full rounded-xl overflow-hidden bg-slate-800">
                           {testimonials[0].image ? (
                             <img src={testimonials[0].image} alt={testimonials[0].name} className="w-full h-full object-cover" />
                           ) : (
                             <div className="h-full w-full flex items-center justify-center text-black font-black text-xl bg-[#facc15]/20">
                               {testimonials[0].name?.charAt(0) || "P"}
                             </div>
                           )}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Pagination Dots */}
               <div className="flex justify-center items-center gap-3 mt-10">
                  {testimonials.slice(0, 5).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${i === 0 ? 'bg-[#facc15] w-6' : 'bg-white/10'}`} 
                    />
                  ))}
               </div>
            </div>
          </section>



          {/* Premium Coaches Section - Immersive Redesign */}
          <section className="bg-[#0A0A0A] px-6 py-20 relative overflow-hidden border-t border-white/5">
            <div className="flex items-center justify-center gap-6 mb-16">
              <div className="h-px w-20 bg-[#facc15]/30" />
              <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white text-center">
                Our Elite <span className="text-[#facc15]">Coaches</span>
              </h2>
              <div className="h-px w-20 bg-[#facc15]/30" />
            </div>

            <div className="grid gap-4 grid-cols-2 max-w-5xl mx-auto">
              {[
                { 
                  name: "Alex Rivera", 
                  role: "Strength & Conditioning", 
                  image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                  name: "Maya Singh", 
                  role: "Weight Loss & HIIT", 
                  image: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                  name: "Rahul Mehta", 
                  role: "Mobility & Recovery", 
                  image: "https://images.unsplash.com/photo-1620127814421-26c3683f36a5?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                  name: "Sara Jones", 
                  role: "Nutrition Specialist", 
                  image: "https://images.unsplash.com/photo-1609899537878-39d4a6703953?q=80&w=800&auto=format&fit=crop" 
                },
              ].map((c) => (
                <div
                  key={c.name}
                  className="relative group h-[380px] rounded-[35px] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/5"
                >
                  {/* Background Image */}
                  <Image 
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dark Immersive Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                  
                  {/* Identity Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center text-center">
                    <div className="mb-2 px-2.5 py-0.5 rounded-full bg-[#facc15]/10 border border-[#facc15]/30 backdrop-blur-md">
                       <span className="text-[#facc15] text-[9px] font-black uppercase tracking-[0.2em]">Certified Pro</span>
                    </div>
                    <h3 className="text-white text-xl font-black italic uppercase leading-tight mb-1 tracking-tight">
                       {c.name}
                    </h3>
                    <p className="text-slate-300 text-xs font-bold uppercase tracking-widest opacity-80">
                       {c.role}
                    </p>
                    
                    {/* Hover reveal line */}
                    <div className="w-12 h-1 bg-[#facc15] mt-6 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </section>


          {/* Premium Blog Section – Inspired by Reference */}
          <section className="bg-[#0A0A0A] px-6 py-16 relative overflow-hidden border-t border-white/5">
            {/* Dumbbell decoration (top right) */}
            <div className="absolute top-10 right-6 opacity-40 pointer-events-none rotate-12 z-10">
               <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
                  <path d="M6,5v14h2V5H6z M16,5v14h2V5H16z M2,9v6h2V9H2z M20,9v6h2V9H20z M9,11v2h6v-2H9z" />
                  <circle cx="5" cy="12" r="2" fill="white" opacity="0.3" />
                  <circle cx="19" cy="12" r="2" fill="white" opacity="0.3" />
               </svg>
            </div>

            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-px w-20 bg-[#facc15]/30" />
              <h2 className="text-3xl font-black italic uppercase tracking-widest text-white">Blog</h2>
              <div className="h-px w-20 bg-[#facc15]/30" />
            </div>

            <div className="max-w-2xl mx-auto">
               <div className="bg-[#111111] border border-white/10 rounded-[40px] p-6 shadow-2xl relative">
                  {/* Blog Image */}
                  <div className="relative aspect-[16/9] w-full rounded-[30px] overflow-hidden mb-8 shadow-xl">
                     <Image 
                       src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
                       alt="Beginner's Guide to Strength Training"
                       fill
                       className="object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Blog Content */}
                  <div className="px-2 pb-2">
                     <h3 className="text-[#facc15] text-xl font-black italic uppercase mb-4 tracking-tight leading-tight">
                        Beginner's Guide to Strength Training
                     </h3>
                     <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        New to the gym? This guide breaks down essential strength training tips, beginner-friendly exercises, and how to structure your first few...
                     </p>
                     
                     <div className="flex justify-end">
                        <a href="#" className="inline-flex items-center gap-2 text-[#facc15] font-black text-sm uppercase tracking-widest hover:translate-x-1 transition-transform">
                           Read More
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>

               {/* Pagination Dots */}
               <div className="flex justify-center items-center gap-3 mt-10">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i} 
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${i === 1 ? 'bg-[#facc15] w-6' : 'bg-white/10'}`} 
                    />
                  ))}
               </div>
            </div>
          </section>

          {/* Premium Business Hours Section – Inspired by Reference */}
          <section className="bg-[#0A0A0A] px-6 py-16 relative overflow-hidden border-t border-white/5">
            {/* Boxing gloves decoration (top left) */}
            <div className="absolute top-8 left-4 opacity-30 pointer-events-none -rotate-12">
               <svg width="70" height="70" viewBox="0 0 24 24" fill="white">
                  <path d="M19 15h-2v-2h2v2zm-4 0h-2v-2h2v2zm-4 0H9v-2h2v2zm-4 0H5v-2h2v2zm12-4h-2V9h2v2zm-4 0h-2V9h2v2zm-4 0H9V9h2v2zm-4 0H5V9h2v2zM21 7v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2z" opacity=".2"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
               </svg>
            </div>

            {/* Weights decoration (bottom right) */}
            <div className="absolute bottom-6 right-6 opacity-30 pointer-events-none">
               <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1" fill="none" />
                  <circle cx="12" cy="12" r="3" fill="white" />
                  <line x1="12" y1="3" x2="12" y2="6" stroke="white" strokeWidth="2" />
                  <line x1="12" y1="18" x2="12" y2="21" stroke="white" strokeWidth="2" />
                  <line x1="3" y1="12" x2="6" y2="12" stroke="white" strokeWidth="2" />
                  <line x1="18" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2" />
               </svg>
            </div>

            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-px w-20 bg-[#facc15]/30" />
              <h2 className="text-3xl font-black italic uppercase tracking-widest text-white text-center">Business Hours</h2>
              <div className="h-px w-20 bg-[#facc15]/30" />
            </div>

            <div className="max-w-3xl mx-auto">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { day: "Monday", time: "12:00 AM - 12:00 AM" },
                    { day: "Tuesday", time: "12:00 AM - 12:00 AM" },
                    { day: "Wednesday", time: "12:00 AM - 12:00 AM" },
                    { day: "Thursday", time: "12:00 AM - 12:00 AM" },
                    { day: "Friday", time: "12:00 AM - 12:00 AM" },
                    { day: "Saturday", time: "12:00 AM - 12:00 AM" },
                    { day: "Sunday", time: "Closed", special: true },
                  ].map((h, idx) => (
                    <div 
                      key={idx} 
                      className={`bg-[#111111] border border-white/5 rounded-full p-2.5 flex items-center gap-4 hover:border-[#facc15]/30 transition-all ${h.day === "Sunday" ? "sm:col-span-2 sm:max-w-[340px] sm:mx-auto w-full" : ""}`}
                    >
                       <div className="h-12 w-12 rounded-full bg-[#facc15] flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.2)] flex-shrink-0">
                          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15z" />
                          </svg>
                       </div>
                       <div className="flex flex-col">
                          <span className="text-white text-sm font-bold leading-tight">{h.day}:</span>
                          <span className={`text-sm tracking-tight ${h.special ? 'text-[#facc15] font-black' : 'text-slate-400 font-medium'}`}>{h.time}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </section>

          {/* Premium Make an Appointment Section – Inspired by Reference */}
          <section className="bg-[#0A0A0A] px-6 py-16 relative overflow-hidden border-t border-white/5">
            {/* Weight plates decoration (top right) */}
            <div className="absolute top-8 right-6 opacity-40 pointer-events-none z-10">
               <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
                  <rect x="8" y="44" width="48" height="8" rx="2" fill="#333" />
                  <rect x="12" y="36" width="40" height="8" rx="2" fill="#444" />
                  <rect x="16" y="28" width="32" height="8" rx="2" fill="#222" />
                  <rect x="20" y="20" width="24" height="8" rx="2" fill="#555" />
                  <rect x="24" y="12" width="16" height="8" rx="2" fill="#111" />
               </svg>
            </div>

            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-px w-20 bg-[#facc15]/30" />
              <h2 className="text-3xl font-black italic uppercase tracking-widest text-white text-center">Make an Appointment</h2>
              <div className="h-px w-20 bg-[#facc15]/30" />
            </div>

            <div className="max-w-2xl mx-auto px-4">
               <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Pick a Date"
                    className="w-full bg-[#111111] border border-white/10 rounded-full py-6 px-10 text-slate-400 text-lg font-medium focus:outline-none focus:border-[#facc15]/40 transition-all hover:border-white/20 shadow-2xl cursor-pointer"
                  />
                  <div className="absolute right-8 top-1/2 -translate-y-1/2">
                     <svg className="w-8 h-8 text-[#facc15]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                     </svg>
                  </div>
               </div>
            </div>
          </section>

          {/* Premium Inquiries Section – Inspired by Reference */}
          <section className="bg-[#0A0A0A] px-6 py-16 relative overflow-hidden border-t border-white/5">
            {/* Weight plates decoration (top right) */}
            <div className="absolute top-10 right-6 opacity-40 pointer-events-none z-10 scale-125">
               <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
                  <rect x="8" y="44" width="48" height="8" rx="2" fill="#333" />
                  <rect x="12" y="36" width="40" height="8" rx="2" fill="#444" />
                  <rect x="16" y="28" width="32" height="8" rx="2" fill="#222" />
               </svg>
            </div>

            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-px w-20 bg-[#facc15]/30" />
              <h2 className="text-3xl font-black italic uppercase tracking-widest text-white text-center">Inquiries</h2>
              <div className="h-px w-20 bg-[#facc15]/30" />
            </div>

            <div className="max-w-2xl mx-auto">
               <div className="bg-[#111111] border border-white/10 rounded-[40px] p-8 sm:p-10 shadow-2xl">
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                     <input 
                       type="text" 
                       placeholder="Your Name"
                       className="w-full bg-transparent border border-white/20 rounded-full py-4 px-6 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#facc15]/50 transition-all font-medium"
                     />
                     <input 
                       type="email" 
                       placeholder="Email Address"
                       className="w-full bg-transparent border border-white/20 rounded-full py-4 px-6 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#facc15]/50 transition-all font-medium"
                     />
                     <input 
                       type="tel" 
                       placeholder="Enter Phone Number."
                       className="w-full bg-transparent border border-white/20 rounded-full py-4 px-6 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#facc15]/50 transition-all font-medium"
                     />
                     <textarea 
                       placeholder="Type a message here..."
                       rows={6}
                       className="w-full bg-transparent border border-white/20 rounded-[35px] py-6 px-8 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#facc15]/50 transition-all font-medium resize-none"
                     ></textarea>
                     
                     <div className="space-y-3">
                        <button 
                          type="button" 
                          className="w-full bg-transparent border border-white/20 rounded-full py-4 px-6 text-slate-300 flex items-center justify-center gap-3 hover:bg-white/5 transition-all font-bold text-sm tracking-tight"
                        >
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                           </svg>
                           Choose File to upload
                        </button>
                        <p className="text-[#facc15] text-[11px] font-black uppercase tracking-wider px-2">
                           Files Supported: JPG, PNG, JPEG
                        </p>
                     </div>

                     <div className="flex justify-center pt-6">
                        <button 
                          type="submit"
                          className="bg-[#facc15] text-black px-12 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-xl shadow-[#facc15]/20 hover:scale-105 active:scale-95 transition-all"
                        >
                           Send Message
                        </button>
                     </div>
                  </form>
               </div>
            </div>
          </section>

          {/* Contact strip */}
          <section className="px-4 sm:px-6 py-8 bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                Book Your First Session
              </h2>
              <p className="text-[13px] text-slate-200 leading-relaxed">
                Send a message or call directly to discuss goals, schedule and plan. All conversations are private and focused on building a plan that works for you.
              </p>
              <div className="space-y-3 text-[13px]">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-between rounded-2xl bg-slate-800 border border-slate-700 px-4 py-2.5 hover:border-blue-400"
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      Phone
                    </p>
                    <p className="text-sm font-semibold">{phone}</p>
                  </div>
                  <span>📞</span>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-between rounded-2xl bg-slate-800 border border-slate-700 px-4 py-2.5 hover:border-blue-400"
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      Email
                    </p>
                    <p className="text-sm font-semibold break-all">{email}</p>
                  </div>
                  <span>✉</span>
                </a>
                <div className="rounded-2xl bg-slate-800 border border-slate-700 px-4 py-2.5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    Location
                  </p>
                  <p className="text-sm font-semibold">{address}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-black text-slate-400 text-[11px] px-4 sm:px-6 py-3 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-1">
            <p>
              © {new Date().getFullYear()} {name}. All rights reserved.
            </p>
            <p>Medinova‑style fitness vCard layout (Tailwind CSS).</p>
          </footer>
        </div>
      </div>
    </>
  );
}
