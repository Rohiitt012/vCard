"use client";

import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContext";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

const DEFAULT_STATS = [
  { label: "Years experience", value: "10+" },
  { label: "Projects delivered", value: "20+" },
  { label: "Key clients", value: "5+" },
];

const DEFAULT_EXPERTISE = [
  {
    title: "Strategy",
    description: "Positioning, roadmaps and decision support for leadership and boards.",
  },
  {
    title: "Design",
    description: "Brand, product and communication systems that feel consistent and premium.",
  },
  {
    title: "Development",
    description: "Modern, performant frontends and internal tools for your team.",
  },
];

const DEFAULT_PROCESS_STEPS = [
  {
    label: "01 · Discovery",
    title: "Understand context & goals",
    description: "Stakeholder conversations, current assets review and success metrics.",
  },
  {
    label: "02 · Direction",
    title: "Shape strategy & narrative",
    description: "Positioning, messaging, structure and a clear execution roadmap.",
  },
  {
    label: "03 · Delivery",
    title: "Design, build & handover",
    description: "Interfaces, systems and documentation ready for your team to run.",
  },
];

const DEFAULT_CLIENTS = [
  "Acme Group",
  "Northwind",
  "Globex",
  "Vertex Capital",
  "Studio One",
  "Nimbus Labs",
];

const DEFAULT_FAQ = [
  {
    question: "Which type of work do you usually take on?",
    answer:
      "Leadership profiles, corporate sites, internal tools and design systems for growth‑stage teams.",
  },
  {
    question: "How do projects typically start?",
    answer:
      "We begin with a short discovery call to understand context, timelines and success metrics, then shape an engagement.",
  },
  {
    question: "Do you work with existing in‑house teams?",
    answer:
      "Yes. Most work happens alongside your product, brand or engineering team with shared tools and rituals.",
  },
];

const DEFAULT_SHOWCASE = [
  {
    title: "Typefolio Corporate Site",
    description: "End‑to‑end corporate presence: positioning, visuals and responsive build.",
  },
  {
    title: "Leadership Profile System",
    description: "Modular profile pages for founders and CXOs across multiple brands.",
  },
];

