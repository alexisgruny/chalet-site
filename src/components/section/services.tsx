const services = [
  {
    title: "Conciergerie",
    items: [
      "Arrivée autonome par boîte à clés sécurisée",
      "Code transmis 24 h avant l'arrivée",
      "Réponse directe des propriétaires",
    ],
  },
  {
    title: "Linge & ménage",
    items: [
      "Lits faits à votre arrivée",
      "Serviettes et draps fournis",
      "Ménage de fin de séjour inclus",
    ],
  },
  {
    title: "Équipements inclus",
    items: [
      "Wi-Fi haut débit",
      "Parking privé gratuit (2 véhicules)",
      "Local vélo / ski sécurisé",
    ],
  },
  {
    title: "En option",
    items: [
      "Borne de recharge électrique (supplément)",
    ],
  },
];

export default function Services() {
  return (
    <section className="section-beige">
      <div className="container-section">
        <h2 className="title-section-beige">Services</h2>
        <p className="text-muted mb-8 max-w-2xl">
          Tout est pensé pour que vous n'ayez à vous occuper de rien dès votre arrivée.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, items }) => (
            <div key={title} className="card space-y-3">
              <h3 className="font-bold text-[#3a4b3c]">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3a4b3c]/30 flex-shrink-0" />
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
