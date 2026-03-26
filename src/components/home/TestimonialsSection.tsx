"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const testimonials = [
  {
    name: "Sarah Al Mansouri",
    role: "Dubai Resident",
    rating: 5,
    text: "I had been self-conscious about my smile for years. After my Hollywood Smile at TDC, I genuinely cannot stop smiling. The team made me feel like royalty from the first consultation to the final reveal.",
    treatment: "Hollywood Smile",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&q=80",
  },
  {
    name: "James Mitchell",
    role: "British Expat, Dubai",
    rating: 5,
    text: "As someone who had avoided the dentist for years out of anxiety, TDC completely changed my experience. The clinic feels more like a luxury spa than a dental office. My veneers are absolutely perfect.",
    treatment: "Porcelain Veneers",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Fatima Khalid",
    role: "Abu Dhabi",
    rating: 5,
    text: "I flew from Abu Dhabi specifically for TDC's dental implants. The precision and care that went into my treatment exceeded every expectation. Four implants, completely painless, and my smile looks incredible.",
    treatment: "Dental Implants",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    name: "Marco Rossi",
    role: "Italian, Dubai Marina",
    rating: 5,
    text: "Living in Dubai for 8 years, I have tried multiple clinics. Nothing comes close to TDC. The attention to detail, the quality of materials, and the artistry of the team is simply unmatched in the UAE.",
    treatment: "Smile Makeover",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Patient Stories"
          title="Smiles That Speak"
          subtitle="Our patients' words mean everything. These are real experiences from real people whose lives were transformed."
          centered
        />

        {/* Featured testimonial (large) */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-[#f8f8f8] p-10 md:p-16 text-center"
            >
              {/* Quote mark */}
              <div className="font-heading text-8xl text-[#C9A96E]/20 leading-none mb-4 -mt-4">"</div>
              <p className="font-heading text-xl md:text-2xl text-[#0a0a0a] italic leading-relaxed mb-8">
                {testimonials[current].text}
              </p>
              <div className="flex flex-col items-center gap-3">
                <StarRating rating={testimonials[current].rating} />
                <div>
                  <p className="font-medium text-[#0a0a0a]">{testimonials[current].name}</p>
                  <p className="text-[#737373] text-sm">{testimonials[current].role}</p>
                  <span className="inline-block mt-2 text-xs tracking-widest uppercase text-[#C9A96E] border border-[#C9A96E]/30 px-3 py-1">
                    {testimonials[current].treatment}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 border border-[#e5e5e5] flex items-center justify-center hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 ${
                    i === current ? "w-8 h-2 bg-[#C9A96E]" : "w-2 h-2 bg-[#e5e5e5] hover:bg-[#C9A96E]/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 border border-[#e5e5e5] flex items-center justify-center hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Google rating badge */}
        <AnimateOnScroll>
          <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>
              <p className="text-2xl font-bold text-[#0a0a0a]">4.9</p>
              <p className="text-[#737373] text-xs">Google Rating</p>
            </div>
            <div className="w-px h-16 bg-[#e5e5e5]" />
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold text-[#0a0a0a]">500+</p>
              <p className="text-[#737373] text-xs">Verified Reviews</p>
            </div>
            <div className="w-px h-16 bg-[#e5e5e5]" />
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold text-[#0a0a0a]">98%</p>
              <p className="text-[#737373] text-xs">Would Recommend</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
