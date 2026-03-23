import React from "react";
import { getSocialIcon } from "@/lib/social-icons";

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

  const base = `flex items-center justify-center rounded-full text-white shrink-0 shadow-md transition-transform hover:scale-110 active:scale-95 overflow-hidden ring-1 ring-black/5 ${className}`;

  const style = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: bgColor || undefined,
  };

  const getBrandColor = () => {
    if (bgColor) return ""; // Let style handle it
    switch (id) {
      case "website": return "bg-blue-500";
      case "facebook": return "bg-[#1877F2]";
      case "reddit": return "bg-[#FF4500]";
      case "youtube": return "bg-[#FF0000]";
      case "whatsapp": return "bg-[#25D366]";
      case "tiktok": return "bg-black";
      case "twitter": return "bg-[#1DA1F2]";
      case "x": return "bg-black";
      case "instagram": return "bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4]";
      case "linkedin": return "bg-[#0A66C2]";
      case "pinterest": return "bg-[#E60023]";
      case "tumblr": return "bg-[#35465c]";
      case "snapchat": return "bg-[#FFFC00]";
      default: return "bg-gray-400";
    }
  };

  const content = (() => {
    const brandClass = getBrandColor();
    const finalBase = `${base} ${brandClass}`;
    const Icon = getSocialIcon(platform);

    return (
      <div className={finalBase} style={style}>
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
