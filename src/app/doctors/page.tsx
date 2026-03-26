import type { Metadata } from "next";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeader from "@/components/ui/SectionHeader";
import GoldButton from "@/components/ui/GoldButton";
import { Award, GraduationCap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Doctors | World-Class Dental Specialists",
  description:
    "Meet TDC Dental Clinic's team of internationally trained cosmetic and restorative dental specialists in Dubai.",
};

const doctors = [
  {
    name: "Dr. Ahmed Al Rashidi",
    title: "Founder & Lead Cosmetic Dentist",
    speciality: "Cosmetic & Restorative Dentistry",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    education: ["BDS – University of Jordan", "MSc Cosmetic Dentistry – King's College London", "Fellowship – Harvard School of Dental Medicine"],
    credentials: ["DHA Licensed Specialist", "AACD Member", "ITI Fellow"],
    experience: "18+ Years",
    bio: "Dr. Al Rashidi founded TDC with a vision to bring world-class cosmetic dentistry to Dubai. Having trained at the finest institutions globally, he has performed over 3,000 smile makeovers and is widely regarded as one of the UAE's foremost cosmetic dental artists. His work has been featured in Vogue Arabia and Gulf Business.",
    languages: ["Arabic", "English"],
    specialties: ["Hollywood Smile", "Veneers", "Full Mouth Rehabilitation"],
  },
  {
    name: "Dr. Sarah Barakat",
    title: "Specialist in Dental Implantology",
    speciality: "Oral Surgery & Implants",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    education: ["BDS – Cairo University", "MSc Oral Surgery – UCL London", "Implantology Diploma – Straumann Institute"],
    credentials: ["DHA Licensed Specialist", "EAO Member", "Straumann Master Clinician"],
    experience: "12+ Years",
    bio: "Dr. Barakat brings unparalleled precision to implant dentistry. With over 2,000 successful implant placements, she is the trusted choice for patients seeking permanent tooth replacement. Her gentle approach and meticulous technique have earned her a reputation as one of Dubai's most sought-after implant surgeons.",
    languages: ["Arabic", "English", "French"],
    specialties: ["Dental Implants", "Bone Grafting", "All-on-4/6"],
  },
  {
    name: "Dr. James Chen",
    title: "Orthodontist & Smile Designer",
    speciality: "Orthodontics & Digital Smile Design",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
    education: ["BDS – National University of Singapore", "MOrth – Royal College of Surgeons Edinburgh", "Digital Smile Design Certified"],
    credentials: ["DHA Licensed Specialist", "WFO Member", "DSD Certified Clinician"],
    experience: "10+ Years",
    bio: "Dr. Chen is TDC's smile architect. A pioneer in Digital Smile Design in the UAE, he bridges the gap between aesthetics and function — ensuring every smile not only looks exceptional but feels perfect. His work with Invisalign and ceramic braces has helped hundreds of patients achieve the smile alignment they always dreamed of.",
    languages: ["English", "Mandarin"],
    specialties: ["Digital Smile Design", "Invisalign", "Aesthetic Orthodontics"],
  },
];

export default function DoctorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="container-luxury relative z-10 text-center">
          <AnimateOnScroll>
            <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] font-medium mb-4">The Team</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl font-semibold text-white mb-6">
              Meet Our Specialists
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Internationally trained, UAE licensed, and united by one mission — to craft the most exceptional smiles in Dubai.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Doctors */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="space-y-24">
            {doctors.map((doctor, i) => (
              <AnimateOnScroll key={doctor.name} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div
                      className="aspect-[3/4] bg-cover bg-center bg-[#f5f5f5]"
                      style={{ backgroundImage: `url('${doctor.image}')` }}
                    />
                    <div className={`absolute -bottom-4 ${i % 2 === 1 ? "-left-4" : "-right-4"} w-full h-full border border-[#C9A96E]/20 -z-10`} />
                    {/* Experience badge */}
                    <div className="absolute top-6 right-6 bg-[#C9A96E] text-white p-4 text-center">
                      <p className="font-heading text-2xl font-bold">{doctor.experience}</p>
                      <p className="text-xs uppercase tracking-widest">Experience</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] font-medium mb-3">{doctor.speciality}</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#0a0a0a] mb-2">{doctor.name}</h2>
                    <p className="text-[#737373] text-lg mb-8">{doctor.title}</p>
                    <p className="text-[#737373] leading-relaxed mb-10">{doctor.bio}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                      {/* Education */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <GraduationCap className="w-4 h-4 text-[#C9A96E]" />
                          <p className="text-xs tracking-widest uppercase text-[#0a0a0a] font-medium">Education</p>
                        </div>
                        <ul className="space-y-1.5">
                          {doctor.education.map((e) => (
                            <li key={e} className="text-xs text-[#737373] leading-relaxed">{e}</li>
                          ))}
                        </ul>
                      </div>
                      {/* Credentials */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-4 h-4 text-[#C9A96E]" />
                          <p className="text-xs tracking-widest uppercase text-[#0a0a0a] font-medium">Credentials</p>
                        </div>
                        <ul className="space-y-1.5">
                          {doctor.credentials.map((c) => (
                            <li key={c} className="text-xs text-[#737373]">{c}</li>
                          ))}
                        </ul>
                      </div>
                      {/* Languages */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Globe className="w-4 h-4 text-[#C9A96E]" />
                          <p className="text-xs tracking-widest uppercase text-[#0a0a0a] font-medium">Languages</p>
                        </div>
                        <ul className="space-y-1.5">
                          {doctor.languages.map((l) => (
                            <li key={l} className="text-xs text-[#737373]">{l}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {doctor.specialties.map((s) => (
                        <span key={s} className="text-xs tracking-wide border border-[#C9A96E]/30 text-[#C9A96E] px-4 py-1.5">
                          {s}
                        </span>
                      ))}
                    </div>

                    <GoldButton href="/contact">Book with {doctor.name.split(" ")[1]}</GoldButton>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#f8f8f8] section-padding">
        <div className="container-luxury text-center">
          <SectionHeader
            eyebrow="Your Consultation"
            title="Not Sure Which Specialist is Right for You?"
            subtitle="Book a general consultation and we'll match you with the ideal specialist for your smile goals. No commitment, no pressure."
            centered
          />
          <GoldButton href="/contact">Book a Consultation</GoldButton>
        </div>
      </section>
    </>
  );
}
