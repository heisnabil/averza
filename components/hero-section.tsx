"use client";

import React from "react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function HeroSection() {
  const whatsappNumber = "919958399157";
  const phoneNumber = "+919958399157";
  const whatsappMessage = encodeURIComponent(
    "Hi Infispark Technologies LLP, I am interested in custom software and AI solutions for my business."
  );

  return (
    <section className="relative w-full overflow-hidden">
      <HeroGeometric
        badge="Introducing Custom Software & AI Workflows"
        title1="Engineering Intelligent"
        title2="Software for Modern Businesses"
      >
        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mt-6 md:mt-8">
          Custom Software, AI Workflows, Mobile Apps, Enterprise Platforms,
          Cloud Infrastructure & Automation — built specifically for your
          business.
        </p>

        {/* WhatsApp & Call CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center items-center">
          {/* WhatsApp Chat with Auto Message */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-semibold bg-[#2563EB] hover:bg-blue-700 text-white transition-all duration-200 cursor-pointer shadow-lg shadow-blue-500/20 group gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>

          {/* Direct Phone Call */}
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-semibold bg-white/[0.03] border border-white/[0.1] text-white hover:bg-white/[0.08] transition-all duration-200 cursor-pointer gap-2 backdrop-blur-sm"
          >
            <Phone className="w-4 h-4 text-[#38BDF8]" />
            Call: +91 99583 99157
          </a>
        </div>
      </HeroGeometric>
    </section>
  );
}
