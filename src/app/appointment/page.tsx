import { Phone, Calendar, Clock, MapPin, Mail, User } from "lucide-react";
import Link from "next/link";

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schedule Your Appointment
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Ready to take the next step? We're here to help you get started
              with your care.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How Would You Like to Schedule?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone Appointment */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="text-center">
                  <Phone className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Call Us</h3>
                  <p className="text-gray-600 mb-6">
                    Speak directly with our scheduling team to find the best
                    time for your appointment.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <div className="text-2xl font-bold text-blue-900 mb-2">
                      (555) 123-4567
                    </div>
                    <div className="text-sm text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM
                    </div>
                    <div className="text-sm text-gray-600">
                      Saturday: 9:00 AM - 2:00 PM
                    </div>
                  </div>
                  <a
                    href="tel:5551234567"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* Online Request */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="text-center">
                  <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">
                    Request Online
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Fill out our appointment request form and we'll contact you
                    within 24 hours.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2 text-blue-600" />
                      <span>Response within 24 hours</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <User className="w-5 h-5 mr-2 text-blue-600" />
                      <span>Personal scheduling assistance</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                      <span>Flexible scheduling options</span>
                    </div>
                  </div>
                  <Link
                    href="#appointment-form"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Request Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Online Form */}
        <div id="appointment-form" className="container mx-auto px-4 mt-20">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold text-center mb-8">
                Appointment Request Form
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">No preference</option>
                    <option value="dr-johnson">Dr. Sarah Johnson</option>
                    <option value="dr-rodriguez">Dr. Michael Rodriguez</option>
                    <option value="dr-chen">Dr. Emily Chen</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="appointmentType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Type of Appointment *
                  </label>
                  <select
                    id="appointmentType"
                    name="appointmentType"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select appointment type</option>
                    <option value="new-patient">
                      New Patient Consultation
                    </option>
                    <option value="follow-up">Follow-up Visit</option>
                    <option value="second-opinion">Second Opinion</option>
                    <option value="treatment-planning">
                      Treatment Planning
                    </option>
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
                    placeholder="Please provide any additional details about your appointment needs..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">ℹ</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-800">
                        <strong>Important:</strong> For urgent medical concerns,
                        please call us directly at (555) 123-4567. This form is
                        for non-urgent appointment requests only.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 mb-2">(555) 123-4567</p>
                <p className="text-sm text-gray-500">
                  Monday - Friday: 8:00 AM - 5:00 PM
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 mb-2">
                  patient@ihomes.org
                </p>
                <p className="text-sm text-gray-500">
                  Response within 24 hours
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Locations</h3>
                <p className="text-gray-600 mb-2">Multiple NY Locations</p>
                <Link
                  href="/locations"
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  View All Locations →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
