"use client";

import { useState, useEffect } from "react";
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
  Heart,
  Shield,
  Users,
  Star,
  CheckCircle
} from "lucide-react";

export default function LocationsPage() {
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const locations = [
    {
      id: 1,
      name: "Main Office - Manhattan",
      address: {
        street: "123 Medical Center Drive",
        city: "New York",
        state: "NY",
        zipCode: "10001"
      },
      phone: "(555) 123-4567",
      email: "manhattan@nyoncologists.com",
      hours: [
        { day: "Monday - Friday", open: "8:00 AM", close: "5:00 PM", closed: false },
        { day: "Saturday", open: "9:00 AM", close: "1:00 PM", closed: false },
        { day: "Sunday", open: "", close: "", closed: true }
      ],
      features: ["Full Services", "Parking Available", "Public Transit Access"]
    },
    {
      id: 2,
      name: "Brooklyn Location",
      address: {
        street: "456 Healthcare Plaza",
        city: "Brooklyn",
        state: "NY",
        zipCode: "11201"
      },
      phone: "(555) 123-4568",
      email: "brooklyn@nyoncologists.com",
      hours: [
        { day: "Monday - Friday", open: "8:00 AM", close: "5:00 PM", closed: false },
        { day: "Saturday", open: "", close: "", closed: true },
        { day: "Sunday", open: "", close: "", closed: true }
      ],
      features: ["Oncology Services", "Free Parking", "Wheelchair Accessible"]
    },
    {
      id: 3,
      name: "Queens Medical Center",
      address: {
        street: "789 Health Street",
        city: "Queens",
        state: "NY",
        zipCode: "11375"
      },
      phone: "(555) 123-4569",
      email: "queens@nyoncologists.com",
      hours: [
        { day: "Monday - Friday", open: "8:00 AM", close: "5:00 PM", closed: false },
        { day: "Saturday", open: "9:00 AM", close: "2:00 PM", closed: false },
        { day: "Sunday", open: "", close: "", closed: true }
      ],
      features: ["Specialized Care", "Valet Parking", "Multilingual Staff"]
    },
    {
      id: 4,
      name: "Bronx Cancer Center",
      address: {
        street: "321 Wellness Avenue",
        city: "Bronx",
        state: "NY",
        zipCode: "10451"
      },
      phone: "(555) 123-4570",
      email: "bronx@nyoncologists.com",
      hours: [
        { day: "Monday - Friday", open: "8:00 AM", close: "5:00 PM", closed: false },
        { day: "Saturday", open: "", close: "", closed: true },
        { day: "Sunday", open: "", close: "", closed: true }
      ],
      features: ["Community Focus", "Financial Assistance", "Support Groups"]
    }
  ];

  const features = [
    {
      title: "Convenience",
      description: "Multiple locations mean shorter travel times and easier access to care",
      icon: MapPin,
      stats: "5+ Locations"
    },
    {
      title: "Flexible Scheduling",
      description: "More appointment availability and scheduling options",
      icon: Clock,
      stats: "7 Days/Week"
    },
    {
      title: "Continuity of Care",
      description: "Seamless care coordination across all locations",
      icon: Heart,
      stats: "100% Coordinated"
    },
    {
      title: "Expert Care",
      description: "Same high-quality care at every location",
      icon: Shield,
      stats: "Consistent Quality"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer R.",
      quote: "The Brooklyn location was so convenient for me. The same excellent care I received at the main office.",
      rating: 5
    },
    {
      name: "Michael T.",
      quote: "I love that I can visit different locations based on my schedule. The care is consistent everywhere.",
      rating: 5
    },
    {
      name: "Maria L.",
      quote: "The Queens location had everything I needed and the staff was incredibly helpful and friendly.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <MapPin className="w-4 h-4" />
              <span>Convenient Care</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Locations
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Convenient cancer care locations throughout New York. We're committed to bringing 
              expert oncology care closer to you with multiple locations across the city.
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div
                key={location.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {location.name}
                    </h3>
                    <div className="text-gray-600">
                      <p className="font-medium">
                        {location.address.street}
                      </p>
                      <p>
                        {location.address.city}, {location.address.state} {location.address.zipCode}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a
                        href={`tel:${location.phone}`}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href={`mailto:${location.email}`}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {location.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Office Hours</p>
                      <div className="text-gray-600">
                        <div className="space-y-1">
                          {location.hours.map((hour, hourIndex) => (
                            <div key={hourIndex} className="flex justify-between">
                              <span className="font-medium">{hour.day}</span>
                              <span>
                                {hour.closed ? "Closed" : `${hour.open} - ${hour.close}`}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {location.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/appointment"
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center inline-flex items-center justify-center transform hover:scale-105"
                  >
                    <Calendar className="mr-2 w-4 h-4" />
                    Schedule Appointment
                  </Link>
                  <a
                    href={`https://maps.google.com/?q=${location.address.street}, ${location.address.city}, ${location.address.state} ${location.address.zipCode}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center inline-flex items-center justify-center transform hover:scale-105"
                  >
                    <Navigation className="mr-2 w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Multiple Locations?</h2>
            <p className="text-xl opacity-90">
              We believe cancer care should be accessible and convenient for all patients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className={`text-center group ${
                    activeFeature === index ? 'transform scale-105' : ''
                  } transition-all duration-500`}
                >
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{feature.stats}</div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="opacity-90">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Experiences</h2>
            <p className="text-xl text-gray-600">
              Hear from patients about their experience at our different locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="font-semibold text-gray-900">— {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
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
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
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