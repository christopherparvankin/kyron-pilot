import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <div style={{display: 'block', minHeight: '60px', backgroundColor: 'white', borderBottom: '1px solid #ccc', padding: '10px'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{fontWeight: 'bold', fontSize: '20px', color: '#1f2937'}}>Arjun Iyengar Hematology Oncology Medical Center</div>
            <nav style={{display: 'flex', gap: '20px'}}>
              <a href="/services" style={{color: '#374151', textDecoration: 'none'}}>Services</a>
              <a href="/innovations" style={{color: '#374151', textDecoration: 'none'}}>Innovations</a>
              <a href="/providers" style={{color: '#374151', textDecoration: 'none'}}>Providers</a>
              <a href="/about" style={{color: '#374151', textDecoration: 'none'}}>About</a>
            </nav>
          </div>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
