"use client";

import React from "react";
import { Check, MessageCircle, ArrowRight, Layers } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For Local Businesses",
    features: [
      "Business Website",
      "Google Business Profile Setup",
      "Basic SEO Setup",
      "Mobile Responsive Design",
      "1 Revision Cycle",
    ],
    cta: "Get Started",
    type: "whatsapp",
    message: "Hi AVERZA, I'm interested in the Starter plan for my business — website and Google Business setup.",
    icon: MessageCircle,
    popular: false,
  },
  {
    name: "Growth",
    description: "For Growing SMEs",
    features: [
      "Custom Software or Mobile App",
      "Advanced Website Development",
      "Local SEO Strategy",
      "UI/UX Design",
      "Cloud Deployment",
      "Ongoing Support",
    ],
    cta: "Talk to AVERZA",
    type: "whatsapp",
    message: "Hi AVERZA, I'm interested in the Growth plan — custom software, website and SEO services.",
    icon: ArrowRight,
    popular: true,
  },
  {
    name: "Scale",
    description: "Full Digital Transformation",
    features: [
      "All Services Included",
      "Custom Software & Mobile Apps",
      "Full SEO & Google Business",
      "Product Design & UI/UX",
      "Video Content & Reels",
      "Cloud Infrastructure",
      "Dedicated Project Lead",
    ],
    cta: "Start Your Transformation",
    type: "whatsapp",
    message: "Hi AVERZA, I'd like to discuss the Scale plan for a complete digital transformation of my business.",
    icon: Layers,
    popular: false,
  },
];

export default function PricingSection() {
  const whatsappNumber = "918591484058";

  return (
    <section className="bg-[#000000] py-24 border-t border-slate-900 relative overflow-hidden">
      {/* Light glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#650108]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Engagement Models
          </h2>
          <p className="text-[#94A3B8] max-w-lg mx-auto text-base sm:text-lg">
            Flexible plans tailored to where your business is today and where you want it to go.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const buttonLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(plan.message || "")}`;

            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#0F172A] border-[#650108] shadow-xl shadow-[#650108]/5 scale-105"
                    : "bg-slate-950 border-slate-900 hover:border-slate-800"
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-[#650108] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    Recommended
                  </span>
                )}

                <div>
                  <span className="text-[#8B1A22] text-xs font-bold uppercase tracking-widest block mb-2">
                    {plan.description}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {plan.name}
                  </h3>
                  
                  <hr className="border-slate-900 my-6" />

                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#650108]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#8B1A22]" />
                        </div>
                        <span className="text-[#94A3B8] text-sm leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href={buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-[#650108] text-white hover:bg-[#520006] shadow-md shadow-[#650108]/20"
                        : "bg-slate-900 text-white hover:bg-slate-850 border border-slate-800"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#8B1A22]" />
                    {plan.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
