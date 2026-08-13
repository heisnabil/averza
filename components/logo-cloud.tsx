"use client";

import React from "react";
import { cn } from "@/lib/utils";

const technologies = [
  { name: "React", color: "text-[#61DAFB]" },
  { name: "Next.js", color: "text-white" },
  { name: "Tailwind CSS", color: "text-[#38BDF8]" },
  { name: "TypeScript", color: "text-[#3178C6]" },
  { name: "JavaScript", color: "text-[#F7DF1E]" },
  { name: "Node.js", color: "text-[#339933]" },
  { name: "GSAP", color: "text-[#88CE02]" },
  { name: "Framer Motion", color: "text-[#FF0055]" },
  { name: "PostgreSQL", color: "text-[#4169E1]" },
  { name: "MongoDB", color: "text-[#47A248]" },
  { name: "AWS", color: "text-[#FF9900]" },
  { name: "GCP", color: "text-[#4285F4]" },
  { name: "Vercel", color: "text-white" },
  { name: "Android SDK", color: "text-[#3DDC84]" },
  { name: "REST APIs", color: "text-[#00F0FF]" },
  { name: "Docker", color: "text-[#2496ED]" },
];

export default function LogoCloud() {
  // Render a single row of tech badges
  const TechRow = ({ keyPrefix }: { keyPrefix: string }) => (
    <>
      {technologies.map((tech, idx) => (
        <div
          key={`${keyPrefix}-${idx}`}
          className="flex-shrink-0 mx-3"
        >
          <div className="px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#8B1A22]/30 hover:bg-white/[0.08] transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
            <span className={cn("text-xs sm:text-sm font-bold tracking-wide uppercase whitespace-nowrap", tech.color)}>
              {tech.name}
            </span>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <section className="relative bg-[#000000] py-16 sm:py-20 overflow-hidden">
      {/* Top/bottom subtle borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#650108]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#8B1A22]/40 to-transparent" />

      {/* Ambient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-48 bg-[#650108]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-48 bg-[#8B1A22]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center mb-10 sm:mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B1A22] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B1A22]"></span>
          </span>
          <span className="text-[10px] sm:text-xs text-white/60 tracking-wider font-medium uppercase">
            Our Tech Stack
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
          Technologies We{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#650108] via-[#8B1A22] to-[#520006]">
            Build With
          </span>
        </h3>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          Modern tools, frameworks and platforms powering the digital systems we create
        </p>
      </div>

      {/* Infinite Horizontal Scroll */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
        <div className="marquee-track flex">
          <div className="marquee-content flex py-3">
            <TechRow keyPrefix="a" />
          </div>
          <div className="marquee-content flex py-3" aria-hidden="true">
            <TechRow keyPrefix="b" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .marquee-track {
          width: max-content;
          animation: marquee-scroll 40s linear infinite;
        }
        .marquee-content {
          flex-shrink: 0;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
