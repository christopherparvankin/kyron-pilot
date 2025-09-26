"use client";

import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Mail, GraduationCap, Building2, Award, Calendar } from "lucide-react";

interface ProviderData {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  phone: string;
  email: string;
  locations: Array<{
    address: string;
    city: string;
    state: string;
    zip: string;
  }>;
  description: string;
  education: Array<{
    degree: string;
    institution: string;
    location?: string;
    years?: string;
  }>;
  positions?: Array<{
    title: string;
    institution: string;
    location: string;
  }>;
  affiliations?: string[];
  focusAreas?: string[];
  treatments?: string[];
  services?: Array<{
    category: string;
    items: string[];
  }>;
  experience?: Array<{
    category: string;
    items: string[];
  }>;
  awards?: Array<{
    title: string;
    items: string[];
  }>;
  philosophy?: string;
}

interface ProviderPageProps {
  data: ProviderData;
}

export default function ProviderPage({ data }: ProviderPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="py-6 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/providers"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Providers
          </Link>
        </div>
      </div>

      {/* Doctor Profile */}
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Doctor Photo */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={data.image}
                    alt={data.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Contact Info Card */}
                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">{data.phone}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <div className="text-gray-600">
                        {data.locations.map((location, index) => (
                          <div key={index}>
                            <p>{location.address}</p>
                            <p>{location.city}, {location.state} {location.zip}</p>
                            {index < data.locations.length - 1 && <br />}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">{data.email}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      href="/appointment"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Information */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {data.name}
                </h1>
                <p className="text-2xl text-blue-600 font-medium mb-6">
                  {data.title}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {data.description}
                </p>
              </div>

              {/* Education & Training */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                  Education & Training
                </h2>
                <div className="space-y-4">
                  {data.education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                      <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.institution}</p>
                      {edu.location && <p className="text-gray-600">{edu.location}</p>}
                      {edu.years && <p className="text-sm text-gray-500">{edu.years}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Positions */}
              {data.positions && data.positions.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Building2 className="w-6 h-6 mr-3 text-blue-600" />
                    Current Positions
                  </h2>
                  <div className="space-y-4">
                    {data.positions.map((position, index) => (
                      <div key={index} className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900">{position.title}</h3>
                        <p className="text-gray-600">{position.institution}</p>
                        <p className="text-gray-600">{position.location}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hospital Affiliations */}
              {data.affiliations && data.affiliations.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Hospital Affiliations</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.affiliations.map((affiliation, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                        <p className="text-gray-700 font-medium">{affiliation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Focus Areas */}
              {data.focusAreas && data.focusAreas.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Award className="w-6 h-6 mr-3 text-blue-600" />
                    Focus Areas
                  </h2>
                  <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                    <ul className="text-gray-700 space-y-2">
                      {data.focusAreas.map((area, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-pink-600 mr-2">•</span>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Treatments */}
              {data.treatments && data.treatments.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Treatments For</h2>
                  <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-gray-700 space-y-2">
                        {data.treatments.slice(0, Math.ceil(data.treatments.length / 2)).map((treatment, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-pink-600 mr-2">•</span>
                            <span>{treatment}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="text-gray-700 space-y-2">
                        {data.treatments.slice(Math.ceil(data.treatments.length / 2)).map((treatment, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-pink-600 mr-2">•</span>
                            <span>{treatment}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Services */}
              {data.services && data.services.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.services.map((service, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">{service.category}</h3>
                        <ul className="text-gray-600 space-y-1">
                          {service.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="text-gray-400 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience & Recognition */}
              {data.experience && data.experience.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Award className="w-6 h-6 mr-3 text-blue-600" />
                    Experience & Recognition
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.experience.map((exp, index) => (
                      <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-200">
                        <h3 className="font-semibold text-gray-900 mb-2">{exp.category}</h3>
                        <ul className="text-gray-600 space-y-1">
                          {exp.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Awards */}
              {data.awards && data.awards.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Awards & Recognition</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.awards.map((award, index) => (
                      <div key={index} className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                        <h3 className="font-semibold text-gray-900 mb-2">{award.title}</h3>
                        <ul className="text-gray-600 space-y-1">
                          {award.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="text-yellow-600 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Philosophy */}
              {data.philosophy && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      {data.philosophy}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
