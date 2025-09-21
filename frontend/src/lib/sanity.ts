import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "oniivxbv",
  dataset: "production",
  useCdn: true, // Set to false if statically generating pages at build time
  apiVersion: "2023-05-03", // Use current date (YYYY-MM-DD) to target the latest API version
});

// Set up the image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
