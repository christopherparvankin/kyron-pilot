"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Stethoscope,
  Heart,
  Zap,
  Shield,
  Sparkles,
  CheckCircle,
  Play,
  Users,
  Calendar,
  Navigation,
  Video,
  Syringe,
  Pill
} from "lucide-react";

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const serviceCategories = [
    {
      title: "Services Offered",
      description: "Comprehensive cancer care services including advanced treatments, supportive care, and specialized procedures",
      icon: Stethoscope,
      color: "from-soft-500 to-soft-700",
      services: ["Chemotherapy", "Immunotherapy", "Biological Therapies (IVIG Remicade)", "Hydration", "Iron Infusions", "Portflush", "B-12 Injections", "Prolia Injections", "Electrolyte Repletion", "Influenza Vaccinations"]
    },
    {
      title: "Cancer Treatments",
      description: "Advanced treatment options for various types of cancer with personalized care approaches",
      icon: Shield,
      color: "from-primary-400 to-primary-600",
      services: ["Breast Cancer", "Leukemia", "Lymphoma", "Lung Cancer", "Gastrointestinal Cancer", "Genitourinary Cancer", "Carcinoma", "Sarcoma"]
    },
    {
      title: "Blood Disorders",
      description: "Specialized care for blood-related conditions and disorders with advanced treatment options",
      icon: Zap,
      color: "from-soft-300 to-soft-500",
      services: ["Anemia", "Iron Deficiency", "Blood & Clotting Disorders"]
    }
  ];

  const innovations = [
    {
      id: 1,
      title: "Patient Navigation",
      description: "Comprehensive guidance and support throughout your cancer care journey",
      icon: Navigation,
      href: "/innovations/patient-navigation",
      color: "from-blue-500 to-blue-700",
      features: ["24/7 Support", "Care Coordination", "Resource Access"]
    },
    {
      id: 2,
      title: "Telehealth Services",
      description: "Advanced virtual care with cutting-edge technology for remote consultations",
      icon: Video,
      href: "/innovations/telehealth",
      color: "from-green-500 to-green-700",
      features: ["Virtual Consultations", "Remote Monitoring", "Digital Health"]
    },
    {
      id: 3,
      title: "Infusion Center",
      description: "State-of-the-art facility with personalized comfort and advanced treatment options",
      icon: Syringe,
      href: "/innovations/infusion-center",
      color: "from-purple-500 to-purple-700",
      features: ["Comfortable Environment", "Expert Care", "Advanced Technology"]
    },
    {
      id: 4,
      title: "In-House Pharmacy",
      description: "Convenient on-site pharmacy with specialized oncology medications and support",
      icon: Pill,
      href: "/innovations/pharmacy",
      color: "from-orange-500 to-orange-700",
      features: ["Specialized Medications", "On-Site Convenience", "Expert Consultation"]
    }
  ];



  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % serviceCategories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 page-content">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(/stock/AdobeStock_535557088.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Stethoscope className="w-4 h-4" />
              <span>Comprehensive Care</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                Treatments
              </span>
              <br />
              <span className="text-white drop-shadow-lg">& Services</span>
            </h1>
                <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-lg">
                  Comprehensive cancer care with chemotherapy, immunotherapy, biological therapies,
                  and specialized treatments. Our expert team provides precision-based oncology care,
                  blood disorder treatment, and supportive services tailored to your needs.
                </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/providers"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services & Treatments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cancer care services, treatments, and specialized support for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    activeCategory === index ? 'ring-2 ring-soft-200 scale-105' : ''
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-soft-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-primary-500" />
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


      {/* Innovations Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Innovation in Cancer Care</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Innovative Care Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our cutting-edge innovations designed to enhance your cancer care experience
              with advanced technology, personalized support, and compassionate care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((innovation) => {
              const IconComponent = innovation.icon;
              return (
                <div
                  key={innovation.id}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(innovation.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`
                    w-16 h-16 rounded-2xl bg-gradient-to-br ${innovation.color} 
                    flex items-center justify-center mb-6 group-hover:scale-110 
                    transition-transform duration-300
                  `}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {innovation.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {innovation.description}
                  </p>
                  
                  <div className="space-y-2">
                    {innovation.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className={`
                    absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${innovation.color}
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300
                  `}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-soft-700 to-primary-700">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Learn More About Our Services?
            </h2>
            <p className="text-xl mb-8 text-soft-100">
              Our team is here to discuss your treatment options and answer any 
              questions you may have about our comprehensive cancer care services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="bg-white text-soft-900 px-8 py-4 rounded-lg font-semibold hover:bg-soft-50 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Link>
              <Link
                href="/providers"
                className="bg-white text-soft-900 px-8 py-4 rounded-lg font-semibold hover:bg-soft-50 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
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