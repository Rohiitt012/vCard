export type VCardBlog = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type VCardSocialLink = {
  platform: string;
  url: string;
};

export type VCardBusinessHours = {
  [day: string]: { enabled: boolean; start: string; end: string };
};

export type VCardInquiry = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  date: string;
};

export type VCardItem = {
  id: string;
  title: string;
  date: string;
  image: string;
  previewUrl: string;
  slug?: string;
  viewCount: number;
  status: boolean;
  qrCodeColor?: string;
  qrBgColor?: string;
  selectedTemplateId?: number;
  templateName?: string;
  templatePrimaryColor?: string;
  blogs?: VCardBlog[];
  termsHtml?: string;
  privacyHtml?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  address?: string;
  website?: string;
  occupation?: string;
  company?: string;
  tagline?: string;
  description?: string;
  birthDate?: string;
  businessHours?: VCardBusinessHours;
  socialLinks?: VCardSocialLink[];
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  inquiries?: VCardInquiry[];
  /** If set, public page shows password form first. Not returned by public API. */
  password?: string;
  /** Set by API when card has password; client uses this to show unlock form. */
  requiresPassword?: boolean;
};
