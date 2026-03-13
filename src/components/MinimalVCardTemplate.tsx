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

/** LaslesVPN Next.js theme – Minimal vCard (sari Tailwind same-to-same) */
export function MinimalVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "Profile";
  const tagline = card.occupation || card.tagline || "Your tagline here";
  const description =
    card.description ||
    "Provide a network for all your needs with ease and fun. Discover interesting features.";

  const features = [
    "Powerful online presence.",
    "Contact anytime, anywhere.",
    "Professional vCard",
    "No specific time limits.",
  ];

  const listStats = [
    { name: "Experience", number: "5+" },
    { name: "Locations", number: card.address ? "1" : "—" },
    { name: "Services", number: card.products?.length ? String(card.products.length) : "3" },
  ];

  type PlanItem = { id: string; name: string; price?: string; features: string[] };
  const plans: PlanItem[] =
    card.services && card.services.length > 0
      ? card.services.slice(0, 3).map((s: any) => ({
          id: s.id,
          name: s.name,
          price: s.price || "Contact Us",
          features: s.description ? [s.description] : ["Included"],
          icon: s.icon,
          url: s.url
        }))
      : card.products && card.products.length >= 3
      ? card.products.slice(0, 3).map((p) => ({
          id: p.id,
          name: p.name,
          price: p.price ?? p.currency ?? "—",
          features: p.description ? [p.description] : ["Included"],
        }))
      : [
          { id: "1", name: "Free Plan", price: "Free", features: ["Basic contact", "vCard download", "Profile link"] },
          { id: "2", name: "Standard", price: "Pro", features: ["Everything in Free", "Custom link", "Analytics"] },
          { id: "3", name: "Premium", price: "Biz", features: ["Everything in Standard", "Priority support", "Branding"] },
        ];

  const testimonials = (card.testimonials && card.testimonials.length > 0)
    ? card.testimonials.map(t => ({ name: t.name, city: "City", country: "Country", rating: "5.0", testimoni: t.quote || t.description || t.testimoni || t.text }))
    : (card.blogs && card.blogs.length > 0)
    ? card.blogs.slice(0, 4).map((b) => ({ name: name.split(" ")[0] || "Client", city: "City", country: "Country", rating: "4.5", testimoni: b.description || b.title }))
    : [
        { name: "Client A", city: "City", country: "Country", rating: "4.5", testimoni: "Very professional and easy to get in touch. Highly recommend." },
        { name: "Client B", city: "City", country: "Country", rating: "4.5", testimoni: "Clear communication and quick response. Great experience." },
      ];

  const faqItems = [
    { q: "How can I contact you quickly?", a: "Use the email, phone or WhatsApp buttons in the contact section – they open directly in your preferred app." },
    { q: "Do you offer remote meetings?", a: "Yes, remote calls or video meetings can be scheduled after the first contact." },
    { q: "Can I share this vCard?", a: "Yes, you can share the URL or download and forward the vCard file to others." },
  ];

  const clientLogos = [
    "Client One",
    "Client Two",
    "Client Three",
    "Client Four",
    "Client Five",
  ];

  const websiteUrl =
    card.website && card.website.trim()
      ? card.website.trim().startsWith("http")
        ? card.website.trim()
        : `https://${card.website.trim()}`
      : undefined;

  return (
    <div className="lasles-minimal-template w-full max-w-[540px] mx-auto sm:my-8 overflow-hidden min-h-screen bg-lvpn-white-500 text-lvpn-black-500 sm:rounded-[32px] sm:shadow-[0_24px_80px_rgba(0,0,0,0.2)] border border-lvpn-gray-100 relative">
      {/* Header – LaslesVPN fixed nav */}
      <header className="absolute top-0 w-full z-30 bg-lvpn-white-500 shadow-md pt-4">
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <span className="text-xl font-semibold text-lvpn-black-600">{name.split(" ")[0] || "Me"}</span>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-lvpn-black-500 items-center">
            <a href="#about" className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-lvpn-black-500 hover:text-lvpn-orange-500">About</a>
            <a href="#feature" className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-lvpn-black-500 hover:text-lvpn-orange-500">Feature</a>
            <a href="#pricing" className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-lvpn-black-500 hover:text-lvpn-orange-500">Pricing</a>
            <a href="#clients" className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-lvpn-black-500 hover:text-lvpn-orange-500">Clients</a>
            <a href="#testimoni" className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-lvpn-black-500 hover:text-lvpn-orange-500">Testimonial</a>
            <a href="#faq" className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-lvpn-black-500 hover:text-lvpn-orange-500">FAQ</a>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center gap-2">
            <button
              type="button"
              onClick={() => onDownloadVCard?.()}
              className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-lvpn-orange-500 text-lvpn-orange-500 bg-lvpn-white-500 rounded-full capitalize hover:bg-lvpn-orange-500 hover:text-lvpn-white-500 transition-all no-print"
            >
              Download vCard
            </button>
          </div>
        </nav>
      </header>

      {/* Hero – LaslesVPN */}
      <div className="max-w-screen-xl mt-24 px-6 sm:px-8 lg:px-16 mx-auto" id="about">
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-lvpn-black-600 leading-normal">
              Want anything to be easy with <strong>{name}</strong>.
            </h1>
            
            <p className="text-lvpn-black-500 mt-4 mb-6">{description}</p>
            <button
              type="button"
              onClick={() => onDownloadVCard?.()}
              className="py-3 lg:py-4 px-12 lg:px-16 text-lvpn-white-500 font-semibold rounded-lg bg-lvpn-orange-500 hover:shadow-[var(--shadow-lvpn-orange-md)] transition-all outline-none no-print"
            >
              Get Started
            </button>
          </div>
          <div className="flex w-full items-center justify-center">
            {card.image ? (
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border-2 border-lvpn-gray-100">
                <Image src={card.image} alt={name} fill className="object-cover" unoptimized={card.image.startsWith("data:")} />
              </div>
            ) : (
              <div className="w-full max-w-sm h-64 sm:h-80 rounded-2xl bg-lvpn-gray-100 flex items-center justify-center text-6xl font-bold text-lvpn-gray-400">
                {name.charAt(0).toUpperCase()}
              </div>
            )}
            {card.socialLinks && card.socialLinks.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8 no-print w-full relative z-10 py-2">
                {card.socialLinks.map((link, idx) => (
                  <SocialCircleIcon key={idx} platform={link.platform} url={link.url} size={40} />
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Stats row – LaslesVPN style */}
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-lvpn-gray-100 bg-lvpn-white-500 z-10">
          {listStats.map((s, i) => (
            <div key={i} className="flex items-center justify-start sm:justify-center py-4 sm:py-6 px-4 sm:w-auto mx-auto sm:mx-0">
              <div className="flex items-center justify-center bg-lvpn-orange-100 w-12 h-12 mr-6 rounded-full flex-shrink-0">
                <span className="text-lg font-bold text-lvpn-orange-500">{s.number}</span>
              </div>
              <div className="flex flex-col">
                <p className="text-xl text-lvpn-black-600 font-bold">{s.number}{s.number !== "—" ? "+" : ""}</p>
                <p className="text-lg text-lvpn-black-500">{s.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature – LaslesVPN */}
      <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="feature">
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
          <div className="flex w-full justify-end items-center">
            <div className="w-full max-w-sm h-56 rounded-2xl bg-lvpn-gray-100 flex items-center justify-center text-lvpn-gray-400 text-sm">Feature</div>
          </div>
          <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-lvpn-black-600">
              We Provide Many Features You Can Use
            </h3>
            <p className="my-2 text-lvpn-black-500">
              You can explore the features that we provide with fun and have their own functions each feature.
            </p>
            <ul className="text-lvpn-black-500 self-start list-inside ml-8">
              {features.map((f) => (
                <li key={f} className="relative circle-check custom-list my-2">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pricing – LaslesVPN */}
      <div className="bg-gradient-to-b from-lvpn-white-300 to-lvpn-white-500 w-full py-14" id="pricing">
        <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-lvpn-black-600 leading-relaxed">
            {card.serviceTitle || "Choose Your Plan"}
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-lvpn-black-500">
            {card.serviceSubtitle || "Let's choose the package that is best for you and explore it happily and cheerfully."}
          </p>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="flex flex-col justify-center items-center border-2 border-lvpn-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 hover:border-lvpn-orange-500 transition-all"
              >
                <p className="text-lg text-lvpn-black-600 font-medium capitalize my-2 sm:my-7">
                  {plan.name}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-lvpn-black-500 flex-grow">
                  {plan.features.map((f, i) => (
                    <li key={i} className="relative circle-check custom-list my-2">{f}</li>
                  ))}
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-lvpn-black-600 text-center mb-4">
                    {plan.price ?? "—"}
                  </p>
                  {(plan as any).url ? (
                    <a
                      href={(plan as any).url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-lvpn-orange-500 text-lvpn-orange-500 bg-lvpn-white-500 rounded-full capitalize hover:bg-lvpn-orange-500 hover:text-lvpn-white-500 transition-all no-print text-center"
                    >
                      Learn More
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onDownloadVCard?.()}
                      className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-lvpn-orange-500 text-lvpn-orange-500 bg-lvpn-white-500 rounded-full capitalize hover:bg-lvpn-orange-500 hover:text-lvpn-white-500 transition-all no-print"
                    >
                      Select
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients / Brands strip – LaslesVPN map-style section */}
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full my-16" id="clients">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-lvpn-black-600 leading-relaxed w-full sm:w-7/12 lg:w-4/12 mx-auto text-center">
          Connected with clients across the globe
        </h3>
        <p className="leading-normal mx-auto my-4 w-10/12 sm:w-7/12 lg:w-6/12 text-center text-lvpn-black-500">
          See this profile everywhere to make it easier when you move locations or change devices.
        </p>
        <div className="py-10 w-full px-8 mt-6">
          <div className="w-full h-56 sm:h-64 rounded-3xl bg-lvpn-gray-100 flex items-center justify-center text-lvpn-gray-400 text-sm">
            Map / network illustration placeholder
          </div>
        </div>
        <div className="w-full flex justify-evenly items-center mt-6 flex-wrap lg:flex-nowrap gap-4">
          {clientLogos.map((c) => (
            <div
              key={c}
              className="h-10 px-4 rounded-full bg-lvpn-white-500 border border-lvpn-gray-100 flex items-center justify-center text-xs sm:text-sm text-lvpn-gray-400"
            >
              {c}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials – LaslesVPN */}
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full my-16" id="testimoni">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-lvpn-black-600 leading-normal w-9/12 sm:w-6/12 lg:w-4/12 mx-auto text-center">
          Trusted by Thousands of Happy Customer
        </h3>
        <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12 text-center text-lvpn-black-500">
          These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          {testimonials.map((t, i) => (
            <div key={i} className="border-2 border-lvpn-gray-500 hover:border-lvpn-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <div className="w-12 h-12 rounded-full bg-lvpn-orange-100 flex items-center justify-center text-lvpn-orange-500 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-lvpn-black-600 capitalize">{t.name}</p>
                    <p className="text-sm text-lvpn-black-500 capitalize">{t.city}, {t.country}</p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{t.rating}</p>
                </div>
              </div>
              <p className="mt-5 text-left text-lvpn-black-500">&ldquo;{t.testimoni}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* CTA strip – LaslesVPN */}
        <div className="relative w-full mt-16">
          <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-lvpn-white-500 shadow-xl border border-lvpn-gray-100">
            <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
              <h5 className="text-lvpn-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                Subscribe Now for <br /> Get Special Features!
              </h5>
              <p className="text-lvpn-black-500">Let&apos;s subscribe with us and find the fun.</p>
            </div>
            <button
              type="button"
              onClick={() => onDownloadVCard?.()}
              className="py-3 lg:py-4 px-12 lg:px-16 text-lvpn-white-500 font-semibold rounded-lg bg-lvpn-orange-500 hover:shadow-[var(--shadow-lvpn-orange-md)] transition-all outline-none no-print"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* FAQ – simple Q&A cards */}
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full my-12" id="faq">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-lvpn-black-600 leading-relaxed w-full sm:w-7/12 lg:w-4/12 mx-auto text-center">
          Frequently Asked Questions
        </h3>
        <p className="leading-normal mx-auto my-4 w-10/12 sm:w-7/12 lg:w-6/12 text-center text-lvpn-black-500">
          Quick answers to common questions about getting in touch and using this vCard.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {faqItems.map((faq, i) => (
            <div
              key={i}
              className="border border-lvpn-gray-100 rounded-2xl p-6 bg-lvpn-white-500 shadow-sm"
            >
              <h4 className="font-semibold text-lvpn-black-600 mb-2 text-sm sm:text-base">
                {faq.q}
              </h4>
              <p className="text-xs sm:text-sm text-lvpn-black-500">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer – LaslesVPN */}
      <div className="bg-lvpn-white-300 pt-44 pb-24">
        <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
          <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start">
            <span className="text-xl font-semibold text-lvpn-black-600 mb-6 block">{name.split(" ")[0] || "Me"}</span>
            <p className="mb-4 text-lvpn-black-500">
              <strong className="font-medium">{name}</strong> — {tagline}. {description.slice(0, 80)}…
            </p>
            <div className="flex w-full mt-2 mb-8 -mx-2 flex-wrap gap-2">
              {card.socialLinks?.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 flex shadow-md hover:scale-110 transition-transform rounded-full"
                  title={s.platform}
                >
                  <SocialCircleIcon platform={s.platform} />
                </a>
              ))}
            </div>
            <p className="text-lvpn-gray-400">©{new Date().getFullYear()} - {name}</p>
            <p className="text-lvpn-gray-400">{baseUrl.replace(/^https?:\/\//, "")}/{slug}</p>
          </div>
          <div className="row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
            <p className="text-lvpn-black-600 mb-4 font-medium text-lg">Product</p>
            <ul className="text-lvpn-black-500">
              <li className="my-2 hover:text-lvpn-orange-500 cursor-pointer transition-all"><a href="#pricing">Pricing</a></li>
              <li className="my-2 hover:text-lvpn-orange-500 cursor-pointer transition-all"><a href="#feature">Features</a></li>
              <li className="my-2 hover:text-lvpn-orange-500 cursor-pointer transition-all"><a href="#about">About</a></li>
            </ul>
          </div>
          <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
            <p className="text-lvpn-black-600 mb-4 font-medium text-lg">Engage</p>
            <ul className="text-lvpn-black-500">
              <li className="my-2 hover:text-lvpn-orange-500 cursor-pointer transition-all"><a href="#testimoni">Testimonials</a></li>
              <li className="my-2 hover:text-lvpn-orange-500 cursor-pointer transition-all"><a href="#contact">Contact</a></li>
              {websiteUrl && (
                <li className="my-2 hover:text-lvpn-orange-500 cursor-pointer transition-all">
                  <a href={websiteUrl} target="_blank" rel="noopener noreferrer">Website</a>
                </li>
              )}
            </ul>
          </div>
          <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col" id="contact">
            <p className="text-lvpn-black-600 mb-4 font-medium text-lg">Contact</p>
            <ul className="text-lvpn-black-500">
              {card.email && <li className="my-2"><a href={`mailto:${card.email}`} className="hover:text-lvpn-orange-500 transition-all">{card.email}</a></li>}
              {card.phone && <li className="my-2"><a href={`tel:${card.phone.replace(/\s/g, "")}`} className="hover:text-lvpn-orange-500 transition-all">{card.phone}</a></li>}
              {card.address && <li className="my-2">{card.address}</li>}
            </ul>
          </div>
        </div>
      
      <VCardDynamicSections card={card} exclude={['testimonials']} />
</div>
    </div>
  );
}
