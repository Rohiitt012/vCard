import type { Metadata } from "next";
import React from "react";
import { WhatsAppProductOrderContent } from "@/components/whatsapp/WhatsAppProductOrderContent";

export const metadata: Metadata = {
  title: "WhatsApp Product Order | Open My Profile",
  description: "Manage WhatsApp product orders",
};

export default function WhatsAppProductOrderPage() {
  return (
    <div className="space-y-6">
      <WhatsAppProductOrderContent />
    </div>
  );
}
