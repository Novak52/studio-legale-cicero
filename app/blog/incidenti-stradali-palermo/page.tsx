import Link from "next/link"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"

export const metadata = {
  title: "Cosa fare dopo un incidente stradale a Palermo",
  description:
    "Guida pratica su come comportarsi dopo un incidente stradale, quali documenti conservare e quando richiedere il risarcimento danni.",
image: "https://avvocatocicero.it/og-image.jpg",
    alternates: {
  canonical: "https://avvocatocicero.it/blog/incidenti-stradali-palermo",
},
}
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cosa fare dopo un incidente stradale a Palermo",
  description:
    "Guida pratica su come comportarsi dopo un incidente stradale, quali documenti conservare e quando richiedere il risarcimento danni.",
  image: "https://avvocatocicero.it/og-image.jpg",
  url: "https://avvocatocicero.it/blog/incidenti-stradali-palermo",
 author: {
  "@type": "Person",
  name: "Avv. Giuseppina Cicero",
  url: "https://avvocatocicero.it",
},
  publisher: {
    "@type": "Organization",
    name: "Studio Legale Giuseppina Cicero",
    logo: {
      "@type": "ImageObject",
      url: "https://avvocatocicero.it/og-image.jpg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avvocatocicero.it/blog/incidenti-stradali-palermo",
  },
};
export default function IncidentiStradaliPalermoPage() {
  return (
  <>
    <script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
      }}
    />
    <BreadcrumbSchema
      items={[
        {
          name: "Home",
          url: "https://avvocatocicero.it",
        },
        {
          name: "Blog",
          url: "https://avvocatocicero.it/blog",
        },
        {
          name: "Incidenti stradali",
          url: "https://avvocatocicero.it/blog/incidenti-stradali-palermo",
        },
      ]}
    />

    <main className="min-h-screen bg-[#f8f6f2] px-6 py-24">
<article className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center gap-4 mb-12">

  <Link
    href="/"
    className="inline-flex min-h-11 min-w-[12.5rem] max-w-full items-center justify-center rounded-full border border-[#c8a96b]/50 bg-white px-5 py-3 font-sans text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-[#101826] transition-colors duration-300 hover:bg-[#c8a96b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101826]"
  >
    ← Torna alla Home
  </Link>

  <Link
    href="/blog"
    className="inline-flex min-h-11 min-w-[12.5rem] max-w-full items-center justify-center rounded-full border border-[#c8a96b]/50 bg-white px-5 py-3 font-sans text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-[#101826] transition-colors duration-300 hover:bg-[#c8a96b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101826]"
  >
    ← Torna al Blog
  </Link>

</div>

<p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-6">
Incidenti Stradali
</p>

<h1 className="font-serif text-5xl md:text-7xl text-[#101826] mb-6">
Cosa fare dopo un incidente stradale a Palermo
</h1>

<div className="flex items-center gap-4 mb-10 text-sm text-slate-500 uppercase tracking-[0.15em]">
<span>Incidenti Stradali</span>
<span>•</span>
<span>1 min lettura</span>
</div>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">

          <p className="text-left md:text-justify [text-align-last:left] hyphens-none break-normal">
  Dopo un incidente stradale è importante raccogliere e conservare le
  informazioni utili a ricostruire la dinamica del sinistro e le eventuali
  conseguenze subite, soprattutto quando si prospetta una richiesta di
  risarcimento.
</p>

<p className="text-left md:text-justify [text-align-last:left] hyphens-none break-normal">
  Fotografie del luogo dell'incidente, dati dei veicoli coinvolti,
  testimonianze, verbali e documentazione medica possono contribuire alla
  ricostruzione dei fatti e alla valutazione della situazione del soggetto
  danneggiato.
