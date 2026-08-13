import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-host-grotesk",
});

export const metadata: Metadata = {
  title: "ZIUR Studio",
  description:
    "Websites and marketing that turn premium brands into premium bookings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hostGrotesk.variable} h-full antialiased`}>
      <body className="font-sans bg-[#FAFAF8] text-[#111111] min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
