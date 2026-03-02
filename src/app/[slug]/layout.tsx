import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "vCard | Open My Profile",
  description: "View this digital vCard. Save the contact or share the link.",
  openGraph: {
    title: "vCard | Open My Profile",
    description: "View this digital vCard. Save the contact or share the link.",
  },
};

export default function SlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
