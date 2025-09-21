import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Calendar,
  User,
  GraduationCap,
  Award,
  Globe,
  Clock,
} from "lucide-react";

interface ProviderPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProviderPage({ params }: ProviderPageProps) {
  const { slug } = await params;
  const provider = await client.fetch(queries.getProviderBySlug, {
    slug: slug,
  });

  if (!provider) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Provider Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The provider you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/providers"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Providers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/providers"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to All Providers
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Provider Image */}
              <div className="lg:col-span-1">
                {provider.image ? (
                  <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl">
                    <img
                      src={urlFor(provider.image).width(256).height(256).url()}
                      alt={provider.image.alt || provider.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full bg-gray-200 overflow-hidden shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <User className="w-32 h-32 text-blue-600" />
                    </div>
                  </div>
                )}
              </div>

              {/* Provider Info */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {provider.name}
                </h1>
                {provider.title && (
                  <p className="text-2xl text-blue-100 mb-6">
                    {provider.title}
                  </p>
                )}

                {provider.specialties && provider.specialties.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Specialties</h3>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      {provider.specialties.map(
                        (specialty: string, index: number) => (
                          <span
                            key={index}
                            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
                          >
                            {specialty
                              .replace("-", " ")
                              .replace(/\b\w/g, (l: string) => l.toUpperCase())}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/appointment"
                    className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Appointment
                  </Link>
                  <Link
                    href="/providers"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
                  >
                    <User className="mr-2 w-5 h-5" />
                    View All Providers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      {provider.bio && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                About Dr. {provider.name.split(" ").pop()}
              </h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <PortableText
                  value={provider.bio}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="mb-6 leading-relaxed">{children}</p>
                      ),
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Education & Certifications */}
      {(provider.education || provider.certifications) && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Education & Credentials
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Education */}
                {provider.education && provider.education.length > 0 && (
                  <div className="bg-white rounded-lg p-8 shadow-md">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Education
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {provider.education.map((edu: any, index: number) => (
                        <div
                          key={index}
                          className="border-l-4 border-blue-600 pl-4"
                        >
                          <h4 className="font-semibold text-gray-900">
                            {edu.degree}
                          </h4>
                          <p className="text-gray-600">{edu.institution}</p>
                          {edu.year && (
                            <p className="text-sm text-gray-500">{edu.year}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certifications */}
                {provider.certifications &&
                  provider.certifications.length > 0 && (
                    <div className="bg-white rounded-lg p-8 shadow-md">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <Award className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Certifications
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {provider.certifications.map(
                          (cert: string, index: number) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                              <span className="text-gray-700">{cert}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Languages */}
      {provider.languages && provider.languages.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Languages Spoken
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {provider.languages.map((language: string, index: number) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Information */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Schedule an Appointment with Dr. {provider.name.split(" ").pop()}
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Ready to meet with our expert? Contact us to schedule your
              consultation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">(555) 123-4567</p>
                <p className="text-sm text-blue-200">Mon-Fri, 8AM-5PM</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">info@nyoncologists.com</p>
                <p className="text-sm text-blue-200">24-hour response</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-100">Multiple NY Locations</p>
                <p className="text-sm text-blue-200">
                  <Link href="/locations" className="hover:text-white">
                    View all locations
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Appointment
              </Link>
              <Link
                href="/providers"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                <User className="mr-2 w-5 h-5" />
                View All Providers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
