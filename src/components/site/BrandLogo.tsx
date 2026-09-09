import { Link } from "@tanstack/react-router";

type BrandLogoProps = {
  className?: string;
  dark?: boolean;
  linked?: boolean;
};

export function BrandLogo({ className = "", dark = false, linked = true }: BrandLogoProps) {
  const wordmark = (
    <span
      className={`inline-flex items-baseline whitespace-nowrap font-display leading-none ${className}`}
      aria-label="AURA Invites trademark"
    >
      <span className="text-[1em] font-light tracking-[0.18em]">AURA</span>
      <span
        className={`ml-[0.48em] text-[0.82em] font-light tracking-[0.04em] ${
          dark ? "text-gold-dark" : "text-gold"
        }`}
      >
        Invites
      </span>
      <span
        className={`ml-[0.18em] self-start text-[0.3em] leading-none tracking-normal ${
          dark ? "text-gold-dark" : "text-gold"
        }`}
      >
        ™
      </span>
    </span>
  );

  return linked ? (
    <Link to="/" className="inline-flex" aria-label="AURA Invites home">
      {wordmark}
    </Link>
  ) : wordmark;
}