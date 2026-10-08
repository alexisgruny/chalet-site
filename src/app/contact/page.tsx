import ContactForm from "./contactForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact et réservation",
  description:
    "Contactez les propriétaires du Chalet Jaïa à Gérardmer pour poser une question ou demander une réservation pour votre séjour dans les Vosges.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactForm />;
}
