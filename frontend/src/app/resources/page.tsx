import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white page-content">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Healthcare Resources
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Helpful information and resources for your healthcare journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group rounded-lg border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600">
              Patient Education
            </h3>
            <p className="text-gray-600 mb-4">
              Learn about cancer treatment options, side effects, and what to expect during your care journey.
            </p>
            <Link
              href="/innovations/patient-education"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More →
            </Link>
          </div>

          <div className="group rounded-lg border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600">
              Support Groups
            </h3>
            <p className="text-gray-600 mb-4">
              Connect with other patients and families going through similar experiences.
            </p>
            <Link
              href="/appointment"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Get Connected →
            </Link>
          </div>

          <div className="group rounded-lg border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600">
              Financial Assistance
            </h3>
            <p className="text-gray-600 mb-4">
              Information about insurance coverage, payment plans, and financial support programs.
            </p>
            <Link
              href="/appointment"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More →
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/appointment"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}