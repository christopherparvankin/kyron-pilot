import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Calendar,
  ArrowRight,
  Navigation,
} from "lucide-react";
import Link from "next/link";

export default async function LocationsPage() {
  const locations = await client.fetch(queries.locations);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our Locations
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Convenient cancer care locations throughout New York
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              We're committed to bringing expert oncology care closer to you
              with multiple locations across New York.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {locations && locations.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {locations.map((location: any) => (
                <div
                  key={location._id}
                  className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {location.name}
                      </h3>
                      <div className="text-gray-600">
                        <p className="font-medium">
                          {location.address?.street}
                        </p>
                        <p>
                          {location.address?.city}, {location.address?.state}{" "}
                          {location.address?.zipCode}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <a
                          href={`tel:${location.phone}`}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a
                          href={`mailto:${location.email}`}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          {location.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900 mb-2">
                          Office Hours
                        </p>
                        <div className="text-gray-600">
                          {location.hours && location.hours.length > 0 ? (
                            <div className="space-y-1">
                              {location.hours.map(
                                (hour: any, index: number) => (
                                  <div
                                    key={index}
                                    className="flex justify-between"
                                  >
                                    <span className="font-medium">
                                      {hour.day}
                                    </span>
                                    <span>
                                      {hour.closed
                                        ? "Closed"
                                        : `${hour.open} - ${hour.close}`}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span className="font-medium">
                                  Monday - Friday
                                </span>
                                <span>8:00 AM - 5:00 PM</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Saturday</span>
                                <span>Closed</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Sunday</span>
                                <span>Closed</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/appointment"
                      className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center inline-flex items-center justify-center"
                    >
                      <Calendar className="mr-2 w-4 h-4" />
                      Schedule Appointment
                    </Link>
                    <a
                      href={`https://maps.google.com/?q=${location.address?.street}, ${location.address?.city}, ${location.address?.state} ${location.address?.zipCode}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center inline-flex items-center justify-center"
                    >
                      <Navigation className="mr-2 w-4 h-4" />
                      Get Directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                No Locations Available
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                We're working on adding our office locations. Check back soon
                for detailed information about our facilities.
              </p>
              <Link
                href="/appointment"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Request an Appointment
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Why Multiple Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Multiple Locations?
              </h2>
              <p className="text-xl text-gray-600">
                We believe cancer care should be accessible and convenient for
                all patients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Convenience
                </h3>
                <p className="text-gray-600">
                  Multiple locations mean shorter travel times and easier access
                  to care for you and your family.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-600">
                  More locations mean more appointment availability and
                  scheduling options that work with your schedule.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Continuity of Care
                </h3>
                <p className="text-gray-600">
                  Seamless care coordination across all our locations ensures
                  you receive consistent, high-quality treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Visit One of Our Locations?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule your appointment at the location most convenient for you.
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
              <ArrowRight className="mr-2 w-5 h-5" />
              Find a Provider
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
