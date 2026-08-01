"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Motion's scroll observer. Replaces a window scroll listener that was
  // being torn down and rebuilt on every frame.
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(current > 80);
    if (openNavbar) return;
    setHidden(current > previous && current > 600);
  });

  const closeNavbar = () => setOpenNavbar(false);

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 flex h-16 items-center transition-colors duration-300 md:h-20 ${
        scrolled || openNavbar
          ? "bg-slate-950/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-5 md:px-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" onClick={closeNavbar} className="relative z-10">
            <Image
              src="/Logo.png"
              alt="Humaya Power"
              width={224}
              height={98}
              priority
              className="h-9 w-auto md:h-11"
            />
          </Link>

          <nav
            className={`fixed inset-0 flex flex-col items-center justify-center gap-y-8 bg-slate-950 text-center transition-all duration-300 ease-linear md:relative md:inset-auto md:!bg-transparent md:flex-1 md:flex-row md:justify-between md:gap-x-10 md:py-0 md:opacity-100 ${
              openNavbar
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-4 opacity-0 md:visible md:translate-y-0"
            }`}
          >
            <ul className="flex flex-col gap-y-6 md:flex-1 md:flex-row md:items-center md:justify-center md:gap-x-8 md:gap-y-0">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeNavbar}
                      aria-current={active ? "page" : undefined}
                      className={`text-lg transition-colors md:text-base ${
                        active
                          ? "text-orange-400"
                          : "text-white hover:text-orange-300"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="md:min-w-max">
              <Link
                href="/contact"
                onClick={closeNavbar}
                className="inline-flex items-center gap-x-2 rounded-lg bg-orange-600 px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-orange-700 md:text-sm"
              >
                Get in touch
              </Link>
            </div>
          </nav>

          <button
            onClick={() => setOpenNavbar((v) => !v)}
            aria-expanded={openNavbar}
            aria-label="Toggle navigation"
            className="relative z-10 flex aspect-square w-11 flex-col items-center justify-center rounded-full md:hidden"
          >
            <span
              className={`h-0.5 w-6 rounded-full bg-orange-500 transition-transform duration-300 ease-linear ${
                openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""
              }`}
            />
            <span
              className={`mt-1 h-0.5 w-6 origin-center rounded-full bg-orange-500 transition-all duration-300 ease-linear ${
                openNavbar ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`mt-1 h-0.5 w-6 rounded-full bg-orange-500 transition-all duration-300 ease-linear ${
                openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
