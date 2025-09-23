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
    <header className="bg-white shadow-lg sticky top-0 z-50 w-full border-b-2 border-gray-200">
      {/* Top Bar */}
      <div className="bg-soft-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Call: (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Multiple NY Locations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 flex-shrink-0">
            <div className="w-24 h-12">
              <img 
                src="/ihomes.svg" 
                alt="Arjun Iyengar Hematology Oncology Medical Center" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden lg:block">
              <h1 className="text-xl font-bold leading-tight tracking-wide">
                <span className="bg-gradient-to-r from-soft-600 to-primary-600 bg-clip-text text-transparent">
                  Iyengar
                </span>
              </h1>
              <p className="text-sm font-semibold leading-tight tracking-wide mt-0.5">
                <span className="bg-gradient-to-r from-soft-500 to-primary-500 bg-clip-text text-transparent">
                  Hematology & Oncology Medical Center
                </span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-soft-600 font-medium transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link
              href="/appointment"
              className="bg-soft-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-soft-700 transition-colors text-sm whitespace-nowrap"
            >
              <span className="hidden sm:inline">Request an Appointment</span>
              <span className="sm:hidden">Book Now</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 ml-2"
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
          <div className="md:hidden py-4 border-t border-gray-200">
            {/* Mobile Logo Text */}
            <div className="md:hidden mb-4 pb-4 border-b border-gray-100">
              <h1 className="text-lg font-bold leading-tight tracking-wide">
                <span className="bg-gradient-to-r from-soft-600 to-primary-600 bg-clip-text text-transparent">
                  Iyengar
                </span>
              </h1>
              <p className="text-xs font-semibold leading-tight tracking-wide mt-0.5">
                <span className="bg-gradient-to-r from-soft-500 to-primary-500 bg-clip-text text-transparent">
                  Hematology & Oncology Medical Center
                </span>
              </p>
            </div>
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-soft-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/appointment"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors mt-4"
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