import Image from "next/image";

export default function RegistrationPage() {
  const formLink = "https://forms.gle/H8yd7Fv4EjPHbzz79";

  return (
    <section
      id="registration"
      className="w-full pt-8 pb-24 px-5 sm:px-8 border-b border-neutral-900 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* 1. First: Clean Edge-to-Edge Poster Banner */}
        <div className="relative w-full aspect-3/1 sm:aspect-[3.2/1] rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800/80 bg-neutral-950 mb-12">
          <Image
            src="/images/poster.jpg"
            alt="Epilogue — The After Party Banner"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        {/* 2. Second: Minimal Apple-Style Registration CTA */}
        <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.22em] text-neutral-400 mb-3">
          21 December &middot; 3:00 PM &middot; Hotel La Vista
        </p>

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-3">
          Epilogue — The After Party
        </h1>

        <p className="text-sm sm:text-base text-neutral-400 font-normal max-w-md leading-relaxed mb-8">
          One final evening together. Reserve your spot now before registration
          closes.
        </p>

        <a
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-neutral-200 active:scale-[0.98] text-black font-medium text-sm tracking-tight transition-all duration-200"
        >
          <span>Registration Now</span>
          <span className="text-base leading-none" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </div>
    </section>
  );
}