"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "@/data/contact";

export type Solution = {
  id: string;
  /** Key for /contact?interest=, see interestOptions. */
  interest: string;
  tabLabel: string;
  name: string;
  description: string;
  features: string[];
  specs: [string, string][];
  priceLabel?: string;
  price: string;
  priceSuffix?: string;
  image: string;
  alt: string;
  secondaryImage?: string;
  secondaryAlt?: string;
  cta: string;
};

/**
 * Product browser. All four products are visible as cards at once, the
 * selected one opens below. The selection lives in the URL hash, so
 * /solutions#rentals can be linked from the home page, the footer or an ad.
 * The panel is conditionally rendered so only the active product's large
 * images load.
 */
export default function SolutionTabs({
  solutions,
  fontClass,
}: {
  solutions: Solution[];
  fontClass: string;
}) {
  const [active, setActive] = useState(solutions[0].id);
  const reduce = useReducedMotion();
  const current = solutions.find((s) => s.id === active) ?? solutions[0];

  useEffect(() => {
    const read = (scroll: boolean) => {
      const id = window.location.hash.slice(1);
      if (!solutions.some((s) => s.id === id)) return;
      setActive(id);
      if (scroll) {
        document
          .getElementById("solution-tabs")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    read(true);
    const onHash = () => read(true);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [solutions]);

  const select = (id: string) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <section
      id="solution-tabs"
      className="scroll-mt-20 bg-white px-5 py-14 md:px-12 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div
          role="tablist"
          aria-label="Battery solutions"
          className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4"
        >
          {solutions.map((s) => {
            const selected = s.id === active;
            return (
              <motion.button
                key={s.id}
                role="tab"
                type="button"
                id={`tab-${s.id}`}
                aria-selected={selected}
                aria-controls={`panel-${s.id}`}
                onClick={() => select(s.id)}
                whileHover={reduce ? undefined : { y: -3 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className={`touch-manipulation overflow-hidden rounded-2xl border bg-white text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ${
                  selected
                    ? "border-orange-600 ring-2 ring-orange-600"
                    : "border-slate-200 hover:border-orange-400"
                }`}
              >
                <span className="relative block aspect-[16/10] bg-slate-100">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </span>
                <span className="block p-4">
                  <span
                    className={`${fontClass} block text-base font-bold text-slate-900`}
                  >
                    {s.tabLabel}
                  </span>
                  <span className="mt-1 block text-sm text-slate-600">
                    {s.priceLabel ? `${s.priceLabel} ` : ""}
                    <span className="font-semibold text-slate-900">
                      {s.price}
                    </span>
                    {s.priceSuffix}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 grid items-start gap-12 lg:grid-cols-2 lg:gap-16"
          >
            <div>
              <h2
                className={`${fontClass} pb-[0.16em] text-3xl font-bold leading-[1.3] tracking-tight text-slate-900 sm:text-4xl`}
              >
                {current.name}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {current.description}
              </p>

              <p className="mt-7 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-3xl font-bold text-slate-900">
                {current.priceLabel ? (
                  <span className="mr-2 text-base font-medium text-slate-500">
                    {current.priceLabel}
                  </span>
                ) : null}
                {current.price}
                {current.priceSuffix ? (
                  <span className="text-base font-medium text-slate-500">
                    {current.priceSuffix}
                  </span>
                ) : null}
              </p>

              <dl className="mt-4">
                {current.specs.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex gap-6 border-b border-slate-200 py-3"
                  >
                    <dt className="w-2/5 shrink-0 text-slate-500">{label}</dt>
                    <dd className="text-slate-800">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={`/contact?interest=${current.interest}`}
                  className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-7 py-3 font-medium text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:scale-[0.98]"
                >
                  {current.cta}
                </Link>
                <a
                  href={whatsappUrl(
                    `Hi Humaya Power, I am interested in ${current.name}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-800 transition-colors hover:border-emerald-700 hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:scale-[0.98]"
                >
                  <FaWhatsapp aria-hidden="true" size={18} />
                  WhatsApp us
                </a>
              </div>
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
