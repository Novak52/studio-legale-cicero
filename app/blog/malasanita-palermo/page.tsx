import Link from "next/link"
import Script from "next/script"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"

export const metadata = {
  title: "Malasanità a Palermo | Guida pratica",
  description:
    "Quando è possibile ottenere un risarcimento per malasanità a Palermo. Errori medici, responsabilità sanitaria e tutela del paziente.",

    alternates: {
  canonical: "https://www.avvocatocicero.it/blog/malasanita-palermo",
},
}
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quali sono i casi più frequenti di malasanità?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Diagnosi tardive, errori chirurgici, infezioni ospedaliere e mancato consenso informato.",
      },
    },
    {
      "@type": "Question",
      name: "È sempre possibile ottenere un risarcimento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Occorre dimostrare il danno, l'errore sanitario e il nesso causale tra i due elementi.",
      },
    },
    {
      "@type": "Question",
      name: "Quali documenti servono?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cartelle cliniche, referti, esami diagnostici e tutta la documentazione sanitaria disponibile.",
      },
    },
  ],
};
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Malasanità a Palermo",
  description:
    "Quando è possibile ottenere un risarcimento per malasanità a Palermo. Errori medici, responsabilità sanitaria e tutela del paziente.",
  url: "https://www.avvocatocicero.it/blog/malasanita-palermo",
  datePublished: "2026-07-08",
  dateModified: "2026-07-08",
  author: {
    "@type": "Person",
    name: "Avv. Giuseppina Cicero",
  },
  publisher: {
    "@type": "LegalService",
    name: "Studio Legale Giuseppina Cicero",
    logo: {
      "@type": "ImageObject",
      url: "https://www.avvocatocicero.it/og-image.jpg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.avvocatocicero.it/blog/malasanita-palermo",
  },
};
export default function Page() {
  return (
  <>
    <BreadcrumbSchema
      items={[
        {
          name: "Home",
          url: "https://www.avvocatocicero.it",
        },
        {
          name: "Blog",
          url: "https://www.avvocatocicero.it/blog",
        },
        {
          name: "Malasanità",
          url: "https://www.avvocatocicero.it/blog/malasanita-palermo",
        },
      ]}
    />
<Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>

<Script
  id="article-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(articleSchema),
  }}
/>

    <main className="min-h-screen bg-[#f8f6f2] px-6 py-24">
<article className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center gap-4 mb-12">

  <Link
    href="/"
    className="inline-flex items-center justify-center rounded-full border border-[#101826] px-5 py-3 text-[#101826] font-medium transition-all duration-300 hover:bg-[#101826] hover:text-white"
  >
    ← Torna alla Home
  </Link>

  <Link
    href="/blog"
    className="inline-flex items-center justify-center rounded-full border border-[#c8a96b] px-5 py-3 text-[#c8a96b] font-medium transition-all duration-300 hover:bg-[#c8a96b] hover:text-[#101826]"
  >
    📖 Torna al Blog
  </Link>

</div>

<p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-6">
Malasanità
</p>

<h1 className="font-serif text-5xl md:text-7xl text-[#101826] mb-6">
Cosa fare dopo un caso di malasanità a Palermo
</h1>

<div className="flex items-center gap-4 mb-10 text-sm text-slate-500 uppercase tracking-[0.15em]">
<span>Malasanità</span>
<span>•</span>
<span>1 min lettura</span>
</div>

        <div className="space-y-8 text-lg text-slate-700 leading-relaxed">

          <p>
            I casi di malasanità riguardano situazioni nelle quali una struttura
            sanitaria o un professionista sanitario commette errori che causano
            danni al paziente.
          </p>

          <p>
            Per ottenere un risarcimento è necessario verificare la presenza di
            un comportamento colposo, il danno subito e il collegamento tra
            l'errore e le conseguenze riportate.
          </p>

          <p>
            Le situazioni più frequenti riguardano diagnosi tardive, errori
            chirurgici, infezioni ospedaliere, trattamenti non adeguati e
            mancato consenso informato.
          </p>

          <p>
            Ogni caso richiede un'analisi della documentazione clinica e una
            valutazione medico-legale approfondita.
          </p>

        </div>

        <div className="mt-24 bg-[#101826] text-white rounded-[2rem] p-10 md:p-14">

          <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-4">
            Richiedi una consulenza
          </p>

          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Hai bisogno di assistenza per un caso di malasanità?
          </h2>

          <p className="text-white/70 text-lg mb-8 max-w-2xl">
            Lo studio offre supporto nella valutazione della documentazione
            sanitaria e nelle richieste risarcitorie collegate a responsabilità
            medica.
          </p>

          <Link
href="/#cta"
className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#c8a96b] px-8 py-4 text-[#101826] font-medium hover:opacity-90 transition-all duration-300"
>
Richiedi una consulenza
</Link>

</div>

        <section className="mt-24">
  <h2 className="font-serif text-4xl text-[#101826] mb-10">
    Domande frequenti
  </h2>

  <div className="space-y-4">

    <div className="bg-white rounded-2xl p-6 border border-black/5">
      <h3 className="font-serif text-2xl text-[#101826] mb-2">
        Quali sono i casi più frequenti di malasanità?
      </h3>

      <p className="text-slate-600">
        Diagnosi tardive, errori chirurgici, infezioni ospedaliere e mancato consenso informato.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 border border-black/5">
      <h3 className="font-serif text-2xl text-[#101826] mb-2">
        È sempre possibile ottenere un risarcimento?
      </h3>

      <p className="text-slate-600">
        No. Occorre dimostrare il danno, l'errore sanitario e il nesso causale tra i due elementi.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 border border-black/5">
      <h3 className="font-serif text-2xl text-[#101826] mb-2">
        Quali documenti servono?
      </h3>

      <p className="text-slate-600">
        Cartelle cliniche, referti, esami diagnostici e tutta la documentazione sanitaria disponibile.
      </p>
    </div>

  </div>
</section>


      </article>
    </main>
</>
)
}