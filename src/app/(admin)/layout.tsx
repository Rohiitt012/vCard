"use client";

import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import { usePathname } from "next/navigation";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const pathname = usePathname();
  const isFullWidthPage =
    pathname?.startsWith("/whatsapp-stores") ||
    pathname?.startsWith("/whatsapp-product-order") ||
    pathname?.startsWith("/inquiries") ||
    pathname?.startsWith("/appointments") ||
    pathname?.startsWith("/product-orders") ||
    pathname?.startsWith("/virtual-backgrounds") ||
    pathname?.startsWith("/affiliations") ||
    pathname?.startsWith("/storage") ||
    pathname?.startsWith("/settings") ||
    pathname?.startsWith("/manage-subscription");

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  return (
    <div className="min-h-screen xl:flex min-w-0 overflow-x-hidden">
      {/* Sidebar and Backdrop */}
      <AppSidebar />
      <Backdrop />
      {/* Main Content Area */}
      <div
        className={`flex-1 min-w-0 transition-all duration-300 ease-in-out ${mainContentMargin}`}
      >
        {/* Header */}
        <AppHeader />
        {/* Page Content */}
        <div className="flex flex-col min-h-[calc(100vh-4rem)] min-w-0">
          <div
            className={`flex-1 w-full min-w-0 p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-b from-slate-50/98 via-white/95 to-slate-100/90 dark:from-gray-950/98 dark:via-gray-900/95 dark:to-gray-900/90 ${
              isFullWidthPage ? "" : "mx-auto max-w-(--breakpoint-2xl)"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
