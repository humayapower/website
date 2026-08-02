import type { Metadata } from "next";
import { syne, roboto } from "./font";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const SITE_URL = "https://humayapower.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Humaya Power | Sustainable Li-ion Battery Solutions",
    template: "%s | Humaya Power",
  },
  description:
    "Humaya Power builds high-performance lithium-ion batteries, rental packs and battery swap stations across India, extending battery life instead of scrapping it.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Humaya Power",
    url: SITE_URL,
    title: "Humaya Power | Sustainable Li-ion Battery Solutions",
    description:
      "High-performance lithium-ion batteries, rental packs and battery swap stations across India.",
    images: [{ url: "/background2.jpg", width: 1680, height: 1050 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Humaya Power | Sustainable Li-ion Battery Solutions",
    description:
      "High-performance lithium-ion batteries, rental packs and battery swap stations across India.",
    images: ["/background2.jpg"],
  },
  icons: {
    icon: [
      { url: "/32x32.ico", sizes: "32x32" },
      { url: "/16x16.ico", sizes: "16x16" },
    ],
    apple: "/HumayaBirdLogo.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Humaya Power",
  url: SITE_URL,
  logo: `${SITE_URL}/Logo.png`,
  description:
    "Humaya Power extends the lifecycle of Li-ion batteries, supplying EV batteries, storage, rentals, custom packs and battery swap stations across India.",
  address: {
    "@type": "PostalAddress",
    // Operational address, matching the Google Business Profile and the map
    // pin. The registered office is a different address and stays in the
    // Terms page, where it is legally required.
    streetAddress: "First Floor, 25/1, Ambedkar Colony, Jeewanpur, Jawahar Nagar",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110094",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7291000560",
    email: "info@humayapower.in",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    "https://www.instagram.com/humayapower",
    "https://www.linkedin.com/company/humaya-power/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${roboto.variable} bg-white font-roboto text-slate-900 antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Skip link sits below the navbar's z-50 on purpose. The mobile nav
            panel carries no z-index of its own and depends on document order,
            so anything stacked above the header competes with it. */}
        {/* Sits below the header rather than above it in the stacking order.
            The header is z-50 and its logo painted over a z-40 skip link at
            top-4, so the focused link was invisible. Raising it past z-50
            would instead put it over the full-screen mobile nav panel, which
            shares that context, so it is positioned clear of the header
            instead: 64px tall on mobile, 96px at md. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-20 focus:z-40 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:outline-2 focus:outline-orange-600 md:focus:top-28"
        >
          Skip to content
        </a>
        <Navbar />
        {/* Children render unwrapped, matching the pre-redesign structure. A
            <main> wrapper introduced a containing block the mobile nav panel
            relied on not existing. `display: contents` was tried as a fix and
            reverted: it removes the element from the box tree, which is a
            standing hazard for any sticky descendant. The landmark is a
            zero-height anchor so the skip link keeps a target. */}
        <div id="main" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
