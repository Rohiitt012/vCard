"use client";

import React, { useState } from "react";
import Link from "next/link";

const PencilIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const HelpIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const inputClass =
  "h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";
const labelClass = "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300";

export const AddVirtualBackgroundForm = () => {
  const [vcard, setVcard] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white md:text-2xl">
          Add Virtual Background
        </h1>
        <Link
          href="/virtual-backgrounds"
          className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 w-fit"
        >
          Back
        </Link>
      </div>

      <div className="card-premium p-6 md:p-8">
        <form className="space-y-6">
          {/* vCard Name */}
          <div>
            <label htmlFor="vcard" className={labelClass}>
              vCard Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="vcard"
                value={vcard}
                onChange={(e) => setVcard(e.target.value)}
                className={`${inputClass} appearance-none pr-10`}
              >
                <option value="">Select Vcard</option>
                <option value="vcard1">My Business Card</option>
                <option value="vcard2">Personal Card</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </div>

          {/* Add E-card */}
          <div>
            <label className={`${labelClass} flex items-center gap-1.5`}>
              Add E-card <span className="text-red-500">*</span>
              <span title="Upload or choose your e-card image"><HelpIcon /></span>
            </label>
            <div className="flex items-start gap-4">
              <label className="relative flex-shrink-0 cursor-pointer group">
                <input type="file" className="sr-only" accept="image/*" />
                <div className="w-28 h-28 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center bg-gradient-to-br from-gray-900 to-indigo-900 text-white text-xs font-semibold text-center p-2 overflow-hidden ring-2 ring-indigo-500/30 hover:ring-brand-500/50 transition-shadow">
                  OPEN MY PROFILE
                </div>
                <span className="absolute top-0 right-0 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-md group-hover:bg-brand-600">
                  <PencilIcon />
                </span>
              </label>
            </div>
          </div>

          {/* Two column grid: First Name, Last Name, Email, Occupation, Location, Phone, Website */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className={labelClass}>
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="lastName" className={labelClass}>
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="occupation" className={labelClass}>
                Enter Occupation <span className="text-red-500">*</span>
              </label>
              <input
                id="occupation"
                type="text"
                placeholder="Enter Occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="location" className={labelClass}>
                Location <span className="text-red-500">*</span>
              </label>
              <input
                id="location"
                type="text"
                placeholder="Enter Your Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="flex rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden focus-within:ring-2 focus-within:ring-brand-500/20 focus-within:border-brand-500">
                <select className="h-11 px-3 bg-gray-50 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 focus:outline-none">
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 min-w-0 h-11 px-4 py-2.5 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="website" className={labelClass}>
                Website <span className="text-red-500">*</span>
              </label>
              <input
                id="website"
                type="url"
                placeholder="WebSite URL"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
            <button
              type="submit"
              className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              Save
            </button>
            <button
              type="button"
              className="rounded-lg bg-gray-200 dark:bg-gray-700 px-5 py-2.5 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
