"use client";
import React from "react";

function MainComponent() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Svadbeno šminkanje",
      icon: "fa-ring",
      price: "8000 RSD",
      description: "Profesionalno šminkanje za mladе koje uključuje:",
      features: [
        "Proba šminke pre venčanja",
        "Šminkanje na dan venčanja",
        "Korišćenje premium kozmetike",
        "Veštačke trepavice po želji",
        "Konsultacije oko stila šminke",
        "Do 12h trajanja",
      ],
    },
    {
      id: 2,
      title: "Šminkanje za mladinu pratnju",
      icon: "fa-users",
      price: "4000 RSD",
      description: "Šminkanje za kumu, majku mlade ili mladoženje:",
      features: [
        "Prilagođeno godinama i stilu",
        "Usklađeno sa mladinom šminkom",
        "Premium kozmetika",
        "Veštačke trepavice",
        "Do 10h trajanja",
      ],
    },
    {
      id: 3,
      title: "Večernje šminkanje",
      icon: "fa-sparkles",
      price: "4500 RSD",
      description: "Glamurozna šminka za posebne prilike:",
      features: [
        "Prilagođeno događaju",
        "Veštačke trepavice uključene",
        "Postojana šminka",
        "Premium kozmetika",
        "Do 8h trajanja",
      ],
    },
    {
      id: 4,
      title: "Dnevno šminkanje",
      icon: "fa-sun",
      price: "3500 RSD",
      description: "Prirodan i svež izgled za dnevne prilike:",
      features: [
        "Lagan i prirodan izgled",
        "Postojana šminka",
        "Kvalitetna kozmetika",
        "Brzo nanošenje",
        "Do 8h trajanja",
      ],
    },
    {
      id: 5,
      title: "Editorijal / Foto šminkanje",
      icon: "fa-camera",
      price: "6000 RSD",
      description: "Profesionalno šminkanje za fotografisanje:",
      features: [
        "Prilagođeno vrsti fotografisanja",
        "HD-ready šminka",
        "Specijalni efekti po potrebi",
        "Više različitih lookova",
        "Premium kozmetika",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      <head>
        <title>Usluge | Nataša Balešević Makeup Artist</title>
        <meta
          name="description"
          content="Profesionalne usluge šminkanja - svadbeno, večernje, dnevno i editorijal šminkanje. Pogledajte cene i zakažite svoj termin."
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
            <a href="/usluge" className="text-[#d4a5a5] transition-colors">
              Usluge
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
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-playfair text-4xl text-[#2c1810] text-center mb-12">
            Usluge šminkanja
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="text-[#d4a5a5] text-3xl mb-4">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h2 className="font-playfair text-2xl text-[#2c1810] mb-4">
                  {service.title}
                </h2>
                <p className="text-[#5c4d47] mb-4">{service.description}</p>
                <div className="text-[#d4a5a5] text-xl font-semibold mb-4">
                  {service.price}
                </div>
                <button
                  className="w-full bg-[#d4a5a5] text-white py-2 rounded hover:bg-[#c39292] transition-colors"
                  onClick={() => (window.location.href = "/kontakt")}
                >
                  Zakaži termin
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {selectedService && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-playfair text-2xl text-[#2c1810]">
                  {selectedService.title}
                </h3>
                <div className="text-[#d4a5a5] text-xl mt-2">
                  {selectedService.price}
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-[#2c1810] hover:text-[#d4a5a5] transition-colors"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="space-y-4">
              {selectedService.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <i className="fas fa-check text-[#d4a5a5]"></i>
                  <span className="text-[#5c4d47]">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="/kontakt"
                className="block w-full bg-[#d4a5a5] text-white text-center py-3 rounded hover:bg-[#c39292] transition-colors"
              >
                Zakaži termin
              </a>
            </div>
          </div>
        </div>
      )}

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