import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Pages whose top section is navy — nav needs light text when transparent
  const darkTopPages = ["/privacy", "/terms", "/sms-policy"];
  const isLightPage = pathname !== "/" && !darkTopPages.includes(pathname);

  const ink = !scrolled && isLightPage;
  const navText = ink
    ? "text-[color:var(--ink)]/60 hover:text-[color:var(--ink)]"
    : "text-foreground/60 hover:text-gold";
  const logoText = ink ? "text-[color:var(--ink)]" : "text-foreground";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-navy-deep/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto max-w-[92rem] px-6 sm:px-12 flex items-center justify-between transition-all duration-700 ${
          scrolled ? "h-16" : "h-20 sm:h-28"
        }`}
      >
        <Link to="/" className="flex items-baseline gap-2.5">
          <span
            className={`font-display text-2xl sm:text-[1.75rem] leading-none tracking-[0.28em] transition-colors duration-500 ${logoText}`}
          >
            AURA
          </span>
          <span
            className={`text-[10px] uppercase tracking-[0.34em] transition-colors duration-500 ${
              ink ? "text-[color:var(--warm-gray)]" : "text-foreground/55"
            }`}
          >
            Invites
            <span className="align-super text-[7px] tracking-normal ml-0.5">&trade;</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 lg:gap-12">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[12px] uppercase tracking-[0.22em] transition-colors duration-500 link-underline ${navText}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://app.aurainvites.com"
            className={`text-[12px] uppercase tracking-[0.22em] transition-colors duration-500 link-underline ${navText}`}
          >
            Login
          </a>
          <Link
            to="/apply"
            className={`text-[12px] uppercase tracking-[0.22em] pb-1 border-b transition-colors duration-500 ${
              ink
                ? "text-[color:var(--gold-dark)] border-[color:var(--gold-dark)]/50 hover:border-[color:var(--gold-dark)]"
                : "text-gold border-gold/40 hover:border-gold"
            }`}
          >
            Apply
          </Link>
        </nav>

        <button
          className={`md:hidden p-2 transition-colors duration-500 ${
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
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-navy-deep"
          >
            <div className="rule-faint" />
            <div className="px-6 py-10 flex flex-col gap-7">
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
    </header>
  );
}
