const rooms = [
  {
    name: "Chambre principale",
    desc: "Lit double sous toit mansardé en bois, déco chaleureuse, lampe de chevet, rangements.",
  },
  {
    name: "Chambre enfant / ados",
    desc: "Lit simple avec bureau, déco vélo, rangements pratiques.",
  },
  {
    name: "Coin montagne",
    desc: "Deux lits simples sous toit mansardé, ambiance cabane, parfait pour les enfants ou les ados.",
  },
];

export default function Sleeping() {
  return (
    <section className="section-green">
      <div className="container-section">
        <h2 className="title-section-green">Couchages</h2>
        <p className="text-white/70 mb-8 max-w-2xl">
          Le chalet accueille jusqu'à 6 personnes réparties sur 3 espaces nuit distincts.
          Lits faits et linge fourni à l'arrivée.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {rooms.map(({ name, desc }) => (
            <div key={name} className="card-dark space-y-2">
              <h3 className="font-bold text-white">{name}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
