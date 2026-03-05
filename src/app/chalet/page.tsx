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
import PricingPreview from "@/components/section/pricingPreview";

export const metadata = {
  title: "Le chalet — Chalet Jaïa",
  description:
    "Présentation du Chalet Jaïa à Gérardmer : couchages, équipements, services et informations pratiques.",
};

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

      {/* Tarifs et Reservations */}
      <PricingPreview />

      {/* faq */}
      <FAQ />

      {/* CTA */}
      <CallToAction />
    </>
  );
}