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

const DEFAULT_PRIMARY = "#0d6efd";

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
      <div className="min-h-screen bg-slate-100 text-slate-900 flex justify-center px-2 py-4 sm:px-4 sm:py-8">
        <div className="w-full max-w-[540px] rounded-[32px] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.2)] border border-slate-200 overflow-hidden transition-shadow duration-500 ease-out hover:shadow-[0_32px_120px_rgba(15,23,42,0.35)]">
          {/* Topbar */}
          <div className="hidden lg:block border-b border-slate-200 bg-slate-50/90 backdrop-blur">
            <div className="flex items-center justify-between px-6 py-2 text-[12px] text-slate-600">
              <div className="flex flex-wrap items-center gap-3">
                <a href={`tel:${phone}`} className="flex items-center gap-1 hover:text-slate-900">
                  <span className="text-xs">📞</span>
                  <span>{phone}</span>
                </a>
                <span className="text-slate-300">|</span>
                <a href={`mailto:${email}`} className="flex items-center gap-1 hover:text-slate-900">
                  <span className="text-xs">✉</span>
                  <span>{email}</span>
                </a>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                {["F", "X", "In", "IG", "YT"].map((label) => (
                  <span
                    key={label}
                    className="h-7 w-7 rounded-full border border-slate-300 flex items-center justify-center text-[10px] text-slate-500 hover:bg-slate-800 hover:text-white transition-colors"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navbar + brand */}
          <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-slate-200">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3">
              <div className="flex items-center gap-2">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white text-lg shadow-md"
                  style={{ backgroundImage: `linear-gradient(135deg, ${primaryColor}, #22c55e)` }}
                >
                  <span className="font-semibold">
                    {name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                <p
                    className="text-[15px] font-semibold tracking-tight"
                    style={{ color: primaryColor }}
                  >
                    {name}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-1">{role}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onDownloadVCard?.()}
                className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white text-[11px] font-semibold px-4 py-1.5 hover:bg-black transition-colors duration-200"
              >
                Add to contact
              </button>
            </div>
          </header>

          {/* Hero */}
          <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 text-white px-4 sm:px-6 pt-7 pb-8">
            <div className="space-y-4">
              <p className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em] border-b border-white/40 pb-1">
                Welcome To {name}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                {heroTitle}
              </h1>
              
            {card.socialLinks && card.socialLinks.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8 no-print w-full relative z-10 py-2">
                {card.socialLinks.map((link, idx) => (
                  <SocialCircleIcon key={idx} platform={link.platform} url={link.url} size={40} />
                ))}
              </div>
            )}
              <p className="text-sm sm:text-[15px] text-blue-100">
                Helping you build sustainable strength, endurance and confidence with personalised training and coaching.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onDownloadVCard?.()}
                  className="inline-flex items-center justify-center rounded-full bg-white text-blue-700 text-[12px] font-semibold px-5 py-2 shadow-md hover:bg-slate-100 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Start Training
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 text-[12px] px-4 py-2 hover:bg-white/10 transition-colors"
                >
                  Book Session
                </button>
              </div>
              <p className="text-[11px] text-blue-100 pt-1">
                Profile link:{" "}
                <span className="font-semibold">
                  {baseUrl}/{slug}
                </span>
              </p>
            </div>
          </section>

          {/* About */}
          <section className="px-4 sm:px-6 py-8 bg-white">
            <div className="grid gap-6">
              <div className="relative h-52 rounded-2xl overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-slate-900/10 to-transparent" />
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="400px"
                    unoptimized={card.image.startsWith("data:")}
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-4xl text-white/80 bg-slate-800">
                    {name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">
                  About Coaching
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description ||
                    "Structured, result‑oriented fitness coaching with a focus on strength, conditioning and long‑term habits. Training plans are personalised to your goals, schedule and current level."}
                </p>
                <div className="grid grid-cols-2 gap-3 text-[12px] pt-1">
                  <div className="rounded-full bg-slate-50 border border-slate-200 px-3 py-2">
                    <p className="font-semibold text-slate-900">Certified Coach</p>
                    <p className="text-slate-500">Evidence‑based programming</p>
                  </div>
                  <div className="rounded-full bg-slate-50 border border-slate-200 px-3 py-2">
                    <p className="font-semibold text-slate-900">Flexible Slots</p>
                    <p className="text-slate-500">Morning & evening sessions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="px-4 sm:px-6 py-8 bg-slate-50 border-t border-slate-100">
            <div className="mb-5 text-center">
              <p
                className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1"
                style={{ color: primaryColor }}
              >
                {card.serviceTitleSmall || "Services"}
              </p>
              <h2 className="text-xl font-semibold text-slate-900">
                {card.serviceTitle || "Training & Coaching"}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 text-[13px]">
              {services.map((svc: any, idx: number) => (
                <div
                  key={svc.id || idx}
                  className="rounded-2xl bg-white border border-slate-200 px-4 py-4 flex flex-col gap-2 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full text-white text-[15px] overflow-hidden"
                      style={{ backgroundImage: `linear-gradient(135deg, ${primaryColor}, #22c55e)` }}
                    >
                      {svc.icon ? (
                        <img src={svc.icon} alt={svc.name || svc.title} className="h-full w-full object-cover" />
                      ) : (
                        <span>{svc.icon || "🏋️"}</span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400">
                      #{idx + 1}
                    </span>
                  </div>
                  <p className="text-[14px] font-semibold text-slate-900">
                    {svc.name || svc.title}
                  </p>
                  <p className="text-[12px] text-slate-600 leading-relaxed">
                    {svc.description ||
                      svc.details ||
                      "Sessions structured around warm‑up, main blocks and cool‑down so you progress safely."}
                  </p>
                  {svc.url && (
                    <a
                      href={svc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-[11px] font-semibold"
                      style={{ color: primaryColor }}
                    >
                      Read More →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Packages / pricing (Medinova-style programs) */}
          <section className="px-4 sm:px-6 py-8 bg-white border-t border-slate-100">
            <div className="mb-5 text-center">
              <p
                className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1"
                style={{ color: primaryColor }}
              >
                Programs
              </p>
              <h2 className="text-xl font-semibold text-slate-900">
                Fitness Packages
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3 text-[13px]">
              {packages.slice(0, 3).map((p: any) => (
                <div
                  key={p.name}
                  className={`rounded-2xl px-4 py-4 border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform transition-shadow duration-300 ${
                    p.featured
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] opacity-80">
                    {p.name}
                  </p>
                  <p className="text-lg font-semibold mt-1">
                    {p.price}
                  </p>
                  <p className="text-[12px] mt-1 opacity-80">
                    {p.label || "Structured 4‑8 week training block with clear milestones."}
                  </p>
                  <button
                    type="button"
                    className={`mt-3 inline-flex items-center justify-center rounded-full text-[11px] font-semibold px-4 py-1.5 border ${
                      p.featured
                        ? "border-white text-white hover:bg-white/10"
                        : "border-slate-400 text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    Enquire
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Appointment (Make An Appointment For Your Training) */}
          <section className="px-4 sm:px-6 py-8 bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 text-white border-t border-blue-700">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em] border-b border-white/40 pb-1">
                  Appointment
                </p>
                <h2 className="text-2xl font-semibold">
                  Make An Appointment For Your Training
                </h2>
                <p className="text-[13px] text-blue-100 leading-relaxed">
                  Share a few details about your goals and schedule. We will confirm a training slot and plan that fits
                  your current level and availability.
                </p>
              </div>
              <div className="rounded-2xl bg-white text-slate-900 p-4 sm:p-5 shadow-md">
                <h3 className="text-lg font-semibold mb-3">
                  Book A Session
                </h3>
                <form
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <select className="rounded-md bg-slate-50 border border-slate-200 px-3 py-2.5">
                    <option>Choose Focus</option>
                    <option>Weight Loss</option>
                    <option>Strength</option>
                    <option>General Fitness</option>
                  </select>
                  <select className="rounded-md bg-slate-50 border border-slate-200 px-3 py-2.5">
                    <option>Select Coach</option>
                    <option>Coach 1</option>
                    <option>Coach 2</option>
                    <option>Coach 3</option>
                  </select>
                  <input
                    type="text"
                    className="rounded-md bg-slate-50 border border-slate-200 px-3 py-2.5"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    className="rounded-md bg-slate-50 border border-slate-200 px-3 py-2.5"
                    placeholder="Your Email"
                  />
                  <input
                    type="text"
                    className="rounded-md bg-slate-50 border border-slate-200 px-3 py-2.5"
                    placeholder="Preferred Date"
                  />
                  <input
                    type="text"
                    className="rounded-md bg-slate-50 border border-slate-200 px-3 py-2.5"
                    placeholder="Preferred Time"
                  />
                  <button
                    type="submit"
                    className="col-span-1 sm:col-span-2 mt-1 inline-flex items-center justify-center rounded-md bg-blue-600 text-white font-semibold py-2.5 hover:bg-blue-500 transition-colors"
                  >
                    Make Appointment
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Team / coaches (Medinova-style team grid) */}
          <section className="px-4 sm:px-6 py-8 bg-white border-t border-slate-100">
            <div className="mb-6 text-center">
              <p
                className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1"
                style={{ color: primaryColor }}
              >
                Coaches
              </p>
              <h2 className="text-xl font-semibold text-slate-900">
                Meet Your Trainers
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 text-[13px]">
              {[
                { name: "Coach Alex", role: "Strength & Conditioning" },
                { name: "Coach Maya", role: "Weight Loss & HIIT" },
                { name: "Coach Rahul", role: "Mobility & Recovery" },
                { name: "Coach Sara", role: "Nutrition & Lifestyle" },
              ].map((c) => (
                <div
                  key={c.name}
                  className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform transition-shadow duration-300"
                >
                  <div className="h-28 bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-500" />
                  <div className="px-4 py-3 text-center">
                    <p className="text-[14px] font-semibold text-slate-900">
                      {c.name}
                    </p>
                    <p className="text-[12px] text-slate-500">
                      {c.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="px-4 sm:px-6 py-8 bg-slate-50 border-t border-slate-100">
            <div className="mb-6 text-center">
              <p
                className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1"
                style={{ color: primaryColor }}
              >
                Testimonials
              </p>
              <h2 className="text-xl font-semibold text-slate-900">
                What Clients Say
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3 text-[13px]">
              {testimonials.map((t: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 px-4 py-4 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform transition-shadow duration-300"
                >
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                    {t.image ? (
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xs font-bold text-slate-400">{t.name ? t.name.charAt(0).toUpperCase() : "C"}</span>
                    )}
                  </div>
                  <p className="text-[12px] text-slate-600 mb-2">
                    "{t.quote || t.text || t.description || t.testimoni || 'Excellent service.'}"
                  </p>
                  <p className="text-[13px] font-semibold text-slate-900">
                    {t.name || "Client"}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Blog / updates */}
          <section className="px-4 sm:px-6 py-8 bg-white border-t border-slate-100">
            <div className="mb-6 text-center">
              <p
                className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-1"
                style={{ color: primaryColor }}
              >
                Articles
              </p>
              <h2 className="text-xl font-semibold text-slate-900">
                Training Tips & Updates
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3 text-[13px]">
              {[1, 2, 3].map((i) => (
                <article
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform transition-shadow duration-300"
                >
                  <div className="h-20 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400" />
                  <div className="px-4 py-3 space-y-1 flex-1">
                    <p className="text-[11px] text-slate-500 uppercase tracking-[0.16em]">
                      02 Jan 2026
                    </p>
                    <p className="text-[13px] font-semibold">
                      Fitness tip #{i}
                    </p>
                    <p className="text-[12px] text-slate-600 leading-relaxed">
                      Short note on training, recovery and habit‑building you can apply this week.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact strip */}
          <section className="px-4 sm:px-6 py-8 bg-slate-900 text-white border-t border-slate-800">
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
          <VCardDynamicSections card={card} exclude={['testimonials']} />

          {/* Footer */}
          <footer className="bg-slate-950 text-slate-400 text-[11px] px-4 sm:px-6 py-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-1">
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
