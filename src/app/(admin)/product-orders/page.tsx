import type { Metadata } from "next";
import React from "react";
import { ProductOrdersContent } from "@/components/product-orders/ProductOrdersContent";

export const metadata: Metadata = {
  title: "Product Orders | Open My Profile",
  description: "Manage your product orders",
};

export default function ProductOrdersPage() {
  return (
    <div className="space-y-6">
      <ProductOrdersContent />
    </div>
  );
}
