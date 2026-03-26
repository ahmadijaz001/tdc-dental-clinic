import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import PromoBannerStrip from "@/components/home/PromoBannerStrip";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ServiceCarousel from "@/components/home/ServiceCarousel";
import VideoSection from "@/components/home/VideoSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import DoctorHighlight from "@/components/home/DoctorHighlight";
import MapSection from "@/components/home/MapSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "TDC Dental Clinic Dubai | Luxury Cosmetic Dentistry & Smile Makeovers",
  description:
    "Dubai's premier luxury dental clinic. Hollywood Smiles, veneers, dental implants, and complete smile makeovers. DHA Licensed. Book your free consultation today.",
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "TDC Dental Clinic",
            image: "https://tdcdentalclinic.ae/og-image.jpg",
            url: "https://tdcdentalclinic.ae",
            telephone: "+971565378313",
            email: "hello@tdcdentalclinic.ae",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dubai",
              addressCountry: "AE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 25.2048,
              longitude: 55.2708,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "20:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday", "Sunday"],
                opens: "10:00",
                closes: "18:00",
              },
            ],
            priceRange: "AED 2,000 – AED 50,000",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "500",
            },
            medicalSpecialty: "Dentistry",
          }),
        }}
      />

      <HeroSection />
      <PromoBannerStrip />
      <ServicesSection />
      <ServiceCarousel />
      <AboutSection />
      <VideoSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <DoctorHighlight />
      <MapSection />
      <FinalCTA />
    </>
  );
}
