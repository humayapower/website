import type { Metadata } from "next";
import { syne, roboto } from "./font";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

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
   <body className={`${syne.variable} ${roboto.variable} font-roboto antialiased`}>
    <Navbar/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
