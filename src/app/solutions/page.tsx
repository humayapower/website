import type { Metadata } from "next";
import Image from "next/image";
import { CtaSplit } from "@/components/cta/cta-banner";
import Reveal from "@/components/motion/reveal";
import SlowZoom from "@/components/motion/slow-zoom";
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

const faqs = [
  {
    q: "How do rentals work?",
    a: "There is no upfront cost. We service the packs, and you can swap them at partner stations so journeys are not interrupted.",
  },
  {
    q: "Can I get a battery pack made to my specification?",
    a: "Yes. Tell us the power, voltage, output, connection and cell type you need and we build it to order, for fleets or personal use.",
  },
  {
    q: "What does it cost to open a swap station?",
    a: "Partnerships run from ₹2 Lakh to ₹8 Lakh per station. We help with siting, hardware and ongoing service.",
  },
  {
    q: "How do I get a quote?",
    a: "Use the enquiry button on any product, or call or WhatsApp us. We usually reply within two working days.",
  },
];

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
        <SlowZoom className="absolute inset-0">
          <Image
            src="/StoreDot.jpg"
            alt="Lithium-ion cells on the assembly bench"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </SlowZoom>
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

      {/* Questions the data can answer today. Nothing here is invented: add
          answers for GST, deposits and city coverage once confirmed. */}
      <section className="bg-slate-50 px-5 py-16 md:px-12 md:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2
              className={`${syne.className} pb-[0.16em] text-2xl font-bold leading-[1.3] tracking-tight text-slate-900 sm:text-3xl`}
            >
              Common questions
            </h2>
            <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="text-xl leading-none text-orange-600 transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSplit
        image="/swap-station.jpg"
        alt="Battery packs on the rack at a partnered swap station"
        title="Partner with us on a swap station"
        body="Build a network of battery swap stations for quick, efficient exchanges."
        points={["Siting support", "Hardware supplied", "Ongoing service"]}
        price="₹2 Lakh to ₹8 Lakh"
        priceNote="per station"
        href="/contact?interest=swap"
        label="Partner with us"
      />
    </>
  );
}
