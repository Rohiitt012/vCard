"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import type { VCardItem } from "@/context/VCardsContext";
import "aos/dist/aos.css";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  qrDataUrl: string;
  onDownloadVCard: () => void;
};

/* Borox – Tailwind CSS Personal Portfolio Template (light theme). Same design, colors, animations. */
export function BusinessTemplateView({ card, slug, baseUrl, qrDataUrl, onDownloadVCard }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [scrollUpShow, setScrollUpShow] = useState(false);
  const name = card.title || "Isabelle Ryal";
  const occupation = card.occupation || card.tagline || "i'm A web Developer";
  const heroDesc = card.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. enim ratione eligendi expedita!";

  useEffect(() => {
    const t = setTimeout(() => setLoaderVisible(false), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({ duration: 800, once: true, offset: 50 });
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollUpShow(typeof window !== "undefined" && window.scrollY > 300);
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
      onScroll();
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="borox-template min-h-screen bg-[#e5e7eb] flex justify-center px-4 py-6 sm:py-10 overflow-x-hidden">
      <div className="relative w-full max-w-[540px] bg-white rounded-[32px] shadow-2xl overflow-hidden">
        {/* Borox loader – same animation as original */}
        <div id="bx-overlay" className={loaderVisible ? "" : "borox-loaded"} aria-hidden={!loaderVisible}>
          <span className="loader" />
        </div>

      {/* header – Borox light: bg-[#f6f8ff] */}
      <header className="bg-[#f6f8ff] w-full sticky top-0 z-30">
        <nav className="border-gray-200 py-2">
          <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 mx-auto max-w-6xl">
            <a href="#home" className="flex items-center">
              <span className="text-[#17181c] font-bold text-xl">Borox</span>
            </a>
            <div className="flex items-center lg:order-2">
              <button
                type="button"
                onClick={onDownloadVCard}
                className="text-white bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5 mr-2 hidden xl:block"
              >
                Get a quote
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center border p-2 text-lg text-gray-500 rounded-lg lg:hidden"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
              </button>
            </div>
            <div className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${mobileMenuOpen ? "block" : "hidden"}`}>
              <ul className="flex flex-col font-medium lg:flex-row lg:space-x-8 mt-4 lg:mt-0 p-4 lg:p-0 border border-[#eee] lg:border-0 rounded-[30px] lg:rounded-none text-[13px] lg:text-[15px]">
                <li><a href="#home" className="block py-2 pr-4 pl-3 text-[#000] lg:p-0">Home</a></li>
                <li><a href="#about" className="block py-2 pr-4 pl-3 text-[#000] lg:p-0">About</a></li>
                <li><a href="#experience" className="block py-2 pr-4 pl-3 text-[#000] lg:p-0">Experience</a></li>
                <li><a href="#portfolio" className="block py-2 pr-4 pl-3 text-[#000] lg:p-0">Portfolio</a></li>
                <li><a href="#news" className="block py-2 pr-4 pl-3 text-[#000] lg:p-0">News</a></li>
                <li><a href="#contact" className="block py-2 pr-4 pl-3 text-[#000] lg:p-0">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* hero – Borox light: bg-[#f6f8ff], text-dark-800 (#17181c) */}
      <section id="home" className="section-hero bg-[#f6f8ff] relative pt-16 sm:py-20 px-4" data-aos="fade-up" data-aos-duration="1500">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-6xl py-12 sm:py-20 px-4">
          <div className="w-full lg:w-1/2 flex items-center px-2">
            <div className="text-center lg:text-left">
              <span className="text-[#7963e0] text-[18px] font-bold">Hello, My name is</span>
              <h1 className="text-dark-800 text-4xl sm:text-5xl lg:text-[50px] font-bold mt-1">{name}</h1>
              <h2 className="py-4 text-dark-800 text-[20px] font-bold">{occupation}</h2>
              <p className="pt-2 text-gray-500 text-base">{heroDesc}</p>
              <button
                type="button"
                onClick={onDownloadVCard}
                className="text-white mt-8 bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5"
              >
                Hire me
              </button>
            </div>
          </div>
          <div className="w-1/2 hidden lg:block px-2 z-10">
            <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden bg-gray-200">
              {card.image ? (
                <Image src={card.image} alt={name} fill className="object-cover" unoptimized={card.image.startsWith("data:")} />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-[#7963e0]/50">{name.charAt(0)}</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* service – Borox light: bg-white */}
      <section id="service" className="py-16 sm:py-20 bg-white relative px-4 sm:px-6" data-aos="fade-up" data-aos-duration="1500">
        <div className="max-w-6xl mx-auto">
          <div className="banner text-center mb-8 px-4">
            <span className="text-[14px] text-[#777] uppercase tracking-wider">
              {card.serviceTitleSmall || "BEST IT SERVICE"}
            </span>
            <h2 className="text-center mt-[5px] text-2xl sm:text-3xl font-bold text-[#17181c]">
              {card.serviceTitle ? (
                <>
                  {card.serviceTitle.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-[#7963e0]">{card.serviceTitle.split(" ").pop()}</span>
                </>
              ) : (
                <>
                  It Industries We&apos;re <span className="text-[#7963e0]">Offering</span>
                </>
              )}
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {(card.services && card.services.length > 0
              ? card.services
              : [
                  { name: "Graphics design", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
                  { name: "Development", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
                  { name: "SEO Friendly", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
                ]
            ).map((item: any, i: number) => (
              <div key={item.id || i} className="transition-all rounded flex justify-start items-start group">
                <div className="pr-6 border-r border-[#7963e0] max-[480px]:hidden shrink-0">
                  <h6 className="text-4xl font-bold text-[#7963e0] opacity-50 group-hover:opacity-100 transition-opacity">
                    {(i + 1).toString().padStart(2, '0')}
                  </h6>
                </div>
                <div className="pl-6 border-l flex-grow">
                  <div className="flex items-center gap-3">
                    {item.icon && (
                      <div className="h-10 w-10 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                        <img src={item.icon} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                    )}
                    <h4 className="text-[20px] pt-6 font-bold text-[#17181c] group-hover:text-[#7963e0] transition-colors">
                      {item.name}
                    </h4>
                  </div>
                  <p className="pt-2 text-[#777] text-[15px] leading-[28px]">
                    {item.description}
                  </p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-[13px] font-semibold text-[#7963e0] hover:underline"
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

      {/* about – Borox light: bg-white */}
      <section id="about" className="bg-white pb-16 sm:pb-20 px-4 sm:px-6" data-aos="fade-up" data-aos-duration="1500">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 px-6">
            <div className="transition-all relative">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                {card.image ? (
                  <Image src={card.image} alt="" fill className="object-cover" unoptimized={card.image.startsWith("data:")} />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-[#7963e0]/50">{name.charAt(0)}</div>
                )}
              </div>
            </div>
            <div className="transition-all">
              <div className="banner mb-6">
                <span className="text-[14px] text-[#777]">ABOUT US</span>
                <h2 className="mt-[5px] text-2xl sm:text-3xl font-bold text-[#17181c]">
                  Creativity bleeds from the pen of <span className="text-[#7963e0]">inspiration</span>
                </h2>
              </div>
              <p className="text-[16px] text-[#777] mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium totam error consequatur aperiam iusto neque fuga velit.
              </p>
              <div className="border p-6 rounded-lg">
                <div className="box-border flex flex-wrap justify-between gap-6">
                  <div>
                    <span className="text-[16px] leading-[28px] font-bold text-[#17181c]">Full Name :</span>
                    <br />
                    <span className="detail text-[14px] leading-[28px] text-[#777]">{name}</span>
                  </div>
                  <div>
                    <span className="text-[16px] leading-[28px] font-bold text-[#17181c]">Age :</span>
                    <br />
                    <span className="detail text-[14px] leading-[28px] text-[#777]">{card.birthDate || "30 Years"}</span>
                  </div>
                  <div>
                    <span className="text-[16px] leading-[28px] font-bold text-[#17181c]">Phone No :</span>
                    <br />
                    <span className="detail text-[14px] leading-[28px] text-[#777]">{card.phone || "+00 987654321"}</span>
                  </div>
                  <div>
                    <span className="text-[16px] leading-[28px] font-bold text-[#17181c]">Email :</span>
                    <br />
                    <span className="detail text-[14px] leading-[28px] text-[#777]">{card.email || "example@example.com"}</span>
                  </div>
                </div>
                <div className="bottom pt-5">
                  <span className="text-[16px] leading-[28px] font-bold text-[#17181c]">Address :</span>
                  <span className="detail text-[14px] leading-[28px] text-[#777]"> {card.address || "Ruami mellow moraes,- Salvador, Brazil"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience – Borox light: bg-[#f6f8ff], bg-white cards, border-gray-300 */}
      <section id="experience" className="section-experience bg-[#f6f8ff] relative pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6" data-aos="fade-up" data-aos-duration="1500">
        <div className="max-w-6xl mx-auto relative">
          <div className="banner text-center mb-8">
            <span className="text-[14px] text-[#777]">QUALIFICATION</span>
            <h2 className="text-center mt-1 text-2xl sm:text-3xl font-bold text-[#17181c]">
              My <span className="text-[#7963e0]">ACHIEVEMENTS</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-[20px] font-bold leading-[24px] text-[#17181c]">Education</h2>
              <div className="border-l-2 border-gray-300 pl-6 space-y-6">
                {[
                  { date: "June 15, 2013 - 2016", title: "Master in Computer Engineering", sub: "First Class", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi doloremque ullam placeat quos provident ex fuga. Ratione ab explicabo doloribus error odio veritatis tenetur." },
                  { date: "June 12, 2010 - 2013", title: "Bachelor in Computer Engineering", sub: "First Class", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi doloremque ullam placeat quos provident ex fuga. Ratione ab explicabo doloribus error odio veritatis tenetur." },
                  { date: "June 1, 2009 - 2010", title: "Higher Secondary", sub: "(A+)", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi doloremque ullam placeat quos provident ex fuga. Ratione ab explicabo doloribus error odio veritatis tenetur." },
                ].map((ed) => (
                  <div key={ed.date} className="p-6 bg-white rounded-3xl mt-8 relative">
                    <span className="text-[#777] text-[12px] font-medium">{ed.date}</span>
                    <h4 className="text-[16px] leading-[22px] font-semibold mt-3 mb-1 text-[#7963e0]">{ed.title} <span className="ml-3 text-[#999] text-[14px]">- {ed.sub}</span></h4>
                    <p className="text-[13px] text-[#777] mb-0 leading-[28px]">{ed.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-[20px] font-bold leading-[24px] text-[#17181c]">Experience</h2>
              <div className="border-l-2 border-gray-300 pl-6 space-y-6">
                {[
                  { date: "March 12, 2020", title: "Envato", sub: "Team Leader", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi doloremque ullam placeat quos provident ex fuga. Ratione ab explicabo doloribus error odio veritatis tenetur." },
                  { date: "January 23, 2018 - 2020", title: "Facebook Company", sub: "Sr. Developer", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi doloremque ullam placeat quos provident ex fuga. Ratione ab explicabo doloribus error odio veritatis tenetur." },
                  { date: "July 23, 2016 - 2018", title: "Twitter Company", sub: "Jr. Developer", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi doloremque ullam placeat quos provident ex fuga. Ratione ab explicabo doloribus error odio veritatis tenetur." },
                ].map((ex) => (
                  <div key={ex.date} className="p-6 bg-white rounded-3xl mt-8 relative">
                    <span className="text-[#777] text-[12px] font-medium">{ex.date}</span>
                    <h4 className="text-[16px] leading-[22px] font-semibold mt-3 mb-1 text-[#7963e0]">{ex.title} <span className="ml-3 text-[#999] text-[14px]">- {ex.sub}</span></h4>
                    <p className="text-[13px] text-[#777] mb-0 leading-[28px]">{ex.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio – Borox: portfolio-img hover (top-contain / bottom-contain), tabs #17181c */}
      <section id="portfolio" className="section-Portfolio py-16 sm:py-20 px-4 sm:px-6 bg-white" data-aos="fade-up" data-aos-duration="1500">
        <div className="max-w-6xl mx-auto">
          <div className="banner text-center mb-8">
            <span className="text-[14px] text-[#777]">PORTFOLIO</span>
            <h2 className="text-center mt-[5px] text-2xl sm:text-3xl font-bold text-[#17181c]">
              My <span className="text-[#7963e0]">PORTFOLIO</span>
            </h2>
          </div>
          <div className="portfolio-tabs flex flex-wrap justify-center gap-4 mb-8 text-[14px] text-[#17181c] font-semibold">
            <span className="px-3 hover:text-[#7963e0] cursor-pointer active">ALL</span>
            <span className="px-3 hover:text-[#7963e0] cursor-pointer">DESIGN</span>
            <span className="px-3 hover:text-[#7963e0] cursor-pointer">DEVELOPMENT</span>
            <span className="px-3 hover:text-[#7963e0] cursor-pointer">GRAPHICS</span>
            <span className="px-3 hover:text-[#7963e0] cursor-pointer">Templates</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { tag: "3D Graphics", tag2: "Templates", title: "Nitro - Car Service" },
              { tag: "Web Design", tag2: null, title: "Boros - Artificial Intelligence" },
              { tag: "Web Design", tag2: null, title: "Mila - Virtual Reality" },
              { tag: "Development", tag2: null, title: "Sen - Hotel Website" },
              { tag: "Templates", tag2: "Web Design", title: "Ekka - eCommerce template" },
              { tag: "Development", tag2: "3D Graphics", title: "Bukki - Teck crafts" },
            ].map((item, i) => (
              <div key={i} className="portfolio-img truncate rounded-2xl relative overflow-hidden">
                <div className="aspect-[4/3] bg-[#e5e7eb] rounded-2xl w-full transform transition duration-500 hover:-rotate-12 hover:scale-125" />
                <h3 className="top-contain absolute top-[15px] right-[15px] flex gap-1 flex-wrap">
                  <span className="bg-black rounded-full text-white font-normal text-[12px] px-2 py-1">{item.tag}</span>
                  {item.tag2 && <span className="bg-black rounded-full text-white font-normal text-[12px] px-2 py-1">{item.tag2}</span>}
                </h3>
                <div className="bottom-contain absolute bottom-4 left-4 right-4">
                  <div className="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-4 place-content-between">
                    <span className="text-white text-sm flex items-center">{item.title}</span>
                    <span className="text-white text-sm grid justify-items-end">
                      <span className="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md inline-flex">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News – Borox light: bg-[#f6f8ff], card bg-white border */}
      <section id="news" className="section-news bg-[#f6f8ff] pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6" data-aos="fade-up" data-aos-duration="1500">
        <div className="max-w-6xl mx-auto">
          <div className="banner text-center mb-8">
            <span className="text-[14px] text-[#777]">BLOGS</span>
            <h2 className="text-center mt-[5px] text-2xl sm:text-3xl font-bold text-[#17181c]">
              Latest <span className="text-[#7963e0]">NEWS</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card bg-white border border-gray-200 rounded-2xl p-6">
                <div className="aspect-video bg-gray-200 rounded-xl mb-4" />
                <p className="text-[13px] leading-8 mb-1 text-[#7963e0]">By Admin <span className="text-gray-400">- 04 Comments</span></p>
                <h5 className="pb-4 text-[17px] font-bold border-b border-[#dbdada] text-[#17181c]">Lorem ipsum dolor sit amet.</h5>
                <div className="pt-4 text-sm text-[#7963e0]">Read More →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* contact – Borox light: border inputs, text-gray-700 */}
      <section id="contact" className="section-contact py-16 sm:py-20 px-4 sm:px-6 bg-white" data-aos="fade-up" data-aos-duration="1500">
        <div className="max-w-6xl mx-auto">
          <div className="banner text-center mb-8">
            <span className="text-[14px] text-[#777]">FORM</span>
            <h2 className="text-center mt-[5px] text-2xl sm:text-3xl font-bold text-[#17181c]">
              Get In <span className="text-[#7963e0]">TOUCH</span>
            </h2>
          </div>
          <form className="grid lg:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <input type="text" placeholder="Full Name" className="appearance-none w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none border-b border-gray-200 rounded-t-lg" />
              <input type="email" placeholder="Email" className="appearance-none w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none border-b border-gray-200" />
              <input type="text" placeholder="Phone" className="appearance-none w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none border-b border-gray-200" />
              <input type="text" placeholder="Subject" className="appearance-none w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none rounded-b-lg" />
            </div>
            <div>
              <textarea rows={8} placeholder="Message" className="w-full border border-gray-200 rounded-xl pl-4 pt-4 focus:outline-none text-gray-700" />
              <button type="button" className="mt-4 text-white bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

        {/* footer – Borox: bg-[#070415] */}
        <footer className="bg-[#070415]">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 max-w-6xl mx-auto px-6 py-8">
            <div className="lg:w-1/2 text-white text-[12px] font-normal text-center lg:text-left">
              Copyright © <a href="#home" className="hover:text-white font-semibold">Borox</a> all rights reserved. Powered by Borox.
            </div>
            <div className="lg:w-1/2 text-white font-normal text-[12px] flex justify-center lg:justify-end gap-6">
              <a href="#home" className="pr-10 hover:text-white">Privacy Policy</a>
              <a href="#home" className="hover:text-white">Terms and Conditions</a>
            </div>
          </div>
        </footer>

        {/* scroll Top – Borox: #scrollup, .show when scrolled (inside card) */}
        <a
          id="scrollup"
          href="#home"
          className={`absolute bg-[#7963e0] text-white rounded-full flex justify-center items-center p-2 right-4 bottom-4 h-10 w-10 z-20 hover:bg-opacity-80 cursor-pointer ${scrollUpShow ? "show" : ""}`}
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
        </a>
      </div>
    </div>
  );
}
