import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterBlock = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 px-5 py-14 text-slate-400 md:px-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <Image
              src="/Logo.png"
              alt="Humaya Power"
              width={224}
              height={98}
              className="h-10 w-auto"
            />
            <p className="max-w-xs text-sm leading-relaxed">
              Lithium-ion batteries and flexible energy solutions, built to be
              used for longer.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav aria-label="Site" className="space-y-3 text-sm">
              <p className="font-medium text-white">Explore</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/solutions"
                    className="transition-colors hover:text-orange-400"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-orange-400"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-orange-400"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            <nav aria-label="Legal" className="space-y-3 text-sm">
              <p className="font-medium text-white">Legal</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms"
                    className="transition-colors hover:text-orange-400"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/policies"
                    className="transition-colors hover:text-orange-400"
                  >
                    Policies
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="space-y-3 text-sm">
              <p className="font-medium text-white">Get in touch</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:info@humayapower.in"
                    className="transition-colors hover:text-orange-400"
                  >
                    info@humayapower.in
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917291000560"
                    className="transition-colors hover:text-orange-400"
                  >
                    (+91) 729-1000-560
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 pt-8 text-sm sm:flex-row sm:justify-between">
          <p>Copyright &copy; {year} Humaya Power. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link
              href="https://www.instagram.com/humayapower?igsh=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Humaya Power on Instagram"
              className="transition-colors hover:text-[#E1306C]"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/humaya-power/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Humaya Power on LinkedIn"
              className="transition-colors hover:text-[#0A66C2]"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlock;
