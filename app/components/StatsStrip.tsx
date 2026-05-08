export default function StatsStrip() {
  const stats = [
    { value: "24/7", label: "AVAILABILITY" },
    { value: "5.0★", label: "GOOGLE RATING" },
    { value: "13", label: "5-STAR REVIEWS" },
    { value: "<24H", label: "RESPONSE TIME" },
    { value: "GTA", label: "SERVICE AREA" },
  ];

  return (
    <div
      className="border-b-2"
      style={{ background: "var(--ink)", borderColor: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0" style={{ borderColor: "oklch(0.972 0.004 240 / 0.12)" }}>
          {stats.map((s) => (
            <div key={s.label} className="px-8 py-5">
              <div
                className="font-[family-name:var(--font-bebas)] text-3xl tracking-[0.05em] leading-none"
                style={{ color: "var(--white)" }}
              >
                {s.value}
              </div>
              <div
                className="font-[family-name:var(--font-jetbrains)] text-[9px] tracking-[0.2em] mt-1 uppercase"
                style={{ color: "oklch(1 0 0 / 0.35)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
