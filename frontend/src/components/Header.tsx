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

  // Ensure navigation is visible on desktop
  useEffect(() => {
    const handleResize = () => {
      const desktopNav = document.querySelector('.desktop-nav') as HTMLElement;
      const desktopCta = document.querySelector('.desktop-cta') as HTMLElement;
      const mobileCta = document.querySelector('.mobile-cta') as HTMLElement;
      
      if (window.innerWidth >= 1024) {
        // Desktop view
        if (desktopNav) {
          desktopNav.style.display = 'flex';
          desktopNav.style.visibility = 'visible';
          desktopNav.style.opacity = '1';
        }
        if (desktopCta) {
          desktopCta.style.display = 'flex';
          desktopCta.style.visibility = 'visible';
          desktopCta.style.opacity = '1';
        }
        if (mobileCta) {
          mobileCta.style.display = 'none';
        }
      } else {
        // Mobile view
        if (desktopNav) {
          desktopNav.style.display = 'none';
        }
        if (desktopCta) {
          desktopCta.style.display = 'none';
        }
        if (mobileCta) {
          mobileCta.style.display = 'flex';
          mobileCta.style.visibility = 'visible';
          mobileCta.style.opacity = '1';
        }
      }
    };

    // Run on mount and resize
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <nav 
            className="hidden lg:flex items-center space-x-4 xl:space-x-6 desktop-nav"
            style={{
              display: 'none',
              visibility: 'hidden',
              opacity: '0'
            }}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium transition-colors text-sm hover:scale-105 whitespace-nowrap"
                style={{
                  color: '#FFF8DC',
                  textDecoration: 'none',
                  display: 'inline-block',
                  visibility: 'visible',
                  opacity: '1'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#C69F59'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#FFF8DC'}
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

          {/* Mobile CTA Buttons - Visible on mobile */}
          <div className="flex lg:hidden items-center space-x-2 mobile-cta">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-2 py-1 rounded text-xs font-semibold"
              style={{
                background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)',
                color: '#123447',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(198, 159, 89, 0.2)'
              }}
            >
              Contact
            </button>
            <Link
              href="/appointment"
              className="px-2 py-1 rounded text-xs font-semibold"
              style={{ 
                background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)',
                color: '#123447',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 2px 8px rgba(198, 159, 89, 0.2)'
              }}
            >
              Book
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{
              color: '#FFF8DC',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#C69F59'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#FFF8DC'}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Slide down menu */}
        {isMenuOpen && (
          <div 
            className="lg:hidden mobile-menu"
            style={{
              borderTop: '1px solid #C69F59',
              background: 'linear-gradient(to right, #123447, #1a4a5c)'
            }}
          >
            <div className="py-4 px-2">
              {/* Navigation Links */}
              <nav className="flex flex-col space-y-3 mb-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-medium py-3 px-4 rounded-lg transition-colors hover:bg-white/10 text-center"
                    style={{
                      color: '#FFF8DC',
                      textDecoration: 'none'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#C69F59';
                      target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#FFF8DC';
                      target.style.backgroundColor = 'transparent';
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-3 pt-2" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <button
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                  className="px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{ 
                    background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)',
                    color: '#123447',
                    textDecoration: 'none',
                    display: 'block',
                    boxShadow: '0 4px 15px rgba(198, 159, 89, 0.2)'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Request an Appointment
                </Link>
              </div>
            </div>
          </div>
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