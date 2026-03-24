"use client";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { VCardSocialLinks } from "@/components/VCardSocialLinks";

import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

const DEFAULT_SERVICES = [
  {
    name: "Personal Yoga Programs",
    description:
      "One‑on‑one sessions tailored to your body type, lifestyle and goals.",
  },
  {
    name: "Stress Relief & Sleep",
    description:
      "Breathwork, meditation and restorative flows to calm the nervous system.",
  },
  {
    name: "Group & Corporate Wellness",
    description:
      "Weekly classes and workshops for teams, communities and retreats.",
  },
];

export function YogaMindTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "Yoga & Mind Clinic";
  const tagline = card.tagline || "Holistic wellness for body, mind and soul";
  const description =
    card.description ||
    "Personalized yoga, meditation and mindfulness sessions designed to restore balance, reduce stress and support long‑term wellbeing.";

  const years =
    (card as any)?.stats?.[0]?.value ||
    (card as any)?.yearsExperience ||
    "10+";
  const clients =
    (card as any)?.stats?.[1]?.value ||
    (card as any)?.patientsTreated ||
    "250+";
  const experts =
    (card as any)?.stats?.[2]?.value ||
    (card as any)?.expertsCount ||
    "5+";

  const email = card.email;
  const phone = card.phone;
  const address = card.address;
  const website = card.website;

  const services =
    card.services && card.services.length > 0
      ? card.services
      : DEFAULT_SERVICES;

  const businessHours = card.businessHours;
  const testimonials =
    ((card as any)?.testimonials as { name: string; quote: string }[]) ||
    (card.blogs as any[]) ||
    [];

  return (
    <div className="min-h-screen bg-[#f0f1f3] flex justify-center px-4 py-6 sm:py-10">
      <div className="w-full max-w-[540px] rounded-[32px] bg-white shadow-2xl overflow-hidden">
        {/* Hero / header */}
        <section className="px-6 pt-7 pb-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-3xl bg-white/10 border border-white/40 overflow-hidden shrink-0">
              {card.image ? (
                <Image
                  src={card.image}
                  alt={name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                  unoptimized={card.image.startsWith("data:")}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                  {name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-teal-100">
                Yoga &amp; Mind
              </p>
              <h1 className="text-lg font-semibold leading-tight">{name}</h1>
        
          <VCardSocialLinks 
              card={card} 
              layout="horizontal" 
              variant="circular" 
              iconSize={20}
              itemClassName="hover:scale-110 active:scale-95 transition-all"
              containerClassName="flex flex-wrap items-center justify-center gap-3 mt-8 no-print w-full relative z-10 py-2"
          />
              <p className="mt-0.5 text-[11px] text-teal-50 line-clamp-2">
                {tagline}
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="rounded-2xl bg-white/10 border border-white/30 py-2 px-1">
              <p className="text-xs font-semibold">{years}</p>
              <p className="mt-0.5 text-[9px] text-teal-50">Years Experience</p>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/30 py-2 px-1">
              <p className="text-xs font-semibold">{clients}</p>
              <p className="mt-0.5 text-[9px] text-teal-50">Clients Guided</p>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/30 py-2 px-1">
              <p className="text-xs font-semibold">{experts}</p>
              <p className="mt-0.5 text-[9px] text-teal-50">Wellness Experts</p>
            </div>
          </div>
        </section>

        {/* About / description */}
        <section className="px-6 pt-5 pb-4 bg-white">
          <p className="text-xs text-slate-700 leading-relaxed">{description}</p>
        </section>

        {/* Session highlights */}
        <section className="px-6 pb-4 bg-white">
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 py-2 px-1">
              <p className="font-semibold">Yoga</p>
              <p className="mt-0.5 text-[9px] text-slate-500">Asanas &amp; flow</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 py-2 px-1">
              <p className="font-semibold">Meditation</p>
              <p className="mt-0.5 text-[9px] text-slate-500">Mindfulness</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 py-2 px-1">
              <p className="font-semibold">Breathwork</p>
              <p className="mt-0.5 text-[9px] text-slate-500">Pranayama</p>
            </div>
          </div>
        </section>

        {/* Services / what you offer (Clinic services style) */}
        <section className="px-6 pb-5 bg-white border-t border-slate-100">
          <h2 className="mb-3 text-xs font-semibold text-slate-800">
            {card.serviceTitle || "Sessions & Programs"}
          </h2>
          <div className="space-y-2">
            {(card.services && card.services.length > 0
              ? card.services
              : DEFAULT_SERVICES
            ).map((srv: any, idx: number) => (
              <div
                key={srv.id ?? idx}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 flex items-center gap-3 transition-colors hover:border-teal-200"
              >
                {srv.icon && (
                  <div className="h-10 w-10 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                    <img src={srv.icon} alt={srv.name} className="h-full w-full object-cover" />
                  </div>
                )}
                <div className="flex-grow">
                  <p className="text-[11px] font-semibold text-slate-800">
                    {srv.name || srv.title}
                  </p>
                  {srv.description && (
                    <p className="mt-0.5 text-[10px] text-slate-500 leading-relaxed line-clamp-2">
                      {srv.description}
                    </p>
                  )}
                  {srv.url && (
                    <a
                      href={srv.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-[9px] font-semibold text-teal-600 hover:text-teal-700"
                    >
                      More Details →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule from business hours (Clinic schedule style) */}
        {businessHours && (
          <section className="px-6 pb-5 bg-white border-t border-slate-100">
            <h2 className="mb-3 text-xs font-semibold text-slate-800">
              Weekly Schedule
            </h2>
            <div className="space-y-1 text-[10px] text-slate-700">
              {Object.entries(businessHours).map(
                ([day, cfg]: [string, any]) =>
                  cfg && cfg.enabled && (
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

        {/* Testimonials / feedback (map from testimonials or blogs) */}
        {testimonials && testimonials.length > 0 && (
          <section className="px-6 pb-5 bg-white border-t border-slate-100">
            <h2 className="mb-3 text-xs font-semibold text-slate-800">
              What clients say
            </h2>
            <div className="space-y-2">
              {testimonials.slice(0, 3).map((t: any, idx: number) => (
                <div
                  key={t.id ?? idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2"
                >
                  <p className="text-[10px] text-slate-500 italic">
                    “{t.quote || t.description || t.message || ""}”
                  </p>
                  <p className="mt-1 text-[10px] font-semibold text-slate-800">
                    {t.name || t.title || "Client"}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Why choose us – static benefits (Clinic about stats style) */}
        <section className="px-6 pb-5 bg-white border-t border-slate-100">
          <h2 className="mb-3 text-xs font-semibold text-slate-800">
            Why choose this studio
          </h2>
          <div className="grid grid-cols-1 gap-2 text-[10px] text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
              <p className="font-semibold text-slate-800">
                Holistic approach
              </p>
              <p className="mt-0.5 text-slate-500">
                Sessions combine movement, breath and mindfulness for complete
                wellbeing.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
              <p className="font-semibold text-slate-800">
                Small batch sessions
              </p>
              <p className="mt-0.5 text-slate-500">
                Personal attention with carefully curated group sizes.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
              <p className="font-semibold text-slate-800">
                Calm, studio‑grade ambience
              </p>
              <p className="mt-0.5 text-slate-500">
                Peaceful environment designed for deep relaxation and focus.
              </p>
            </div>
          </div>
        </section>

        {/* Simple FAQ section inspired by Clinic FAQ */}
        <section className="px-6 pb-6 bg-white border-t border-slate-100">
          <h2 className="mb-3 text-xs font-semibold text-slate-800">
            Common questions
          </h2>
          <div className="space-y-2 text-[10px] text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
              <p className="font-semibold text-slate-800">
                Do I need prior yoga experience?
              </p>
              <p className="mt-0.5 text-slate-500">
                No. All sessions can be adapted for complete beginners to
                advanced practitioners.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
              <p className="font-semibold text-slate-800">
                How long is each session?
              </p>
              <p className="mt-0.5 text-slate-500">
                Standard classes are 60 minutes. Private or corporate programs
                can be customized.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
              <p className="font-semibold text-slate-800">
                What should I bring?
              </p>
              <p className="mt-0.5 text-slate-500">
                Comfortable clothing, a water bottle, and your own mat if you
                prefer. Props are available in‑studio.
              </p>
            </div>
          </div>
        </section>

        {/* Contact + CTA */}
        <section className="px-6 pb-5 bg-white border-t border-slate-100">
          <div className="space-y-2 text-[11px] text-slate-700">
            {phone && (
              <p>
                <span className="font-semibold">Call: </span>
                <a href={`tel:${phone}`} className="text-teal-700">
                  {phone}
                </a>
              </p>
            )}
            {email && (
              <p>
                <span className="font-semibold">Email: </span>
                <a href={`mailto:${email}`} className="text-teal-700">
                  {email}
                </a>
              </p>
            )}
            {address && (
              <p>
                <span className="font-semibold">Studio: </span>
                {address}
              </p>
            )}
            {website && (
              <p>
                <span className="font-semibold">Website: </span>
                <a
                  href={
                    website.startsWith("http") ? website : `https://${website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700"
                >
                  {website}
                </a>
              </p>
            )}
          </div>

          {onDownloadVCard && (
            <div className="mt-4">
              <button
                type="button"
                onClick={onDownloadVCard}
                className="w-full rounded-full bg-teal-500 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-teal-600 transition-colors"
              >
                Save Contact / Book Session
              </button>
            </div>
          )}
        </section>
      
        <VCardDynamicSections card={card} exclude={['testimonials', 'businessHours']} />
      </div>
    </div>
  );
}

