import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Calendar,
  Stethoscope,
  Users,
  Heart,
  ArrowRight,
} from "lucide-react";

export default async function Home() {
  // Fetch content from Sanity
  const aboutContent = await client.fetch(queries.about);
  const locations = await client.fetch(queries.locations);
  const providers = await client.fetch(queries.providers);
  const services = await client.fetch(queries.services);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white py-24 lg:py-32"
        style={{
          backgroundImage: aboutContent?.heroImage
            ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${urlFor(
                aboutContent.heroImage
              )
                .width(1920)
                .height(800)
                .url()})`
            : "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {aboutContent?.heroTitle ||
                  "Together: A Better Way To Fight Cancer"}
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-blue-100">
                {aboutContent?.heroSubtitle ||
                  "Patient Centered Cancer Care Across New York"}
              </h2>
              {aboutContent?.heroDescription && (
                <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-12">
                  {aboutContent.heroDescription}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/appointment"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Request an Appointment
              </Link>
              <Link
                href="/providers"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                Find a Physician
              </Link>
            </div>

            {/* Quick Access Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/providers"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors"
              >
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Find a Physician</h3>
                <p className="text-blue-100 text-sm">
                  Meet our expert oncologists
                </p>
              </Link>

              <Link
                href="/services"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors"
              >
                <Stethoscope className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Treatments & Services
                </h3>
                <p className="text-blue-100 text-sm">
                  Advanced cancer treatments
                </p>
              </Link>

              <Link
                href="/appointment"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors"
              >
                <Calendar className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">First Visit</h3>
                <p className="text-blue-100 text-sm">
                  Schedule your consultation
                </p>
              </Link>

              <Link
                href="/about"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors"
              >
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Patient Portal</h3>
                <p className="text-blue-100 text-sm">
                  Access your health records
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {aboutContent?.aboutTitle || "About NY Oncologists"}
                </h2>
                {aboutContent?.aboutContent ? (
                  <div className="prose prose-lg max-w-none">
                    <PortableText value={aboutContent.aboutContent} />
                  </div>
                ) : (
                  <div className="space-y-4 text-gray-600">
                    <p>
                      For {aboutContent?.yearsExperience || 50} years, we have
                      been at the leading-edge of cancer care. When you are a
                      patient at NY Oncologists, you can expect innovative
                      cancer care tailored to you using the latest treatments
                      and technologies available, including clinical trials.
                    </p>
                    <p>
                      Our cancer centers specialize in medical oncology,
                      hematology, gynecologic oncology, radiation oncology and
                      bone marrow transplants. We are rooted in the community
                      and available to provide care, resources and support for
                      you and your family close to home.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {aboutContent?.missionTitle || "Our Mission"}
                </h3>
                {aboutContent?.missionContent ? (
                  <div className="prose max-w-none">
                    <PortableText value={aboutContent.missionContent} />
                  </div>
                ) : (
                  <p className="text-gray-600">
                    To provide superior treatment and compassionate care for
                    those diagnosed with cancer and blood disorders by offering
                    a dedicated environment of wellness through patient
                    education, innovative treatment options and ongoing
                    emotional support for our patients and their families.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Learn More About Cancer & Treatment Options
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive cancer care with the latest treatments and
                technologies
              </p>
            </div>

            {services && services.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.slice(0, 6).map((service: any) => (
                  <Link
                    key={service._id}
                    href={`/services/${service.slug?.current}`}
                    className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600">
                      {service.title}
                    </h3>
                    {service.description && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {service.description}
                      </p>
                    )}
                    {service.category && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {service.category
                          .replace("-", " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Breast Cancer
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive breast cancer treatment and care
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Lung Cancer
                  </h3>
                  <p className="text-gray-600">
                    Advanced lung cancer diagnosis and treatment
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Prostate Cancer
                  </h3>
                  <p className="text-gray-600">
                    Specialized prostate cancer care and treatment
                  </p>
                </div>
              </div>
            )}

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      {providers && providers.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Meet Our Expert Team
                </h2>
                <p className="text-xl text-gray-600">
                  Experienced oncologists dedicated to your care
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {providers.slice(0, 4).map((provider: any) => (
                  <Link
                    key={provider._id}
                    href={`/providers/${provider.slug?.current}`}
                    className="group text-center"
                  >
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
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
                            <Users className="w-12 h-12 text-blue-600" />
                          </div>
                        </div>
                      )}
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600">
                        {provider.name}
                      </h3>
                      {provider.title && (
                        <p className="text-blue-600 font-medium text-sm mb-2">
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
                                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                                </span>
                              ))}
                          </div>
                        )}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/providers"
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                >
                  View All Physicians
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Locations Section */}
      {locations && locations.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Locations
              </h2>
              <p className="text-xl text-gray-600">
                Convenient care locations throughout New York
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.slice(0, 3).map((location: any) => (
                <div
                  key={location._id}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {location.name}
                      </h3>
                      <div className="text-gray-600">
                        <p>{location.address?.street}</p>
                        <p>
                          {location.address?.city}, {location.address?.state}{" "}
                          {location.address?.zipCode}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <a
                        href={`tel:${location.phone}`}
                        className="text-gray-600 hover:text-blue-600"
                      >
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <div className="text-gray-600 text-sm">
                        {location.hours && location.hours.length > 0 ? (
                          <div>
                            {location.hours
                              .filter((hour: any) => !hour.closed)
                              .slice(0, 2)
                              .map((hour: any, index: number) => (
                                <p key={index}>
                                  {hour.day}: {hour.open} - {hour.close}
                                </p>
                              ))}
                          </div>
                        ) : (
                          <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/appointment"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Schedule Appointment
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {locations.length > 3 && (
              <div className="text-center mt-12">
                <Link
                  href="/locations"
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                >
                  View All Locations
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              {aboutContent?.ctaTitle || "Ready to Begin Your Care Journey?"}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {aboutContent?.ctaDescription ||
                "Our compassionate team is here to support you every step of the way. Contact us today to schedule a consultation."}
            </p>
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
                <Users className="mr-2 w-5 h-5" />
                Find a Physician
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
