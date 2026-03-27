import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PieLine | AI Phone Ordering for Restaurants — Never Miss a Call",
  description:
    "AI phone assistant for restaurants. Answers every call 24/7, takes orders with 90%+ accuracy, handles complex modifications, and sends orders straight to your POS. Live at 11+ restaurant locations.",
  keywords:
    "restaurant phone ordering, AI phone assistant restaurant, restaurant automation, POS integration, phone order taking, voice AI restaurant",
  openGraph: {
    title: "PieLine | AI Phone Ordering for Restaurants — Never Miss a Call",
    description:
      "AI phone assistant for restaurants. Answers every call 24/7, takes orders with 90%+ accuracy, integrates with your POS.",
    url: "https://aiphoneordering.com",
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
