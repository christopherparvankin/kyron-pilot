import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import ClientHeader from "./ClientHeader";

export default function Header() {

  const navigation = [
    { name: "Treatments & Services", href: "/services" },
    { name: "Innovations", href: "/innovations" },
    { name: "Physicians & Locations", href: "/providers" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header 
      className="bg-white shadow-lg sticky top-0 z-50 w-full" 
      style={{
        display: 'block !important',
        minHeight: '80px',
        position: 'sticky',
        top: '0',
        zIndex: '9999',
        backgroundColor: 'white',
        width: '100%',
        borderBottom: '2px solid #e5e7eb'
      }}
    >
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
              {/* Removed Patient Portal and Pay My Bill links */}
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
                Arjun Iyengar Hematology Oncology Medical Center
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
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/appointment"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request an Appointment
            </Link>
          </div>

          <ClientHeader navigation={navigation} />
        </div>
      </div>
    </header>
  );
}
