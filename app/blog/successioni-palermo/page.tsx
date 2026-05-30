import Link from "next/link"

export const metadata = {
  title: "Successioni ereditarie a Palermo | Guida pratica",
  description:
    "Guida alle successioni ereditarie: documenti necessari, eredi, testamento e tutela dei diritti successori.",
}

export default function SuccessioniPalermoPage() {
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
          Successioni
        </p>

        <h1 className="font-serif text-5xl md:text-7xl text-[#101826] mb-6">
          Successioni ereditarie a Palermo.
        </h1>

        <div className="flex items-center gap-4 mb-10 text-sm text-slate-500 uppercase tracking-[0.15em]">
          <span>Successioni</span>
          <span>•</span>
          <span>3 min lettura</span>
        </div>

        <p className="text-xl text-slate-600 leading-relaxed mb-12">
          La gestione di una successione richiede attenzione agli aspetti
          patrimoniali, fiscali e familiari per evitare contestazioni e tutelare
          i diritti degli eredi.
        </p>

        <div className="space-y-12 text-lg leading-relaxed text-[#475569]">

          <section>
            <h2 className="font-serif text-3xl text-[#101826] mb-6">
              Quando si apre una successione
            </h2>

            <p>
              La successione si apre al momento della morte della persona e
              comporta il trasferimento dei rapporti patrimoniali agli eredi.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#101826] mb-6">
              Successione con o senza testamento
            </h2>

            <p>
              In presenza di testamento vengono rispettate le disposizioni del
              defunto nei limiti previsti dalla legge. In assenza di testamento,
              si applicano le regole della successione legittima.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#101826] mb-6">
              Tutela dei diritti degli eredi
            </h2>

            <p>
              Una corretta assistenza legale permette di prevenire controversie,
              verificare la validità delle disposizioni testamentarie e tutelare
              la quota spettante agli eredi legittimari.
            </p>
          </section>

        </div>

        <div className="mt-24 bg-[#101826] text-white rounded-[2rem] p-10 md:p-14">

          <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-4">
            Richiedi una consulenza
          </p>

          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Hai bisogno di assistenza in materia successoria?
          </h2>

          <p className="text-white/70 text-lg mb-8 max-w-2xl">
            Ogni successione presenta aspetti specifici che meritano una
            valutazione professionale e personalizzata.
          </p>

          <Link
            href="/#contatti"
            className="inline-flex items-center justify-center rounded-full bg-[#c8a96b] px-8 py-4 text-[#101826] font-medium hover:opacity-90 transition-all duration-300"
          >
            Richiedi una consulenza
          </Link>

        </div>

      </article>
    </main>
  )
}