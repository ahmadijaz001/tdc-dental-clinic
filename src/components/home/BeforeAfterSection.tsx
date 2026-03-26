"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import GoldButton from "@/components/ui/GoldButton";

const cases = [
  {
    id: 1,
    label: "Porcelain Veneers",
    before: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=85&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=85&auto=format&fit=crop",
  },
  {
    id: 2,
    label: "Hollywood Smile",
    before: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=85&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=85&auto=format&fit=crop",
  },
  {
    id: 3,
    label: "Dental Implants",
    before: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=85&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1614289371518-722f2615943d?w=600&q=85&auto=format&fit=crop",
  },
];

function ComparisonSlider({ before, after }: { before: string; after: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/4] overflow-hidden cursor-col-resize select-none"
      onMouseMove={(e) => { if (isDragging.current) updatePosition(e.clientX); }}
      onMouseDown={(e) => { isDragging.current = true; updatePosition(e.clientX); }}
      onMouseUp={() => { isDragging.current = false; }}
      onMouseLeave={() => { isDragging.current = false; }}
      onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
    >
      {/* After image (full) */}
      <img src={after} alt="After treatment" className="absolute inset-0 w-full h-full object-cover" />
      {/* Before image (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img src={before} alt="Before treatment" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: `${10000 / position}%`, left: 0 }} />
      </div>
      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
          <svg className="w-4 h-4 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
          </svg>
        </div>
      </div>
      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-[#0a0a0a]/70 text-white text-xs tracking-widest uppercase px-3 py-1.5">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-[#C9A96E] text-white text-xs tracking-widest uppercase px-3 py-1.5">
        After
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section className="section-padding bg-[#f8f8f8]">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Real Transformations"
          title="See the Difference"
          subtitle="Drag the slider to reveal each patient's transformation. Every smile tells a story of renewed confidence."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cases.map((c, i) => (
            <AnimateOnScroll key={c.id} delay={i * 0.15}>
              <div>
                <ComparisonSlider before={c.before} after={c.after} />
                <p className="text-center text-sm font-medium text-[#0a0a0a] mt-4 tracking-wide">
                  {c.label}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="text-center">
            <GoldButton href="/gallery">View Full Gallery</GoldButton>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
