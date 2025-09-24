import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "oniivxbv",
  dataset: "production",
  useCdn: true, // Use CDN for better performance
  apiVersion: "2023-05-03",
  token: undefined, // No token needed for read operations
  ignoreBrowserTokenWarning: true,
  perspective: "published", // Only fetch published content
});

// Set up the image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
