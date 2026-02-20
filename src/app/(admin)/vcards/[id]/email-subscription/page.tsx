import type { Metadata } from "next";
import React from "react";
import { VCardEmailSubscriptionContent } from "@/components/vcards/VCardEmailSubscriptionContent";

export const metadata: Metadata = {
  title: "vCard Email Subscription | Open My Profile",
  description: "Manage vCard email subscriptions",
};

export default async function VCardEmailSubscriptionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <VCardEmailSubscriptionContent vcardId={id} />;
}
