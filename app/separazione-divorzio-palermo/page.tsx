export const metadata = {
  title: "Separazione e Divorzio Palermo | Studio Legale",
  description:
    "Assistenza legale per separazione, divorzio, affidamento figli e tutela familiare a Palermo.",
};

export default function SeparazioneDivorzioPalermo() {
  return (
    <main className="bg-[#f5f1ea] text-[#0b1220] min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-6">
          Studio Legale Palermo
        </p>

        <h1 className="font-serif text-5xl md:text-7xl leading-tight max-w-4xl mb-10">
          Separazione e divorzio a Palermo.
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mb-20">
          Lo studio offre assistenza legale nelle procedure di separazione,
          divorzio consensuale e giudiziale, affidamento dei figli,
          mantenimento e tutela dei diritti familiari.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-24">

          <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-black/5">
            <h2 className="font-serif text-4xl mb-6">
              Tutela familiare
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Assistenza legale nelle controversie familiari,
              separazioni, gestione degli accordi patrimoniali,
              affidamento minori e tutela della persona.
            </p>
          </div>

          <div className="bg-[#0b1220] text-white rounded-[2rem] p-10">
            <h2 className="font-serif text-4xl mb-6">
              Consulenza riservata
            </h2>

            <p className="text-white/70 leading-relaxed mb-8">
              Contatta lo studio per ricevere supporto legale
              diretto e assistenza personalizzata nelle procedure
              di separazione e divorzio.
            </p>

            <a
              href="/#contatti"
              className="inline-flex items-center justify-center rounded-full bg-[#c8a96b] px-8 py-4 text-[#0b1220] font-medium hover:opacity-90 transition"
            >
              Prenota consulenza
            </a>
          </div>

        </div>

        <section className="max-w-5xl mb-24">

          <h2 className="font-serif text-5xl leading-tight mb-10">
            Assistenza legale per separazione e divorzio a Palermo
          </h2>

          <div className="space-y-10 text-slate-600 text-lg leading-relaxed">

            <p>
              Lo studio legale assiste clienti nelle procedure di separazione
              consensuale e giudiziale a Palermo, offrendo supporto
              nella gestione delle problematiche familiari e patrimoniali.
            </p>

            <p>
              Ogni pratica viene seguita con attenzione diretta,
              tutela della persona, gestione documentale e assistenza
              nelle diverse fasi del procedimento.
            </p>

            <p>
              L’assistenza comprende affidamento figli, assegno di mantenimento,
              divisione patrimoniale, revisione delle condizioni e tutela
              dei diritti familiari nel territorio di Palermo e Sicilia.
            </p>

          </div>
        </section>

        <section className="max-w-5xl">

          <h2 className="font-serif text-5xl mb-12">
            Domande frequenti
          </h2>

          <div className="space-y-12">

            <div className="border-b border-black/10 pb-10">
              <h3 className="font-serif text-3xl mb-4">
                Quanto dura una separazione consensuale?
              </h3>

              <p className="text-slate-600 text-lg leading-relaxed">
                I tempi possono variare in base alla procedura e
                alla documentazione richiesta, ma una separazione
                consensuale è generalmente più rapida rispetto
                a quella giudiziale.
              </p>
            </div>

            <div className="border-b border-black/10 pb-10">
              <h3 className="font-serif text-3xl mb-4">
                È possibile modificare gli accordi?
              </h3>

              <p className="text-slate-600 text-lg leading-relaxed">
                In presenza di nuove esigenze economiche o familiari,
                è possibile richiedere la revisione delle condizioni
                stabilite nella separazione o nel divorzio.
              </p>
            </div>

            <div className="border-b border-black/10 pb-10">
              <h3 className="font-serif text-3xl mb-4">
                Come prenotare una consulenza?
              </h3>

              <p className="text-slate-600 text-lg leading-relaxed">
                È possibile contattare lo studio tramite il modulo
                contatti o WhatsApp per ricevere assistenza diretta
                e riservata.
              </p>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}