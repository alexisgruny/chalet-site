import type { MetadataRoute } from "next";

const BASE_URL = "https://chalet-jaia.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/chalet`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tarifs`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/galerie`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/localisation`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
