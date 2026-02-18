"use client";

import React, { useState } from "react";
import Switch from "@/components/form/switch/Switch";

const navIconClass = "w-5 h-5 shrink-0";

const GearIcon = () => (
  <svg className={navIconClass} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009.19 18a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

const CurrencyIcon = () => (
  <svg className={navIconClass} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8M12 18V6" />
  </svg>
);

const SparkIcon = () => (
  <svg className={navIconClass} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
  </svg>
);

const CustomDomainIcon = () => (
  <svg className={navIconClass} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
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
  { id: "custom-domain", label: "Custom Domain", icon: <CustomDomainIcon /> },
];

type PaymentMethodId =
  | "stripe"
  | "razorpay"
  | "paystack"
  | "flutterwave"
  | "phonepe"
  | "payfast"
  | "paypal"
  | "iyzico"
  | "manually";

const iconBoxClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg shadow-sm ring-1 ring-black/5";

const paymentMethods: { id: PaymentMethodId; name: string; icon: React.ReactNode }[] = [
  {
    id: "stripe",
    name: "Stripe",
    icon: (
      <div className={`${iconBoxClass} bg-[#6772e5]`}>
        <span className="text-xl font-bold tracking-tight text-white">S</span>
      </div>
    ),
  },
  {
    id: "razorpay",
    name: "Razorpay",
    icon: (
      <div className={`${iconBoxClass} bg-[#3395ff]`}>
        <span className="text-lg font-bold tracking-tight text-white">R</span>
      </div>
    ),
  },
  {
    id: "paystack",
    name: "Paystack",
    icon: (
      <div className={`${iconBoxClass} bg-[#00c3f7]`}>
        <span className="text-xl font-bold tracking-tight text-white">P</span>
      </div>
    ),
  },
  {
    id: "flutterwave",
    name: "Flutterwave",
    icon: (
      <div className={`${iconBoxClass} bg-[#f5a623]`}>
        <span className="text-xl font-bold tracking-tight text-white">F</span>
      </div>
    ),
  },
  {
    id: "phonepe",
    name: "PhonePe",
    icon: (
      <div className={`${iconBoxClass} bg-[#5f259f]`}>
        <span className="text-sm font-bold tracking-tight text-white">Pe</span>
      </div>
    ),
  },
  {
    id: "payfast",
    name: "PayFast",
    icon: (
      <div className={`${iconBoxClass} bg-[#00a0d2]`}>
        <span className="text-[10px] font-bold uppercase tracking-wider text-white">payfast</span>
      </div>
    ),
  },
  {
    id: "paypal",
    name: "Paypal",
    icon: (
      <div className={`${iconBoxClass} bg-[#003087]`}>
        <span className="text-xl font-bold tracking-tight text-white">P</span>
      </div>
    ),
  },
  {
    id: "iyzico",
    name: "Iyzico",
    icon: (
      <div className={`${iconBoxClass} bg-[#0066b3]`}>
        <div className="flex items-center gap-0.5">
          <span className="text-[11px] font-extrabold italic text-white">i</span>
          <span className="text-[10px] font-semibold text-white">yzico</span>
        </div>
      </div>
    ),
  },
  {
    id: "manually",
    name: "Manually",
    icon: (
      <div className={`${iconBoxClass} border-2 border-brand-400 bg-brand-50 dark:border-brand-500 dark:bg-brand-500/15`}>
        <svg className="h-6 w-6 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" strokeWidth={1.5} />
          <circle cx="12" cy="12" r="5" strokeWidth={1.5} />
          <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
        </svg>
      </div>
    ),
  },
];

export const SettingsContent = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>("general");
  const [timeFormat, setTimeFormat] = useState<"12" | "24">("12");
  const [newsletterSeconds, setNewsletterSeconds] = useState("5");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [currency, setCurrency] = useState("");
  const [paymentToggles, setPaymentToggles] = useState<Record<PaymentMethodId, boolean>>({
    stripe: false,
    razorpay: false,
    paystack: false,
    flutterwave: false,
    phonepe: false,
    payfast: false,
    paypal: false,
    iyzico: false,
    manually: false,
  });

  const handlePaymentToggle = (id: PaymentMethodId, checked: boolean) => {
    setPaymentToggles((prev) => ({ ...prev, [id]: checked }));
  };

  const handlePaymentSave = () => {
    // TODO: persist payment method settings
  };

  const [openAiEnabled, setOpenAiEnabled] = useState(false);
  const handleOpenAiSave = () => {
    // TODO: persist Open AI setting
  };

  const [customDomain, setCustomDomain] = useState("");
  const handleApplyCustomDomain = () => {
    // TODO: submit custom domain for approval
  };

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
            <div className="card-premium p-6 space-y-6">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Payment Method</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 shadow-sm"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      {method.icon}
                      <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {method.name}
                      </span>
                    </div>
                    <div className="shrink-0" onClick={(e) => e.stopPropagation()}>
                      <Switch
                        label=""
                        defaultChecked={paymentToggles[method.id]}
                        onChange={(checked) => handlePaymentToggle(method.id, checked)}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <button type="button" onClick={handlePaymentSave} className="btn-primary-premium">
                  Save
                </button>
              </div>
            </div>
          )}

          {activeTab === "openai" && (
            <div className="card-premium p-6 space-y-6">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Open AI</h2>
              <hr className="border-gray-200 dark:border-gray-700" />
              <div>
                <Switch
                  label="Open AI"
                  defaultChecked={openAiEnabled}
                  onChange={(checked) => setOpenAiEnabled(checked)}
                />
              </div>
              <div className="pt-2">
                <button type="button" onClick={handleOpenAiSave} className="btn-primary-premium">
                  Save
                </button>
              </div>
            </div>
          )}

          {activeTab === "custom-domain" && (
            <div className="card-premium p-6 space-y-6">
              <div>
                <label htmlFor="custom-domain" className={labelClass}>
                  Custom Domain: <span className="text-red-500">*</span>
                </label>
                <div className="mt-1.5 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                  <input
                    id="custom-domain"
                    type="text"
                    placeholder="your-domain.com"
                    value={customDomain}
                    onChange={(e) => setCustomDomain(e.target.value)}
                    className={inputClass}
                  />
                  <button
                    type="button"
                    onClick={handleApplyCustomDomain}
                    className="btn-primary-premium shrink-0"
                  >
                    Apply for Custom Domain
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Note: your domain is &apos;https://www.example.com&apos; then please add only &apos;example.com&apos; in above input field.
                </p>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">How it Works?</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex gap-2">
                    <span className="text-gray-400 dark:text-gray-500">•</span>
                    <span>Once your custom domain is approved, you can use your own URL for your vCards.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-400 dark:text-gray-500">•</span>
                    <span>
                      URL before custom domain:{" "}
                      <a
                        href="https://appurl.com/{alias}"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-500 hover:underline"
                      >
                        https://appurl.com/&#123;alias&#125;
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-400 dark:text-gray-500">•</span>
                    <span>
                      URL after custom domain:{" "}
                      <a
                        href="https://custom-domain/{alias}"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-500 hover:underline"
                      >
                        https://custom-domain/&#123;alias&#125;
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
