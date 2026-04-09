import "@/styles/globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata = {
  // ── À personnaliser avec les infos du client ────────────────────────────
  title: {
    default: "Chalet Jaïa — Location à Gérardmer",
    template: "%s — Chalet Jaïa",          // ex: "Tarifs — Chalet Jaïa"
  },
  description:
    "Louez le Chalet Jaïa à Gérardmer : 83 m², 6 personnes, poêle à pellets, wifi, borne électrique. À 7 km du lac et des pistes.",

  metadataBase: new URL("https://chalet-jaia.fr"), // ← remplacer par le vrai domaine

  openGraph: {
    title: "Chalet Jaïa — Location à Gérardmer",
    description:
      "Louez le Chalet Jaïa à Gérardmer : 83 m², 6 personnes, poêle à pellets, wifi, borne électrique. À 7 km du lac et des pistes.",
    url: "https://chalet-jaia.fr",
    siteName: "Chalet Jaïa",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/chalet/chaletHero.jpg", // ← idéalement une image 1200×630
        width: 1200,
        height: 630,
        alt: "Chalet Jaïa à Gérardmer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Chalet Jaïa — Location à Gérardmer",
    description:
      "Louez le Chalet Jaïa à Gérardmer : 83 m², 6 personnes, poêle à pellets, wifi, borne électrique.",
    images: ["/images/chalet/chaletHero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
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
