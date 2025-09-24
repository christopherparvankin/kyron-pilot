"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Treatments & Services", href: "/services" },
    { name: "Innovations", href: "/innovations" },
    { name: "Physicians", href: "/providers" },
    { name: "Locations", href: "/locations" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header 
      className="shadow-lg fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-[#123447] to-[#1a4a5c] border-b-2 border-[#C69F59]"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        width: '100%'
      }}
    >
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 flex-shrink-0">
            <div className="w-32 h-16">
              <img 
                src="/ihomes.svg" 
                alt="Arjun Iyengar Hematology Oncology Medical Center" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium transition-colors text-sm hover:scale-105 text-[#FFF8DC] hover:text-[#C69F59]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm whitespace-nowrap text-[#123447] shadow-lg hover:shadow-xl"
              style={{ 
                background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)',
                boxShadow: '0 4px 15px rgba(198, 159, 89, 0.2)'
              }}
            >
              Contact Us
            </Link>
            <Link
              href="/appointment"
              className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm whitespace-nowrap shadow-lg text-[#123447] hover:shadow-xl"
              style={{ 
                background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)',
                boxShadow: '0 4px 15px rgba(198, 159, 89, 0.2)'
              }}
            >
              Request an Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 ml-2 text-[#FFF8DC] hover:text-[#C69F59] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t-2 border-[#C69F59]">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium py-2 transition-colors text-[#FFF8DC] hover:text-[#C69F59]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 mt-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg text-[#123447] hover:shadow-xl"
                  style={{ 
                    background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)',
                    boxShadow: '0 4px 15px rgba(198, 159, 89, 0.2)'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/appointment"
                  className="px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg text-[#123447] hover:shadow-xl"
                  style={{ 
                    background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)',
                    boxShadow: '0 4px 15px rgba(198, 159, 89, 0.2)'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Request an Appointment
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}