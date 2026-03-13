"use client";

import React from "react";
import type { VCardItem } from "@/context/VCardsContextTypes";

interface Props {
  card: VCardItem;
  exclude?: ("testimonials" | "galleries" | "businessHours" | "services" | "products")[];
}

export function VCardDynamicSections({ card, exclude = [] }: Props) {
  const galleries = (card as any).galleries || [];
  const testimonials = card.testimonials || [];
  const businessHours = card.businessHours;

  const servicesWithImages = (card.services || []).filter(s => s.icon && (s.icon.startsWith("data:image") || s.icon.startsWith("http")));
  const productsWithImages = (card.products || []).filter(p => p.icon && (p.icon.startsWith("data:image") || p.icon.startsWith("http")));

  return (
    <div className="px-4 py-8 space-y-12 bg-transparent text-inherit z-10 relative">
      {/* Testimonials */}
      {testimonials.length > 0 && !exclude.includes('testimonials') && (
        <section id="dynamic-testimonials" className="w-full py-12 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-rose-500 mb-2">Testimonials</p>
              <h3 className="text-3xl font-bold text-gray-950 dark:text-white">What Clients Say</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t: any, i: number) => (
                <div key={i} className="flex flex-col items-center bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-300">
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
                      “{t.quote || t.description || t.testimoni || 'Excellent service.'}”
                    </p>
                    <div className="mt-auto">
                      <h4 className="font-bold text-gray-950 dark:text-white text-[16px]">
                        {t.name || "Client"}
                      </h4>
                      {t.role && (
                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mt-1">
                          {t.role}
                        </p>
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
      {galleries.length > 0 && !exclude.includes('galleries') && (
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
      {businessHours && !exclude.includes('businessHours') && Object.values(businessHours).some((h: any) => h.enabled) && (
        <section className="bg-white/5 dark:bg-black/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/10 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center text-inherit">Business Hours</h3>
          <div className="space-y-2 text-sm max-w-sm mx-auto p-4 rounded-xl bg-gray-50/50 dark:bg-gray-800/50">
            {Object.entries(businessHours).map(([day, hrs]: [string, any]) => (
               <div key={day} className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700 last:border-0 opacity-80">
                 <span className="font-medium">{day}</span>
                 <span>{hrs.enabled ? `${hrs.start} - ${hrs.end}` : "Closed"}</span>
               </div>
            ))}
          </div>
        </section>
      )}

      {/* Uploaded Services with Images */}
      {servicesWithImages.length > 0 && !exclude.includes('services') && (
        <section className="bg-white/5 dark:bg-black/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/10 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center text-inherit">Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {servicesWithImages.map((s: any, i: number) => (
                <div key={i} className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow shadow-black/5 items-center pb-3 border border-gray-100 dark:border-gray-700">
                  <div className="w-full aspect-video bg-gray-100 overflow-hidden shrink-0">
                    <img src={s.icon} alt={s.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mt-3 px-3 w-full text-center">{s.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 px-3 w-full text-center">{s.description}</p>
                </div>
             ))}
          </div>
        </section>
      )}

      {/* Uploaded Products with Images */}
      {productsWithImages.length > 0 && !exclude.includes('products') && (
        <section className="bg-white/5 dark:bg-black/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/10 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center text-inherit">Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {productsWithImages.map((p: any, i: number) => (
                <div key={i} className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow shadow-black/5 items-center pb-3 border border-gray-100 dark:border-gray-700">
                  <div className="w-full aspect-video bg-gray-100 overflow-hidden shrink-0">
                    <img src={p.icon} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mt-3 px-3 text-sm w-full text-center">{p.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 px-3 w-full text-center">{p.description}</p>
                </div>
             ))}
          </div>
        </section>
      )}
    </div>
  );
}
