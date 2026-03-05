

export default function Equipements() {

  return (
    <section className="section-beige">
      <div className="container-section">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3a4b3c] mb-8">
          Équipements
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
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
            items={["Grand écran TV", "TV dans 1 chambre", "TV coin montagne"]}
          />
          <EquipCard
            title="Pratique"
            items={[
              "Lave-linge + sèche-linge",
              "Local vélo / ski",
              "Borne électrique",
            ]}
          />
        </div>
      </div>
    </section>

  );

  function EquipCard({ title, items }: { title: string; items: string[] }) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="font-bold text-lg text-[#3a4b3c]">{title}</h3>
        <ul className="mt-4 space-y-2 text-gray-700">
          {items.map((t) => (
            <li key={t}>• {t}</li>
          ))}
        </ul>
      </div>
    );
  }

}