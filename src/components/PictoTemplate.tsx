"use client";

import React from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowRight, Download, FileText } from "lucide-react";

export type PictoTemplateCard = {
  title?: string;
  occupation?: string;
  tagline?: string;
  description?: string;
  image?: string;
  email?: string;
  phone?: string;
  address?: string;
  website?: string;
  company?: string;
  socialLinks?: { platform: string; url: string }[];
  services?: {
    id?: string;
    name: string;
    description?: string;
    url?: string;
    icon: string;
  }[];
  blogs?: {
    id?: string;
    title: string;
    description?: string;
    icon: string;
    date?: string;
    link?: string;
  }[];
  testimonials?: {
    id?: string;
    name: string;
    role: string;
    quote: string;
    message?: string;
  }[];
  /** Intro stats: Experience, Projects, Happy Clients */
  stats?: { title: string; value: string }[];
  /** Portfolio / projects */
  portfolio?: {
    id?: string;
    image?: string;
    category?: string;
    title: string;
    description?: string;
    link?: string;
  }[];
  /** "What I do?" roles (e.g. UX, UI, Web Dev) */
  roles?: { id?: string; title: string; description?: string }[];
  /** Work Together CTA */
  workTogetherTitle?: string;
  workTogetherSubtitle?: string;
  /** Happy Clients logos (image URLs) */
  clientLogos?: string[];
  termsHtml?: string;
  privacyHtml?: string;
  serviceTitle?: string;
  serviceSubtitle?: string;
  serviceTitleSmall?: string;
  whatsapp?: string;
};

const DEFAULT_STATS = [
  { title: "Experience", value: "15 Y." },
  { title: "Projects Completed", value: "250+" },
  { title: "Happy Clients", value: "58" },
];

