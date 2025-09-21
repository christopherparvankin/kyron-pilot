import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await client.fetch(queries.getServiceBySlug, { slug });

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            {service.title}
          </h1>

          {service.description && (
            <div className="prose prose-lg mx-auto mb-8">
              <p className="text-gray-600 text-center text-xl">
                {service.description}
              </p>
            </div>
          )}

          {service.category && (
            <div className="text-center mb-8">
              <span className="inline-block bg-blue-100 text-blue-800 text-lg px-4 py-2 rounded-full">
                {service.category}
              </span>
            </div>
          )}

          {service.content && (
            <div className="prose prose-lg mx-auto">
              <div className="text-gray-700">
                <PortableText value={service.content} />
              </div>
            </div>
          )}

          {service.procedures && service.procedures.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Related Procedures</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.procedures.map((procedure: any, index: number) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">{procedure.name}</h3>
                    {procedure.description && (
                      <p className="text-sm text-gray-600">
                        {procedure.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
