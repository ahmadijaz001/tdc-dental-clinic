import Link from "next/link";

export default function PromoBannerStrip() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#6B4F12] via-[#C9A96E] to-[#6B4F12]">
      {/* Shimmer sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
          animation: "shimmer 3s infinite",
        }}
      />

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>

      <div className="container-luxury py-3.5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-white">
          <div className="flex items-center gap-1.5 text-white/80">
            {"★★★★★".split("").map((s, i) => (
              <span key={i} className="text-xs">{s}</span>
            ))}
            <span className="text-xs ml-1">4.9 / 5 — 500+ Reviews</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-white/30" />
          <p className="text-sm font-medium tracking-wide text-center">
            <span className="font-bold">LIMITED OFFER:</span> Free smile consultation + complimentary dental checkup{" "}
            <span className="text-white/70 text-xs">(AED 500 value)</span>
          </p>
          <span className="hidden sm:block w-px h-4 bg-white/30" />
          <Link
            href="/contact"
            className="text-[10px] font-bold tracking-[0.2em] uppercase bg-white text-[#8B6914] px-5 py-1.5 hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Claim Free →
          </Link>
        </div>
      </div>
    </section>
  );
}
