"use client";

import React from "react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const transitionVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 12,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      type: "spring" as const,
      bounce: 0.3,
      duration: 1.5,
    },
  },
};

export default function HeroSection() {
  const whatsappNumber = "918108821353";
  const phoneNumber = "+918108821353";
  const whatsappMessage = encodeURIComponent(
    "Hi Infispark, I am interested in custom software and AI solutions for my business."
  );

  return (
    <section className="relative min-h-[90vh] bg-[#000000] w-full flex flex-col justify-center items-center overflow-hidden">
      <LampContainer className="pt-48 pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="relative z-50 flex flex-col items-center gap-8 max-w-4xl mx-auto text-center"
        >
          {/* 1. Announcement Pill (staggered entrance) */}
          <motion.div variants={transitionVariants}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-slate-900 bg-slate-950/80 group mx-auto flex w-fit items-center gap-4 rounded-full border border-slate-800 p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:shadow-zinc-950"
            >
              <span className="text-slate-300 text-xs sm:text-sm font-medium">
                Introducing Custom Software & AI Workflows
              </span>
              <span className="block h-4 w-0.5 border-l border-slate-800"></span>
              <div className="bg-[#2563EB] group-hover:bg-blue-600 size-6 flex items-center justify-center rounded-full duration-300">
                <MessageCircle className="size-3 text-white" />
              </div>
            </a>
          </motion.div>

          {/* 2. Main Headline (with blur-up animation) */}
          <motion.h1
            variants={transitionVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-md"
          >
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#38BDF8]">
              Intelligent
            </span>{" "}
            Software for Modern Businesses
          </motion.h1>

          {/* 3. Subtitle / Paragraph */}
          <motion.p
            variants={transitionVariants}
            className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed"
          >
            Custom Software, AI Workflows, Mobile Apps, Enterprise Platforms, Cloud Infrastructure & Automation — built specifically for your business.
          </motion.p>

          {/* 4. WhatsApp & Call CTAs (staggered) */}
          <motion.div
            variants={transitionVariants}
            className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto justify-center"
          >
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
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-semibold bg-slate-950 border border-slate-800 text-white hover:bg-slate-900 transition-all duration-200 cursor-pointer gap-2"
            >
              <Phone className="w-4 h-4 text-[#38BDF8]" />
              Call: +91 81088 21353
            </a>
          </motion.div>
        </motion.div>
      </LampContainer>
    </section>
  );
}
