"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeader from "@/components/ui/SectionHeader";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

const services = [
  "Hollywood Smile",
  "Porcelain Veneers",
  "Dental Implants",
  "Teeth Whitening",
  "Smile Makeover",
  "General Consultation",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to your CRM/email service
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="container-luxury relative z-10 text-center">
          <AnimateOnScroll>
            <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] font-medium mb-4">Get in Touch</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl font-semibold text-white mb-6">
              Book Your Consultation
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Take the first step toward your transformation. Your complimentary consultation is completely free — no commitment required.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateOnScroll>
                <h2 className="font-heading text-3xl font-semibold text-[#0a0a0a] mb-8">
                  Request Your Free Consultation
                </h2>
              </AnimateOnScroll>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#f8f8f8] p-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-[#C9A96E] mx-auto mb-6" />
                  <h3 className="font-heading text-2xl font-semibold text-[#0a0a0a] mb-3">
                    Thank You, {form.name}!
                  </h3>
                  <p className="text-[#737373] leading-relaxed">
                    We have received your consultation request. A member of our team will contact you within 2 hours to confirm your appointment.
                  </p>
                  <p className="text-[#C9A96E] font-medium mt-6">
                    Or WhatsApp us now for an instant response →
                  </p>
                  <a
                    href="https://wa.me/971565378313"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white text-sm font-medium px-8 py-4 mt-4 hover:bg-[#20BA5A] transition-colors"
                  >
                    Open WhatsApp
                  </a>
                </motion.div>
              ) : (
                <AnimateOnScroll delay={0.1}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs tracking-widest uppercase text-[#737373] font-medium mb-2">
                          Full Name <span className="text-[#C9A96E]">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full border border-[#e5e5e5] px-4 py-3.5 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-[#737373] font-medium mb-2">
                          Phone / WhatsApp <span className="text-[#C9A96E]">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full border border-[#e5e5e5] px-4 py-3.5 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                          placeholder="+971 50 000 0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs tracking-widest uppercase text-[#737373] font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-[#e5e5e5] px-4 py-3.5 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs tracking-widest uppercase text-[#737373] font-medium mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full border border-[#e5e5e5] px-4 py-3.5 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors bg-white appearance-none"
                      >
                        <option value="">Select a treatment...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs tracking-widest uppercase text-[#737373] font-medium mb-2">
                        Tell Us About Your Smile Goals
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full border border-[#e5e5e5] px-4 py-3.5 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors resize-none"
                        placeholder="Tell us what you'd like to achieve with your smile..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#C9A96E] hover:bg-[#B8960C] text-white text-sm font-medium py-5 tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A96E]/30"
                    >
                      Request Free Consultation
                    </button>
                    <p className="text-[#737373] text-xs text-center">
                      We respond within 2 hours during clinic hours. Your information is completely confidential.
                    </p>
                  </form>
                </AnimateOnScroll>
              )}
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <AnimateOnScroll direction="right">
                <div className="bg-[#0a0a0a] p-10 mb-8">
                  <h3 className="font-heading text-2xl font-semibold text-white mb-8">Clinic Information</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <MapPin className="w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-medium mb-1">Location</p>
                        <p className="text-white/50 text-sm leading-relaxed">Dubai, United Arab Emirates</p>
                        <a
                          href="https://maps.app.goo.gl/N9BdMsVMUUDzJNUi8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#C9A96E] text-xs mt-2 inline-block hover:underline"
                        >
                          View on Google Maps →
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Phone className="w-5 h-5 text-[#C9A96E] shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium mb-1">Phone</p>
                        <a href="tel:+971565378313" className="text-white/50 text-sm hover:text-white transition-colors">+971 56 537 8313</a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Mail className="w-5 h-5 text-[#C9A96E] shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium mb-1">Email</p>
                        <a href="mailto:hello@tdcdentalclinic.ae" className="text-white/50 text-sm hover:text-white transition-colors">hello@tdcdentalclinic.ae</a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Clock className="w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-medium mb-1">Opening Hours</p>
                        <p className="text-white/50 text-sm">Mon – Fri: 9:00 AM – 8:00 PM</p>
                        <p className="text-white/50 text-sm">Sat – Sun: 10:00 AM – 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/971565378313?text=Hello%20TDC%2C%20I%27d%20like%20to%20book%20a%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366] hover:bg-[#20BA5A] text-white p-6 transition-colors group"
                >
                  <svg className="w-8 h-8 shrink-0" fill="white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <div>
                    <p className="font-medium text-sm">Chat on WhatsApp</p>
                    <p className="text-white/80 text-xs">Instant reply during clinic hours</p>
                  </div>
                  <svg className="w-5 h-5 ml-auto transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.7!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTQuOSJF!5e0!3m2!1sen!2sae!4v1234567890!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TDC Dental Clinic Location"
        />
        {/* Overlay with address */}
        <div className="absolute bottom-8 left-8 bg-white shadow-2xl p-6 max-w-xs">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5" />
            <div>
              <p className="font-heading font-bold text-[#0a0a0a]">TDC Dental Clinic</p>
              <p className="text-[#737373] text-sm mt-1">Dubai, UAE</p>
              <a
                href="https://maps.app.goo.gl/N9BdMsVMUUDzJNUi8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A96E] text-xs mt-2 inline-block hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
