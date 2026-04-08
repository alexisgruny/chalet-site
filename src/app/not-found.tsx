import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata = {
  title: "Page introuvable — Chalet Jaïa",
};

export default function NotFound() {
  return (
    <section className="section-beige min-h-[70vh] flex items-center">
      <div className="container-section text-center">
        <p className="text-8xl font-bold text-[#3a4b3c]/10 select-none">404</p>

        <div className="mt-4 flex justify-center">
          <div className="h-14 w-14 rounded-2xl bg-[#3a4b3c]/10 flex items-center justify-center">
            <MapPin className="h-7 w-7 text-[#3a4b3c]" />
          </div>
        </div>

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[#3a4b3c]">
          Page introuvable
        </h1>
        <p className="mt-3 text-muted max-w-md mx-auto">
          Cette page n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil pour
          explorer le chalet.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Retour à l&apos;accueil
          </Link>
          <Link href="/contact" className="btn-secondary border border-[#3a4b3c]/20">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
