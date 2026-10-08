import type { Metadata } from "next";

export const SITE_URL = "https://chaletjaia.fr";
export const SOCIAL_IMAGE = "/chalet-jaia-social.jpg";

type PageMetadata = {
  title: string;
  description: string;
  path: `/${string}` | "/";
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  const fullTitle = path === "/" ? title : `${title} — Chalet Jaïa`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: path,
      siteName: "Chalet Jaïa",
      title: fullTitle,
      description,
      images: [
        {
          url: SOCIAL_IMAGE,
          width: 1200,
          height: 630,
          alt: "Le Chalet Jaïa, location de vacances à Gérardmer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}
