"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Stethoscope,
  Heart,
  Zap,
  Shield,
  Target,
  Sparkles,
  CheckCircle,
  Play,
  Award,
  Users,
  Clock,
  Calendar
} from "lucide-react";

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const serviceCategories = [
    {
      title: "Medical Oncology",
      description: "Comprehensive medical cancer treatments including chemotherapy, targeted therapy, and immunotherapy",
      icon: Stethoscope,
      color: "from-blue-500 to-blue-700",
      services: ["Chemotherapy", "Immunotherapy", "Targeted Therapy", "Clinical Trials"]
    },
    {
      title: "Hematology",
      description: "Specialized care for blood disorders and blood-related cancers with advanced treatment options",
      icon: Heart,
      color: "from-red-500 to-red-700",
      services: ["Blood Disorders", "Leukemia", "Lymphoma", "Bone Marrow Transplant"]
    },
    {
      title: "Radiation Oncology",
      description: "Advanced radiation therapy using state-of-the-art equipment and precision targeting",
      icon: Zap,
      color: "from-yellow-500 to-yellow-700",
      services: ["External Beam", "Brachytherapy", "Stereotactic", "Proton Therapy"]
    },
    {
      title: "Gynecologic Oncology",
      description: "Specialized care for gynecologic cancers with comprehensive treatment and surgical options",
      icon: Shield,
      color: "from-purple-500 to-purple-700",
      services: ["Ovarian Cancer", "Cervical Cancer", "Uterine Cancer", "Surgical Oncology"]
    },
    {
      title: "Cancer Treatments",
      description: "Latest cancer treatment options including clinical trials and innovative therapies",
      icon: Target,
      color: "from-green-500 to-green-700",
      services: ["Surgery", "Chemotherapy", "Radiation", "Clinical Trials"]
    },
    {
      title: "Patient Services",
      description: "Comprehensive support services including counseling, nutrition, and financial assistance",
      icon: Users,
      color: "from-teal-500 to-teal-700",
      services: ["Counseling", "Nutrition", "Financial Aid", "Support Groups"]
    }
  ];

  const features = [
    {
      title: "Advanced Technology",
      description: "State-of-the-art equipment and cutting-edge treatments",
      icon: Zap,
      stats: "100% Modern"
    },
    {
      title: "Expert Team",
      description: "Board-certified specialists with decades of experience",
      icon: Award,
      stats: "50+ Years"
    },
    {
      title: "Personalized Care",
      description: "Tailored treatment plans for each patient",
      icon: Heart,
      stats: "100% Custom"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock care and assistance",
      icon: Clock,
      stats: "Always Available"
    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % serviceCategories.length);
    }, 4000);
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
              <Stethoscope className="w-4 h-4" />
              <span>Comprehensive Care</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Treatments
              </span>
              <br />
              <span className="text-gray-700">& Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive cancer care with the latest treatments and technologies. 
              Our multidisciplinary team provides advanced cancer treatments, cutting-edge 
              therapies, and compassionate care tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/providers"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                Meet Our Team
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Treatment Specialties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced cancer care across multiple specialties with cutting-edge treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    activeCategory === index ? 'ring-2 ring-blue-200 scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className={`
                    w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} 
                    flex items-center justify-center mb-6 group-hover:scale-110 
                    transition-transform duration-300
                  `}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-xl opacity-90">
              Excellence in cancer care with advanced technology and compassionate support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
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



      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Learn More About Our Services?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our team is here to discuss your treatment options and answer any 
              questions you may have about our comprehensive cancer care services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Link>
              <Link
                href="/providers"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
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