import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const linkStyle = { color: "var(--tdc-text-soft)", fontSize: "14px", textDecoration: "none" };

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--tdc-bg)" }}>
      {/* Top CTA bar */}
      <div style={{ borderBottom: "1px solid var(--tdc-border)", backgroundColor: "rgba(201,169,110,0.08)" }}>
        <div className="container-luxury py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading text-xl" style={{ color: "var(--tdc-text)" }}>Ready to transform your smile?</p>
            <p className="text-sm mt-1" style={{ color: "var(--tdc-text-soft)" }}>Book your complimentary consultation today.</p>
          </div>
          <Link
            href="/contact"
            className="text-white text-sm font-medium px-8 py-3 transition-all duration-300 tracking-widest uppercase whitespace-nowrap"
            style={{ backgroundColor: "#C9A96E" }}
          >
            Book Now
          </Link>
        </div>
      </div>

      <div className="container-luxury py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-6">
            <p className="font-heading font-bold text-2xl tracking-widest" style={{ color: "var(--tdc-text)" }}>TDC</p>
            <p className="text-[10px] tracking-[0.3em] uppercase font-light" style={{ color: "var(--tdc-gold)" }}>Dental Clinic</p>
          </div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--tdc-text-soft)" }}>
            Dubai's premier luxury dental destination. Crafting confident smiles with world-class expertise and care.
          </p>
          <div className="flex gap-4">
            {[
              { href: "https://instagram.com/tdcdentalclinic", label: "Instagram", svg: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
              { href: "https://facebook.com/tdcdentalclinic", label: "Facebook", svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
              { href: "https://wa.me/971565378313", label: "WhatsApp", svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg> },
            ].map(({ href, label, svg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center transition-colors hover:text-[#C9A96E]"
                style={{ border: "1px solid var(--tdc-border)", color: "var(--tdc-text-soft)" }}
                aria-label={label}
              >
                {svg}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase font-medium mb-6" style={{ color: "var(--tdc-gold)" }}>Our Services</h3>
          <ul className="space-y-3">
            {[
              { label: "Veneers", href: "/services/veneers" },
              { label: "Dental Implants", href: "/services/dental-implants" },
              { label: "Hollywood Smile", href: "/services/hollywood-smile" },
              { label: "Teeth Whitening", href: "/services/teeth-whitening" },
              { label: "Smile Gallery", href: "/gallery" },
              { label: "Meet Our Doctors", href: "/doctors" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm transition-colors hover:text-[#C9A96E]" style={linkStyle}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase font-medium mb-6" style={{ color: "var(--tdc-gold)" }}>Information</h3>
          <ul className="space-y-3">
            {[
              { label: "Book Consultation", href: "/contact" },
              { label: "Testimonials", href: "/testimonials" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm transition-colors hover:text-[#C9A96E]" style={linkStyle}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase font-medium mb-6" style={{ color: "var(--tdc-gold)" }}>Visit Us</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--tdc-gold)" }} />
              <span className="text-sm leading-relaxed" style={{ color: "var(--tdc-text-soft)" }}>
                Office 408, Warba Center, Al-Muraqqabat, Deira, Dubai
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--tdc-gold)" }} />
              <a href="tel:+971565378313" className="text-sm transition-colors hover:text-[#C9A96E]" style={linkStyle}>
                +971 56 537 8313
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--tdc-gold)" }} />
              <a href="mailto:Info@tdcdental.ae" className="text-sm transition-colors hover:text-[#C9A96E]" style={linkStyle}>
                Info@tdcdental.ae
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--tdc-gold)" }} />
              <div className="text-sm" style={{ color: "var(--tdc-text-soft)" }}>
                <p>Mon – Sat: 7:00 AM – 7:00 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--tdc-border)" }}>
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "var(--tdc-text-muted)" }}>
            © {new Date().getFullYear()} TDC Dental Clinic. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--tdc-text-muted)" }}>
            Licensed by Dubai Health Authority (DHA)
          </p>
        </div>
      </div>
    </footer>
  );
}
