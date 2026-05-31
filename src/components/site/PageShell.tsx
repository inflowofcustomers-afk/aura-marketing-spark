import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function LegalLayout({ title, eyebrow, updated, children }: {
  title: string;
  eyebrow?: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <PageShell>
      <section className="navy-section pt-32 sm:pt-40 pb-20 sm:pb-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-4 font-display text-4xl sm:text-5xl">{title}</h1>
          {updated && (
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
          )}
          <div className="mt-12 space-y-8 text-foreground/80 leading-relaxed">
            {children}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl text-foreground mb-3">{heading}</h2>
      <div className="space-y-3 text-foreground/75">{children}</div>
    </section>
  );
}
