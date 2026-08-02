import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/reveal";
import { impactStats } from "@/data/impact";
import { syne } from "../font";

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

export default function AboutUs() {
  return (
    <>
      {/* Page top: one banner, type over the photograph. Section 4.7 caps hero
          top padding at pt-24; the split and strip variants both broke it and
          left the type stranded in a dark box above the image. */}
      <section className="relative flex min-h-[52vh] items-end overflow-hidden pt-24 md:min-h-[58vh]">
        <Image
          src="/background2.jpg"
          alt="A technician soldering cell connections on a lithium-ion battery pack at the Humaya Power workbench"
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
            We are Humaya Power
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200">
            Powering a sustainable future with innovative energy solutions.
          </p>
        </div>
      </section>

      {/* Origin. Image left, text right. First use of this family. */}
      <section className="bg-white px-5 py-20 md:px-12 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/swap-station.jpg"
                alt="Battery packs on the rack at a partnered swap station"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2
                className={`${syne.className} text-3xl font-bold leading-[1.3] pb-[0.16em] tracking-tight text-slate-900 sm:text-4xl`}
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

      {/* What drives us, with the impact figures carried inside it as an
          orange panel. Previously this was a six-paragraph text wall and the
          figures repeated the home page in a near-identical treatment. */}
      <section className="bg-slate-900 px-5 py-20 md:px-12 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <h2
                className={`${syne.className} text-3xl font-bold leading-[1.3] pb-[0.16em] tracking-tight text-white sm:text-4xl`}
              >
                What drives us
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                We maximise the lifecycle of Li-ion batteries, making them a
                safer and more cost-effective alternative to lead-acid. That
                conserves resources and puts more affordable energy within
                reach.
              </p>
              <div className="mt-10 space-y-8 border-l-2 border-orange-600 pl-6">
                <div>
                  <h3 className="font-semibold text-white">Our mission</h3>
                  <p className="mt-2 leading-relaxed text-slate-300">
                    To innovate and deliver affordable energy solutions that
                    enhance global sustainability and improve community
                    well-being.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Our vision</h3>
                  <p className="mt-2 leading-relaxed text-slate-300">
                    To lead global energy innovation, making sustainable
                    solutions accessible and affordable, and empowering a
                    greener, more equitable future for all.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-800 p-8 md:p-10 lg:col-span-6">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-orange-100">
                Driving change, one battery at a time
              </p>
              <dl className="mt-8 space-y-8">
                {impactStats.map((item) => (
                  <div
                    key={item.figure}
                    className="border-t border-white/25 pt-6"
                  >
                    <dt
                      className={`${syne.className} text-4xl font-bold leading-[1.3] pb-[0.16em] tracking-tight text-white lg:text-5xl`}
                    >
                      {item.figure}
                      <span className="ml-2 text-xl font-medium text-orange-100 lg:text-2xl">
                        {item.unit}
                      </span>
                    </dt>
                    <dd className="mt-1 text-orange-50">{item.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Community and what's next. Text left, image right. Mirrors origin. */}
      <section className="bg-slate-50 px-5 py-16 md:px-12 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <h2
                className={`${syne.className} text-3xl font-bold leading-[1.3] pb-[0.16em] tracking-tight text-slate-900 sm:text-4xl`}
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
                src="/EVbattery.jpg"
                alt="Remanufactured Li-ion pack ready for dispatch"
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
                className={`${syne.className} text-3xl font-bold leading-[1.3] pb-[0.16em] tracking-tight text-white sm:text-4xl`}
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
