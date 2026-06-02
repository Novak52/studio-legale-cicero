import Link from "next/link"
export const metadata = {
  title: "Avvocato Successioni Palermo | Studio Legale",
  description:
    "Assistenza legale in successioni ereditarie, testamenti, divisioni patrimoniali ed eredità a Palermo.",
};

export default function SeparazioneDivorzioPalermo() {
  return (
    <main className="bg-[#f5f1ea] text-[#0b1220] min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-6">
          Studio Legale Palermo
        </p>

        <h1 className="font-serif text-5xl md:text-7xl leading-tight max-w-4xl mb-10">
          Avvocato successioni a Palermo.
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mb-20">
          Lo studio offre assistenza legale in successioni ereditarie,
          divisioni patrimoniali, testamenti, quote ereditarie
          e tutela dei diritti degli eredi.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-24">

          <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-black/5">
            <h2 className="font-serif text-4xl mb-6">
              Successioni ereditarie
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Assistenza legale nella gestione delle successioni,
              eredità, divisioni patrimoniali e tutela degli interessi degli eredi.
            </p>
          </div>

          <div className="bg-[#0b1220] text-white rounded-[2rem] p-10">
            <h2 className="font-serif text-4xl mb-6">
              Consulenza riservata
            </h2>

            <p className="text-white/70 leading-relaxed mb-8">
              Contatta lo studio per ricevere supporto legale in successioni ereditarie,
               testamenti e controversie patrimoniali.
            </p>

            <Link
              href="/#cta"
              className="inline-flex items-center justify-center rounded-full bg-[#c8a96b] px-8 py-4 text-[#0b1220] font-medium hover:opacity-90 transition"
            >
              Prenota consulenza
            </Link>
          </div>

        </div>

        <section className="max-w-5xl mb-24">

          <h2 className="font-serif text-5xl leading-tight mb-10">
            Assistenza legale per successioni ereditarie a Palermo
          </h2>

          <div className="space-y-10 text-slate-600 text-lg leading-relaxed">

            <p>
              Lo studio legale assiste clienti nella gestione delle successioni ereditarie a Palermo,
              offrendo supporto in divisioni patrimoniali, testamenti e tutela degli eredi.
            </p>

            <p>
              Ogni pratica viene seguita con attenzione documentale,
              analisi patrimoniale e assistenza nelle controversie ereditarie e familiari.
            </p>

            <p>
              L’assistenza comprende successioni legittime e testamentarie,
              impugnazioni testamentarie, divisioni ereditarie e tutela
              patrimoniale nel territorio di Palermo e Sicilia.
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
  Come funziona una successione ereditaria?
</h3>

<p className="text-slate-600 text-lg leading-relaxed">
  La successione regola il trasferimento del patrimonio del defunto
  agli eredi secondo legge o testamento.
</p>
            </div>

            <div className="border-b border-black/10 pb-10">
              <h3 className="font-serif text-3xl mb-4">
  È possibile impugnare un testamento?
</h3>

<p className="text-slate-600 text-lg leading-relaxed">
  In presenza di irregolarità o lesione dei diritti
  ereditari, è possibile valutare l’impugnazione del testamento.
</p>
            </div>

            <div className="border-b border-black/10 pb-10">
              <h3 className="font-serif text-3xl mb-4">
  Come richiedere una consulenza?
</h3>

<p className="text-slate-600 text-lg leading-relaxed">
  Lo studio offre consulenze riservate per successioni ereditarie, divisioni patrimoniali e controversie familiari.
</p>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}