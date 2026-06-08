import Link from "next/link"
import Script from "next/script"
export const metadata = {
  title: "Separazione e Divorzio Palermo | Studio Legale",
  description:
    "Assistenza legale per separazione, divorzio, affidamento figli e tutela familiare a Palermo.",
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quando serve un avvocato familiarista?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'assistenza di un avvocato esperto in diritto di famiglia è importante nei casi di separazione, divorzio, affidamento dei figli, mantenimento e controversie familiari."
      }
    },
    {
      "@type": "Question",
      "name": "Come funziona l'affidamento dei figli?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'affidamento viene stabilito considerando l'interesse del minore, la situazione familiare e la capacità dei genitori di garantire stabilità e tutela."
      }
    },
    {
      "@type": "Question",
      "name": "È possibile richiedere una consulenza riservata?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì. Lo studio offre consulenze riservate per separazioni, divorzi, tutela dei minori e gestione delle controversie patrimoniali."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto dura una procedura di separazione?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La durata dipende dalla complessità del caso e dall'eventuale accordo tra le parti. Una separazione consensuale è generalmente più rapida."
      }
    },
    {
      "@type": "Question",
      "name": "Qual è la differenza tra separazione e divorzio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La separazione sospende alcuni effetti del matrimonio, mentre il divorzio scioglie definitivamente il vincolo coniugale."
      }
    },
    {
      "@type": "Question",
      "name": "Come viene determinato il mantenimento dei figli?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il mantenimento viene stabilito considerando le esigenze del minore, il tenore di vita e le capacità economiche dei genitori."
      }
    }
  ]
};
export default function SeparazioneDivorzioPalermo() {
  return (
    <>
<Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>
    <main className="bg-[#f5f1ea] text-[#0b1220] min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-6">
          Studio Legale Palermo
        </p>

        <h1 className="font-serif text-5xl md:text-7xl leading-tight max-w-4xl mb-10">
          Avvocato diritto di famiglia a Palermo.
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mb-20">
          Lo studio offre assistenza legale in diritto di famiglia,
          separazioni, affidamento figli, tutela familiare e
          gestione delle controversie patrimoniali.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-24">

          <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-black/5">
            <h2 className="font-serif text-4xl mb-6">
              Tutela familiare
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Assistenza legale per separazioni, affidamento minori,
               accordi familiari, mantenimento e tutela
                dei diritti della persona.
            </p>
          </div>

          <div className="bg-[#0b1220] text-white rounded-[2rem] p-10">
            <h2 className="font-serif text-4xl mb-6">
              Consulenza riservata
            </h2>

            <p className="text-white/70 leading-relaxed mb-8">
              Contatta lo studio per ricevere supporto legale
               diretto nelle questioni di diritto di famiglia
              e tutela familiare.
            </p>

            <Link
  href="/#cta"
  className="inline-flex items-center justify-center rounded-full bg-[#c8a96b] px-8 py-4 text-black text-lg hover:opacity-90 transition"
            >
  Prenota consulenza
</Link>
          </div>

        </div>

        <section className="max-w-5xl mb-24">

          <h2 className="font-serif text-5xl leading-tight mb-10">
            Assistenza legale in diritto di famiglia a Palermo
          </h2>

          <div className="space-y-10 text-slate-600 text-lg leading-relaxed">

            <p>
              Lo studio assiste clienti nelle controversie
              familiari e nelle procedure relative a separazioni,
              divorzi e affidamento dei figli a Palermo.
            </p>

            <p>
              Ogni situazione viene gestita con attenzione diretta,
              tutela della persona e assistenza nella definizione
              degli accordi familiari e patrimoniali.
            </p>

            <p>
              L’assistenza comprende mantenimento, responsabilità genitoriale,
              tutela dei minori e gestione delle problematiche familiari
              nel territorio di Palermo e Sicilia.
            </p>

          </div>
          <p>
  Approfondisci l'argomento nella nostra guida dedicata:
  {" "}
  <a
    href="/blog/separazione-divorzio-palermo"
    className="underline underline-offset-4"
  >
    Separazione e divorzio a Palermo
  </a>.
</p>
        </section>

        <section className="max-w-5xl">

          <h2 className="font-serif text-5xl mb-12">
            Domande frequenti
          </h2>

          <div className="space-y-12">

            <div className="border-b border-black/10 pb-10">
              <h3 className="font-serif text-3xl mb-4">
  Quando serve un avvocato familiarista?
</h3>

<p className="text-slate-600 text-lg leading-relaxed">
  L’assistenza di un avvocato esperto in diritto di famiglia è importante in casi di separazione, divorzio, affidamento figli, mantenimento e controversie familiari.
</p>
            </div>

            <div className="border-b border-black/10 pb-10">
              <h3 className="font-serif text-3xl mb-4">
  Come funziona l’affidamento dei figli?
</h3>

<p className="text-slate-600 text-lg leading-relaxed">
  L’affidamento viene deciso valutando l’interesse del minore, la situazione familiare e la capacità dei genitori di garantire stabilità e tutela.
</p>
            </div>

            <div className="border-b border-black/10 pb-10">
              <h3 className="font-serif text-3xl mb-4">
  È possibile richiedere una consulenza riservata?
</h3>

<p className="text-slate-600 text-lg leading-relaxed">
  Lo studio offre consulenze legali riservate per questioni familiari, separazioni, tutela dei minori e gestione delle controversie patrimoniali.
</p>
            </div>

          </div>

        </section>

      </div>
    
    <section className="max-w-5xl mx-auto px-6 py-24">
  <h2 className="font-serif text-5xl mb-12">
    Altre domande frequenti
  </h2>

  <div className="space-y-12">

    <div className="border-b border-black/10 pb-10">
      <h3 className="font-serif text-3xl mb-4">
        Quanto dura una procedura di separazione?
      </h3>

      <p className="text-slate-600 text-lg leading-relaxed">
        La durata varia in base alla complessità della situazione e alla presenza di accordi tra i coniugi.
      </p>
    </div>

    <div className="border-b border-black/10 pb-10">
      <h3 className="font-serif text-3xl mb-4">
        Qual è la differenza tra separazione e divorzio?
      </h3>

      <p className="text-slate-600 text-lg leading-relaxed">
        La separazione regola i rapporti tra i coniugi, mentre il divorzio determina lo scioglimento definitivo del matrimonio.
      </p>
    </div>

    <div className="border-b border-black/10 pb-10">
      <h3 className="font-serif text-3xl mb-4">
        Come viene determinato il mantenimento dei figli?
      </h3>

      <p className="text-slate-600 text-lg leading-relaxed">
        Il giudice valuta esigenze dei figli, disponibilità economiche dei genitori e situazione familiare complessiva.
      </p>
    </div>

  </div>
</section>

</main>
</>

);
}