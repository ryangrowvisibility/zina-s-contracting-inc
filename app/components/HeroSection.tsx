export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100dvh] flex flex-col justify-center pt-14 border-b-2"
      style={{ background: "var(--white)", borderColor: "var(--ink)" }}
    >
      {/* Top rule bar */}
      <div
        className="absolute top-14 left-0 right-0 h-px"
        style={{ background: "var(--border)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">

        {/* Unit tags */}
        <div className="flex items-center gap-8 mb-10 flex-wrap">
          <div
            className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.2em] uppercase px-3 py-1 border-2"
            style={{ borderColor: "var(--red)", color: "var(--red)" }}
          >
            [ 24 / 7 — OPEN NOW ]
          </div>
          <div
            className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "var(--ink-muted)" }}
          >
            5.0★ · 13 REVIEWS · MISSISSAUGA GTA
          </div>
        </div>

        {/* Massive headline — Bebas Neue display */}
        <h1
          className="font-[family-name:var(--font-bebas)] uppercase leading-[0.88] tracking-[0.02em] mb-10"
          style={{
            fontSize: "clamp(5rem, 15vw, 14rem)",
            color: "var(--ink)",
          }}
        >
          EMERGENCY
          <br />
          <span style={{ color: "var(--red)" }}>REPAIRS.</span>
          <br />
          DONE FAST.
        </h1>

        {/* Subgrid: body + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t-2 pt-10" style={{ borderColor: "var(--ink)" }}>
          <div>
            <p className="text-base leading-relaxed max-w-sm" style={{ color: "var(--ink-muted)" }}>
              Zina&apos;s Contracting is Mississauga&apos;s 24/7 emergency contractor. Fred responds
              to plumbing failures, drywall damage, HVAC repairs, and bathroom renovations across
              the GTA — with a 5-star track record across every single job.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <a
              href="tel:6472720895"
              className="group inline-flex items-center gap-4 transition-opacity duration-200 hover:opacity-70 active:scale-[0.98]"
              aria-label="Call Zina's Contracting 647-272-0895"
            >
              <div
                className="w-12 h-12 flex items-center justify-center flex-shrink-0 border-2 transition-colors duration-200 group-hover:bg-ink group-hover:border-ink"
                style={{ borderColor: "var(--red)", background: "var(--red)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.45-1.45a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
              </div>
              <div>
                <div
                  className="font-[family-name:var(--font-bebas)] text-4xl tracking-[0.03em] leading-none"
                  style={{ color: "var(--ink)" }}
                >
                  647‑272‑0895
                </div>
                <div
                  className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.15em] uppercase mt-1"
                  style={{ color: "var(--ink-muted)" }}
                >
                  CALL OR TEXT — ANYTIME
                </div>
              </div>
            </a>

            <a
              href="#services"
              className="self-start font-[family-name:var(--font-bebas)] text-lg tracking-widest px-6 py-3 border-2 transition-all duration-200 hover:bg-ink hover:text-white"
              style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
            >
              SEE SERVICES ///
            </a>
          </div>
        </div>

        {/* Decorative side numerals */}
        <div
          className="absolute right-6 bottom-16 font-[family-name:var(--font-bebas)] text-[8rem] leading-none select-none pointer-events-none hidden lg:block"
          style={{ color: "oklch(0.08 0.006 240 / 0.05)", letterSpacing: "-0.05em" }}
          aria-hidden="true"
        >
          247
        </div>
      </div>
    </section>
  );
}
