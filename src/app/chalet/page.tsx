import Image from "next/image";
import Link from "next/link";
import FeaturesBar from "@/components/section/featuresBar";

export const metadata = {
  title: "Le chalet — Chalet Jaïa",
  description:
    "Présentation du Chalet Jaïa à Gérardmer : couchages, équipements, services et informations pratiques.",
};

export default function ChaletPage() {
  return (
    <main className="min-h-screen">
      {/* HERO full width */}
      <section className="w-full relative">
        <div className="relative h-[45vh] min-h-[360px] w-full">
          <Image
            src="/images/chalet/chaletHero.jpg"
            alt="Chalet Jaïa à Gérardmer"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="w-full">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 pb-10">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Chalet Jaïa
              </h1>
              <p className="text-white/90 mt-2">
                Gérardmer • 6 personnes • 83 m² • 2 chambres + coin montagne
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Poêle à pellets",
                  "Climatisation",
                  "Borne électrique",
                  "Arrivée autonome",
                  "Lits faits + serviettes",
                ].map((t) => (
                  <span
                    key={t}
                    className="bg-white/15 text-white px-3 py-1 rounded-full text-sm backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <Link
                  href="/contact"
                  className="green text-white px-6 py-3 rounded-full inline-flex items-center justify-center font-semibold hover:opacity-90 transition"
                >
                  Demander une réservation
                </Link>
                <Link
                  href="/galerie"
                  className="bg-white text-gray-900 px-6 py-3 rounded-full inline-flex items-center justify-center font-semibold hover:bg-white/90 transition"
                >
                  Voir les photos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features bar full width */}
      <FeaturesBar />

      {/* CONTENT centered */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-14 space-y-16">
        {/* Résumé */}
        <section className="grid gap-10 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3a4b3c]">
              Un refuge lumineux au cœur des Vosges
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cadre paisible à 7 km du lac de Gérardmer. Le Chalet Jaïa offre tout
              le confort pour un séjour en famille ou entre amis : espace de vie
              chaleureux, cuisine équipée, services pratiques et arrivée autonome.
            </p>

            <div className="grid sm:grid-cols-2 gap-2 text-[#3a4b3c] font-medium pt-2">
              <div>• 83 m²</div>
              <div>• Jusqu’à 6 personnes</div>
              <div>• Poêle à pellets + clim</div>
              <div>• Wifi</div>
              <div>• Local vélo / ski</div>
              <div>• Borne électrique</div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-lg text-[#3a4b3c]">
              Infos pratiques
            </h3>
            <div className="mt-4 space-y-2 text-gray-700">
              <div>• Localisation : Gérardmer (Vosges)</div>
              <div>• Lac : 7 km</div>
              <div>• Arrivée : boîte à clés</div>
              <div>• Linge : lits faits + serviettes fournies</div>
            </div>

            <Link
              href="/contact"
              className="mt-6 green text-white px-5 py-3 rounded-full inline-flex items-center justify-center font-semibold hover:opacity-90 transition"
            >
              Poser une question
            </Link>
          </div>
        </section>

        {/* Couchages */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3a4b3c]">
            Couchages
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-[#3a4b3c]">Chambre 1</h3>
              <p className="text-gray-700 mt-2">Lit 160×200</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-[#3a4b3c]">Chambre 2</h3>
              <p className="text-gray-700 mt-2">Lit 160×200</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-[#3a4b3c]">Coin montagne</h3>
              <p className="text-gray-700 mt-2">2 lits 80×190 + bureau</p>
            </div>
          </div>
        </section>

        {/* Équipements */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3a4b3c]">
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
        </section>

        {/* Services */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3a4b3c]">
            Services
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <InfoCard
              title="Arrivée autonome"
              text="Boîte à clés pour une arrivée simple."
            />
            <InfoCard
              title="Conciergerie"
              text="Assistance et gestion sur place."
            />
            <InfoCard
              title="Linge inclus"
              text="Lits faits à l’arrivée + serviettes fournies."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-[#EBE2D6] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#3a4b3c]">
              Prêt pour un séjour à Gérardmer ?
            </h3>
            <p className="text-[#3a4b3c]/90 mt-1">
              Dites-nous vos dates, on vous répond rapidement.
            </p>
          </div>
          <Link
            href="/contact"
            className="green text-white px-6 py-3 rounded-full inline-flex items-center justify-center font-semibold hover:opacity-90 transition"
          >
            Contacter / Réserver
          </Link>
        </section>
      </div>
    </main>
  );
}

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

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold text-[#3a4b3c]">{title}</h3>
      <p className="text-gray-700 mt-2">{text}</p>
    </div>
  );
}