import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeader from "@/components/ui/SectionHeader";
import GoldButton from "@/components/ui/GoldButton";
import { Check, ArrowRight } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

interface ServicePageProps {
  heroImage: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroTagline: string;
  benefits: string[];
  aboutTitle: string;
  aboutText: string[];
  processSteps: ProcessStep[];
  pricingTiers: PricingTier[];
  relatedServices: { title: string; href: string }[];
}

export default function ServicePageLayout({
  heroImage,
  eyebrow,
  title,
  subtitle,
  heroTagline,
  benefits,
  aboutTitle,
  aboutText,
  processSteps,
  pricingTiers,
  relatedServices,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden bg-[#0a0a0a]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <AnimateOnScroll>
            <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] font-medium mb-4">{eyebrow}</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl font-semibold text-white leading-tight mb-6 max-w-3xl">
              {title}
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-white/60 text-xl max-w-xl mb-10">{subtitle}</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <GoldButton href="/contact">Book Free Consultation</GoldButton>
              <GoldButton
                href="https://wa.me/971565378313"
                variant="outline"
                external
              >
                WhatsApp Us
              </GoldButton>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Tagline bar */}
      <div className="bg-[#C9A96E] py-6">
        <div className="container-luxury">
          <p className="text-white font-heading text-xl md:text-2xl italic text-center">{heroTagline}</p>
        </div>
      </div>

      {/* About section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <SectionHeader eyebrow="The Treatment" title={aboutTitle} />
              <div className="space-y-5">
                {aboutText.map((para, i) => (
                  <AnimateOnScroll key={i} delay={i * 0.1}>
                    <p className="text-[#737373] text-lg leading-relaxed">{para}</p>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
            <AnimateOnScroll direction="right" delay={0.2}>
              <div className="bg-[#f8f8f8] p-10">
                <h3 className="font-heading text-2xl font-semibold text-[#0a0a0a] mb-8">
                  Benefits & Outcomes
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5" />
                      <span className="text-[#0a0a0a] text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-[#e5e5e5]">
                  <p className="text-[#737373] text-sm mb-4">Ready to get started?</p>
                  <GoldButton href="/contact" className="w-full justify-center">
                    Book Your Consultation
                  </GoldButton>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-luxury">
          <SectionHeader
            eyebrow="Your Journey"
            title="The Treatment Process"
            subtitle="We guide you through every step — from initial consultation to your final reveal."
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {processSteps.map((step, i) => (
              <AnimateOnScroll key={step.step} delay={i * 0.1}>
                <div className="bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors group">
                  <p className="font-heading text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors mb-6">
                    {step.step}
                  </p>
                  <h3 className="font-heading text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-[#f8f8f8]">
        <div className="container-luxury">
          <SectionHeader
            eyebrow="Investment"
            title="Transparent Pricing"
            subtitle="We believe in complete transparency. Every quote is personalised during your consultation."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <AnimateOnScroll key={tier.name} delay={i * 0.1}>
                <div
                  className={`p-10 h-full flex flex-col ${
                    tier.highlight
                      ? "bg-[#0a0a0a] text-white"
                      : "bg-white border border-[#e5e5e5]"
                  }`}
                >
                  {tier.highlight && (
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A96E] border border-[#C9A96E]/40 px-3 py-1 self-start mb-6">
                      Most Popular
                    </span>
                  )}
                  <h3
                    className={`font-heading text-xl font-semibold mb-2 ${
                      tier.highlight ? "text-white" : "text-[#0a0a0a]"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p className="text-[#C9A96E] font-heading text-3xl font-bold mb-2">{tier.price}</p>
                  <p className={`text-sm mb-8 ${tier.highlight ? "text-white/50" : "text-[#737373]"}`}>
                    {tier.description}
                  </p>
                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                        <span className={`text-sm ${tier.highlight ? "text-white/70" : "text-[#737373]"}`}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`text-sm font-medium tracking-widest uppercase flex items-center gap-2 group ${
                      tier.highlight ? "text-[#C9A96E]" : "text-[#0a0a0a]"
                    }`}
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll delay={0.4}>
            <p className="text-center text-[#737373] text-sm mt-8">
              * All prices are indicative. Final pricing is confirmed after your consultation and assessment.
              <br />
              Flexible 0% payment plans available. Insurance accepted.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Other services */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeader eyebrow="Explore More" title="Related Treatments" centered />
          <div className="flex flex-wrap justify-center gap-4">
            {relatedServices.map((s) => (
              <AnimateOnScroll key={s.href}>
                <Link
                  href={s.href}
                  className="border border-[#e5e5e5] hover:border-[#C9A96E] text-[#0a0a0a] hover:text-[#C9A96E] text-sm font-medium px-8 py-4 transition-all duration-300 tracking-widest uppercase flex items-center gap-2 group"
                >
                  {s.title}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#C9A96E] py-16">
        <div className="container-luxury text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
              Ready to Begin Your Transformation?
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="text-white/80 mb-8">Book a complimentary consultation — no commitment, no pressure.</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <GoldButton href="/contact" variant="white">
              Book Free Consultation
            </GoldButton>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
