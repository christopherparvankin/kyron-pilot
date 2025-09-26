"use client";

import { useState } from "react";
import { X, Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  const contactMethods = [
    {
      title: "Call Us",
      description: "Speak directly with our team",
      icon: Phone,
      details: [
        "Bayonne: (201) 858-1211",
        "West Orange: (973) 457-8728",
        "Available Monday - Friday, 8:00 AM - 5:00 PM"
      ],
      action: "Call Now",
      href: "tel:201-858-1211"
    },
    {
      title: "Email Us",
      description: "Send us your message",
      icon: Mail,
      details: [
        "patient@ihomes.org",
        "We'll respond within 24 hours"
      ],
      action: "Send Email",
      href: "mailto:patient@ihomes.org"
    },
    {
      title: "Visit Us",
      description: "Come to our office",
      icon: MapPin,
      details: [
        "Bayonne: 27 E 29th St, Bayonne, NJ 07002",
        "West Orange: 393 Northfield Ave, West Orange, NJ 07052"
      ],
      action: "Get Directions",
      href: "https://maps.google.com/?q=27+E+29th+St,+Bayonne,+NJ+07002"
    }
  ];

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
        <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-[#123447] to-[#1a4a5c] text-white p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Contact Us</h2>
                <p className="text-blue-100 text-sm sm:text-base">Get in touch with our team</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-[#C69F59] transition-colors p-1 sm:p-2"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#123447] to-[#1a4a5c] rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">{method.title}</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">{method.description}</p>
                      </div>
                    </div>

                    <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      {method.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>

                    <a
                      href={method.href}
                      className="inline-flex items-center justify-center w-full bg-[#123447] text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold hover:bg-[#1a4a5c] transition-colors text-sm sm:text-base"
                    >
                      {method.action}
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Office Hours */}
            <div className="mt-6 sm:mt-8 bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                Office Hours
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Bayonne Clinic</h4>
                  <p className="text-gray-700 text-xs sm:text-sm">Monday - Thursday: 10:00 AM - 5:30 PM</p>
                  <p className="text-gray-700 text-xs sm:text-sm">Friday: Closed</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">West Orange Clinic</h4>
                  <p className="text-gray-700 text-xs sm:text-sm">Thursday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-700 text-xs sm:text-sm">Monday-Wednesday, Friday-Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="mt-4 sm:mt-6 bg-yellow-50 border border-yellow-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <p className="text-yellow-800 text-xs sm:text-sm leading-relaxed">
                <strong>Emergency:</strong> For urgent medical concerns outside of office hours, 
                please call your local emergency services or visit the nearest emergency room.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-gray-50 p-4 sm:p-6 rounded-b-xl sm:rounded-b-2xl border-t">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={onClose}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm sm:text-base"
              >
                Close
              </button>
              <a
                href="/appointment"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-[#C69F59] text-[#123447] rounded-lg font-semibold hover:bg-[#E8B86D] transition-colors text-center text-sm sm:text-base"
              >
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                Schedule Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
