import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Users,
  Heart,
  ArrowRight,
  Sparkles,
  Shield,
  Award,
  CheckCircle,
  Star,
  Target,
  Zap,
  GraduationCap,
  User
} from "lucide-react";

export default async function AboutPage() {
  // Fetch data from Sanity CMS
  let providers;
  let aboutContent;
  
  try {
    providers = await client.fetch(queries.providers);
    aboutContent = await client.fetch(queries.about);
  } catch (error) {
    console.error('Error fetching data:', error);
    providers = [];
    aboutContent = null;
  }

  const features = [
    {
      title: "50+ Years Experience",
      description: "Decades of expertise in cancer care",
      icon: Award,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "400+ Years Combined",
      description: "Total team experience in oncology",
      icon: Users,
      color: "from-green-500 to-green-700"
    },
    {
      title: "Latest Treatments",
      description: "Access to cutting-edge therapies",
      icon: Target,
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Multidisciplinary Team",
      description: "Comprehensive care approach",
      icon: Heart,
      color: "from-orange-500 to-orange-700"
    }
  ];

  const stats = [
    { number: "50+", label: "Years of Experience", icon: Award },
    { number: "400+", label: "Combined Team Years", icon: Users },
    { number: "100%", label: "Patient-Centered Care", icon: Heart },
    { number: "5+", label: "Convenient Locations", icon: MapPin }
  ];

  // Use providers from Sanity CMS, limit to 4 for display
  const teamMembers = providers.slice(0, 4).map((provider: any) => ({
    name: provider.name,
    title: provider.title,
    specialty: provider.specialties?.[0] || "Oncology",
    image: provider.image,
    slug: provider.slug?.current,
    bio: provider.bio
  }));


  // Server component - no client-side state needed

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Heart className="w-4 h-4" />
              <span>Leading Cancer Care</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="text-gray-700">Arjun Iyengar Hematology Oncology Medical Center</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Leading cancer care with innovative treatments and compassionate support 
              throughout New York. For over 50 years, we've been at the forefront of 
              oncology excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed">
                  To provide superior treatment and compassionate care for those diagnosed 
                  with cancer and blood disorders by offering a dedicated environment of 
                  wellness through patient education, innovative treatment options and 
                  ongoing emotional support for our patients and their families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-6">
                  About Arjun Iyengar Hematology Oncology Medical Center
                </h2>
                <div className="space-y-6 text-lg leading-relaxed opacity-90">
                  <p>
                    For over 50 years, we have been at the leading-edge of cancer care. 
                    When you are a patient at Arjun Iyengar Hematology Oncology Medical Center, you can expect innovative 
                    cancer care tailored to you using the latest treatments and technologies 
                    available, including clinical trials.
                  </p>
                  <p>
                    Our cancer centers specialize in medical oncology, hematology, 
                    gynecologic oncology, radiation oncology and bone marrow transplants. 
                    We are rooted in the community and available to provide care, resources 
                    and support for you and your family close to home.
                  </p>
                  <p>
                    Together, we have over 400 years of combined treatment experience, 
                    and we're changing the landscape of patient care and wellness. Our 
                    dedicated and highly-skilled physicians and staff specialize in caring 
                    for patients with cancer and blood disorders.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Choose Arjun Iyengar Hematology Oncology Medical Center?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Over 50 years of experience in cancer care",
                    "400+ years of combined treatment experience", 
                    "Access to latest treatments and clinical trials",
                    "Multidisciplinary team approach to care",
                    "Community-based care close to home",
                    "Comprehensive support for patients and families"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-white opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in cancer care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className={`
                    w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color}
                    flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                    shadow-lg group-hover:shadow-2xl
                  `}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group transition-all duration-500"
                >
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Experienced oncologists dedicated to your care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member: any, index: number) => (
              <Link
                key={member.slug || index}
                href={member.slug ? `/providers/${member.slug}` : '#'}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group block"
              >
                <div className="text-center">
                  {member.image ? (
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={urlFor(member.image).width(96).height(96).url()}
                        alt={member.image.alt || member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <User className="w-12 h-12 text-blue-600" />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.title}
                  </p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {member.specialty}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/providers"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              <Users className="mr-2 w-5 h-5" />
              View All Physicians
            </Link>
          </div>
        </div>
      </section>


      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-xl text-gray-600">
                Located throughout New York, we're here to serve your oncology needs
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Main Office
                </h3>
                <p className="text-gray-600">
                  Your trusted oncology care center
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="text-gray-600">
                        123 Medical Center Drive
                      </p>
                      <p className="text-gray-600">
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a
                      href="tel:555-123-4567"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a
                      href="mailto:info@nyoncologists.com"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      info@nyoncologists.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div className="text-gray-600">
                      <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                      <p>Sat: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
                
        {/* Map Section */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="h-64 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.0042587845938!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635781234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arjun Iyengar Hematology Oncology Medical Center Main Office Location"
              className="w-full h-full"
              suppressHydrationWarning={true}
            ></iframe>
          </div>
                  <div className="p-4 bg-white">
                    <h4 className="font-semibold text-gray-900 mb-2">Get Directions</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Located in the heart of Manhattan, easily accessible by public transportation and with convenient parking nearby.
                    </p>
                    <a
                      href="https://maps.google.com/?q=123+Medical+Center+Drive+New+York+NY+10001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Begin Your Care Journey?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Our compassionate team is here to support you every step of the way. 
                Contact us today to schedule a consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/appointment"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Request Appointment
                </Link>
                <a
                  href="tel:555-123-4567"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}