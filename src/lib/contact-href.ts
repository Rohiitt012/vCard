/** Build safe hrefs for contact actions on public vCards. */

export function contactMailto(email: string): string | undefined {
  const e = (email || "").trim();
  return e ? `mailto:${e}` : undefined;
}

export function contactTel(phone: string): string | undefined {
  const raw = (phone || "").trim();
  if (!raw) return undefined;
  const cleaned = raw.replace(/[^\d+]/g, "");
  return cleaned ? `tel:${cleaned}` : undefined;
}

export function contactMapsQuery(address: string): string | undefined {
  const a = (address || "").trim();
  return a ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a)}` : undefined;
}

export function contactWhatsApp(whatsapp: string): string | undefined {
  const digits = (whatsapp || "").replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : undefined;
}
