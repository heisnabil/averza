"use client";

import React from "react";
import Image from "next/image";

export default function LogoCloud() {
  // 19 logos from public/logos/1.png through 19.png
  const logos = Array.from({ length: 19 }, (_, i) => `/logos/${i + 1}.png`);

  return (
    <section className="bg-[#000000] py-16 overflow-hidden border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#94A3B8]">
          TRUSTED BY LEADING BRANDS & ENTERPRISES
        </p>
      </div>

      {/* Infinite Horizontal Scroll */}
      <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="animate-marquee flex whitespace-nowrap gap-16 py-4 items-center">
          {logos.map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="relative w-36 h-12 flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo}
                alt={`Partner logo ${idx + 1}`}
                fill
                sizes="144px"
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Duplicate list to make it infinite loop seamlessly */}
        <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap gap-16 py-4 items-center" aria-hidden="true">
          {logos.map((logo, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="relative w-36 h-12 flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo}
                alt={`Partner logo ${idx + 1}`}
                fill
                sizes="144px"
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles for Infinite Marquee (Next.js 15 Tailwind v4 configuration) */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
