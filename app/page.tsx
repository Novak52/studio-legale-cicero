"use client"


import Image from "next/image"
import Link from "next/link"
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion"
import { useState,useEffect } from "react"
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
const [activeSection] = useState("home")
  const scrollToSection = (id: string) => {
  if (id === "footer-bottom") {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    return;
  }

  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  
  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  return () => {
    document.body.style.overflow = "auto"
  }
}, [menuOpen])
    
  const services = [
    {
      title: 'Diritto di Famiglia',
      description:
        'Separazioni, divorzi, affidamento figli e tutela familiare con approccio riservato, autorevole e professionale.',
        href: "/avvocato-famiglia-palermo",
    },
    {
      title: 'Malasanità e Responsabilità Medica',
      description:
        'Tutela nei casi di errore medico, responsabilità sanitaria, malpractice e accesso al gratuito patrocinio nei casi previsti dalla legge.',
        href: "/avvocato-malasanita-palermo",
    },
    {
      title: 'Infortunistica',
      description:
        'Assistenza legale per incidenti stradali o sul lavoro, danno biologico e richieste di risarcimento.',
        href: "/avvocato-incidenti-stradali-palermo",
    },
    {
  title: "Diritto Ereditario e Successorio",
  description:
    "Assistenza legale in successioni, eredità, divisioni ereditarie, impugnazioni testamentarie e tutela patrimoniale.",
    href: "/avvocato-successioni-palermo",
},
  ]

  

  return (
  <LazyMotion features={domAnimation}>
    <main className="bg-[#f7f4ee] text-[#101826] overflow-x-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#c8a96b]/10 blur-3xl rounded-full" />
      </div>

      {/* WHATSAPP FLOAT */}
      <div className="fixed bottom-8 right-4 lg:bottom-6 lg:right-6 z-50">
        <a
  href="https://wa.me/393391644668"
  target="_blank"
  rel="noopener noreferrer"
className="relative z-20 bg-[#c8a96b] text-[#101826] px-5 py-3 sm:px-6 sm:py-3 max-w-[220px] rounded-full active:scale-[0.98] shadow-2xl shadow-black/30 hover:scale-105 transition-all duration-500 font-medium tracking-wide inline-flex items-center justify-center"
>
  WhatsApp Diretto
</a>
      </div>

      {/* TOP BAR */}
      <div className="relative z-40 border-b border-white/5 bg-[#0b1220] text-white text-xs md:text-sm">
 <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center gap-4">
 <div className="flex flex-col items-start leading-tight text-left text-white/60 uppercase tracking-[0.12em] text-[10px] sm:text-xs">
 <span>Studio Legale Palermo</span>
 <span>Assistenza Civile e Penale</span>
 </div>

 <div className="flex flex-col items-end leading-tight text-right text-white/70 text-[11px]">
 <span>📞 +39 339 164 4668</span>
 <span>📍 Palermo, Via Houel 4</span>
 </div>
 </div>
  </div>

 {/* HEADER */}
 <header className="sticky top-0 z-40 backdrop-blur-2xl bg-[#f8f6f2] border-b border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
 <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
 <div className="max-w-7xl mx-auto px-5 xl:px-8 py-5 flex items-center justify-between gap-4">
 <div className="flex flex-col">
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-2xl border border-[#c8a96b]/60 flex items-center justify-center">
      <span className="font-serif text-[22px] leading-none text-[#b88d3b]">
  GC
</span>
    </div>

    <h1 className="text-3xl lg:text-[42px] font-serif tracking-[-0.03em] text-[#101826] leading-none">
      Studio Legale
    </h1>
  </div>

  <p className="uppercase tracking-[0.45em] text-[#75521f] text-[11px] mt-3 pl-16">
    Giuseppina Cicero
  </p>
</div>

 <nav className="hidden xl:flex items-center gap-12 uppercase tracking-[0.22em] text-[11px]">

 <button
 onClick={() => scrollToSection("home")}
 className={`group relative transition-all duration-500 hover:text-[#c8a96b] hover:-translate-y-[2px] ${
 activeSection === "home" ? "text-[#c8a96b]" : "text-[#101826]"
 }`}
 >
 HOME
 <span
 className={`absolute -bottom-2 left-0 h-[1px] bg-[#c8a96b] transition-all duration-500 ${
 activeSection === "home" ? "w-full" : "w-0 group-hover:w-full"
 }`}
 />
 </button>

 <button
 onClick={() => scrollToSection("studio")}
 className={`group relative transition-all duration-500 hover:text-[#c8a96b] hover:-translate-y-[2px] ${
 activeSection === "studio" ? "text-[#c8a96b]" : "text-[#101826]"
 }`}
 >
 STUDIO
 <span
 className={`absolute -bottom-2 left-0 h-[1px] bg-[#c8a96b] transition-all duration-500 ${
activeSection === "studio" ? "w-full" : "w-0 group-hover:w-full"
 }`}
 />
 </button>

 <button
 onClick={() => scrollToSection("aree-legali")}
 className={`group relative transition-all duration-500 hover:text-[#c8a96b] hover:-translate-y-[2px] ${
 activeSection === "aree-legali" ? "text-[#c8a96b]" : "text-[#101826]"
 }`}
 >
 AREE LEGALI
 <span
 className={`absolute -bottom-2 left-0 h-[1px] bg-[#c8a96b] transition-all duration-500 ${
 activeSection === "aree-legali" ? "w-full" : "w-0 group-hover:w-full"
 }`}
 />
 </button>

 <button
 onClick={() => scrollToSection("risultati")}
 className={`group relative transition-all duration-500 hover:text-[#c8a96b] hover:-translate-y-[2px] ${
 activeSection === "risultati" ? "text-[#c8a96b]" : "text-[#101826]"
 }`}
 >
 RISULTATI
 <span
 className={`absolute -bottom-2 left-0 h-[1px] bg-[#c8a96b] transition-all duration-500 ${
 activeSection === "risultati" ? "w-full" : "w-0 group-hover:w-full"
 }`}
 />
 </button>

 <button
 onClick={() => scrollToSection("footer-bottom")}
 className={`group relative transition-all duration-500 hover:text-[#c8a96b] hover:-translate-y-[2px] ${
 activeSection === "footer" ? "text-[#c8a96b]" : "text-[#101826]"
 }`}
 >
 CONTATTI
 <span
 className={`absolute -bottom-2 left-0 h-[1px] bg-[#c8a96b] transition-all duration-500 ${
 activeSection === "contatti" ? "w-full" : "w-0 group-hover:w-full"
 }`}
 />
 </button>

 <button
 onClick={() => (window.location.href = "/blog")}
 className="group relative transition-all duration-500 hover:text-[#c8a96b] hover:-translate-y-[2px] text-[#101826]"
>
 BLOG

 <span
 className="absolute -bottom-2 left-0 h-[1px] bg-[#c8a96b] transition-all duration-500 w-0 group-hover:w-full"
 />
</button>

</nav>
 <button
  onClick={() => setMenuOpen(true)}
  aria-label="Apri menu di navigazione"
  className="xl:hidden flex flex-col gap-1.5"
>
  <span className="w-6 h-px bg-[#101826]" />
  <span className="w-6 h-px bg-[#101826]" />
  <span className="w-6 h-px bg-[#101826]" />
</button>

 <a
 href="tel:+393391644668"
 className="hidden sm:flex bg-[#101826] text-white px-5 py-3 sm:px-6 sm:py-3sm:px-7 sm:py-4 rounded-full hover:bg-[#1d2b42] transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.12)] uppercase tracking-[0.14em] text-xs items-center justify-center"
>
 Richiedi Consulenza
</a>
 </div>
 </header>
 <AnimatePresence>

 {menuOpen && (

 <m.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="fixed inset-0 z-[999] bg-[#0b1220] text-white flex flex-col"
 >

 {/* TOP */}
 <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">

 <div>
 <h2 className="text-2xl font-serif">
 Studio Legale
 </h2>

 <p className="uppercase tracking-[0.35em] text-[#c8a96b] text-[10px] mt-2">
 Giuseppina Cicero
 </p>
 </div>

 <button
  onClick={() => setMenuOpen(false)}
  aria-label="Chiudi menu"
  className="text-3xl text-white/70 hover:text-white transition-colors"
>
  ✕


 </button>

 </div>
 {/* LINKS */}
 <div className="flex-1 flex flex-col justify-start px-8 overflow-y-auto">

 {[
 { label: "Home", id: "home" },
 { label: "Studio", id: "studio" },
 { label: "Aree Legali", id: "aree-legali" },
 { label: "Risultati", id: "risultati" },
 { label: "Contatti", id: "cta" },
 { label: "Blog", id: "blog" },
].map((item, index) => (

 <m.button
 key={item.id}
 onClick={() => {
 if (item.id === "blog") {
 window.location.href = "/blog"
 } else {
 scrollToSection(item.id)
 }

 setMenuOpen(false)
}}
 initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
 transition={{
 delay: index * 0.08
 }}
 className="text-3xl md:text-4xl font-serif py-5 border-b border-white/10"
 >
 {item.label}
 </m.button>
 ))}


 </div>

 {/* FOOTER */}
 <div className="px-8 pb-12 sm:pb-10">

 <a
 href="tel:+393391644668"
 className="block w-full bg-[#c8a96b] text-[#101826] py-5 rounded-full uppercase tracking-[0.2em] text-xs text-center"
>
 Richiedi Consulenza
</a>
 </div>

 </m.div>

 )}

</AnimatePresence>




  {/* HERO */}
<section
  id="home"
  className="relative bg-[#0b1220] text-white overflow-hidden"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,107,0.16),transparent_34%)]" />

  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center py-16 lg:py-16 md:py-28">

  {/* LEFT */}
  <div className="max-w-2xl px-6 lg:pl-10">
    <p className="uppercase tracking-[0.45em] text-[#c8a96b] text-xs mb-8">
      Studio Legale Civile e Penale • Palermo
    </p>
    <div className="w-24 h-px bg-[#c8a96b]/40 mt-6 mb-10" />

    <h1 className="text-[42px] md:text-[72px] xl:text-[82px] font-serif leading-[0.9] tracking-[-0.04em] mb-8">
      Tutela legale
      <br />
      autorevole,
      <br />
      moderna e rigorosa.
    </h1>

    <p className="text-white/85 text-lg xl:text-xl leading-relaxed mb-10 max-w-lg">
      Assistenza legale in diritto di famiglia,
      responsabilità medica, risarcimento danni stradali o sul lavoro.
      Assistenza legale in successioni e divisioni ereditarie.
    </p>

    <div className="relative z-30 flex flex-col sm:flex-row gap-4 max-w-[320px] sm:max-w-none">
      <a
  href="tel:+393391644668"
  className="relative z-20 bg-[#c8a96b] text-[#101826] px-7 py-3 rounded-full hover:scale-[1.015] active:scale-[0.98] hover:shadow-[0_15px_40px_rgba(200,169,107,0.25)] transition-all duration-500 shadow-2xl shadow-black/30 uppercase tracking-[0.08em] text-xs font-medium inline-flex items-center justify-center cursor-pointer"
