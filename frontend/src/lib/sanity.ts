import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "oniivxbv",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: process.env.NODE_ENV === "production", // Use CDN in production, direct API in development
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03", // Use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_API_TOKEN, // Optional: for write operations
  ignoreBrowserTokenWarning: true, // Suppress browser token warning
});

// Set up the image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
