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

// Borox – Tailwind CSS Personal Portfolio (CSS + Tailwind for colors & fonts). Used for Legal vCard.
export function LegalVCardTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "Isabelle Ryal";
  const role = card.occupation || card.tagline || "Web Developer";
  const description =
    card.description ||
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ratione eligendi expedita!";
  const services = [
    { num: "01", title: "Graphics design", desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
    { num: "02", title: "Development", desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
    { num: "03", title: "SEO Friendly", desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
  ];

  const education = [
    { date: "June 15, 2013 - 2016", title: "Master in Computer Engineering", sub: "First Class", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." },
    { date: "June 12, 2010 - 2013", title: "Bachelor in Computer Engineering", sub: "First Class", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." },
  ];

  const experience = [
    { date: "March 12, 2020", title: "Envato", sub: "Team Leader", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." },
    { date: "January 23, 2018 - 2020", title: "Facebook Company", sub: "Sr. Developer", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." },
  ];

  const blogs = (card.blogs && card.blogs.length > 0) ? card.blogs.slice(0, 3) : [
    { id: "1", title: "Lorem ipsum dolor sit amet.", description: "By Admin – 04 Comments", icon: "" },
    { id: "2", title: "Lorem ipsum dolor sit amet.", description: "By Admin – 04 Comments", icon: "" },
    { id: "3", title: "Lorem ipsum dolor sit amet.", description: "By Admin – 04 Comments", icon: "" },
  ];

  const fullName = card.title || "Richard Lord";
  const age = card.birthDate ? `${new Date().getFullYear() - new Date(card.birthDate).getFullYear()} Years` : "30 Years";
  const phone = card.phone || "+00 987654321";
  const email = card.email || "example@example.com";
  const address = card.address || "Ruami mellow moraes, Salvador, Brazil";

  return (
    <div className="borox-template w-full max-w-[540px] mx-auto sm:my-8 overflow-x-hidden sm:rounded-[32px] sm:shadow-[0_24px_80px_rgba(0,0,0,0.2)] border border-slate-200 relative bg-white">
      {/* Loader – hide after mount */}
      <div id="bx-overlay" className="borox-loaded opacity-0 pointer-events-none" aria-hidden="true">
        <span className="loader" />
      </div>

      {/* Header – Borox CSS + Tailwind (colors: borox-bg, borox-primary) */}
      <header className="borox-bg bg-borox-bg w-full bx-static">
        <nav className="border-gray-200 py-2">
          <div className="flex flex-wrap justify-between items-center px-6 mx-auto bx-container max-[320px]:px-[12px]">
            <a href="#home" className="flex items-center text-xl font-bold borox-text-primary text-borox-primary">
              {name.split(" ")[0] || "Legal"}
            </a>
            <div className="flex items-center lg:order-2">
              <button
                type="button"
                onClick={() => onDownloadVCard?.()}
                className="bg-borox-primary text-white font-medium rounded-full text-sm px-8 py-2.5 mr-2 hidden 2xl:block xl:block lg:block hover:opacity-80"
                style={card.templatePrimaryColor ? { backgroundColor: card.templatePrimaryColor } : undefined}
              >
                Get a quote
              </button>
              <button
                type="button"
                className="inline-flex items-center border p-2 text-lg text-gray-500 rounded-lg lg:hidden"
                aria-label="Menu"
              >
                ☰
              </button>
            </div>
            <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1 hidden lg:block" id="mobile-menu">
              <ul
                className="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:p-0 lg:border-0 lg:rounded-0 lg:text-[15px] border border-borox-border-light rounded-[30px] p-[15px] text-[13px] lg:border-none"
                id="top-menu"
              >
                <li className="nav-item active">
                  <a href="#home" className="block py-2 pr-4 pl-3 text-borox-text lg:p-0">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="block py-2 pr-4 pl-3 text-borox-text lg:p-0">About</a>
                </li>
                <li className="nav-item">
                  <a href="#experience" className="block py-2 pr-4 pl-3 text-borox-text lg:p-0">Experience</a>
                </li>
                <li className="nav-item">
                  <a href="#portfolio" className="block py-2 pr-4 pl-3 text-borox-text lg:p-0">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a href="#news" className="block py-2 pr-4 pl-3 text-borox-text lg:p-0">News</a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="block py-2 pr-4 pl-3 text-borox-text lg:p-0">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero – Borox CSS + Tailwind (bg-borox-bg, text-borox-primary, text-dark-800) */}
      <section id="home" className="section-hero borox-bg bg-borox-bg relative">
        <div className="flex flex-wrap justify-between items-center mx-auto bx-container py-[80px] px-4">
          <div className="w-full 2xl:h-[90vh] lg:h-[80vh] h-[70vh] max-[320px]:h-[50vh] flex items-center px-2 2xl:max-w-lg xl:max-w-lg lg:max-w-lg lg:w-1/2 lg:mx-0 md:max-w-lg md:w-1/2 md:mx-0 2xl:w-1/2 xl:w-1/2 sm:items-center">
            <div className="text-center 2xl:text-left xl:text-left lg:text-left md:text-left h-72 borox-font-body">
              <span className="text-[18px] font-bold borox-text-primary text-borox-primary">Hello, My name is</span>
              <h1 className="text-dark-800 borox-font-heading 2xl:text-[60px] xl:text-[55px] lg:text-[50px] md:text-[45px] text-[40px] font-bold">
                {name}
              </h1>
        
          {card.socialLinks && card.socialLinks.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 no-print w-full relative z-10 py-2">
              {card.socialLinks.map((link, idx) => (
                <SocialCircleIcon key={idx} platform={link.platform} url={link.url} size={40} />
              ))}
            </div>
          )}
              <h2 className="py-4 text-dark-800 text-[20px] font-bold">I&apos;m {role}</h2>
              <p className="pt-2 borox-text-muted text-borox-text-muted text-base">{description}</p>
              <button
                type="button"
                onClick={() => onDownloadVCard?.()}
                className="bg-borox-primary text-white mt-8 font-medium rounded-full text-sm px-8 py-2.5 mr-2 hover:opacity-80"
                style={card.templatePrimaryColor ? { backgroundColor: card.templatePrimaryColor } : undefined}
              >
                Hire me
              </button>
            </div>
          </div>
          <div className="w-1/2 hidden px-2 2xl:block xl:block lg:block md:block z-10 relative aspect-square max-h-[80vh]">
            {card.image ? (
              <Image
                src={card.image}
                alt={name}
                fill
                className="object-contain object-center"
                sizes="50vw"
                unoptimized={card.image.startsWith("data:")}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl font-bold rounded-lg bg-gray-200 text-gray-400">
                {name.charAt(0)}
              </div>
            )}
          </div>
        </div>
        <div className="relative h-24 bg-[#f6f8ff]" />
      </section>

      {/* Service – same as Borox */}
      <section id="service" className="2xl:py-[80px] py-[70px] bg-white relative">
        <div className="banner text-center mb-[30px] px-6">
          <span className="text-[14px] borox-text-muted text-borox-text-muted uppercase tracking-widest">
            {card.serviceTitleSmall || "BEST IT SERVICE"}
          </span>
          <h2 className="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold borox-font-heading">
            {card.serviceTitle || (
              <>
                It Industries We&apos;re <span className="borox-text-primary text-borox-primary">Offering</span>
              </>
            )}
          </h2>
        </div>
        <div className="flex flex-wrap justify-between items-center mx-auto bx-container max-[320px]:px-[12px] px-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-[30px]">
            {(card.services && card.services.length > 0
              ? card.services
              : [
                  { name: "Graphics design", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
                  { name: "Development", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
                  { name: "SEO Friendly", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
                ]
            ).map((s: any, idx: number) => (
              <div key={s.id || idx} className="transition-all rounded flex justify-start items-start">
                <div className="pr-6 border-r border-borox-primary max-[480px]:hidden borox-border-primary min-w-[80px]">
                  {s.icon ? (
                    <div className="h-12 w-12 rounded-full overflow-hidden border border-borox-primary">
                      <img src={s.icon} alt={s.name} className="h-full w-full object-cover" />
                    </div>
                  ) : (
                    <h6 className="2xl:text-[50px] lg:text-[40px] text-[35px] font-bold opacity-50 2xl:w-[60px] xl:w-[60px] lg:w-[50px] w-[40px] borox-text-primary text-borox-primary">
                      {String(idx + 1).padStart(2, "0")}
                    </h6>
                  )}
                </div>
                <div className="pl-6 border-l">
                  <h4 className="text-[20px] pt-6 font-bold borox-font-heading">{s.name}</h4>
                  <p className="pt-2 borox-text-muted text-borox-text-muted text-[15px] leading-[28px]">{s.description}</p>
                  {s.url && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-[14px] font-semibold borox-text-primary text-borox-primary hover:underline"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About – same as Borox */}
      <section id="about" className="bg-white 2xl:pb-[80px] pb-[70px]">
        <div className="flex flex-wrap justify-between items-center mx-auto bx-container max-[320px]:px-[12px]">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] px-6 max-[320px]:px-0 w-full">
            <div className="transition-all relative">
              <div className="w-full rounded-lg overflow-hidden aspect-[4/3] relative bg-gray-200">
                {card.image ? (
                  <Image src={card.image} alt={name} fill className="object-cover" unoptimized={card.image.startsWith("data:")} />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-gray-400">{name.charAt(0)}</div>
                )}
              </div>
            </div>
            <div className="transition-all borox-font-body">
              <div className="banner mb-[30px]">
                <span className="text-[14px] borox-text-muted text-borox-text-muted">ABOUT US</span>
                <h2 className="mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold borox-font-heading">
                  Creativity bleeds from the pen of <span className="borox-text-primary text-borox-primary">inspiration</span>
                </h2>
              </div>
              <p className="text-[16px] borox-text-muted text-borox-text-muted mb-[30px]">{description}</p>
              <div className="border p-[24px] rounded-lg">
                <div className="box-border flex justify-between max-[400px]:block gap-4">
                  <div className="left">
                    <div className="name">
                      <span className="text-[16px] leading-[28px] font-bold borox-font-heading">Full Name :</span><br />
                      <span className="detail text-[14px] leading-[28px] borox-text-muted text-borox-text-muted">{fullName}</span>
                    </div>
                    <div className="age pt-[20px]">
                      <span className="text-[16px] leading-[28px] font-bold borox-font-heading">Age :</span><br />
                      <span className="detail text-[14px] leading-[28px] borox-text-muted text-borox-text-muted">{age}</span>
                    </div>
                  </div>
                  <div className="right">
                    <div className="ph">
                      <span className="text-[16px] leading-[28px] font-bold borox-font-heading">Phone No :</span><br />
                      <span className="detail text-[14px] leading-[28px] borox-text-muted text-borox-text-muted">{phone}</span>
                    </div>
                    <div className="email pt-[20px]">
                      <span className="text-[16px] leading-[28px] font-bold borox-font-heading">Email :</span><br />
                      <span className="detail text-[14px] leading-[28px] borox-text-muted text-borox-text-muted">{email}</span>
                    </div>
                  </div>
                </div>
                <div className="bottom pt-[20px]">
                  <span className="text-[16px] leading-[28px] font-bold borox-font-heading">Address :</span>
                  <span className="detail text-[14px] leading-[28px] borox-text-muted text-borox-text-muted"> {address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience and Education – Borox CSS + Tailwind */}
      <section id="experience" className="section-experience borox-bg bg-borox-bg relative">
        <div className="2xl:pb-[80px] pb-[70px] 2xl:pt-[80px] md:pt-[70px] pt-[20px]">
          <div className="banner text-center mb-[30px]">
            <span className="text-[14px] borox-text-muted text-borox-text-muted">QUALIFICATION</span>
            <h2 className="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold borox-font-heading">
              My <span className="borox-text-primary text-borox-primary"> ACHIEVEMENTS</span>
            </h2>
          </div>
          <div className="mx-auto bx-container px-6 relative">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
              <div className="transition-all">
                <h2 className="text-[20px] font-bold leading-[24px] borox-font-heading">Education</h2>
                <div className="border-l-2 border-gray-300 pl-6">
                  {education.map((item) => (
                    <div key={item.date} className="p-[30px] bg-white rounded-3xl mt-8 relative">
                      <div className="absolute top-0 bottom-0 -left-6 w-4">
                        <span className="w-4 h-4 border-2 rounded-full block bg-borox-bg absolute top-28 -left-2.5 border-borox-primary borox-border-primary" />
                        <span className="w-5 border block bg-borox-bg absolute top-28 my-1.5 left-1.5 border-borox-primary borox-border-primary" />
                      </div>
                      <span className="borox-text-muted text-borox-text-muted text-[12px] font-medium">{item.date}</span>
                      <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] borox-text-primary text-borox-primary borox-font-heading">
                        {item.title} <span className="ml-[15px] text-borox-text-muted-light text-[14px]">- {item.sub}</span>
                      </h4>
                      <p className="text-[13px] borox-text-muted text-borox-text-muted mb-0 leading-[28px]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="transition-all 2xl:mt-0 lg:mt-0 mt-[15px]">
                <h2 className="text-[20px] font-bold leading-[24px] borox-font-heading">Experience</h2>
                <div className="border-l-2 border-gray-300 pl-6">
                  {experience.map((item) => (
                    <div key={item.date} className="p-[30px] bg-white rounded-3xl mt-8 relative">
                      <div className="absolute top-0 bottom-0 -left-6 w-4">
                        <span className="w-4 h-4 border-2 rounded-full block bg-borox-bg absolute top-28 -left-2.5 border-borox-primary borox-border-primary" />
                        <span className="w-5 border block bg-borox-bg absolute top-28 my-1.5 left-1.5 border-borox-primary borox-border-primary" />
                      </div>
                      <span className="borox-text-muted text-borox-text-muted text-[12px] font-medium">{item.date}</span>
                      <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] borox-text-primary text-borox-primary borox-font-heading">
                        {item.title} <span className="ml-[15px] text-borox-text-muted-light text-[14px]">- {item.sub}</span>
                      </h4>
                      <p className="text-[13px] borox-text-muted text-borox-text-muted mb-0 leading-[28px]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio – same as Borox */}
      <section id="portfolio" className="section-Portfolio 2xl:py-[80px] py-[70px]">
        <div className="banner text-center mb-[30px]">
          <span className="text-[14px] borox-text-muted text-borox-text-muted">PORTFOLIO</span>
          <h2 className="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold borox-font-heading">
            My <span className="borox-text-primary text-borox-primary"> PORTFOLIO</span>
          </h2>
        </div>
        <div className="mx-auto bx-container px-6">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="portfolio-img truncate rounded-2xl relative overflow-hidden group">
                <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm group-hover:scale-105 transition duration-500">
                  Project {n}
                </div>
                <div className="top-contain absolute top-[15px] right-[15px]">
                  <span className="bg-black rounded-full text-white font-normal text-[12px] px-2 py-1">Work</span>
                </div>
                <div className="bottom-contain absolute bottom-4 left-4 right-4">
                  <div className="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl flex justify-between items-center">
                    <span className="text-white text-sm">Project Title {n}</span>
                    <span className="h-8 w-8 flex justify-center items-center rounded-md text-white bg-borox-primary">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News – Borox CSS + Tailwind */}
      <section id="news" className="section-news borox-bg bg-borox-bg">
        <div className="2xl:pb-[80px] pb-[70px] 2xl:pt-[80px] lg:pt-[80px] pt-[20px]">
          <div className="banner text-center mb-[30px]">
            <span className="text-[14px] borox-text-muted text-borox-text-muted">BLOGS</span>
            <h2 className="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold borox-font-heading">
              Latest <span className="borox-text-primary text-borox-primary"> NEWS</span>
            </h2>
          </div>
          <div className="mx-auto bx-container px-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
              {blogs.map((b) => (
                <div key={b.id} className="card bg-white border border-borox-border rounded-2xl p-6 overflow-hidden">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">Blog</div>
                  <div className="news-card-details mt-[16px]">
                    <p className="text-[13px] leading-[30px] mb-[5px] borox-text-primary text-borox-primary">By Admin <span className="text-gray-400">- 04 Comments</span></p>
                    <h5 className="pb-[15px] text-[17px] font-bold border-b border-borox-border borox-font-heading">{b.title}</h5>
                    <div className="pt-[15px] text-sm borox-text-primary text-borox-primary">Read More →</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact – Borox CSS + Tailwind */}
      <section id="contact" className="section-contact 2xl:py-[80px] py-[70px]">
        <div className="banner text-center mb-[30px]">
          <span className="text-[14px] borox-text-muted text-borox-text-muted">FORM</span>
          <h2 className="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold borox-font-heading">
            Get In <span className="borox-text-primary text-borox-primary">TOUCH</span>
          </h2>
        </div>
        <div className="mx-auto bx-container px-6">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="border border-borox-border rounded-lg">
              <div className="border-b border-borox-border">
                <input type="text" className="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none rounded-t-lg borox-font-body" placeholder="Full Name" readOnly />
              </div>
              <div className="border-b border-borox-border">
                <input type="email" className="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none borox-font-body" placeholder="Email" defaultValue={email} readOnly />
              </div>
              <div className="border-b border-borox-border">
                <input type="text" className="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none borox-font-body" placeholder="Phone" defaultValue={phone} readOnly />
              </div>
              <div>
                <input type="text" className="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none rounded-b-lg borox-font-body" placeholder="Subject" readOnly />
              </div>
            </div>
            <div className="mb-0">
              <p className="borox-text-muted text-borox-text-muted text-[15px] mb-4 borox-font-body">Or contact directly: <a href={`mailto:${email}`} className="font-medium borox-text-primary text-borox-primary"> {email}</a></p>
              <button
                type="button"
                onClick={() => onDownloadVCard?.()}
                className="bg-borox-primary text-white font-medium rounded-full text-sm px-8 py-2.5 mr-2 hover:opacity-80"
                style={card.templatePrimaryColor ? { backgroundColor: card.templatePrimaryColor } : undefined}
              >
                Download vCard
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer – Borox CSS + Tailwind (bg-borox-footer) */}
      <footer className="borox-bg-footer bg-borox-footer">
        <div className="flex justify-center mx-auto bx-container max-[320px]:px-[12px] gap-[30px] px-6 py-8 flex-col lg:flex-row">
          <div className="lg:w-1/2 text-white text-[12px] font-normal 2xl:text-left xl:text-left text-center borox-font-body">
            Copyright © <a href={`${baseUrl}/${slug}`} className="hover:text-white font-semibold">{name.split(" ")[0]}</a> all rights reserved. Profile: {baseUrl}/{slug}
          </div>
          <div className="lg:w-1/2 text-white font-normal text-[12px] flex 2xl:justify-end xl:justify-end lg:justify-end justify-center gap-4 borox-font-body">
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href={`${baseUrl}/${slug}`} className="hover:text-white">View Profile</a>
          </div>
        
      <VCardDynamicSections card={card} />
</div>
      </footer>

      {/* Scroll Top – Borox primary color */}
      <a
        href="#home"
        id="scrollup"
        className="fixed bg-borox-primary text-white rounded-full flex justify-center text-center items-center p-2 right-6 cursor-pointer bottom-6 h-10 w-10 z-20 show"
        style={card.templatePrimaryColor ? { backgroundColor: card.templatePrimaryColor } : undefined}
        aria-label="Back to top"
      >
        ↑
      </a>
    </div>
  );
}
