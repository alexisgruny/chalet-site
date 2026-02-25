import Hero from "@/components/section/hero";
import FeaturesBar from "@/components/section/featuresBar";

export default function Home() {
  return (
    <>
      {/* HERO full-bleed (sort du main centré) */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <Hero />
      </div>

      {/* BANDEAU full-bleed */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <FeaturesBar />
      </div>
    </>
  );
}