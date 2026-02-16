import type { Metadata } from "next";
import React from "react";
import { ManageSubscriptionContent } from "@/components/subscription/ManageSubscriptionContent";

export const metadata: Metadata = {
  title: "Manage Subscription | Open My Profile",
  description: "View and manage your subscription plan",
};

export default function ManageSubscriptionPage() {
  return (
    <div className="space-y-6">
      <ManageSubscriptionContent />
    </div>
  );
}
