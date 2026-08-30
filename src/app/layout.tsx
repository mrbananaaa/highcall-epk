import type { Metadata } from "next";
import { Anybody, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import BaseLayout from "@/components/layouts/base-layout";
import AppProvider from "./provider";

const anybody = Anybody({
  subsets: ["latin"],
  variable: "--font-anybody",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  title: "Highcall | DJ & Producer",
  description: "Official Electronic Press Kit (EPK) for Highcall.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anybody.variable} ${hankenGrotesk.variable} scrollbar-thumb-primary`}
      data-scroll-behavior="smooth"
    >
      <body
        className="overflow-x-hidden bg-background antialiased"
        suppressHydrationWarning
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
