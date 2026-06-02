import Link from "next/link"
export const metadata = {
  title: "Separazione e divorzio a Palermo | Guida pratica",
  description:
    "Tempi, costi e aspetti legali della separazione e del divorzio a Palermo.",
}

export default function ArticoloSeparazione() {
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
          Diritto di Famiglia
        </p>

        <h1 className="font-serif text-5xl md:text-7xl text-[#101826] mb-6">
          Separazione e divorzio a Palermo.
        </h1>

        <div className="flex items-center gap-4 mb-10 text-sm text-slate-500 uppercase tracking-[0.15em]">
  <span>Diritto di Famiglia</span>
  <span>•</span>
  <span>1 min lettura</span>
</div>

        <p className="text-xl text-slate-600 leading-relaxed mb-12">
          La separazione rappresenta spesso il primo passaggio per disciplinare
          i rapporti personali ed economici tra i coniugi.
        </p>

        <div className="space-y-8 text-lg leading-relaxed text-[#475569]">
<h2 className="font-serif text-3xl text-[#101826] mb-6">
  Come funziona la separazione consensuale
</h2>
          <p>
            In presenza di accordo tra le parti è possibile procedere
            attraverso una separazione consensuale.
          </p>

<h2 className="font-serif text-3xl text-[#101826] mb-6">
  Quando è necessaria la separazione giudiziale
</h2>
          <p>
            In assenza di accordo, può essere necessario avviare una procedura
            giudiziale per la tutela dei propri diritti.
          </p>

          <p>
            Ogni situazione familiare presenta caratteristiche specifiche che
            richiedono una valutazione attenta e personalizzata.
          </p>

        </div>

        <div className="mt-24 bg-[#101826] text-white rounded-[2rem] p-10 md:p-14">

  <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-4">
    Richiedi una consulenza
  </p>

  <h2 className="font-serif text-4xl md:text-5xl mb-6">
    Hai bisogno di assistenza legale?
  </h2>

  <p className="text-white/70 text-lg mb-8 max-w-2xl">
    Ogni situazione richiede una valutazione specifica. Contatta lo studio per
    ricevere un primo orientamento e comprendere le possibili soluzioni.
  </p>


  <Link
  href="/#cta"
  className="inline-flex items-center justify-center rounded-full bg-[#c8a96b] px-8 py-4 text-[#101826] font-medium hover:opacity-90 transition-all duration-300"
>
  Richiedi una consulenza
</Link>

</div>

      </article>
    </main>
  )
}