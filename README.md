# Infispark — Premium Custom Software & AI Solutions

A visually stunning, high-performance, and extremely premium Next.js landing page built for **Infispark**. Designed to showcase advanced tech capabilities, featuring immersive GSAP animations, buttery smooth Lenis scrolling, and a custom interactive inertia mouse cursor inspired by the Infispark logo.

---

## ✨ Features & Visual Highlights

- **⚡ Custom Inertia Mouse Cursor**: A high-tech, glowing SVG cursor inspired by the Infispark logo (lightning + tech circle) that smoothly follows pointer coordinates with customized acceleration, click effects, and magnetic hover states on interactive items.
- **🌌 Aceternity UI Lamp Effect**: An immersive, dark-ambient glowing lamp header backdrop creating a premium first impression in the Hero section.
- **🎭 Extreme Premium GSAP Animations**:
  - Scroll-triggered 3D rotating text and word-by-word reveal transitions.
  - Perspective-based 3D rotating pricing cards.
  - Floating ambient particle background system.
  - Velocity-reactive scroll lines (simulating speed lines during fast scrolls).
  - Elegant left-to-right section divider line expansions on scroll.
  - Custom scroll progress indicator featuring a neon glow gradient.
- **🖱️ Lenis Smooth Scroll**: Highly optimized smooth-scrolling integrated directly with the GSAP ticker for a fluid, lag-free scrolling experience.
- **📦 Feature Showcase (Solutions Carousel)**: Interactive category selection with dynamic card stacks showcasing 8 core software and automation solution pillars.
- **⚙️ Dynamic Stepper Process**: Structured MUI-based dark-theme stepper outlining discovery, architecture, AI development, testing, and deployment workflows.
- **💰 Integrated Engagement Models**: Dynamic calling and WhatsApp messaging options with automated quote/consultation messaging prompts.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Tailwind CSS v4, TypeScript)
- **Animations**: [GSAP (GreenSock)](https://greensock.com/gsap/) & [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Gestures/Motion**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Lucide React](https://lucide.dev/), Material UI (MUI for Stepper)
- **Styling**: Tailwind CSS, Vanilla CSS gradients and filters

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** or **pnpm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/heisnabil/InfiSpark_landingPage.git
   cd InfiSpark_landingPage
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) (or the designated port) in your browser.

### Build and Production Deployment

To generate an optimized production build:
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
├── app/
│   ├── globals.css          # Global Tailwind styles & core theme configurations
│   ├── layout.tsx           # Layout wrapper with smooth scroll configuration
│   └── page.tsx             # Main entry point importing layout sections
├── components/
│   ├── ui/
│   │   ├── feature-carousel.tsx  # Dynamic Solutions Category Carousel
│   │   ├── lamp.tsx              # Hero Section glowing Lamp Container
│   │   └── ...
│   ├── header.tsx           # Floating navigation bar with active scroll states
│   ├── hero-section.tsx     # Hero section containing CTAs & main copywriting
│   ├── logo-cloud.tsx       # Infinite partner logo marquee banner
│   ├── process-stepper.tsx  # MUI Interactive Stepper Workflow
│   ├── stagger-testimonials.tsx # Rotated stagger testimonials carousel
│   ├── pricing-section.tsx  # Engagement models card grid with CTAs
│   ├── faqs-1.tsx           # Accordion UI FAQ block
│   ├── motion-footer.tsx    # Cinematic parallax bottom footer
│   ├── gsap-animations.tsx  # Heavy-duty premium scroll & background animations
│   └── inertia-cursor.tsx   # Custom Interactive SVG Mouse Cursor
└── public/
    ├── logos/               # Client partner logos
    └── images/              # Localized feature images and graphics
```

---

## 🛡️ License

This project is proprietary and built specifically for **Infispark**.
