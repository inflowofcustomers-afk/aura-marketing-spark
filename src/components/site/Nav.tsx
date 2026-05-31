import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Pages whose top section is cream — nav needs dark text when transparent
  const isLightPage = pathname !== "/";

  // Unscrolled text colours: dark on cream pages, light on dark hero
  const navText = !scrolled && isLightPage ? "text-navy-deep/70 hover:text-navy-deep" : "text-foreground/80 hover:text-gold";
  const logoText = !scrolled && isLightPage ? "text-navy-deep" : "text-foreground";
  const eyebrowText = !scrolled && isLightPage ? "text-navy-deep/60" : "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Who It's For", href: "/#who-its-for" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-navy-deep/75 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className={`font-display text-xl sm:text-2xl tracking-wider transition-colors duration-300 ${logoText}`}>
            AURA
          </span>
          <span className={`text-[10px] eyebrow inline-block translate-y-[1px] transition-colors duration-300 ${eyebrowText}`}>
            Invites
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors duration-300 ${navText}`}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-navy-deep hover:bg-gold-light transition-all hover:gold-glow"
          >
            Apply
          </Link>
        </nav>

        <button
          className={`md:hidden p-2 transition-colors duration-300 ${!scrolled && isLightPage ? "text-navy-deep" : "text-foreground"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-border bg-navy-deep/95 backdrop-blur-xl"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground/90 py-2"
                >
                  {l.label}
                </a>
              ))}
              <Link
                to="/apply"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-medium text-navy-deep"
              >
                Apply
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
