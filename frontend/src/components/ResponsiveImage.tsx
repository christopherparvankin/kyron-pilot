"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
  priority?: boolean;
}

export default function ResponsiveImage({ 
  src, 
  alt, 
  children, 
  className = "",
  priority = false 
}: ResponsiveImageProps) {
  // Remove the extension and path to get the base name
  const baseName = src.replace(/^.*\//, '').replace(/\.[^/.]+$/, '');
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={`/stock/optimized/${baseName}_webp.webp`}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        onError={(e) => {
          // Fallback to original image if optimized version fails
          const target = e.target as HTMLImageElement;
          target.src = src;
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
