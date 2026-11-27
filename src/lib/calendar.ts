import "server-only";
import { randomUUID, timingSafeEqual } from "node:crypto";
import { Redis } from "@upstash/redis";

/**
 * Une période bloquée. `start` = jour d'arrivée, `end` = jour de départ
 * (exclusif, comme DTEND d'un événement « journée entière » en iCal).
 * Dates au format YYYY-MM-DD.
 */
export interface BlockedPeriod {
  id: string;
  start: string;
  end: string;
  source: string;
  note?: string;
}

export interface ExternalCalendar {
  source: string;
  syncedAt: string;
  periods: BlockedPeriod[];
}

const DIRECT_KEY = "calendar:direct";
const EXTERNAL_PREFIX = "calendar:external:";

let redis: Redis | undefined;

export function getRedis(): Redis {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    throw new Error("Les variables Upstash Redis (KV_REST_API_URL / KV_REST_API_TOKEN) sont requises.");
  }

  if (!redis) redis = new Redis({ url, token });
  return redis;
}

// ── Flux iCal externes ─────────────────────────────────────────────────────

/** Lit ICAL_IMPORT_URLS="airbnb=https://…,booking=https://…". */
export function getImportFeeds(): { source: string; url: string }[] {
  const raw = process.env.ICAL_IMPORT_URLS ?? "";

  return raw
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const sep = entry.indexOf("=");
      if (sep <= 0) throw new Error(`Entrée ICAL_IMPORT_URLS invalide : « ${entry} » (attendu source=url).`);
      const source = entry.slice(0, sep).trim().toLowerCase();
      const url = entry.slice(sep + 1).trim();
      if (!/^[a-z0-9_-]+$/.test(source)) throw new Error(`Nom de source invalide : « ${source} ».`);
      if (!url.startsWith("https://")) throw new Error(`L'URL de « ${source} » doit être en https.`);
      return { source, url };
    });
}

export async function saveExternalCalendar(calendar: ExternalCalendar): Promise<void> {
  await getRedis().set(EXTERNAL_PREFIX + calendar.source, calendar);
}

export async function getExternalCalendars(): Promise<ExternalCalendar[]> {
  const sources = getImportFeeds().map((feed) => feed.source);
  if (sources.length === 0) return [];

  const values = await getRedis().mget<(ExternalCalendar | null)[]>(
    ...sources.map((source) => EXTERNAL_PREFIX + source),
  );
  return values.filter((value): value is ExternalCalendar => value !== null);
}

// ── Réservations directes ──────────────────────────────────────────────────

export async function getDirectBookings(): Promise<BlockedPeriod[]> {
  const all = await getRedis().hgetall<Record<string, BlockedPeriod>>(DIRECT_KEY);
  return Object.values(all ?? {}).sort((a, b) => a.start.localeCompare(b.start));
}

export async function addDirectBooking(input: { start: string; end: string; note?: string }): Promise<BlockedPeriod> {
  const booking: BlockedPeriod = {
    id: randomUUID(),
    start: input.start,
    end: input.end,
    source: "direct",
    ...(input.note ? { note: input.note } : {}),
  };
  await getRedis().hset(DIRECT_KEY, { [booking.id]: booking });
  return booking;
}

export async function deleteDirectBooking(id: string): Promise<boolean> {
  return (await getRedis().hdel(DIRECT_KEY, id)) > 0;
}

/** Toutes les périodes bloquées (directes + importées) qui chevauchent [start, end). */
export async function findOverlaps(start: string, end: string): Promise<BlockedPeriod[]> {
  const [direct, external] = await Promise.all([getDirectBookings(), getExternalCalendars()]);
  return [...direct, ...external.flatMap((calendar) => calendar.periods)].filter(
    (period) => period.start < end && start < period.end,
  );
}

/**
 * Plages occupées à venir (directes + importées), fusionnées et anonymisées :
 * seules les dates sortent, jamais la source, l'UID ou la note.
 */
export async function getBlockedRanges(today: string): Promise<{ start: string; end: string }[]> {
  const [direct, external] = await Promise.all([getDirectBookings(), getExternalCalendars()]);
  const periods = [...direct, ...external.flatMap((calendar) => calendar.periods)]
    .filter((period) => period.end > today)
    .sort((a, b) => a.start.localeCompare(b.start));

  const merged: { start: string; end: string }[] = [];
  for (const { start, end } of periods) {
    const last = merged.at(-1);
    if (last && start <= last.end) {
      if (end > last.end) last.end = end;
    } else {
      merged.push({ start, end });
    }
  }
  return merged;
}

// ── Utilitaires ────────────────────────────────────────────────────────────

export function isIsoDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().startsWith(value);
}

/** Compare un en-tête `Authorization: Bearer …` à un secret, en temps constant. */
export function hasBearer(header: string | null, secret: string | undefined): boolean {
  if (!secret || !header?.startsWith("Bearer ")) return false;
  const given = Buffer.from(header.slice(7));
  const expected = Buffer.from(secret);
  return given.length === expected.length && timingSafeEqual(given, expected);
}
