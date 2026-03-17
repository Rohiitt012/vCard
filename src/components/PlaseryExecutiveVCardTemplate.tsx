"use client";
import React from "react";
import Image from "next/image";
import { SocialCircleIcon } from "@/components/SocialCircleIcon";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { generateQrDataUrl, downloadQrPng } from "@/lib/qr";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

const DEFAULT_FACTS = [
  { label: "Years Experience", value: "25" },
  { label: "Surgical Specialists", value: "35" },
  { label: "Improved Smiles", value: "9876" },
];

const DEFAULT_FEATURES = [
  {
    title: "Committed Surgical Team",
    icon: "users",
    description: "A dedicated team of qualified specialists focused on safe, precise outcomes.",
  },
  {
    title: "High Standard of Surgery",
    icon: "syringe",
    description: "International standards in surgery, sterilisation and patient after‑care.",
  },
];

const DEFAULT_SERVICES = [
  { title: "Face Retouching", description: "Advanced non-invasive treatments to rejuvenate your facial features and restore a youthful glow." },
  { title: "Mommy Makeover", description: "A customized combination of procedures designed to help mothers restore their pre-pregnancy bodies." },
  { title: "Breast Implants", description: "Expert breast augmentation using the latest techniques and high-quality implants for natural results." },
  { title: "Body Procedures", description: "Comprehensive body contouring solutions including tummy tucks and skin tightening treatments." },
  { title: "Liposuction", description: "Targeted fat removal to sculpt and refine your body's natural silhouette with minimal downtime." },
  { title: "Lips Surgery", description: "Precision lip enhancement and reconstruction for a perfectly balanced and aesthetic appearance." },
];

const DEFAULT_PRIMARY_COLOR = "#0d6efd";

