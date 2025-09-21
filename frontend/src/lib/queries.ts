export const queries = {
  // About page query with all fields
  about: `*[_type == "about"][0]{
    _id,
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroImage,
    missionTitle,
    missionContent,
    aboutTitle,
    aboutContent,
    yearsExperience,
    combinedExperience,
    ctaTitle,
    ctaDescription
  }`,

  // Contact info query with all fields
  contactInfo: `*[_type == "contactInfo"][0]{
    _id,
    phone,
    email,
    address,
    hours,
    emergencyPhone,
    website
  }`,

  // Locations query with all fields
  locations: `*[_type == "location"]{
    _id,
    name,
    slug,
    address,
    phone,
    email,
    hours
  }`,

  // Providers query with all fields
  providers: `*[_type == "provider"] | order(name asc){
    _id,
    name,
    title,
    slug,
    image,
    bio,
    specialties,
    location,
    education,
    certifications,
    languages
  }`,

  // Services query with all fields
  services: `*[_type == "service"] | order(title asc){
    _id,
    title,
    slug,
    description,
    content,
    image,
    featured,
    category
  }`,

  // Featured services query
  featuredServices: `*[_type == "service" && featured == true] | order(title asc)`,

  // Services by category
  servicesByCategory: `*[_type == "service" && category == $category] | order(title asc)`,

  // Resources query
  resources: `*[_type == "resource"]`,

  // Get location by slug
  getLocationBySlug: `*[_type == "location" && slug.current == $slug][0]`,

  // Get provider by slug with all fields
  getProviderBySlug: `*[_type == "provider" && slug.current == $slug][0]{
    _id,
    name,
    title,
    slug,
    image,
    bio,
    specialties,
    location,
    education,
    certifications,
    languages
  }`,

  // Get service by slug
  getServiceBySlug: `*[_type == "service" && slug.current == $slug][0]`,
};
