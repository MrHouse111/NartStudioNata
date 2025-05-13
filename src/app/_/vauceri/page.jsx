"use client";
import React from "react";

function MainComponent() {
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [formData, setFormData] = useState({
    recipientName: "",
    senderName: "",
    message: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const vouchers = [
    {
      id: 1,
      name: "Basic Makeup Vaučer",
      price: "4000",
      description: "Vaučer za dnevno ili večernje šminkanje",
      includes: [
        "Profesionalno šminkanje",
        "60 minuta tretmana",
        "Konsultacije",
      ],
    },
    {
      id: 2,
      name: "Premium Makeup Vaučer",
      price: "6000",
      description: "Vaučer za specijalne prilike",
      includes: [
        "Profesionalno šminkanje",
        "90 minuta tretmana",
        "Konsultacije",
        "Veštačke trepavice",
      ],
    },
    {
      id: 3,
      name: "Bridal Makeup Vaučer",
      price: "8000",
      description: "Vaučer za svadbeno šminkanje",
      includes: [
        "Proba šminke",
        "Šminkanje na dan venčanja",
        "Konsultacije",
        "Veštačke trepavice",
      ],
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/purchase-voucher", {
        method: "POST",
        body: JSON.stringify({
          voucher: selectedVoucher,
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Došlo je do greške prilikom kupovine vaučera");
      }

      setFormData({
        recipientName: "",
        senderName: "",
        message: "",
        email: "",
        phone: "",
      });
      setSelectedVoucher(null);
    } catch (err) {
      console.error(err);
      setError(
        "Došlo je do greške prilikom kupovine vaučera. Molimo pokušajte ponovo."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      <head>
        <title>Poklon Vaučeri | N-Art Studio</title>
        <meta
          name="description"
          content="Kupite poklon vaučer za profesionalno šminkanje. Idealan poklon za sve posebne prilike."
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
            Poklon Vaučeri
          </h1>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {vouchers.map((voucher) => (
              <div
                key={voucher.id}
                className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                  selectedVoucher?.id === voucher.id
                    ? "ring-2 ring-[#d4a5a5]"
                    : ""
                }`}
                onClick={() => setSelectedVoucher(voucher)}
              >
                <h3 className="font-playfair text-xl text-[#2c1810] mb-3">
                  {voucher.name}
                </h3>
                <p className="text-[#5c4d47] mb-4">{voucher.description}</p>
                <p className="text-2xl text-[#d4a5a5] font-playfair mb-4">
                  {voucher.price} RSD
                </p>
                <ul className="space-y-2">
                  {voucher.includes.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-[#5c4d47]"
                    >
                      <i className="fas fa-check text-[#d4a5a5] mr-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {selectedVoucher && (
            <div className="max-w-2xl mx-auto">
              <h2 className="font-playfair text-2xl text-[#2c1810] mb-8 text-center">
                Personalizujte vaš vaučer
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#2c1810] mb-2">
                      Ime primaoca
                    </label>
                    <input
                      type="text"
                      name="recipientName"
                      value={formData.recipientName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded border border-[#d4a5a5] focus:outline-none focus:ring-2 focus:ring-[#d4a5a5]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#2c1810] mb-2">
                      Vaše ime
                    </label>
                    <input
                      type="text"
                      name="senderName"
                      value={formData.senderName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded border border-[#d4a5a5] focus:outline-none focus:ring-2 focus:ring-[#d4a5a5]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#2c1810] mb-2">
                    Personalizovana poruka
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded border border-[#d4a5a5] focus:outline-none focus:ring-2 focus:ring-[#d4a5a5] h-32"
                    placeholder="Unesite vašu poruku..."
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#2c1810] mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded border border-[#d4a5a5] focus:outline-none focus:ring-2 focus:ring-[#d4a5a5]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#2c1810] mb-2">Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded border border-[#d4a5a5] focus:outline-none focus:ring-2 focus:ring-[#d4a5a5]"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="text-red-500 text-center">{error}</div>
                )}

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#d4a5a5] text-white px-8 py-3 rounded hover:bg-[#c39292] transition-all duration-300"
                    disabled={loading}
                  >
                    {loading ? (
                      <i className="fas fa-spinner fa-spin"></i>
                    ) : (
                      "Kupi vaučer"
                    )}
                  </button>
                </div>
              </form>
            </div>
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