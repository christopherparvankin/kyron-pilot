"use client";

import { useState, useEffect } from "react";
import { 
  Syringe, 
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
  Clock3
} from "lucide-react";
import Link from "next/link";

export default function InfusionCenterPage() {
  const [activeAmenity, setActiveAmenity] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const amenities = [
    {
      title: "Comfortable Recliners",
      description: "Plush, adjustable chairs for maximum comfort during treatment",
      icon: Heart,
      color: "from-pink-500 to-pink-700"
    },
    {
      title: "Free WiFi",
      description: "High-speed internet to stay connected during your visit",
      icon: Wifi,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Entertainment",
      description: "TV, music, and reading materials to pass the time",
      icon: Tv,
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Refreshments",
      description: "Complimentary snacks and beverages",
      icon: Coffee,
      color: "from-orange-500 to-orange-700"
    }
  ];

  const features = [
    {
      title: "Private Treatment Rooms",
      description: "Individual spaces for privacy and comfort",
      icon: Shield,
      stats: "12 private rooms"
    },
    {
      title: "Expert Nursing Staff",
      description: "Specialized oncology nurses with years of experience",
      icon: Users,
      stats: "24/7 care"
    },
    {
      title: "Advanced Monitoring",
      description: "State-of-the-art equipment for safe treatment delivery",
      icon: Heart,
      stats: "100% safe"
    },
    {
      title: "Flexible Scheduling",
      description: "Appointments available to fit your schedule",
      icon: Calendar,
      stats: "7 days/week"
    }
  ];

  const testimonials = [
    {
      name: "Margaret S.",
      quote: "The infusion center felt like a spa. The staff made me feel so comfortable and cared for during my treatment.",
      rating: 5
    },
    {
      name: "David L.",
      quote: "Having my own private room made such a difference. I could relax and even work on my laptop during treatment.",
      rating: 5
    },
    {
      name: "Patricia M.",
      quote: "The nurses were incredible. They explained everything and made sure I was comfortable throughout the entire process.",
      rating: 5
    }
  ];

  const treatmentTypes = [
    {
      name: "Chemotherapy",
      description: "Advanced chemotherapy treatments in a comfortable setting",
      duration: "2-6 hours",
      icon: Syringe
    },
    {
      name: "Immunotherapy",
      description: "Cutting-edge immunotherapy treatments",
      duration: "1-3 hours",
      icon: Shield
    },
    {
      name: "Blood Transfusions",
      description: "Safe and comfortable blood transfusion services",
      duration: "2-4 hours",
      icon: Heart
    },
    {
      name: "IV Hydration",
      description: "Therapeutic IV hydration and nutrition support",
      duration: "1-2 hours",
      icon: Coffee
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAmenity((prev) => (prev + 1) % amenities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
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
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
              <Syringe className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Infusion Center</h1>
              <p className="text-xl text-gray-600">Comfortable, state-of-the-art treatment facility</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                <span>Comfort & Care</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Treatment
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Redefined</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our state-of-the-art infusion center combines advanced medical technology with 
                exceptional comfort and care. Experience treatment in a serene, spa-like environment 
                designed to promote healing and well-being.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105">
                  Schedule Treatment
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
                  Virtual Tour
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Center Amenities</h3>
                <div className="space-y-4">
                  {amenities.map((amenity, index) => {
                    const IconComponent = amenity.icon;
                    return (
                      <div 
                        key={index}
                        className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 ${
                          activeAmenity === index 
                            ? 'bg-purple-50 border-2 border-purple-200 transform scale-105' 
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          activeAmenity === index 
                            ? 'bg-gradient-to-br from-purple-500 to-purple-700 text-white' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{amenity.title}</h4>
                          <p className="text-gray-600 text-sm">{amenity.description}</p>
                        </div>
                        {activeAmenity === index && (
                          <CheckCircle className="w-6 h-6 text-purple-600 animate-pulse" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Center Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed with your comfort and safety in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`
                    w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700
                    flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                    ${hoveredFeature === index ? 'shadow-2xl' : 'shadow-lg'}
                  `}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{feature.stats}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
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

      {/* Treatment Types Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Treatment Services</h2>
            <p className="text-xl opacity-90">
              Comprehensive infusion services in a comfortable environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentTypes.map((treatment, index) => {
              const IconComponent = treatment.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white group hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{treatment.name}</h3>
                  <p className="text-gray-200 mb-4">{treatment.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Clock3 className="w-4 h-4" />
                    <span>{treatment.duration}</span>
                  </div>
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
              Hear from patients who have experienced our infusion center
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

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Schedule Your Treatment</h2>
              <p className="text-xl text-gray-600">
                Contact us to schedule your infusion treatment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">(555) 123-4567</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Online</h3>
                <p className="text-gray-600 mb-2">Patient Portal</p>
                <p className="text-sm text-gray-500">24/7 scheduling</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-2">Multiple Locations</p>
                <p className="text-sm text-gray-500">Find your nearest center</p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105 mr-4">
                Schedule Treatment
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
