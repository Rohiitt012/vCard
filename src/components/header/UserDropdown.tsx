"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { Modal } from "../ui/modal";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import Button from "../ui/button/Button";
import { EyeIcon, EyeCloseIcon, CopyIcon } from "@/icons";
import { useUser } from "@/context/UserContext";

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

const LANGUAGES = [
  "Arabic",
  "Chinese",
  "English",
  "French",
  "German",
  "Hindi",
  "Portuguese",
  "Spanish",
  "Japanese",
  "Korean",
];

export default function UserDropdown() {
  const { user } = useUser();
  const userName = user?.name ?? "User";
  const userEmail = user?.email ?? "";

  const [isOpen, setIsOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [twoFactorOpen, setTwoFactorOpen] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");
  const [changeLanguageOpen, setChangeLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [languageListOpen, setLanguageListOpen] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!languageListOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(e.target as Node)) {
        setLanguageListOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [languageListOpen]);

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => setIsOpen(false);

  const openChangePasswordModal = () => {
    setChangePasswordOpen(true);
    closeDropdown();
  };

  const closeChangePasswordModal = () => {
    setChangePasswordOpen(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleChangePasswordDiscard = () => closeChangePasswordModal();
  const handleChangePasswordSave = () => {
    closeChangePasswordModal();
  };

  const openTwoFactorModal = () => {
    setTwoFactorOpen(true);
    closeDropdown();
  };

  const closeTwoFactorModal = () => {
    setTwoFactorOpen(false);
    setVerifyCode("");
  };

  const twoFactorSecretKey = "MCFETBJQS4FRMMPW";
  const copySecretKey = () => {
    navigator.clipboard.writeText(twoFactorSecretKey);
  };

  const handleVerify2FA = (e: React.FormEvent) => {
    e.preventDefault();
    closeTwoFactorModal();
  };

  const openChangeLanguageModal = () => {
    setChangeLanguageOpen(true);
    setLanguageListOpen(false);
    closeDropdown();
  };

  const closeChangeLanguageModal = () => {
    setChangeLanguageOpen(false);
    setLanguageListOpen(false);
  };

  const handleLanguageSave = (e: React.FormEvent) => {
    e.preventDefault();
    closeChangeLanguageModal();
  };

  const handleLanguageDiscard = () => closeChangeLanguageModal();

  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false);
  const openDeleteAccountModal = () => {
    setDeleteAccountOpen(true);
    closeDropdown();
  };
  const closeDeleteAccountModal = () => setDeleteAccountOpen(false);
  const handleDeleteAccount = () => {
    closeDeleteAccountModal();
    // TODO: API call to delete account
  };

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
        className="absolute right-0 w-[280px] flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-theme-lg dark:border-gray-800 dark:bg-gray-900"
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
            <DropdownItem tag="button" onClick={openChangePasswordModal} className={itemClass}>
              <LockIcon />
              Change Password
            </DropdownItem>
          </li>
          <li>
            <DropdownItem tag="button" onClick={openTwoFactorModal} className={itemClass}>
              <KeyIcon />
              Two Factor Authentication
            </DropdownItem>
          </li>
          <li>
            <DropdownItem tag="button" onClick={openChangeLanguageModal} className={itemClass}>
              <GlobeIcon />
              Change Language
            </DropdownItem>
          </li>
          <li>
            <DropdownItem tag="button" onClick={openDeleteAccountModal} className={`${itemClass} text-error-500 hover:bg-error-50 dark:hover:bg-error-500/10`}>
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

      {/* Change Password Modal - same design, font & content as reference */}
      <Modal
        isOpen={changePasswordOpen}
        onClose={closeChangePasswordModal}
        className="max-w-[480px] w-full mx-4 rounded-3xl bg-white dark:bg-gray-900 shadow-xl p-6 lg:p-8 border border-gray-200/50 dark:border-gray-700/50"
      >
        <h4 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">
          Change Password
        </h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleChangePasswordSave();
          }}
          className="space-y-5"
        >
          <div>
            <Label htmlFor="current-password" className="text-gray-900 dark:text-gray-100 font-medium text-sm">
              Current Password: <span className="text-red-500">*</span>
            </Label>
            <div className="relative mt-1.5">
              <Input
                id="current-password"
                type={showCurrent ? "text" : "password"}
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-600 pr-10 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                aria-label={showCurrent ? "Hide password" : "Show password"}
              >
                {showCurrent ? (
                  <EyeCloseIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <div>
            <Label htmlFor="new-password" className="text-gray-900 dark:text-gray-100 font-medium text-sm">
              New Password: <span className="text-red-500">*</span>
            </Label>
            <div className="relative mt-1.5">
              <Input
                id="new-password"
                type={showNew ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-600 pr-10 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                aria-label={showNew ? "Hide password" : "Show password"}
              >
                {showNew ? (
                  <EyeCloseIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <div>
            <Label htmlFor="confirm-password" className="text-gray-900 dark:text-gray-100 font-medium text-sm">
              Confirm Password: <span className="text-red-500">*</span>
            </Label>
            <div className="relative mt-1.5">
              <Input
                id="confirm-password"
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-600 pr-10 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                aria-label={showConfirm ? "Hide password" : "Show password"}
              >
                {showConfirm ? (
                  <EyeCloseIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-2 justify-end">
            <Button type="submit" size="sm" className="font-semibold">
              Save
            </Button>
            <Button type="button" size="sm" variant="outline" onClick={handleChangePasswordDiscard} className="bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 font-medium">
              Discard
            </Button>
          </div>
        </form>
      </Modal>

      {/* Enable Two-Factor Authentication Modal - same as Change Password: page ke upar popup */}
      <Modal
        isOpen={twoFactorOpen}
        onClose={closeTwoFactorModal}
        className="max-w-[520px] w-full mx-4 rounded-3xl bg-white dark:bg-gray-900 shadow-xl p-6 lg:p-8 border border-gray-200/50 dark:border-gray-700/50"
      >
        <h4 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
          Enable Two-Factor Authentication
        </h4>

        {/* Info box */}
        <div className="mb-6 flex gap-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border border-blue-100 dark:border-blue-800/50">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-400 text-sm font-bold">
            i
          </span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Two-factor authentication adds an extra layer of security to your account by requiring both your password and a verification code.
          </p>
        </div>

        <form onSubmit={handleVerify2FA} className="space-y-5">
          {/* Step 1 */}
          <div>
            <h5 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
              1. Configure your authenticator app
            </h5>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 pl-1">
              <li>Install Google Authenticator or Authy on your mobile device</li>
              <li>Open the app and tap the + icon to add a new account</li>
              <li>Scan the QR code below or enter the secret key manually</li>
            </ul>
          </div>

          {/* Step 2 & 3 - QR + Secret Key side by side */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <h5 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                2. Scan QR Code
              </h5>
              <div className="h-40 w-40 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-xs text-gray-400 dark:text-gray-500">QR Code</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                3. Secret Key
              </h5>
              <div className="flex gap-2">
                <Input
                  readOnly
                  value={twoFactorSecretKey}
                  className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-sm font-mono"
                />
                <button
                  type="button"
                  onClick={copySecretKey}
                  className="shrink-0 flex items-center justify-center h-11 w-11 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  aria-label="Copy secret key"
                >
                  <CopyIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Step 4 - Verify Code */}
          <div>
            <h5 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
              4. Verify Code
            </h5>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
              Enter the 6-digit code from your authenticator app:
            </p>
            <Input
              type="text"
              placeholder="Enter 6-digit Code"
              value={verifyCode}
              onChange={(e) => setVerifyCode(e.target.value)}
              maxLength={6}
              className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 pt-2 justify-end">
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={closeTwoFactorModal}
              className="bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 font-medium"
            >
              Discard
            </Button>
            <Button type="submit" size="sm" className="font-semibold inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Verify & Activate 2FA
            </Button>
          </div>
        </form>
      </Modal>

      {/* Change Language Modal - same as Change Password: page ke upar popup */}
      <Modal
        isOpen={changeLanguageOpen}
        onClose={closeChangeLanguageModal}
        className="max-w-[440px] w-full mx-4 rounded-3xl bg-white dark:bg-gray-900 shadow-xl p-6 lg:p-8 border border-gray-200/50 dark:border-gray-700/50"
      >
        <h4 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">
          Change Language
        </h4>

        <form onSubmit={handleLanguageSave} className="space-y-5">
          <div>
            <Label htmlFor="language-select" className="text-gray-900 dark:text-gray-100 font-medium text-sm">
              Language:
            </Label>
            <div className="relative mt-1.5" ref={languageDropdownRef}>
              <button
                id="language-select"
                type="button"
                onClick={() => setLanguageListOpen((prev) => !prev)}
                className="h-11 w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-left text-sm text-gray-900 dark:text-white flex items-center justify-between shadow-theme-xs focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              >
                <span>{selectedLanguage}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${languageListOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {languageListOpen && (
                <div className="absolute left-0 right-0 top-full mt-1 z-20 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 shadow-lg max-h-56 overflow-y-auto">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setLanguageListOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                        selectedLanguage === lang
                          ? "bg-brand-500 text-white font-medium"
                          : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2 justify-end">
            <Button type="submit" size="sm" className="font-semibold">
              Save
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={handleLanguageDiscard}
              className="bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 font-medium"
            >
              Discard
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete My Account - professional confirmation modal */}
      <Modal
        isOpen={deleteAccountOpen}
        onClose={closeDeleteAccountModal}
        className="max-w-[480px] w-full mx-4 rounded-2xl bg-white dark:bg-gray-900 shadow-2xl p-0 overflow-hidden border border-gray-200/60 dark:border-gray-700/60 flex flex-col"
      >
        <div className="p-8 lg:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 dark:bg-red-500/10 [&_svg]:!text-red-500 [&_svg]:dark:!text-red-400 [&_svg]:!w-6 [&_svg]:!h-6">
              <TrashIcon />
            </div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
              Are you sure you want to delete your account?
            </h2>
            <div className="w-full rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200/80 dark:border-amber-500/20 px-4 py-3.5 mb-6">
              <p className="text-sm text-gray-700 dark:text-gray-300 text-left">
                <span className="font-semibold text-amber-600 dark:text-amber-400">Warning:</span>
                {" "}
                Deleting your account will result in the loss of all data.
              </p>
            </div>
            <button
              type="button"
              onClick={handleDeleteAccount}
              className="w-full sm:w-auto min-w-[200px] px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-semibold text-sm shadow-lg shadow-red-500/25 hover:shadow-red-500/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Delete My Account
            </button>
          </div>
        </div>
        <div className="border-t border-gray-100 dark:border-gray-800 px-6 lg:px-10 py-4">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            All Rights Reserved ©2026 Open My Profile
          </p>
        </div>
      </Modal>
    </div>
  );
}
