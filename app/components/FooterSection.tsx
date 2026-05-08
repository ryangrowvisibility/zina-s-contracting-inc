export default function FooterSection() {
  return (
    <footer
      className="border-t-2 px-6 py-10"
      style={{ background: "var(--paper)", borderColor: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Wordmark */}
        <div>
          <div
            className="font-[family-name:var(--font-bebas)] text-2xl tracking-[0.06em] uppercase"
            style={{ color: "var(--ink)" }}
          >
            ZINA<span style={{ color: "var(--red)" }}>&apos;S</span> CONTRACTING INC.
          </div>
          <div
            className="font-[family-name:var(--font-jetbrains)] text-[9px] tracking-[0.2em] uppercase mt-1"
            style={{ color: "var(--ink-muted)" }}
          >
            MISSISSAUGA · GTA · ONTARIO
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
          {[
            { href: "#services", label: "SERVICES" },
            { href: "#process", label: "PROCESS" },
            { href: "#testimonials", label: "REVIEWS" },
            { href: "#faq", label: "FAQ" },
            { href: "#contact", label: "CONTACT" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.15em] uppercase transition-opacity duration-200 hover:opacity-40"
              style={{ color: "var(--ink-muted)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Phone */}
        <a
          href="tel:6472720895"
          className="font-[family-name:var(--font-bebas)] text-xl tracking-widest transition-opacity duration-200 hover:opacity-60"
          style={{ color: "var(--red)" }}
        >
          647‑272‑0895
        </a>
      </div>

      <div
        className="max-w-7xl mx-auto mt-8 pt-6 border-t font-[family-name:var(--font-jetbrains)] text-[9px] tracking-[0.15em] uppercase"
        style={{ borderColor: "var(--border)", color: "var(--ink-muted)" }}
      >
        &copy; {new Date().getFullYear()} ZINA&apos;S CONTRACTING INC. — MISSISSAUGA, ON
        — OPEN 24 HOURS / 7 DAYS
      </div>
    </footer>
  );
}
