"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

const appointments: { vcardName: string; name: string; phone: string; email: string }[] = [];

export const TodayAppointments = () => {
  const hasData = appointments.length > 0;

  return (
    <div className="card-premium overflow-hidden min-w-0">
      <div className="px-6 py-5 border-b border-gray-200/80 dark:border-gray-800">
        <h2 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          Today Appointments
        </h2>
      </div>
      <div className="overflow-x-auto">
        <Table className="min-w-[400px]">
          <TableHeader>
            <TableRow className="bg-slate-100 dark:bg-gray-800/80">
              <TableCell
                isHeader
                className="rounded-tl-lg px-5 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                VCARD NAME
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                NAME
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                PHONE
              </TableCell>
              <TableCell
                isHeader
                className="rounded-tr-lg px-5 py-3.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                EMAIL
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hasData ? (
              appointments.map((row, index) => (
                <TableRow
                  key={index}
                  className="border-b border-gray-100 dark:border-gray-800/80 hover:bg-gray-50 dark:hover:bg-white/[0.02]"
                >
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-gray-200">
                    {row.vcardName}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-gray-200">
                    {row.name}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-gray-200">
                    {row.phone}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-gray-200">
                    {row.email}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="px-5 py-12 text-center text-theme-sm text-gray-500 dark:text-gray-400"
                >
                  No Data Available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
