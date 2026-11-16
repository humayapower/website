import type { Solution } from "@/components/solutions/solution-tabs";

// Descriptors are qualitative on purpose. No timings, percentages, voltages or
// cycle counts until those figures are confirmed as real product claims. Add
// confirmed rows to `specs` as they arrive.
export const solutions: Solution[] = [
  {
    id: "ev-batteries",
    interest: "ev",
    tabLabel: "EV Batteries",
    name: "Li-ion EV Batteries",
    description:
      "High-performance Li-ion batteries for electric vehicles, built for efficiency and durability.",
    features: ["Fast-charging", "Lightweight", "Long-lasting"],
    specs: [
      ["Made for", "Electric vehicles"],
      ["Chemistry", "Lithium-ion"],
      ["Charging", "Fast-charging"],
      ["Build", "Lightweight, durable"],
    ],
    priceLabel: "From",
    price: "₹30,000",
    image: "/EVbattery.jpg",
    alt: "Li-ion EV battery pack",
    cta: "Enquire about EV batteries",
  },
  {
    id: "energy-storage",
    interest: "storage",
    tabLabel: "Energy Storage",
    name: "Li-ion Storage Batteries",
    description: "Reliable energy storage for residential and commercial use.",
    features: ["Scalable", "Grid-compatible", "Residential or commercial"],
    specs: [
      ["Made for", "Homes and businesses"],
      ["Chemistry", "Lithium-ion"],
      ["Scaling", "Add capacity as you grow"],
      ["Grid", "Grid-compatible"],
    ],
    priceLabel: "From",
    price: "₹12,000",
    image: "/storage-battery.jpeg",
    alt: "Li-ion storage battery unit",
    cta: "Enquire about storage",
  },
  {
    id: "rentals",
    interest: "rental",
    tabLabel: "Rentals",
    name: "Rental Batteries",
    description:
      "Affordable rental packs for EV drivers, keeping journeys uninterrupted.",
    features: ["No upfront cost", "Serviced by us", "Swap at partner stations"],
    specs: [
      ["Made for", "EV drivers"],
      ["Upfront cost", "None"],
      ["Servicing", "Handled by us"],
      ["Swapping", "At partner stations"],
    ],
    priceLabel: "From",
    price: "₹3,000",
    priceSuffix: "/month",
    image: "/battery-rental.jpeg",
    alt: "Rental battery pack for electric vehicles",
    cta: "Enquire about rentals",
  },
  {
    id: "custom-packs",
    interest: "custom",
    tabLabel: "Custom Packs",
    name: "Customised Battery Packs",
    description:
      "Custom power, voltage, output, connection type and cell type. Built for anything from transport fleets to personal use.",
    features: [
      "Specified to your application",
      "Choice of cell type",
      "Built to order",
    ],
    specs: [
      ["You choose", "Power, voltage and output"],
      ["Connection", "Type to suit your application"],
      ["Cells", "Choice of cell type"],
      ["Built", "To order"],
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
