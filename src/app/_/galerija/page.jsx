"use client";
import React from "react";

function MainComponent() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchImages = async () => {
    try {
      const response = await fetch("/api/pexels-random-image-generator", {
        method: "POST",
        body: JSON.stringify({ page, perPage: 12 }),
      });

      if (!response.ok) {
        throw new Error("Nije moguće učitati slike");
      }

      const data = await response.json();

      setImages((prev) =>
        page === 1 ? data.images : [...prev, ...data.images]
      );
      setHasMore(data.hasMore);
    } catch (err) {
      console.error(err);
      setError("Došlo je do greške prilikom učitavanja slika");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      <head>
        <title>Galerija | Nataša Balešević Makeup Artist</title>
        <meta
          name="description"
          content="Pogledajte galeriju profesionalnih makeup radova - svadbeno šminkanje, večernje šminkanje i editorijal makeup."
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
            <a href="/galerija" className="text-[#d4a5a5] transition-colors">
              Galerija
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-playfair text-4xl text-[#2c1810] text-center mb-12">
            Galerija radova
          </h1>

          {loading && page === 1 ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="text-[#d4a5a5] text-4xl">
                <i className="fas fa-spinner fa-spin"></i>
              </div>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="aspect-square relative overflow-hidden rounded-lg cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.thumbnail}
                      alt="Profesionalni makeup rad"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <i className="fas fa-search-plus text-white text-2xl"></i>
                    </div>
                  </div>
                ))}
              </div>

              {hasMore && (
                <div className="mt-12 text-center">
                  <button
                    onClick={() => setPage((prev) => prev + 1)}
                    className="bg-[#d4a5a5] text-white px-8 py-3 rounded hover:bg-[#c39292] transition-all duration-300"
                    disabled={loading}
                  >
                    {loading ? (
                      <i className="fas fa-spinner fa-spin"></i>
                    ) : (
                      "Učitaj još"
                    )}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <img
              src={selectedImage.url}
              alt="Uvećani prikaz makeup rada"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-[#d4a5a5] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <i className="fas fa-times"></i>
            </button>
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