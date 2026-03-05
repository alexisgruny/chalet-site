import Image from "next/image";
import Link from "next/link";

export default function HeroChalet() {
return (

<section className="w-full relative">
        <div className="relative h-[45vh] min-h-[360px] w-full">

          {/* Image */}
          <Image
            src="/images/chalet/chaletHero.jpg"
            alt="Chalet Jaïa à Gérardmer"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 pb-10">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Location chalet à Gérardmer – Chalet Jaïa
              </h1>
              <p className="text-white/90 mt-2">
                Gérardmer • 6 personnes • 83 m² • 2 chambres + coin montagne
              </p>

              <p className="text-white/85 mt-3 max-w-2xl">
                Chalet tout confort dans les Vosges, à 7 km du lac de Gérardmer : poêle à pellets,
                climatisation, wifi, borne de recharge, arrivée autonome et linge inclus.
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

                {/* CTA */}
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
        </div>
      </section>
);
}