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
  CheckCircle,
  Star,
  Zap,
  GraduationCap,
  User
} from "lucide-react";

export default function AboutPage() {
  // Static team members data
  const teamMembers = [
    {
      name: "Dr. Arjun Iyengar, M.D.",
      title: "Hematology & Oncology",
      specialty: "Hematology",
      image: "/iy.png",
      slug: "arjun-iyengar"
    },
    {
      name: "Dr. Adam A. Paduszynski, M.D.",
      title: "Family Medicine",
      specialty: "Family Medicine",
      image: "/adam.webp",
      slug: "adam-paduszynski"
    },
    {
      name: "Dr. Devarajan P. Iyengar, M.D.",
      title: "Oncology",
      specialty: "Oncology",
      image: "/download.jpeg",
      slug: "devarajan-iyengar"
    }
  ];


  // Server component - no client-side state needed

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 page-content">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(/stock/AdobeStock_350407100.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Heart className="w-4 h-4" />
              <span>Leading Cancer Care</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                About
              </span>
              <br />
              <span className="text-white drop-shadow-lg">Iyengar Hematology & Oncology Medical Center</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-lg">
              Compassionate + Comprehensive Blood & Cancer Care
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
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  At Iyengar Hematology & Oncology Medical Center, we are dedicated to delivering compassionate, patient-centered care for individuals and families facing cancer and blood disorders. With locations in West Orange, NJ and Bayonne, NJ, our mission is to provide state-of-the-art treatment while supporting our patients through every step of their journey.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We are committed to offering cutting-edge treatment with a human touch, helping patients and families navigate cancer and blood disorders with strength and hope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4 bg-gradient-to-r from-soft-500 to-primary-500">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-6">
                  Our Practice
                </h2>
                <div className="space-y-6 text-lg leading-relaxed opacity-90">
                  <p>
                    We specialize in hematology and oncology care, offering services such as:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Precision-based oncology care and genomic testing</li>
                    <li>Preventative cancer screening</li>
                    <li>Infusion and injection therapies</li>
                    <li>Research-based clinical trials</li>
                    <li>Comprehensive care for blood disorders</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Choose Iyengar Hematology & Oncology Medical Center?
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Multilingual Support</h4>
                    <p className="text-white opacity-90 mb-4">
                      Our team is fluent in multiple languages to ensure every patient receives care in their preferred language:
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {["English", "Spanish", "Hindi", "Tamil", "Gujarati"].map((language, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                          <span className="text-white opacity-90">{language}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Comprehensive Care</h4>
                    <ul className="space-y-2">
                      {[
                        "Precision-based oncology care and genomic testing",
                        "Access to latest treatments and clinical trials",
                        "Multidisciplinary team approach to care",
                        "Community-based care close to home",
                        "Comprehensive support for patients and families"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                          <span className="text-white opacity-90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Conditions We Treat
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team provides expert care for a wide range of conditions, including:
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
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
              ].map((condition, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-soft-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{condition}</h3>
                </div>
              ))}
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Link
                key={member.slug || index}
                href={`/providers/${member.slug}`}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group block"
              >
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
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


      {/* Our Values Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-soft-500 to-primary-500">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Our Values
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-white opacity-90 leading-relaxed mb-8">
                We believe in treating every patient with compassion, respect, and dignity. Our team is fluent in multiple languages including English, Spanish, Hindi, Tamil, and Gujarati, ensuring care is accessible and inclusive for diverse communities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Compassion</h3>
                  <p className="text-white opacity-90">Treating every patient with empathy and understanding</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Users className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Inclusivity</h3>
                  <p className="text-white opacity-90">Multilingual care for diverse communities</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Shield className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                  <p className="text-white opacity-90">Cutting-edge treatment with a human touch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Visit Our Offices
              </h2>
              <p className="text-xl text-gray-600">
                Located in West Orange and Bayonne, NJ, we're here to serve your oncology needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Bayonne Office */}
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Bayonne Clinic
                  </h3>
                  <p className="text-gray-600">
                    Full-service oncology care center
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="text-gray-600">
                        27 E 29th St
                      </p>
                      <p className="text-gray-600">
                        Bayonne, NJ 07002
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a
                      href="tel:201-858-1211"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      (201) 858-1211
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a
                      href="mailto:patient@ihomes.org"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      patient@ihomes.org
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div className="text-gray-600">
                      <p className="font-semibold mb-2">Office Hours:</p>
                      <p>Mon-Thu: 10:00 AM - 5:30 PM</p>
                      <p>Fri-Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* West Orange Office */}
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    West Orange Clinic
                  </h3>
                  <p className="text-gray-600">
                    Specialized oncology services
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="text-gray-600">
                        393 Northfield Ave
                      </p>
                      <p className="text-gray-600">
                        West Orange, NJ 07052
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a
                      href="tel:973-457-8728"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      (973) 457-8728
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a
                      href="mailto:patient@ihomes.org"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      patient@ihomes.org
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div className="text-gray-600">
                      <p className="font-semibold mb-2">Office Hours:</p>
                      <p>Thu: 9:00 AM - 4:00 PM</p>
                      <p>Other days: Closed</p>
                    </div>
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
                  href="tel:201-858-1211"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
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