>
  Prenota Consulenza
</a>
      <button
  onClick={() => scrollToSection("footer-bottom")}
  className="border border-white/20 min-w-[220px] py-3 rounded-full text-center"
>
  CONTATTI
</button>
    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div className="relative">


    <div className="absolute -inset-6 bg-[#c8a96b]/10 blur-3xl rounded-full" />

    <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
      <div className="relative w-full h-[420px] md:h-[560px] lg:h-[700px]">
  <Image
  src="/images/studio-legale.webp"
  alt="Studio Legale"
  fill
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover object-center"
/>
</div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#07101d]/95 via-[#07101d]/20 to-transparent" />

      
    </div>
    <div className="mt-6 px-2">
  <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-xs mb-3">
    Diritto Civile e Penale
  </p>

  <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight mb-4">
  Tutela legale orientata ai risultati.
</h2>

  <p className="text-white/85 text-sm md:text-lg leading-relaxed max-w-xl">
    Esperienza giuridica, riservatezza e gestione rigorosa delle pratiche legali.
  </p>
</div>
  </div>

</div>
    

  
  </section>

  {/* RISULTATI */}

 

{/* BLOG */}


  {/* STATS */}

<section
id="risultati"
 className="bg-[#f7f4ee] text-[#101826] px-6 py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">

      <div>
        <h3 className="text-5xl md:text-6xl font-serif mb-4">
          20+
        </h3>

        <p className="uppercase tracking-[0.22em] text-[11px] text-[#75521f] mb-3">
          Anni di esperienza
        </p>

        <p className="text-sm md:text-base text-[#5d6470] leading-relaxed">
          Tutela civile e penale con gestione diretta delle pratiche.
        </p>
      </div>

      <div>
        <h3 className="text-5xl md:text-6xl font-serif mb-4">
          2200+
        </h3>

        <p className="uppercase tracking-[0.22em] text-[11px] text-[#75521f] mb-3">
          Pratiche seguite
        </p>

        <p className="text-sm md:text-base text-[#5d6470] leading-relaxed">
          Assistenza riservata e orientata alla tutela concreta.
        </p>
      </div>

      <div>
        <h3 className="text-5xl md:text-6xl font-serif mb-4">
          98%
        </h3>

        <p className="uppercase tracking-[0.22em] text-[11px] text-[#75521f] mb-3">
          Gestione diretta
        </p>

        <p className="text-sm md:text-base text-[#5d6470] leading-relaxed">
          Rapporto personale e continuità nella gestione dei casi.
        </p>
      </div>

      <div>
        <h3 className="text-5xl md:text-6xl font-serif mb-4">
          Palermo
        </h3>

        <p className="uppercase tracking-[0.22em] text-[11px] text-[#75521f] mb-3">
          Operatività
        </p>

        <p className="text-sm md:text-base text-[#5d6470] leading-relaxed">
          Assistenza in Sicilia in ambito civile, familiare, medico, infortunistico ed ereditario.
        </p>
      </div>

    </div>
  </div>
