import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  User,
  CreditCard,
  Calendar,
  Stethoscope,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h1 className="text-2xl font-black text-white mb-4">
                Iyengar
              </h1>
              <h2 className="text-lg font-black mb-2 text-white">
                Hematology & Oncology Medical Center
              </h2>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading cancer care with innovative treatments and compassionate
              support throughout the Greater NYC Area. Together, we fight cancer with hope,
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
                  <p className="text-gray-400">Bayonne: (201) 858-1211</p>
                  <p className="text-gray-400">West Orange: (973) 457-8728</p>
                  <p className="text-gray-500 text-sm">Call for appointments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-soft-400 mt-1" />
                <div>
                  <p className="text-gray-400">patient@ihomes.org</p>
                  <p className="text-gray-500 text-sm">Email us anytime</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Our Locations
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-gray-300 font-medium mb-2">Bayonne Clinic</h5>
                <p className="text-gray-400 text-sm">27 E 29th St</p>
                <p className="text-gray-400 text-sm">Bayonne, NJ 07002</p>
                <p className="text-gray-500 text-xs mt-1">Mon-Thu: 10AM-5:30PM</p>
              </div>
              <div>
                <h5 className="text-gray-300 font-medium mb-2">West Orange Clinic</h5>
                <p className="text-gray-400 text-sm">393 Northfield Ave</p>
                <p className="text-gray-400 text-sm">West Orange, NJ 07052</p>
                <p className="text-gray-500 text-xs mt-1">Thu: 9AM-4PM</p>
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
