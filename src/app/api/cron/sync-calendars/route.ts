import { NextRequest, NextResponse } from "next/server";
import { parseFeed, type ImportedPeriod } from "@/lib/icalImport";
import {
  getImportFeeds,
  hasBearer,
  saveExternalCalendar,
} from "@/lib/calendar";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const FETCH_TIMEOUT_MS = 15_000;
const MAX_FEED_BYTES = 2 * 1024 * 1024;

async function fetchFeed(source: string, url: string): Promise<ImportedPeriod[]> {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    headers: { Accept: "text/calendar" },
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  const body = await response.text();
  if (body.length > MAX_FEED_BYTES) throw new Error("flux trop volumineux");

  return parseFeed(source, body);
}

/**
 * Lit les flux iCal externes (Airbnb, Booking…) et enregistre les dates bloquées.
 * À appeler toutes les 15-30 min avec `Authorization: Bearer $CRON_SECRET`.
 * Si un flux échoue, la dernière version enregistrée est conservée.
 */
export async function GET(request: NextRequest) {
  if (!hasBearer(request.headers.get("authorization"), process.env.CRON_SECRET)) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  let feeds;
  try {
    feeds = getImportFeeds();
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }

  const results = await Promise.all(
    feeds.map(async ({ source, url }) => {
      try {
        const periods = await fetchFeed(source, url);
        await saveExternalCalendar({ source, syncedAt: new Date().toISOString(), periods });
        return { source, ok: true, events: periods.length };
      } catch (error) {
        console.error(`[sync-calendars] ${source} :`, error);
        return { source, ok: false, error: (error as Error).message };
      }
    }),
  );

  const ok = results.every((result) => result.ok);
  return NextResponse.json({ ok, results }, { status: ok ? 200 : 502 });
}
