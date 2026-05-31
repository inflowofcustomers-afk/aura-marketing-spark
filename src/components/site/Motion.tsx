import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export function Aurora() {
  return <div className="aurora" aria-hidden />;
}

export function Particles({ count = 24 }: { count?: number }) {
  const reduce = useReducedMotion();
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 12,
        duration: 14 + Math.random() * 14,
        opacity: 0.2 + Math.random() * 0.5,
      })),
    [count],
  );
  if (reduce) return null;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {items.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: `-${p.delay}s`,
            animationDuration: `${p.duration}s`,
            bottom: 0,
          }}
        />
      ))}
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
