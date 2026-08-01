import Image from "next/image";
import Link from "next/link";
import { syne } from "./font";
import Reveal from "@/components/motion/reveal";

const stats = [
  {
    figure: "1,000,000+",
    unit: "km",
    label: "driven on our remanufactured Li-ion packs",
  },
  {
    figure: "10+",
    unit: "cities",
    label: "reached across India",
  },
  {
    figure: "5",
    unit: "stations",
    label: "swap partners live today",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero. Preserved composition: centred type over the original photograph.
          Now served through next/image so it is a real LCP candidate. */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
        <Image
          src="/background2.jpg"
          alt="Humaya Power battery swap station at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 sm:px-10 lg:px-8">
          <div className="flex flex-col items-center space-y-8 text-center">
            <h1
              className={`${syne.className} max-w-4xl text-4xl font-bold leading-[1.15] pb-1 tracking-tight text-white md:text-5xl lg:text-6xl`}
            >
              Revitalising,
              <span className="mt-2 block md:mt-0 md:inline"> the Energy</span>
            </h1>
            <p className="max-w-xl text-lg text-slate-200 md:text-xl">
              High-performance lithium-ion batteries and flexible energy
              solutions for a greener future.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/solutions"
                className="rounded-lg bg-orange-600 px-7 py-3 font-medium text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 active:scale-[0.98]"
              >
                See our solutions
              </Link>
              <Link
                href="/about"
                className="rounded-lg border border-white/40 bg-white/10 px-7 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning statement. Asymmetric: heading left, body right. */}
      <section className="bg-slate-900 px-5 py-24 md:px-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <h2
              className={`${syne.className} text-3xl font-bold leading-[1.2] pb-1 tracking-tight text-white sm:text-4xl lg:col-span-5 lg:text-5xl`}
            >
              Energise your world, sustainably
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-300 lg:col-span-7">
              <p>
                We don&apos;t just offer energy solutions, we redefine them. Our
                commitment is to make high-quality, eco-friendly energy
                accessible and affordable for everyone.
              </p>
              <p>
                We extend the lifecycle of Li-ion batteries, changing the way
                energy is consumed and conserved. That supports environmental
                sustainability and moves us toward a greener future alongside
                our community.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Proof. Asymmetric stat composition, no card grid. */}
      <section className="bg-white px-5 py-24 md:px-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="max-w-md text-sm font-medium uppercase tracking-[0.14em] text-orange-700">
              Where we are today
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.figure}
                delay={i * 0.08}
                className={`bg-white p-8 lg:p-10 ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <p
                  className={`${syne.className} text-4xl font-bold leading-[1.2] pb-1 tracking-tight text-slate-900 lg:text-5xl`}
                >
                  {stat.figure}
                  <span className="ml-2 text-xl font-medium text-orange-600 lg:text-2xl">
                    {stat.unit}
                  </span>
                </p>
                <p className="mt-3 text-slate-600">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action. */}
      <section className="bg-slate-50 px-5 py-24 md:px-12 lg:px-8">
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
