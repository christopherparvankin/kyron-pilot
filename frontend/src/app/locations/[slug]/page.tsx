import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Stethoscope,
  Users,
} from "lucide-react";
import Link from "next/link";

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = await client.fetch(queries.getLocationBySlug, {
    slug: slug,
  });

  if (!location) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Location Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The requested location could not be found.
            </p>
            <Link
              href="/providers"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              {location.name}
            </h1>
            <p className="text-lg text-blue-100">
              Visit us at this convenient location
            </p>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Location Info */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Location Information
                </h2>

                {location.address && (
                  <div className="mb-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Address
                        </h3>
                        <div className="text-gray-600">
                          <p>{location.address.street}</p>
                          <p>
                            {location.address.city}, {location.address.state}{" "}
                            {location.address.zipCode}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4 mb-6">
                  {location.phone && (
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          Phone
                        </h3>
                        <a
                          href={`tel:${location.phone}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {location.email && (
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          Email
                        </h3>
                        <a
                          href={`mailto:${location.email}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {location.email}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {location.hours && location.hours.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-medium text-gray-900">
                        Office Hours
                      </h3>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="space-y-2">
                        {location.hours.map((hour: any, index: number) => (
                          <div
                            key={index}
                            className="flex justify-between items-center"
                          >
                            <span className="font-medium text-gray-700">
                              {hour.day}
                            </span>
                            <span className="text-gray-600">
                              {hour.closed
                                ? "Closed"
                                : `${hour.open} - ${hour.close}`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <a
                    href="/appointment"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors inline-block text-center"
                  >
                    Schedule Appointment
                  </a>
                  <a
                    href={`https://maps.google.com/?q=${location.address?.street}, ${location.address?.city}, ${location.address?.state} ${location.address?.zipCode}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-600 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-700 transition-colors inline-block text-center flex items-center justify-center space-x-2"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Find Us
                </h2>
                <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      Interactive map would be displayed here
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {location.address?.street}, {location.address?.city},{" "}
                      {location.address?.state}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services at this Location */}
      {location.services && location.services.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  Services at this Location
                </h2>
                <p className="text-lg text-gray-600">
                  Comprehensive care available at this location
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {location.services.map((service: any) => (
                  <div
                    key={service._id}
                    className="bg-white rounded-lg p-6 border border-gray-200"
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <Stethoscope className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    {service.description && (
                      <p className="text-gray-600 text-sm mb-4">
                        {service.description}
                      </p>
                    )}
                    <Link
                      href={`/services/${service.slug.current}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Learn More →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Providers at this Location */}
      {location.providers && location.providers.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  Providers at this Location
                </h2>
                <p className="text-lg text-gray-600">
                  Meet our healthcare professionals
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {location.providers.map((provider: any) => (
                  <div
                    key={provider._id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {provider.image && (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={urlFor(provider.image)
                            .width(300)
                            .height(200)
                            .url()}
                          alt={provider.image.alt || provider.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                          {provider.title}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {provider.name}
                      </h3>
                      <Link
                        href={`/providers/${provider.slug.current}`}
                        className="w-full bg-gray-600 text-white py-2 px-4 rounded-md font-medium hover:bg-gray-700 transition-colors inline-block text-center"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
