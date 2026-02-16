import { ProfileDetailsContent } from "@/components/profile/ProfileDetailsContent";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Profile Details | Open My Profile",
  description: "Manage your profile information",
};

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <ProfileDetailsContent />
    </div>
  );
}