const WORK_PROCESS_STEPS = [
  {
    id: 1,
    title: "Research",
    description:
      "Design meets function in every pixel, blending clarity with intuitive motion.",
    svgPath:
      "M21.3333 18.6667H10.6667C10.313 18.6667 9.97391 18.8072 9.72386 19.0573C9.47381 19.3073 9.33333 19.6465 9.33333 20.0001C9.33333 20.3537 9.47381 20.6928 9.72386 20.9429C9.97391 21.1929 10.313 21.3334 10.6667 21.3334H21.3333C21.687 21.3334 22.0261 21.1929 22.2761 20.9429C22.5262 20.6928 22.6667 20.3537 22.6667 20.0001C22.6667 19.6465 22.5262 19.3073 22.2761 19.0573C22.0261 18.8072 21.687 18.6667 21.3333 18.6667ZM21.3333 13.3334H13.3333C12.9797 13.3334 12.6406 13.4739 12.3905 13.7239C12.1405 13.974 12 14.3131 12 14.6667C12 15.0204 12.1405 15.3595 12.3905 15.6096C12.6406 15.8596 12.9797 16.0001 13.3333 16.0001H21.3333C21.687 16.0001 22.0261 15.8596 22.2761 15.6096C22.5262 15.3595 22.6667 15.0204 22.6667 14.6667C22.6667 14.3131 22.5262 13.974 22.2761 13.7239C22.0261 13.4739 21.687 13.3334 21.3333 13.3334ZM26.6667 5.33341H22.6667V4.00008C22.6667 3.64646 22.5262 3.30732 22.2761 3.05727C22.0261 2.80722 21.687 2.66675 21.3333 2.66675C20.9797 2.66675 20.6406 2.80722 20.3905 3.05727C20.1405 3.30732 20 3.64646 20 4.00008V5.33341H17.3333V4.00008C17.3333 3.64646 17.1929 3.30732 16.9428 3.05727C16.6928 2.80722 16.3536 2.66675 16 2.66675C15.6464 2.66675 15.3072 2.80722 15.0572 3.05727C14.8071 3.30732 14.6667 3.64646 14.6667 4.00008V5.33341H12V4.00008C12 3.64646 11.8595 3.30732 11.6095 3.05727C11.3594 2.80722 11.0203 2.66675 10.6667 2.66675C10.313 2.66675 9.97391 2.80722 9.72386 3.05727C9.47381 3.30732 9.33333 3.64646 9.33333 4.00008V5.33341H5.33333C4.97971 5.33341 4.64057 5.47389 4.39052 5.72394C4.14048 5.97399 4 6.31313 4 6.66675V25.3334C4 26.3943 4.42143 27.4117 5.17157 28.1618C5.92172 28.912 6.93913 29.3334 8 29.3334H24C25.0609 29.3334 26.0783 28.912 26.8284 28.1618C27.5786 27.4117 28 26.3943 28 25.3334V6.66675C28 6.31313 27.8595 5.97399 27.6095 5.72394C27.3594 5.47389 27.0203 5.33341 26.6667 5.33341ZM25.3333 25.3334C25.3333 25.687 25.1929 26.0262 24.9428 26.2762C24.6928 26.5263 24.3536 26.6667 24 26.6667H8C7.64638 26.6667 7.30724 26.5263 7.05719 26.2762C6.80714 26.0262 6.66667 25.687 6.66667 25.3334V8.00008H9.33333V9.33342C9.33333 9.68704 9.47381 10.0262 9.72386 10.2762C9.97391 10.5263 10.313 10.6667 10.6667 10.6667C11.0203 10.6667 11.3594 10.5263 11.6095 10.2762C11.8595 10.0262 12 9.68704 12 9.33342V8.00008H14.6667V9.33342C14.6667 9.68704 14.8071 10.0262 15.0572 10.2762C15.3072 10.5263 15.6464 10.6667 16 10.6667C16.3536 10.6667 16.6928 10.5263 16.9428 10.2762C17.1929 10.0262 17.3333 9.68704 17.3333 9.33342V8.00008H20V9.33342C20 9.68704 20.1405 10.0262 20.3905 10.2762C20.6406 10.5263 20.9797 10.6667 21.3333 10.6667C21.687 10.6667 22.0261 10.5263 22.2761 10.2762C22.5262 10.0262 22.6667 9.68704 22.6667 9.33342V8.00008H25.3333V25.3334Z",
  },
  {
    id: 2,
    title: "Analyze",
    description:
      "Crafting clean, thoughtful interfaces where form flows seamlessly into function and clarity.",
    svgPath:
      "M9.33333 21.3334C9.86377 21.3334 10.3725 21.1227 10.7475 20.7476C11.1226 20.3726 11.3333 19.8638 11.3333 19.3334C11.3398 19.2669 11.3398 19.1999 11.3333 19.1334L15.0533 15.4134H15.36H15.6667L17.8133 17.5601C17.8133 17.5601 17.8133 17.6267 17.8133 17.6667C17.8133 18.1972 18.024 18.7059 18.3991 19.081C18.7742 19.456 19.2829 19.6667 19.8133 19.6667C20.3438 19.6667 20.8525 19.456 21.2275 19.081C21.6026 18.7059 21.8133 18.1972 21.8133 17.6667V17.5601L26.6667 12.6667C27.0622 12.6667 27.4489 12.5495 27.7778 12.3297C28.1067 12.1099 28.363 11.7976 28.5144 11.4321C28.6658 11.0667 28.7054 10.6645 28.6282 10.2766C28.5511 9.88861 28.3606 9.53224 28.0809 9.25253C27.8012 8.97283 27.4448 8.78235 27.0568 8.70518C26.6689 8.62801 26.2668 8.66761 25.9013 8.81899C25.5358 8.97036 25.2235 9.22671 25.0037 9.55561C24.784 9.88451 24.6667 10.2712 24.6667 10.6667C24.6602 10.7333 24.6602 10.8002 24.6667 10.8667L19.8533 15.6801H19.64L17.3333 13.3334C17.3333 12.803 17.1226 12.2943 16.7475 11.9192C16.3725 11.5441 15.8638 11.3334 15.3333 11.3334C14.8029 11.3334 14.2942 11.5441 13.9191 11.9192C13.544 12.2943 13.3333 12.803 13.3333 13.3334L9.33333 17.3334C8.8029 17.3334 8.29419 17.5441 7.91912 17.9192C7.54405 18.2943 7.33333 18.803 7.33333 19.3334C7.33333 19.8638 7.54405 20.3726 7.91912 20.7476C8.29419 21.1227 8.8029 21.3334 9.33333 21.3334ZM27.3333 26.6667H4.66667V4.00008C4.66667 3.64646 4.52619 3.30732 4.27614 3.05727C4.02609 2.80722 3.68696 2.66675 3.33333 2.66675C2.97971 2.66675 2.64057 2.80722 2.39052 3.05727C2.14048 3.30732 2 3.64646 2 4.00008V28.0001C2 28.3537 2.14048 28.6928 2.39052 28.9429C2.64057 29.1929 2.97971 29.3334 3.33333 29.3334H27.3333C27.687 29.3334 28.0261 29.1929 28.2761 28.9429C28.5262 28.6928 28.6667 28.3537 28.6667 28.0001C28.6667 27.6465 28.5262 27.3073 28.2761 27.0573C28.0261 26.8072 27.687 26.6667 27.3333 26.6667Z",
  },
  {
    id: 3,
    title: "Design",
    description:
      "I design seamless digital experiences with precision, purpose, and a touch of elegance.",
    svgPath:
      "M29.3333 9.65319C29.3343 9.47772 29.3007 9.30377 29.2343 9.14132C29.168 8.97887 29.0702 8.83111 28.9466 8.70653L23.2933 3.05319C23.1687 2.92962 23.021 2.83185 22.8585 2.7655C22.6961 2.69915 22.5221 2.66551 22.3466 2.66653C22.1712 2.66551 21.9972 2.69915 21.8348 2.7655C21.6723 2.83185 21.5246 2.92962 21.4 3.05319L17.6266 6.82653L3.05331 21.3999C2.92974 21.5244 2.83197 21.6722 2.76562 21.8347C2.69927 21.9971 2.66563 22.1711 2.66665 22.3465V27.9999C2.66665 28.3535 2.80712 28.6926 3.05717 28.9427C3.30722 29.1927 3.64636 29.3332 3.99998 29.3332H9.65331C9.83988 29.3433 10.0265 29.3142 10.2011 29.2475C10.3756 29.1809 10.5343 29.0784 10.6666 28.9465L25.16 14.3732L28.9466 10.6665C29.0683 10.5373 29.1675 10.3886 29.24 10.2265C29.2528 10.1202 29.2528 10.0128 29.24 9.90653C29.2462 9.84446 29.2462 9.78192 29.24 9.71986L29.3333 9.65319ZM9.10665 26.6665H5.33331V22.8932L18.5733 9.65319L22.3466 13.4265L9.10665 26.6665ZM24.2266 11.5465L20.4533 7.77319L22.3466 5.89319L26.1066 9.65319L24.2266 11.5465Z",
  },
  {
    id: 4,
    title: "Launch",
    description:
      "I craft digital products where thoughtful design meets performance-driven, responsive development.",
    svgPath:
      "M28 18.6668H26.6666V9.3335C26.6666 8.27263 26.2452 7.25521 25.4951 6.50507C24.7449 5.75492 23.7275 5.3335 22.6666 5.3335H9.33329C8.27243 5.3335 7.25501 5.75492 6.50487 6.50507C5.75472 7.25521 5.33329 8.27263 5.33329 9.3335V18.6668H3.99996C3.64634 18.6668 3.3072 18.8073 3.05715 19.0574C2.8071 19.3074 2.66663 19.6465 2.66663 20.0002V22.6668C2.66663 23.7277 3.08805 24.7451 3.8382 25.4953C4.58834 26.2454 5.60576 26.6668 6.66663 26.6668H25.3333C26.3942 26.6668 27.4116 26.2454 28.1617 25.4953C28.9119 24.7451 29.3333 23.7277 29.3333 22.6668V20.0002C29.3333 19.6465 29.1928 19.3074 28.9428 19.0574C28.6927 18.8073 28.3536 18.6668 28 18.6668ZM7.99996 9.3335C7.99996 8.97987 8.14044 8.64074 8.39048 8.39069C8.64053 8.14064 8.97967 8.00016 9.33329 8.00016H22.6666C23.0202 8.00016 23.3594 8.14064 23.6094 8.39069C23.8595 8.64074 24 8.97987 24 9.3335V18.6668H7.99996V9.3335ZM26.6666 22.6668C26.6666 23.0205 26.5262 23.3596 26.2761 23.6096C26.0261 23.8597 25.6869 24.0002 25.3333 24.0002H6.66663C6.313 24.0002 5.97387 23.8597 5.72382 23.6096C5.47377 23.3596 5.33329 23.0205 5.33329 22.6668V21.3335H26.6666V22.6668Z",
  },
];

