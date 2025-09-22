"use client";

import { useState, useEffect } from "react";
import { 
  Video, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle, 
  Clock, 
  Shield, 
  Smartphone, 
  Laptop, 
  Wifi,
  Heart,
  Mic,
  MessageCircle,
  Calendar,
  FileText,
  Home,
  Users
} from "lucide-react";
import Link from "next/link";

export default function TelehealthPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const features = [
    {
      title: "HD Video Consultations",
      description: "Crystal clear video calls with your healthcare team",
      icon: Video,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Secure Messaging",
      description: "24/7 secure communication with your care team",
      icon: MessageCircle,
      color: "from-green-500 to-green-700"
    },
    {
      title: "Remote Monitoring",
      description: "Track your health metrics from home",
      icon: Shield,
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Mobile Access",
      description: "Access your care from any device, anywhere",
      icon: Smartphone,
      color: "from-orange-500 to-orange-700"
    }
  ];

  const benefits = [
    {
      title: "Convenience",
      description: "Access care from the comfort of your home",
      icon: Home,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Time Savings",
      description: "No travel time or waiting room delays",
      icon: Clock,
      color: "from-green-500 to-green-700"
    },
    {
      title: "Safety",
      description: "Reduce exposure to other illnesses",
      icon: Shield,
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Accessibility",
      description: "Care available 24/7 when you need it",
      icon: Wifi,
      color: "from-orange-500 to-orange-700"
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Schedule Appointment",
      description: "Book your virtual consultation through our patient portal"
    },
    {
      step: "2", 
      title: "Receive Instructions",
      description: "Get detailed instructions and access links via email"
    },
    {
      step: "3",
      title: "Join Your Visit",
      description: "Connect with your provider using our secure platform"
    },
    {
      step: "4",
      title: "Follow Up",
      description: "Receive care plan and next steps after your visit"
    }
  ];

  const platformFeatures = [
    {
      title: "HD Video Quality",
      description: "Crystal clear video calls for better communication",
      icon: Video,
      stats: "1080p HD"
    },
    {
      title: "Secure Messaging",
      description: "24/7 secure communication with your care team",
      icon: MessageCircle,
      stats: "HIPAA Compliant"
    },
    {
      title: "File Sharing",
      description: "Securely share documents and images",
      icon: FileText,
      stats: "Encrypted"
    },
    {
      title: "Mobile App",
      description: "Access your care from any device",
      icon: Smartphone,
      stats: "iOS & Android"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-green-600 to-teal-600">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Modern medical technology and telehealth"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-teal-900/80"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Wifi className="w-4 h-4" />
                <span>Advanced Technology</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Healthcare
                <span className="bg-gradient-to-r from-green-200 to-blue-200 bg-clip-text text-transparent"> Without Limits</span>
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience the future of healthcare with our state-of-the-art telehealth platform.
                Connect with your care team from anywhere with crystal-clear video, secure messaging,
                and comprehensive remote monitoring capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive telehealth tools designed to provide the best virtual care experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`group text-center p-6 rounded-2xl transition-all duration-500 ${
                    activeFeature === index 
                      ? 'bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 transform scale-105' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className={`
                    w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color}
                    flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                  `}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Telehealth?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of virtual healthcare and how it can improve your care experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-8 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <div className={`
                    w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${benefit.color}
                    flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                  `}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with telehealth is simple and straightforward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-auto mt-6 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our telehealth platform is equipped with cutting-edge technology to ensure the best possible care experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="text-sm font-medium text-green-600">{feature.stats}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}