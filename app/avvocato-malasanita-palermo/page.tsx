import Link from "next/link"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"

export const metadata = {
  title: "Avvocato Malasanità Palermo | Risarcimento Danni",
  description:
    "Avvocato per malasanità a Palermo: assistenza legale per responsabilità medica, errori sanitari e risarcimento dei danni. Valutazione del caso e tutela del paziente.",
  category: "Servizi legali",
  alternates: {
    canonical: "/avvocato-malasanita-palermo",
  },

  openGraph: {
    title: "Avvocato Malasanità Palermo | Studio Legale Giuseppina Cicero",

    description:
      "Assistenza legale per responsabilità medica, errori sanitari e richieste di risarcimento danni a Palermo.",

    url: "https://www.avvocatocicero.it/avvocato-malasanita-palermo",

    siteName: "Studio Legale Giuseppina Cicero",

    locale: "it_IT",

    type: "article",

    images: [
      {
        url: "/images/og/malasanita.jpg",
        width: 1200,
        height: 630,
        alt: "Avvocato Malasanità Palermo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Avvocato Malasanità Palermo | Studio Legale Giuseppina Cicero",
    description:
      "Assistenza legale per responsabilità medica, errori sanitari e richieste di risarcimento danni a Palermo.",
    images: ["/images/og/malasanita.jpg"],
  },
}

export default function AvvocatoMalasanitaPalermoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          {
            name: "Avvocato Malasanità Palermo",
            url: "/avvocato-malasanita-palermo",
          },
        ]}
      />

      <main className="bg-[#f5f1ea] text-[#0b1220]">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 overflow-hidden">
          <p className="uppercase tracking-[0.35em] text-[#c8a96b] text-sm mb-6">
            Studio Legale Palermo
          </p>

          <h1 className="font-serif text-4xl md:text-7xl leading-tight max-w-5xl mb-12">
            Avvocato per malasanità a Palermo: responsabilità medica e
            risarcimento danni.
          </h1>

          <p className="text-[#334155] text-xl leading-relaxed max-w-3xl text-justify">
            Lo studio offre assistenza legale a Palermo alle persone che
            ritengono di aver subito un danno in conseguenza di un possibile
            errore sanitario o di una responsabilità medica, dalla valutazione
            della documentazione alla gestione della pratica e delle eventuali
            richieste di tutela e risarcimento.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-20">
            <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-sm border border-black/5">
              <h2 className="font-serif text-2xl md:text-[1.8rem] mb-6">
                Responsabilità medica
              </h2>

              <p className="text-[#334155] text-lg leading-relaxed text-justify">
                Assistenza nelle controversie relative a diagnosi errate,
                diagnosi tardive, interventi chirurgici, errori terapeutici,
                infezioni ospedaliere e altre situazioni nelle quali sia
                necessario valutare possibili profili di responsabilità
                sanitaria.
              </p>
            </div>

            <div className="bg-[#071133] text-white rounded-[2rem] p-6 md:p-12">
              <h2 className="font-serif text-2xl md:text-[1.8rem] mb-6">
                Consulenza riservata
              </h2>

              <p className="text-white/80 text-lg leading-relaxed mb-10 text-justify">
                Contatta lo studio per una prima valutazione della vicenda,
                della documentazione disponibile e delle possibili forme di
                tutela nei casi di responsabilità medica e richieste
                risarcitorie.
              </p>

              <a
                href="tel:+393391644668"
                className="inline-flex items-center justify-center rounded-full bg-[#c8a96b] px-8 py-4 text-black text-lg hover:opacity-90 transition"
              >
                Chiedi Informazioni
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pt-4 pb-8">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-[#101826] px-6 py-3 text-[#101826] font-medium transition-all duration-300 hover:bg-[#101826] hover:text-white"
            >
              ← Vai alla Home
            </Link>

            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-[#c8a96b] px-6 py-3 text-[#c8a96b] font-medium transition-all duration-300 hover:bg-[#c8a96b] hover:text-[#101826]"
            >
              📖 Vai al Blog
            </Link>
          </div>
        </section>

        {/* TESTO SEO */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="font-serif text-4xl md:text-[2.7rem] leading-tight mb-16 max-w-4xl">
            Assistenza legale per responsabilità sanitaria a Palermo
          </h2>

          <div className="space-y-12 text-[#334155] text-xl leading-relaxed max-w-5xl">
            <p className="text-justify">
              Lo studio legale offre assistenza a Palermo alle persone che
              ritengono di aver subito un danno in conseguenza di un possibile
              errore sanitario o di una responsabilità medica, attraverso
              l&apos;analisi della documentazione e delle circostanze concrete
              della vicenda.
            </p>

            <p className="text-justify">
              La valutazione iniziale tiene conto della documentazione sanitaria
              disponibile, delle conseguenze riportate dal paziente e degli
              elementi utili a comprendere se siano necessari ulteriori
              approfondimenti. L&apos;obiettivo è individuare il percorso più
              adatto alla tutela della persona coinvolta.
            </p>

            <p className="text-justify">
              L&apos;assistenza può riguardare errori diagnostici, diagnosi
              tardive, problematiche relative a interventi chirurgici, terapie,
              assistenza sanitaria e altre situazioni nelle quali sia necessario
              valutare eventuali profili di responsabilità e le possibili
              richieste di tutela e risarcimento.
            </p>

            <h2 className="font-serif text-3xl md:text-[2.7rem] text-[#0b1220] leading-tight mt-16 mb-8">
              Quando può essere utile rivolgersi a un avvocato
            </h2>

            <p className="text-justify">
              Una valutazione legale può essere utile quando una persona ritiene
              di aver subito conseguenze dannose dopo un trattamento sanitario,
              una diagnosi, un intervento chirurgico o un percorso assistenziale
              e desidera comprendere quali elementi debbano essere approfonditi.
            </p>

            <p className="text-justify">
              L&apos;assistenza può essere particolarmente importante quando
              esistono dubbi sulla correttezza delle cure ricevute, quando le
              conseguenze sulla salute sono rilevanti o quando è necessario
              valutare la documentazione sanitaria prima di formulare una
              richiesta di risarcimento.
            </p>

            <p className="text-justify">
              Ogni vicenda deve essere esaminata sulla base delle circostanze
              concrete. La presenza di un esito negativo o di una complicanza
              non consente, da sola, di stabilire una responsabilità sanitaria:
              sono necessari un esame della documentazione e gli eventuali
              approfondimenti richiesti dal caso.
            </p>

            <h2 className="font-serif text-3xl md:text-[2.7rem] text-[#0b1220] leading-tight mt-16 mb-8">
              Come viene gestita una pratica di malasanità
            </h2>

            <p className="text-justify">
              La gestione di una pratica di malasanità parte dalla ricostruzione
              della vicenda e dall&apos;esame della documentazione sanitaria
              disponibile. Lo studio valuta le circostanze concrete del caso e
              gli elementi necessari per comprendere quali profili richiedano
              un ulteriore approfondimento.
            </p>

            <p className="text-justify">
              In relazione alle caratteristiche della vicenda, l&apos;assistenza
              può comprendere l&apos;analisi della documentazione clinica, la
              ricostruzione del percorso sanitario, la valutazione degli
              eventuali elementi medico-legali e l&apos;esame delle conseguenze
              riportate dal paziente.
            </p>

            <p className="text-justify">
              Dopo la valutazione iniziale, lo studio può assistere il paziente
              nella gestione delle richieste di tutela e risarcimento e nei
              rapporti con i soggetti coinvolti nella vicenda, secondo quanto
              richiesto dalle caratteristiche del caso concreto.
            </p>

            <h2 className="font-serif text-3xl md:text-[2.7rem] text-[#0b1220] leading-tight mt-16 mb-8">
              Documentazione sanitaria e valutazione del caso
            </h2>

            <p className="text-justify">
              Cartelle cliniche, referti, esami diagnostici, lettere di
              dimissione, prescrizioni e altra documentazione sanitaria possono
              essere utili per ricostruire il percorso assistenziale e
              comprendere le circostanze nelle quali si è verificato il
              problema.
            </p>

            <p className="text-justify">
              Una raccolta completa e ordinata della documentazione permette di
              esaminare la vicenda con maggiore precisione e di individuare gli
              eventuali aspetti che richiedono un approfondimento medico-legale
              o giuridico.
            </p>

            <p className="text-justify">
              La valutazione non si limita quindi al singolo documento, ma
              considera il percorso sanitario nel suo complesso e le
              conseguenze riportate dalla persona, sulla base degli elementi
              effettivamente disponibili.
            </p>

            <h2 className="font-serif text-3xl md:text-[2.7rem] text-[#0b1220] leading-tight mt-16 mb-8">
              Valutazione medico-legale e responsabilità sanitaria
            </h2>

            <p className="text-justify">
              Nei casi che lo richiedono, la documentazione sanitaria può essere
              sottoposta a un approfondimento medico-legale per esaminare il
              percorso assistenziale, le condizioni del paziente e gli elementi
              utili a valutare il rapporto tra le cure ricevute e le conseguenze
              lamentate.
            </p>

            <p className="text-justify">
              L&apos;eventuale necessità di ulteriori accertamenti dipende dalle
              caratteristiche della singola vicenda. L&apos;analisi viene quindi
              effettuata sulla base della documentazione disponibile e degli
              elementi concreti che emergono dal caso.
            </p>

            <p className="text-justify">
              Lo studio assiste il paziente nella valutazione degli eventuali
              profili di responsabilità e nell&apos;individuazione delle
              possibili forme di tutela, evitando di formulare conclusioni
              generiche prima dell&apos;esame della documentazione.
            </p>

            <h2 className="font-serif text-3xl md:text-[2.7rem] text-[#0b1220] leading-tight mt-16 mb-8">
              Danni e richiesta di risarcimento
            </h2>

            <p className="text-justify">
              Quando dalla valutazione emergono possibili profili di
              responsabilità sanitaria, è necessario considerare anche le
              conseguenze che la vicenda ha prodotto sul paziente e gli eventuali
              danni documentabili.
            </p>

            <p className="text-justify">
              La valutazione può riguardare le conseguenze fisiche e personali
              subite dal paziente e gli eventuali pregiudizi patrimoniali
              collegati alla situazione concreta. La documentazione sanitaria e
              gli altri elementi disponibili sono fondamentali per ricostruire
              le conseguenze dell&apos;evento.
            </p>

            <p className="text-justify">
              Sulla base degli elementi raccolti è possibile valutare gli
              eventuali profili di responsabilità e le possibili richieste di
              tutela e risarcimento, considerando le circostanze specifiche
              della vicenda.
            </p>

            <p className="text-justify">
              Per approfondire gli aspetti generali relativi alla tutela
              risarcitoria è possibile consultare la sezione dedicata al{" "}
              <Link
                href="/risarcimento-danni-palermo"
                className="underline underline-offset-4"
              >
                risarcimento danni a Palermo
              </Link>
              .
            </p>

            <h2 className="font-serif text-3xl md:text-[2.7rem] text-[#0b1220] leading-tight mt-16 mb-8">
              Tutela del paziente dopo un possibile errore sanitario
            </h2>

            <p className="text-justify">
              La tutela del paziente nei casi di presunta malasanità richiede
              una ricostruzione precisa della vicenda e un esame della
              documentazione sanitaria e degli altri elementi disponibili.
            </p>

            <p className="text-justify">
              Lo studio assiste il paziente nella valutazione della situazione,
              nell&apos;eventuale approfondimento medico-legale e nella gestione
              delle richieste di tutela e risarcimento conseguenti alla
              responsabilità sanitaria che dovesse essere accertata.
            </p>

            <p className="text-justify">
              L&apos;obiettivo dell&apos;assistenza è seguire la vicenda sulla
              base delle sue caratteristiche concrete, dalla prima valutazione
              della documentazione fino agli eventuali passaggi necessari per
              tutelare i diritti del paziente.
            </p>

            <p className="text-justify">
              Lo studio segue anche pratiche collegate al{" "}
              <Link
                href="/risarcimento-danni-palermo"
                className="underline underline-offset-4"
              >
                risarcimento danni a Palermo
              </Link>{" "}
              e controversie di{" "}
              <Link
                href="/diritto-civile-palermo"
                className="underline underline-offset-4"
              >
                diritto civile
              </Link>
              .
            </p>
          </div>

          <p className="mt-12 text-xl leading-relaxed text-[#334155] text-justify">
            Se desideri approfondire gli aspetti informativi della malasanità,
            puoi consultare la nostra guida dedicata a{" "}
            <Link
              href="/blog/malasanita-palermo"
              className="underline underline-offset-4"
            >
              come valutare un caso di malasanità a Palermo
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="font-serif text-3xl md:text-[2.3rem] mb-20">
            Domande frequenti
          </h2>

          <div className="space-y-16">
            <div className="border-b border-black/10 pb-12">
              <h3 className="font-serif text-2xl md:text-[1.8rem] mb-6">
                È possibile richiedere un risarcimento?
              </h3>

              <p className="text-[#334155] text-xl leading-relaxed max-w-5xl text-justify">
                In presenza dei presupposti necessari e di elementi che
                consentano di documentare la responsabilità e il danno subito,
                è possibile valutare una richiesta di risarcimento. La
                possibilità di procedere deve essere esaminata sulla base della
                documentazione e delle circostanze concrete del caso.
              </p>
            </div>

            <div className="border-b border-black/10 pb-12">
              <h3 className="font-serif text-2xl md:text-[1.8rem] mb-6">
                Quali documenti servono per una prima valutazione?
              </h3>

              <p className="text-[#334155] text-xl leading-relaxed max-w-5xl text-justify">
                Per una prima valutazione possono essere utili cartelle
                cliniche, referti, esami diagnostici, lettere di dimissione,
                prescrizioni e altra documentazione sanitaria disponibile. La
                raccolta completa dei documenti facilita la ricostruzione del
                percorso assistenziale e l&apos;esame della vicenda.
              </p>
            </div>

            <div className="border-b border-black/10 pb-12">
              <h3 className="font-serif text-2xl md:text-[1.8rem] mb-6">
                È necessaria una valutazione medico-legale?
              </h3>

              <p className="text-[#334155] text-xl leading-relaxed max-w-5xl text-justify">
                La valutazione medico-legale può essere importante quando è
                necessario approfondire il percorso sanitario, le condizioni del
                paziente e gli eventuali elementi rilevanti per valutare il
                rapporto tra le cure ricevute e le conseguenze lamentate. La
                necessità di ulteriori accertamenti dipende dalle caratteristiche
                del singolo caso.
              </p>
            </div>

            <div className="border-b border-black/10 pb-12">
              <h3 className="font-serif text-2xl md:text-[1.8rem] mb-6">
                È possibile ottenere il risarcimento per una diagnosi tardiva?
              </h3>

              <p className="text-[#334155] text-xl leading-relaxed max-w-5xl text-justify">
                Una diagnosi tardiva può determinare conseguenze rilevanti sulla
                salute del paziente. In presenza dei presupposti necessari è
                possibile valutare una richiesta di risarcimento dei danni
                subiti, sulla base della documentazione sanitaria e delle
                circostanze concrete della vicenda.
              </p>
            </div>

            <div className="border-b border-black/10 pb-12">
              <h3 className="font-serif text-2xl md:text-[1.8rem] mb-6">
                Chi può essere responsabile nei casi di malasanità?
              </h3>

              <p className="text-[#334155] text-xl leading-relaxed max-w-5xl text-justify">
                La responsabilità può riguardare professionisti sanitari,
                strutture ospedaliere o altri soggetti coinvolti
                nell&apos;assistenza, a seconda delle circostanze e delle
                risultanze della documentazione disponibile. La situazione deve
                essere valutata caso per caso.
              </p>
            </div>

            <div className="border-b border-black/10 pb-12">
              <h3 className="font-serif text-2xl md:text-[1.8rem] mb-6">
                Quando è opportuno richiedere assistenza legale per malasanità?
              </h3>

              <p className="text-[#334155] text-xl leading-relaxed max-w-5xl text-justify">
                È opportuno richiedere una valutazione quando esistono dubbi
                sulla correttezza delle cure ricevute, quando sono presenti
                conseguenze rilevanti sulla salute o quando è necessario
                comprendere se la documentazione disponibile possa sostenere
                eventuali richieste di tutela e risarcimento.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}