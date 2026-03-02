import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const lower = slug?.toLowerCase();
    if (!lower) return NextResponse.json({ error: "Slug required" }, { status: 400 });
    const body = await request.json().catch(() => ({}));
    const password = (body.password ?? "").toString();
    const prisma = getPrisma();
    const vcard = await prisma.vCard.findFirst({
      where: { slug: lower, deletedAt: null },
    });
    if (!vcard) return NextResponse.json({ error: "Not found" }, { status: 404 });
    const stored = (vcard.data as Record<string, unknown>)?.password;
    if (!stored) return NextResponse.json({ ok: true });
    if (password !== stored) return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to verify" }, { status: 500 });
  }
}
