"use client";
import { SocialCircleIcon } from "@/components/SocialCircleIcon";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function DennisPortfolioVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "Dennis Scott";
  const role = card.occupation || card.tagline || "Website Designer · Web Developer";
  const description =
    card.description ||
    "Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.";

  const primaryColor = card.templatePrimaryColor || "#f59e0b"; // amber-500

  return (
    <div className="min-h-screen bg-slate-900/5 text-slate-900 flex justify-center px-2 py-4 sm:px-4 sm:py-8">
      <div className="w-full max-w-[540px] rounded-[32px] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.2)] border border-slate-200 overflow-hidden">
        {/* Top nav-style header */}
        <header className="px-4 sm:px-6 py-3 flex items-center justify-between border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex items-center gap-2">
            <div
              className="h-8 w-8 rounded-xl flex items-center justify-center text-white text-sm font-semibold shadow-md"
              style={{ backgroundImage: `linear-gradient(135deg, ${primaryColor}, #ec4899)` }}
            >
              {name.charAt(0).toUpperCase()}
            </div>
            <div className="leading-tight">
              <p className="text-[13px] font-semibold">{name}</p>
              <p className="text-[11px] text-slate-500 line-clamp-1">{role}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onDownloadVCard?.()}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white text-[11px] font-semibold px-4 py-1.5 hover:bg-black transition-colors"
          >
            Add to contact
          </button>
        </header>

        {/* Hero section */}
        <section className="relative px-4 sm:px-6 pt-8 pb-8 bg-amber-500/5 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-pink-400/30 blur-3xl" />
          </div>
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="font-bold text-2xl sm:text-3xl leading-snug mb-3">
                Hey! I&apos;m <br />
                <span
                  className="text-amber-500"
                >
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
              <p className="text-sm sm:text-[15px] text-slate-600">
                {description}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onDownloadVCard?.()}
                  className="inline-flex items-center justify-center rounded-md bg-amber-500 hover:bg-amber-600 text-white text-[12px] font-semibold px-5 py-2 shadow-md transition-colors"
                >
                  Hire Me
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-amber-500/10 hover:bg-amber-500 text-amber-600 hover:text-white border border-amber-500/20 hover:border-amber-500 text-[12px] font-semibold px-5 py-2 transition-colors"
                  onClick={() => onDownloadVCard?.()}
                >
                  Download vCard
                </button>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                Profile link:{" "}
                <span className="font-semibold text-slate-600">
                  {baseUrl}/{slug}
                </span>
              </p>
            </div>

            <div className="relative flex justify-center">
              <div className="relative h-40 w-40 rounded-full overflow-hidden shadow-xl shadow-amber-500/40 border-4 border-white bg-slate-200">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="160px"
                    unoptimized={card.image.startsWith("data:")}
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-4xl font-semibold text-slate-700">
                    {name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="absolute -bottom-3 -left-2 rounded-lg bg-white shadow-md px-3 py-2 text-center w-32 text-[11px]">
                <p className="text-lg font-semibold text-slate-900">
                  7+
                </p>
                <p className="text-slate-500">Years experience</p>
              </div>
              <div className="absolute top-6 -right-2 rounded-lg bg-white shadow-md px-3 py-2 text-center w-32 text-[11px]">
                <p className="font-semibold text-slate-900">
                  Web Designer
                </p>
                <p className="text-slate-500 mt-1">UI/UX & Frontend</p>
              </div>
            </div>
          </div>
        </section>

        {/* About + hobbies / expertise */}
        <section className="px-4 sm:px-6 py-8 bg-white">
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold">
              I&apos;m a Passionate Web Designer
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {card.description ||
                "I work on clean, modern interfaces with a focus on usability and performance. From wireframes to final build, I stay close to both design and code."}
            </p>
          </div>
          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              Hobbies &amp; Expertise
            </h3>
            <p className="text-[13px] text-slate-500">
              Obviously I&apos;m a Web Designer. Web Developer with over 7 years of experience.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-[13px]">
              {["Developing", "Cinema", "Coffee", "Music", "Designing", "Sports"].map((item) => (
                <div
                  key={item}
                  className="flex items-center p-3 rounded-lg bg-slate-50 border border-slate-100 shadow-sm"
                >
                  <div className="flex items-center justify-center h-10 w-10 -rotate-45 bg-amber-500/10 text-amber-500 rounded-xl mr-3">
                    <span className="rotate-45 text-sm">★</span>
                  </div>
                  <p className="font-medium text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services / What do I offer */}
        <section className="px-4 sm:px-6 py-8 bg-slate-50 border-t border-slate-100">
          <div className="text-center mb-6">
            <h2 className="text-lg sm:text-xl font-semibold">
              {card.serviceTitle || "What do I offer?"}
            </h2>
            <p className="mt-2 text-[13px] text-slate-500 max-w-md mx-auto">
              {card.serviceSubtitle || "Obviously I'm a Web Designer and Developer with over 7 years of experience across the full lifecycle."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-[13px]">
            {(card.services && card.services.length > 0
              ? card.services
              : [
                  { name: "UX / UI Design", description: "Interfaces that feel clean, consistent and easy to use." },
                  { name: "Web Development", description: "Responsive frontends connected to real products and APIs." },
                  { name: "Product Design", description: "From discovery to prototypes and design systems." },
                  { name: "Brand & Visual", description: "Logos, palettes and visual systems that scale." },
                ]
            ).map((item: any, idx: number) => (
              <div
                key={item.id || idx}
                className="px-4 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center overflow-hidden">
                  {item.icon ? (
                    <img src={item.icon} alt={item.name} className="h-full w-full object-cover" />
                  ) : (
                    <span>✦</span>
                  )}
                </div>
                <h3 className="mt-3 text-[14px] font-semibold text-slate-900">
                  {item.name}
                </h3>
                <p className="mt-1 text-[12px] text-slate-600 leading-relaxed">
                  {item.description}
                </p>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-[11px] font-semibold text-amber-500"
                  >
                    Read More →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Freelancer CTA */}
        <section className="px-4 sm:px-6 py-8 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#f97316,_transparent_55%)]" />
          <div className="relative text-center space-y-4 text-white">
            <h2 className="text-lg sm:text-xl font-semibold">
              I am available for freelance projects.
            </h2>
            <p className="text-[13px] text-slate-200 max-w-md mx-auto">
              Looking for a designer / developer who can handle both visuals and implementation? Let&apos;s talk.
            </p>
            <button
              type="button"
              onClick={() => onDownloadVCard?.()}
              className="inline-flex items-center justify-center rounded-md bg-amber-500 hover:bg-amber-600 border border-amber-500 text-white text-[12px] font-semibold px-6 py-2 shadow-md transition-colors"
            >
              Hire Me
            </button>
          </div>
        </section>

        {/* Work Experience (timeline-style summary) */}
        <section className="px-4 sm:px-6 py-8 bg-white border-t border-slate-100">
          <div className="text-center mb-6">
            <h2 className="text-lg sm:text-xl font-semibold">
              Work Experience
            </h2>
            <p className="mt-2 text-[13px] text-slate-500 max-w-md mx-auto">
              Roles where I shipped real products and collaborated with cross‑functional teams.
            </p>
          </div>
          <div className="space-y-4 text-[13px]">
            {[
              {
                company: "Product Studio",
                years: "2021 – Present",
                role: "Senior Product Designer",
              },
              {
                company: "Creative Agency",
                years: "2018 – 2021",
                role: "UI/UX Designer",
              },
              {
                company: "Startup Lab",
                years: "2016 – 2018",
                role: "Frontend Developer",
              },
            ].map((item, idx) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className="relative pl-4 border-l border-dashed border-slate-200"
              >
                <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-amber-500" />
                <p className="text-[11px] text-slate-400">{item.years}</p>
                <p className="text-[14px] font-semibold text-slate-900 mt-0.5">
                  {item.role}
                </p>
                <p className="text-[12px] text-slate-500">{item.company}</p>
              </div>
            ))}
          </div>
        </section>
      
      <VCardDynamicSections card={card} />
</div>
    </div>
  );
}

