import Link from "next/link";
import { ArrowLeft, User } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <User className="w-12 h-12 text-gray-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Provider Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The provider you're looking for doesn't exist or may have been moved.
          Please check the URL or browse our available providers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/providers"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            View All Providers
          </Link>
          <Link
            href="/appointment"
            className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Schedule Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
