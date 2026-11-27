import Link from "next/link";
import { getBlockedRanges } from "@/lib/calendar";
import { parisToday } from "@/lib/icalImport";
import AvailabilityCalendar from "./availabilityCalendar";

/** Calendrier des disponibilités (dates importées de SuperHote/Airbnb + réservations directes). */
export default async function Availability({ className = "section-beige" }: { className?: string }) {
  const today = parisToday();
  let ranges: { start: string; end: string }[] | null = null;

  try {
    ranges = await getBlockedRanges(today);
  } catch (error) {
    console.error("[availability]", error);
  }

  return (
    <section id="disponibilites" className={className}>
      <div className="container-section">
        <h2 className="title-section-beige">Disponibilités</h2>
        <p className="text-muted mb-8 max-w-2xl">
          Calendrier mis à jour régulièrement à partir de nos réservations. Une date libre ici n&apos;est
          confirmée qu&apos;après notre réponse à votre demande.
        </p>

        {ranges ? (
          <AvailabilityCalendar ranges={ranges} today={today} />
        ) : (
          <div className="card text-body-sm">
            Le calendrier est momentanément indisponible. Contactez-nous pour connaître les dates libres.
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/contact" className="btn-primary min-h-12 text-sm">
            Demander mes dates
          </Link>
        </div>
      </div>
    </section>
  );
}
