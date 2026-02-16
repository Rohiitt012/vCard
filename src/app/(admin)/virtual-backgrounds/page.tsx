import type { Metadata } from "next";
import React from "react";
import { VirtualBackgroundsContent } from "@/components/virtual-backgrounds/VirtualBackgroundsContent";

export const metadata: Metadata = {
  title: "Virtual Backgrounds | Open My Profile",
  description: "Create and manage virtual background cards for NFC and sharing",
};

export default function VirtualBackgroundsPage() {
  return (
    <div className="space-y-6">
      <VirtualBackgroundsContent />
    </div>
  );
}