</p>

          <h2 className="font-serif text-3xl text-[#101826] mb-6">
            Quali documenti conservare
          </h2>

          <p className="text-left md:text-justify [text-align-last:left] hyphens-none break-normal">
  È utile conservare il modulo di constatazione amichevole, gli eventuali
  verbali delle autorità intervenute, la documentazione medica e ogni
  documento relativo alle spese sostenute in conseguenza dell'incidente.
  Anche fotografie, comunicazioni e altri elementi collegati al sinistro
  possono essere utili per ricostruire l'accaduto.
</p>

          <h2 className="font-serif text-3xl text-[#101826] mb-6">
            Quando richiedere il risarcimento
          </h2>

          <p className="text-left md:text-justify [text-align-last:left] hyphens-none break-normal">
            La richiesta di risarcimento può riguardare danni materiali, lesioni
            personali, spese mediche e ulteriori conseguenze derivanti
            dall’incidente. La denuncia del sinistro informa la compagnia
            dell’accaduto e va distinta dalla richiesta di risarcimento, che
            deve contenere le informazioni e i documenti previsti per la
            procedura applicabile. È opportuno avvisare tempestivamente la
            compagnia. I termini per la denuncia e quelli di prescrizione del
            diritto al risarcimento sono distinti: la loro applicazione dipende
            dalle circostanze e dalle eccezioni previste dalla legge.
          </p>

          <p className="text-left md:text-justify [text-align-last:left] hyphens-none break-normal">
  Per una valutazione della situazione è possibile richiedere{" "}
  <Link
    href="/avvocato-incidenti-stradali-palermo"
    className="text-[#c8a96b] underline hover:text-[#101826]"
  >
    assistenza legale per incidenti stradali a Palermo
  </Link>
  .
</p>

        </div>

        <div className="mt-24 bg-[#101826] text-white rounded-[2rem] p-10 md:p-14">

          <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-4">
            Richiedi una consulenza
          </p>

          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Hai avuto un incidente stradale?
          </h2>

          <p className="text-white/70 text-lg mb-8 max-w-2xl">
  Lo studio può esaminare la documentazione relativa al sinistro e offrire
  assistenza nella valutazione delle responsabilità e nella gestione della
  richiesta di risarcimento.
</p>

          <a
             href="tel:+393391644668"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#c8a96b] px-8 py-4 text-[#101826] font-medium"
          >
            Chiedi Informazioni
          </a>

        </div>

        <section className="max-w-7xl mx-auto mt-20 pb-24">

          <h2 className="font-serif text-5xl text-[#101826] mb-16">
            Domande frequenti
          </h2>

          <div className="space-y-5">

            <div className="bg-white rounded-2xl p-6 border border-black/5">
      <h3 className="font-serif text-2xl text-[#101826] mb-2">
                Cosa fare subito dopo un incidente?
              </h3>

              <p className="text-slate-600">
  È importante mettere in sicurezza l'area, raccogliere le informazioni
  disponibili sul sinistro e richiedere assistenza medica quando necessario.
  Fotografie, testimonianze e documentazione possono essere utili per la
  successiva ricostruzione dei fatti.
</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-black/5">
      <h3 className="font-serif text-2xl text-[#101826] mb-2">

                È obbligatorio compilare il CID?
              </h3>

              <p className="text-slate-600">
  Il CAI, comunemente chiamato CID, serve a denunciare il sinistro e descriverne
  le circostanze. Non è necessaria la firma di entrambi i conducenti: in caso di
  disaccordo può essere compilato singolarmente. Se il modulo non è stato
  compilato, occorre comunque informare per iscritto la compagnia. La firma
  congiunta può abbreviare i termini dell’offerta nei casi previsti dalla legge.
  Il solo CAI non costituisce una richiesta di risarcimento completa.
</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-black/5">
      <h3 className="font-serif text-2xl text-[#101826] mb-2">
                Quando rivolgersi a un avvocato?
              </h3>

              <p className="text-slate-600">
  Può essere utile richiedere assistenza quando vi sono danni rilevanti,
  contestazioni sulla responsabilità, lesioni personali o difficoltà nella
  gestione della richiesta di risarcimento.
</p>
            </div>

          </div>

        </section>

      </article>

    </main>
</>
)
}