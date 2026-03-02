import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { slugCheckSchema } from "@/lib/api-validate";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const parsed = slugCheckSchema.safeParse({
      slug: searchParams.get("slug") ?? "",
      excludeId: searchParams.get("excludeId") ?? undefined,
    });
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors.slug?.[0] ?? "Invalid slug" },
        { status: 400 }
      );
    }
    const { slug, excludeId } = parsed.data;
    const prisma = getPrisma();
    const existing = await prisma.vCard.findFirst({ where: { slug, deletedAt: null } });
    const available = !existing || (excludeId && existing.id === excludeId);
    return NextResponse.json({ slug, available });
  } catch (e) {
    if ((e as Error).message?.includes("Database not configured")) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }
    console.error(e);
    return NextResponse.json({ error: "Failed to check slug" }, { status: 500 });
  }
}
