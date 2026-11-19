import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800", "900"],
});

interface NavbarProps {
  isLightTheme?: boolean;
}

export default function Navbar({ isLightTheme = false }: NavbarProps) {
  return (
    <nav
      className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-500 ${
        isLightTheme
          ? "bg-white/90 border-neutral-200"
          : "bg-black/90 border-neutral-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-center sm:justify-start">
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* Logo */}
          <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/plsc_logo.svg"
              alt="PLSCIAN Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Brand Name: Clean, Bold & Tight Spacing */}
          <span
            className={`${montserrat.className} text-2xl sm:text-[28px] font-black uppercase tracking-tight transition-colors duration-500 ${
              isLightTheme ? "text-black" : "text-white"
            }`}
          >
            PLSCIAN
          </span>
        </Link>
      </div>
    </nav>
  );
}