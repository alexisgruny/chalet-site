import "@/styles/globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "Chalet des Cimes",
  description: "Location de chalet à la montagne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#EBE2D6] text-[#3a4b3c]">
        <Navbar />
        <main className="w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
