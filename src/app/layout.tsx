import type { Metadata } from "next";
import { Inter} from "next/font/google";
import { syne, roboto, montserrat, nunito } from "./font";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Humaya Power",
  description: "Sustainable Energy Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/32x32.ico"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/HumayaBirdLogo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/32x32.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/16x16.ico" />
      </head>
   <body className={`${syne.className} ${roboto.className} ${montserrat.className} ${nunito.className} ${inter.className}`}>
    <Navbar/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
