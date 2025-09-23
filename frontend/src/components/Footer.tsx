import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  User,
  CreditCard,
  Calendar,
  Stethoscope,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
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
                <h3 className="text-xl font-bold">Iyengar</h3>
                <p className="text-sm text-gray-400 -mt-1">
                  Hematology & Oncology Medical Center
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading cancer care with innovative treatments and compassionate
              support throughout New York. Together, we fight cancer with hope,
              expertise, and cutting-edge technology.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-soft-400 mt-1" />
                <div>
                  <p className="text-gray-400">(555) 123-4567</p>
                  <p className="text-gray-500 text-sm">Call for appointments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-soft-400 mt-1" />
                <div>
                  <p className="text-gray-400">info@nyoncologists.com</p>
                  <p className="text-gray-500 text-sm">Email us anytime</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-soft-400 mt-1" />
                <div>
                  <p className="text-gray-400">Multiple NY Locations</p>
                  <p className="text-gray-500 text-sm">
                    <Link href="/locations" className="hover:text-white">
                      View all locations
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2025 Iyengar Hematology & Oncology Medical Center. All
                rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
