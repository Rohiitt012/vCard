import type { Metadata } from "next";
import React from "react";
import { VCardsContent } from "@/components/vcards/VCardsContent";

export const metadata: Metadata = {
  title: "vCards | Open My Profile",
  description: "Manage your vCards",
};

export default function VCardsPage() {
  return (
    <div className="space-y-6">
      <VCardsContent />
    </div>
  );
}
