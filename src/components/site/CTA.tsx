import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type Variant = "gold" | "ghost" | "outline";

export function CTA({
  variant = "gold",
  className = "",
  children,
  ...rest
}: { variant?: Variant; className?: string; children: React.ReactNode } & ComponentProps<"a">) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-[15px] font-medium tracking-wide transition-all duration-300";
  const styles: Record<Variant, string> = {
    gold:
      "btn-shimmer bg-gold text-navy-deep hover:bg-gold-light shadow-[0_10px_40px_-12px_rgba(184,150,62,0.6)] hover:shadow-[0_18px_60px_-12px_rgba(184,150,62,0.85)] hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-foreground border border-foreground/25 hover:border-gold hover:text-gold",
    outline:
      "bg-transparent text-gold border border-gold/50 hover:bg-gold hover:text-navy-deep",
  };
  return (
    <a className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

export function CTALink({
  to,
  variant = "gold",
  className = "",
  children,
}: {
  to: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-[15px] font-medium tracking-wide transition-all duration-300";
  const styles: Record<Variant, string> = {
    gold:
      "btn-shimmer bg-gold text-navy-deep hover:bg-gold-light shadow-[0_10px_40px_-12px_rgba(184,150,62,0.6)] hover:shadow-[0_18px_60px_-12px_rgba(184,150,62,0.85)] hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-foreground border border-foreground/25 hover:border-gold hover:text-gold",
    outline:
      "bg-transparent text-gold border border-gold/50 hover:bg-gold hover:text-navy-deep",
  };
  return (
    <Link to={to} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
