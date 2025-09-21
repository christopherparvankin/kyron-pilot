// Sanity Content Seeder Script
// Run this to populate initial content in your Sanity project

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "oniivxbv",
  dataset: "production",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // You'll need to add this
});

// Sample About content
const aboutContent = {
  _type: "about",
  heroTitle: "Together: A Better Way To Fight Cancer",
  heroSubtitle: "Patient Centered Cancer Care Across New York",
  heroDescription:
    "For over 50 years, we have been at the leading-edge of cancer care. When you are a patient at NY Oncologists, you can expect innovative cancer care tailored to you using the latest treatments and technologies available, including clinical trials.",
  missionTitle: "Our Mission",
  missionContent: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "To provide superior treatment and compassionate care for those diagnosed with cancer and blood disorders by offering a dedicated environment of wellness through patient education, innovative treatment options and ongoing emotional support for our patients and their families.",
        },
      ],
    },
  ],
  aboutTitle: "About NY Oncologists",
  aboutContent: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Our cancer centers specialize in medical oncology, hematology, gynecologic oncology, radiation oncology and bone marrow transplants. We are rooted in the community and available to provide care, resources and support for you and your family close to home.",
        },
      ],
    },
  ],
  yearsExperience: 50,
  combinedExperience: 400,
  ctaTitle: "Ready to Begin Your Care Journey?",
  ctaDescription:
    "Our compassionate team is here to support you every step of the way. Contact us today to schedule a consultation.",
};

// Sample Services
const services = [
  {
    _type: "service",
    title: "Medical Oncology",
    slug: { current: "medical-oncology" },
    description:
      "Comprehensive medical cancer treatments including chemotherapy, targeted therapy, and immunotherapy.",
    category: "medical-oncology",
    featured: true,
  },
  {
    _type: "service",
    title: "Hematology",
    slug: { current: "hematology" },
    description:
      "Specialized care for blood disorders and blood-related cancers with advanced treatment options.",
    category: "hematology",
    featured: true,
  },
  {
    _type: "service",
    title: "Radiation Oncology",
    slug: { current: "radiation-oncology" },
    description:
      "Advanced radiation therapy using state-of-the-art equipment and precision targeting.",
    category: "radiation-oncology",
    featured: true,
  },
  {
    _type: "service",
    title: "Gynecologic Oncology",
    slug: { current: "gynecologic-oncology" },
    description:
      "Specialized care for gynecologic cancers with comprehensive treatment and surgical options.",
    category: "gynecologic-oncology",
    featured: true,
  },
  {
    _type: "service",
    title: "Immunotherapy",
    slug: { current: "immunotherapy" },
    description:
      "Cutting-edge immunotherapy treatments that harness the body's immune system to fight cancer.",
    category: "cancer-treatment",
    featured: true,
  },
  {
    _type: "service",
    title: "Clinical Trials",
    slug: { current: "clinical-trials" },
    description:
      "Access to the latest clinical trials and experimental treatments for cancer patients.",
    category: "cancer-treatment",
    featured: true,
  },
];

// Sample Providers
const providers = [
  {
    _type: "provider",
    name: "Dr. Sarah Johnson",
    title: "Medical Oncologist",
    slug: { current: "dr-sarah-johnson" },
    bio: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Dr. Johnson specializes in breast cancer treatment with over 15 years of experience in medical oncology. She is board-certified and has published numerous research papers on innovative cancer treatments.",
          },
        ],
      },
    ],
    specialties: ["medical-oncology", "breast-cancer"],
    education: [
      {
        degree: "MD",
        institution: "Johns Hopkins University",
        year: "2005",
      },
    ],
    certifications: [
      "Board Certified in Medical Oncology",
      "American Society of Clinical Oncology",
    ],
    languages: ["English", "Spanish"],
  },
  {
    _type: "provider",
    name: "Dr. Michael Chen",
    title: "Radiation Oncologist",
    slug: { current: "dr-michael-chen" },
    bio: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Dr. Chen is a leading expert in radiation oncology with expertise in treating lung and prostate cancers. He has pioneered several advanced radiation techniques.",
          },
        ],
      },
    ],
    specialties: ["radiation-oncology", "lung-cancer"],
    education: [
      {
        degree: "MD",
        institution: "Harvard Medical School",
        year: "2003",
      },
    ],
    certifications: ["Board Certified in Radiation Oncology"],
    languages: ["English", "Mandarin"],
  },
];

// Sample Location
const location = {
  _type: "location",
  name: "NY Oncologists - Main Office",
  slug: { current: "main-office" },
  address: {
    street: "123 Medical Center Drive",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  phone: "(555) 123-4567",
  email: "info@nyoncologists.com",
  hours: [
    { day: "Monday", open: "8:00 AM", close: "5:00 PM", closed: false },
    { day: "Tuesday", open: "8:00 AM", close: "5:00 PM", closed: false },
    { day: "Wednesday", open: "8:00 AM", close: "5:00 PM", closed: false },
    { day: "Thursday", open: "8:00 AM", close: "5:00 PM", closed: false },
    { day: "Friday", open: "8:00 AM", close: "5:00 PM", closed: false },
    { day: "Saturday", open: "", close: "", closed: true },
    { day: "Sunday", open: "", close: "", closed: true },
  ],
};

// Function to create content
async function seedContent() {
  try {
    console.log("🌱 Starting content seeding...");

    // Create About content
    console.log("Creating About content...");
    await client.createOrReplace(aboutContent);

    // Create Services
    console.log("Creating Services...");
    for (const service of services) {
      await client.createOrReplace(service);
    }

    // Create Providers
    console.log("Creating Providers...");
    for (const provider of providers) {
      await client.createOrReplace(provider);
    }

    // Create Location
    console.log("Creating Location...");
    await client.createOrReplace(location);

    console.log("✅ Content seeding completed successfully!");
    console.log("🎉 You can now view your content at http://localhost:3001");
  } catch (error) {
    console.error("❌ Error seeding content:", error);
  }
}

// Run the seeder
seedContent();
