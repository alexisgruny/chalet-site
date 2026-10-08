import "@/styles/globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import { SITE_URL, SOCIAL_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "Chalet Jaïa — Location à Gérardmer",
    template: "%s — Chalet Jaïa",
  },
  description:
    "Louez le Chalet Jaïa à Gérardmer : chalet de 83 m² pour 6 personnes, à 8 minutes en voiture du lac et des pistes. Découvrez les équipements, tarifs et disponibilités.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Chalet Jaïa — Location à Gérardmer",
    description:
      "Louez le Chalet Jaïa à Gérardmer : chalet de 83 m² pour 6 personnes, à 8 minutes en voiture du lac et des pistes.",
    url: SITE_URL,
    siteName: "Chalet Jaïa",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1200,
        height: 630,
        alt: "Le Chalet Jaïa, location de vacances à Gérardmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chalet Jaïa — Location à Gérardmer",
    description:
      "Chalet de 83 m² pour 6 personnes à Gérardmer, à 8 minutes en voiture du lac et des pistes.",
    images: [SOCIAL_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LodgingBusiness", "VacationRental"],
  "name": "Chalet Jaïa",
  "description": "Chalet de vacances de 83 m² à Gérardmer, pouvant accueillir jusqu'à 6 personnes, à 8 minutes en voiture du lac et des pistes.",
  "url": SITE_URL,
  "image": `${SITE_URL}${SOCIAL_IMAGE}`,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Gérardmer",
    "addressRegion": "Vosges",
    "postalCode": "88400",
    "addressCountry": "FR",
  },
  "email": "chaletjaia@gmail.com",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Borne de recharge électrique", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Poêle à pellets", "value": true },
  ],
  "occupancy": { "@type": "QuantitativeValue", "maxValue": 6 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
