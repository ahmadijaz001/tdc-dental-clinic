"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Shield,
  Star,
  Zap,
  Layers,
  Wrench,
  Award,
  Heart,
  Activity,
  Droplet,
  AlertCircle,
} from "lucide-react";

const allServices = [
  {
    id: 1,
    number: "01",
    title: "Porcelain Veneers",
    desc: "Ultra-thin ceramic shells crafted for an instantly flawless smile",
    href: "/services/veneers",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80&auto=format&fit=crop",
    tag: "Most Popular",
    Icon: Sparkles,
  },
  {
    id: 2,
    number: "02",
    title: "Dental Implants",
    desc: "Permanent replacement that looks and feels completely natural",
    href: "/services/dental-implants",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb813e1b5?w=400&q=80&auto=format&fit=crop",
    tag: null,
    Icon: Shield,
  },
  {
    id: 3,
    number: "03",
    title: "Hollywood Smile",
    desc: "The complete celebrity smile makeover — redefined confidence",
    href: "/services/hollywood-smile",
    image: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=400&q=80&auto=format&fit=crop",
    tag: "Signature",
    Icon: Star,
    dark: true,
  },
  {
    id: 4,
    number: "04",
    title: "Teeth Whitening",
    desc: "Dramatically brighter results in a single visit — up to 10 shades",
    href: "/services/teeth-whitening",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=400&q=80&auto=format&fit=crop",
    tag: null,
    Icon: Zap,
  },
  {
    id: 5,
    number: "05",
    title: "Invisible Braces",
    desc: "Clear aligners for discreet, comfortable teeth straightening",
    href: "/services/veneers",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80&auto=format&fit=crop",
    tag: null,
    Icon: Layers,
    dark: true,
  },
  {
    id: 6,
    number: "06",
    title: "Restorative Dentistry",
    desc: "Fillings, crowns and bridges — rebuilding your smile with care",
    href: "/services/dental-implants",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80&auto=format&fit=crop",
    tag: null,
    Icon: Wrench,
  },
  {
    id: 7,
    number: "07",
    title: "Dental Crowns",
    desc: "Precision-crafted caps to protect and restore damaged teeth",
    href: "/services/dental-implants",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=400&q=80&auto=format&fit=crop",
    tag: null,
    Icon: Award,
    dark: true,
  },
  {
    id: 8,
    number: "08",
    title: "Gum Treatment",
    desc: "Advanced periodontal care for a lasting, healthy foundation",
    href: "/services/veneers",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80&auto=format&fit=crop",
    tag: null,
    Icon: Heart,
  },
  {
    id: 9,
    number: "09",
    title: "Root Canal",
    desc: "Pain-free endodontic treatment to save your natural tooth",
    href: "/services/dental-implants",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop",
    tag: null,
    Icon: Activity,
    dark: true,
  },
  {
    id: 10,
    number: "10",
    title: "Teeth Cleaning",
    desc: "Professional prophylaxis for fresh breath and lasting health",
    href: "/services/teeth-whitening",
    image: "https://images.unsplash.com/photo-1614289371518-722f2615943d?w=400&q=80&auto=format&fit=crop",
    tag: null,
    Icon: Droplet,
  },
  {
    id: 11,
    number: "11",
    title: "Emergency Care",
    desc: "Immediate expert dental care whenever you need it most",
    href: "/contact",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80&auto=format&fit=crop",
    tag: null,
    Icon: AlertCircle,
    dark: true,
  },
];

export default function ServiceCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 280 : -280, behavior: "smooth" });
  };

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanLeft(scrollLeft > 10);
    setCanRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  return (
    <section className="py-20" style={{ overflow: "hidden", backgroundColor: "var(--tdc-section-light)" }}>
      {/* Header row */}
      <div className="container-luxury mb-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#C9A96E] font-medium mb-3">
              Complete Care
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-tight" style={{ color: "var(--tdc-section-light-text)" }}>
              All Our Services
            </h2>
            <p className="mt-4 text-base leading-relaxed max-w-xl" style={{ color: "var(--tdc-section-light-soft)" }}>
              From routine check-ups to full smile transformations — all under one roof.
            </p>
          </div>
          <div className="flex items-center gap-2 pb-1 shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canLeft}
              className="w-11 h-11 border border-[#ddd] flex items-center justify-center text-[#999] hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:opacity-20 transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canRight}
              className="w-11 h-11 border border-[#ddd] flex items-center justify-center text-[#999] hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:opacity-20 transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll track */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-5 hide-scrollbar"
        style={{
          overflowX: "auto",
          paddingBottom: "16px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {allServices.map((service, i) => {
          const { Icon } = service;
          // All cards use the same CSS vars — color flips automatically with theme
          const cardBg      = "var(--tdc-surface)";
          const titleColor  = "var(--tdc-text)";
          const descColor   = "var(--tdc-text-soft)";
          const borderColor = "var(--tdc-gold-sep)";
          const iconBg      = "var(--tdc-gold-icon-bg)";
          const iconColor   = "var(--tdc-gold-icon-color)";
          const labelColor  = "var(--tdc-text-muted)";

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.35) }}
              style={{ flexShrink: 0, width: "256px" }}
            >
              <Link
                href={service.href}
                className="group flex flex-col border transition-all duration-300 hover:shadow-xl hover:border-[#C9A96E]"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: cardBg,
                  borderColor: borderColor,
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "176px", backgroundColor: "#d4cfc8" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                    {service.tag && (
                    <span
                      className="absolute top-3 left-3 text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1"
                      style={{ backgroundColor: "#C9A96E" }}
                    >
                      {service.tag}
                    </span>
                  )}
                  {/* Large number watermark */}
                  <span
                    className="absolute bottom-3 right-3 font-heading text-3xl font-bold leading-none"
                    style={{ color: labelColor }}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Card content */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Icon badge */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: iconBg }}
                  >
                    <Icon style={{ color: iconColor, width: "15px", height: "15px" }} />
                  </div>

                  <h3
                    className="font-heading font-semibold mb-2 leading-snug group-hover:text-[#C9A96E] transition-colors duration-200"
                    style={{ fontSize: "1.02rem", color: titleColor }}
                  >
                    {service.title}
                  </h3>
                  <p className="leading-relaxed flex-1" style={{ fontSize: "13px", color: descColor }}>
                    {service.desc}
                  </p>
                  <div
                    className="flex items-center gap-1.5 mt-4 font-semibold tracking-widest uppercase"
                    style={{ color: "#C9A96E", fontSize: "11px" }}
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
