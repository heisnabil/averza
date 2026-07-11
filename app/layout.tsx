import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INFISPARK TECHNOLOGIES LLP | Custom Software Development & IT Solutions Company India",
  description:
    "INFISPARK TECHNOLOGIES LLP is India's leading custom software development and IT solutions provider. We design bespoke web platforms, cross-platform mobile apps, AI-integrated software, e-commerce systems, and official WhatsApp API integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#000000]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
