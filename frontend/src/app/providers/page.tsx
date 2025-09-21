import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import {
  ArrowRight,
  User,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  GraduationCap,
} from "lucide-react";

export default async function ProvidersPage() {
  const providers = await client.fetch(queries.providers);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Physicians
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Meet our experienced team of oncologists and specialists
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Our dedicated physicians bring together decades of experience,
              cutting-edge expertise, and compassionate care to provide the best
              possible outcomes for our patients.
            </p>
          </div>
        </div>
      </section>

      {/* Providers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {providers && providers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {providers.map((provider: any) => (
                  <Link
                    key={provider._id}
                    href={`/providers/${provider.slug?.current}`}
                    className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
                  >
                    <div className="text-center">
                      {provider.image ? (
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
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
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                            <User className="w-16 h-16 text-blue-600" />
                          </div>
                        </div>
                      )}
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600">
                        {provider.name}
                      </h3>
                      {provider.title && (
                        <p className="text-blue-600 font-medium mb-4">
                          {provider.title}
                        </p>
                      )}

                      {provider.specialties &&
                        provider.specialties.length > 0 && (
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2 justify-center">
                              {provider.specialties
                                .slice(0, 3)
                                .map((specialty: string, index: number) => (
                                  <span
                                    key={index}
                                    className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                  >
                                    {specialty
                                      .replace("-", " ")
                                      .replace(/\b\w/g, (l: string) => l.toUpperCase())}
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
                        <div className="text-gray-600 text-sm mb-4 line-clamp-3">
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

                      <div className="flex items-center justify-center text-blue-600 font-medium group-hover:text-blue-700">
                        View Profile
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-12">
                  <User className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Team
                  </h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    We're assembling our team of expert oncologists and
                    specialists. Check back soon to meet our physicians.
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
        </div>
      </section>

      {/* Featured Physicians */}
      {providers && providers.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Meet Our Leadership Team
                </h2>
                <p className="text-xl text-gray-600">
                  Experienced leaders in cancer care
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {providers.slice(0, 4).map((provider: any) => (
                  <div
                    key={provider._id}
                    className="bg-white rounded-lg p-6 shadow-md text-center"
                  >
                    {provider.image ? (
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
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
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                          <User className="w-12 h-12 text-blue-600" />
                        </div>
                      </div>
                    )}
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      {provider.name}
                    </h3>
                    {provider.title && (
                      <p className="text-blue-600 font-medium text-sm mb-3">
                        {provider.title}
                      </p>
                    )}
                    {provider.specialties &&
                      provider.specialties.length > 0 && (
                        <div className="flex flex-wrap gap-1 justify-center">
                          {provider.specialties
                            .slice(0, 2)
                            .map((specialty: string, index: number) => (
                              <span
                                key={index}
                                className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                              >
                                {specialty
                                  .replace("-", " ")
                                  .replace(/\b\w/g, (l: string) => l.toUpperCase())}
                              </span>
                            ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Our Physicians */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Physicians?
              </h2>
              <p className="text-xl text-gray-600">
                Expertise, experience, and compassionate care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Board Certified
                </h3>
                <p className="text-gray-600">
                  All our physicians are board-certified in their respective
                  specialties, ensuring the highest standards of care.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Extensive Education
                </h3>
                <p className="text-gray-600">
                  Our team includes physicians with advanced training from
                  leading medical institutions and ongoing education in the
                  latest treatments.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Patient-Centered Care
                </h3>
                <p className="text-gray-600">
                  We believe in treating the whole person, not just the disease,
                  with personalized care plans and ongoing support.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Multiple Locations
                </h3>
                <p className="text-gray-600">
                  Our physicians practice at multiple convenient locations
                  throughout New York, making care accessible close to home.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Accessible Care
                </h3>
                <p className="text-gray-600">
                  Easy scheduling, responsive communication, and dedicated
                  support staff ensure you can reach us when you need us.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Comprehensive Services
                </h3>
                <p className="text-gray-600">
                  From diagnosis to treatment to follow-up care, our physicians
                  provide comprehensive cancer care throughout your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Meet Your Care Team?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Schedule a consultation with one of our experienced oncologists to
              discuss your treatment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                <User className="mr-2 w-5 h-5" />
                Learn About Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
