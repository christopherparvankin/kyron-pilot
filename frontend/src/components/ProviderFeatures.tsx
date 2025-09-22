"use client";

import { useState, useEffect } from "react";
import { Award, GraduationCap, Heart, MapPin, Phone, Calendar } from "lucide-react";

export default function ProviderFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
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
                className={`text-center group ${
                  activeFeature === index ? 'transform scale-105' : ''
                } transition-all duration-500`}
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{feature.stats}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
