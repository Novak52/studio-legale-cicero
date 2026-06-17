import Link from "next/link"

export const metadata = {
  title: "Errore medico a Palermo: quando è possibile ottenere un risarcimento?",
  description:
    "Guida pratica sulla responsabilità medica e sul risarcimento danni da errore medico a Palermo.",

  alternates: {
    canonical:
      "https://www.avvocatocicero.it/blog/errore-medico-palermo-risarcimento",
  },
}

export default function Page() {
  return (
    <main className="bg-[#f8f6f2] min-h-screen">
      <article className="max-w-4xl mx-auto px-6 py-24">

        <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-6">
          Responsabilità Medica
        </p>

        <h1 className="font-serif text-5xl md:text-7xl text-[#101826] leading-tight mb-10">
          Errore medico a Palermo: quando è possibile ottenere un risarcimento?
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed mb-12">
  Un errore medico può provocare conseguenze gravi per il paziente e per i suoi familiari. In alcune circostanze è possibile ottenere un risarcimento quando il danno deriva da una condotta sanitaria negligente o non conforme alle regole professionali.
</p>

<div className="space-y-8 text-lg text-slate-700 leading-relaxed">

    <h2 className="font-serif text-4xl text-[#101826] mb-6">
  Quali sono i casi più frequenti di errore medico?
</h2>
  <p>
    I casi più frequenti riguardano diagnosi errate o tardive, errori chirurgici,
    prescrizioni farmacologiche inappropriate, infezioni ospedaliere evitabili
    e mancata sorveglianza del paziente.
  </p>



<h2 className="font-serif text-4xl text-[#101826] mb-6">
  Quando è possibile ottenere un risarcimento?
</h2>
  <p>
    Per ottenere un risarcimento è necessario dimostrare l'esistenza di un danno,
    l'errore sanitario e il collegamento tra la condotta del medico o della
    struttura e le conseguenze riportate.
  </p>



<h2 className="font-serif text-4xl text-[#101826] mb-6">
  Cosa fare se si sospetta un errore medico?
</h2>
  <p>
    La raccolta della documentazione clinica rappresenta il primo passo per
    valutare la fondatezza della richiesta e individuare eventuali profili di
    responsabilità.
  </p>

  <p>
    Ogni situazione richiede un'analisi specifica, poiché la semplice insorgenza
    di una complicanza non implica automaticamente la responsabilità della
    struttura sanitaria.
  </p>

</div>

<div className="mt-20 bg-[#071133] rounded-[3rem] p-10 md:p-14">

  <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-6">
    Richiedi una consulenza
  </p>

  <h2 className="font-serif text-white text-4xl md:text-6xl leading-tight mb-8">
    Hai subito un possibile errore medico?
  </h2>

  <p className="text-white/70 text-xl leading-relaxed mb-10">
    Lo studio offre assistenza nella valutazione della documentazione sanitaria
    e nelle richieste di risarcimento per responsabilità medica e malasanità.
  </p>

  <Link
    href="/#cta"
    className="inline-flex items-center justify-center rounded-full bg-[#c8a96b] px-10 py-5 text-[#101826] font-medium hover:opacity-90 transition-all duration-300"
  >
    Richiedi una consulenza
  </Link>

</div>

      </article>
    </main>
  )
}