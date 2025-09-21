import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import {
  Stethoscope,
  Microscope,
  Zap,
  Shield,
  Heart,
  Brain,
} from "lucide-react";

export default async function ServicesPage() {
  const services = await client.fetch(queries.services);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cancer Treatment Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Comprehensive cancer care with the latest treatments and
              innovative technologies
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Advanced Treatment Options
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our comprehensive cancer care includes medical oncology, radiation
              therapy, surgical oncology, and supportive care services. We
              utilize the latest advances in cancer treatment to provide
              personalized care for each patient's unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {services && services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service: any) => (
                <Link
                  href={`/services/${service.slug?.current}`}
                  key={service._id}
                  className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <Stethoscope className="w-16 h-16 text-blue-600" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600">
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
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Fallback content when no services in Sanity */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link
                href="/services/medical-oncology"
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Stethoscope className="w-16 h-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600">
                    Medical Oncology
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive cancer treatment including chemotherapy,
                    immunotherapy, targeted therapy, and hormone therapy.
                  </p>
                  <div className="text-blue-600 font-medium group-hover:text-blue-700">
                    Learn More →
                  </div>
                </div>
              </Link>

              <Link
                href="/services/radiation-oncology"
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600">
                    Radiation Oncology
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Advanced radiation therapy including IMRT, stereotactic
                    radiosurgery, and brachytherapy.
                  </p>
                  <div className="text-blue-600 font-medium group-hover:text-blue-700">
                    Learn More →
                  </div>
                </div>
              </Link>

              <Link
                href="/services/surgical-oncology"
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Shield className="w-16 h-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600">
                    Surgical Oncology
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Minimally invasive and traditional surgical procedures for
                    cancer treatment and tumor removal.
                  </p>
                  <div className="text-blue-600 font-medium group-hover:text-blue-700">
                    Learn More →
                  </div>
                </div>
              </Link>

              <Link
                href="/services/hematology"
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Heart className="w-16 h-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600">
                    Hematology
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Specialized care for blood cancers including leukemia,
                    lymphoma, and multiple myeloma.
                  </p>
                  <div className="text-blue-600 font-medium group-hover:text-blue-700">
                    Learn More →
                  </div>
                </div>
              </Link>

              <Link
                href="/services/clinical-trials"
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Microscope className="w-16 h-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600">
                    Clinical Trials
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Access to cutting-edge cancer treatments through our
                    extensive clinical trials program.
                  </p>
                  <div className="text-blue-600 font-medium group-hover:text-blue-700">
                    Learn More →
                  </div>
                </div>
              </Link>

              <Link
                href="/services/supportive-care"
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Brain className="w-16 h-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600">
                    Supportive Care
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive support services including pain management,
                    nutrition counseling, and survivorship care.
                  </p>
                  <div className="text-blue-600 font-medium group-hover:text-blue-700">
                    Learn More →
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Cancer Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Cancer Types We Treat
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Breast Cancer",
                "Lung Cancer",
                "Prostate Cancer",
                "Colorectal Cancer",
                "Brain Tumors",
                "Leukemia",
                "Lymphoma",
                "Pancreatic Cancer",
                "Ovarian Cancer",
                "Bladder Cancer",
                "Kidney Cancer",
                "Melanoma",
              ].map((cancerType, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-medium text-gray-900">{cancerType}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Treatment Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Initial Consultation
                </h3>
                <p className="text-gray-600">
                  Comprehensive evaluation and treatment planning with your care
                  team
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Diagnostic Testing
                </h3>
                <p className="text-gray-600">
                  Advanced imaging and laboratory tests for accurate diagnosis
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Treatment Plan</h3>
                <p className="text-gray-600">
                  Personalized treatment approach developed by our
                  multidisciplinary team
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Ongoing Care</h3>
                <p className="text-gray-600">
                  Continuous monitoring and supportive care throughout your
                  journey
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
            <h2 className="text-3xl font-bold mb-6">
              Ready to Discuss Your Treatment Options?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our expert oncologists are here to help you understand your
              treatment options and create a personalized care plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/providers"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
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
