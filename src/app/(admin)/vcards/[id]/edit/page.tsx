import type { Metadata } from "next";
import React from "react";
import { EditVCardContent } from "@/components/vcards/EditVCardContent";

export const metadata: Metadata = {
  title: "Edit vCard | Open My Profile",
  description: "Edit your vCard details",
};

export default async function EditVCardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <EditVCardContent vcardId={id} />;
}
