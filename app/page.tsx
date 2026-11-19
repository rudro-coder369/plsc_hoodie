"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero, { HoodieVariant } from "@/components/Hero";
import ProductInfo from "@/components/ProductInfo";
import PaymentOrder from "@/components/PaymentOrder";

export default function Home() {
  const [variant, setVariant] = useState<HoodieVariant>("white");

  // White hoodie => Black theme | Black hoodie => White theme
  const isLightTheme = variant === "black";

  return (
    <main
      className={`min-h-screen flex flex-col justify-between transition-colors duration-500 ${
        isLightTheme
          ? "bg-white text-black selection:bg-black selection:text-white"
          : "bg-black text-white selection:bg-white selection:text-black"
      }`}
    >
      {/* Top Navbar */}
      <Navbar isLightTheme={isLightTheme} />

      {/* Main Content */}
      <div className="grow">
        <Hero variant={variant} onVariantChange={setVariant} />
        <ProductInfo isLightTheme={isLightTheme} />
        <PaymentOrder isLightTheme={isLightTheme} />
      </div>

      {/* Minimal Footer */}
      <footer
        className={`w-full border-t py-8 px-6 text-center text-neutral-500 text-sm transition-colors duration-500 ${
          isLightTheme
            ? "bg-white border-neutral-200"
            : "bg-black border-neutral-900"
        }`}
      >
        <p>© 2026 PLSCIAN. All rights reserved.</p>
      </footer>
    </main>
  );
}