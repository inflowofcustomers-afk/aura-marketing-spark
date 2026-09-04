import { motion, useReducedMotion } from "framer-motion";

/** Retained as no-ops: the decorative tech effects were removed in the luxury redesign. */
export function Aurora() {
  return null;
}

export function Particles(_props: { count?: number }) {
  return null;
}

/**
 * Reveal: a slow, barely-perceptible fade and rise.
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
