"use client";

import React from "react";

interface ProductSpecs {
  reflector?: string;
  beamDistance?: string;
  switchType?: string;
  body?: string;
  sideLight?: string;
  features?: string;
}

interface Product {
  id: number;
  name: string;
  tagline: string; // top line: mAh | reflector | range
  specs: ProductSpecs;
}

const products: Product[] = [
  {
    id: 1,
    name: "Curve – Model L55",
    tagline: "5000 mAh | 75mm Laser Reflector | 1500m Range",
    specs: {
      reflector: "75mm Laser",
      beamDistance: "1500m Long-Range Focus",
      switchType: "Double Switch",
      body: "ABS Shockproof",
      sideLight: "Double Tube (10 hrs)",
      features: "Solar Compatible",
    },
  },
  {
    id: 2,
    name: "Safari – Model L66",
    tagline: "6000 mAh | 97mm Reflector | 2000m Beam",
    specs: {
      reflector: "97mm",
      beamDistance: "2000m Beam",
      switchType: "Heavy-Duty Switch",
      body: "ABS Body",
      sideLight: "12 SMD LED (10 hrs)",
      features: "Solar Compatible",
    },
  },
  {
    id: 3,
    name: "Star Beam – Model L22",
    tagline: "6000 mAh | 97mm Reflector | 2000m Long-Range",
    specs: {
      reflector: "97mm",
      beamDistance: "2000m Long-Range",
      sideLight: "12 SMD LED (8 hrs)",
      body: "PP Heavy Body",
      features: "Solar Compatible",
    },
  },
  {
    id: 4,
    name: "Deepshikha Eco – Model L33",
    tagline: "4000 mAh | 97mm Reflector | 1500m Beam",
    specs: {
      reflector: "97mm",
      beamDistance: "1500m Beam",
      sideLight: "12 SMD LED (8 hrs)",
      body: "PP Body",
      features: "Solar Compatible, Eco Friendly",
    },
  },
  {
    id: 5,
    name: "Jio – Model L88",
    tagline: "5000 mAh | 97mm Reflector | 1500m Range",
    specs: {
      reflector: "97mm",
      beamDistance: "1500m Range",
      sideLight: "20 SMD LED Side Light",
      body: "PP Body",
      features: "Balanced Brightness, Solar Compatible",
    },
  },
  {
    id: 6,
    name: "Jio – Model 880",
    tagline: "Lead Acid Battery | 97mm Reflector | 1500m Beam",
    specs: {
      reflector: "97mm",
      beamDistance: "1500m Beam",
      sideLight: "20 SMD LED",
      body: "PP Body",
      features: "Lead-Acid, Copper Charger",
    },
  },
  {
    id: 7,
    name: "Nano Gold – Model L11",
    tagline: "5000 mAh | 55mm Reflector | 1500m Range",
    specs: {
      reflector: "55mm",
      beamDistance: "1500m Range",
      switchType: "Double Switch",
      body: "ABS Shockproof",
      sideLight: "12 SMD LED (10 hrs)",
      features: "Easy Battery Change",
    },
  },
  {
    id: 8,
    name: "Commando – Model L44",
    tagline: "4000 mAh | 75mm Reflector | 1500m Long Beam",
    specs: {
      reflector: "75mm",
      beamDistance: "1500m Long Beam",
      switchType: "Double Switch",
      body: "ABS Shockproof",
      sideLight: "12 SMD LED (10 hrs)",
      features: "Solar Compatible, Tactical Design",
    },
  },
  {
    id: 9,
    name: "Sonata – Model L77",
    tagline: "6V 5Ah Lead Acid | 75mm Reflector | 1500m Long Range",
    specs: {
      reflector: "75mm",
      beamDistance: "1500m Long Range",
      sideLight: "12 SMD LED (10 hrs)",
      body: "Strong PP Body",
      features: "Easy Battery Replace Cover",
    },
  },
  {
    id: 10,
    name: "Nano Comfort – Model L99",
    tagline: "5000 mAh | 75mm Reflector | 1500m Long-Range Focus",
    specs: {
      reflector: "75mm",
      beamDistance: "1500m Long-Range Focus",
      switchType: "Double Switch",
      body: "ABS Body",
      sideLight: "Double Tube Side Light (10 hrs)",
      features: "Comfort Grip",
    },
  },
  {
    id: 11,
    name: "Lockdown – Model 130",
    tagline: "97mm Reflector | 1500m Beam | 12 SMD Side LED",
    specs: {
      reflector: "97mm",
      beamDistance: "1500m Beam",
      sideLight: "12 SMD LED (6 hrs)",
      body: "Strong PP Body",
      features: "Security Focused",
    },
  },
  {
    id: 12,
    name: "Mini Hungama – Model 140",
    tagline: "97mm Reflector | 1500m Long Focus | 10 SMD Side LED",
    specs: {
      reflector: "97mm",
      beamDistance: "1500m Long Focus",
      sideLight: "10 SMD LED (6 hrs)",
      body: "Strong PP Body",
      features: "Compact, Emergency Use",
    },
  },
  {
    id: 13,
    name: "Tez – Model L121",
    tagline: "4000 mAh | 97mm Reflector | 1500m Long Beam",
    specs: {
      reflector: "97mm",
      beamDistance: "1500m Long Beam",
      sideLight: "12 SMD LED (6 hrs)",
      body: "Strong PP Body",
      features: "Fast-Action Emergency Torch",
    },
  },
  {
    id: 14,
    name: "Nano Classic – Model L15",
    tagline: "Lithium Torch | Reflector Focus | Strong ABS/PP Body",
    specs: {
      reflector: "Focused Reflector",
      body: "ABS/PP Body",
      features: "Classic Lithium Torch, Reliable",
    },
  },
  {
    id: 15,
    name: "AA Cell Torch",
    tagline: "Models A/B/C/D | Standard AA Battery Torches",
    specs: {
      body: "Lightweight Body",
      features: "AA Battery, Travel Friendly",
    },
  },
  {
    id: 16,
    name: "Surya – Model L555",
    tagline: "Long-Range Reflector Torch",
    specs: {
      reflector: "Long-Range Reflector",
      beamDistance: "Extended Distance",
      features: "Solar Compatible, Professional Use",
    },
  },
  {
    id: 17,
    name: "Roxy 6V – Model 160",
    tagline: "6V Emergency-Type Reflector Torch",
    specs: {
      reflector: "Emergency Reflector",
      features: "Crisis Lighting, Compact",
    },
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-green-700 uppercase">
            Products
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Product Range
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600">
            17 rechargeable torch models designed for real Indian conditions –
            from farmers and households to shops and professional users.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col"
            >
              {/* Top header band */}
              <div className="bg-slate-900 h-24 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shadow-md">
                  <span className="text-2xl">🔦</span>
                </div>
              </div>

              {/* Main content */}
              <div className="px-6 pt-4 pb-5 flex flex-col flex-grow">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">
                  {product.tagline}
                </p>

                <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 text-xs md:text-sm text-gray-700 flex-grow">
                  {Object.entries(product.specs).map(([label, value]) =>
                    value ? (
                      <div
                        key={label}
                        className="flex justify-between mb-2 last:mb-0"
                      >
                        <span className="font-semibold text-gray-800">
                          {label}:
                        </span>
                        <span className="ml-2 text-right">{value}</span>
                      </div>
                    ) : null
                  )}
                </div>
              </div>

              {/* Bottom button */}
              <div className="px-6 pb-5">
                <button
                  className="w-full py-2.5 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold shadow-sm transition"
                  onClick={() => {
                    const phone = "919826918636";
                    const msg = encodeURIComponent(
                      `Hi, I want a quote for ${product.name}`
                    );
                    const link = `https://wa.me/${phone}?text=${msg}`;
                    window.open(link, "_blank");
                  }}
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}