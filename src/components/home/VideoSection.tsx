"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

// Replace with your actual YouTube video ID
const YOUTUBE_VIDEO_ID = "7MqMl8p33Eg";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "5,000+", label: "Happy Patients" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "DHA", label: "Licensed & Certified" },
];

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section style={{ backgroundColor: "var(--tdc-bg)" }} className="relative overflow-hidden">
      {/* Top gold rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
      {/* Bottom gold rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

      {/* Section header — explicitly dark bg, white text */}
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
              {!playing ? (
                <>
                  {/* Thumbnail */}
                  <img
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=85&auto=format&fit=crop"
                    alt="TDC Dental Clinic Tour"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Strong dark overlay so play button is clear */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.35) 100%)",
                    }}
                  />

                  {/* Play button */}
                  <motion.button
                    onClick={() => setPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover="hover"
                    initial="idle"
                  >
                    <motion.div
                      className="relative"
                      variants={{ idle: { scale: 1 }, hover: { scale: 1.1 } }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <span className="absolute inset-0 rounded-full border-2 border-[#C9A96E] animate-ping opacity-60" />
                      <div
                        className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-2xl"
                        style={{ backgroundColor: "#C9A96E", boxShadow: "0 0 40px rgba(201,169,110,0.5)" }}
                      >
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </motion.div>
                  </motion.button>

                  {/* Bottom overlay text */}
                  <div className="absolute bottom-8 left-8 pointer-events-none">
                    <p
                      className="uppercase tracking-widest mb-1.5"
                      style={{ color: "#C9A96E", fontSize: "10px" }}
                    >
                      Watch Now
                    </p>
                    <p
                      className="font-heading font-semibold"
                      style={{ color: "#ffffff", fontSize: "1.35rem" }}
                    >
                      TDC Dental Clinic Tour
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginTop: "4px" }}>
                      Dubai's Premier Cosmetic Dental Studio
                    </p>
                  </div>
                </>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                  title="TDC Dental Clinic Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: 0, display: "block" }}
                />
              )}
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
                className="text-center py-10 px-4 transition-colors"
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
