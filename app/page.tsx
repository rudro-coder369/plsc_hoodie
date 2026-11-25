"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import RegistrationPage from "@/app/registration/page";
import RagDayPage from "@/app/rag-day/page";
import AfterPartyPage from "@/app/after-party/page";
import CostingPage from "@/app/costing/page";
import LeadershipPage from "@/app/leadership/page";
import Hero, { HoodieVariant } from "@/components/Hero";
import ProductInfo from "@/components/ProductInfo";
import PaymentOrder from "@/components/PaymentOrder";

export default function Home() {
  const [variant, setVariant] = useState<HoodieVariant>("white");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-white selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="grow">
        {/* 0. Registration */}
        <RegistrationPage />

        {/* 1. Rag Day */}
        <RagDayPage />

        {/* 2. After Party */}
        <AfterPartyPage />

        {/* 3. Costing */}
        <CostingPage />

        {/* 4. Leadership */}
        <LeadershipPage />

        {/* 5. Hoodie Showcase, Specs & Order */}
        <Hero variant={variant} onVariantChange={setVariant} />
        <ProductInfo />
        <PaymentOrder />
      </div>

      {/* Minimal Footer */}
      <footer className="w-full bg-black border-t border-neutral-900 py-8 px-6 text-center text-neutral-500 text-sm">
        <p>© 2026 PLSCIAN. All rights reserved.</p>
      </footer>
    </main>
  );
}