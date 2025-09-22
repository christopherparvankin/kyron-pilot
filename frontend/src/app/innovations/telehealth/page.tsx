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
  Camera,
  Mic,
  MessageCircle,
  Calendar,
  FileText,
  Star,
  Play,
  Pause,
  Volume2,
  Home,
  Users
} from "lucide-react";
import Link from "next/link";

export default function TelehealthPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
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
      description: "Access care anywhere with our mobile app",
      icon: Smartphone,
      color: "from-orange-500 to-orange-700"
    }
  ];

  const benefits = [
    {
      title: "Convenience",
      description: "Access care from the comfort of your home",
      icon: Home,
      stats: "85% time saved"
    },
    {
      title: "Safety",
      description: "Reduce exposure risks with virtual visits",
      icon: Shield,
      stats: "100% secure"
    },
    {
      title: "Accessibility",
      description: "Overcome transportation barriers",
      icon: Users,
      stats: "24/7 available"
    },
    {
      title: "Continuity",
      description: "Maintain regular contact with your team",
      icon: Heart,
      stats: "95% satisfaction"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer R.",
      quote: "The telehealth platform made it so easy to stay connected with my oncologist during treatment. The video quality was excellent!",
      rating: 5
    },
    {
      name: "Michael T.",
      quote: "I was able to have my consultation from my living room. It saved me hours of travel time and stress.",
      rating: 5
    },
    {
      name: "Lisa K.",
      quote: "The secure messaging feature let me ask questions anytime. My care team always responded quickly.",
      rating: 5
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
      description: "Get detailed instructions and test your connection"
    },
    {
      step: "3",
      title: "Join Your Visit",
      description: "Connect with your healthcare provider via secure video"
    },
    {
      step: "4",
      title: "Follow Up",
      description: "Receive care plan and next steps via secure messaging"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
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
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center">
              <Video className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Telehealth Services</h1>
              <p className="text-xl text-gray-600">Advanced virtual care technology</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Wifi className="w-4 h-4" />
                <span>Advanced Technology</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Healthcare
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Without Limits</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the future of healthcare with our state-of-the-art telehealth platform. 
                Connect with your care team from anywhere with crystal-clear video, secure messaging, 
                and comprehensive remote monitoring capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors transform hover:scale-105">
                  Start Virtual Visit
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Live Demo</h3>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                    >
                      {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Video className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">HD Video Consultation</p>
                    <p className="text-sm text-gray-500">Click play to see demo</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Camera className="w-4 h-4" />
                    <span>HD Camera</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mic className="w-4 h-4" />
                    <span>Clear Audio</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Secure</span>
                  </div>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
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

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Telehealth?</h2>
            <p className="text-xl opacity-90">
              Discover the advantages of virtual healthcare
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
                    w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 
                    group-hover:scale-110 transition-transform duration-300
                    ${hoveredBenefit === index ? 'bg-white/30' : ''}
                  `}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{benefit.stats}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="opacity-90">{benefit.description}</p>
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
              Simple steps to access your virtual healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-auto mt-6 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Experiences</h2>
            <p className="text-xl text-gray-600">
              Real stories from patients who have used our telehealth services
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience Telehealth?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule your virtual consultation today and experience the future of healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors transform hover:scale-105">
                Schedule Virtual Visit
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
                Download Mobile App
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
