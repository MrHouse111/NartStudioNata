"use client";
import React from "react";

function MainComponent() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const services = [
    { id: 1, name: "Dnevno šminkanje", duration: 45, price: "3000 RSD" },
    { id: 2, name: "Večernje šminkanje", duration: 60, price: "4000 RSD" },
    { id: 3, name: "Svadbeno šminkanje", duration: 90, price: "8000 RSD" },
    { id: 4, name: "Proba šminke", duration: 60, price: "3000 RSD" },
  ];

  const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/book-appointment", {
        method: "POST",
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          service: selectedService,
          name,
          phone,
          email,
          note,
        }),
      });

      if (!response.ok) {
        throw new Error("Nije moguće zakazati termin");
      }

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Došlo je do greške prilikom zakazivanja termina");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      <head>
        <title>Zakazivanje termina | N-Art Studio</title>
        <meta
          name="description"
          content="Online zakazivanje termina za profesionalno šminkanje"
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
              href="/usluge"
              className="text-[#2c1810] hover:text-[#d4a5a5] transition-colors"
            >
              Usluge
            </a>
            <a href="/zakazivanje" className="text-[#d4a5a5]">
              Zakazivanje
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-playfair text-4xl text-[#2c1810] text-center mb-12">
            Zakazivanje termina
          </h1>

          {success ? (
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <i className="fas fa-check-circle text-green-500 text-4xl mb-4"></i>
              <h2 className="font-playfair text-2xl text-[#2c1810] mb-4">
                Termin je uspešno zakazan!
              </h2>
              <p className="text-[#5c4d47] mb-6">
                Uskoro ćete dobiti email sa potvrdom rezervacije.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="bg-[#d4a5a5] text-white px-8 py-3 rounded hover:bg-[#c39292] transition-all duration-300"
              >
                Zakaži novi termin
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="font-playfair text-xl text-[#2c1810] mb-4">
                  1. Odaberite uslugu
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedService === service.name
                          ? "border-[#d4a5a5] bg-[#fdf8f5]"
                          : "border-gray-200 hover:border-[#d4a5a5]"
                      }`}
                      onClick={() => setSelectedService(service.name)}
                    >
                      <h3 className="font-playfair text-[#2c1810]">
                        {service.name}
                      </h3>
                      <p className="text-sm text-[#5c4d47]">
                        Trajanje: {service.duration} min
                      </p>
                      <p className="text-sm text-[#d4a5a5]">{service.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="font-playfair text-xl text-[#2c1810] mb-4">
                  2. Odaberite datum i vreme
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#5c4d47] mb-2">Datum</label>
                    <input
                      type="date"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#d4a5a5]"
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#5c4d47] mb-2">Vreme</label>
                    <select
                      className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#d4a5a5]"
                      onChange={(e) => setSelectedTime(e.target.value)}
                      required
                    >
                      <option value="">Odaberite vreme</option>
                      {availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="font-playfair text-xl text-[#2c1810] mb-4">
                  3. Vaši podaci
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[#5c4d47] mb-2">
                      Ime i prezime
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#d4a5a5]"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#5c4d47] mb-2">Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#d4a5a5]"
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#5c4d47] mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#d4a5a5]"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#5c4d47] mb-2">
                      Napomena (opciono)
                    </label>
                    <textarea
                      name="note"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#d4a5a5]"
                      rows="3"
                      onChange={(e) => setNote(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

              {error && <div className="text-red-500 text-center">{error}</div>}

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#d4a5a5] text-white px-8 py-3 rounded hover:bg-[#c39292] transition-all duration-300"
                  disabled={loading}
                >
                  {loading ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    "Zakaži termin"
                  )}
                </button>
              </div>
            </form>
          )}
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