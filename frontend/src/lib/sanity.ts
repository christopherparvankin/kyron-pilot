import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "oniivxbv",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: true, // Set to false if statically generating pages at build time
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03", // Use current date (YYYY-MM-DD) to target the latest API version
});

// Set up the image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
