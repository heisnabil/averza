"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error for monitoring — replace with your error tracking service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center px-6">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#650108]/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8B1A22]/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Brand */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
          <span className="text-xs text-[#8B1A22] tracking-wider font-semibold uppercase">
            AVERZA
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
          Something Went Wrong
        </h1>
        <p className="text-[#94A3B8] text-base mb-10 leading-relaxed">
          An unexpected error occurred. You can try again or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-semibold bg-[#650108] hover:bg-[#520006] text-white transition-all duration-200 shadow-lg shadow-[#650108]/20 cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-semibold bg-white/[0.03] border border-white/[0.1] text-white hover:bg-white/[0.08] transition-all duration-200"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
