import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const links = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Who It's For", href: "/#who-its-for" },
  { label: "FAQ", href: "/#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const reduce = useReducedMotion();

  // Pages whose top section is navy: nav needs light text when transparent
  const darkTopPages = ["/privacy", "/terms", "/sms-policy"];
  const isLightPage = pathname !== "/" && !darkTopPages.includes(pathname);

  const ink = !scrolled && isLightPage;
  const navText = ink
    ? "text-[color:var(--ink)]/75 hover:text-[color:var(--ink)]"
    : "text-foreground/80 hover:text-gold";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: -6 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease },
        };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Single surface: invisible at top, dark glass once scrolled */}
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(6,22,37,0.82)" : "rgba(6,22,37,0)",
          backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
          marginTop: scrolled ? 12 : 0,
          marginLeft: scrolled ? 16 : 0,
          marginRight: scrolled ? 16 : 0,
          borderRadius: scrolled ? 4 : 0,
        }}
        transition={{ duration: reduce ? 0 : 0.36, ease }}
        style={{ WebkitBackdropFilter: scrolled ? "blur(14px)" : "none" }}
      >
        <div
          className="flex items-center justify-between px-6 sm:px-10 lg:px-14 transition-[height] duration-300"
          style={{
            height: scrolled ? "4.25rem" : undefined,
            transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className={scrolled ? "" : "py-6 sm:py-8"}>
            <motion.div {...enter(0.05)} className="min-w-0">
              <Link to="/" className="group inline-flex items-baseline gap-3 leading-none">
                <span
                  className={`font-display text-[1.5rem] sm:text-[1.65rem] leading-none tracking-[0.3em] transition-colors duration-500 ${
                    ink ? "text-[color:var(--ink)]" : "text-foreground"
                  }`}
                >
                  AURA
                </span>
                <span
                  className={`font-display text-[1rem] sm:text-[1.1rem] tracking-[0.08em] transition-colors duration-500 ${
                    ink ? "text-[color:var(--gold-dark)]" : "text-gold/85"
                  }`}
                >
                  Invites&trade;
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.nav
            {...enter(0.16)}
            className="hidden md:flex items-center gap-8 lg:gap-10"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[11px] uppercase tracking-[0.2em] leading-none transition-colors duration-500 link-underline ${navText}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://app.aurainvites.com"
              className={`text-[11px] uppercase tracking-[0.2em] leading-none transition-colors duration-500 link-underline ${navText}`}
            >
              Login
            </a>
            <Link
              to="/apply"
              className="ml-2 inline-flex items-center justify-center bg-gold text-[color:var(--navy-deep)] px-7 py-3 text-[11px] uppercase tracking-[0.2em] font-semibold leading-none transition-colors duration-300 hover:bg-[color:var(--gold-light)]"
            >
              Apply
            </Link>
          </motion.nav>

          <button
            className={`md:hidden p-2 -mr-2 transition-colors duration-500 ${
              ink ? "text-[color:var(--ink)]" : "text-foreground"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.3, ease }}
              className="md:hidden bg-navy-deep"
            >
              <div className="rule-faint" />
              <div className="px-6 sm:px-10 py-10 flex flex-col gap-7">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl text-foreground/90"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="https://app.aurainvites.com"
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-foreground/90"
                >
                  Login
                </a>
                <Link
                  to="/apply"
                  onClick={() => setOpen(false)}
                  className="mt-2 self-start inline-flex items-center justify-center bg-gold text-[color:var(--navy-deep)] px-7 py-3 text-[11px] uppercase tracking-[0.2em] font-semibold leading-none"
                >
                  Apply
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
