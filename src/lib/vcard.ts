import type { VCardItem } from "@/context/VCardsContext";

/**
 * Escape special characters for vCard 3.0 text fields (e.g. comma, semicolon, backslash).
 */
function vcardEscape(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

/**
 * Build vCard 3.0 string from VCardItem. Used for "Add to contact" / Download vCard.
 */
export function buildVCardContent(card: VCardItem, baseUrl: string): string {
  const fullName = card.title?.trim() || "Contact";
  const parts: string[] = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${vcardEscape(fullName)}`,
    `N:${vcardEscape(fullName)};;;`,
  ];

  if (card.company) {
    parts.push(`ORG:${vcardEscape(card.company)}`);
  }
  if (card.occupation) {
    parts.push(`TITLE:${vcardEscape(card.occupation)}`);
  }
  if (card.email) {
    parts.push(`EMAIL:${vcardEscape(card.email)}`);
  }
  if (card.phone) {
    const tel = card.phone.replace(/\s/g, "");
    parts.push(`TEL:${tel}`);
  }
  if (card.whatsapp) {
    parts.push(`TEL;TYPE=WhatsApp:${card.whatsapp.replace(/\s/g, "")}`);
  }
  if (card.address) {
    parts.push(`ADR;TYPE=WORK:;;${vcardEscape(card.address)};;;;`);
  }
  const url = card.website || (baseUrl ? `${baseUrl}/${card.slug || card.previewUrl.replace(/^\//, "")}` : "");
  if (url) {
    parts.push(`URL:${vcardEscape(url.startsWith("http") ? url : `https://${url}`)}`);
  }
  if (card.image && card.image.startsWith("data:")) {
    const base64 = card.image.replace(/^data:image\/\w+;base64,/, "");
    const mime = card.image.includes("image/png") ? "PNG" : "JPEG";
    parts.push(`PHOTO;ENCODING=b;TYPE=${mime}:${base64}`);
  }

  parts.push("END:VCARD");
  return parts.join("\r\n");
}

/**
 * Trigger download of a .vcf file in the browser.
 */
export function downloadVCard(card: VCardItem, baseUrl: string = ""): void {
  const content = buildVCardContent(card, baseUrl);
  const blob = new Blob([content], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${(card.title || "vcard").replace(/[^a-z0-9-_]/gi, "-").toLowerCase()}.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
