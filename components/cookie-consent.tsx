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
    // Check if consent has already been given
    const consent = localStorage.getItem("averza-cookie-consent");
    if (!consent) {
      // Small delay for natural appearance
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      try {
        setPreferences(JSON.parse(consent));
      } catch (e) {
        // Fallback if malformed
      }
    }
  }, []);

  useEffect(() => {
    // Event listener for opening preferences from the footer
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

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100] animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-[#0b0f19]/90 border border-slate-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-md text-white">
        
        {/* Main Banner Mode */}
        {!showPreferences ? (
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <h4 className="font-semibold text-sm tracking-wide uppercase">Cookie Settings</h4>
              </div>
              <button 
                onClick={handleRejectAll}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              We use cookies to optimize your browsing experience. Essential cookies are required to run the site, while optional analytics and marketing cookies help us understand how you interact with our services.
            </p>
            
            <div className="flex flex-col gap-2">
              <button
                onClick={handleAcceptAll}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Accept All
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleRejectAll}
                  className="py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-colors border border-white/5 cursor-pointer"
                >
                  Essential Only
                </button>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#38BDF8] font-semibold text-xs uppercase tracking-wider transition-colors border border-white/5 flex items-center justify-center gap-1 cursor-pointer"
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
              <Shield className="w-5 h-5 text-[#38BDF8]" />
              <h4 className="font-semibold text-sm tracking-wide uppercase">Customize Settings</h4>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed mb-6">
              Manage your preferences below. Necessary cookies are required for basic site functionalities and cannot be disabled.
            </p>

            <div className="space-y-4 mb-6">
              {/* Category: Necessary */}
              <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="flex gap-3">
                  <Shield className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold block text-white">Necessary Cookies</span>
                    <span className="text-[10px] text-slate-500 leading-normal block mt-0.5">Required for core system navigation and basic functionality.</span>
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider self-center px-2 py-1 bg-white/5 rounded border border-white/5 select-none">
                  Always Active
                </div>
              </div>

              {/* Category: Analytics */}
              <label 
                className="flex items-start justify-between gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] cursor-pointer hover:bg-white/[0.04] transition-colors"
                htmlFor="analytics-cookie-toggle"
              >
                <div className="flex gap-3">
                  <BarChart3 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold block text-white">Analytics Cookies</span>
                    <span className="text-[10px] text-slate-500 leading-normal block mt-0.5">Allows us to analyze site visits and performance metrics anonymized.</span>
                  </div>
                </div>
                <input
                  id="analytics-cookie-toggle"
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="h-4 w-4 rounded border-white/20 bg-white/5 text-blue-600 focus:ring-blue-500 self-center cursor-pointer"
                />
              </label>

              {/* Category: Marketing */}
              <label 
                className="flex items-start justify-between gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] cursor-pointer hover:bg-white/[0.04] transition-colors"
                htmlFor="marketing-cookie-toggle"
              >
                <div className="flex gap-3">
                  <Megaphone className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold block text-white">Marketing Cookies</span>
                    <span className="text-[10px] text-slate-500 leading-normal block mt-0.5">Used to tailor advertising campaigns and content relevant to you.</span>
                  </div>
                </div>
                <input
                  id="marketing-cookie-toggle"
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="h-4 w-4 rounded border-white/20 bg-white/5 text-blue-600 focus:ring-blue-500 self-center cursor-pointer"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setShowPreferences(false)}
                className="py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-colors border border-white/5 cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={handleSavePreferences}
                className="py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
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