export function PlaseryExecutiveVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [showTerms, setShowTerms] = React.useState(false);
  const [showPrivacy, setShowPrivacy] = React.useState(false);
  const [qrDataUrl, setQrDataUrl] = React.useState<string>("");

  React.useEffect(() => {
    const fullUrl = `${baseUrl}/${slug}`;
    generateQrDataUrl(fullUrl).then(setQrDataUrl);
  }, [baseUrl, slug]);

  const name = card.title || "Your Name";
  const role = card.occupation || card.tagline || "Executive Pro";
  const phone = card.phone;
  const address = card.address;
  const socialLinks = card.socialLinks || [];
  const primaryColor = card.templatePrimaryColor || DEFAULT_PRIMARY_COLOR;
  const facts = (card as any).stats && (card as any).stats.length > 0 ? (card as any).stats : DEFAULT_FACTS;
  const aboutTitle = (card as any).aboutTitle || "About Me";
  const aboutDescription = card.description || "Providing the best services in the industry.";
  const heroTitle = (card as any).heroTitle || "The Best Plastic Surgery Solution";
  const testimonials = card.testimonials && card.testimonials.length > 0 
    ? card.testimonials 
    : [
        { name: "John Doe", quote: "Highly competent and professional service. Exactly what I was looking for.", role: "CEO, Tech Corp" },
        { name: "Jane Smith", quote: "A very talented individual with great attention to detail.", role: "Manager, Creative Studio" }
      ];

  const email = card.email || "info@example.com";
  const services = card.services && card.services.length > 0 ? card.services : DEFAULT_SERVICES;
  const serviceTitle = (card as any).serviceTitle || "Our Services";

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center px-4 py-6 sm:py-10">
      <div className="w-full max-w-[540px] rounded-[32px] bg-white shadow-2xl border border-slate-200 overflow-hidden relative">
        {/* Top Header / Cover */}
        <div className="relative h-44 sm:h-52 w-[calc(100%-24px)] mx-auto mt-3 overflow-hidden rounded-[24px]">
           {(card as any).coverImage ? (
              <Image 
                src={(card as any).coverImage} 
                alt="Cover" 
                fill 
                className="object-cover" 
                unoptimized={(card as any).coverImage.toString().startsWith("data:")} 
              />
           ) : (
              <div className="w-full h-full bg-gradient-to-b from-sky-300 to-sky-400" />
           )}
        </div>

        {/* Profile Identity Row */}
        <section className="relative px-8 sm:px-12 -mt-16 sm:-mt-20 mb-8 flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 z-10">
           <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-full border-[8px] border-white shadow-[0_15px_45px_rgba(0,0,0,0.1)] overflow-hidden bg-white shrink-0">
             {card.image ? (
               <Image 
                 src={card.image} 
                 alt={name} 
                 fill 
                 className="object-cover" 
                 unoptimized={card.image.startsWith("data:")} 
               />
             ) : (
                <div className="h-full w-full flex items-center justify-center text-6xl font-black text-slate-100 bg-gradient-to-br from-slate-300 to-slate-400">
                   {name.charAt(0).toUpperCase()}
                </div>
             )}
           </div>
           
           <div className="flex-1 text-center sm:text-left pt-2">
              <h1 className="text-[42px] sm:text-[48px] font-black text-[#1e293b] tracking-tighter leading-none mb-3">
                 {name}
              </h1>
              <p className="text-xl text-slate-500 font-bold tracking-tight">
                 {role}
              </p>
           </div>
        </section>

        {/* Brand Rounded Social Bar */}
        <div className="px-6 sm:px-10 mb-10">
           <div className="max-w-[400px] mx-auto bg-white rounded-[40px] py-6 px-4 shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-slate-50 flex items-center justify-evenly transition-transform hover:scale-[1.01]">
              {socialLinks && socialLinks.length > 0 ? (
                socialLinks.map((link: any, idx: number) => (
                   <div key={idx} className="hover:scale-110 active:scale-95 transition-all">
                      <SocialCircleIcon 
                        platform={link.platform} 
                        url={link.url} 
                        size={42} 
                      />
                   </div>
                ))
              ) : (
                 <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black">Digital Hub</p>
              )}
           </div>
        </div>

        {/* Premium Contact Info Grid */}
        <section className="px-6 sm:px-10 mb-14">
           <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { label: "Email Address", value: email, icon: "✉️", color: "text-purple-600", bg: "bg-purple-50/70" },
                { label: "Personal Mobile", value: phone || "+91 9104500600", icon: "📞", color: "text-pink-600", bg: "bg-pink-50/70" },
                { label: "Date of Birth", value: (card as any).dob || "30 Jan 1998", icon: "🎂", color: "text-orange-600", bg: "bg-orange-50/70" },
                { label: "Global Presence", value: address || "Ahmedabad, IN", icon: "📍", color: "text-rose-600", bg: "bg-rose-50/70" },
              ].map((item, idx) => (
                 <div key={idx} className="bg-white rounded-[40px] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-50 flex flex-col items-center text-center transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 ${item.bg} rounded-[28px] flex items-center justify-center mb-6 shadow-sm border border-white`}>
                       <span className="text-3xl sm:text-4xl">{item.icon}</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-slate-400 font-black mb-3">{item.label}</p>
                    <p className="text-[16px] sm:text-[18px] font-black text-[#1e293b] break-all leading-tight tracking-tight max-w-[140px] sm:max-w-none">
                       {item.value}
                    </p>
                 </div>
              ))}
           </div>
        </section>
        
        {/* Action Row */}
        <div className="px-6 sm:px-10 mb-16 flex flex-col items-center gap-8">
           <button
                type="button"
                onClick={() => onDownloadVCard?.()}
                className="w-full max-w-[420px] inline-flex items-center justify-center rounded-[24px] text-white font-black text-lg h-16 shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] active:scale-95 group relative overflow-hidden"
                style={{ backgroundColor: primaryColor }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Add To Contact
                </span>
              </button>
              
              <div className="flex items-center gap-5 group cursor-pointer transition-all duration-500 hover:translate-x-1">
                  <div className="w-14 h-14 rounded-full border-2 border-slate-200 bg-white/50 backdrop-blur-sm flex items-center justify-center text-slate-400 group-hover:border-slate-900 group-hover:text-slate-900 transition-all shadow-sm hover:shadow-md">
                     <span className="ml-1 text-sm">▶</span>
                  </div>
                  <span className="text-[15px] font-black text-slate-500 group-hover:text-slate-900 tracking-wider uppercase">View Full Portfolio</span>
              </div>
        </div>


        {/* Services */}
        <section
          id="services"
          className="px-6 sm:px-10 py-12 bg-white"
        >
          <div className="text-center mb-10">
             <h2 className="text-[32px] sm:text-[38px] font-black text-[#1e293b] tracking-tighter">
               Our Services
             </h2>
          </div>
          
          <div className="bg-slate-50/50 rounded-[48px] p-6 sm:p-10 border border-slate-100/50 shadow-sm">
            <div className="grid gap-10 grid-cols-2">
              {services.map((svc: any, idx: number) => (
                <div
                  key={svc.id || idx}
                  className="flex flex-col group items-center text-center"
                >
                  <div className="relative aspect-square w-full rounded-[40px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-white bg-white mb-6 transition-transform duration-500 group-hover:scale-[1.03]">
                    {svc.icon ? (
                      <Image 
                        src={svc.icon} 
                        alt={svc.name || svc.title} 
                        fill 
                        className="object-cover" 
                        unoptimized={!!svc.icon.startsWith("data:")} 
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                         <span className="text-5xl">🏗️</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-[19px] sm:text-[22px] font-black text-[#1e293b] leading-tight tracking-tight">
                      {svc.name || svc.title}
                    </h3>
                    <p className="text-[14px] text-slate-400 leading-relaxed font-bold tracking-tight">
                      {svc.description || svc.details || "Description"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        {card.products && card.products.length > 0 && (
          <section
            id="products"
            className="px-6 sm:px-10 py-12 bg-white"
          >
            <div className="text-center mb-10">
               <h2 className="text-[32px] sm:text-[38px] font-black text-[#1e293b] tracking-tighter">
                 Our Products
               </h2>
            </div>
            
            <div className="bg-slate-50/50 rounded-[48px] p-6 sm:p-10 border border-slate-100/50 shadow-sm">
              <div className="grid gap-10 grid-cols-2">
                {card.products.map((item: any, idx: number) => (
                  <div
                    key={item.id || idx}
                    className="flex flex-col group"
                  >
                    <div className="relative aspect-square w-full rounded-[40px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-white bg-white mb-6 transition-transform duration-500 group-hover:scale-[1.03]">
                      {item.icon || item.image ? (
                        <Image 
                          src={item.icon || item.image} 
                          alt={item.name || item.title} 
                          fill 
                          className="object-cover" 
                          unoptimized={!!(item.icon || item.image).startsWith("data:")} 
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                           <span className="text-5xl">🛍️</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2 px-1">
                      <h3 className="text-[19px] sm:text-[22px] font-black text-[#1e293b] leading-tight tracking-tight">
                        {item.name || item.title}
                      </h3>
                      <p className="text-[14px] text-slate-400 font-bold tracking-tight">
                        {item.description || "Description"}
                      </p>
                      {item.price && (
                        <p className="text-[18px] sm:text-[20px] font-black text-[#0ea5e9] tracking-tighter pt-1">
                          {item.currency || "INR"} {item.price}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}


        {/* Testimonials */}
        <section className="bg-slate-50/30 px-6 sm:px-10 py-10">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                Testimonial
              </h2>
            </div>
            <div className="space-y-6">
              {testimonials.map((t: any, idx: number) => (
                <div
                  key={t.id || idx}
                  className="group relative flex flex-col sm:flex-row items-center gap-6 rounded-[32px] bg-white p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-white hover:shadow-lg transition-all"
                >
                  {/* Left: Profile Image */}
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 flex-shrink-0 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm">
                    {t.image ? (
                      <Image 
                        src={t.image} 
                        alt={t.name || "Testimonial"} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                        unoptimized={!!t.image.startsWith("data:")} 
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-slate-200 text-slate-400 font-bold text-2xl">
                        {(t.name || "C")[0].toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                    {/* 5-Star Rating */}
                    <div className="flex gap-1 mb-3 text-yellow-400 text-sm">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s}>⭐</span>
                      ))}
                    </div>

                    <p className="text-[14px] text-slate-600 leading-relaxed font-medium mb-4 italic">
                      &quot;{t.quote || t.text}&quot;
                    </p>
                    
                    <div className="flex items-center gap-2">
                       <span className="text-slate-400 font-bold">-</span>
                       <p className="text-[15px] font-extrabold text-slate-800 tracking-tight">
                          {t.name}
                       </p>
                       <span className="text-slate-400 font-bold">-</span>
                       <p className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">
                          {t.role}
                       </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QR Code Section */}
        <section className="bg-white px-6 sm:px-10 py-10 border-t border-slate-100">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                QR Code
              </h2>
            </div>
            
            <div className="bg-slate-50/50 rounded-[40px] p-8 sm:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-slate-100/50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
                {/* QR Code Display */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-sky-400/20 to-sky-100/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white p-5 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100">
                    {qrDataUrl ? (
                      <Image 
                        src={qrDataUrl} 
                        alt="QR Code" 
                        width={180} 
                        height={180} 
                        className="w-full h-auto" 
                      />
                    ) : (
                      <div className="w-40 h-40 bg-slate-100 animate-pulse rounded-2xl" />
                    )}
                  </div>
                </div>

                {/* Right side: Profile & Download Button */}
                <div className="flex flex-col items-center sm:items-end gap-6">
                   <div className="relative h-20 w-20 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                      {card.image ? (
                        <Image 
                          src={card.image} 
                          alt={name} 
                          fill 
                          className="object-cover" 
                          unoptimized={card.image.startsWith("data:")} 
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-slate-200 text-slate-500 font-bold text-xl">
                          {name[0]}
                        </div>
                      )}
                   </div>
                   
                   <button
                     onClick={() => downloadQrPng(`${baseUrl}/${slug}`, "my-vcard-qr.png")}
                     className="inline-flex items-center justify-center rounded-2xl bg-slate-800 text-white text-sm font-extrabold px-8 py-4 hover:bg-slate-900 transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap"
                   >
                     Download My QR Code
                   </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="bg-slate-50/50 px-6 sm:px-10 py-10 border-t border-slate-100">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                Business Hours
              </h2>
            </div>
            
            <div className="space-y-4">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => {
                const hours = card.businessHours?.[day.toLowerCase()];
                const isClosed = hours ? !hours.enabled : day === "Sunday";
                const timeRange = isClosed ? "Closed" : (hours ? `${hours.start} - ${hours.end}` : "12:00 AM - 12:00 AM");

                return (
                  <div 
                    key={day}
                    className="flex items-center gap-5 bg-white p-4 sm:p-5 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-slate-100/50 hover:shadow-md transition-shadow"
                  >
                    {/* Icon */}
                    <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-800 text-white shadow-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[13px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">
                        {day}
                      </span>
                      <span className={`text-[15px] sm:text-[16px] font-extrabold ${isClosed ? "text-slate-400" : "text-slate-800"}`}>
                        {timeRange}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Us Form */}
        <section id="contact" className="bg-slate-50/50 px-6 sm:px-10 py-10 border-t border-slate-100">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                Contact Us
              </h2>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-[40px] p-6 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.02)] border border-white">
              <form className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-500 uppercase tracking-wide ml-1">Your Name</label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-[20px] py-4 pl-14 pr-6 text-sm focus:bg-white focus:ring-2 focus:ring-slate-200 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-500 uppercase tracking-wide ml-1">Email Address</label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <input 
                      type="email" 
                      placeholder="E-mail Address" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-[20px] py-4 pl-14 pr-6 text-sm focus:bg-white focus:ring-2 focus:ring-slate-200 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-500 uppercase tracking-wide ml-1">Phone</label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <input 
                      type="text" 
                      placeholder="Mobile Number" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-[20px] py-4 pl-14 pr-6 text-sm focus:bg-white focus:ring-2 focus:ring-slate-200 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-500 uppercase tracking-wide ml-1">Your Message</label>
                  <div className="relative">
                    <textarea 
                      placeholder="Type a Message..." 
                      rows={5}
                      className="w-full bg-slate-50 border border-slate-100 rounded-[24px] py-4 px-6 text-sm focus:bg-white focus:ring-2 focus:ring-slate-200 transition-all outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                   <button 
                     type="button" 
                     className="bg-slate-800 text-white font-extrabold px-10 py-4 rounded-2xl shadow-lg hover:bg-slate-900 transition-all active:scale-95"
                   >
                     Send Message
                   </button>
                </div>
              </form>
            </div>

            {/* Platform Promotion */}
            <div className="mt-16 text-center">
               <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mb-8">
                Create Your VCard
              </h2>
              <div className="bg-white/80 rounded-[24px] p-6 shadow-sm border border-slate-100 flex items-center justify-between gap-4 max-w-md mx-auto group cursor-pointer hover:shadow-md transition-shadow">
                <span className="text-[15px] font-extrabold text-slate-500 group-hover:text-slate-700 truncate">
                  https://vcards.infyom.com/marlonbrasil
                </span>
                <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>

              <div className="mt-10 mb-6">
                <button
                  onClick={() => onDownloadVCard?.()}
                  className="bg-slate-800 text-white font-extrabold px-10 py-5 rounded-2xl shadow-xl hover:bg-slate-900 transition-all active:scale-95"
                >
                  Add To Contact
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function LegalSection({
  title,
  html,
  onClose,
}: {
  title: string;
  html?: string;
  onClose: () => void;
}) {
  if (!html) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative flex h-full max-h-[80vh] w-full max-w-xl flex-col bg-white overflow-hidden rounded-3xl shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 text-sm leading-relaxed text-gray-600 prose prose-slate prose-sm max-w-none prose-headings:text-gray-900 prose-strong:text-gray-900">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div className="border-t border-gray-100 px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-900 text-white font-bold px-6 py-2 rounded-xl hover:bg-black transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
