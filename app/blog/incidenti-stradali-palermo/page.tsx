import Link from "next/link"
import Script from "next/script"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"

export const metadata = {
  title: "Cosa fare dopo un incidente stradale a Palermo",
  description:
    "Guida pratica su come comportarsi dopo un incidente stradale, quali documenti conservare e quando richiedere il risarcimento danni.",

    alternates: {
  canonical: "https://www.avvocatocicero.it/blog/incidenti-stradali-palermo",
},
}

export default function IncidentiStradaliPalermoPage() {
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
          name: "Successioni ereditarie",
          url: "https://www.avvocatocicero.it/blog/incidenti-stradali-palermo",
        },
      ]}
    />

    <main className="min-h-screen bg-[#f8f6f2] px-6 py-24">
<article className="max-w-4xl mx-auto">
        <Link
href="/blog"
className="inline-flex items-center mb-12 text-[#c8a96b] hover:text-[#b88d3b] transition-colors duration-300"
>
← Torna al Blog
</Link>

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

        <div className="space-y-8 text-lg leading-relaxed text-[#475569]">

          <p>
            Dopo un incidente stradale è importante raccogliere tutte le
            informazioni necessarie per tutelare i propri diritti e agevolare
            l’eventuale richiesta di risarcimento.
          </p>

          <p>
            Fotografie del luogo del sinistro, dati dei veicoli coinvolti,
            testimonianze e documentazione medica possono risultare determinanti
            nella ricostruzione dei fatti.
          </p>

          <h2 className="font-serif text-3xl text-[#101826] mb-6">
            Quali documenti conservare
          </h2>

          <p>
            È consigliabile conservare il modulo di constatazione amichevole,
            i verbali delle autorità intervenute, i certificati medici e ogni
            documento relativo alle spese sostenute.
          </p>

          <h2 className="font-serif text-3xl text-[#101826] mb-6">
            Quando richiedere il risarcimento
          </h2>

          <p>
            La richiesta di risarcimento può riguardare danni materiali,
            lesioni personali, spese mediche e ulteriori conseguenze derivanti
            dall’incidente.
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
            Lo studio può valutare la documentazione e assisterti nella richiesta di risarcimento.
          </p>

          <Link
            href="/#cta"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#c8a96b] px-8 py-4 text-[#101826] font-medium"
          >
            Richiedi una consulenza
          </Link>

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
                Mettere in sicurezza l’area, raccogliere prove e richiedere assistenza medica se necessario.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-black/5">
      <h3 className="font-serif text-2xl text-[#101826] mb-2">

                È obbligatorio compilare il CID?
              </h3>

              <p className="text-slate-600">
                Non è obbligatorio, ma facilita notevolmente la gestione del sinistro.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-black/5">
      <h3 className="font-serif text-2xl text-[#101826] mb-2">
                Quando rivolgersi a un avvocato?
              </h3>

              <p className="text-slate-600">
                Quando vi sono danni importanti, contestazioni sulla responsabilità o difficoltà nel risarcimento.
              </p>
            </div>

          </div>

        </section>

      </article>

    </main>
</>
)
}