"use client";

import { useState } from "react";
import Image from "next/image";

export default function PaymentOrder() {
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
      className="w-full bg-black text-white py-20 px-6 border-t border-neutral-900"
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

          {/* Payment & Delivery Deadlines */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>
                Payment Deadline:{" "}
                <strong className="text-white font-semibold">
                  30 Nov 2026
                </strong>
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>
                Delivery By:{" "}
                <strong className="text-white font-semibold">
                  10 Dec 2026
                </strong>
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Step 1: Confirm Order on WhatsApp */}
          <div className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
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
          <div className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Step 02 — Send Payment
              </span>
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
            <div className="flex items-center justify-between bg-black border border-neutral-800 rounded-xl px-4 py-3 mb-3">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-neutral-500">
                  bKash / Nagad Personal
                </p>
                <p className="text-lg font-mono font-semibold tracking-wider text-white">
                  {number}
                </p>
              </div>

              <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-lg text-xs font-medium bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white transition-colors cursor-pointer"
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