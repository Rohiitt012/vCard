import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    const lower = slug?.toLowerCase();
    if (!lower) return NextResponse.json({ error: "Slug required" }, { status: 400 });
    const prisma = getPrisma();
    const vcard = await prisma.vCard.findFirst({
      where: { slug: lower, deletedAt: null },
    });
    if (!vcard) return NextResponse.json({ error: "Not found" }, { status: 404 });
    const data = (vcard.data as Record<string, unknown>) ?? {};
    const { password: _p, ...restData } = data;
    const hasPassword = !!data.password;
    const out = {
      id: vcard.id,
      ...restData,
      slug: vcard.slug,
      viewCount: vcard.viewCount,
      previewUrl: `/${vcard.slug}`,
      requiresPassword: hasPassword,
    };
    return NextResponse.json(out, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to get vCard" }, { status: 500 });
  }
}
