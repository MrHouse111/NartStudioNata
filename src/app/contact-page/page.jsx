"use client";
import React from "react";

function MainComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "wedding",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "info", message: "Slanje poruke..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Greška pri slanju poruke");
      }

      setStatus({ type: "success", message: "Poruka je uspešno poslata!" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        service: "wedding",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Došlo je do greške pri slanju poruke.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      <head>
        <title>Kontakt | Nataša Balešević Makeup Artist</title>
        <meta
          name="description"
          content="Kontaktirajte Natašu Balešević - profesionalnog makeup artista u Beogradu. Zakažite termin za šminkanje."
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
            <a
              href="/usluge"
              className="text-[#2c1810] hover:text-[#d4a5a5] transition-colors"
            >
              Usluge
            </a>
            <a href="/kontakt" className="text-[#d4a5a5] transition-colors">
              Kontakt
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-playfair text-4xl text-[#2c1810] text-center mb-12">
            Kontaktirajte me
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="font-playfair text-2xl text-[#2c1810] mb-6">
                  Kontakt informacije
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:+381665848998"
                    className="flex items-center text-[#5c4d47] hover:text-[#d4a5a5] transition-colors"
                  >
                    <i className="fas fa-phone w-8"></i>
                    <span>066 584 8998</span>
                  </a>
                  <a
                    href="mailto:natasa@makeup.rs"
                    className="flex items-center text-[#5c4d47] hover:text-[#d4a5a5] transition-colors"
                  >
                    <i className="fas fa-envelope w-8"></i>
                    <span>natasa@makeup.rs</span>
                  </a>
                  <div className="flex items-center text-[#5c4d47]">
                    <i className="fas fa-clock w-8"></i>
                    <span>Pon - Sub: 09:00 - 20:00</span>
                  </div>
                  <a
                    href="https://goo.gl/maps/YOUR-LOCATION"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#5c4d47] hover:text-[#d4a5a5] transition-colors"
                  >
                    <i className="fas fa-location-dot w-8"></i>
                    <span>Beograd, Srbija</span>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-[#f0e6e6]">
                  <h3 className="font-playfair text-xl text-[#2c1810] mb-4">
                    Društvene mreže
                  </h3>
                  <div className="flex gap-4">
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
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181139.35491768607!2d20.282514235907248!3d44.815489842137314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2z0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1645488532625!5m2!1ssr!2srs"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokacija"
                ></iframe>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="font-playfair text-2xl text-[#2c1810] mb-6">
                Zakazivanje termina
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Vaše ime i prezime"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#f0e6e6] rounded focus:outline-none focus:border-[#d4a5a5]"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email adresa"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#f0e6e6] rounded focus:outline-none focus:border-[#d4a5a5]"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Broj telefona"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#f0e6e6] rounded focus:outline-none focus:border-[#d4a5a5]"
                    required
                  />
                </div>

                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#f0e6e6] rounded focus:outline-none focus:border-[#d4a5a5]"
                    required
                  />
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#f0e6e6] rounded focus:outline-none focus:border-[#d4a5a5]"
                    required
                  >
                    <option value="wedding">Svadbeno šminkanje</option>
                    <option value="evening">Večernje šminkanje</option>
                    <option value="editorial">Editorijal</option>
                    <option value="other">Drugo</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Vaša poruka ili dodatne napomene"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-[#f0e6e6] rounded focus:outline-none focus:border-[#d4a5a5]"
                  ></textarea>
                </div>

                {status.message && (
                  <div
                    className={`text-center p-3 rounded ${
                      status.type === "success"
                        ? "bg-green-100 text-green-700"
                        : status.type === "error"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#d4a5a5] text-white py-3 rounded hover:bg-[#c39292] transition-all duration-300"
                >
                  Pošalji zahtev
                </button>
              </form>
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