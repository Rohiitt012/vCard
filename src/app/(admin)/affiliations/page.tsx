import type { Metadata } from "next";
import React from "react";
import { AffiliationsContent } from "@/components/affiliations/AffiliationsContent";

export const metadata: Metadata = {
  title: "Affiliations | Open My Profile",
  description: "Manage your affiliate links and rewards",
};

export default function AffiliationsPage() {
  return (
    <div className="space-y-6">
      <AffiliationsContent />
    </div>
  );
}
