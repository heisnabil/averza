"use client";

import React, { useState, useEffect } from "react";
import { X, Shield, BarChart3, Megaphone, Settings } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("averza-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      try {
        setPreferences(JSON.parse(consent));
      } catch (e) {
        // Fallback
      }
    }
  }, []);

  useEffect(() => {
    const handleOpenSettings = () => {
      setShowPreferences(true);
      setIsVisible(true);
    };
    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => {
      window.removeEventListener("open-cookie-settings", handleOpenSettings);
    };
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("averza-cookie-consent", JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => savePreferences({ necessary: true, analytics: true, marketing: true });
  const handleRejectAll = () => savePreferences({ necessary: true, analytics: false, marketing: false });
  const handleSavePreferences = () => savePreferences(preferences);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100] animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-[#330005]/95 border border-[#4D070B] rounded-2xl p-6 shadow-2xl backdrop-blur-md text-[#F8F1E3]">

        {/* Main Banner */}
        {!showPreferences ? (
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#F2E8D2] flex-shrink-0" />
                <h4 className="font-semibold text-sm tracking-wide uppercase text-[#F8F1E3]">Cookie Settings</h4>
              </div>
              <button
                onClick={handleRejectAll}
                className="text-[#B9A98E] hover:text-[#F2E8D2] transition-colors cursor-pointer"
                aria-label="Close cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#B9A98E] leading-relaxed mb-6">
              We use cookies to optimize your browsing experience. Essential cookies are required to run the site, while optional analytics and marketing cookies help us understand how you interact with our services.
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleAcceptAll}
                className="w-full py-2.5 rounded-xl bg-[#650108] hover:bg-[#7A0A12] text-[#F2E8D2] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Accept All
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleRejectAll}
                  className="py-2.5 rounded-xl bg-[#F2E8D2]/[0.05] hover:bg-[#F2E8D2]/[0.10] text-[#D8C7A8] font-semibold text-xs uppercase tracking-wider transition-colors border border-[#4D070B] cursor-pointer"
                >
                  Essential Only
                </button>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="py-2.5 rounded-xl bg-[#F2E8D2]/[0.05] hover:bg-[#F2E8D2]/[0.10] text-[#F2E8D2] font-semibold text-xs uppercase tracking-wider transition-colors border border-[#4D070B] flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Settings className="w-3 h-3" />
                  Customize
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Preference Management Mode */
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-[#F2E8D2]" />
              <h4 className="font-semibold text-sm tracking-wide uppercase text-[#F8F1E3]">Customize Settings</h4>
            </div>

            <p className="text-[11px] text-[#B9A98E] leading-relaxed mb-6">
              Manage your preferences below. Necessary cookies are required for basic site functionalities and cannot be disabled.
            </p>

            <div className="space-y-4 mb-6">
              {/* Necessary */}
              <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-[#F2E8D2]/[0.03] border border-[#4D070B]">
                <div className="flex gap-3">
                  <Shield className="w-4 h-4 text-[#F2E8D2] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold block text-[#F8F1E3]">Necessary Cookies</span>
                    <span className="text-[10px] text-[#B9A98E] leading-normal block mt-0.5">Required for core system navigation and basic functionality.</span>
                  </div>
                </div>
                <div className="text-[10px] text-[#B9A98E] font-semibold uppercase tracking-wider self-center px-2 py-1 bg-[#F2E8D2]/[0.05] rounded border border-[#4D070B] select-none">
                  Always Active
                </div>
              </div>

              {/* Analytics */}
              <label
                className="flex items-start justify-between gap-4 p-3 rounded-lg bg-[#F2E8D2]/[0.03] border border-[#4D070B] cursor-pointer hover:bg-[#F2E8D2]/[0.05] transition-colors"
                htmlFor="analytics-cookie-toggle"
              >
                <div className="flex gap-3">
                  <BarChart3 className="w-4 h-4 text-[#D8C7A8] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold block text-[#F8F1E3]">Analytics Cookies</span>
                    <span className="text-[10px] text-[#B9A98E] leading-normal block mt-0.5">Allows us to analyze site visits and performance metrics anonymized.</span>
                  </div>
                </div>
                <input
                  id="analytics-cookie-toggle"
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="h-4 w-4 rounded border-[#4D070B] bg-[#330005] accent-[#650108] self-center cursor-pointer"
                />
              </label>

              {/* Marketing */}
              <label
                className="flex items-start justify-between gap-4 p-3 rounded-lg bg-[#F2E8D2]/[0.03] border border-[#4D070B] cursor-pointer hover:bg-[#F2E8D2]/[0.05] transition-colors"
                htmlFor="marketing-cookie-toggle"
              >
                <div className="flex gap-3">
                  <Megaphone className="w-4 h-4 text-[#D8C7A8] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold block text-[#F8F1E3]">Marketing Cookies</span>
                    <span className="text-[10px] text-[#B9A98E] leading-normal block mt-0.5">Used to tailor advertising campaigns and content relevant to you.</span>
                  </div>
                </div>
                <input
                  id="marketing-cookie-toggle"
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="h-4 w-4 rounded border-[#4D070B] bg-[#330005] accent-[#650108] self-center cursor-pointer"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setShowPreferences(false)}
                className="py-2 rounded-xl bg-[#F2E8D2]/[0.05] hover:bg-[#F2E8D2]/[0.10] text-[#D8C7A8] font-semibold text-xs uppercase tracking-wider transition-colors border border-[#4D070B] cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={handleSavePreferences}
                className="py-2 rounded-xl bg-[#650108] hover:bg-[#7A0A12] text-[#F2E8D2] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Save Choice
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
