const services = [
  {
    id: "SVC-01",
    title: "Emergency Home Repairs",
    desc: "Sink falls off the counter at 11 pm. Water dripping through a ceiling at 2 am. Fred responds to emergency calls within 24 hours, all seven days, all year. No answering service, no 72-hour appointment window. You call, Fred comes. The GTA emergency contractor you should have in your phone now.",
    tags: ["24/7", "SAME-DAY", "GTA", "RESIDENTIAL"],
    priority: true,
  },
  {
    id: "SVC-02",
    title: "Drywall Framing & Finishing",
    desc: "Full drywall services — framing, installation, mudding, taping, and finishing. Fred's drywall results have been repeatedly called out in reviews as premium-quality. Seams invisible, edges crisp, finish paint-ready. Bathrooms, living spaces, condo units — any scale.",
    tags: ["FRAMING", "INSTALLATION", "MUD & TAPE", "FINISHING"],
    priority: false,
  },
  {
    id: "SVC-03",
    title: "HVAC Grill & Condo Repairs",
    desc: "Condo-specific challenges require condo-specific solutions. Fred handled a long-standing roof-level filter access problem for one client — designing a practical, lasting fix. HVAC grill damage, air filter access, and condo mechanical repairs handled correctly the first time.",
    tags: ["HVAC", "CONDO", "MECHANICAL", "ACCESS SOLUTIONS"],
    priority: false,
  },
  {
    id: "SVC-04",
    title: "Emergency Plumbing",
    desc: "Fallen sinks, burst supply lines, leaking fixtures, and drainage issues. Fred is not a licensed plumber but handles the residential plumbing repairs that make up 90% of emergency calls — fixture reattachment, supply shutoff, leak containment, and replacement. Fast enough to matter in a real emergency.",
    tags: ["SINK REPAIR", "LEAK FIX", "FIXTURE", "SUPPLY LINE"],
    priority: false,
  },
  {
    id: "SVC-05",
    title: "Interior Painting",
    desc: "Interior painting with meticulous prep and clean finishing. Fred tapes every edge, primes properly, and applies paint to a professional standard. Walls, ceilings, trim, and full room refreshes. No runs, no holidays, no visible rollmarks on a flat section.",
    tags: ["WALLS", "TRIM", "CEILING", "PREP"],
    priority: false,
  },
  {
    id: "SVC-06",
    title: "Bathroom Renovation",
    desc: "Complete bathroom renovation packages: frame, drywall, tile-ready finishing, and painting in a coordinated sequence. Raul's bathroom — framed, drywalled, and painted — was completed in days. Fred works fast without sacrificing finish quality. Bathrooms built to last, not patched to sell.",
    tags: ["FRAME", "DRYWALL", "PAINTING", "FULL RENO"],
    priority: false,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6" style={{ background: "var(--paper)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div
              className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.25em] uppercase mb-5"
              style={{ color: "var(--red)" }}
            >
              [ SERVICES ]
            </div>
            <h2
              className="font-[family-name:var(--font-bebas)] uppercase leading-none tracking-[0.02em]"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "var(--ink)" }}
            >
              FULL SCOPE.
              <br />
              ONE NUMBER.
            </h2>
          </div>
          <p className="md:max-w-sm text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            Zina&apos;s Contracting covers emergency repairs, drywall, HVAC, plumbing, painting,
            and bathroom renovation — across Mississauga, Brampton, and the GTA.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border-2" style={{ background: "var(--border)", borderColor: "var(--ink)" }}>
          {services.map((s) => (
            <div
              key={s.id}
              className="p-8 flex flex-col gap-4"
              style={{ background: s.priority ? "var(--red)" : "var(--white)" }}
            >
              <div className="flex items-start justify-between">
                <div
                  className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: s.priority ? "oklch(1 0 0 / 0.6)" : "var(--ink-muted)" }}
                >
                  {s.id}
                </div>
                {s.priority && (
                  <div
                    className="font-[family-name:var(--font-jetbrains)] text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 border"
                    style={{ borderColor: "rgba(255,255,255,0.4)", color: "rgba(255,255,255,0.7)" }}
                  >
                    PRIORITY
                  </div>
                )}
              </div>
              <h3
                className="font-[family-name:var(--font-bebas)] text-2xl tracking-[0.03em] uppercase leading-tight"
                style={{ color: s.priority ? "var(--white)" : "var(--ink)" }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: s.priority ? "oklch(1 0 0 / 0.75)" : "var(--ink-muted)" }}
              >
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-[family-name:var(--font-jetbrains)] text-[9px] tracking-[0.15em] uppercase px-2 py-1 border"
                    style={{
                      borderColor: s.priority ? "rgba(255,255,255,0.3)" : "var(--border)",
                      color: s.priority ? "rgba(255,255,255,0.6)" : "var(--ink-muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
