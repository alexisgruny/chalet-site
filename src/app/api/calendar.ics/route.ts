import ical, { ICalCalendarMethod } from "ical-generator";
import { getDirectBookings } from "@/lib/calendar";

export const dynamic = "force-dynamic";

/**
 * Export iCal des réservations directes, à coller dans Airbnb / Booking
 * (« Importer un calendrier ») pour qu'ils bloquent ces dates.
 * Les dates importées d'Airbnb/Booking ne sont volontairement pas réexportées
 * (sinon chaque plateforme réimporterait ses propres réservations).
 */
export async function GET() {
  let bookings;
  try {
    bookings = await getDirectBookings();
  } catch (error) {
    console.error("[calendar.ics]", error);
    return new Response("Calendrier indisponible.", { status: 503 });
  }

  const calendar = ical({
    name: "Chalet Jaïa — réservations directes",
    prodId: { company: "Chalet Jaia", product: "site", language: "FR" },
    method: ICalCalendarMethod.PUBLISH,
  });

  for (const booking of bookings) {
    calendar.createEvent({
      id: `${booking.id}@chalet-jaia`,
      start: new Date(`${booking.start}T00:00:00Z`),
      end: new Date(`${booking.end}T00:00:00Z`),
      allDay: true,
      summary: "Réservé",
    });
  }

  return new Response(calendar.toString(), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'inline; filename="calendar.ics"',
      "Cache-Control": "no-store",
    },
  });
}
