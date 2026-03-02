import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const checks: { database?: string } = {};
  try {
    const prisma = getPrisma();
    await prisma.vCard.findFirst({ take: 1, select: { id: true } });
    checks.database = "ok";
  } catch (e) {
    checks.database = (e as Error).message?.includes("Database not configured") ? "not_configured" : "error";
  }
  const ok = checks.database === "ok";
  return NextResponse.json(
    { status: ok ? "ok" : "degraded", checks },
    { status: ok ? 200 : 503 }
  );
}
