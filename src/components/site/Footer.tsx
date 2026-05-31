import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="navy-section border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-2xl tracking-wider">AURA</div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Patient reactivation for MedSpa owners.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-4">Product</div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li><a href="/#how-it-works" className="hover:text-gold">How It Works</a></li>
              <li><a href="/#who-its-for" className="hover:text-gold">Who It's For</a></li>
              <li><a href="/#faq" className="hover:text-gold">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4">Get Started</div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li><Link to="/apply" className="hover:text-gold">Apply</Link></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4">Legal</div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li><Link to="/privacy" className="hover:text-gold">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gold">Terms of Service</Link></li>
              <li><Link to="/sms-policy" className="hover:text-gold">SMS Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} AURA Invites. All rights reserved.</div>
          <div>aurainvites.com</div>
        </div>
      </div>
    </footer>
  );
}
