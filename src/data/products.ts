export interface ProductSpecs {
    reflector?: string;
    beamDistance?: string;
    switchType?: string;
    body?: string;
    sideLight?: string;
    features?: string;
}

export interface Product {
    id: number;
    name: string;
    tagline: string;
    specs: ProductSpecs;
    image?: string; // For future backend integration
}

// Initial products list extracted from KAG Batteries Poster
export const initialProducts: Product[] = [
    {
        id: 1,
        name: "Model KB-555",
        tagline: "12000 mAh | 115mm Reflector | 1500m Matchless Long Range",
        specs: {
            reflector: "115mm Aluminium",
            beamDistance: "1500m Matchless",
            body: "Strong Body",
            features: "Power Bank Feature, 3X Life",
        },
        image: "/product-images/51d42876-58d1-4e6d-a7c6-c2d1bea7933a.png"
    },
    {
        id: 2,
        name: "Safari – Model KB-66",
        tagline: "6000 mAh | 12 SMD Side Light | High Power",
        specs: {
            sideLight: "12 SMD LED",
            body: "Strong Body",
            features: "High Power, Long Backup",
        },
        image: "/product-images/0b23afc0-b570-41d4-89ed-29646aa357f1.png"
    },
    {
        id: 3,
        name: "Nano Comfort – Model KB-99",
        tagline: "5000 mAh | 12 SMD Side Light | Comfort Grip",
        specs: {
            sideLight: "12 SMD LED",
            body: "Comfort Grip",
            features: "Lithium-Ion Battery",
        },
        image: "/product-images/88685858-bba5-4c70-a6c8-7b81003aa6fa.png"
    },
    {
        id: 4,
        name: "Sonata – Model KB-770",
        tagline: "4V-5Ah Lead Acid | 75mm Laser Reflector | 1500m Range",
        specs: {
            reflector: "75mm Laser",
            beamDistance: "1500m",
            sideLight: "12 SMD LED",
            body: "Lead Acid Battery",
            features: "Double Switch",
        },
        image: "/product-images/efdf10ce-60c0-483c-8cba-31168e514c54.png"
    },
    {
        id: 5,
        name: "Curve – Model KB-55",
        tagline: "5000 mAh | Laser LED | Long Range",
        specs: {
            reflector: "Laser Reflector",
            body: "Curve Design",
            features: "Lithium-Ion Battery",
        },
        image: "/product-images/3be40299-0ee8-43e4-b296-5302a4496ff5.png"
    },
    {
        id: 6,
        name: "Deepshikha – Model KE450",
        tagline: "4000 mAh | 3X Life | Reliable Performance",
        specs: {
            body: "Durable",
            features: "3X Battery Life, Lithium-Ion",
        },
        image: "/product-images/8aa0b7c5-be6d-45c4-8ed3-3b5bdb725d74.png"
    },
    {
        id: 7,
        name: "Jio – Model KB-88",
        tagline: "5000 mAh | High Brightness | Long Backup",
        specs: {
            body: "Strong Body",
            features: "Lithium-Ion Battery",
        },
    },
    {
        id: 8,
        name: "Jio – Model KB-880",
        tagline: "4V-9Ah Lead Acid | Heavy Duty | Long Backup",
        specs: {
            body: "Heavy Duty",
            features: "Lead Acid Battery, Double Power",
        },
    },
    {
        id: 9,
        name: "Star Beam – Model KB-22",
        tagline: "6000 mAh | Long Range | Focused Beam",
        specs: {
            beamDistance: "Long Range",
            body: "Strong Body",
            features: "Lithium-Ion Battery",
        },
        image: "/product-images/k22.png"
    },
    {
        id: 10,
        name: "Star Beam – Model KB-220",
        tagline: "5000 mAh | Compact Power | Focused Beam",
        specs: {
            beamDistance: "Focused",
            body: "Compact",
            features: "Lithium-Ion Battery",
        },
        image: "/product-images/220.png"
    },
    {
        id: 11,
        name: "Tez – Model KB-121",
        tagline: "4000 mAh | 97mm Aluminium Reflector | 1500m Range",
        specs: {
            reflector: "97mm Aluminium",
            beamDistance: "1500m",
            sideLight: "12 SMD LED",
            body: "Strong Body",
            features: "Fast Action Switch",
        },
        image: "/product-images/d78c23f6-3f15-4593-96ec-ef729be4d229.png"
    },
    {
        id: 12,
        name: "Tez – Model KB-120",
        tagline: "4V-3Ah Lead Acid | Economical | Strong Beam",
        specs: {
            body: "Standard",
            features: "Lead Acid Battery",
        },
        image: "/product-images/abbb458f-cafa-4637-aa51-5895a0acae51.png"
    },
    {
        id: 13,
        name: "Commando – Model KB-44",
        tagline: "6000 mAh | Tactical Design | High Performance",
        specs: {
            body: "Tactical Shockproof",
            features: "Lithium-Ion Battery",
        },
        image: "/product-images/63b2c61a-8d5e-4629-8eeb-9cc60a0455ad.png"
    },
    {
        id: 14,
        name: "Nano Gold – Model KB-11",
        tagline: "5000 mAh | 55mm Laser Reflector | 3X Life",
        specs: {
            reflector: "55mm Laser",
            beamDistance: "Long Range",
            body: "ABS Body",
            features: "3X Battery Life",
        },
        image: "/product-images/0cc83f6f-01ac-4ff0-9357-53bb42c2d7f1.png"
    },
    {
        id: 15,
        name: "Nano Classic – Model KB-110",
        tagline: "4V-4.5Ah Lead Acid | Classic Design | Reliable",
        specs: {
            body: "Classic PP",
            features: "Lead Acid Battery",
        },
        image: "/product-images/97210700-73d9-42bd-a663-ba7f999a096e.png"
    },
    {
        id: 16,
        name: "Lockdown – Model KB-130",
        tagline: "4V-3Ah Lead Acid | Security Torch | Long Beam",
        specs: {
            beamDistance: "Long Beam",
            body: "Solid Grip",
            features: "Lead Acid Battery",
        },
        image: "/product-images/da0dc403-f103-4957-8774-32bec4ca6213.png"
    },
    {
        id: 17,
        name: "Mini Hungama – Model KB-140",
        tagline: "4V-3Ah Lead Acid | Compact | High Beam",
        specs: {
            body: "Compact",
            features: "Lead Acid Battery, Easy Carry",
        },
        image: "/product-images/6483f3d0-fee8-4aa0-a200-310f3b43e68a.png"
    },
];
