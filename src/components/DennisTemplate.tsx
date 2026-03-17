"use client";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialCircleIcon } from "./SocialCircleIcon";
import {
  Monitor,
  Square,
  Video,
  Coffee,
  Music,
  Watch,
  Box,
  Target,
  PenTool,
  Book,
  Smartphone,
  Activity,
  Airplay,
  Aperture,
  Camera,
  Compass,
  Settings,
  ChevronDown,
  Quote,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Heart,
  Menu,
  X,
} from "lucide-react";

export type DennisTemplateCard = {
  title?: string;
  occupation?: string;
  tagline?: string;
  description?: string;
  image?: string;
  email?: string;
  phone?: string;
  address?: string;
  website?: string;
  templateName?: string;
  socialLinks?: { platform: string; url: string }[];
  termsHtml?: string;
  privacyHtml?: string;
  products?: {
    id?: string;
    name: string;
    currency?: string;
    price?: string;
    url?: string;
    description?: string;
    icon: string;
  }[];
  displayProductEnquiryButton?: boolean;
  company?: string;
  services?: {
    name?: string;
    description?: string;
    url?: string;
    icon?: string;
  }[];
  blogs?: {
    id?: string;
    title: string;
    description: string;
    icon: string;
  }[];
  testimonials?: {
    id?: string;
    name: string;
    role: string;
    quote: string;
  }[];
  serviceTitle?: string;
  serviceSubtitle?: string;
  serviceTitleSmall?: string;
};

const DENNIS_NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#service", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#project", label: "Projects" },
  { href: "#blog", label: "Blogs" },
  { href: "#contact", label: "Contact Me" },
];

const HOBBIES = [
  { icon: Monitor, label: "Developing" },
  { icon: Square, label: "Mac OS" },
  { icon: Video, label: "Cinema" },
  { icon: Coffee, label: "Coffee" },
  { icon: Music, label: "Music" },
  { icon: Watch, label: "Games" },
  { icon: Box, label: "Designing" },
  { icon: Target, label: "Sports" },
  { icon: PenTool, label: "Painting" },
  { icon: Book, label: "Reading" },
  { icon: Smartphone, label: "Android" },
  { icon: Activity, label: "Other Activity" },
];