</section>
        
      {/* TRUST */}
      
{/* PREMIUM TRUST SECTION */}
<m.section
id="studio"
className="relative py-28 px-6 bg-[#fcfaf7] overflow-hidden"
  initial={{ opacity: 0, y: 120, scale: 0.92 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.4, ease: "easeOut" }}
  viewport={{ once: true }}
>

  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#c8a96b]/10 blur-3xl rounded-full" />

  <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    {/* TITLE */}
    <div className="text-center max-w-4xl mx-auto mb-20">

      <p className="uppercase tracking-[0.4em] text-[#75521f] text-xs mb-6">
        Assistenza Dedicata
      </p>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.02] text-[#101826] mb-8">
        Esperienza giuridica costruita su metodo,
        gestione diretta e continuità.
        <p className="text-[#8a8f98] text-sm tracking-[0.12em] uppercase mt-6">
  Diritto civile e penale • Approccio strategico • Tutela legale
</p>
      </h2>

      <p className="text-[#5d6470] text-xl leading-relaxed">
        Lo studio segue ogni pratica con attenzione diretta, comunicazione chiara e gestione rigorosa delle attività legali.
      </p>

    </div>

    {/* TRUST CARDS */}
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

      {[
        {
          title: "Assistenza Riservata",
          text: "Gestione professionale delle pratiche con massima attenzione alla riservatezza."
        },

        {
          title: "Strategia Legale",
          text: "Analisi dettagliata del caso e gestione diretta di ogni fase legale."
        },

        {
          title: "Gratuito Patrocinio",
          text: "Assistenza anche tramite gratuito patrocinio nei casi previsti dalla normativa vigente."
        },

        {
          title: "Tutela Personalizzata",
          text: "Supporto personalizzato costruito sulle reali esigenze del cliente."
        }

      ].map((item, index) => (

        <m.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.15 }}
          viewport={{ once: true }}
          className="group bg-[#faf7f2] border border-black/5 rounded-[2.5rem] p-10 hover:-translate-y-3 hover:shadow-[0_35px_100px_rgba(0,0,0,0.12)] transition-all duration-500"
        >

          <div className="w-16 h-16 rounded-2xl bg-[#101826] text-white flex items-center justify-center text-2xl mb-8 shadow-xl shadow-black/10 group-hover:bg-[#c8a96b] group-hover:text-[#101826] transition-all duration-300">
            ⚖️
          </div>

          <h3 className="text-3xl font-serif leading-tight mb-6 text-[#101826] group-hover:text-[#75521f] transition-colors duration-300">
            {item.title}
          </h3>

          <p className="text-[#5d6470] text-lg leading-relaxed">
            {item.text}
          </p>

        </m.div>

      ))}

  </div> 

  </div>
  
      </m.section>
      {/* SERVICES */}
      <section id="aree-legali" className="relative py-20 px-6 bg-[#f3eee6] overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#c8a96b]/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between gap-14 mb-24">
            <div>
              <p className="uppercase tracking-[0.4em] text-[#75521f] text-xs mb-6">
                Aree Legali
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-[0.98] max-w-4xl text-[#101826]">
                Aree di specializzazione.
              </h2>
            </div>

            <p className="max-w-xl text-[#5d6470] text-xl leading-relaxed">
              Lo studio opera nelle principali aree del diritto civile con approccio giuridico,
              orientato alla tutela concreta della persona.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 items-stretch">
            {services.map((service, index) => (
              <m.div
  key={index}
  initial={{ opacity: 0, y: 100, scale: 0.92 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 0.9,
    delay: index * 0.12,
    ease: "easeOut"
  }}
  viewport={{ once: true }}
  whileHover={{
  y: -10,
  scale: 1.015
}}
  className="group bg-white border border-black/5 rounded-[2.5rem] overflow-hidden hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)] h-full flex flex-col"
>
                <div
                  className="h-72 relative overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage:
                      index === 0
                        ? "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1400&auto=format&fit=crop')"
                        : index === 1
                        ? "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop')"
                        : index === 2
                        ? "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1400&auto=format&fit=crop')"
                        : "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop')"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101826] via-[#101826]/55 to-[#101826]/10" />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,107,0.18),transparent_28%)]" />

                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center text-2xl text-white mb-6">
                      ⚖️
                    </div>

                    <p className="uppercase tracking-[0.25em] text-[#c8a96b] text-xs">
                      Assistenza Professionale
                    </p>
                  </div>
                </div>

                <div className="p-10 flex flex-col h-full">
                  <h3 className="text-3xl sm:text-4xl font-serif leading-tight mb-8 text-[#101826] group-hover:text-[#75521f] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-[#5d6470] text-lg leading-relaxed mb-10 flex-1">
                    {service.description}
                  </p>

                  <Link
  href={service.href}
  className="mt-auto"
>
  <button
    className="group relative w-full overflow-hidden rounded-full border border-[#c8a96b]/50 bg-white px-7 py-4 text-[#101826] uppercase tracking-[0.22em] text-xs font-semibold transition-all duration-500 hover:text-[#101826]"
  >
    <span className="absolute inset-0 w-0 bg-[#c8a96b] transition-all duration-500 group-hover:w-full"></span>

    <span className="relative z-10 flex items-center justify-center gap-3">
      Approfondisci
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </span>
  </button>
</Link>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section
      
  className="relative py-20 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-[#75521f] text-xs mb-6">
            Professionalità e Fiducia
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.02] mb-16 text-[#101826]">
            Competenza legale tutela concreta dei diritti e assistenza costante.
          </h2>

          <div className="bg-[#f7f4ee] border border-black/5 rounded-[3rem] p-14 lg:p-20 shadow-[0_25px_80px_rgba(0,0,0,0.06)]">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-relaxed text-[#101826] mb-14">
              “Professionalità, chiarezza e grande attenzione al cliente.
              Assistenza impeccabile e gestione strategica dell’intera pratica.”
            </p>

            <div>
              <h3 className="text-2xl font-serif text-[#101826] mb-3">
                Testimonianza cliente
              </h3>

              
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
       id="cta"
className="relative py-28 lg:py-36 px-6 bg-[#0b1220] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,107,0.18),transparent_28%)]" />

        <div className="relative max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.45em] text-[#c8a96b] text-xs mb-8">
            Studio Legale Giuseppina Cicero
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.95] mb-10">
            Parla direttamente con
            <br />
            lo studio.
          </h2>

          <p className="text-white/65 text-xl leading-relaxed max-w-3xl mx-auto mb-16">
            Contatta lo studio per ricevere supporto,
            consulenza riservata e tutela concreta dei tuoi diritti.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
  href="tel:+393391644668"
  className="relative z-20 bg-[#c8a96b] text-[#101826] px-7 py-3 rounded-full hover:scale-[1.015] active:scale-[0.98] transition-all duration-500 shadow-2xl shadow-black/30 uppercase tracking-[0.08em] text-xs font-medium inline-flex items-center justify-center cursor-pointer"
>
  Prenota Consulenza
</a>

            <a
  href="https://wa.me/393391644668"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-20 bg-[#c8a96b] text-[#101826] px-5 py-3 sm:px-6 sm:py-3sm:px-7 sm:py-4 rounded-full active:scale-[0.98] shadow-2xl shadow-black/30 hover:scale-105 transition-all duration-500 font-medium tracking-wide inline-flex items-center justify-center"
>
  WhatsApp Diretto
</a>
          </div>
        </div>
      </section>

      

  


      
      {/* PREMIUM FOOTER */}
<footer id="footer" className="relative bg-[#0a101b] text-white px-6 py-24 overflow-hidden">

  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c8a96b] to-transparent" />

  <div className="max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

      {/* BRAND */}
      <div>

        <div className="flex items-center gap-4 mb-8">

          <div className="w-14 h-14 rounded-2xl bg-[#c8a96b] text-[#0b1220] flex items-center justify-center text-2xl shadow-2xl">
            ⚖️
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-[#c8a96b] text-xs mb-1">
              Palermo
            </p>

            <h3 className="text-2xl font-serif">
              Studio Legale
              <p className="text-white/70 text-sm mt-3 leading-relaxed">
  Diritto Civile • Responsabilità Medica • Diritto di Famiglia • Risarcimento danni • Successioni
</p>
            </h3>
          </div>

        </div>

        <p className="text-slate-300 leading-relaxed text-lg">
          Assistenza legale professionale, tutela personalizzata e approccio diretto orientato ai risultati.
        </p>

      </div>

      {/* AREE */}
      <div>

        <h4 className="text-white font-serif text-2xl mb-8">
          Aree Legali
        </h4>

        <div className="space-y-4 text-slate-300 leading-relaxed">

          <p>Diritto di Famiglia</p>
          <p>Malasanità</p>
          <p>Infortunistica</p>
          <p>Diritto Successorio</p>

        </div>

      </div>

      

      {/* CONTATTI */}
      <div id="contatti">

        <h4 className="text-white font-serif text-2xl mb-8">
          Contatti
        </h4>

        <div className="space-y-4 text-slate-300 leading-relaxed">

  <a
    href="https://www.google.com/maps/dir/?api=1&destination=Via+Houel+4,+90138+Palermo"
    target="_blank"
    rel="noopener noreferrer"
    className="block text-white/80 hover:text-[#c8a96b] transition-colors duration-300"
  >
    Palermo, Via Houel 4, 90138
  </a>

  <a
    href="mailto:studiolegalegiuseppinacicero@gmail.com"
    className="block text-white/80 hover:text-[#c8a96b] transition-colors duration-300"
  >
    studiolegalegiuseppinacicero@gmail.com
  </a>

  <a
    href="mailto:giuseppinacicero@pecavvpa.it"
    className="block text-white/80 hover:text-[#c8a96b] transition-colors duration-300"
  >
    Pec: giuseppinacicero@pecavvpa.it
  </a>

  <a
    href="tel:+393391644668"
    className="block text-white/80 hover:text-[#c8a96b] transition-colors duration-300"
  >
    Tel. +39 339 1644668
  </a>

</div>

      </div>

      {/* PATROCINIO */}
      <div>

        <h4 className="text-white font-serif text-2xl mb-8">
          Gratuito Patrocinio
        </h4>

        <p className="text-slate-300 leading-relaxed">
          Lo studio assiste i clienti anche tramite patrocinio a spese dello Stato nei casi previsti dalla legge.
        </p>

      </div>

    </div>

    {/* BOTTOM */}
    
   <div
  id="footer-bottom"
  className="pt-10 pb-24 border-t border-white/[0.08] flex flex-col lg:flex-row justify-between items-center gap-6"
>

      <p className="text-white/70 text-sm">
        © 2026 Studio Legale Palermo • Tutti i diritti riservati
      </p>
      <p
  className="text-white/40 text-xs tracking-[0.2em] uppercase mt-4"
>

  Designed with strategic minimalism
</p>

      <div className="flex gap-8 text-white/70 text-sm">

       

        <Link href="/privacy-policy">
  Privacy Policy
</Link>

<Link href="/cookie-policy">
  Cookie Policy
</Link>
      </div>

    </div>

  </div>

</footer>
        </main>
  </LazyMotion>
)
}
