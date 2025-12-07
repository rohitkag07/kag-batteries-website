"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 backdrop-blur-xl transition-all duration-300
        bg-slate-950/90 border-b border-white/10
        ${scrolled ? "shadow-md" : "shadow-none"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo + Brand */}
        <Link href="#top" className="flex items-center gap-3">
          <div className="relative h-11 w-11 bg-white rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/logo.png"
              alt="Kag Batteries logo"
              fill
              priority
              className="object-contain p-1.5"
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm md:text-base font-semibold text-white">
              Kag Batteries
            </p>
            <p className="text-[11px] md:text-xs text-gray-300">
              Premium LED Torches &amp; Batteries
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-100">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white hover:underline underline-offset-4 transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-900 shadow-sm hover:bg-white transition"
          >
            Become a Dealer
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {open ? (
            <span className="text-lg">✕</span>
          ) : (
            <span className="text-lg">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-slate-950/95 border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 py-3 space-y-1 text-sm text-gray-100">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-1.5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm"
            >
              Become a Dealer
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}