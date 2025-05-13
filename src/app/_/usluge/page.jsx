"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      <head>
        <title>Usluge | Nataša Balešević Makeup Artist</title>
        <meta
          name="description"
          content="Profesionalne usluge šminkanja: svadbeno, večernje, dnevno šminkanje i editorijal makeup. Pogledajte našu ponudu i cenovnik."
        />
      </head>

      <header className="bg-[#fdf8f5]/95 backdrop-blur-sm py-4 px-6 fixed w-full z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="font-playfair text-2xl text-[#2c1810]">
            Nataša Balešević
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
            <a href="/usluge" className="text-[#d4a5a5] transition-colors">
              Usluge
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-playfair text-4xl md:text-5xl text-[#2c1810] text-center mb-12">
            Usluge i cenovnik
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 transform hover:shadow-lg transition-all duration-300">
              <div className="text-[#d4a5a5] text-3xl mb-4">
                <i className="fas fa-ring"></i>
              </div>
              <h2 className="font-playfair text-2xl text-[#2c1810] mb-4">
                Svadbeno šminkanje
              </h2>
              <div className="space-y-4 text-[#5c4d47] mb-6">
                <p>
                  Kompletna usluga profesionalnog šminkanja za mladе i mladine
                  pratnje. Paket uključuje:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Konsultacije i planiranje makeup looka</li>
                  <li>Proba šminke pre venčanja</li>
                  <li>Šminkanje na dan venčanja</li>
                  <li>Korišćenje premium kozmetike</li>
                  <li>Veštačke trepavice po želji</li>
                </ul>
              </div>
              <div className="text-[#2c1810] font-semibold">
                Cena: 8.000 RSD (proba šminke)
                <br />
                Cena: 12.000 RSD (dan venčanja)
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 transform hover:shadow-lg transition-all duration-300">
              <div className="text-[#d4a5a5] text-3xl mb-4">
                <i className="fas fa-sparkles"></i>
              </div>
              <h2 className="font-playfair text-2xl text-[#2c1810] mb-4">
                Večernje šminkanje
              </h2>
              <div className="space-y-4 text-[#5c4d47] mb-6">
                <p>
                  Glamurozni makeup za posebne prilike i proslave. Usluga
                  obuhvata:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Priprema i nega kože pre šminkanja</li>
                  <li>Profesionalno šminkanje</li>
                  <li>Veštačke trepavice</li>
                  <li>Dugotrajni makeup proizvodi</li>
                  <li>Saveti za održavanje tijekom večeri</li>
                </ul>
              </div>
              <div className="text-[#2c1810] font-semibold">
                Cena: 5.000 RSD
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 transform hover:shadow-lg transition-all duration-300">
              <div className="text-[#d4a5a5] text-3xl mb-4">
                <i className="fas fa-sun"></i>
              </div>
              <h2 className="font-playfair text-2xl text-[#2c1810] mb-4">
                Dnevno šminkanje
              </h2>
              <div className="space-y-4 text-[#5c4d47] mb-6">
                <p>Prirodan i svež izgled za svakodnevne prilike. Uključuje:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Lagana priprema kože</li>
                  <li>Prirodan makeup look</li>
                  <li>Postojani proizvodi</li>
                  <li>Saveti za svakodnevno šminkanje</li>
                </ul>
              </div>
              <div className="text-[#2c1810] font-semibold">
                Cena: 3.500 RSD
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 transform hover:shadow-lg transition-all duration-300">
              <div className="text-[#d4a5a5] text-3xl mb-4">
                <i className="fas fa-camera"></i>
              </div>
              <h2 className="font-playfair text-2xl text-[#2c1810] mb-4">
                Editorijal Makeup
              </h2>
              <div className="space-y-4 text-[#5c4d47] mb-6">
                <p>
                  Kreativno šminkanje za fotografisanja i modne editorijale:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Umjetnički makeup look</li>
                  <li>Specijalne tehnike šminkanja</li>
                  <li>Prilagođavanje različitim konceptima</li>
                  <li>Makeup za fotografiju i video</li>
                </ul>
              </div>
              <div className="text-[#2c1810] font-semibold">
                Cena: Na upit (zavisi od zahteva)
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="font-playfair text-2xl text-[#2c1810] mb-6 text-center">
              Dodatne informacije
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-playfair text-xl text-[#2c1810] mb-4">
                  <i className="fas fa-info-circle text-[#d4a5a5] mr-2"></i>
                  Važne napomene
                </h3>
                <ul className="space-y-2 text-[#5c4d47]">
                  <li>• Dolazak na vašu adresu uz doplatu</li>
                  <li>• Termini se zakazuju minimum 24h unapred</li>
                  <li>• Mogućnost grupnog šminkanja</li>
                  <li>• Korišćenje isključivo profesionalne kozmetike</li>
                </ul>
              </div>
              <div>
                <h3 className="font-playfair text-xl text-[#2c1810] mb-4">
                  <i className="fas fa-percent text-[#d4a5a5] mr-2"></i>
                  Posebne ponude
                </h3>
                <ul className="space-y-2 text-[#5c4d47]">
                  <li>• Popust za grupe od 3 ili više osoba</li>
                  <li>• Paket ponude za mladе i kume</li>
                  <li>• Sezonski popusti i akcije</li>
                  <li>• Loyalty program za stalne klijentkinje</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#kontakt"
              className="bg-[#d4a5a5] text-white px-8 py-3 rounded hover:bg-[#c39292] transition-all duration-300 inline-block"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/#kontakt";
              }}
            >
              Zakaži termin
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-[#2c1810] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-sans">
            © 2025 Nataša Balešević. Sva prava zadržana.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;