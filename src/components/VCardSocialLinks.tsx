"use client";
import React from 'react';
import { getSocialIcon, getSocialColor } from '@/lib/social-icons';
import type { VCardSocialLink } from '@/context/VCardsContextTypes';

interface Props {
  // This component only needs `socialLinks` + `website`, so keep the prop type flexible.
  card: {
    socialLinks?: VCardSocialLink[];
    website?: string;
  };
  iconSize?: number;
  className?: string; // for the icon
  containerClassName?: string;
  itemClassName?: string;
  variant?: 'outline' | 'circular';
  layout?: 'horizontal' | 'vertical';
}

export function VCardSocialLinks({ 
  card, 
  iconSize = 18, 
  className = "", 
  containerClassName = "", 
  itemClassName = "",
  variant = 'circular',
  layout = 'horizontal'
}: Props) {
  const socialLinks = card.socialLinks || [];
  const activeLinks = socialLinks.filter(l => l.url);
  
  if (activeLinks.length === 0 && !card.website) return null;

  const effectiveIconSize = Math.max(iconSize, 30);

  // Target layout: 6 icons in one row (then wrap for additional icons).
  const premiumBoxClass =
    "inline-flex flex-row flex-wrap items-center justify-center gap-3 w-[430px] max-w-full rounded-2xl bg-white/85 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70 backdrop-blur-sm";

  // Always keep icons inside a single premium container box.
  // If a caller passes `containerClassName`, we append it first so our premium layout wins.
  const finalContainerClass = containerClassName ? `${containerClassName} ${premiumBoxClass}` : premiumBoxClass;

  const renderIcon = (platform: string, url: string) => {
    const Icon = getSocialIcon(platform);
    const brandColor = getSocialColor(platform);
    
    if (variant === 'circular') {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center transition-all duration-300`}
        >
          <div 
            className={`flex items-center justify-center rounded-full shadow-sm group-hover:scale-110 transition-transform duration-200 ${itemClassName}`}
            style={{
              backgroundColor: brandColor,
              width: effectiveIconSize * 2,
              height: effectiveIconSize * 2,
              minWidth: effectiveIconSize * 2,
              minHeight: effectiveIconSize * 2,
            }}
          >
            <Icon size={effectiveIconSize} className="text-white" strokeWidth={2} />
          </div>
          {/* Intentionally show icons only (no platform text) */}
        </a>
      );
    }

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:opacity-80 transition-opacity ${itemClassName}`}
      >
        <Icon size={iconSize} className={className} />
      </a>
    );
  };

  return (
    <div className={finalContainerClass}>
      {/* Website Link */}
      {card.website && renderIcon('website', card.website)}

      {/* Social Links */}
      {activeLinks.map((link, idx) => (
        <React.Fragment key={idx}>
          {renderIcon(link.platform, link.url)}
        </React.Fragment>
      ))}
    </div>
  );
}
