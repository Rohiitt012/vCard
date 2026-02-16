"use client";

import React from "react";
import Link from "next/link";

type OpenMyProfileLogoProps = {
  variant?: "full" | "compact";
  size?: "sm" | "md";
  showText?: boolean;
  href?: string;
  className?: string;
};

/** Circular logo: OPEN (black), MY (orange), PROFILE (purple). Compact = dark blue square with "o". */
export const OpenMyProfileLogo: React.FC<OpenMyProfileLogoProps> = ({
  variant = "full",
  size = "md",
  showText = true,
  href = "/",
  className = "",
}) => {
  const isCompact = variant === "compact";
  const iconSize = size === "sm" ? "w-10 h-10" : "w-12 h-12";
  const textSize = size === "sm" ? "text-[15px]" : "text-base";
  const circleFontSize = size === "sm" ? "text-[6px]" : "text-[9px]";

  const circleLogo = (
    <div
      className={`flex-shrink-0 ${iconSize} rounded-full border-[2.5px] border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900 flex flex-col items-center justify-center shadow-sm`}
      style={{ padding: "3px" }}
    >
      <span className={`${circleFontSize} font-bold leading-[1.15] text-gray-900 dark:text-white uppercase`}>
        OPEN
      </span>
      <span className={`${circleFontSize} font-bold leading-[1.15] uppercase`} style={{ color: "#ea580c" }}>
        MY
      </span>
      <span className={`${circleFontSize} font-bold leading-[1.15] uppercase`} style={{ color: "#7c3aed" }}>
        PROFILE
      </span>
    </div>
  );

  const compactLogo = (
    <div
      className={`flex-shrink-0 ${iconSize} rounded-xl bg-[#3F51B5] dark:bg-brand-600 flex items-center justify-center ring-2 ring-white dark:ring-gray-800 shadow-sm`}
    >
      <span className="text-white text-lg font-medium leading-none">o</span>
    </div>
  );

  const icon = isCompact ? compactLogo : circleLogo;

  const content = (
    <>
      {icon}
      {showText && (
        <span
          className={`font-medium text-gray-800 dark:text-white truncate tracking-tight ${textSize}`}
        >
          Open My Profile
        </span>
      )}
    </>
  );

  const wrapperClass = `flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30 rounded-xl min-w-0 ${className}`;

  if (href) {
    return (
      <Link href={href} className={`${wrapperClass} flex-1 lg:flex-initial`}>
        {content}
      </Link>
    );
  }

  return <div className={wrapperClass}>{content}</div>;
};
