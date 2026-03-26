import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import GoldButton from "@/components/ui/GoldButton";
import { Award, GraduationCap, Users } from "lucide-react";

export default function DoctorHighlight() {
  return (
    <section style={{ backgroundColor: "var(--tdc-bg)", padding: "80px 0" }}>
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <AnimateOnScroll>
              <p className="text-xs tracking-[0.3em] uppercase font-medium mb-4" style={{ color: "var(--tdc-gold)" }}>
                Our Lead Specialist
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2
                className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-6"
                style={{ color: "var(--tdc-text)" }}
              >
                Dr. Ahmed Al Rashidi
                <br />
                <em className="not-italic text-2xl md:text-3xl font-normal" style={{ color: "var(--tdc-gold)" }}>
                  Cosmetic &amp; Restorative Dentistry
                </em>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--tdc-text-soft)" }}>
                With over 18 years of experience and training at the world's leading dental institutions,
                Dr. Al Rashidi has performed more than 3,000 smile makeovers for patients across the UAE and internationally.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <p className="text-lg leading-relaxed mb-12" style={{ color: "var(--tdc-text-soft)" }}>
                His philosophy: a smile should be an authentic expression of confidence, crafted with artistry,
                compassion, and the highest clinical standards.
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-3 gap-6 mb-12">
              {[
                { icon: GraduationCap, label: "Harvard Dental", sub: "Fellowship" },
                { icon: Award, label: "Best Dentist", sub: "Dubai 2023" },
                { icon: Users, label: "3,000+", sub: "Transformations" },
              ].map(({ icon: Icon, label, sub }) => (
                <AnimateOnScroll key={label}>
                  <div className="p-4 text-center" style={{ border: "1px solid var(--tdc-border)" }}>
                    <Icon className="w-6 h-6 mx-auto mb-3" style={{ color: "var(--tdc-gold)" }} />
                    <p className="text-sm font-medium" style={{ color: "var(--tdc-text)" }}>{label}</p>
                    <p className="text-xs mt-1" style={{ color: "var(--tdc-text-muted)" }}>{sub}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={0.5}>
              <GoldButton href="/doctors" variant="outline">
                Meet the Full Team
              </GoldButton>
            </AnimateOnScroll>
          </div>

          {/* Doctor image */}
          <AnimateOnScroll direction="right">
            <div className="relative">
              <div
                className="aspect-[3/4] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=85&auto=format&fit=crop')",
                  backgroundColor: "var(--tdc-surface)",
                }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-full h-full -z-10"
                style={{ border: "1px solid var(--tdc-gold-sep)" }}
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
