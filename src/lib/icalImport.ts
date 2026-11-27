import ical, { type DateWithTimeZone, type VEvent } from "node-ical";

/** Période bloquée importée. `end` = jour de départ (exclusif). Dates YYYY-MM-DD. */
export interface ImportedPeriod {
  id: string;
  start: string;
  end: string;
  source: string;
}

/** Jour courant à Paris, au format YYYY-MM-DD. */
export function parisToday(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris" }).format(now);
}

/** Date iCal → YYYY-MM-DD (journée entière : composantes locales ; sinon heure de Paris). */
function toDay(date: DateWithTimeZone): string {
  if (date.dateOnly) {
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }
  return parisToday(date);
}

function addDays(day: string, days: number): string {
  const date = new Date(`${day}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

/**
 * Extrait les périodes bloquées d'un flux iCal. Seules les dates et l'UID sont
 * conservés : les noms des voyageurs et descriptions (données personnelles
 * présentes dans les exports Airbnb/SuperHote) ne sont jamais stockés.
 */
export async function parseFeed(source: string, body: string, today = parisToday()): Promise<ImportedPeriod[]> {
  if (!body.includes("BEGIN:VCALENDAR")) throw new Error("réponse qui n'est pas un iCal");

  const parsed = await ical.async.parseICS(body);
  const periods: ImportedPeriod[] = [];

  for (const component of Object.values(parsed)) {
    if (!component || component.type !== "VEVENT") continue;
    const event = component as VEvent;
    if (event.status === "CANCELLED" || event.transparency === "TRANSPARENT" || !event.start) continue;

    const start = toDay(event.start);
    let end = event.end ? toDay(event.end) : addDays(start, 1);
    // Un événement à horaires qui finit le jour même bloque quand même la nuit.
    if (end <= start) end = addDays(start, 1);
    if (end <= today) continue;

    periods.push({ id: `${source}:${event.uid}`, start, end, source });
  }

  return periods.sort((a, b) => a.start.localeCompare(b.start));
}
