"use client";

import ProviderPage from "@/components/ProviderPage";

const adamPaduszynskiData = {
  name: "Dr. Adam A. Paduszynski, M.D.",
  title: "Family Medicine",
  image: "/adam.webp",
  imageAlt: "Dr. Adam Paduszynski",
  phone: "(201) 858-1211",
  email: "patient@ihomes.org",
  locations: [
    {
      address: "27 E 29th St",
      city: "Bayonne",
      state: "NJ",
      zip: "07002"
    }
  ],
  description: "Dr. Adam A. Paduszynski is a board-certified Family Medicine physician with over 35 years of experience. He has received the 'Patients Top Choice' award, which is given to providers who have received a 5-star rating from their patients.",
  education: [
    {
      degree: "Residency, Family Medicine",
      institution: "St. Luke's University Hospital/Warren Hospital",
      years: "1986-1988"
    },
    {
      degree: "Internship, Transitional Year",
      institution: "Atlantic Health System",
      years: "1985-1986"
    },
    {
      degree: "Medical School",
      institution: "Wroclaw Medical University"
    }
  ],
  services: [
    {
      category: "Primary Care Services",
      items: [
        "Annual physicals and wellness exams",
        "Preventive care and screenings",
        "Chronic disease management",
        "Acute illness treatment",
        "Health maintenance and counseling"
      ]
    },
    {
      category: "Family Medicine",
      items: [
        "Pediatric care",
        "Adult medicine",
        "Geriatric care",
        "Women's health",
        "Men's health"
      ]
    }
  ],
};

export default function AdamPaduszynskiPage() {
  return <ProviderPage data={adamPaduszynskiData} />;
}
