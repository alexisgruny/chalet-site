import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: {
    path: string;
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
    priority: number;
  }[] = [
    {
      path: "",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      path: "/chalet",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/tarifs",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/galerie",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/localisation",
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      path: "/contact",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      path: "/mentions-legales",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      path: "/politique-confidentialite",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  return pages.map(({ path, ...metadata }) => ({
    url: `${SITE_URL}${path}`,
    ...metadata,
  }));
}
