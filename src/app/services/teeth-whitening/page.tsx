import type { Metadata } from "next";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Teeth Whitening Dubai | Professional Laser Whitening",
  description:
    "Professional teeth whitening at TDC Dental Clinic Dubai. Up to 10 shades brighter in a single session. Zoom whitening and custom take-home kits available.",
};

export default function TeethWhiteningPage() {
  return (
    <ServicePageLayout
      heroImage="https://images.unsplash.com/photo-1559589689-577aabd1db4f?w=1920&q=80"
      eyebrow="Cosmetic Dentistry"
      title="Teeth Whitening"
      subtitle="Dramatically brighter, more radiant teeth in a single session. The fastest transformation in our clinic."
      heroTagline='"Brightness that speaks before you even say a word."'
      aboutTitle="Professional-Grade Whitening"
      aboutText={[
        "Professional teeth whitening is the fastest, safest way to dramatically improve the colour of your smile. Unlike over-the-counter products, our clinical-grade treatments deliver results that are 8–12 shades brighter — in a single appointment.",
        "We offer Philips Zoom in-clinic whitening, the world's most trusted professional whitening system, as well as custom take-home whitening trays for gradual, convenient brightening at home.",
        "Our team carefully assesses your tooth sensitivity and enamel condition before recommending the ideal whitening protocol — ensuring you achieve maximum brightness with zero discomfort.",
      ]}
      benefits={[
        "Up to 12 shades brighter in a single appointment",
        "Safe, clinically proven Philips Zoom technology",
        "Minimal to zero sensitivity with our protocols",
        "Results visible immediately after treatment",
        "Lasts 1–3 years with proper maintenance",
        "Safe for existing crowns and veneers",
        "No downtime — resume normal activities immediately",
        "Complimentary shade assessment and consultation",
      ]}
      processSteps={[
        {
          step: "01",
          title: "Shade Assessment",
          description:
            "We document your current tooth shade and discuss your desired brightness level to set realistic, beautiful expectations.",
        },
        {
          step: "02",
          title: "Gum Protection",
          description:
            "A protective barrier is carefully applied to your gums before treatment begins, ensuring complete comfort and safety.",
        },
        {
          step: "03",
          title: "Whitening Treatment",
          description:
            "Our professional whitening gel is applied and activated with the Philips Zoom light. Three 15-minute sessions, all in one visit.",
        },
        {
          step: "04",
          title: "Reveal & Maintenance",
          description:
            "Instant results — your new shade is documented and compared. Custom take-home trays are provided to maintain your brightness.",
        },
      ]}
      pricingTiers={[
        {
          name: "Take-Home Kit",
          price: "From AED 800",
          description: "Custom trays with professional whitening gel.",
          features: [
            "Custom-fitted whitening trays",
            "2-week whitening gel supply",
            "Up to 8 shades brighter",
            "Flexible — whiten at your pace",
            "Easy to maintain",
          ],
        },
        {
          name: "Philips Zoom In-Clinic",
          price: "From AED 1,500",
          description: "Single 90-minute appointment. Immediate results.",
          features: [
            "Philips Zoom WhiteSpeed technology",
            "Up to 12 shades brighter",
            "Immediate, visible results",
            "Anti-sensitivity formula included",
            "Complimentary take-home maintenance kit",
            "Before & after photographs",
          ],
          highlight: true,
        },
        {
          name: "Combined Package",
          price: "From AED 2,200",
          description: "In-clinic + take-home for maximum results.",
          features: [
            "Full Philips Zoom in-clinic session",
            "Custom take-home trays included",
            "4-week whitening gel supply",
            "1-year touch-up gel included",
            "Maximum brightness programme",
            "Periodic complimentary consultations",
          ],
        },
      ]}
      relatedServices={[
        { title: "Veneers", href: "/services/veneers" },
        { title: "Hollywood Smile", href: "/services/hollywood-smile" },
        { title: "Dental Implants", href: "/services/dental-implants" },
      ]}
    />
  );
}
