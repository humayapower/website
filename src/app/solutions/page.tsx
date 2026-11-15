import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/reveal";
import SolutionTabs from "@/components/solutions/solution-tabs";
import { syne } from "../font";
import { solutions } from "./data";

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
// Real published prices, so these are eligible for product rich results.
const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: solutions.map((solution, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: solution.name,
      description: solution.description,
      image: `https://humayapower.in${solution.image}`,
      brand: { "@type": "Brand", name: "Humaya Power" },
      offers:
        solution.id === "custom-packs"
          ? {
              "@type": "AggregateOffer",
              lowPrice: "2000",
              highPrice: "50000",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: "https://humayapower.in/solutions",
            }
          : {
              "@type": "Offer",
              price: solution.price.replace(/[₹,]/g, ""),
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: "https://humayapower.in/solutions",
            },
    },
  })),
};

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD built from static site data, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Page top: one banner, type over the photograph. */}
      <section className="relative flex min-h-[52vh] items-end overflow-hidden pt-24 md:min-h-[58vh]">
        <Image
          src="/StoreDot.jpg"
          alt="Lithium-ion cells on the assembly bench"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/25" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 md:px-12 md:pb-16 lg:px-8">
          <h1
            className={`${syne.className} max-w-3xl text-4xl font-bold leading-[1.25] pb-[0.18em] tracking-tight text-white sm:text-5xl lg:text-6xl`}
          >
            Explore our battery solutions
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200">
            Power for the vehicles, homes and businesses we work with, priced
            openly and serviced in India.
          </p>
        </div>
      </section>

      {/* Tabbed browser: pick a category, see one product at a time. */}
      <SolutionTabs solutions={solutions} fontClass={syne.className} />

      {/* Swap station partnership. Photographic band, distinct family. */}
      <section className="relative overflow-hidden px-5 py-24 md:px-12 md:py-28 lg:px-8">
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
              className={`${syne.className} text-3xl font-bold leading-[1.3] pb-[0.16em] tracking-tight text-white sm:text-4xl`}
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
