import type { Metadata } from "next";
import React from "react";
import { InquiriesContent } from "@/components/inquiries/InquiriesContent";

export const metadata: Metadata = {
  title: "Inquiries | Open My Profile",
  description: "Manage your inquiries",
};

export default function InquiriesPage() {
  return (
    <div className="space-y-6">
      <InquiriesContent />
    </div>
  );
}
