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
  Star,
  Sparkles,
  Heart,
  Shield,
  Award,
  Users
} from "lucide-react";

export default function AppointmentPage() {
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const contactMethods = [
    {
      id: 1,
      title: "Call Us",
      description: "Speak directly with our scheduling team",
      icon: Phone,
      value: "Bayonne: (201) 858-1211 | West Orange: (973) 457-8728",
      details: "Available Monday - Thursday, 10:00 AM - 5:30 PM",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Email Us",
      description: "Send us your appointment request",
      icon: Mail,
      value: "patient@ihomes.org",
      details: "We'll respond within 24 hours",
      color: "from-green-500 to-green-700"
    },
    {
      id: 3,
      title: "Visit Us",
      description: "Come to our office in person",
      icon: MapPin,
      value: "27 E 29th St, Bayonne, NJ 07002 | 393 Northfield Ave, West Orange, NJ 07052",
      details: "Walk-ins welcome during business hours",
      color: "from-purple-500 to-purple-700"
    }
  ];

  const features = [
    {
      title: "Quick Scheduling",
      description: "Get an appointment within 24-48 hours",
      icon: Clock,
      stats: "24-48 hours"
    },
    {
      title: "Expert Care",
      description: "Board-certified oncologists",
      icon: Award,
      stats: "100% certified"
    },
    {
      title: "Multiple Locations",
      description: "Convenient care centers",
      icon: MapPin,
      stats: "5+ locations"
    },
    {
      title: "24/7 Support",
      description: "Always here when you need us",
      icon: Heart,
      stats: "Always available"
    }
  ];


  const testimonials = [
    {
      name: "Sarah M.",
      quote: "The scheduling process was so easy and the staff was incredibly helpful. I got an appointment within 24 hours.",
      rating: 5
    },
    {
      name: "Robert K.",
      quote: "From the first call to the appointment, everything was seamless. The team made me feel comfortable and cared for.",
      rating: 5
    },
    {
      name: "Maria L.",
      quote: "The online form made it easy to request an appointment, and they called me back the same day to confirm.",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 page-content">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" style={{
        background: 'linear-gradient(to right, #123447, #1a4a5c)',
        borderBottom: '2px solid #C69F59'
      }}>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Calendar className="w-4 h-4" />
              <span>Easy Scheduling</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent drop-shadow-2xl">
                Request an
              </span>
              <br />
              <span className="text-white drop-shadow-lg">Appointment</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-lg">
              Schedule your consultation with our expert oncologists. We're here to help you 
              take the next step in your cancer care journey with compassionate, expert care.
            </p>
          </div>
        </div>
      </section>


      {/* Contact Methods */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for your appointment needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={method.id}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  onMouseEnter={() => setHoveredContact(method.id)}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  <div className={`
                    w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} 
                    flex items-center justify-center mb-6 group-hover:scale-110 
                    transition-transform duration-300
                  `}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {method.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-900">
                      {method.value}
                    </p>
                    <p className="text-sm text-gray-500">
                      {method.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>




      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-gray-900">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Begin Your Care Journey?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Our compassionate team is here to support you every step of the way. 
              Contact us today to schedule your consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:201-858-1211"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Bayonne
              </a>
              <a
                href="tel:973-457-8728"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call West Orange
              </a>
              <Link
                href="/providers"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
              >
                <Users className="mr-2 w-5 h-5" />
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}