import Script from "next/script"
export const metadata = {
  title: "Diritto Civile Palermo | Studio Legale Giuseppina Cicero",
  description:
    "Assistenza legale in diritto civile a Palermo. Tutela per risarcimento danni, successioni, responsabilità civile e controversie legali.",
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quando rivolgersi a un avvocato civilista?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "È consigliabile richiedere assistenza legale quando emergono controversie patrimoniali, problematiche contrattuali, richieste di risarcimento o situazioni che richiedono tutela giuridica civile."
      }
    },
    {
      "@type": "Question",
      "name": "Lo studio segue cause di risarcimento danni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lo studio assiste clienti in materia di responsabilità civile e richieste di risarcimento danni derivanti da incidenti, inadempimenti o altre controversie civili."
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
      "name": "Quanto dura una causa civile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La durata varia in base alla complessità della controversia, alla documentazione disponibile e alle procedure necessarie per la tutela dei diritti coinvolti."
      }
    },
    {
      "@type": "Question",
      "name": "È possibile risolvere una controversia senza processo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In molti casi è possibile tentare una soluzione stragiudiziale attraverso accordi, negoziazioni o procedure alternative prima di avviare una causa."
      }
    },
    {
      "@type": "Question",
      "name": "Quali documenti servono per una consulenza legale civile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "È utile presentare contratti, comunicazioni, documentazione patrimoniale e ogni documento collegato alla controversia da esaminare."
      }
    }
  ]
};
export default function DirittoCivilePalermo() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    <main className="min-h-screen bg-[#f7f4ee] text-[#101826]">
      
      <section className="max-w-5xl mx-auto px-6 py-24">
        
        <p className="uppercase tracking-[0.35em] text-[#c8a96b] text-sm mb-6">
          Studio Legale Palermo
        </p>

        <h1 className="text-5xl md:text-7xl font-serif leading-[0.95] mb-10">
          Diritto civile
          <br />
          a Palermo.
        </h1>

        <p className="text-xl text-[#5d6470] leading-relaxed max-w-3xl mb-16">
          Lo studio offre assistenza legale in materia civile con approccio
          diretto, tutela concreta della persona e gestione rigorosa delle
          pratiche.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5">
            <h2 className="text-3xl font-serif mb-5">
              Assistenza civile
            </h2>

            <p className="text-[#5d6470] leading-relaxed">
              Tutela legale in controversie civili, responsabilità,
              risarcimento danni, successioni ereditarie, diritto di famiglia
              e gestione delle problematiche patrimoniali.
            </p>
          </div>

          <div className="bg-[#0b1220] text-white rounded-[2rem] p-8">
            <h2 className="text-3xl font-serif mb-5">
              Consulenza riservata
            </h2>

            <p className="text-white/70 leading-relaxed mb-8">
              Contatta lo studio per ricevere supporto legale e assistenza
              dedicata nella gestione delle tue esigenze civili.
            </p>

            <a
              href="tel:+393391644668"
              className="inline-flex bg-[#c8a96b] text-[#101826] px-6 py-4 rounded-full"
            >
              Prenota consulenza
            </a>
          </div>

        </div>
        <section className="mt-28 max-w-4xl">

  <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-10">
    Assistenza legale in diritto civile a Palermo
  </h2>

  <div className="space-y-8 text-lg leading-relaxed text-[#5d6470]">

    <p>
      Lo studio legale offre assistenza nell’ambito del diritto civile a Palermo, seguendo controversie patrimoniali, responsabilità civile,
      richieste di risarcimento danni, successioni ereditarie e tutela dei
      diritti della persona.
    </p>

    <p>
      Ogni pratica viene gestita con attenzione diretta, analisi rigorosa
      della documentazione e supporto costante nelle diverse fasi della
      controversia civile, sia in sede stragiudiziale che giudiziale.
    </p>

    <p>
      L’assistenza comprende attività di consulenza, gestione del contenzioso,
      tutela contrattuale, recupero crediti, problematiche ereditarie e
      responsabilità professionale, con operatività su Palermo e territorio
      siciliano.
    </p>

  </div>

  <div className="mt-24">

    <h2 className="text-4xl md:text-5xl font-serif mb-12">
      Domande frequenti
    </h2>

    <div className="space-y-8">

      <div className="border-b border-black/10 pb-8">
        <h3 className="text-2xl font-serif mb-4">
          Quando rivolgersi a un avvocato civilista?
        </h3>

        <p className="text-[#5d6470] leading-relaxed">
          È consigliabile richiedere assistenza legale quando emergono
          controversie patrimoniali, problematiche contrattuali, richieste di
          risarcimento o situazioni che richiedono tutela giuridica civile.
        </p>
      </div>

      <div className="border-b border-black/10 pb-8">
        <h3 className="text-2xl font-serif mb-4">
          Lo studio segue cause di risarcimento danni?
        </h3>

        <p className="text-[#5d6470] leading-relaxed">
          Lo studio assiste clienti in materia di responsabilità civile e
          richieste di risarcimento danni derivanti da incidenti, inadempimenti
          o altre controversie civili.
        </p>
      </div>

      <div className="border-b border-black/10 pb-8">
        <h3 className="text-2xl font-serif mb-4">
          È possibile prenotare una consulenza?
        </h3>

        <p className="text-[#5d6470] leading-relaxed">
          È possibile contattare lo studio per ricevere una consulenza
          riservata e valutare la situazione giuridica con assistenza diretta.
        </p>
      </div>
<div className="border-b border-black/10 pb-8">
  <h3 className="text-2xl font-serif mb-4">
    Quanto dura una causa civile?
  </h3>

  <p className="text-[#5d6470] leading-relaxed">
    La durata varia in base alla complessità della controversia, alla documentazione disponibile e alle procedure necessarie per la tutela dei diritti coinvolti.
  </p>
</div>

<div className="border-b border-black/10 pb-8">
  <h3 className="text-2xl font-serif mb-4">
    È possibile risolvere una controversia senza processo?
  </h3>

  <p className="text-[#5d6470] leading-relaxed">
    In molti casi è possibile tentare una soluzione stragiudiziale attraverso accordi, negoziazioni o procedure alternative prima di avviare una causa.
  </p>
</div>

<div className="border-b border-black/10 pb-8">
  <h3 className="text-2xl font-serif mb-4">
    Quali documenti servono per una consulenza legale civile?
  </h3>

  <p className="text-[#5d6470] leading-relaxed">
    È utile presentare contratti, comunicazioni, documentazione patrimoniale e ogni documento collegato alla controversia da esaminare.
  </p>
</div>
    </div>
  </div>

</section>
      </section>
    </main>
</>
  );
}