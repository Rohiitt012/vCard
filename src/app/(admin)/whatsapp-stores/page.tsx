import type { Metadata } from "next";
import React from "react";
import { WhatsAppStoresContent } from "@/components/whatsapp/WhatsAppStoresContent";

export const metadata: Metadata = {
  title: "WhatsApp Stores | Open My Profile",
  description: "Manage your WhatsApp Stores",
};

export default function WhatsAppStoresPage() {
  return (
    <div className="space-y-6">
      <WhatsAppStoresContent />
    </div>
  );
}
\"use client\";

import React, { useState } from \"react\";
import Link from \"next/link\";

const inputClass =
  \"input-premium h-11 w-full px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400\";
const labelClass = \"mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300\";

const sidebarItems: { id: string; label: string }[] = [
  { id: \"basic\", label: \"Basic Details\" },
  { id: \"templates\", label: \"WhatsApp Templates\" },
  { id: \"hours\", label: \"Business Hours\" },
  { id: \"categories\", label: \"Product Categories\" },
  { id: \"products\", label: \"Products\" },
  { id: \"orders\", label: \"Product Orders\" },
  { id: \"advanced\", label: \"Advanced\" },
  { id: \"fonts\", label: \"Fonts\" },
  { id: \"seo\", label: \"SEO\" },
  { id: \"trending\", label: \"Trending Video\" },
  { id: \"terms\", label: \"Terms & Conditions\" },
];

export default function WhatsAppStoresPage() {
  const [activeSection, setActiveSection] = useState(\"basic\");

  return (
    <div className=\"p-4 sm:p-6 md:p-8\">
      {/* Header */}
      <div className=\"mb-6 flex flex-wrap items-center justify-between gap-3\">
        <h1 className=\"page-title\">WhatsApp Stores</h1>
        <Link
          href=\"/vcards\"
          className=\"btn-primary-premium inline-flex items-center gap-2\"
        >
          Back
        </Link>
      </div>

      <div className=\"flex flex-col lg:flex-row gap-6\">
        {/* Left sidebar */}
        <nav className=\"lg:w-56 shrink-0 lg:sticky lg:top-6 lg:self-start\">
          <div className=\"surface-premium overflow-hidden\">
            {sidebarItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type=\"button\"
                  onClick={() => setActiveSection(item.id)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-colors rounded-lg ${
                    isActive
                      ? \"bg-brand-500 text-white\"
                      : \"text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800\"
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Main content */}
        <div className=\"flex-1 flex flex-col min-h-0\">
          <div className=\"surface-premium p-6 md:p-8 rounded-2xl\">
            {activeSection === \"basic\" && (
              <form className=\"space-y-6\">
                <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">
                  <div>
                    <label className={labelClass}>Store Unique Alias</label>
                    <div className=\"flex gap-2\">
                      <input
                        type=\"text\"
                        className={inputClass}
                        placeholder=\"Store Unique Alias\"
                      />
                      <button
                        type=\"button\"
                        className=\"inline-flex items-center justify-center h-11 w-11 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 hover:bg-gray-100\"
                        aria-label=\"Refresh alias\"
                      >
                        <svg
                          className=\"w-5 h-5\"
                          fill=\"none\"
                          stroke=\"currentColor\"
                          viewBox=\"0 0 24 24\"
                        >
                          <path
                            strokeLinecap=\"round\"
                            strokeLinejoin=\"round\"
                            strokeWidth={2}
                            d=\"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>
                      Store Name<span className=\"text-red-500\">*</span>
                    </label>
                    <input
                      type=\"text\"
                      className={inputClass}
                      placeholder=\"Store Name\"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>WhatsApp No</label>
                    <div className=\"flex gap-2\">
                      <div className=\"inline-flex items-center rounded-lg border border-gray-300 bg-gray-50 px-3 text-sm text-gray-700\">
                        +91
                      </div>
                      <input
                        type=\"text\"
                        className={inputClass}
                        placeholder=\"WhatsApp No\"
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Default Language</label>
                    <select className={`${inputClass} pr-8`}>
                      <option>English</option>
                      <option>Italian</option>
                      <option>French</option>
                    </select>
                  </div>
                  <div className=\"md:col-span-2\">
                    <label className={labelClass}>Address</label>
                    <textarea
                      className={`${inputClass} h-24 resize-none`}
                      placeholder=\"Address\"
                    />
                  </div>
                  <div className=\"md:col-span-2 flex flex-wrap items-center gap-4\">
                    <div className=\"flex items-center gap-2\">
                      <input id=\"hours\" type=\"checkbox\" className=\"rounded\" />
                      <label htmlFor=\"hours\" className=\"text-sm text-gray-700\">
                        Business Hours
                      </label>
                    </div>
                    <div className=\"flex items-center gap-2\">
                      <input id=\"downloadQr\" type=\"checkbox\" className=\"rounded\" />
                      <label htmlFor=\"downloadQr\" className=\"text-sm text-gray-700\">
                        Display Download QR Icon
                      </label>
                    </div>
                    <div className=\"flex items-center gap-2\">
                      <input id=\"hideBar\" type=\"checkbox\" className=\"rounded\" />
                      <label htmlFor=\"hideBar\" className=\"text-sm text-gray-700\">
                        Hide WhatsApp Store Sticky Bar
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>QR Code download size</label>
                    <div className=\"flex items-center gap-3\">
                      <input
                        type=\"range\"
                        min={100}
                        max={400}
                        defaultValue={200}
                        className=\"flex-1 accent-brand-500\"
                      />
                      <span className=\"text-sm text-gray-600\">200px</span>
                    </div>
                  </div>
                  <div className=\"grid grid-cols-1 sm:grid-cols-2 gap-6 md:col-span-2\">
                    <div>
                      <label className={labelClass}>
                        Cover Profile<span className=\"text-red-500\">*</span>
                      </label>
                      <div className=\"flex flex-col items-start gap-2\">
                        <div className=\"relative inline-flex rounded-2xl border border-gray-200 bg-gray-50 p-1 shadow-sm\">
                          <div className=\"h-24 w-24 rounded-xl overflow-hidden bg-white\" />
                          <button
                            type=\"button\"
                            className=\"absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-500 shadow hover:bg-gray-50\"
                            aria-label=\"Change cover profile\"
                          >
                            <svg
                              className=\"w-4 h-4\"
                              fill=\"none\"
                              stroke=\"currentColor\"
                              viewBox=\"0 0 24 24\"
                            >
                              <path
                                strokeLinecap=\"round\"
                                strokeLinejoin=\"round\"
                                strokeWidth={2}
                                d=\"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z\"
                              />
                            </svg>
                          </button>
                        </div>
                        <p className=\"text-xs text-gray-500\">
                          Allowed file types: png, jpg, jpeg.
                        </p>
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>
                        Logo<span className=\"text-red-500\">*</span>
                      </label>
                      <div className=\"flex flex-col items-start gap-2\">
                        <div className=\"relative inline-flex rounded-2xl border border-gray-200 bg-gray-50 p-1 shadow-sm\">
                          <div className=\"h-24 w-24 rounded-xl overflow-hidden bg-white\" />
                          <button
                            type=\"button\"
                            className=\"absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-500 shadow hover:bg-gray-50\"
                            aria-label=\"Change logo\"
                          >
                            <svg
                              className=\"w-4 h-4\"
                              fill=\"none\"
                              stroke=\"currentColor\"
                              viewBox=\"0 0 24 24\"
                            >
                              <path
                                strokeLinecap=\"round\"
                                strokeLinejoin=\"round\"
                                strokeWidth={2}
                                d=\"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z\"
                              />
                            </svg>
                          </button>
                        </div>
                        <p className=\"text-xs text-gray-500\">
                          Allowed file types: png, jpg, jpeg.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=\"md:col-span-2\">
                    <label className={labelClass}>Slider Video Banner</label>
                    <input
                      type=\"text\"
                      className={inputClass}
                      placeholder=\"Enter YouTube Video Link\"
                    />
                  </div>
                </div>

                <div className=\"flex justify-end gap-3 pt-2\">
                  <button
                    type=\"button\"
                    className=\"inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-200\"
                  >
                    Discard
                  </button>
                  <button
                    type=\"submit\"
                    className=\"inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700\"
                  >
                    Save
                  </button>
                </div>
              </form>
            )}

            {activeSection !== \"basic\" && (
              <div className=\"text-sm text-gray-500\">
                This section UI is not implemented yet in the local build.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import React from "react";
import { WhatsAppStoresContent } from "@/components/whatsapp/WhatsAppStoresContent";

export const metadata: Metadata = {
  title: "WhatsApp Stores | Open My Profile",
  description: "Manage your WhatsApp Stores",
};

export default function WhatsAppStoresPage() {
  return (
    <div className="space-y-6">
      <WhatsAppStoresContent />
    </div>
  );
}
