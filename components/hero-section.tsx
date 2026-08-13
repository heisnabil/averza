"use client";

import React from "react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { ArrowRight, Layers } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <HeroGeometric
        badge="Build. Transform. Grow."
        title1="Turn Your Business Into"
        title2="a Digital Business"
      >
        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mt-6 md:mt-8">
          We build websites, software, mobile apps and digital systems that help
          growing businesses work smarter, get discovered online and scale.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center items-center">
          {/* Primary CTA — Scroll to Contact */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-semibold bg-[#650108] hover:bg-[#520006] text-white transition-all duration-200 cursor-pointer shadow-lg shadow-[#650108]/20 group gap-2"
          >
            <ArrowRight className="w-4 h-4" />
            Start Your Digital Transformation
          </a>

          {/* Secondary CTA — Scroll to Services */}
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-semibold bg-white/[0.03] border border-white/[0.1] text-white hover:bg-white/[0.08] transition-all duration-200 cursor-pointer gap-2 backdrop-blur-sm"
          >
            <Layers className="w-4 h-4 text-[#8B1A22]" />
            Explore Our Services
          </a>
        </div>
      </HeroGeometric>
    </section>
  );
}
