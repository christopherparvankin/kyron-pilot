"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Calendar,
  ArrowRight,
  Navigation,
  Sparkles,
  Users,
  CheckCircle
} from "lucide-react";

export default function LocationsPage() {
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  const locations = [
    {
      id: 1,
      name: "Bayonne Clinic",
      address: {
        street: "27 E 29th St",
        city: "Bayonne",
        state: "NJ",
        zipCode: "07002"
      },
      phone: "201-858-1211",
      fax: "201-858-4171",
      email: "patient@ihomes.org",
      hours: [
        { day: "Monday - Thursday", open: "10:00 AM", close: "5:30 PM", closed: false },
        { day: "Friday - Sunday", open: "", close: "", closed: true }
      ],
      features: ["Full Services", "Free Parking", "Wheelchair Accessible"]
    },
    {
      id: 2,
      name: "West Orange Clinic",
      address: {
        street: "393 Northfield Ave",
        city: "West Orange",
        state: "NJ",
        zipCode: "07052"
      },
      phone: "973-457-8728",
      fax: "973-457-8729",
      email: "patient@ihomes.org",
      hours: [
        { day: "Monday-Wednesday, Friday-Sunday", open: "", close: "", closed: true },
        { day: "Thursday", open: "9:00 AM", close: "4:00 PM", closed: false }
      ],
      features: ["Oncology Services", "Free Parking", "Multilingual Staff"]
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 page-content">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(/stock/AdobeStock_58897104.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <MapPin className="w-4 h-4" />
              <span>Convenient Care</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                Our Locations
              </span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-lg">
              Convenient cancer care locations throughout the greater New York area. We're committed to bringing 
              expert oncology care closer to you with multiple locations across the region.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find a Location Near You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the location most convenient for your care needs
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <div
                key={location.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Location Information */}
                  <div className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-soft-500 to-soft-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-soft-600 transition-colors">
                      {location.name}
                    </h3>
                    <div className="text-gray-600 text-sm">
                      <p className="font-medium mb-1">
                        {location.address.street}
                      </p>
                      <p>
                        {location.address.city}, {location.address.state} {location.address.zipCode}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-soft-600" />
                    <div>
                      <span className="font-medium text-gray-900 text-sm">Phone: </span>
                      <a
                        href={`tel:${location.phone}`}
                        className="text-soft-600 hover:text-soft-700 transition-colors text-sm"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  {location.fax && (
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-soft-600" />
                      <div>
                        <span className="font-medium text-gray-900 text-sm">Fax: </span>
                        <span className="text-gray-600 text-sm">
                          {location.fax}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-soft-600" />
                    <div>
                      <span className="font-medium text-gray-900 text-sm">Email: </span>
                      <a
                        href={`mailto:${location.email}`}
                        className="text-soft-600 hover:text-soft-700 transition-colors text-sm break-all"
                      >
                        {location.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-soft-600 mt-1" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm mb-2">Office Hours</p>
                      <div className="text-gray-600 text-xs">
                        <div className="space-y-1">
                          {location.hours.map((hour, hourIndex) => (
                            <div key={hourIndex} className="flex justify-between items-center py-1">
                              <span className="font-medium">{hour.day}</span>
                              <span>
                                {hour.closed ? (
                                  <span className="text-red-500 font-medium">Closed</span>
                                ) : (
                                  <span className="text-green-600 font-medium">{hour.open} - {hour.close}</span>
                                )}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/appointment"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors text-center inline-flex items-center justify-center text-sm"
                    >
                      <Calendar className="mr-1 w-3 h-3" />
                      Schedule Appointment
                    </Link>
                    <a
                      href={`https://maps.google.com/?q=${location.address.street}, ${location.address.city}, ${location.address.state} ${location.address.zipCode}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors text-center inline-flex items-center justify-center text-sm"
                    >
                      <Navigation className="mr-1 w-3 h-3" />
                      Get Directions
                    </a>
                  </div>
                </div>

                  {/* Map Section */}
                  <div className="relative">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        `${location.address.street}, ${location.address.city}, ${location.address.state} ${location.address.zipCode}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-100 h-full hover:bg-gray-200 transition-colors duration-300 group"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative min-h-64">
                        {/* Map Icon */}
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{location.name}</h4>
                          <p className="text-gray-600 mb-3 text-sm">
                            {location.address.street}<br />
                            {location.address.city}, {location.address.state} {location.address.zipCode}
                          </p>
                          <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md font-medium group-hover:bg-blue-700 transition-colors text-sm">
                            <Navigation className="w-4 h-4 mr-1" />
                            View on Google Maps
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-soft-700 to-primary-700">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Visit One of Our Locations?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Schedule your appointment at the location most convenient for you. 
              All our locations provide the same high-quality, compassionate care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Appointment
              </Link>
              <Link
                href="/providers"
                className="!bg-white !text-blue-900 px-8 py-4 rounded-lg font-semibold hover:!bg-blue-50 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Users className="mr-2 w-5 h-5" />
                Find a Provider
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}