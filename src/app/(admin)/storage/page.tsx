import type { Metadata } from "next";
import React from "react";
import { StorageContent } from "@/components/storage/StorageContent";

export const metadata: Metadata = {
  title: "Storage | Open My Profile",
  description: "Manage your storage usage",
};

export default function StoragePage() {
  return (
    <div className="space-y-6">
      <StorageContent />
    </div>
  );
}
