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
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">NY</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">NY Oncologists</h3>
                <p className="text-sm text-gray-400">Advanced Cancer Care</p>
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
                <Phone className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">(555) 123-4567</p>
                  <p className="text-gray-500 text-sm">Call for appointments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">info@nyoncologists.com</p>
                  <p className="text-gray-500 text-sm">Email us anytime</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
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
                © 2024 NY Oncologists. All rights reserved.
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
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
