"use client";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

// Dennis Tailwind CSS Personal Portfolio – full template with Dennis classes (container, btn, navbar, etc.)
export function FloralVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "Dennis Scott";
  const role = card.occupation || card.tagline || "Website Designer · Web Developer";
  const description =
    card.description ||
    "Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.";
  const aboutText =
    (card as { about?: string }).about ||
    "Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development cycle for dynamic web projects. I'm a professional web designer. My motive is to build a best web design with my all years of experience.";

  const primaryColor = card.templatePrimaryColor || "#12B488"; // Flower Green


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const services_static = [
    { title: "UX / UI Design", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
    { title: "Ios App Designer", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
    { title: "Photography", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
    { title: "Graphic Designer", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
    { title: "Web Security", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
    { title: "24 / 7", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const experience = [
    { company: "Facebook", years: "2019-21", role: "UX / UI Designer" },
    { company: "Google Tech.", years: "2018-19", role: "Sr. UX / UI Designer" },
    { company: "Lenovo Ltd.", years: "2016-18", role: "Jr. UX / UI Designer" },
    { company: "Circle CI", years: "2015-16", role: "Front-end Web Designer" },
  ];

  const defaultBlogs = [
    { id: "1", title: "Giglink: Tailwind CSS NFT Marketplace Template", description: "The phrasal sequence of the is now so that many campaign and benefit", icon: "" },
    { id: "2", title: "Techwind: Tailwind CSS Multipurpose Template", description: "The phrasal sequence of the is now so that many campaign and benefit", icon: "" },
    { id: "3", title: "Upwind: Tailwind CSS Landing Page Template", description: "The phrasal sequence of the is now so that many campaign and benefit", icon: "" },
  ];
  const blogs = (card.blogs && card.blogs.length > 0) ? card.blogs : defaultBlogs;

  const email = card.email || "contact@example.com";
  const phone = card.phone || "+152 534-468-854";
  const address = card.address || "C/54 Northwest Freeway, Suite 558, Houston, USA 485";


  return (
    <div className="dennis-floral-template w-full max-w-[540px] mx-auto sm:my-8 overflow-hidden min-h-screen text-base text-slate-900 bg-[#FCF8F5] sm:rounded-[44px] sm:shadow-[0_40px_100px_rgba(43,27,20,0.15)] relative">

      {(!card.manageSection || card.manageSection.header) && (
        <section className="relative overflow-hidden" id="home">
          {/* Cover Image background */}
          <div className="relative h-[250px] w-full overflow-hidden">
            <Image
              src={
                (card as any).coverImage ||
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop"
              }
              alt="Cover"
              fill
              className="object-cover"
              priority
              unoptimized={typeof (card as any).coverImage === "string" && (card as any).coverImage.startsWith("data:")}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
          </div>

          {/* The Overlapping White Card (Image 1 style) */}
          <div className="relative -mt-16 px-5 pb-8">
            <div className="relative rounded-[40px] bg-white p-8 shadow-[0_30px_70px_rgba(107,63,42,0.12)] border border-rose-50/50">
              {/* Decorative Floral line art (from Image 1 & 2) */}
              <div className="pointer-events-none absolute right-4 bottom-4 opacity-40">
                <svg width="120" height="180" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M80 140c-15-20-20-40-5-60 10-12 15-25 10-40M65 140c-10-15-12-35 5-50 10-10 15-20 10-35M45 140c-5-12-2-25 10-35 8-8 12-15 10-25"
                    stroke="#E7D7CE"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="85" cy="30" r="3" fill="#E7D7CE" />
                  <path d="M75 110 S 90 90, 85 70" stroke="#E7D7CE" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-8">
                {/* Profile avatar (square-ish rounded like images) */}
                <div className="relative -mt-20">
                  <div className="rounded-[32px] bg-white p-2 shadow-2xl">
                    <div className="relative h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-[24px] bg-slate-100 border-2 border-slate-50">
                      {card.image ? (
                        <Image
                          src={card.image}
                          alt={name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 128px, 160px"
                          unoptimized={card.image.startsWith("data:")}
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-4xl font-bold text-[#6B3F2A]">
                          {name.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="flex-1 pb-2">
                  <h1 className="text-3xl sm:text-4xl font-bold text-[#6B3F2A] tracking-tight">
                    {name}
                  </h1>
                  <p className="mt-2 text-lg sm:text-xl font-semibold text-slate-800">
                    {role}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-10">
                <p className="text-[15px] leading-7 text-slate-500 max-w-md">
                  {description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onDownloadVCard?.()}
                  className="flex-1 sm:flex-initial px-8 py-3.5 rounded-2xl text-white font-bold text-[15px] shadow-lg shadow-emerald-100 transition-all hover:translate-y-[-2px] hover:shadow-emerald-200 active:translate-y-0"
                  style={{ backgroundColor: "#12B488" }}
                >
                  Add to Contacts
                </button>
                <button
                  type="button"
                  onClick={() => onDownloadVCard?.()}
                  className="flex-1 sm:flex-initial px-8 py-3.5 rounded-2xl border-2 font-bold text-[15px] transition-all hover:bg-slate-50"
                  style={{ borderColor: "#12B488", color: "#12B488" }}
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>

        </section>
      )}

      {/* About Section – Elegant & Premium */}
      {(!card.manageSection || card.manageSection.header) && (
        <section className="relative px-6 py-20 bg-white" id="about">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="relative w-full md:w-1/2">
                <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden shadow-2xl">
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt={name}
                      fill
                      className="object-cover"
                      unoptimized={card.image.startsWith("data:")}
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-7xl font-bold bg-[#E7D7CE] text-[#6B3F2A]">
                      {name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                {/* Stats Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[32px] shadow-xl border border-rose-50 hidden sm:block">
                  <p className="text-3xl font-bold text-[#12B488]">7+</p>
                  <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years Exp.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-[#6B3F2A] mb-6">
                  Redefining Beauty <br /> & Artistry
                </h2>
                <p className="text-lg leading-relaxed text-slate-500 mb-8">
                  {aboutText}
                </p>
                <div className="flex gap-4">
                  <a
                    href="#project"
                    className="px-8 py-3 rounded-2xl bg-slate-900 text-white text-[15px] font-bold transition-all hover:bg-slate-800"
                  >
                    View My Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section – Redesigned Premium Boutique Grid */}
      {(!card.manageSection || card.manageSection.services) && (
        <section className="relative px-6 py-24 bg-[#FCF8F5]" id="service">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <span className="text-[14px] font-bold text-[#12B488] uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
                <h3 className="text-4xl md:text-5xl font-bold text-[#6B3F2A] leading-tight">
                  {card.serviceTitle || "Curated Creative Services"}
                </h3>
              </div>
              <div className="hidden md:block w-24 h-px bg-[#D6C5B3] mb-5" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
              {(card.services && card.services.length > 0
                ? card.services
                : [
                  { name: "Bridal Makeup", description: "Timeless elegance and personalized artistry for your most memorable day." },
                  { name: "Editorial Design", description: "Captivating visual narratives for high-fashion fashion and digital media." },
                  { name: "Floral Styling", description: "Bespoke natural arrangements that speak the language of your event." },
                  { name: "Digital Branding", description: "Elevated brand identities crafted for modern boutique businesses." },
                  { name: "Photography", description: "Artistic storytelling through a refined lens, capturing life's subtle details." },
                  { name: "Consultation", description: "Expert creative direction and strategy tailored to your unique brand vision." },
                ]
              ).map((s: any, idx: number) => (
                <div
                  key={s.id || idx}
                  className="group relative flex flex-col items-start transition-all duration-500"
                >
                  {/* Numbering */}
                  <div className="text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#12B488]/20 to-transparent absolute -top-12 -left-4 select-none group-hover:from-[#12B488]/40 transition-all duration-500">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  <div className="relative mb-8 flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-xl shadow-emerald-50 text-[#12B488] text-3xl group-hover:bg-[#12B488] group-hover:text-white transition-all duration-500">
                    {s.icon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={s.icon} alt={s.name} className="h-full w-full object-cover rounded-xl" />
                    ) : (
                      "✧"
                    )}
                  </div>

                  <div className="relative z-10">
                    <h5 className="text-2xl font-bold text-[#6B3F2A] mb-4 group-hover:text-[#12B488] transition-colors duration-300">
                      {s.name}
                    </h5>
                    <p className="text-lg leading-relaxed text-slate-500 mb-6 max-w-[280px]">
                      {s.description}
                    </p>
                    <div className="w-10 h-1 bg-[#12B488] rounded-full transition-all duration-500 group-hover:w-20" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Premium Collaboration CTA */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your <br /> Creative Transformation?
          </h3>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re looking for a bespoke bridal look or a complete brand overhaul, I&apos;m here to bring your vision to life.
          </p>
          <button
            type="button"
            onClick={() => onDownloadVCard?.()}
            className="px-10 py-4 rounded-2xl bg-[#12B488] text-white font-bold text-lg transition-all hover:scale-105 hover:bg-[#10a17a] shadow-2xl shadow-emerald-900/40"
          >
            Let&apos;s Collaborate
          </button>
        </div>
      </section>


      {/* Projects Section – Portfolio Showcase */}
      {(!card.manageSection || card.manageSection.products) && (
        <section className="relative px-6 py-24 bg-[#FCF8F5]" id="project">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <span className="text-[12px] font-bold text-[#12B488] uppercase tracking-[0.3em] mb-3 block">Selected Works</span>
                <h3 className="text-4xl font-bold text-[#6B3F2A]">Creative Portfolio</h3>
              </div>
              <p className="text-slate-500 text-lg max-w-sm">Every project is a unique blend of passion and precision.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="group relative rounded-[40px] overflow-hidden shadow-xl aspect-[4/3] bg-white border border-rose-50 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-slate-200">
                    {/* Placeholder for project images */}
                    <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-sm italic">
                      Visual Masterpiece {n}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                    <h4 className="text-2xl font-bold text-white mb-2">Portfolio Study {n}</h4>
                    <p className="text-slate-300 font-medium">Boutique Branding & Creative Direction</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blogs Section – Redesigned 2x2 Grid */}
      {(!card.manageSection || card.manageSection.blogs) && (
        <section className="relative px-6 py-24 bg-[#FCF8F5]" id="blog">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[12px] font-bold text-[#12B488] uppercase tracking-[0.3em] mb-3 block">Insights & Updates</span>
              <h3 className="text-3xl font-bold text-[#6B3F2A]">Blogs or News</h3>
              <div className="w-16 h-1 bg-[#12B488] mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {blogs.slice(0, 4).map((b) => (
                <article
                  key={b.id}
                  className="group relative bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-emerald-50"
                >
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    {b.icon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={b.icon}
                        alt={b.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300 bg-emerald-50/30">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-[#12B488] uppercase tracking-wider shadow-sm">
                        Latest News
                      </span>
                    </div>
                  </div>

                  <div className="p-10">
                    <h4 className="text-2xl font-bold text-[#6B3F2A] mb-4 group-hover:text-[#12B488] transition-colors duration-300 leading-tight">
                      {b.title}
                    </h4>
                    <p className="text-slate-500 leading-relaxed mb-8 line-clamp-2">
                      {b.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#12B488] font-bold text-sm group/btn cursor-pointer">
                      Read Full Article
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Premium Contact Section */}
      {(!card.manageSection || card.manageSection.contact) && (
        <section className="relative px-6 py-24 bg-white" id="contact">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-[12px] font-bold text-[#12B488] uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
                <h3 className="text-4xl font-bold text-[#6B3F2A] mb-8">Let&apos;s Create Something <br /> Beautiful Together</h3>

                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FCF8F5] text-[#12B488] flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">📞</div>
                    <div>
                      <h5 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-1">Inquiries</h5>
                      <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-xl font-bold text-slate-800 hover:text-[#12B488] transition-colors">{phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FCF8F5] text-[#12B488] flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">✉</div>
                    <div>
                      <h5 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-1">Direct Email</h5>
                      <a href={`mailto:${email}`} className="text-xl font-bold text-slate-800 hover:text-[#12B488] transition-colors">{email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FCF8F5] text-[#12B488] flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">📍</div>
                    <div>
                      <h5 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-1">Studio</h5>
                      <p className="text-xl font-bold text-slate-800 leading-relaxed">{address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FCF8F5] p-10 sm:p-14 rounded-[48px] border border-rose-50 shadow-2xl relative">
                <div className="absolute top-10 right-10 scale-150 opacity-10">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 0L24.5 15.5H40L27.5 25L32 40L20 30.5L8 40L12.5 25L0 15.5H15.5L20 0Z" fill="#12B488" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-[#6B3F2A] mb-8">Inquiry Form</h4>
                <p className="text-slate-500 mb-8 leading-relaxed">Please fill out the form below and I will get back to you within 24 hours.</p>
                <button
                  type="button"
                  className="w-full py-4 rounded-2xl bg-white border-2 border-[#12B488] text-[#12B488] font-bold text-[15px] hover:bg-[#12B488] hover:text-white transition-all shadow-lg shadow-emerald-100"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Makeup-style Gallery block (requested) */}
      {(!card.manageSection || card.manageSection.galleries) && (
        <section className="relative py-14 bg-white overflow-hidden" id="gallery">
          {/* subtle pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
            <div className="absolute -left-10 top-10 h-80 w-80 rotate-12 border-2 border-[#B08968] rounded-[48px]" />
            <div className="absolute left-12 top-28 h-80 w-80 rotate-12 border-2 border-[#B08968] rounded-[48px]" />
          </div>

          <div className="container relative">
            {/* Social icons row (brown) */}
            <VCardSocialLinks
              card={card}
              layout="horizontal"
              variant="circular"
              iconSize={20}
              itemClassName="w-11 h-11 rounded-full bg-[#6B3F2A] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
              containerClassName="flex flex-wrap items-center justify-center gap-4 mb-8"
            />

            {/* Gallery heading */}
            <div className="text-center mb-7">
              <h3 className="text-[22px] font-semibold text-[#2B1B14]">
                Gallery
              </h3>
              <div className="mx-auto mt-2 h-[3px] w-16 rounded-full bg-[#6B3F2A]" />
            </div>

            {/* Gallery card */}
            <div className="flex justify-center">
              <div className="w-full max-w-[420px]">
                <div className="relative rounded-[22px] overflow-hidden shadow-[0_26px_70px_rgba(15,23,42,0.22)] border border-slate-100 bg-slate-200">
                  <div className="relative aspect-[4/2.2]">
                    {card.galleries && card.galleries.length > 0 ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={card.galleries[0].imageUrl}
                        alt="Gallery"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop"
                        alt="Gallery"
                        className="h-full w-full object-cover"
                      />
                    )}

                    {/* small fullscreen button (top-right) */}
                    <button
                      type="button"
                      className="absolute top-3 right-3 h-9 w-9 rounded-full bg-[#6B3F2A] text-white shadow-md flex items-center justify-center"
                      aria-label="Open image"
                    >
                      ✥
                    </button>
                  </div>
                </div>

                {/* dots */}
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#12B488]/40" />
                  <span className="h-2 w-8 rounded-full bg-[#12B488]" />
                  <span className="h-2 w-2 rounded-full bg-[#12B488]/40" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Products – makeup style cards (requested) */}
      {(!card.manageSection || card.manageSection.products) && (
        <section className="relative py-14 bg-white overflow-hidden" id="products">
          {/* subtle decor */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
            <div className="absolute -left-16 bottom-6 h-72 w-72 rotate-12 border-2 border-[#B08968] rounded-[48px]" />
          </div>

          <div className="container relative">
            {/* Heading */}
            <div className="text-center mb-8">
              <h3 className="text-[22px] font-semibold text-[#2B1B14]">
                Products
              </h3>
              <div className="mx-auto mt-2 h-[3px] w-16 rounded-full bg-[#6B3F2A]" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(card.products && card.products.length > 0
                ? card.products.slice(0, 2)
                : [
                  {
                    name: "Makeup Kit",
                    description: "There are many variations of passages of Lorem Ipsum",
                    price: "1250",
                    currency: "$",
                    icon: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
                  },
                  {
                    name: "Clothes",
                    description: "There are many variations of passages of Lorem Ipsum",
                    price: "1400",
                    currency: "$",
                    icon: "https://images.unsplash.com/photo-1520975958225-8f3f6d5a5f27?q=80&w=1200&auto=format&fit=crop",
                  },
                ]
              ).map((p: any, idx: number) => (
                <article
                  // eslint-disable-next-line react/no-array-index-key
                  key={p.id || idx}
                  className="rounded-[22px] border border-[#E7D7CE] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.10)] overflow-hidden"
                >
                  <div className="p-4">
                    <div className="relative rounded-[14px] overflow-hidden bg-slate-200 aspect-[4/2.6]">
                      {p.icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.icon}
                          alt={p.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-slate-500 text-sm">
                          Product
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="px-5 pb-5">
                    <h4 className="text-[16px] font-semibold text-[#2B1B14]">
                      {p.name}
                    </h4>
                    <p className="mt-2 text-[12px] text-slate-500 leading-relaxed min-h-[36px]">
                      {p.description || "There are many variations of passages of Lorem Ipsum"}
                    </p>

                    <div className="mt-4 rounded-[12px] border border-[#6B3F2A] px-4 py-2 text-center">
                      <span className="text-[16px] font-semibold text-[#6B3F2A]">
                        {p.currency || "$"}
                        {p.price || "0"}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Services + Appointment (makeup style) */}
      {(!card.manageSection || card.manageSection.services || card.manageSection.appointments) && (
        <section className="relative py-14 bg-white overflow-hidden" id="makeup-services">
          <div className="container relative">
            {/* Our Services heading */}
            {(!card.manageSection || card.manageSection.services) && (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-[22px] font-semibold text-[#2B1B14]">
                    Our Services
                  </h3>
                  <div className="mx-auto mt-2 h-[3px] w-16 rounded-full bg-[#6B3F2A]" />
                </div>

                {/* Service cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
                  {(card.services && card.services.length > 0
                    ? card.services
                    : [
                      {
                        name: "Makeup",
                        description:
                          "There are many variations of passages of Lorem ipsum but the majority have suffered alteration in some form",
                      },
                      {
                        name: "Makeup",
                        description:
                          "There are many variations of passages of Lorem ipsum but the majority have suffered alteration in some form",
                      },
                    ]
                  ).map((s: any, idx: number) => (
                    <article
                      // eslint-disable-next-line react/no-array-index-key
                      key={s.id || idx}
                      className="relative rounded-[18px] border-2 border-[#6B3F2A] bg-white px-5 pt-10 pb-6"
                    >
                      {/* top icon badge */}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                        <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                          <div className="h-10 w-10 rounded-full border-2 border-[#12B488] flex items-center justify-center text-[#12B488] text-lg">
                            ✧
                          </div>
                        </div>
                      </div>

                      <h4 className="text-center text-[16px] font-semibold text-[#2B1B14]">
                        {s.name || s.title}
                      </h4>
                      <p className="mt-3 text-center text-[12px] text-slate-500 leading-relaxed">
                        {s.description}
                      </p>
                    </article>
                  ))}
                </div>
              </>
            )}

            {(!card.manageSection || card.manageSection.appointments) && (
              <>
                {/* Make An Appointment heading */}
                <div className="text-center mb-8">
                  <h3 className="text-[24px] font-semibold text-[#2B1B14]">
                    Make An Appointment
                  </h3>
                  <div className="mx-auto mt-2 h-[3px] w-16 rounded-full bg-[#6B3F2A]" />
                </div>

                <div className="max-w-[520px] mx-auto">
                  <p className="text-[13px] font-semibold text-[#2B1B14] mb-3">
                    Date :
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder=""
                      readOnly
                      className="w-full h-12 rounded-[12px] border border-[#E7D7CE] bg-white px-4 pr-12 outline-none"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 right-4 h-8 w-8 rounded-[10px] border border-[#E7D7CE] bg-white flex items-center justify-center text-[#6B3F2A]">
                      📅
                    </div>
                  </div>

                  {/* Hour pills */}
                  <div className="mt-8">
                    <p className="text-[13px] font-semibold text-[#2B1B14] mb-3">
                      Hour:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {["8:10 - 20:00", "8:10 - 20:00", "8:10 - 20:00", "8:10 - 20:00"].map((t, i) => (
                        <div
                          // eslint-disable-next-line react/no-array-index-key
                          key={i}
                          className="h-10 rounded-[10px] border border-[#E7D7CE] bg-white flex items-center justify-center text-[12px] font-semibold text-[#6B3F2A]"
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Appointment button */}
                  <div className="mt-8 flex justify-center">
                    <button
                      type="button"
                      className="h-12 px-10 rounded-xl bg-[#12B488] text-white font-bold shadow-[0_18px_40px_rgba(18,180,136,0.2)]"
                    >
                      Make An Appointment
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Floating action buttons (right side) */}
            <div className="hidden sm:flex flex-col items-center gap-4 absolute right-4 bottom-2">
              <button
                type="button"
                className="h-11 w-11 rounded-full border border-[#E7D7CE] bg-white text-[#6B3F2A] shadow-sm flex items-center justify-center"
                aria-label="WhatsApp"
              >
                ☎
              </button>
              <button
                type="button"
                className="h-11 w-11 rounded-full border border-[#E7D7CE] bg-white text-[#6B3F2A] shadow-sm flex items-center justify-center"
                aria-label="Share"
              >
                ⤴
              </button>
              <button
                type="button"
                className="h-14 w-14 rounded-full bg-[#12B488] text-white shadow-2xl flex items-center justify-center"
                aria-label="Menu"
              >
                ▧
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Makeup-style Blog heading (leads into existing #blog section) */}
      {(!card.manageSection || card.manageSection.blogs) && (
        <>
          <section className="relative py-10 bg-white">
            <div className="container">
              <div className="text-center">
                <h3 className="text-[22px] font-semibold text-[#2B1B14]">
                  Blog
                </h3>
                <div className="mx-auto mt-2 h-[3px] w-16 rounded-full bg-[#6B3F2A]" />
              </div>
            </div>
          </section>

          {/* Blog slider card (makeup style, requested) */}
          <section className="relative pb-14 bg-white overflow-hidden">
            {/* decorative swirl */}
            <div className="pointer-events-none absolute left-0 top-10 opacity-30">
              <svg width="120" height="220" viewBox="0 0 120 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M95 10C60 55 15 60 15 105c0 35 25 48 55 55 35 8 45 18 45 35 0 18-20 30-55 30"
                  stroke="#B08968"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="container relative">
              <div className="relative max-w-[420px] mx-auto">
                {/* arrows */}
                <button
                  type="button"
                  className="absolute left-[-34px] top-1/2 -translate-y-1/2 text-[#12B488] text-2xl font-semibold hidden sm:block"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="absolute right-[-34px] top-1/2 -translate-y-1/2 text-[#12B488] text-2xl font-semibold hidden sm:block"
                  aria-label="Next"
                >
                  →
                </button>

                <article className="rounded-[22px] border border-[#E7D7CE] bg-white overflow-hidden shadow-[0_18px_55px_rgba(15,23,42,0.10)]">
                  <div className="p-4 pb-0">
                    <div className="relative rounded-[16px] overflow-hidden bg-slate-200 aspect-[4/2.4]">
                      {blogs && blogs.length > 0 && blogs[0].icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={blogs[0].icon}
                          alt={blogs[0].title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop"
                          alt="Makeup"
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                  <div className="px-5 pt-4 pb-6">
                    <h4 className="text-[18px] font-semibold text-[#6B3F2A]">
                      {blogs && blogs.length > 0 ? blogs[0].title : "Makeup"}
                    </h4>
                    <p className="mt-2 text-[12px] text-slate-500 leading-relaxed">
                      {blogs && blogs.length > 0
                        ? blogs[0].description
                        : "Lorem ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum"}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Scan to Connect Section */}
      {(!card.manageSection || card.manageSection.qrCode) && (
        <section className="relative px-6 py-24 bg-[#FCF8F5]" id="qr">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[48px] p-12 shadow-2xl border border-rose-50 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-[#6B3F2A] mb-4">Scan to Connect</h3>
                <p className="text-slate-500 text-lg mb-8">
                  Instantly save my contact details and portfolio to your mobile device by scanning this code.
                </p>
                <button
                  type="button"
                  onClick={() => onDownloadVCard?.()}
                  className="px-8 py-3.5 rounded-2xl bg-[#12B488] text-white font-bold text-[15px] hover:scale-105 transition-transform"
                >
                  Download My QR
                </button>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-50 rounded-[40px] opacity-50 group-hover:scale-110 transition-transform duration-500" />
                <div className="relative p-6 bg-white rounded-[32px] shadow-xl border border-rose-50">
                  {(card as any).qrCodeImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={(card as any).qrCodeImage}
                      alt="QR code"
                      className="w-40 h-40 object-contain"
                    />
                  ) : (
                    <div className="w-40 h-40 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 font-mono text-xs">
                      QR CODE
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Studio Hours Section */}
      {(!card.manageSection || card.manageSection.businessHours) && (
        <section className="relative px-6 py-24 bg-white" id="business-hours">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-[#6B3F2A]">Studio Hours</h3>
              <p className="text-slate-400 mt-4">We are available by appointment only.</p>
            </div>
            <div className="bg-[#FCF8F5] rounded-[40px] p-8 sm:p-12 border border-rose-50 shadow-sm">
              {[
                { day: "Monday", time: "09:00 AM - 06:00 PM" },
                { day: "Tuesday", time: "09:00 AM - 06:00 PM" },
                { day: "Wednesday", time: "09:00 AM - 06:00 PM" },
                { day: "Thursday", time: "09:00 AM - 06:00 PM" },
                { day: "Friday", time: "09:00 AM - 08:00 PM" },
                { day: "Saturday", time: "10:00 AM - 04:00 PM" },
                { day: "Sunday", time: "Closed" },
              ].map((row) => (
                <div key={row.day} className="flex items-center justify-between py-4 border-b border-rose-100/50 last:border-0">
                  <span className="text-lg font-bold text-[#6B3F2A]">{row.day}</span>
                  <span className={`text-[15px] font-medium ${row.time === "Closed" ? "text-rose-400" : "text-slate-600"}`}>
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Contact Us Form Section */}
      {(!card.manageSection || card.manageSection.inquiries) && (
        <section className="relative px-6 py-24 bg-white" id="contact-form">
          <div className="max-w-3xl mx-auto">
            {/* Heading with Decorative Pencil */}
            <div className="relative text-center mb-16">
              <h3 className="text-4xl font-bold text-[#2B1B14] mb-3">Contact Us</h3>
              <div className="mx-auto h-[3.5px] w-24 rounded-full bg-[#6B3F2A]" />

              {/* Decorative Pencil/Pen Graphic */}
              <div className="absolute -right-4 -top-8 w-24 h-24 hidden md:block opacity-80 pointer-events-none">
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 rotate-[45deg] flex flex-col items-center">
                    <div className="w-1.5 h-32 bg-[#2B1B14] rounded-full shadow-lg" />
                    <div className="w-1.5 h-4 bg-[#D6C5B3] absolute top-0 rounded-t-full" />
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-6 py-4 rounded-[18px] border border-[#E7D7CE] bg-white text-[#6B3F2A] outline-none focus:border-[#6B3F2A] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 rounded-[18px] border border-[#E7D7CE] bg-white text-[#6B3F2A] outline-none focus:border-[#6B3F2A] transition-colors"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-6 py-4 rounded-[18px] border border-[#E7D7CE] bg-white text-[#6B3F2A] outline-none focus:border-[#6B3F2A] transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-6 py-4 rounded-[24px] border border-[#E7D7CE] bg-white text-[#6B3F2A] outline-none focus:border-[#6B3F2A] transition-colors resize-none"
              />

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-16 py-4 rounded-[20px] bg-[#6B3F2A] text-white font-bold text-xl shadow-[0_18px_40px_rgba(107,63,42,0.25)] hover:scale-105 transition-transform"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Create Your Vcard Section */}
      <section className="relative px-6 py-24 bg-white overflow-hidden">
        {/* Decorative Line Art Illustration */}
        <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1400&auto=format&fit=crop"
            alt="Decorative"
            className="w-full max-w-[400px] h-auto grayscale opacity-40 translate-y-20 -translate-x-20"
          />
        </div>

        <div className="max-w-xl mx-auto text-center relative z-10">
          <h3 className="text-3xl font-bold text-[#2B1B14] mb-3">Create Your Vcard</h3>
          <div className="w-24 h-[3.5px] bg-[#6B3F2A] mx-auto mb-12 rounded-full" />

          <div className="bg-white border-2 border-[#E7D7CE] rounded-[24px] p-6 mb-10 flex items-center justify-between shadow-sm group hover:border-[#6B3F2A] transition-colors cursor-pointer">
            <span className="text-[#6B3F2A] text-lg font-medium truncate pr-4">
              {baseUrl}/{slug}
            </span>
            <div className="text-[#6B3F2A] scale-125">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onDownloadVCard?.()}
            className="w-full max-w-sm py-5 rounded-[20px] bg-[#6B3F2A] text-white font-bold text-xl shadow-[0_18px_40px_rgba(107,63,42,0.25)] hover:scale-105 transition-transform"
          >
            Add To Contact
          </button>
        </div>
      </section>

      {/* Minimal Premium Footer */}
      <footer className="footer bg-slate-900 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-white tracking-widest mb-4 block">
              {name.toUpperCase()}
            </a>
            <p className="text-slate-400 font-medium">© {new Date().getFullYear()} Luxury Artistry & Design</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
            <div className="flex gap-4">
              <VCardSocialLinks
                card={{
                  socialLinks: card.socialLinks?.slice(0, 4),
                  website: card.website,
                }}
                layout="horizontal"
                variant="circular"
                iconSize={22}
                itemClassName="hover:scale-110 transition-transform"
                containerClassName="flex gap-4"
              />
            </div>
            <p className="text-slate-500 text-[13px]">
              Created with passion by <span className="text-[#12B488] font-bold">VCard Luxury</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top – Dennis .back-to-top */}
      <a
        href="#home"
        className="back-to-top fixed text-lg rounded-full z-10 bottom-5 right-5 size-9 text-center text-white leading-9 items-center justify-center hidden md:flex"
        style={{ backgroundColor: primaryColor }}
      >
        ↑
      </a>
    </div>
  );
}
