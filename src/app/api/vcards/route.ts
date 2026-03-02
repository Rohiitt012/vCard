import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import crypto from "crypto";
import { createVCardSchema } from "@/lib/api-validate";

export async function GET(request: Request) {
  try {
    const prisma = getPrisma();
    const { searchParams } = new URL(request.url);
    const includeDeleted = searchParams.get("deleted") === "1";
    const list = await prisma.vCard.findMany({
      where: includeDeleted ? undefined : { deletedAt: null },
      orderBy: { updatedAt: "desc" },
    });
    const vcards = list.map((v) => ({
      id: v.id,
      ...(v.data as object),
      slug: v.slug,
      viewCount: v.viewCount,
      previewUrl: `/${v.slug}`,
      deletedAt: v.deletedAt?.toISOString() ?? null,
      inquiries: undefined,
    }));
    return NextResponse.json(vcards);
  } catch (e) {
    if ((e as Error).message?.includes("Database not configured")) {
      return NextResponse.json({ error: "Database not configured. Set DATABASE_URL in .env." }, { status: 503 });
    }
    console.error(e);
    return NextResponse.json({ error: "Failed to list vCards" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const prisma = getPrisma();
    const body = await request.json();
    const parsed = createVCardSchema.safeParse(body);
    if (!parsed.success) {
      const msg = parsed.error.flatten().fieldErrors.slug?.[0] ?? "Invalid input";
      return NextResponse.json({ error: msg }, { status: 400 });
    }
    const { slug: rawSlug, id: _id, viewCount: _vc, previewUrl: _pu, inquiries: _inq, editToken: _et, ...data } = parsed.data as Record<string, unknown>;
    const existing = await prisma.vCard.findUnique({ where: { slug: rawSlug } });
    if (existing) {
      return NextResponse.json({ error: "This URL alias already exists." }, { status: 409 });
    }
    const editToken = crypto.randomBytes(24).toString("hex");
    const vcard = await prisma.vCard.create({
      data: {
        slug: rawSlug,
        editToken,
        data: data as object,
        viewCount: 0,
      },
    });
    const out = { id: vcard.id, editToken, ...(vcard.data as object), slug: vcard.slug, viewCount: vcard.viewCount, previewUrl: `/${vcard.slug}` };
    return NextResponse.json(out);
  } catch (e) {
    if ((e as Error).message?.includes("Database not configured")) {
      return NextResponse.json({ error: "Database not configured. Set DATABASE_URL in .env." }, { status: 503 });
    }
    console.error(e);
    return NextResponse.json({ error: "Failed to create vCard" }, { status: 500 });
  }
}
