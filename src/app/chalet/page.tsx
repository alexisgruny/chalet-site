import HeroChalet from "@/components/section/heroChalet";
import FeaturesBar from "@/components/section/featuresBar";
import Localisation from "@/components/section/localisation";
import Activity from "@/components/section/activity";
import Equipements from "@/components/section/equipements";
import FAQ from "@/components/section/faq";
import CallToAction from "@/components/section/callToAction";
import Description from "@/components/section/description";
import Sleeping from "@/components/section/sleeping";
import Services from "@/components/section/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Le chalet",
  description:
    "Visitez le Chalet Jaïa à Gérardmer : 83 m², 6 couchages, chambres, coin montagne, équipements et services pour votre séjour dans les Vosges.",
  path: "/chalet",
});

export default function ChaletPage() {
  return (
    <>
      {/* HERO */}
      <HeroChalet />

      {/* Presentation du chalet */}
      <Description />

      {/* Infos essentielles */}
      <FeaturesBar />

      {/* Couchages */}
      <Sleeping />

      {/* Équipements */}
      <Equipements />

      {/* Services */}  
      <Services />

      {/* Localisation */}
      <Localisation />

      {/* Activités */}
      <Activity />

      {/* faq */}
      <FAQ />

      {/* CTA */}
      <CallToAction />
    </>
  );
}