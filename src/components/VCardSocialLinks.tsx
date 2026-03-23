"use client";
import React from 'react';
import { getSocialIcon } from '@/lib/social-icons';
import type { VCardItem } from '@/context/VCardsContextTypes';

interface Props {
  card: VCardItem;
  iconSize?: number;
  className?: string; // for the icon
  containerClassName?: string;
  itemClassName?: string;
}

export function VCardSocialLinks({ 
  card, 
  iconSize = 20, 
  className = "", 
  containerClassName = "flex justify-center gap-4", 
  itemClassName = "" 
}: Props) {
  const socialLinks = card.socialLinks || [];
  const activeLinks = socialLinks.filter(l => l.url);
  
  // Also include website if it exists and we want it in the same bar
  // Some templates handle website separately, some include it.
  // The user said "social link icon", and website is often treated as one.
  
  if (activeLinks.length === 0 && !card.website) return null;

  return (
    <div className={containerClassName}>
      {/* Website Link */}
      {card.website && (
        <a
          href={card.website}
          target="_blank"
          rel="noopener noreferrer"
          className={itemClassName}
        >
          {(() => {
            const Icon = getSocialIcon('website');
            return <Icon size={iconSize} className={className} />;
          })()}
        </a>
      )}

      {/* Social Links */}
      {activeLinks.map((link, idx) => {
        const Icon = getSocialIcon(link.platform);
        return (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={itemClassName}
          >
            <Icon size={iconSize} className={className} />
          </a>
        );
      })}
    </div>
  );
}
