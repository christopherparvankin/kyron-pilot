import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NY Oncologists - Advanced Cancer Care in New York",
  description:
    "Leading cancer care with innovative treatments, experienced oncologists, and compassionate support throughout New York.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main style={{ paddingTop: '80px', minHeight: '100vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
