import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Calendar,
  User,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default async function AppointmentPage() {
  const locations = await client.fetch(queries.locations);
  const contactInfo = await client.fetch(queries.contactInfo);
  const providers = await client.fetch(queries.providers);

  const mainLocation = locations?.[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Request an Appointment
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Schedule your consultation with our expert oncologists
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              We're here to help you take the next step in your cancer care
              journey. Contact us today to schedule your consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600">
                Multiple ways to reach us for your appointment needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Methods */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Call Us
                        </h4>
                        <p className="text-gray-600 mb-2">
                          {contactInfo?.phone ||
                            mainLocation?.phone ||
                            "(555) 123-4567"}
                        </p>
                        <p className="text-sm text-gray-500">
                          Available Monday - Friday, 8:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Email Us
                        </h4>
                        <p className="text-gray-600 mb-2">
                          {contactInfo?.email ||
                            mainLocation?.email ||
                            "info@nyoncologists.com"}
                        </p>
                        <p className="text-sm text-gray-500">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Visit Us
                        </h4>
                        <div className="text-gray-600">
                          <p>
                            {mainLocation?.address?.street ||
                              "123 Medical Center Drive"}
                          </p>
                          <p>
                            {mainLocation?.address?.city || "New York"},{" "}
                            {mainLocation?.address?.state || "NY"}{" "}
                            {mainLocation?.address?.zipCode || "10001"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Office Hours
                  </h3>

                  <div className="space-y-3">
                    {mainLocation?.hours && mainLocation.hours.length > 0 ? (
                      mainLocation.hours.map((hour: any, index: number) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <span className="font-medium text-gray-900">
                            {hour.day}
                          </span>
                          <span className="text-gray-600">
                            {hour.closed
                              ? "Closed"
                              : `${hour.open} - ${hour.close}`}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">
                            Monday - Friday
                          </span>
                          <span className="text-gray-600">
                            8:00 AM - 5:00 PM
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">
                            Saturday
                          </span>
                          <span className="text-gray-600">Closed</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">
                            Sunday
                          </span>
                          <span className="text-gray-600">Closed</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Appointment Form */}
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Request Appointment
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredProvider"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Preferred Provider (Optional)
                    </label>
                    <select
                      id="preferredProvider"
                      name="preferredProvider"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a provider</option>
                      {providers &&
                        providers.map((provider: any) => (
                          <option key={provider._id} value={provider._id}>
                            {provider.name} - {provider.title}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredLocation"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Preferred Location *
                    </label>
                    <select
                      id="preferredLocation"
                      name="preferredLocation"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a location</option>
                      {locations &&
                        locations.map((location: any) => (
                          <option key={location._id} value={location._id}>
                            {location.name} - {location.address?.city}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="appointmentType"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Appointment Type *
                    </label>
                    <select
                      id="appointmentType"
                      name="appointmentType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select appointment type</option>
                      <option value="new-patient">
                        New Patient Consultation
                      </option>
                      <option value="follow-up">Follow-up Appointment</option>
                      <option value="second-opinion">Second Opinion</option>
                      <option value="emergency">Urgent/Emergency</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please provide any additional information about your appointment needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Request Appointment
                  </button>
                  
                  {/* Disclaimer */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <strong>Important:</strong> This request form is not a medical record and should not contain sensitive health information. 
                      Please do not include detailed medical history, symptoms, or personal health details in your message.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
