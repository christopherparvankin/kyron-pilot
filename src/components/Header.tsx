import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "For Patients", href: "/patients" },
    { name: "Treatments & Services", href: "/services" },
    { name: "Physicians & Locations", href: "/providers" },
    { name: "Cancer Types", href: "/cancer-types" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className="bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
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
            <div className="flex items-center space-x-4">
              <Link href="/patient-portal" className="hover:text-blue-200">
                Patient Portal
              </Link>
              <Link href="/pay-bill" className="hover:text-blue-200">
                Pay My Bill
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">NY</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                NY Oncologists
              </h1>
              <p className="text-sm text-gray-600">Advanced Cancer Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/appointment"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Appointment
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
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
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
                Request Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
