"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      <head>
        <title>O meni | Nataša Balešević Makeup Artist</title>
        <meta
          name="description"
          content="Saznajte više o Nataši Balešević, profesionalnom makeup artistu sa višegodišnjim iskustvom u beauty industriji."
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
            <a href="/o-meni" className="text-[#d4a5a5] transition-colors">
              O meni
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h1 className="font-playfair text-3xl md:text-4xl text-[#2c1810] mb-8 text-center">
              O meni
            </h1>

            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/"
                  alt="Nataša Balešević profesionalni makeup artist"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <p className="text-[#5c4d47] leading-relaxed">
                  Zdravo, ja sam Nataša Balešević, profesionalni makeup artist
                  sa preko 10 godina iskustva u beauty industriji. Moja strast
                  prema šminkanju počela je još u ranoj mladosti, a danas je
                  prerasla u uspešnu karijeru.
                </p>
                <p className="text-[#5c4d47] leading-relaxed">
                  Specijalizovana sam za svadbeno šminkanje i večernji makeup,
                  sa posebnim fokusom na isticanje prirodne lepote svake
                  klijentkinje. Verujem da svaka žena zaslužuje da se oseća
                  samouvereno i prelepo.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-2xl text-[#2c1810] mb-4">
                  Edukacija i Iskustvo
                </h2>
                <p className="text-[#5c4d47] leading-relaxed">
                  Završila sam prestižne makeup akademije u Srbiji i
                  inostranstvu, konstantno se usavršavam kroz masterklase i
                  pratim najnovije trendove u svetu šminkanja. Radila sam na
                  brojnim modnim editorijalima, venčanjima i specijalnim
                  događajima.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl text-[#2c1810] mb-4">
                  Moj Pristup
                </h2>
                <p className="text-[#5c4d47] leading-relaxed">
                  Svaka klijentkinja je jedinstvena, i tome pristupam sa
                  posebnom pažnjom. Koristim isključivo profesionalnu kozmetiku
                  visokog kvaliteta i najnovije tehnike šminkanja. Moj cilj je
                  da svaka žena iz moje stolice izađe zadovoljna i sigurna u
                  sebe.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl text-[#2c1810] mb-4">
                  Profesionalna Kozmetika
                </h2>
                <p className="text-[#5c4d47] leading-relaxed">
                  U svom radu koristim samo proverene brendove profesionalne
                  šminke koji garantuju dugotrajnost i besprekoran izgled.
                  Redovno obnavljam svoj kit najnovijim proizvodima i pratim
                  inovacije u svetu beauty industrije.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="/"
                className="bg-[#d4a5a5] text-white px-8 py-3 rounded hover:bg-[#c39292] transition-all duration-300 inline-block"
              >
                Nazad na početnu
              </a>
            </div>
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