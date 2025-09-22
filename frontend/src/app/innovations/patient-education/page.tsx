"use client";

import { useState, useEffect } from "react";
import { 
  BookOpen, 
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
  Target,
  Play,
  Download,
  Search,
  Filter,
  Award,
  Lightbulb,
  GraduationCap
} from "lucide-react";
import Link from "next/link";

export default function PatientEducationPage() {
  const [activeResource, setActiveResource] = useState(0);
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const resources = [
    {
      title: "Interactive Learning Modules",
      description: "Engaging, multimedia educational content tailored to your diagnosis",
      icon: BookOpen,
      color: "from-teal-500 to-teal-700",
      type: "Interactive"
    },
    {
      title: "Video Library",
      description: "Comprehensive video collection covering treatments, side effects, and coping strategies",
      icon: Play,
      color: "from-blue-500 to-blue-700",
      type: "Video"
    },
    {
      title: "Resource Library",
      description: "Downloadable guides, brochures, and fact sheets on various cancer topics",
      icon: FileText,
      color: "from-green-500 to-green-700",
      type: "Download"
    },
    {
      title: "Expert Webinars",
      description: "Live and recorded sessions with oncology experts and support groups",
      icon: Users,
      color: "from-purple-500 to-purple-700",
      type: "Live"
    }
  ];

  const learningModules = [
    {
      title: "Understanding Your Diagnosis",
      description: "Learn about your specific type of cancer and what to expect",
      duration: "30 minutes",
      difficulty: "Beginner",
      icon: Lightbulb,
      progress: 0
    },
    {
      title: "Treatment Options Explained",
      description: "Comprehensive guide to available treatments and their benefits",
      duration: "45 minutes",
      difficulty: "Intermediate",
      icon: Target,
      progress: 25
    },
    {
      title: "Managing Side Effects",
      description: "Practical strategies for coping with treatment side effects",
      duration: "35 minutes",
      difficulty: "Beginner",
      icon: Heart,
      progress: 50
    },
    {
      title: "Nutrition During Treatment",
      description: "Dietary guidelines and nutrition tips for cancer patients",
      duration: "25 minutes",
      difficulty: "Beginner",
      icon: Coffee,
      progress: 75
    },
    {
      title: "Emotional Support",
      description: "Mental health resources and coping strategies",
      duration: "40 minutes",
      difficulty: "Intermediate",
      icon: Shield,
      progress: 100
    },
    {
      title: "Life After Treatment",
      description: "Guidance for survivorship and long-term care",
      duration: "50 minutes",
      difficulty: "Advanced",
      icon: Award,
      progress: 0
    }
  ];

  const testimonials = [
    {
      name: "Maria S.",
      quote: "The interactive modules helped me understand my treatment so much better. I felt empowered to ask the right questions.",
      rating: 5
    },
    {
      name: "John D.",
      quote: "The video library was incredibly helpful. I could watch them at my own pace and rewind when I needed to.",
      rating: 5
    },
    {
      name: "Lisa K.",
      quote: "The expert webinars gave me access to specialists I never would have been able to talk to otherwise.",
      rating: 5
    }
  ];

  const topics = [
    {
      name: "Cancer Basics",
      description: "Understanding cancer and its treatment",
      icon: BookOpen,
      articles: 25
    },
    {
      name: "Treatment Options",
      description: "Surgery, chemotherapy, radiation, and more",
      icon: Target,
      articles: 18
    },
    {
      name: "Side Effects",
      description: "Managing treatment side effects",
      icon: Heart,
      articles: 32
    },
    {
      name: "Nutrition",
      description: "Diet and nutrition during treatment",
      icon: Coffee,
      articles: 15
    },
    {
      name: "Emotional Health",
      description: "Mental health and emotional support",
      icon: Shield,
      articles: 22
    },
    {
      name: "Survivorship",
      description: "Life after cancer treatment",
      icon: Award,
      articles: 20
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveResource((prev) => (prev + 1) % resources.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const filteredModules = learningModules.filter(module =>
    module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
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
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Patient Education</h1>
              <p className="text-xl text-gray-600">Comprehensive learning resources and support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" />
                <span>Empowering Knowledge</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Learn
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"> & Thrive</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Knowledge is power in your cancer journey. Our comprehensive education platform 
                provides interactive learning modules, expert resources, and personalized content 
                to help you understand your treatment and make informed decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors transform hover:scale-105">
                  Start Learning
                </button>
                <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors">
                  Browse Resources
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Resources</h3>
                <div className="space-y-4">
                  {resources.map((resource, index) => {
                    const IconComponent = resource.icon;
                    return (
                      <div 
                        key={index}
                        className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 ${
                          activeResource === index 
                            ? 'bg-teal-50 border-2 border-teal-200 transform scale-105' 
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          activeResource === index 
                            ? 'bg-gradient-to-br from-teal-500 to-teal-700 text-white' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                            <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">
                              {resource.type}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm">{resource.description}</p>
                        </div>
                        {activeResource === index && (
                          <CheckCircle className="w-6 h-6 text-teal-600 animate-pulse" />
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

      {/* Search Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search learning modules, topics, or resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
              />
              <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Modules Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Learning Modules</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interactive educational content designed to help you understand your cancer journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onMouseEnter={() => setHoveredModule(index)}
                  onMouseLeave={() => setHoveredModule(null)}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      module.progress === 100 ? 'bg-green-500' : 'bg-teal-500'
                    }`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{module.duration}</div>
                      <div className="text-xs text-gray-400">{module.difficulty}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {module.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>Progress</span>
                      <span>{module.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    module.progress === 100 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-teal-600 text-white hover:bg-teal-700'
                  }`}>
                    {module.progress === 100 ? 'Review Module' : 'Start Learning'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Explore Topics</h2>
            <p className="text-xl opacity-90">
              Comprehensive coverage of cancer-related topics and treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white group hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{topic.name}</h3>
                  <p className="text-gray-200 mb-4">{topic.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <FileText className="w-4 h-4" />
                    <span>{topic.articles} articles</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Experiences</h2>
            <p className="text-xl text-gray-600">
              Hear from patients who have used our education platform
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Start Your Learning Journey
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Access our comprehensive education platform and take control of your cancer journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors transform hover:scale-105">
                Access Platform
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors">
                Download App
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
