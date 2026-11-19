"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [zoomImage, setZoomImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  const openZoom = (src: string, alt: string) => {
    setZoomImage({ src, alt });
    setIsZoomedIn(false);
  };

  const closeZoom = () => {
    setZoomImage(null);
    setIsZoomedIn(false);
  };

  return (
    <section className="relative w-full bg-black flex flex-col items-center overflow-hidden px-3 sm:px-6 pt-8 pb-16">
      {/* Top Hero Showcase (Hoodies + Centered BG) */}
      <div className="relative w-full max-w-4xl flex flex-col items-center justify-center min-h-[calc(100svh-6rem)]">
        {/* Main Display Container */}
        <div className="relative w-full flex items-center justify-center my-auto">
          {/* Background Design (website_bg.svg) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60 translate-y-4 sm:translate-y-7 scale-105 sm:scale-110">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/website_bg.svg"
                alt="Background Design"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>

          {/* Main Hoodie Image (website_pic.svg) - Click/Tap to Zoom */}
          <div
            onClick={() =>
              openZoom("/images/website_pic.svg", "PLSCIAN Signature Hoodie")
            }
            title="Click to Zoom"
            className="group relative z-10 w-full max-w-[96vw] sm:max-w-2xl md:max-w-3xl aspect-[16/10] flex items-center justify-center cursor-zoom-in"
          >
            <Image
              src="/images/website_pic.svg"
              alt="PLSCIAN Signature Hoodie"
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.06)] transition-transform duration-500 group-hover:scale-[1.03]"
              priority
            />
            <span className="absolute bottom-1 right-2 sm:bottom-2 sm:right-4 px-2.5 py-1 rounded-full bg-black/70 border border-neutral-800 text-[10px] uppercase tracking-wider text-neutral-400 opacity-80 group-hover:opacity-100 transition-opacity">
              Tap to Zoom
            </span>
          </div>
        </div>

        {/* Quick Action Button */}
        <div className="relative z-10 mt-6 sm:mt-8">
          <a
            href="#order-section"
            className="inline-block px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 shadow-lg"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Back Design Showcase Section (website_design.svg) - Larger & Mobile-Safe */}
      <div className="w-full max-w-5xl mx-auto mt-14 sm:mt-20 pt-12 border-t border-neutral-900 flex flex-col items-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">
          Artwork Detail
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6 sm:mb-8">
          Back Design
        </h2>

        {/* Large Back Design Artwork Display (Minimal padding on mobile so it never crops) */}
        <div
          onClick={() =>
            openZoom("/images/website_design.svg", "PLSCIAN Hoodie Back Design")
          }
          title="Click to Zoom"
          className="group relative w-full bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 rounded-2xl sm:rounded-3xl p-3 sm:p-8 flex items-center justify-center cursor-zoom-in transition-colors"
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
            <Image
              src="/images/website_design.svg"
              alt="PLSCIAN Hoodie Back Design"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          <span className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 px-3 py-1 rounded-full bg-black/80 border border-neutral-800 text-[10px] sm:text-xs uppercase tracking-wider text-neutral-300">
            Tap to Zoom
          </span>
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      {zoomImage && (
        <div
          onClick={closeZoom}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
        >
          {/* Top Controls */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl flex items-center justify-between mb-4 z-10"
          >
            <span className="text-xs sm:text-sm font-medium text-neutral-400">
              {zoomImage.alt}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsZoomedIn((prev) => !prev)}
                className="px-3.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-semibold text-white cursor-pointer"
              >
                {isZoomedIn ? "Zoom Out (-)" : "Zoom In (+)"}
              </button>
              <button
                onClick={closeZoom}
                className="px-3.5 py-1.5 rounded-lg bg-white text-black hover:bg-neutral-200 text-xs font-bold cursor-pointer"
              >
                Close ✕
              </button>
            </div>
          </div>

          {/* Scrollable/Pannable Zoom Container */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomedIn((prev) => !prev);
            }}
            className="relative w-full max-w-5xl h-[78vh] overflow-auto flex items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-950/60"
          >
            <div
              className={`relative transition-all duration-300 ${
                isZoomedIn
                  ? "w-[170%] h-[170%] sm:w-[150%] sm:h-[150%] cursor-zoom-out"
                  : "w-full h-full cursor-zoom-in"
              }`}
            >
              <Image
                src={zoomImage.src}
                alt={zoomImage.alt}
                fill
                className="object-contain p-2 sm:p-6"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}