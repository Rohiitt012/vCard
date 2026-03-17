"use client";
import { SocialCircleIcon } from "@/components/SocialCircleIcon";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, LayoutGrid } from "lucide-react";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

// Borox – Tailwind CSS Personal Portfolio (CSS + Tailwind for colors & fonts). Used for Legal vCard.
export function LegalVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const { locale, setLocale } = useLanguage();
  const name = card.title || "Isabelle Ryal";
  const role = card.occupation || card.tagline || "Web Developer";
  const description =
    card.description ||
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ratione eligendi expedita!";
  const services = [
    { num: "01", title: "Graphics design", desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
    { num: "02", title: "Development", desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
    { num: "03", title: "SEO Friendly", desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
  ];

  const education = [
    { date: "June 15, 2013 - 2016", title: "Master in Computer Engineering", sub: "First Class", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." },
    { date: "June 12, 2010 - 2013", title: "Bachelor in Computer Engineering", sub: "First Class", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." },
  ];

  const experience = [
    { date: "March 12, 2020", title: "Envato", sub: "Team Leader", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." },
    { date: "January 23, 2018 - 2020", title: "Facebook Company", sub: "Sr. Developer", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." },
  ];

  const blogs = (card.blogs && card.blogs.length > 0) ? card.blogs.slice(0, 3) : [
    { id: "1", title: "Lorem ipsum dolor sit amet.", description: "By Admin – 04 Comments", icon: "" },
    { id: "2", title: "Lorem ipsum dolor sit amet.", description: "By Admin – 04 Comments", icon: "" },
    { id: "3", title: "Lorem ipsum dolor sit amet.", description: "By Admin – 04 Comments", icon: "" },
  ];

  const fullName = card.title || "Richard Lord";
  const age = card.birthDate ? `${new Date().getFullYear() - new Date(card.birthDate).getFullYear()} Years` : "30 Years";
  const phone = card.phone || "+00 987654321";
  const email = card.email || "example@example.com";
  const address = card.address || "Ruami mellow moraes, Salvador, Brazil";
  const bannerImage =
    (card as any).coverImage ||
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop";

  return (
    <div className="borox-template w-full max-w-[540px] mx-auto sm:my-8 overflow-x-hidden sm:rounded-[32px] sm:shadow-[0_24px_80px_rgba(0,0,0,0.2)] border border-slate-200 relative bg-white">
      {/* Loader – hide after mount */}
      <div id="bx-overlay" className="borox-loaded opacity-0 pointer-events-none" aria-hidden="true">
        <span className="loader" />
      </div>

      {/* Hero (Business Consulting style from screenshot) */}
      <section id="home" className="relative borox-bg bg-borox-bg">
        <div className="relative w-full overflow-hidden rounded-b-[28px]">
          <div className="absolute inset-0">
            <Image
              src={bannerImage}
              alt="Banner"
              fill
              className="object-cover"
              priority
              unoptimized={typeof bannerImage === "string" && bannerImage.startsWith("data:")}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/90 via-[#0B1F3A]/70 to-transparent" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_90%_35%,rgba(56,189,248,0.45),transparent_55%)]" />
          </div>

          <div className="relative z-10 px-6 pt-6 pb-10">
            <div className="flex items-center justify-between">
              <div className="text-white/90 text-xs font-semibold tracking-widest uppercase">
                {name.split(" ")[0] || "Legal"}
              </div>

              {/* Language dropdown (matches EN pill in screenshot) */}
              <div className="relative">
                <label className="sr-only" htmlFor="legal-vcard-locale">
                  Language
                </label>
                <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur border border-white/20 px-3 py-2 text-white shadow-sm">
                  <select
                    id="legal-vcard-locale"
                    value={locale}
                    onChange={(e) => setLocale(e.target.value)}
                    className="appearance-none bg-transparent text-[12px] font-bold pr-6 outline-none"
                  >
                    <option value="en" className="text-slate-900">
                      EN
                    </option>
                    <option value="hi" className="text-slate-900">
                      HI
                    </option>
                  </select>
                  <ChevronDown className="h-4 w-4 -ml-5 text-white/80 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="mt-10 max-w-[360px]">
              <h1 className="text-white font-extrabold tracking-tight leading-tight text-[34px]">
                LET&apos;S LIFT UP
                <br />
                YOUR BUSINESS
              </h1>
              <p className="mt-3 text-white/80 text-[13px] font-medium">
                {card.tagline || "Business consulting"}
              </p>
              <button
                type="button"
                onClick={() => onDownloadVCard?.()}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-[#0B1F3A] font-extrabold text-[12px] px-6 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.2)] hover:bg-white/90"
              >
                JOIN US NOW!
              </button>
            </div>
          </div>
        </div>

        {/* Big rounded identity card (logo + title + grid button) */}
        <div className="px-6 -mt-10 pb-10 relative z-20">
          <div className="bg-white rounded-[44px] shadow-[0_26px_80px_rgba(2,6,23,0.14)] border border-slate-100 overflow-hidden">
            <div className="flex items-stretch">
              <div className="p-6 pr-4 flex items-center justify-center">
                <div className="h-[78px] w-[78px] rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center overflow-hidden">
                  <Image src="/images/logo/logo-icon.svg" alt="Logo" width={52} height={52} />
                </div>
              </div>

              <div className="flex-1 py-6 pr-4">
                <h2 className="text-[22px] font-extrabold text-[#0B1F3A] leading-tight">
                  {card.companyName || name}
                </h2>
                <p className="mt-1 text-[12px] text-slate-500 font-semibold">
                  {card.description || "Your Vision, Our Roadmap."}
                </p>
                <p className="mt-1 text-[12px] text-slate-400 font-semibold">
                  {role || "Business Consultant"}
                </p>
              </div>

              <div className="relative w-[160px] hidden sm:block">
                <Image
                  src={bannerImage}
                  alt="Card background"
                  fill
                  className="object-cover"
                  unoptimized={typeof bannerImage === "string" && bannerImage.startsWith("data:")}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-white/10" />
              </div>
            </div>

            <div className="absolute right-10 top-[50%] -translate-y-1/2 hidden sm:flex">
              <button
                type="button"
                className="h-[58px] w-[58px] rounded-full bg-[#0B1F3A] text-white shadow-[0_18px_50px_rgba(2,6,23,0.35)] flex items-center justify-center"
                aria-label="Open menu"
              >
                <LayoutGrid className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Social icons row (kept) */}
          {card.socialLinks && card.socialLinks.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6 no-print w-full relative z-10 py-2">
              {card.socialLinks.map((link, idx) => (
                <SocialCircleIcon key={idx} platform={link.platform} url={link.url} size={40} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services – redesigned professional layout */}
      <section id="service" className="bg-white 2xl:py-[80px] py-[70px]">
        <div className="mx-auto bx-container px-6 max-[320px]:px-[12px]">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#64748B] font-semibold">
              {card.serviceTitleSmall || "BUSINESS SERVICES"}
            </span>
            <h2 className="mt-3 text-[26px] sm:text-[30px] font-semibold text-[#0F172A]">
              {card.serviceTitle || (
                <>
                  Strategic Solutions{" "}
                  <span className="text-[#214B8F]">We Offer</span>
                </>
              )}
            </h2>
            <p className="mt-3 text-[13px] text-slate-500 max-w-xl mx-auto">
              Curated services to support transformation, risk management and long‑term growth for your organisation.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
            {(card.services && card.services.length > 0
              ? card.services
              : [
                  {
                    name: "Digital Strategy & Roadmapping",
                    description: "End‑to‑end planning for modern tools, processes and customer journeys.",
                  },
                  {
                    name: "Risk & Compliance Advisory",
                    description: "Identify key business risks and align operations with regulatory expectations.",
                  },
                  {
                    name: "Change Management",
                    description: "Guided adoption plans to bring leadership and teams along confidently.",
                  },
                  {
                    name: "Training & Enablement",
                    description: "Workshops, playbooks and coaching so your teams can run independently.",
                  },
                ]
            ).map((s: any, idx: number) => (
              <article
                // eslint-disable-next-line react/no-array-index-key
                key={s.id || idx}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-[0_14px_40px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_50px_rgba(15,23,42,0.14)] transition-shadow"
              >
                {/* Number badge */}
                <div className="absolute -left-6 top-4 text-[46px] font-extrabold text-[#E0E7FF] pointer-events-none select-none">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="relative pl-4">
                  <h3 className="text-[16px] font-semibold text-[#0F172A] mb-2">
                    {s.name || s.title}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                  {s.url && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-[12px] font-semibold text-[#214B8F] hover:underline"
                    >
                      Learn more →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About – redesigned professional profile */}
      <section id="about" className="bg-white 2xl:pb-[80px] pb-[70px]">
        <div className="mx-auto bx-container max-[320px]:px-[12px] px-6">
          <div className="grid lg:grid-cols-[1.1fr,1.4fr] gap-8 items-start">
            {/* Profile image card */}
            <div className="relative">
              <div className="rounded-[24px] bg-gradient-to-br from-slate-100 to-slate-50 p-1 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] bg-gray-200">
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt={name}
                      fill
                      className="object-cover"
                      unoptimized={card.image.startsWith("data:")}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-gray-400">
                      {name.charAt(0)}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Copy & details */}
            <div className="space-y-6">
              <div>
                <span className="text-[11px] tracking-[0.35em] uppercase text-[#64748B] font-semibold">
                  ABOUT
                </span>
                <h2 className="mt-2 text-[28px] sm:text-[30px] font-semibold text-[#0F172A] leading-snug">
                  Partnering with you to unlock{" "}
                  <span className="text-[#214B8F]">clarity and growth</span>
                </h2>
              </div>

              <p className="text-[14px] text-slate-600 leading-relaxed max-w-xl">
                {description}
              </p>

              {/* Info card */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 px-5 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-[13px] text-slate-700">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                      Full Name
                    </p>
                    <p className="mt-1 font-semibold text-[#0F172A]">{fullName}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                      Phone
                    </p>
                    <p className="mt-1 font-semibold text-[#0F172A]">{phone}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                      Age
                    </p>
                    <p className="mt-1 font-semibold text-[#0F172A]">{age}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                      Email
                    </p>
                    <p className="mt-1 font-semibold text-[#0F172A] break-all">
                      {email}
                    </p>
                  </div>
                </div>
                <div className="mt-4 border-t border-slate-200 pt-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                    Address
                  </p>
                  <p className="mt-1 text-[13px] text-slate-700">
                    {address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience and Education – redesigned timeline */}
      <section id="experience" className="bg-[#F5F6FF] 2xl:py-[80px] py-[70px]">
        <div className="mx-auto bx-container px-6 max-[320px]:px-[12px]">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#64748B] font-semibold">
              QUALIFICATION
            </span>
            <h2 className="mt-2 text-[26px] sm:text-[30px] font-semibold text-[#0F172A]">
              My <span className="text-[#6D28D9]">Achievements</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Education column */}
            <div>
              <h3 className="text-[18px] font-semibold text-[#0F172A] mb-4">
                Education
              </h3>
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#E2E8F0]" />
                {education.map((item, idx) => (
                  <div key={item.date} className="relative mb-6 last:mb-0">
                    <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-[#6D28D9] bg-[#F5F6FF]" />
                    <div className="rounded-2xl bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)] px-5 py-4">
                      <p className="text-[11px] font-medium text-slate-500">
                        {item.date}
                      </p>
                      <h4 className="mt-1 text-[15px] font-semibold text-[#4C1D95] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[12px] text-slate-500 font-semibold mt-1">
                        {item.sub}
                      </p>
                      <p className="mt-2 text-[12px] text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience column */}
            <div>
              <h3 className="text-[18px] font-semibold text-[#0F172A] mb-4">
                Experience
              </h3>
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#E2E8F0]" />
                {experience.map((item) => (
                  <div key={item.date} className="relative mb-6 last:mb-0">
                    <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-[#6D28D9] bg-[#F5F6FF]" />
                    <div className="rounded-2xl bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)] px-5 py-4">
                      <p className="text-[11px] font-medium text-slate-500">
                        {item.date}
                      </p>
                      <h4 className="mt-1 text-[15px] font-semibold text-[#4C1D95] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[12px] text-slate-500 font-semibold mt-1">
                        {item.sub}
                      </p>
                      <p className="mt-2 text-[12px] text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio – redesigned premium case-study grid */}
      <section id="portfolio" className="bg-gradient-to-b from-white via-[#F8FAFF] to-white 2xl:py-[80px] py-[70px]">
        <div className="mx-auto bx-container px-6 max-[320px]:px-[12px]">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#64748B] font-semibold">
              PORTFOLIO
            </span>
            <h2 className="mt-2 text-[26px] sm:text-[30px] font-semibold text-[#0F172A]">
              Selected <span className="text-[#214B8F]">Engagements</span>
            </h2>
            <p className="mt-3 text-[13px] text-slate-500 max-w-xl mx-auto">
              A few recent projects that highlight how we support leadership teams and organisations.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, idx) => {
              const project =
                (card.projects && card.projects[idx]) || undefined;

              const title = project?.title || `Project ${idx + 1}`;
              const subtitle =
                project?.subtitle || "Strategy · Design · Delivery";
              const summary =
                project?.description ||
                "Partnered with the client to clarify goals, align teams and execute a focused roadmap.";

              return (
                <article
                  // eslint-disable-next-line react/no-array-index-key
                  key={project?.id || idx}
                  className="group flex flex-col rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur-sm shadow-[0_18px_45px_rgba(15,23,42,0.10)] overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)]"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-[#0B1F3A] via-[#1E40AF] to-[#22C1C3] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.6),transparent_55%)]" />
                    <span className="relative z-10 text-[40px] font-extrabold text-white/35 tracking-tight">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {project?.tag && (
                      <div className="absolute bottom-3 left-3 rounded-full bg-white/90 text-[#0B1F3A] text-[10px] px-3 py-1 font-semibold">
                        {project.tag}
                      </div>
                    )}
                    <div className="absolute top-3 right-3 rounded-full bg-black/80 text-white text-[11px] px-3 py-1 font-semibold">
                      {project?.category || "Work"}
                    </div>
                  </div>
                  <div className="flex-1 px-4 py-4">
                    <h3 className="text-[15px] font-semibold text-[#0F172A] mb-1 line-clamp-2 group-hover:text-[#214B8F] transition-colors">
                      {title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#64748B] mb-2">
                      {subtitle}
                    </p>
                    <p className="text-[12px] text-slate-600 leading-relaxed line-clamp-3">
                      {summary}
                    </p>
                  </div>
                  <div className="px-4 pb-4 pt-1 flex items-center justify-between">
                    {project?.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[12px] font-semibold text-[#214B8F] hover:underline"
                      >
                        View case study →
                      </a>
                    ) : (
                      <span className="text-[11px] font-semibold text-slate-400">
                        Case study on request
                      </span>
                    )}
                    <span className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                      {project?.year || new Date().getFullYear()}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* News – Borox CSS + Tailwind */}
      <section id="news" className="section-news borox-bg bg-borox-bg">
        <div className="2xl:pb-[80px] pb-[70px] 2xl:pt-[80px] lg:pt-[80px] pt-[20px]">
          <div className="banner text-center mb-[30px]">
            <span className="text-[14px] borox-text-muted text-borox-text-muted">BLOGS</span>
            <h2 className="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold borox-font-heading">
              Latest <span className="borox-text-primary text-borox-primary"> NEWS</span>
            </h2>
          </div>
          <div className="mx-auto bx-container px-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
              {blogs.map((b) => (
                <div key={b.id} className="card bg-white border border-borox-border rounded-2xl p-6 overflow-hidden">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">Blog</div>
                  <div className="news-card-details mt-[16px]">
                    <p className="text-[13px] leading-[30px] mb-[5px] borox-text-primary text-borox-primary">By Admin <span className="text-gray-400">- 04 Comments</span></p>
                    <h5 className="pb-[15px] text-[17px] font-bold border-b border-borox-border borox-font-heading">{b.title}</h5>
                    <div className="pt-[15px] text-sm borox-text-primary text-borox-primary">Read More →</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact – Premium pill layout (matches provided design) */}
      <section id="contact" className="section-contact 2xl:py-[80px] py-[70px] bg-white">
        <div className="mx-auto bx-container px-6 max-[320px]:px-[12px]">
          {/* Social icons row */}
          {card.socialLinks && card.socialLinks.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              {card.socialLinks.map((link, idx) => (
                <SocialCircleIcon
                  key={idx}
                  platform={link.platform}
                  url={link.url}
                  size={44}
                  bgColor="#0B2B5B"
                />
              ))}
            </div>
          )}

          {/* Contact label ribbon */}
          <div className="flex items-center justify-center mb-10">
            <div className="relative inline-flex items-center justify-center">
              <div className="h-10 px-10 bg-[#D9B371] rounded-md shadow-sm flex items-center justify-center">
                <span className="uppercase tracking-[0.25em] text-[11px] font-semibold text-[#222B45]">
                  Contact
                </span>
              </div>
              <div className="absolute -left-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[-18deg]" />
              <div className="absolute -right-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[18deg]" />
            </div>
          </div>

          {/* Pills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Primary email */}
            <div className="relative">
              <div className="rounded-full bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] p-[3px]">
                <div className="flex items-center h-14 rounded-full bg-[#0B2B5B] text-white px-6">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-white mr-3">
                    <span className="text-sm font-bold">@</span>
                  </div>
                  <span className="text-[13px] font-medium truncate">{email}</span>
                </div>
              </div>
            </div>

            {/* Secondary email or same */}
            <div className="relative">
              <div className="rounded-full bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] p-[3px]">
                <div className="flex items-center h-14 rounded-full bg-[#0B2B5B] text-white px-6">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-white mr-3">
                    <span className="text-sm font-bold">@</span>
                  </div>
                  <span className="text-[13px] font-medium truncate">
                    {(card as any).secondaryEmail || email}
                  </span>
                </div>
              </div>
            </div>

            {/* Primary phone */}
            <div className="relative">
              <div className="rounded-full bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] p-[3px]">
                <div className="flex items-center h-14 rounded-full bg-[#0B2B5B] text-white px-6">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-white mr-3">
                    <span className="text-lg font-bold">📞</span>
                  </div>
                  <span className="text-[13px] font-medium truncate">{phone}</span>
                </div>
              </div>
            </div>

            {/* Secondary phone or same */}
            <div className="relative">
              <div className="rounded-full bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] p-[3px]">
                <div className="flex items-center h-14 rounded-full bg-[#0B2B5B] text-white px-6">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-white mr-3">
                    <span className="text-lg font-bold">📞</span>
                  </div>
                  <span className="text-[13px] font-medium truncate">
                    {(card as any).secondaryPhone || phone}
                  </span>
                </div>
              </div>
            </div>

            {/* Birth date pill */}
            <div className="relative">
              <div className="rounded-full bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] p-[3px]">
                <div className="flex items-center h-14 rounded-full bg-[#0B2B5B] text-white px-6">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-white mr-3">
                    <span className="text-lg font-bold">🎂</span>
                  </div>
                  <span className="text-[13px] font-medium truncate">
                    {card.birthDate
                      ? new Date(card.birthDate).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "12th June, 1990"}
                  </span>
                </div>
              </div>
            </div>

            {/* Location pill */}
            <div className="relative">
              <div className="rounded-full bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] p-[3px]">
                <div className="flex items-center h-14 rounded-full bg-[#0B2B5B] text-white px-6">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-white mr-3">
                    <span className="text-lg font-bold">📍</span>
                  </div>
                  <span className="text-[13px] font-medium truncate">
                    {address || "India, Delhi"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA under pills */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-slate-500 borox-font-body text-center sm:text-left">
              Or contact directly:{" "}
              <a href={`mailto:${email}`} className="font-semibold text-[#0B2B5B] underline underline-offset-4">
                {email}
              </a>
            </p>
            <button
              type="button"
              onClick={() => onDownloadVCard?.()}
              className="inline-flex items-center justify-center rounded-full px-8 py-2.5 text-[13px] font-semibold text-white bg-[#0B2B5B] shadow-[0_14px_36px_rgba(15,23,42,0.35)] hover:bg-[#12366F]"
            >
              Download vCard
            </button>
          </div>
        </div>
      </section>

      {/* Premium service cards – Digital Transformation style */}
      <section className="bg-[#F5F7FB] py-[60px]">
        <div className="mx-auto bx-container px-6 max-[320px]:px-[12px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(card.services && card.services.length > 0
              ? card.services.slice(0, 2)
              : [
                  {
                    name: "Digital Transformation",
                    description: "Helping businesses adopt new tools and tech to stay competitive.",
                    icon: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
                  },
                  {
                    name: "Risk Management & Compliance Advisory",
                    description: "Identifying business risks and ensuring adherence to industry regulations.",
                    icon: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
                  },
                ]
            ).map((svc: any, idx: number) => (
              <article
                // eslint-disable-next-line react/no-array-index-key
                key={svc.id || idx}
                className="group bg-white rounded-[24px] overflow-hidden shadow-[0_18px_40px_rgba(15,23,42,0.12)] border border-slate-200 flex flex-col"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  {svc.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={svc.icon}
                      alt={svc.name || svc.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-slate-200 flex items-center justify-center text-slate-500 text-sm">
                      Service Image
                    </div>
                  )}
                </div>
                <div className="relative bg-[#EFF2FA] px-6 pt-6 pb-7 flex-1">
                  {/* bottom-corner blue accent, matches reference design */}
                  <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#214B8F] rounded-tl-[18px]" />
                  <h3 className="relative z-10 text-[18px] font-semibold text-[#214B8F] mb-2 leading-snug">
                    {svc.name || svc.title}
                  </h3>
                  <p className="relative z-10 text-[13px] text-slate-600 leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Make an Appointment – premium bar (matches provided design) */}
      <section className="bg-white py-[60px]">
        <div className="mx-auto bx-container px-6 max-[320px]:px-[12px]">
          {/* Ribbon title */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative inline-flex items-center justify-center">
              <div className="h-10 px-8 bg-[#D9B371] rounded-md shadow-sm flex items-center justify-center">
                <span className="text-[14px] font-semibold text-[#222B45]">
                  Make an Appointment
                </span>
              </div>
              <div className="absolute -left-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[-18deg]" />
              <div className="absolute -right-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[18deg]" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Left icon block placeholder */}
            <div className="hidden sm:flex items-center justify-center">
              <div className="h-16 w-10 bg-[#0B2B5B] rounded-tr-3xl rounded-bl-3xl flex items-center justify-center">
                <span className="text-white text-xs font-bold">✦</span>
              </div>
            </div>

            {/* Appointment bar */}
            <div className="flex-1">
              <div className="relative rounded-3xl bg-[#E4EBF7] p-2">
                <div className="flex items-center h-14 rounded-3xl bg-white px-5 pr-14 shadow-sm">
                  <span className="text-[13px] text-slate-400 font-medium">
                    Pick a Date
                  </span>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-6 h-9 w-9 rounded-full bg-[#0B2B5B] flex items-center justify-center shadow-md">
                  <span className="text-white text-sm">📅</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery – premium single slider card */}
      <section className="bg-white pb-[70px]">
        <div className="mx-auto bx-container px-6 max-[320px]:px-[12px]">
          {/* Ribbon title */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative inline-flex items-center justify-center">
              <div className="h-10 px-8 bg-[#D9B371] rounded-md shadow-sm flex items-center justify-center">
                <span className="text-[14px] font-semibold text-[#222B45]">
                  Gallery
                </span>
              </div>
              <div className="absolute -left-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[-18deg]" />
              <div className="absolute -right-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[18deg]" />
            </div>
          </div>

          <div className="relative">
            {/* Main image */}
            <div className="rounded-[28px] overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.35)] border border-slate-200">
              <div className="relative w-full aspect-[4/2.3] bg-slate-200">
                {card.galleries && card.galleries.length > 0 ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={card.galleries[0].imageUrl}
                    alt={card.galleries[0].title || name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                    alt="Business handshake"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </div>

            {/* Top-right fullscreen button */}
            <button
              type="button"
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-[#0B2B5B] text-white flex items-center justify-center shadow-md"
              aria-label="Open gallery"
            >
              ⤢
            </button>

            {/* Decorative icon top-right outside card (static placeholder) */}
            <div className="hidden sm:block absolute -top-6 right-0 text-[#0B2B5B]">
              <div className="h-10 w-10 rounded-xl border border-[#0B2B5B]/30 flex items-center justify-center text-xs font-bold">
                ●
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex items-center justify-center gap-2 mt-5">
              <span className="w-2 h-2 rounded-full bg-slate-300" />
              <span className="w-6 h-2 rounded-full bg-[#0B2B5B]" />
              <span className="w-2 h-2 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials – premium single card */}
      <section className="bg-white pb-[80px]">
        <div className="mx-auto bx-container px-6 max-[320px]:px-[12px]">
          {/* Ribbon title */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative inline-flex items-center justify-center">
              <div className="h-10 px-8 bg-[#D9B371] rounded-md shadow-sm flex items-center justify-center">
                <span className="text-[14px] font-semibold text-[#222B45]">
                  Testimonials
                </span>
              </div>
              <div className="absolute -left-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[-18deg]" />
              <div className="absolute -right-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[18deg]" />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[28px] border border-[#0B2B5B]/30 bg-[#E4EBF7] px-6 pt-10 pb-8 shadow-[0_22px_60px_rgba(15,23,42,0.25)]">
              {/* Avatar */}
              <div className="flex justify-center">
                <div className="relative -mt-14 h-20 w-20 rounded-full border-4 border-white overflow-hidden shadow-md bg-slate-200">
                  {card.testimonials && card.testimonials.length > 0 && card.testimonials[0].image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={card.testimonials[0].image}
                      alt={card.testimonials[0].name || "Client"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop"
                      alt="Client"
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Quote icon on right */}
              <div className="absolute top-6 right-8 h-10 w-10 rounded-full bg-white border-2 border-[#0B2B5B] flex items-center justify-center text-[#0B2B5B] text-lg font-bold">
                ”
              </div>

              {/* Text */}
              <div className="mt-4 text-center px-2">
                <h3 className="text-[17px] font-semibold text-[#214B8F] mb-2">
                  {(card.testimonials && card.testimonials[0]?.name) || "Sasha Tiwari"}
                </h3>
                <p className="text-[13px] text-slate-700 leading-relaxed">
                  {(card.testimonials && card.testimonials[0]?.quote) ||
                    "I was blown away by the level of detail and clarity in the strategic plan they delivered. They took the time to understand our business and gave us actionable steps that led to measurable growth. Highly recommended!"}
                </p>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex items-center justify-center gap-2 mt-5">
              <span className="w-2 h-2 rounded-full bg-slate-300" />
              <span className="w-6 h-2 rounded-full bg-[#0B2B5B]" />
              <span className="w-2 h-2 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Products – two cards + CTA button */}
      <section className="bg-white pb-[80px]">
        <div className="mx-auto bx-container px-6 max-[320px]:px-[12px]">
          {/* Ribbon title */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative inline-flex items-center justify-center">
              <div className="h-10 px-8 bg-[#D9B371] rounded-md shadow-sm flex items-center justify-center">
                <span className="text-[14px] font-semibold text-[#222B45]">
                  Products
                </span>
              </div>
              <div className="absolute -left-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[-18deg]" />
              <div className="absolute -right-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[18deg]" />
            </div>
          </div>

          {/* Product cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {(card.products && card.products.length > 0
              ? card.products.slice(0, 2)
              : [
                  {
                    name: "Provide Training & Mentorship",
                    description: "",
                    icon: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
                  },
                  {
                    name: "Identify and Manage Risks",
                    description: "",
                    icon: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
                  },
                ]
            ).map((p: any, idx: number) => (
              <article
                // eslint-disable-next-line react/no-array-index-key
                key={p.id || idx}
                className="group bg-white rounded-[24px] overflow-hidden shadow-[0_18px_40px_rgba(15,23,42,0.12)] border border-slate-200 flex flex-col"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  {p.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.icon}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-slate-200 flex items-center justify-center text-slate-500 text-sm">
                      Product Image
                    </div>
                  )}
                </div>
                <div className="relative bg-[#E4EBF7] px-4 sm:px-6 pt-4 pb-6 flex-1">
                  {/* bottom-left blue accent, like reference */}
                  <div className="absolute bottom-0 left-0 w-10 h-10 bg-[#214B8F] rounded-tr-[18px]" />
                  <h3 className="relative z-10 text-[15px] sm:text-[16px] font-semibold text-[#222B45] text-center leading-snug">
                    {p.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          {/* View more button */}
          <div className="flex justify-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[#D9B371] text-[#222B45] px-10 py-3 text-[13px] font-semibold shadow-[0_14px_30px_rgba(148,118,77,0.35)]"
            >
              View More Products →
            </button>
          </div>
        </div>
      </section>

      {/* Blog – premium featured article card */}
      <section className="bg-white pb-[80px]">
        <div className="mx-auto bx-container px-6 max-[320px]:px-[12px]">
          {/* Ribbon title */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative inline-flex items-center justify-center">
              <div className="h-10 px-8 bg-[#D9B371] rounded-md shadow-sm flex items-center justify-center">
                <span className="text-[14px] font-semibold text-[#222B45]">
                  Blog
                </span>
              </div>
              <div className="absolute -left-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[-18deg]" />
              <div className="absolute -right-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[18deg]" />
            </div>
          </div>

          <div className="relative">
            <article className="overflow-hidden rounded-[24px] border border-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.25)] bg-white">
              {/* Hero image */}
              <div className="relative w-full aspect-[4/2.3] bg-slate-200 overflow-hidden">
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
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
                    alt="Business trends"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              {/* Content */}
              <div className="bg-[#E4EBF7] px-5 sm:px-6 pt-4 pb-6">
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#214B8F] mb-2">
                  {blogs && blogs[0]
                    ? blogs[0].title
                    : "Top Business Trends to Watch in [2025]"}
                </h3>
                <p className="text-[13px] text-slate-700 leading-relaxed mb-4">
                  {blogs && blogs[0] && blogs[0].description
                    ? blogs[0].description
                    : "Position yourself as a forward‑thinker by analyzing trends like AI integration, sustainability, or remote work shifts."}
                </p>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-[#214B8F] text-white px-6 py-2 text-[12px] font-semibold"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </article>

            {/* Pagination dots */}
            <div className="flex items-center justify-center gap-2 mt-5">
              <span className="w-2 h-2 rounded-full bg-slate-300" />
              <span className="w-6 h-2 rounded-full bg-[#0B2B5B]" />
              <span className="w-2 h-2 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours – pill layout */}
      <section className="bg-white pb-[80px]">
        <div className="mx-auto bx-container px-6 max-[320px]:px-[12px]">
          {/* Ribbon title */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative inline-flex items-center justify-center">
              <div className="h-10 px-8 bg-[#D9B371] rounded-md shadow-sm flex items-center justify-center">
                <span className="text-[14px] font-semibold text-[#222B45]">
                  Business Hours
                </span>
              </div>
              <div className="absolute -left-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[-18deg]" />
              <div className="absolute -right-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[18deg]" />
            </div>
          </div>

          {/* Hours pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { day: "Monday", time: "09:00 AM - 08:00 PM" },
              { day: "Tuesday", time: "09:00 AM - 08:00 PM" },
              { day: "Wednesday", time: "09:00 AM - 08:00 PM" },
              { day: "Thursday", time: "09:00 AM - 08:00 PM" },
              { day: "Friday", time: "09:00 AM - 08:00 PM" },
              { day: "Saturday", time: "09:00 AM - 08:00 PM" },
            ].map((item) => (
              <div key={item.day} className="flex justify-center">
                <div className="relative inline-flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-[#214B8F] text-white flex items-center justify-center text-xs font-bold absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    📅
                  </div>
                  <div className="rounded-full bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] px-6 py-3 border border-[#214B8F]/20 min-w-[260px]">
                    <p className="text-[13px] font-medium text-[#214B8F] text-center">
                      {item.day}: <span className="font-normal text-slate-700">{item.time}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sunday row */}
          <div className="flex justify-center">
            <div className="relative inline-flex items-center justify-center">
              <div className="h-6 w-6 rounded-full bg-[#214B8F] text-white flex items-center justify-center text-xs font-bold absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                📅
              </div>
              <div className="rounded-full bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] px-6 py-3 border border-[#214B8F]/20 min-w-[260px]">
                <p className="text-[13px] font-medium text-[#214B8F] text-center">
                  Sunday: <span className="font-normal text-slate-700">Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code – scan to contact card */}
      <section className="bg-white pb-[80px]">
        <div className="mx-auto bx-container px-6 max-[320px]:px-[12px]">
          {/* Ribbon title */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative inline-flex items-center justify-center">
              <div className="h-10 px-8 bg-[#D9B371] rounded-md shadow-sm flex items-center justify-center">
                <span className="text-[14px] font-semibold text-[#222B45]">
                  QR Code
                </span>
              </div>
              <div className="absolute -left-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[-18deg]" />
              <div className="absolute -right-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[18deg]" />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-[24px] border border-slate-200 bg-[#E4EBF7] px-5 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.18)] flex gap-4">
              {/* QR placeholder – can be replaced with real image later */}
              <div className="flex-shrink-0">
                <div className="h-28 w-28 rounded-[16px] bg-white flex items-center justify-center overflow-hidden">
                  <div className="relative h-24 w-24 bg-slate-900 text-white flex items-center justify-center text-[10px] font-mono">
                    QR
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-[15px] font-semibold text-[#214B8F] mb-1">
                  Scan to Contact
                </h3>
                <p className="text-[12px] text-slate-700 leading-relaxed">
                  Point your phone&apos;s camera at the QR code to quickly add our contact information.
                  You can also use the &quot;Add to Contacts&quot; button below for fast saving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiries – contact form block */}
      <section className="bg-white pb-[80px]">
        <div className="mx-auto bx-container px-6 max-[320px]:px-[12px]">
          {/* Ribbon title */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative inline-flex items-center justify-center">
              <div className="h-10 px-8 bg-[#D9B371] rounded-md shadow-sm flex items-center justify-center">
                <span className="text-[14px] font-semibold text-[#222B45]">
                  Inquiries
                </span>
              </div>
              <div className="absolute -left-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[-18deg]" />
              <div className="absolute -right-4 top-0 bottom-0 w-4 bg-[#C49C5E] skew-x-[18deg]" />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-[28px] bg-[#0B2B5B] px-5 sm:px-7 py-6 shadow-[0_22px_60px_rgba(15,23,42,0.35)]">
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-11 rounded-full bg-white text-[13px] px-4 outline-none border border-transparent focus:border-[#D9B371]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-11 rounded-full bg-white text-[13px] px-4 outline-none border border-transparent focus:border-[#D9B371]"
                />
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full h-11 rounded-full bg-white text-[13px] px-4 outline-none border border-transparent focus:border-[#D9B371]"
                />
                <textarea
                  placeholder="Type a message here..."
                  rows={4}
                  className="w-full rounded-[18px] bg-white text-[13px] px-4 py-3 outline-none border border-transparent resize-none focus:border-[#D9B371]"
                />

                {/* File input pill */}
                <label className="block">
                  <div className="w-full h-11 rounded-full bg-white text-[13px] px-4 flex items-center justify-center text-[#0B2B5B] font-semibold cursor-pointer">
                    <span className="mr-2 text-base">⬆</span>
                    Choose File to upload
                  </div>
                  <input type="file" className="hidden" />
                </label>

                <p className="text-[10px] text-slate-100 mt-1">
                  Files Supported: JPG, PNG, JPEG
                </p>

                <button
                  type="submit"
                  className="mt-3 w-full h-11 rounded-full bg-[#D9B371] text-[#222B45] text-[13px] font-semibold flex items-center justify-center shadow-[0_14px_30px_rgba(148,118,77,0.35)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer – Borox CSS + Tailwind (bg-borox-footer) */}
      <footer className="borox-bg-footer bg-borox-footer">
        <div className="flex justify-center mx-auto bx-container max-[320px]:px-[12px] gap-[30px] px-6 py-8 flex-col lg:flex-row">
          <div className="lg:w-1/2 text-white text-[12px] font-normal 2xl:text-left xl:text-left text-center borox-font-body">
            Copyright © <a href={`${baseUrl}/${slug}`} className="hover:text-white font-semibold">{name.split(" ")[0]}</a> all rights reserved. Profile: {baseUrl}/{slug}
          </div>
          <div className="lg:w-1/2 text-white font-normal text-[12px] flex 2xl:justify-end xl:justify-end lg:justify-end justify-center gap-4 borox-font-body">
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href={`${baseUrl}/${slug}`} className="hover:text-white">View Profile</a>
          </div>
        
      <VCardDynamicSections card={card} />
</div>
      </footer>

      {/* Scroll Top – Borox primary color */}
      <a
        href="#home"
        id="scrollup"
        className="fixed bg-borox-primary text-white rounded-full flex justify-center text-center items-center p-2 right-6 cursor-pointer bottom-6 h-10 w-10 z-20 show"
        style={card.templatePrimaryColor ? { backgroundColor: card.templatePrimaryColor } : undefined}
        aria-label="Back to top"
      >
        ↑
      </a>
    </div>
  );
}
