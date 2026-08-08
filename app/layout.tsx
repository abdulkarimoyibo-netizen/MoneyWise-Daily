import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moneywisedaily.com"),
  title: {
    default: "MoneyWise Daily — Budgeting, Savings & Side Hustle Tips",
    template: "%s | MoneyWise Daily",
  },
  description:
    "Practical, no-fluff advice on budgeting, saving money, making money online, and building side hustles that actually work.",
  openGraph: {
    title: "MoneyWise Daily",
    description:
      "Practical, no-fluff advice on budgeting, saving money, making money online, and building side hustles that actually work.",
    url: "https://moneywisedaily.com",
    siteName: "MoneyWise Daily",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body bg-ivory text-ink antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
