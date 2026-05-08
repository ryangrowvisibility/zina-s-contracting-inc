export default function StandardsSection() {
  return (
    <section
      className="py-24 px-6 border-t-2"
      style={{ background: "var(--ink)", borderColor: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.25em] uppercase mb-10"
          style={{ color: "var(--red)" }}
        >
          [ OPERATIONAL STANDARDS ]
        </div>

        <h2
          className="font-[family-name:var(--font-bebas)] uppercase leading-none tracking-[0.02em] mb-14"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            color: "var(--white)",
          }}
        >
          THE ZINA&apos;S
          <br />
          STANDARD.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "oklch(1 0 0 / 0.06)" }}>
          {[
            {
              title: "24/7 AVAILABILITY — NOT MARKETING",
              body: "Most contractors say 24/7. Zina's Contracting actually answers. Fred responds to emergency calls at all hours, all days, all year. When Cici's sink fell off at an hour that should be someone else's problem — Fred had it fixed within 24 hours. That is the standard, not the exception.",
            },
            {
              title: "FRED DOES THE WORK",
              body: "Zina's Contracting does not subcontract. Fred arrives, Fred assesses, Fred works, Fred walks you through the result. The consistency across 13 five-star reviews is not an accident — it is because one person with high standards controls the entire job from call to close.",
            },
            {
              title: "METICULOUS FINISH QUALITY",
              body: "Tyler called Fred's HVAC fix 'practical and lasting.' Raul said the bathroom finish was better than expected and done in days. Cici said Fred was 'very detailed.' These are not flukes. Fred holds finish quality at a premium — drywall seams, paint edges, and mechanical repairs are all held to the same tight standard.",
            },
            {
              title: "HONEST SCOPE, NO SURPRISES",
              body: "Fred tells you what the job will cost before he starts. If complications surface, he surfaces them to you immediately. The price you agree to is the price you pay unless you change the scope. No fabricated add-ons, no final-invoice surprises. Clear work, clear invoice.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-10"
              style={{ background: "oklch(0.10 0.006 240 / 0.6)" }}
            >
              <div
                className="w-6 h-0.5 mb-6"
                style={{ background: "var(--red)" }}
                aria-hidden="true"
              />
              <h3
                className="font-[family-name:var(--font-bebas)] text-xl tracking-[0.06em] mb-5"
                style={{ color: "var(--white)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(1 0 0 / 0.5)" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
