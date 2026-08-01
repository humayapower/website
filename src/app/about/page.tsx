import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { syne } from "../font";
import Reveal from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Humaya Power extends the lifecycle of Li-ion batteries, making them a safer and more affordable alternative to lead-acid. Our story, mission and impact.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us",
    description:
      "Extending the lifecycle of Li-ion batteries for a safer, more affordable alternative to lead-acid.",
    url: "/about",
    images: [{ url: "/swap-station.jpg", width: 1800, height: 1199 }],
  },
};

const impact = [
  {
    figure: "1,000,000+",
    unit: "km",
    label: "driven on our remanufactured Li-ion packs",
  },
  { figure: "10+", unit: "cities", label: "reached across India" },
  { figure: "5", unit: "stations", label: "swap partners live today" },
];

export default function AboutUs() {
  return (
    <>
      {/* Hero. Split composition, distinct from the other page tops. */}
      <section className="bg-slate-950 px-5 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <h1
              className={`${syne.className} text-4xl font-bold leading-[1.15] pb-1 tracking-tight text-white sm:text-5xl lg:col-span-7 lg:text-6xl`}
            >
              We are Humaya Power
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-300 lg:col-span-5 lg:self-end">
              Powering a sustainable future with innovative energy solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Origin. Image left, text right. First use of this family. */}
      <section className="bg-white px-5 py-24 md:px-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/background2.jpg"
                alt="Humaya Power battery workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2
                className={`${syne.className} text-3xl font-bold leading-[1.2] pb-1 tracking-tight text-slate-900 sm:text-4xl`}
              >
                Where we started
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
                <p>
                  Our journey began with a vision to change the way energy
                  resources are used and preserved. Watching damaged batteries
                  get crushed and recycled wastefully, our founders set out to
                  build something better.
                </p>
                <p>
                  That led to new practices for re-manufacturing batteries,
                  using resources completely and cutting environmental impact
                  significantly.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission and vision. Dark band, stacked text, second family. */}
      <section className="bg-slate-900 px-5 py-24 md:px-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2
                className={`${syne.className} text-3xl font-bold leading-[1.2] pb-1 tracking-tight text-white sm:text-4xl`}
              >
                What drives us
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                We maximise the lifecycle of Li-ion batteries, making them a
                safer and more cost-effective alternative to lead-acid. That
                conserves resources and puts more affordable energy within
                reach.
              </p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-orange-400">
                  Our mission
                </h3>
                <p className="mt-4 leading-relaxed text-slate-300">
                  To innovate and deliver affordable energy solutions that
                  enhance global sustainability and improve community
                  well-being.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-orange-400">
                  Our vision
                </h3>
                <p className="mt-4 leading-relaxed text-slate-300">
                  To lead global energy innovation, making sustainable solutions
                  accessible and affordable, and empowering a greener, more
                  equitable future for all.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact. Divided stat row, third family. */}
      <section className="bg-white px-5 py-24 md:px-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2
              className={`${syne.className} max-w-2xl text-3xl font-bold leading-[1.2] pb-1 tracking-tight text-slate-900 sm:text-4xl`}
            >
              Driving change, one battery at a time
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {impact.map((item, i) => (
              <Reveal
                key={item.figure}
                delay={i * 0.08}
                className={`bg-white p-8 lg:p-10 ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <p
                  className={`${syne.className} text-4xl font-bold leading-[1.2] pb-1 tracking-tight text-slate-900 lg:text-5xl`}
                >
                  {item.figure}
                  <span className="ml-2 text-xl font-medium text-orange-600 lg:text-2xl">
                    {item.unit}
                  </span>
                </p>
                <p className="mt-3 text-slate-600">{item.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community and what's next. Text left, image right. Mirrors origin. */}
      <section className="bg-slate-50 px-5 py-24 md:px-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <h2
                className={`${syne.className} text-3xl font-bold leading-[1.2] pb-1 tracking-tight text-slate-900 sm:text-4xl`}
              >
                Together, we empower
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
                <p>
                  We are a community of innovators, environmental advocates and
                  forward-thinkers. We work closely with our customers to
                  collaborate on sustainable practices, and our partnerships
                  with swap stations and local stakeholders drive adoption of
                  greener technology.
                </p>
                <p>
                  Next, we are bringing this approach to more cities and
                  communities, developing projects and technology that extend
                  our impact further.
                </p>
              </div>
            </div>
            <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 lg:order-2">
              <Image
                src="/swap-station.jpg"
                alt="Riders at a Humaya Power battery swap station"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing call to action. */}
      <section className="bg-white px-5 pb-24 md:px-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid items-center gap-10 rounded-2xl bg-slate-900 px-8 py-14 md:px-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2
                className={`${syne.className} text-3xl font-bold leading-[1.2] pb-1 tracking-tight text-white sm:text-4xl`}
              >
                Ready to power your future with sustainable energy?
              </h2>
              <p className="mt-5 max-w-xl text-lg text-slate-300">
                Whether you want to buy, rent, or partner on a swap station,
                tell us what you need and we will come back with options.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <Link
                href="/contact"
                className="inline-flex rounded-lg bg-orange-600 px-7 py-3 font-medium text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 active:scale-[0.98]"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
