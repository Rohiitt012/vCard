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

// Dennis Tailwind CSS Personal Portfolio – full template with Dennis classes (container, btn, navbar, etc.)
export function FloralVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "Dennis Scott";
  const role = card.occupation || card.tagline || "Website Designer · Web Developer";
  const description =
    card.description ||
    "Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.";
  const aboutText =
    (card as { about?: string }).about ||
    "Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development cycle for dynamic web projects. I'm a professional web designer. My motive is to build a best web design with my all years of experience.";

  const primaryColor = card.templatePrimaryColor || "#f59e0b"; // amber-500

  const hobbies = [
    "Developing",
    "Mac OS",
    "Cinema",
    "Coffee",
    "Music",
    "Games",
    "Designing",
    "Sports",
    "Painting",
    "Reading",
    "Android",
    "Other Activity",
  ];

  const services = [
    { title: "UX / UI Design", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
    { title: "Ios App Designer", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
    { title: "Photography", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
    { title: "Graphic Designer", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
    { title: "Web Security", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
    { title: "24 / 7", desc: "The phrasal sequence of the is now so that many campaign and benefit" },
  ];

  const experience = [
    { company: "Facebook", years: "2019-21", role: "UX / UI Designer" },
    { company: "Google Tech.", years: "2018-19", role: "Sr. UX / UI Designer" },
    { company: "Lenovo Ltd.", years: "2016-18", role: "Jr. UX / UI Designer" },
    { company: "Circle CI", years: "2015-16", role: "Front-end Web Designer" },
  ];

  const defaultBlogs = [
    { id: "1", title: "Giglink: Tailwind CSS NFT Marketplace Template", description: "The phrasal sequence of the is now so that many campaign and benefit", icon: "" },
    { id: "2", title: "Techwind: Tailwind CSS Multipurpose Template", description: "The phrasal sequence of the is now so that many campaign and benefit", icon: "" },
    { id: "3", title: "Upwind: Tailwind CSS Landing Page Template", description: "The phrasal sequence of the is now so that many campaign and benefit", icon: "" },
  ];
  const blogs = (card.blogs && card.blogs.length > 0) ? card.blogs : defaultBlogs;

  const email = card.email || "contact@example.com";
  const phone = card.phone || "+152 534-468-854";
  const address = card.address || "C/54 Northwest Freeway, Suite 558, Houston, USA 485";

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#service", label: "Services" },
    { href: "#experience", label: "Experience" },
    { href: "#project", label: "Projects" },
    { href: "#blog", label: "Blogs" },
    { href: "#contact", label: "Contact Me" },
  ];

  return (
    <div className="dennis-floral-template w-full max-w-[540px] mx-auto sm:my-8 overflow-hidden min-h-screen text-base text-slate-900 bg-white dark:bg-slate-900 sm:rounded-[32px] sm:shadow-[0_24px_80px_rgba(0,0,0,0.2)] border border-slate-200 relative">
      {/* Navbar – Dennis structure with .navbar, .container, .navbar-nav, .nav-link, .btn */}
      <nav className="navbar absolute top-0 w-full z-30 border-b border-slate-200 bg-white dark:bg-slate-900" id="navbar">
        <div className="container flex flex-wrap items-center justify-between">
          <a className="navbar-brand md:me-8 text-xl font-semibold" href="#home" style={{ color: primaryColor }}>
            {name.split(" ")[0] || "Portfolio"}
          </a>
          <div className="nav-icons flex items-center ms-auto md:ms-8 gap-2">
            <ul className="list-none menu-social mb-0 flex items-center gap-2">
              {card.socialLinks?.slice(0, 3).map((link) => (
                <li key={link.platform} className="inline-block hover:scale-110 transition-transform">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-white"
                    title={link.platform}
                  >
                    <SocialCircleIcon platform={link.platform} />
                  </a>
                </li>
              ))}
            </ul>
            <div className="navigation flex ms-2">
              <ul className="navbar-nav flex flex-wrap gap-0">
                {navLinks.map((item) => (
                  <li key={item.href} className="nav-item">
                    <a className="nav-link py-3 px-3" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onDownloadVCard?.()}
              className="btn btn-sm rounded-md text-white ms-2"
              style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
            >
              Download CV
            </button>
          </div>
        </div>
      </nav>

      {/* Hero – Dennis: .personal-wrapper, .container, .btn */}
      <section className="relative pt-28 personal-wrapper overflow-hidden bg-amber-500/5" id="home">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div>
              <h4 className="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal mb-4">
                Hey! I&apos;m <br />
                <span style={{ color: primaryColor }}>{name}</span>
              </h4>
              <p className="text-slate-400 max-w-xl">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => onDownloadVCard?.()}
                  className="btn rounded-md text-white"
                  style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
                >
                  Hire Me
                </button>
                <button
                  type="button"
                  onClick={() => onDownloadVCard?.()}
                  className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 rounded-md ms-1"
                  style={{ color: primaryColor }}
                >
                  Download CV
                </button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl shadow-gray-200 dark:shadow-gray-800 bg-slate-200 border-4 border-white dark:border-slate-800">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="320px"
                    unoptimized={card.image.startsWith("data:")}
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-5xl font-semibold text-slate-600 dark:text-slate-400">
                    {name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="absolute lg:bottom-20 md:bottom-10 bottom-2 left-2 md:-left-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                <span className="text-3xl font-medium mb-0" style={{ color: primaryColor }}>125+</span>
                <h6 className="text-sm text-slate-400 mt-1">Project Completed</h6>
              </div>
              <div className="absolute lg:top-80 md:top-56 top-48 right-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                <h6 className="font-semibold">{role.split("·")[0]?.trim() || "Web Designer"}</h6>
                <h6 className="text-sm text-slate-400 mt-1">7+ Years Experience</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="absolute block w-full h-auto bottom-[25px] z-[1] left-0">
          <a href="#about" className="inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 size-12 mx-auto shadow-md dark:shadow-gray-800 text-slate-600 dark:text-slate-300">
            ↓
          </a>
        </div>
      </div>

      {/* About – Dennis: .container, grid, rounded-full, .btn */}
      <section className="relative md:py-24 py-16" id="about">
        <div className="container">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 lg:px-8">
              <div className="relative">
                <div className="absolute inset-0 border border-gray-200 dark:border-gray-800 rounded-full -mt-[10px] -ms-3 h-[100%] w-[100%] -z-10" />
                <div className="relative w-full aspect-square max-w-sm mx-auto rounded-full overflow-hidden shadow-md shadow-gray-200 dark:shadow-gray-800 bg-slate-200">
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt={name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full rounded-full"
                      unoptimized={card.image.startsWith("data:")}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl font-semibold text-slate-600 dark:text-slate-400 rounded-full">
                      {name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="absolute lg:bottom-20 md:bottom-10 bottom-6 -right-4 md:-right-8 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                  <h6 className="font-semibold">Web Designer</h6>
                  <span className="text-2xl font-medium mb-0" style={{ color: primaryColor }}>7+</span>
                  <span className="text-sm text-slate-400"> Years Experience</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="lg:ms-5">
                <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                  I&apos;m a Passionate Web Designer
                </h3>
                <p className="text-slate-400 max-w-xl text-[15px]">{aboutText}</p>
                <div className="mt-6">
                  <a
                    href="#project"
                    className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 rounded-md"
                    style={{ color: primaryColor }}
                  >
                    See Work
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                Hobbies &amp; Expertise
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto text-[15px]">{description}</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
              {hobbies.map((item) => (
                <div
                  key={item}
                  className="flex group shadow-sm shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900"
                >
                  <div
                    className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 rounded-xl me-5 transition-all duration-500"
                    style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
                  >
                    <span className="rotate-45 text-lg">★</span>
                  </div>
                  <h4 className="mb-0 text-[17px] font-medium">{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services – What do i offer? Dennis: .container, shadow-sm, rounded-2xl */}
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="service">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
              {card.serviceTitle || "What do i offer?"}
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
              {card.serviceSubtitle || description}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {(card.services && card.services.length > 0
              ? card.services
              : [
                  { name: "UX / UI Design", description: "The phrasal sequence of the is now so that many campaign and benefit" },
                  { name: "Ios App Designer", description: "The phrasal sequence of the is now so that many campaign and benefit" },
                  { name: "Photography", description: "The phrasal sequence of the is now so that many campaign and benefit" },
                  { name: "Graphic Designer", description: "The phrasal sequence of the is now so that many campaign and benefit" },
                  { name: "Web Security", description: "The phrasal sequence of the is now so that many campaign and benefit" },
                  { name: "24 / 7", description: "The phrasal sequence of the is now so that many campaign and benefit" },
                ]
            ).map((s: any, idx: number) => (
              <div
                key={s.id || idx}
                className="px-6 py-10 shadow-sm shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900"
              >
                <div
                  className="size-10 flex items-center justify-center text-xl rounded-lg overflow-hidden"
                  style={{ color: primaryColor }}
                >
                  {s.icon ? (
                    <img src={s.icon} alt={s.name} className="h-full w-full object-cover" />
                  ) : (
                    <span>✦</span>
                  )}
                </div>
                <div className="content mt-7">
                  <h5 className="text-[17px] font-medium hover:opacity-80" style={{ color: primaryColor }}>
                    {s.name}
                  </h5>
                  <p className="text-slate-400 mt-3 text-[15px]">{s.description}</p>
                  {s.url && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-[13px] font-semibold hover:underline"
                      style={{ color: primaryColor }}
                    >
                      Read More →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freelancer CTA – Dennis: full width bg with overlay */}
      <section className="py-20 w-full table relative bg-slate-900">
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-2xl text-xl text-white font-semibold">
              I Am Available For Freelancer Projects.
            </h3>
            <p className="text-white/80 max-w-xl mx-auto text-[15px]">{description}</p>
            <div className="relative mt-8">
              <button
                type="button"
                onClick={() => onDownloadVCard?.()}
                className="btn rounded-md text-white"
                style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience – Dennis timeline */}
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="experience">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
              Work Experience
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto text-[15px]">{description}</p>
          </div>
          <div className="grid grid-cols-1 mt-8">
            <div className="relative ms-8 md:ms-0">
              {/* Vertical line */}
              <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-px w-px h-full border-l-2 border-dashed border-gray-200 dark:border-gray-700" />
              {experience.map((item, i) => (
                <div
                  key={item.company}
                  className="relative pl-4 md:pl-0 mb-12 first:mt-0"
                  style={i > 0 ? { marginTop: "0" } : {}}
                >
                  {/* Dot */}
                  <div
                    className="absolute top-[9px] left-0 w-2.5 h-2.5 rounded-full z-10 md:left-1/2 md:-translate-x-1/2 -translate-x-[calc(0.625rem+2px)]"
                    style={{ backgroundColor: primaryColor }}
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className={`relative ${i % 2 === 1 ? "md:order-2 md:text-start md:ms-8" : "md:text-end md:me-8"}`}>
                      <h5 className="my-2 font-semibold text-lg">{item.company}</h5>
                      <h6 className="text-sm mb-0 text-slate-400">{item.years}</h6>
                    </div>
                    <div className={`md:ms-8 mt-6 md:mt-0 ${i % 2 === 1 ? "md:order-1 md:text-end md:me-8" : "text-start"}`}>
                      <h5 className="title mb-1 font-semibold">{item.role}</h5>
                      <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                        The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects – My Work & Projects */}
      <section className="relative md:py-24 py-16" id="project">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
              My Work &amp; Projects
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto text-[15px]">{description}</p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div
                key={n}
                className="relative group overflow-hidden rounded-lg shadow-sm shadow-slate-200 dark:shadow-gray-800"
              >
                <div className="aspect-video bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 text-sm">
                  Project {n}
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-slate-900 transition-all duration-500" />
                <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                  <span className="text-white hover:opacity-80 font-semibold transition-all duration-500" style={{ color: "inherit" }}>
                    Project Title {n}
                  </span>
                  <span className="block text-sm text-slate-400">UI / UX Design</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs – Dennis: .blog, rounded-lg */}
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="blog">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
              Blogs or News
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto text-[15px]">{description}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-8">
            {blogs.slice(0, 3).map((b) => (
              <article
                key={b.id}
                className="blog relative rounded-lg shadow-sm shadow-slate-200 dark:shadow-gray-800 overflow-hidden bg-white dark:bg-slate-900"
              >
                <div className="aspect-video bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400 text-sm">
                  Blog
                </div>
                <div className="content p-6">
                  <h5
                    className="text-[17px] hover:opacity-80 transition duration-500 ease-in-out font-medium"
                    style={{ color: primaryColor }}
                  >
                    {b.title}
                  </h5>
                  <p className="text-slate-400 mt-3 text-[15px]">{b.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact – Get In Touch */}
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
              Get In Touch !
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto text-[15px]">{description}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
            <div className="lg:col-span-8">
              <div className="p-6 rounded-md shadow-sm bg-white dark:bg-slate-900">
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                  Use the form on the main site or contact directly below.
                </p>
                <a
                  href={`mailto:${email}`}
                  className="btn rounded-md text-white"
                  style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
                >
                  Email Me
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 lg:ms-8">
              <div className="flex gap-4">
                <div className="text-2xl" style={{ color: primaryColor }}>📞</div>
                <div className="flex-1 ms-6">
                  <h5 className="text-[17px] dark:text-white mb-2 font-medium">Phone</h5>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-slate-400 text-[15px]">{phone}</a>
                </div>
              </div>
              <div className="flex mt-4 gap-4">
                <div className="text-2xl" style={{ color: primaryColor }}>✉</div>
                <div className="flex-1 ms-6">
                  <h5 className="text-[17px] dark:text-white mb-2 font-medium">Email</h5>
                  <a href={`mailto:${email}`} className="text-slate-400 text-[15px]">{email}</a>
                </div>
              </div>
              <div className="flex mt-4 gap-4">
                <div className="text-2xl" style={{ color: primaryColor }}>📍</div>
                <div className="flex-1 ms-6">
                  <h5 className="text-[17px] dark:text-white mb-2 font-medium">Location</h5>
                  <p className="text-slate-400 text-[15px] mb-2">{address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer – Dennis */}
      <footer className="footer bg-slate-800 dark:bg-gray-900 relative text-gray-200 dark:text-gray-200">
        <div className="py-[30px] px-0 border-t border-slate-800">
          <div className="container text-center">
            <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
              <div className="lg:col-span-3 md:text-start text-center">
                <a href="#home" className="text-[22px] focus:outline-none font-semibold" style={{ color: primaryColor }}>
                  {name.split(" ")[0]}
                </a>
              </div>
              <div className="lg:col-span-5 text-center mt-6 md:mt-0">
                <p className="mb-0">
                  © {new Date().getFullYear()} {name.split(" ")[0]}. Profile:{" "}
                  <a href={`${baseUrl}/${slug}`} className="underline" style={{ color: primaryColor }}>
                    {baseUrl}/{slug}
                  </a>
                </p>
              </div>
              {card.socialLinks && card.socialLinks.length > 0 && (
                <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0 flex justify-center md:justify-end gap-2 items-center">
                  {card.socialLinks.map((link) => (
                    <li key={link.platform} className="inline-block hover:scale-110 transition-transform">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex"
                        title={link.platform}
                      >
                        <SocialCircleIcon platform={link.platform} />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top – Dennis .back-to-top */}
      <a
        href="#home"
        className="back-to-top fixed text-lg rounded-full z-10 bottom-5 right-5 size-9 text-center text-white leading-9 items-center justify-center hidden md:flex"
        style={{ backgroundColor: primaryColor }}
      >
        ↑
      </a>
    </div>
  );
}
