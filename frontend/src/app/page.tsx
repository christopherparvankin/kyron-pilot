"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Calendar,
  Stethoscope,
  Users,
  Heart,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  CheckCircle,
  Play,
  Award,
  Target,
  Zap,
  Navigation,
  Video,
  Syringe,
  Pill
} from "lucide-react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const quickAccessCards = [
    {
      id: 1,
      title: "Find a Physician",
      description: "Meet our expert oncologists",
      icon: Users,
      href: "/providers",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Treatments & Services",
      description: "Advanced cancer treatments",
      icon: Stethoscope,
      href: "/services",
      color: "from-green-500 to-green-700"
    },
    {
      id: 3,
      title: "Innovations",
      description: "Cutting-edge care innovations",
      icon: Sparkles,
      href: "/innovations",
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 4,
      title: "First Visit",
      description: "Schedule your consultation",
      icon: Calendar,
      href: "/appointment",
      color: "from-orange-500 to-orange-700"
    }
  ];

  const innovations = [
    {
      title: "Patient Navigation",
      description: "Comprehensive guidance throughout your care journey",
      icon: Navigation,
      href: "/innovations/patient-navigation",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Telehealth Services",
      description: "Advanced virtual care technology",
      icon: Video,
      href: "/innovations/telehealth",
      color: "from-green-500 to-green-700"
    },
    {
      title: "Infusion Center",
      description: "State-of-the-art treatment facility",
      icon: Syringe,
      href: "/innovations/infusion-center",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "In-House Pharmacy",
      description: "Specialized oncology medications",
      icon: Pill,
      href: "/innovations/pharmacy",
      color: "from-orange-500 to-orange-700"
    }
  ];

  const features = [
    {
      title: "Expert Care",
      description: "Board-certified oncologists with decades of experience",
      icon: Award,
      stats: "50+ years"
    },
    {
      title: "Advanced Technology",
      description: "Latest treatments and cutting-edge equipment",
      icon: Target,
      stats: "100% modern"
    },
    {
      title: "Compassionate Support",
      description: "Dedicated care team focused on your well-being",
      icon: Heart,
      stats: "24/7 care"
    },
    {
      title: "Multiple Locations",
      description: "Convenient care centers throughout New York",
      icon: MapPin,
      stats: "5+ locations"
    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span>Leading Cancer Care</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Together
              </span>
              <br />
              <span className="text-gray-700">A Better Way To Fight Cancer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Patient-centered cancer care across New York with innovative treatments, 
              experienced oncologists, and compassionate support throughout your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/appointment"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                Request an Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/providers"
                className="px-8 py-4 rounded-lg font-semibold transform hover:scale-105 inline-flex items-center justify-center"
                style={{
                  backgroundColor: '#2563eb !important',
                  color: 'white !important',
                  border: 'none !important',
                  outline: 'none !important',
                  textDecoration: 'none !important',
                  display: 'inline-flex !important',
                  alignItems: 'center !important',
                  justifyContent: 'center !important'
                }}
              >
                Find a Physician
                <Users className="ml-2 w-5 h-5" style={{color: 'white !important'}} />
              </Link>
            </div>

            {/* Quick Access Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickAccessCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <Link
                    key={card.id}
                    href={card.href}
                    className="group"
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`
                      bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/90 
                      transition-all duration-500 transform hover:-translate-y-2
                      border border-white/20 overflow-hidden
                      ${hoveredCard === card.id ? 'scale-105 shadow-2xl' : 'shadow-lg'}
                    `}>
                      <div className={`
                        w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} 
                        flex items-center justify-center mx-auto mb-4 group-hover:scale-110 
                        transition-transform duration-300
                      `}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {card.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Heart className="w-4 h-4" />
                  <span>50+ Years of Excellence</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NY Oncologists</span>
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    For over 50 years, we have been at the leading-edge of cancer care. 
                    When you are a patient at NY Oncologists, you can expect innovative 
                    cancer care tailored to you using the latest treatments and technologies 
                    available, including clinical trials.
                  </p>
                  <p>
                    Our cancer centers specialize in medical oncology, hematology, 
                    gynecologic oncology, radiation oncology and bone marrow transplants. 
                    We are rooted in the community and available to provide care, resources 
                    and support for you and your family close to home.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To provide superior treatment and compassionate care for those diagnosed 
                  with cancer and blood disorders by offering a dedicated environment of 
                  wellness through patient education, innovative treatment options and 
                  ongoing emotional support for our patients and their families.
                </p>
                <div className="space-y-3">
                  {[
                    "50+ years of experience",
                    "400+ years combined expertise", 
                    "Latest treatments & clinical trials",
                    "Multidisciplinary team approach",
                    "Community-based care"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl opacity-90">
              Excellence in cancer care with a personal touch
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

      {/* Innovations Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Innovations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our cutting-edge innovations designed to enhance your cancer care experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {innovations.map((innovation, index) => {
              const IconComponent = innovation.icon;
              return (
                <Link
                  key={index}
                  href={innovation.href}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className={`
                      w-16 h-16 rounded-2xl bg-gradient-to-br ${innovation.color} 
                      flex items-center justify-center mb-4 group-hover:scale-110 
                      transition-transform duration-300
                    `}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {innovation.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {innovation.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/innovations"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              Explore All Innovations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Begin Your Care Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our compassionate team is here to support you every step of the way. 
              Contact us today to schedule a consultation.
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
                className="px-8 py-4 rounded-lg font-semibold transform hover:scale-105 inline-flex items-center justify-center"
                style={{
                  backgroundColor: '#2563eb !important',
                  color: 'white !important',
                  border: 'none !important',
                  outline: 'none !important',
                  textDecoration: 'none !important',
                  display: 'inline-flex !important',
                  alignItems: 'center !important',
                  justifyContent: 'center !important'
                }}
              >
                <Users className="mr-2 w-5 h-5" style={{color: 'white !important'}} />
                Find a Physician
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}