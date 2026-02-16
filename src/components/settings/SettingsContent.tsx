"use client";

import React, { useState } from "react";
import Switch from "@/components/form/switch/Switch";

const GearIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const CurrencyIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const SparkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);
const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9a9 9 0 009 9m-9-9a9 9 0 009-9m9 9a9 9 0 019 9" />
  </svg>
);

type SettingsTab = "general" | "payment" | "openai" | "custom-domain";

const inputClass =
  "h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";
const labelClass = "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300";

const navItems: { id: SettingsTab; label: string; icon: React.ReactNode }[] = [
  { id: "general", label: "General", icon: <GearIcon /> },
  { id: "payment", label: "Payment Configuration", icon: <CurrencyIcon /> },
  { id: "openai", label: "Open AI", icon: <SparkIcon /> },
  { id: "custom-domain", label: "Custom Domain", icon: <GlobeIcon /> },
];

export const SettingsContent = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>("general");
  const [timeFormat, setTimeFormat] = useState<"12" | "24">("12");
  const [newsletterSeconds, setNewsletterSeconds] = useState("5");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [currency, setCurrency] = useState("");

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
        <h1 className="page-title">Settings</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 min-w-0">
        {/* Left sidebar nav */}
        <div className="w-full lg:w-56 shrink-0 min-w-0">
          <nav className="card-premium overflow-hidden overflow-x-auto lg:overflow-x-visible">
            <div className="flex lg:flex-col min-w-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-shrink-0 lg:w-full items-center gap-3 px-4 py-3.5 text-left text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === item.id
                    ? "bg-brand-500 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
            </div>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {activeTab === "general" && (
            <div className="card-premium p-6 space-y-6">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">General</h2>

              <div>
                <label htmlFor="paypal" className={labelClass}>
                  Paypal Payout Email:
                </label>
                <input
                  id="paypal"
                  type="email"
                  placeholder="Paypal Payout Email"
                  value={paypalEmail}
                  onChange={(e) => setPaypalEmail(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="currency" className={labelClass}>
                  Currency: <span className="text-red-500">*</span>
                </label>
                <select
                  id="currency"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className={`${inputClass} appearance-none pr-10`}
                >
                  <option value="">Select Currency</option>
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>

              <div>
                <label htmlFor="newsletter" className={labelClass}>
                  Newsletter Modal will open in X seconds after page load:
                </label>
                <input
                  id="newsletter"
                  type="number"
                  min={0}
                  value={newsletterSeconds}
                  onChange={(e) => setNewsletterSeconds(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <span className={labelClass}>
                  Time Format : <span className="text-red-500">*</span>
                </span>
                <div className="mt-2 flex rounded-lg border border-gray-200 dark:border-gray-700 p-1 w-fit">
                  <button
                    type="button"
                    onClick={() => setTimeFormat("12")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      timeFormat === "12"
                        ? "bg-brand-500 text-white"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                  >
                    12 Hour
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeFormat("24")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      timeFormat === "24"
                        ? "bg-brand-500 text-white"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                  >
                    24 Hour
                  </button>
                </div>
              </div>

              {/* Toggles - two columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-4">
                  <div>
                    <Switch label="Enable Attachment for Inquiry" defaultChecked={false} />
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Enable Attachment for Inquiry</p>
                  </div>
                  <div>
                    <Switch label="Email Send to Customer When Product Purchased" defaultChecked={false} />
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Email Send to Customer When Product Purchased</p>
                  </div>
                  <div>
                    <Switch label="Enable PWA" defaultChecked={false} />
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Enable PWA</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Switch label="Ask Details before downloading Contact" defaultChecked={false} />
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Ask Details before downloading Contact</p>
                  </div>
                  <div>
                    <Switch label="Email Send to Admin When Product Purchased" defaultChecked={false} />
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Email Send to Admin When Product Purchased</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button type="button" className="btn-primary-premium">
                  Save
                </button>
              </div>
            </div>
          )}

          {activeTab === "payment" && (
            <div className="card-premium p-6">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Payment Configuration</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Coming soon.</p>
            </div>
          )}

          {activeTab === "openai" && (
            <div className="card-premium p-6">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Open AI</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Coming soon.</p>
            </div>
          )}

          {activeTab === "custom-domain" && (
            <div className="card-premium p-6">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Custom Domain</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Coming soon.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
