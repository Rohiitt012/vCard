"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { downloadQrPng } from "@/lib/qr";
import { 
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Clock,
  Calendar,
  MessageSquare,
  LampDesk,
  DraftingCompass,
  Quote,
  ChevronLeft,
  PanelTop,
  Download,
  Flower2,
  Bed,
  Tv,
  ExternalLink
} from "lucide-react";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";
import type { VCardItem } from "@/context/VCardsContextTypes";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function CreativeVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const [activeTab, setActiveTab] = useState("services");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const name = card.title || "Creative Professional";
  const occupation = card.occupation || card.tagline || "Art Director & Interior Designer";
  const bio = card.description || "Passionate about creating modern, minimalist spaces that tell a story. With over 10 years of experience in high-end residential and commercial projects.";

  const primaryColor = card.templatePrimaryColor || "#5B6350"; // Olive green from image
  const accentColor = "#D6C6A1"; // Tan from image
  const bgColor = "#FDFCE6"; // Pale yellow from image

  const services = (card.services && card.services.length > 0)
    ? card.services
    : [
        { name: "Interior Design", description: "Bespoke interior solutions for modern homes." },
        { name: "Space Planning", description: "Optimizing layout for maximum functionality." },
        { name: "Styling", description: "Curating furniture and decor to match your vibe." }
      ];

  const socialLinks = card.socialLinks || [];

  return (
    <div className="min-h-screen font-serif" style={{ backgroundColor: bgColor, color: primaryColor }}>
      {/* Background Ornaments */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px]" style={{ backgroundColor: primaryColor }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px]" style={{ backgroundColor: accentColor }}></div>
      </div>


      {/* Main Container */}
      <div className="relative z-20 max-w-[540px] mx-auto min-h-screen flex flex-col pt-16 pb-12 px-6 sm:px-10">
        
        {/* Hero Section */}
        <section className="mt-12 sm:mt-20">
          <div className="flex flex-col gap-8">
            <div className="relative">
              {/* Main Interior Image */}
              <div className="w-full aspect-[4/3] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl animate-float">
                <Image 
                  src="https://images.unsplash.com/photo-1594921935655-bb265275e656?q=80&w=1200"
                  alt="Craft"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile Image Overlay */}
              <div className="absolute -bottom-8 -left-4 w-32 h-32 sm:w-44 sm:h-44 rounded-2xl border-4 border-white overflow-hidden shadow-xl animate-scale-in">
                <Image 
                  src={card.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"}
                  alt={name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  unoptimized={card.image?.startsWith("data:")}
                />
              </div>

              {/* Accent Text Background */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 -rotate-90 hidden sm:block">
                <span className="text-8xl font-black opacity-[0.03] select-none tracking-widest uppercase">
                  CREATIVE
                </span>
              </div>
            </div>

            <div className="mt-4 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2" style={{ color: primaryColor }}>
                {name}
              </h1>
              <p className="text-lg sm:text-xl font-medium opacity-80" style={{ color: primaryColor }}>
                {occupation}
              </p>
              <div className="h-1 w-20 mt-4 rounded-full" style={{ backgroundColor: primaryColor }}></div>
            </div>
          </div>
        </section>

        {/* Contact Quick Actions */}
        <section className="mt-10 grid grid-cols-4 gap-4 animate-fade-in-up">
          <a href={`tel:${card.phone}`} className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm" style={{ backgroundColor: primaryColor, color: bgColor }}>
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest">Call</span>
          </a>
          <a href={`mailto:${card.email}`} className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm" style={{ backgroundColor: primaryColor, color: bgColor }}>
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest">Email</span>
          </a>
          <a href={card.whatsapp ? `https://wa.me/${card.whatsapp.replace(/\D/g, "")}` : "#"} className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm" style={{ backgroundColor: primaryColor, color: bgColor }}>
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest">Chat</span>
          </a>
          <button onClick={onDownloadVCard} className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm" style={{ backgroundColor: primaryColor, color: bgColor }}>
              <Download className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest">Save</span>
          </button>
        </section>

        {/* About / Bio */}
        <section className="mt-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="p-8 rounded-[40px] border-2 shadow-premium" style={{ borderColor: `${primaryColor}20`, backgroundColor: `${bgColor}80`, backdropFilter: "blur(10px)" }}>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-4 opacity-60">About Me</h2>
            <p className="text-lg leading-relaxed italic">
              &ldquo;{bio}&rdquo;
            </p>
            
            {socialLinks.length > 0 && (
              <div className="mt-8 flex flex-col items-center sm:items-start w-full gap-4">
                <VCardSocialLinks 
                    card={card} 
                    layout="vertical" 
                    variant="circular" 
                    iconSize={20}
                    itemClassName="w-full max-w-[400px] h-14 bg-white/50 backdrop-blur-md border border-black/5 rounded-2xl flex items-center p-3 hover:bg-white/80 transition-all shadow-sm"
                />
              </div>
            )}
          </div>
        </section>

        {/* Services Section with "SERVICES" vertical background like the image */}
        <section className="mt-16 relative py-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="absolute -left-12 top-0 bottom-0 flex items-center pointer-events-none overflow-hidden h-full">
            <span className="text-7xl font-black opacity-[0.03] rotate-90 whitespace-nowrap tracking-tight">
              SERVICES
            </span>
          </div>

          <div className="space-y-6 relative z-10 pl-6 border-l-2" style={{ borderColor: `${primaryColor}20` }}>
            <h2 className="text-3xl font-bold mb-8">What I Do</h2>
            
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group p-6 rounded-3xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                style={{ backgroundColor: `${bgColor}aa`, borderColor: `${primaryColor}15` }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold" style={{ color: primaryColor }}>{service.name}</h3>
                  <div className="h-8 w-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: primaryColor, color: bgColor }}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-sm leading-relaxed opacity-70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section with "PHOTOS" background and staggered layout */}
        {(card.galleries && card.galleries.length > 0) ? (
          <section className="mt-16 relative py-12 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            <div className="absolute inset-x-0 top-0 flex items-center justify-center pointer-events-none">
              <span className="text-[70px] sm:text-[90px] font-black opacity-[0.03] tracking-tight uppercase leading-none">
                PHOTOS
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-12">
                <LampDesk className="w-8 h-8 opacity-40 rotate-12" />
                <h2 className="text-4xl font-bold">Gallery</h2>
              </div>

              <div className="grid grid-cols-12 gap-3 items-end">
                {/* Left Mini Image */}
                <div className="col-span-4 mb-16 h-48 rounded-[32px] overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image 
                    src={card.galleries[0]?.imageUrl || "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400"}
                    alt="Gallery"
                    width={200}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Center Main Tall Image */}
                <div className="col-span-5 h-[360px] rounded-[48px] overflow-hidden shadow-2xl z-10 hover:scale-[1.02] transition-transform duration-500">
                  <Image 
                    src={card.galleries[1]?.imageUrl || card.galleries[0]?.imageUrl || "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600"}
                    alt="Gallery Main"
                    width={300}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Bottom Mini Image */}
                <div className="col-span-3 mb-4 h-40 rounded-[28px] overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image 
                    src={card.galleries[2]?.imageUrl || card.galleries[0]?.imageUrl || "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=400"}
                    alt="Gallery small"
                    width={150}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 -right-2 opacity-30">
                <DraftingCompass className="w-12 h-12 -rotate-12" />
              </div>
            </div>
          </section>
        ) : (
          /* Default Premium Gallery Placeholder if no galleries provided */
          <section className="mt-16 relative py-12 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            <div className="absolute inset-x-0 top-0 flex items-center justify-center pointer-events-none">
              <span className="text-[120px] font-black opacity-[0.03] tracking-[0.2em] uppercase leading-none">
                PHOTOS
              </span>
            </div>

            <div className="relative z-10 px-4">
              <div className="flex items-center justify-center gap-4 mb-12">
                <LampDesk className="w-8 h-8 opacity-40 -rotate-12" />
                <h2 className="text-4xl font-bold text-center">Gallery</h2>
              </div>

              <div className="grid grid-cols-12 gap-3 items-end">
                <div className="col-span-4 mb-16 h-48 rounded-[32px] overflow-hidden shadow-lg transform -rotate-2">
                  <Image src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400" alt="G1" width={200} height={300} className="w-full h-full object-cover" />
                </div>
                <div className="col-span-5 h-[360px] rounded-[48px] overflow-hidden shadow-2xl z-10">
                  <Image src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600" alt="G2" width={300} height={450} className="w-full h-full object-cover" />
                </div>
                <div className="col-span-3 mb-4 h-40 rounded-[24px] overflow-hidden shadow-lg transform rotate-3">
                  <Image src="https://images.unsplash.com/photo-1616486029423-aaa47a300bdd?q=80&w=400" alt="G3" width={150} height={200} className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 opacity-30">
                <DraftingCompass className="w-12 h-12 -rotate-12 text-current" />
              </div>
            </div>
          </section>
        )}

        {/* Business Info Glass Cards */}
        <section className="mt-16 grid grid-cols-1 gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {card.address && (
            <div className="flex items-center gap-4 p-6 rounded-[32px] border bg-white/40 backdrop-blur-md shadow-sm" style={{ borderColor: `${primaryColor}10` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${primaryColor}15` }}>
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Our Studio</p>
                <p className="text-sm font-medium">{card.address}</p>
              </div>
            </div>
          )}

          {card.email && (
            <div className="flex items-center gap-4 p-6 rounded-[32px] border bg-white/40 backdrop-blur-md shadow-sm" style={{ borderColor: `${primaryColor}10` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${primaryColor}15` }}>
                 <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Send Inquiry</p>
                <a href={`mailto:${card.email}`} className="text-sm font-medium hover:underline">{card.email}</a>
              </div>
            </div>
          )}
        </section>

        {/* Premium Appointment Section with Background Image */}
        <section className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="relative p-10 rounded-[60px] overflow-hidden shadow-2xl min-h-[500px] flex flex-col justify-center" style={{ backgroundColor: "#1a1a1a" }}>
            {/* Background Image Overlay */}
            <div className="absolute inset-0 opacity-40">
              <Image 
                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200" 
                alt="Interior Background" 
                fill
                className="object-cover"
              />
            </div>
            
            {/* Outline Background Text */}
            <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
              <span 
                className="text-[100px] font-black opacity-[0.05] tracking-widest leading-none pointer-events-none"
                style={{ WebkitTextStroke: `2px ${bgColor}`, color: 'transparent' }}
              >
                BOOK NOW
              </span>
            </div>

            <div className="relative z-10 text-white text-center">
              <h2 className="text-4xl font-bold mb-10">Make an Appointment</h2>
              
              <div className="space-y-6 text-left max-w-sm mx-auto">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-80">Date :</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-white/30"
                      style={{ colorScheme: 'dark' }}
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-80">Hour :</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["8:10 - 20:00", "8:10 - 20:00", "8:10 - 20:00", "8:10 - 20:00"].map((time, i) => (
                      <div key={i} className="bg-white/10 border border-white/10 rounded-xl px-3 py-3 text-center text-sm opacity-80">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  className="w-full mt-6 py-5 rounded-[20px] bg-[#FFD572] hover:bg-[#ffcd57] text-black font-black text-sm tracking-widest uppercase shadow-xl transition-all hover:scale-[1.02] active:scale-95"
                  style={{ color: '#1a1a1a' }}
                >
                  Make An Appointment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Products Section */}
        <section className="mt-20 relative py-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          {/* Hanging Lamp Decorative SVGs */}
          <div className="absolute top-0 left-4 opacity-10 flex gap-4 pointer-events-none">
             <svg width="40" height="100" viewBox="0 0 40 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="20" y1="0" x2="20" y2="70" />
                <path d="M5 70h30l-5 20h-20l-5-20z" />
             </svg>
             <svg width="30" height="80" viewBox="0 0 30 80" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="15" y1="0" x2="15" y2="60" />
                <path d="M4 60h22l-4 15h-14l-4-15z" />
             </svg>
          </div>

          {/* Hanging Plant Decorative Image */}
          <div className="absolute -top-10 -right-4 w-48 h-64 pointer-events-none z-0 opacity-60">
             <Image 
               src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=400" 
               alt="Plant decoration" 
               width={200} 
               height={300} 
               className="object-contain"
             />
          </div>

          {/* Outline Background Text */}
          <div className="absolute top-10 inset-x-0 text-center pointer-events-none">
            <span 
              className="text-[70px] sm:text-[90px] font-black opacity-[0.03] tracking-tight leading-none"
              style={{ WebkitTextStroke: `2px ${primaryColor}40`, color: 'transparent' }}
            >
              INTERIOR
            </span>
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-12">Products</h2>
            
            <div className="grid grid-cols-2 gap-6 px-2">
              {(card.products && card.products.length > 0 ? card.products : [
                { 
                  name: "Stylish Brown Chair", 
                  description: "Lorem Ipsum dummy", 
                  price: "25.00", 
                  icon: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400" 
                },
                { 
                  name: "Modern Grey Sofa", 
                  description: "Lorem Ipsum dummy", 
                  price: "25.00", 
                  icon: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400" 
                }
              ]).map((product, idx) => (
                <div key={idx} className="flex flex-col group">
                  <div className="relative mb-4 aspect-square">
                    <Image 
                      src={product.icon} 
                      alt={product.name} 
                      fill
                      className="object-contain z-10 p-4 transition-transform group-hover:scale-110 duration-500"
                    />
                    {/* Unique Curved Background Shape */}
                    <div 
                      className={`absolute bottom-0 inset-x-0 h-[85%] ${idx % 2 === 0 ? 'rounded-tr-[100px] rounded-br-[100px]' : 'rounded-tl-[100px] rounded-bl-[100px]'} opacity-40`}
                      style={{ backgroundColor: accentColor }}
                    ></div>
                  </div>
                  <div className="text-left px-2">
                    <h3 className="font-bold text-lg leading-tight mb-1">{product.name}</h3>
                    <p className="text-xs opacity-60 mb-2">{product.description}</p>
                    <p className="font-black text-xl">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Testimonials Section */}
        <section className="mt-24 relative py-12 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          {/* Outline Background Text */}
          <div className="absolute top-0 inset-x-0 text-center pointer-events-none">
            <span 
              className="text-[70px] sm:text-[90px] font-black opacity-[0.03] tracking-tight leading-none pointer-events-none"
              style={{ WebkitTextStroke: `2px ${primaryColor}40`, color: 'transparent' }}
            >
              FEEDBACK
            </span>
          </div>

          <div className="relative z-10">
            {/* Decorative Quote Icon on the Right */}
            <div className="absolute -right-4 -top-8">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="#FFD572" className="opacity-60 rotate-180">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21Z" opacity="0.4" />
                <path d="M11.1304 4.09503C12.1818 2.05286 14.28 0.666667 16.6667 0.666667C20.7168 0.666667 24 3.94991 24 8C24 12.0501 20.7168 15.3333 16.6667 15.3333H15.3333V8.66667H16.6667C17.0349 8.66667 17.3333 8.36819 17.3333 8C17.3333 7.63181 17.0349 7.33333 16.6667 7.33333C14.8257 7.33333 13.3333 8.82572 13.3333 10.6667V12.6667C13.3333 13.0349 13.0349 13.3333 12.6667 13.3333H10.6667C8.82572 13.3333 7.33333 11.8409 7.33333 10V8C7.33333 5.79086 9.12419 4 11.3333 4C11.7015 4 12 4.29848 12 4.66667C12 5.03486 11.7015 5.33333 11.3333 5.33333C9.86057 5.33333 8.66667 6.52724 8.66667 8V8.66667H10C10.3682 8.66667 10.6667 8.96515 10.6667 9.33333V11.3333C10.6667 11.7015 10.3682 12 10 12H8.66667V10C8.66667 8.52724 9.86057 7.33333 11.3333 7.33333V4.09503C11.2667 4.09503 11.2001 4.09503 11.1334 4.09504L11.1304 4.09503Z" fill="#FFD572" />
              </svg>
            </div>

            {/* Decorative Hanging Lamp on the Left */}
            <div className="absolute -left-12 top-0 h-40 w-16 opacity-10 pointer-events-none">
               <svg width="40" height="150" viewBox="0 0 40 150" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="20" y1="0" x2="20" y2="100" />
                  <path d="M10 100h20v20h-20z" />
                  <path d="M5 120h30v5h-30z" />
               </svg>
            </div>

            <div className="mt-12 space-y-8">
              {(card.testimonials && card.testimonials.length > 0 ? card.testimonials : [
                { 
                  name: "James Brown", 
                  quote: "When potential customers are researching you online, they're getting to know you through the content on your website. So understandably, many of them might be skeptical or hesitant to trust you right away.", 
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400" 
                }
              ]).map((testi, idx) => (
                <div key={idx} className={`${idx === 0 ? 'block' : 'hidden'}`}>
                  <p className="text-[15px] leading-relaxed opacity-70 mb-10 max-w-lg mx-auto text-center font-medium">
                    {testi.quote}
                  </p>
                  
                  <div className="flex items-center justify-between mt-12">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2" style={{ borderColor: accentColor }}>
                        <Image src={testi.image} alt={testi.name} width={60} height={60} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-bold text-lg">{testi.name}</span>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                      <button className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:bg-black/5" style={{ borderColor: `${primaryColor}20` }}>
                        <ChevronLeft className="w-5 h-5 opacity-60" />
                      </button>
                      <button className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:bg-black/5" style={{ borderColor: `${primaryColor}20` }}>
                        <ChevronRight className="w-5 h-5 opacity-60" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Blog/Article Section */}
        <section className="mt-24 relative py-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          {/* Outline Background Text */}
          <div className="absolute top-0 inset-x-0 text-center pointer-events-none">
            <span 
              className="text-[70px] sm:text-[90px] font-black opacity-[0.03] tracking-tight leading-none"
              style={{ WebkitTextStroke: `2px ${primaryColor}40`, color: 'transparent' }}
            >
              ARTICLE
            </span>
          </div>

          <div className="relative z-10">
            <div className="flex flex-col items-center gap-2 mb-12">
              <h2 className="text-4xl font-bold">Blog</h2>
              <div className="absolute right-0 top-1/4 opacity-40 pointer-events-none">
                {/* Custom Window Icon SVG */}
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="12" y1="3" x2="12" y2="21" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <rect x="7" y="2" width="2" height="2" fill="currentColor" opacity="0.5" />
                  <rect x="15" y="2" width="2" height="2" fill="currentColor" opacity="0.5" />
                  <rect x="7" y="20" width="2" height="2" fill="currentColor" opacity="0.5" />
                  <rect x="15" y="20" width="2" height="2" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
            </div>

            <div className="space-y-12">
              {(card.blogs && card.blogs.length > 0 ? card.blogs : [
                { 
                  title: "Color Psychology", 
                  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking.", 
                  icon: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800" 
                }
              ]).map((blog, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-10 items-center group">
                  <div className="relative w-full md:w-[45%] aspect-[1.3/1]">
                    {/* Decorative Background for Image */}
                    <div className="absolute -top-3 -left-3 -right-3 -bottom-3 rounded-3xl opacity-30" style={{ backgroundColor: accentColor }}></div>
                    <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl z-10">
                      <Image 
                        src={blog.icon} 
                        alt={blog.title} 
                        fill 
                        className="object-cover transition-transform group-hover:scale-105 duration-700" 
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold leading-tight">{blog.title}</h3>
                    <p className="text-[15px] leading-relaxed opacity-60">
                      {blog.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-16">
              <div className="w-10 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></div>
              <div className="w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: primaryColor }}></div>
              <div className="w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: primaryColor }}></div>
              <div className="w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: primaryColor }}></div>
            </div>
          </div>
        </section>

        {/* Premium Business Hours Section */}
        <section className="mt-24 relative py-12 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
          {/* Outline Background Text */}
          <div className="absolute top-0 inset-x-0 text-center pointer-events-none">
            <span 
              className="text-[70px] sm:text-[90px] font-black opacity-[0.03] tracking-tight leading-none"
              style={{ WebkitTextStroke: `2px ${primaryColor}40`, color: 'transparent' }}
            >
              SCHEDULE
            </span>
          </div>

          <div className="relative z-10 px-4">
            <div className="flex flex-col items-center gap-2 mb-12">
               <div className="absolute left-4 top-0 opacity-40">
                  <LampDesk className="w-16 h-16 rotate-12" strokeWidth={1.5} />
               </div>
               <h2 className="text-4xl font-bold">Business Hours</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => {
                const hours = card.businessHours?.[day];
                const timeText = hours?.enabled ? `${hours.start} - ${hours.end}` : "Closed";
                
                return (
                  <div 
                    key={day} 
                    className="py-4 px-6 rounded-2xl text-center font-bold tracking-tight shadow-sm transition-transform hover:scale-[1.02]"
                    style={{ backgroundColor: accentColor, color: primaryColor }}
                  >
                    {day} : {timeText}
                  </div>
                );
              })}
            </div>

            {/* Decorative Foliage Icons */}
            <div className="absolute -left-4 -bottom-4 opacity-20 transform -rotate-12">
               <Flower2 className="w-16 h-16" />
            </div>
            
            {/* Real Foliage Decorative Image */}
            <div className="absolute -right-12 -bottom-16 w-48 h-64 pointer-events-none z-0">
               <Image 
                 src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=400" 
                 alt="Plant deco" 
                 width={200} 
                 height={300} 
                 className="object-contain"
               />
            </div>
          </div>
        </section>

        {/* Premium QR Code Section with Interior Mockup */}
        <section className="mt-24 relative py-20 rounded-[60px] overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: "1s" }}>
           {/* Interior Background */}
           <div className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1200" 
                alt="Interior Wall" 
                fill 
                className="object-cover opacity-60 grayscale-[0.5]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
           </div>

           {/* Outline Background Text */}
           <div className="absolute top-10 inset-x-0 text-center pointer-events-none z-10">
              <span 
                className="text-[70px] sm:text-[90px] font-black opacity-[0.05] tracking-tight leading-none"
                style={{ WebkitTextStroke: `2px ${primaryColor}`, color: 'transparent' }}
              >
                SCAN
              </span>
           </div>

           <div className="relative z-20 px-8 text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold mb-12">QR Code</h2>

              {/* Digital Frame Mockup */}
              <div className="relative p-2 bg-[#1a1a1a] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[8px] border-[#222]">
                 <div className="bg-white rounded-[12px] p-6 flex items-center gap-8 min-w-[320px]">
                    {/* Profile on the left */}
                    <div className="w-32 h-32 rounded-[24px] overflow-hidden border-2 border-gray-100 shadow-inner">
                       <Image src={card.image} alt={card.title} width={128} height={128} className="w-full h-full object-cover grayscale" />
                    </div>
                    {/* QR on the right */}
                    <div className="w-32 h-32 flex items-center justify-center p-2 bg-white rounded-xl">
                       <img 
                         src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : card.previewUrl)}`} 
                         alt="QR Code" 
                         className="w-full h-full"
                       />
                    </div>
                 </div>
                 {/* Screen Stand Handle (Simulated bottom bar) */}
                 <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#333] rounded-full"></div>
              </div>

              {/* Lamp decoration on the right of the frame */}
              <div className="absolute right-4 bottom-10 opacity-60 pointer-events-none">
                 <div className="relative">
                   <div className="w-1 h-32 bg-gray-400 mx-auto"></div>
                   <div className="w-16 h-12 bg-white/40 backdrop-blur-md rounded-t-full -mt-4"></div>
                   <div className="w-8 h-8 rounded-full bg-white blur-xl -mt-8 mx-auto opacity-50"></div>
                 </div>
              </div>

              <button 
                onClick={() => downloadQrPng(typeof window !== 'undefined' ? window.location.href : card.previewUrl, `vcard-${card.title}.png`)}
                className="mt-16 w-full max-w-sm py-5 rounded-[24px] bg-[#FFD572] hover:bg-[#ffcd57] text-black font-black text-sm tracking-widest uppercase shadow-xl transition-all hover:scale-[1.02] active:scale-95"
              >
                Download My QR Code
              </button>
           </div>
        </section>

        {/* Premium Contact Us Section */}
        <section className="mt-24 relative py-12 animate-fade-in-up" style={{ animationDelay: "1.1s" }}>
          {/* Outline Background Text */}
          <div className="absolute top-0 inset-x-0 text-center pointer-events-none">
            <span 
              className="text-[120px] font-black opacity-[0.03] tracking-widest leading-none"
              style={{ WebkitTextStroke: `2px ${primaryColor}40`, color: 'transparent' }}
            >
              MESSAGE
            </span>
          </div>

          <div className="relative z-10 px-4">
            <div className="flex justify-center items-center gap-4 mb-12">
               <h2 className="text-4xl font-bold">Contact Us</h2>
               <div className="absolute right-0 top-0 opacity-40">
                  <Bed className="w-16 h-16" strokeWidth={1.2} />
               </div>
            </div>

            <form className="space-y-4 max-w-xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#FFD572] transition-all"
                />
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#FFD572] transition-all"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#FFD572] transition-all"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#FFD572] transition-all resize-none"
              ></textarea>
              
              <div className="flex justify-center mt-8">
                <button 
                  type="button"
                  className="px-12 py-5 rounded-[20px] bg-[#FFD572] hover:bg-[#ffcd57] text-black font-black text-sm tracking-widest uppercase shadow-xl transition-all hover:scale-[1.02] active:scale-95"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Decorative Furniture Icon on the Left */}
            <div className="absolute left-0 bottom-0 opacity-30">
               <Tv className="w-20 h-20" strokeWidth={1} />
            </div>
            
            {/* Real Foliage Decorative Image on the Right */}
            <div className="absolute -right-8 -bottom-12 w-40 h-56 pointer-events-none z-0">
               <Image 
                 src="https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=400" 
                 alt="Plant deco" 
                 width={160} 
                 height={220} 
                 className="object-contain"
               />
            </div>
          </div>
        </section>

        {/* Premium Your VCard Link Section */}
        <section className="mt-24 relative py-20 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
           {/* Light Interior Background */}
           <div className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=1200" 
                alt="White Interior" 
                fill 
                className="object-cover opacity-40" 
              />
              <div className="absolute inset-0 bg-white/20"></div>
           </div>

           {/* Outline Background Text */}
           <div className="absolute top-10 inset-x-0 text-center pointer-events-none z-10">
              <span 
                className="text-[70px] sm:text-[90px] font-black opacity-[0.03] tracking-tight leading-none"
                style={{ WebkitTextStroke: `2px ${primaryColor}40`, color: 'transparent' }}
              >
                CREATE
              </span>
           </div>

           <div className="relative z-20 px-4 text-center">
              <h2 className="text-4xl font-bold mb-12">Your VCard</h2>

              <div className="max-w-md mx-auto mb-10">
                 <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-[20px] p-5 flex items-center justify-between shadow-sm">
                    <span className="text-sm font-medium opacity-80 truncate mr-4">
                       {baseUrl}/{slug}
                    </span>
                    <ExternalLink className="w-5 h-5 opacity-60 shrink-0" />
                 </div>
              </div>

              <button 
                onClick={onDownloadVCard}
                className="px-12 py-5 rounded-[20px] bg-[#FFD572] hover:bg-[#ffcd57] text-black font-black text-sm tracking-widest uppercase shadow-xl transition-all hover:scale-[1.02] active:scale-95"
              >
                Add to Contact
              </button>
           </div>
           
           {/* Decorative Foliage on the Left */}
           <div className="absolute left-[-20px] bottom-0 w-48 h-64 pointer-events-none z-10">
              <Image 
                src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=400" 
                alt="Plant deco" 
                width={200} 
                height={300} 
                className="object-contain"
              />
           </div>
        </section>

        {/* Dynamic Sections (Other Content) */}
        <section className="mt-16">
          <VCardDynamicSections card={card} exclude={['testimonials', 'blogs', 'businessHours']} />
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t flex flex-col items-center gap-6" style={{ borderColor: `${primaryColor}20` }}>
          <VCardSocialLinks 
              card={card} 
              layout="horizontal" 
              variant="circular" 
              iconSize={20}
              itemClassName="opacity-60 hover:opacity-100 transition-opacity"
              containerClassName="flex gap-6"
          />
          <div className="text-center">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 mb-2">Designed by Antigravity</p>
            <p className="text-xs opacity-60">© {new Date().getFullYear()} {card.title}. All rights reserved.</p>
          </div>
        </footer>

      </div>

      <style jsx>{`
        .shadow-premium {
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.1), 0 18px 36px -18px rgba(0, 0, 0, 0.15);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
