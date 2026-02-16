import type { Metadata } from "next";
import React from "react";
import { WhatsAppStoresContent } from "@/components/whatsapp/WhatsAppStoresContent";

export const metadata: Metadata = {
  title: "WhatsApp Stores | Open My Profile",
  description: "Manage your WhatsApp Stores",
};

export default function WhatsAppStoresPage() {
  return (
    <div className="space-y-6">
      <WhatsAppStoresContent />
    </div>
  );
}
