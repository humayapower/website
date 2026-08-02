// Feature descriptors are qualitative on purpose. No timings, percentages or

import { Solution } from "@/components/solutions/solution-tabs";

// cycle counts until those figures are confirmed as real product claims.
export const solutions: Solution[] = [
  {
    id: "ev-batteries",
    tabLabel: "EV Batteries",
    name: "Li-ion EV Batteries",
    description:
      "High-performance Li-ion batteries for electric vehicles, built for efficiency and durability.",
    features: ["Fast-charging", "Lightweight", "Long-lasting"],
    price: "₹30,000",
    image: "/EVbattery.jpg",
    alt: "Li-ion EV battery pack",
    cta: "Enquire",
  },
  {
    id: "energy-storage",
    tabLabel: "Energy Storage",
    name: "Li-ion Storage Batteries",
    description: "Reliable energy storage for residential and commercial use.",
    features: ["Scalable", "Grid-compatible", "Residential or commercial"],
    price: "₹12,000",
    image: "/storage-battery.jpeg",
    alt: "Li-ion storage battery unit",
    cta: "Enquire",
  },
  {
    id: "rentals",
    tabLabel: "Rentals",
    name: "Rental Batteries",
    description:
      "Affordable rental packs for EV drivers, keeping journeys uninterrupted.",
    features: ["No upfront cost", "Serviced by us", "Swap at partner stations"],
    price: "₹3,000",
    priceSuffix: "/month",
    image: "/battery-rental.jpeg",
    alt: "Rental battery pack for electric vehicles",
    cta: "Enquire",
  },
  {
    id: "custom-packs",
    tabLabel: "Custom Packs",
    name: "Customised Battery Packs",
    description:
      "Custom power, voltage, output, connection type and cell type. Built for anything from transport fleets to personal use.",
    features: [
      "Specified to your application",
      "Choice of cell type",
      "Built to order",
    ],
    price: "₹2,000 to ₹50,000",
    priceSuffix: " per pack",
    image: "/custom-battery-1.jpeg",
    alt: "Custom battery pack assembly",
    secondaryImage: "/custom-battery-2.jpeg",
    secondaryAlt: "Custom battery pack with connectors",
    cta: "Request a quote",
  },
];
