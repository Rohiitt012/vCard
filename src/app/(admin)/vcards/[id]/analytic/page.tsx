import type { Metadata } from "next";
import React from "react";
import { VCardAnalyticContent } from "@/components/vcards/VCardAnalyticContent";

export const metadata: Metadata = {
  title: "vCard Analytic | Open My Profile",
  description: "View vCard analytics",
};

export default async function VCardAnalyticPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <VCardAnalyticContent vcardId={id} />;
}
