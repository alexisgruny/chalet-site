import Link from "next/link";

export default function PricingPreview() {
  return (
    <section className="section-beige">
      <div className="container-section">
        <h2 className="title-section-beige">Tarifs</h2>
        <p className="text-muted mb-8 max-w-2xl">
          Deux tarifs selon la période : basse saison (hors vacances scolaires) et haute saison
          (vacances scolaires). Linge, ménage et Wi-Fi inclus.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 max-w-xl">
          <div className="card flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Basse saison</p>
            <p className="text-lg font-bold text-[#3a4b3c]">Hors vacances scolaires</p>
            <p className="text-sm text-muted">Location à la semaine ou au week-end</p>
          </div>
          <div className="card flex flex-col gap-2 ring-2 ring-[#3a4b3c]">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Haute saison</p>
            <p className="text-lg font-bold text-[#3a4b3c]">Vacances scolaires</p>
            <p className="text-sm text-muted">Location à la semaine ou au week-end</p>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/tarifs" className="btn-primary text-sm">
            Voir les tarifs complets
          </Link>
        </div>
      </div>
    </section>
  );
}
