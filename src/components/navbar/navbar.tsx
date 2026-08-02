"use client";
import { useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [navbarClass, setNavbarClass] = useState("bg-transparent");

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };
  const closeNavbar = () => {
    setOpenNavbar(false);
  };

  // Previous offset is tracked in a ref rather than state. The earlier
  // implementation kept it in state and listed it as an effect dependency,
  // which tore down and re-attached the scroll listener on every frame of
  // every scroll. Motion's scrollY.getPrevious() is not usable here either:
  // it reports the current frame's value, so the direction comparison never
  // fires and the header stops hiding.
  const prevScrollPos = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (currentScrollPos) => {
    const previous = prevScrollPos.current;
    prevScrollPos.current = currentScrollPos;

    // Hide navbar when scrolling down past 600 pixels
    if (currentScrollPos > previous && currentScrollPos > 600) {
      setIsNavbarVisible(false);
    }

    // Change background color after scrolling down by 100 pixels
    setNavbarClass(currentScrollPos > 100 ? "bg-black" : "bg-transparent");

    // Show navbar when scrolling up
    if (previous - currentScrollPos > 20) {
      setIsNavbarVisible(true);
    }
  });

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-16 md:h-24 flex items-center transition-all duration-300 ${navbarClass} ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="md:px-12 lg:px-28 px-5 w-full items-center">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-20 h-10 md:w-28 md:h-14"
            />
          </Link>
          <nav
            id="primary-navigation"
            className={`
                        flex flex-col items-center text-center inset-0 fixed py-20
                        transition-all ease-linear duration-300 
                        md:!bg-transparent md:flex-row md:flex-1 md:py-0 md:px-0 md:space-y-0 md:gap-x-10 md:relative md:justify-between ${openNavbar ? "visible h-screen bg-white text-black opacity-100 translate-y-0" : "text-white -translate-y-9 opacity-0 invisible md:translate-y-0 md:visible md:opacity-100"}`}
          >
            <ul className="flex flex-col gap-y-5 md:items-center md:flex-row md:gap-x-5 md:justify-center md:flex-1">
              <li>
                <Link
                  href="/"
                  onClick={closeNavbar}
                  className="transition ease-linear hover:text-gray-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  onClick={closeNavbar}
                  className="transition ease-linear hover:text-gray-200"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={closeNavbar}
                  className="transition ease-linear hover:text-gray-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={closeNavbar}
                  className="transition ease-linear hover:text-gray-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* Centred on mobile. The container is w-full inside a
                            centred column, so without justify-center the link
                            sat against the left edge and overlapped the last
                            nav item. It was invisible before, so this was
                            never noticed. */}
            <div className="w-full flex justify-center mt-4 md:mt-0 md:justify-start md:w-max md:min-w-max md:items-center">
              {/* Colour follows the panel: dark on the white
                                mobile sheet, white on the transparent desktop
                                bar. It was hardcoded white, so it was
                                invisible against the open mobile menu. */}
              <Link
                href="/contact"
                className="flex justify-center gap-x-3 items-center text-gray-900 hover:text-orange-600 border-b border-gray-900 hover:border-orange-600 md:text-white md:hover:text-gray-200 md:border-white md:hover:border-gray-200 bg-transparent"
                onClick={closeNavbar}
              >
                Get in touch
                <FaArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </nav>
          <button
            onClick={toggleNavbar}
            aria-expanded={openNavbar}
            type="button"
            aria-controls="primary-navigation"
            className="p-3 rounded-full bg-transparent md:hidden outline-none w-12 aspect-square flex flex-col relative justify-center items-center"
          >
            <span className="sr-only">
              {openNavbar ? "Close navbar" : "Open navbar"}
            </span>
            <span
              className={`w-6 h-0.5 rounded-full bg-orange-600 transition-transform duration-300 ease-linear ${openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""}`}
            />
            <span
              className={`w-6 origin-center mt-1 h-0.5 rounded-full bg-orange-600 transition-all duration-300 ease-linear ${openNavbar ? "scale-x-0 opacity-0" : ""}`}
            />
            <span
              className={`w-6 mt-1 h-0.5 rounded-full bg-orange-600 transition-all duration-300 ease-linear ${openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""}`}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
