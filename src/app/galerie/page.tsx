import GalleryClient from "@/components/section/galleryClient";

export const metadata = {
  title: "Galerie — Chalet Jaïa",
  description: "Photos du Chalet Jaïa à Gérardmer : intérieur, extérieur, chambres, cuisine.",
};

export default function GaleriePage() {
  return (
    <main className="min-h-screen pt-16">
      <GalleryClient />
    </main>
  );
}