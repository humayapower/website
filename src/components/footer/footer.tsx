import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { syne } from "@/app/font";
import {
  ADDRESS,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappUrl,
} from "@/data/contact";

const link = "transition-colors hover:text-orange-400";

const products = [
  ["EV Batteries", "/solutions#ev-batteries"],
  ["Energy Storage", "/solutions#energy-storage"],
  ["Rentals", "/solutions#rentals"],
  ["Custom Packs", "/solutions#custom-packs"],
] as const;

const FooterBlock = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-sm text-slate-400">
      {/* Final nudge for readers who reach the bottom without converting. */}
      <div className="bg-gradient-to-r from-orange-900 to-orange-700 px-5 py-9 text-white md:px-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className={`${syne.className} text-xl font-bold`}>
              Need a quote?
            </p>
            <p className="mt-1 text-orange-100">
              Call or message us and we will come back with options.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-6 py-2.5 font-medium text-orange-800 transition-colors hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]"
            >
              Get in touch
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-2.5 font-medium text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]"
            >
              <FaWhatsapp aria-hidden="true" size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.4fr]">
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <Image
                src="/Logo.png"
                alt="Humaya Power"
                width={224}
                height={98}
                className="h-10 w-auto"
              />
              <p className="max-w-xs leading-relaxed">
                Lithium-ion batteries and flexible energy solutions, built to be
                used for longer.
              </p>
              <address className="max-w-[28ch] not-italic leading-relaxed">
                {ADDRESS}
              </address>
            </div>

            <nav aria-label="Products" className="space-y-3">
              <p className="font-medium text-white">Products</p>
              <ul className="space-y-2">
                {products.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className={link}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Company" className="space-y-3">
              <p className="font-medium text-white">Company</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className={link}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact?interest=swap" className={link}>
                    Swap stations
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={link}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            <nav aria-label="Legal" className="space-y-3">
              <p className="font-medium text-white">Legal</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className={link}>
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/policies" className={link}>
                    Policies
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="space-y-3">
              <p className="font-medium text-white">Contact</p>
              <ul className="space-y-2">
                <li>
                  <a href={PHONE_TEL} className={link}>
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link}
                  >
                    WhatsApp chat
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className={link}>
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 border-t border-white/10 py-6 sm:flex-row sm:justify-between">
            <p>Copyright &copy; {year} Humaya Power. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.instagram.com/humayapower"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Humaya Power on Instagram"
                className="grid size-9 place-items-center rounded-full border border-white/15 transition-colors hover:border-[#E1306C] hover:text-[#E1306C]"
              >
                <FaInstagram size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/humaya-power/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Humaya Power on LinkedIn"
                className="grid size-9 place-items-center rounded-full border border-white/15 transition-colors hover:border-[#0A66C2] hover:text-[#0A66C2]"
              >
                <FaLinkedin size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlock;
