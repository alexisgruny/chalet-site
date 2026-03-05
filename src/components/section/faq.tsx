export default function Services() {

  return (

    <section className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-[#3a4b3c]">
        Questions fréquentes
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {[
          {
            q: "À quelle distance est le lac de Gérardmer ?",
            a: "Le chalet se situe à environ 7 km du lac de Gérardmer.",
          },
          {
            q: "Le linge est-il fourni ?",
            a: "Oui : lits faits à l’arrivée et serviettes fournies.",
          },
          {
            q: "L’arrivée est-elle autonome ?",
            a: "Oui, grâce à une boîte à clés (arrivée autonome).",
          },
          {
            q: "Peut-on recharger une voiture électrique ?",
            a: "Oui, le chalet dispose d’une borne de recharge.",
          },
        ].map(({ q, a }) => (
          <div key={q} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-[#3a4b3c]">{q}</h3>
            <p className="text-gray-700 mt-2">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
