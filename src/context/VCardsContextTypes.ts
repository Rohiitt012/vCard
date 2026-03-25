export type VCardBlog = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type VCardProduct = {
  id: string;
  name: string;
  currency?: string;
  price?: string;
  sort?: string;
  url?: string;
  description?: string;
  icon: string;
};

export type VCardSocialLink = {
  platform: string;
  url: string;
};

export type VCardEmbedTag = {
  id: string;
  type: string;
  value: string;
  section?: "insta" | "linkedin" | "iframes";
};

export type VCardCustomLink = {
  id: string;
  name: string;
  url: string;
  color?: string;
  buttonType?: "square" | "rounded";
  showAsButton?: boolean;
  openInNewTab?: boolean;
};

export type VCardGallery = {
  id: string;
  type: string;
  imageUrl: string;
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

export type VCardService = {
  id: string;
  name: string;
  description: string;
  icon: string;
  url?: string;
};

export type VCardAppointmentService = {
  id: string;
  serviceName: string;
  amount: string;
};

export type VCardTestimonial = {
  id: string;
  name: string;
  quote: string;
  image: string;
  role?: string;
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
  qrDotStyle?: "square" | "rounded";
  qrEyeStyle?: "square" | "rounded";
  selectedTemplateId?: number;
  templateName?: string;
  templatePrimaryColor?: string;
  serviceTitle?: string;
  serviceTitleSmall?: string;
  serviceSubtitle?: string;
  blogs?: VCardBlog[];
  products?: VCardProduct[];
  services?: VCardService[];
  galleries?: VCardGallery[];
  testimonials?: VCardTestimonial[];
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
  displayProductEnquiryButton?: boolean;
  displayServiceEnquiryButton?: boolean;
  displayImagesWithSlider?: boolean;
  appointmentType?: "free" | "paid";
  appointmentServices?: VCardAppointmentService[];
  embedTags?: VCardEmbedTag[];
  customLinks?: VCardCustomLink[];
  socialLinks?: VCardSocialLink[];
  metaTitle?: string;
  homeTitle?: string;
  metaKeywords?: string;
  metaDescription?: string;
  googleAnalyticsCode?: string;
  ogImage?: string;
  inquiries?: VCardInquiry[];
  /** Typography customization for public vCard */
  fontFamily?: "default" | "outfit" | "inter" | "poppins" | "roboto";
  fontSizePx?: number;
  /** If set, public page shows password form first. Not returned by public API. */
  password?: string;
  /** Set by API when card has password; client uses this to show unlock form. */
  requiresPassword?: boolean;
};
