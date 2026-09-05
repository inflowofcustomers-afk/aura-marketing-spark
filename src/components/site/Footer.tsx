import { Link } from "@tanstack/react-router";

const linkCls =
  "text-[14px] font-light text-foreground/70 hover:text-gold transition-colors duration-500";

export function Footer() {
  return (
    <footer className="navy-section">
      <div className="container-grid">
        <div className="rule-faint" />
        <div className="py-20 sm:py-28 grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="font-display text-2xl tracking-[0.28em]">
              AURA
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.34em] text-foreground/55">
              Invites
              <span className="align-super text-[8px] tracking-normal ml-1">&trade;</span>
            </div>
            <p className="mt-8 text-[14px] font-light leading-relaxed text-foreground/60 max-w-[26ch]">
              Purpose-built patient reactivation for MedSpa owners.
            </p>
          </div>
          <div>
            <div className="eyebrow">Product</div>
            <ul className="mt-7 space-y-4">
              <li><a href="/#how-it-works" className={linkCls}>How It Works</a></li>
              <li><a href="/#who-its-for" className={linkCls}>Who It's For</a></li>
              <li><a href="/#faq" className={linkCls}>FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">Get Started</div>
            <ul className="mt-7 space-y-4">
              <li><Link to="/apply" className={linkCls}>Apply</Link></li>
              <li><a href="https://app.aurainvites.com" className={linkCls}>Login</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">Legal</div>
            <ul className="mt-7 space-y-4">
              <li><Link to="/privacy" className={linkCls}>Privacy Policy</Link></li>
              <li><Link to="/terms" className={linkCls}>Terms of Service</Link></li>
              <li><Link to="/sms-policy" className={linkCls}>SMS Policy</Link></li>
              <li><Link to="/sms-opt-in" className={linkCls}>SMS Opt-In</Link></li>
            </ul>
          </div>
        </div>
        <div className="rule-faint" />
        <div className="py-10 text-[12px] font-light tracking-wide text-foreground/50">
          © {new Date().getFullYear()} AURA Invites™ by AI Ops, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
