"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeader from "@/components/ui/SectionHeader";
import GoldButton from "@/components/ui/GoldButton";

const categories = ["All", "Veneers", "Hollywood Smile", "Implants", "Whitening"];

const cases = [
  { id: 1, category: "Veneers", before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80", after: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=600&q=80", label: "8 Upper Veneers", detail: "E.max Porcelain — 2 appointments" },
  { id: 2, category: "Hollywood Smile", before: "https://images.unsplash.com/photo-1559589689-577aabd1db4f?w=600&q=80", after: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=600&q=80", label: "Full Hollywood Smile", detail: "16 veneers + whitening" },
  { id: 3, category: "Implants", before: "https://images.unsplash.com/photo-1588776814546-1ffbb813e1b5?w=600&q=80", after: "https://images.unsplash.com/photo-1573461168729-3b4a9d07e601?w=600&q=80", label: "Single Implant", detail: "Nobel Biocare + E.max crown" },
  { id: 4, category: "Whitening", before: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80", after: "https://images.unsplash.com/photo-1498449614379-8c5f8c7ceba6?w=600&q=80", label: "Zoom Whitening", detail: "10 shades brighter, 1 session" },
  { id: 5, category: "Veneers", before: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80", after: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80", label: "Composite Veneers", detail: "6 anterior teeth" },
  { id: 6, category: "Hollywood Smile", before: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80", after: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=600&q=80", label: "Smile Makeover", detail: "12 veneers + gum contouring" },
];

function ComparisonSlider({ before, after, label, detail }: { before: string; after: string; label: string; detail: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative aspect-[3/4] overflow-hidden cursor-col-resize select-none bg-[#f0f0f0]"
        onMouseMove={(e) => { if (isDragging.current) updatePosition(e.clientX); }}
        onMouseDown={(e) => { isDragging.current = true; updatePosition(e.clientX); }}
        onMouseUp={() => { isDragging.current = false; }}
        onMouseLeave={() => { isDragging.current = false; }}
        onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
        onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
      >
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img src={before} alt="Before" className="absolute inset-0 h-full object-cover" style={{ width: `${10000 / Math.max(position, 0.1)}%`, maxWidth: "none" }} />
        </div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-white z-10 shadow-lg" style={{ left: `${position}%` }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center">
            <svg className="w-3 h-3 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 bg-[#0a0a0a]/70 text-white text-[10px] tracking-widest uppercase px-2 py-1">Before</div>
        <div className="absolute bottom-3 right-3 bg-[#C9A96E] text-white text-[10px] tracking-widest uppercase px-2 py-1">After</div>
      </div>
      <div className="pt-4">
        <p className="font-medium text-[#0a0a0a] text-sm">{label}</p>
        <p className="text-[#737373] text-xs mt-1">{detail}</p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? cases : cases.filter((c) => c.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="container-luxury relative z-10 text-center">
          <AnimateOnScroll>
            <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] font-medium mb-4">Real Results</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl font-semibold text-white mb-6">Smile Gallery</h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-white/60 text-xl max-w-xl mx-auto">
              Real patients. Real transformations. Drag the slider to see the difference.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          {/* Filter tabs */}
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-2 justify-center mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#C9A96E] text-white"
                      : "border border-[#e5e5e5] text-[#737373] hover:border-[#C9A96E] hover:text-[#C9A96E]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            layout
          >
            {filtered.map((c, i) => (
              <motion.div
                key={c.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <ComparisonSlider before={c.before} after={c.after} label={c.label} detail={c.detail} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8f8f8] section-padding">
        <div className="container-luxury text-center">
          <SectionHeader
            eyebrow="Your Turn"
            title="Could This Be Your Smile?"
            subtitle="Every transformation in this gallery started with a free consultation. Yours could too."
            centered
          />
          <GoldButton href="/contact">Book Free Consultation</GoldButton>
        </div>
      </section>
    </>
  );
}
