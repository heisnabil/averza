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
    <section className="bg-[#240003] py-24 border-t border-[#4D070B] relative overflow-hidden">
      {/* Warm background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#650108]/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8F1E3] mb-4">
            Engagement Models
          </h2>
          <p className="text-[#B9A98E] max-w-lg mx-auto text-base sm:text-lg">
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
                    ? "bg-[#650108] border-[#7A0A12] shadow-xl shadow-[#650108]/20 scale-105"
                    : "bg-[#330005] border-[#4D070B] hover:border-[#650108]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-[#F2E8D2] text-[#240003] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    Recommended
                  </span>
                )}

                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest block mb-2 ${
                    plan.popular ? "text-[#F2E8D2]/80" : "text-[#D8C7A8]"
                  }`}>
                    {plan.description}
                  </span>
                  <h3 className={`text-2xl font-bold mb-6 ${
                    plan.popular ? "text-[#F2E8D2]" : "text-[#F8F1E3]"
                  }`}>
                    {plan.name}
                  </h3>

                  <hr className={`my-6 ${plan.popular ? "border-[#F2E8D2]/20" : "border-[#4D070B]"}`} />

                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular ? "bg-[#F2E8D2]/20" : "bg-[#650108]/20"
                        }`}>
                          <Check className={`w-3.5 h-3.5 ${
                            plan.popular ? "text-[#F2E8D2]" : "text-[#D8C7A8]"
                          }`} />
                        </div>
                        <span className={`text-sm leading-snug ${
                          plan.popular ? "text-[#F2E8D2]/90" : "text-[#B9A98E]"
                        }`}>
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
                        ? "bg-[#F2E8D2] text-[#240003] hover:bg-[#F8F1E3] shadow-md shadow-black/20"
                        : "bg-[#3F0005] text-[#D8C7A8] hover:bg-[#650108] hover:text-[#F2E8D2] border border-[#4D070B] hover:border-[#650108]"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${plan.popular ? "text-[#650108]" : "text-[#D8C7A8]"}`} />
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
