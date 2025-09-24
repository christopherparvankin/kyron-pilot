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
  Pill,
  Star,
  Quote,
  Mail
} from "lucide-react";
import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [providers, setProviders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        setLoading(true);
        const providers = await client.fetch('*[_type == "provider"] | order(name asc)');
        setProviders(providers || []);
      } catch (error) {
        console.error('Error fetching providers:', error);
        setProviders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  const quickAccessCards = [
    {
      id: 1,
      title: "Find a Physician",
      description: "Meet our expert oncologists",
      icon: Users,
      href: "/providers",
      color: "from-soft-500 to-soft-700"
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
      color: "from-primary-500 to-primary-700"
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

  const services = [
    {
      title: "Hematology",
      description: "Blood disorder diagnosis and treatment",
      icon: Heart,
      href: "/services/hematology"
    },
    {
      title: "Medical Oncology",
      description: "Comprehensive cancer treatment",
      icon: Stethoscope,
      href: "/services/medical-oncology"
    },
    {
      title: "Patient Navigation",
      description: "Guided care throughout your journey",
      icon: Navigation,
      href: "/innovations/patient-navigation"
    },
    {
      title: "Telehealth",
      description: "Virtual consultations and follow-ups",
      icon: Video,
      href: "/innovations/telehealth"
    },
    {
      title: "Infusion Center",
      description: "State-of-the-art treatment facility",
      icon: Syringe,
      href: "/innovations/infusion-center"
    },
    {
      title: "In-House Pharmacy",
      description: "Specialized oncology medications",
      icon: Pill,
      href: "/innovations/pharmacy"
    }
  ];

  const testimonials = [
    {
      quote: "Dr. Iyengar is a wonderful and kind human being. His compassionate approach to patient care and his expertise in hematology and oncology make him an exceptional physician.",
      author: "Ayush Sharma",
      rating: 5
    },
    {
      quote: "Dr. Iyengar is wonderful to work with as we implement AI solutions in healthcare practices across the US. He is entrepreneurial and innovative!",
      author: "Jay Gopal",
      rating: 5
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
              opacity: 0.4
            }}
          ></div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/50"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg" style={{ 
              background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 50%, #C69F59 100%)', 
              color: '#123447' 
            }}>
              <Sparkles className="w-4 h-4" />
              <span className="font-semibold">Leading Cancer Care</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
              <span style={{ 
                background: 'linear-gradient(135deg, #123447 0%, #1E3A52 25%, #2A4A63 50%, #1E3A52 75%, #123447 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 3s ease-in-out infinite'
              }}>
                Iyengar
              </span>
            </h1>
            
              <h2 className="text-xl md:text-2xl mb-6 font-medium" style={{ 
                color: '#475569',
                textShadow: '0 3px 8px rgba(71, 85, 105, 0.2)'
              }}>
                Hematology & Oncology Medical Center
              </h2>
            
            <p className="text-lg mb-10 leading-relaxed" style={{ 
              color: '#475569',
              textShadow: '0 2px 6px rgba(71, 85, 105, 0.2)'
            }}>
              Located in New York, NY
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/appointment"
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)', color: '#123447' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #E8B86D 0%, #C69F59 100%)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(198, 159, 89, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(198, 159, 89, 0.2)';
                }}
              >
                Request an Appointment
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/providers"
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center border-2 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 248, 220, 0.1) 0%, rgba(232, 184, 109, 0.1) 100%)', 
                  color: '#123447', 
                  borderColor: '#C69F59' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)';
                  e.currentTarget.style.color = '#FFF8DC';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(198, 159, 89, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 248, 220, 0.1) 0%, rgba(232, 184, 109, 0.1) 100%)';
                  e.currentTarget.style.color = '#123447';
                  e.currentTarget.style.borderColor = '#C69F59';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(198, 159, 89, 0.2)';
                }}
              >
                Find a Physician
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Providers Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6" style={{ 
                color: '#1E293B'
              }}>
                Our Medical Team
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: '#475569' }}>
                Meet our board-certified physicians who are dedicated to providing exceptional cancer care and hematology services in the heart of New York.
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ 
                  background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)' 
                }}>
                  <Users className="w-12 h-12 animate-spin" style={{ color: '#123447' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1E293B' }}>
                  Loading Our Team...
                </h3>
                <p style={{ color: '#475569' }}>
                  Fetching provider information from our database.
                </p>
              </div>
            ) : providers.length > 0 ? (
              <div className="space-y-8">
                {providers.map((provider) => {
                  console.log('🎨 Rendering provider:', provider.name, 'hasImage:', !!provider.image);
                  return (
                  <div key={provider._id} className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ borderColor: '#C69F59' }}>
                    <div className="flex flex-col md:flex-row">
                      {/* Photo Section - Left Side */}
                      <div className="md:w-1/3 p-6 flex justify-center items-center">
                        {provider.image ? (
                          <div className="w-48 h-64 rounded-lg overflow-hidden shadow-lg">
                            <img 
                              src={urlFor(provider.image).width(300).height(400).url()}
                              alt={provider.image.alt || provider.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                console.error('Image load error for provider:', provider.name, provider.image);
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                        ) : (
                          <div className="w-48 h-64 rounded-lg flex items-center justify-center shadow-lg" style={{ 
                            background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)' 
                          }}>
                            <img 
                              src="/ihomes.svg" 
                              alt={provider.name}
                              className="w-24 h-12 object-contain"
                            />
                          </div>
                        )}
                      </div>
                      
                      {/* Information Section - Right Side */}
                      <div className="md:w-2/3 p-6 md:p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-2" style={{ color: '#123447' }}>
                            {provider.name}
                          </h3>
                          <p className="text-lg font-medium mb-4" style={{ color: '#C69F59' }}>
                            {provider.title}
                          </p>
                        </div>

                        {provider.bio && (
                          <div className="mb-6">
                            <div className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                              {provider.bio.map((block: any, index: number) => (
                                <p key={index} className="mb-3">
                                  {block.children?.map((child: any, childIndex: number) => child.text).join('')}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="mt-6">
                          <Link
                            href={`/providers/${provider.slug.current}`}
                            className="text-sm underline hover:no-underline transition-all duration-300"
                            style={{ color: '#C69F59' }}
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ 
                  background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)' 
                }}>
                  <Users className="w-12 h-12" style={{ color: '#123447' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1E293B' }}>
                  No Providers Found
                </h3>
                <p style={{ color: '#475569' }}>
                  We're working on adding our medical team information. Please check back soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 relative overflow-hidden bg-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
              opacity: 0.2
            }}
          ></div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/90 to-white/85"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6" style={{ 
                color: '#1E293B',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                What we offer
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: '#123447' }}>
                Comprehensive hematology and oncology services designed to provide the best possible care for our patients.
            </p>
          </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
              return (
                  <Link
                  key={index} 
                    href={service.href}
                    className="group"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`
                      rounded-xl p-6 border transition-all duration-300 transform hover:-translate-y-2
                      ${hoveredCard === index ? 'shadow-2xl' : 'shadow-lg'}
                    `}
                    style={{ 
                      background: hoveredCard === index 
                        ? 'linear-gradient(135deg, rgba(255, 248, 220, 0.1) 0%, rgba(198, 159, 89, 0.2) 100%)' 
                        : 'linear-gradient(135deg, rgba(255, 248, 220, 0.05) 0%, rgba(198, 159, 89, 0.1) 100%)',
                      borderColor: hoveredCard === index ? '#E8B86D' : '#C69F59'
                    }}>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-lg" style={{ 
                          background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)' 
                        }}>
                          <IconComponent className="w-6 h-6" style={{ color: '#123447' }} />
                        </div>
                        <h3 className="text-lg font-semibold transition-colors" style={{ 
                          color: '#123447'
                        }}>
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                        {service.description}
                      </p>
                      <div className="mt-4 flex items-center text-sm font-medium" style={{ color: '#C69F59' }}>
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center mt-16">
              <p className="mb-8 text-lg" style={{ color: '#123447' }}>
                Get started by giving us a call to learn more about what's best for you or fill out our contact form to schedule a consultation!
              </p>
              <Link
                href="/appointment"
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)', color: '#123447' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #E8B86D 0%, #C69F59 100%)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(198, 159, 89, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(198, 159, 89, 0.2)';
                }}
              >
                Schedule a Consultation
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6" style={{ 
                color: '#1E293B'
              }}>
                Words from our patients
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-xl p-8 shadow-2xl border" style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 248, 220, 0.05) 0%, rgba(198, 159, 89, 0.1) 100%)', 
                  borderColor: '#C69F59' 
                }}>
                  <div className="flex items-center mb-6">
                    <div className="flex mr-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#C69F59' }} />
                      ))}
                    </div>
                    <Quote className="w-6 h-6" style={{ color: '#C69F59' }} />
                  </div>
                  
                  <blockquote className="mb-6 leading-relaxed text-lg" style={{ color: '#374151' }}>
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg" style={{ 
                      background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)' 
                    }}>
                      <span className="font-semibold text-sm" style={{ color: '#123447' }}>
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg" style={{ color: '#1E293B' }}>{testimonial.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6" style={{ 
                color: '#1E293B'
              }}>
                Quick Access
            </h2>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickAccessCards.map((card) => {
                const IconComponent = card.icon;
              return (
                <Link
                    key={card.id}
                    href={card.href}
                  className="group"
                >
                    <div className="rounded-xl p-6 border transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl" style={{ 
                      background: 'linear-gradient(135deg, rgba(255, 248, 220, 0.05) 0%, rgba(198, 159, 89, 0.1) 100%)',
                      borderColor: '#C69F59'
                    }}>
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ 
                        background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)' 
                      }}>
                        <IconComponent className="w-8 h-8" style={{ color: '#123447' }} />
                    </div>
                      <h3 className="text-lg font-semibold mb-2 transition-colors text-center" style={{ color: '#1E293B' }}>
                        {card.title}
                    </h3>
                      <p className="text-sm text-center" style={{ color: '#475569' }}>
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

      {/* Contact Section */}
      <section className="py-16 px-4 relative overflow-hidden" style={{ backgroundColor: '#FFF8DC' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
              opacity: 0.3
            }}
          ></div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/80"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12" style={{ 
              color: '#1E293B',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              Ready to get started?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-6 rounded-xl shadow-lg border" style={{ 
                background: 'linear-gradient(135deg, rgba(255, 248, 220, 0.05) 0%, rgba(198, 159, 89, 0.1) 100%)',
                borderColor: '#C69F59'
              }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ 
                  background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)' 
                }}>
                  <Phone className="w-6 h-6" style={{ color: '#123447' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#1E293B' }}>Call Us</h3>
                <p className="text-sm" style={{ color: '#475569' }}>(555) 123-4567</p>
              </div>
              
              <div className="p-6 rounded-xl shadow-lg border" style={{ 
                background: 'linear-gradient(135deg, rgba(255, 248, 220, 0.05) 0%, rgba(198, 159, 89, 0.1) 100%)',
                borderColor: '#C69F59'
              }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ 
                  background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)' 
                }}>
                  <Calendar className="w-6 h-6" style={{ color: '#123447' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#1E293B' }}>Schedule Online</h3>
                <p className="text-sm" style={{ color: '#475569' }}>Book your appointment</p>
              </div>

              <div className="p-6 rounded-xl shadow-lg border" style={{ 
                background: 'linear-gradient(135deg, rgba(255, 248, 220, 0.05) 0%, rgba(198, 159, 89, 0.1) 100%)',
                borderColor: '#C69F59'
              }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ 
                  background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)' 
                }}>
                  <MapPin className="w-6 h-6" style={{ color: '#123447' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#1E293B' }}>Visit Us</h3>
                <p className="text-sm" style={{ color: '#475569' }}>Multiple NY Locations</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)', color: '#123447' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #E8B86D 0%, #C69F59 100%)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(198, 159, 89, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(198, 159, 89, 0.2)';
                }}
              >
                Request an Appointment
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center border-2 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 248, 220, 0.1) 0%, rgba(232, 184, 109, 0.1) 100%)', 
                  color: '#123447', 
                  borderColor: '#C69F59' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #C69F59 0%, #E8B86D 100%)';
                  e.currentTarget.style.color = '#FFF8DC';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(198, 159, 89, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 248, 220, 0.1) 0%, rgba(232, 184, 109, 0.1) 100%)';
                  e.currentTarget.style.color = '#123447';
                  e.currentTarget.style.borderColor = '#C69F59';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(198, 159, 89, 0.2)';
                }}
              >
                Contact Us
                <Mail className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}