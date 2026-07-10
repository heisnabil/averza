"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Infispark delivered a platform that streamlined our operations and reduced manual work.",
    by: "Arjun, CTO of TechCorp",
    imgSrc: "/images/avatar-1.jpg",
  },
  {
    tempId: 1,
    testimonial: "The AI automation saved our team hours every week.",
    by: "Priya, Operations Director",
    imgSrc: "/images/avatar-2.jpg",
  },
  {
    tempId: 2,
    testimonial: "Professional team with excellent technical expertise.",
    by: "Rahul, Product Manager",
    imgSrc: "/images/avatar-3.jpg",
  },
  {
    tempId: 3,
    testimonial: "Reliable delivery, transparent communication, and outstanding support.",
    by: "Sneha, VP of Engineering",
    imgSrc: "/images/avatar-4.jpg",
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: (typeof testimonials)[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out select-none",
        isCenter
          ? "z-10 bg-[#2563EB] text-white border-[#2563EB]"
          : "z-0 bg-[#0F172A] text-[#FFFFFF] border-slate-800 hover:border-[#38BDF8]/50"
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
          ? "0px 8px 0px 4px #000000"
          : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-slate-800"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-slate-800 object-cover object-top rounded-md"
        style={{
          boxShadow: "3px 3px 0px #000000",
        }}
      />
      <h3
        className={cn(
          "text-base sm:text-lg font-medium leading-snug",
          isCenter ? "text-white" : "text-white"
        )}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-xs uppercase tracking-wider",
          isCenter ? "text-white/80" : "text-[#94A3B8]"
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  );
};

export default function StaggerTestimonials() {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
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
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="bg-[#000000] py-24 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          What Our Clients Say
        </h2>
        <p className="text-[#94A3B8] max-w-lg mx-auto text-base sm:text-lg">
          Read testimonials from our partners who achieved operational excellence with our custom software.
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden bg-slate-950/20"
        style={{ height: 600 }}
      >
        {testimonialsList.map((testimonial, index) => {
          const position =
            testimonialsList.length % 2
              ? index - (testimonialsList.length + 1) / 2
              : index - testimonialsList.length / 2;
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-3 z-20">
          <button
            onClick={() => handleMove(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-200 cursor-pointer shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-200 cursor-pointer shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
