import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-16">
      {/* Image */}
      <Image
        src="/images/chalet/exterieur-facade-hiver-sapin.jpg"
        alt="Chalet à la montagne"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Gradient mobile (bas → haut) */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#3a4b3c]/90 via-[#3a4b3c]/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end md:items-stretch">

        {/* Desktop : panneau latéral */}
        <div className="hidden md:flex bg-[#3a4b3c]/80 backdrop-blur-sm w-1/3 h-full items-center justify-center p-12">
          <div className="space-y-4 max-w-md">
            <h1 className="text-5xl font-bold text-white leading-tight">
              Chalet cosy à la montagne
            </h1>
            <p className="text-white/90 text-lg">
              6 personnes • vue dégagée sur les Vosges
            </p>
            <div className="flex flex-wrap gap-2">
              {["Poêle à pellets", "Climatisation", "Parking", "Wifi"].map((t) => (
                <span key={t} className="bg-white/15 text-white px-3 py-1 rounded-full text-sm backdrop-blur">
                  {t}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <Link href="/chalet" className="btn-secondary">
                Découvrir le chalet
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile : contenu en bas */}
        <div className="md:hidden w-full p-6 pb-12 space-y-3">
          <h1 className="text-3xl font-bold text-white leading-tight">
            Chalet cosy à la montagne
          </h1>
          <p className="text-white/85 text-base">
            6 personnes • vue dégagée sur les Vosges
          </p>
          <div className="flex flex-wrap gap-2">
            {["Poêle à pellets", "Climatisation", "Parking", "Wifi"].map((t) => (
              <span key={t} className="bg-white/15 text-white px-3 py-1 rounded-full text-sm backdrop-blur">
                {t}
              </span>
            ))}
          </div>
          <div className="pt-1">
            <Link href="/chalet" className="btn-secondary text-sm">
              Découvrir le chalet
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}