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
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const metadata: Metadata = {
  title: "AVERZA | Digital Technology & Growth Studio",
  description:
    "AVERZA helps growing businesses build custom websites, software, mobile apps, SEO, Google Business profiles, digital products and cloud solutions. Serving Mumbra, Thane, Navi Mumbai and Mumbai.",
  keywords: [
    "AVERZA",
    "digital technology studio",
    "website development Thane",
    "website development Mumbra",
    "custom software development Mumbai",
    "Android app development Thane",
    "local SEO services Thane",
    "Google Business Profile optimization",
    "cloud deployment services",
    "business automation",
    "digital transformation",
    "mobile app development Navi Mumbai",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logos/Averza.jpg", type: "image/jpeg" },
      { url: "/icon.jpg", type: "image/jpeg" },
    ],
    shortcut: "/logos/Averza.jpg",
    apple: "/apple-icon.jpg",
  },
  openGraph: {
    title: "AVERZA | Digital Technology & Growth Studio",
    description:
      "Custom websites, software, mobile apps, SEO, Google Business, UI/UX, video content and cloud deployment for growing businesses in Mumbra, Thane, Navi Mumbai and Mumbai.",
    url: SITE_URL,
    siteName: "AVERZA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "AVERZA — Digital Technology & Growth Studio. Build. Transform. Grow.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVERZA | Digital Technology & Growth Studio",
    description:
      "Custom websites, software, mobile apps, SEO, Google Business, UI/UX, video content and cloud deployment for growing businesses.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google761a92658f92efe9",
  },
  other: {
    "theme-color": "#000000",
    "msvalidate.01": "7BF94FBF853E73918BB94B35FAC11AC6",
  },
};

