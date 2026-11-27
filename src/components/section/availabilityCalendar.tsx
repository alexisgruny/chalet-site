"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Range {
  start: string;
  end: string;
}

interface Props {
  ranges: Range[];
  /** Jour courant (YYYY-MM-DD, heure de Paris), fourni par le serveur pour éviter un écart d'hydratation. */
  today: string;
  /** Nombre de mois consultables à partir du mois courant. */
  monthsAhead?: number;
}

const WEEKDAYS = ["L", "M", "M", "J", "V", "S", "D"];
const monthFormatter = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric", timeZone: "UTC" });

const pad = (n: number) => String(n).padStart(2, "0");
const isoDay = (year: number, month: number, day: number) => `${year}-${pad(month + 1)}-${pad(day)}`;

/** Une journée est occupée si la nuit qui commence ce jour-là est réservée (start ≤ jour < end). */
function isBooked(day: string, ranges: Range[]) {
  return ranges.some((range) => range.start <= day && day < range.end);
}

function Month({ year, month, ranges, today }: { year: number; month: number; ranges: Range[]; today: string }) {
  const firstWeekday = (new Date(Date.UTC(year, month, 1)).getUTCDay() + 6) % 7; // lundi = 0
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const label = monthFormatter.format(new Date(Date.UTC(year, month, 1)));

  return (
    <div className="card p-4 sm:p-5">
      <h3 className="mb-3 text-center font-bold capitalize text-[#3a4b3c]">{label}</h3>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {WEEKDAYS.map((weekday, index) => (
          <span key={index} className="py-1 font-semibold text-[#3a4b3c]/50" aria-hidden>
            {weekday}
          </span>
        ))}
        {Array.from({ length: firstWeekday }, (_, index) => (
          <span key={`empty-${index}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = isoDay(year, month, index + 1);
          const past = day < today;
          const booked = !past && isBooked(day, ranges);
          const state = past ? "passé" : booked ? "occupé" : "disponible";

          return (
            <span
              key={day}
              title={state}
              aria-label={`${index + 1} ${label} : ${state}`}
              className={`flex aspect-square items-center justify-center rounded-lg text-sm ${
                past
                  ? "text-[#3a4b3c]/25"
                  : booked
                    ? "bg-[#3a4b3c]/15 text-[#3a4b3c]/40 line-through"
                    : "bg-[#EBE2D6]/60 font-medium text-[#3a4b3c]"
              } ${day === today ? "ring-2 ring-[#3a4b3c]" : ""}`}
            >
              {index + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function AvailabilityCalendar({ ranges, today, monthsAhead = 12 }: Props) {
  const [offset, setOffset] = useState(0);
  const [todayYear, todayMonth] = today.split("-").map(Number);

  // Deux mois affichés (un seul sur mobile) : offset et offset + 1.
  const months = [offset, offset + 1].map((delta) => {
    const date = new Date(Date.UTC(todayYear, todayMonth - 1 + delta, 1));
    return { year: date.getUTCFullYear(), month: date.getUTCMonth() };
  });

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setOffset((value) => Math.max(0, value - 1))}
          disabled={offset === 0}
          className="btn-primary h-10 w-10 !p-0 disabled:opacity-30"
          aria-label="Mois précédent"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#3a4b3c]/70">
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 rounded bg-[#EBE2D6]/60 ring-1 ring-[#3a4b3c]/20" /> Disponible
          </span>
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 rounded bg-[#3a4b3c]/15" /> Occupé
          </span>
        </div>
        <button
          type="button"
          onClick={() => setOffset((value) => Math.min(monthsAhead - 2, value + 1))}
          disabled={offset >= monthsAhead - 2}
          className="btn-primary h-10 w-10 !p-0 disabled:opacity-30"
          aria-label="Mois suivant"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {months.map(({ year, month }, index) => (
          <div key={`${year}-${month}`} className={index === 1 ? "hidden md:block" : ""}>
            <Month year={year} month={month} ranges={ranges} today={today} />
          </div>
        ))}
      </div>
    </div>
  );
}
