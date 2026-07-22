import Link from "next/link"
import Script from "next/script"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
export const metadata = {
  title: "Successioni ereditarie a Palermo | Guida pratica",
  description:
    "Guida alle successioni ereditarie: documenti necessari, eredi, testamento e tutela dei diritti successori.",
    alternates: {
  canonical: "https://www.avvocatocicero.it/blog/successioni-palermo",
},
}
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quando si apre una successione?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La successione si apre al momento della morte della persona e comporta il trasferimento dei rapporti patrimoniali agli eredi.",
      },
    },
    {
      "@type": "Question",
      name: "È obbligatorio accettare l'eredità?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, l'erede può accettare o rinunciare all'eredità secondo le modalità previste dalla legge.",
      },
    },
    {
      "@type": "Question",
      name: "Cosa succede se non esiste un testamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In assenza di testamento si applicano le regole della successione legittima previste dal Codice Civile.",
      },
    },
    {
      "@type": "Question",
      name: "È possibile impugnare un testamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In presenza di irregolarità, vizi di forma o lesione dei diritti degli eredi legittimari può essere possibile contestare la validità del testamento.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo si ha per accettare un'eredità?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In generale il diritto di accettare l'eredità si prescrive in dieci anni dall'apertura della successione.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Successioni ereditarie a Palermo",
  description:
    "Guida alle successioni ereditarie: documenti necessari, eredi, testamento e tutela dei diritti successori.",
    image: "https://www.avvocatocicero.it/og-image.jpg",
  url: "https://www.avvocatocicero.it/blog/successioni-palermo",
  datePublished: "2026-07-08T09:00:00+02:00",
dateModified: "2026-07-08T09:00:00+02:00",
  author: {
  "@type": "Person",
  name: "Avv. Giuseppina Cicero",
  url: "https://www.avvocatocicero.it",
},
  publisher: {
    "@type": "LegalService",
    name: "Studio Legale Giuseppina Cicero",
    logo: {
      "@type": "ImageObject",
      url: "https://www.avvocatocicero.it/og-image.jpg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.avvocatocicero.it/blog/successioni-palermo",
  },
};
export default function SuccessioniPalermoPage() {
  return (
  <>
    <BreadcrumbSchema
      items={[
        {
          name: "Home",
          url: "https://www.avvocatocicero.it",
        },
        {
          name: "Blog",
          url: "https://www.avvocatocicero.it/blog",
        },
        {
          name: "Successioni ereditarie",
          url: "https://www.avvocatocicero.it/blog/successioni-palermo",
        },
      ]}
    />
<Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>

<Script
  id="article-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(articleSchema),
  }}
/>
    <main className="min-h-screen bg-[#f8f6f2] px-6 py-24">
      <article className="max-w-4xl mx-auto">

        <div className="flex flex-wrap items-center gap-4 mb-12">

  <Link
    href="/"
    className="inline-flex items-center justify-center rounded-full border border-[#101826] px-5 py-3 text-[#101826] font-medium transition-all duration-300 hover:bg-[#101826] hover:text-white"
  >
    ← Torna alla Home
  </Link>

  <Link
    href="/blog"
    className="inline-flex items-center justify-center rounded-full border border-[#c8a96b] px-5 py-3 text-[#c8a96b] font-medium transition-all duration-300 hover:bg-[#c8a96b] hover:text-[#101826]"
  >
    📖 Torna al Blog
  </Link>

</div>

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

        <div className="space-y-12 text-lg leading-relaxed text-slate-700">

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
  Quando è possibile impugnare un testamento
</h2>

<p>
  L'impugnazione di un testamento può essere presa in considerazione quando
  emergono elementi che fanno dubitare della validità delle disposizioni
  testamentarie o quando si ritiene che siano stati lesi i diritti degli
  eredi tutelati dalla legge.
</p>

<p>
  Tra le situazioni che possono richiedere una valutazione rientrano
  eventuali vizi di forma, la possibile incapacità del testatore al momento
  della redazione del testamento o altre circostanze che incidano sulla
  validità dell'atto.
</p>

<p>
  Ogni vicenda ereditaria presenta caratteristiche differenti e richiede
  un'analisi della documentazione disponibile, delle disposizioni
  testamentarie e della situazione familiare complessiva.
</p>

<p>
  Per approfondire gli aspetti legati alle successioni e alla tutela dei
  diritti degli eredi è possibile consultare la pagina dedicata all'
  <a
    href="/avvocato-successioni-palermo"
    className="underline underline-offset-4"
  >
    avvocato successioni a Palermo
  </a>.
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
</>
)
}