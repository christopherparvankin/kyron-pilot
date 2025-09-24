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
    <header className="shadow-lg sticky top-0 z-50 w-full" style={{ 
      background: 'linear-gradient(135deg, #123447 0%, #1a4a5c 100%)',
      borderBottom: '2px solid #C69F59'
    }}>

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
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium transition-colors text-sm hover:scale-105"
                style={{ color: '#FFF8DC' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#C69F59';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#FFF8DC';
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm whitespace-nowrap border-2"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 248, 220, 0.1) 0%, rgba(232, 184, 109, 0.1) 100%)',
                color: '#FFF8DC', 
                borderColor: '#C69F59' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)';
                e.currentTarget.style.color = '#123447';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(198, 159, 89, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 248, 220, 0.1) 0%, rgba(232, 184, 109, 0.1) 100%)';
                e.currentTarget.style.color = '#FFF8DC';
                e.currentTarget.style.borderColor = '#C69F59';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(198, 159, 89, 0.2)';
              }}
            >
              <span className="hidden sm:inline">Contact Us</span>
              <span className="sm:hidden">Contact</span>
            </Link>
            <Link
              href="/appointment"
              className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm whitespace-nowrap shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)',
                color: '#123447'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #E8B86D 0%, #C69F59 100%)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(198, 159, 89, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(198, 159, 89, 0.2)';
              }}
            >
              <span className="hidden sm:inline">Request an Appointment</span>
              <span className="sm:hidden">Book Now</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: '#FFF8DC' }}
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
          <div className="md:hidden py-4" style={{ borderTop: '1px solid #C69F59' }}>
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium py-2 transition-colors"
                  style={{ color: '#FFF8DC' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#C69F59';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#FFF8DC';
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 mt-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 border-2"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255, 248, 220, 0.1) 0%, rgba(232, 184, 109, 0.1) 100%)',
                    color: '#FFF8DC', 
                    borderColor: '#C69F59' 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)';
                    e.currentTarget.style.color = '#123447';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(198, 159, 89, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 248, 220, 0.1) 0%, rgba(232, 184, 109, 0.1) 100%)';
                    e.currentTarget.style.color = '#FFF8DC';
                    e.currentTarget.style.borderColor = '#C69F59';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(198, 159, 89, 0.2)';
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/appointment"
                  className="px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{ 
                    background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)',
                    color: '#123447'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #E8B86D 0%, #C69F59 100%)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(198, 159, 89, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(198, 159, 89, 0.2)';
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