import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
