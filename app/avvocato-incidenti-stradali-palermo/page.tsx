export const metadata = {
  title: "Avvocato Incidenti Stradali Palermo | Studio Legale Palermo",
  description:
    "Assistenza legale per incidenti stradali a Palermo. Risarcimento danni, responsabilità civile, tutela del danneggiato e consulenza riservata.",
};

export default function IncidentiStradaliPalermoPage() {
  return (
    <main className="bg-[#f5f1ea] text-[#0b1220] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-6">
          Studio Legale Palermo
        </p>

        <h1 className="font-serif text-6xl leading-tight max-w-4xl mb-12">
          Avvocato incidenti stradali a Palermo.
        </h1>

        <p className="text-2xl text-[#334155] leading-relaxed max-w-4xl mb-20">
          Lo studio offre assistenza legale nelle richieste di risarcimento
          danni derivanti da incidenti stradali, sinistri, responsabilità
          civile e tutela del danneggiato.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-28">
          <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-black/5">
            <h2 className="font-serif text-4xl mb-6">
              Tutela del danneggiato
            </h2>

            <p className="text-lg leading-relaxed text-[#475569]">
              Assistenza nella gestione di sinistri stradali, analisi della
              documentazione, responsabilità civile, trattative assicurative e
              tutela risarcitoria.
            </p>
          </div>

          <div className="bg-[#071126] text-white rounded-[2rem] p-10">
            <h2 className="font-serif text-4xl mb-6">
              Consulenza riservata
            </h2>

            <p className="text-lg leading-relaxed text-white/80 mb-10">
              Contatta lo studio per ricevere assistenza diretta nella gestione
              di incidenti stradali e richieste di risarcimento danni.
            </p>

            <a
              href="/#contatti"
              className="inline-flex items-center justify-center rounded-full bg-[#c8a96b] px-8 py-4 text-black text-lg hover:opacity-90 transition"
            >
              Prenota consulenza
            </a>
          </div>
        </div>

        <section className="mb-28">
          <h2 className="font-serif text-5xl leading-tight max-w-4xl mb-12">
            Assistenza legale per incidenti stradali a Palermo
          </h2>

          <div className="space-y-10 text-xl leading-relaxed text-[#475569] max-w-5xl">
            <p>
              Lo studio legale assiste clienti coinvolti in incidenti stradali
              a Palermo, offrendo supporto nella gestione delle pratiche
              assicurative, delle richieste risarcitorie e delle controversie
              relative alla responsabilità civile.
            </p>

            <p>
              Ogni pratica viene analizzata con attenzione diretta,
              ricostruzione documentale, verifica dei danni patrimoniali e
              gestione delle trattative con compagnie assicurative.
            </p>

            <p>
              L’assistenza comprende sinistri con lesioni personali, danni ai
              veicoli, investimenti pedonali, responsabilità del conducente e
              tutela completa del soggetto danneggiato nel territorio di
              Palermo e Sicilia.
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
        </section>

        <section>
          <h2 className="font-serif text-5xl mb-14">
            Domande frequenti
          </h2>

          <div className="space-y-14 max-w-5xl">
            <div className="border-b border-black/10 pb-10">
              <h3 className="font-serif text-3xl mb-4">
                Cosa fare dopo un incidente stradale?
              </h3>

              <p className="text-xl leading-relaxed text-[#475569]">
                È importante raccogliere documentazione, testimonianze,
                fotografie e richiedere assistenza legale per la gestione della
                pratica risarcitoria.
              </p>
            </div>

            <div className="border-b border-black/10 pb-10">
              <h3 className="font-serif text-3xl mb-4">
                È possibile ottenere un risarcimento?
              </h3>

              <p className="text-xl leading-relaxed text-[#475569]">
                In presenza di responsabilità e danni documentabili, è possibile
                richiedere il risarcimento per danni materiali, fisici e
                patrimoniali.
              </p>
            </div>

            <div className="border-b border-black/10 pb-10">
              <h3 className="font-serif text-3xl mb-4">
                Come prenotare una consulenza?
              </h3>

              <p className="text-xl leading-relaxed text-[#475569]">
                È possibile contattare lo studio tramite il modulo contatti o
                WhatsApp per ricevere assistenza diretta e riservata.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}