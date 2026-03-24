'use client';

import React, { useEffect, useState, useRef } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { useVCards } from "@/context/VCardsContext";
import { downloadVCard } from "@/lib/vcard";
import { generateQrDataUrl, downloadQrPng } from "@/lib/qr";
import { apiIncrementView, apiSubmitInquiry, apiSubscribe } from "@/lib/vcards-api";
import type { VCardItem } from "@/context/VCardsContextTypes";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";
import { CafeVCardTemplate } from "@/components/CafeVCardTemplate";
import { CorporateVCardTemplate } from "@/components/CorporateVCardTemplate";
import { Corporate1VCardTemplate } from "@/components/Corporate1VCardTemplate";
import { Corporate2VCardTemplate } from "@/components/Corporate2VCardTemplate";
import { Corporate3VCardTemplate } from "@/components/Corporate3VCardTemplate";
import { Corporate4VCardTemplate } from "@/components/Corporate4VCardTemplate";
import { PlaseryExecutiveVCardTemplate } from "@/components/PlaseryExecutiveVCardTemplate";
import { MedinovaFitnessVCardTemplate } from "@/components/MedinovaFitnessVCardTemplate";
import { FloralVCardTemplate } from "@/components/FloralVCardTemplate";
import { DennisPortfolioVCardTemplate } from "@/components/DennisPortfolioVCardTemplate";
import { LegalVCardTemplate } from "@/components/LegalVCardTemplate";
import { MedicalVCardTemplate } from "@/components/MedicalVCardTemplate";
import { MinimalVCardTemplate } from "@/components/MinimalVCardTemplate";
import { PhotoVCardTemplate } from "@/components/PhotoVCardTemplate";
import { PropertyVCardTemplate } from "@/components/PropertyVCardTemplate";
import { TravelVCardTemplate } from "@/components/TravelVCardTemplate";
import { CreativeVCardTemplate } from "@/components/CreativeVCardTemplate";
import { Corporate7VCardTemplate } from "@/components/Corporate7VCardTemplate";
import { Corporate8VCardTemplate } from "@/components/Corporate8VCardTemplate";
import { Temp22VCardTemplate } from "@/components/Temp22VCardTemplate";
import { Temp23VCardTemplate } from "@/components/Temp23VCardTemplate";
import { Temp24VCardTemplate } from "@/components/Temp24VCardTemplate";
import { Temp25VCardTemplate } from "@/components/Temp25VCardTemplate";
import { Temp26VCardTemplate } from "@/components/Temp26VCardTemplate";
import { Temp27VCardTemplate } from "@/components/Temp27VCardTemplate";
import { Temp28VCardTemplate } from "@/components/Temp28VCardTemplate";
import { Temp29VCardTemplate } from "@/components/Temp29VCardTemplate";
import { Temp30VCardTemplate } from "@/components/Temp30VCardTemplate";

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
  const [elitoProjectsCount, setElitoProjectsCount] = useState(0);
  const [elitoClientsCount, setElitoClientsCount] = useState(0);
  const [elitoAwardsCount, setElitoAwardsCount] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (!card?.requiresPassword || !slug || typeof window === "undefined") return;
    if (sessionStorage.getItem(`vcard-unlocked-${slug}`) === "1") setUnlocked(true);
  }, [card?.requiresPassword, slug]);

  // Animate counters and show scroll-to-top button for Elito layout
  useEffect(() => {
    if (slug !== "thirdvcard") return;
    let frameId: number | null = null;
    const duration = 1500;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setElitoProjectsCount(Math.floor(1500 * progress));
      setElitoClientsCount(Math.floor(250 * progress));
      setElitoAwardsCount(Math.floor(12 * progress));
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    const onScroll = () => {
      if (typeof window === "undefined") return;
      setShowScrollTop(window.scrollY > 240);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
      onScroll();
    }

    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", onScroll);
      }
    };
  }, [slug]);

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
    apiIncrementView(card.id).catch(() => { });
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
      dotStyle: card.qrDotStyle || "square",
      eyeStyle: card.qrEyeStyle || "square",
    }).then(setQrDataUrl);
  }, [card]);

  // Blogs + auto-rotate state (must be declared before any early returns)
  const blogs =
    card && Array.isArray(card.blogs)
      ? (card.blogs as { id: string; title: string; description: string; icon: string }[])
      : [];

  const [activeBlogIndex, setActiveBlogIndex] = useState(0);

  const isFlowerGardenOrExecutiveTemplate =
    !!card &&
    (() => {
      const name = (card.templateName || card.title || "").toLowerCase();
      const isFlowerLike =
        card.selectedTemplateId === 6 ||
        name.includes("flower garden") ||
        name.includes("jenny wilson");
      const isExecutiveLike =
        card.selectedTemplateId === 1 ||
        name.includes("executive pro");
      const isTravelAgencyOneLike =
        card.selectedTemplateId === 56 ||
        name.includes("travel agency 1");
      // Ye saare Dennis Tailwind CSS portfolio wale layouts use karte hain
      return isFlowerLike || isExecutiveLike || isTravelAgencyOneLike;
    })();

  // Auto-rotate blogs on public card (for all templates that show blogs)
  useEffect(() => {
    if (blogs.length <= 1) return;
    const id = setInterval(() => {
      setActiveBlogIndex((i) => (i + 1) % blogs.length);
    }, 4000);
    return () => clearInterval(id);
  }, [blogs.length]);

  useEffect(() => {
    // Forge hide ALL scrollbars globally for this page while allowing scroll
    const style = document.createElement("style");
    style.id = "hide-scrollbar-style";
    style.innerHTML = `
      *::-webkit-scrollbar { display: none !important; }
      * { -ms-overflow-style: none !important; scrollbar-width: none !important; }
      html, body { overflow-x: hidden !important; }
    `;
    document.head.appendChild(style);
    return () => {
      const existingStyle = document.getElementById("hide-scrollbar-style");
      if (existingStyle) document.head.removeChild(existingStyle);
    };
  }, []);

  if (!card) {
    const loading = !slugFetchDone && !cardFromContext;
    if (loading) {
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
    notFound();
    return null;
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
  const hasRenderableHtml = (html?: string) =>
    !!html && html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim().length > 0;
  const showTerms = hasRenderableHtml(termsHtml);
  const showPrivacy = hasRenderableHtml(privacyHtml);
  const shouldUseInlineLegalPlacement =
    /corporate|cooporate/i.test(`${card.templateName || ""} ${card.title || ""}`) ||
    [7, 13, 14, 15, 16, 17, 18, 19, 20, 21].includes(card.selectedTemplateId || 0);

  const VCardLegalSections = () =>
    showTerms || showPrivacy ? (
      <div className="w-full max-w-[540px] mt-4 rounded-3xl border border-gray-200 bg-white px-4 py-5 sm:px-5 sm:py-6 shadow-sm">
        {showTerms && (
          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">Terms &amp; Conditions</h2>
            <div
              className="prose prose-sm max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: termsHtml ?? "" }}
            />
          </section>
        )}
        {showPrivacy && (
          <section className={`${showTerms ? "mt-4" : ""} rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5`}>
            <h2 className="text-sm font-semibold text-gray-900 mb-3">Privacy Policy</h2>
            <div
              className="prose prose-sm max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: privacyHtml ?? "" }}
            />
          </section>
        )}
      </div>
    ) : null;

  const VCardWidthShell = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-gray-100 flex justify-center px-0 sm:px-4 py-0 sm:py-8 no-scrollbar overflow-x-hidden">
      <div className="w-full max-w-[540px] no-scrollbar">
        {children}
        {!shouldUseInlineLegalPlacement && <VCardLegalSections />}
      </div>
    </div>
  );

  const lowerSlug = slug.toLowerCase();
  
  if (card.selectedTemplateId === 22 || lowerSlug === "temp-22" || lowerSlug.includes("temp22")) {
    return (
      <VCardWidthShell>
        <Temp22VCardTemplate card={card} slug={slug} baseUrl={baseUrl} onDownloadVCard={() => downloadVCard(card, baseUrl)} />
      </VCardWidthShell>
    );
  }
  if (card.selectedTemplateId === 23 || lowerSlug === "temp-23" || lowerSlug.includes("temp23")) {
    return (
      <VCardWidthShell>
        <Temp23VCardTemplate card={card} slug={slug} baseUrl={baseUrl} onDownloadVCard={() => downloadVCard(card, baseUrl)} />
      </VCardWidthShell>
    );
  }
  if (card.selectedTemplateId === 24 || lowerSlug === "temp-24" || lowerSlug.includes("temp24")) {
    return (
      <VCardWidthShell>
        <Temp24VCardTemplate card={card} slug={slug} baseUrl={baseUrl} onDownloadVCard={() => downloadVCard(card, baseUrl)} />
      </VCardWidthShell>
    );
  }
  if (card.selectedTemplateId === 25 || lowerSlug === "temp-25" || lowerSlug.includes("temp25")) {
    return (
      <VCardWidthShell>
        <Temp25VCardTemplate card={card} slug={slug} baseUrl={baseUrl} onDownloadVCard={() => downloadVCard(card, baseUrl)} />
      </VCardWidthShell>
    );
  }
  if (card.selectedTemplateId === 26 || lowerSlug === "temp-26" || lowerSlug.includes("temp26")) {
    return (
      <VCardWidthShell>
        <Temp26VCardTemplate card={card} slug={slug} baseUrl={baseUrl} onDownloadVCard={() => downloadVCard(card, baseUrl)} />
      </VCardWidthShell>
    );
  }
  if (card.selectedTemplateId === 27 || lowerSlug === "temp-27" || lowerSlug.includes("temp27")) {
    return (
      <VCardWidthShell>
        <Temp27VCardTemplate card={card} slug={slug} baseUrl={baseUrl} onDownloadVCard={() => downloadVCard(card, baseUrl)} />
      </VCardWidthShell>
    );
  }
  if (card.selectedTemplateId === 28 || lowerSlug === "temp-28" || lowerSlug.includes("temp28")) {
    return (
      <VCardWidthShell>
        <Temp28VCardTemplate card={card} slug={slug} baseUrl={baseUrl} onDownloadVCard={() => downloadVCard(card, baseUrl)} />
      </VCardWidthShell>
    );
  }
  if (card.selectedTemplateId === 29 || lowerSlug === "temp-29" || lowerSlug.includes("temp29")) {
    return (
      <VCardWidthShell>
        <Temp29VCardTemplate card={card} slug={slug} baseUrl={baseUrl} onDownloadVCard={() => downloadVCard(card, baseUrl)} />
      </VCardWidthShell>
    );
  }
  if (card.selectedTemplateId === 30 || lowerSlug === "temp-30" || lowerSlug.includes("temp30")) {
    return (
      <VCardWidthShell>
        <Temp30VCardTemplate card={card} slug={slug} baseUrl={baseUrl} onDownloadVCard={() => downloadVCard(card, baseUrl)} />
      </VCardWidthShell>
    );
  }


  const isCafeTemplate =
    card.templateName?.trim().toLowerCase() === "cafe vcard";
  if (isCafeTemplate) {
    return (
      <VCardWidthShell>
        <CafeVCardTemplate
          card={card}
          slug={slug}
          baseUrl={baseUrl}
          onDownloadVCard={() => downloadVCard(card, baseUrl)}
        />
      </VCardWidthShell>
    );
  }

  const isCorporate1Template = card.selectedTemplateId === 13 || (card.templateName || "").toLowerCase().includes("corporate (1)");
  if (isCorporate1Template) {
    return (
      <VCardWidthShell>
        <Corporate1VCardTemplate card={card} slug={slug} baseUrl={baseUrl} onDownloadVCard={() => downloadVCard(card, baseUrl)} />
      </VCardWidthShell>
    );
  }

  const isCorporate2Template = card.selectedTemplateId === 14 || (card.templateName || "").toLowerCase().includes("corporate (2)");
  if (isCorporate2Template) {
    return (
      <VCardWidthShell>
        <Corporate2VCardTemplate card={card} slug={slug} baseUrl={baseUrl} onDownloadVCard={() => downloadVCard(card, baseUrl)} />
      </VCardWidthShell>
    );
  }

  const isCorporate3Template =
    card.selectedTemplateId === 15 ||
    (card.templateName || "").toLowerCase().includes("corporate (3)") ||
    (card.templateName || "").toLowerCase().includes("cooporate (3)") ||
    (card.templateName || "").toLowerCase().includes("corporate 3") ||
    (card.templateName || "").toLowerCase().includes("cooporate 3") ||
    (card.title || "").toLowerCase().includes("corporate 3") ||
    (card.title || "").toLowerCase().includes("cooporate 3");
  if (isCorporate3Template) {
    return (
      <VCardWidthShell>
        <Corporate3VCardTemplate card={card} slug={slug} baseUrl={baseUrl} onDownloadVCard={() => downloadVCard(card, baseUrl)} />
      </VCardWidthShell>
    );
  }

  const isCorporate4Template =
    card.selectedTemplateId === 16 ||
    (card.templateName || "").toLowerCase().includes("corporate (4)") ||
    (card.templateName || "").toLowerCase().includes("cooporate (4)") ||
    (card.templateName || "").toLowerCase().includes("corporate 4") ||
    (card.templateName || "").toLowerCase().includes("cooporate 4") ||
    (card.title || "").toLowerCase().includes("corporate 4") ||
    (card.title || "").toLowerCase().includes("cooporate 4") ||
    (slug === "cooporate-4") ||
    (slug === "corporate-4");
  if (isCorporate4Template) {
    return (
      <VCardWidthShell>
        <Corporate4VCardTemplate card={card} slug={slug} baseUrl={baseUrl} onDownloadVCard={() => downloadVCard(card, baseUrl)} />
      </VCardWidthShell>
    );
  }

  const isCorporate7Template =
    card.selectedTemplateId === 19 ||
    card.selectedTemplateId === 21 ||
    (card.templateName || "").toLowerCase().includes("corporate (7)") ||
    (card.templateName || "").toLowerCase().includes("cooporate (7)") ||
    (card.templateName || "").toLowerCase().includes("corporate 7") ||
    (card.templateName || "").toLowerCase().includes("cooporate 7") ||
    (card.title || "").toLowerCase().includes("corporate 7") ||
    (card.title || "").toLowerCase().includes("cooporate 7") ||
    (slug === "cooporate-7") ||
    (slug === "corporate-7");
  if (isCorporate7Template) {
    return (
      <VCardWidthShell>
        <Corporate7VCardTemplate card={card} slug={slug} baseUrl={baseUrl} onDownloadVCard={() => downloadVCard(card, baseUrl)} />
      </VCardWidthShell>
    );
  }

  const isCorporate8Template =
    (card.selectedTemplateId === 22 && (card.templateName || "").toLowerCase().includes("corporate (8)")) ||
    (card.templateName || "").toLowerCase().includes("corporate (8)") ||
    (card.templateName || "").toLowerCase().includes("cooporate (8)") ||
    (card.templateName || "").toLowerCase().includes("corporate 8") ||
    (card.title || "").toLowerCase().includes("corporate 8") ||
    (card.title || "").toLowerCase().includes("cooporate 8") ||
    (slug === "cooporate-8") ||
    (slug === "corporate-8");

  if (isCorporate8Template) {
    return (
      <VCardWidthShell>
        <Corporate8VCardTemplate card={card} slug={slug} baseUrl={baseUrl} onDownloadVCard={() => downloadVCard(card, baseUrl)} />
      </VCardWidthShell>
    );
  }

  const isCorporateTemplate =
    [7, 17, 18, 19, 20].includes(card.selectedTemplateId || 0) ||
    ((card.templateName || card.title || "").toLowerCase().includes("corporate") ||
      (card.templateName || card.title || "").toLowerCase().includes("cooporate"));

  if (isCorporateTemplate) {
    return (
      <VCardWidthShell>
        <CorporateVCardTemplate
          card={card}
          slug={slug}
          baseUrl={baseUrl}
          qrDataUrl={qrDataUrl}
          onDownloadVCard={() => downloadVCard(card, baseUrl)}
        />
      </VCardWidthShell>
    );
  }

  const isExecutiveTemplate =
    card.selectedTemplateId === 1 ||
    (card.templateName || card.title || "").toLowerCase().includes("executive pro") ||
    (card.templateName || "").toLowerCase().includes("executive");

  if (isExecutiveTemplate) {
    return (
      <VCardWidthShell>
        <PlaseryExecutiveVCardTemplate
          card={card}
          slug={slug}
          baseUrl={baseUrl}
          onDownloadVCard={() => downloadVCard(card, baseUrl)}
        />
      </VCardWidthShell>
    );
  }

  const isFitnessTemplate =
    card.selectedTemplateId === 12 ||
    (card.templateName || card.title || "").toLowerCase().includes("fitness") ||
    (card.templateName || "").toLowerCase().includes("gym");

  if (isFitnessTemplate) {
    return (
      <VCardWidthShell>
        <MedinovaFitnessVCardTemplate
          card={card}
          slug={slug}
          baseUrl={baseUrl}
          onDownloadVCard={() => downloadVCard(card, baseUrl)}
        />
      </VCardWidthShell>
    );
  }

  const isFloralTemplate =
    card.selectedTemplateId === 6 ||
    (card.templateName || card.title || "").toLowerCase().includes("floral") ||
    (card.templateName || "").toLowerCase().includes("flower garden");

  if (isFloralTemplate) {
    return (
      <VCardWidthShell>
        <FloralVCardTemplate
          card={card}
          slug={slug}
          baseUrl={baseUrl}
          onDownloadVCard={() => downloadVCard(card, baseUrl)}
        />
      </VCardWidthShell>
    );
  }

  const isDennisPortfolioTemplate =
    (card.templateName || card.title || "").toLowerCase().includes("dennis") ||
    (card.templateName || "").toLowerCase().includes("personal portfolio");

  if (isDennisPortfolioTemplate) {
    return (
      <VCardWidthShell>
        <DennisPortfolioVCardTemplate
          card={card}
          slug={slug}
          baseUrl={baseUrl}
          onDownloadVCard={() => downloadVCard(card, baseUrl)}
        />
      </VCardWidthShell>
    );
  }

  const isLegalTemplate =
    card.selectedTemplateId === 10 ||
    (card.templateName || card.title || "").toLowerCase().includes("legal") ||
    (card.templateName || "").toLowerCase().includes("borox");

  if (isLegalTemplate) {
    return (
      <VCardWidthShell>
        <LegalVCardTemplate
          card={card}
          slug={slug}
          baseUrl={baseUrl}
          onDownloadVCard={() => downloadVCard(card, baseUrl)}
        />
      </VCardWidthShell>
    );
  }

  const isTravelTemplate =
    card.selectedTemplateId === 5 ||
    (card.templateName || "").toLowerCase().includes("travel") ||
    (card.title || "").toLowerCase().includes("travel");

  if (isTravelTemplate) {
    return (
      <VCardWidthShell>
        <TravelVCardTemplate
          card={card}
          slug={slug}
          baseUrl={baseUrl}
          onDownloadVCard={() => downloadVCard(card, baseUrl)}
        />
      </VCardWidthShell>
    );
  }

  const isMedicalTemplate =
    card.selectedTemplateId === 9 ||
    (card.templateName || card.title || "").toLowerCase().includes("medical") ||
    (card.templateName || "").toLowerCase().includes("geeky");

  if (isMedicalTemplate) {
    return (
      <VCardWidthShell>
        <MedicalVCardTemplate
          card={card}
          slug={slug}
          baseUrl={baseUrl}
          onDownloadVCard={() => downloadVCard(card, baseUrl)}
        />
      </VCardWidthShell>
    );
  }

  const isPhotoTemplate =
    (card.templateName || card.title || "").toLowerCase().includes("photo") ||
    (card.templateName || "").toLowerCase().includes("material");

  if (isPhotoTemplate) {
    return (
      <VCardWidthShell>
        <PhotoVCardTemplate
          card={card}
          slug={slug}
          baseUrl={baseUrl}
          onDownloadVCard={() => downloadVCard(card, baseUrl)}
        />
      </VCardWidthShell>
    );
  }

  const isPropertyTemplate =
    (card.templateName || card.title || "").toLowerCase().includes("property") ||
    (card.templateName || "").toLowerCase().includes("atlas") ||
    (card.templateName || "").toLowerCase().includes("real estate");

  if (isPropertyTemplate) {
    return (
      <VCardWidthShell>
        <PropertyVCardTemplate
          card={card}
          slug={slug}
          baseUrl={baseUrl}
          onDownloadVCard={() => downloadVCard(card, baseUrl)}
        />
      </VCardWidthShell>
    );
  }

  const isMinimalTemplate =
    slug === "second-card" ||
    (card.templateName || card.title || "").toLowerCase().includes("minimal") ||
    (card.templateName || "").toLowerCase().includes("lasles");

  if (isMinimalTemplate) {
    return (
      <VCardWidthShell>
        <MinimalVCardTemplate
          card={card}
          slug={slug}
          baseUrl={baseUrl}
          onDownloadVCard={() => downloadVCard(card, baseUrl)}
        />
      </VCardWidthShell>
    );
  }

  // Elito-style Tailwind hero layout (sirf jab Medical Practice template use na ho – e.g. thirdvcard ab Dennis-style use karta hai)
  const isElitoHeroTemplate = slug === "thirdvcard";

  if (isElitoHeroTemplate && !isFlowerGardenOrExecutiveTemplate) {
    const title = card.title || "I am Ronald.";
    const greeting = "Hello,";
    const occupation = card.occupation || card.tagline || "UI/UX Designer";
    const descriptionText =
      card.description ||
      "Must explain how all this mistaken idea of denouncing pleasure and praising pain was born and we will give you a complete account.";

    const website =
      card.website && card.website.trim()
        ? card.website.trim().startsWith("http")
        ? card.website.trim()
          : `https://${card.website.trim()}`
        : undefined;

    return (
      <div className="min-h-screen bg-[#131313] text-white">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background blurred circles inspired by Elito */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-40 -top-24 h-[500px] w-[500px] rounded-full bg-[#FF4155] opacity-40 blur-[200px]" />
            <div className="absolute right-[-120px] top-32 h-[480px] w-[480px] rounded-full bg-[#FFE600] opacity-40 blur-[180px]" />
            <div className="absolute right-[-80px] -top-40 h-[460px] w-[460px] rounded-full bg-[#48C5EA] opacity-40 blur-[180px]" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-6xl px-6 md:px-10 gap-10 md:gap-16">
            {/* Left: Text */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-[60px] leading-[1.1] font-bold mb-3 md:text-[72px]">
                <span className="block text-[42px] text-[#FFE600] md:text-[48px]">
                  {greeting}
                </span>
                {title}
              </h2>
              <h5 className="text-[#59C378] text-[26px] md:text-[30px] font-semibold mb-4">
                {occupation}
              </h5>
              <p className="text-[16px] md:text-[18px] leading-relaxed text-slate-100/90 mb-6">
                {descriptionText}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => downloadVCard(card, baseUrl)}
                  className="inline-flex items-center justify-center rounded-full bg-[#FFE600] text-[#131313] font-semibold text-sm md:text-base px-6 md:px-8 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:bg-[#f7d800] transition-colors"
                >
                  Download vCard / Add to Contact
                </button>
                {website && (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 text-sm md:text-base px-5 py-2.5 hover:bg-white/10 transition-colors"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>

            {/* Right: Profile circle + floating icons / stats */}
            <div className="relative w-full max-w-md md:max-w-sm">
              <div className="relative mx-auto h-[320px] w-[320px] rounded-full overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.6)] border-[6px] border-white/10">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="320px"
                    unoptimized={card.image.startsWith("data:")}
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-[#FF4155] via-[#FFE600] to-[#48C5EA] text-6xl font-bold text-[#131313]">
                    {card.title?.charAt(0).toUpperCase() || "T"}
                  </div>
                )}
              </div>

              {/* Floating stat card bottom-left */}
              <div className="absolute left-0 top-1/3 -translate-y-1/2 w-[110px] h-[110px] p-4 bg-white rounded-[24px] shadow-[0_18px_40px_rgba(0,0,0,0.35)] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xl font-semibold text-[#202020]">
                    {elitoProjectsCount}+
                  </p>
                  <p className="text-[11px] text-[#585858] leading-tight">
                    Complete Projects
                  </p>
                </div>
              </div>

              {/* Floating skill icons top-right & bottom-right */}
              <div className="absolute right-0 top-1/4 w-[100px] h-[100px] bg-white rounded-[24px] shadow-[0_18px_40px_rgba(0,0,0,0.35)] flex items-center justify-center text-[#202020] text-xs font-semibold">
                Skill 1
              </div>
              <div className="absolute right-4 bottom-0 w-[100px] h-[100px] bg-white rounded-[24px] shadow-[0_18px_40px_rgba(0,0,0,0.35)] flex items-center justify-center text-[#202020] text-xs font-semibold">
                Skill 2
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section
          id="about"
          className="bg-[#111111] border-t border-white/5 py-12 md:py-16 px-6 md:px-10"
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr,0.8fr] gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                About
              </h2>
              <p className="text-sm md:text-base text-slate-100/90 leading-relaxed">
                {card.description ||
                  "I help brands craft modern digital experiences – from UX strategy and interface design to front‑end implementation. Focused on clean visual language, strong layouts and usable, accessible products."}
              </p>
            </div>
            <div className="grid gap-4 text-sm">
              <div className="rounded-2xl bg-[#181818] border border-white/10 px-4 py-3">
                <p className="text-slate-400 text-xs uppercase tracking-[0.16em] mb-1">
                  Email
                </p>
                <p className="text-slate-100 break-all">
                  {card.email || "hello@example.com"}
                </p>
              </div>
              <div className="rounded-2xl bg-[#181818] border border-white/10 px-4 py-3">
                <p className="text-slate-400 text-xs uppercase tracking-[0.16em] mb-1">
                  Location
                </p>
                <p className="text-slate-100">
                  {card.address || "Your City, Country"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services section */}
        <section
          id="services"
          className="bg-[#131313] border-t border-white/5 py-12 md:py-16 px-6 md:px-10"
        >
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 md:mb-10">
              <p className="text-xs tracking-[0.2em] uppercase text-[#59C378] mb-2">
                {card.serviceTitleSmall || "Services"}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                {card.serviceTitle || "What I can do for you"}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3 text-sm">
              {(card.services && card.services.length > 0
                ? card.services
                : [
                  {
                    name: "Product Design",
                    description: "From idea to clickable prototypes and final UI deliverables.",
                  },
                  {
                    name: "Web Experience",
                    description: "Modern responsive websites built with Tailwind and React.",
                  },
                  {
                    name: "Brand Support",
                    description: "Visual systems, design systems and ongoing design support.",
                  },
                ]
              ).map((item: any, idx: number) => (
                <div
                  key={item.id || idx}
                  className="rounded-2xl bg-[#181818] border border-white/10 px-5 py-5 flex flex-col gap-2"
                >
                  <div className="h-9 w-9 rounded-xl bg-[#FFE600]/10 border border-[#FFE600]/40 flex items-center justify-center text-xs font-semibold text-[#FFE600] mb-1 overflow-hidden">
                    {item.icon ? (
                      <img src={item.icon} alt={item.name} className="h-full w-full object-cover" />
                    ) : (
                      <span>✦</span>
                    )}
                  </div>
                  <p className="font-semibold text-[15px]">{item.name}</p>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {item.description}
                  </p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-[11px] font-semibold text-[#FFE600] hover:underline"
                    >
                      Explore →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience / stats section */}
        <section
          id="experience"
          className="bg-[#111111] border-t border-white/5 py-12 md:py-16 px-6 md:px-10"
        >
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-[1.2fr,0.8fr] items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#FFE600] mb-2">
                Experience
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                {card.title || "Designer & Developer"} with{" "}
                <span className="text-[#59C378]">7+ years</span> of work.
              </h2>
              <p className="text-sm md:text-base text-slate-100/90 leading-relaxed">
                From early‑stage startups to established brands, I&apos;ve
                helped teams design and ship digital products that are fast,
                accessible and visually consistent across platforms.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 text-sm">
              {[
                { label: "Projects", value: `${elitoProjectsCount}+` },
                { label: "Happy clients", value: `${elitoClientsCount}+` },
                { label: "Awards", value: `${elitoAwardsCount}` },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-[#181818] border border-white/10 px-4 py-4 text-center"
                >
                  <p className="text-xl font-semibold text-white mb-1">
                    {item.value}
                  </p>
                  <p className="text-xs text-slate-300 uppercase tracking-[0.16em]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline style work experience list */}
          <div className="mt-10 max-w-5xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-semibold">
                My Work Experience
              </h3>
              <p className="mt-2 text-sm text-slate-200/80 max-w-2xl mx-auto">
                Must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and we will give you a
                complete account of the system.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  years: "2015 – 2016",
                  role: "Junior Visual Designer",
                  company: "Trapeza Group, USA",
                },
                {
                  years: "2017 – 2018",
                  role: "UI/UX Designer",
                  company: "Gallerie Ontario, Canada (Remote)",
                },
                {
                  years: "2019 – 2020",
                  role: "Senior UI/UX Designer",
                  company: "Morson Hybrid, Canada",
                },
              ].map((item) => (
                <div
                  key={item.years}
                  className="flex flex-col md:flex-row items-center md:items-stretch gap-4 rounded-2xl bg-[#181818] border border-white/8 px-4 md:px-6 py-4 md:py-5"
                >
                  <div className="w-full md:w-32 text-center md:text-left">
                    <p className="text-sm font-semibold text-white">
                      {item.years}
                    </p>
                  </div>
                  <div className="flex-1 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/8 flex items-center justify-center text-lg">
                      ✺
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">
                        {item.role}
                      </p>
                      <p className="text-xs text-slate-300 mt-1">
                        {item.company}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-40 flex items-center justify-end gap-2 text-xs text-slate-200">
                    <span className="hidden md:inline-block">Go to website</span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section
          id="testimonials"
          className="bg-[#131313] border-t border-white/5 py-12 md:py-16 px-6 md:px-10"
        >
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 md:mb-10 text-center">
              <p className="text-xs tracking-[0.2em] uppercase text-[#48C5EA] mb-2">
                Testimonials
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                What clients say
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3 text-sm">
              {[
                {
                  name: "Rachel Dowson",
                  role: "Creative Director",
                  quote:
                    "Clear process and strong eye for detail. Our new site performs better and is much easier to maintain.",
                },
                {
                  name: "Salman Ahmed",
                  role: "React Developer",
                  quote:
                    "Designs are developer‑friendly and well structured. Hand‑off was smooth and efficient.",
                },
                {
                  name: "Isabella Dowson",
                  role: "CEO, WPLand",
                  quote:
                    "Delivered on time with high quality. A great partner for product design and front‑end.",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl bg-[#181818] border border-white/10 px-5 py-5 flex flex-col gap-3"
                >
                  <p className="text-xs text-slate-300 leading-relaxed">
                    “{t.quote}”
                  </p>
                  <div className="mt-1">
                    <p className="text-sm font-semibold text-white">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-slate-400">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing section */}
        <section
          id="pricing"
          className="bg-[#111111] border-t border-white/5 py-12 md:py-16 px-6 md:px-10"
        >
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 md:mb-10 text-center">
              <p className="text-xs tracking-[0.2em] uppercase text-[#FFE600] mb-2">
                Pricing
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Flexible engagement
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3 text-sm">
              {[
                {
                  name: "Starter",
                  price: "$499",
                  features: ["Single landing page", "Basic brand styling", "1 revision round"],
                },
                {
                  name: "Professional",
                  price: "$1,499",
                  featured: true,
                  features: [
                    "Multi‑page website or product",
                    "Design system basics",
                    "3 revision rounds",
                  ],
                },
                {
                  name: "Retainer",
                  price: "Custom",
                  features: [
                    "Ongoing design support",
                    "Backlog of tasks",
                    "Priority delivery",
                  ],
                },
              ].map((p) => (
                <div
                  key={p.name}
                  className={`rounded-2xl px-5 py-6 flex flex-col gap-3 border ${p.featured
                    ? "bg-[#FFE600] text-[#111111] border-transparent"
                    : "bg-[#181818] border-white/10"
                    }`}
                >
                  <p className="text-xs uppercase tracking-[0.18em] opacity-80">
                    {p.name}
                  </p>
                  <p className="text-2xl font-semibold">{p.price}</p>
                  <ul className="mt-1 space-y-1.5 text-xs">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-1.5">
                        <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-current" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={`mt-3 inline-flex items-center justify-center rounded-full text-xs font-semibold px-4 py-2 border ${p.featured
                      ? "border-[#111111] text-[#111111]"
                      : "border-white/20 text-slate-100 hover:bg-white/10"
                      }`}
                  >
                    Start project
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog / news section */}
        <section
          id="blog"
          className="bg-[#131313] border-t border-white/5 py-12 md:py-16 px-6 md:px-10"
        >
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#48C5EA] mb-2">
                  Blog
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Design notes & updates
                </h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3 text-sm">
              {[1, 2, 3].map((i) => (
                <article
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  className="rounded-2xl bg-[#181818] border border-white/10 overflow-hidden flex flex-col"
                >
                  <div className="h-28 bg-gradient-to-r from-[#FF4155] via-[#FFE600] to-[#48C5EA]" />
                  <div className="px-4 py-4 space-y-1 flex-1">
                    <p className="text-[11px] text-slate-400 uppercase tracking-[0.16em]">
                      02 Jan 2026
                    </p>
                    <p className="text-[13px] font-semibold">
                      Design tip #{i}
                    </p>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Short article about improving interfaces, workflows and
                      collaboration.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects / highlights */}
        <section
          id="projects"
          className="bg-[#111111] border-t border-white/5 py-12 md:py-16 px-6 md:px-10"
        >
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#48C5EA] mb-2">
                  Selected work
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Recent projects
                </h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3 text-sm">
              {[1, 2, 3].map((i) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  className="rounded-2xl bg-[#181818] border border-white/10 overflow-hidden flex flex-col"
                >
                  <div className="h-28 bg-gradient-to-br from-[#FF4155] via-[#FFE600] to-[#48C5EA]" />
                  <div className="px-4 py-4 space-y-1 flex-1">
                    <p className="text-[13px] font-semibold">
                      Portfolio Project {i}
                    </p>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Landing page and brand visuals for a modern digital
                      product.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section
          id="contact"
          className="bg-[#131313] border-t border-white/5 py-12 md:py-16 px-6 md:px-10"
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr,0.8fr] gap-10 items-start">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#59C378] mb-2">
                Contact
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Let&apos;s work together
              </h2>
              <p className="text-sm md:text-base text-slate-100/90 leading-relaxed">
                Fill in the form and I&apos;ll get back to you as soon as
                possible. For quick questions, you can also email me directly at{" "}
                <span className="underline">
                  {card.email || "hello@example.com"}
                </span>
                .
              </p>
            </div>
            <div className="rounded-2xl bg-[#181818] border border-white/10 px-5 py-5">
              {contactSent ? (
                <p className="text-sm text-emerald-400">
                  Thanks! I&apos;ll get back to you soon.
                </p>
              ) : contactError ? (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again.
                </p>
              ) : null}
              {!contactSent && (
                <form
                  className="mt-3 space-y-3"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    const name = (formData.get("contactName") as string)?.trim() || "";
                    const email = (formData.get("contactEmail") as string)?.trim() || "";
                    const message =
                      (formData.get("contactMessage") as string)?.trim() || "";
                    if (!name || !email || !message) return;
                    setContactError(false);
                    try {
                      await apiSubmitInquiry(card.id, {
                        name,
                        email,
                        message,
                      });
                      setContactSent(true);
                    } catch (_) {
                      setContactSent(false);
                      setContactError(true);
                    }
                  }}
                >
                  <input
                    name="contactName"
                    placeholder="Full name"
                    className="w-full rounded-xl bg-[#101010] border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#59C378]"
                    required
                  />
                  <input
                    type="email"
                    name="contactEmail"
                    placeholder="Email address"
                    className="w-full rounded-xl bg-[#101010] border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#59C378]"
                    required
                  />
                  <textarea
                    name="contactMessage"
                    placeholder="Project details"
                    className="w-full rounded-xl bg-[#101010] border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#59C378] h-28 resize-none"
                    required
                  />
                  <button
                    type="submit"
                    className="mt-1 inline-flex items-center justify-center rounded-full bg-[#59C378] text-[#101010] text-sm font-semibold px-5 py-2.5 hover:bg-[#46a761] transition-colors w-full"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Simple footer */}
        <footer className="bg-[#0b0b0b] border-t border-white/10 py-5 px-6 md:px-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} {card.title || "Portfolio"}. All
              rights reserved.
            </p>
            <p>Built with Elito‑style Tailwind layout.</p>
          </div>
        </footer>
        {showScrollTop && (
          <button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="fixed right-5 bottom-6 z-50 h-10 w-10 rounded-full bg-[#FFE600] text-[#111111] text-lg font-semibold flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:bg-[#f7d800]"
            aria-label="Back to top"
          >
            ↑
          </button>
        )}
      </div>
    );
  }

  const isCreativeStudioTemplate =
    card.selectedTemplateId === 3 ||
    (card.templateName || card.title || "").toLowerCase().includes("creative studio") ||
    (card.templateName || "").toLowerCase().includes("creative vcard");

  if (isCreativeStudioTemplate) {
    return (
      <VCardWidthShell>
        <CreativeVCardTemplate
          card={card}
          slug={slug}
          baseUrl={baseUrl}
          onDownloadVCard={() => downloadVCard(card, baseUrl)}
        />
      </VCardWidthShell>
    );
  }
  const headerGradient = card.templatePrimaryColor
    ? undefined
    : "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900";

  const primaryColor = card.templatePrimaryColor ?? "#facc15"; // amber-400 fallback
  const fontFamilyClass =
    card.fontFamily === "outfit"
      ? "font-[var(--font-outfit,theme(fontFamily.sans))]"
      : card.fontFamily === "inter"
        ? "font-[var(--font-inter,theme(fontFamily.sans))]"
        : card.fontFamily === "poppins"
          ? "font-[var(--font-poppins,theme(fontFamily.sans))]"
          : card.fontFamily === "roboto"
            ? "font-[var(--font-roboto,theme(fontFamily.sans))]"
            : "";
  const dynamicFontSize =
    card.fontSizePx && card.fontSizePx >= 1 && card.fontSizePx <= 40
      ? card.fontSizePx
      : undefined;
  const textStyle = dynamicFontSize ? { fontSize: `${dynamicFontSize}px` } : undefined;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fdf7ec] px-4 py-8 flex flex-col items-center pb-12 public-vcard-root">
      <div className="relative w-full max-w-[540px] space-y-6 flex-shrink-0">
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-slate-800 via-slate-900 to-black shadow-2xl" />

        <div
          className={`relative rounded-[3rem] overflow-hidden border border-black/40 bg-black/60 ${fontFamilyClass}`}
        >
          <div
            className={`h-40 w-full ${headerGradient ?? ""}`}
            style={headerGradient ? undefined : { backgroundColor: primaryColor }}
          />

          <div className="px-6 pb-8 pt-4 space-y-6 vcard-dynamic-text" style={textStyle}>
            <div className="-mt-10 flex items-center gap-4">
              <div className="h-20 w-20 rounded-full border-4 border-white/30 bg-gray-700 overflow-hidden flex items-center justify-center text-2xl text-gray-300">
                {card.title.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-lg font-semibold text-white leading-tight">
                  {card.title}
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  {card.templateName ? `Template: ${card.templateName}` : "Digital Business Card"}
                </p>
              </div>
            </div>

            {(card.description || card.email || card.phone) && (
              <div className="mt-4 rounded-2xl bg-black/50 border border-white/10 px-4 py-3 space-y-1 text-[11px] text-slate-300">
                {card.description && (
                  <p className="leading-relaxed">
                    {card.description}
                  </p>
                )}
                {card.email && (
                  <p className="truncate">
                    ✉ {card.email}
                  </p>
                )}
                {card.phone && (
                  <p className="truncate">
                    ☎ {card.phone}
                  </p>
                )}
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
                    onClick={() => navigator.share({ title: card.title, text: card.description || card.title, url: `${window.location.origin}/${slug}` }).catch(() => { })}
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

            {/* QR section for this template (uses saved colors) */}
            <section className="mt-4 rounded-2xl bg-black/70 border border-white/10 px-4 py-4 space-y-3">
              <h2 className="text-center text-xs font-semibold text-white tracking-wide">
                QR Code
              </h2>
              <div className="flex flex-col items-center gap-3">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-16 w-16 rounded-full border-2 border-white/40 bg-gray-700 overflow-hidden flex items-center justify-center text-lg text-gray-200">
                    {card.title.charAt(0).toUpperCase()}
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Scan to save this contact.
                  </p>
                </div>
                <div className="w-32 h-32 rounded-2xl bg-black/80 border border-white/15 flex items-center justify-center p-1">
                  {qrDataUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={qrDataUrl}
                      alt="QR Code"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-slate-700 animate-pulse rounded" />
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window === "undefined") return;
                    const slugPath =
                      (card.slug ||
                        (card.previewUrl ?? "")
                          .replace(/^https?:\/\/[^/]+/, "")
                          .replace(/^\/+/, "")) ||
                      "";
                    downloadQrPng(
                      `${window.location.origin}/${slugPath}`,
                      "vcard-qr.png",
                      {
                        fgColor: card.qrCodeColor || "#000000",
                        bgColor: card.qrBgColor || "#ffffff",
                        dotStyle: card.qrDotStyle || "square",
                        eyeStyle: card.qrEyeStyle || "square",
                      }
                    );
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-white text-xs font-semibold text-gray-900 px-5 py-2 shadow-md hover:bg-slate-100"
                >
                  Download My QR Code
                </button>
              </div>
            </section>

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
                              className={`h-1.5 rounded-full transition-all ${idx === activeBlogIndex
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
        <VCardDynamicSections card={card} />
      </div>
    </div>
  );
}

