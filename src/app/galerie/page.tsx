import GalleryClient from "@/components/section/galleryClient";
import CallToAction from "@/components/section/callToAction";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Galerie",
  description:
    "Découvrez en photos le Chalet Jaïa à Gérardmer : séjour, cuisine, chambres, coin montagne, salle de bain et extérieur.",
  path: "/galerie",
});

export default function GaleriePage() {
  return (
    <>
      <GalleryClient />
      <CallToAction />
    </>
  );
}