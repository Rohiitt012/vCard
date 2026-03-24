"use client";
import { VCardDynamicSections } from "@/components/VCardDynamicSections";

 import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import type { VCardItem } from "@/context/VCardsContext";

type Props = {
  card: VCardItem;
  slug: string;
  baseUrl: string;
  onDownloadVCard?: () => void;
};

export function AtomTemplate({ card, slug, baseUrl, onDownloadVCard }: Props) {
  const name = card.title || "Your Name";
  const occupation =
    card.occupation || card.tagline || "Reporter / Journalist";
  const description =
    card.description ||
    "Reporter profile. Add your short bio and beat information from dashboard.";

  const email = card.email;
  const phone = card.phone;
  const address = card.address;
  const website = card.website;

  return (
    <div className="min-h-screen bg-[#f0f1f3] flex justify-center px-4 py-6 sm:py-10">
      <div className="w-full max-w-[540px] rounded-[32px] bg-white shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to px-6 pt-8 pb-6 text-white">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full border-4 border-yellow bg-grey-70 overflow-hidden shrink-0">
              {card.image ? (
                <Image
                  src={card.image}
                  alt={name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  unoptimized={card.image.startsWith("data:")}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-2xl font-semibold">
                  {name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <p className="text-[10px] font-header uppercase tracking-wide text-yellow">
                Reporter Profile
              </p>
              <p className="mt-1 text-lg font-header font-semibold leading-tight">
                {name}
              </p>
              <p className="mt-0.5 text-[11px] text-grey-70">{occupation}</p>
            </div>
          </div>
        </div>

        <div className="px-6 pt-5 pb-4 bg-white">
          <p className="text-xs text-grey-10 leading-relaxed">{description}</p>
        </div>

        <div className="px-6 pb-4 bg-white flex flex-wrap gap-2 text-[10px]">
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1 rounded-full border border-primary px-3 py-1 text-primary"
            >
              <Mail className="w-3 h-3" />
              <span>{email}</span>
            </a>
          )}
          {phone && (
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-1 rounded-full border border-primary px-3 py-1 text-primary"
            >
              <Phone className="w-3 h-3" />
              <span>{phone}</span>
            </a>
          )}
          {website && (
            <a
              href={
                website.startsWith("http") ? website : `https://${website}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-primary px-3 py-1 text-primary"
            >
              Official Website
            </a>
          )}
        </div>

        {address && (
          <div className="px-6 pb-4 bg-white text-[11px] text-grey-20 flex items-center gap-2">
            <MapPin className="w-3 h-3 text-primary" />
            <span>{address}</span>
          </div>
        )}

        {/* Services Section */}
        <div className="px-6 pb-6 bg-white border-t border-grey-70 pt-4">
          <h3 className="text-[14px] font-header font-semibold text-primary mb-3">
            {card.serviceTitle || "Services & Beats"}
          </h3>
          <div className="space-y-3">
            {(card.services && card.services.length > 0
              ? card.services
              : [
                  { name: "Investigative Journalism", description: "Deep dive into complex issues and uncovering the truth." },
                  { name: "Political Reporting", description: "Covering local and national politics with clarity and insight." },
                  { name: "Multimedia Storytelling", description: "Using video, audio, and web to tell engaging stories." },
                ]
            ).map((s: any, idx: number) => (
              <div
                key={s.id || idx}
                className="p-3 rounded-2xl border border-grey-70 bg-white hover:border-primary transition-colors group"
              >
                <div className="flex items-center gap-3">
                  {s.icon && (
                    <div className="h-10 w-10 rounded-full overflow-hidden shrink-0 border border-grey-70">
                      <img src={s.icon} alt={s.name} className="h-full w-full object-cover" />
                    </div>
                  )}
                  <div className="flex-grow">
                    <p className="text-[12px] font-semibold text-grey-10 group-hover:text-primary transition-colors">
                      {s.name}
                    </p>
                    {s.description && (
                      <p className="text-[10px] text-grey-20 mt-0.5 line-clamp-2">
                        {s.description}
                      </p>
                    )}
                    {s.url && (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-semibold text-primary hover:underline mt-1 inline-block"
                      >
                        Read More →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {onDownloadVCard && (
          <div className="px-6 pb-6 bg-white">
            <button
              type="button"
              onClick={onDownloadVCard}
              className="w-full rounded-full bg-primary py-2.5 text-xs font-semibold text-white hover:bg-grey-20 hover:text-yellow transition-colors"
            >
              Download vCard
            </button>
          </div>
        )}
      
        <VCardDynamicSections card={card} />
      </div>
    </div>
  );
}

