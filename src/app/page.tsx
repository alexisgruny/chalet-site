import Hero from "@/components/section/hero";
import FeaturesBar from "@/components/section/featuresBar";
import GalleryPreview from "@/components/section/galleryPreview";
import Description from "@/components/section/description";
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
      {/* GALERIE */}
       <GalleryPreview />
      {/* CALL TO ACTION */}
        <CallToAction />
      </>
  );
}