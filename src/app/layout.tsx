import type { Metadata } from "next";
import { Geist, Host_Grotesk } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { SmoothScroll } from "@/components/SmoothScroll";

// Geist — used for all headings site-wide
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

// Host Grotesk — body / UI text
const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-host-grotesk",
});

export const metadata: Metadata = {
  title: "ZIUR Studio | Web & Marketing for High-Ticket Businesses",
  description:
    "Websites and marketing that turn premium brands into premium bookings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${hostGrotesk.variable} h-full antialiased`}>
      <body className="font-sans bg-[#FAFAF8] text-[#111111] min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
