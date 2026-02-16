import Link from "next/link";
import React from "react";

const AppFooter: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-gray-200/90 dark:border-gray-800 bg-gray-100/80 dark:bg-gray-900/60">
      <div className="mx-auto w-full max-w-(--breakpoint-2xl) flex flex-col items-center justify-between gap-3 px-4 py-4 sm:py-5 md:flex-row md:px-6">
        <span className="text-sm text-gray-600 dark:text-gray-400 tracking-tight">
          All Rights Reserved ©2026
        </span>
        <Link
          href="/"
          className="text-sm font-semibold text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 transition-colors"
        >
          Open My Profile
        </Link>
      </div>
    </footer>
  );
};

export default AppFooter;
