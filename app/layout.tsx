import type { Metadata } from "next";
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

export const metadata = {
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
    "Tutela legale professionale, strategica e personalizzata.",

  url: "https://avvocatocicero.it",

  siteName: "Studio Legale Giuseppina Cicero",

  locale: "it_IT",

  type: "website",
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
};

export const viewport = {
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
    </head>

    <body className="min-h-full flex flex-col">{children}</body>
  </html>
);
}
