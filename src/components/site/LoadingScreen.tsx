import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "done">("in");
  const reduce = useReducedMotion();
  const mounted = useRef(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("aura_loaded")) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem("aura_loaded", "1");

    if (reduce) {
      setPhase("done");
      return;
    }

    mounted.current = true;
    const t1 = setTimeout(() => mounted.current && setPhase("hold"), 500);
    const t2 = setTimeout(() => mounted.current && setPhase("out"), 1300);
    const t3 = setTimeout(() => mounted.current && setPhase("done"), 2000);

    return () => {
      mounted.current = false;
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [reduce]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#061625",
        opacity: phase === "out" ? 0 : 1,
        transition: phase === "out" ? "opacity 0.7s ease" : "none",
        pointerEvents: phase === "out" ? "none" : "all",
      }}
    >
      <div
        style={{
          opacity: phase === "in" ? 0 : 1,
          transform: phase === "in" ? "translateY(10px)" : "translateY(0)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', ui-serif, Georgia, serif",
            fontSize: "clamp(2.5rem, 8vw, 4rem)",
            letterSpacing: "0.2em",
            color: "#C6A15B",
            display: "block",
            lineHeight: 1,
          }}
        >
          AURA
        </span>
        {/* Underline that draws in during "hold" phase */}
        <div
          style={{
            height: "1px",
            marginTop: "10px",
            background: "linear-gradient(90deg, transparent, #C6A15B, transparent)",
            width: phase === "hold" || phase === "out" ? "100%" : "0%",
            transition: phase === "hold" ? "width 0.5s ease 0.05s" : "none",
          }}
        />
      </div>
    </div>
  );
}
