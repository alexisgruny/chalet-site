import Hero from "@/components/section/hero";
import FeaturesBar from "@/components/section/featuresBar";
import GalleryPreview from "@/components/section/galleryPreview";
import Description from "@/components/section/description";
import EcoCommitment from "@/components/section/ecoCommitment";
import CallToAction from "@/components/section/callToAction";

export default function Home() {
  return (
    <>
      {/* HERO */}
        <Hero />
      {/* BANDEAU INFO*/}
        <FeaturesBar />
      {/* DESCRIPTION */}
        <Description />
      {/* DÉMARCHE ÉCORESPONSABLE */}
        <EcoCommitment />
      {/* GALERIE */}
       <GalleryPreview />
      {/* CALL TO ACTION */}
        <CallToAction />
      </>
  );
}