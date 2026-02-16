"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

const iconClass = "w-5 h-5 shrink-0 text-gray-500 dark:text-gray-400";
const itemClass =
  "flex items-center gap-3 px-3 py-2 font-medium rounded-lg text-theme-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300";

const PersonIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const CardIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
);
const LockIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);
const KeyIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </svg>
);
const GlobeIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);
const TrashIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);
const InfoIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);
const SignOutIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);
const GearIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

const userName = "ROHIT CHAUHAN";
const userEmail = "rohiitt786@gmail.com";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 text-gray-700 dark:text-gray-400 dropdown-toggle min-w-0"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="overflow-hidden rounded-full h-9 w-9 sm:h-10 sm:w-10 shrink-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <Image
            width={40}
            height={40}
            src="/images/user/owner.jpg"
            alt="User"
            className="h-full w-full object-cover"
          />
        </span>
        <span className="hidden sm:block truncate font-medium text-theme-sm max-w-[120px] lg:max-w-[140px]">
          {userName.split(" ")[0]}
        </span>
        <svg
          className={`shrink-0 w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-2 w-[280px] flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-theme-lg dark:border-gray-800 dark:bg-gray-900"
      >
        <div className="flex flex-col items-center text-center pb-3 border-b border-gray-200 dark:border-gray-800">
          <span className="overflow-hidden rounded-full h-14 w-14 shrink-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <Image
              width={56}
              height={56}
              src="/images/user/owner.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </span>
          <span className="mt-2 block font-semibold text-gray-900 dark:text-white text-sm">
            {userName}
          </span>
          <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400 truncate w-full">
            {userEmail}
          </span>
        </div>

        <ul className="flex flex-col gap-0.5 pt-3">
          <li>
            <DropdownItem tag="a" href="/profile" onItemClick={closeDropdown} className={itemClass}>
              <PersonIcon />
              Account Settings
            </DropdownItem>
          </li>
          <li>
            <DropdownItem tag="a" href="/manage-subscription" onItemClick={closeDropdown} className={itemClass}>
              <CardIcon />
              Manage Subscription
            </DropdownItem>
          </li>
          <li>
            <DropdownItem tag="a" href="/profile/change-password" onItemClick={closeDropdown} className={itemClass}>
              <LockIcon />
              Change Password
            </DropdownItem>
          </li>
          <li>
            <DropdownItem tag="a" href="/profile/two-factor" onItemClick={closeDropdown} className={itemClass}>
              <KeyIcon />
              Two Factor Authentication
            </DropdownItem>
          </li>
          <li>
            <DropdownItem tag="a" href="/profile/language" onItemClick={closeDropdown} className={itemClass}>
              <GlobeIcon />
              Change Language
            </DropdownItem>
          </li>
          <li>
            <DropdownItem tag="a" href="/profile/delete-account" onItemClick={closeDropdown} className={`${itemClass} text-error-500 hover:bg-error-50 dark:hover:bg-error-500/10`}>
              <TrashIcon />
              Delete My Account
            </DropdownItem>
          </li>
          <li>
            <DropdownItem tag="a" href="/profile" onItemClick={closeDropdown} className={itemClass}>
              <InfoIcon />
              Support
            </DropdownItem>
          </li>
        </ul>

        <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-800">
          <Link
            href="/signin"
            onClick={closeDropdown}
            className={itemClass}
          >
            <SignOutIcon />
            Sign Out
          </Link>
        </div>
      </Dropdown>
    </div>
  );
}
