export default function Footer() {
  return (
    <footer className="w-full bg-[#EBE2D6] text-[#3a4b3c]">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
    
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      
      {/* Bloc Chalet */}
      <div>
        <h3 className="text-lg font-semibold tracking-tight">
          Chalet Jaïa
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#3a4b3c]/70 max-w-sm">
          Chalet chaleureux à Gérardmer, idéal pour se retrouver en famille ou entre amis, au cœur des Vosges.
        </p>
      </div>

      {/* Bloc Contact */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#3a4b3c]/70">
          Contact
        </h3>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <a
              href="mailto:contact@chalet-jaia.fr"
              className="hover:text-[#3a4b3c] transition"
            >
              contact@chalet-jaia.fr
            </a>
          </li>
          <li>
            <a
              href="tel:+33600000000"
              className="hover:text-[#3a4b3c] transition"
            >
              06 00 00 00 00
            </a>
          </li>
          <li className="text-[#3a4b3c]/70">
            Gérardmer, Vosges
          </li>
        </ul>
      </div>

      {/* Bloc Liens */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#3a4b3c]/70">
          Navigation
        </h3>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <a href="#galerie" className="hover:text-[#3a4b3c] transition">
              Galerie
            </a>
          </li>
          <li>
            <a href="#disponibilites" className="hover:text-[#3a4b3c] transition">
              Disponibilités
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#3a4b3c] transition">
              Nous contacter
            </a>
          </li>
        </ul>
      </div>

    </div>

    {/* Séparateur */}
    <div className="mt-10 h-px w-full bg-[#3a4b3c]/100" />

    {/* Bas footer */}
    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#3a4b3c]/60">
      <p>© {new Date().getFullYear()} Chalet Jaïa</p>
      <div className="flex gap-4">
        <a href="/mentions-legales" className="hover:text-[#3a4b3c] transition">
          Mentions légales
        </a>
        <a href="/politique-confidentialite" className="hover:text-[#3a4b3c] transition">
          Confidentialité
        </a>
      </div>
    </div>

  </div>
</footer>
  );
}