import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Studio Legale Giuseppina Cicero | Diritto Civile e Penale a Palermo",

  description:
    "Studio legale a Palermo specializzato in diritto civile, responsabilità medica, risarcimento danni, successioni e tutela legale personalizzata.",

  keywords: [
    "studio legale palermo",
    "avvocato palermo",
    "diritto civile palermo",
    "diritto penale palermo",
    "risarcimento danni palermo",
    "responsabilità medica palermo",
    "successioni palermo",
    "avvocato civilista palermo",
  ],
  openGraph: {
    
  title:
    "Studio Legale Giuseppina Cicero | Palermo",
    
  description:
    "Assistenza legale civile e familiare a Palermo con gestione diretta, riservatezza e attenzione concreta al cliente.",

  url: "https://avvocatocicero.it",
  

  siteName: "Studio Legale Giuseppina Cicero",

  locale: "it_IT",

  type: "website",
  images: [
  {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Studio Legale Giuseppina Cicero",
  },
],
},
twitter: {
  card: "summary_large_image",
  title: "Studio Legale Giuseppina Cicero | Palermo",
  description:
    "Assistenza legale civile, familiare e risarcitoria a Palermo.",
    images: ["/og-image.jpg"],
},
alternates: {
  canonical: "https://avvocatocicero.it",
},
robots: {
  index: true,
  follow: true,
},

authors: [{ name: "Studio Legale Giuseppina Cicero" }],
creator: "Studio Legale Giuseppina Cicero",
publisher: "Studio Legale Giuseppina Cicero",

icons: {
  icon: "/favicon.ico",
},

metadataBase: new URL("https://avvocatocicero.it"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html
    lang="it"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
  >
    <head>
      <meta name="google-site-verification" content="UoekwG77YY3ETdVrk7HsDy33kMqTBXnnkP9n8AT3zR0" />
      
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Studio Legale Giuseppina Cicero",
      image: "https://avvocatocicero.it/og-image.jpg",
      "@id": "https://avvocatocicero.it",
      url: "https://avvocatocicero.it",
      telephone: "+39 339 1644668",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via Houel 4",
        addressLocality: "Palermo",
        postalCode: "90138",
        addressCountry: "IT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.1157,
        longitude: 13.3615,
      },
      areaServed: "Palermo",
      priceRange: "€€",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
      sameAs: [],
    }),
  }}
/>                
    </head>

    <body className="min-h-full flex flex-col bg-[#f7f4ee] text-[#101826] overflow-x-hidden">{children}</body>
  </html>
);
}
