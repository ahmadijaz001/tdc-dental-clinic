import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import GoldButton from "@/components/ui/GoldButton";

const pillars = [
  {
    number: "01",
    title: "Artistry",
    description: "Every smile is a work of art. We blend dental science with aesthetic precision.",
  },
  {
    number: "02",
    title: "Technology",
    description: "State-of-the-art digital dentistry, 3D imaging, and same-day restorations.",
  },
  {
    number: "03",
    title: "Comfort",
    description: "A clinical experience that feels nothing like a clinic. Luxury from arrival to departure.",
  },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left: Image */}
          <AnimateOnScroll direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="aspect-[4/5] relative overflow-hidden bg-[#c8bfb0]">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&q=85&auto=format&fit=crop"
                  alt="TDC Dental specialist performing treatment"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Gold accent block — bottom right */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#C9A96E]/10 border border-[#C9A96E]/30 -z-0" />

              {/* DHA Badge — top right */}
              <div className="absolute -top-5 -right-5 bg-[#0a0a0a] text-white px-6 py-5 z-10 shadow-xl">
                <p className="font-heading text-2xl font-bold leading-none">DHA</p>
                <p className="text-[#C9A96E] text-[9px] tracking-[0.3em] uppercase mt-1.5">Licensed</p>
              </div>

              {/* Stats chip — bottom left */}
              <div className="absolute -bottom-5 left-6 bg-white border border-[#e5e5e5] shadow-lg px-5 py-4 z-10">
                <p className="font-heading text-2xl font-bold text-[#0a0a0a] leading-none">15+</p>
                <p className="text-[#737373] text-[11px] tracking-wide mt-1">Years of Excellence</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Content */}
          <div className="lg:pl-4">
            <AnimateOnScroll>
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#C9A96E] font-medium mb-4">
                About TDC
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#0a0a0a] leading-tight mb-6">
                Where Precision
                <br />
                <em className="not-italic text-[#C9A96E]">Meets Beauty.</em>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="text-[#737373] text-lg leading-relaxed mb-6">
                TDC Dental Clinic is Dubai's most distinguished cosmetic dental destination. For over 15 years,
                we have served the UAE's most discerning residents with smile transformations that redefine confidence.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <p className="text-[#737373] text-lg leading-relaxed mb-12">
                Our philosophy is simple: your smile should reflect who you truly are — polished, confident, and unforgettable.
              </p>
            </AnimateOnScroll>

            {/* Pillars */}
            <div className="space-y-8 mb-12">
              {pillars.map((p, i) => (
                <AnimateOnScroll key={p.number} delay={0.3 + i * 0.1}>
                  <div className="flex gap-6 group">
                    <span className="font-heading text-5xl font-bold text-[#e8e8e8] leading-none shrink-0 group-hover:text-[#C9A96E]/20 transition-colors duration-300">
                      {p.number}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-[#0a0a0a] mb-1.5">{p.title}</h3>
                      <p className="text-[#737373] text-sm leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={0.6}>
              <GoldButton href="/doctors">Meet Our Specialists</GoldButton>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
