import type { MetadataRoute } from "next"
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://avvocatocicero.it",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
  url: "https://avvocatocicero.it/blog",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
},

    {
      url: "https://avvocatocicero.it/diritto-civile-palermo",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://avvocatocicero.it/risarcimento-danni-palermo",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://avvocatocicero.it/malasanita-palermo",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
  url: "https://avvocatocicero.it/blog/incidenti-stradali-palermo",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.7,
  },

    {
      url: "https://avvocatocicero.it/avvocato-incidenti-stradali-palermo",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://avvocatocicero.it/avvocato-famiglia-palermo",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://avvocatocicero.it/avvocato-successioni-palermo",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

  
    {
  url: "https://avvocatocicero.it/blog/separazione-divorzio-palermo",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.7,
},

{
  url: "https://avvocatocicero.it/blog/successioni-palermo",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.7,
},

{
  url: "https://avvocatocicero.it/blog/malasanita-palermo",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.7,
},

{
  url: "https://avvocatocicero.it/blog/risarcimento-danni-palermo",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.7,
},

{
  url: "https://avvocatocicero.it/privacy-policy",
  lastModified: new Date(),
  changeFrequency: "yearly",
  priority: 0.3,
},

{
  url: "https://avvocatocicero.it/cookie-policy",
  lastModified: new Date(),
  changeFrequency: "yearly",
  priority: 0.3,
},
  ];
}

