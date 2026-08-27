"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Category =
    | "Tout"
    | "Salon & séjour"
    | "Cuisine"
    | "Chambre du bas"
    | "Chambre du haut"
    | "Coin montagne"
    | "Salle de bain"
    | "Toilettes"
    | "Entrée"
    | "Local technique";

type Photo = {
    src: string;
    alt: string;
    category: Exclude<Category, "Tout">;
};

const photos: Photo[] = [
    { src: "/images/chalet/salon-salle-a-manger/salon-ampoule-deco-patere.jpg", alt: "Salon ampoule deco patere", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-baie-vitree-escalier-terrasse.jpg", alt: "Salon baie vitree escalier terrasse", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-buffet-bougies-snowman.jpg", alt: "Salon buffet bougies snowman", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-buffet-deco-tv.jpg", alt: "Salon buffet deco tv", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-buffet-poele-deco.jpg", alt: "Salon buffet poele deco", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-canape-coussins-baie-vitree.jpg", alt: "Salon canape coussins baie vitree", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-canape-coussins-detail.jpg", alt: "Salon canape coussins detail", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-canape-coussins-escalier.jpg", alt: "Salon canape coussins escalier", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-canape-coussins-jaunes.jpg", alt: "Salon canape coussins jaunes", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-canape-coussins-moutarde-tapis.jpg", alt: "Salon canape coussins moutarde tapis", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-canape-coussins-moutarde.jpg", alt: "Salon canape coussins moutarde", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-canape-coussins-verres.jpg", alt: "Salon canape coussins verres", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-canape-escalier-baie-vitree.jpg", alt: "Salon canape escalier baie vitree", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-canape-escalier-tourne-disque.jpg", alt: "Salon canape escalier tourne disque", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-canape-horloge-mezzanine.jpg", alt: "Salon canape horloge mezzanine", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-escalier-baies-vitrees.jpg", alt: "Salon escalier baies vitrees", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-escalier-mezzanine-canape-vue.jpg", alt: "Salon escalier mezzanine canape vue", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-escalier-tourne-disque-canape.jpg", alt: "Salon escalier tourne disque canape", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-fenetres-terrasse-vue.jpg", alt: "Salon fenetres terrasse vue", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-horloge-escalier-vue-cuisine.jpg", alt: "Salon horloge escalier vue cuisine", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-meuble-tv-deco-lumiere.jpg", alt: "Salon meuble tv deco lumiere", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-meuble-tv-deco-vase.jpg", alt: "Salon meuble tv deco vase", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-meuble-tv-lumiere-soir.jpg", alt: "Salon meuble tv lumiere soir", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-meuble-tv-snowman-deco.jpg", alt: "Salon meuble tv snowman deco", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-poele-baies-vitrees-vosges.jpg", alt: "Salon poele baies vitrees vosges", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-poele-baies-vitrees-vue-village.jpg", alt: "Salon poele baies vitrees vue village", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-poele-canape-baies-vitrees.jpg", alt: "Salon poele canape baies vitrees", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-poele-cuisine-horloge.jpg", alt: "Salon poele cuisine horloge", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-poele-cuisine-vue-haut.jpg", alt: "Salon poele cuisine vue haut", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-poele-escalier-vue-terrasse.jpg", alt: "Salon poele escalier vue terrasse", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-poele-feu-detail.jpg", alt: "Salon poele feu detail", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-poele-tv-canape.jpg", alt: "Salon poele tv canape", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-table-dressee-cuisine-fond.jpg", alt: "Salon table dressee cuisine fond", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-table-dressee-fleurs.jpg", alt: "Salon table dressee fleurs", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-table-dressee-poele-baies.jpg", alt: "Salon table dressee poele baies", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-table-dressee-tv-poele.jpg", alt: "Salon table dressee tv poele", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-table-dressee-vue-large.jpg", alt: "Salon table dressee vue large", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-table-dressee-vue-porte.jpg", alt: "Salon table dressee vue porte", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-table-repas-poele.jpg", alt: "Salon table repas poele", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-table-repas-tv-poele.jpg", alt: "Salon table repas tv poele", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-table-repas-tv-vue-large.jpg", alt: "Salon table repas tv vue large", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-table-repas-tv.jpg", alt: "Salon table repas tv", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-table-vue-escalier-jour.jpg", alt: "Salon table vue escalier jour", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-tourne-disque-plaid-coussin.jpg", alt: "Salon tourne disque plaid coussin", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-tourne-disque-vintage-escalier.jpg", alt: "Salon tourne disque vintage escalier", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-tv-buffet-fleurs.jpg", alt: "Salon tv buffet fleurs", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-ensemble-escalier.jpg", alt: "Salon vue ensemble escalier", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-ensemble-mezzanine-2.jpg", alt: "Salon vue ensemble mezzanine 2", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-ensemble-mezzanine-baies.jpg", alt: "Salon vue ensemble mezzanine baies", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-ensemble-mezzanine-poele.jpg", alt: "Salon vue ensemble mezzanine poele", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-ensemble-poele-terrasse.jpg", alt: "Salon vue ensemble poele terrasse", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-escalier-table.jpg", alt: "Salon vue escalier table", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-large-terrasse-poele.jpg", alt: "Salon vue large terrasse poele", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-mezzanine-canape-table.jpg", alt: "Salon vue mezzanine canape table", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-plongeante-baies-vitrees.jpg", alt: "Salon vue plongeante baies vitrees", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-plongeante-cuisine-horloge.jpg", alt: "Salon vue plongeante cuisine horloge", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-plongeante-escalier-bar.jpg", alt: "Salon vue plongeante escalier bar", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-plongeante-escalier-detail.jpg", alt: "Salon vue plongeante escalier detail", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-plongeante-fenetres-toit.jpg", alt: "Salon vue plongeante fenetres toit", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-plongeante-horloge-cuisine-2.jpg", alt: "Salon vue plongeante horloge cuisine 2", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-plongeante-horloge-cuisine.jpg", alt: "Salon vue plongeante horloge cuisine", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-plongeante-mezzanine.jpg", alt: "Salon vue plongeante mezzanine", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-plongeante-poele-fenetre.jpg", alt: "Salon vue plongeante poele fenetre", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-plongeante-table-chaises-2.jpg", alt: "Salon vue plongeante table chaises 2", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-plongeante-table-chaises.jpg", alt: "Salon vue plongeante table chaises", category: "Salon & séjour" },
    { src: "/images/chalet/salon-salle-a-manger/salon-vue-plongeante-table-repas.jpg", alt: "Salon vue plongeante table repas", category: "Salon & séjour" },
    { src: "/images/chalet/cuisine/cuisine-cookeo-cafetiere-detail.jpg", alt: "Cuisine cookeo cafetiere detail", category: "Cuisine" },
    { src: "/images/chalet/cuisine/cuisine-evier-robinet-accessoires.jpg", alt: "Cuisine evier robinet accessoires", category: "Cuisine" },
    { src: "/images/chalet/cuisine/cuisine-four-horloge-table-vue.jpg", alt: "Cuisine four horloge table vue", category: "Cuisine" },
    { src: "/images/chalet/cuisine/cuisine-four-micro-ondes-colonne.jpg", alt: "Cuisine four micro ondes colonne", category: "Cuisine" },
    { src: "/images/chalet/cuisine/cuisine-four-micro-ondes-hotte-vue.jpg", alt: "Cuisine four micro ondes hotte vue", category: "Cuisine" },
    { src: "/images/chalet/cuisine/cuisine-four-table-fleurs.jpg", alt: "Cuisine four table fleurs", category: "Cuisine" },
    { src: "/images/chalet/cuisine/cuisine-grille-pain-bouilloire-cafetiere.jpg", alt: "Cuisine grille pain bouilloire cafetiere", category: "Cuisine" },
    { src: "/images/chalet/cuisine/cuisine-hotte-four-comptoir.jpg", alt: "Cuisine hotte four comptoir", category: "Cuisine" },
    { src: "/images/chalet/cuisine/cuisine-petits-electromenagers.jpg", alt: "Cuisine petits electromenagers", category: "Cuisine" },
    { src: "/images/chalet/cuisine/cuisine-plaque-induction-plan-travail.jpg", alt: "Cuisine plaque induction plan travail", category: "Cuisine" },
    { src: "/images/chalet/cuisine/cuisine-tv-hotte-fenetre.jpg", alt: "Cuisine tv hotte fenetre", category: "Cuisine" },
    { src: "/images/chalet/cuisine/cuisine-vue-ensemble-hotte.jpg", alt: "Cuisine vue ensemble hotte", category: "Cuisine" },
    { src: "/images/chalet/chambre-bas/chambre-bas-chevet-hibou-deco.jpg", alt: "Chambre bas chevet hibou deco", category: "Chambre du bas" },
    { src: "/images/chalet/chambre-bas/chambre-bas-chevet-panier-carafe.jpg", alt: "Chambre bas chevet panier carafe", category: "Chambre du bas" },
    { src: "/images/chalet/chambre-bas/chambre-bas-dressing-rangements.jpg", alt: "Chambre bas dressing rangements", category: "Chambre du bas" },
    { src: "/images/chalet/chambre-bas/chambre-bas-lit-porte-vitree-chaise.jpg", alt: "Chambre bas lit porte vitree chaise", category: "Chambre du bas" },
    { src: "/images/chalet/chambre-bas/chambre-bas-lit-rayures-serviettes.jpg", alt: "Chambre bas lit rayures serviettes", category: "Chambre du bas" },
    { src: "/images/chalet/chambre-bas/chambre-bas-lit-tv-clim.jpg", alt: "Chambre bas lit tv clim", category: "Chambre du bas" },
    { src: "/images/chalet/chambre-bas/chambre-bas-lit-vue-large-clim.jpg", alt: "Chambre bas lit vue large clim", category: "Chambre du bas" },
    { src: "/images/chalet/chambre-haut/chambre-haut-applique-detail-nuit.jpg", alt: "Chambre haut applique detail nuit", category: "Chambre du haut" },
    { src: "/images/chalet/chambre-haut/chambre-haut-chevet-applique-deco.jpg", alt: "Chambre haut chevet applique deco", category: "Chambre du haut" },
    { src: "/images/chalet/chambre-haut/chambre-haut-chevet-clim-pommes-pin.jpg", alt: "Chambre haut chevet clim pommes pin", category: "Chambre du haut" },
    { src: "/images/chalet/chambre-haut/chambre-haut-dressing-penderie.jpg", alt: "Chambre haut dressing penderie", category: "Chambre du haut" },
    { src: "/images/chalet/chambre-haut/chambre-haut-dressing-rideau.jpg", alt: "Chambre haut dressing rideau", category: "Chambre du haut" },
    { src: "/images/chalet/chambre-haut/chambre-haut-lit-vue-ensemble-chevet.jpg", alt: "Chambre haut lit vue ensemble chevet", category: "Chambre du haut" },
    { src: "/images/chalet/chambre-haut/chambre-haut-lit-vue-ensemble-deco-murale.jpg", alt: "Chambre haut lit vue ensemble deco murale", category: "Chambre du haut" },
    { src: "/images/chalet/chambre-haut/chambre-haut-serviettes-detail.jpg", alt: "Chambre haut serviettes detail", category: "Chambre du haut" },
    { src: "/images/chalet/chambre-haut/chambre-haut-tete-de-lit-chevet.jpg", alt: "Chambre haut tete de lit chevet", category: "Chambre du haut" },
    { src: "/images/chalet/chambre-haut/chambre-haut-vue-ensemble-porte.jpg", alt: "Chambre haut vue ensemble porte", category: "Chambre du haut" },
    { src: "/images/chalet/chambre-haut/chambre-haut-vue-plongeante-fenetre.jpg", alt: "Chambre haut vue plongeante fenetre", category: "Chambre du haut" },
    { src: "/images/chalet/coin-montagne/coin-montagne-banquette-bleu-marine.jpg", alt: "Coin montagne banquette bleu marine", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-banquette-coussins.jpg", alt: "Coin montagne banquette coussins", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-bibliotheque-tv-jeux.jpg", alt: "Coin montagne bibliotheque tv jeux", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-bureau-cahier.jpg", alt: "Coin montagne bureau cahier", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-bureau-crayons.jpg", alt: "Coin montagne bureau crayons", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-bureau-deco-oiseaux.jpg", alt: "Coin montagne bureau deco oiseaux", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-bureau-detail.jpg", alt: "Coin montagne bureau detail", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-bureau-lampe-oiseaux.jpg", alt: "Coin montagne bureau lampe oiseaux", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-couloir-mezzanine-vue-salon.jpg", alt: "Coin montagne couloir mezzanine vue salon", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-deco-renne.jpg", alt: "Coin montagne deco renne", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-detail-velo-deco.jpg", alt: "Coin montagne detail velo deco", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-enfant-bureau-velo.jpg", alt: "Coin montagne enfant bureau velo", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-enfant-lit-coussins-bleus.jpg", alt: "Coin montagne enfant lit coussins bleus", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-enfant-vue-lit.jpg", alt: "Coin montagne enfant vue lit", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-etageres-jeux-tv.jpg", alt: "Coin montagne etageres jeux tv", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-lit-coussins-oranges.jpg", alt: "Coin montagne lit coussins oranges", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-lit-mansarde-rangements.jpg", alt: "Coin montagne lit mansarde rangements", category: "Coin montagne" },
    { src: "/images/chalet/coin-montagne/coin-montagne-lit-velo-mural.jpg", alt: "Coin montagne lit velo mural", category: "Coin montagne" },
    { src: "/images/chalet/salle-de-bain/salle-de-bain-douche-detail.jpg", alt: "Salle de bain douche detail", category: "Salle de bain" },
    { src: "/images/chalet/salle-de-bain/salle-de-bain-douche-vasque-miroir.jpg", alt: "Salle de bain douche vasque miroir", category: "Salle de bain" },
    { src: "/images/chalet/salle-de-bain/salle-de-bain-douche-vasque.jpg", alt: "Salle de bain douche vasque", category: "Salle de bain" },
    { src: "/images/chalet/salle-de-bain/salle-de-bain-patere-bois-detail.jpg", alt: "Salle de bain patere bois detail", category: "Salle de bain" },
    { src: "/images/chalet/salle-de-bain/salle-de-bain-radiateur-serviettes-vasque.jpg", alt: "Salle de bain radiateur serviettes vasque", category: "Salle de bain" },
    { src: "/images/chalet/salle-de-bain/salle-de-bain-serviettes-patere.jpg", alt: "Salle de bain serviettes patere", category: "Salle de bain" },
    { src: "/images/chalet/salle-de-bain/salle-de-bain-serviettes.jpg", alt: "Salle de bain serviettes", category: "Salle de bain" },
    { src: "/images/chalet/toilette/toilette-deco-vase-etagere.jpg", alt: "Toilette deco vase etagere", category: "Toilettes" },
    { src: "/images/chalet/toilette/toilette-wc-suspendu-derouleur.jpg", alt: "Toilette wc suspendu derouleur", category: "Toilettes" },
    { src: "/images/chalet/entree/entree-couloir-vue-salon.jpg", alt: "Entree couloir vue salon", category: "Entrée" },
    { src: "/images/chalet/entree/entree-miroir-porte-entree.jpg", alt: "Entree miroir porte entree", category: "Entrée" },
    { src: "/images/chalet/entree/entree-penderie-banc-rangement.jpg", alt: "Entree penderie banc rangement", category: "Entrée" },
    { src: "/images/chalet/local-technique/local-technique-lave-linge-seche-linge.jpg", alt: "Local technique lave linge seche linge", category: "Local technique" },
];

