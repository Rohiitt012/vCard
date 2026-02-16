"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons";

export const EcommerceMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-xl border border-gray-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] md:p-6 transition-shadow hover:shadow-md">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-200/50 dark:ring-gray-700/50">
          <GroupIcon className="text-gray-700 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">
              Customers
            </span>
            <h4 className="mt-1.5 font-semibold tracking-tight text-gray-900 text-title-sm dark:text-white/90">
              3,782
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            11.01%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-xl border border-gray-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] md:p-6 transition-shadow hover:shadow-md">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-200/50 dark:ring-gray-700/50">
          <BoxIconLine className="text-gray-700 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-theme-sm font-medium text-gray-500 dark:text-gray-400">
              Orders
            </span>
            <h4 className="mt-1.5 font-semibold tracking-tight text-gray-900 text-title-sm dark:text-white/90">
              5,359
            </h4>
          </div>

          <Badge color="error">
            <ArrowDownIcon className="text-error-500" />
            9.05%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
};
