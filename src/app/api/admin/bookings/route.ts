import { NextRequest, NextResponse } from "next/server";
import {
  addDirectBooking,
  deleteDirectBooking,
  findOverlaps,
  getDirectBookings,
  getExternalCalendars,
  hasBearer,
  isIsoDate,
} from "@/lib/calendar";

export const dynamic = "force-dynamic";

const MAX_NOTE_LENGTH = 200;

function unauthorized() {
  return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
}

function isAuthorized(request: NextRequest) {
  return hasBearer(request.headers.get("authorization"), process.env.ADMIN_TOKEN);
}

function serverError(error: unknown) {
  console.error("[admin/bookings]", error);
  return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
}

/** Liste les réservations directes et l'état des calendriers importés. */
export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) return unauthorized();

  try {
    const [direct, external] = await Promise.all([getDirectBookings(), getExternalCalendars()]);
    return NextResponse.json({ direct, external });
  } catch (error) {
    return serverError(error);
  }
}

/**
 * Ajoute une réservation directe : { start: "YYYY-MM-DD", end: "YYYY-MM-DD", note?: string }.
 * `end` = jour de départ. Refuse un chevauchement (409) sauf avec "force": true.
 */
export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) return unauthorized();

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide." }, { status: 400 });
  }

  const { start, end, note, force } = body ?? {};
  if (!isIsoDate(start) || !isIsoDate(end)) {
    return NextResponse.json({ error: "start et end doivent être au format YYYY-MM-DD." }, { status: 400 });
  }
  if (end <= start) {
    return NextResponse.json({ error: "end (départ) doit être après start (arrivée)." }, { status: 400 });
  }
  if (note !== undefined && (typeof note !== "string" || note.length > MAX_NOTE_LENGTH)) {
    return NextResponse.json({ error: `note doit faire au plus ${MAX_NOTE_LENGTH} caractères.` }, { status: 400 });
  }

  try {
    if (force !== true) {
      const overlaps = await findOverlaps(start, end);
      if (overlaps.length > 0) {
        return NextResponse.json(
          { error: "Ces dates chevauchent une période déjà bloquée.", overlaps },
          { status: 409 },
        );
      }
    }

    const booking = await addDirectBooking({ start, end, note: note?.trim() || undefined });
    return NextResponse.json({ booking }, { status: 201 });
  } catch (error) {
    return serverError(error);
  }
}

/** Supprime une réservation directe : DELETE /api/admin/bookings?id=… */
export async function DELETE(request: NextRequest) {
  if (!isAuthorized(request)) return unauthorized();

  const id = request.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Paramètre id manquant." }, { status: 400 });

  try {
    const deleted = await deleteDirectBooking(id);
    return deleted
      ? NextResponse.json({ ok: true })
      : NextResponse.json({ error: "Réservation introuvable." }, { status: 404 });
  } catch (error) {
    return serverError(error);
  }
}
