import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import {
  ArrowRight,
  Stethoscope,
  Heart,
  Zap,
  Shield,
  Target,
} from "lucide-react";

export default async function ServicesPage() {
  const services = await client.fetch(queries.services);

  // Group services by category
  const servicesByCategory =
    services?.reduce((acc: any, service: any) => {
      const category = service.category || "other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(service);
      return acc;
    }, {}) || {};

  const categoryIcons: { [key: string]: any } = {
    "medical-oncology": Stethoscope,
    hematology: Heart,
    "radiation-oncology": Zap,
    "gynecologic-oncology": Shield,
    "cancer-treatment": Target,
    "patient-services": Heart,
  };

  const categoryTitles: { [key: string]: string } = {
    "medical-oncology": "Medical Oncology",
    hematology: "Hematology",
    "radiation-oncology": "Radiation Oncology",
    "gynecologic-oncology": "Gynecologic Oncology",
    "cancer-treatment": "Cancer Treatments",
    "patient-services": "Patient Services",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Treatments & Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Comprehensive cancer care with the latest treatments and
              technologies
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Our multidisciplinary team provides advanced cancer treatments,
              cutting-edge therapies, and compassionate care tailored to your
              specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {Object.keys(servicesByCategory).length > 0 ? (
              <div className="space-y-16">
                {Object.entries(servicesByCategory).map(
                  ([category, categoryServices]: [string, any]) => {
                    const IconComponent =
                      categoryIcons[category] || Stethoscope;
                    const categoryTitle =
                      categoryTitles[category] ||
                      category
                        .replace("-", " ")
                        .replace(/\b\w/g, (l: string) => l.toUpperCase());

                    return (
                      <div key={category} className="bg-gray-50 rounded-lg p-8">
                        <div className="flex items-center mb-8">
                          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h2 className="text-3xl font-bold text-gray-900">
                            {categoryTitle}
                          </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {categoryServices.map((service: any) => (
                            <Link
                              key={service._id}
                              href={`/services/${service.slug?.current}`}
                              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                            >
                              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600">
                                {service.title}
                              </h3>
                              {service.description && (
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                  {service.description}
                                </p>
                              )}
                              {service.featured && (
                                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4">
                                  Featured Service
                                </span>
                              )}
                              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                                Learn More
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-12">
                  <Stethoscope className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Services Coming Soon
                  </h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    We're working on adding our comprehensive cancer treatment
                    services. Check back soon for detailed information about our
                    treatments and care options.
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

      {/* Featured Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Treatment Specialties
              </h2>
              <p className="text-xl text-gray-600">
                Advanced cancer care across multiple specialties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Medical Oncology
                </h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive medical cancer treatments including
                  chemotherapy, targeted therapy, and immunotherapy.
                </p>
                <Link
                  href="/services?category=medical-oncology"
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Hematology
                </h3>
                <p className="text-gray-600 mb-6">
                  Specialized care for blood disorders and blood-related cancers
                  with advanced treatment options.
                </p>
                <Link
                  href="/services?category=hematology"
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Radiation Oncology
                </h3>
                <p className="text-gray-600 mb-6">
                  Advanced radiation therapy using state-of-the-art equipment
                  and precision targeting.
                </p>
                <Link
                  href="/services?category=radiation-oncology"
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Gynecologic Oncology
                </h3>
                <p className="text-gray-600 mb-6">
                  Specialized care for gynecologic cancers with comprehensive
                  treatment and surgical options.
                </p>
                <Link
                  href="/services?category=gynecologic-oncology"
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Cancer Treatments
                </h3>
                <p className="text-gray-600 mb-6">
                  Latest cancer treatment options including clinical trials and
                  innovative therapies.
                </p>
                <Link
                  href="/services?category=cancer-treatment"
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Patient Services
                </h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive support services including counseling,
                  nutrition, and financial assistance.
                </p>
                <Link
                  href="/services?category=patient-services"
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn More →
                </Link>
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
              Ready to Learn More About Our Services?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our team is here to discuss your treatment options and answer any
              questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/providers"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
