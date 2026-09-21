import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Studio Legale Giuseppina Cicero",
  description:
    "Informativa sui cookie utilizzati dal sito dello Studio Legale Giuseppina Cicero.",
  alternates: {
    canonical: "/cookie-policy",
  },
};
export default function CookiePolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-serif mb-10">
        Cookie Policy
      </h1>

      <p>
        Questo sito utilizza cookie tecnici necessari
        al corretto funzionamento delle pagine.
      </p>

      <br />

      <p>
        Eventuali cookie di terze parti possono essere
        installati tramite servizi integrati quali Google,
        mappe o strumenti statistici.
      </p>

      <br />

      <p>
        Continuando la navigazione l'utente accetta
        l'utilizzo dei cookie secondo la normativa vigente.
      </p>
    </main>
  )
}