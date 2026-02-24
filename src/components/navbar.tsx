import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
        <span className="font-bold text-xl">Chalet</span>

        <div className="flex gap-6">
          <Link href="/">Accueil</Link>
          <Link href="/chalet">Le chalet</Link>
          <Link href="/galerie">Galerie</Link>
          <Link href="/tarifs">Tarifs</Link>
          <Link href="/localisation">Accès</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}