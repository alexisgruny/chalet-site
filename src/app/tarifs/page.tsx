import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/section/callToAction";

export const metadata = {
  title: "Tarifs — Chalet Jaïa",
  description:
    "Tarifs de location du Chalet Jaïa à Gérardmer : prix à la semaine et au week-end, selon la saison.",
};

const seasons = [
  {
    label: "Basse saison",
    period: "Janv. – mars · Oct. – nov.",
    week: "650 €",
    weekend: "320 €",
    highlight: false,
  },
  {
    label: "Mi-saison",
    period: "Avr. – juin · Sept.",
    week: "850 €",
    weekend: "420 €",
    highlight: true,
  },
  {
    label: "Haute saison",
    period: "Juil. – août · Déc. – vacances",
    week: "1 100 €",
    weekend: "550 €",
    highlight: false,
  },
];

const included = [
  "Lits faits à votre arrivée",
  "Linge de maison fourni (serviettes, draps)",
  "Ménage de fin de séjour",
  "Wi-Fi haut débit",
  "Accès borne de recharge électrique",
  "Parking privé gratuit",
  "Local vélo / ski sécurisé",
  "Arrivée autonome (boîte à clés)",
];

const conditions = [
  {
    title: "Durée minimale",
    body: "2 nuits pour un week-end, 7 nuits en haute saison (juillet, août et vacances scolaires).",
  },
  {
    title: "Acompte",
    body: "30 % du montant total à la réservation. Le solde est dû 30 jours avant l'arrivée.",
  },
  {
    title: "Caution",
    body: "500 € demandés à l'arrivée, restitués sous 7 jours après l'état des lieux de sortie.",
  },
  {
    title: "Animaux",
    body: "Les animaux de compagnie sont acceptés sur demande préalable (supplément de 30 €).",
  },
  {
    title: "Annulation",
    body: "Annulation gratuite jusqu'à 30 jours avant. Au-delà, l'acompte est conservé.",
  },
  {
    title: "Arrivée / Départ",
    body: "Arrivée dès 16 h, départ avant 11 h. Horaires flexibles selon disponibilité.",
  },
];

export default function TarifsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="w-full relative">
        <div className="relative h-[40vh] min-h-[320px] w-full">
          <Image
            src="/images/chalet/chaletHero.jpg"
            alt="Chalet Jaïa — Tarifs"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-section pb-10">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Tarifs & Réservation
              </h1>
              <p className="text-white/85 mt-2 text-lg">
                Chalet Jaïa · Gérardmer · 6 personnes · 83 m²
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Grille de prix ── */}
      <section className="section-beige">
        <div className="container-section">
          <h2 className="title-section-beige">Prix selon la saison</h2>
          <p className="text-muted mb-8 max-w-2xl">
            Tous les tarifs sont indiqués charges incluses (linge, ménage, Wi-Fi).
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {seasons.map(({ label, period, week, weekend, highlight }) => (
              <div
                key={label}
                className={`card flex flex-col gap-4 ${
                  highlight
                    ? "ring-2 ring-[#3a4b3c] shadow-lg"
                    : ""
                }`}
              >
                {highlight && (
                  <span className="self-start bg-[#3a4b3c] text-[#EBE2D6] text-xs font-semibold px-3 py-1 rounded-full">
                    Le plus demandé
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-[#3a4b3c]">{label}</h3>
                  <p className="text-sm text-[#3a4b3c]/60 mt-1">{period}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <div className="flex items-baseline justify-between">
                    <span className="text-muted text-sm">Semaine</span>
                    <span className="text-2xl font-bold text-[#3a4b3c]">{week}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-muted text-sm">Week-end</span>
                    <span className="text-xl font-semibold text-[#3a4b3c]">{weekend}</span>
                  </div>
                </div>

                <Link href="/contact" className="btn-primary mt-auto text-center text-sm">
                  Demander ce créneau
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-[#3a4b3c]/50">
            * Les tarifs sont donnés à titre indicatif et peuvent varier selon les périodes exactes.
            Contactez-nous pour un devis personnalisé.
          </p>
        </div>
      </section>

      {/* ── Ce qui est inclus ── */}
      <section className="section-green">
        <div className="container-section">
          <h2 className="title-section-green">Tout est inclus</h2>
          <p className="text-white/70 mb-8 max-w-2xl">
            Pas de mauvaises surprises : voici ce qui est compris dans chaque séjour.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-[#EBE2D6]/20 flex items-center justify-center text-[#EBE2D6] text-xs font-bold">
                  ✓
                </span>
                <span className="text-white/90 text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Conditions ── */}
      <section className="section-beige">
        <div className="container-section">
          <h2 className="title-section-beige">Conditions de réservation</h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {conditions.map(({ title, body }) => (
              <div key={title} className="card">
                <h3 className="font-bold text-[#3a4b3c]">{title}</h3>
                <p className="text-body-sm mt-2">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CallToAction />
    </>
  );
}
