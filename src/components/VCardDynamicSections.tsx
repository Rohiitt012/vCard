"use client";

import React from "react";
import type { VCardItem } from "@/context/VCardsContextTypes";

/** Maps Manage Section checkboxes → dynamic section visibility (public + templates). */
export function buildManageSectionDynamicExclude(card: VCardItem): VCardDynamicExclude[] {
  const m = card.manageSection;
  if (!m) return [];
  const ex: VCardDynamicExclude[] = [];
  if (m.testimonials === false) ex.push("testimonials");
  if (m.galleries === false) ex.push("galleries");
  if (m.businessHours === false) ex.push("businessHours");
  if (m.services === false) ex.push("services");
  if (m.products === false) ex.push("products");
  if (m.iframes === false) ex.push("iframes");
  if (m.map === false) ex.push("map");
  if (m.instagramFeed === false) ex.push("insta");
  if (m.linkedinFeed === false) ex.push("linkedin");
  if (m.appointments === false) ex.push("appointments");
  return ex;
}

export type VCardDynamicExclude =
  | "testimonials"
  | "galleries"
  | "businessHours"
  | "services"
  | "products"
  | "blogs"
  | "iframes"
  | "map"
  | "insta"
  | "linkedin"
  | "appointments";

interface Props {
  card: VCardItem;
  exclude?: VCardDynamicExclude[];
}

function isServiceImageIcon(icon?: string): boolean {
  return !!icon && (icon.startsWith("data:image") || icon.startsWith("http"));
}

