import type { Metadata } from "next";
import React from "react";
import { AppointmentsContent } from "@/components/appointments/AppointmentsContent";

export const metadata: Metadata = {
  title: "Appointments | Open My Profile",
  description: "Manage your appointments",
};

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <AppointmentsContent />
    </div>
  );
}
