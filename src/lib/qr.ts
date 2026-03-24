import QRCode from "qrcode";

export type QROptions = {
  width?: number;
  fgColor?: string;
  bgColor?: string;
  dotStyle?: "square" | "rounded";
  eyeStyle?: "square" | "rounded";
};

/**
 * Generate QR code as data URL (png) for the given URL.
 * Use in browser (client component).
 */
export function generateQrDataUrl(
  url: string,
  options: QROptions = {}
): Promise<string> {
  const {
    width = 256,
    fgColor = "#000000",
    bgColor = "#ffffff",
    dotStyle = "square",
    eyeStyle = "square",
  } = options;

  const fallback = () =>
    QRCode.toDataURL(url, {
      width,
      margin: 2,
      color: { dark: fgColor, light: bgColor },
    });

  if (typeof window === "undefined") {
    return fallback();
  }

  return import("qr-code-styling")
    .then(async (mod) => {
      const QRCodeStylingCtor = (mod.default ?? (mod as unknown as { QRCodeStyling: unknown }).QRCodeStyling) as new (opts: Record<string, unknown>) => {
        getRawData: (ext?: string) => Promise<Blob | Buffer | null>;
      };

      if (!QRCodeStylingCtor) return fallback();

      const dotsType = dotStyle === "rounded" ? "rounded" : "square";
      const cornersType = eyeStyle === "rounded" ? "extra-rounded" : "square";

      const qr = new QRCodeStylingCtor({
        width,
        height: width,
        type: "png",
        data: url,
        margin: 2,
        dotsOptions: { color: fgColor, type: dotsType },
        cornersSquareOptions: { color: fgColor, type: cornersType },
        cornersDotOptions: { color: fgColor, type: cornersType },
        backgroundOptions: { color: bgColor },
      });

      const raw = await qr.getRawData("png");
      if (!(raw instanceof Blob)) return fallback();

      return await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(String(reader.result || ""));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(raw);
      });
    })
    .catch(() => fallback());
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
