import Link from "next/link";

export default function Localisation() {
    return (
        <section className="section-beige">
            <div className="container-section">
                <h2 className="title-section-beige">
                    Localisation et accès
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="font-bold text-lg text-[#3a4b3c]">Distances</h3>
                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li>• Lac de Gérardmer : 7 km</li>
                            <li>• Centre-ville : 7,8 km</li>
                            <li>• Station de ski Gérardmer : 9,8 km</li>
                            <li>• Station de ski La Bresse : 22 km</li>
                            <li>• Gare de Remiremont : 20 km</li>
                        </ul>

                        <Link
                            href="/acces"
                            className="mt-6 inline-flex font-semibold text-[#3a4b3c] underline underline-offset-4 hover:opacity-80"
                        >
                            Voir les informations d’accès
                        </Link>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="font-bold text-lg text-[#3a4b3c]">Un cadre paisible</h3>
                        <p className="text-gray-700 mt-3 leading-relaxed">
                            Le Chalet Jaïa se situe dans un environnement calme, idéal pour se reposer,
                            tout en restant proche des lacs, des randonnées et des stations de ski.
                        </p>
                        <p className="text-gray-700 mt-3 leading-relaxed">
                            Parfait pour un week-end à Gérardmer ou des vacances dans les Vosges, en toute saison.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}