import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import GoldButton from "@/components/ui/GoldButton";

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ color: "white" }}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=85&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-[#0a0a0a]/85" />

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

      <div className="container-luxury relative z-10 text-center" style={{ color: "white" }}>
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] font-medium mb-6">
            Your Journey Begins Here
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-8 max-w-4xl mx-auto">
            Your Dream Smile
            <br />
            is One Consultation Away.
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <p className="text-white/60 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Schedule your complimentary smile assessment today. Our specialists will design
            a personalised treatment plan that fits your life and your vision.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GoldButton href="/contact">
              Book Free Consultation
            </GoldButton>
            <GoldButton
              href="https://wa.me/971565378313?text=Hello%20TDC%2C%20I%27d%20like%20to%20book%20a%20consultation"
              variant="outline"
              external
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </GoldButton>
          </div>
        </AnimateOnScroll>

        {/* Trust indicators */}
        <AnimateOnScroll delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12 border-t border-white/10">
            {[
              "DHA Licensed Clinic",
              "No-Commitment Consultation",
              "Flexible Payment Plans",
              "5-Star Experience Guaranteed",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/40 text-sm">
                <span className="w-1 h-1 rounded-full bg-[#C9A96E]" />
                {item}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
