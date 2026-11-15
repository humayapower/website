import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { syne } from "../font";

// Target of the Humaya Connect QR code: phones go straight to their store,
// everything else (desktop, iPad in desktop mode) gets both buttons.
const APP_STORE = "https://apps.apple.com/in/app/humaya-connect/id6824649721";
const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.blumos.humayapower";

export const metadata: Metadata = {
  title: "Download Humaya Connect",
  description: "Get the Humaya Connect app for iPhone and Android.",
  alternates: { canonical: "/app" },
  robots: { index: false },
};

const stores = [
  {
    href: APP_STORE,
    Icon: FaApple,
    small: "Download on the",
    big: "App Store",
  },
  {
    href: PLAY_STORE,
    Icon: FaGooglePlay,
    small: "Get it on",
    big: "Google Play",
  },
];

export default async function AppPage() {
  const ua = (await headers()).get("user-agent") ?? "";
  if (/iPhone|iPad|iPod/i.test(ua)) redirect(APP_STORE);
  if (/Android/i.test(ua)) redirect(PLAY_STORE);

  return (
    <main
      id="main"
      className="bg-slate-50 min-h-[100dvh] pt-28 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-xl mx-auto text-center">
        <Image
          src="/Logo.png"
          alt="Humaya Power"
          width={600}
          height={263}
          className="mx-auto h-20 w-auto"
          priority
        />
        <h1
          className={`${syne.className} mt-6 text-3xl md:text-4xl font-bold leading-[1.3] pb-[0.16em] text-slate-900`}
        >
          Humaya Connect
        </h1>
        <p className="mt-2 text-base md:text-lg text-slate-600">
          Get the app for your phone.
        </p>
        <ul className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          {stores.map(({ href, Icon, small, big }) => (
            <li key={big}>
              <a
                href={href}
                className="flex items-center gap-3 rounded-xl bg-slate-900 px-5 py-3 text-left text-white transition-colors hover:bg-orange-600"
              >
                <Icon className="h-7 w-7" aria-hidden />
                <span>
                  <span className="block text-xs">{small}</span>
                  <span className="block text-lg font-semibold leading-tight">
                    {big}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
