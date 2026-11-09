const commitments = [
  "Le tri sélectif des déchets et le compostage.",
  "Des produits d'entretien naturels (vinaigre blanc, savon noir...).",
  "Des éponges, chiffons et brosses réutilisables.",
  "Un éclairage LED basse consommation.",
  "Un électroménager choisi, dans la mesure du possible, pour sa faible consommation d'énergie.",
  "Un poêle à granulés, un ballon thermodynamique et une climatisation réversible performante.",
  "Un local vélo pour encourager les mobilités douces.",
  "Une borne de recharge pour véhicules électriques.",
];

export default function EcoCommitment() {
  return (
    <section className="section-beige">
      <div className="container-section">
        <h2 className="title-section-beige">🌿 Notre démarche écoresponsable</h2>
        <p className="text-muted max-w-3xl">
          Au Chalet Jaïa, nous avons à cœur de réduire notre impact environnemental tout
          en vous offrant un séjour confortable.
        </p>

        <p className="text-[#3a4b3c] font-semibold mt-6 mb-3">
          Pour cela, nous privilégions :
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {commitments.map((commitment) => (
            <li key={commitment} className="card flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#3a4b3c]"
              />
              <span className="text-body-sm">{commitment}</span>
            </li>
          ))}
        </ul>

        <p className="text-muted mt-6 max-w-3xl">
          Chaque geste compte. Nous remercions nos voyageurs de participer à cette
          démarche afin de préserver ensemble la beauté de notre environnement naturel.
        </p>
      </div>
    </section>
  );
}
