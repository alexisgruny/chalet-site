import {
  Baby,
  Bath,
  BedDouble,
  BookOpen,
  CarFront,
  CookingPot,
  KeyRound,
  ShieldCheck,
  Shirt,
  Thermometer,
  Trees,
  Wifi,
  type LucideIcon,
} from "lucide-react";

const amenities: {
  title: string;
  icon: LucideIcon;
  items: string[];
}[] = [
  {
    title: "Salle de bain",
    icon: Bath,
    items: ["Sèche-cheveux", "Lisseur", "Sèche-serviette", "Gel douche et shampoing"],
  },
  {
    title: "Chambres",
    icon: BedDouble,
    items: [
      "2 lits doubles 160 × 200",
      "2 lits simples 80 × 190",
      "Dressing",
      "Volet roulant",
      "Linge de lit",
    ],
  },
  {
    title: "Linge",
    icon: Shirt,
    items: [
      "Lave-linge et sèche-linge",
      "Serviettes et draps",
      "Étendoir à linge",
      "Défroisseur",
    ],
  },
  {
    title: "Divertissement",
    icon: BookOpen,
    items: [
      "Télévision",
      "Tourne-disque et système audio Bluetooth",
      "Livres",
      "Jeux de société",
    ],
  },
  {
    title: "Famille",
    icon: Baby,
    items: [
      "Lit parapluie avec drap-housse, sur demande",
      "Chaise haute pliable, sur demande",
      "Baignoire pour bébé, sur demande",
      "Table à langer",
      "Livres et jouets pour enfants de 5 à 10 ans et de plus de 10 ans",
    ],
  },
  {
    title: "Chauffage et climatisation",
    icon: Thermometer,
    items: ["Climatisation réversible", "Poêle à granulés"],
  },
  {
    title: "Sécurité à la maison",
    icon: ShieldCheck,
    items: [
      "Détecteur de fumée",
      "Trousse de premiers secours",
      "Extincteur",
      "Couverture anti-feu",
    ],
  },
  {
    title: "Internet et bureau",
    icon: Wifi,
    items: ["Wi-Fi", "Espace de travail dédié"],
  },
  {
    title: "Cuisine et salle à manger",
    icon: CookingPot,
    items: [
      "Cuisine équipée pour préparer vos repas",
      "Réfrigérateur et congélateur",
      "Four et four à micro-ondes",
      "Plaque de cuisson à induction avec hotte connectée",
      "Lave-vaisselle",
      "Casseroles, poêles, vaisselle et couverts",
      "Huile, vinaigre, sel et poivre",
      "Bouilloire électrique, grille-pain et robot multifonction",
      "Machines à café Senseo et Tassimo",
    ],
  },
  {
    title: "Extérieur",
    icon: Trees,
    items: [
      "Arrière-cour privée",
      "Espace repas en plein air",
      "Jeux d'extérieur : pétanque et quilles finlandaises",
      "Barbecue électrique et ustensiles de barbecue",
      "Chaises longues",
      "Compost",
    ],
  },
  {
    title: "Parking et installations",
    icon: CarFront,
    items: [
      "Parking privé gratuit pour 2 véhicules, dont 1 place sous abri",
      "Recharge pour véhicule électrique",
      "Local vélo et ski sécurisé",
    ],
  },
  {
    title: "Services",
    icon: KeyRound,
    items: ["Arrivée autonome", "Boîte à clés sécurisée"],
  },
];

export default function Equipements() {
  return (
    <section className="section-beige">
      <div className="container-section">
        <div className="mb-8 max-w-3xl">
          <h2 className="title-section-beige">Ce que propose ce logement</h2>
          <p className="text-muted">
            Retrouvez les équipements et attentions prévus pour votre séjour au Chalet Jaïa.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {amenities.map(({ title, icon: Icon, items }) => (
            <section key={title} className="card">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3a4b3c]/10">
                  <Icon className="h-5 w-5 text-[#3a4b3c]" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-[#3a4b3c]">{title}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-[#3a4b3c]/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3a4b3c]/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
