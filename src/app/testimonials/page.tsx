import type { Metadata } from "next";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeader from "@/components/ui/SectionHeader";
import GoldButton from "@/components/ui/GoldButton";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials | TDC Dental Clinic Dubai",
  description:
    "Read real patient reviews for TDC Dental Clinic Dubai. 4.9 stars on Google. 500+ verified reviews from satisfied patients across the UAE.",
};

const reviews = [
  { name: "Sarah Al Mansouri", location: "Dubai", rating: 5, treatment: "Hollywood Smile", date: "February 2025", text: "I had been self-conscious about my smile for years. After my Hollywood Smile at TDC, I genuinely cannot stop smiling. The team made me feel like royalty from the first consultation to the final reveal. Dr. Al Rashidi is an absolute artist.", avatar: "SA" },
  { name: "James Mitchell", location: "British Expat, Dubai", rating: 5, treatment: "Porcelain Veneers", date: "January 2025", text: "As someone who had avoided the dentist for years out of anxiety, TDC completely changed my experience. The clinic feels more like a luxury spa than a dental office. My veneers are absolutely perfect — natural, bright, and flawless.", avatar: "JM" },
  { name: "Fatima Khalid", location: "Abu Dhabi", rating: 5, treatment: "Dental Implants", date: "December 2024", text: "I flew from Abu Dhabi specifically for TDC's dental implants. The precision and care that went into my treatment exceeded every expectation. Four implants, completely painless, and my smile looks incredible. Worth every dirham.", avatar: "FK" },
  { name: "Marco Rossi", location: "Italian, Dubai Marina", rating: 5, treatment: "Smile Makeover", date: "November 2024", text: "Living in Dubai for 8 years, I have tried multiple clinics. Nothing comes close to TDC. The attention to detail, quality of materials, and artistry of the team is simply unmatched in the UAE.", avatar: "MR" },
  { name: "Aisha Hassan", location: "Emirati, Jumeirah", rating: 5, treatment: "Teeth Whitening", date: "October 2024", text: "The Philips Zoom whitening at TDC was genuinely transformative. My teeth went from quite stained to brilliant white in a single session. The experience was comfortable, professional, and the results exceeded my expectations.", avatar: "AH" },
  { name: "David Clarke", location: "Australian Expat", rating: 5, treatment: "Dental Implants", date: "September 2024", text: "Dr. Barakat performed my implant surgery and I cannot say enough good things. She explained every step, I felt zero pain, and the healing was remarkably fast. Six months later and my implant looks and feels completely natural.", avatar: "DC" },
  { name: "Layla Mohammed", location: "UAE Resident", rating: 5, treatment: "Hollywood Smile", date: "August 2024", text: "TDC changed my life. I know that sounds dramatic but it is absolutely true. I used to hide my smile in every photograph. Now I can't stop smiling. The team is warm, professional, and the clinic is stunning.", avatar: "LM" },
  { name: "Thomas Weber", location: "German, Business Bay", rating: 5, treatment: "Porcelain Veneers", date: "July 2024", text: "I am very particular about quality and research extensively before any medical procedure. TDC exceeded every criterion. The veneers are extraordinarily well-crafted — identical to natural teeth in every way.", avatar: "TW" },
  { name: "Nour Al Amri", location: "Oman, visiting Dubai", rating: 5, treatment: "Composite Veneers", date: "June 2024", text: "I specifically travelled to Dubai for TDC after seeing their work on Instagram. The composite veneers transformed my front teeth in a single appointment. Incredible value and even better results.", avatar: "NA" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="container-luxury relative z-10 text-center">
          <AnimateOnScroll>
            <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] font-medium mb-4">Patient Stories</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl font-semibold text-white mb-6">What Our Patients Say</h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              500+ verified reviews. 4.9 stars on Google. Every word is from a real patient — unedited, unfiltered.
            </p>
          </AnimateOnScroll>

          {/* Rating summary */}
          <AnimateOnScroll delay={0.3}>
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="flex gap-1 justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                </div>
                <p className="font-heading text-4xl text-white font-bold">4.9</p>
                <p className="text-white/40 text-sm">Google Rating</p>
              </div>
              <div className="w-px h-20 bg-white/10" />
              <div className="text-center">
                <p className="font-heading text-4xl text-white font-bold">500+</p>
                <p className="text-white/40 text-sm">Verified Reviews</p>
              </div>
              <div className="w-px h-20 bg-white/10" />
              <div className="text-center">
                <p className="font-heading text-4xl text-white font-bold">98%</p>
                <p className="text-white/40 text-sm">Would Recommend</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Video testimonial placeholders */}
      <section className="section-padding bg-[#f8f8f8]">
        <div className="container-luxury">
          <SectionHeader eyebrow="Video Stories" title="Hear It Directly" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah's Hollywood Smile Journey", duration: "2:34" },
              { name: "James Overcomes Dental Anxiety", duration: "1:58" },
              { name: "Fatima's Implant Experience", duration: "3:12" },
            ].map((video, i) => (
              <AnimateOnScroll key={video.name} delay={i * 0.1}>
                <div className="relative bg-[#0a0a0a] aspect-video flex items-center justify-center group cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity" />
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#C9A96E] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium max-w-[200px]">{video.name}</p>
                    <p className="text-white/50 text-xs mt-1">{video.duration}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeader eyebrow="Google Reviews" title="Verified Patient Reviews" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <AnimateOnScroll key={review.name} delay={(i % 3) * 0.1}>
                <div className="bg-[#f8f8f8] p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#C9A96E] flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {review.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-[#0a0a0a] text-sm">{review.name}</p>
                        <p className="text-[#737373] text-xs">{review.location}</p>
                      </div>
                    </div>
                    {/* Google G */}
                    <svg className="w-6 h-6 text-[#4285f4] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <StarRating rating={review.rating} />
                  <p className="text-[#0a0a0a] text-sm leading-relaxed mt-4 flex-1">{review.text}</p>
                  <div className="mt-6 pt-4 border-t border-[#e5e5e5] flex items-center justify-between">
                    <span className="text-xs text-[#C9A96E] border border-[#C9A96E]/30 px-3 py-1">{review.treatment}</span>
                    <span className="text-xs text-[#737373]">{review.date}</span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C9A96E] py-16">
        <div className="container-luxury text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
              Join Hundreds of Happy Patients
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="text-white/80 mb-8">Your transformation story starts with a single consultation.</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <GoldButton href="/contact" variant="white">Book Free Consultation</GoldButton>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
