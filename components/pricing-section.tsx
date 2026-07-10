"use client";

import React from "react";
import { Check, MessageCircle, Phone, Calendar } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For Startups",
    features: [
      "MVP Development",
      "Web Application",
      "Basic Support",
      "Standard Security",
      "1 Revision cycle",
    ],
    cta: "Get Starter Quote",
    type: "whatsapp",
    message: "Hi Infispark, I am interested in the Starter plan for MVP / Web Application development.",
    icon: MessageCircle,
    popular: false,
  },
  {
    name: "Growth",
    description: "For SMEs",
    features: [
      "Custom Software",
      "AI Integration",
      "Mobile App",
      "API Integration",
      "24/7 Priority Support",
      "Scalable Architecture",
    ],
    cta: "Call Our Sales",
    type: "call",
    icon: Phone,
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Large Organizations",
    features: [
      "Dedicated Team",
      "Enterprise Architecture",
      "SLA Support",
      "Cloud Infrastructure",
      "AI Automation",
      "Custom Integrations",
      "Dedicated Project Manager",
    ],
    cta: "Consult Our Team",
    type: "whatsapp",
    message: "Hi Infispark, I would like to schedule an enterprise custom software & AI automation consultation.",
    icon: Calendar,
    popular: false,
  },
];

export default function PricingSection() {
  const whatsappNumber = "918108821353";
  const phoneNumber = "+918108821353";

  return (
    <section className="bg-[#000000] py-24 border-t border-slate-900 relative overflow-hidden">
      {/* Light glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Engagement Models
          </h2>
          <p className="text-[#94A3B8] max-w-lg mx-auto text-base sm:text-lg">
            Flexible custom software development plans tailored specifically to your organizational scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const buttonLink =
              plan.type === "whatsapp"
                ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(plan.message || "")}`
                : `tel:${phoneNumber}`;

            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#0F172A] border-[#2563EB] shadow-xl shadow-blue-500/5 scale-105"
                    : "bg-slate-950 border-slate-900 hover:border-slate-800"
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-[#2563EB] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                )}

                <div>
                  <span className="text-[#38BDF8] text-xs font-bold uppercase tracking-widest block mb-2">
                    {plan.description}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {plan.name}
                  </h3>
                  
                  <hr className="border-slate-900 my-6" />

                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
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
                    target={plan.type === "whatsapp" ? "_blank" : undefined}
                    rel={plan.type === "whatsapp" ? "noopener noreferrer" : undefined}
                    className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-[#2563EB] text-white hover:bg-blue-700 shadow-md shadow-blue-500/20"
                        : "bg-slate-900 text-white hover:bg-slate-850 border border-slate-800"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#38BDF8]" />
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
