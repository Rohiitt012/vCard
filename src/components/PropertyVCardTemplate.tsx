"use client";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { SocialCircleIcon } from "./SocialCircleIcon";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

/** Atlas v2 template – Property vCard (same-to-same style using Tailwind) */
export function PropertyVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "John Doe";
  const role = card.occupation || card.tagline || "Property Consultant · Investor";
  const email = card.email || "example@mail.com";
  const phone = card.phone || "(00) 0000 0000";
  const location = card.address || "Your city, Country";

  const avatarSrc =
    card.image && card.image.trim().length > 0
      ? card.image
      : "/atlas-v2.0.0/assets/img/author.png";

  const websiteUrl =
    card.website && card.website.trim()
      ? card.website.trim().startsWith("http")
        ? card.website.trim()
        : `https://${card.website.trim()}`
      : undefined;

  const storyText =
    card.description ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie. Et leo duis ut diam. Sit amet tellus cras adipiscing enim eu turpis.";

  const blogs =
    card.blogs && card.blogs.length > 0
      ? card.blogs.slice(0, 3)
      : [
          {
            id: "atlas-1",
            title: "Quis hendrerit dolor magna eget est lorem ipsum dolor sit",
            description: "Short note about how we structure property deals and timelines.",
            icon: "category",
          },
          {
            id: "atlas-2",
            title: "Senectus et netus et malesuada fames ac turpis egestas integer",
            description: "Thoughts on financing, leverage and risk when buying real estate.",
            icon: "category",
          },
          {
            id: "atlas-3",
            title: "Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies",
            description: "Why location, cashflow and maintenance all matter in practice.",
            icon: "category",
          },
        ];

  const projects =
    card.products && card.products.length > 0
      ? card.products.slice(0, 4).map((p) => ({
          id: p.id,
          name: p.name,
          description: p.description || "",
        }))
      : [
          {
            id: "proj-1",
            name: "Premium Apartments",
            description: "High-rise units with strong rental demand and stable yields.",
          },
          {
            id: "proj-2",
            name: "Commercial Spaces",
            description: "Retail and office properties with long-term lease structures.",
          },
          {
            id: "proj-3",
            name: "Plotted Developments",
            description: "Land opportunities in growing corridors with clear titles.",
          },
          {
            id: "proj-4",
            name: "Portfolio Advisory",
            description: "Helping investors balance residential and commercial exposure.",
          },
        ];

  return (
    <div className="w-full max-w-[540px] mx-auto sm:my-8 overflow-hidden min-h-screen bg-white text-[#072344] sm:rounded-[32px] sm:shadow-[0_24px_80px_rgba(0,0,0,0.2)] border border-[#eceef1]">
      {/* Atlas top navigation */}
      <header className="border-b border-[#eceef1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6 lg:py-8">
            <a href="#" className="flex items-center">
              <span className="mr-2 h-8 w-8 rounded-full bg-[#072344] flex items-center justify-center text-xs font-semibold text-white">
                {name.charAt(0).toUpperCase()}
              </span>
              <p className="hidden font-sans text-2xl font-bold text-[#072344] dark:text-white lg:block">
                {name}
              </p>
            </a>
            <nav className="hidden lg:block">
              <ul className="flex items-center">
                {[
                  { href: "#about", label: "Intro" },
                  { href: "#articles", label: "Blog" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href} className="group relative mr-6 mb-1">
                    <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-1 group-hover:bg-[#f4d06f]" />
                    <a
                      href={item.href}
                      className="relative z-30 block px-2 font-sans text-lg font-medium text-[#072344] transition-colors group-hover:text-[#007c85]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Atlas Header intro */}
        <section className="border-b border-[#eceef1] py-10 lg:py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src={avatarSrc}
                  alt={name}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                  unoptimized={avatarSrc.startsWith("/atlas") ? false : avatarSrc.startsWith("data:")}
                />
              </div>
              <div className="ml-4">
                <h1 className="font-sans text-3xl md:text-4xl font-semibold text-[#072344] dark:text-white">
                  Hi, I’m {name}.
                </h1>
            {card.socialLinks && card.socialLinks.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8 no-print w-full relative z-10 py-2">
                {card.socialLinks.map((link, idx) => (
                  <SocialCircleIcon key={idx} platform={link.platform} url={link.url} size={40} />
                ))}
              </div>
            )}
                <p className="mt-2 font-sans text-base md:text-lg font-light text-[#072344] dark:text-white">
                  {role}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 no-print">
              <button
                type="button"
                onClick={() => onDownloadVCard?.()}
                className="bg-[#00aaa1] hover:bg-[#007c85] text-white font-sans text-base font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Download vCard
              </button>
              {websiteUrl && (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#00aaa1] text-[#00aaa1] hover:bg-[#cceeec] font-sans text-base font-semibold px-6 py-3 rounded-full text-center transition-colors"
                >
                  View site
                </a>
              )}
            </div>
          </div>
        </section>

        {/* My Story / About */}
        <section className="border-b border-[#eceef1] py-10 lg:py-14" id="about">
          <div className="flex items-center pb-6 gap-3">
            <div className="h-8 w-8 rounded-full bg-[#00aaa1] flex items-center justify-center text-white text-xs">
              S
            </div>
            <h3 className="font-sans text-xl md:text-2xl font-semibold text-[#072344] dark:text-white">
              My Story
            </h3>
          </div>
          <p className="font-sans text-sm md:text-base font-light text-[#072344] dark:text-white leading-relaxed">
            {storyText}
          </p>
        </section>

        {/* Latest posts / Articles about property */}
        <section className="border-b border-[#eceef1] py-10 lg:py-14" id="articles">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4">
            <h3 className="flex items-center font-sans text-xl md:text-2xl font-semibold text-[#072344] dark:text-white">
              My Articles
            </h3>
          </div>
          <div className="pt-6 space-y-8">
            {blogs.map((b) => (
              <article key={b.id} className="border-b border-[#eceef1] pb-6 last:border-b-0">
                <span className="mb-3 inline-block rounded-full bg-[#cceeec] px-3 py-1 font-sans text-xs text-[#007c85]">
                  {(b as any).icon || "property"}
                </span>
                <h4 className="block font-sans text-base md:text-lg font-semibold text-[#072344] hover:text-[#007c85] transition-colors dark:text-white dark:hover:text-[#00aaa1]">
                  {b.title}
                </h4>
                {b.description && (
                  <p className="mt-2 font-sans text-xs md:text-sm font-light text-[#072344] dark:text-white">
                    {b.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Projects / Listings */}
        <section className="pb-10 lg:pb-14" id="projects">
          <div className="flex items-center pb-6 gap-3">
            <div className="h-8 w-8 rounded-full bg-[#b3d6f1] flex items-center justify-center overflow-hidden">
              <span className="text-xs font-sans text-[#072344]">P</span>
            </div>
            <h3 className="font-sans text-xl md:text-2xl font-semibold text-[#072344] dark:text-white">
              {card.serviceTitle || "My Projects"}
            </h3>
          </div>
          <div className="space-y-4">
            {(card.services && card.services.length > 0
              ? card.services
              : card.products && card.products.length > 0
              ? card.products
              : [
                  { name: "Premium Apartments", description: "High-rise units with strong rental demand and stable yields." },
                  { name: "Commercial Spaces", description: "Retail and office properties with long-term lease structures." },
                  { name: "Plotted Developments", description: "Land opportunities in growing corridors with clear titles." },
                  { name: "Portfolio Advisory", description: "Helping investors balance residential and commercial exposure." },
                ]
            ).map((p: any, idx: number) => (
              <div
                key={p.id || idx}
                className="flex items-center justify-between border border-[#eceef1] px-4 py-4 sm:px-6 rounded-md hover:border-[#00aaa1] transition-colors group bg-white"
              >
                <div className="flex items-center gap-4 flex-grow">
                  {p.icon && (
                    <div className="h-10 w-10 rounded-md overflow-hidden flex-shrink-0 border border-[#eceef1]">
                      <img src={p.icon} alt={p.name} className="h-full w-full object-cover" />
                    </div>
                  )}
                  <span className="flex-grow pr-6">
                    <h4 className="font-sans text-sm md:text-base font-semibold text-[#072344] dark:text-white group-hover:text-[#00aaa1] transition-colors">
                      {p.name}
                    </h4>
                    {p.description && (
                      <p className="mt-1 font-sans text-xs md:text-sm font-light text-[#072344] dark:text-white line-clamp-2">
                        {p.description}
                      </p>
                    )}
                  </span>
                </div>
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center text-[#adb6c4] hover:text-[#00aaa1] text-xl font-semibold transition-colors"
                  >
                    →
                  </a>
                ) : (
                  <span className="w-10 text-right text-[#adb6c4] text-xl font-semibold">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Simple contact band */}
        <section id="contact" className="border-t border-[#eceef1] pt-8 mt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-sans text-xs md:text-sm font-light text-[#072344]">
                Get in touch to discuss buying, selling, or restructuring your property portfolio.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 text-xs md:text-sm">
              {phone && (
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="px-4 py-2 rounded-full border border-[#eceef1] hover:bg-[#eff0f3] transition-colors"
                >
                  Call: {phone}
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="px-4 py-2 rounded-full border border-[#eceef1] hover:bg-[#eff0f3] transition-colors"
                >
                  Email: {email}
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Atlas-style footer */}
      <footer className="border-t border-[#eceef1] py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="h-8 w-8 rounded-full bg-[#072344] flex items-center justify-center text-white text-xs font-semibold">
              {name.charAt(0).toUpperCase()}
            </div>
            <p className="font-sans text-xs md:text-sm font-light text-[#072344] dark:text-white text-center sm:text-left">
              ©{new Date().getFullYear()} {name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {card.socialLinks?.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                title={s.platform}
              >
                <SocialCircleIcon platform={s.platform} />
              </a>
            ))}
          </div>
        
      <VCardDynamicSections card={card} />
</div>
      </footer>
    </div>
  );
}
