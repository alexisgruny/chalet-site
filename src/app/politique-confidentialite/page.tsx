import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles — Chalet Jaïa.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="section-green pt-20">
        <div className="container-section">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Politique de confidentialité
          </h1>
          <p className="mt-3 text-white/80 text-lg">Mise à jour le 1er juin 2025</p>
        </div>
      </section>

      <section className="section-beige">
        <div className="container-section space-y-6">

          <div className="card">
            <h2 className="font-semibold text-[#3a4b3c] text-lg mb-3">Données collectées</h2>
            <p className="text-sm text-muted mb-3">
              Lors de l&apos;utilisation du formulaire de contact, les données suivantes peuvent être collectées :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted">
              <li>Nom complet (obligatoire)</li>
              <li>Adresse email (obligatoire)</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Dates de séjour envisagées (facultatif)</li>
              <li>Nombre de voyageurs (facultatif)</li>
              <li>Message libre (obligatoire)</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="font-semibold text-[#3a4b3c] text-lg mb-3">Finalité du traitement</h2>
            <p className="text-sm text-muted">
              Ces données sont utilisées uniquement pour répondre à vos demandes de contact ou de réservation.
              Elles ne sont ni vendues ni transmises à des tiers, à l&apos;exception du prestataire d&apos;envoi
              d&apos;emails <strong>Resend</strong> (resend.com), qui agit en tant que sous-traitant et traite
              ces données sous contrat de confidentialité.
            </p>
          </div>

          <div className="card">
            <h2 className="font-semibold text-[#3a4b3c] text-lg mb-3">Durée de conservation</h2>
            <p className="text-sm text-muted">
              Vos données sont conservées le temps nécessaire au traitement de votre demande, et au maximum
              12 mois après le dernier échange.
            </p>
          </div>

          <div className="card">
            <h2 className="font-semibold text-[#3a4b3c] text-lg mb-3">Vos droits (RGPD)</h2>
            <p className="text-sm text-muted mb-3">
              Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679), vous disposez
              des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted mb-3">
              <li>Droit d&apos;accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
            </ul>
            <p className="text-sm text-muted">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:contact@chalet-jaia.fr" className="underline hover:text-[#3a4b3c]">
                contact@chalet-jaia.fr
              </a>
            </p>
          </div>

          <div className="card">
            <h2 className="font-semibold text-[#3a4b3c] text-lg mb-3">Cookies</h2>
            <p className="text-sm text-muted">
              Ce site n&apos;utilise pas de cookies de suivi, de publicité ni d&apos;analyse. Aucun cookie tiers
              n&apos;est déposé lors de votre navigation.
            </p>
          </div>

          <div className="card">
            <h2 className="font-semibold text-[#3a4b3c] text-lg mb-3">Hébergement</h2>
            <p className="text-sm text-muted">
              Ce site est hébergé par <strong>Vercel Inc.</strong>, 340 Pine Street Suite 701,
              San Francisco, CA 94104, USA. Les données de navigation (logs serveur) peuvent être
              stockées temporairement sur leurs serveurs, situés en Europe ou aux États-Unis.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
