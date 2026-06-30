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
    period: "Hors vacances scolaires",
    week: "À confirmer",
    weekend: "À confirmer",
    highlight: false,
  },
  {
    label: "Haute saison",
    period: "Vacances scolaires",
    week: "À confirmer",
    weekend: "À confirmer",
    highlight: true,
  },
];

const included = [
  "Lits faits à votre arrivée",
  "Linge de maison fourni (serviettes, draps)",
  "Ménage de fin de séjour",
  "Wi-Fi haut débit",
  "Parking privé gratuit",
  "Local vélo / ski sécurisé",
  "Arrivée autonome (boîte à clés)",
];

const supplements = [
  "Borne de recharge électrique : 25 €/sem. (prix à confirmer)",
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
    body: "1 000 € par chèque à l'arrivée, restitués après l'état des lieux de sortie. Une attestation de villégiature est requise.",
  },
  {
    title: "Animaux",
    body: "Les animaux de compagnie ne sont pas acceptés.",
  },
  {
    title: "Annulation",
    body: "Annulation gratuite jusqu'à 30 jours avant. Au-delà, l'acompte est conservé.",
  },
  {
    title: "Arrivée / Départ",
    body: "Arrivée dès 16 h, départ avant 10 h 30. Horaires flexibles selon disponibilité.",
  },
];

export default function TarifsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="w-full relative">
        <div className="relative h-[40vh] min-h-[320px] w-full">
          <Image
            src="/images/chalet/exterieur-facade-soleil.jpg"
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

          <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
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
                    <span className="text-lg font-bold text-[#3a4b3c]">{week}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-muted text-sm">Week-end</span>
                    <span className="text-base font-semibold text-[#3a4b3c]">{weekend}</span>
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

          <div className="mt-8 border-t border-white/20 pt-6">
            <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">Suppléments</p>
            <div className="flex flex-col gap-2">
              {supplements.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-xs">
                    +
                  </span>
                  <span className="text-white/70 text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
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
      <CallToAction hideTarifs />
    </>
  );
}