const DEFAULT_SERVICES = [
  {
    name: "UI/UX Design",
    description:
      "Design meets function in every pixel, blending clarity with intuitive motion.",
    icon: "",
  },
  {
    name: "Development",
    description:
      "Crafting clean, thoughtful interfaces where form flows seamlessly into function.",
    icon: "",
  },
];

const DEFAULT_ROLES = [
  {
    title: "User Experience (UX)",
    description:
      "I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.",
  },
  {
    title: "User Interface (UI)",
    description:
      "I craft visually appealing and consistent interfaces, focusing on layout, color, and typography to ensure a seamless and engaging user journey.",
  },
  {
    title: "Web Development",
    description:
      "I build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.",
  },
];

const DEFAULT_BLOGS = [
  {
    title: "Sample post",
    description: "Add your blogs in the dashboard to show here.",
    icon: "",
    date: "22 Oct, 2020",
    link: "#",
  },
];

const DEFAULT_TESTIMONIALS = [
  {
    name: "Client One",
    role: "Manager",
    quote: "Professional and creative. Highly recommend.",
    message: "Working with this team was a fantastic experience.",
  },
];

const DEFAULT_PORTFOLIO = [
  {
    title: "Product Admin Dashboard",
    category: "UI-UX DESIGN",
    description:
      "I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.",
    link: "#",
  },
  {
    title: "Product Admin Dashboard",
    category: "UI-UX DESIGN",
    description:
      "Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.",
    link: "#",
  },
  {
    title: "Product Admin Dashboard",
    category: "UI-UX DESIGN",
    description:
      "Developed a modern admin panel with a focus on usability and seamless navigation.",
    link: "#",
  },
];

