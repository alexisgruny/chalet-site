import Image from "next/image";
import Link from "next/link";

export default function HeroChalet() {
return (

<section className="w-full relative">
        <div className="relative h-[70vh] min-h-[520px] md:h-[40vh] md:min-h-[320px] w-full">

          {/* Image */}
          <Image
            src="/images/chalet/exterieur-facade-hiver-sapin.jpg"
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
            <div className="container-section pb-10">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Location chalet à Gérardmer – Chalet Jaïa
              </h1>
              <p className="text-white/90 mt-2">
                Gérardmer • 6 personnes • 83 m² • 2 chambres + coin montagne
              </p>

              <p className="text-white/85 mt-3 max-w-2xl">
                Chalet tout confort dans les Vosges, à 7 km du lac de Gérardmer : poêle à pellets,
                climatisation, wifi, arrivée autonome et linge inclus.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Poêle à pellets",
                  "Climatisation",
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

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link href="/contact" className="btn-primary text-sm text-center">
                  Demander une réservation
                </Link>
                <Link href="/galerie" className="btn-secondary text-sm text-center">
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
