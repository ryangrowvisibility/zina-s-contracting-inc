export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 border-t-2"
      style={{ background: "var(--white)", borderColor: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto">

        <div
          className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.25em] uppercase mb-5"
          style={{ color: "var(--red)" }}
        >
          [ CONTACT ]
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <h2
              className="font-[family-name:var(--font-bebas)] uppercase leading-none tracking-[0.02em] mb-10"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "var(--ink)" }}
            >
              REACH
              <br />
              FRED.
            </h2>

            {/* Big phone */}
            <a
              href="tel:6472720895"
              className="block mb-10 transition-opacity duration-200 hover:opacity-60"
              aria-label="Call Zina's Contracting at 647-272-0895"
            >
              <div
                className="font-[family-name:var(--font-bebas)] leading-none tracking-[0.03em]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--ink)" }}
              >
                647‑272‑0895
              </div>
              <div
                className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.2em] uppercase mt-2"
                style={{ color: "var(--red)" }}
              >
                24/7 · CALL OR TEXT
              </div>
            </a>

            {/* Details grid */}
            <div className="border-t-2 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ borderColor: "var(--ink)" }}>
              {[
                { label: "SERVICE AREA", value: "Mississauga · Brampton · GTA" },
                { label: "HOURS", value: "Open 24 hours · 7 days a week" },
                { label: "AVAILABILITY", value: "Emergency response within 24h" },
                { label: "ESTIMATES", value: "On-site assessment before work begins" },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    className="font-[family-name:var(--font-jetbrains)] text-[9px] tracking-[0.2em] uppercase mb-1"
                    style={{ color: "var(--red)" }}
                  >
                    {item.label}
                  </div>
                  <div className="text-sm" style={{ color: "var(--ink)" }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency CTA */}
            <div className="mt-10">
              <a
                href="tel:6472720895"
                className="inline-flex items-center gap-3 px-7 py-4 font-[family-name:var(--font-bebas)] text-xl tracking-widest transition-all duration-200 hover:opacity-85 active:scale-[0.97]"
                style={{ background: "var(--red)", color: "var(--white)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.45-1.45a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
                EMERGENCY — CALL NOW
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div>
            <div
              className="border-2 overflow-hidden"
              style={{ borderColor: "var(--ink)" }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Mississauga+ON+Canada&output=embed"
                width="100%"
                height="380"
                style={{ border: 0, display: "block", filter: "grayscale(0.4)" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Zina's Contracting service area — Mississauga and GTA"
              />
            </div>
            <p
              className="mt-4 font-[family-name:var(--font-jetbrains)] text-[9px] tracking-[0.15em] uppercase"
              style={{ color: "var(--ink-muted)" }}
            >
              SERVICE AREA: MISSISSAUGA · BRAMPTON · GTA · ONTARIO
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
