"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Globe,
  Smartphone,
  Search,
  MapPin,
  Palette,
  Video,
  Cloud,
} from "lucide-react";
import { cn } from "@/lib/utils";

// 8 AVERZA services
const FEATURES = [
  {
    id: "custom-software",
    label: "Custom Software Development",
    icon: Code,
    image: "/images/feature-1.jpg",
    description: "Business software designed around your actual workflows — CRM, inventory, booking and management systems.",
  },
  {
    id: "website-development",
    label: "Custom Website Development",
    icon: Globe,
    image: "/images/feature-2.jpg",
    description: "Fast, responsive and SEO-ready websites built to represent your business and generate leads.",
  },
  {
    id: "mobile-development",
    label: "Mobile & Android Apps",
    icon: Smartphone,
    image: "/images/feature-3.jpg",
    description: "Mobile applications built for your customers, your team and your business operations.",
  },
  {
    id: "seo",
    label: "SEO & Search Visibility",
    icon: Search,
    image: "/images/feature-4.png",
    description: "Help the right customers discover your business on Google through local and technical SEO.",
  },
  {
    id: "google-business",
    label: "Google Business Profile",
    icon: MapPin,
    image: "/images/feature-5.png",
    description: "Establish a stronger local presence across Google Search and Google Maps.",
  },
  {
    id: "product-design",
    label: "Product Design & UI/UX",
    icon: Palette,
    image: "/images/feature-6.png",
    description: "Design digital products that are clear, useful and easy to use — from wireframes to design systems.",
  },
  {
    id: "video-content",
    label: "Reels & Video Editing",
    icon: Video,
    image: "/images/feature-7.jpg",
    description: "Turn your products, services and brand story into engaging short-form video content.",
  },
  {
    id: "cloud-deployment",
    label: "Cloud & Deployment",
    icon: Cloud,
    image: "/images/feature-8.jpg",
    description: "Take your digital product from development to a reliable, secure production environment.",
  },
];

const AUTO_PLAY_INTERVAL = 3000;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full max-w-7xl mx-auto md:p-8">
      <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row min-h-[600px] lg:aspect-video border border-slate-800 bg-[#0F172A]">
        {/* Left Side: Navigation Chip List — BLUE bg → MAROON bg */}
        <div className="w-full lg:w-[40%] min-h-[350px] md:min-h-[450px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:pl-16 bg-[#650108]">
          <div className="absolute inset-x-0 top-0 h-12 md:h-20 lg:h-16 bg-gradient-to-b from-[#650108] via-[#650108]/80 to-transparent z-40" />
          <div className="absolute inset-x-0 bottom-0 h-12 md:h-20 lg:h-16 bg-gradient-to-t from-[#650108] via-[#650108]/80 to-transparent z-40" />
          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            {FEATURES.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(FEATURES.length / 2),
                FEATURES.length / 2,
                distance
              );

              const IconComponent = feature.icon;

              return (
                <motion.div
                  key={feature.id}
                  style={{
                    height: ITEM_HEIGHT,
                    width: "fit-content",
                  }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-4 px-6 md:px-10 lg:px-8 py-3.5 md:py-5 lg:py-4 rounded-full transition-all duration-700 text-left group border cursor-pointer",
                      isActive
                        ? "bg-white text-[#650108] border-white z-10"
                        : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center transition-colors duration-500",
                        isActive ? "text-[#650108]" : "text-white/40"
                      )}
                    >
                      <IconComponent className="w-[18px] h-[18px]" />
                    </div>

                    <span className="font-normal text-xs md:text-sm tracking-tight whitespace-nowrap uppercase">
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Image and Description Card Carousel */}
        <div className="flex-1 min-h-[500px] md:min-h-[600px] lg:h-full relative bg-slate-900/30 flex items-center justify-center py-16 md:py-24 lg:py-16 px-6 md:px-12 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-800">
          <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 rounded-[2rem] md:rounded-[2.8rem] overflow-hidden border-4 md:border-8 border-[#030712] bg-[#030712] origin-center"
                >
                  <img
                    src={feature.image}
                    alt={`${feature.label} — AVERZA digital service`}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive
                        ? "grayscale-0 blur-0"
                        : "grayscale blur-[2px] brightness-75"
                    )}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-8 pt-32 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end pointer-events-none"
                      >
                        {/* Services Badge — BLUE bg → MAROON bg */}
                        <div className="bg-[#650108] text-white px-3 py-1 rounded-full text-[10px] font-normal uppercase tracking-[0.2em] w-fit shadow-lg mb-3">
                          {index + 1} • SERVICES
                        </div>
                        <p className="text-white font-normal text-lg md:text-xl leading-snug drop-shadow-md tracking-tight">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    className={cn(
                      "absolute top-8 left-8 flex items-center gap-3 transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  >
                    {/* Brand Dot — BLUE bg → MAROON bg */}
                    <div className="w-2 h-2 rounded-full bg-[#8B1A22] shadow-[0_0_10px_#8B1A22]" />
                    <span className="text-white/80 text-[10px] font-normal uppercase tracking-[0.3em] font-mono">
                      AVERZA
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
