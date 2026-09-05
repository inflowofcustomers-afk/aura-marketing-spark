import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type Variant = "gold" | "ghost" | "outline" | "dark" | "solid";

const styles: Record<Variant, string> = {
  gold: "btn-quiet",
  outline: "btn-quiet",
  ghost: "btn-quiet btn-quiet-plain",
  dark: "btn-quiet btn-quiet-dark",
  solid: "btn-quiet btn-quiet-solid",
};

export function CTA({
  variant = "gold",
  className = "",
  children,
  ...rest
}: { variant?: Variant; className?: string; children: React.ReactNode } & ComponentProps<"a">) {
  return (
    <a className={`${styles[variant]} ${className}`} {...rest}>
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
  return (
    <Link to={to} className={`${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
