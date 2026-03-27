"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

// Update this to your actual YouTube video URL when ready
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@tdcdentalclinic";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "5,000+", label: "Happy Patients" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "DHA", label: "Licensed & Certified" },
];

export default function VideoSection() {
  return (
    <section style={{ backgroundColor: "var(--tdc-bg)" }} className="relative overflow-hidden">
      {/* Top gold rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
      {/* Bottom gold rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

      {/* Section header */}
      <div className="container-luxury pt-20 pb-10">
        <AnimateOnScroll>
          <div className="text-center">
            <p
              className="font-medium mb-4 tracking-widest uppercase"
              style={{ fontSize: "11px", color: "#C9A96E", letterSpacing: "0.35em" }}
            >
              Our Clinic Story
            </p>
            <h2
              className="font-heading font-semibold leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--tdc-text)" }}
            >
              Experience TDC
            </h2>
            <p
              className="leading-relaxed mx-auto"
              style={{
                color: "var(--tdc-text-soft)",
                fontSize: "1.1rem",
                maxWidth: "560px",
              }}
            >
              Step inside Dubai's most distinguished dental studio — see why thousands trust us
              with their smiles.
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Video frame */}
      <div className="container-luxury pb-0">
        <AnimateOnScroll>
          <div className="relative max-w-4xl mx-auto">
            {/* Gold outer frame */}
            <div
              className="absolute pointer-events-none"
              style={{ inset: "-10px", border: "1px solid rgba(201,169,110,0.3)" }}
            />
            <div
              className="absolute pointer-events-none"
              style={{ inset: "-4px", border: "1px solid rgba(201,169,110,0.12)" }}
            />

            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9", backgroundColor: "#111" }}>
              {/* Thumbnail */}
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=85&auto=format&fit=crop"
                alt="TDC Dental Clinic Tour"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,10,10,0.90) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.35) 100%)",
                }}
              />

              {/* Play button — opens YouTube */}
              <motion.a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
                whileHover="hover"
                initial="idle"
              >
                <motion.div
                  className="relative flex flex-col items-center gap-4"
                  variants={{ idle: { scale: 1 }, hover: { scale: 1.05 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full border-2 border-[#C9A96E] animate-ping opacity-60" />
                    <div
                      className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-2xl"
                      style={{ backgroundColor: "#C9A96E", boxShadow: "0 0 40px rgba(201,169,110,0.5)" }}
                    >
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-1.5 text-white text-xs tracking-widest uppercase font-medium"
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                  >
                    <ExternalLink className="w-3 h-3" />
                    Watch on YouTube
                  </div>
                </motion.div>
              </motion.a>

              {/* Bottom overlay text */}
              <div className="absolute bottom-8 left-8 pointer-events-none">
                <p
                  className="uppercase tracking-widest mb-1.5"
                  style={{ color: "#C9A96E", fontSize: "10px" }}
                >
                  Clinic Tour
                </p>
                <p
                  className="font-heading font-semibold"
                  style={{ color: "#ffffff", fontSize: "1.35rem" }}
                >
                  TDC Dental Clinic Dubai
                </p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginTop: "4px" }}>
                  Dubai's Premier Cosmetic Dental Studio
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Stats row */}
      <div className="container-luxury pt-16 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "1px", backgroundColor: "var(--tdc-border)" }}>
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.1}>
              <div
                className="text-center py-10 px-4"
                style={{ backgroundColor: "var(--tdc-bg)" }}
              >
                <p
                  className="font-heading font-bold mb-2"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--tdc-gold)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="uppercase tracking-widest"
                  style={{ color: "var(--tdc-text-muted)", fontSize: "11px" }}
                >
                  {stat.label}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
