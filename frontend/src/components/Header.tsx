"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

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
    <header className="bg-sage-50 shadow-lg sticky top-0 z-50 w-full border-b-2 border-sage-200">

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10C45 15 40 20 40 30C40 35 42 40 50 45C58 40 60 35 60 30C60 20 55 15 50 10Z" stroke="#E91E63" strokeWidth="3" fill="none"/>
                <path d="M20 25C25 20 30 22 35 27C40 32 35 42 30 47C25 42 20 32 20 25Z" stroke="#E91E63" strokeWidth="3" fill="none"/>
                <path d="M80 25C75 20 70 22 65 27C60 32 65 42 70 47C75 42 80 32 80 25Z" stroke="#E91E63" strokeWidth="3" fill="none"/>
                <path d="M30 47C35 42 40 47 50 52C40 57 35 57 30 52Z" stroke="#E91E63" strokeWidth="3" fill="none"/>
                <path d="M70 47C65 42 60 47 50 52C60 57 65 57 70 52Z" stroke="#E91E63" strokeWidth="3" fill="none"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Iyengar
              </h1>
              <p className="text-sm text-gray-600 mt-0">Hematology & Oncology Medical Center</p>
            </div>
          </Link>

          {/* Large spacer to separate logo from navigation */}
          <div className="flex-1 max-w-32"></div>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-8 flex-shrink-0">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sage-700 hover:text-sage-600 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <Link
              href="/appointment"
              className="bg-sage-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sage-700 transition-colors"
            >
              Request an Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sage-700 hover:text-sage-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/appointment"
                className="bg-soft-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-soft-700 transition-colors mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Request an Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}