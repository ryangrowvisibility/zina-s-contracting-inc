"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#services", label: "SERVICES" },
  { href: "#process", label: "PROCESS" },
  { href: "#testimonials", label: "REVIEWS" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "CONTACT" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: scrolled ? "oklch(1 0 0 / 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "2px solid var(--ink)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="font-[family-name:var(--font-bebas)] text-2xl tracking-wider uppercase"
          style={{ color: "var(--ink)", letterSpacing: "0.08em" }}
          aria-label="Zina's Contracting Inc. — home"
        >
          ZINA<span style={{ color: "var(--red)" }}>&apos;S</span> CONTRACTING
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.15em] transition-opacity duration-200 hover:opacity-40"
              style={{ color: "var(--ink)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:6472720895"
            className="px-4 py-2 font-[family-name:var(--font-bebas)] text-base tracking-widest transition-all duration-200 hover:opacity-80 active:scale-[0.97]"
            style={{
              background: "var(--red)",
              color: "var(--white)",
              letterSpacing: "0.1em",
            }}
          >
            24/7 — CALL NOW
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{ color: "var(--ink)" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t-2 px-6 py-6 flex flex-col gap-5"
          style={{ background: "var(--white)", borderColor: "var(--ink)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-bebas)] text-2xl tracking-widest"
              style={{ color: "var(--ink)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:6472720895"
            className="mt-2 px-5 py-3.5 text-center font-[family-name:var(--font-bebas)] text-xl tracking-widest"
            style={{ background: "var(--red)", color: "var(--white)" }}
            onClick={() => setOpen(false)}
          >
            24/7 — CALL 647-272-0895
          </a>
        </div>
      )}
    </header>
  );
}
