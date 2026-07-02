import Link from "next/link"

export const metadata = {
  title: "Successioni ereditarie a Palermo | Guida pratica",
  description:
    "Guida alle successioni ereditarie: documenti necessari, eredi, testamento e tutela dei diritti successori.",
    alternates: {
  canonical: "https://www.avvocatocicero.it/blog/successioni-palermo",
},
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
          <span>1 min lettura</span>
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

            <h2 className="font-serif text-3xl text-[#101826] mt-12 mb-6">
  Accettazione o rinuncia all'eredità
</h2>

<p>
  Gli eredi possono scegliere se accettare o rinunciare all'eredità.
  L'accettazione comporta l'acquisizione dei diritti e degli obblighi
  del defunto, mentre la rinuncia consente di evitare il subentro nei
  rapporti ereditari.
</p>

<h2 className="font-serif text-3xl text-[#101826] mt-12 mb-6">
  Divisione ereditaria e controversie tra eredi
</h2>

<p>
  Quando più soggetti ereditano beni in comune possono sorgere
  controversie relative alla divisione del patrimonio. Una corretta
  gestione della successione aiuta a ridurre conflitti e tutelare i
  diritti di tutti gli interessati.
</p>

<p>
  Le controversie ereditarie rappresentano una delle materie più frequenti del{" "}
  <a
    href="/diritto-civile-palermo"
    className="underline underline-offset-4"
  >
    diritto civile a Palermo
  </a>
  , soprattutto quando riguardano divisioni patrimoniali, quote ereditarie e rapporti tra coeredi.
</p>

<h2 className="font-serif text-3xl text-[#101826] mt-12 mb-6">
  Perché rivolgersi a un avvocato per una successione
</h2>

<p>
  La gestione di una successione può richiedere verifiche documentali,
  analisi delle quote ereditarie e valutazioni relative alla presenza
  di un testamento. Un'assistenza legale qualificata consente di
  affrontare correttamente gli adempimenti previsti dalla legge e di
  prevenire possibili controversie tra gli eredi.
</p>

<p>
  Un supporto professionale può risultare particolarmente utile nei casi
  di successioni complesse, patrimoni rilevanti, beni immobili da
  dividere o contestazioni relative alla validità delle disposizioni
  testamentarie.
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
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#c8a96b] px-8 py-4 text-[#101826] font-medium hover:opacity-90 transition-all duration-300"
          >
            Richiedi una consulenza
          </Link>

        </div>

        <section className="mt-20">
  <h2 className="font-serif text-4xl text-[#101826] mb-10">
    Domande frequenti
  </h2>

  <div className="space-y-4">

    <div className="bg-white rounded-2xl p-6 border border-black/5">
      <h3 className="font-serif text-2xl text-[#101826] mb-3">
        Quando si apre una successione?
      </h3>
      <p className="text-slate-600">
        La successione si apre al momento della morte della persona e comporta il trasferimento dei rapporti patrimoniali agli eredi.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 border border-black/5">
      <h3 className="font-serif text-2xl text-[#101826] mb-3">
        È obbligatorio accettare l'eredità?
      </h3>
      <p className="text-slate-600">
        No, l'erede può accettare o rinunciare all'eredità secondo le modalità previste dalla legge.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 border border-black/5">
      <h3 className="font-serif text-2xl text-[#101826] mb-3">
        Cosa succede se non esiste un testamento?
      </h3>
      <p className="text-slate-600">
        In assenza di testamento si applicano le regole della successione legittima previste dal Codice Civile.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 border border-black/5">
  <h3 className="font-serif text-2xl text-[#101826] mb-3">
    È possibile impugnare un testamento?
  </h3>

  <p className="text-slate-600">
    In presenza di irregolarità, vizi di forma o lesione dei diritti degli eredi legittimari può essere possibile contestare la validità del testamento attraverso gli strumenti previsti dalla legge.
  </p>
</div>

<div className="bg-white rounded-2xl p-6 border border-black/5">
  <h3 className="font-serif text-2xl text-[#101826] mb-3">
    Quanto tempo si ha per accettare un'eredità?
  </h3>

  <p className="text-slate-600">
    In generale il diritto di accettare l'eredità si prescrive in dieci anni dall'apertura della successione, salvo particolari situazioni previste dalla legge.
  </p>
</div>


  </div>
</section>

      </article>
    </main>
  )
}