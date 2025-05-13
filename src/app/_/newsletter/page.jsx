"use client";
import React from "react";

function MainComponent() {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const interestOptions = [
    { id: "makeup-tips", label: "Saveti za šminkanje" },
    { id: "trends", label: "Beauty trendovi" },
    { id: "products", label: "Novi proizvodi" },
    { id: "tutorials", label: "Tutorijali" },
    { id: "events", label: "Eventi i promocije" },
  ];

  const handleInterestChange = (id) => {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        body: JSON.stringify({ email, interests }),
      });

      if (!response.ok) {
        throw new Error("Došlo je do greške prilikom prijave");
      }

      setSuccess(true);
      setEmail("");
      setInterests([]);
    } catch (err) {
      console.error(err);
      setError("Nije moguće izvršiti prijavu. Molimo pokušajte ponovo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      <head>
        <title>Newsletter | N-Art Studio</title>
        <meta
          name="description"
          content="Prijavite se na naš newsletter i budite u toku sa najnovijim trendovima u svetu šminkanja."
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
              href="/kontakt"
              className="text-[#2c1810] hover:text-[#d4a5a5] transition-colors"
            >
              Kontakt
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="font-playfair text-4xl text-[#2c1810] text-center mb-6">
              Prijavite se na Newsletter
            </h1>

            <p className="text-[#5c4d47] text-center mb-8">
              Budite u toku sa najnovijim trendovima, savetima za šminkanje i
              ekskluzivnim ponudama.
            </p>

            {success ? (
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <i className="fas fa-check-circle text-green-500 text-4xl mb-4"></i>
                <p className="text-green-800">
                  Uspešno ste se prijavili na newsletter!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-[#2c1810] mb-2">
                    Email adresa
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-[#d4a5a5] rounded focus:outline-none focus:ring-2 focus:ring-[#d4a5a5]"
                    required
                  />
                </div>

                <div>
                  <p className="text-[#2c1810] mb-3">Oblasti interesovanja</p>
                  <div className="space-y-3">
                    {interestOptions.map((option) => (
                      <label
                        key={option.id}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div
                          className={`w-5 h-5 border rounded flex items-center justify-center transition-colors
                          ${
                            interests.includes(option.id)
                              ? "bg-[#d4a5a5] border-[#d4a5a5]"
                              : "border-[#d4a5a5] group-hover:border-[#c39292]"
                          }`}
                        >
                          {interests.includes(option.id) && (
                            <i className="fas fa-check text-white text-xs"></i>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={interests.includes(option.id)}
                          onChange={() => handleInterestChange(option.id)}
                          name={option.id}
                        />
                        <span className="text-[#5c4d47]">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {error && (
                  <div className="text-red-500 text-center">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#d4a5a5] text-white py-3 rounded hover:bg-[#c39292] transition-all duration-300 flex items-center justify-center"
                >
                  {loading ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    "Prijavi se"
                  )}
                </button>
              </form>
            )}
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