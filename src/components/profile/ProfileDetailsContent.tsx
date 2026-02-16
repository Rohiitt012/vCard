"use client";

import React, { useState } from "react";
import Image from "next/image";

const inputClass =
  "h-11 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";
const labelClass = "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300";

const PencilIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export const ProfileDetailsContent = () => {
  const [firstName, setFirstName] = useState("ROHIT");
  const [lastName, setLastName] = useState("CHAUHAN");
  const [email, setEmail] = useState("rohiitt786@gmail.com");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
        <h1 className="page-title">Profile Details</h1>
      </div>

      <div className="card-premium p-6 sm:p-8">
        <form className="space-y-5 sm:space-y-6">
          {/* Avatar */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <label className={labelClass}>
              Avatar: <span className="text-red-500">*</span>
            </label>
            <div className="relative inline-flex shrink-0">
              <span className="flex h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600">
                <Image
                  src="/images/user/owner.jpg"
                  alt="Avatar"
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </span>
              <button
                type="button"
                className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
                aria-label="Edit avatar"
              >
                <PencilIcon />
              </button>
            </div>
          </div>

          {/* Full Name - two fields */}
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] sm:items-start gap-2 sm:gap-6">
            <label className={`${labelClass} sm:pt-3`}>Full Name:</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          {/* Email */}
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] sm:items-center gap-2 sm:gap-6">
            <label className={labelClass}>
              Email: <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>

          {/* Contact Number */}
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] sm:items-center gap-2 sm:gap-6">
            <label className={labelClass}>
              Contact Number: <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden focus-within:ring-2 focus-within:ring-brand-500/20 focus-within:border-brand-500">
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300"
              >
                <span className="text-base">🇮🇳</span>
                <span>{countryCode}</span>
                <ChevronDownIcon />
              </button>
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 min-w-0 h-11 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 bg-white dark:bg-gray-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] sm:items-start gap-2 sm:gap-6">
            <label className={`${labelClass} sm:pt-3`}>Address:</label>
            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className={`${inputClass} min-h-[80px] resize-y`}
            />
          </div>

          {/* City */}
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] sm:items-center gap-2 sm:gap-6">
            <label className={labelClass}>City:</label>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={inputClass}
            />
          </div>

          {/* Country */}
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] sm:items-center gap-2 sm:gap-6">
            <label className={labelClass}>Country:</label>
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className={inputClass}
            />
          </div>

          {/* Postal Code */}
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] sm:items-center gap-2 sm:gap-6">
            <label className={labelClass}>Postal Code:</label>
            <input
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className={inputClass}
            />
          </div>

          {/* Identification Number */}
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] sm:items-center gap-2 sm:gap-6">
            <label className={labelClass}>Identification Number:</label>
            <input
              type="text"
              placeholder="Identification Number"
              value={identificationNumber}
              onChange={(e) => setIdentificationNumber(e.target.value)}
              className={inputClass}
            />
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button type="submit" className="btn-primary-premium">
              Save
            </button>
            <button
              type="button"
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all"
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
