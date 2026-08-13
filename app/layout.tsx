import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import CookieConsent from "@/components/cookie-consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://averza.in";

export const metadata: Metadata = {
  title: "AVERZA | Digital Technology & Growth Studio",
  description:
    "AVERZA helps growing businesses build custom websites, software, mobile apps, SEO, Google Business profiles, digital products and cloud solutions.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AVERZA | Digital Technology & Growth Studio",
    description:
      "Custom websites, software, mobile apps, SEO, Google Business, UI/UX, video content and cloud deployment for growing businesses.",
    url: SITE_URL,
    siteName: "AVERZA",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVERZA | Digital Technology & Growth Studio",
    description:
      "Custom websites, software, mobile apps, SEO, Google Business, UI/UX, video content and cloud deployment for growing businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#240003",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AVERZA",
    url: SITE_URL,
    email: "averzoteam@gmail.com",
    telephone: "+918591484058",
    description:
      "AVERZA is a digital technology and growth studio that helps growing businesses move from manual operations to modern digital systems through custom software, websites, mobile apps, SEO, Google Business optimization, UI/UX design, video content and cloud deployment.",
    knowsAbout: [
      "Custom Software Development",
      "Website Development",
      "Mobile App Development",
      "Search Engine Optimization",
      "Google Business Profile",
      "UI/UX Design",
      "Cloud Deployment",
      "Video Editing",
    ],
    areaServed: [
      { "@type": "City", name: "Thane" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Navi Mumbai" },
      { "@type": "State", name: "Maharashtra" },
      { "@type": "Country", name: "India" },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#240003]">
        <SmoothScroll>{children}</SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
