"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Navigation, 
  Video, 
  Syringe, 
  Pill, 
  BookOpen, 
  ArrowRight, 
  Sparkles,
  Heart,
  Shield,
  Clock,
  Users
} from "lucide-react";

export default function InnovationsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span>Innovation in Cancer Care</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovations
              </span>
              <br />
              <span className="text-gray-700">in Care</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our cutting-edge innovations designed to enhance your cancer care experience 
              with advanced technology, personalized support, and compassionate care.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full border border-red-200">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-red-700 font-medium">Patient-Centered</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                <Shield className="w-4 h-4 text-blue-500" />
                <span className="text-blue-700 font-medium">Evidence-Based</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
                <Clock className="w-4 h-4 text-green-500" />
                <span className="text-green-700 font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovations Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Innovation Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each innovation is designed to address specific needs in cancer care, 
              combining advanced technology with human compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => {
              const IconComponent = innovation.icon;
              return (
                <Link
                  key={innovation.id}
                  href={innovation.href}
                  className="group"
                  onMouseEnter={() => setHoveredCard(innovation.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`
                    relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                    transition-all duration-500 transform hover:-translate-y-2
                    border border-gray-100 overflow-hidden
                    ${hoveredCard === innovation.id ? 'scale-105' : 'scale-100'}
                  `}>
                    {/* Background Gradient */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-br ${innovation.color} 
                      opacity-0 group-hover:opacity-5 transition-opacity duration-500
                    `}></div>
                    
                    {/* Icon */}
                    <div className={`
                      w-16 h-16 rounded-2xl bg-gradient-to-br ${innovation.color} 
                      flex items-center justify-center mb-6 group-hover:scale-110 
                      transition-transform duration-300
                    `}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {innovation.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {innovation.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {innovation.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-gray-500"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>

                    {/* Hover Effect */}
                    <div className={`
                      absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${innovation.color}
                      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300
                    `}></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Innovation Impact</h2>
            <p className="text-xl opacity-90">
              Our innovations are making a real difference in patient care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "95%", label: "Patient Satisfaction", icon: Heart },
              { number: "24/7", label: "Support Available", icon: Clock },
              { number: "500+", label: "Patients Served", icon: Users },
              { number: "100%", label: "Evidence-Based", icon: Shield }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience Innovation?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover how our innovative approaches can enhance your cancer care journey. 
              Contact us today to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/about"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
