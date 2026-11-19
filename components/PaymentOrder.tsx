"use client";

import { useState } from "react";
import Image from "next/image";

interface PaymentOrderProps {
  isLightTheme?: boolean;
}

export default function PaymentOrder({
  isLightTheme = false,
}: PaymentOrderProps) {
  const [copied, setCopied] = useState(false);
  const number = "01710647502";

  // Direct WhatsApp chat link without any default message
  const whatsappLink = `https://wa.me/88${number}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="order-section"
      className={`w-full py-20 px-6 border-t transition-colors duration-500 ${
        isLightTheme
          ? "bg-white text-black border-neutral-200"
          : "bg-black text-white border-neutral-900"
      }`}
    >
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            Place Your Order
          </h2>
          <p className="text-neutral-500 text-sm mb-5">
            Confirm via WhatsApp first, then complete your payment.
          </p>

          {/* Price Highlight */}
          <div className="mb-5">
            <div
              className={`inline-flex items-baseline gap-1.5 px-6 py-2.5 rounded-2xl border transition-colors duration-500 ${
                isLightTheme
                  ? "bg-neutral-100 border-neutral-200"
                  : "bg-neutral-950 border-neutral-800"
              }`}
            >
              <span
                className={`text-xs uppercase tracking-widest mr-1 ${
                  isLightTheme ? "text-neutral-500" : "text-neutral-400"
                }`}
              >
                Price:
              </span>
              <span
                className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                  isLightTheme ? "text-black" : "text-white"
                }`}
              >
                ৳599/-
              </span>
            </div>
          </div>

          {/* Payment & Delivery Deadlines */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs transition-colors duration-500 ${
                isLightTheme
                  ? "bg-neutral-100 border-neutral-200 text-neutral-700"
                  : "bg-neutral-950 border-neutral-800 text-neutral-300"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>
                Payment Deadline:{" "}
                <strong
                  className={`font-semibold ${
                    isLightTheme ? "text-black" : "text-white"
                  }`}
                >
                  30 Nov 2026
                </strong>
              </span>
            </div>

            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs transition-colors duration-500 ${
                isLightTheme
                  ? "bg-neutral-100 border-neutral-200 text-neutral-700"
                  : "bg-neutral-950 border-neutral-800 text-neutral-300"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>
                Delivery By:{" "}
                <strong
                  className={`font-semibold ${
                    isLightTheme ? "text-black" : "text-white"
                  }`}
                >
                  10 Dec 2026
                </strong>
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Step 1: Confirm Order on WhatsApp */}
          <div
            className={`border rounded-2xl p-6 transition-colors duration-500 ${
              isLightTheme
                ? "bg-neutral-50 border-neutral-200"
                : "bg-neutral-950 border-neutral-800/80"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className={`text-xs font-semibold uppercase tracking-widest ${
                  isLightTheme ? "text-neutral-500" : "text-neutral-400"
                }`}
              >
                Step 01 — Order Confirmation
              </span>
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-base py-3.5 px-6 rounded-xl transition-all duration-200"
            >
              <div className="relative w-6 h-6">
                <Image
                  src="/images/whatsapp.svg"
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                />
              </div>
              <span>Confirm on WhatsApp</span>
            </a>
          </div>

          {/* Step 2: Payment Method (bKash / Nagad) */}
          <div
            className={`border rounded-2xl p-6 transition-colors duration-500 ${
              isLightTheme
                ? "bg-neutral-50 border-neutral-200"
                : "bg-neutral-950 border-neutral-800/80"
            }`}
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <span
                  className={`block text-xs font-semibold uppercase tracking-widest ${
                    isLightTheme ? "text-neutral-500" : "text-neutral-400"
                  }`}
                >
                  Step 02 — Send Payment
                </span>
                <span className="text-xs text-neutral-500">
                  Amount to send:{" "}
                  <strong
                    className={`font-semibold ${
                      isLightTheme ? "text-black" : "text-white"
                    }`}
                  >
                    599/-
                  </strong>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative w-14 h-10 sm:w-16 sm:h-11">
                  <Image
                    src="/images/bkash.svg"
                    alt="bKash"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-14 h-10 sm:w-16 sm:h-11">
                  <Image
                    src="/images/nagad.svg"
                    alt="Nagad"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Clean Copyable Number Row */}
            <div
              className={`flex items-center justify-between border rounded-xl px-4 py-3 mb-3 transition-colors duration-500 ${
                isLightTheme
                  ? "bg-white border-neutral-300"
                  : "bg-black border-neutral-800"
              }`}
            >
              <div>
                <p className="text-[11px] uppercase tracking-wider text-neutral-500">
                  bKash / Nagad Personal
                </p>
                <p
                  className={`text-lg font-mono font-semibold tracking-wider ${
                    isLightTheme ? "text-black" : "text-white"
                  }`}
                >
                  {number}
                </p>
              </div>

              <button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  isLightTheme
                    ? "bg-neutral-100 hover:bg-neutral-200 border-neutral-300 text-black"
                    : "bg-neutral-900 hover:bg-neutral-800 border-neutral-700 text-white"
                }`}
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            {/* Footer Note inside Payment Card */}
            <p className="text-[11px] text-neutral-500 text-center">
              * Payment closes on 30 Nov 2026 • Delivery by 10 Dec 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}