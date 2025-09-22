"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Calendar,
  User,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Heart,
  Shield,
  Award,
  Users,
  Clock3,
  X
} from "lucide-react";

export default function AppointmentPage() {
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredProvider: '',
    preferredLocation: '',
    appointmentType: '',
    message: ''
  });

  const contactMethods = [
    {
      id: 1,
      title: "Call Us",
      description: "Speak directly with our scheduling team",
      icon: Phone,
      value: "(555) 123-4567",
      details: "Available Monday - Friday, 8:00 AM - 5:00 PM",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Email Us",
      description: "Send us your appointment request",
      icon: Mail,
      value: "info@nyoncologists.com",
      details: "We'll respond within 24 hours",
      color: "from-green-500 to-green-700"
    },
    {
      id: 3,
      title: "Visit Us",
      description: "Come to our office in person",
      icon: MapPin,
      value: "123 Medical Center Drive, New York, NY 10001",
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

  const appointmentTypes = [
    {
      value: "new-patient",
      title: "New Patient Consultation",
      description: "Comprehensive initial evaluation and treatment planning",
      icon: User
    },
    {
      value: "follow-up",
      title: "Follow-up Appointment",
      description: "Ongoing care and treatment monitoring",
      icon: Calendar
    },
    {
      value: "second-opinion",
      title: "Second Opinion",
      description: "Expert review of your diagnosis and treatment options",
      icon: Shield
    },
    {
      value: "emergency",
      title: "Urgent/Emergency",
      description: "Immediate care for urgent medical needs",
      icon: Clock3
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after successful submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      preferredProvider: '',
      preferredLocation: '',
      appointmentType: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Calendar className="w-4 h-4" />
              <span>Easy Scheduling</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Request an
              </span>
              <br />
              <span className="text-gray-700">Appointment</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Schedule your consultation with our expert oncologists. We're here to help you 
              take the next step in your cancer care journey with compassionate, expert care.
            </p>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {isSubmitted && (
        <section className="py-8 px-4 bg-green-50 border-b border-green-200">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-lg">Appointment request submitted!</p>
                  <p className="text-sm">We will contact you within 24 hours.</p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="ml-auto text-green-600 hover:text-green-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

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


      {/* Appointment Form */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Request Appointment</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll contact you within 24 hours
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-2">
                    Appointment Type *
                  </label>
                  <select
                    id="appointmentType"
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select appointment type</option>
                    {appointmentTypes.map((type, index) => {
                      const IconComponent = type.icon;
                      return (
                        <option key={index} value={type.value}>
                          {type.title}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredLocation" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Location *
                  </label>
                  <select
                    id="preferredLocation"
                    name="preferredLocation"
                    value={formData.preferredLocation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a location</option>
                    <option value="main">Main Office - New York</option>
                    <option value="brooklyn">Brooklyn Location</option>
                    <option value="queens">Queens Location</option>
                    <option value="manhattan">Manhattan Location</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Please provide any additional information about your appointment needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors transform hover:scale-105 flex items-center justify-center"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Request Appointment
                </button>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-200">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong>Important:</strong> This request form is not a medical record and should not contain sensitive health information. 
                    Please do not include detailed medical history, symptoms, or personal health details in your message.
                  </p>
                </div>
              </form>
            </div>
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
              Contact us today to schedule your consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:555-123-4567"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
              <Link
                href="/providers"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
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