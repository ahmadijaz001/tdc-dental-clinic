"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { Sparkles, Shield, Star, Zap, Wrench, Layers } from "lucide-react";

const services = [
  {
    title: "Porcelain Veneers",
    description:
      "Ultra-thin, custom-crafted shells that instantly transform imperfect teeth into a flawless, natural-looking smile.",
    Icon: Sparkles,
    href: "/services/veneers",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=85&auto=format&fit=crop",
    highlight: "Most Popular",
  },
  {
    title: "Dental Implants",
    description:
      "Permanent tooth replacement that looks, feels, and functions exactly like your natural teeth — built to last a lifetime.",
    Icon: Shield,
    href: "/services/dental-implants",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85&auto=format&fit=crop",
    highlight: null,
  },
  {
    title: "Hollywood Smile",
    description:
      "The complete smile makeover — the gold standard in cosmetic dentistry for that perfect celebrity smile.",
    Icon: Star,
    href: "/services/hollywood-smile",
    image: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=800&q=85&auto=format&fit=crop",
    highlight: "Signature Service",
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional-grade whitening that delivers dramatically brighter results — up to 10 shades lighter in a single visit.",
    Icon: Zap,
    href: "/services/teeth-whitening",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&q=85&auto=format&fit=crop",
    highlight: null,
  },
  {
    title: "Restorative Dentistry",
    description:
      "Comprehensive restorations — from fillings and crowns to bridges — rebuilding your smile with precision and lasting care.",
    Icon: Wrench,
    href: "/services/dental-implants",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb813e1b5?w=800&q=85&auto=format&fit=crop",
    highlight: null,
  },
  {
    title: "Invisible Braces",
    description:
      "Clear aligner therapy for discreet, comfortable teeth straightening — no metal wires, no compromise on confidence.",
    Icon: Layers,
    href: "/services/veneers",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=85&auto=format&fit=crop",
    highlight: null,
  },
];

export default function ServicesSection() {
  return (
    <section style={{ backgroundColor: "var(--tdc-bg)", paddingBottom: "80px" }}>
      {/* Section header */}
      <div className="container-luxury pt-20 pb-14">
        <SectionHeader
          eyebrow="Our Specialties"
          title="Treatments That Transform"
          subtitle="Each procedure is performed with meticulous attention to detail, using the finest materials and most advanced techniques available."
          light
        />
      </div>

      {/* Cards grid — inside container for left/right spacing */}
      <div className="container-luxury">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "1px", backgroundColor: "var(--tdc-gold-sep)" }}
        >
          {services.map((service, i) => {
            const { Icon } = service;

            return (
              <AnimateOnScroll key={service.title} delay={i * 0.08}>
                <Link
                  href={service.href}
                  className="group block relative overflow-hidden transition-colors duration-300"
                  style={{
                    backgroundColor: "var(--tdc-surface)",
                    textDecoration: "none",
                    display: "block",
                    padding: "40px 36px",
                    minHeight: "280px",
                  }}
                >
                  {/* Background image — always slightly visible, more on hover */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                    style={{
                      backgroundImage: `url('${service.image}')`,
                      opacity: 0.1,
                    }}
                  />
                  {/* Gradient overlay keeps text readable at all times */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.75) 100%)",
                      transition: "opacity 0.5s",
                    }}
                  />
                  {/* On hover — lighter overlay = image more visible */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(17,17,17,0.70) 0%, rgba(17,17,17,0.45) 100%)",
                    }}
                  />

                  {/* Content — always white text since cards always have dark gradient overlay */}
                  <div className="relative z-10" style={{ color: "white" }}>
                    {service.highlight && (
                      <span
                        className="inline-block text-[10px] tracking-[0.2em] uppercase px-3 py-1 mb-5"
                        style={{
                          color: "#C9A96E",
                          border: "1px solid rgba(201,169,110,0.45)",
                        }}
                      >
                        {service.highlight}
                      </span>
                    )}

                    {/* Icon badge — always gold on black */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: "#C9A96E" }}
                    >
                      <Icon style={{ color: "#0a0a0a", width: "20px", height: "20px" }} />
                    </div>

                    <h3
                      className="font-heading text-xl md:text-2xl font-semibold mb-3 group-hover:text-[#C9A96E] transition-colors duration-200"
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-7"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      {service.description}
                    </p>
                    <div
                      className="flex items-center gap-2 text-xs tracking-widest uppercase"
                      style={{ color: "#C9A96E" }}
                    >
                      <span>Explore Treatment</span>
                      <motion.span
                        className="inline-block"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
