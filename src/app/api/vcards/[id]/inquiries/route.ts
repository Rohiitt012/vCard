import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { inquirySchema } from "@/lib/api-validate";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendInquiryNotification } from "@/lib/email";

function getEditToken(request: Request): string | null {
  return request.headers.get("x-edit-token") ?? null;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = getEditToken(request);
    if (!token) return NextResponse.json({ error: "Edit token required" }, { status: 401 });
    const { id } = await params;
    const prisma = getPrisma();
    const vcard = await prisma.vCard.findUnique({ where: { id } });
    if (!vcard) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (vcard.editToken !== token) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    const list = await prisma.inquiry.findMany({
      where: { vcardId: id },
      orderBy: { createdAt: "desc" },
    });
    const inquiries = list.map((i) => ({
      id: i.id,
      name: i.name,
      email: i.email,
      phone: i.phone ?? undefined,
      message: i.message,
      date: i.createdAt.toISOString(),
    }));
    return NextResponse.json(inquiries);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to list inquiries" }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const limit = checkRateLimit(request);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests. Try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
    );
  }
  try {
    const { id } = await params;
    const prisma = getPrisma();
    const vcard = await prisma.vCard.findUnique({ where: { id } });
    if (!vcard) return NextResponse.json({ error: "Not found" }, { status: 404 });
    const body = await request.json();
    const parsed = inquirySchema.safeParse(body);
    if (!parsed.success) {
      const first = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0];
      return NextResponse.json({ error: first ?? "Invalid input" }, { status: 400 });
    }
    const { name, email, phone, message, website } = parsed.data;
    if (website) return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    await prisma.inquiry.create({
      data: { vcardId: id, name, email, phone: phone ?? null, message },
    });
    const notifyEmail = (vcard.data as { email?: string })?.email;
    if (notifyEmail) {
      await sendInquiryNotification({
        to: notifyEmail,
        vcardTitle: ((vcard.data as { title?: string })?.title) ?? "vCard",
        inquiryName: name,
        inquiryEmail: email,
        inquiryPhone: phone,
        inquiryMessage: message,
      });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}
