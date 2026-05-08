import type { Metadata } from "next";
import { Bebas_Neue, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Zina's Contracting Inc. | 24/7 Emergency Repairs — Mississauga & GTA",
  description:
    "Zina's Contracting handles emergency home repairs, drywall, HVAC, plumbing, bathroom renovations, and painting across Mississauga, Brampton, and the GTA. Available 24 hours, 7 days a week. 5.0★ · 13 reviews. Call 647-272-0895.",
  openGraph: {
    title: "Zina's Contracting Inc. | 24/7 Emergency Repairs",
    description:
      "Fast, reliable emergency home repairs across Mississauga and GTA. Fred responds within 24 hours. Drywall, HVAC, plumbing, painting, bathroom renos. 5.0★ · 13 reviews.",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH3QOrgW5y6blDh_QYDnDFp8-JvZICD2V2lAht40o4HXRc12NIbOEcVuukfPHCFg20Jj-eayK3plh0yuIiZnomR_tdo7GwD51akAhznc_2UtZTWZ5JoJYAOf1gz9ZQvnL7Nvty-Svqp_QtO=w800-h600-k-no",
        width: 800,
        height: 600,
        alt: "Zina's Contracting — completed home repair work",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
