import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

function getEditToken(request: Request): string | null {
  return request.headers.get("x-edit-token") ?? null;
}

export async function POST(
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
    if (!vcard.deletedAt) return NextResponse.json({ ok: true });
    await prisma.vCard.update({
      where: { id },
      data: { deletedAt: null },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to restore vCard" }, { status: 500 });
  }
}
