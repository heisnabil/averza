"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Code, Globe, Smartphone, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

const showcaseItems = [
  {
    tempId: 0,
    testimonial: "A restaurant management system with real-time order tracking, table booking and automated inventory alerts — replacing spreadsheets and WhatsApp coordination.",
    by: "Restaurant & Café Solutions",
    icon: Code,
    accent: "from-[#650108] to-[#7A0A12]",
  },
  {
    tempId: 1,
    testimonial: "A responsive business website with integrated appointment booking, local SEO optimization and Google Business Profile setup — helping a clinic get discovered online.",
    by: "Local Business Websites",
    icon: Globe,
    accent: "from-[#3F0005] to-[#650108]",
  },
  {
    tempId: 2,
    testimonial: "A custom Android application for customer ordering, loyalty point tracking and push notification campaigns — built for a pharmacy chain across Thane.",
    by: "Mobile App Development",
    icon: Smartphone,
    accent: "from-[#7A0A12] to-[#9B1820]",
  },
  {
    tempId: 3,
    testimonial: "A complete digital transformation — moving a retail business from WhatsApp-based orders and paper registers to a fully automated inventory and billing system.",
    by: "Business Automation",
    icon: BarChart3,
    accent: "from-[#650108] to-[#3F0005]",
  },
];

interface ShowcaseCardProps {
  position: number;
  testimonial: (typeof showcaseItems)[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;
  const IconComponent = testimonial.icon;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 sm:p-8 transition-all duration-500 ease-in-out select-none",
        isCenter
          ? "z-10 bg-[#650108] text-[#F2E8D2] border-[#650108]"
          : "z-0 bg-[#330005] text-[#F8F1E3] border-[#4D070B] hover:border-[#650108]"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 8px 0px 4px #0D0001"
          : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-[#4D070B]"
        style={{ right: -2, top: 48, width: SQRT_5000, height: 2 }}
      />

      {/* Icon badge */}
      <div
        className={cn(
          "mb-5 w-12 h-12 rounded-xl flex items-center justify-center",
          isCenter
            ? "bg-[#F2E8D2]/20 text-[#F2E8D2]"
            : "bg-gradient-to-br " + testimonial.accent + " text-[#F2E8D2]"
        )}
        style={{ boxShadow: "3px 3px 0px #0D0001" }}
      >
        <IconComponent className="w-6 h-6" />
      </div>

      <h3
        className={cn(
          "text-sm sm:text-base md:text-lg font-medium leading-snug",
          isCenter ? "text-[#F2E8D2]" : "text-[#F8F1E3]"
        )}
      >
        {testimonial.testimonial}
      </h3>
      <p
        className={cn(
          "absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 mt-2 text-[10px] sm:text-xs uppercase tracking-wider font-semibold",
          isCenter ? "text-[#F2E8D2]/80" : "text-[#B9A98E]"
        )}
      >
        {testimonial.by}
      </p>
    </div>
  );
};

export default function StaggerTestimonials() {
  const [cardSize, setCardSize] = useState(365);
  const [showcaseList, setShowcaseList] = useState(showcaseItems);

  const handleMove = (steps: number) => {
    const newList = [...showcaseList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setShowcaseList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 400) setCardSize(260);
      else if (width < 640) setCardSize(290);
      else if (width < 768) setCardSize(330);
      else setCardSize(365);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="bg-[#240003] py-16 sm:py-24 border-t border-[#4D070B] relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-[#F8F1E3] mb-4">
          What We Can Build
        </h2>
        <p className="text-[#B9A98E] max-w-lg mx-auto text-sm sm:text-base md:text-lg">
          Real solutions for real businesses — here's what AVERZA can create for your operations.
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden bg-[#3F0005]/20"
        style={{ height: "min(600px, 75vh)" }}
      >
        {showcaseList.map((item, index) => {
          const position =
            showcaseList.length % 2
              ? index - (showcaseList.length + 1) / 2
              : index - showcaseList.length / 2;
          return (
            <ShowcaseCard
              key={item.tempId}
              testimonial={item}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 flex -translate-x-1/2 gap-3 z-20">
          <button
            onClick={() => handleMove(-1)}
            className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#330005] border border-[#4D070B] text-[#D8C7A8] hover:bg-[#650108] hover:border-[#650108] hover:text-[#F2E8D2] transition-all duration-200 cursor-pointer shadow-lg"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#330005] border border-[#4D070B] text-[#D8C7A8] hover:bg-[#650108] hover:border-[#650108] hover:text-[#F2E8D2] transition-all duration-200 cursor-pointer shadow-lg"
            aria-label="Next item"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
