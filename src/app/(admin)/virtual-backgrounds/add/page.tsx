import type { Metadata } from "next";
import React from "react";
import { AddVirtualBackgroundForm } from "@/components/virtual-backgrounds/AddVirtualBackgroundForm";

export const metadata: Metadata = {
  title: "Add Virtual Background | Open My Profile",
  description: "Add a new virtual background",
};

export default function AddVirtualBackgroundPage() {
  return (
    <div className="space-y-6">
      <AddVirtualBackgroundForm />
    </div>
  );
}
