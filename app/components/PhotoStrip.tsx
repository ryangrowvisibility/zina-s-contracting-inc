import Image from "next/image";

const PHOTOS = [
  {
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH3QOrgW5y6blDh_QYDnDFp8-JvZICD2V2lAht40o4HXRc12NIbOEcVuukfPHCFg20Jj-eayK3plh0yuIiZnomR_tdo7GwD51akAhznc_2UtZTWZ5JoJYAOf1gz9ZQvnL7Nvty-Svqp_QtO=w800-h600-k-no",
    alt: "Zina's Contracting — completed repair work",
  },
  {
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH9ln-jC5Ffr8aCFKI_SsYg7Cknw0Fi3t7oKcMUjkK48ChLp-T6uFQ8KlgAMkr3TnCTyA04diiWqJhenKB8rEjX8cvcHb-R7qDVRPZWbrEAGbJDh5CAMBs7PSnbPR1kQ84giWyz=w800-h600-k-no",
    alt: "Zina's Contracting — drywall and renovation",
  },
  {
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGccbYf8vtd-JDz0pxMpYR1oOkR7YBnQUFWNQOHYmYSEW_cQU9ig3aEabS_qJyTaONMAlL4pHmCeETmRugWn21uzbOIiDjjpxqZFmEoddSomzostGNpcgVDQAKNdsALVzgggAU=w800-h600-k-no",
    alt: "Zina's Contracting — professional finish work",
  },
];

// Duplicate for seamless loop
const DOUBLE = [...PHOTOS, ...PHOTOS];

export default function PhotoStrip() {
  return (
    <div
      className="overflow-hidden border-y-2"
      style={{ borderColor: "var(--ink)" }}
      aria-label="Project work photos"
    >
      <div className="marquee-track">
        {DOUBLE.map((p, i) => (
          <div
            key={i}
            className="relative flex-shrink-0"
            style={{ width: "480px", height: "240px" }}
          >
            <Image
              src={p.url}
              alt={p.alt}
              fill
              className="object-cover"
              loading="lazy"
              sizes="480px"
            />
            <div
              className="absolute inset-0"
              style={{ borderRight: "2px solid var(--ink)" }}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
