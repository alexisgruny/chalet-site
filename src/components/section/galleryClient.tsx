"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Category = "Tout" | "Extérieur" | "Salon" | "Chambres" | "Cuisine" | "Services";

type Photo = {
    src: string;
    alt: string;
    category: Exclude<Category, "Tout">;
};

const photos: Photo[] = [
    // Extérieur
    { src: "/images/chalet/exterieur-facade-soleil.jpg", alt: "Façade principale du Chalet Jaïa sous le soleil", category: "Extérieur" },
    { src: "/images/chalet/exterieur-facade-logo-printemps.jpg", alt: "Façade avec logo Chalet Jaïa au printemps", category: "Extérieur" },
    { src: "/images/chalet/exterieur-facade-hiver-sapin.jpg", alt: "Façade du chalet en hiver avec sapin et ciel bleu", category: "Extérieur" },
    { src: "/images/chalet/exterieur-facade-logo-hiver.jpg", alt: "Façade hiver avec logo Chalet Jaïa enneigé", category: "Extérieur" },
    { src: "/images/chalet/exterieur-facade-cote-jardin.jpg", alt: "Côté du chalet avec jardin et terrasse", category: "Extérieur" },
    { src: "/images/chalet/exterieur-facade-hiver-logo.jpg", alt: "Façade hiver, logo et vue sur les sapins", category: "Extérieur" },
    { src: "/images/chalet/exterieur-facade-hiver-cote.jpg", alt: "Façade côté droit du chalet en hiver", category: "Extérieur" },
    { src: "/images/chalet/exterieur-facade-jardin-hiver.jpg", alt: "Façade et jardin enneigé sous le soleil", category: "Extérieur" },
    { src: "/images/chalet/exterieur-facade-arriere-jardin.jpg", alt: "Arrière du chalet, jardin en pente et sapins", category: "Extérieur" },
    { src: "/images/chalet/exterieur-facade-soir-hortensias.jpg", alt: "Façade du chalet en soirée avec hortensias", category: "Extérieur" },
    { src: "/images/chalet/exterieur-facade-printemps.jpg", alt: "Chalet Jaïa vu de côté au printemps avec vue Vosges", category: "Extérieur" },
    { src: "/images/chalet/exterieur-parking-hiver.jpg", alt: "Parking couvert et paysage enneigé", category: "Extérieur" },
    { src: "/images/chalet/exterieur-parking-vue-panoramique.jpg", alt: "Parking gravier et vue panoramique sur les montagnes", category: "Extérieur" },
    { src: "/images/chalet/exterieur-allee-carport.jpg", alt: "Allée d'accès et carport bois en automne", category: "Extérieur" },
    { src: "/images/chalet/exterieur-angle-vue-vosges.jpg", alt: "Angle du chalet avec vue dégagée sur les Vosges", category: "Extérieur" },
    // Salon
    { src: "/images/chalet/salon-vue-panoramique.jpg", alt: "Salon avec grande fenêtre panoramique sur les Vosges", category: "Salon" },
    { src: "/images/chalet/salon-poele-vue-vosges.jpg", alt: "Poêle à bois et fenêtres vue sur les Vosges", category: "Salon" },
    { src: "/images/chalet/salon-canape-tourne-disque.jpg", alt: "Canapé et tourne-disque vintage dans le salon", category: "Salon" },
    { src: "/images/chalet/salon-vue-ensemble-mezzanine.jpg", alt: "Vue d'ensemble du salon avec mezzanine et table à manger", category: "Salon" },
    { src: "/images/chalet/salon-canape-mezzanine.jpg", alt: "Canapé, table basse et mezzanine", category: "Salon" },
    { src: "/images/chalet/salon-canape-vue-vosges.jpg", alt: "Canapé avec vue sur les Vosges par la porte vitrée", category: "Salon" },
    { src: "/images/chalet/salon-fenetre-panoramique-vosges.jpg", alt: "Vue panoramique intérieure sur les Vosges", category: "Salon" },
    { src: "/images/chalet/salon-tv-meuble.jpg", alt: "Télévision murale et meuble TV en bois", category: "Salon" },
    { src: "/images/chalet/salon-tourne-disque-detail.jpg", alt: "Détail du tourne-disque vintage sous l'escalier", category: "Salon" },
    { src: "/images/chalet/salon-canape-escalier-vue.jpg", alt: "Salon avec escalier et vue extérieure en hiver", category: "Salon" },
    { src: "/images/chalet/salon-canape-tables-basses.jpg", alt: "Canapé et tables basses bois dans le salon", category: "Salon" },
    { src: "/images/chalet/salon-vue-salle-a-manger.jpg", alt: "Vue d'ensemble salon et salle à manger avec poêle", category: "Salon" },
    { src: "/images/chalet/salon-poele-fenetres-hiver.jpg", alt: "Poêle à bois et grandes fenêtres en hiver", category: "Salon" },
    { src: "/images/chalet/salon-poele-fenetres-detail.jpg", alt: "Détail poêle et fenêtres panoramiques", category: "Salon" },
    { src: "/images/chalet/salon-table-poele-nature.jpg", alt: "Table, canapé, poêle et porte sur la nature", category: "Salon" },
    { src: "/images/chalet/salon-fauteuil-mezzanine.jpg", alt: "Fauteuil bouclette et tabouret sur la mezzanine", category: "Salon" },
    // Chambres
    { src: "/images/chalet/chambre-principale-vue-complete.jpg", alt: "Vue complète de la chambre principale", category: "Chambres" },
    { src: "/images/chalet/chambre-principale-lit-mansarde.jpg", alt: "Lit double sous toit mansardé en bois", category: "Chambres" },
    { src: "/images/chalet/chambre-principale-vue-large.jpg", alt: "Chambre principale — vue large avec déco chaleureuse", category: "Chambres" },
    { src: "/images/chalet/chambre-principale-lit-tete-bois.jpg", alt: "Lit double avec tête de lit en lattes de bois", category: "Chambres" },
    { src: "/images/chalet/chambre-principale-detail-lampe.jpg", alt: "Détail du lit double avec lampe de chevet", category: "Chambres" },
    { src: "/images/chalet/chambre-coin-montagne-lits.jpg", alt: "Deux lits simples sous toit mansardé — coin montagne", category: "Chambres" },
    { src: "/images/chalet/chambre-enfant-bureau-velo.jpg", alt: "Chambre enfant avec bureau et déco vélo", category: "Chambres" },
    { src: "/images/chalet/chambre-enfant-lit-simple.jpg", alt: "Lit simple avec coussins colorés et bureau", category: "Chambres" },
    // Cuisine
    { src: "/images/chalet/cuisine-vue-ensemble.jpg", alt: "Cuisine noire équipée avec table en bois et four", category: "Cuisine" },
    { src: "/images/chalet/cuisine-table-four.jpg", alt: "Table en bois bord naturel et cuisine noire avec four", category: "Cuisine" },
    // Services
    { src: "/images/chalet/salle-de-bain-douche.jpg", alt: "Salle de bain avec douche italienne et lavabo", category: "Services" },
    { src: "/images/chalet/salle-de-bain-serviettes.jpg", alt: "Salle de bain avec porte-serviettes et carrelage béton", category: "Services" },
    { src: "/images/chalet/services-buanderie-machine.jpg", alt: "Buanderie avec lave-linge et sèche-linge", category: "Services" },
    { src: "/images/chalet/services-dressing-chambre.jpg", alt: "Dressing ouvert avec miroir et étagères", category: "Services" },
    { src: "/images/chalet/services-bibliotheque-jeux.jpg", alt: "Bibliothèque et jeux de société sous la mezzanine", category: "Services" },
];

const categories: Category[] = ["Tout", "Extérieur", "Salon", "Chambres", "Cuisine", "Services"];

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
                        src="/images/chalet/exterieur-facade-hiver-sapin.jpg"
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
                                    Découvrez le Chalet Jaïa : intérieur, extérieur, espaces nuit et équipements.
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