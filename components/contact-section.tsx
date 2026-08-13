"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false,
    website: "", // Honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please consent to the privacy policy before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          businessName: formData.company,
          message: formData.message,
          website: formData.website,
          phone: "",
          businessType: "",
          service: "",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong while sending your enquiry. Please try again.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "", consent: false, website: "" });
    } catch (err: any) {
      setSubmitError(err.message || "Something went wrong while sending your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = "918591484058";
  const whatsappMessage = encodeURIComponent(
    "Hi AVERZA, I would like to request a consultation for my business."
  );

  return (
    <section id="contact" className="relative bg-[#000000] py-24 md:py-32 overflow-hidden border-t border-slate-900">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-[#650108]/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] bg-[#8B1A22]/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4">
            <span className="text-[10px] sm:text-xs text-[#8B1A22] tracking-wider font-semibold uppercase">
              Let's Talk
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Ready to Accelerate Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B1820] to-[#8B1A22]">
              Digital Journey?
            </span>
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-base sm:text-lg">
            Partner with AVERZA to move your business from manual operations to modern digital systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-6">
              
              {/* Mail Us Card */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#650108]/10 flex items-center justify-center text-[#9B1820]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Mail Us 24/7
                    </h3>
                    <a
                      href="mailto:averzoteam@gmail.com"
                      className="text-base font-semibold text-white hover:text-[#8B1A22] transition-colors"
                    >
                      averzoteam@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Call / WhatsApp Card */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Call / WhatsApp — Zaid Khan
                    </h3>
                    <div className="flex flex-col text-sm font-semibold text-white gap-0.5">
                      <a href="tel:+918591484058" className="hover:text-emerald-400 transition-colors">
                        +91 85914 84058 (Direct Support)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Headquarters Card */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Primary Service Areas
                    </h3>
                    <p className="text-sm font-semibold text-white">
                      Mumbra, Thane, Navi Mumbai, Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Chat Link */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all text-sm tracking-wide shadow-lg shadow-emerald-500/15"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md relative flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1">
                Start Your Digital Transformation
              </h3>
              <p className="text-slate-400 text-sm">
                Fill out the form below or chat with us on WhatsApp. We respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-[#10B981] flex items-center justify-center mb-4">
                  <Send className="w-6 h-6 animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Inquiry Received Successfully!
                </h4>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks — your enquiry has been received. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-[#650108] text-sm transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-[#650108] text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Business Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Café"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-[#650108] text-sm transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your business operations and what you'd like to build or transform..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-[#650108] text-sm transition-all resize-none"
                  />
                </div>

                <div className="flex items-start gap-3 mt-1">
                  <input
                    id="consent-checkbox"
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-[#650108] focus:ring-[#650108]"
                  />
                  <label htmlFor="consent-checkbox" className="text-xs text-slate-400 select-none cursor-pointer">
                    I agree to share my information with AVERZA to receive a consultation. We respect your privacy and will never spam you.
                  </label>
                </div>

                {/* Honeypot field for spam prevention - hidden from real users */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                {submitError && (
                  <p className="text-red-500 text-xs font-semibold mt-1">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#650108] hover:bg-[#520006] text-white font-bold transition-all text-sm tracking-wide shadow-lg shadow-[#650108]/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Request a Consultation"}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
