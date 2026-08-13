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
    /* BLUE gradient → MAROON gradient */
    color: "from-[#650108]/20 to-[#520006]/20",
    /* BLUE icon → LIGHTER MAROON icon */
    iconColor: "text-[#8B1A22]",
  },
  {
    icon: Cpu,
    title: "AI Workflows & LLMs",
    description: "Automate content generation, data extraction, and repetitive tasks with direct AI integrations.",
    color: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Share2,
    title: "API-Driven Architecture",
    description: "Unify notifications, transaction queues, and CRM data using secure REST and WhatsApp APIs.",
    /* CYAN/BLUE gradient → MAROON */
    color: "from-[#8B1A22]/20 to-[#650108]/20",
    /* CYAN icon → LIGHTER MAROON */
    iconColor: "text-[#8B1A22]",
  },
  {
    icon: Headphones,
    title: "Dedicated Live Support",
    description: "Round-the-clock systems uptime, proactive patching, and instant developer messaging access.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
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
    <section id="why-averza" className="relative bg-[#000000] py-24 md:py-32 overflow-hidden border-t border-slate-900">
      {/* Background glow effects — BLUE → MAROON, same opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#650108]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[#520006]/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Why Choose AVERZA Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4">
            <span className="text-[10px] sm:text-xs text-[#8B1A22] tracking-wider font-semibold uppercase">
              Why Choose AVERZA
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Tailored Architecture for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B1820] to-[#8B1A22]">
              High-Growth Enterprises
            </span>
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-base sm:text-lg">
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
                className="relative group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#650108] to-[#520006] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl" />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#8B1A22] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* The AVERZA Advantage Header */}
        <div className="text-center mb-16 pt-8 border-t border-slate-900">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4">
            <span className="text-[10px] sm:text-xs text-[#8B1A22] tracking-wider font-semibold uppercase">
              The AVERZA Advantage
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Built for the New Era of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#650108] via-[#8B1A22] to-[#520006]">
              Enterprise Tech
            </span>
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-base sm:text-lg">
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
                className="relative group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-[#8B1A22] transition-colors font-mono">
                      {adv.stat}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-[#8B1A22] uppercase tracking-wider mb-1">
                    {adv.title}
                  </h4>
                  <h5 className="text-sm font-medium text-slate-400 mb-3">
                    {adv.subtitle}
                  </h5>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
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
