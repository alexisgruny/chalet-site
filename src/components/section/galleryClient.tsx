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
    | "Extérieur"
    | "Salle de bain"
    | "Toilettes"
    | "Entrée"
    | "Local technique";

type Photo = {
    src: string;
    alt: string;
    category: Exclude<Category, "Tout">;
};

const galleryFolders: {
    directory: string;
    category: Exclude<Category, "Tout">;
    files: string[];
}[] = [
    {
        directory: "chambre-bas",
        category: "Chambre du bas",
        files: ["chambre4.jpg", "chambre5.jpg", "chambre7.jpg", "image00005.jpeg", "IMG-20260908-WA0092.jpg", "IMG-20260908-WA0098.jpg", "IMG-20260908-WA0183 (1).jpg"],
    },
    {
        directory: "chambre-haut",
        category: "Chambre du haut",
        files: ["Chambre haut1.jpg", "Chambre haut2.JPG", "Chambre haut3.JPG", "Chambre haut5.jpg", "Chambre haut6.jpg", "chambre6.jpg"],
    },
    {
        directory: "coin-montagne",
        category: "Coin montagne",
        files: ["coin montagne1.jpg", "coin montagne2.jpg", "coin montagne3.jpg", "coin montagne5.jpeg", "coin montagne6.jpg", "coin montagne7.jpeg", "coin montagne8.jpeg", "coin montagne9.jpeg", "coin montagne10.jpeg", "coin montagne12.jpg", "coin montagne13.jpg", "coin montagne14.jpg"],
    },
    {
        directory: "cuisine",
        category: "Cuisine",
        files: ["cuisine 5.jpg", "cuisine1.jpg", "cuisine3.jpeg", "cuisine6.jpg", "cuisine8.jpg", "cuisine9.jpeg", "cuisine10.jpeg"],
    },
    {
        directory: "entree",
        category: "Entr\u00e9e",
        files: ["entr\u00e9e1.jpeg", "entr\u00e9e2.jpg", "entr\u00e9e3.jpeg"],
    },
    {
        directory: "exterieur",
        category: "Ext\u00e9rieur",
        files: ["exterieur1.jpg", "exterieur2.jpg", "exterieur3.jpg", "exterieur4.jpg", "exterieur5.jpg", "exterieur6.jpg", "exterieur7.jpg", "exterieur8.jpg", "exterieur9.jpg", "exterieur10.jpg", "exterieur11.jpg", "exterieur12.jpg", "exterieur13.jpg", "exterieur15.jpg", "exterieur16.jpg", "exterieur18.jpg", "exterieur19.jpg", "exterieur20.jpg", "exterieur21.jpg", "exterieur22.jpg", "exterieur24.jpg", "exterieur25.jpg", "exterieur26.jpg", "exterieur28.jpg", "exterieur29.jpg", "exterieur30.jpg"],
    },
    {
        directory: "local-technique",
        category: "Local technique",
        files: ["local technique1.jpg", "local technique2.jpg"],
    },
    {
        directory: "salle",
        category: "Salon & s\u00e9jour",
        files: ["salle1.jpeg", "salle2.JPG", "salle3.JPG", "salle4.JPG", "salle5.jpg", "salle6.jpg", "salle7.jpg", "salle8.jpg", "salle9.jpg", "salle10.jpg"],
    },
    {
        directory: "salle-de-bain",
        category: "Salle de bain",
        files: ["salle de bain1.jpeg", "salle de bain2.jpg", "salle de bain4.jpg", "salle de bain5.jpeg", "salle de bain6.jpeg", "salle de bain8.jpg"],
    },
    {
        directory: "salon",
        category: "Salon & s\u00e9jour",
        files: ["salon1.jpeg", "salon2.jpeg", "salon3.jpeg", "salon4.JPG", "salon5.jpeg", "salon6.jpeg", "salon7.jpg", "salon8.jpeg", "salon9.jpg", "salon10.JPG", "salon11.jpeg", "salon12.jpg", "salon13.jpg", "salon14.jpg", "salon15.jpg", "salon16.jpg"],
    },
    {
        directory: "toilette",
        category: "Toilettes",
        files: ["toilette-deco-vase-etagere.jpg", "toilette-wc-suspendu-derouleur.jpg"],
    },
];

const galleryFolderOrder = [
    "entree",
    "salon",
    "salle",
    "cuisine",
    "chambre-bas",
    "chambre-haut",
    "coin-montagne",
    "salle-de-bain",
    "toilette",
    "exterieur",
    "local-technique",
];

const photos: Photo[] = [...galleryFolders]
    .sort((a, b) => galleryFolderOrder.indexOf(a.directory) - galleryFolderOrder.indexOf(b.directory))
    .flatMap(({ directory, category, files }) =>
    files.map((file) => ({
        src: "/images/chalet/" + directory + "/" + encodeURIComponent(file),
        alt: category + " - " + file.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "),
        category,
    })),
    );

const categories: Category[] = [
    "Tout",
    "Salon & séjour",
    "Cuisine",
    "Extérieur",
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
                        src="/images/chalet/salon/salon1.jpeg"
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