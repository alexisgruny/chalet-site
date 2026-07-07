const rooms = [
  {
    name: "Chambre rez-de-chaussée",
    items: [
      "Lit double 160×200",
      "Placard avec penderie et étagères",
      "Table de chevet",
      "Télévision",
    ],
  },
  {
    name: "Chambre étage",
    items: [
      "Lit double 160×200",
      "Table de chevet",
      "Dressing partagé avec le coin montagne",
    ],
  },
  {
    name: "Coin montagne",
    items: [
      "2 lits 80×190",
      "Coin détente et jeux",
      "Petit bureau",
      "Télévision",
    ],
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
          {rooms.map(({ name, items }) => (
            <div key={name} className="card-dark space-y-3">
              <h3 className="font-bold text-white">{name}</h3>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#EBE2D6]/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
