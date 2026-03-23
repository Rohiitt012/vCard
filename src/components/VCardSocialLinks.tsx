"use client";
import React from 'react';
import { getSocialIcon, getSocialColor } from '@/lib/social-icons';
import type { VCardItem } from '@/context/VCardsContextTypes';

interface Props {
  card: VCardItem;
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

  const finalContainerClass = containerClassName || (layout === 'vertical' ? 'flex flex-col gap-3' : 'flex justify-center flex-wrap gap-4');

  const renderIcon = (platform: string, url: string) => {
    const Icon = getSocialIcon(platform);
    const brandColor = getSocialColor(platform);
    
    if (variant === 'circular') {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center transition-all duration-300 ${layout === 'vertical' ? 'w-full' : ''} ${itemClassName}`}
        >
          <div 
            className="flex items-center justify-center rounded-full shadow-sm group-hover:scale-110 transition-transform duration-200"
            style={{ 
              backgroundColor: brandColor,
              width: iconSize * 2,
              height: iconSize * 2,
              minWidth: iconSize * 2,
              minHeight: iconSize * 2
            }}
          >
            <Icon size={iconSize} className="text-white fill-current" />
          </div>
          {layout === 'vertical' && (
            <span className="ml-3 text-sm font-medium capitalize text-gray-700 dark:text-gray-200">
              {platform}
            </span>
          )}
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
