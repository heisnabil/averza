"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// ─── Infispark Lightning Bolt SVG Cursor ───
// Based on the design spec: lightning + tech circle, #0A66FF & #00F0FF
const CURSOR_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <defs>
    <linearGradient id="bolt-grad" x1="8" y1="4" x2="24" y2="28" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#00F0FF"/>
      <stop offset="100%" stop-color="#0A66FF"/>
    </linearGradient>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3.5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <!-- Outer glow ring -->
  <circle cx="16" cy="16" r="14" stroke="url(#bolt-grad)" stroke-width="1.2" fill="none" opacity="0.3" filter="url(#glow)"/>
  <!-- Lightning bolt -->
  <path d="M18.5 4L10 17h5.5L13.5 28 24 14h-6.5L18.5 4z" fill="url(#bolt-grad)" filter="url(#glow)" stroke="#00F0FF" stroke-width="0.4"/>
</svg>
`;

// Hover state — enlarged with stronger glow
const CURSOR_HOVER_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <defs>
    <linearGradient id="bolt-grad-h" x1="8" y1="4" x2="32" y2="36" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#00F0FF"/>
      <stop offset="100%" stop-color="#0A66FF"/>
    </linearGradient>
    <filter id="glow-h" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <circle cx="20" cy="20" r="17" stroke="url(#bolt-grad-h)" stroke-width="1.8" fill="rgba(0,240,255,0.06)" filter="url(#glow-h)"/>
  <circle cx="20" cy="20" r="12" stroke="#00F0FF" stroke-width="0.5" fill="none" opacity="0.2"/>
  <path d="M22.5 6L12 22h7L16.5 34 29 17h-7.5L22.5 6z" fill="url(#bolt-grad-h)" filter="url(#glow-h)" stroke="#00F0FF" stroke-width="0.5"/>
</svg>
`;

export default function InertiaCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Don't show on touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const trail = trailRef.current;
    const glow = glowRef.current;
    if (!cursor || !trail || !glow) return;

    // Hide default system cursor
    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";

    // Set initial position off-screen
    gsap.set([cursor, trail, glow], { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      // Main cursor — fast follow with slight inertia
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Trail ring — slower inertia follow
      gsap.to(trail, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      });

      // Glow aura — slowest, most inertia
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        duration: 1.0,
        ease: "power4.out",
        overwrite: "auto",
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.7,
        duration: 0.12,
        ease: "power2.in",
      });
      gsap.to(trail, {
        scale: 0.6,
        opacity: 0.8,
        duration: 0.15,
        ease: "power2.in",
      });
    };

    const onMouseUp = () => {
      gsap.to(cursor, {
        scale: isHoveringRef.current ? 1.3 : 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.3)",
      });
      gsap.to(trail, {
        scale: 1,
        opacity: 0.5,
        duration: 0.4,
        ease: "elastic.out(1, 0.3)",
      });
    };

    // Hover detection for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer, [data-cursor-hover]'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverEnter);
        el.addEventListener("mouseleave", handleHoverLeave);
      });
    };

    const handleHoverEnter = () => {
      isHoveringRef.current = true;
      if (cursor) {
        cursor.innerHTML = CURSOR_HOVER_SVG;
        gsap.to(cursor, {
          scale: 1.3,
          duration: 0.35,
          ease: "elastic.out(1, 0.4)",
        });
      }
      gsap.to(trail, {
        scale: 1.6,
        opacity: 0.3,
        borderColor: "#00F0FF",
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(glow, {
        scale: 1.4,
        opacity: 0.6,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleHoverLeave = () => {
      isHoveringRef.current = false;
      if (cursor) {
        cursor.innerHTML = CURSOR_SVG;
        gsap.to(cursor, {
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
        });
      }
      gsap.to(trail, {
        scale: 1,
        opacity: 0.5,
        borderColor: "rgba(10, 102, 255, 0.3)",
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(glow, {
        scale: 1,
        opacity: 0.3,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to([cursor, trail, glow], {
        opacity: 0,
        duration: 0.3,
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
      gsap.to(trail, { opacity: 0.5, duration: 0.3 });
      gsap.to(glow, { opacity: 0.3, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    // Add hover listeners after a small delay for hydration
    setTimeout(addHoverListeners, 500);

    // MutationObserver to add hover listeners to new elements
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Add cursor: none to all interactive elements
    const styleEl = document.createElement("style");
    styleEl.textContent = `
      *, *::before, *::after { cursor: none !important; }
    `;
    document.head.appendChild(styleEl);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      observer.disconnect();
      document.documentElement.style.cursor = "";
      document.body.style.cursor = "";
      if (styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
    };
  }, []);

  return (
    <>
      {/* Glow aura — outermost, slowest inertia */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-[99997]"
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,240,255,0.12) 0%, rgba(10,102,255,0.06) 40%, transparent 70%)",
          opacity: 0.3,
          willChange: "transform",
          mixBlendMode: "screen",
        }}
      />

      {/* Trail ring — middle layer, medium inertia */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "1.5px solid rgba(10, 102, 255, 0.3)",
          opacity: 0.5,
          willChange: "transform",
          backdropFilter: "blur(1px)",
        }}
      />

      {/* Main cursor — SVG lightning bolt, fastest */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{ willChange: "transform" }}
        dangerouslySetInnerHTML={{ __html: CURSOR_SVG }}
      />
    </>
  );
}
