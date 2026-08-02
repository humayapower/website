"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

export type Solution = {
  id: string;
  name: string;
  tabLabel: string;
  description: string;
  features: string[];
  price: string;
  priceSuffix?: string;
  image: string;
  alt: string;
  secondaryImage?: string;
  secondaryAlt?: string;
  cta: string;
};

/**
 * Tabbed solution browser. Adapted from the hmp-try1 reference, with three
 * changes: the panel is conditionally rendered rather than CSS-hidden, so only
 * the active product's images load; tabs are real ARIA tabs; and the decorative
 * floating blobs and gradient text from the reference are dropped.
 */
export default function SolutionTabs({
  solutions,
  fontClass,
}: {
  solutions: Solution[];
  fontClass: string;
}) {
  const [active, setActive] = useState(solutions[0].id);
  const current = solutions.find((s) => s.id === active) ?? solutions[0];

  return (
    <>
      {/* Not sticky. The header auto-hides on scroll, so a bar pinned to a
          fixed offset either floated over the panel or left a dead gap once
          the header retracted. The tab set is short and sits directly under
          the banner, so it does not need to follow the reader. */}
      <div className="border-b border-slate-200 bg-white">
        {/* Two columns on mobile rather than a horizontal scroller. The strip
            needed 518px inside a 390px viewport, so the last tab sat
            off-screen with no affordance, and inside a scroll container the
            browser delays each touch to decide tap-vs-swipe, which loses the
            tap whenever a finger moves slightly. */}
        <div
          role="tablist"
          aria-label="Battery solutions"
          className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-5 py-3 sm:flex sm:flex-wrap sm:justify-center md:px-12 lg:px-8"
        >
          {solutions.map((solution) => {
            const selected = solution.id === active;
            return (
              <button
                key={solution.id}
                role="tab"
                type="button"
                id={`tab-${solution.id}`}
                aria-selected={selected}
                aria-controls={`panel-${solution.id}`}
                onClick={() => setActive(solution.id)}
                className={`touch-manipulation rounded-lg px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:py-2 ${
                  selected
                    ? "bg-orange-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 sm:bg-transparent sm:hover:bg-slate-100"
                }`}
              >
                {solution.tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      <section className="bg-white px-5 py-16 md:px-12 md:py-24 lg:px-8">
        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="mx-auto max-w-7xl"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                className={`${fontClass} text-3xl font-bold leading-[1.3] pb-[0.16em] tracking-tight text-slate-900 sm:text-4xl`}
              >
                {current.name}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                {current.description}
              </p>

              <ul className="mt-7 space-y-3">
                {current.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <FaCheck
                      className="shrink-0 text-orange-600"
                      size={13}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-2xl font-bold text-slate-900">
                {current.price}
                {current.priceSuffix ? (
                  <span className="text-base font-medium text-slate-500">
                    {current.priceSuffix}
                  </span>
                ) : null}
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex rounded-lg bg-orange-600 px-7 py-3 font-medium text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:scale-[0.98]"
              >
                {current.cta}
              </Link>
            </div>

            {current.secondaryImage ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={current.image}
                    alt={current.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={current.secondaryImage}
                    alt={current.secondaryAlt ?? ""}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={current.image}
                  alt={current.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
