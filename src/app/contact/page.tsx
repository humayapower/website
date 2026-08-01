import type { Metadata } from "next";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { syne } from "../font";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to Humaya Power about EV batteries, storage, rentals, custom packs or a swap station partnership. Based in New Delhi, serving customers across India.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us",
    description:
      "Talk to us about EV batteries, storage, rentals, custom packs or a swap station partnership.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero. Third page-top treatment, kept short so the form is close. */}
      <section className="bg-slate-950 px-5 pb-16 pt-32 md:px-12 md:pb-20 md:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <h1
              className={`${syne.className} text-4xl font-bold leading-[1.15] pb-1 tracking-tight text-white sm:text-5xl lg:col-span-7 lg:text-6xl`}
            >
              Let&apos;s connect
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-300 lg:col-span-5 lg:self-end">
              Tell us what you need and we will come back with options and
              pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Form plus contact details. */}
      <section className="bg-white px-5 py-20 md:px-12 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="space-y-8 lg:col-span-5">
              <div>
                <h2
                  className={`${syne.className} text-2xl font-bold leading-[1.25] pb-0.5 tracking-tight text-slate-900`}
                >
                  Reach us directly
                </h2>
                <p className="mt-3 leading-relaxed text-slate-600">
                  We usually reply within two working days.
                </p>
              </div>

              <ul className="space-y-6 border-t border-slate-200 pt-8">
                <li className="flex gap-4">
                  <FaMapMarkerAlt
                    className="mt-1 shrink-0 text-orange-600"
                    size={18}
                    aria-hidden="true"
                  />
                  <address className="not-italic leading-relaxed text-slate-700">
                    E-153, Gali No. 2, Chand Bagh, New Mustafabad, New Delhi,
                    Delhi, 110094
                  </address>
                </li>
                <li className="flex gap-4">
                  <FaPhoneAlt
                    className="mt-1 shrink-0 text-orange-600"
                    size={18}
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+917291000560"
                    className="text-slate-700 transition-colors hover:text-orange-700"
                  >
                    (+91) 729-1000-560
                  </a>
                </li>
                <li className="flex gap-4">
                  <FaEnvelope
                    className="mt-1 shrink-0 text-orange-600"
                    size={18}
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:info@humayapower.in"
                    className="text-slate-700 transition-colors hover:text-orange-700"
                  >
                    info@humayapower.in
                  </a>
                </li>
              </ul>

              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <iframe
                  title="Humaya Power location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13997.934401935903!2d77.2676032!3d28.7050902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3aef2a99e3%3A0xc399e40fcdf3391b!2sHumaya%20Power!5e0!3m2!1sen!2sin!4v1725256686545!5m2!1sen!2sin"
                  width="100%"
                  height="320"
                  loading="lazy"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
