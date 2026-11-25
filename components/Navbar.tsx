import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  isLightTheme?: boolean;
}

export default function Navbar({ isLightTheme = false }: NavbarProps) {
  return (
    <nav
      className={`sticky top-0 z-50 w-full backdrop-blur-xl border-b transition-colors duration-300 ${
        isLightTheme
          ? "bg-white/80 border-neutral-200/80 text-black"
          : "bg-black/80 border-white/10 text-white"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        {/* Left Side: Minimal Logo */}
        <Link
          href="/"
          className="flex items-center opacity-90 hover:opacity-100 transition-opacity duration-200"
        >
          <div className="relative w-7 h-7">
            <Image
              src="/images/plsc_logo.svg"
              alt="PLSCIAN Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Right Side: Apple-Style Pill Action */}
        <a
          href="https://srotoshourjo27.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-200 active:scale-[0.98] ${
            isLightTheme
              ? "bg-black text-white hover:bg-neutral-800"
              : "bg-white text-black hover:bg-neutral-200"
          }`}
        >
          <span>Create your profile for website</span>
          <span className="text-xs leading-none" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </div>
    </nav>
  );
}