import Link from "next/link"

export const metadata = {
  title: "Risarcimento danni a Palermo | Guida pratica",
  description:
    "Quando è possibile ottenere un risarcimento danni, quali prove servono e come tutelare i propri diritti.",
}

export default function RisarcimentoDanniPalermoPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] px-6 py-24">
      <article className="max-w-4xl mx-auto">

        <Link
          href="/blog"
          className="inline-flex items-center mb-12 text-[#c8a96b] hover:text-[#b88d3b] transition-colors duration-300"
        >
          ← Torna al Blog
        </Link>

        <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-6">
          Risarcimento Danni
        </p>

        <h1 className="font-serif text-5xl md:text-7xl text-[#101826] mb-6">
          Risarcimento danni a Palermo.
        </h1>

        <div className="flex items-center gap-4 mb-10 text-sm text-slate-500 uppercase tracking-[0.15em]">
          <span>Risarcimento Danni</span>
          <span>•</span>
          <span>1 min lettura</span>
        </div>

        <p className="text-xl text-slate-600 leading-relaxed mb-12">
          Chi subisce un danno ha diritto a ottenere un risarcimento quando
          sussistono i presupposti previsti dalla legge e può dimostrare il
          pregiudizio subito.
        </p>

        <div className="space-y-12 text-lg leading-relaxed text-[#475569]">

          <section>
            <h2 className="font-serif text-3xl text-[#101826] mb-6">
              Quando è possibile chiedere un risarcimento
            </h2>

            <p>
              Il diritto al risarcimento può nascere da incidenti stradali,
              responsabilità professionale, inadempimenti contrattuali,
              danni alla persona o danni patrimoniali.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#101826] mb-6">
              Quali prove sono necessarie
            </h2>

            <p>
              Documentazione medica, fotografie, testimonianze e documenti
              ufficiali rappresentano spesso elementi fondamentali per
              dimostrare il danno e quantificarne l&apos;entità.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#101826] mb-6">
              Come tutelare i propri diritti
            </h2>

            <p>
              Una valutazione tempestiva della documentazione consente di
              individuare la strategia più efficace per ottenere il corretto
              risarcimento del danno subito.
            </p>
          </section>

        </div>

        <div className="mt-24 bg-[#101826] text-white rounded-[2rem] p-10 md:p-14">

          <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-4">
            Richiedi una consulenza
          </p>

          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Hai subito un danno?
          </h2>

          <p className="text-white/70 text-lg mb-8 max-w-2xl">
            Una corretta analisi del caso è essenziale per valutare le
            possibilità di ottenere un risarcimento e tutelare i propri diritti.
          </p>

          <Link
            href="/#cta"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#c8a96b] px-8 py-4 text-[#101826] font-medium hover:opacity-90 transition-all duration-300"
          >
            Richiedi una consulenza
          </Link>

        </div>

      </article>
    </main>
  )
}