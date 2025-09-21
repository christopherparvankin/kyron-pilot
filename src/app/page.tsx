import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Calendar,
  Stethoscope,
  Users,
  Heart,
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
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Advanced Cancer Care in New York
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Compassionate, innovative oncology care with the latest treatments
              and technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Request an Appointment
              </Link>
              <Link
                href="/providers"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Find a Physician
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="/providers"
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Users className="w-12 h-12 text-blue-600 mb-4 group-hover:text-blue-700" />
              <h3 className="text-xl font-semibold mb-2">Our Physicians</h3>
              <p className="text-gray-600">
                Meet our experienced oncologists and specialists
              </p>
            </Link>

            <Link
              href="/services"
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Stethoscope className="w-12 h-12 text-blue-600 mb-4 group-hover:text-blue-700" />
              <h3 className="text-xl font-semibold mb-2">Cancer Treatments</h3>
              <p className="text-gray-600">
                Advanced treatment options and clinical trials
              </p>
            </Link>

            <Link
              href="/locations"
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <MapPin className="w-12 h-12 text-blue-600 mb-4 group-hover:text-blue-700" />
              <h3 className="text-xl font-semibold mb-2">Our Locations</h3>
              <p className="text-gray-600">
                Convenient locations across New York
              </p>
            </Link>

            <Link
              href="/appointment"
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Calendar className="w-12 h-12 text-blue-600 mb-4 group-hover:text-blue-700" />
              <h3 className="text-xl font-semibold mb-2">
                Schedule Appointment
              </h3>
              <p className="text-gray-600">Book your consultation today</p>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading Cancer Care in New York
              </h2>
              {aboutContent && aboutContent.description ? (
                <div className="prose prose-lg mx-auto">
                  <PortableText value={aboutContent.description} />
                </div>
              ) : (
                <p className="text-xl text-gray-600 leading-relaxed">
                  For over 25 years, we have been at the forefront of cancer
                  care, providing innovative treatments and compassionate
                  support to patients and families throughout New York. Our
                  multidisciplinary team of oncologists, specialists, and
                  support staff work together to deliver personalized care using
                  the latest advances in cancer treatment.
                </p>
              )}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
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

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Cancer Treatment Services
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
                  className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3 text-blue-900 group-hover:text-blue-700">
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="text-gray-600 mb-4">
                      {service.description.length > 120
                        ? `${service.description.substring(0, 120)}...`
                        : service.description}
                    </p>
                  )}
                  <div className="text-blue-600 font-medium group-hover:text-blue-700">
                    Learn More →
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">
                  Medical Oncology
                </h3>
                <p className="text-gray-600">
                  Comprehensive medical cancer treatments including chemotherapy
                  and targeted therapy
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">
                  Radiation Oncology
                </h3>
                <p className="text-gray-600">
                  Advanced radiation therapy using state-of-the-art equipment
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">
                  Surgical Oncology
                </h3>
                <p className="text-gray-600">
                  Minimally invasive and traditional surgical cancer treatments
                </p>
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Begin Your Care Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our compassionate team is here to support you every step of the
              way. Contact us today to schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Schedule Appointment
              </Link>
              <Link
                href="/locations"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Find a Location
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
