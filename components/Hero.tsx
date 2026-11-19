"use client";

import { useState } from "react";
import Image from "next/image";

export type HoodieVariant = "white" | "black";

interface HeroProps {
  variant?: HoodieVariant;
  onVariantChange?: (variant: HoodieVariant) => void;
}

export default function Hero({
  variant: controlledVariant,
  onVariantChange,
}: HeroProps) {
  const [internalVariant, setInternalVariant] =
    useState<HoodieVariant>("white");
  const [zoomImage, setZoomImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  const variant = controlledVariant ?? internalVariant;
  // White hoodie => Black website theme | Black hoodie => White website theme
  const isLightTheme = variant === "black";

  const handleSelectVariant = (selected: HoodieVariant) => {
    setInternalVariant(selected);
    onVariantChange?.(selected);
  };

  const currentHoodieSrc =
    variant === "white"
      ? "/images/website_pic.svg"
      : "/images/website_pic_black.svg";

  const currentHoodieAlt =
    variant === "white"
      ? "PLSCIAN Signature White Hoodie"
      : "PLSCIAN Signature Black Hoodie";

  const currentBackDesignSrc =
    variant === "white"
      ? "/images/website_design.svg"
      : "/images/website_design_white .svg";

  const currentBackDesignAlt =
    variant === "white"
      ? "PLSCIAN White Hoodie Back Design"
      : "PLSCIAN Black Hoodie Back Design";

  const openZoom = (src: string, alt: string) => {
    setZoomImage({ src, alt });
    setIsZoomedIn(false);
  };

  const closeZoom = () => {
    setZoomImage(null);
    setIsZoomedIn(false);
  };

  return (
    <section
      className={`relative w-full flex flex-col items-center overflow-hidden px-3 sm:px-6 pt-6 pb-16 transition-colors duration-500 ${
        isLightTheme ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {/* Top Hero Showcase (Variant Switcher + Hoodies + Centered BG) */}
      <div className="relative w-full max-w-4xl flex flex-col items-center justify-center min-h-[calc(100svh-6rem)]">
        {/* Color Variant Switcher */}
        <div
          className={`relative z-20 mb-4 inline-flex items-center p-1 rounded-full border transition-colors duration-300 ${
            isLightTheme
              ? "bg-neutral-100 border-neutral-300"
              : "bg-neutral-950 border-neutral-800"
          }`}
        >
          <button
            type="button"
            onClick={() => handleSelectVariant("white")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              variant === "white"
                ? "bg-white text-black shadow-md"
                : "text-neutral-500 hover:text-neutral-800"
            }`}
          >
            <span className="w-3 h-3 rounded-full bg-white border border-neutral-400" />
            <span>White</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectVariant("black")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              variant === "black"
                ? "bg-black text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span className="w-3 h-3 rounded-full bg-black border border-neutral-600" />
            <span>Black</span>
          </button>
        </div>

        {/* Main Display Container */}
        <div className="relative w-full flex items-center justify-center my-auto">
          {/* Background Design (website_bg.svg) */}
          <div
            className={`absolute inset-0 z-0 flex items-center justify-center pointer-events-none translate-y-4 sm:translate-y-7 scale-105 sm:scale-110 transition-opacity duration-500 ${
              isLightTheme ? "opacity-80" : "opacity-60"
            }`}
          >
            <div className="relative w-full aspect-video">
              <Image
                src="/images/website_bg.svg"
                alt="Background Design"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>

          {/* Main Hoodie Image - Click/Tap to Zoom */}
          <div
            onClick={() => openZoom(currentHoodieSrc, currentHoodieAlt)}
            title="Click to Zoom"
            className="group relative z-10 w-full max-w-[96vw] sm:max-w-2xl md:max-w-3xl aspect-16/10 flex items-center justify-center cursor-zoom-in"
          >
            <Image
              src={currentHoodieSrc}
              alt={currentHoodieAlt}
              fill
              className={`object-contain transition-transform duration-500 group-hover:scale-[1.03] ${
                isLightTheme
                  ? "drop-shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
                  : "drop-shadow-[0_20px_50px_rgba(255,255,255,0.06)]"
              }`}
              priority
            />
            <span
              className={`absolute bottom-1 right-2 sm:bottom-2 sm:right-4 px-2.5 py-1 rounded-full border text-[10px] uppercase tracking-wider opacity-85 group-hover:opacity-100 transition-all ${
                isLightTheme
                  ? "bg-white/85 border-neutral-300 text-neutral-700"
                  : "bg-black/70 border-neutral-800 text-neutral-400"
              }`}
            >
              Tap to Zoom
            </span>
          </div>
        </div>

        {/* Quick Action Button */}
        <div className="relative z-10 mt-6 sm:mt-8">
          <a
            href="#order-section"
            className={`inline-block px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg ${
              isLightTheme
                ? "bg-black text-white hover:bg-neutral-800"
                : "bg-white text-black hover:bg-neutral-200"
            }`}
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Back Design Showcase Section - Switches between website_design.svg & website_design_white .svg */}
      <div
        className={`w-full max-w-5xl mx-auto mt-14 sm:mt-20 pt-12 border-t flex flex-col items-center transition-colors duration-500 ${
          isLightTheme ? "border-neutral-200" : "border-neutral-900"
        }`}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">
          Artwork Detail
        </span>
        <h2
          className={`text-2xl sm:text-3xl font-bold tracking-tight mb-6 sm:mb-8 ${
            isLightTheme ? "text-black" : "text-white"
          }`}
        >
          Back Design
        </h2>

        {/* Large Back Design Artwork Display */}
        <div
          onClick={() => openZoom(currentBackDesignSrc, currentBackDesignAlt)}
          title="Click to Zoom"
          className={`group relative w-full rounded-2xl sm:rounded-3xl p-3 sm:p-8 flex items-center justify-center cursor-zoom-in border transition-colors duration-500 ${
            isLightTheme
              ? "bg-neutral-100/90 border-neutral-200 hover:border-neutral-300"
              : "bg-neutral-950/80 border-neutral-800/80 hover:border-neutral-700"
          }`}
        >
          <div className="relative w-full aspect-4/3 sm:aspect-16/10">
            <Image
              src={currentBackDesignSrc}
              alt={currentBackDesignAlt}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          <span
            className={`absolute bottom-3 right-3 sm:bottom-5 sm:right-5 px-3 py-1 rounded-full border text-[10px] sm:text-xs uppercase tracking-wider transition-colors ${
              isLightTheme
                ? "bg-white/90 border-neutral-300 text-neutral-700"
                : "bg-black/80 border-neutral-800 text-neutral-300"
            }`}
          >
            Tap to Zoom
          </span>
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      {zoomImage && (
        <div
          onClick={closeZoom}
          className={`fixed inset-0 z-50 backdrop-blur-md flex flex-col items-center justify-center p-4 ${
            isLightTheme ? "bg-white/95" : "bg-black/95"
          }`}
        >
          {/* Top Controls */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl flex items-center justify-between mb-4 z-10"
          >
            <span
              className={`text-xs sm:text-sm font-medium ${
                isLightTheme ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              {zoomImage.alt}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsZoomedIn((prev) => !prev)}
                className={`px-3.5 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer transition-colors ${
                  isLightTheme
                    ? "bg-neutral-100 hover:bg-neutral-200 border-neutral-300 text-black"
                    : "bg-neutral-900 hover:bg-neutral-800 border-neutral-700 text-white"
                }`}
              >
                {isZoomedIn ? "Zoom Out (-)" : "Zoom In (+)"}
              </button>
              <button
                onClick={closeZoom}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                  isLightTheme
                    ? "bg-black text-white hover:bg-neutral-800"
                    : "bg-white text-black hover:bg-neutral-200"
                }`}
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
            className={`relative w-full max-w-5xl h-[78vh] overflow-auto flex items-center justify-center rounded-2xl border ${
              isLightTheme
                ? "border-neutral-200 bg-neutral-100/70"
                : "border-neutral-800 bg-neutral-950/60"
            }`}
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