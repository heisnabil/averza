"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || initialized.current) return;
    initialized.current = true;

    const initTimeout = setTimeout(() => {
      const ctx = gsap.context(() => {

        // ═══════════════════════════════════════════════════════════
        // 0. GLOBAL — MAGNETIC TEXT SPLIT EFFECT UTILITY
        // ═══════════════════════════════════════════════════════════
        const splitTextIntoWords = (el: Element) => {
          const text = el.textContent || "";
          const words = text.split(/\s+/).filter(Boolean);
          el.innerHTML = words
            .map((word) => `<span class="gsap-word" style="display:inline-block;will-change:transform,opacity">${word}&nbsp;</span>`)
            .join("");
          return el.querySelectorAll(".gsap-word");
        };

        // ═══════════════════════════════════════════════════════════
        // 1. HERO SECTION — Cinematic parallax depth
        // ═══════════════════════════════════════════════════════════
        const heroSection = document.querySelector("section.relative.min-h-\\[90vh\\]") || document.querySelector("section:first-of-type");
        if (heroSection) {
          // Parallax scroll — hero compresses and fades as you scroll
          gsap.to(heroSection, {
            yPercent: -15,
            scale: 0.92,
            opacity: 0.3,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }

        // ═══════════════════════════════════════════════════════════
        // 2. LOGO CLOUD — Velocity-based opacity on scroll
        // ═══════════════════════════════════════════════════════════
        const logoCloud = document.querySelector("section.bg-\\[\\#000000\\].py-16");
        if (logoCloud) {
          gsap.fromTo(
            logoCloud,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: logoCloud,
                start: "top 92%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // ═══════════════════════════════════════════════════════════
        // 3. SOLUTIONS SECTION — Cinematic word reveal + carousel
        // ═══════════════════════════════════════════════════════════
        const solutionsSection = document.querySelector("#solutions");
        if (solutionsSection) {
          const heading = solutionsSection.querySelector("h2");
          if (heading) {
            const words = splitTextIntoWords(heading);
            gsap.fromTo(
              words,
              {
                y: 80,
                opacity: 0,
                rotationX: -90,
                transformOrigin: "50% 100%",
              },
              {
                y: 0,
                opacity: 1,
                rotationX: 0,
                stagger: 0.08,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: solutionsSection,
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          const subtitle = solutionsSection.querySelector("h2 + p, .text-\\[\\#B9A98E\\]");
          if (subtitle) {
            gsap.fromTo(
              subtitle,
              { y: 30, opacity: 0, filter: "blur(6px)" },
              {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1,
                delay: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: solutionsSection,
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          // Carousel reveal — dramatic scale + 3D rotation entry
          const carousel = solutionsSection.querySelector(".w-full.max-w-7xl");
          if (carousel) {
            gsap.fromTo(
              carousel,
              {
                y: 120,
                opacity: 0,
                scale: 0.85,
                rotationX: 8,
                transformPerspective: 1200,
                transformOrigin: "50% 100%",
              },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                rotationX: 0,
                duration: 1.6,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: solutionsSection,
                  start: "top 65%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        }

        // ═══════════════════════════════════════════════════════════
        // 4. PROCESS SECTION — Timeline with stagger cascade
        // ═══════════════════════════════════════════════════════════
        const processSection = document.querySelector("#process");
        if (processSection) {
          const heading = processSection.querySelector("h2");
          if (heading) {
            const words = splitTextIntoWords(heading);
            gsap.fromTo(
              words,
              { y: 60, opacity: 0, rotationX: -80, transformOrigin: "50% 100%" },
              {
                y: 0,
                opacity: 1,
                rotationX: 0,
                stagger: 0.06,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: processSection,
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          const processSubtitle = processSection.querySelector("p.text-\\[\\#B9A98E\\]");
          if (processSubtitle) {
            gsap.fromTo(
              processSubtitle,
              { y: 20, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 0.4,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: processSection,
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          // MUI Stepper steps — cascade from left with rotation
          const stepperRoot = processSection.querySelector(".MuiStepper-root");
          if (stepperRoot) {
            const steps = stepperRoot.querySelectorAll(".MuiStep-root");
            if (steps.length) {
              gsap.fromTo(
                steps,
                {
                  x: -80,
                  opacity: 0,
                  scale: 0.9,
                  rotationY: -15,
                  transformPerspective: 800,
                },
                {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  rotationY: 0,
                  stagger: 0.1,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: processSection,
                    start: "top 65%",
                    toggleActions: "play none none reverse",
                  },
                }
              );
            }
          }
        }

        // ═══════════════════════════════════════════════════════════
        // 5. TESTIMONIALS — Zoom-in reveal with rotation
        // ═══════════════════════════════════════════════════════════
        const testimonialsSection = document.querySelector("#testimonials");
        if (testimonialsSection) {
          const heading = testimonialsSection.querySelector("h2");
          if (heading) {
            const words = splitTextIntoWords(heading);
            gsap.fromTo(
              words,
              { y: 60, opacity: 0, rotationX: -80, transformOrigin: "50% 100%" },
              {
                y: 0,
                opacity: 1,
                rotationX: 0,
                stagger: 0.06,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: testimonialsSection,
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          // The card stack area
          const cardArea = testimonialsSection.querySelector(".relative.w-full.overflow-hidden");
          if (cardArea) {
            gsap.fromTo(
              cardArea,
              {
                scale: 0.8,
                opacity: 0,
                rotationX: 10,
                transformPerspective: 1000,
                transformOrigin: "50% 50%",
              },
              {
                scale: 1,
                opacity: 1,
                rotationX: 0,
                duration: 1.4,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: testimonialsSection,
                  start: "top 60%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        }

        // ═══════════════════════════════════════════════════════════
        // 6. PRICING — 3D flip card entrance
        // ═══════════════════════════════════════════════════════════
        const pricingSection = document.querySelector("#pricing");
        if (pricingSection) {
          const heading = pricingSection.querySelector("h2");
          if (heading) {
            const words = splitTextIntoWords(heading);
            gsap.fromTo(
              words,
              { y: 60, opacity: 0, rotationX: -80, transformOrigin: "50% 100%" },
              {
                y: 0,
                opacity: 1,
                rotationX: 0,
                stagger: 0.06,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: pricingSection,
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          const pricingSubtitle = pricingSection.querySelector("h2 ~ p, p.text-\\[\\#B9A98E\\]");
          if (pricingSubtitle) {
            gsap.fromTo(
              pricingSubtitle,
              { y: 20, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: pricingSection,
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          // Cards — dramatic 3D flip stagger
          const cards = pricingSection.querySelectorAll(".grid > div");
          if (cards.length) {
            gsap.fromTo(
              cards,
              {
                y: 100,
                opacity: 0,
                rotationY: -25,
                scale: 0.85,
                transformPerspective: 1200,
                transformOrigin: "center center",
              },
              {
                y: 0,
                opacity: 1,
                rotationY: 0,
                scale: 1,
                stagger: {
                  each: 0.15,
                  from: "center",
                },
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: pricingSection,
                  start: "top 70%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          // Glow element parallax
          const glow = pricingSection.querySelector(".absolute");
          if (glow) {
            gsap.to(glow, {
              y: -60,
              scale: 1.3,
              ease: "none",
              scrollTrigger: {
                trigger: pricingSection,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
              },
            });
          }
        }

        // ═══════════════════════════════════════════════════════════
        // 7. FAQ SECTION — Accordion entry + text reveal
        // ═══════════════════════════════════════════════════════════
        const faqSection = document.querySelector("#faq");
        if (faqSection) {
          const heading = faqSection.querySelector("h2");
          if (heading) {
            const words = splitTextIntoWords(heading);
            gsap.fromTo(
              words,
              { y: 60, opacity: 0, rotationX: -80, transformOrigin: "50% 100%" },
              {
                y: 0,
                opacity: 1,
                rotationX: 0,
                stagger: 0.06,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: faqSection,
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          // Accordion card — slide up with 3D perspective
          const accordionCard = faqSection.querySelector("[data-slot='card']") || faqSection.querySelector(".mt-12");
          if (accordionCard) {
            gsap.fromTo(
              accordionCard,
              {
                y: 60,
                opacity: 0,
                scale: 0.94,
                rotationX: 6,
                transformPerspective: 1000,
                transformOrigin: "50% 100%",
              },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                rotationX: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: faqSection,
                  start: "top 70%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        }

        // ═══════════════════════════════════════════════════════════
        // 8. HORIZONTAL SECTION DIVIDERS — Cinematic expand
        // ═══════════════════════════════════════════════════════════
        const sectionBorders = document.querySelectorAll("#solutions, #process section, #testimonials section, #pricing section");
        sectionBorders.forEach((section) => {
          const hasBorderTop = section.classList.contains("border-t") || 
            (section.querySelector(".border-t") !== null);
          if (hasBorderTop) {
            gsap.fromTo(
              section,
              { 
                clipPath: "inset(0 50% 0 50%)",
              },
              {
                clipPath: "inset(0 0% 0 0%)",
                duration: 1.5,
                ease: "power2.inOut",
                scrollTrigger: {
                  trigger: section,
                  start: "top 90%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });

        // ═══════════════════════════════════════════════════════════
        // 9. SPEED LINES — Scroll velocity-reactive background
        // ═══════════════════════════════════════════════════════════
        // Add speed-line overlay divs
        const speedLineContainer = document.createElement("div");
        speedLineContainer.className = "speed-lines-container";
        speedLineContainer.style.cssText = `
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 9990;
          overflow: hidden;
          opacity: 0;
        `;

        for (let i = 0; i < 6; i++) {
          const line = document.createElement("div");
          const xPos = 10 + Math.random() * 80;
          line.style.cssText = `
            position: absolute;
            left: ${xPos}%;
            top: -20%;
            width: 1px;
            height: 40%;
            background: linear-gradient(to bottom, transparent, rgba(0, 240, 255, 0.15), transparent);
            transform: translateX(-50%);
          `;
          speedLineContainer.appendChild(line);
        }
        document.body.appendChild(speedLineContainer);

        // Track scroll velocity
        let lastScrollY = window.scrollY;
        let velocity = 0;

        ScrollTrigger.create({
          onUpdate: (self) => {
            velocity = Math.abs(self.getVelocity());
            const normalizedVelocity = Math.min(velocity / 3000, 1);

            gsap.to(speedLineContainer, {
              opacity: normalizedVelocity * 0.6,
              duration: 0.2,
              overwrite: true,
            });

            // Move lines based on direction
            const lines = speedLineContainer.children;
            const direction = self.direction;
            for (let i = 0; i < lines.length; i++) {
              gsap.to(lines[i], {
                y: direction * normalizedVelocity * 100,
                duration: 0.3,
                overwrite: true,
              });
            }
          },
        });

        // ═══════════════════════════════════════════════════════════
        // 10. FLOATING PARTICLES — Ambient background particles
        // ═══════════════════════════════════════════════════════════
        const particleContainer = document.createElement("div");
        particleContainer.style.cssText = `
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        `;

        for (let i = 0; i < 20; i++) {
          const particle = document.createElement("div");
          const size = 2 + Math.random() * 3;
          particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${Math.random() > 0.5 ? "rgba(0, 240, 255, 0.3)" : "rgba(10, 102, 255, 0.3)"};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
          `;
          particleContainer.appendChild(particle);

          // Animate particles with random floating motion
          gsap.to(particle, {
            y: `random(-60, 60)`,
            x: `random(-40, 40)`,
            opacity: `random(0.1, 0.5)`,
            duration: `random(4, 8)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 3,
          });
        }
        document.body.appendChild(particleContainer);

        // ═══════════════════════════════════════════════════════════
        // 11. SCROLL PROGRESS INDICATOR
        // ═══════════════════════════════════════════════════════════
        const progressBar = document.createElement("div");
        progressBar.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          height: 2px;
          width: 0%;
          background: linear-gradient(90deg, #0A66FF, #00F0FF);
          z-index: 99999;
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(10, 102, 255, 0.3);
          transition: none;
        `;
        document.body.appendChild(progressBar);

        ScrollTrigger.create({
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            gsap.to(progressBar, {
              width: `${self.progress * 100}%`,
              duration: 0.1,
              overwrite: true,
            });
          },
        });

        // Refresh after all animations are set up
        setTimeout(() => ScrollTrigger.refresh(), 100);

        // Cleanup injected elements on revert
        return () => {
          speedLineContainer.remove();
          particleContainer.remove();
          progressBar.remove();
        };
      });

      return () => {
        ctx.revert();
      };
    }, 600);

    return () => {
      clearTimeout(initTimeout);
    };
  }, []);

  return null;
}