type Props = {
  card?: PictoTemplateCard | null;
  slug?: string;
  baseUrl?: string;
  onDownloadVCard?: () => void;
};

export function PictoTemplate({
  card,
  slug,
  baseUrl = "",
  onDownloadVCard,
}: Props) {
  const name = card?.title || "Your Name";
  const occupation = card?.occupation || card?.tagline || "UI/UX Designer";
  const description =
    card?.description ||
    "I'm a Freelance UI/UX Designer and Developer. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.";
  const stats =
    (card as any)?.stats && (card as any).stats.length > 0
      ? (card as any).stats
      : DEFAULT_STATS;
  const services =
    card?.services && card.services.length > 0 ? card.services : DEFAULT_SERVICES;
  const roles =
    (card as any)?.roles && (card as any).roles.length > 0
      ? (card as any).roles
      : DEFAULT_ROLES;
  const blogs =
    card?.blogs && card.blogs.length > 0 ? card.blogs : DEFAULT_BLOGS;
  const testimonials =
    (card as any)?.testimonials && (card as any).testimonials.length > 0
      ? (card as any).testimonials
      : DEFAULT_TESTIMONIALS;
  const portfolio =
    (card as any)?.portfolio && (card as any).portfolio.length > 0
      ? (card as any).portfolio
      : DEFAULT_PORTFOLIO;
  const workTogetherTitle =
    (card as any)?.workTogetherTitle ||
    "Do you have a Project Idea? Let's discuss your project!";
  const workTogetherSubtitle =
    (card as any)?.workTogetherSubtitle ||
    "I'm always open to discussing new projects and creative ideas. Let's connect and build something amazing together.";
  const clientLogos = (card as any)?.clientLogos as string[] | undefined;
  const happyClientsText =
    (card as any)?.happyClientsText ||
    "I've had the pleasure of working with a diverse range of companies, from startups to established brands.";

  return (
    <div className="min-h-screen bg-[#f0f1f3] flex justify-center px-4 py-6 sm:py-10">
      <div className="font-sans text-base text-[#132238] bg-white min-h-full w-full max-w-[540px] rounded-[32px] shadow-2xl overflow-hidden relative">
        {/* ========== Introduction (Picto style with gradient + info summary) ========== */}
        <section
          className="relative pt-10 pb-6 px-4"
          id="introduction"
          style={{
            background:
              "radial-gradient(circle at 12% 100%, #ffe2b0f5 1% 5px, transparent 15%), radial-gradient(circle at 95% -15%, #da4df166 5%, transparent 30%), radial-gradient(circle at center right, #c4f5e9b2 2%, transparent 35%)",
          }}
        >
          <div className="max-w-xl mx-auto flex flex-col gap-6">
            <div>
              <p className="text-2xl sm:text-3xl font-semibold text-[#132238]">
                Hello, I&apos;m{" "}
                <span
                  className="inline-block bg-[linear-gradient(to_top,#ffc8c8_40%,transparent_40%)] px-0.5"
                  style={{ backgroundSize: "100% 100%" }}
                >
                  {name}
                </span>
              </p>
              <p className="text-sm sm:text-base mt-4 text-gray-600">
                {description}
              </p>
              <p className="mt-6 text-center sm:text-left">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded px-6 py-2.5 text-sm font-medium text-white bg-[#9929fb] hover:bg-[#650fa0] transition-all duration-300 hover:scale-[1.02]"
                >
                  Say Hello!
                </a>
              </p>
            </div>
            {/* Information summary boxes (Experience, Projects, Happy Clients) */}
            <div className="grid grid-cols-3 gap-2 w-fit mx-auto sm:mx-0">
              {stats.map((item: { title: string; value: string }, idx: number) => (
                <div
                  key={idx}
                  className="bg-[#F6EBFE] text-center rounded-lg py-4 px-2 sm:px-4"
                >
                  <p className="text-base sm:text-xl font-semibold text-gray-700">
                    {item.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Profile (About) ========== */}
        <section
          className="relative -mt-8 z-10 px-4 pb-10"
          id="profile"
        >
          <div className="rounded-2xl bg-white shadow-xl border border-gray-100 p-6 sm:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-40 h-48 rounded-xl overflow-hidden bg-[#f0f1f3] shrink-0">
                {card?.image ? (
                  <Image
                    src={card.image}
                    alt={name}
                    width={160}
                    height={192}
                    className="w-full h-full object-cover"
                    unoptimized={card.image.startsWith("data:")}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-[#9929fb]">
                    {name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#132238] mb-2">
                  I am Professional User Experience Designer
                </h2>
                <p className="text-sm text-gray-600">{description}</p>
                <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                  <a
                    href="#portfolio"
                    className="inline-flex items-center justify-center rounded px-5 py-2.5 text-sm font-medium text-white bg-[#9929fb] hover:bg-[#650fa0] transition-colors"
                  >
                    My Projects
                  </a>
                  {onDownloadVCard && (
                    <button
                      type="button"
                      onClick={onDownloadVCard}
                      className="inline-flex items-center gap-2 rounded px-5 py-2.5 text-sm font-medium border-2 border-[#9929fb] text-[#9929fb] hover:bg-[#9929fb] hover:text-white transition-colors"
                    >
                      <Download className="size-4" />
                      Download CV
                    </button>
                  )}
                </div>
              </div>
            </div>
            {card?.socialLinks &&
              card.socialLinks.filter((l) => l.url?.trim()).length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-3">
                  {card.socialLinks
                    .filter((l) => l.url?.trim())
                    .map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-[#f0f1f3] flex items-center justify-center text-[#132238] hover:bg-[#9929fb] hover:text-white text-xs font-semibold transition-colors"
                      >
                        {link.platform.charAt(0).toUpperCase()}
                      </a>
                    ))}
                </div>
              )}
          </div>
        </section>

        {/* ========== Work Process ========== */}
        <section
          className="px-4 py-10 bg-[#f0f1f3]"
          id="work-process"
        >
          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#132238] text-center mb-2">
              Work Process
            </h3>
            <p className="text-sm text-gray-500 text-center mb-8">
              Driven by design and powered by code. Every layout and component
              is crafted with intention.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {WORK_PROCESS_STEPS.map((step, idx) => (
                <div
                  key={step.id}
                  className="rounded-xl bg-white p-4 sm:p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EDD8FF80] hover:bg-[#9929fb] rounded-md flex items-center justify-center transition-colors duration-300">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#A53DFF]"
                    >
                      <path d={step.svgPath} fill="currentColor" />
                    </svg>
                  </div>
                  <p className="mt-3 font-semibold text-[#132238]">
                    {step.id}. {step.title}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-gray-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Portfolio ========== */}
        <section className="px-4 py-10" id="portfolio">
          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#132238] text-center mb-2">
              Portfolio
            </h3>
            <p className="text-sm text-gray-500 text-center mb-8">
              Here&apos;s a selection of my recent work, showcasing my skills in
              creating user-centric and visually appealing interfaces.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {portfolio.map((project: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  {project.image ? (
                    <div className="aspect-video bg-gray-100 relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-[#f0f1f3] flex items-center justify-center text-[#9929fb] font-bold text-lg">
                      {idx + 1}
                    </div>
                  )}
                  <div className="p-4">
                    <p className="text-xs text-gray-400 font-medium">
                      {project.category || "Project"}
                    </p>
                    <p className="text-base font-semibold text-[#132238] mt-1 mb-2">
                      {project.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {project.description || "Professional project."}
                    </p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#9929fb] hover:underline"
                      >
                        Case Study <ArrowRight className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded px-6 py-3 text-sm font-semibold text-white bg-[#9929fb] hover:bg-[#650fa0] transition-colors"
              >
                More Project
              </a>
            </p>
          </div>
        </section>

        {/* ========== Work Together (dark CTA) ========== */}
        <section className="px-4 py-10 bg-gray-900 rounded-2xl mx-4 my-4">
          <div className="text-center max-w-xl mx-auto">
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold pb-4">
              {workTogetherTitle}
            </p>
            <p className="text-gray-400 text-sm sm:text-base pb-6">
              {workTogetherSubtitle}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-semibold text-white bg-[#9929fb] hover:bg-[#650fa0] transition-colors"
            >
              Let&apos;s work Together
              <ArrowRight className="size-5" />
            </a>
          </div>
        </section>

        {/* ========== Blog ========== */}
        <section className="px-4 py-10 bg-[#f0f1f3]" id="blog">
          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#132238] text-center mb-2">
              Blog
            </h3>
            <p className="text-sm text-gray-500 text-center mb-8">
              Check out my recent blog posts where I share insights on design,
              development, and the latest industry trends.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {blogs.map((b: any, idx: number) => (
                <a
                  key={idx}
                  href={b.link || "#"}
                  className="rounded-xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow block"
                >
                  {b.icon ? (
                    <div className="aspect-video bg-gray-100 relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={b.icon}
                        alt={b.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-[#f0f1f3] flex items-center justify-center">
                      <FileText className="size-10 text-[#9929fb]" />
                    </div>
                  )}
                  <div className="p-4">
                    {b.date && (
                      <p className="text-xs text-gray-400">{b.date}</p>
                    )}
                    <h4 className="font-semibold text-[#132238] mt-1">
                      {b.title}
                    </h4>
                    {b.description && (
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                        {b.description}
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Profession / What I do? ========== */}
        <section className="px-4 py-10" id="services">
          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#132238] text-center mb-2">
              {card?.serviceTitle || "What I do?"}
            </h3>
            <p className="text-sm text-gray-500 text-center mb-8">
              {card?.serviceSubtitle || "I specialize in designing user experiences, crafting engaging interfaces, and building robust web applications."}
            </p>
            <div className="space-y-4">
              {(card?.services && card.services.length > 0
                ? card.services
                : DEFAULT_ROLES
              ).map((role: any, idx: number) => (
                <div
                  key={idx}
                  className="p-4 sm:p-6 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow flex relative overflow-hidden group items-center gap-4"
                >
                  <span
                    className="absolute left-0 top-0 w-0 h-full group-hover:w-1 bg-[#9929fb] transition-all duration-200"
                    style={{ height: "100%" }}
                  />
                  {role.icon && (
                    <div className="h-12 w-12 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                      <img src={role.icon} alt={role.name || role.title} className="h-full w-full object-cover" />
                    </div>
                  )}
                  <div className="flex-grow">
                    <p className="text-lg sm:text-xl font-semibold text-[#132238] pb-1 group-hover:text-[#9929fb] transition-colors">
                      {role.name || role.title}
                    </p>
                    {role.description && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {role.description}
                      </p>
                    )}
                    {role.url && (
                      <a
                        href={role.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-[11px] font-semibold text-[#9929fb] hover:underline"
                      >
                        Details →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded px-6 py-2.5 text-sm font-medium text-white bg-[#9929fb] hover:bg-[#650fa0] transition-colors"
              >
                Say Hello!
              </a>
            </p>
          </div>
        </section>

        {/* ========== Happy Clients ========== */}
        <section className="px-4 py-10 bg-[#f0f1f3]">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#132238] mb-2">
              Happy Clients
            </h3>
            <p className="text-sm text-gray-500 mb-6">{happyClientsText}</p>
            {clientLogos && clientLogos.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-6 items-center">
                {clientLogos.map((logoUrl, idx) => (
                  <div
                    key={idx}
                    className="h-8 w-20 bg-gray-200 rounded flex items-center justify-center overflow-hidden"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logoUrl}
                      alt=""
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic">
                Add client logos in the dashboard to display here.
              </p>
            )}
          </div>
        </section>

        {/* ========== Testimonial ========== */}
        <section className="px-4 py-10" id="testimonial">
          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#132238] text-center mb-2">
              Testimonial
            </h3>
            <p className="text-sm text-gray-500 text-center mb-8">
              What people say about working with me.
            </p>
            <div className="space-y-6">
              {testimonials.map((t: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 text-center"
                >
                  {t.message && (
                    <p className="text-sm text-gray-500 mb-4">{t.message}</p>
                  )}
                  <p className="text-gray-600 italic">&quot;{t.quote}&quot;</p>
                  <p className="mt-4 font-semibold text-[#132238]">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Contact ========== */}
        <section
          className="px-4 py-10 rounded-b-[32px] bg-[#f0f1f3]"
          id="contact"
        >
          <div className="max-w-xl mx-auto rounded-2xl bg-white shadow-xl border border-gray-100 p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#132238] mb-2">
              Let&apos;s discuss your Project
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              I&apos;m available for freelance work. Drop me a line if you have
              a project you think I&apos;d be a good fit for.
            </p>
            <div className="space-y-4">
              {card?.email && (
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded bg-[#EDD8FF80] flex items-center justify-center shrink-0">
                    <Mail className="size-5 text-[#9929fb]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href={`mailto:${card.email}`}
                      className="text-[#132238] font-medium hover:text-[#9929fb]"
                    >
                      {card.email}
                    </a>
                  </div>
                </div>
              )}
              {card?.phone && (
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded bg-[#EDD8FF80] flex items-center justify-center shrink-0">
                    <Phone className="size-5 text-[#9929fb]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Phone
                    </p>
                    <a
                      href={`tel:${card.phone}`}
                      className="text-[#132238] font-medium hover:text-[#9929fb]"
                    >
                      {card.phone}
                    </a>
                  </div>
                </div>
              )}
              {card?.address && (
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded bg-[#EDD8FF80] flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-[#9929fb]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Address
                    </p>
                    <p className="text-[#132238]">{card.address}</p>
                  </div>
                </div>
              )}
            </div>
            {card?.website && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a
                  href={
                    card.website.startsWith("http")
                      ? card.website
                      : `https://${card.website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9929fb] font-medium hover:underline"
                >
                  Official Website
                </a>
              </div>
            )}
            {card?.socialLinks &&
              card.socialLinks.filter((l) => l.url?.trim()).length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-3">
                  {card.socialLinks
                    .filter((l) => l.url?.trim())
                    .map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-[#f0f1f3] flex items-center justify-center text-[#132238] hover:bg-[#9929fb] hover:text-white text-xs font-semibold"
                      >
                        {link.platform.charAt(0).toUpperCase()}
                      </a>
                    ))}
                </div>
              )}
          </div>
        </section>
      </div>
    </div>
  );
}
