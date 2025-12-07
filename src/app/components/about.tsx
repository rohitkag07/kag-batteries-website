"use client";

import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-green-700 uppercase">
            About Us
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
            Lighting India’s Journey Since 1997
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
            KagBatteries was founded with a simple belief — every home, farmer,
            and proud Indian deserves reliable and long-lasting light.  
            From a small manufacturing setup in 1997 to becoming one of India’s
            most trusted names in torches and batteries, our journey has always
            been shaped by dedication, honesty, and real Indian needs.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE: Story, Values, Products */}
          <div className="space-y-10">

            {/* Story Block */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Built for Real Indian Conditions
              </h3>

              <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                For over 25 years, KagBatteries has been a part of daily life
                across villages, towns, farms, shops, and homes. From Kaveri and
                Deepshika torches to Nano and Roxy batteries, our products are
                trusted by people who depend on light for work, safety, and
                family needs.
              </p>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Every product is engineered for heat, dust, long working hours,
                rough handling, and real farm environments — because for our
                customers, reliable light is not a luxury, it is a necessity.
              </p>
            </div>

            {/* Product Range */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                30+ Products, One Commitment — Dependable Power
              </h4>

              <p className="text-xs md:text-sm text-gray-600 mb-3">
                We proudly manufacture and assemble a wide range of torches:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 text-xs md:text-sm text-gray-700">
                <li>• Heavy-duty torches</li>
                <li>• LED torches</li>
                <li>• Lead-acid battery torches</li>
                <li>• Household torches</li>
                <li>• Farm-use torches</li>
                <li>• Li-ion battery torches</li>
              </ul>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-100 rounded-2xl p-4 bg-white">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2">
                  Vision
                </p>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  To be India’s most trusted farmer-first torch and battery
                  brand — delivering strong, reliable and innovative power
                  solutions for real Indian needs.
                </p>
              </div>

              <div className="border border-gray-100 rounded-2xl p-4 bg-white">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2">
                  Mission
                </p>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  To build durable, affordable and high-performance torches that
                  truly help farmers, households and shops across India.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="text-center bg-green-50 rounded-xl py-3">
                <p className="text-lg font-bold text-green-800">25+</p>
                <p className="text-[11px] text-gray-600">Years of Trust</p>
              </div>

              <div className="text-center bg-green-50 rounded-xl py-3">
                <p className="text-lg font-bold text-green-800">30+</p>
                <p className="text-[11px] text-gray-600">Active Products</p>
              </div>

              <div className="text-center bg-green-50 rounded-xl py-3">
                <p className="text-lg font-bold text-green-800">1,00,000+</p>
                <p className="text-[11px] text-gray-600">Units / Year</p>
              </div>

              <div className="text-center bg-green-50 rounded-xl py-3">
                <p className="text-[11px] font-bold text-green-800">Farmer-First</p>
                <p className="text-[11px] text-gray-600">Philosophy</p>
              </div>
            </div>

            {/* Dealer Invitation */}
            <div className="border-l-4 border-green-600 pl-4">
              <p className="text-xs md:text-sm text-gray-700">
                With rising demand for Kaveri, Deepshika, Nano, Roxy and our new
                Li-ion torch range, we are expanding our dealer network across India.
              </p>
              <p className="mt-1 text-xs md:text-sm font-semibold text-gray-900">
                Join KagBatteries — a brand built on quality, value and long-term trust.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE – Directors + Factory Images */}
          <div className="space-y-4">

            <div className="grid grid-cols-2 gap-4">

              {/* Main directors photo */}
              <div className="col-span-2 rounded-2xl overflow-hidden border shadow-sm">
                <img
                  src="/directors-1.jpg"
                  alt="Directors"
                  className="w-full h-64 md:h-72 object-cover"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border shadow-sm">
                <img
                  src="/directors-2.jpg"
                  alt="Directors with products"
                  className="w-full h-36 md:h-40 object-cover"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border shadow-sm">
                <img
                  src="/factory-1.jpg"
                  alt="Factory production"
                  className="w-full h-36 md:h-40 object-cover"
                />
              </div>
            </div>

            {/* Wide factory photo */}
            <div className="rounded-2xl overflow-hidden border shadow-sm">
              <img
                src="/factory-2.jpg"
                alt="Factory assembly area"
                className="w-full h-40 md:h-48 object-cover"
              />
            </div>

            <p className="text-[11px] text-gray-500">
              From leadership to shop floor — every person at KagBatteries works
              with one purpose: delivering light India can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}