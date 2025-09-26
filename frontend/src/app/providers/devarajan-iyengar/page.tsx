"use client";

import ProviderPage from "@/components/ProviderPage";

const devarajanIyengarData = {
  name: "Dr. Devarajan P. Iyengar, M.D.",
  title: "Oncology",
  image: "/download.jpeg",
  imageAlt: "Dr. Devarajan P. Iyengar",
  phone: "973-435-6544",
  email: "patient@ihomes.org",
  locations: [
    {
      address: "27 E 29th St",
      city: "Bayonne",
      state: "NJ",
      zip: "07002"
    }
  ],
  description: "Dr. Devarajan P. Iyengar is an oncologist in Bayonne, New Jersey and is affiliated with multiple hospitals in the area, including CarePoint Health Bayonne Medical Center and CarePoint Health Hoboken University Medical Center. He received his medical degree from Baroda Medical College and has been in practice for more than 20 years.",
  education: [
    {
      degree: "Fellowship, Hematology and Medical Oncology",
      institution: "Newark Beth Israel Medical Center",
      years: "1982-1983"
    },
    {
      degree: "Residency, Internal Medicine",
      institution: "Rutgers Health/New Jersey Medical School",
      years: "1980-1981"
    },
    {
      degree: "Medical School",
      institution: "Baroda Medical College"
    }
  ],
  affiliations: [
    "CarePoint Health Bayonne Medical Center",
    "CarePoint Health Hoboken University Medical Center",
    "Jersey City Medical Center",
    "St. Mary's General Hospital"
  ],
  focusAreas: [
    "Oncology Diagnosis and Treatment",
    "Cancer Treatment Planning",
    "Hematology and Medical Oncology",
    "Inflammatory Bowel Disease (IBD)",
    "Stroke Management",
    "Diabetes Care"
  ],
  treatments: [
    "All Types of Cancer",
    "Inflammatory Bowel Disease (IBD)",
    "Stroke",
    "Diabetes",
    "Hematologic Disorders",
    "Medical Oncology",
    "Cancer Diagnosis",
    "Treatment Planning"
  ],
  services: [
    {
      category: "Oncology Services",
      items: [
        "Cancer diagnosis using biopsies, endoscopies, x-rays and imaging",
        "Medical oncology treatment with chemotherapy",
        "Treatment planning for all cancer types",
        "Hematologic disorder management"
      ]
    },
    {
      category: "Specialized Care",
      items: [
        "Inflammatory Bowel Disease (IBD) treatment",
        "Stroke management",
        "Diabetes care",
        "Comprehensive cancer care"
      ]
    }
  ]
};

export default function DevarajanIyengarPage() {
  return <ProviderPage data={devarajanIyengarData} />;
}
