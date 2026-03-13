"use client";
import { SocialCircleIcon } from "@/components/SocialCircleIcon";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import {
  Smartphone,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
} from "lucide-react";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

/** PMS Investment Services landing – Photo vCard (same-to-same colors & layout, Tailwind only) */
export function PhotoVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "PMS Investment Services";
  const role = card.occupation || card.tagline || "Wealth & Portfolio Management";
  const email = card.email || "example@mail.com";
  const phone = card.phone || "(00) 0000 0000";
  const location = card.address || "City, Country";
  const websiteUrl =
    card.website && card.website.trim()
      ? card.website.trim().startsWith("http")
        ? card.website.trim()
        : `https://${card.website.trim()}`
      : undefined;

  const avatarSrc =
    card.image && card.image.trim().length > 0
      ? card.image
      : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face";

  const bio =
    card.description ||
    "At PMS Investment Services, we understand that your wealth deserves a careful and strategic approach. With years of experience in portfolio management, we focus on long‑term value creation, disciplined risk management, and transparent communication.";

  const blogItems =
    card.blogs && card.blogs.length > 0
      ? card.blogs.slice(0, 3)
      : [
          {
            id: "pms-1",
            title: "Staying invested through market cycles",
            description:
              "Why discipline and patience often matter more than timing the market.",
            icon: "",
          },
          {
            id: "pms-2",
            title: "Balancing risk and return in your portfolio",
            description:
              "A simple framework for thinking about diversification and drawdowns.",
            icon: "",
          },
          {
            id: "pms-3",
            title: "Building a long-term investment roadmap",
            description:
              "Aligning your portfolio with life goals, liquidity needs and taxes.",
            icon: "",
          },
        ];

  const social =
    card.socialLinks && card.socialLinks.length > 0
      ? card.socialLinks
      : [
          { platform: "Facebook", url: "#" },
          { platform: "Twitter", url: "#" },
          { platform: "Instagram", url: "#" },
        ];

  return (
    <div className="w-full max-w-[540px] mx-auto sm:my-8 overflow-hidden min-h-screen bg-white text-gray-900 sm:rounded-[32px] sm:shadow-[0_24px_80px_rgba(0,0,0,0.2)] border border-slate-200">
      {/* Hero – PMS style */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-gray-900 mb-4">
                Empowering Your{" "}
                <span className="text-cyan-600">
                  {name}
                </span>
              </h1>
            {card.socialLinks && card.socialLinks.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8 no-print w-full relative z-10 py-2">
                {card.socialLinks.map((link, idx) => (
                  <SocialCircleIcon key={idx} platform={link.platform} url={link.url} size={40} />
                ))}
              </div>
            )}
              <p className="text-lg text-gray-600 mb-4 font-sans">
                {role}. {bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start no-print">
                <button
                  type="button"
                  onClick={() => onDownloadVCard?.()}
                  className="inline-flex items-center justify-center rounded-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-md"
                >
                  Add to contacts
                  <ArrowRightIcon />
                </button>
                {websiteUrl && (
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-6 py-3 text-sm sm:text-base font-semibold bg-transparent"
                  >
                    Visit site
                  </a>
                )}
              </div>
            </div>
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100 flex items-center justify-center">
              <Image
                src={avatarSrc}
                alt={name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
                unoptimized={avatarSrc.startsWith("data:")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info + contact – PMS cards style */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: profile info */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border-0">
            <div className="px-6 pt-6 pb-3 border-b border-gray-100">
              <h2 className="text-xl font-serif font-bold text-gray-900">Profile Information</h2>
            </div>
            <div className="px-6 py-5 space-y-5">
              <p className="text-sm text-gray-700 font-sans leading-relaxed">
                {bio}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <InfoRow label="Name" value={name} />
                <InfoRow label="Role" value={role} />
                <InfoRow label="Phone" value={phone} />
                <InfoRow label="Email" value={email} />
                {websiteUrl && (
                  <div>
                    <p className="text-xs font-normal text-gray-500">Website</p>
                    <a
                      href={websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-600 hover:text-cyan-700 mt-1 block break-all"
                    >
                      {websiteUrl.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                )}
                <InfoRow label="Location" value={location} />
              </div>
            </div>
          </div>

          {/* Right: contact + social */}
          <div className="bg-white rounded-2xl shadow-lg border-0 flex flex-col">
            <div className="px-6 pt-6 pb-3 border-b border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900">Quick Contact</h3>
              <p className="text-xs text-gray-600 mt-1 font-sans">
                Reach out directly via call, email or WhatsApp.
              </p>
            </div>
            <div className="px-6 py-5 space-y-3 text-sm">
              {phone && (
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-between rounded-full border border-gray-200 px-4 py-2 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-900">Call</span>
                  <span className="text-xs text-gray-500">{phone}</span>
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-between rounded-full border border-gray-200 px-4 py-2 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-900">Email</span>
                  <span className="text-xs text-gray-500 truncate max-w-[150px]">{email}</span>
                </a>
              )}
              {card.whatsapp && (
                <a
                  href={
                    card.whatsapp.startsWith("http")
                      ? card.whatsapp
                      : `https://wa.me/${card.whatsapp.replace(/\D/g, "")}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-full border border-gray-200 px-4 py-2 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-900">WhatsApp</span>
                  <span className="text-xs text-gray-500">Chat</span>
                </a>
              )}
            </div>
            
            {card.socialLinks && card.socialLinks.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8 no-print w-full relative z-10 py-2">
                {card.socialLinks.map((link, idx) => (
                  <SocialCircleIcon key={idx} platform={link.platform} url={link.url} size={40} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Who We Are – PMS section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 mb-4">
                Who We Are
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 font-sans leading-relaxed">
                {bio}
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6 font-sans leading-relaxed">
                Our approach combines deep market knowledge with disciplined processes so your capital is
                managed with the same care and attention you used to create it.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-serif font-black text-cyan-600">
                    20+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-sans">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-serif font-black text-cyan-600">
                    500Cr+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-sans">
                    Assets Under Management
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-serif font-black text-cyan-600">
                    200+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-sans">
                    Satisfied Clients
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg shadow-xl overflow-hidden bg-gray-100">
                <Image
                  src={card.image || "/pms-img-2.jpg"}
                  alt={name}
                  width={640}
                  height={480}
                  className="w-full h-full object-cover"
                  unoptimized={!!card.image && card.image.startsWith("data:")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose – PMS cards */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 mb-3">
              {card.serviceTitle || "Why Choose Our PMS?"}
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-sans">
              {card.serviceSubtitle || "We offer more than just investment management – we provide a comprehensive wealth management experience."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(card.services && card.services.length > 0
              ? card.services
              : [
                  { name: "Risk Management", description: "Advanced risk assessment and mitigation strategies to protect your wealth while maximizing growth potential.", icon: "shield" },
                  { name: "Performance Excellence", description: "Consistent outperformance through disciplined investment processes and market expertise.", icon: "trending-up" },
                  { name: "Personalized Service", description: "Dedicated relationship and service with regular portfolio reviews tailored to your needs.", icon: "users" },
                ]
            ).map((s: any, idx: number) => {
              const DynamicIcon = s.icon === "shield" ? Shield : s.icon === "trending-up" ? TrendingUp : Users;
              return (
                <div key={s.id || idx} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-xl flex flex-col h-full">
                  <div className="text-center pb-4 pt-6 px-4">
                    <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden">
                      {s.icon && s.icon.includes("/") ? (
                        <img src={s.icon} alt={s.name} className="h-full w-full object-cover" />
                      ) : (
                        <DynamicIcon className="h-7 w-7 text-cyan-600" />
                      )}
                    </div>
                    <h3 className="text-lg font-serif font-bold">{s.name}</h3>
                  </div>
                  <div className="px-6 pb-6 flex-grow">
                    <p className="text-gray-600 font-sans text-sm text-center">
                      {s.description}
                    </p>
                  </div>
                  {s.url && (
                    <div className="px-6 pb-6 text-center">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-cyan-600 hover:text-cyan-700"
                      >
                        Read More →
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Philosophy – PMS bullets */}
      <section id="philosophy" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 mb-3">
              Our Investment Philosophy
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-sans">
              We believe in transparency, integrity, and dedication to your financial success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <PhilosophyItem
                title="Research-Driven Approach"
                text="Comprehensive fundamental and technical analysis guides every investment decision."
              />
              <PhilosophyItem
                title="Long-term Value Creation"
                text="Focus on sustainable growth and wealth preservation over market cycles."
              />
              <PhilosophyItem
                title="Diversification Strategy"
                text="Balanced portfolios across asset classes, sectors, and geographies."
              />
              <PhilosophyItem
                title="Transparent Communication"
                text="Regular reporting and open dialogue about portfolio performance and strategy."
              />
            </div>
            <div className="bg-gray-50 rounded-xl shadow-inner p-6 space-y-4">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Latest Insights
              </h3>
              <p className="text-sm text-gray-600 font-sans mb-2">
                Selected notes and articles that reflect how we think about markets and risk.
              </p>
              <div className="space-y-3">
                {blogItems.map((b) => (
                  <div
                    key={t.id || idx}
                    className="rounded-lg border border-gray-200 bg-white px-4 py-3 flex items-start gap-3"
                  >
                    <div className="mt-1 text-amber-500">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{b.title}</p>
                      {t.quote || t.description || t.text || t.testimoni && (
                        <p className="text-xs text-gray-600 mt-1">{t.quote || t.description || t.text || t.testimoni}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works – PMS steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 mb-3">
              How It Works
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-sans">
              Our streamlined process ensures a smooth onboarding and ongoing management
              experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StepItem
              step="1"
              title="Initial Consultation"
              text="Understand your financial goals, risk tolerance, and investment preferences."
            />
            <StepItem
              step="2"
              title="Strategy Development"
              text="Create a customized investment strategy tailored to your specific needs."
            />
            <StepItem
              step="3"
              title="Portfolio Implementation"
              text="Execute the investment strategy with careful attention to timing and allocation."
            />
            <StepItem
              step="4"
              title="Ongoing Management"
              text="Regular monitoring, rebalancing, and reporting to ensure optimal performance."
            />
          </div>
        </div>
      </section>

      {/* Client Testimonials – PMS style using blogs */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 mb-3">
              Client Success Stories
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-sans">
              These are representative stories of how disciplined investing can support long‑term
              goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(card.testimonials && card.testimonials.length > 0 ? card.testimonials : blogItems).map((t: any, idx: number) => (
              <div
                key={t.id || idx}
                className="bg-white border border-gray-200 rounded-xl shadow-md p-5 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {card.blogs && card.blogs[idx]?.title
                        ? card.blogs[idx]?.title
                        : `Client ${idx + 1}`}
                    </p>
                      <p className="text-xs text-gray-500">{t.role || "Long-term investor"}</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-sans">
                  {t.quote || t.description || t.text || t.testimoni ||
                    "Working together has helped us stay invested through volatility and remain focused on the bigger picture."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – Schedule consultation style */}
      <section className="py-14 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-black mb-3">
            Ready to discuss your portfolio?
          </h2>
          <p className="text-sm md:text-base text-gray-200 mb-6 font-sans">
            Schedule a quick call to review your current allocation and explore how we might help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center no-print">
            <button
              type="button"
              onClick={() => onDownloadVCard?.()}
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-6 py-3 text-sm sm:text-base font-semibold shadow-md"
            >
              Download vCard
            </button>
            {phone && (
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 px-6 py-3 text-sm sm:text-base font-semibold"
              >
                Call now
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer small bar – PMS style */}
      <footer className="border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
        <p>
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <p>{baseUrl.replace(/^https?:\/\//, "")}/{slug}</p>
      </footer>
      <VCardDynamicSections card={card} />
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-normal text-gray-500">{label}</p>
      <p className="text-sm text-gray-800 mt-1">{value}</p>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="ml-2 h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhilosophyItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-start space-x-3">
      <CheckCircle className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
      <div>
        <h3 className="text-sm md:text-base font-serif font-bold text-gray-900 mb-1">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 font-sans">{text}</p>
      </div>
    </div>
  );
}

function StepItem({ step, title, text }: { step: string; title: string; text: string }) {
  return (
    <div className="text-center">
      <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl md:text-2xl font-serif font-black">
        {step}
      </div>
      <h3 className="text-sm md:text-base font-serif font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-xs md:text-sm text-gray-600 font-sans">{text}</p>
    </div>
  );
}

