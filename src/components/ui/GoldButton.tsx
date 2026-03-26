import Link from "next/link";
import { cn } from "@/lib/utils";

interface GoldButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "outline" | "white";
  className?: string;
  external?: boolean;
}

export default function GoldButton({
  href,
  children,
  variant = "gold",
  className,
  external = false,
}: GoldButtonProps) {
  const base =
    "inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase transition-all duration-300 px-8 py-4";

  const variants = {
    gold: "bg-[#C9A96E] hover:bg-[#B8960C] text-white hover:shadow-lg hover:shadow-[#C9A96E]/30",
    outline:
      "border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white",
    white:
      "bg-white text-[#0a0a0a] hover:bg-[#f5f5f5] hover:shadow-lg",
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
