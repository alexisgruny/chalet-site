export default function Couchage() {
return (

<section className="space-y-6">
  <h2 className="text-2xl md:text-3xl font-bold text-[#3a4b3c]">
    Activités autour du chalet
  </h2>

  <div className="grid gap-4 md:grid-cols-2">
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold text-lg text-[#3a4b3c]">Hiver</h3>
      <ul className="mt-4 space-y-2 text-gray-700">
        <li>• Ski à Gérardmer + sentiers raquettes</li>
        <li>• Ski nordique</li>
        <li>• Station de ski La Bresse</li>
      </ul>
    </div>

    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold text-lg text-[#3a4b3c]">Été</h3>
      <ul className="mt-4 space-y-2 text-gray-700">
        <li>• Lac de Gérardmer : baignade, pédalo, voile, canoë</li>
        <li>• Randonnées et VTT dans les Vosges</li>
        <li>• Lac de Longemer (Xonrupt)</li>
        <li>• Parapente, Bol d’Air (La Bresse)</li>
      </ul>
    </div>
  </div>
</section>
);
}