export function VCardDynamicSections({ card, exclude = [] }: Props) {
  const galleries = (card as any).galleries || [];
  const testimonials = card.testimonials || [];
  const businessHours = card.businessHours;

  const allServices = card.services || [];
  const allProducts = card.products || [];

  return (
    <div className="px-4 py-8 space-y-12 bg-transparent text-inherit z-10 relative">
      {/* Testimonials */}
      {testimonials.length > 0 && !exclude.includes("testimonials") && (
        <section id="dynamic-testimonials" className="w-full py-12 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-rose-500 mb-2">Testimonials</p>
              <h3 className="text-3xl font-bold text-gray-950 dark:text-white">What Clients Say</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t: any, i: number) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-zinc-800 overflow-hidden mb-6 border-4 border-white dark:border-zinc-900 shadow-sm flex items-center justify-center">
                    {t.image ? (
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-zinc-300 text-3xl">
                        {t.name ? t.name.charAt(0).toUpperCase() : "C"}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col items-center text-center">
                    <p className="text-gray-600 dark:text-zinc-400 text-[15px] leading-relaxed mb-8 italic">
                      “{t.quote || t.description || t.testimoni || "Excellent service."}”
                    </p>
                    <div className="mt-auto">
                      <h4 className="font-bold text-gray-950 dark:text-white text-[16px]">{t.name || "Client"}</h4>
                      {t.role && (
                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mt-1">{t.role}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Galleries */}
      {galleries.length > 0 && !exclude.includes("galleries") && (
        <section className="bg-white/5 dark:bg-black/10 backdrop-blur rounded-[32px] p-6 sm:p-8 border border-gray-200 dark:border-white/10 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center text-inherit">Galleries</h3>
          <div className="grid grid-cols-2 gap-4">
            {galleries.map((g: any, i: number) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-gray-100 group">
                <img src={g.imageUrl} alt="gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Business Hours */}
      {businessHours && !exclude.includes("businessHours") && Object.values(businessHours).some((h: any) => h.enabled) && (
        <section className="bg-white/5 dark:bg-black/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/10 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center text-inherit">Business Hours</h3>
          <div className="space-y-2 text-sm max-w-sm mx-auto p-4 rounded-xl bg-gray-50/50 dark:bg-gray-800/50">
            {Object.entries(businessHours).map(([day, hrs]: [string, any]) => (
              <div
                key={day}
                className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700 last:border-0 opacity-80"
              >
                <span className="font-medium">{day}</span>
                <span>{hrs.enabled ? `${hrs.start} - ${hrs.end}` : "Closed"}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Appointments (paid/free service list) */}
      {card.appointmentServices &&
        card.appointmentServices.some((s) => (s.serviceName || "").trim()) &&
        !exclude.includes("appointments") && (
          <section className="bg-white/5 dark:bg-black/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/10 shadow-sm">
            <h3 className="text-xl font-bold mb-2 text-center text-inherit">Appointments</h3>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              {card.appointmentType === "paid" ? "Paid services" : "Book a time — see business hours above"}
            </p>
            <ul className="max-w-md mx-auto space-y-3">
              {card.appointmentServices.filter((s) => (s.serviceName || "").trim()).map((s) => (
                <li
                  key={s.id}
                  className="flex justify-between items-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/40 px-4 py-3"
                >
                  <span className="font-medium text-inherit">{s.serviceName}</span>
                  {card.appointmentType === "paid" && s.amount ? (
                    <span className="text-sm text-gray-600 dark:text-gray-300">{s.amount}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        )}

      {/* Services — image cards and/or text rows */}
      {allServices.length > 0 && !exclude.includes("services") && (
        <section className="bg-white/5 dark:bg-black/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/10 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center text-inherit">Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allServices.map((s: any, i: number) =>
              isServiceImageIcon(s.icon) ? (
                <div
                  key={s.id || i}
                  className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow shadow-black/5 items-center pb-3 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-full aspect-video bg-gray-100 overflow-hidden shrink-0">
                    <img src={s.icon} alt={s.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mt-3 px-3 w-full text-center">{s.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 px-3 w-full text-center">{s.description}</p>
                </div>
              ) : (
                <div
                  key={s.id || i}
                  className="flex gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 p-4 items-start"
                >
                  <div className="h-12 w-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg font-bold text-gray-400 shrink-0">
                    {(s.name || "S").charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{s.name}</h4>
                    {s.description ? (
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{s.description}</p>
                    ) : null}
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {/* Products — image cards and/or text rows */}
      {allProducts.length > 0 && !exclude.includes("products") && (
        <section className="bg-white/5 dark:bg-black/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/10 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center text-inherit">Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allProducts.map((p: any, i: number) =>
              isServiceImageIcon(p.icon) ? (
                <div
                  key={p.id || i}
                  className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow shadow-black/5 items-center pb-3 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-full aspect-video bg-gray-100 overflow-hidden shrink-0">
                    <img src={p.icon} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mt-3 px-3 text-sm w-full text-center">{p.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 px-3 w-full text-center">{p.description}</p>
                  {(p.price || p.currency) && (
                    <p className="text-sm font-semibold text-inherit mt-2">
                      {p.currency || ""} {p.price || ""}
                    </p>
                  )}
                  {p.url ? (
                    <a
                      href={p.url.startsWith("http") ? p.url : `https://${p.url}`}
                      className="mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View product
                    </a>
                  ) : null}
                </div>
              ) : (
                <div
                  key={p.id || i}
                  className="flex gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 p-4 items-start"
                >
                  <div className="h-12 w-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg font-bold text-gray-400 shrink-0">
                    {(p.name || "P").charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{p.name}</h4>
                    {p.description ? (
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{p.description}</p>
                    ) : null}
                    {(p.price || p.currency) && (
                      <p className="text-sm font-semibold mt-2 text-inherit">
                        {p.currency || ""} {p.price || ""}
                      </p>
                    )}
                    {p.url ? (
                      <a
                        href={p.url.startsWith("http") ? p.url : `https://${p.url}`}
                        className="inline-block mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open link
                      </a>
                    ) : null}
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {/* Instagram embeds */}
      {card.embedTags && card.embedTags.some((t) => t.section === "insta") && !exclude.includes("insta") && (
        <section className="bg-white/5 dark:bg-black/10 backdrop-blur rounded-[32px] p-6 sm:p-8 border border-gray-200 dark:border-white/10 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center text-inherit">Instagram</h3>
          <div className="space-y-6">
            {card.embedTags
              .filter((t) => t.section === "insta")
              .map((tag, i) => (
                <div
                  key={i}
                  className="w-full min-h-[200px] rounded-2xl overflow-hidden bg-gray-100 shadow-lg border border-gray-200"
                  dangerouslySetInnerHTML={{ __html: tag.value }}
                />
              ))}
          </div>
        </section>
      )}

      {/* LinkedIn embeds */}
      {card.embedTags && card.embedTags.some((t) => t.section === "linkedin") && !exclude.includes("linkedin") && (
        <section className="bg-white/5 dark:bg-black/10 backdrop-blur rounded-[32px] p-6 sm:p-8 border border-gray-200 dark:border-white/10 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center text-inherit">LinkedIn</h3>
          <div className="space-y-6">
            {card.embedTags
              .filter((t) => t.section === "linkedin")
              .map((tag, i) => (
                <div
                  key={i}
                  className="w-full min-h-[200px] rounded-2xl overflow-hidden bg-gray-100 shadow-lg border border-gray-200"
                  dangerouslySetInnerHTML={{ __html: tag.value }}
                />
              ))}
          </div>
        </section>
      )}

      {/* Iframes */}
      {card.embedTags && card.embedTags.some((t) => t.section === "iframes") && !exclude.includes("iframes") && (
        <section className="bg-white/5 dark:bg-black/10 backdrop-blur rounded-[32px] p-6 sm:p-8 border border-gray-200 dark:border-white/10 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center text-inherit">Iframes</h3>
          <div className="space-y-6">
            {card.embedTags
              .filter((t) => t.section === "iframes")
              .map((tag, i) => (
                <div
                  key={i}
                  className="w-full h-[450px] rounded-2xl overflow-hidden bg-gray-100 shadow-lg border border-gray-200"
                  dangerouslySetInnerHTML={{ __html: tag.value }}
                />
              ))}
          </div>
        </section>
      )}

      {/* Map */}
      {card.embedTags && card.embedTags.some((t) => t.section === "map") && !exclude.includes("map") && (
        <section className="bg-white/5 dark:bg-black/10 backdrop-blur rounded-[32px] p-6 sm:p-8 border border-gray-200 dark:border-white/10 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center text-inherit">Map</h3>
          <div className="w-full h-[450px] rounded-2xl overflow-hidden bg-gray-100 shadow-lg border border-gray-200">
            {card.embedTags
              .filter((t) => t.section === "map")
              .map((tag, i) => (
                <div key={i} className="w-full h-full" dangerouslySetInnerHTML={{ __html: tag.value }} />
              ))}
          </div>
        </section>
      )}
    </div>
  );
}
