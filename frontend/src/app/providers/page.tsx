import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import ProviderFeatures from "@/components/ProviderFeatures";
import {
  ArrowRight,
  User,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  GraduationCap,
  Heart,
  Star,
  CheckCircle,
  Sparkles,
  Shield,
  Target,
  Users,
  Clock
} from "lucide-react";

export default async function ProvidersPage() {
  const providers = await client.fetch(queries.providers);

  const testimonials = [
    {
      name: "Robert K.",
      quote: "Dr. Johnson's expertise and compassion made all the difference in my treatment. I felt confident in her care every step of the way.",
      rating: 5
    },
    {
      name: "Maria L.",
      quote: "The entire team was incredible. Dr. Chen took the time to explain everything and made sure I understood my treatment options.",
      rating: 5
    },
    {
      name: "John D.",
      quote: "Dr. Rodriguez's precision and care during my radiation treatment was exceptional. I couldn't have asked for better care.",
      rating: 5
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
              <Users className="w-4 h-4" />
              <span>Expert Team</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Physicians
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Meet our experienced team of oncologists and specialists. Our dedicated physicians 
              bring together decades of experience, cutting-edge expertise, and compassionate care 
              to provide the best possible outcomes for our patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Heart className="mr-2 w-5 h-5" />
                Learn About Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Providers Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced oncologists and specialists dedicated to your care
            </p>
          </div>

          {providers && providers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {providers.map((provider: any, index: number) => (
                <Link
                  key={provider._id}
                  href={`/providers/${provider.slug?.current}`}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="text-center">
                    {provider.image ? (
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={urlFor(provider.image)
                            .width(128)
                            .height(128)
                            .url()}
                          alt={provider.image.alt || provider.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <User className="w-16 h-16 text-blue-600" />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {provider.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {provider.title}
                    </p>

                    {provider.specialties && provider.specialties.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {provider.specialties.slice(0, 3).map((specialty: string, specialtyIndex: number) => (
                            <span
                              key={specialtyIndex}
                              className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                          {provider.specialties.length > 3 && (
                            <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                              +{provider.specialties.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {provider.bio && (
                      <div className="text-gray-600 text-sm mb-6 line-clamp-3">
                        <PortableText
                          value={provider.bio}
                          components={{
                            block: {
                              normal: ({ children }) => (
                                <p className="text-sm text-gray-600">
                                  {children}
                                </p>
                              ),
                            },
                          }}
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span>View Profile</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-50 rounded-2xl p-12">
                <User className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Team
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  We're assembling our team of expert oncologists and specialists. 
                  Check back soon to meet our physicians.
                </p>
                <Link
                  href="/appointment"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <ProviderFeatures />

      {/* Leadership Team */}
      {providers && providers.length > 0 && (
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600">
                Experienced leaders in cancer care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {providers.slice(0, 4).map((provider: any, index: number) => (
                <Link
                  key={provider._id}
                  href={`/providers/${provider.slug?.current}`}
                  className="bg-gray-50 rounded-2xl p-6 text-center group hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  {provider.image ? (
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={urlFor(provider.image)
                          .width(96)
                          .height(96)
                          .url()}
                        alt={provider.image.alt || provider.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <User className="w-12 h-12 text-blue-600" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {provider.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">
                    {provider.title}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {provider.specialties?.slice(0, 2).map((specialty: string, specialtyIndex: number) => (
                      <span
                        key={specialtyIndex}
                        className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Our Physicians */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Excellence in Care</h2>
            <p className="text-xl text-gray-600">
              What makes our physicians exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                Board Certified
              </h3>
              <p className="text-gray-600">
                All our physicians are board-certified in their respective specialties, 
                ensuring the highest standards of care and ongoing education.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                Extensive Education
              </h3>
              <p className="text-gray-600">
                Our team includes physicians with advanced training from leading medical 
                institutions and ongoing education in the latest treatments.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                Patient-Centered Care
              </h3>
              <p className="text-gray-600">
                We believe in treating the whole person, not just the disease, with 
                personalized care plans and ongoing support throughout your journey.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                Multiple Locations
              </h3>
              <p className="text-gray-600">
                Our physicians practice at multiple convenient locations throughout 
                New York, making care accessible close to home.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                Accessible Care
              </h3>
              <p className="text-gray-600">
                Easy scheduling, responsive communication, and dedicated support staff 
                ensure you can reach us when you need us most.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                Comprehensive Services
              </h3>
              <p className="text-gray-600">
                From diagnosis to treatment to follow-up care, our physicians provide 
                comprehensive cancer care throughout your entire journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Experiences</h2>
            <p className="text-xl text-gray-600">
              Hear from patients who have experienced our physicians' care
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Meet Your Care Team?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Schedule a consultation with one of our experienced oncologists to 
              discuss your treatment options and begin your care journey.
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
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Heart className="mr-2 w-5 h-5" />
                Learn About Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}