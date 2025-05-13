"use client";
import React from "react";

function MainComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      setFormData({ name: "", email: "", phone: "", message: "" });
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
            <a href="/kontakt" className="text-[#d4a5a5] transition-colors">
              Kontakt
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-playfair text-4xl text-[#2c1810] text-center mb-12">
            Kontaktirajte me
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="font-playfair text-2xl text-[#2c1810] mb-6">
                Informacije
              </h2>

              <div className="space-y-6">
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

                <a
                  href="https://goo.gl/maps/YOUR-LOCATION"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#5c4d47] hover:text-[#d4a5a5] transition-colors"
                >
                  <i className="fas fa-location-dot w-8"></i>
                  <span>Beograd, Srbija</span>
                </a>

                <div className="pt-6 border-t border-[#f0e6e6]">
                  <h3 className="font-playfair text-xl text-[#2c1810] mb-4">
                    Pratite me
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
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="font-playfair text-2xl text-[#2c1810] mb-6">
                Pošaljite poruku
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Vaše ime"
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
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Vaša poruka"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-[#f0e6e6] rounded focus:outline-none focus:border-[#d4a5a5]"
                    required
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
                  Pošalji poruku
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