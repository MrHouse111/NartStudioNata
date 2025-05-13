"use client";
import React from "react";

function MainComponent() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch("/api/makeup-gallery", {
          method: "POST",
          body: JSON.stringify({ perPage: 6 }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch gallery images");
        }
        const data = await response.json();
        setGalleryImages(data.images || []);
      } catch (err) {
        setError("Nije moguće učitati galeriju");
        console.error(err);
      }
    };
    fetchGalleryImages();
  }, []);

  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      <head>
        <title>N-Art Studio | Profesionalni Makeup Artist Beograd</title>
        <meta
          name="description"
          content="N-Art Studio - Profesionalni makeup artist u Beogradu. Šminkanje za venčanja, proslave, fotografisanja. Višegodišnje iskustvo u beauty industriji."
        />
        <meta
          name="keywords"
          content="šminkanje, makeup artist, profesionalno šminkanje, šminkanje za venčanja, Beograd, N-Art Studio"
        />
        <meta property="og:title" content="N-Art Studio | Makeup Artist" />
        <meta
          property="og:description"
          content="N-Art Studio - Profesionalni makeup artist u Beogradu. Šminkanje za venčanja, proslave, fotografisanja."
        />
        <meta name="language" content="Serbian" />
        <link rel="canonical" href="https://n-artstudio.com" />
      </head>

      <header className="bg-[#fdf8f5]/95 backdrop-blur-sm py-4 px-6 fixed w-full z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="font-playfair text-2xl text-[#2c1810]">
            N-Art Studio
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-sans">
            <a
              href="/o-meni"
              className="text-[#2c1810] hover:text-[#d4a5a5] transition-colors"
            >
              O meni
            </a>
            <a
              href="/usluge"
              className="text-[#2c1810] hover:text-[#d4a5a5] transition-colors"
            >
              Usluge
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
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2c1810] z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 top-3" : "top-1"
                }`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-current top-3 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              ></span>
            </div>
          </button>
        </nav>
        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[#fdf8f5] z-40 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
            <a
              href="/o-meni"
              className="text-[#2c1810] hover:text-[#d4a5a5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              O meni
            </a>
            <a
              href="/usluge"
              className="text-[#2c1810] hover:text-[#d4a5a5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Usluge
            </a>
            <a
              href="/galerija"
              className="text-[#2c1810] hover:text-[#d4a5a5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Galerija
            </a>
            <a
              href="/kontakt"
              className="text-[#2c1810] hover:text-[#d4a5a5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="min-h-screen flex items-center justify-center relative pt-20">
          <div className="absolute inset-0 bg-[url('https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/')] bg-cover bg-center opacity-10"></div>
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
            <div className="text-center md:text-left">
              <h2 className="font-playfair text-4xl md:text-6xl text-[#2c1810] mb-6 opacity-0 animate-fadeInUp">
                Profesionalno šminkanje za posebne trenutke
              </h2>
              <p className="text-[#5c4d47] text-lg mb-8 opacity-0 animate-fadeInUp animation-delay-200">
                Vaša lepota je moja umetnost
              </p>
              <a
                href="/kontakt"
                className="inline-block bg-[#d4a5a5] text-white px-8 py-3 rounded hover:bg-[#c39292] transition-all duration-300 transform hover:scale-105 opacity-0 animate-fadeInUp animation-delay-400"
              >
                Zakaži termin
              </a>
            </div>
            <div className="relative h-[400px] md:h-[600px] opacity-0 animate-fadeInRight animation-delay-600">
              <img
                src="https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/"
                alt="Nataša Balešević makeup artist"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2c1810] mb-8 opacity-0 animate-fadeIn">
              O meni
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden opacity-0 animate-fadeInLeft">
                <img
                  src="https://ucarecdn.com/YOUR-ABOUT-IMAGE-ID/-/format/auto/"
                  alt="Nataša Balešević u radu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 opacity-0 animate-fadeInRight">
                <p className="text-[#5c4d47] leading-relaxed">
                  Sa više od 10 godina iskustva u beauty industriji, posvećena
                  sam stvaranju savršenog makeup looka za svaku priliku.
                </p>
                <p className="text-[#5c4d47] leading-relaxed">
                  Kontinuirano se usavršavam i pratim najnovije trendove u svetu
                  šminkanja, koristeći isključivo profesionalnu kozmetiku
                  najvišeg kvaliteta.
                </p>
                <a
                  href="/o-meni"
                  className="inline-block mt-4 text-[#d4a5a5] hover:text-[#c39292] transition-colors"
                >
                  Saznaj više <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#fdf8f5]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2c1810] text-center mb-12 opacity-0 animate-fadeIn">
              Usluge
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Svadbeno šminkanje",
                  description:
                    "Kompletna usluga šminkanja za mladе i mladine pratnje. Uključuje probu šminke i šminkanje na dan venčanja.",
                  icon: "fa-ring",
                },
                {
                  title: "Večernje šminkanje",
                  description:
                    "Glamurozni makeup za posebne prilike i proslave. Prilagođen vašem stilu i događaju.",
                  icon: "fa-sparkles",
                },
                {
                  title: "Editorijal",
                  description:
                    "Profesionalno šminkanje za fotografisanja i modne editorijale. Kreativni i avangardni makeup.",
                  icon: "fa-camera",
                },
              ].map((service, index) => (
                <div
                  key={service.title}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 animate-fadeInUp"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-[#d4a5a5] text-3xl mb-4">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="font-playfair text-xl text-[#2c1810] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#5c4d47] mb-4">{service.description}</p>
                  <a
                    href="/usluge"
                    className="text-[#d4a5a5] hover:text-[#c39292] transition-colors inline-flex items-center"
                  >
                    Detaljnije <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2c1810] text-center mb-12 opacity-0 animate-fadeIn">
              Galerija radova
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="aspect-square relative overflow-hidden rounded-lg opacity-0 animate-fadeIn cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={image.thumbnail}
                    alt="Profesionalno šminkanje"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Pogledaj više u galeriji
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {error && (
              <div className="text-red-500 text-center mt-4">{error}</div>
            )}
            <div className="text-center mt-8">
              <a
                href="/galerija"
                className="inline-block bg-[#d4a5a5] text-white px-8 py-3 rounded hover:bg-[#c39292] transition-all duration-300"
              >
                Pogledaj celu galeriju
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#fdf8f5]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2c1810] text-center mb-12 opacity-0 animate-fadeIn">
              Kontakt
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-center space-y-4">
                <a
                  href="tel:+381665848998"
                  className="text-[#5c4d47] block hover:text-[#d4a5a5] transition-colors"
                >
                  <i className="fas fa-phone mr-2"></i>
                  066 584 8998
                </a>
                <a
                  href="mailto:natasa@makeup.rs"
                  className="text-[#5c4d47] block hover:text-[#d4a5a5] transition-colors"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  natasa@makeup.rs
                </a>
                <div className="pt-6 flex justify-center gap-6">
                  <a
                    href="https://instagram.com/YOUR-INSTAGRAM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d4a5a5] hover:text-[#c39292] text-2xl transition-transform hover:scale-110"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://facebook.com/YOUR-FACEBOOK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d4a5a5] hover:text-[#c39292] text-2xl transition-transform hover:scale-110"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
                <div className="mt-8">
                  <a
                    href="/kontakt"
                    className="inline-block bg-[#d4a5a5] text-white px-8 py-3 rounded hover:bg-[#c39292] transition-all duration-300"
                  >
                    Pošalji poruku
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2c1810] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-sans">© 2025 N-Art Studio. Sva prava zadržana.</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;