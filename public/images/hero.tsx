import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Image */}
      <Image
        src="/images/chalet/chaletHero.jpg"
        alt="Chalet à la montagne"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="absolute inset-0 flex items-stretch">
        <div className="green opacity-80 backdrop-blur-sm w-full md:w-1/3 h-full flex items-center justify-center p-8 md:p-12">
            <div className="space-y-4 max-w-md">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Chalet cosy à la montagne
            </h1>
            <p className="text-white/90 md:text-lg">
              6 personnes • proche des pistes • vue panoramique
            </p>

            <div className="flex flex-wrap gap-2">
              {["Cheminée", "Parking", "Wifi", "Terrasse"].map((t) => (
                <span
                  key={t}
                  className="bg-white/15 text-white px-3 py-1 rounded-full text-sm backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <Link
                href="/chalet"
                className="beige text-gray-900 px-5 py-3 rounded-lg font-semibold hover:bg-white/90"
              >
                Découvrir le chalet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}