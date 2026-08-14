import React from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import FeatureCarousel from "@/components/ui/feature-carousel";
import ProcessStepper from "@/components/process-stepper";
import StaggerTestimonials from "@/components/stagger-testimonials";
import PricingSection from "@/components/pricing-section";
import FAQs from "@/components/faqs-1";
import ContactSection from "@/components/contact-section";
import CinematicFooter from "@/components/motion-footer";
import GSAPAnimations from "@/components/gsap-animations";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000000] font-sans antialiased text-white selection:bg-[#650108]/30 overflow-x-hidden">
      {/* Header Navigation */}
      <Header />

      {/* GSAP Premium Scroll Animations */}
      <GSAPAnimations />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Tech Stack Cloud */}
      <LogoCloud />

      {/* 3. Services */}
      <section
        id="services"
        aria-label="AVERZA services — website development, custom software, mobile apps, SEO and more"
        className="bg-[#000000] py-24 px-6 border-t border-slate-900"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Our Services
          </h2>
          <p className="text-[#94A3B8] max-w-lg mx-auto text-base sm:text-lg">
            From websites and software to SEO and cloud deployment — everything
            your business needs to operate digitally. We serve businesses in
            Mumbra, Thane, Navi Mumbai, Mumbai and across Maharashtra.
          </p>
        </div>
        <FeatureCarousel />
      </section>

      {/* 4. Process */}
      <section
        id="process"
        aria-label="How AVERZA works — our project process"
        className="bg-[#000000]"
      >
        <ProcessStepper />
      </section>

      {/* 6. Portfolio / What We Build */}
      <section
        id="portfolio"
        aria-label="What AVERZA builds — example projects and solutions"
        className="bg-[#000000]"
      >
        <StaggerTestimonials />
      </section>

      {/* 7. Engagement Models */}
      <section
        id="pricing"
        aria-label="AVERZA engagement models and service plans"
        className="bg-[#000000]"
      >
        <PricingSection />
      </section>

      {/* 8. FAQ */}
      <section
        id="faq"
        aria-label="Frequently asked questions about AVERZA"
        className="bg-[#000000]"
      >
        <FAQs />
      </section>

      {/* 9. Contact */}
      <ContactSection />

      {/* 10. Footer */}
      <CinematicFooter />
    </div>
  );
}
