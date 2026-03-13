"use client";
import React from "react";
import Image from "next/image";
import { SocialCircleIcon } from "@/components/SocialCircleIcon";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import type { VCardItem } from "@/context/VCardsContextTypes";

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

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center px-4 py-6 sm:py-10">
      <div className="w-full max-w-[540px] rounded-[32px] bg-white shadow-2xl border border-slate-200 overflow-hidden relative">
        {/* Hero Section */}
        <section className="relative px-6 sm:px-10 pt-10 pb-12 bg-sky-700 text-white overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -left-20 h-64 w-64 rounded-full bg-sky-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl" />

          <div className="relative z-10 grid gap-10 md:grid-cols-[1.4fr,1fr] items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-semibold leading-tight capitalize">
                  {heroTitle}
                </h1>
                <p className="text-base sm:text-lg text-sky-50/90">
                  We will make you attractive
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => onDownloadVCard?.()}
                  className="inline-flex items-center justify-center rounded-full bg-white text-sky-700 font-semibold text-[12px] sm:text-xs px-5 sm:px-6 py-2.5 shadow-lg hover:bg-slate-100"
                >
                  Download vCard
                </button>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/80 bg-transparent"
                  >
                    <span className="ml-0.5 text-sm">▶</span>
                  </button>
                  <p className="hidden sm:block text-sm text-sky-50">
                    Play Video
                  </p>
                </div>
              </div>
            </div>
            {/* Portrait */}
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="relative h-64 w-64 rounded-3xl bg-sky-300/20 border border-sky-100/40 overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="256px"
                    unoptimized={card.image.startsWith("data:")}
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-5xl font-semibold text-white/90">
                    {name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-sky-900/80 backdrop-blur px-3 py-2 text-[11px]">
                  <p className="font-semibold">{name}</p>
                  <p className="text-sky-100/80">{role}</p>
                </div>
              </div>

              {/* Social Links (below profile) */}
              {socialLinks && socialLinks.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                  {socialLinks.map((link: any, idx: number) => {
                    return (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center hover:scale-110 transition-transform"
                        title={link.platform}
                      >
                        <SocialCircleIcon platform={link.platform} url={link.url} size={40} />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="px-4 sm:px-8 pt-8 pb-10 bg-white"
        >
          <div className="flex flex-col gap-6 items-start">
            {(card as any).coverImage && (
              <div className="relative w-full min-h-[220px] overflow-hidden rounded-3xl mb-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 via-sky-50 to-white" />
                <div className="absolute inset-4 rounded-3xl overflow-hidden shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
                  <Image
                    src={(card as any).coverImage}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="400px"
                    unoptimized={(card as any).coverImage.toString().startsWith("data:")}
                  />
                </div>
                <div className="absolute top-4 right-4 w-24 h-24 rounded-2xl bg-white shadow-lg border border-slate-100 flex flex-col items-center justify-center text-center text-xs">
                  <p className="text-2xl font-bold text-sky-600">
                    {(facts[0] && (facts[0].value ?? facts[0])) || "25"}
                  </p>
                  <p className="text-[11px] text-slate-600 leading-tight">Years Experience</p>
                </div>
              </div>
            )}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                {aboutTitle}
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                {aboutDescription}
              </p>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 text-sm">
                {(card.products && card.products.length > 0 ? card.products : DEFAULT_FEATURES).map((item: any, idx: number) => (
                  <div
                    key={item.id || item.title || idx}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3"
                  >
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-sm overflow-hidden"
                      style={{ backgroundColor: primaryColor }}
                    >
                      {item.icon && (item.icon.startsWith("data:") || item.icon.startsWith("http")) ? (
                        <Image
                          src={item.icon}
                          alt={item.name || item.title}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                          unoptimized={item.icon.startsWith("data:")}
                        />
                      ) : (
                        <span className="text-lg">
                          {item.icon === "users" ? "👨‍⚕️" : item.icon === "syringe" ? "💉" : "🎁"}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-slate-900">
                        {item.name || item.title}
                      </p>
                      <p className="text-[12px] text-slate-600 leading-relaxed line-clamp-2">
                        {item.description || "No description provided."}
                      </p>
                      {item.price && (
                        <p className="text-[12px] font-bold text-sky-600 mt-0.5">
                          {item.currency || "INR"} {item.price}
                        </p>
                      )}
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-[11px] font-semibold text-sky-600 hover:underline"
                        >
                          View details →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {card.products && card.products.length > 0 && card.displayProductEnquiryButton && (
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white hover:bg-black transition-colors"
                  >
                    Product enquiry
                  </a>
                </div>
              )}
              <div className="pt-2 border-t border-slate-100 mt-2 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt={name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-sm font-semibold text-slate-700">
                      {name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="text-[13px] text-slate-700">
                  <p className="font-semibold">Call us: {phone}</p>
                  <p className="text-slate-500">{address}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facts */}
        <section
          id="facts"
          className="bg-slate-50 px-4 sm:px-8 py-9 border-t border-slate-100"
        >
          <div className="grid gap-4 grid-cols-2 items-stretch">
            <div className="col-span-2 sm:col-span-1">
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                Important Facts
              </h2>
              <p className="text-sm text-slate-600">
                A quick view of our experience and outcomes.
              </p>
            </div>
            {facts.slice(0, 3).map((item: any, idx: number) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className="bg-white h-full rounded-2xl border border-slate-100 px-4 py-4 flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <span className="text-lg">
                      {idx === 0 ? "📅" : idx === 1 ? "👨‍⚕️" : "😊"}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">
                    {item.value ?? item}
                  </p>
                </div>
                <p className="text-sm font-medium text-slate-700">
                  {item.label || item.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services (Explore Our Plastic Surgery Treatment) */}
        <section
          id="services"
          className="px-4 sm:px-8 py-10 bg-slate-50 border-t border-slate-100"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <p
                className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1"
                style={{ color: primaryColor }}
              >
                {serviceTitleSmall}
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                {serviceTitle}
              </h2>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 text-[13px]">
            {services.map((svc: any, idx: number) => (
              <div
                key={svc.id || idx}
                className="rounded-2xl border border-slate-100 bg-white px-4 py-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 overflow-hidden shrink-0 shadow-inner">
                    {svc.icon ? (
                      <Image src={svc.icon} alt={svc.name || svc.title} width={48} height={48} className="object-cover" unoptimized={!!svc.icon.startsWith("data:")} />
                    ) : (
                      <span className="text-sky-600 font-bold text-lg">{idx + 1}</span>
                    )}
                  </div>
                  {svc.url && (
                    <a
                      href={svc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center justify-center rounded-full border border-sky-500 text-sky-600 text-[10px] px-4 py-1.5 hover:bg-sky-50 font-semibold"
                    >
                      Read More
                    </a>
                  )}
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-slate-900 mb-2">
                    {svc.name || svc.title}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-normal">
                    {svc.description || svc.details || "No description provided."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Appointment (Call Now and Get a 20% Discount) */}
        <section className="bg-sky-600 text-white px-4 sm:px-0 py-10 border-t border-slate-200">
          <div className="max-w-xl mx-auto flex flex-col gap-0 overflow-hidden rounded-3xl shadow-[0_18px_50px_rgba(15,23,42,0.45)]">
            <div className="bg-sky-700/90 px-6 sm:px-10 py-8 flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
                Call Now and Get a <span className="text-sky-200">20%</span> Discount
              </h2>
              <p className="text-3xl font-bold mb-4">{phone}</p>
              <button
                type="button"
                onClick={() => onDownloadVCard?.()}
                className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold px-6 py-2.5 hover:bg-black"
              >
                Make Appointment
              </button>
            </div>
            <div className="bg-slate-900/95 px-6 sm:px-10 py-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
                Make Appointment
              </h2>
              <form
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <select className="col-span-1 rounded-md bg-white text-slate-800 px-3 py-2.5 text-sm">
                  <option>Select A Service</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                  <option>Service 3</option>
                </select>
                <select className="col-span-1 rounded-md bg-white text-slate-800 px-3 py-2.5 text-sm">
                  <option>Select Doctor</option>
                  <option>Doctor 1</option>
                  <option>Doctor 2</option>
                  <option>Doctor 3</option>
                </select>
                <input
                  type="text"
                  className="col-span-1 rounded-md bg-white text-slate-800 px-3 py-2.5 text-sm"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="col-span-1 rounded-md bg-white text-slate-800 px-3 py-2.5 text-sm"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  className="col-span-1 rounded-md bg-white text-slate-800 px-3 py-2.5 text-sm"
                  placeholder="Appointment Date"
                />
                <input
                  type="text"
                  className="col-span-1 rounded-md bg-white text-slate-800 px-3 py-2.5 text-sm"
                  placeholder="Appointment Time"
                />
                <button
                  type="submit"
                  className="col-span-1 sm:col-span-2 mt-1 inline-flex items-center justify-center rounded-md bg-sky-500 text-white font-semibold py-2.5 hover:bg-sky-400"
                >
                  Make Appointment
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Team (Meet Our Surgical Specialists) */}
        <section className="bg-white px-4 sm:px-8 py-10 border-t border-slate-100">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Meet Our Surgical Specialists
              </h2>
            </div>
            <div className="grid gap-5 grid-cols-2 text-sm">
              {[
                { name: "Dr. Boris Johnson", role: "Plastic Surgeon" },
                { name: "Dr. Amelia Jones", role: "Plastic Surgeon" },
                { name: "Dr. Ava Brown", role: "Plastic Surgeon" },
                { name: "Dr. Alexander Bell", role: "Plastic Surgeon" },
              ].map((doc) => (
                <div key={doc.name} className="rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden flex flex-col">
                  <div className="h-32 bg-slate-200" />
                  <div className="px-4 py-4 text-center">
                    <p className="text-[14px] font-semibold text-slate-900">
                      {doc.name}
                    </p>
                    <p className="text-[12px] text-slate-500">{doc.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blogs (Latest Updates / Articles) */}
        {blogs && blogs.length > 0 && (
          <section className="bg-sky-50 px-4 sm:px-8 py-10 border-t border-slate-100">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1" style={{ color: primaryColor }}>
                  Latest Updates
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  Our Latest Blogs
                </h2>
              </div>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                {blogs.map((blog: any) => (
                  <div key={blog.id || blog.title} className="rounded-2xl overflow-hidden bg-white shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col group">
                    <div className="h-40 w-full relative bg-slate-100 overflow-hidden">
                      {blog.icon ? (
                         <Image src={blog.icon} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                      ) : (
                         <div className="w-full h-full flex items-center justify-center text-slate-400">No Image</div>
                      )}
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                         {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-[15px] font-bold text-slate-900 leading-snug mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-[12px] text-slate-600 leading-relaxed line-clamp-3 mb-4 flex-1">
                        {blog.description}
                      </p>
                      <button type="button" className="text-left text-[11px] font-bold text-sky-600 mt-auto flex items-center gap-1 hover:text-sky-800 transition-colors uppercase tracking-wider">
                        Read Story <span className="text-lg leading-none">&rsaquo;</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Galleries Section */}
        {galleries && (
          <section id="galleries" className="bg-white px-4 sm:px-8 py-10 border-t border-slate-100">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1" style={{ color: primaryColor }}>
                  Our Gallery
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  Precision & Artistic Vision
                </h2>
              </div>
              <div className="grid gap-3 grid-cols-2 sm:grid-cols-3">
                {galleries.map((g: any) => (
                  <div
                    key={g.id}
                    className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 cursor-pointer"
                    onClick={() => setLightboxImage(g.imageUrl)}
                  >
                    <Image
                      src={g.imageUrl}
                      alt="Gallery"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-[200000] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
              <button
                type="button"
                className="absolute top-4 right-4 z-[200001] bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(null);
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full h-[80vh]" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={lightboxImage}
                  alt="Gallery Preview"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        )}

        {/* Testimonials */}
        <section className="bg-slate-50 px-4 sm:px-8 py-10 border-t border-slate-100">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                What Our Clients Say!
              </h2>
            </div>
            <div className="max-w-xl mx-auto">
              <div className="space-y-4">
                {testimonials.map((t: any, idx: number) => (
                  <div
                    key={t.id || idx}
                    className="rounded-2xl bg-white border border-slate-200 px-4 py-8 text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    {t.image ? (
                      <div className="mx-auto mb-4 h-20 w-20 rounded-full overflow-hidden relative border-2 border-slate-200 shadow-sm">
                        <Image src={t.image} alt={t.name || "Testimonial"} fill className="object-cover" unoptimized={!!t.image.startsWith("data:")} />
                      </div>
                    ) : (
                      <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-slate-200 border border-slate-100 flex items-center justify-center text-slate-500 font-bold text-xl">
                        {(t.name || "C")[0].toUpperCase()}
                      </div>
                    )}
                    <p className="text-[14px] sm:text-[15px] text-slate-700 mb-4 italic px-4 leading-relaxed">
                      &quot;{t.quote || t.text}&quot;
                    </p>
                    <div className="pt-2 border-t border-slate-100 mt-2">
                       <p className="text-[16px] font-bold text-slate-900">
                        {t.name}
                      </p>
                      <p className="text-[12px] text-slate-500 mt-0.5 tracking-wide uppercase font-medium">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* Contact */}
        <section
          id="contact"
          className="px-4 sm:px-8 py-9 bg-slate-50 border-t border-slate-100"
        >
          <div className="flex flex-col gap-8 items-start">
            <div className="space-y-3">
              <p
                className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1"
                style={{ color: primaryColor }}
              >
                Contact
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Book your confidential consultation
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-xl">
                Reach out via phone or email for consultation requests, second opinions or surgical
                planning. All conversations are handled with strict confidentiality.
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${email}`}
                className="block rounded-2xl bg-white border border-slate-200 px-4 py-3 hover:border-sky-400/80 transition-colors"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Email
                </p>
                <p className="mt-1 text-slate-900 break-all">{email}</p>
              </a>
              <a
                href={`tel:${phone}`}
                className="block rounded-2xl bg-white border border-slate-200 px-4 py-3 hover:border-sky-400/80 transition-colors"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Phone
                </p>
                <p className="mt-1 text-slate-900">{phone}</p>
              </a>
              <div className="rounded-2xl bg-white border border-slate-200 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Location
                </p>
                <p className="mt-1 text-slate-900">{address}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms & Conditions Section */}
        {card.termsHtml && (
          <section id="terms-conditions" className="px-4 sm:px-8 py-9 bg-white border-t border-slate-100">
            <div className="space-y-3">
              <p
                className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1"
                style={{ color: primaryColor }}
              >
                Legal
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Terms & Conditions
              </h2>
              <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 text-[13px] text-slate-600 leading-relaxed overflow-hidden prose prose-slate max-w-none prose-sm" dangerouslySetInnerHTML={{ __html: card.termsHtml }} />
            </div>
          </section>
        )}

        {/* Privacy Policy Section */}
        {card.privacyHtml && (
          <section id="privacy-policy" className="px-4 sm:px-8 py-9 bg-slate-50 border-t border-slate-100">
            <div className="space-y-3">
              <p
                className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1"
                style={{ color: primaryColor }}
              >
                Privacy
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Privacy Policy
              </h2>
              <div className="mt-4 p-5 rounded-2xl bg-white border border-slate-100 text-[13px] text-slate-600 leading-relaxed overflow-hidden prose prose-slate max-w-none prose-sm" dangerouslySetInnerHTML={{ __html: card.privacyHtml }} />
            </div>
          </section>
        )}

        {/* Footer (dark, multi-column, like Plasery) */}
        <footer className="bg-slate-900 text-slate-200 pt-8 border-t border-slate-800">
          <div className="max-w-xl mx-auto px-4 sm:px-8 pb-6 grid gap-6 grid-cols-1 sm:grid-cols-2 text-[13px]">
            <div>
              <p className="text-xl font-semibold mb-2">
                Plasery
              </p>
              <p className="text-[12px] text-slate-400">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {socialLinks && socialLinks.length > 0 ? (
                  socialLinks.map((link: any, idx: number) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded bg-slate-800 text-slate-200 text-[10px] sm:text-xs flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors"
                      title={link.platform}
                    >
                      {link.platform.substring(0, 2).toUpperCase()}
                    </a>
                  ))
                ) : (
                  [1, 2, 3, 4].map((i) => (
                    <button
                      key={i}
                      type="button"
                      className="h-8 w-8 rounded bg-slate-800 text-slate-200 text-xs flex items-center justify-center"
                    >
                      in
                    </button>
                  ))
                )}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-2">Address</p>
              <p className="text-[12px] text-slate-400">
                123 Street, New York, USA
              </p>
              <p className="text-[12px] text-slate-400 mt-1">{phone}</p>
              <p className="text-[12px] text-slate-400 mt-1">{email}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-2">Quick Links</p>
              <div className="flex flex-col gap-1 text-[12px] text-slate-400">
                <button type="button" className="text-left hover:text-white">
                  About Us
                </button>
                <button type="button" className="text-left hover:text-white">
                  Contact Us
                </button>
                <button type="button" className="text-left hover:text-white">
                  Our Services
                </button>
                <button
                  type="button"
                  className="text-left hover:text-white"
                  onClick={() => {
                    const el = document.getElementById("galleries");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Our Gallery
                </button>
                <button
                  type="button"
                  className="text-left hover:text-white"
                  onClick={() => {
                    const el = document.getElementById("privacy-policy");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    else setShowPrivacy(true); // Fallback to modal if section not in body
                  }}
                >
                  Privacy Policy
                </button>
                <button
                  type="button"
                  className="text-left hover:text-white"
                  onClick={() => {
                    const el = document.getElementById("terms-conditions");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    else setShowTerms(true); // Fallback to modal if section not in body
                  }}
                >
                  Terms &amp; Condition
                </button>
                <button type="button" className="text-left hover:text-white">
                  Support
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-2">Newsletter</p>
              <p className="text-[12px] text-slate-400 mb-3">
                Dolor amet sit justo amet elitr clita ipsum elitr est.
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-full bg-transparent border border-slate-600 px-3 pr-20 py-2 text-[12px] text-slate-200 placeholder:text-slate-500"
                />
                <button
                  type="button"
                  className="absolute right-1 top-1 rounded-full bg-sky-500 text-white text-[11px] px-3 py-1.5"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800">
            <div className="max-w-xl mx-auto px-4 sm:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
              <p>
                © {new Date().getFullYear()} Your Site Name, All Right Reserved.
              </p>
              <p>
                Designed by HTML Codex. Distributed by ThemeWagon.
              </p>
            </div>
          </div>
        </footer>

        {showTerms && card.termsHtml && (
          <LegalSection
            title="Terms & Conditions"
            html={card.termsHtml}
            onClose={() => setShowTerms(false)}
          />
        )}
        {showPrivacy && card.privacyHtml && (
          <LegalSection
            title="Privacy Policy"
            html={card.privacyHtml}
            onClose={() => setShowPrivacy(false)}
          />
        )}
      <VCardDynamicSections card={card} exclude={['testimonials']} />
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
        <div className="flex-1 overflow-y-auto p-6 text-sm text-gray-700 leading-relaxed prose prose-slate max-w-none">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  );
}

