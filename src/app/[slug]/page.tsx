'use client';

import React, { useEffect, useState, useRef } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { useVCards } from "@/context/VCardsContext";
import { downloadVCard } from "@/lib/vcard";
import { generateQrDataUrl, downloadQrPng } from "@/lib/qr";
import { apiIncrementView, apiSubmitInquiry, apiSubscribe } from "@/lib/vcards-api";
import type { VCardItem } from "@/context/VCardsContext";

const BUSINESS_HOURS_DAY_ORDER = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function PublicVCardPage() {
  const params = useParams<{ slug: string }>();
  const slug = (Array.isArray(params.slug) ? params.slug[0] : params.slug).toLowerCase();
  const { vCards, setVCards } = useVCards();
  const viewCountIncremented = useRef(false);

  const cardFromContext = vCards.find((c) => {
    const fromSlug = c.slug?.toLowerCase();
    const fromPreview = (c.previewUrl ?? "").replace(/^https?:\/\/[^/]+/, "").replace(/^\/+/, "").toLowerCase();
    return fromSlug === slug || fromPreview === slug;
  });

  const [cardFromApi, setCardFromApi] = useState<VCardItem | null>(null);
  const [slugFetchDone, setSlugFetchDone] = useState(false);
  const card = cardFromContext ?? cardFromApi;

  // When not in context, fetch by slug (e.g. shared link on another device)
  useEffect(() => {
    if (cardFromContext || !slug || slugFetchDone) return;
    let cancelled = false;
    fetch(`/api/vcards/by-slug/${encodeURIComponent(slug)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data) setCardFromApi(data as VCardItem);
      })
      .finally(() => {
        if (!cancelled) setSlugFetchDone(true);
      });
    return () => {
      cancelled = true;
    };
  }, [slug, cardFromContext, slugFetchDone]);

  const [qrDataUrl, setQrDataUrl] = useState("");
  const [copyToast, setCopyToast] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (!card?.requiresPassword || !slug || typeof window === "undefined") return;
    if (sessionStorage.getItem(`vcard-unlocked-${slug}`) === "1") setUnlocked(true);
  }, [card?.requiresPassword, slug]);

  // SEO: title, meta, OG, canonical, JSON-LD when card is found
  useEffect(() => {
    if (!card) {
      document.title = "vCard | Open My Profile";
      return;
    }
    const title = card.metaTitle || card.title || "vCard";
    const desc = card.metaDescription || card.description || `${card.title} – Digital vCard`;
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const path = (card.slug || (card.previewUrl ?? "").replace(/^https?:\/\/[^/]+/, "").replace(/^\/+/, "")) || "";
    const canonicalUrl = path ? `${origin}/${path}` : origin;

    document.title = title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", desc.slice(0, 160));

    const setMeta = (name: string, content: string, isProp = false) => {
      const attr = isProp ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("og:title", title, true);
    setMeta("og:description", desc.slice(0, 200), true);
    setMeta("og:image", (card.ogImage && (card.ogImage.startsWith("http") ? card.ogImage : `${origin}${card.ogImage.startsWith("/") ? "" : "/"}${card.ogImage}`)) || `${origin}/images/user/owner.jpg`, true);
    setMeta("og:url", canonicalUrl, true);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: card.title,
      description: desc.slice(0, 200),
      url: canonicalUrl,
      ...(card.email && { email: card.email }),
      ...(card.occupation && { jobTitle: card.occupation }),
      ...(card.company && { worksFor: { "@type": "Organization", name: card.company } }),
    };
    let scriptLd = document.getElementById("vcard-jsonld") as HTMLScriptElement | null;
    if (!scriptLd) {
      scriptLd = document.createElement("script");
      scriptLd.id = "vcard-jsonld";
      scriptLd.type = "application/ld+json";
      document.head.appendChild(scriptLd);
    }
    scriptLd.textContent = JSON.stringify(jsonLd);
  }, [card]);

  // Increment view count once when this vCard page is viewed (API + optional local state)
  useEffect(() => {
    if (!card || viewCountIncremented.current) return;
    viewCountIncremented.current = true;
    apiIncrementView(card.id).catch(() => {});
    if (cardFromContext) {
      setVCards((prev) =>
        prev.map((c) => (c.id === card.id ? { ...c, viewCount: (c.viewCount || 0) + 1 } : c))
      );
    } else if (cardFromApi) {
      setCardFromApi((prev) => (prev ? { ...prev, viewCount: (prev.viewCount || 0) + 1 } : null));
    }
  }, [card, cardFromContext, cardFromApi, setVCards]);

  // Generate QR code data URL when card is available (client-side)
  useEffect(() => {
    if (!card || typeof window === "undefined") return;
    const slugPath = (card.slug || (card.previewUrl ?? "").replace(/^https?:\/\/[^/]+/, "").replace(/^\/+/, "")) || "";
    const url = `${window.location.origin}/${slugPath}`;
    generateQrDataUrl(url, {
      fgColor: card.qrCodeColor || "#000000",
      bgColor: card.qrBgColor || "#ffffff",
    }).then(setQrDataUrl);
  }, [card]);

  // Blogs + auto-rotate state (must be declared before any early returns)
  const blogs =
    card && Array.isArray(card.blogs)
      ? (card.blogs as { id: string; title: string; description: string; icon: string }[])
      : [];

  const [activeBlogIndex, setActiveBlogIndex] = useState(0);

  const isFlowerGardenTemplate =
    !!card &&
    (card.selectedTemplateId === 6 ||
      card.templateName === "Flower Garden" ||
      card.templateName === "Jenny Wilson");

  // Auto-rotate blogs on public card (for all templates that show blogs)
  useEffect(() => {
    if (blogs.length <= 1) return;
    const id = setInterval(() => {
      setActiveBlogIndex((i) => (i + 1) % blogs.length);
    }, 4000);
    return () => clearInterval(id);
  }, [blogs.length]);

  if (!card) {
    const loading = !slugFetchDone && !cardFromContext;
    if (!loading) notFound();
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f6faf7] px-4 py-8">
        <div className="w-full max-w-md rounded-[2.5rem] bg-white shadow-2xl overflow-hidden border border-emerald-100 animate-pulse">
          <div className="h-40 w-full bg-emerald-200" />
          <div className="px-6 pb-6 pt-4">
            <div className="flex items-end gap-3 -mt-16">
              <div className="w-20 h-20 rounded-2xl bg-emerald-200 flex-shrink-0" />
              <div className="flex-1 space-y-2 pb-1">
                <div className="h-5 w-3/4 bg-emerald-200 rounded" />
                <div className="h-4 w-1/2 bg-emerald-100 rounded" />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <div className="h-3 w-full bg-gray-100 rounded" />
              <div className="h-3 w-full bg-gray-100 rounded" />
              <div className="h-3 w-2/3 bg-gray-100 rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (card.requiresPassword && !unlocked) {
    return (
      <div className="min-h-screen bg-[#f6faf7] flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">This vCard is protected</h2>
          <p className="text-sm text-gray-600 mb-4">Enter the password to view.</p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const pwd = (form.querySelector('input[name="vcard-password"]') as HTMLInputElement)?.value ?? "";
              setPasswordError(false);
              const res = await fetch(`/api/vcards/by-slug/${encodeURIComponent(slug)}/unlock`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password: pwd }),
              });
              if (res.ok) {
                if (typeof window !== "undefined") sessionStorage.setItem(`vcard-unlocked-${slug}`, "1");
                setUnlocked(true);
              } else setPasswordError(true);
            }}
            className="space-y-3"
          >
            <input
              type="password"
              name="vcard-password"
              placeholder="Password"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
              autoComplete="current-password"
            />
            {passwordError && <p className="text-sm text-red-600">Invalid password.</p>}
            <button type="submit" className="w-full rounded-lg bg-emerald-600 text-white py-2.5 text-sm font-medium hover:bg-emerald-700">
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const termsHtml = card.termsHtml;
  const privacyHtml = card.privacyHtml;

  if (isFlowerGardenTemplate) {
    return (
      <div className="min-h-screen bg-[#f6faf7] flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md rounded-[2.5rem] bg-white shadow-2xl overflow-hidden border border-emerald-100 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-6 top-10 w-16 h-16 rounded-full border border-emerald-100 bg-emerald-50/60" />
            <div className="absolute -right-6 bottom-10 w-16 h-16 rounded-full border border-emerald-100 bg-emerald-50/60" />
          </div>

          <div className="max-h-[720px] overflow-y-auto">
            <section className="relative">
              <div className="h-40 w-full bg-cover bg-center bg-no-repeat bg-emerald-600" />
              <div className="px-6 pb-6 pt-4 bg-white relative">
                <div className="-mt-16 flex items-end gap-3">
                  <div className="relative w-20 h-20 rounded-2xl border-4 border-white shadow-lg overflow-hidden flex-shrink-0">
                    {card.image ? (
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                        unoptimized={card.image.startsWith("data:")}
                      />
                    ) : (
                      <div className="w-full h-full bg-emerald-100" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xl font-semibold text-emerald-900 leading-tight truncate">
                      {card.title || "vCard"}
                    </p>
                    <p className="text-sm font-medium text-emerald-700 mt-0.5 truncate">
                      {card.occupation || card.templateName || "Flower Garden"}
                    </p>
                  </div>
                </div>

                {(card.socialLinks?.length ?? 0) > 0 ? (
                  <div className="mt-5 flex justify-center gap-4 flex-wrap">
                    {card.socialLinks!.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 text-sm shadow-sm hover:bg-emerald-100"
                        aria-label={link.platform}
                      >
                        ●
                      </a>
                    ))}
                  </div>
                ) : null}

                <p className="mt-5 text-xs text-slate-600 text-center leading-relaxed">
                  {card.description || "Your digital business card. Save this contact or share the link."}
                </p>
              </div>
            </section>

            <section className="px-6 pt-6 pb-5 bg-white">
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
                {card.email ? (
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 text-xs shrink-0">
                      ✉
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-[11px] text-slate-500">Email</p>
                      <p className="text-[11px] truncate">{card.email}</p>
                    </div>
                  </div>
                ) : null}
                {card.phone ? (
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 text-xs shrink-0">
                      ☎
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-[11px] text-slate-500">Phone</p>
                      <p className="text-[11px] truncate">{card.phone}</p>
                    </div>
                  </div>
                ) : null}
                {card.birthDate ? (
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 text-xs shrink-0">
                      🎂
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-[11px] text-slate-500">Birth Date</p>
                      <p className="text-[11px] truncate">{card.birthDate}</p>
                    </div>
                  </div>
                ) : null}
                {card.address ? (
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 text-xs shrink-0">
                      📍
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-[11px] text-slate-500">Location</p>
                      <p className="text-[11px] truncate">{card.address}</p>
                    </div>
                  </div>
                ) : null}
                {!card.email && !card.phone && !card.birthDate && !card.address ? (
                  <p className="col-span-2 text-[11px] text-slate-500">Add contact details in the dashboard.</p>
                ) : null}
              </div>
            </section>

            <section className="px-6 pt-6 pb-7 bg-white">
              <h2 className="text-center text-sm font-semibold text-emerald-800 tracking-wide flex items-center justify-center gap-3">
                <span className="flex-1 h-px bg-emerald-100" />
                Gallery
                <span className="flex-1 h-px bg-emerald-100" />
              </h2>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-[4/5] rounded-2xl overflow-hidden bg-emerald-50">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/product/product-0" + i + ".png')" }} />
                  </div>
                ))}
              </div>
            </section>

            <section className="px-6 pt-5 pb-7 bg-white">
              <h2 className="text-center text-sm font-semibold text-emerald-800 tracking-wide flex items-center justify-center gap-3">
                <span className="flex-1 h-px bg-emerald-100" />
                Our Service
                <span className="flex-1 h-px bg-emerald-100" />
              </h2>
              <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-4 text-center">
                <p className="text-[11px] text-slate-600">Add your services in the dashboard to show them here.</p>
              </div>
            </section>

            <section className="px-6 pt-5 pb-7 bg-white">
              <h2 className="text-center text-sm font-semibold text-emerald-800 tracking-wide flex items-center justify-center gap-3">
                <span className="flex-1 h-px bg-emerald-100" />
                Make an Appointment
                <span className="flex-1 h-px bg-emerald-100" />
              </h2>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-[11px] text-slate-600 mb-1">Date :</p>
                  <div className="h-10 rounded-full border border-emerald-200 bg-white flex items-center justify-between px-3 text-[11px] text-slate-500">
                    <span>Pick a date</span>
                    <span>📅</span>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] text-slate-600 mb-1">Hour:</p>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {["8:10 - 20:00", "8:10 - 20:00", "8:10 - 20:00", "8:10 - 20:00"].map((label, idx) => (
                      <button
                        key={`${label}-${idx}`}
                        type="button"
                        className="px-3 py-2 rounded-full bg-white/60 border border-emerald-100 text-[11px] text-slate-600 whitespace-nowrap"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-2 w-full rounded-full bg-emerald-700 text-white text-xs font-semibold py-2.5 shadow-md"
                >
                  Make An Appointment
                </button>
              </div>
            </section>

            <section className="px-6 pt-5 pb-7 bg-white">
              <h2 className="text-center text-sm font-semibold text-emerald-800 tracking-wide flex items-center justify-center gap-3">
                <span className="flex-1 h-px bg-emerald-100" />
                Product
                <span className="flex-1 h-px bg-emerald-100" />
              </h2>
              <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-4 text-center">
                <p className="text-[11px] text-slate-600">Add your products in the dashboard to show them here.</p>
              </div>
            </section>

            <section className="px-6 pt-5 pb-7 bg-white">
              <h2 className="text-center text-sm font-semibold text-emerald-800 tracking-wide flex items-center justify-center gap-3">
                <span className="flex-1 h-px bg-emerald-100" />
                Testimonial
                <span className="flex-1 h-px bg-emerald-100" />
              </h2>
              <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-4 text-center">
                <p className="text-[11px] text-slate-600">Add testimonials in the dashboard to show them here.</p>
              </div>
            </section>

            <section className="px-6 pt-5 pb-7 bg-white">
              <h2 className="text-center text-sm font-semibold text-emerald-800 tracking-wide flex items-center justify-center gap-3">
                <span className="flex-1 h-px bg-emerald-100" />
                Blog
                <span className="flex-1 h-px bg-emerald-100" />
              </h2>
              {blogs.length > 0 ? (
                <>
                  {(() => {
                    const index = activeBlogIndex % blogs.length;
                    const blog = blogs[index];
                    return (
                      <div className="mt-4 grid grid-cols-[1.3fr,1fr] gap-3 items-center">
                        <div>
                          <p className="text-xs font-semibold text-slate-900 mb-1">{blog.title}</p>
                          <p className="text-[11px] text-slate-600 leading-snug">
                            {blog.description}
                          </p>
                        </div>
                        <div className="aspect-square rounded-2xl overflow-hidden bg-emerald-50">
                          {blog.icon ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={blog.icon}
                              alt={blog.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div
                              className="w-full h-full bg-cover bg-center"
                              style={{ backgroundImage: "url('/images/product/product-01.png')" }}
                            />
                          )}
                        </div>
                      </div>
                    );
                  })()}
                  {blogs.length > 1 && (
                    <div className="mt-3 flex justify-center gap-1.5">
                      {blogs.map((blog, idx) => (
                        <button
                          key={blog.id}
                          type="button"
                          onClick={() => setActiveBlogIndex(idx)}
                          className={`h-1.5 rounded-full transition-all ${
                            idx === activeBlogIndex
                              ? "w-4 bg-emerald-600"
                              : "w-1.5 bg-emerald-200"
                          }`}
                          aria-label={`Go to blog ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-4 text-center">
                  <p className="text-[11px] text-slate-600">Add blog posts in the dashboard to show them here.</p>
                </div>
              )}
            </section>

            <section className="px-6 pt-5 pb-7 bg-white">
              <h2 className="text-center text-sm font-semibold text-emerald-800 tracking-wide flex items-center justify-center gap-3">
                <span className="flex-1 h-px bg-emerald-100" />
                Business Hours
                <span className="flex-1 h-px bg-emerald-100" />
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 text-[11px] text-slate-700">
                {BUSINESS_HOURS_DAY_ORDER.map((day) => {
                  const h = card.businessHours?.[day];
                  const time = h ? (h.enabled ? `${h.start} - ${h.end}` : "Closed") : "—";
                  return (
                    <p key={day}>
                      <span className="font-semibold">{day}</span> {time}
                    </p>
                  );
                })}
              </div>
            </section>

            <section className="px-6 pt-5 pb-7 bg-white">
              <h2 className="text-center text-sm font-semibold text-emerald-800 tracking-wide flex items-center justify-center gap-3">
                <span className="flex-1 h-px bg-emerald-100" />
                QR Code
                <span className="flex-1 h-px bg-emerald-100" />
              </h2>
              <div className="mt-4 flex flex-col items-center gap-4">
                <div className="w-32 h-32 rounded-2xl bg-white border border-emerald-200 flex items-center justify-center p-1">
                  {qrDataUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={qrDataUrl} alt="QR Code" className="w-full h-full object-contain" />
                  ) : (
                    <div className="w-24 h-24 bg-slate-200 animate-pulse rounded" />
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window === "undefined") return;
                    const qrPath = (card.slug || (card.previewUrl ?? "").replace(/^https?:\/\/[^/]+/, "").replace(/^\/+/, "")) || "";
                    downloadQrPng(`${window.location.origin}/${qrPath}`, "vcard-qr.png", {
                      fgColor: card.qrCodeColor || "#000000",
                      bgColor: card.qrBgColor || "#ffffff",
                    });
                  }}
                  className="rounded-full bg-emerald-700 text-white text-xs font-semibold px-6 py-2.5 shadow-md hover:bg-emerald-800"
                >
                  Download My QR Code
                </button>
              </div>
            </section>

            <section className="px-6 pt-5 pb-7 bg-white">
              <h2 className="text-center text-sm font-semibold text-emerald-800 tracking-wide flex items-center justify-center gap-3">
                <span className="flex-1 h-px bg-emerald-100" />
                Contact Us
                <span className="flex-1 h-px bg-emerald-100" />
              </h2>
              {contactSent ? (
                <p className="mt-4 text-center text-sm text-emerald-700">Thanks! We&apos;ll get back to you soon.</p>
              ) : contactError ? (
                <p className="mt-4 text-center text-sm text-red-600">Something went wrong. Please try again.</p>
              ) : null}
              {!contactSent && (
                <form
                  className="mt-4 space-y-3"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    const name = (formData.get("contactName") as string)?.trim() || "";
                    const email = (formData.get("contactEmail") as string)?.trim() || "";
                    const phone = (formData.get("contactPhone") as string)?.trim() || "";
                    const message = (formData.get("contactMessage") as string)?.trim() || "";
                    const website = (formData.get("website") as string)?.trim() || "";
                    if (!name || !email || !message) return;
                    setContactError(false);
                    try {
                      await apiSubmitInquiry(card.id, { name, email, phone: phone || undefined, message, website });
                      setContactSent(true);
                      if (cardFromContext) {
                        const inquiry = { id: `inquiry-${Date.now()}`, name, email, phone: phone || undefined, message, date: new Date().toISOString() };
                        setVCards((prev) =>
                          prev.map((c) => (c.id === card.id ? { ...c, inquiries: [...(c.inquiries ?? []), inquiry] } : c))
                        );
                      }
                    } catch (_) {
                      setContactSent(false);
                      setContactError(true);
                    }
                  }}
                >
                  <input aria-hidden="true" tabIndex={-1} type="text" name="website" className="absolute opacity-0 pointer-events-none h-0 w-0" />
                  <input name="contactName" required className="w-full rounded-full bg-slate-50 border border-emerald-100 px-4 text-[11px] text-slate-700 placeholder-slate-400 h-9" placeholder="Full Name" />
                  <input name="contactEmail" type="email" required className="w-full rounded-full bg-slate-50 border border-emerald-100 px-4 text-[11px] text-slate-700 placeholder-slate-400 h-9" placeholder="Email Address" />
                  <input name="contactPhone" type="tel" className="w-full rounded-full bg-slate-50 border border-emerald-100 px-4 text-[11px] text-slate-700 placeholder-slate-400 h-9" placeholder="Phone Number" />
                  <textarea name="contactMessage" required className="w-full rounded-2xl bg-slate-50 border border-emerald-100 px-4 pt-2 text-[11px] text-slate-700 placeholder-slate-400 h-20 resize-none" placeholder="Your Message" />
                  <button type="submit" className="mt-1 w-full rounded-full bg-emerald-700 text-white text-xs font-semibold py-2.5 shadow-md hover:bg-emerald-800">
                    Send Message
                  </button>
                </form>
              )}
            </section>

            <section className="no-print px-6 pt-5 pb-8 bg-white relative">
              {copyToast && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 rounded-lg bg-emerald-800 text-white text-xs font-medium px-4 py-2 shadow-lg">
                  Link copied!
                </div>
              )}
              <h2 className="text-center text-sm font-semibold text-emerald-800 tracking-wide flex items-center justify-center gap-3">
                <span className="flex-1 h-px bg-emerald-100" />
                Share &amp; Save
                <span className="flex-1 h-px bg-emerald-100" />
              </h2>
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 px-3 py-2 text-[11px] text-slate-700 flex items-center justify-between gap-2">
                  <span className="truncate">{baseUrl || "https://example.com"}/{slug}</span>
                  <div className="flex gap-1 shrink-0">
                    {typeof navigator !== "undefined" && navigator.share && (
                      <button
                        type="button"
                        onClick={() => {
                          navigator.share({ title: card.title, text: card.description || card.title, url: `${window.location.origin}/${slug}` }).catch(() => {});
                        }}
                        className="text-emerald-700 hover:underline"
                        aria-label="Share"
                      >
                        Share
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          navigator.clipboard.writeText(`${window.location.origin}/${slug}`);
                          setCopyToast(true);
                          setTimeout(() => setCopyToast(false), 2000);
                        }
                      }}
                      className="text-emerald-700 hover:underline"
                      aria-label="Copy link"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => downloadVCard(card, baseUrl)}
                  className="w-full rounded-full bg-emerald-700 text-white text-xs font-semibold py-2.5 shadow-md hover:bg-emerald-800"
                >
                  Download vCard (.vcf) / Add to Contact
                </button>
                <div className="pt-2 border-t border-emerald-100">
                  <p className="text-[11px] text-slate-600 mb-2">Subscribe for updates</p>
                  {subscribed ? (
                    <p className="text-xs text-emerald-700">You&apos;re subscribed. We&apos;ll notify you about updates.</p>
                  ) : (
                    <form
                      className="flex gap-2"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        const email = subscribeEmail.trim();
                        if (!email) return;
                        try {
                          await apiSubscribe(card.id, email);
                          setSubscribed(true);
                        } catch (_) {}
                      }}
                    >
                      <input
                        type="email"
                        value={subscribeEmail}
                        onChange={(e) => setSubscribeEmail(e.target.value)}
                        placeholder="Your email"
                        className="flex-1 rounded-full border border-emerald-200 px-3 py-2 text-[11px] text-slate-700 placeholder-slate-400"
                      />
                      <button type="submit" className="rounded-full bg-emerald-600 text-white text-[11px] font-medium px-4 py-2">
                        Subscribe
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  const headerGradient = card.templatePrimaryColor
    ? undefined
    : "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900";

  const primaryColor = card.templatePrimaryColor ?? "#facc15"; // amber-400 fallback

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fdf7ec] px-4 py-8 flex flex-col items-center pb-12">
      <div className="relative w-full max-w-sm space-y-6 flex-shrink-0">
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-slate-800 via-slate-900 to-black shadow-2xl" />

        <div className="relative rounded-[3rem] overflow-hidden border border-black/40 bg-black/60">
          <div
            className={`h-40 w-full ${headerGradient ?? ""}`}
            style={headerGradient ? undefined : { backgroundColor: primaryColor }}
          />

          <div className="px-6 pb-8 pt-4 space-y-6">
            <div className="-mt-10 flex items-center gap-4">
              <div className="h-20 w-20 rounded-full border-4 border-white/30 bg-gray-700 overflow-hidden flex items-center justify-center text-2xl text-gray-300">
                {card.title.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-lg font-semibold text-white leading-tight">{card.title}</p>
                <p className="text-xs text-slate-300 mt-1">
                  {card.templateName ? `Template: ${card.templateName}` : "Digital Business Card"}
                </p>
              </div>
            </div>

            {(card.description || card.email || card.phone) && (
              <div className="mt-4 rounded-2xl bg-black/50 border border-white/10 px-4 py-3 space-y-1 text-[11px] text-slate-300">
                {card.description && <p className="leading-relaxed">{card.description}</p>}
                {card.email && <p className="truncate">✉ {card.email}</p>}
                {card.phone && <p className="truncate">☎ {card.phone}</p>}
              </div>
            )}
            <p className="mt-5 text-xs leading-relaxed text-slate-200/90">
              Tap the button below to save this contact to your phone. You can always come back at
              <span className="font-medium"> /{slug}</span>.
            </p>

            <div className="mt-6 flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={() => downloadVCard(card, typeof window !== "undefined" ? window.location.origin : "")}
                className="inline-flex items-center gap-2 rounded-full px-7 py-2.5 text-xs font-semibold text-gray-900 shadow-md hover:opacity-90 transition-colors"
                style={{ backgroundColor: primaryColor }}
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-[10px] text-amber-300 font-bold">
                  +
                </span>
                Download vCard / Add to contact
              </button>
              <div className="flex gap-3">
                {typeof navigator !== "undefined" && navigator.share && (
                  <button
                    type="button"
                    onClick={() => navigator.share({ title: card.title, text: card.description || card.title, url: `${window.location.origin}/${slug}` }).catch(() => {})}
                    className="text-xs text-slate-300 hover:text-white underline"
                  >
                    Share
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      navigator.clipboard.writeText(`${window.location.origin}/${slug}`);
                      setCopyToast(true);
                      setTimeout(() => setCopyToast(false), 2000);
                    }
                  }}
                  className="text-xs text-slate-300 hover:text-white underline"
                >
                  Copy link
                </button>
              </div>
              {copyToast && (
                <span className="text-xs text-green-400">Link copied!</span>
              )}
            </div>

            {termsHtml && (
              <div className="mt-4 rounded-2xl bg-black/70 border border-white/10 px-4 py-4 space-y-2">
                <h2 className="text-center text-xs font-semibold text-white tracking-wide">
                  Terms &amp; Conditions
                </h2>
                <div
                  className="text-[11px] text-slate-300 leading-relaxed max-h-56 overflow-y-auto space-y-1"
                  dangerouslySetInnerHTML={{ __html: termsHtml }}
                />
              </div>
            )}

            {privacyHtml && (
              <div className="mt-3 rounded-2xl bg-black/70 border border-white/10 px-4 py-4 space-y-2">
                <h2 className="text-center text-xs font-semibold text-white tracking-wide">
                  Privacy Policy
                </h2>
                <div
                  className="text-[11px] text-slate-300 leading-relaxed max-h-56 overflow-y-auto space-y-1"
                  dangerouslySetInnerHTML={{ __html: privacyHtml }}
                />
              </div>
            )}

            {blogs.length > 0 && (
              <div className="mt-4 rounded-2xl bg-black/70 border border-white/10 px-4 py-4 space-y-3">
                <h2 className="text-center text-xs font-semibold text-white tracking-wide">
                  Blog
                </h2>
                {(() => {
                  const index = activeBlogIndex % blogs.length;
                  const blog = blogs[index];
                  return (
                    <>
                      <article className="rounded-2xl overflow-hidden bg-black/60 border border-white/15">
                        {blog.icon && (
                          <div className="h-32 w-full bg-black">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={blog.icon}
                              alt={blog.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        )}
                        <div className="px-4 py-3 space-y-1">
                          <p className="text-[11px] font-semibold text-white truncate">
                            {blog.title}
                          </p>
                          <p className="text-[10px] text-slate-300 leading-snug line-clamp-3">
                            {blog.description}
                          </p>
                        </div>
                      </article>
                      {blogs.length > 1 && (
                        <div className="flex justify-center gap-1.5 pt-1">
                          {blogs.map((b, idx) => (
                            <button
                              key={b.id}
                              type="button"
                              onClick={() => setActiveBlogIndex(idx)}
                              className={`h-1.5 rounded-full transition-all ${
                                idx === activeBlogIndex
                                  ? "w-4 bg-white"
                                  : "w-1.5 bg-white/30"
                              }`}
                              aria-label={`Go to blog ${idx + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

