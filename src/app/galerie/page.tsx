import GalleryClient from "@/components/section/galleryClient";
import CallToAction from "@/components/section/callToAction";

export const metadata = {
  title: "Galerie — Chalet Jaïa",
  description: "Photos du Chalet Jaïa à Gérardmer : intérieur, extérieur, chambres, cuisine.",
};

export default function GaleriePage() {
  return (
    <>
      <GalleryClient />
      <CallToAction />
    </>
  );
}