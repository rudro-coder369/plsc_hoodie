import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductInfo from "@/components/ProductInfo";
import PaymentOrder from "@/components/PaymentOrder";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-white selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow">
        <Hero />
        <ProductInfo />
        <PaymentOrder />
      </div>

      {/* Minimal Footer */}
      <footer className="w-full bg-black border-t border-neutral-900 py-8 px-6 text-center text-neutral-500 text-sm">
        <p>© 2026 Plscian. All rights reserved.</p>
      </footer>
    </main>
  );
}