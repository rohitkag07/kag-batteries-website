"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gray-900"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg"
          alt="Kag Batteries factory building"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55 md:bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:py-32">
        <div className="max-w-2xl md:max-w-3xl">
          {/* Top badge */}
          <div className="mb-4 inline-flex items-center rounded-full bg-green-500/90 px-3 py-1 text-[11px] font-semibold text-white shadow">
            <span>Since 1997 · Farmer-first torch brand</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            Kag Batteries – Premium LED Torches
          </h1>

          <p className="text-sm md:text-lg text-gray-100 leading-relaxed mb-6 md:mb-8">
            Long-range, durable and reliable torches designed for households,
            farms and professional use. Powerful beams, strong bodies and
            trusted performance for real Indian conditions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-7">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-green-500 px-5 py-2.5 text-sm md:text-base font-semibold text-white shadow-md hover:bg-green-600 transition"
            >
              View Product Range
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2.5 text-sm md:text-base font-semibold text-white hover:bg-white hover:text-gray-900 transition"
            >
              Contact for Orders
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-100">
            <div className="rounded-full bg-white/10 px-3 py-1">
              25+ years of manufacturing experience
            </div>
            <div className="rounded-full bg-white/10 px-3 py-1">
              30+ torch & battery models
            </div>
            <div className="rounded-full bg-white/10 px-3 py-1">
              Built for farmers, shops & homes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}