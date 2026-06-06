import Link from "next/link"

export const metadata = {
  title: "Malasanità a Palermo | Guida pratica",
  description:
    "Quando è possibile ottenere un risarcimento per malasanità a Palermo. Errori medici, responsabilità sanitaria e tutela del paziente.",
}

export default function Page() {
  return (
    <main className="bg-[#f8f6f2] min-h-screen">
      <article className="max-w-4xl mx-auto px-6 py-24">

        <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-6">
          Malasanità
        </p>

        <h1 className="font-serif text-5xl md:text-7xl text-[#101826] leading-tight mb-10">
          Quando è possibile ottenere un risarcimento per malasanità a Palermo
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed mb-12">
          Errori diagnostici, interventi chirurgici non corretti, omissioni
          terapeutiche e responsabilità sanitaria possono dare diritto al
          risarcimento del danno quando provocano conseguenze per il paziente.
        </p>

        <div className="space-y-8 text-lg text-slate-700 leading-relaxed">

          <p>
            I casi di malasanità riguardano situazioni nelle quali una struttura
            sanitaria o un professionista sanitario commette errori che causano
            danni al paziente.
          </p>

          <p>
            Per ottenere un risarcimento è necessario verificare la presenza di
            un comportamento colposo, il danno subito e il collegamento tra
            l'errore e le conseguenze riportate.
          </p>

          <p>
            Le situazioni più frequenti riguardano diagnosi tardive, errori
            chirurgici, infezioni ospedaliere, trattamenti non adeguati e
            mancato consenso informato.
          </p>

          <p>
            Ogni caso richiede un'analisi della documentazione clinica e una
            valutazione medico-legale approfondita.
          </p>

        </div>

        <div className="mt-20 bg-[#071133] rounded-[3rem] p-10 md:p-14">

          <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-sm mb-6">
            Richiedi una consulenza
          </p>

          <h2 className="font-serif text-white text-4xl md:text-6xl leading-tight mb-8">
            Hai bisogno di assistenza per un caso di malasanità?
          </h2>

          <p className="text-white/70 text-xl leading-relaxed mb-10">
            Lo studio offre supporto nella valutazione della documentazione
            sanitaria e nelle richieste risarcitorie collegate a responsabilità
            medica.
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