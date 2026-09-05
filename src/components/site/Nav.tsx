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
    const onScroll = () => setScrolled(window.scrollY > 70);
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
          <div className={scrolled ? "" : "py-6 sm:py-9"}>
            <motion.div {...enter(0.05)} className="min-w-0">
              <Link to="/" className="inline-flex items-baseline gap-2.5">
                <span
                  className={`font-display text-2xl sm:text-[1.75rem] leading-none tracking-[0.28em] transition-colors duration-500 ${
                    ink ? "text-[color:var(--ink)]" : "text-foreground"
                  }`}
                >
                  AURA
                </span>
                <span
                  className={`text-[12px] uppercase tracking-[0.34em] transition-colors duration-500 ${
                    ink ? "text-[color:var(--warm-gray)]" : "text-foreground/75"
                  }`}
                >
                  Invites
                  <span className="align-super text-[7px] tracking-normal ml-0.5">&trade;</span>
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.nav
            {...enter(0.16)}
            className="hidden md:flex items-baseline gap-9 lg:gap-11"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[13px] uppercase tracking-[0.22em] leading-none transition-colors duration-500 link-underline ${navText}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://app.aurainvites.com"
              className={`text-[13px] uppercase tracking-[0.22em] leading-none transition-colors duration-500 link-underline ${navText}`}
            >
              Login
            </a>
            <Link
              to="/apply"
              className={`text-[13px] uppercase tracking-[0.22em] leading-none pb-1 border-b transition-colors duration-500 ${
                ink
                  ? "text-[color:var(--gold-dark)] border-[color:var(--gold-dark)]/50 hover:border-[color:var(--gold-dark)]"
                  : "text-gold border-gold/40 hover:border-gold"
              }`}
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
                  className="mt-2 text-[12px] uppercase tracking-[0.22em] text-gold self-start border-b border-gold/40 pb-1"
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
