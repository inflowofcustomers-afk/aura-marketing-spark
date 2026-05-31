import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { CTALink } from "@/components/site/CTA";

gsap.registerPlugin(ScrollTrigger);

const GOLD = "#B8963E";
const COUNT = 70;

// Contact/person SVG icon as a data URI for use in img tags
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
  startXPct: number; // fraction of half-viewport-width, e.g. -0.9 to 0.9
  startYPct: number; // fraction of half-viewport-height
  size: number;
  driftAmpX: number;
  driftAmpY: number;
  driftDuration: number;
  driftDelay: number;
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const particleRefs = useRef<HTMLDivElement[]>([]);
  const reduce = useReducedMotion();

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: COUNT }).map((_, id) => ({
        id,
        // Spread across ~160% of half-viewport in each direction
        startXPct: (Math.random() - 0.5) * 1.6,
        startYPct: (Math.random() - 0.5) * 1.6,
        size: 12 + Math.random() * 14,
        driftAmpX: (Math.random() - 0.5) * 40,
        driftAmpY: (Math.random() - 0.5) * 40,
        driftDuration: 3 + Math.random() * 4,
        driftDelay: Math.random() * 4,
      })),
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const glow = glowRef.current;
    const els = particleRefs.current.filter(Boolean);

    if (!section || !content || !glow || els.length === 0) return;

    const isMobile = window.innerWidth < 768;

    // Show content immediately if reduced motion or mobile
    if (reduce || isMobile) {
      gsap.set(content, { opacity: 1, y: 0 });
      gsap.set(glow, { opacity: 0 });
      els.forEach((el) => gsap.set(el, { opacity: 0 }));
      return;
    }

    const hw = window.innerWidth / 2;
    const hh = window.innerHeight / 2;

    // Hide content initially
    gsap.set(content, { opacity: 0, y: 30 });
    gsap.set(glow, { opacity: 0, scale: 0.5 });

    // Place particles randomly around center
    els.forEach((el, i) => {
      const p = particles[i];
      if (!p) return;
      gsap.set(el, {
        xPercent: -50,
        yPercent: -50,
        x: p.startXPct * hw,
        y: p.startYPct * hh,
        opacity: 0.25,
        scale: 1,
      });
    });

    // Idle drift (runs before scroll starts)
    const driftTweens = els.map((el, i) => {
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

    // Main convergence timeline (scrubbed by ScrollTrigger)
    const tl = gsap.timeline({ paused: true });

    // 0 → 0.6: particles converge to center, opacity rises
    tl.to(
      els,
      {
        x: 0,
        y: 0,
        opacity: 0.9,
        scale: 1.4,
        ease: "power2.inOut",
        duration: 0.6,
        stagger: { amount: 0.2, from: "random" },
        onStart() {
          driftTweens.forEach((t) => t?.pause());
        },
      },
      0
    );

    // 0.6 → 0.75: gold pulse glow expands
    tl.to(
      glow,
      {
        opacity: 1,
        scale: 1,
        duration: 0.15,
        ease: "power2.out",
      },
      0.6
    );

    // 0.65 → 0.78: particles implode to center point
    tl.to(
      els,
      {
        scale: 0,
        opacity: 0,
        x: 0,
        y: 0,
        duration: 0.13,
        stagger: { amount: 0.08, from: "center" },
        ease: "power3.in",
      },
      0.65
    );

    // 0.75 → 0.82: glow fades out
    tl.to(
      glow,
      {
        opacity: 0,
        scale: 2,
        duration: 0.08,
        ease: "power2.in",
      },
      0.75
    );

    // 0.82 → 1.0: hero content fades in with slight upward slide
    tl.to(
      content,
      {
        opacity: 1,
        y: 0,
        duration: 0.18,
        ease: "power2.out",
      },
      0.82
    );

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=150%",
      pin: true,
      anticipatePin: 1,
      scrub: 1.2,
      animation: tl,
    });

    return () => {
      st.kill();
      tl.kill();
      driftTweens.forEach((t) => t?.kill());
    };
  }, [particles, reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden navy-section"
      style={{ height: "100vh" }}
    >
      {/* Background aurora */}
      <div className="aurora" aria-hidden />

      {/* Grain texture on hero */}
      <div className="absolute inset-0 pointer-events-none grain" aria-hidden />

      {/* Top / bottom gold hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Particle layer */}
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
              filter: `drop-shadow(0 0 5px ${GOLD}90)`,
            }}
          >
            <PersonSVG size={p.size} />
          </div>
        ))}
      </div>

      {/* Convergence glow (center pulse) */}
      <div
        ref={glowRef}
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${GOLD}80 0%, ${GOLD}00 70%)`,
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Hero content */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 3 }}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
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
      </div>
    </section>
  );
}
