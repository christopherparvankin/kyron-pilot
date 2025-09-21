import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Users,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export default async function AboutPage() {
  const aboutContent = await client.fetch(queries.about);
  const locations = await client.fetch(queries.locations);
  const providers = await client.fetch(queries.providers);

  // Use the first location as the main office contact info
  const mainLocation = locations?.[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="py-20 text-white relative"
        style={{
          backgroundImage: aboutContent?.heroImage
            ? `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url(${urlFor(
                aboutContent.heroImage
              )
                .width(1200)
                .height(600)
                .url()})`
            : "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {aboutContent?.aboutTitle || "About NY Oncologists"}
            </h1>
            <p className="text-xl text-blue-100">
              {aboutContent?.heroSubtitle ||
                "Leading cancer care with innovative treatments and compassionate support throughout New York"}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {aboutContent?.missionTitle || "Our Mission"}
              </h2>
              <div className="max-w-4xl mx-auto">
                {aboutContent?.missionContent ? (
                  <div className="prose prose-lg mx-auto">
                    <PortableText value={aboutContent.missionContent} />
                  </div>
                ) : (
                  <p className="text-xl text-gray-600 leading-relaxed">
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

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {aboutContent?.aboutTitle || "About NY Oncologists"}
                </h2>
                <div className="space-y-6 text-gray-600">
                  {aboutContent?.aboutContent ? (
                    <div className="prose prose-lg max-w-none">
                      <PortableText value={aboutContent.aboutContent} />
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <p className="text-lg">
                        For {aboutContent?.yearsExperience || 50} years, we have
                        been at the leading-edge of cancer care. When you are a
                        patient at NY Oncologists, you can expect innovative
                        cancer care tailored to you using the latest treatments
                        and technologies available, including clinical trials.
                      </p>
                      <p className="text-lg">
                        Our cancer centers specialize in medical oncology,
                        hematology, gynecologic oncology, radiation oncology and
                        bone marrow transplants. We are rooted in the community
                        and available to provide care, resources and support for
                        you and your family close to home.
                      </p>
                      <p className="text-lg">
                        Together, we have over{" "}
                        {aboutContent?.combinedExperience || 400} years of
                        combined treatment experience, and we're changing the
                        landscape of patient care and wellness. Our dedicated
                        and highly-skilled physicians and staff specialize in
                        caring for patients with cancer and blood disorders by
                        providing access to the latest therapies, technologies,
                        and research throughout New York and the surrounding
                        areas.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose NY Oncologists?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <span className="text-gray-600">
                      Over {aboutContent?.yearsExperience || 50} years of
                      experience in cancer care
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <span className="text-gray-600">
                      {aboutContent?.combinedExperience || 400}+ years of
                      combined treatment experience
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <span className="text-gray-600">
                      Access to latest treatments and clinical trials
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <span className="text-gray-600">
                      Multidisciplinary team approach to care
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <span className="text-gray-600">
                      Community-based care close to home
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <span className="text-gray-600">
                      Comprehensive support for patients and families
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {providers.slice(0, 6).map((provider: any) => (
                  <Link
                    key={provider._id}
                    href={`/providers/${provider.slug?.current}`}
                    className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                  >
                    <div className="text-center">
                      {provider.image && (
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                          {/* Image would be implemented with urlFor */}
                        </div>
                      )}
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600">
                        {provider.name}
                      </h3>
                      {provider.title && (
                        <p className="text-blue-600 font-medium mb-3">
                          {provider.title}
                        </p>
                      )}
                      {provider.specialties &&
                        provider.specialties.length > 0 && (
                          <div className="flex flex-wrap gap-2 justify-center">
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
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/providers"
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                >
                  <Users className="mr-2 w-5 h-5" />
                  View All Physicians
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-xl text-gray-600">
                Located throughout New York, we're here to serve your oncology
                needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Main Location - Prominent Display */}
              <div className="bg-white rounded-lg p-8 shadow-lg lg:col-span-2">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {mainLocation?.name || "Main Office"}
                  </h3>
                  <p className="text-gray-600">
                    Your trusted oncology care center
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-600">
                          {mainLocation?.address?.street ||
                            "123 Medical Center Drive"}
                        </p>
                        <p className="text-gray-600">
                          {mainLocation?.address?.city || "New York"},{" "}
                          {mainLocation?.address?.state || "NY"}{" "}
                          {mainLocation?.address?.zipCode || "10001"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <a
                        href={`tel:${mainLocation?.phone || "555-123-4567"}`}
                        className="text-gray-600 hover:text-blue-600"
                      >
                        {mainLocation?.phone || "555-123-4567"}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <a
                        href={`mailto:${
                          mainLocation?.email || "info@nyoncologists.com"
                        }`}
                        className="text-gray-600 hover:text-blue-600"
                      >
                        {mainLocation?.email || "info@nyoncologists.com"}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div className="text-gray-600">
                        {mainLocation?.hours &&
                        mainLocation.hours.length > 0 ? (
                          mainLocation.hours.map((hour: any, index: number) => (
                            <p key={index}>
                              {hour.closed
                                ? `${hour.day}: Closed`
                                : `${hour.day}: ${hour.open} - ${hour.close}`}
                            </p>
                          ))
                        ) : (
                          <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {aboutContent?.ctaTitle || "Ready to Begin Your Care Journey?"}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {aboutContent?.ctaDescription ||
                  "Our compassionate team is here to support you every step of the way. Contact us today to schedule a consultation."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/appointment"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Request Appointment</span>
                </Link>
                <a
                  href={`tel:${mainLocation?.phone || "555-123-4567"}`}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
