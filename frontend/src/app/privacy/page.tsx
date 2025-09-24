import { Shield, Lock, Eye, FileText } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Your privacy and data protection are our top priorities
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              We are committed to protecting your personal information and
              ensuring transparency in how we collect, use, and safeguard your
              data.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <p className="text-blue-800 font-medium">
                  <strong>Last Updated:</strong> September 2025
                </p>
                <p className="text-blue-700 mt-2">
                  This Privacy Policy describes how Iyengar Hematology
                  Oncology Medical Center collects, uses, and protects your
                  information when you visit our website or use our services.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                Information We Collect
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Personal Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      Name, email address, and phone number when you contact us
                    </li>
                    <li>Appointment scheduling information</li>
                    <li>
                      Medical history and health information (only when provided
                      by you)
                    </li>
                    <li>Insurance and billing information</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Website Usage Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website information</li>
                    <li>Device and operating system information</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                How We Use Your Information
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    To schedule and manage your medical appointments
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    To provide medical care and treatment services
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    To communicate with you about your care
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    To process insurance claims and billing
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    To improve our website and services
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    To comply with legal and regulatory requirements
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="w-8 h-8 text-blue-600 mr-3" />
                Information Protection
              </h2>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Security Measures
                </h3>
                <ul className="list-disc list-inside space-y-2 text-green-700">
                  <li>
                    Encryption of sensitive data both in transit and at rest
                  </li>
                  <li>Secure servers and databases with restricted access</li>
                  <li>Regular security audits and updates</li>
                  <li>Staff training on data protection and privacy</li>
                  <li>Compliance with HIPAA regulations</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Information Sharing
              </h2>

              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                <li>With your explicit consent</li>
                <li>With healthcare providers involved in your care</li>
                <li>With insurance companies for billing purposes</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights or the safety of others</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Rights
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    Access & Correction
                  </h3>
                  <p className="text-blue-700">
                    Request access to your personal information and correct any
                    inaccuracies
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    Data Portability
                  </h3>
                  <p className="text-blue-700">
                    Request a copy of your data in a portable format
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    Restriction
                  </h3>
                  <p className="text-blue-700">
                    Request restriction of processing in certain circumstances
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    Deletion
                  </h3>
                  <p className="text-blue-700">
                    Request deletion of your personal information (subject to
                    legal requirements)
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cookies and Tracking
              </h2>

              <p className="text-gray-700 mb-4">
                Our website uses cookies and similar technologies to improve
                your browsing experience and analyze website traffic. You can
                control cookie settings through your browser preferences.
              </p>


              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  Policy Updates
                </h3>
                <p className="text-yellow-700">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any significant changes by posting the new
                  policy on our website and updating the "Last Updated" date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
