import Link from "next/link"
import Script from "next/script"
export const metadata = {
  title: "Malasanità Palermo | Studio Legale Giuseppina Cicero",
  description:
    "Assistenza legale per casi di malasanità, responsabilità medica, errori sanitari e richieste risarcitorie a Palermo.",
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quando si può parlare di malasanità?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si parla di malasanità quando un errore medico, diagnostico, chirurgico o assistenziale provoca un danno evitabile al paziente. Possono rientrare nei casi di responsabilità sanitaria diagnosi tardive, errori durante interventi chirurgici, terapie inappropriate, omissioni assistenziali e infezioni ospedaliere evitabili."
      }
    },
    {
      "@type": "Question",
      "name": "È possibile ottenere un risarcimento per errore medico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì. Se viene accertata la responsabilità della struttura sanitaria o del professionista medico e il danno subito è conseguenza diretta dell'errore, il paziente può ottenere il risarcimento dei danni patrimoniali, biologici e morali previsti dalla normativa vigente."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo ho per agire contro una struttura sanitaria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I termini possono variare in base alle caratteristiche del caso e al tipo di responsabilità contestata. Per evitare la perdita dei propri diritti è consigliabile richiedere una valutazione legale e medico-legale il prima possibile dopo la scoperta del danno."
      }
    },
    {
      "@type": "Question",
      "name": "Quali documenti servono per valutare un caso di malasanità?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generalmente sono utili cartelle cliniche, referti medici, esami diagnostici, lettere di dimissione, prescrizioni e ogni documentazione sanitaria relativa alle cure ricevute. L'analisi completa della documentazione consente di verificare eventuali profili di responsabilità medica."
      }
    },
    {
      "@type": "Question",
      "name": "È necessaria una perizia medico legale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nella maggior parte dei casi una valutazione medico-legale è fondamentale per accertare il nesso tra l'errore sanitario e il danno subito dal paziente. La perizia rappresenta uno degli elementi principali per sostenere una richiesta di risarcimento."
      }
    }
  ]
};
export default function MalasanitaPalermo() {
  return (
    <main className="bg-[#f5f1ea] text-[#0b1220]">
<Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 overflow-hidden">

        <p className="uppercase tracking-[0.35em] text-[#c8a96b] text-sm mb-6">
          Studio Legale Palermo
        </p>

        <h1 className="font-serif text-4xl md:text-7xl leading-tight max-w-4xl mb-12">
          Avvocato malasanità a Palermo.
        </h1>

        <p className="text-[#334155] text-xl leading-relaxed max-w-3xl">
          Lo studio offre assistenza legale nei casi di responsabilità medica,
          errori sanitari, danni ospedalieri e richieste risarcitorie collegate
          a malpractice sanitaria.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-20">

          <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-sm border border-black/5">
            <h2 className="font-serif text-4xl mb-6">
              Responsabilità medica
            </h2>

            <p className="text-[#334155] text-lg leading-relaxed">
              Assistenza nelle controversie relative a diagnosi errate,
              interventi chirurgici, errori terapeutici, infezioni ospedaliere
              e danni sanitari.
            </p>
          </div>

          <div className="bg-[#071133] text-white rounded-[2rem] p-6 md:p-12">
            <h2 className="font-serif text-4xl mb-6">
              Consulenza riservata
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Contatta lo studio per ricevere assistenza legale diretta nei casi
              di malpractice sanitaria e richieste risarcitorie.
            </p>

            <Link
              href="/#cta"
              className="inline-block bg-[#c8a96b] text-black px-8 py-4 rounded-full text-lg hover:opacity-90 transition"
            >
              Prenota consulenza
            </Link>
          </div>

        </div>
      </section>

      {/* TESTO SEO */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="font-serif text-5xl leading-tight mb-16 max-w-4xl">
          Assistenza legale per casi di malasanità a Palermo
        </h2>

        <div className="space-y-12 text-[#334155] text-xl leading-relaxed max-w-5xl">

          <p>
            Lo studio legale assiste pazienti coinvolti in casi di malasanità a
            Palermo, offrendo supporto nelle procedure risarcitorie e nella
            verifica delle responsabilità sanitarie.
          </p>

          <p>
            Ogni pratica viene analizzata con attenzione documentale, consulenze
            medico-legali e valutazione dei danni fisici, patrimoniali e morali
            derivanti da errori medici o ospedalieri.
          </p>

          <p>
            L’assistenza comprende responsabilità chirurgica, errori diagnostici,
            infezioni ospedaliere, omissioni terapeutiche e tutela del paziente
            nel territorio di Palermo e Sicilia.
          </p>

          <p>
            Lo studio segue anche pratiche collegate al{" "}
            <a
              href="/risarcimento-danni-palermo"
              className="underline underline-offset-4"
            >
              risarcimento danni a Palermo
            </a>{" "}
            e controversie di{" "}
            <a
              href="/diritto-civile-palermo"
              className="underline underline-offset-4"
            >
              diritto civile
            </a>.
          </p>

        </div>
        <p>
  Approfondisci l'argomento nella nostra guida dedicata:
  {" "}
  <a
    href="/blog/malasanita-palermo"
    className="underline underline-offset-4"
  >
    Malasanità a Palermo
  </a>.
</p>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="font-serif text-4xl md:text-6xl mb-20">
          Domande frequenti
        </h2>

        <div className="space-y-16">

          <div className="border-b border-black/10 pb-12">
            <h3 className="font-serif text-4xl mb-6">
              Quando si può parlare di malasanità?
            </h3>

            <p className="text-[#334155] text-xl leading-relaxed max-w-5xl">
              È possibile valutare un caso di malasanità quando un errore medico,
              sanitario o ospedaliero provoca danni fisici, psicologici o
              patrimoniali al paziente.
            </p>
          </div>

          <div className="border-b border-black/10 pb-12">
            <h3 className="font-serif text-4xl mb-6">
              È possibile richiedere un risarcimento?
            </h3>

            <p className="text-[#334155] text-xl leading-relaxed max-w-5xl">
              In presenza di responsabilità documentabili, è possibile richiedere
              il risarcimento dei danni derivanti da malpractice sanitaria o
              errori medici.
            </p>
          </div>

          <div className="border-b border-black/10 pb-12">
            <h3 className="font-serif text-4xl mb-6">
              Quanto tempo ho per agire contro una struttura sanitaria?
            </h3>

            <p className="text-[#334155] text-xl leading-relaxed max-w-5xl">
              I termini possono variare in base alle caratteristiche del caso e al tipo
di responsabilità contestata. Per evitare la perdita dei propri diritti è
consigliabile richiedere una valutazione legale il prima possibile dopo la
scoperta del danno.
            </p>
          </div>
<div className="border-b border-black/10 pb-12">
  <h3 className="font-serif text-4xl mb-6">
    Quali documenti servono per valutare un caso di malasanità?
  </h3>

  <p className="text-[#334155] text-xl leading-relaxed max-w-5xl">
    Per una prima valutazione sono generalmente utili cartelle cliniche,
    referti, esami diagnostici, lettere di dimissione e tutta la
    documentazione sanitaria disponibile. L'analisi dei documenti consente
    di verificare eventuali profili di responsabilità medica e la presenza
    di danni risarcibili.
  </p>
</div>

<div className="border-b border-black/10 pb-12">
  <h3 className="font-serif text-4xl mb-6">
    È necessaria una perizia medico-legale?
  </h3>

  <p className="text-[#334155] text-xl leading-relaxed max-w-5xl">
    Nella maggior parte dei casi una valutazione medico-legale è uno
    strumento fondamentale per accertare il collegamento tra l'errore
    sanitario e il danno subito dal paziente. La perizia aiuta a
    quantificare il danno e a sostenere eventuali richieste di
    risarcimento.
  </p>
</div>
        </div>
      </section>

    </main>
  );
}