import Link from "next/link"
import Script from "next/script"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
export const metadata = {
  title: "Separazione e divorzio a Palermo | Guida pratica",
  description:
    "Tempi, costi e aspetti legali della separazione e del divorzio a Palermo.",

    alternates: {
  canonical: "https://www.avvocatocicero.it/blog/separazione-divorzio-palermo",
},
    
  }
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto dura una separazione consensuale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I tempi dipendono dal tribunale competente e dalla completezza della documentazione presentata."
      }
    },
    {
      "@type": "Question",
      "name": "È obbligatorio rivolgersi a un avvocato?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nella maggior parte dei casi è consigliabile per tutelare correttamente i propri diritti e interessi."
      }
    },
    {
      "@type": "Question",
      "name": "Quando si può chiedere il divorzio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dopo la separazione e nel rispetto dei termini previsti dalla legge."
      }
    },
    {
      "@type": "Question",
      "name": "Come viene regolato l'affidamento dei figli?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le modalità di affidamento vengono stabilite considerando l'interesse del minore, la situazione familiare e le esigenze educative e relazionali dei figli."
      }
    },
    {
      "@type": "Question",
      "name": "È possibile modificare gli accordi dopo la separazione?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In presenza di cambiamenti significativi nelle condizioni familiari o economiche può essere valutata la revisione degli accordi precedentemente adottati."
      }
    }
  ]
}
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Separazione e divorzio a Palermo",
  description:
    "Tempi, costi e aspetti legali della separazione e del divorzio a Palermo.",
  url: "https://www.avvocatocicero.it/blog/separazione-divorzio-palermo",
  datePublished: "2026-07-08T09:00:00+02:00",
  dateModified: "2026-07-08T09:00:00+02:00",
  author: {
    "@type": "Person",
    name: "Avv. Giuseppina Cicero",
  },
  publisher: {
    "@type": "Organization",
    name: "Studio Legale Giuseppina Cicero",
    logo: {
      "@type": "ImageObject",
      url: "https://www.avvocatocicero.it/og-image.jpg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.avvocatocicero.it/blog/separazione-divorzio-palermo",
  },
};
export default function ArticoloSeparazione() {
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
            name: "Separazione e divorzio",
            url: "https://www.avvocatocicero.it/blog/separazione-divorzio-palermo",
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
          Diritto di Famiglia
        </p>

        <h1 className="font-serif text-5xl md:text-7xl text-[#101826] mb-6">
          Separazione e divorzio a Palermo.
        </h1>

        <div className="flex items-center gap-4 mb-10 text-sm text-slate-500 uppercase tracking-[0.15em]">
  <span>Diritto di Famiglia</span>
  <span>•</span>
  <span>1 min lettura</span>
</div>

        <p className="text-xl text-slate-600 leading-relaxed mb-12">
          La separazione rappresenta spesso il primo passaggio per disciplinare
          i rapporti personali ed economici tra i coniugi.
        </p>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
<h2 className="font-serif text-3xl text-[#101826] mb-6">
  Come funziona la separazione consensuale
</h2>
          <p>
            In presenza di accordo tra le parti è possibile procedere
            attraverso una separazione consensuale.
          </p>

<h2 className="font-serif text-3xl text-[#101826] mb-6">
  Quando è necessaria la separazione giudiziale
</h2>
          <p>
            In assenza di accordo, può essere necessario avviare una procedura
            giudiziale per la tutela dei propri diritti.
          </p>

          <p>
            Ogni situazione familiare presenta caratteristiche specifiche che
            richiedono una valutazione attenta e personalizzata.
          </p>

        </div>

        <div className="mt-24 bg-[#101826] text-white rounded-[2rem] p-10 md:p-14">

  <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-4">
    Richiedi una consulenza
  </p>

  <h2 className="font-serif text-4xl md:text-5xl mb-6">
    Hai bisogno di assistenza legale?
  </h2>

  <p className="text-white/70 text-lg mb-8 max-w-2xl">
    Ogni situazione richiede una valutazione specifica. Contatta lo studio per
    ricevere un primo orientamento e comprendere le possibili soluzioni.
  </p>


  <Link
  href="/#cta"
  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#c8a96b] px-8 py-4 text-[#101826] font-medium hover:opacity-90 transition-all duration-300"
>
  Richiedi una consulenza
</Link>

</div>

<section className="mt-20">
  <h2 className="font-serif text-4xl text-[#101826] mb-10">
    Domande frequenti
  </h2>

  <div className="space-y-4">

    <div className="bg-white rounded-2xl p-6 border border-black/5">
      <h3 className="font-serif text-2xl text-[#101826] mb-3">
        Quanto dura una separazione consensuale?
      </h3>
      <p className="text-slate-600">
        I tempi dipendono dal tribunale competente e dalla completezza della documentazione presentata.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 border border-black/5">
      <h3 className="font-serif text-2xl text-[#101826] mb-3">
        È obbligatorio rivolgersi a un avvocato?
      </h3>
      <p className="text-slate-600">
        Nella maggior parte dei casi è consigliabile per tutelare correttamente i propri diritti e interessi.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 border border-black/5">
      <h3 className="font-serif text-2xl text-[#101826] mb-3">
        Quando si può chiedere il divorzio?
      </h3>
      <p className="text-slate-600">
        Dopo la separazione e nel rispetto dei termini previsti dalla legge.
      </p>
    </div>

  </div>
</section>

      </article>
    </main>
</>
)
}