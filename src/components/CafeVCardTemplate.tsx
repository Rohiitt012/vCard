"use client";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe2 } from "lucide-react";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { SocialCircleIcon } from "@/components/SocialCircleIcon";
import type { VCardItem } from "@/context/VCardsContextTypes";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

const DEFAULT_STATS = [
  { label: "Students", value: "50K+" },
  { label: "Courses", value: "200+" },
  { label: "Rating", value: "4.9" },
];

const DEFAULT_PROGRAMS = [
  {
    name: "Live Cohort Programs",
    description: "Guided batches with weekly live sessions and assignments.",
    duration: "6–12 weeks",
  },
  {
    name: "Self‑paced Courses",
    description: "Watch anytime with lifetime access and updates.",
    duration: "On‑demand",
  },
  {
    name: "1:1 Mentoring Calls",
    description: "Personalized career and portfolio feedback sessions.",
    duration: "30–60 mins",
  },
];

const DEFAULT_TESTIMONIALS = [
  {
    name: "Product Manager, XYZ",
    quote:
      "The courses were practical and to the point. I could apply learnings at work from week one.",
  },
  {
    name: "Frontend Developer, ABC",
    quote:
      "Clear explanations and great projects. The mentor calls helped me switch roles confidently.",
  },
];

export function CafeVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "LearnHub Academy";
  const tagline =
    card.tagline || "Live & self‑paced courses for busy professionals.";
  const description =
    card.description ||
    "Join students learning from world‑class mentors. Upgrade your skills with practical, industry‑ready courses.";

  const stats =
    (card as any).stats && (card as any).stats.length >= 3
      ? (card as any).stats
      : DEFAULT_STATS;

  const programs =
    card.services && card.services.length > 0
      ? card.services
      : card.products && card.products.length > 0
      ? card.products
      : DEFAULT_PROGRAMS;

  const testimonials =
    ((card as any)?.testimonials as { name: string; quote?: string; description?: string }[]) ||
    (card.blogs as any[]) ||
    DEFAULT_TESTIMONIALS;

  const businessHours = card.businessHours;

  const websiteUrl =
    card.website && card.website.trim()
      ? card.website.trim().startsWith("http")
        ? card.website.trim()
        : `https://${card.website.trim()}`
      : undefined;

  return (
    <div className="min-h-screen bg-[#f0f1f3] flex justify-center px-4 py-6 sm:py-10">
      <div className="w-full max-w-[540px] rounded-[32px] bg-white shadow-2xl overflow-hidden">
        {/* 1. Clean hero – symposium-inspired dark band */}
        <section className="relative bg-slate-950 text-white px-6 pt-8 pb-7 overflow-hidden">
          {/* soft blobs like symposium */}
          <div className="pointer-events-none absolute -top-20 -right-16 h-40 w-40 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-44 w-44 rounded-full bg-sky-400/25 blur-3xl" />

          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white/10 text-white flex items-center justify-center text-base font-semibold">
                <span>{(name || "L").charAt(0)}</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-sky-300">
                  Cafe vCard
                </p>
                <h1 className="text-lg font-semibold leading-tight">
                  {name}
                </h1>
                <p className="mt-0.5 text-[11px] text-slate-200/80 line-clamp-2">
                  {tagline}
                </p>
              </div>
            </div>

            
          {card.socialLinks && card.socialLinks.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 no-print w-full relative z-10 py-2">
              {card.socialLinks.map((link, idx) => (
                <SocialCircleIcon key={idx} platform={link.platform} url={link.url} size={40} />
              ))}
            </div>
          )}

            <p className="text-xs text-slate-200/90 leading-relaxed">
              {description}
            </p>

            {/* 2. Compact stats strip */}
            <div className="flex flex-wrap gap-2 text-[10px] text-slate-100">
              {stats.slice(0, 3).map((s: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm"
                >
                  <span className="font-bold">
                    {s.value ?? s}
                  </span>
                  <span className="text-slate-200/80">
                    {s.label || s.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Programs / services simple list */}
        <section className="px-6 pb-5 bg-white border-t border-slate-100">
          <h2 className="mb-3 text-xs font-semibold text-slate-800">
            {card.serviceTitle || "Programs & services"}
          </h2>
          <div className="space-y-2 text-[10px] text-slate-700">
            {programs.slice(0, 5).map((p: any, idx: number) => (
              <div
                key={p.id ?? idx}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
              >
                <span className="font-semibold text-slate-900">
                  {p.name || p.title}
                </span>
                <span className="text-slate-500">
                  {p.description || p.category || "Program"}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Highlighted courses (1–2 cards) */}
        <section className="px-6 pb-5 bg-white border-t border-slate-100">
          <h2 className="mb-3 text-xs font-semibold text-slate-800">
            {card.serviceSubtitle || "Featured courses"}
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {programs.slice(0, 2).map((p: any, idx: number) => (
              <div
                key={p.id ?? idx}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-[10px] text-slate-700"
              >
                <p className="font-semibold text-slate-900">
                  {p.name || p.title}
                </p>
                <p className="mt-0.5 text-slate-500">
                  {p.description ||
                    p.category ||
                    "Outcome‑focused, mentor‑supported course."}
                </p>
                <div className="mt-1 flex items-center justify-between text-[9px] text-slate-500">
                  <span>{p.duration || p.sort || "Flexible schedule"}</span>
                  <span className="font-semibold text-primary">
                    {(p.currency && p.price && `${p.currency} ${p.price}`) ||
                      "Best seller"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Short testimonials */}
        {testimonials && testimonials.length > 0 && (
          <section className="px-6 py-8 bg-[#f9fafb]">
            <h2 className="text-xl font-bold text-slate-900 mb-5">
              What they say
            </h2>
            <div className="flex overflow-x-auto gap-4 pb-4 snap-x">
              {testimonials.map((t: any, idx: number) => (
                <div
                  key={idx}
                  className="shrink-0 w-[280px] snap-center rounded-[20px] bg-white p-5 border border-slate-100 shadow-sm"
                >
                  <p className="text-[15px] leading-relaxed italic text-slate-800 mb-4 line-clamp-3">
                    "{t.quote || t.description || t.testimoni || "Great experience."}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                      {t.image ? (
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-slate-400">
                          {t.name ? t.name.charAt(0) : "C"}
                        </div>
                      )}
                    </div>
                    <p className="font-semibold text-sm text-slate-900">
                      {t.name || "Client"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. Optional weekly schedule */}
        {businessHours && (
          <section className="px-6 pb-5 bg-white border-t border-slate-100">
            <h2 className="mb-3 text-xs font-semibold text-slate-800">
              Available slots
            </h2>
            <div className="space-y-1 text-[10px] text-slate-700">
              {Object.entries(businessHours).map(
                ([day, cfg]: [string, any]) =>
                  cfg &&
                  cfg.enabled && (
                    <div
                      key={day}
                      className="flex items-center justify-between rounded-lg bg-slate-50 border border-slate-100 px-3 py-1.5"
                    >
                      <span className="font-semibold">{day}</span>
                      <span className="text-slate-500">
                        {cfg.start} – {cfg.end}
                      </span>
                    </div>
                  ),
              )}
            </div>
          </section>
        )}

        {/* 5,6. Contact block + primary CTA */}
        <section className="px-6 pb-6 bg-white border-t border-slate-100">
          <div className="space-y-2 text-[11px] text-slate-700">
            {card.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-primary" />
                <p>
                  <span className="font-semibold">Email: </span>
                  <a href={`mailto:${card.email}`} className="text-primary">
                    {card.email}
                  </a>
                </p>
              </div>
            )}
            {card.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-primary" />
                <p>
                  <span className="font-semibold">Phone: </span>
                  <a href={`tel:${card.phone}`} className="text-primary">
                    {card.phone}
                  </a>
                </p>
              </div>
            )}
            {card.address && (
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-primary" />
                <p>
                  <span className="font-semibold">Location: </span>
                  {card.address}
                </p>
              </div>
            )}
            {websiteUrl && (
              <div className="flex items-center gap-2">
                <Globe2 className="w-3 h-3 text-primary" />
                <p>
                  <span className="font-semibold">Website: </span>
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    {websiteUrl.replace(/^https?:\/\//, "")}
                  </a>
                </p>
              </div>
            )}
          </div>

          {onDownloadVCard && (
            <div className="mt-4 space-y-2">
              <button
                type="button"
                onClick={onDownloadVCard}
                className="w-full rounded-full bg-primary py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
              >
                Save contact / Start learning
              </button>
              {websiteUrl && (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-[11px] text-primary underline"
                >
                  View all courses
                </a>
              )}
            </div>
          )}
        </section>

            <VCardDynamicSections card={card} exclude={['testimonials']} />

      </div>
    </div>
  );
}