// Server-side JSON-LD for Google & AI systems
function buildJsonLd() {
  const organization = {
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: "AVERZA",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logos/Averza.jpg`,
      width: 200,
      height: 200,
    },
    image: OG_IMAGE,
    email: "averzoteam@gmail.com",
    telephone: "+918591484058",
    description:
      "AVERZA is a digital technology and growth studio that helps growing businesses move from manual operations to modern digital systems through custom software, websites, mobile apps, SEO, Google Business optimization, UI/UX design, video content and cloud deployment.",
    slogan: "Build. Transform. Grow.",
    sameAs: [
      "https://www.instagram.com/_averzaforyou_/",
      "https://www.linkedin.com/company/averza-labs/",
    ],
    knowsAbout: [
      "Custom Software Development",
      "Website Development",
      "Mobile App Development",
      "Search Engine Optimization",
      "Local SEO",
      "Google Business Profile Optimization",
      "UI/UX Design",
      "Cloud Deployment",
      "Video Editing",
      "Business Automation",
      "Digital Transformation",
    ],
    areaServed: [
      { "@type": "City", name: "Mumbra" },
      { "@type": "City", name: "Thane" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Navi Mumbai" },
      { "@type": "State", name: "Maharashtra" },
      { "@type": "Country", name: "India" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbra",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };

  const services = [
    {
      "@type": "Service",
      name: "Custom Software Development",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "Business software designed around your actual workflows — CRM systems, inventory management, booking systems, order tracking, dashboards and internal portals. Built for businesses in Thane, Mumbai and Navi Mumbai.",
      areaServed: "Mumbra, Thane, Navi Mumbai, Mumbai, Maharashtra",
      url: `${SITE_URL}/#services`,
    },
    {
      "@type": "Service",
      name: "Website Development",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "Fast, responsive and SEO-ready websites built to represent your business and generate leads. Website development for local businesses in Mumbra, Thane, Navi Mumbai and Mumbai.",
      areaServed: "Mumbra, Thane, Navi Mumbai, Mumbai, Maharashtra",
      url: `${SITE_URL}/#services`,
    },
    {
      "@type": "Service",
      name: "Mobile App Development",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "Android and mobile applications built for your customers, team and business operations — including ordering apps, booking apps, customer loyalty apps and internal management tools.",
      areaServed: "Mumbra, Thane, Navi Mumbai, Mumbai, Maharashtra",
      url: `${SITE_URL}/#services`,
    },
    {
      "@type": "Service",
      name: "SEO and Local SEO",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "Local SEO and technical SEO services to help businesses in Mumbra, Thane, Navi Mumbai and Mumbai appear in relevant Google searches. Includes on-page SEO, content strategy and Google Business Profile optimization.",
      areaServed: "Mumbra, Thane, Navi Mumbai, Mumbai, Maharashtra",
      url: `${SITE_URL}/#services`,
    },
    {
      "@type": "Service",
      name: "Google Business Profile Optimization",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "Setup and optimization of Google Business Profiles for local businesses in Mumbra, Thane and Mumbai — including categories, services, photos and review strategy.",
      areaServed: "Mumbra, Thane, Navi Mumbai, Mumbai, Maharashtra",
      url: `${SITE_URL}/#services`,
    },
    {
      "@type": "Service",
      name: "Product Design and UI/UX",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "Design digital products that are clear, useful and easy to use — from wireframes and prototypes to complete design systems.",
      areaServed: "Mumbra, Thane, Navi Mumbai, Mumbai, Maharashtra",
      url: `${SITE_URL}/#services`,
    },
    {
      "@type": "Service",
      name: "Reels and Video Editing",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "Short-form video editing and Instagram reel production for businesses — turning products, services and brand stories into engaging video content.",
      areaServed: "Mumbra, Thane, Navi Mumbai, Mumbai, Maharashtra",
      url: `${SITE_URL}/#services`,
    },
    {
      "@type": "Service",
      name: "Cloud and Deployment Services",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "Cloud deployment, domain configuration, SSL setup, database management and CI/CD pipelines — taking your digital product from development to a reliable production environment.",
      areaServed: "Mumbra, Thane, Navi Mumbai, Mumbai, Maharashtra",
      url: `${SITE_URL}/#services`,
    },
  ];

  const faqEntities = [
    {
      "@type": "Question",
      name: "What does AVERZA do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AVERZA is a digital technology and growth studio. We help growing businesses move from manual operations to modern digital systems by building custom websites, software, mobile apps, SEO strategies, Google Business profiles, UI/UX designs, video content and cloud infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas does AVERZA serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AVERZA serves businesses across Mumbra, Thane, Navi Mumbai, Mumbai and Maharashtra. We work with early-stage, local and growing businesses across India.",
      },
    },
    {
      "@type": "Question",
      name: "Does AVERZA build websites for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AVERZA builds fast, responsive and SEO-ready websites for local businesses — including restaurants, pharmacies, clinics, retail shops, salons and professional service providers.",
      },
    },
    {
      "@type": "Question",
      name: "Does AVERZA develop custom business software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AVERZA designs and develops business software around your actual workflows — including CRM systems, inventory management, order tracking, booking systems and internal portals.",
      },
    },
    {
      "@type": "Question",
      name: "Does AVERZA provide local SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AVERZA provides local SEO, technical SEO and on-page optimization to help businesses in Mumbra, Thane, Navi Mumbai and Mumbai appear in relevant Google searches.",
      },
    },
    {
      "@type": "Question",
      name: "Can AVERZA optimize my Google Business Profile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AVERZA sets up and optimizes Google Business Profiles with accurate business information, categories, services, photos and review strategy to strengthen local presence on Google Search and Google Maps.",
      },
    },
    {
      "@type": "Question",
      name: "Does AVERZA develop Android apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AVERZA builds Android and mobile applications for customers, teams and operations — including ordering apps, booking apps, loyalty apps and internal management tools.",
      },
    },
    {
      "@type": "Question",
      name: "How does an AVERZA project work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project starts with a discovery conversation to understand your needs. We design a solution, develop it with regular progress updates, review and refine based on feedback, then deploy to production with ongoing support.",
      },
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      ...services,
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqEntities,
      },
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = buildJsonLd();

  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#000000]">
        <SmoothScroll>{children}</SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
