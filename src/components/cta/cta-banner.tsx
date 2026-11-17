import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { syne } from "@/app/font";
import Reveal from "@/components/motion/reveal";
import { PHONE_DISPLAY, PHONE_TEL, whatsappUrl } from "@/data/contact";

const primary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-7 py-3 font-medium text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 active:scale-[0.98]";
const ghostDark =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/10 px-5 py-2.5 font-medium text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]";
const wa =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-2.5 font-medium text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 active:scale-[0.98]";

const paths = [
  {
    title: "Buy a battery",
    body: "EV, storage or custom packs, with open pricing.",
    cta: "Browse batteries",
    href: "/solutions#ev-batteries",
  },
  {
    title: "Rent a pack",
    body: "No upfront cost. Serviced by us, swap at partner stations.",
    cta: "See rentals",
    href: "/solutions#rentals",
  },
  {
    title: "Run a swap station",
    body: "We help with siting, hardware and ongoing service.",
    cta: "Partner with us",
    href: "/contact?interest=swap",
  },
];

/** Full closing banner: lets the visitor choose a path, then offers a direct line. */
export function CtaPaths() {
  return (
    <Reveal className="rounded-2xl bg-slate-900 px-6 py-12 md:px-14 md:py-14">
      <div className="max-w-2xl">
        <h2
          className={`${syne.className} pb-[0.16em] text-3xl font-bold leading-[1.3] tracking-tight text-white sm:text-4xl`}
        >
          Ready to power your future with sustainable energy?
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Pick what fits and we will come back with options, usually within two
          working days.
        </p>
      </div>

      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {paths.map((p, i) => (
          <Reveal key={p.title} delay={0.08 * i} className="h-full">
            <Link
              href={p.href}
              className="group flex h-full flex-col gap-1.5 rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-orange-400 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              <span
                className={`${syne.className} text-xl font-bold text-white`}
              >
                {p.title}
              </span>
              <span className="text-slate-300">{p.body}</span>
              <span className="mt-4 text-sm font-medium text-orange-400">
                {p.cta}{" "}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6 text-sm text-slate-300">
        <span className="mr-2">Prefer to talk?</span>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className={wa}
        >
          <FaWhatsapp aria-hidden="true" size={18} />
          WhatsApp us
        </a>
        <a href={PHONE_TEL} className={ghostDark}>
          Call {PHONE_DISPLAY}
        </a>
      </div>
    </Reveal>
  );
}

/** Slim banner for story pages. Light, so it does not repeat the dark closing card. */
export function CtaSlim({
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <Reveal className="flex flex-col gap-6 rounded-2xl border-t-[3px] border-orange-600 bg-orange-50 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
      <div className="max-w-xl">
        <h2
          className={`${syne.className} pb-[0.12em] text-2xl font-bold leading-[1.3] tracking-tight text-slate-900`}
        >
          {title}
        </h2>
        <p className="mt-2 text-slate-700">{body}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href={primaryHref} className={primary}>
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="inline-flex items-center justify-center rounded-lg border border-slate-900 px-6 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:scale-[0.98]"
        >
          {secondaryLabel}
        </Link>
      </div>
    </Reveal>
  );
}

/** Split banner: the photo stays fully visible beside the copy and price. */
export function CtaSplit({
  image,
  alt,
  title,
  body,
  points,
  price,
  priceNote,
  href,
  label,
}: {
  image: string;
  alt: string;
  title: string;
  body: string;
  points: string[];
  price: string;
  priceNote: string;
  href: string;
  label: string;
}) {
  return (
    <section className="bg-white py-12 text-slate-900 lg:py-20">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="relative mx-5 min-h-65 overflow-hidden rounded-2xl md:mx-12 lg:mx-0 lg:min-h-110">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <Reveal className="flex flex-col justify-center gap-4 px-5 py-14 md:px-12 lg:px-14 lg:py-20">
          <h2
            className={`${syne.className} pb-[0.16em] text-3xl font-bold leading-[1.3] tracking-tight sm:text-4xl`}
          >
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">{body}</p>
          <ul className="grid gap-2 text-slate-700">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span aria-hidden="true" className="font-bold text-orange-600">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-2xl font-bold">
            {price}{" "}
            <span className="text-base font-medium text-slate-500">
              {priceNote}
            </span>
          </p>
          <div>
            <Link href={href} className={primary}>
              {label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
