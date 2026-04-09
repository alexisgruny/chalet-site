import Image from "next/image";
import Link from "next/link";


export default function Description() {
    return (
        <section className="section-green">
  <div className="container-section">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

      

      {/* Image — cachée sur mobile */}
      <div className="hidden md:block order-2 md:order-1 relative md:h-[450px] w-full overflow-hidden rounded-2xl">
        <Image
          src="/images/chalet/chaletHero.jpg"
          alt="Chalet Jaïa"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
{/* Texte */}
      <div className="order-1 md:order-2 text-white space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Le Chalet Jaïa, votre refuge de charme à Gérardmer
        </h2>

        <p className="text-lg">
          Situé dans un cadre paisible à seulement 7 km du lac de Gérardmer, le Chalet Jaïa
          vous accueille pour un séjour confortable et lumineux au cœur des Vosges.
          D’une superficie de 83 m², il peut accueillir jusqu’à 6 personnes avec ses
          deux chambres et son coin montagne.
        </p>

        <p className="text-lg">
          Entièrement équipé, le chalet dispose d’une cuisine moderne, d’un espace de vie
          chaleureux avec poêle à pellets, d’une connexion Wi-Fi, ainsi que de tout le
          nécessaire pour un séjour sans contrainte. Les lits sont faits à votre arrivée
          et le linge de maison est fourni.
        </p>

        {/* Points clés */}
        <div className="grid sm:grid-cols-2 gap-2 text-white/90 font-medium pt-2">
          <div>• 83 m² tout confort</div>
          <div>• 2 chambres + coin montagne</div>
          <div>• Poêle à pellets & climatisation</div>
          <div>• Cuisine entièrement équipée</div>
          <div>• Lits faits & serviettes fournis</div>
          <div>• Arrivée autonome</div>
        </div>
              <Link href="/chalet" className="btn-secondary gap-2 mt-4">
                Voir les détails du chalet
              </Link>
      </div>
    </div>
  </div>
</section>
    );
}