const categories: Category[] = [
    "Tout",
    "Salon & séjour",
    "Cuisine",
    "Chambre du bas",
    "Chambre du haut",
    "Coin montagne",
    "Salle de bain",
    "Toilettes",
    "Entrée",
    "Local technique",
];

export default function GalleryClient() {
    const [active, setActive] = useState<Category>("Tout");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const filtered = useMemo(() => {
        if (active === "Tout") return photos;
        return photos.filter((p) => p.category === active);
    }, [active]);

    const open = (i: number) => setOpenIndex(i);
    const close = () => setOpenIndex(null);

    const prev = () =>
        setOpenIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    const next = () =>
        setOpenIndex((i) => (i === null ? null : (i + 1) % filtered.length));

    return (
        <>
            {/* Hero */}
            <section className="w-full relative">
                <div className="relative h-[40vh] min-h-[320px] w-full">
                    <Image
                        src="/images/chalet/salon-salle-a-manger/salon-escalier-mezzanine-canape-vue.jpg"
                        alt="Galerie — Chalet Jaïa"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-end">
                        <div className="container-section pb-8 space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl md:text-5xl font-bold text-white">
                                    Galerie
                                </h1>
                                <p className="text-white/85 text-lg">
                                    Découvrez le Chalet Jaïa pièce par pièce : séjour, cuisine, chambres et espaces de vie.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((c) => (
                                    <button
                                        key={c}
                                        onClick={() => setActive(c)}
                                        className={`px-4 py-2 rounded-full text-sm font-semibold transition
                                            ${active === c
                                                ? "bg-white text-[#3a4b3c]"
                                                : "bg-white/20 text-white hover:bg-white/30"
                                            }`}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grille premium full width */}
            <div className="w-full px-4 sm:px-6 lg:px-12 pb-14 mt-8 md:mt-12">
                {/* Rangée premium (1 grande + 4 petites) */}
                {filtered.length >= 5 && (
                    <div className="grid gap-3 md:gap-4 md:grid-cols-2 mb-4">
                        {/* grande */}
                        <button
                            onClick={() => open(0)}
                            className="relative overflow-hidden rounded-2xl h-[320px] md:h-[520px] group"
                            aria-label="Ouvrir la photo"
                        >
                            <Image
                                src={filtered[0].src}
                                alt={filtered[0].alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                        </button>

                        {/* 4 petites */}
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            {[1, 2, 3, 4].map((idx) => (
                                <button
                                    key={idx}
                                    onClick={() => open(idx)}
                                    className="relative overflow-hidden rounded-2xl h-[156px] md:h-[252px] group"
                                    aria-label="Ouvrir la photo"
                                >
                                    <Image
                                        src={filtered[idx].src}
                                        alt={filtered[idx].alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Grille standard pour le reste */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {filtered.slice(filtered.length >= 5 ? 5 : 0).map((p, i) => {
                        const realIndex = (filtered.length >= 5 ? 5 : 0) + i;
                        return (
                            <button
                                key={`${p.src}-${i}`}
                                onClick={() => open(realIndex)}
                                className="relative aspect-square overflow-hidden rounded-2xl group"
                                aria-label="Ouvrir la photo"
                            >
                                <Image
                                    src={p.src}
                                    alt={p.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Lightbox simple */}
            {openIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Galerie agrandie"
                    onClick={close}
                >
                    <div
                        className="relative w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-[70vh] overflow-hidden rounded-2xl bg-black">
                            <Image
                                src={filtered[openIndex].src}
                                alt={filtered[openIndex].alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </div>

                        <div className="mt-3 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <p className="text-sm opacity-90 truncate">{filtered[openIndex].alt}</p>

                            <div className="flex gap-2 justify-center sm:justify-end flex-shrink-0">
                                <button
                                    onClick={prev}
                                    aria-label="Photo précédente"
                                    className="flex-1 sm:flex-none px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-lg"
                                >
                                    ←
                                </button>
                                <button
                                    onClick={next}
                                    aria-label="Photo suivante"
                                    className="flex-1 sm:flex-none px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-lg"
                                >
                                    →
                                </button>
                                <button
                                    onClick={close}
                                    aria-label="Fermer la galerie"
                                    className="flex-1 sm:flex-none px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium"
                                >
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}