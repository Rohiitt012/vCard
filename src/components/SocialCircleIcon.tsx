import React from "react";

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

    switch (id) {
      case "website":
        return (
          <div className={finalBase} style={style}>
            <svg style={{ width: iconSize, height: iconSize }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
        );
      case "facebook":
        return (
          <div className={finalBase} style={style}>
            <svg style={{ width: iconSize, height: iconSize }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
        );
      case "reddit":
        return (
          <div className={finalBase} style={style}>
            <svg style={{ width: iconSize, height: iconSize }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.88-7.004 4.88-3.874 0-7.004-2.186-7.004-4.88 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484 1.05 3.64 1.05 1.157 0 2.798-.208 3.64-1.05a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.205.73-1.038 0-2.107-.286-2.805-.73a.326.326 0 0 0-.232-.094z" />
            </svg>
          </div>
        );
      case "youtube":
        return (
          <div className={finalBase} style={style}>
            <svg style={{ width: iconSize, height: iconSize }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
        );
      case "whatsapp":
        return (
          <div className={finalBase} style={style}>
            <svg style={{ width: iconSize, height: iconSize }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        );
      case "tiktok":
        return (
          <div className={finalBase} style={style}>
            <svg style={{ width: iconSize, height: iconSize }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
            </svg>
          </div>
        );
      case "twitter":
        return (
          <div className={finalBase} style={style}>
            <svg style={{ width: iconSize, height: iconSize }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </div>
        );
      case "x":
        return (
          <div className={finalBase} style={style}>
            <svg style={{ width: iconSize - 4, height: iconSize - 4 }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
        );
      case "instagram":
        return (
          <div className={finalBase} style={style}>
            <svg style={{ width: iconSize, height: iconSize }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 6.5h.01" />
            </svg>
          </div>
        );
      case "linkedin":
        return (
          <div className={finalBase} style={style}>
            <svg style={{ width: iconSize, height: iconSize }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
        );
      case "pinterest":
        return (
          <div className={finalBase} style={style}>
            <svg style={{ width: iconSize, height: iconSize }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.259 7.929-7.259 4.164 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C24.02 5.367 18.637 0 12.017 0z" />
            </svg>
          </div>
        );
      case "tumblr":
        return (
          <div className={finalBase} style={style}>
            <svg style={{ width: iconSize, height: iconSize }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.535 20.916c-1.383.04-2.146-.662-2.146-2.071V10.74h3.61V7.99h-3.61V0h-3.136c-.04 1.171-.35 3.136-2.43 4.414V7.99h1.791v8.52c0 3.841 2.345 6.469 6.046 6.448v-2.042h-.125z" />
            </svg>
          </div>
        );
      case "snapchat":
        return (
          <div className={finalBase} style={style}>
            <svg style={{ width: iconSize, height: iconSize }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C10.747 0 9.535.158 8.423.447c-.12.031-.225.074-.325.132-1.043.595-1.638 2.152-1.63 3.617.009 1.637.794 3.109 1.95 4.17 0 0 .041.045.05.053-.01.011-.023.018-.033.029-.271.303-.544.606-.799.924-.469.585-.853 1.229-1.12 1.936-.013.033-.024.067-.037.1-.013.033-.025.066-.036.099-.17.545-.251.981-.25 1.258 0 .54.342.986.974 1.218.17.062.373.106.592.128-.01.077-.02.153-.027.23-.042.483.08 1.157.382 1.776.452.927 1.3 1.517 2.142 1.517.272 0 .53-.06.763-.167-.091.224-.138.468-.138.718 0 .7.376 1.3 1.05 1.636.564.28 1.23.415 1.905.415.674 0 1.341-.135 1.905-.415.674-.336 1.05-.936 1.05-1.636 0-.25-.047-.494-.138-.718.234.107.491.167.763.167.842 0 1.69-.59 2.142-1.517.302-.619.424-1.293.382-1.776-.007-.077-.017-.153-.027-.23.219-.022.422-.066.592-.128.632-.232.974-.678.974-1.218.001-.277-.08-.713-.25-1.258-.011-.033-.023-.066-.036-.099-.013-.033-.024-.067-.037-.1-.267-.707-.651-1.351-1.12-1.936-.255-.318-.528-.621-.799-.924-.01-.011-.023-.018-.033-.029.009-.008.05-.053.05-.053 1.156-1.061 1.941-2.533 1.95-4.17.008-1.465-.587-3.022-1.63-3.617-.1-.058-.205-.101-.325-.132C14.465.158 13.253 0 12 0z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className={finalBase} style={style}>
            <svg style={{ width: iconSize, height: iconSize }} fill={iconColor || "currentColor"} stroke={iconColor || "currentColor"} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
        );
    }
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
