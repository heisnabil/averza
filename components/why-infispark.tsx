"use client";

import React from "react";
import {
  Compass,
  Cpu,
  Share2,
  Headphones,
  Code,
  Zap,
  Cloud,
  Layers,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Custom Platform Design",
    description: "High-performance web and cloud platforms engineered for scale, reliability, and security.",
    color: "from-[#650108]/25 to-[#3F0005]/25",
    iconColor: "text-[#F2E8D2]",
  },
  {
    icon: Cpu,
    title: "AI Workflows & LLMs",
    description: "Automate content generation, data extraction, and repetitive tasks with direct AI integrations.",
    color: "from-[#7A0A12]/25 to-[#650108]/25",
    iconColor: "text-[#E7D6B8]",
  },
  {
    icon: Share2,
    title: "API-Driven Architecture",
    description: "Unify notifications, transaction queues, and CRM data using secure REST and WhatsApp APIs.",
    color: "from-[#3F0005]/25 to-[#650108]/25",
    iconColor: "text-[#D8C7A8]",
  },
  {
    icon: Headphones,
    title: "Dedicated Live Support",
    description: "Round-the-clock systems uptime, proactive patching, and instant developer messaging access.",
    color: "from-[#650108]/20 to-[#7A0A12]/20",
    iconColor: "text-[#F2E8D2]",
  },
];

const advantages = [
  {
    stat: "100%",
    title: "Custom Code",
    subtitle: "Bespoke Architecture",
    description: "Tailored code systems engineered for speed and stability. No templates, no bloat, just pure performance built for your operations.",
    icon: Code,
  },
  {
    stat: "10×",
    title: "Faster Tasks",
    subtitle: "AI-Powered Efficiency",
    description: "Integrate Large Language Models and voice processing engines directly into your workflows to automate report generation and data entry.",
    icon: Zap,
  },
  {
    stat: "99.99%",
    title: "Uptime SLA",
    subtitle: "High-Density Cloud",
    description: "Our server deployments on AWS/GCP ensure zero latency, high-volume database queries, and automatic backup architectures.",
    icon: Cloud,
  },
  {
    stat: "95%",
    title: "User Adoption",
    subtitle: "User-Centric UX/UI",
    description: "Aesthetically stunning, modern, and response-driven layouts tailored for high employee adoption and customer conversion rates.",
    icon: Layers,
  },
  {
    stat: "98%",
    title: "Open Rates",
    subtitle: "Omnichannel APIs",
    description: "Unify transactional notifications, billing updates, and support queues into WhatsApp, SMS, and email configurations.",
    icon: MessageSquare,
  },
  {
    stat: "24/7",
    title: "Active Support",
    subtitle: "Enterprise SLA",
    description: "Proactive monitoring, daily backups, code updates, and direct developer communication channels to keep your app secure.",
    icon: ShieldCheck,
  },
];

export default function WhyAverza() {
  return (
    <section id="why-averza" className="relative bg-[#240003] py-24 md:py-32 overflow-hidden border-t border-[#4D070B]">
      {/* Warm background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#650108]/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[#3F0005]/[0.08] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2E8D2]/[0.04] border border-[#F2E8D2]/[0.10] mb-4">
            <span className="text-[10px] sm:text-xs text-[#D8C7A8] tracking-wider font-semibold uppercase">
              Why Choose AVERZA
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8F1E3] mb-4">
            Tailored Architecture for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2E8D2] to-[#D8C7A8]">
              High-Growth Enterprises
            </span>
          </h2>
          <p className="text-[#B9A98E] max-w-xl mx-auto text-base sm:text-lg">
            A seamless digital ecosystem — where custom architecture and business efficiency converge.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="relative group p-6 rounded-2xl bg-[#F2E8D2]/[0.02] border border-[#4D070B] hover:border-[#650108] hover:bg-[#F2E8D2]/[0.04] transition-all duration-300"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#650108] to-[#F2E8D2]/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl" />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-[#F8F1E3] mb-2 group-hover:text-[#F2E8D2] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[#B9A98E] text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Advantage Header */}
        <div className="text-center mb-16 pt-8 border-t border-[#4D070B]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2E8D2]/[0.04] border border-[#F2E8D2]/[0.10] mb-4">
            <span className="text-[10px] sm:text-xs text-[#D8C7A8] tracking-wider font-semibold uppercase">
              The AVERZA Advantage
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8F1E3] mb-4">
            Built for the New Era of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2E8D2] via-[#E7D6B8] to-[#D8C7A8]">
              Enterprise Tech
            </span>
          </h2>
          <p className="text-[#B9A98E] max-w-xl mx-auto text-base sm:text-lg">
            Transform your business operations with custom software environments engineered for speed, data security, and seamless usability.
          </p>
        </div>

        {/* 6 Advantage Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div
                key={index}
                className="relative group p-8 rounded-2xl bg-[#F2E8D2]/[0.02] border border-[#4D070B] hover:border-[#650108] hover:bg-[#F2E8D2]/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F8F1E3] group-hover:text-[#F2E8D2] transition-colors font-mono">
                      {adv.stat}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#F2E8D2]/[0.04] flex items-center justify-center text-[#B9A98E] group-hover:text-[#F2E8D2] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-[#F2E8D2] uppercase tracking-wider mb-1">
                    {adv.title}
                  </h4>
                  <h5 className="text-sm font-medium text-[#B9A98E] mb-3">
                    {adv.subtitle}
                  </h5>
                  <p className="text-[#B9A98E] text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
