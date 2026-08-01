import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { syne } from "../font";
import Reveal from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Battery Solutions",
  description:
    "Li-ion EV batteries, rental packs, storage batteries, custom packs and swap station partnerships. Transparent pricing, built and serviced in India.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Battery Solutions",
    description:
      "Li-ion EV batteries, rental packs, storage batteries, custom packs and swap station partnerships.",
    url: "/solutions",
    images: [{ url: "/EVbattery.jpg", width: 1800, height: 1092 }],
  },
};

const products = [
  {
    name: "Li-ion EV Batteries",
    price: "₹30,000",
    body: "High-performance Li-ion batteries for electric vehicles, built for efficiency and durability.",
    image: "/EVbattery.jpg",
    alt: "Li-ion EV battery pack",
  },
  {
    name: "Li-ion Storage Batteries",
    price: "₹12,000",
    body: "Reliable energy storage for residential and commercial use.",
    image: "/storage-battery.jpeg",
    alt: "Li-ion storage battery unit",
  },
  {
    name: "Rental Batteries",
    price: "₹3,000",
    priceSuffix: "/month",
    body: "Affordable rental packs for EV drivers, keeping journeys uninterrupted.",
    image: "/battery-rental.jpeg",
    alt: "Rental battery pack for electric vehicles",
  },
];

// Real published prices, so these are eligible for product rich results.
const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    ...products.map((product, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.body,
        image: `https://humayapower.in${product.image}`,
        brand: { "@type": "Brand", name: "Humaya Power" },
        offers: {
          "@type": "Offer",
          price: product.price.replace(/[₹,]/g, ""),
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: "https://humayapower.in/solutions",
        },
      },
    })),
    {
      "@type": "ListItem",
      position: products.length + 1,
      item: {
        "@type": "Product",
        name: "Customised Battery Packs",
        description:
          "Custom power, voltage, output, connection type and cell type, built for transport fleets or personal use.",
        brand: { "@type": "Brand", name: "Humaya Power" },
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "2000",
          highPrice: "50000",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: "https://humayapower.in/solutions",
        },
      },
    },
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* Hero. Editorial type block, distinct from the other page tops. */}
      <section className="bg-slate-950 px-5 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <h1
              className={`${syne.className} text-4xl font-bold leading-[1.15] pb-1 tracking-tight text-white sm:text-5xl lg:col-span-7 lg:text-6xl`}
            >
              Explore our battery solutions
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-300 lg:col-span-5 lg:self-end">
              Power for the vehicles, homes and businesses we work with, priced
              openly and serviced in India.
            </p>
          </div>
        </div>
      </section>

      {/* Products. Card grid, one layout family, no zigzag. */}
      <section className="bg-white px-5 py-24 md:px-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal
                key={product.name}
                delay={i * 0.08}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2
                    className={`${syne.className} text-xl font-bold leading-[1.25] pb-0.5 tracking-tight text-slate-900`}
                  >
                    {product.name}
                  </h2>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-600">
                    {product.body}
                  </p>
                  <p className="mt-6 text-2xl font-bold text-slate-900">
                    {product.price}
                    {product.priceSuffix ? (
                      <span className="text-base font-medium text-slate-500">
                        {product.priceSuffix}
                      </span>
                    ) : null}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex w-fit rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:scale-[0.98]"
                  >
                    Enquire
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom packs. Full-width split, breaking the grid rhythm. */}
      <section className="bg-slate-50 px-5 py-24 md:px-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                className={`${syne.className} text-3xl font-bold leading-[1.2] pb-1 tracking-tight text-slate-900 sm:text-4xl`}
              >
                Customised battery packs
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Custom power, voltage, output, connection type and cell type.
                Built for anything from transport fleets to personal use.
              </p>
              <p className="mt-6 text-2xl font-bold text-slate-900">
                ₹2,000 to ₹50,000{" "}
                <span className="text-base font-medium text-slate-500">
                  per pack
                </span>
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex rounded-lg bg-orange-600 px-7 py-3 font-medium text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:scale-[0.98]"
              >
                Request a quote
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/custom-battery-1.jpeg"
                  alt="Custom battery pack assembly"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/custom-battery-2.jpeg"
                  alt="Custom battery pack with connectors"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Swap station partnership. Photographic band, third layout family. */}
      <section className="relative overflow-hidden px-5 py-28 md:px-12 lg:px-8">
        <Image
          src="/swap-station.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <h2
              className={`${syne.className} text-3xl font-bold leading-[1.2] pb-1 tracking-tight text-white sm:text-4xl`}
            >
              Partner with us on a swap station
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Build a network of battery swap stations for quick, efficient
              exchanges. We help with siting, hardware and ongoing service.
            </p>
            <p className="mt-6 text-2xl font-bold text-white">
              ₹2 Lakh to ₹8 Lakh{" "}
              <span className="text-base font-medium text-slate-400">
                per station
              </span>
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-lg bg-orange-600 px-7 py-3 font-medium text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 active:scale-[0.98]"
            >
              Partner with us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
