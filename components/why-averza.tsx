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
    description:
      "High-performance web platforms and cloud systems engineered for your business — designed to scale reliably as your operations grow.",
    color: "from-[#650108]/20 to-[#520006]/20",
    iconColor: "text-[#8B1A22]",
  },
  {
    icon: Cpu,
    title: "AI & Automation Workflows",
    description:
      "Integrate automation into your business workflows — from data processing and notifications to content generation and routine task handling.",
    color: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Share2,
    title: "API-Driven Architecture",
    description:
      "Connect your business systems using secure REST APIs — unifying your notifications, CRM data, inventory and order management.",
    color: "from-[#8B1A22]/20 to-[#650108]/20",
    iconColor: "text-[#8B1A22]",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Post-launch support with monitoring, updates, bug fixes and developer communication — keeping your systems running as your business grows.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
];

const advantages = [
  {
    title: "Custom Code",
    subtitle: "Bespoke Architecture",
    description:
      "Every system built by AVERZA is written for your specific operations — no templates, no bloat, just reliable software built for how your business works.",
    icon: Code,
    iconColor: "text-[#8B1A22]",
  },
  {
    title: "Modern Technology",
    subtitle: "Current Tech Stack",
    description:
      "We build with modern, industry-standard frameworks — React, Next.js, Node.js, PostgreSQL, Android SDK and cloud infrastructure from AWS and GCP.",
    icon: Zap,
    iconColor: "text-purple-400",
  },
  {
    title: "Cloud Infrastructure",
    subtitle: "Reliable Hosting",
    description:
      "Production deployments on cloud platforms with proper SSL, backups, monitoring and CI/CD pipelines — so your digital systems stay online.",
    icon: Cloud,
    iconColor: "text-emerald-400",
  },
  {
    title: "User-Focused Design",
    subtitle: "UI/UX Design",
    description:
      "Interfaces designed for real users — clear, intuitive and built around how your customers and team actually use the product.",
    icon: Layers,
    iconColor: "text-[#8B1A22]",
  },
  {
    title: "Multi-Channel Systems",
    subtitle: "Integrated Notifications",
    description:
      "Build systems that connect WhatsApp, email, SMS and push notifications into a unified communication and operational layer.",
    icon: MessageSquare,
    iconColor: "text-purple-400",
  },
  {
    title: "Reliable Support",
    subtitle: "Post-Launch Care",
    description:
      "We provide ongoing support, maintenance and feature updates — treating your project as a long-term partnership, not a one-time engagement.",
    icon: ShieldCheck,
    iconColor: "text-emerald-400",
  },
];

export default function WhyAverza() {
  return (
    <section
      id="why-averza"
      aria-label="Why choose AVERZA"
      className="relative bg-[#000000] py-24 md:py-32 overflow-hidden border-t border-slate-900"
    >
      {/* Background glow effects */}
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
            Tailored Digital Systems for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B1820] to-[#8B1A22]">
              Growing Businesses
            </span>
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-base sm:text-lg">
            AVERZA builds custom websites, software, mobile apps and digital
            systems that help businesses in Mumbra, Thane, Navi Mumbai and
            Mumbai operate more efficiently and grow faster.
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
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}
                >
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

        {/* The AVERZA Approach Header */}
        <div className="text-center mb-16 pt-8 border-t border-slate-900">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4">
            <span className="text-[10px] sm:text-xs text-[#8B1A22] tracking-wider font-semibold uppercase">
              The AVERZA Approach
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Built Around Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#650108] via-[#8B1A22] to-[#520006]">
              Business Reality
            </span>
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-base sm:text-lg">
            We start with how your business actually operates — then design and
            build systems that fit your workflows, your team and your customers.
          </p>
        </div>

        {/* 6 Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div
                key={index}
                className="relative group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
                    <Icon className={`w-5 h-5 ${adv.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#8B1A22] transition-colors">
                      {adv.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400">
                      {adv.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
