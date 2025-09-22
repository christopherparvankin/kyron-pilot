"use client";

import { useState, useEffect } from "react";
import { 
  Pill, 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Shield, 
  Heart, 
  Wifi,
  Coffee,
  Book,
  Music,
  Tv,
  WifiIcon,
  Users,
  Star,
  ArrowRight,
  Calendar,
  FileText,
  Phone,
  MapPin,
  Clock3,
  Truck,
  CreditCard,
  AlertCircle,
  Zap,
  Target
} from "lucide-react";
import Link from "next/link";

export default function PharmacyPage() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const services = [
    {
      title: "Oncology Medications",
      description: "Specialized cancer treatment medications and supportive care drugs",
      icon: Pill,
      color: "from-orange-500 to-orange-700"
    },
    {
      title: "Compounding Services",
      description: "Custom medication preparation for individual patient needs",
      icon: Zap,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Medication Counseling",
      description: "Expert guidance on medication management and side effects",
      icon: Heart,
      color: "from-green-500 to-green-700"
    },
    {
      title: "Insurance Coordination",
      description: "Help with insurance coverage and prior authorizations",
      icon: Shield,
      color: "from-purple-500 to-purple-700"
    }
  ];

  const benefits = [
    {
      title: "Convenience",
      description: "Pick up medications during your visit",
      icon: Clock,
      stats: "Same-day pickup"
    },
    {
      title: "Expertise",
      description: "Specialized oncology pharmacy knowledge",
      icon: Target,
      stats: "100% specialized"
    },
    {
      title: "Coordination",
      description: "Seamless integration with your care team",
      icon: Users,
      stats: "24/7 support"
    },
    {
      title: "Cost Savings",
      description: "Competitive pricing and insurance optimization",
      icon: CreditCard,
      stats: "Up to 30% savings"
    }
  ];

  const testimonials = [
    {
      name: "Robert K.",
      quote: "Having the pharmacy right in the building made everything so much easier. The pharmacist explained everything clearly and helped with insurance issues.",
      rating: 5
    },
    {
      name: "Susan M.",
      quote: "The compounding service was amazing. They made my medication in the exact dose I needed, and it was ready the same day.",
      rating: 5
    },
    {
      name: "James L.",
      quote: "The medication counseling really helped me understand my treatment. The pharmacist spent time explaining everything and answering all my questions.",
      rating: 5
    }
  ];

  const medicationTypes = [
    {
      name: "Chemotherapy Drugs",
      description: "Advanced chemotherapy medications",
      icon: Pill,
      availability: "In Stock"
    },
    {
      name: "Supportive Care",
      description: "Medications to manage side effects",
      icon: Heart,
      availability: "In Stock"
    },
    {
      name: "Immunotherapy",
      description: "Latest immunotherapy treatments",
      icon: Shield,
      availability: "Special Order"
    },
    {
      name: "Compounded Medications",
      description: "Custom-prepared medications",
      icon: Zap,
      availability: "24-48 hours"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/innovations" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Innovations
          </Link>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center">
              <Pill className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">In-House Pharmacy</h1>
              <p className="text-xl text-gray-600">Specialized oncology pharmacy services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Specialized Care</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Pharmacy
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Excellence</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our in-house pharmacy specializes in oncology medications and provides 
                comprehensive pharmaceutical care. From specialized cancer drugs to 
                compounding services, we ensure you have access to the medications you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors transform hover:scale-105">
                  Visit Pharmacy
                </button>
                <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors">
                  Check Availability
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pharmacy Services</h3>
                <div className="space-y-4">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div 
                        key={index}
                        className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 ${
                          activeService === index 
                            ? 'bg-orange-50 border-2 border-orange-200 transform scale-105' 
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          activeService === index 
                            ? 'bg-gradient-to-br from-orange-500 to-orange-700 text-white' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{service.title}</h4>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                        {activeService === index && (
                          <CheckCircle className="w-6 h-6 text-orange-600 animate-pulse" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Pharmacy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized oncology pharmacy services designed for your convenience and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <div className={`
                    w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700
                    flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                    ${hoveredBenefit === index ? 'shadow-2xl' : 'shadow-lg'}
                  `}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{benefit.stats}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Medication Types Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Medication Inventory</h2>
            <p className="text-xl opacity-90">
              Comprehensive selection of oncology medications and specialized treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {medicationTypes.map((medication, index) => {
              const IconComponent = medication.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white group hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{medication.name}</h3>
                  <p className="text-gray-200 mb-4">{medication.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>{medication.availability}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Experiences</h2>
            <p className="text-xl text-gray-600">
              Hear from patients who have used our pharmacy services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
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

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Pharmacy Contact</h2>
              <p className="text-xl text-gray-600">
                Get in touch with our pharmacy team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Pharmacy</h3>
                <p className="text-gray-600 mb-2">(555) 123-4567</p>
                <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Delivery Service</h3>
                <p className="text-gray-600 mb-2">Free delivery</p>
                <p className="text-sm text-gray-500">Same-day available</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-2">In-house location</p>
                <p className="text-sm text-gray-500">Ground floor</p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors transform hover:scale-105 mr-4">
                Contact Pharmacy
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors">
                Request Refill
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
