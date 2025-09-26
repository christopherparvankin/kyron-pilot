import Link from "next/link";
import {
  ArrowRight,
  User,
  MapPin,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  Sparkles,
  Shield,
  Target,
  Users,
  Clock,
  ChevronRight,
  Heart
} from "lucide-react";

export default function ProvidersPage() {
  // Static provider data from front page
  const providers = [
    {
      id: "arjun-iyengar",
      name: "Dr. Arjun Iyengar, M.D.",
      title: "Hematology & Oncology",
      image: "/iy.png",
      specialties: ["Hematology", "Medical Oncology", "Precision-Based Care", "Genomic Testing", "Clinical Trials", "Blood Disorders", "Infusions & Injections"],
      description: "Dr. Arjun Iyengar is a board-certified hematologist and medical oncologist specializing in comprehensive cancer care and blood disorders. He completed his medical education at Brown University, Rutgers Medical School, and Cornell MBA, with residency at Dartmouth and fellowship at NYU. He serves as Department Chairman at Bayonne Medical Center and Clinical Assistant Professor at NYU."
    },
    {
      id: "adam-paduszynski",
      name: "Dr. Adam A. Paduszynski, M.D.",
      title: "Family Medicine",
      image: "/adam.webp",
      specialties: ["Family Medicine", "Primary Care", "Preventive Medicine", "Chronic Disease Management"],
      description: "Dr. Adam A. Paduszynski is a board-certified Family Medicine physician with over 35 years of experience. He has received the 'Patients Top Choice' award and maintains a perfect 5/5 patient rating. He completed his medical education at Wroclaw Medical University and his residency in Family Medicine at St. Luke's University Hospital/Warren Hospital."
    },
    {
      id: "devarajan-iyengar",
      name: "Dr. Devarajan P. Iyengar, M.D.",
      title: "Oncology",
      image: "/download.jpeg",
      specialties: ["Oncology", "Hematology", "Cancer Treatment", "Inflammatory Bowel Disease", "Stroke Management", "Diabetes Care"],
      description: "Dr. Devarajan P. Iyengar is an oncologist in Bayonne, New Jersey and is affiliated with multiple hospitals in the area. He received his medical degree from Baroda Medical College and has been in practice for more than 20 years. He completed his fellowship in Hematology and Medical Oncology at Newark Beth Israel Medical Center."
    }
  ];




  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 page-content">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(/stock/central_park.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Users className="w-4 h-4" />
              <span>Expert Team</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                Our Physicians
              </span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-lg">
              Meet our experienced team of oncologists and specialists. Our dedicated physicians 
              bring together decades of experience, cutting-edge expertise, and compassionate care 
              to provide the best possible outcomes for our patients.
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
            {providers.map((provider, index) => (
              <Link
                key={provider.id}
                href={`/providers/${provider.id}`}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 block"
              >
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {provider.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {provider.title}
                  </p>

                  {provider.specialties && provider.specialties.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {provider.specialties.slice(0, 3).map((specialty: string, specialtyIndex: number) => (
                          <span
                            key={specialtyIndex}
                            className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
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

                  <div className="flex items-center justify-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Profile</span>
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
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