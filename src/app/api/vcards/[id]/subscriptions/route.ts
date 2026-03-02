import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { subscribeSchema } from "@/lib/api-validate";
import { checkRateLimit } from "@/lib/rate-limit";

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
    const list = await prisma.emailSubscription.findMany({
      where: { vcardId: id },
      orderBy: { createdAt: "desc" },
    });
    const subscriptions = list.map((s) => ({
      email: s.email,
      createdAt: s.createdAt.toISOString(),
    }));
    return NextResponse.json(subscriptions);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to list subscriptions" }, { status: 500 });
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
    const parsed = subscribeSchema.safeParse(body);
    if (!parsed.success) {
      const first = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0];
      return NextResponse.json({ error: first ?? "Invalid email" }, { status: 400 });
    }
    const { email } = parsed.data;
    await prisma.emailSubscription.upsert({
      where: { vcardId_email: { vcardId: id, email } },
      create: { vcardId: id, email },
      update: {},
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
