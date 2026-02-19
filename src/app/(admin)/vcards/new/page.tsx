import type { Metadata } from "next";
import React from "react";
import { NewVCardContent } from "@/components/vcards/NewVCardContent";

export const metadata: Metadata = {
  title: "New vCard | Open My Profile",
  description: "Create a new vCard",
};

export default function NewVCardsPage() {
  return <NewVCardContent />;
}
