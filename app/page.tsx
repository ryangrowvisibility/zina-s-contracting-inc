import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import StatsStrip from "./components/StatsStrip";
import ServicesSection from "./components/ServicesSection";
import PhotoStrip from "./components/PhotoStrip";
import TestimonialsSection from "./components/TestimonialsSection";
import ProcessSection from "./components/ProcessSection";
import StandardsSection from "./components/StandardsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Zina's Contracting Inc.",
  description:
    "Zina's Contracting provides 24/7 emergency home repairs across Mississauga, Brampton, and the GTA. Services include emergency plumbing, drywall, HVAC grill repair, bathroom renovation, interior painting, and framing.",
  telephone: "+1-647-272-0895",
  url: "https://zina-s-contracting-inc.vercel.app",
  areaServed: [
    { "@type": "City", name: "Mississauga" },
    { "@type": "City", name: "Brampton" },
    { "@type": "City", name: "Toronto" },
  ],
  openingHours: "Mo-Su 00:00-23:59",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "13",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Contracting & Emergency Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Home Repairs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Framing & Finishing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "HVAC Grill Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Plumbing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Renovation" } },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavBar />
      <main>
        <HeroSection />
        <StatsStrip />
        <ServicesSection />
        <PhotoStrip />
        <TestimonialsSection />
        <ProcessSection />
        <StandardsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
