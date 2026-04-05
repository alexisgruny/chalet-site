export default function Couchage() {
return (

<section className="section-green">
  <div className="container-section">
  <h2 className="title-section-green">
    Activités autour du chalet
  </h2>

  <div className="grid gap-4 md:grid-cols-2">
    <div className="card">
      <h3 className="font-bold text-lg text-[#3a4b3c]">Hiver</h3>
      <ul className="mt-4 space-y-2 text-[#3a4b3c]/70">
        <li>• Ski à Gérardmer + sentiers raquettes</li>
        <li>• Ski nordique</li>
        <li>• Station de ski La Bresse</li>
      </ul>
    </div>

    <div className="card">
      <h3 className="font-bold text-lg text-[#3a4b3c]">Été</h3>
      <ul className="mt-4 space-y-2 text-[#3a4b3c]/70">
        <li>• Lac de Gérardmer : baignade, pédalo, voile, canoë</li>
        <li>• Randonnées et VTT dans les Vosges</li>
        <li>• Lac de Longemer (Xonrupt)</li>
        <li>• Parapente, Bol d’Air (La Bresse)</li>
      </ul>
    </div>
  </div>
  </div>
</section>
);
}