"use client";

import React from "react";
import { cn } from "@/lib/utils";

const technologies = [
  { name: "React", color: "text-[#F2E8D2]" },
  { name: "Next.js", color: "text-[#E7D6B8]" },
  { name: "Tailwind CSS", color: "text-[#D8C7A8]" },
  { name: "TypeScript", color: "text-[#F2E8D2]" },
  { name: "JavaScript", color: "text-[#E7D6B8]" },
  { name: "Node.js", color: "text-[#D8C7A8]" },
  { name: "GSAP", color: "text-[#F2E8D2]" },
  { name: "Framer Motion", color: "text-[#E7D6B8]" },
  { name: "PostgreSQL", color: "text-[#D8C7A8]" },
  { name: "MongoDB", color: "text-[#F2E8D2]" },
  { name: "AWS", color: "text-[#E7D6B8]" },
  { name: "GCP", color: "text-[#D8C7A8]" },
  { name: "Vercel", color: "text-[#F2E8D2]" },
  { name: "Android SDK", color: "text-[#E7D6B8]" },
  { name: "REST APIs", color: "text-[#D8C7A8]" },
  { name: "Docker", color: "text-[#F2E8D2]" },
];

export default function LogoCloud() {
  const TechRow = ({ keyPrefix }: { keyPrefix: string }) => (
    <>
      {technologies.map((tech, idx) => (
        <div key={`${keyPrefix}-${idx}`} className="flex-shrink-0 mx-3">
          <div className="px-5 py-3 rounded-xl bg-[#F2E8D2]/[0.04] border border-[#F2E8D2]/[0.08] hover:border-[#F2E8D2]/20 hover:bg-[#F2E8D2]/[0.07] transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
            <span className={cn("text-xs sm:text-sm font-bold tracking-wide uppercase whitespace-nowrap", tech.color)}>
              {tech.name}
            </span>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <section className="relative bg-[#240003] py-16 sm:py-20 overflow-hidden">
      {/* Border lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#650108]/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F2E8D2]/20 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-48 bg-[#650108]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-48 bg-[#3F0005]/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center mb-10 sm:mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2E8D2]/[0.04] border border-[#F2E8D2]/[0.10] mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F2E8D2] opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F2E8D2]"></span>
          </span>
          <span className="text-[10px] sm:text-xs text-[#B9A98E] tracking-wider font-medium uppercase">
            Our Tech Stack
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F8F1E3] mb-2">
          Technologies We{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2E8D2] via-[#E7D6B8] to-[#D8C7A8]">
            Build With
          </span>
        </h3>
        <p className="text-sm text-[#B9A98E] max-w-md mx-auto">
          Modern tools, frameworks and platforms powering the digital systems we create
        </p>
      </div>

      {/* Infinite Scroll Track */}
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
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
