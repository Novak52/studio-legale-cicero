import Link from "next/link"
import Script from "next/script"
export const metadata = {
  title: "Risarcimento Danni Palermo | Studio Legale Giuseppina Cicero",
  description:
    "Assistenza legale per risarcimento danni a Palermo. Tutela civile per incidenti stradali, responsabilità civile, danni patrimoniali e richieste risarcitorie.",

    alternates: {
  canonical: "https://www.avvocatocicero.it/risarcimento-danni-palermo",
},
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quando richiedere un risarcimento danni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "È consigliabile rivolgersi a un avvocato quando si subiscono danni derivanti da incidenti, responsabilità civili, comportamenti negligenti o controversie patrimoniali."
      }
    },
    {
      "@type": "Question",
      "name": "Lo studio segue incidenti stradali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lo studio assiste clienti nella gestione di richieste risarcitorie derivanti da incidenti stradali e problematiche legate alla responsabilità civile."
      }
    },
    {
      "@type": "Question",
      "name": "È possibile prenotare una consulenza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "È possibile contattare lo studio per ricevere una consulenza riservata e valutare la situazione giuridica con assistenza diretta."
      }
    },
    {
      "@type": "Question",
      "name": "Quali danni possono essere risarciti?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Possono essere risarciti danni patrimoniali, danni biologici, danni morali e altre conseguenze economiche derivanti da fatti illeciti o responsabilità civili."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo ho per richiedere un risarcimento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I termini possono variare in base al tipo di danno e alla situazione specifica. È consigliabile richiedere assistenza legale il prima possibile."
      }
    },
    {
      "@type": "Question",
      "name": "Serve una documentazione per ottenere il risarcimento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì. Documentazione medica, fotografie, perizie, contratti e altri elementi probatori possono essere fondamentali per sostenere la richiesta."
      }
    }
  ]
};
export default function RisarcimentoDanniPalermo() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    <main className="bg-[#f7f4ee] text-[#101826] min-h-screen">
      
      <section className="max-w-6xl mx-auto px-6 py-24">
        
        <p className="uppercase tracking-[0.35em] text-[#c8a96b] text-sm mb-6">
          Studio Legale Palermo
        </p>

        <h1 className="text-5xl md:text-7xl font-serif leading-[0.95] mb-10 max-w-5xl">
          Risarcimento danni
          <br />
          a Palermo.
        </h1>

        <p className="text-xl text-[#4b5563] leading-relaxed max-w-4xl mb-20">
          Lo studio assiste privati e famiglie nelle richieste di
          risarcimento danni derivanti da incidenti stradali,
          responsabilità civile, inadempimenti contrattuali e
          problematiche patrimoniali.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-28">

          <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-black/5">
            <h2 className="text-4xl font-serif mb-6">
              Tutela risarcitoria
            </h2>

            <p className="text-lg leading-relaxed text-[#4b5563]">
              Assistenza legale nella gestione di richieste risarcitorie,
              analisi documentale, trattative e tutela giudiziale in materia
              di danni patrimoniali e responsabilità civile.
            </p>
          </div>

          <div className="bg-[#07101d] text-white rounded-[2rem] p-10">
            <h2 className="text-4xl font-serif mb-6">
              Consulenza riservata
            </h2>

            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Contatta lo studio per ricevere assistenza legale dedicata
              nella valutazione della tua posizione risarcitoria.
            </p>

            <Link
              href="/#cta"
              className="inline-block bg-[#c8a96b] text-[#101826] px-8 py-4 rounded-full"
            >
              Prenota consulenza
            </Link>
          </div>

        </div>

        <section className="max-w-5xl mb-28">

          <h2 className="text-5xl font-serif mb-12">
            Assistenza per richieste di risarcimento danni a Palermo
          </h2>

          <div className="space-y-10 text-lg leading-relaxed text-[#4b5563]">

            <p>
  Lo studio legale offre assistenza nell’ambito del{" "}
  
  <a
    href="/diritto-civile-palermo"
    className="underline underline-offset-4 hover:text-[#101826]"
  >
    diritto civile a Palermo
  </a>
  
  , seguendo controversie legate a responsabilità civile,
  incidenti stradali, danni patrimoniali e tutela dei diritti
  della persona.
</p>

            <p>
              Ogni pratica viene analizzata con attenzione diretta,
              valutazione documentale e gestione accurata delle diverse
              fasi della controversia, sia in sede stragiudiziale che giudiziale.
            </p>

            <p>
              L’assistenza comprende attività di consulenza, gestione del
              contenzioso, tutela del danneggiato e supporto nelle procedure
              di richiesta risarcitoria con operatività su Palermo e territorio siciliano.
            </p>

            <h2 className="text-4xl md:text-5xl font-serif leading-tight mt-16 mb-8">
  Quando è possibile richiedere un risarcimento danni?
