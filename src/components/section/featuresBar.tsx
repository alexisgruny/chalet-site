import {
  Users,
  Bed,
  Ruler,
  KeyRound,
  BatteryCharging,
  Flame,
} from "lucide-react";

type Feature = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const features: Feature[] = [
  { label: "6 personnes", icon: Users },
  { label: "83 m²", icon: Ruler },
  { label: "2 ch + coin montagne", icon: Bed },
  { label: "Boite à clef", icon: KeyRound },
  { label: "Borne électrique", icon: BatteryCharging },
  { label: "Poêle à pellets", icon: Flame },
];

export default function FeaturesBar() {
  return (
    <section className="bg-[#EBE2D6] py-8">
      <div className="container-section">
        <div className="grid grid-cols-3 gap-4 place-items-center">
            {features.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="w-full max-w-xs bg-white/45 backdrop-blur rounded-xl flex items-center gap-3 p-4 text-[#3a4b3c] shadow-md"
              >
                <div className="h-12 w-12 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-semibold leading-tight">{label}</span>
              </div>
            ))}
        </div>
        </div>
    </section>
  );
}