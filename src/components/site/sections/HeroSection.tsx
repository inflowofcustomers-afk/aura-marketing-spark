import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { CTALink } from "@/components/site/CTA";

const GOLD = "#B8963E";
const COUNT = 70;

function PersonSVG({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={GOLD}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" strokeWidth="0" />
    </svg>
  );
}

interface Particle {
  id: number;
  startXPct: number;
  startYPct: number;
  size: number;
  driftAmpX: number;
  driftAmpY: number;
  driftDuration: number;
  driftDelay: number;
  opacity: number;
}

export function HeroSection() {
  const particleRefs = useRef<HTMLDivElement[]>([]);
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: COUNT }).map((_, id) => ({
        id,
        startXPct: (Math.random() - 0.5) * 1.6,
        startYPct: (Math.random() - 0.5) * 1.6,
        size: 12 + Math.random() * 14,
        driftAmpX: (Math.random() - 0.5) * 50,
        driftAmpY: (Math.random() - 0.5) * 50,
        driftDuration: 4 + Math.random() * 5,
        driftDelay: Math.random() * 5,
        opacity: 0.15 + Math.random() * 0.15,
      })),
    []
  );

  useEffect(() => {
    const els = particleRefs.current.filter(Boolean);
    if (reduce || els.length === 0) return;

    const hw = window.innerWidth / 2;
    const hh = window.innerHeight / 2;

    // Place particles at their random starting positions
    els.forEach((el, i) => {
      const p = particles[i];
      if (!p) return;
      gsap.set(el, {
        xPercent: -50,
        yPercent: -50,
        x: p.startXPct * hw,
        y: p.startYPct * hh,
        opacity: p.opacity,
        scale: 1,
      });
    });

    // Continuous idle drift — runs forever, no scroll dependency
    const tweens = els.map((el, i) => {
      const p = particles[i];
      if (!p) return null;
      return gsap.to(el, {
        x: `+=${p.driftAmpX}`,
        y: `+=${p.driftAmpY}`,
        duration: p.driftDuration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: p.driftDelay,
      });
    });

    return () => {
      tweens.forEach((t) => t?.kill());
    };
  }, [particles, reduce, isMobile]);

  return (
    <section className="relative overflow-hidden navy-section pt-32 sm:pt-40 pb-20 sm:pb-32">
      {/* Background aurora */}
      <div className="aurora" aria-hidden />

      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none grain" aria-hidden />

      {/* Gold hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Floating particle background — desktop only, after hydration */}
      {isMobile === false && !reduce && (
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden
          style={{ zIndex: 1 }}
        >
          {particles.map((p, i) => (
            <div
              key={p.id}
              ref={(el) => {
                if (el) particleRefs.current[i] = el;
              }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: p.size,
                height: p.size,
                filter: `drop-shadow(0 0 4px ${GOLD}70)`,
              }}
            >
              <PersonSVG size={p.size} />
            </div>
          ))}
        </div>
      )}

      {/* Hero content — always visible */}
      <div
        className="relative mx-auto max-w-6xl px-5 sm:px-8 text-center"
        style={{ zIndex: 3 }}
      >
        <span className="eyebrow inline-block">Purpose-built for MedSpa owners</span>

        <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground">
          Your dormant patient list is hiding{" "}
          <span className="gold-gradient-text italic">$30,000</span> in booked revenue.
        </h1>

        <p className="mt-7 mx-auto max-w-2xl text-base sm:text-lg text-foreground/75 leading-relaxed">
          AURA finds every patient who visited once and disappeared, and brings them back —
          with a personalized SMS and email sequence that books appointments automatically.
          No ads. No new leads. Just revenue from people who already know you.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <CTALink to="/apply" variant="gold">
            Apply for a Founder Spot <ArrowRight size={16} />
          </CTALink>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium border border-foreground/25 text-foreground hover:border-gold hover:text-gold transition-all"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-3 text-xs eyebrow opacity-70">
          <span className="h-px w-8 bg-gold/50" />
          <span>Limited founder spots</span>
          <span className="h-px w-8 bg-gold/50" />
        </div>
      </div>
    </section>
  );
}