</h2>

<p>
  Il risarcimento può essere richiesto quando un soggetto subisce un danno
  ingiusto causato dal comportamento di un'altra persona, di un'impresa o di
  un ente. Ogni situazione richiede una valutazione specifica delle
  circostanze e della documentazione disponibile.
</p>

<p>
  Tra le ipotesi più frequenti rientrano incidenti stradali, responsabilità
  professionale, danni alla persona, inadempimenti contrattuali e altre
  situazioni che abbiano determinato conseguenze economiche o personali
  rilevanti.

  <h2 className="text-4xl md:text-5xl font-serif leading-tight mt-16 mb-8">
  Come viene valutato il danno?
</h2>

<p>
  La quantificazione del danno rappresenta una fase centrale della procedura
  risarcitoria. È necessario analizzare la documentazione disponibile,
  individuare le conseguenze subite e verificare gli elementi utili a
  dimostrare il pregiudizio economico o personale.
</p>

<p>
  In base alla tipologia del caso possono assumere rilievo certificazioni
  mediche, documentazione fotografica, preventivi, fatture, testimonianze e
  ogni altro elemento utile alla ricostruzione dei fatti.

  <h2 className="text-4xl md:text-5xl font-serif leading-tight mt-16 mb-8">
  Assistenza nella fase stragiudiziale e giudiziale
</h2>

<p>
  In molte controversie è possibile tentare una soluzione attraverso trattative
  e richieste formali rivolte alla controparte o alle compagnie assicurative,
  con l'obiettivo di ottenere un risarcimento senza ricorrere immediatamente al giudice.
</p>

<p>
  Quando non è possibile raggiungere un accordo soddisfacente, la tutela può
  proseguire nelle sedi competenti attraverso le procedure previste dalla legge,
  con assistenza nella gestione della documentazione e nelle diverse fasi del procedimento.
</p>

</p>

</p>



          </div>
          <p>
  Approfondisci l'argomento nella nostra guida dedicata:
  {" "}
  <a
    href="/blog/risarcimento-danni-palermo"
    className="underline underline-offset-4"
  >
    Risarcimento danni a Palermo
  </a>.
</p>

        </section>

        <section className="max-w-5xl">

          <h2 className="text-5xl font-serif mb-12">
            Domande frequenti
          </h2>

          <div className="space-y-14">

            <div className="border-b border-black/10 pb-10">
              <h3 className="text-3xl font-serif mb-5">
                Quando richiedere un risarcimento danni?
              </h3>

              <p className="text-lg text-[#4b5563] leading-relaxed">
                È consigliabile rivolgersi a un avvocato quando si subiscono
                danni derivanti da incidenti, responsabilità civili,
                comportamenti negligenti o controversie patrimoniali.
              </p>
            </div>

            <div className="border-b border-black/10 pb-10">
              <h3 className="text-3xl font-serif mb-5">
                Lo studio segue incidenti stradali?
              </h3>

              <p className="text-lg text-[#4b5563] leading-relaxed">
                Lo studio assiste clienti nella gestione di richieste
                risarcitorie derivanti da incidenti stradali e problematiche
                legate alla responsabilità civile.
              </p>
            </div>

            <div className="border-b border-black/10 pb-10">
              <h3 className="text-3xl font-serif mb-5">
                È possibile prenotare una consulenza?
              </h3>

              <p className="text-lg text-[#4b5563] leading-relaxed">
                È possibile contattare lo studio per ricevere una consulenza
                riservata e valutare la situazione giuridica con assistenza diretta.
              </p>
            </div>
<div className="border-b border-black/10 pb-10">
  <h3 className="text-3xl font-serif mb-5">
    Quali danni possono essere risarciti?
  </h3>

  <p className="text-lg text-[#4b5563] leading-relaxed">
    Possono essere risarciti danni patrimoniali, danni biologici, danni morali e altre conseguenze economiche derivanti da fatti illeciti o responsabilità civili.
  </p>
</div>

<div className="border-b border-black/10 pb-10">
  <h3 className="text-3xl font-serif mb-5">
    Quanto tempo ho per richiedere un risarcimento?
  </h3>

  <p className="text-lg text-[#4b5563] leading-relaxed">
    I termini possono variare in base al tipo di danno e alla situazione specifica. È consigliabile richiedere assistenza legale il prima possibile.
  </p>
</div>

<div className="border-b border-black/10 pb-10">
  <h3 className="text-3xl font-serif mb-5">
    Serve una documentazione per ottenere il risarcimento?
  </h3>

  <p className="text-lg text-[#4b5563] leading-relaxed">
    Documentazione medica, fotografie, perizie, contratti e altri elementi probatori possono essere fondamentali per sostenere la richiesta risarcitoria.
  </p>
</div>
          </div>

        </section>

      </section>

    </main>
</>
  )
}