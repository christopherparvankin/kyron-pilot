import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Provider Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The healthcare provider you're looking for doesn't exist.
        </p>
        <Link
          href="/providers"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Providers
        </Link>
      </div>
    </div>
  );
}