export function CorporateVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "Corporate Profile";
  const role = card.occupation || card.tagline || "Founder · CXO · Advisor";
  const description =
    card.description ||
    "Strategic partner for brands, boards and teams. Helping organisations plan, design and ship ambitious initiatives.";

  const stats =
    (card as any).stats && Array.isArray((card as any).stats) && (card as any).stats.length >= 3
      ? (card as any).stats
      : DEFAULT_STATS;

  const services =
    card.services && card.services.length > 0
      ? card.services
      : DEFAULT_EXPERTISE;

  const showcaseSource =
    (card.blogs && card.blogs.length > 0 && card.blogs.slice(0, 2)) ||
    (card.products && card.products.length > 0 && card.products.slice(0, 2)) ||
    DEFAULT_SHOWCASE;

  const processSteps =
    (card as any).processSteps && Array.isArray((card as any).processSteps)
      ? (card as any).processSteps
      : DEFAULT_PROCESS_STEPS;

  const clientLogos =
    (card as any).clientLogos && Array.isArray((card as any).clientLogos)
      ? (card as any).clientLogos
      : DEFAULT_CLIENTS;

  const faqItems =
    (card as any).faqs && Array.isArray((card as any).faqs) && (card as any).faqs.length > 0
      ? (card as any).faqs
      : DEFAULT_FAQ;

  const email = card.email;
  const phone = card.phone;
  const address = card.address;

  const websiteUrl =
    card.website && card.website.trim()
      ? card.website.trim().startsWith("http")
        ? card.website.trim()
        : `https://${card.website.trim()}`
      : undefined;

  const primaryColor = card.templatePrimaryColor || "#6366f1";

  return (
    <div className="min-h-screen bg-slate-950 text-white flex justify-center px-4 py-6 sm:py-10">
      <div className="w-full max-w-[540px] rounded-[32px] bg-[#050816] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.7)] overflow-hidden">
        {/* Hero */}
        <section className="relative px-6 sm:px-10 pt-10 pb-10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 overflow-hidden">
          <div className="pointer-events-none absolute -top-32 -left-24 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-16 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl" />

          <div className="relative z-10 grid gap-10 md:grid-cols-[1.4fr,1fr] items-center">
            <div className="space-y-5">
              <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-[0.22em] uppercase text-slate-100">
                Corporate vCard
              </p>
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-tight">
                  {name}
                </h1>
                <p className="text-sm sm:text-base text-indigo-200 font-medium">
                  {role}
                </p>
              </div>
              <p className="text-sm sm:text-[15px] text-slate-100/90 leading-relaxed max-w-xl">
                {description}
              </p>

              {/* Highlights strip */}
              <div className="mt-3 grid grid-cols-3 gap-3 text-[11px] sm:text-xs">
                {stats.slice(0, 3).map((s: any, idx: number) => (
                  <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={idx}
                    className="rounded-2xl bg-white/5 border border-white/15 px-3 py-3 flex flex-col gap-1"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {s.value ?? s}
                    </span>
                    <span className="text-[10px] text-slate-200/80">
                      {s.label || s.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onDownloadVCard?.()}
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-[11px] sm:text-xs font-semibold text-slate-950 shadow-lg hover:opacity-95 transition-colors"
                  style={{ backgroundColor: primaryColor }}
                >
                  + Download vCard / Add to contact
                </button>
                {websiteUrl && (
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-2 text-[11px] sm:text-xs font-medium text-slate-100 hover:bg-white/10"
                  >
                    Visit corporate site
                  </a>
                )}
              </div>
            </div>

            {/* Avatar side */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-indigo-500 via-sky-400 to-cyan-300 opacity-70 blur-xl" />
                <div className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-[32px] bg-slate-900 border border-white/15 flex items-center justify-center overflow-hidden">
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt={name}
                      fill
                      className="object-cover"
                      sizes="224px"
                      unoptimized={card.image.startsWith("data:")}
                    />
                  ) : (
                    <span className="text-5xl font-semibold text-slate-100">
                      {name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl bg-slate-900/90 border border-white/10 px-4 py-2 text-[10px] text-slate-200 backdrop-blur">
                  /{slug}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="px-6 sm:px-10 py-8 sm:py-10 bg-[#050816] border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-[10px] tracking-[0.24em] uppercase text-sky-300 mb-1">
                {card.serviceTitleSmall || "Expertise"}
              </p>
              <h2 className="text-lg sm:text-xl font-semibold">
                {card.serviceTitle || "How I create value"}
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 text-[11px] sm:text-xs">
            {services.map((s: any, idx: number) => (
              <div
                key={s.id || idx}
                className="rounded-2xl bg-slate-900 border border-white/10 px-4 py-4 flex flex-col gap-2 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform transition-shadow duration-300"
              >
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/10 text-[11px] font-semibold text-sky-300 overflow-hidden">
                  {s.icon ? (
                    <img src={s.icon} alt={s.name || s.title} className="h-full w-full object-cover" />
                  ) : (
                    <span>✦</span>
                  )}
                </div>
                <p className="text-[12px] font-semibold text-white">
                  {s.name || s.title}
                </p>
                <p className="text-[11px] text-slate-200/85 leading-relaxed">
                  {s.description ||
                    s.details ||
                    "Advisory, reviews and hands‑on support tailored to your leadership needs."}
                </p>
                {s.url && (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[10px] font-semibold text-sky-300 hover:underline"
                  >
                    Details →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Process / How we work */}
        <section className="px-6 sm:px-10 py-8 sm:py-10 bg-[#050816] border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-[10px] tracking-[0.24em] uppercase text-violet-300 mb-1">
                Process
              </p>
              <h2 className="text-lg sm:text-xl font-semibold">
                How projects move from idea to launch
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-3 text-[11px] sm:text-xs">
            {processSteps.slice(0, 3).map((step: any, idx: number) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className="relative rounded-2xl bg-slate-900 border border-white/10 px-4 py-4 flex flex-col gap-2"
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  {step.label || `0${idx + 1} · Step`}
                </p>
                <p className="text-[12px] font-semibold text-white">
                  {step.title}
                </p>
                <p className="text-[11px] text-slate-200/85 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Showcase */}
        <section className="px-6 sm:px-10 py-8 sm:py-10 bg-[#050816] border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-[10px] tracking-[0.24em] uppercase text-indigo-300 mb-1">
                Selected work
              </p>
              <h2 className="text-lg sm:text-xl font-semibold">
                Recent initiatives
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 text-[11px] sm:text-xs">
            {showcaseSource.map((item: any, idx: number) => (
              <article
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className="rounded-2xl bg-slate-900 border border-white/10 overflow-hidden flex flex-col"
              >
                <div className="h-24 bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-300" />
                <div className="px-4 py-4 space-y-1.5 flex-1">
                  <p className="text-[12px] font-semibold text-white">
                    {item.title || item.name}
                  </p>
                  <p className="text-[11px] text-slate-200/85 leading-relaxed">
                    {item.description ||
                      item.details ||
                      "High‑impact work combining clear strategy, confident visuals and reliable delivery."}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section className="px-6 sm:px-10 pb-8 sm:pb-10 pt-4 bg-[#050816] border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <p className="text-[10px] tracking-[0.24em] uppercase text-slate-400">
              Selected clients
            </p>
            <p className="text-[11px] sm:text-xs text-slate-300">
              Partnerships with teams across product, finance, tech and creative.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 text-[10px] sm:text-xs text-slate-100/85">
            {clientLogos.slice(0, 8).map((c: any, idx: number) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5"
              >
                {typeof c === "string" ? c : c.name}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 sm:px-10 py-8 sm:py-10 bg-[#050816] border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-[10px] tracking-[0.24em] uppercase text-sky-300 mb-1">
                FAQ
              </p>
              <h2 className="text-lg sm:text-xl font-semibold">
                Practical details before we start
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 text-[11px] sm:text-xs">
            {faqItems.slice(0, 4).map((f: any, idx: number) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className="rounded-2xl bg-slate-900 border border-white/10 px-4 py-4 space-y-1.5"
              >
                <p className="text-[12px] font-semibold text-white">
                  {f.question}
                </p>
                <p className="text-[11px] text-slate-200/85 leading-relaxed">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="px-6 sm:px-10 py-8 sm:py-10 bg-[#050816] border-t border-white/5">
          <div className="grid gap-8 md:grid-cols-[1.2fr,0.9fr] items-start">
            <div className="space-y-3">
              <p className="text-[10px] tracking-[0.24em] uppercase text-emerald-300 mb-1">
                Contact
              </p>
              <h2 className="text-lg sm:text-xl font-semibold">
                Let&apos;s discuss your next initiative
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-200/90 leading-relaxed max-w-md">
                Send an email or call directly for consulting, advisory and collaboration requests.
                You can always come back to this profile at{" "}
                <span className="font-semibold text-slate-50">
                  {baseUrl}/{slug}
                </span>
                .
              </p>
            </div>
            <div className="space-y-3 text-[11px] sm:text-xs">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="block rounded-2xl bg-slate-900 border border-white/10 px-4 py-3 hover:border-emerald-400/80 transition-colors"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Email
                  </p>
                  <p className="mt-1 text-slate-50 break-all">{email}</p>
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="block rounded-2xl bg-slate-900 border border-white/10 px-4 py-3 hover:border-emerald-400/80 transition-colors"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Phone
                  </p>
                  <p className="mt-1 text-slate-50">{phone}</p>
                </a>
              )}
              {address && (
                <div className="rounded-2xl bg-slate-900 border border-white/10 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Location
                  </p>
                  <p className="mt-1 text-slate-50">{address}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

