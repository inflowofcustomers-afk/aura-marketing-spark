import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const reduce = useReducedMotion();

  // Pages whose top section is navy, nav needs light text when transparent
  const darkTopPages = ["/privacy", "/terms", "/sms-policy"];
  const isLightPage = pathname !== "/" && !darkTopPages.includes(pathname);

  const ink = !scrolled && isLightPage;
  const navText = ink
    ? "text-[color:var(--ink)]/75 hover:text-[color:var(--ink)]"
    : "text-foreground/80 hover:text-gold";
  const logoText = ink ? "text-[color:var(--ink)]" : "text-foreground";

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

  const links = [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Who It's For", href: "/#who-its-for" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[padding] duration-300 ${
        scrolled ? "pt-3 sm:pt-4" : "pt-0"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
    >
      <div
        className={`transition-[background-color,backdrop-filter,border-radius,margin,max-width] duration-500 ${
          scrolled
            ? "bg-navy-deep/80 backdrop-blur-md rounded-sm mx-3 sm:mx-6 lg:mx-10"
            : "bg-transparent mx-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
      >
      <div
        className={`${scrolled ? "px-6 sm:px-8 lg:px-10 max-w-[96rem] mx-auto" : "container-grid"} grid grid-cols-[minmax(0,1fr)_auto] items-center transition-[height] duration-300 ${
          scrolled ? "h-[4.25rem]" : "h-20 sm:h-28"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
      >

        <motion.div {...enter(0.05)} className="min-w-0">
          <Link to="/" className="inline-flex items-baseline gap-2.5">
            <span
              className={`font-display text-2xl sm:text-[1.75rem] leading-none tracking-[0.28em] transition-colors duration-500 ${logoText}`}
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

        <motion.nav
          {...enter(0.16)}
          className="hidden md:flex items-baseline gap-10 lg:gap-12 justify-self-end"
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
          className={`md:hidden justify-self-end p-2 -mr-2 transition-colors duration-500 ${
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
            <div className="container-grid py-10 flex flex-col gap-7">
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
      </div>
    </header>

  );
}
