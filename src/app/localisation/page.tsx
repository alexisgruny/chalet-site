import Image from "next/image";
import Link from "next/link";
import { Car, Train, Plane, MapPin, Clock, CircleParking, KeyRound } from "lucide-react";
import CallToAction from "@/components/section/callToAction";

export const metadata = {
  title: "Accès — Chalet Jaïa",
  description:
    "Comment accéder au Chalet Jaïa à Gérardmer : itinéraires en voiture, train et avion, parking, et instructions d'arrivée.",
};

const distances = [
  { lieu: "Lac de Gérardmer", distance: "7 km", duree: "10 min" },
  { lieu: "Centre-ville de Gérardmer", distance: "7,8 km", duree: "12 min" },
  { lieu: "Station ski Gérardmer", distance: "9,8 km", duree: "15 min" },
  { lieu: "Station ski La Bresse", distance: "22 km", duree: "28 min" },
  { lieu: "Gare de Remiremont", distance: "20 km", duree: "25 min" },
  { lieu: "Épinal", distance: "44 km", duree: "50 min" },
  { lieu: "Colmar", distance: "55 km", duree: "1 h" },
  { lieu: "Strasbourg", distance: "100 km", duree: "1 h 20" },
];

const itineraires = [
  {
    icon: Car,
    title: "En voiture",
    content: [
      "Depuis Nancy ou Épinal : A33 puis D415 via Remiremont.",
      "Depuis Colmar (Alsace) : col de la Schlucht (D417), route panoramique.",
      "Parking privé inclus sur place, suffisant pour 2 véhicules.",
    ],
  },
  {
    icon: Train,
    title: "En train",
    content: [
      "Gare la plus proche : Remiremont (20 km), desservie depuis Paris-Est (TGV + TER).",
      "Depuis Remiremont, taxi ou navette jusqu'au chalet (~25 min).",
      "Gare d'Épinal également accessible (44 km), avec location de voitures sur place.",
    ],
  },
  {
    icon: Plane,
    title: "En avion",
    content: [
      "Aéroport de Strasbourg-Entzheim (100 km) — liaisons nationales et européennes.",
      "Aéroport de Basel-Mulhouse (120 km) — liaisons low-cost.",
      "Location de voiture recommandée depuis l'aéroport.",
    ],
  },
];

export default function LocalisationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="w-full relative">
        <div className="relative h-[40vh] min-h-[320px] w-full">
          <Image
            src="/images/chalet/chaletHero.jpg"
            alt="Accès au Chalet Jaïa"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-section pb-10">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Accès & Localisation
              </h1>
              <p className="text-white/85 mt-2 text-lg flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Gérardmer, Vosges (88)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Adresse + Carte ── */}
      <section className="section-beige">
        <div className="container-section">
          <h2 className="title-section-beige">Où nous trouver</h2>

          <div className="grid gap-6 md:grid-cols-2 items-start">
            {/* Adresse */}
            <div className="card space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#3a4b3c]/50 mb-1">Adresse</p>
                <p className="font-semibold text-[#3a4b3c] text-lg leading-snug">
                  Chalet Jaïa<br />
                  Gérardmer, 88400<br />
                  Vosges, France
                </p>
              </div>

              <div className="h-px bg-gray-100" />

              <div className="space-y-2 text-muted text-sm">
                <p>L&apos;adresse exacte est communiquée après confirmation de la réservation.</p>
                <p>Coordonnées GPS transmises avec la confirmation de réservation.</p>
              </div>

              <a
                href="https://www.google.fr/maps/place/G%C3%A9rardmer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm text-center"
              >
                Ouvrir dans Google Maps
              </a>
            </div>

            {/* Carte intégrée */}
            <div className="overflow-hidden rounded-2xl shadow-sm h-[280px] md:h-full min-h-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84989.12345678901!2d6.7!3d48.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479233e5b4d0af0d%3A0x40a90b3900b2e70d!2sG%C3%A9rardmer!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Gérardmer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Distances ── */}
      <section className="section-green">
        <div className="container-section">
          <h2 className="title-section-green">Distances depuis le chalet</h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {distances.map(({ lieu, distance, duree }) => (
              <div
                key={lieu}
                className="bg-white/10 rounded-2xl p-4 flex flex-col gap-1"
              >
                <p className="font-semibold text-white text-sm">{lieu}</p>
                <div className="flex items-center gap-3 text-white/70 text-sm mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Car className="h-3 w-3" />
                    <Clock className="h-3 w-3" />
                    {duree}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Itinéraires ── */}
      <section className="section-beige">
        <div className="container-section">
          <h2 className="title-section-beige">Comment venir</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {itineraires.map(({ icon: Icon, title, content }) => (
              <div key={title} className="card space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#3a4b3c]/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#3a4b3c]" />
                  </div>
                  <h3 className="font-bold text-[#3a4b3c] text-lg">{title}</h3>
                </div>
                <ul className="space-y-2">
                  {content.map((line) => (
                    <li key={line} className="text-body-sm flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3a4b3c]/30 flex-shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Arrivée ── */}
      <section className="section-green">
        <div className="container-section">
          <h2 className="title-section-green">Arrivée au chalet</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-dark space-y-2">
              <div className="flex items-center gap-3 mb-3">
                <KeyRound className="h-5 w-5 text-[#EBE2D6]" />
                <h3 className="font-bold text-white">Arrivée autonome</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Le chalet est équipé d&apos;une boîte à clés sécurisée. Le code vous sera
                transmis par message 24 h avant votre arrivée.
              </p>
            </div>

            <div className="card-dark space-y-2">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-[#EBE2D6]" />
                <h3 className="font-bold text-white">Horaires</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Arrivée dès <strong className="text-white">16 h</strong> · Départ avant <strong className="text-white">11 h</strong>.
                Des horaires flexibles peuvent être arrangés selon disponibilité.
              </p>
            </div>

            <div className="card-dark space-y-2">
              <div className="flex items-center gap-3 mb-3">
                <CircleParking className="h-5 w-5 text-[#EBE2D6]" />
                <h3 className="font-bold text-white">Parking</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Parking privé gratuit sur place pour 2 véhicules. Local sécurisé
                disponible pour vélos et équipements de ski.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact" className="btn-secondary">
              Contacter les propriétaires
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CallToAction />
    </>
  );
}
