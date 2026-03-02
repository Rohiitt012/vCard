import QRCode from "qrcode";

export type QROptions = {
  width?: number;
  fgColor?: string;
  bgColor?: string;
};

/**
 * Generate QR code as data URL (png) for the given URL.
 * Use in browser (client component).
 */
export function generateQrDataUrl(
  url: string,
  options: QROptions = {}
): Promise<string> {
  const { width = 256, fgColor = "#000000", bgColor = "#ffffff" } = options;
  return QRCode.toDataURL(url, {
    width,
    margin: 2,
    color: { dark: fgColor, light: bgColor },
  });
}

/**
 * Trigger download of QR code as PNG file.
 */
export function downloadQrPng(
  url: string,
  filename: string = "vcard-qr.png",
  options: QROptions = {}
): void {
  generateQrDataUrl(url, options).then((dataUrl) => {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
}
