import Image from "next/image";
import Link from "next/link";


export default function Description() {
    return (
        <section className="bg-[#3a4b3c] py-16">
  <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

      

      {/* Image */}
      <div className="order-2 md:order-1 relative h-[300px] sm:h-[380px] md:h-[450px] w-full overflow-hidden rounded-2xl">
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
              <Link
                href="/chalet"
                className="beige text-gray-900 px-5 py-3 rounded-lg font-semibold hover:bg-white/90 items-center inline-flex  gap-2 mt-4"
              >
                Voir les détails du chalet
              </Link>
      </div>
    </div>
  </div>
</section>
    );
}