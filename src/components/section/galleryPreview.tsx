import Image from "next/image";

export default function GalleryPreview() {
    return (
        <section className="bg-[#EBE2D6] py-16">
            <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-4 md:px-6">
                    {[
                        "/images/chalet/chalet1.jpg",
                        "/images/chalet/chalet2.jpg",
                        "/images/chalet/chalet3.jpg",
                        "/images/chalet/chaletHero.jpg",
                    ].map((src, i) => (
                        <div
                            key={i}
                            className="aspect-square overflow-hidden rounded-xl group"
                        >
                            <Image
                                src={src}
                                alt={`Photo du chalet ${i + 1}`}
                                width={600}
                                height={600}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, 25vw"
                                priority={i === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}