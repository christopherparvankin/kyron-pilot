import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { Stethoscope, Award, GraduationCap, MapPin } from "lucide-react";

export default async function ProvidersPage() {
  const providers = await client.fetch(queries.providers);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Expert Oncologists
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Meet our team of experienced cancer specialists dedicated to
              providing compassionate, cutting-edge care
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Expert Care, Personalized Treatment
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our board-certified oncologists bring decades of experience and
              expertise to provide comprehensive cancer care. Each physician is
              committed to staying at the forefront of cancer treatment advances
              and delivering personalized care tailored to each patient's unique
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Providers Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {providers && providers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {providers.map((provider: any) => (
                <Link
                  key={provider._id}
                  href={`/providers/${provider.slug?.current}`}
                  className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Provider Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    {provider.image ? (
                      <div className="w-32 h-32 rounded-full bg-blue-300 flex items-center justify-center">
                        {/* Image would go here - you'd need to implement imageUrlBuilder */}
                        <span className="text-blue-600 text-2xl font-bold">
                          {provider.name
                            ?.split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </span>
                      </div>
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-blue-300 flex items-center justify-center">
                        <span className="text-blue-600 text-2xl font-bold">
                          {provider.name
                            ?.split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
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
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {provider.specialties
                              .slice(0, 2)
                              .map((specialty: string, index: number) => (
                                <span
                                  key={index}
                                  className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                >
                                  {specialty}
                                </span>
                              ))}
                            {provider.specialties.length > 2 && (
                              <span className="text-gray-500 text-xs">
                                +{provider.specialties.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                    {provider.bio && (
                      <div className="text-gray-600 text-sm mb-4 line-clamp-3">
                        <PortableText value={provider.bio} />
                      </div>
                    )}

                    {provider.locations && provider.locations.length > 0 && (
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>
                          {provider.locations.length} location
                          {provider.locations.length > 1 ? "s" : ""}
                        </span>
                      </div>
                    )}

                    <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700">
                      View Profile →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Fallback content when no providers in Sanity */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-blue-300 flex items-center justify-center">
                    <span className="text-blue-600 text-2xl font-bold">DS</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Dr. Sarah Johnson
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    Medical Oncologist
                  </p>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
                      Breast Cancer
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Gynecologic Oncology
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Board-certified medical oncologist with over 15 years of
                    experience in treating breast and gynecologic cancers.
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>2 locations</span>
                  </div>
                  <div className="text-blue-600 font-medium">
                    View Profile →
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-blue-300 flex items-center justify-center">
                    <span className="text-blue-600 text-2xl font-bold">MR</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Dr. Michael Rodriguez
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    Radiation Oncologist
                  </p>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
                      Prostate Cancer
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Brain Tumors
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Specialized in advanced radiation therapy techniques
                    including stereotactic radiosurgery and IMRT.
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>3 locations</span>
                  </div>
                  <div className="text-blue-600 font-medium">
                    View Profile →
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-blue-300 flex items-center justify-center">
                    <span className="text-blue-600 text-2xl font-bold">EC</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Dr. Emily Chen</h3>
                  <p className="text-blue-600 font-medium mb-3">
                    Hematologist-Oncologist
                  </p>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
                      Leukemia
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Lymphoma
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Expert in blood cancers and bone marrow transplantation with
                    focus on personalized treatment approaches.
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>1 location</span>
                  </div>
                  <div className="text-blue-600 font-medium">
                    View Profile →
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our Team?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Board Certified</h3>
                <p className="text-gray-600">
                  All our physicians are board-certified and maintain the
                  highest standards of medical excellence.
                </p>
              </div>
              <div className="text-center p-6">
                <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Advanced Training
                </h3>
                <p className="text-gray-600">
                  Our team includes fellowship-trained specialists with
                  expertise in the latest cancer treatments.
                </p>
              </div>
              <div className="text-center p-6">
                <Stethoscope className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Multidisciplinary Care
                </h3>
                <p className="text-gray-600">
                  We work as a team to provide comprehensive care tailored to
                  each patient's unique needs.
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
              Ready to Meet Your Care Team?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Schedule a consultation with one of our expert oncologists to
              discuss your treatment options.
            </p>
            <Link
              href="/appointment"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Request Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
