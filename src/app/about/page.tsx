import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Calendar,
  Stethoscope,
  Users,
  Heart,
  Award,
} from "lucide-react";
import Link from "next/link";

export default async function AboutPage() {
  const aboutContent = await client.fetch(queries.about);
  const locations = await client.fetch(queries.locations);

  // Use the first location as the main office contact info
  const mainLocation = locations?.[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About NY Oncologists
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Leading cancer care with compassion, innovation, and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="prose prose-lg mx-auto">
                {aboutContent && aboutContent.mission ? (
                  <PortableText value={aboutContent.mission} />
                ) : (
                  <p className="text-xl text-gray-600 leading-relaxed">
                    To provide superior treatment and compassionate care for
                    those diagnosed with cancer and blood disorders by offering
                    a dedicated environment of wellness through patient
                    education, innovative treatment options, and ongoing
                    emotional support for our patients and their families.
                  </p>
                )}
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Compassionate Care
                </h3>
                <p className="text-gray-600">
                  We treat each patient with dignity, respect, and personalized
                  attention throughout their journey.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Stethoscope className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Advanced Treatment
                </h3>
                <p className="text-gray-600">
                  We utilize the latest technologies and evidence-based
                  treatments to provide the best outcomes.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our multidisciplinary team of specialists work together to
                  provide comprehensive care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              {aboutContent && aboutContent.description ? (
                <PortableText value={aboutContent.description} />
              ) : (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Leading Cancer Care in New York
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    For over 25 years, NY Oncologists has been at the forefront
                    of cancer care, providing innovative treatments and
                    compassionate support to patients and families throughout
                    New York. Our multidisciplinary team of oncologists,
                    specialists, and support staff work together to deliver
                    personalized care using the latest advances in cancer
                    treatment.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    We understand that a cancer diagnosis affects not just the
                    patient, but their entire family. That's why we provide
                    comprehensive support services, including counseling,
                    nutrition guidance, financial assistance, and access to
                    clinical trials that may offer additional treatment options.
                  </p>
                  <p className="text-lg text-gray-600">
                    Our commitment to excellence has made us a trusted partner
                    in cancer care, and we continue to invest in the latest
                    technologies and treatments to ensure our patients receive
                    the most advanced care available.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Expert Oncologists</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                <div className="text-gray-600">NY Locations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Clinical Trials</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-300" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-300" />
                    <span>patient@ihomes.org</span>
                  </div>
                  {mainLocation && (
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-300" />
                      <div>
                        <div>{mainLocation.name}</div>
                        {mainLocation.address && (
                          <div className="text-blue-200 text-sm">
                            {mainLocation.address.street}
                            {mainLocation.address.city && (
                              <div>
                                {mainLocation.address.city},{" "}
                                {mainLocation.address.state}{" "}
                                {mainLocation.address.zipCode}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Office Hours</h3>
                {mainLocation &&
                mainLocation.hours &&
                mainLocation.hours.length > 0 ? (
                  <div className="space-y-2">
                    {mainLocation.hours.map((hour: any, index: number) => (
                      <div key={index} className="flex justify-between">
                        <span>{hour.day}:</span>
                        <span className="text-blue-200">
                          {hour.closed
                            ? "Closed"
                            : `${hour.open} - ${hour.close}`}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="text-blue-200">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="text-blue-200">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="text-blue-200">Closed</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/appointment"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
