import Image from "next/image";

const testimonials = [
  {
    id: "REV-01",
    name: "Cici C.",
    location: "Mississauga",
    service: "Emergency Sink Repair",
    quote:
      "Sink randomly fell off the counter. Called Zina Contracting and Fred had it fixed within 24 hours. Quick, efficient, very detailed, and a very pleasant person to be around. This is the emergency contractor to have in your phone.",
    photo: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH3QOrgW5y6blDh_QYDnDFp8-JvZICD2V2lAht40o4HXRc12NIbOEcVuukfPHCFg20Jj-eayK3plh0yuIiZnomR_tdo7GwD51akAhznc_2UtZTWZ5JoJYAOf1gz9ZQvnL7Nvty-Svqp_QtO=w800-h600-k-no",
    featured: true,
  },
  {
    id: "REV-02",
    name: "Tyler J.",
    location: "GTA (Local Guide)",
    service: "HVAC Grill & Condo Repair",
    quote:
      "Needed urgent repair on a damaged ceiling HVAC grill and a long-term solution for roof-level filter changes. Fred came up with a practical, lasting fix for a condo-specific challenge that no one else had solved properly.",
    photo: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH9ln-jC5Ffr8aCFKI_SsYg7Cknw0Fi3t7oKcMUjkK48ChLp-T6uFQ8KlgAMkr3TnCTyA04diiWqJhenKB8rEjX8cvcHb-R7qDVRPZWbrEAGbJDh5CAMBs7PSnbPR1kQ84giWyz=w800-h600-k-no",
    featured: false,
  },
  {
    id: "REV-03",
    name: "Raul",
    location: "Mississauga",
    service: "Bathroom Renovation",
    quote:
      "Hired for bathroom frame, drywall, and painting. On time, respectful, and very professional. Impressed by the quality of the finish — done in days. I did not expect the result to look this good this fast.",
    photo: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGccbYf8vtd-JDz0pxMpYR1oOkR7YBnQUFWNQOHYmYSEW_cQU9ig3aEabS_qJyTaONMAlL4pHmCeETmRugWn21uzbOIiDjjpxqZFmEoddSomzostGNpcgVDQAKNdsALVzgggAU=w800-h600-k-no",
    featured: false,
  },
  {
    id: "REV-04",
    name: "5-Star Reviewer",
    location: "Brampton",
    service: "Emergency Repair",
    quote:
      "Fred showed up exactly when he said he would and left the place in perfect condition. The kind of contractor you keep calling back because you already know what you are getting. Zero complaints.",
    photo: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH3QOrgW5y6blDh_QYDnDFp8-JvZICD2V2lAht40o4HXRc12NIbOEcVuukfPHCFg20Jj-eayK3plh0yuIiZnomR_tdo7GwD51akAhznc_2UtZTWZ5JoJYAOf1gz9ZQvnL7Nvty-Svqp_QtO=w800-h600-k-no",
    featured: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 border-t-2"
      style={{ background: "var(--white)", borderColor: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div
              className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.25em] uppercase mb-5"
              style={{ color: "var(--red)" }}
            >
              [ CLIENT RECORDS ]
            </div>
            <h2
              className="font-[family-name:var(--font-bebas)] uppercase leading-none tracking-[0.02em]"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "var(--ink)" }}
            >
              WHAT CLIENTS
              <br />
              REPORT.
            </h2>
          </div>
          <div
            className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.15em] uppercase"
            style={{ color: "var(--ink-muted)" }}
          >
            5.0★ AVG · 13 VERIFIED REVIEWS
            <br />
            GOOGLE BUSINESS PLATFORM
          </div>
        </div>

        {/* Featured review — full bleed dark */}
        <div className="border-2 mb-px" style={{ borderColor: "var(--ink)" }}>
          <div
            className="grid grid-cols-1 md:grid-cols-5"
            style={{ background: "var(--ink)" }}
          >
            {/* Photo */}
            <div className="md:col-span-2 relative" style={{ minHeight: "300px" }}>
              <Image
                src={testimonials[0].photo}
                alt="Work completed by Zina's Contracting"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div
                className="absolute top-4 left-4 font-[family-name:var(--font-jetbrains)] text-[9px] tracking-[0.2em] uppercase px-2 py-1"
                style={{ background: "var(--red)", color: "var(--white)" }}
              >
                {testimonials[0].id}
              </div>
            </div>
            {/* Quote */}
            <div className="md:col-span-3 p-10 flex flex-col justify-between">
              <div>
                <div
                  className="font-[family-name:var(--font-bebas)] text-6xl leading-none mb-6"
                  style={{ color: "oklch(1 0 0 / 0.1)" }}
                >
                  &ldquo;
                </div>
                <blockquote
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--white)" }}
                >
                  {testimonials[0].quote}
                </blockquote>
              </div>
              <div className="mt-8 border-t pt-6" style={{ borderColor: "oklch(1 0 0 / 0.12)" }}>
                <div
                  className="font-[family-name:var(--font-bebas)] text-xl tracking-[0.05em]"
                  style={{ color: "var(--white)" }}
                >
                  {testimonials[0].name}
                </div>
                <div
                  className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.15em] uppercase mt-1"
                  style={{ color: "oklch(1 0 0 / 0.4)" }}
                >
                  {testimonials[0].location} · {testimonials[0].service} · ★★★★★
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three smaller cards — grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border-x-2 border-b-2" style={{ background: "var(--border)", borderColor: "var(--ink)" }}>
          {testimonials.slice(1).map((t) => (
            <div
              key={t.id}
              className="p-7 flex flex-col gap-4"
              style={{ background: "var(--paper)" }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="font-[family-name:var(--font-jetbrains)] text-[9px] tracking-[0.2em] uppercase"
                  style={{ color: "var(--red)" }}
                >
                  {t.id}
                </div>
                <div
                  className="font-[family-name:var(--font-jetbrains)] text-[9px]"
                  style={{ color: "var(--ink-muted)" }}
                >
                  ★★★★★
                </div>
              </div>
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={t.photo}
                  alt={`Work from ${t.service}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <blockquote className="text-sm leading-relaxed flex-1" style={{ color: "var(--ink-muted)" }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <div
                  className="font-[family-name:var(--font-bebas)] text-base tracking-[0.05em]"
                  style={{ color: "var(--ink)" }}
                >
                  {t.name}
                </div>
                <div
                  className="font-[family-name:var(--font-jetbrains)] text-[9px] tracking-[0.15em] uppercase"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {t.location} · {t.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
