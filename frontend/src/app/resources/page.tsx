import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import Link from "next/link";

export default async function ResourcesPage() {
  const resources = await client.fetch(queries.resources);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Healthcare Resources
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Helpful information and resources for your healthcare journey.
        </p>

        {resources && resources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource: any) => (
              <div
                key={resource._id}
                className="group rounded-lg border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600">
                  {resource.title}
                </h3>
                {resource.description && (
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                )}
                {resource.category && (
                  <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                )}
                {resource.url && (
                  <div className="mt-4">
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View Resource →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-500 mb-8">
              No resources available at the moment.
            </p>
            <p className="text-sm text-gray-400">
              Resources will appear here once they are added to the Sanity CMS.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
