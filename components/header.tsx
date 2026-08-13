"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-50 w-full px-4 top-0 left-0 right-0"
      >
        <div
          className={cn(
            "mx-auto mt-4 px-6 transition-all duration-500 rounded-2xl border backdrop-blur-md",
            isScrolled
              ? "bg-black/95 border-slate-800/80 max-w-4xl py-2.5 shadow-lg shadow-black/40"
              : "bg-black/50 border-slate-900/40 max-w-5xl py-3.5"
          )}
        >
          <div className="relative grid grid-cols-2 lg:grid-cols-3 items-center w-full">
            {/* Column 1: Logo and Name (Left-aligned) */}
            <div className="flex justify-start items-center min-w-0">
              <Link href="/" className="flex items-center space-x-3 min-w-0 group">
                {/* Premium Logo Container */}
                <div className="relative flex-shrink-0">
                  {/* Outer glow ring */}
                  <div className="absolute -inset-1 bg-gradient-to-tr from-[#2563EB]/30 via-[#38BDF8]/20 to-[#6366F1]/30 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Logo wrapper with premium border */}
                  <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-white/10 bg-[#0a0f1e] group-hover:border-[#38BDF8]/40 transition-all duration-500 shadow-lg shadow-black/50">
                    <Image
                      src="/logos/Averza.jpg"
                      alt="AVERZA logo"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover scale-[1.15]"
                      priority
                    />
                    {/* Subtle inner overlay to blend edges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
                {/* Brand text */}
                <div className="flex flex-col leading-none flex-shrink-0">
                  <span className="text-sm sm:text-[15px] font-black tracking-tight text-white uppercase">
                    AVERZA
                  </span>
                  <span className="text-[7px] sm:text-[8px] font-semibold tracking-[0.14em] text-[#38BDF8]/70 uppercase mt-0.5">
                    Build · Transform · Grow
                  </span>
                </div>
              </Link>
            </div>

            {/* Column 2: Desktop Menu links (Centered) */}
            <div className="hidden lg:flex justify-center">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white font-medium block duration-150 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Spacer / Mobile Toggle Button (Right-aligned) */}
            <div className="flex justify-end items-center">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 block cursor-pointer p-2 lg:hidden text-white hover:text-blue-400"
              >
                {menuState ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Panel */}
          {menuState && (
            <div className="lg:hidden mt-2 pb-6 border-t border-slate-800 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
              <ul className="space-y-4 text-base">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className="text-slate-300 hover:text-white block font-medium duration-150"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
