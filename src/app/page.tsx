import Image from "next/image";
import Link from "next/link";
import { CtaPaths } from "@/components/cta/cta-banner";
import Reveal from "@/components/motion/reveal";
import SlowZoom from "@/components/motion/slow-zoom";
import { impactStats } from "@/data/impact";
import { syne } from "./font";

export default function Home() {
  return (
    <>
      {/* Hero. Preserved composition: centred type over the original photograph.
          Now served through next/image so it is a real LCP candidate. */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
        <SlowZoom className="absolute inset-0">
          <Image
            src="/background2.jpg"
            alt="A technician soldering cell connections on a lithium-ion battery pack at the Humaya Power workbench"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </SlowZoom>
        <div className="absolute inset-0 bg-slate-950/55" />
        {/* Fades the photograph into the slate-900 section below. A flat
            overlay leaves the image bottom visibly lighter than the section,
            which read as a hard grey seam on wide screens. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-slate-900/70 to-slate-900 md:h-56 lg:h-72" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 sm:px-10 lg:px-8">
          <div className="flex flex-col items-center space-y-8 text-center">
            <h1
              className={`${syne.className} max-w-4xl text-4xl font-bold leading-[1.25] pb-[0.18em] tracking-tight text-white md:text-5xl lg:text-6xl`}
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
      <section className="bg-slate-900 px-5 py-20 md:px-12 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <h2
              className={`${syne.className} text-3xl font-bold leading-[1.3] pb-[0.16em] tracking-tight text-white sm:text-4xl lg:col-span-5 lg:text-5xl`}
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
      <section className="bg-white px-5 py-20 md:px-12 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="max-w-md text-sm font-medium uppercase tracking-[0.14em] text-orange-700">
              Where we are today
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {impactStats.map((stat, i) => (
              <Reveal
                key={stat.figure}
                delay={i * 0.08}
                className={`bg-white p-8 lg:p-10 ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <p
                  className={`${syne.className} text-4xl font-bold leading-[1.3] pb-[0.16em] tracking-tight text-slate-900 lg:text-5xl`}
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
      <section className="bg-slate-50 px-5 py-16 md:px-12 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CtaPaths />
        </div>
      </section>
    </>
  );
}
