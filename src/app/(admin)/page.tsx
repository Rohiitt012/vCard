import type { Metadata } from "next";
import { DashboardCards } from "@/components/ecommerce/DashboardCards";
import React from "react";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import DemographicCard from "@/components/ecommerce/DemographicCard";
import { TodayAppointments } from "@/components/ecommerce/TodayAppointments";

export const metadata: Metadata = {
  title: "Dashboard | Open My Profile",
  description: "Manage your vCards, appointments, and business overview",
};

export default function Ecommerce() {
  return (
    <div className="space-y-6 sm:space-y-8 min-w-0">
      <div className="border-b border-gray-200/80 dark:border-gray-800 pb-4 sm:pb-5">
        <h1 className="page-title">Dashboard</h1>
      </div>
      <div className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
      {/* 8 boxes - full width */}
      <div className="col-span-12">
        <DashboardCards />
      </div>

      {/* Monthly Target - niche (below 8 boxes) */}
      <div className="col-span-12">
        <MonthlyTarget />
      </div>

      <div className="col-span-12">
        <MonthlySalesChart />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentOrders />
      </div>

      <div className="col-span-12">
        <TodayAppointments />
      </div>
      </div>
    </div>
  );
}
