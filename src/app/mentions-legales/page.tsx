import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Chalet Jaïa — location à Gérardmer.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="section-green pt-20">
        <div className="container-section">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Mentions légales</h1>
        </div>
      </section>

      <section className="section-beige">
        <div className="container-section space-y-6">

          <div className="card">
            <h2 className="font-semibold text-[#3a4b3c] text-lg mb-3">Éditeur du site</h2>
            <div className="space-y-1 text-sm text-muted">
              <p><strong>Responsable de la publication :</strong> [Prénom Nom du propriétaire]</p>
              <p><strong>Email :</strong>{" "}
                <a href="mailto:contact@chalet-jaia.fr" className="underline hover:text-[#3a4b3c]">
                  contact@chalet-jaia.fr
                </a>
              </p>
              <p><strong>Localisation :</strong> Gérardmer, 88400 Vosges, France</p>
            </div>
          </div>

          <div className="card">
            <h2 className="font-semibold text-[#3a4b3c] text-lg mb-3">Hébergeur</h2>
            <div className="space-y-1 text-sm text-muted">
              <p><strong>Vercel Inc.</strong></p>
              <p>340 Pine Street Suite 701, San Francisco, CA 94104, USA</p>
              <p>
                Site :{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#3a4b3c]"
                >
                  vercel.com
                </a>
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="font-semibold text-[#3a4b3c] text-lg mb-3">Propriété intellectuelle</h2>
            <p className="text-sm text-muted">
              L&apos;ensemble du contenu de ce site (textes, photographies, design) est protégé par le droit
              d&apos;auteur. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
            </p>
          </div>

          <div className="card">
            <h2 className="font-semibold text-[#3a4b3c] text-lg mb-3">Responsabilité</h2>
            <p className="text-sm text-muted">
              Le Chalet Jaïa s&apos;efforce de maintenir les informations publiées sur ce site exactes et à jour.
              Cependant, il ne saurait être tenu responsable des erreurs, omissions ou des résultats qui pourraient
              être obtenus par un mauvais usage de ces informations.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
