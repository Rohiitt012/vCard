import type { Metadata } from "next";
import React from "react";
import { SettingsContent } from "@/components/settings/SettingsContent";

export const metadata: Metadata = {
  title: "Settings | Open My Profile",
  description: "Manage your account settings",
};

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <SettingsContent />
    </div>
  );
}
