const services = [
  {
    title: "Conciergerie à la carte",
    items: [
      "Arrivée autonome ou sur rendez-vous",
      "Livraison de vos courses et du petit-déjeuner",
      "Baby-sitting",
      "Réservation d'activités et organisation d'événements",
      "Massage à domicile",
      "Autres demandes particulières",
    ],
  },
  {
    title: "Linge & ménage",
    items: [
      "Lits faits à votre arrivée",
      "Serviettes et draps fournis",
      "Forfait ménage de fin de séjour obligatoire : 120 €",
      "Ménage pendant le séjour sur demande (en supplément)",
    ],
  },
  {
    title: "Équipements inclus",
    items: [
      "Wi-Fi haut débit",
      "Parking privé gratuit pour 2 véhicules, dont 1 place sous abri",
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
    <section className="section-green relative overflow-hidden">
      {/* Blobs décoratifs pour renforcer l'effet verre */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="container-section relative">
        <h2 className="title-section-green">Services</h2>
        <p className="text-white/70 mb-8 max-w-2xl">
          Tout est pensé pour que vous n&apos;ayez à vous occuper de rien dès votre arrivée.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, items }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 space-y-3 shadow-sm"
            >
              <h3 className="font-bold text-white">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#EBE2D6]/50 flex-shrink-0" />
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
