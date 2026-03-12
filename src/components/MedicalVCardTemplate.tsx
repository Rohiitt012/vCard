"use client";

import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContext";
import { SocialCircleIcon } from "./SocialCircleIcon";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

/** Geeky Next.js theme – Medical vCard (same-to-same: colors, fonts, layout) */
export function MedicalVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "Medical Professional";
  const role = card.occupation || card.tagline || "Healthcare Specialist";
  const description =
    card.description ||
    "Professional care with a personal touch. Get in touch for appointments and inquiries.";
  const blogs = (card.blogs && card.blogs.length > 0)
    ? card.blogs.slice(0, 6)
    : [];

  const websiteUrl =
    card.website && card.website.trim()
      ? card.website.trim().startsWith("http")
        ? card.website.trim()
        : `https://${card.website.trim()}`
      : undefined;

  const experience = [
    { date: "2018 – Present", title: "Senior Practitioner", sub: name.split(" ")[0] || "Clinic", desc: "Leading patient care and clinical operations." },
    { date: "2014 – 2018", title: "Associate Physician", sub: "Healthcare Group", desc: "General practice and preventive care." },
    { date: "2010 – 2014", title: "Resident", sub: "Medical Center", desc: "Residency and specialized training." },
  ];

  const education = [
    { date: "2006 – 2010", title: "MD / MBBS", sub: "First Class", desc: "Medical degree from accredited institution." },
    { date: "2002 – 2006", title: "Pre-Medical", sub: "Honors", desc: "Foundation in sciences." },
  ];

  const testimonials = [
    { quote: "Professional, caring, and always on time. Highly recommend.", author: "Patient A" },
    { quote: "Best healthcare experience. The team is wonderful.", author: "Patient B" },
    { quote: "Clear advice and follow-up. Very satisfied.", author: "Patient C" },
  ];

  const faqItems = [
    { q: "How do I book an appointment?", a: "Call us, use the contact form, or download our vCard to save our details." },
    { q: "Do you offer emergency consultations?", a: "For emergencies please visit the nearest ER. For urgent matters call our number." },
    { q: "What documents should I bring?", a: "ID, insurance card (if any), and any previous medical reports." },
  ];

  const portfolioItems: { id: string; name: string; description?: string }[] =
    card.products && card.products.length > 0
      ? card.products.slice(0, 6).map((p) => ({ id: p.id, name: p.name, description: p.description }))
      : [
          { id: "1", name: "General Check-up", description: "Full body examination" },
          { id: "2", name: "Preventive Care", description: "Vaccinations & screenings" },
          { id: "3", name: "Chronic Care", description: "Ongoing condition management" },
          { id: "4", name: "Wellness Programs", description: "Health & lifestyle" },
          { id: "5", name: "Follow-up Visits", description: "Post-treatment care" },
          { id: "6", name: "Teleconsultation", description: "Remote consultations" },
        ];

  return (
    <div className="geeky-medical-template w-full max-w-[540px] mx-auto sm:my-8 overflow-hidden min-h-screen flex flex-col bg-white sm:rounded-[32px] sm:shadow-[0_24px_80px_rgba(0,0,0,0.2)] border border-[#eceef1] relative">
      {/* Header – Geeky navbar */}
      <header className="header absolute top-0 w-full z-10 bg-white">
        <div className="container">
          <nav className="navbar">
            <a href="#" className="navbar-brand">
              {name.split(" ")[0] || "Medical"}
            </a>
            <ul className="flex flex-wrap items-center gap-1 list-none p-0 m-0">
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#services" className="nav-link">Services</a></li>
              <li><a href="#experience" className="nav-link">Experience</a></li>
              <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
              {blogs.length > 0 && <li><a href="#posts" className="nav-link">Posts</a></li>}
              <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
              <li><a href="#faq" className="nav-link">FAQ</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
              <li className="no-print">
                <button
                  type="button"
                  onClick={() => onDownloadVCard?.()}
                  className="btn-primary ml-2"
                  style={card.templatePrimaryColor ? { backgroundColor: card.templatePrimaryColor } : undefined}
                >
                  Download vCard
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Banner – Geeky hero */}
      <section className="section" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="banner-title flex-1">
              <h1>
                Hi, I&apos;m <strong>{name}</strong>
              </h1>
              <p className="mt-4 text-lg" style={{ color: "var(--color-geeky-text)" }}>
                {role}
              </p>
              <p className="mt-2 max-w-xl" style={{ color: "var(--color-geeky-text)" }}>
                {description}
              </p>
              <div className="no-print mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onDownloadVCard?.()}
                  className="btn-primary"
                  style={card.templatePrimaryColor ? { backgroundColor: card.templatePrimaryColor } : undefined}
                >
                  Add to contacts
                </button>
                {websiteUrl && (
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border px-6 py-3 text-sm font-semibold transition-colors"
                    style={{
                      borderColor: "var(--color-geeky-border)",
                      color: "var(--color-geeky-text-dark)",
                    }}
                  >
                    Visit website
                  </a>
                )}
              </div>
            </div>
            {card.image && (
              <div className="flex-shrink-0 relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border shadow-lg" style={{ borderColor: "var(--color-geeky-border)" }}>
                <Image
                  src={card.image}
                  alt={name}
                  fill
                  className="object-cover"
                  unoptimized={card.image.startsWith("data:")}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section" style={{ backgroundColor: "var(--color-geeky-theme-light)" }}>
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 max-w-2xl">
              <p className="leading-relaxed" style={{ color: "var(--color-geeky-text)" }}>
                {description}
              </p>
              {(card.email || card.phone || card.address) && (
                <ul className="mt-4 space-y-2 list-none p-0" style={{ color: "var(--color-geeky-text)" }}>
                  {card.email && <li>{card.email}</li>}
                  {card.phone && <li>{card.phone}</li>}
                  {card.address && <li>{card.address}</li>}
                </ul>
              )}
            </div>
            {card.socialLinks && card.socialLinks.length > 0 && (
              <div className="socials flex flex-wrap gap-3">
                {card.socialLinks.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full hover:scale-110 transition-transform"
                    title={s.platform}
                  >
                    <SocialCircleIcon platform={s.platform} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services – placeholder section in Geeky style */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">
            {card.serviceTitle || "Services"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(card.services && card.services.length > 0
              ? card.services
              : [
                  { name: "Consultation", description: "Professional healthcare services tailored to your needs." },
                  { name: "Follow-up care", description: "Professional healthcare services tailored to your needs." },
                  { name: "Health advice", description: "Professional healthcare services tailored to your needs." },
                ]
            ).map((s: any, i: number) => (
              <div
                key={s.id || i}
                className="p-6 rounded-xl border flex flex-col"
                style={{
                  borderColor: "var(--color-geeky-border)",
                  backgroundColor: "var(--color-geeky-body)",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold" style={{ color: "var(--color-geeky-primary)" }}>
                    0{i + 1}
                  </span>
                  {s.icon && (
                    <div className="h-10 w-10 rounded-lg overflow-hidden border" style={{ borderColor: "var(--color-geeky-border)" }}>
                      <img src={s.icon} alt={s.name} className="h-full w-full object-cover" />
                    </div>
                  )}
                </div>
                <h3 className="mt-2 text-lg font-bold" style={{ color: "var(--color-geeky-text-dark)" }}>
                  {s.name}
                </h3>
                <p className="mt-1 text-sm flex-grow" style={{ color: "var(--color-geeky-text)" }}>
                  {s.description}
                </p>
                {s.url && (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-[13px] font-semibold hover:underline"
                    style={{ color: "var(--color-geeky-primary)" }}
                  >
                    View Details →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience – Education + Work timeline */}
      <section id="experience" className="section" style={{ backgroundColor: "var(--color-geeky-theme-light)" }}>
        <div className="container">
          <h2 className="section-title">Experience &amp; Education</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold mb-6" style={{ color: "var(--color-geeky-text-dark)" }}>Education</h3>
              <div className="relative border-l-2 pl-6" style={{ borderColor: "var(--color-geeky-primary)" }}>
                {education.map((item) => (
                  <div
                    key={item.date}
                    className="pb-8 last:pb-0 relative"
                  >
                    <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-[var(--color-geeky-primary)]" />
                    <span className="text-xs font-medium" style={{ color: "var(--color-geeky-text-light)" }}>{item.date}</span>
                    <h4 className="mt-1 font-semibold" style={{ color: "var(--color-geeky-primary)" }}>{item.title} <span className="text-sm font-normal" style={{ color: "var(--color-geeky-text)" }}>– {item.sub}</span></h4>
                    <p className="mt-1 text-sm" style={{ color: "var(--color-geeky-text)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6" style={{ color: "var(--color-geeky-text-dark)" }}>Experience</h3>
              <div className="relative border-l-2 pl-6" style={{ borderColor: "var(--color-geeky-primary)" }}>
                {experience.map((item) => (
                  <div
                    key={item.date}
                    className="pb-8 last:pb-0 relative"
                  >
                    <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-[var(--color-geeky-primary)]" />
                    <span className="text-xs font-medium" style={{ color: "var(--color-geeky-text-light)" }}>{item.date}</span>
                    <h4 className="mt-1 font-semibold" style={{ color: "var(--color-geeky-primary)" }}>{item.title} <span className="text-sm font-normal" style={{ color: "var(--color-geeky-text)" }}>– {item.sub}</span></h4>
                    <p className="mt-1 text-sm" style={{ color: "var(--color-geeky-text)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Gallery */}
      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="section-title">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl border overflow-hidden transition-shadow hover:shadow-md"
                style={{
                  borderColor: "var(--color-geeky-border)",
                  backgroundColor: "var(--color-geeky-body)",
                }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold" style={{ backgroundColor: "var(--color-geeky-theme-light)", color: "var(--color-geeky-primary)" }}>
                  {(item as { name?: string }).name?.charAt(0) || "P"}
                </div>
                <h3 className="mt-3 font-bold" style={{ color: "var(--color-geeky-text-dark)" }}>
                  {item.name}
                </h3>
                {item.description && (
                  <p className="mt-1 text-sm" style={{ color: "var(--color-geeky-text)" }}>
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Posts / Blogs */}
      {blogs.length > 0 && (
        <section id="posts" className="section" style={{ backgroundColor: "var(--color-geeky-theme-light)" }}>
          <div className="container">
            <h2 className="section-title">Latest posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((b) => (
                <article
                  key={b.id}
                  className="p-5 rounded-xl border"
                  style={{
                    borderColor: "var(--color-geeky-border)",
                    backgroundColor: "var(--color-geeky-body)",
                  }}
                >
                  <h3 className="font-bold" style={{ color: "var(--color-geeky-text-dark)" }}>
                    {b.title}
                  </h3>
                  {b.description && (
                    <p className="mt-2 text-sm" style={{ color: "var(--color-geeky-text)" }}>
                      {b.description}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section id="testimonials" className="section">
        <div className="container">
          <h2 className="section-title">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="p-6 rounded-xl border"
                style={{
                  borderColor: "var(--color-geeky-border)",
                  backgroundColor: "var(--color-geeky-body)",
                }}
              >
                <p className="text-sm italic" style={{ color: "var(--color-geeky-text)" }}>&ldquo;{t.quote}&rdquo;</p>
                <cite className="mt-3 block text-sm font-semibold not-italic" style={{ color: "var(--color-geeky-primary)" }}>— {t.author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section" style={{ backgroundColor: "var(--color-geeky-theme-light)" }}>
        <div className="container">
          <h2 className="section-title">FAQ</h2>
          <div className="max-w-2xl space-y-4">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border"
                style={{
                  borderColor: "var(--color-geeky-border)",
                  backgroundColor: "var(--color-geeky-body)",
                }}
              >
                <h4 className="font-bold" style={{ color: "var(--color-geeky-text-dark)" }}>{faq.q}</h4>
                <p className="mt-2 text-sm" style={{ color: "var(--color-geeky-text)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – Book appointment */}
      <section
        className="section py-12"
        style={{ backgroundColor: "var(--color-geeky-primary)", color: "#fff" }}
      >
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-2">Book an appointment</h2>
          <p className="mb-6 opacity-90">Get in touch for consultations and follow-ups.</p>
          <div className="no-print flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => onDownloadVCard?.()}
              className="inline-flex items-center rounded-full border-2 border-white bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[var(--color-geeky-primary)] transition-colors"
            >
              Download vCard
            </button>
            {card.phone && (
              <a
                href={`tel:${card.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center rounded-full border-2 border-white bg-white px-6 py-3 text-sm font-semibold transition-colors"
                style={{ color: "var(--color-geeky-primary)" }}
              >
                Call now
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            {card.email && (
              <a
                href={`mailto:${card.email}`}
                className="inline-flex items-center gap-2 font-medium"
                style={{ color: "var(--color-geeky-primary)" }}
              >
                {card.email}
              </a>
            )}
            {card.phone && (
              <a
                href={`tel:${card.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 font-medium"
                style={{ color: "var(--color-geeky-primary)" }}
              >
                {card.phone}
              </a>
            )}
            {card.whatsapp && (
              <a
                href={card.whatsapp.startsWith("http") ? card.whatsapp : `https://wa.me/${card.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium"
                style={{ color: "var(--color-geeky-primary)" }}
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer – Geeky style */}
      <footer
        className="section mt-auto border-t"
        style={{
          borderColor: "var(--color-geeky-border)",
          backgroundColor: "var(--color-geeky-theme-light)",
        }}
      >
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: "var(--color-geeky-text-light)" }}>
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
          <p>
            {baseUrl.replace(/^https?:\/\//, "")}/{slug}
          </p>
        </div>
      </footer>
    </div>
  );
}
