import type { Metadata } from "next";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Dental Implants Dubai | Permanent Tooth Replacement",
  description:
    "Restore your smile permanently with titanium dental implants at TDC Dental Clinic Dubai. Natural look, lifetime durability. Book a free consultation today.",
};

export default function DentalImplantsPage() {
  return (
    <ServicePageLayout
      heroImage="https://images.unsplash.com/photo-1588776814546-1ffbb813e1b5?w=1920&q=80"
      eyebrow="Restorative Dentistry"
      title="Dental Implants"
      subtitle="The permanent solution to missing teeth. Indistinguishable from natural — and built to last a lifetime."
      heroTagline='"Dental implants are not just teeth — they are a foundation for renewed confidence."'
      aboutTitle="The Gold Standard in Tooth Replacement"
      aboutText={[
        "Dental implants are the most advanced, durable, and natural-feeling solution for missing teeth. A titanium post is surgically placed into the jawbone, where it fuses over time through a process called osseointegration — creating a permanent, stable foundation.",
        "Unlike dentures or bridges, implants preserve your jawbone, prevent facial sagging, and require no compromise on the adjacent teeth. You eat, speak, and smile exactly as you would with your natural teeth.",
        "At TDC, we use Nobel Biocare and Straumann implants — the world's most trusted implant systems — combined with our surgeons' meticulous precision for predictable, long-term success.",
      ]}
      benefits={[
        "Indistinguishable from natural teeth in appearance and function",
        "Preserves jawbone and prevents facial bone loss",
        "No impact on adjacent healthy teeth",
        "Eat all your favourite foods without restriction",
        "No removal, no adhesives — completely fixed",
        "Success rate exceeding 98% over 10 years",
        "Lifetime solution with proper maintenance",
        "Restores speech clarity affected by missing teeth",
      ]}
      processSteps={[
        {
          step: "01",
          title: "Consultation & 3D Scan",
          description:
            "A comprehensive assessment including CBCT 3D scan to evaluate your bone density, anatomy, and plan precise implant placement.",
        },
        {
          step: "02",
          title: "Implant Placement",
          description:
            "The titanium implant is placed under local anaesthesia in a comfortable, minimally invasive procedure. Most patients return to work the next day.",
        },
        {
          step: "03",
          title: "Osseointegration",
          description:
            "Over 3–6 months, the implant fuses with your jawbone, creating an incredibly strong foundation. A temporary restoration keeps you looking complete.",
        },
        {
          step: "04",
          title: "Crown Placement",
          description:
            "Your custom-crafted ceramic crown is attached, perfectly matched to your natural teeth in shape, size, and colour.",
        },
      ]}
      pricingTiers={[
        {
          name: "Single Implant",
          price: "From AED 4,500",
          description: "Per implant. Complete single tooth replacement.",
          features: [
            "Nobel Biocare or Straumann implant",
            "Custom ceramic crown",
            "Local anaesthesia",
            "Full follow-up care",
            "2-year implant warranty",
          ],
        },
        {
          name: "Multiple Implants",
          price: "From AED 12,000",
          description: "3+ implants. Significant savings per unit.",
          features: [
            "Premium implant systems",
            "3D treatment planning",
            "Temporary restorations included",
            "Priority scheduling",
            "5-year comprehensive warranty",
            "Interest-free payment plans",
          ],
          highlight: true,
        },
        {
          name: "Full Arch (All-on-4/6)",
          price: "From AED 35,000",
          description: "Complete jaw restoration on 4–6 implants.",
          features: [
            "Full arch rehabilitation",
            "All-on-4 or All-on-6 protocol",
            "Fixed non-removable prosthesis",
            "Same-day teeth option available",
            "Lifetime care plan",
            "Complimentary bone grafting assessment",
          ],
        },
      ]}
      relatedServices={[
        { title: "Veneers", href: "/services/veneers" },
        { title: "Hollywood Smile", href: "/services/hollywood-smile" },
        { title: "Teeth Whitening", href: "/services/teeth-whitening" },
      ]}
    />
  );
}
