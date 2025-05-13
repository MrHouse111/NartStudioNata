"use client";
import React from "react";

function MainComponent() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Kako mogu da zakažem termin za šminkanje?",
      answer:
        "Termin možete zakazati putem kontakt forme na našem sajtu, pozivom na broj 066 584 8998 ili slanjem poruke na Instagram. Preporučujemo da termin zakažete najmanje 2 nedelje unapred, a za venčanja minimum mesec dana ranije.",
    },
    {
      question: "Koliko traje šminkanje?",
      answer:
        "Profesionalno šminkanje obično traje između 45-60 minuta. Za svadbeno šminkanje sa probom, potrebno je izdvojiti oko 90 minuta.",
    },
    {
      question: "Da li je proba šminke obavezna za venčanja?",
      answer:
        "Da, proba šminke je obavezna za venčanja kako bismo osigurali da ćete dobiti tačno onakav izgled kakav želite za vaš poseban dan. Tokom probe razgovaramo o vašim željama i testiramo različite opcije.",
    },
    {
      question: "Koje brendove šminke koristite?",
      answer:
        "Koristimo isključivo profesionalnu šminku vrhunskog kvaliteta brendova kao što su MAC, Charlotte Tilbury, NARS, Make Up For Ever i drugi premium brendovi koji garantuju dugotrajnost i besprekoran izgled.",
    },
    {
      question: "Da li dolazite na adresu za šminkanje?",
      answer:
        "Da, pružamo uslugu šminkanja na vašoj adresi uz dodatnu nadoknadu za prevoz. Takođe vas možemo našminkati u našem studiju u Beogradu.",
    },
    {
      question: "Koje su cene usluga?",
      answer:
        "Cene variraju u zavisnosti od vrste šminkanja. Dnevno šminkanje počinje od 3000 din, večernje od 4000 din, a svadbeno šminkanje sa probom od 8000 din. Za tačne cene i posebne pakete, kontaktirajte nas.",
    },
    {
      question:
        "Da li radite šminkanje za specijalne prilike i fotografisanja?",
      answer:
        "Da, radimo šminkanje za sve vrste specijalnih prilika uključujući mature, rođendane, fotografisanja, modne editorijale i druge događaje. Svako šminkanje prilagođavamo vašim potrebama i prilici.",
    },
    {
      question: "Šta ako imam osetljivu kožu?",
      answer:
        "Koristimo hipoalergene proizvode i prilagođavamo izbor šminke vašem tipu kože. Važno je da nas unapred obavestite o bilo kakvim alergijama ili osetljivostima.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      <head>
        <title>Često Postavljena Pitanja | N-Art Studio</title>
        <meta
          name="description"
          content="Odgovori na često postavljena pitanja o profesionalnom šminkanju, zakazivanju termina i cenama usluga u N-Art Studiju."
        />
      </head>

      <header className="bg-[#fdf8f5]/95 backdrop-blur-sm py-4 px-6 fixed w-full z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="font-playfair text-2xl text-[#2c1810]">
            N-Art Studio
          </a>
          <div className="hidden md:flex gap-8 font-sans">
            <a
              href="/"
              className="text-[#2c1810] hover:text-[#d4a5a5] transition-colors"
            >
              Početna
            </a>
            <a
              href="/o-meni"
              className="text-[#2c1810] hover:text-[#d4a5a5] transition-colors"
            >
              O meni
            </a>
            <a
              href="/galerija"
              className="text-[#2c1810] hover:text-[#d4a5a5] transition-colors"
            >
              Galerija
            </a>
            <a
              href="/kontakt"
              className="text-[#2c1810] hover:text-[#d4a5a5] transition-colors"
            >
              Kontakt
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-playfair text-4xl text-[#2c1810] text-center mb-12">
            Često Postavljena Pitanja
          </h1>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#fdf8f5] transition-colors"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <span className="font-playfair text-lg text-[#2c1810]">
                    {item.question}
                  </span>
                  <i
                    className={`fas fa-chevron-down text-[#d4a5a5] transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "py-4 opacity-100"
                      : "h-0 py-0 opacity-0"
                  }`}
                >
                  <p className="text-[#5c4d47]">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#5c4d47] mb-6">
              Imate dodatna pitanja? Slobodno nas kontaktirajte!
            </p>
            <a
              href="/kontakt"
              className="inline-block bg-[#d4a5a5] text-white px-8 py-3 rounded hover:bg-[#c39292] transition-all duration-300"
            >
              Kontaktirajte nas
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-[#2c1810] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-sans">© 2025 N-Art Studio. Sva prava zadržana.</p>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;