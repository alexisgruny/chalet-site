

export default function Equipements() {

  return (
    <section className="section-beige">
      <div className="container-section">
        <h2 className="title-section-beige mb-8">
          Équipements
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 snap-x snap-mandatory">
          <EquipCard
            title="Cuisine"
            items={[
              "Four, micro-ondes",
              "Lave-vaisselle",
              "Frigo combiné",
              "Cookeo, robot multifonction",
              "Barbecue Ninja multifonction",
            ]}
          />
          <EquipCard
            title="Confort"
            items={[
              "Poêle à pellets",
              "Climatisation",
              "Wifi",
              "Salon / salle de séjour",
              "Très lumineux",
            ]}
          />
          <EquipCard
            title="Multimédia"
            items={["Grand écran TV salon", "TV dans 1 chambre", "TV coin montagne", "Platine vinyle bluetooth"]}
          />
          <EquipCard
            title="Pratique"
            items={[
              "Lave-linge + sèche-linge",
              "Local vélo / ski",
              "Borne électrique",
              "Conciergerie",
            ]}
          />
        </div>
      </div>
    </section>

  );

  function EquipCard({ title, items }: { title: string; items: string[] }) {
    return (
      <div className="card flex-shrink-0 w-[75vw] sm:w-[55vw] md:w-auto snap-start">
        <h3 className="card-title">{title}</h3>
        <ul className="card-list">
          {items.map((t) => (
            <li key={t}>• {t}</li>
          ))}
        </ul>
      </div>
    );
  }

}