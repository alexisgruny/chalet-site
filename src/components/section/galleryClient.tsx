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
    { src: "/images/chalet/chaletHero.jpg", alt: "Vue extérieure du chalet", category: "Extérieur" },
    { src: "/images/chalet/chalet1.jpg", alt: "Salon du chalet", category: "Salon" },
    { src: "/images/chalet/chalet2.jpg", alt: "Cuisine équipée", category: "Cuisine" },
    { src: "/images/chalet/chalet3.jpg", alt: "Chambre du chalet", category: "Chambres" },
    { src: "/images/chalet/chaletHero.jpg", alt: "Vue extérieure du chalet", category: "Extérieur" },
    { src: "/images/chalet/chalet1.jpg", alt: "Salon du chalet", category: "Salon" },
    { src: "/images/chalet/chalet2.jpg", alt: "Cuisine équipée", category: "Cuisine" },
    { src: "/images/chalet/chalet3.jpg", alt: "Chambre du chalet", category: "Chambres" },
    { src: "/images/chalet/chaletHero.jpg", alt: "Vue extérieure du chalet", category: "Extérieur" },
    { src: "/images/chalet/chalet1.jpg", alt: "Salon du chalet", category: "Salon" },
    { src: "/images/chalet/chalet2.jpg", alt: "Cuisine équipée", category: "Cuisine" },
    { src: "/images/chalet/chalet3.jpg", alt: "Chambre du chalet", category: "Chambres" },
    { src: "/images/chalet/chaletHero.jpg", alt: "Vue extérieure du chalet", category: "Extérieur" },
    { src: "/images/chalet/chalet1.jpg", alt: "Salon du chalet", category: "Salon" },
    { src: "/images/chalet/chalet2.jpg", alt: "Cuisine équipée", category: "Cuisine" },
    { src: "/images/chalet/chalet3.jpg", alt: "Chambre du chalet", category: "Chambres" },
    { src: "/images/chalet/chaletHero.jpg", alt: "Vue extérieure du chalet", category: "Extérieur" },
    // Ajoute tes photos ici (idéalement 12–24)
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
        <section className="w-full">
            {/* Tabs (centré) */}
            <div className="bg-[#3a4b3c] w-full">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-6">
          
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Galerie
            </h1>
            <p className="text-white max-w-2xl">
              Découvrez le Chalet Jaïa : intérieur, extérieur, espaces nuit et équipements.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition
                  ${
                    active === c
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

                        <div className="flex items-center justify-between mt-3 text-white">
                            <p className="text-sm opacity-90">{filtered[openIndex].alt}</p>

                            <div className="flex gap-2">
                                <button
                                    onClick={prev}
                                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
                                >
                                    ←
                                </button>
                                <button
                                    onClick={next}
                                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
                                >
                                    →
                                </button>
                                <button
                                    onClick={close}
                                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
                                >
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}