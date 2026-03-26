import AnimateOnScroll from "./AnimateOnScroll";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", centered && "text-center")}>
      {eyebrow && (
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] font-medium mb-4">
            {eyebrow}
          </p>
        </AnimateOnScroll>
      )}
      <AnimateOnScroll delay={0.1}>
        <h2
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
          style={{ color: light ? "var(--tdc-text)" : "#0a0a0a" }}
        >
          {title}
        </h2>
      </AnimateOnScroll>
      {subtitle && (
        <AnimateOnScroll delay={0.2}>
          <p
            className={cn("mt-6 text-base md:text-lg leading-relaxed max-w-2xl", centered && "mx-auto")}
            style={{ color: light ? "var(--tdc-text-soft)" : "#737373" }}
          >
            {subtitle}
          </p>
        </AnimateOnScroll>
      )}
    </div>
  );
}
