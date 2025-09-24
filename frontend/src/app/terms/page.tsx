import { FileText, Scale, Shield, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Please read these terms carefully before using our services
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              These terms govern your use of our website and medical services provided by Arjun Iyengar Hematology Oncology Medical Center.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <p className="text-blue-800 font-medium">
                  <strong>Last Updated:</strong> December 2024
                </p>
                <p className="text-blue-700 mt-2">
                  By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-8 h-8 text-blue-600 mr-3" />
                Acceptance of Terms
              </h2>
              
              <p className="text-gray-700 mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="w-8 h-8 text-blue-600 mr-3" />
                Medical Services
              </h2>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Important Medical Disclaimer
                </h3>
                <ul className="list-disc list-inside space-y-2 text-red-700">
                  <li>The information on this website is for educational purposes only and does not constitute medical advice</li>
                  <li>Always consult with a qualified healthcare provider for medical advice, diagnosis, or treatment</li>
                  <li>Do not use this website for medical emergencies - call 911 immediately</li>
                  <li>We do not guarantee the accuracy, completeness, or timeliness of medical information on this site</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Use License</h2>
              
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">Provide accurate and complete information when scheduling appointments</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">Maintain the confidentiality of any login credentials</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">Use the website only for lawful purposes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">Respect the privacy and rights of other users</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">Notify us immediately of any unauthorized use of your account</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                Privacy and Data Protection
              </h2>
              
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service by reference.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">HIPAA Compliance</h3>
                <p className="text-blue-700">
                  We are committed to protecting your health information in accordance with the Health Insurance Portability and Accountability Act (HIPAA) and other applicable privacy laws.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Prohibited Uses</h2>
              
              <p className="text-gray-700 mb-4">You may not use our website:</p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
              
              <p className="text-gray-700 mb-4">
                The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the website are protected under applicable copyrights, trademarks, and other proprietary rights.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <p className="text-yellow-800 font-medium mb-2">Disclaimer of Warranties</p>
                <p className="text-yellow-700">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, we exclude all representations, warranties, conditions, and terms relating to our website and the use of this website.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Indemnification</h2>
              
              <p className="text-gray-700 mb-4">
                You agree to defend, indemnify, and hold harmless Arjun Iyengar Hematology Oncology Medical Center and its affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees).
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
              
              <p className="text-gray-700 mb-4">
                These Terms shall be interpreted and governed by the laws of the State of New York, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              
              <p className="text-gray-700 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>


              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Agreement</h3>
                <p className="text-green-700">
                  By using our website and services, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
