import type { Metadata } from "next";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Hollywood Smile Dubai | Complete Smile Makeover",
  description:
    "Get the perfect Hollywood Smile at TDC Dental Clinic Dubai. Complete smile makeover with veneers, whitening, and reshaping. Transform your smile today.",
};

export default function HollywoodSmilePage() {
  return (
    <ServicePageLayout
      heroImage="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80"
      eyebrow="Signature Treatment"
      title="Hollywood Smile"
      subtitle="Our most transformative treatment. A complete smile redesign that creates your perfect, camera-ready smile."
      heroTagline='"Not just a treatment — a complete reinvention of how the world sees your smile."'
      aboutTitle="The Complete Smile Transformation"
      aboutText={[
        "The Hollywood Smile is the pinnacle of cosmetic dentistry — a comprehensive smile makeover that combines multiple treatments to create a perfectly harmonious, radiant smile. It's the treatment that has made TDC famous across the UAE.",
        "Unlike single treatments, the Hollywood Smile is a bespoke design process. We analyse your facial proportions, lip shape, skin tone, and personality to create a smile that is uniquely yours — breathtaking, natural, and perfectly balanced.",
        "Using a combination of premium porcelain veneers, teeth whitening, gum contouring, and digital smile design, we craft a smile that transforms not just your teeth but your entire presence.",
      ]}
      benefits={[
        "Complete transformation in as few as 3 appointments",
        "Customised to your unique facial features",
        "Covers all cosmetic concerns simultaneously",
        "Natural-looking results that don't appear 'overdone'",
        "Digital preview before any treatment begins",
        "Long-lasting results — 15–20 years",
        "Dramatically increases confidence and self-image",
        "The most comprehensive cosmetic dental treatment available",
      ]}
      processSteps={[
        {
          step: "01",
          title: "Smile Analysis & Design",
          description:
            "We take impressions, photographs, and digital scans. Our smile design software creates a virtual preview of your new smile — you approve it before we begin.",
        },
        {
          step: "02",
          title: "Mock-Up & Approval",
          description:
            "A physical mock-up is applied so you can see, feel, and even photograph your new smile before committing. We refine until it's perfect.",
        },
        {
          step: "03",
          title: "Treatment Execution",
          description:
            "Gum contouring (if needed), tooth preparation, and precision veneer placement — all performed with meticulous attention over 1–2 appointments.",
        },
        {
          step: "04",
          title: "The Grand Reveal",
          description:
            "The moment that changes everything. Your Hollywood Smile is bonded, polished, and revealed. Most patients are moved to tears — in the best possible way.",
        },
      ]}
      pricingTiers={[
        {
          name: "Hollywood Smile Lite",
          price: "From AED 12,000",
          description: "6–8 anterior teeth. Front smile transformation.",
          features: [
            "6–8 E.max porcelain veneers",
            "Professional teeth whitening",
            "Digital smile preview",
            "2 appointments",
            "10-year care plan",
          ],
        },
        {
          name: "Hollywood Smile Full",
          price: "From AED 22,000",
          description: "10–16 teeth. Complete smile redesign.",
          features: [
            "10–16 premium E.max veneers",
            "Full digital smile design",
            "Gum contouring if required",
            "Physical mock-up included",
            "Priority appointments",
            "Lifetime maintenance plan",
            "0% payment plan available",
          ],
          highlight: true,
        },
        {
          name: "Total Smile Makeover",
          price: "From AED 40,000",
          description: "Full mouth rehabilitation with implants.",
          features: [
            "Full mouth reconstruction",
            "Implants + veneers + whitening",
            "Gum reshaping",
            "Occlusal correction",
            "Premium materials throughout",
            "VIP concierge service",
            "Lifetime comprehensive warranty",
          ],
        },
      ]}
      relatedServices={[
        { title: "Veneers", href: "/services/veneers" },
        { title: "Dental Implants", href: "/services/dental-implants" },
        { title: "Teeth Whitening", href: "/services/teeth-whitening" },
      ]}
    />
  );
}
