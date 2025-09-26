"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Physicians", href: "/providers" },
    { name: "Locations", href: "/locations" },
    { name: "About", href: "/about" },
  ];

  // Remove the complex useEffect that manipulates DOM styles
  // Tailwind classes handle responsive visibility properly

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 w-full shadow-lg"
      style={{
        background: 'linear-gradient(to right, #123447, #1a4a5c)',
        borderBottom: '2px solid #C69F59'
      }}
    >
      <div className="container mx-auto px-4">
        {/* Main Header Row */}
        <div className="flex items-center justify-between py-2 sm:py-3">
          {/* Logo - Responsive sizing */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-32 md:h-16">
              <img 
                src="/ihomes.svg" 
                alt="Iyengar Hematology Oncology Medical Center" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 desktop-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium transition-colors text-base hover:scale-105 whitespace-nowrap px-3 py-2 rounded-md hover:bg-white/10 text-[#FFF8DC] hover:text-[#C69F59]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 desktop-cta">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-3 py-2 xl:px-4 xl:py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-xs xl:text-sm whitespace-nowrap shadow-lg hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)',
                color: '#123447',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(198, 159, 89, 0.2)'
              }}
            >
              Contact Us
            </button>
            <Link
              href="/appointment"
              className="px-3 py-2 xl:px-4 xl:py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-xs xl:text-sm whitespace-nowrap shadow-lg hover:shadow-xl"
              style={{ 
                background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)',
                color: '#123447',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(198, 159, 89, 0.2)'
              }}
            >
              Appointment
            </Link>
          </div>


          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 transition-colors text-[#FFF8DC] hover:text-[#C69F59] bg-none border-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Clean Dropdown */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Dropdown Menu */}
            <div 
              className="absolute top-full left-0 right-0 shadow-2xl border-t z-50 lg:hidden"
              style={{
                background: 'linear-gradient(to right, #123447, #1a4a5c)',
                borderTop: '2px solid #C69F59'
              }}
            >
              <div className="py-1">
                {/* Navigation Links */}
                <nav>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-4 px-6 font-medium text-lg border-b transition-colors text-[#FFF8DC] hover:text-[#C69F59] hover:bg-white/10 border-b-[rgba(255,248,220,0.2)]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* CTA Buttons */}
                <div className="px-6 py-4" style={{ borderTop: '1px solid rgba(255, 248, 220, 0.2)' }}>
                  <button
                    onClick={() => {
                      setIsContactModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full mb-3 px-6 py-3 font-semibold rounded-lg transition-colors"
                    style={{
                      background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)',
                      color: '#123447',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(198, 159, 89, 0.2)'
                    }}
                  >
                    Contact Us
                  </button>
                  <Link
                    href="/appointment"
                    className="block w-full px-6 py-3 font-semibold rounded-lg transition-colors text-center"
                    style={{
                      background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)',
                      color: '#123447',
                      textDecoration: 'none',
                      boxShadow: '0 4px 15px rgba(198, 159, 89, 0.2)'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Schedule Appointment
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </header>
  );
}