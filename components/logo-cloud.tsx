"use client";

import React from "react";
import Image from "next/image";

export default function LogoCloud() {
  // 19 logos from public/logos/1.png through 19.png
  const logos = Array.from({ length: 19 }, (_, i) => `/logos/${i + 1}.png`);

  return (
    <section className="relative bg-[#000000] py-20 overflow-hidden">
      {/* Top/bottom subtle borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent" />

      {/* Ambient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-48 bg-[#2563EB]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-48 bg-[#38BDF8]/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-[#6366F1]/[0.07] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
          </span>
          <span className="text-[10px] sm:text-xs text-white/60 tracking-wider font-medium uppercase">
            Trusted Partners
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
          Trusted by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-[#6366F1]">
            Leading Brands
          </span>{" "}
          & Enterprises
        </h3>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          Partnering with industry leaders to deliver cutting-edge solutions
        </p>
      </div>

      {/* Infinite Horizontal Scroll */}
      <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
        <div className="animate-marquee flex whitespace-nowrap gap-8 py-4 items-center">
          {logos.map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="relative flex-shrink-0 group"
            >
              <div className="relative w-40 h-16 rounded-2xl bg-white/[0.06] border border-white/[0.08] group-hover:border-[#38BDF8]/30 group-hover:bg-white/[0.1] transition-all duration-400 flex items-center justify-center px-5 py-3 backdrop-blur-sm shadow-lg shadow-black/20 group-hover:shadow-[#2563EB]/10">
                <Image
                  src={logo}
                  alt={`Partner logo ${idx + 1}`}
                  fill
                  sizes="160px"
                  className="object-contain p-3 transition-all duration-400"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate list to make it infinite loop seamlessly */}
        <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap gap-8 py-4 items-center" aria-hidden="true">
          {logos.map((logo, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="relative flex-shrink-0 group"
            >
              <div className="relative w-40 h-16 rounded-2xl bg-white/[0.06] border border-white/[0.08] group-hover:border-[#38BDF8]/30 group-hover:bg-white/[0.1] transition-all duration-400 flex items-center justify-center px-5 py-3 backdrop-blur-sm shadow-lg shadow-black/20 group-hover:shadow-[#2563EB]/10">
                <Image
                  src={logo}
                  alt={`Partner logo ${idx + 1}`}
                  fill
                  sizes="160px"
                  className="object-contain p-3 transition-all duration-400"
                  loading="lazy"
                />
              </div>
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
          animation: marquee 50s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 50s linear infinite;
        }
      `}</style>
    </section>
  );
}
