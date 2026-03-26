import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeader from "@/components/ui/SectionHeader";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    label: "Location",
    value: "Office 408, Warba Center, Al-Muraqqabat, Deira, Dubai",
    href: "https://maps.app.goo.gl/EskhK4nYDprhMJSw9",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 56 537 8313",
    href: "tel:+971565378313",
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: "Info@tdcdental.ae",
    href: "mailto:Info@tdcdental.ae",
    external: false,
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "Mon – Sat: 7:00 AM – 7:00 PM",
    href: null,
    external: false,
  },
];

export default function MapSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--tdc-section-light)" }}>
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Find Us"
          title="Visit Our Clinic"
          subtitle="Conveniently located in the heart of Dubai — your world-class smile awaits."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 overflow-hidden border border-[#e5e5e5]">
          {/* Contact sidebar */}
          <div className="lg:col-span-2 p-10 flex flex-col" style={{ backgroundColor: "var(--tdc-bg)" }}>
            <AnimateOnScroll>
              <div className="mb-8">
                <p className="font-heading font-bold text-2xl tracking-widest" style={{ color: "var(--tdc-text)" }}>TDC</p>
                <p className="text-[10px] tracking-[0.3em] uppercase mt-0.5" style={{ color: "var(--tdc-gold)" }}>Dental Clinic</p>
              </div>
            </AnimateOnScroll>

            <div className="h-px mb-8" style={{ backgroundColor: "var(--tdc-border)" }} />

            <div className="space-y-7 flex-1">
              {contactItems.map(({ icon: Icon, label, value, href, external }, i) => (
                <AnimateOnScroll key={label} delay={i * 0.08}>
                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 border border-[#C9A96E]/30 flex items-center justify-center shrink-0 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]/5 transition-all duration-300">
                      <Icon className="w-4 h-4 text-[#C9A96E]" />
                    </div>
                    <div>
                      <p className="text-[#C9A96E]/60 text-[10px] tracking-[0.25em] uppercase mb-1">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="text-sm hover:text-[#C9A96E] transition-colors leading-relaxed" style={{ color: "var(--tdc-text-soft)" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--tdc-text-soft)" }}>{value}</p>
                      )}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-10 pt-8 space-y-3" style={{ borderTop: "1px solid var(--tdc-border)" }}>
              <a
                href="tel:+971565378313"
                className="flex items-center justify-center gap-2.5 w-full bg-[#C9A96E] hover:bg-[#B8960C] text-white text-[11px] font-bold tracking-[0.2em] uppercase py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A96E]/30"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now: +971 56 537 8313
              </a>
              <a
                href="https://wa.me/971565378313?text=Hello%20TDC%2C%20I%27d%20like%20to%20book%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full border border-[#25D366]/60 text-[#25D366] hover:bg-[#25D366] hover:text-white text-[11px] font-bold tracking-[0.2em] uppercase py-4 transition-all duration-300"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp Us
              </a>
              <a
                href="mailto:Info@tdcdental.ae"
                className="flex items-center justify-center gap-2.5 w-full border border-white/15 text-white/50 hover:border-[#C9A96E]/50 hover:text-[#C9A96E] text-[11px] font-bold tracking-[0.2em] uppercase py-4 transition-all duration-300"
              >
                <Mail className="w-3.5 h-3.5" />
                Send Email
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="lg:col-span-3 min-h-[420px]">
            <iframe
              src="https://maps.google.com/maps?q=Warba+Center+Al-Muraqqabat+Deira+Dubai&t=m&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "420px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TDC Dental Clinic — Dubai Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
