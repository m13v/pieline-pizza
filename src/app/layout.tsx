import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PieLine for Pizza Restaurants | AI Phone Ordering That Never Misses a Call",
  description:
    "AI phone assistant built for pizza restaurants. Handles complex orders (half-and-half, extra toppings, custom sizes), upsells sides and drinks, and sends orders straight to your POS. Never miss a call during Friday night rush again.",
  keywords:
    "pizza restaurant phone ordering, AI phone assistant pizza, pizza delivery automation, POS integration pizza, phone order taking pizza shop",
  openGraph: {
    title: "PieLine for Pizza | AI Phone Ordering That Never Misses a Call",
    description:
      "AI phone assistant built for pizza restaurants. Handles complex orders, upsells automatically, integrates with your POS.",
    url: "https://pizza.getpieline.com",
    siteName: "PieLine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PieLine for Pizza | AI Phone Ordering",
    description:
      "AI phone assistant built for pizza restaurants. Never miss a call during rush hour.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