const SERVICES = [
  { icon: Airplay, title: "UX / UI Design", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
  { icon: Aperture, title: "Ios App Designer", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
  { icon: Camera, title: "Photography", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
  { icon: Compass, title: "Graphic Designer", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
  { icon: Settings, title: "Web Security", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
  { icon: Watch, title: "24 / 7", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
];

const EXPERIENCE = [
  { company: "Facebook", period: "2019-21", role: "UX / UI Designer", desc: "The generated injected humour, or non-characteristic words etc.", logo: "F" },
  { company: "Google Tech.", period: "2018-19", role: "Sr. UX / UI Designer", desc: "The generated injected humour, or non-characteristic words etc.", logo: "G" },
  { company: "Lenovo Ltd.", period: "2016-18", role: "Jr. UX / UI Designer", desc: "The generated injected humour, or non-characteristic words etc.", logo: "L" },
  { company: "Circle CI", period: "2015-16", role: "Front-end Web Designer", desc: "The generated injected humour, or non-characteristic words etc.", logo: "C" },
];

const PROJECTS = [
  { title: "Fronter Theme", tag: "UI / UX Design", img: "https://placehold.co/400x300/f59e0b/fff?text=1" },
  { title: "Landrick Theme", tag: "Technology", img: "https://placehold.co/400x300/f59e0b/fff?text=2" },
  { title: "Valexy Theme", tag: "Landing", img: "https://placehold.co/400x300/f59e0b/fff?text=3" },
  { title: "Superex Theme", tag: "Digital", img: "https://placehold.co/400x300/f59e0b/fff?text=4" },
  { title: "Motos Theme", tag: "Landing", img: "https://placehold.co/400x300/f59e0b/fff?text=5" },
  { title: "Giglink Theme", tag: "Digital", img: "https://placehold.co/400x300/f59e0b/fff?text=6" },
  { title: "Upwind Theme", tag: "Landing", img: "https://placehold.co/400x300/f59e0b/fff?text=7" },
  { title: "Techwind Theme", tag: "Multipurpose", img: "https://placehold.co/400x300/f59e0b/fff?text=8" },
];

const TESTIMONIALS = [
  { quote: "I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!", name: "Thomas Israel", role: "Manager" },
  { quote: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it.", name: "Barbara McIntosh", role: "Manager" },
  { quote: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to.", name: "Carl Oliver", role: "Manager" },
];

const DEFAULT_BLOGS = [
  { title: "Sample blog post", desc: "Add your blogs in the dashboard and they will appear here automatically.", img: "" },
];

const DEFAULT_TYPEWRITE = ["Dennis Scott", "Website Designer", "Web Developer", "UI/UX Designer"];

type Props = {
  card?: DennisTemplateCard | null;
  slug?: string;
  baseUrl?: string;
  onDownloadVCard?: () => void;
};


export function DennisTemplate({ card, slug, baseUrl = "", onDownloadVCard }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarSticky, setNavbarSticky] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [typewriteIndex, setTypewriteIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);

  const isVCard = !!card;
  const brandName = card?.title || "Dennis";
  const typewriteTexts = isVCard && card
    ? [card.title, card.occupation, card.tagline, card.templateName].filter(Boolean) as string[]
    : DEFAULT_TYPEWRITE;
  const heroTitle = typewriteTexts[typewriteIndex % typewriteTexts.length] || typewriteTexts[0];
  const heroDesc = card?.description || "Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.";
  const aboutTitle = card?.occupation ? `I'm a Passionate ${card.occupation}` : "I'm a Passionate Web Designer";
  const aboutDesc = card?.description || "Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development cycle for dynamic web projects.";
  const aboutDesc2 = "I'm a professional web designer. My motive is to build a best web design with my all years of experience.";
  const homeHref = slug ? `/${slug}` : "/dennis";
  const totalProjects = PROJECTS.length;
  const termsHtml = card?.termsHtml;
  const privacyHtml = (card as any)?.privacyHtml as string | undefined;

  useEffect(() => {
    const handleScroll = () => {
      setNavbarSticky(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typewriteTexts.length === 0) return;
    const t = setInterval(() => {
      setTypewriteIndex((i) => (i + 1) % typewriteTexts.length);
    }, 2000);
    return () => clearInterval(t);
  }, [typewriteTexts.length]);

  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#e5e7eb] flex justify-center px-4 py-6 sm:py-10">
      <div className="font-poppins text-base text-slate-900 dark:text-white bg-white dark:bg-slate-900 min-h-full w-full max-w-[540px] rounded-[32px] shadow-2xl overflow-hidden relative">
      {/* Hero - Aayush-style layout with existing colors */}
      <section className="relative bg-amber-500/5" id="home">
        {/* Banner */}
        <div className="relative h-40 w-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-t-[32px]">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_10px_10px,#fef3c7_1px,transparent_0)] bg-[length:20px_20px]" />
        </div>

        {/* Avatar overlapping between banner and info panel */}
        <div className="relative">
          <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 h-28 w-28 rounded-full border-4 border-white overflow-hidden shadow-xl bg-slate-200">
            {card?.image ? (
              <Image
                src={card.image}
                alt={card.title || "Profile"}
                width={112}
                height={112}
                className="h-full w-full object-cover object-top"
                unoptimized={card.image.startsWith("data:")}
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-3xl font-semibold text-amber-600">
                {(card?.title || "A")[0]}
              </div>
            )}
          </div>
        </div>

        {/* Info panel */}
        <div className="pt-14 pb-8 px-4 bg-[#fff7eb] flex flex-col items-center text-center">
          <div className="max-w-xs">
            <h1 className="text-2xl font-semibold text-slate-900">
              {card?.title || heroTitle}
            </h1>
            <p className="mt-1 text-sm text-slate-700">
              {card?.occupation || "Digital Marketer"}
            </p>
            {card?.company && (
              <p className="text-xs text-slate-500 mt-0.5">
                {card.company}
              </p>
            )}
            <p className="mt-3 text-xs text-slate-600">
              {heroDesc}
            </p>

            {/* Social media icons row – moved above action button as requested */}
            {card?.socialLinks && card.socialLinks.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                {card.socialLinks
                  .filter((link) => link.url && link.url.trim() !== "")
                  .map((link) => (
                    <SocialCircleIcon key={`${link.platform}-${link.url}`} platform={link.platform} url={link.url} size={36} />
                  ))}
              </div>
            )}
          </div>

          {/* Primary action */}
          <div className="mt-5 flex flex-col gap-3 w-full max-w-xs">
            {isVCard && onDownloadVCard ? (
              <button
                type="button"
                onClick={onDownloadVCard}
                className="inline-flex items-center justify-center rounded-md bg-amber-100 hover:bg-amber-200 text-amber-700 text-sm font-semibold px-6 py-2"
              >
                Download vCard
              </button>
            ) : (
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-amber-100 hover:bg-amber-200 text-amber-700 text-sm font-semibold px-6 py-2"
              >
                Download CV
              </a>
            )}
          </div>
        </div>
      </section>
      {/* removed bottom scroll-down chevron for cleaner card view */}

      {/* About - centered profile like Aayush layout (light background) */}
      <section className="relative md:py-24 py-16 bg-white" id="about">
        <div className="container w-full mx-auto px-4">
          <div className="flex flex-col items-center text-center gap-5">
            <div className="h-28 w-28 rounded-full border-4 border-slate-800 overflow-hidden shadow-lg bg-slate-800">
              {card?.image ? (
                <Image
                  src={card.image}
                  alt={card.title || "Profile"}
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                  unoptimized={card.image.startsWith("data:")}
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-3xl font-semibold text-white">
                  {(card?.title || "A")[0]}
                </div>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">
                {card?.title || "Your Name"}
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                {card?.occupation || "Digital Marketer · Founder & CEO"}
              </p>
              {card?.company && (
                <p className="text-xs text-slate-500 mt-0.5">{card.company}</p>
              )}
            </div>
            <p className="mt-2 text-sm text-slate-700 max-w-xs">
              {aboutDesc}
            </p>
            <p className="text-xs text-slate-500 max-w-xs">
              {aboutDesc2}
            </p>
            <div className="mt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-6 py-2"
              >
                See Work
              </a>
            </div>
          </div>

          <div className="mt-24">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3 className="mb-6 md:text-2xl text-xl font-semibold">Hobbies & Expertise</h3>
              <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
                Obviously I&apos;m a Web Designer. Web Developer with over 7 years of experience.
              </p>
            </div>
            <div className="grid grid-cols-2 mt-8 gap-3">
              {HOBBIES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex group shadow-sm shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900"
                >
                  <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                    <Icon className="size-5 rotate-45" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-0 text-[17px] font-medium">{label}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="service">
        <div className="container w-full mx-auto px-4">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl font-semibold">
              {card?.serviceTitle || "What do I offer?"}
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto text-[15px]">
              {card?.serviceSubtitle || "Obviously I'm a Web Designer. Web Developer with over 7 years of experience."}
            </p>
          </div>
          <div className="grid grid-cols-1 mt-8 gap-4">
            {(() => {
              const services =
                card && (card as any).services && (card as any).services.length > 0
                  ? ((card as any).services as {
                      name?: string;
                      description?: string;
                      url?: string;
                      icon?: string;
                    }[])
                  : SERVICES.map((s) => ({
                      name: s.title,
                      description: s.desc,
                      iconComponent: s.icon,
                      url: "#",
                      icon: undefined,
                    }));
              return services.map((service, idx) => {
                const title = service.name || (SERVICES[idx]?.title ?? "Service");
                const desc =
                  service.description ||
                  "The phrasal sequence of the is now so that many campaign and benefit";
                const url = service.url || "#";
                const Icon =
                  (service as any).iconComponent || SERVICES[idx % SERVICES.length].icon;

                return (
                  <div
                    key={service.name || idx}
                    className="px-6 py-10 shadow-sm shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900"
                  >
                    {typeof service.icon === "string" && service.icon ? (
                      <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={service.icon}
                          alt={title}
                          className="h-10 w-10 object-contain"
                        />
                      </div>
                    ) : (
                      <Icon className="size-10 stroke-1 text-amber-500" />
                    )}
                    <div className="mt-7">
                      <p className="title text-[17px] font-medium text-slate-900 dark:text-white">
                        {title}
                      </p>
                      <p className="text-slate-600 mt-3 text-[15px] text-left">
                        {desc}
                      </p>
                      {url && url !== "#" && (
                        <div className="mt-5">
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-amber-500 dark:hover:text-amber-500 transition duration-500 inline-flex items-center gap-1 text-sm font-medium"
                          >
                            Read More <ArrowRight className="size-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 w-full table relative bg-slate-800 bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="container relative w-full mx-auto px-4">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-2xl text-xl text-white font-semibold">I Am Available For Freelancer Projects.</h3>
            <p className="text-white/80 max-w-xl mx-auto text-[15px]">
              Obviously I&apos;m a Web Designer. Web Developer with over 7 years of experience.
            </p>
            <div className="relative mt-8">
              <a href="#contact" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-10 px-6 inline-flex items-center">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="experience">
        <div className="container w-full mx-auto px-4">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl font-semibold">Work Experience</h3>
            <p className="text-slate-600 max-w-xl mx-auto text-[15px]">
              Obviously I&apos;m a Web Designer. Web Developer with over 7 years of experience.
            </p>
          </div>
          <div className="grid grid-cols-1 mt-8 max-w-4xl mx-auto space-y-12">
            {EXPERIENCE.map(({ company, period, role, desc, logo }) => (
              <div key={company} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex items-center gap-4 md:w-48 shrink-0">
                  <div className="size-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center text-lg font-bold">{logo}</div>
                  <div>
                    <h5 className="font-semibold text-lg">{company}</h5>
                    <h6 className="text-sm text-slate-400">{period}</h6>
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold mb-1">{role}</h5>
                  <p className="text-slate-400 text-[15px]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects (card-style, single column) */}
      <section className="relative md:py-24 py-16" id="project">
        <div className="container w-full mx-auto px-4">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl font-semibold">My Work &amp; Projects</h3>
            <p className="text-slate-600 max-w-xl mx-auto text-[15px]">
              Obviously I&apos;m a Web Designer. Web Developer with over 7 years of experience.
            </p>
          </div>
          <div className="mt-8">
            {(() => {
              const { title, tag, img } = PROJECTS[projectIndex];
              return (
                <div className="rounded-2xl bg-slate-900 text-white border border-slate-700 p-4">
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-800 mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={title} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-sm font-semibold">{title}</h4>
                  <p className="text-[11px] text-slate-300 mt-1">
                    {tag} project designed &amp; developed with modern UI.
                  </p>
                </div>
              );
            })()}
            <div className="mt-6 flex items-center justify-center gap-8">
              <button
                type="button"
                onClick={() => setProjectIndex((prev) => (prev - 1 + totalProjects) % totalProjects)}
                className="h-6 w-6 flex items-center justify-center text-slate-700 hover:text-slate-900 transition"
                aria-label="Previous project"
              >
                <span className="block w-0 h-0 border-y-[5px] border-y-transparent border-r-0 border-l-[8px] border-l-slate-700" />
              </button>
              <div className="flex items-center gap-2">
                {PROJECTS.map((p, idx) => (
                  <button
                    key={p.title}
                    type="button"
                    onClick={() => setProjectIndex(idx)}
                    className={`h-2 w-2 rounded-full ${
                      idx === projectIndex ? "bg-slate-700" : "bg-slate-300"
                    }`}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setProjectIndex((prev) => (prev + 1) % totalProjects)}
                className="h-6 w-6 flex items-center justify-center text-slate-700 hover:text-slate-900 transition"
                aria-label="Next project"
              >
                <span className="block w-0 h-0 border-y-[5px] border-y-transparent border-l-0 border-r-[8px] border-r-slate-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="testi">
        <div className="container w-full mx-auto px-4">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl font-semibold">Client&apos;s Review</h3>
            <p className="text-slate-600 max-w-xl mx-auto text-[15px]">
              Obviously I&apos;m a Web Designer. Web Developer with over 7 years of experience.
            </p>
          </div>
          <div className="grid relative grid-cols-1 mt-6 max-w-2xl mx-auto">
            {(() => {
              const testimonials =
                (card?.testimonials && (card as any).testimonials.length > 0
                  ? (card as any).testimonials
                  : TESTIMONIALS) as {
                  id?: string;
                  name: string;
                  role: string;
                  quote: string;
                }[];
              const active = testimonials[testimonialIndex % testimonials.length];
              return (
                <div className="customer-testi">
                  <div className="content relative rounded-sm shadow-sm shadow-gray-200 dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                    <Quote className="size-12 text-amber-500 mb-4" />
                    <p className="text-slate-400 text-[15px]">&quot;{active.quote}&quot;</p>
                    <ul className="list-none mb-0 text-amber-400 mt-3 flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <li key={i} className="inline">
                          <Star className="size-5 fill-current" />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center mt-5">
                    <div className="size-14 rounded-full bg-amber-500/20 mx-auto mb-1 flex items-center justify-center text-2xl font-bold text-amber-500">
                      {active.name.charAt(0)}
                    </div>
                    <p className="text-base font-medium hover:text-amber-500 duration-500 ease-in-out">
                      {active.name}
                    </p>
                    <span className="text-slate-400 text-sm block">{active.role}</span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Blog – use vCard blogs from dashboard if present */}
      <section className="relative md:py-24 py-16" id="blog">
        <div className="container w-full mx-auto px-4">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl font-semibold">Blogs or News</h3>
            <p className="text-slate-600 max-w-xl mx-auto text-[15px]">
              Obviously I&apos;m a Web Designer. Web Developer with over 7 years of experience.
            </p>
          </div>
          {(() => {
            const blogs = (card?.blogs && card.blogs.length > 0 ? card.blogs : DEFAULT_BLOGS) as {
              id?: string;
              title: string;
              description: string;
              icon: string;
            }[];
            return (
              <div className="grid grid-cols-1 gap-4 mt-8">
                {blogs.map((b, idx) => (
                  <div
                    key={b.id || `${b.title}-${idx}`}
                    className="blog relative rounded-lg shadow-sm shadow-slate-200 dark:shadow-gray-800 overflow-hidden bg-white dark:bg-slate-900"
                  >
                    <div className="aspect-video relative bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                      {b.icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={b.icon} alt={b.title} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-xs text-slate-500 px-3">
                          Add a blog image in the Blogs tab to show it here.
                        </span>
                      )}
                    </div>
                    <div className="content p-6">
                      <p className="text-[17px] font-medium hover:text-amber-500 dark:text-white dark:hover:text-amber-500 transition duration-500 ease-in-out">
                        {b.title}
                      </p>
                      <p className="text-slate-600 mt-3 text-[15px]">
                        {b.description || "Update the blog description in your dashboard to show it here."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Products – use vCard products from dashboard, below Blogs */}
      {card?.products && card.products.length > 0 && (
        <section className="relative md:py-10 py-8 bg-gray-50">
          <div className="container w-full mx-auto px-4">
            <div className="grid grid-cols-1 pb-4 text-center">
              <h3 className="mb-3 md:text-2xl text-xl font-semibold">Products</h3>
              <p className="text-slate-600 max-w-xl mx-auto text-[15px]">
                Browse a few highlighted products and tap to view more details.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-6">
              {card.products!.map((p, idx) => (
                <div
                  key={p.id || `${p.name}-${idx}`}
                  className="relative rounded-lg shadow-sm shadow-slate-200 dark:shadow-gray-800 overflow-hidden bg-white dark:bg-slate-900"
                >
                  <div className="aspect-video relative bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    {p.icon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.icon} alt={p.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xs text-slate-500 px-3">
                        Add a product icon in the Products tab to show it here.
                      </span>
                    )}
                  </div>
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[17px] font-medium text-slate-900 dark:text-white">
                        {p.name}
                      </p>
                      {p.price && (
                        <span className="text-sm font-semibold text-amber-600">
                          {p.currency ? `${p.currency} ` : ""}
                          {p.price}
                        </span>
                      )}
                    </div>
                    {p.description && (
                      <p className="text-slate-600 mt-1 text-[14px]">
                        {p.description}
                      </p>
                    )}
                    {p.url && (
                      <div className="mt-3">
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white text-sm font-medium text-slate-700 px-4 py-1.5 hover:border-amber-400 hover:text-amber-600"
                        >
                          View product
                          <ArrowRight className="size-4 ml-1" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {card.displayProductEnquiryButton && (
              <div className="mt-6 flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-6 py-2 shadow-sm"
                >
                  Product enquiry
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
        <div className="container w-full mx-auto px-4">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl font-semibold">Get In Touch !</h3>
            <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
              Obviously I&apos;m a Web Designer. Web Developer with over 7 years of experience.
            </p>
          </div>
          <div className="grid grid-cols-1 mt-8 items-start gap-6">
            <div className="lg:col-span-8">
              <div className="p-6 rounded-md shadow-sm bg-white dark:bg-slate-900">
                <form className="grid lg:grid-cols-12 lg:gap-5">
                  <div className="lg:col-span-6 mb-5">
                    <input
                      type="text"
                      placeholder="Name :"
                      className="form-input w-full py-2 px-3 border border-gray-200 dark:border-gray-800 focus:ring-0 focus:border-amber-500/50 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none text-[15px]"
                    />
                  </div>
                  <div className="lg:col-span-6 mb-5">
                    <input
                      type="email"
                      placeholder="Email :"
                      className="form-input w-full py-2 px-3 border border-gray-200 dark:border-gray-800 focus:ring-0 focus:border-amber-500/50 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none text-[15px]"
                    />
                  </div>
                  <div className="col-span-12 mb-5">
                    <input
                      type="text"
                      placeholder="Subject :"
                      className="form-input w-full py-2 px-3 border border-gray-200 dark:border-gray-800 focus:ring-0 focus:border-amber-500/50 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none text-[15px]"
                    />
                  </div>
                  <div className="col-span-12 mb-5">
                    <textarea
                      placeholder="Message :"
                      rows={5}
                      className="form-input w-full py-2 px-3 border border-gray-200 dark:border-gray-800 focus:ring-0 focus:border-amber-500/50 dark:bg-slate-900 dark:text-slate-200 rounded outline-none text-[15px]"
                    />
                  </div>
                  <div className="col-span-12 space-y-3">
                    {termsHtml && (
                      <label className="flex items-center gap-2 text-[13px] text-slate-700">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border border-slate-300 text-amber-500 focus:ring-amber-500"
                        />
                        <span>
                          I agree to the{" "}
                          <button
                            type="button"
                            className="underline font-semibold text-slate-800"
                            onClick={(e) => {
                              e.preventDefault();
                              const el = document.getElementById("dennis-terms");
                              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                            }}
                          >
                            Terms and Conditions
                          </button>
                          .
                        </span>
                      </label>
                    )}

                    <button
                      type="submit"
                      className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-11 justify-center flex items-center cursor-pointer px-6"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="lg:ms-8 space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Phone className="size-8 text-amber-500" />
                  </div>
                  <div>
                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">Phone</h5>
                    <a href={card?.phone ? `tel:${card.phone}` : "tel:+152534468854"} className="text-slate-400 text-[15px]">
                      {card?.phone || "+152 534-468-854"}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Mail className="size-8 text-amber-500" />
                  </div>
                  <div>
                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">Email</h5>
                    <a href={card?.email ? `mailto:${card.email}` : "mailto:contact@example.com"} className="text-slate-400 text-[15px]">
                      {card?.email || "contact@example.com"}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <MapPin className="size-8 text-amber-500" />
                  </div>
                  <div>
                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">Location</h5>
                    <p className="text-slate-400 text-[15px] mb-2">{card?.address || "C/54 Northwest Freeway, Suite 558, Houston, USA 485"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions / Privacy content block */}
      {(termsHtml || privacyHtml) && (
        <section className="bg-transparent px-4 pb-10">
          <div className="container w-full mx-auto space-y-3">
            {termsHtml && (
              <div
                id="dennis-terms"
                className="mt-2 rounded-2xl bg-white border border-gray-200 px-4 py-4 space-y-2 text-xs shadow-sm"
              >
                <h2 className="text-left text-sm font-semibold text-slate-900">
                  Terms &amp; Conditions
                </h2>
                <div
                  className="mt-1 text-[12px] text-slate-700 leading-relaxed max-h-52 overflow-y-auto space-y-1"
                  dangerouslySetInnerHTML={{ __html: termsHtml }}
                />
              </div>
            )}

            {privacyHtml && (
              <div
                id="dennis-privacy"
                className="mt-1 rounded-2xl bg-white border border-gray-200 px-4 py-4 space-y-2 text-xs shadow-sm"
              >
                <h2 className="text-left text-sm font-semibold text-slate-900">
                  Privacy Policy
                </h2>
                <div
                  className="mt-1 text-[12px] text-slate-700 leading-relaxed max-h-52 overflow-y-auto space-y-1"
                  dangerouslySetInnerHTML={{ __html: privacyHtml }}
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer (simple, no social grid) */}
      <footer className="footer bg-slate-800 dark:bg-gray-900 relative text-gray-200 dark:text-gray-200">
        <div className="py-[18px] px-0 border-t border-slate-800">
          <div className="container w-full mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-white uppercase tracking-[0.12em]">
              {brandName}.
            </p>
            <p className="mt-1 text-xs">
              © {new Date().getFullYear()} {brandName}. Design with{" "}
              <Heart className="inline size-3 text-red-500 fill-red-500 align-text-bottom" /> by Shreethemes.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={`back-to-top fixed text-lg rounded-full z-10 bottom-5 right-5 size-9 text-center bg-amber-500 text-white leading-9 items-center justify-center hover:bg-amber-600 transition-opacity duration-300 ${showBackToTop ? "flex opacity-100" : "hidden opacity-0"}`}
        aria-label="Back to top"
      >
        <ArrowRight className="size-5 rotate-[-90deg]" />
      </a>
      
        {card && <VCardDynamicSections card={card as any} exclude={['testimonials']} />}
      </div>
    </div>
  );
}
