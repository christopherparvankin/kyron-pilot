"use client";

import ProviderPage from "@/components/ProviderPage";

const arjunIyengarData = {
  name: "Arjun Iyengar, M.D., MBA",
  title: "Hematology & Oncology",
  image: "/iy.png",
  imageAlt: "Dr. Arjun Iyengar",
  phone: "973-435-6544",
  email: "patient@ihomes.org",
  locations: [
    {
      address: "393 Northfield Ave",
      city: "West Orange",
      state: "NJ",
      zip: "07052"
    },
    {
      address: "27 E 29th St",
      city: "Bayonne",
      state: "NJ",
      zip: "07002"
    }
  ],
  description: "Dr. Iyengar is a board-certified hematologist and medical oncologist specializing in comprehensive cancer care and blood disorders. Practicing in the heart of New Jersey, he specializes in precision-based oncology care, genomic testing, and various treatment modalities including chemotherapy, immunotherapy, and biological therapies.",
  education: [
    {
      degree: "Fellowship - Hematology & Medical Oncology",
      institution: "NYU Grossman School of Medicine",
      location: "NY"
    },
    {
      degree: "Residency - Internal Medicine",
      institution: "Dartmouth-Hitchcock / Mary Hitchcock Memorial Hospital",
      location: "NH"
    },
    {
      degree: "Masters of Business Administration",
      institution: "Cornell SC Johnson School of Business",
      location: "NY"
    },
    {
      degree: "Medical Degree",
      institution: "Rutgers New Jersey Medical School",
      location: "NJ"
    },
    {
      degree: "Bachelor's Degree",
      institution: "Brown University",
      location: "RI"
    }
  ],
  positions: [
    {
      title: "Department Chairman of the Medical Oncology Division",
      institution: "Bayonne Medical Center",
      location: "Bayonne, NJ"
    },
    {
      title: "Clinical Assistant Professor",
      institution: "NYU Grossman School of Medicine",
      location: "NY"
    },
    {
      title: "Department Chairman for Clinical Research Hematology Oncology",
      institution: "NYU Langone",
      location: "Bellevue, NY"
    }
  ],
  affiliations: [
    "Cooperman RWJ Barnabas Medical Center",
    "Clara Maass RWJ Barnabas Medical Center",
    "NYU Langone Health",
    "Newark Beth Israel Medical Center",
    "Jersey City Medical Center",
    "Bayonne Medical Center",
    "Hudson Regional Hospital"
  ],
  focusAreas: [
    "Precision Based Oncology Care & Genomic Testing",
    "Preventative Cancer Screening",
    "Research Based Clinical Trials",
    "Comprehensive Care for Blood Disorders",
    "Infusions & Injections"
  ],
  treatments: [
    "Breast Cancer",
    "Leukemia",
    "Lymphoma",
    "Lung Cancer",
    "Gastrointestinal Cancer",
    "Genitourinary Cancer",
    "Carcinoma",
    "Sarcoma",
    "Anemia",
    "Iron Deficiency",
    "Blood & Clotting Disorders"
  ]
};

export default function ArjunIyengarPage() {
  return <ProviderPage data={arjunIyengarData} />;
}
