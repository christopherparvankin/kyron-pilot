"use client";

import { useState, useEffect } from "react";
import { 
  Navigation, 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  Heart,
  Shield,
  Star,
  ArrowRight,
  Calendar,
  FileText,
  MessageCircle
} from "lucide-react";
import Link from "next/link";

export default function PatientNavigationPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const navigationSteps = [
    {
      title: "Initial Contact",
      description: "First point of contact with our patient navigator",
      icon: Phone,
      duration: "Immediate"
    },
    {
      title: "Assessment",
      description: "Comprehensive evaluation of your needs and concerns",
      icon: FileText,
      duration: "24-48 hours"
    },
    {
      title: "Care Plan",
      description: "Personalized care plan tailored to your specific situation",
      icon: Calendar,
      duration: "1-2 days"
    },
    {
      title: "Ongoing Support",
      description: "Continuous guidance throughout your treatment journey",
      icon: Heart,
      duration: "Throughout treatment"
    }
  ];

  const features = [
    {
      title: "24/7 Support Line",
      description: "Round-the-clock access to patient navigators for urgent concerns",
      icon: Phone,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Care Coordination",
      description: "Seamless coordination between all your healthcare providers",
      icon: Users,
      color: "from-green-500 to-green-700"
    },
    {
      title: "Resource Access",
      description: "Connect with financial assistance, support groups, and community resources",
      icon: Shield,
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Treatment Guidance",
      description: "Help understanding your treatment options and what to expect",
      icon: Navigation,
      color: "from-orange-500 to-orange-700"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      quote: "My patient navigator was my lifeline during treatment. She helped me understand everything and made sure I never felt alone.",
      rating: 5
    },
    {
      name: "Robert K.",
      quote: "The coordination between my doctors was seamless thanks to the patient navigation team. I felt truly cared for.",
      rating: 5
    },
    {
      name: "Maria L.",
      quote: "Having someone available 24/7 to answer my questions gave me peace of mind during the most difficult time.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % navigationSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
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
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
              <Navigation className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Patient Navigation</h1>
              <p className="text-xl text-gray-600">Your dedicated guide through cancer care</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                <span>Compassionate Care</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Never Navigate
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Alone</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our patient navigators are specially trained professionals who serve as your personal 
                guide throughout your cancer care journey. They help coordinate your care, answer 
                questions, and provide emotional support when you need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
                <div className="space-y-6">
                  {navigationSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div 
                        key={index}
                        className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 ${
                          activeStep === index 
                            ? 'bg-blue-50 border-2 border-blue-200 transform scale-105' 
                            : 'bg-gray-50'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          activeStep === index 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{step.title}</h4>
                          <p className="text-gray-600 text-sm">{step.description}</p>
                          <span className="text-xs text-blue-600 font-medium">{step.duration}</span>
                        </div>
                        {activeStep === index && (
                          <CheckCircle className="w-6 h-6 text-blue-600 animate-pulse" />
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

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Provide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services designed to make your cancer care journey as smooth as possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group text-center"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`
                    w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color}
                    flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                    ${hoveredFeature === index ? 'shadow-2xl' : 'shadow-lg'}
                  `}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">What Patients Say</h2>
            <p className="text-xl opacity-90">
              Real stories from patients who have experienced our patient navigation services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="font-semibold">— {testimonial.name}</div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600">
                Contact our patient navigation team today to begin your personalized care journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">(555) 123-4567</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">navigator@kyron.com</p>
                <p className="text-sm text-gray-500">Response within 2 hours</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-2">Multiple Locations</p>
                <p className="text-sm text-gray-500">Find your nearest center</p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 mr-4">
                Start Your Journey
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
