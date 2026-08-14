import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | AVERZA",
  description:
    "The page you were looking for doesn't exist. Return to the AVERZA homepage to explore our digital technology services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
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

        {/* 404 */}
        <div
          className="text-[120px] sm:text-[160px] font-black leading-none tracking-tighter text-transparent mb-4"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.08)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-[#94A3B8] text-base mb-10 leading-relaxed">
          The page you were looking for doesn&apos;t exist. Head back to the homepage to explore AVERZA&apos;s services.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-semibold bg-[#650108] hover:bg-[#520006] text-white transition-all duration-200 shadow-lg shadow-[#650108]/20"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
