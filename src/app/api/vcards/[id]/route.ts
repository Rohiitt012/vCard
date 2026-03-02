import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

function getEditToken(request: Request): string | null {
  return request.headers.get("x-edit-token") ?? null;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const prisma = getPrisma();
    const vcard = await prisma.vCard.findUnique({
      where: { id },
      include: { inquiries: true },
    });
    if (!vcard) return NextResponse.json({ error: "Not found" }, { status: 404 });
    const inquiries = vcard.inquiries.map((i) => ({
      id: i.id,
      name: i.name,
      email: i.email,
      phone: i.phone ?? undefined,
      message: i.message,
      date: i.createdAt.toISOString(),
    }));
    const out = {
      id: vcard.id,
      ...(vcard.data as object),
      slug: vcard.slug,
      viewCount: vcard.viewCount,
      previewUrl: `/${vcard.slug}`,
      deletedAt: vcard.deletedAt?.toISOString() ?? null,
      inquiries,
    };
    return NextResponse.json(out);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to get vCard" }, { status: 500 });
  }
}

export async function PUT(
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
    const body = await request.json();
    const { slug, viewCount, id: _id, inquiries: _inquiries, ...data } = body;
    const updateData: { data: object; slug?: string } = { data: data as object };
    if (slug !== undefined) {
      const rawSlug = (slug ?? vcard.slug).toString().trim().toLowerCase().replace(/[^a-z0-9-_]/g, "-") || vcard.slug;
      if (rawSlug !== vcard.slug) {
        const existing = await prisma.vCard.findUnique({ where: { slug: rawSlug } });
        if (existing) return NextResponse.json({ error: "Slug already taken" }, { status: 409 });
        updateData.slug = rawSlug;
      }
    }
    const updated = await prisma.vCard.update({
      where: { id },
      data: updateData,
      include: { inquiries: true },
    });
    const inquiries = updated.inquiries.map((i) => ({
      id: i.id,
      name: i.name,
      email: i.email,
      phone: i.phone ?? undefined,
      message: i.message,
      date: i.createdAt.toISOString(),
    }));
    const out = {
      id: updated.id,
      ...(updated.data as object),
      slug: updated.slug,
      viewCount: updated.viewCount,
      previewUrl: `/${updated.slug}`,
      inquiries,
    };
    return NextResponse.json(out);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to update vCard" }, { status: 500 });
  }
}

export async function DELETE(
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
    await prisma.vCard.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to delete vCard" }, { status: 500 });
  }
}
