import React from "react";
import { getSocialIcon, getSocialColor } from "@/lib/social-icons";

interface SocialCircleIconProps {
  platform: string;
  url?: string;
  size?: number;
  className?: string;
  bgColor?: string;
  iconColor?: string;
}

export const SocialCircleIcon = ({ platform, url, size = 36, className = "", bgColor, iconColor }: SocialCircleIconProps) => {
  const id = platform.toLowerCase();
  const iconSize = Math.floor(size * 0.55);

  const base = `flex items-center justify-center rounded-full text-white shrink-0 shadow-md transition-transform hover:scale-110 active:scale-95 overflow-hidden border border-white/10 ${className}`;

  const brandColor = bgColor || getSocialColor(id);

  const style = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: brandColor,
  };

  const content = (() => {
    const Icon = getSocialIcon(platform);

    return (
      <div className={base} style={style}>
        <Icon size={iconSize} color={iconColor || "currentColor"} style={{ width: iconSize, height: iconSize }} />
      </div>
    );
  })();

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={platform}
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
};
