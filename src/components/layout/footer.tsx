export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <p>© {new Date().getFullYear()} Chalet des Cimes</p>
      </div>
    </footer>
  );
}