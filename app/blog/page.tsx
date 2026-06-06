import Link from "next/link"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] px-4 md:px-6 py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-6">
          Blog Legale
        </p>

        <h1 className="font-serif text-4xl md:text-7xl text-[#101826] mb-10 leading-tight break-words">
          Approfondimenti giuridici.
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mb-20">
          Guide pratiche, aggiornamenti normativi e risposte alle domande più frequenti.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  <Link
    href="/blog/separazione-divorzio-palermo"
    className="group bg-white rounded-[2rem] p-6 md:p-8 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500"
  >
    <p className="uppercase tracking-[0.2em] text-[#c8a96b] text-xs mb-4">
      Diritto di Famiglia
    </p>

    <h2 className="font-serif text-3xl text-[#101826] mb-6">
      Separazione e divorzio a Palermo
    </h2>

    <p className="text-slate-600 mb-8">
      Tempi, costi e aspetti pratici da conoscere.
    </p>

    <span className="text-[#c8a96b]">
      Leggi articolo →
    </span>
  </Link>

  <Link
    href="/blog/successioni-palermo"
    className="group bg-white rounded-[2rem] p-6 md:p-8 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500"
  >
    <p className="uppercase tracking-[0.2em] text-[#c8a96b] text-xs mb-4">
      Successioni
    </p>

    <h2 className="font-serif text-3xl text-[#101826] mb-6">
      Successioni ereditarie
    </h2>

    <p className="text-slate-600 mb-8">
      Guida pratica per eredi e famiglie.
    </p>

    <span className="text-[#c8a96b]">
      Leggi articolo →
    </span>
  </Link>

  <Link
    href="/blog/risarcimento-danni-palermo"
    className="group bg-white rounded-[2rem] p-6 md:p-8 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500"
  >
    <p className="uppercase tracking-[0.2em] text-[#c8a96b] text-xs mb-4">
      Risarcimento Danni
    </p>

    <h2 className="font-serif text-3xl text-[#101826] mb-6">
      Come ottenere un risarcimento
    </h2>

    <p className="text-slate-600 mb-8">
      Errori da evitare e documenti necessari.
    </p>

    <span className="text-[#c8a96b]">
      Leggi articolo →
    </span>
  </Link>

  <Link
  href="/blog/malasanita-palermo"
  className="group bg-white rounded-[2rem] p-8 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500"
>
  <p className="uppercase tracking-[0.2em] text-[#c8a96b] text-xs mb-4">
    MALASANITÀ
  </p>

  <h2 className="font-serif text-4xl text-[#101826] mb-6">
    Malasanità a Palermo
  </h2>

  <p className="text-slate-600 mb-8">
    Quando è possibile ottenere un risarcimento per errori medici e responsabilità sanitaria.
  </p>

  <span className="text-[#c8a96b]">
    Leggi articolo →
  </span>
</Link>

</div>

      </div>
    </main>
  )
}