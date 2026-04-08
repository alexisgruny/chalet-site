"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="section-beige min-h-[70vh] flex items-center">
      <div className="container-section text-center">
        <div className="flex justify-center">
          <div className="h-14 w-14 rounded-2xl bg-red-100 flex items-center justify-center">
            <AlertTriangle className="h-7 w-7 text-red-500" />
          </div>
        </div>

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[#3a4b3c]">
          Une erreur est survenue
        </h1>
        <p className="mt-3 text-muted max-w-md mx-auto">
          Quelque chose s&apos;est mal passé. Réessayez ou revenez à l&apos;accueil.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={reset} className="btn-primary">
            Réessayer
          </button>
          <Link href="/" className="btn-secondary border border-[#3a4b3c]/20">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
