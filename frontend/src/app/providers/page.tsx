import { client } from "@/lib/sanity";
import { queries } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import {
  ArrowRight,
  User,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  GraduationCap,
  Heart,
  CheckCircle,
  Sparkles,
  Shield,
  Target,
  Users,
  Clock
} from "lucide-react";

export default async function ProvidersPage() {
  let providers;
  
  try {
    providers = await client.fetch(queries.providers);
  } catch (error) {
    console.error('Error fetching providers:', error);
    providers = [];
  }

  // Handle empty providers array
  if (!providers || providers.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">No Providers Found</h1>
          <p className="text-gray-600 mb-8">
            We're currently updating our provider information. Please check back soon.
          </p>
          <Link
            href="/"
            className="bg-soft-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-soft-700 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const features = [
    {
      title: "Board Certified",
      description: "All our physicians are board-certified in their respective specialties",
      icon: Award,
      stats: "100% Certified"
    },
    {
      title: "Extensive Education",
      description: "Advanced training from leading medical institutions",
      icon: GraduationCap,
      stats: "Top Schools"
    },
    {
      title: "Patient-Centered Care",
      description: "Personalized care plans and ongoing support",
      icon: Heart,
      stats: "100% Focused"
    },
    {
      title: "Multiple Locations",
      description: "Convenient care centers throughout New York",
      icon: MapPin,
      stats: "5+ Locations"
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-soft-300/20 to-primary-300/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-soft-100 text-soft-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Users className="w-4 h-4" />
              <span>Expert Team</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-soft-600 to-primary-600 bg-clip-text text-transparent">
                Our Physicians
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Meet our experienced team of oncologists and specialists. Our dedicated physicians 
              bring together decades of experience, cutting-edge expertise, and compassionate care 
              to provide the best possible outcomes for our patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="bg-soft-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-soft-700 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="bg-soft-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-soft-700 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Heart className="mr-2 w-5 h-5" />
                Learn About Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Providers Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced oncologists and specialists dedicated to your care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {providers.map((provider: any, index: number) => (
              <Link
                key={provider._id}
                href={`/providers/${provider.slug.current}`}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 block"
              >
                <div className="text-center">
                  {provider.image ? (
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={urlFor(provider.image).width(128).height(128).url()}
                        alt={provider.image.alt || provider.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-soft-100 to-soft-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <User className="w-16 h-16 text-soft-600" />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-soft-600 transition-colors">
                    {provider.name}
                  </h3>
                  <p className="text-soft-600 font-medium mb-4">
                    {provider.title}
                  </p>

                  {provider.specialties && provider.specialties.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {provider.specialties.slice(0, 3).map((specialty: string, specialtyIndex: number) => (
                          <span
                            key={specialtyIndex}
                            className="inline-block bg-soft-100 text-soft-800 text-xs px-2 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                        {provider.specialties.length > 3 && (
                          <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            +{provider.specialties.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-center text-soft-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Profile</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-soft-500 to-primary-500">
        <div className="container mx-auto">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Physicians?</h2>
            <p className="text-xl opacity-90">
              Expertise, experience, and compassionate care that makes a difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group transition-all duration-500"
                >
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{feature.stats}</div>
                  {feature.title === "Multiple Locations" ? (
                    <Link href="/locations">
                      <h3 className="text-xl font-bold mb-4 hover:text-blue-200 transition-colors cursor-pointer">
                        {feature.title}
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  )}
                  <p className="opacity-90">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Why Choose Our Physicians */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Excellence in Care</h2>
            <p className="text-xl text-gray-600">
              What makes our physicians exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                Board Certified
              </h3>
              <p className="text-gray-600">
                All our physicians are board-certified in their respective specialties, 
                ensuring the highest standards of care and ongoing education.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                Extensive Education
              </h3>
              <p className="text-gray-600">
                Our team includes physicians with advanced training from leading medical 
                institutions and ongoing education in the latest treatments.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                Patient-Centered Care
              </h3>
              <p className="text-gray-600">
                We believe in treating the whole person, not just the disease, with 
                personalized care plans and ongoing support throughout your journey.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                Multiple Locations
              </h3>
              <p className="text-gray-600">
                Our physicians practice at multiple convenient locations throughout 
                New York, making care accessible close to home.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                Accessible Care
              </h3>
              <p className="text-gray-600">
                Easy scheduling, responsive communication, and dedicated support staff 
                ensure you can reach us when you need us most.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                Comprehensive Services
              </h3>
              <p className="text-gray-600">
                From diagnosis to treatment to follow-up care, our physicians provide 
                comprehensive cancer care throughout your entire journey.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Meet Your Care Team?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Schedule a consultation with one of our experienced oncologists to 
              discuss your treatment options and begin your care journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Heart className="mr-2 w-5 h-5" />
                Learn About Services
              </Link>
              <Link
                href="/locations"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
              >
                <MapPin className="mr-2 w-5 h-5" />
                View Locations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}