"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "À quelle distance est le lac de Gérardmer&nbsp;?",
    a: "Le chalet se situe à environ 7 km du lac de Gérardmer, soit 10 minutes en voiture.",
  },
  {
    q: "Le linge est-il fourni&nbsp;?",
    a: "Oui : les lits sont faits à votre arrivée et les serviettes sont fournies.",
  },
  {
    q: "L'arrivée est-elle autonome&nbsp;?",
    a: "Oui, grâce à une boîte à clés sécurisée. Le code vous est transmis 24 h avant votre arrivée.",
  },
  {
    q: "Peut-on recharger une voiture électrique&nbsp;?",
    a: "Oui, le chalet dispose d'une borne de recharge incluse dans le tarif.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-beige">
      <div className="container-section">
        <h2 className="title-section-beige">Questions fréquentes</h2>

        <div className="space-y-3 max-w-2xl">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="card p-0 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open === i}
              >
                <span
                  className="font-semibold text-[#3a4b3c] text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ __html: q }}
                />
                <ChevronDown
                  className={`h-5 w-5 text-[#3a4b3c]/50 flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === i && (
                <div className="px-5 pb-4 text-muted text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
