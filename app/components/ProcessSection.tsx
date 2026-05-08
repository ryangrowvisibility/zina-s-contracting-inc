const steps = [
  {
    num: "01",
    title: "YOU CALL",
    desc: "Call or text 647-272-0895, any hour, any day. No automated menu, no booking form, no callback queue. Fred picks up or texts you back within the hour. Describe the problem. He already knows what to do.",
  },
  {
    num: "02",
    title: "FRED RESPONDS",
    desc: "For true emergencies — fallen fixtures, active leaks, HVAC failures — Fred responds within 24 hours. For non-urgent work, he confirms a schedule that works for you. The response window is real, not a corporate estimate.",
  },
  {
    num: "03",
    title: "ASSESSMENT ON-SITE",
    desc: "Fred arrives and assesses the situation directly. He tells you exactly what happened, what it will take to fix it, and what it will cost. Clear language. No upsell. If the fix is simple, he says so.",
  },
  {
    num: "04",
    title: "YOU APPROVE",
    desc: "You approve the scope and price before any work begins. Fred does not start work and discover complications that grow the bill. If something unforeseen turns up, you hear about it immediately — and you decide.",
  },
  {
    num: "05",
    title: "FRED WORKS",
    desc: "Fred does the work himself. No crew shuffle, no subcontract. He is meticulous, fast, and clean — reviews repeatedly mention this combination. The site is left tidy when he is done.",
  },
  {
    num: "06",
    title: "PROBLEM SOLVED",
    desc: "Fred walks you through the completed work before he leaves. Results speak for themselves — Zina's Contracting has a perfect five-star record because Fred builds that standard into every job, not just the ones he thinks are being watched.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 px-6 border-t-2"
      style={{ background: "var(--paper)", borderColor: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div
              className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.25em] uppercase mb-5"
              style={{ color: "var(--red)" }}
            >
              [ OPERATIONAL SEQUENCE ]
            </div>
            <h2
              className="font-[family-name:var(--font-bebas)] uppercase leading-none tracking-[0.02em]"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "var(--ink)" }}
            >
              HOW IT
              <br />
              WORKS.
            </h2>
          </div>
          <p className="md:max-w-xs text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            From first call to final walkthrough — every Zina&apos;s job follows the same
            sequence. Fast when urgency demands it, thorough when quality does.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border-2" style={{ background: "var(--border)", borderColor: "var(--ink)" }}>
          {steps.map((s) => (
            <div
              key={s.num}
              className="p-8"
              style={{ background: "var(--white)" }}
            >
              <div
                className="font-[family-name:var(--font-bebas)] text-6xl tracking-[0.02em] leading-none mb-4"
                style={{ color: "var(--border)" }}
              >
                {s.num}
              </div>
              <div
                className="font-[family-name:var(--font-bebas)] text-xl tracking-[0.06em] mb-4"
                style={{ color: "var(--ink)" }}
              >
                {s.title}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Emergency strip */}
        <div
          className="mt-px p-8 border-x-2 border-b-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ background: "var(--red)", borderColor: "var(--ink)" }}
        >
          <div>
            <div
              className="font-[family-name:var(--font-jetbrains)] text-[9px] tracking-[0.2em] uppercase mb-2"
              style={{ color: "oklch(1 0 0 / 0.6)" }}
            >
              [ EMERGENCY PROTOCOL ]
            </div>
            <p
              className="font-[family-name:var(--font-bebas)] text-xl tracking-[0.05em] uppercase"
              style={{ color: "var(--white)" }}
            >
              Real emergency? Fred responds within 24 hours — all seven days.
            </p>
          </div>
          <a
            href="tel:6472720895"
            className="flex-shrink-0 px-7 py-3 font-[family-name:var(--font-bebas)] text-xl tracking-widest transition-opacity duration-200 hover:opacity-80 active:scale-[0.98] border-2"
            style={{ background: "var(--white)", color: "var(--red)", borderColor: "var(--white)" }}
          >
            CALL NOW — 647-272-0895
          </a>
        </div>
      </div>
    </section>
  );
}
