import React from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import FeatureCarousel from "@/components/ui/feature-carousel";
import ProcessStepper from "@/components/process-stepper";
import StaggerTestimonials from "@/components/stagger-testimonials";
import PricingSection from "@/components/pricing-section";
import FAQs from "@/components/faqs-1";
import CinematicFooter from "@/components/motion-footer";
import GSAPAnimations from "@/components/gsap-animations";
import InertiaCursor from "@/components/inertia-cursor";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000000] font-sans antialiased text-white selection:bg-[#2563EB]/30 overflow-x-hidden">
      {/* Header Navigation */}
      <Header />

      {/* Premium Inertia Cursor */}
      <InertiaCursor />

      {/* GSAP Premium Scroll Animations */}
      <GSAPAnimations />


      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Logo Cloud */}
      <LogoCloud />

      {/* 3. Solutions (Feature Carousel) */}
      <div id="solutions" className="bg-[#000000] py-24 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Our Solutions
          </h2>
          <p className="text-[#94A3B8] max-w-lg mx-auto text-base sm:text-lg">
            High-performance custom software and AI integrations engineered for modern business scale.
          </p>
        </div>
        <FeatureCarousel />
      </div>

      {/* 4. Process */}
      <div id="process" className="bg-[#000000]">
        <ProcessStepper />
      </div>

      {/* 5. Testimonials */}
      <div id="testimonials" className="bg-[#000000]">
        <StaggerTestimonials />
      </div>

      {/* 6. Pricing */}
      <div id="pricing" className="bg-[#000000]">
        <PricingSection />
      </div>

      {/* 7. FAQ */}
      <div id="faq" className="bg-[#000000]">
        <FAQs />
      </div>

      {/* 8. Footer */}
      <CinematicFooter />
    </div>
  );
}
