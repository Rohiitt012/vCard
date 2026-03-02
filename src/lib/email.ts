/**
 * Optional email sending for new inquiries.
 * Set RESEND_API_KEY in .env to enable. Otherwise logs to console.
 * See: https://resend.com
 */

export async function sendInquiryNotification(options: {
  to: string;
  vcardTitle: string;
  inquiryName: string;
  inquiryEmail: string;
  inquiryPhone?: string;
  inquiryMessage: string;
}): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM ?? "onboarding@resend.dev";

  const body = [
    `New contact form submission on vCard: ${options.vcardTitle}`,
    ``,
    `From: ${options.inquiryName} <${options.inquiryEmail}>`,
    options.inquiryPhone ? `Phone: ${options.inquiryPhone}` : null,
    ``,
    `Message:`,
    options.inquiryMessage,
  ]
    .filter(Boolean)
    .join("\n");

  if (!apiKey) {
    if (process.env.NODE_ENV !== "test") {
      console.log("[Email] RESEND_API_KEY not set. Would send inquiry notification:", { to: options.to, subject: `New inquiry: ${options.vcardTitle}` });
    }
    return { ok: true };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [options.to],
        subject: `New inquiry on ${options.vcardTitle}`,
        text: body,
      }),
    });
    if (!res.ok) {
      const err = await res.text();
      return { ok: false, error: err };
    }
    return { ok: true };
  } catch (e) {
    const err = e instanceof Error ? e.message : String(e);
    return { ok: false, error: err };
  }
}
