import type { Metadata } from "next";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Porcelain Veneers Dubai | Ultra-Thin Smile Transformation",
  description:
    "Transform your smile with custom porcelain veneers at TDC Dental Clinic Dubai. Natural-looking, ultra-thin, and permanent. Starting from AED 1,800 per tooth.",
};

export default function VeneersPage() {
  return (
    <ServicePageLayout
      heroImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80"
      eyebrow="Cosmetic Dentistry"
      title="Porcelain Veneers"
      subtitle="Ultra-thin shells of pure perfection. Custom-crafted to transform your smile in just two appointments."
      heroTagline='"The most precise, natural-looking smile enhancement available in modern dentistry."'
      aboutTitle="What Are Porcelain Veneers?"
      aboutText={[
        "Porcelain veneers are ultra-thin, custom-crafted ceramic shells that are bonded to the front surface of your teeth. They are the gold standard in cosmetic dentistry, chosen by celebrities and discerning patients worldwide for their unmatched natural appearance.",
        "Each veneer is individually designed to complement your facial features, skin tone, and personality. The result is a smile that looks entirely natural — just better than nature intended.",
        "At TDC, we use only E.max and Lumineers-grade porcelain — the finest materials available — for durability, translucency, and a lifetime of confidence.",
      ]}
      benefits={[
        "Instantly corrects chips, cracks, and fractures",
        "Covers severe discolouration resistant to whitening",
        "Closes gaps and spaces between teeth",
        "Reshapes teeth that are too small, too large, or worn",
        "Results that last 15–20 years with proper care",
        "Minimal tooth reduction (especially with no-prep veneers)",
        "Stain-resistant — maintains brightness permanently",
        "Completed in just two comfortable appointments",
      ]}
      processSteps={[
        {
          step: "01",
          title: "Consultation & Design",
          description:
            "We assess your smile, discuss your vision, and use digital smile design software to preview your results before any work begins.",
        },
        {
          step: "02",
          title: "Tooth Preparation",
          description:
            "A minimal layer of enamel (0.3–0.5mm) is gently removed. Temporary veneers are placed so you look great during the process.",
        },
        {
          step: "03",
          title: "Custom Fabrication",
          description:
            "Your veneers are hand-crafted by master ceramists at our partner laboratory using the finest E.max porcelain. Takes 10–14 days.",
        },
        {
          step: "04",
          title: "Bonding & Reveal",
          description:
            "Your new veneers are precision-bonded and polished. The moment you see your new smile for the first time is unforgettable.",
        },
      ]}
      pricingTiers={[
        {
          name: "Composite Veneers",
          price: "From AED 600",
          description: "Per tooth. Ideal for minor corrections.",
          features: [
            "Direct composite resin application",
            "Single appointment",
            "Reversible treatment",
            "3–5 year lifespan",
            "Budget-conscious option",
          ],
        },
        {
          name: "E.max Porcelain",
          price: "From AED 1,800",
          description: "Per tooth. Premium ceramic veneers.",
          features: [
            "Ultra-thin lithium disilicate ceramic",
            "Two appointments",
            "Natural translucency & shine",
            "15–20 year lifespan",
            "Custom shade matching",
            "Free digital smile preview",
          ],
          highlight: true,
        },
        {
          name: "Full Smile (10–16 teeth)",
          price: "From AED 18,000",
          description: "Complete smile transformation package.",
          features: [
            "10–16 premium E.max veneers",
            "Full digital smile design",
            "Priority scheduling",
            "Lifetime maintenance plan",
            "Complimentary teeth whitening",
            "Flexible 0% payment plans",
          ],
        },
      ]}
      relatedServices={[
        { title: "Hollywood Smile", href: "/services/hollywood-smile" },
        { title: "Teeth Whitening", href: "/services/teeth-whitening" },
        { title: "Dental Implants", href: "/services/dental-implants" },
      ]}
    />
  );
}
