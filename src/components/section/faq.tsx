"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Combien de temps faut-il pour rejoindre le lac de Gérardmer\u00a0?",
    a: "Le lac de Gérardmer se trouve à environ 8 minutes en voiture du chalet.",
  },
  {
    q: "Le linge est-il fourni\u00a0?",
    a: "Oui : les lits sont faits à votre arrivée et les serviettes sont fournies.",
  },
  {
    q: "L'arrivée est-elle autonome\u00a0?",
    a: "Oui, grâce à une boîte à clés sécurisée. Le code vous sera transmis 24 h avant votre arrivée.",
  },
  {
    q: "Peut-on recharger une voiture électrique\u00a0?",
    a: "Oui, le chalet dispose d'une borne de recharge : 25 € le week-end ou 45 € la semaine.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#EBE2D6] text-[#3a4b3c] pt-8 pb-16">
      <div className="container-section">
        <h2 className="title-section-beige">Questions fréquentes</h2>

        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="card p-0 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span
                  className="font-semibold text-[#3a4b3c] text-sm sm:text-base"
                >
                  {q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-[#3a4b3c]/50 flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${i}`}
                className={`px-4 pb-3 text-muted text-sm leading-relaxed border-t border-gray-100 pt-2${open === i ? "" : " hidden"}`}
              >
                {a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
