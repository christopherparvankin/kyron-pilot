import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iyengar Hematology & Oncology Medical Center - Advanced Cancer Care",
  description:
    "Leading hematology and oncology care with innovative treatments, experienced physicians, and compassionate support throughout the Greater NYC Area. Locations in West Orange, NJ and Bayonne, NJ.",
  keywords: "hematology, oncology, cancer care, New Jersey, West Orange, Bayonne, Dr. Iyengar, cancer treatment, chemotherapy, radiation therapy, clinical trials, blood disorders",
  authors: [{ name: "Iyengar Hematology & Oncology Medical Center" }],
  creator: "Iyengar Hematology & Oncology Medical Center",
  publisher: "Iyengar Hematology & Oncology Medical Center",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Iyengar Hematology & Oncology Medical Center - Advanced Cancer Care",
    description: "Leading hematology and oncology care with innovative treatments, experienced physicians, and compassionate support throughout the Greater NYC Area.",
    siteName: "Iyengar Hematology & Oncology Medical Center",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iyengar Hematology & Oncology Medical Center - Advanced Cancer Care",
    description: "Leading hematology and oncology care with innovative treatments, experienced physicians, and compassionate support throughout the Greater NYC Area.",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  icons: {
    icon: "/ihomes.svg",
    shortcut: "/ihomes.svg",
    apple: "/ihomes.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="overflow-x-hidden">
        <Header />
        <main className="min-h-screen pt-16 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
