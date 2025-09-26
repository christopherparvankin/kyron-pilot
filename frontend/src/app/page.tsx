"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Calendar,
  Stethoscope,
  Users,
  Heart,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  CheckCircle,
  Play,
  Award,
  Target,
  Zap,
  Navigation,
  Video,
  Syringe,
  Pill,
  Star,
  Quote,
  Mail,
  ChevronRight,
  GraduationCap,
  Building2,
  Award as AwardIcon
} from "lucide-react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Stock photos for slideshow
  const slideshowImages = [
    "/stock/AdobeStock_1435116140.jpeg",
    "/stock/AdobeStock_722441630.jpeg", 
    "/stock/AdobeStock_830145388.jpeg"
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
        setIsTransitioning(false);
      }, 500);
    }, 15000);

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  const quickAccessCards = [
    {
      id: 1,
      title: "Find a Physician",
      description: "Meet our expert oncologists",
      icon: Users,
      href: "/providers",
      color: "from-soft-500 to-soft-700"
    },
    {
      id: 2,
      title: "Treatments & Services",
      description: "Advanced cancer treatments",
      icon: Stethoscope,
      href: "/services",
      color: "from-green-500 to-green-700"
    },
    {
      id: 3,
      title: "Innovations",
      description: "Cutting-edge care innovations",
      icon: Sparkles,
      href: "/innovations",
      color: "from-primary-500 to-primary-700"
    },
    {
      id: 4,
      title: "First Visit",
      description: "Schedule your consultation",
      icon: Calendar,
      href: "/appointment",
      color: "from-orange-500 to-orange-700"
    }
  ];

  const services = [
    {
      title: "Infusion Center",
      description: "State-of-the-art infusion & injection treatments",
      icon: Syringe,
      image: "/stock/infusion.jpeg"
    },
    {
      title: "Hematology & Oncology",
      description: "Precision-based cancer care & blood disorders",
      icon: Heart,
      image: "/stock/oncology.jpeg"
    },
    {
      title: "Genomic Testing",
      description: "Advanced diagnostic & treatment planning",
      icon: Stethoscope,
      image: "/stock/genomic.jpeg"
    },
    {
      title: "Clinical Trials",
      description: "Access to cutting-edge research treatments",
      icon: Target,
      image: "/stock/clinical%20research.jpeg"
    },
    {
      title: "In-House Pharmacy",
      description: "Specialized oncology medications on-site",
      icon: Pill,
      image: "/stock/pharmacy.jpeg"
    },
    {
      title: "Multilingual Care",
      description: "English, Spanish, Hindi, Tamil, Gujarati",
      icon: Users,
      image: "/stock/multilingual.jpeg"
    }
  ];

  const innovationPartners = [
    {
      quote: "Dr. Iyengar is a wonderful and kind human being. His compassionate approach to patient care and his expertise in hematology and oncology make him an exceptional physician.",
      author: "Ayush Sharma"
    },
    {
      quote: "Dr. Iyengar is wonderful to work with as we implement AI solutions in healthcare practices across the US. He is entrepreneurial and innovative!",
      author: "Jay Gopal"
    }
  ];

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Slideshow Section */}
        <section className="relative h-screen overflow-hidden pb-20 sm:pb-0" style={{ marginTop: '-40px', height: 'calc(100vh + 40px)' }}>
          {/* Slideshow Images */}
          <div className="relative w-full h-full">
            {slideshowImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentSlide
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                }`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={image}
                    alt={`Medical care image ${index + 1}`}
                    className="w-full h-full object-cover object-top transition-all duration-1000"
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10" style={{ top: '120px', height: 'calc(100vh - 80px)' }}>
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                  Iyengar Hematology & Oncology
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white drop-shadow-lg">
                Medical Center
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white drop-shadow-lg">
                Infusion & Injection Services
              </h3>
              <p className="text-lg mb-8 text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-medium">
                Board-certified oncologists providing precision-based cancer care, genomic testing, and state-of-the-art infusion treatments. 
                Multilingual support in English, Spanish, Hindi, Tamil, and Gujarati.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium">Bayonne & West Orange, NJ</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-0">
                <Link
                  href="/appointment"
                  className="bg-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-50 transition-colors transform hover:scale-105 inline-flex items-center justify-center navbar-blue"
                >
                  <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Schedule Consultation
                </Link>
                <Link
                  href="/providers"
                  className="bg-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-50 transition-colors transform hover:scale-105 inline-flex items-center justify-center navbar-blue"
                >
                  <Users className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setIsTransitioning(false);
                  }, 500);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 right-8 z-10">
            <div className="flex flex-col items-center text-white">
              <span className="text-sm mb-2">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Hudson Style */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Cancer Care & Infusion Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                State-of-the-art infusion center with precision-based oncology care, genomic testing, and multilingual support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => {
                const IconComponent = service.icon;
              return (
                  <div
                  key={index} 
                    className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-64"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center p-6 text-center">
                      <div>
                        <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 transition-colors"
                            style={{ color: 'white' }}
                            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#C69F59'}
                            onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>
                          {service.title}
                        </h3>
                        <p className="text-sm text-white text-opacity-90">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Two Convenient Locations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">Bayonne Clinic</p>
                    <p className="text-gray-600">27 E 29th St, Bayonne, NJ 07002</p>
                    <p className="font-medium navbar-blue">(201) 858-1211</p>
                    <p className="text-gray-500">Mon-Thu: 10AM-5:30PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">West Orange Clinic</p>
                    <p className="text-gray-600">393 Northfield Ave, West Orange, NJ 07052</p>
                    <p className="font-medium navbar-blue">(973) 457-8728</p>
                    <p className="text-gray-500">Thu: 9AM-4PM</p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Schedule your consultation with our expert oncologists. Multilingual support available.
              </p>
              <Link
                href="/appointment"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Schedule a Consultation
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
            </div>
        </div>
      </section>

        {/* Our Providers Section - Hudson Style */}
        <section className="py-20 px-4 bg-white" style={{ backgroundColor: 'white' }}>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Medical Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet our board-certified physicians who are dedicated to providing exceptional cancer care and hematology services.
              </p>
            </div>

            <div className="space-y-12">
              {/* Dr. Arjun Iyengar */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row">
                  {/* Photo Section */}
                  <div className="lg:w-1/3 p-8 flex justify-center items-center bg-gray-50">
                    <div className="w-64 h-80 rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="/iy.png"
                        alt="Dr. Arjun Iyengar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Information Section */}
                  <div className="lg:w-2/3 p-8">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        Arjun Iyengar, M.D., MBA
                      </h3>
                      <p className="text-xl font-medium mb-4 navbar-blue">
                        Hematology & Oncology
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="prose prose-gray max-w-none">
                        <p className="mb-4 text-gray-600 leading-relaxed">
                          Dr. Iyengar is a board-certified hematologist and medical oncologist specializing in comprehensive cancer care and blood disorders. Practicing in the heart of New Jersey, he specializes in precision-based oncology care, genomic testing, and various treatment modalities including chemotherapy, immunotherapy, and biological therapies.
                        </p>
                        <p className="mb-4 text-gray-600 leading-relaxed">
                          Dr. Iyengar completed his medical education at Brown University, Rutgers Medical School, and Cornell MBA. He completed his residency at Dartmouth and fellowship at NYU Grossman School of Medicine. He currently serves as Department Chairman at Bayonne Medical Center and Clinical Assistant Professor at NYU.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/providers/arjun-iyengar"
                        className="inline-flex items-center font-medium transition-colors navbar-blue"
                      >
                        Read more
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dr. Adam Paduszynski */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row">
                  {/* Photo Section */}
                  <div className="lg:w-1/3 p-8 flex justify-center items-center bg-gray-50">
                    <div className="w-64 h-80 rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="/adam.webp"
                        alt="Dr. Adam Paduszynski"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Information Section */}
                  <div className="lg:w-2/3 p-8">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        Adam A. Paduszynski, M.D.
                      </h3>
                      <p className="text-xl font-medium mb-4 navbar-blue">
                        Family Medicine
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="prose prose-gray max-w-none">
                        <p className="mb-4 text-gray-600 leading-relaxed">
                          Dr. Adam A. Paduszynski is a board-certified Family Medicine physician with over 35 years of experience. He has received the "Patients Top Choice" award, which is given to providers who have received a 5-star rating from their patients.
                        </p>
                        <p className="mb-4 text-gray-600 leading-relaxed">
                          Dr. Paduszynski completed his medical education at Wroclaw Medical University and his residency in Family Medicine at St. Luke's University Hospital/Warren Hospital. He also completed an internship at Atlantic Health System. He has received 4 patient awards and maintains a perfect 5/5 patient rating based on 6 reviews.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/providers/adam-paduszynski"
                        className="inline-flex items-center font-medium transition-colors navbar-blue"
                      >
                        Read more
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dr. Devarajan P. Iyengar */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row">
                  {/* Photo Section */}
                  <div className="lg:w-1/3 p-8 flex justify-center items-center bg-gray-50">
                    <div className="w-64 h-80 rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="/download.jpeg"
                        alt="Dr. Devarajan P. Iyengar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Information Section */}
                  <div className="lg:w-2/3 p-8">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        Devarajan P. Iyengar, M.D.
                      </h3>
                      <p className="text-xl font-medium mb-4 navbar-blue">
                        Oncology
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="prose prose-gray max-w-none">
                        <p className="mb-4 text-gray-600 leading-relaxed">
                          Dr. Devarajan P. Iyengar is an oncologist in Bayonne, New Jersey and is affiliated with multiple hospitals in the area, including CarePoint Health Bayonne Medical Center and CarePoint Health Hoboken University Medical Center. He received his medical degree from Baroda Medical College and has been in practice for more than 20 years.
                        </p>
                        <p className="mb-4 text-gray-600 leading-relaxed">
                          Dr. Iyengar has expertise in treating inflammatory bowel disease (IBD), stroke, diabetes, among other conditions. He accepts Aetna, Cigna, United Healthcare and other insurance plans. He completed his fellowship in Hematology and Medical Oncology at Newark Beth Israel Medical Center and his residency in Internal Medicine at Rutgers Health/New Jersey Medical School.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/providers/devarajan-iyengar"
                        className="inline-flex items-center font-medium transition-colors navbar-blue"
                      >
                        Read more
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </section>

        {/* Innovation Partners Section */}
        <section 
          className="relative py-20 px-4 overflow-hidden"
          style={{
            backgroundImage: 'url(/stock/brooklyn.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                We Support Innovation
              </h2>
              <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
                Our commitment to advancing healthcare through technology and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {innovationPartners.map((partner, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">
                        {partner.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{partner.author}</h3>
                      <blockquote className="text-gray-700 italic leading-relaxed">
                        "{partner.quote}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Contact Section - Hudson Style */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to get started?
            </h2>
              <p className="text-xl text-gray-600">
                Contact us today to schedule your consultation
                    </p>
                  </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 navbar-blue" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">973-435-6544</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 navbar-blue" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Online</h3>
                <p className="text-gray-600">Book your appointment</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 navbar-blue" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">West Orange & Bayonne, NJ</p>
              </div>
            </div>

            <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Request an Appointment
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}