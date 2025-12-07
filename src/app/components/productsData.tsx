// src/data/productsData.js
// Yahi pe tumhare saare products ka simple data hoga
// Aage jaake bas yahi file edit karni padegi

export const products = [
  {
    id: 1,
    name: "Model 998 – Max Power",
    subtitle: "7500 mAh • Heavy Duty • Long Range",
    category: "Heavy Duty Torch",
    highlights: [
      "Big reflector with focused long beam",
      "Up to 2000m range (ideal for open fields)",
      "Metal / strong body for rough use",
    ],
    specs: {
      Battery: "7500 mAh rechargeable",
      Body: "Metal / strong body",
      "Beam Range": "Approx. 2000m (open area)",
      Usage: "Farmers, security, industrial use",
    },
    bestFor: "Jaha long distance light chahiye ho (khet, plot, factory gate).",
  },
  {
    id: 2,
    name: "Model 777 – Farmer Special",
    subtitle: "Strong Light • Long Backup",
    category: "Farmer Torch",
    highlights: [
      "Wide beam for covering more area",
      "Comfortable grip for long time use",
      "Shock-resistant design",
    ],
    specs: {
      Battery: "High backup battery",
      Body: "Durable plastic body",
      "Beam Type": "Wide + medium range",
      Usage: "Kisan, warehouse, night checking.",
    },
    bestFor: "Daily khet ki dekh-rekh, raat me kaam, gaon me general use.",
  },
  {
    id: 3,
    name: "Shop Guard – Model SG5",
    subtitle: "Counter Use • Backup Light",
    category: "Shop / Home Torch",
    highlights: [
      "Compact design, easy to keep on counter",
      "Good brightness for shop area",
      "Low maintenance, easy to charge",
    ],
    specs: {
      Battery: "Rechargeable battery",
      Body: "Compact, light weight",
      "Ideal Use": "Shop counter / ghar ke liye",
      Backup: "Enough for daily load-shedding use",
    },
    bestFor: "Dukaan, ghar, office – backup light ke liye.",
  },
  {
    id: 4,
    name: "Multi Light – Side + Front",
    subtitle: "Dual Light • Utility Torch",
    category: "Multi-Purpose Torch",
    highlights: [
      "Front focus + side panel light",
      "Can work as hand torch + emergency lamp",
      "Good for indoor + outdoor mix use",
    ],
    specs: {
      Battery: "Rechargeable",
      "Light Modes": "Front focus + side light",
      Usage: "Household, shop, travel",
      "Special": "Can be kept standing as lamp",
    },
    bestFor: "Jo log ek hi torch se sab kaam karna chahte hain.",
  },
];