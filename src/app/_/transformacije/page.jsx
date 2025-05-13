"use client";
import React from "react";

function MainComponent() {
  const [selectedTransformation, setSelectedTransformation] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  const transformations = [
    {
      id: 1,
      title: "Glamurozni Večernji Look",
      before:
        "https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/",
      after:
        "https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/",
      description: "Prirodna transformacija u glamurozni večernji izgled",
    },
    {
      id: 2,
      title: "Svadbena Transformacija",
      before:
        "https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/",
      after:
        "https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/",
      description: "Nežni bridal makeup sa prirodnim glamurom",
    },
    {
      id: 3,
      title: "Dnevni Glam Look",
      before:
        "https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/",
      after:
        "https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/",
      description: "Svež i blistav dnevni makeup look",
    },
  ];

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  const handleMouseMove = (e) => {
    if (selectedTransformation) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      <head>
        <title>Transformacije | N-Art Studio Makeup</title>
        <meta
          name="description"
          content="Pogledajte neverovatne transformacije šminkanja - pre i posle rezultati profesionalnog makeup-a."
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
              href="/galerija"
              className="text-[#2c1810] hover:text-[#d4a5a5] transition-colors"
            >
              Galerija
            </a>
            <a href="/transformacije" className="text-[#d4a5a5]">
              Transformacije
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-playfair text-4xl text-[#2c1810] text-center mb-12">
            Transformacije
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((transformation) => (
              <div
                key={transformation.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => setSelectedTransformation(transformation)}
              >
                <div className="relative aspect-square">
                  <img
                    src={transformation.before}
                    alt={`Pre - ${transformation.title}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent">
                    <img
                      src={transformation.after}
                      alt={`Posle - ${transformation.title}`}
                      className="w-full h-full object-cover clip-right"
                      style={{ clipPath: "inset(0 0 0 50%)" }}
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-playfair text-xl text-[#2c1810] mb-2">
                    {transformation.title}
                  </h3>
                  <p className="text-[#5c4d47]">{transformation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {selectedTransformation && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <div
              className="relative aspect-[3/4] w-full"
              onMouseMove={handleMouseMove}
            >
              <img
                src={selectedTransformation.before}
                alt={`Pre - ${selectedTransformation.title}`}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <img
                src={selectedTransformation.after}
                alt={`Posle - ${selectedTransformation.title}`}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
              />
              <div
                className="absolute inset-y-0"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute inset-y-0 w-0.5 bg-white"></div>
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-arrows-left-right text-[#2c1810]"></i>
                </div>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-[#d4a5a5] transition-colors"
              onClick={() => setSelectedTransformation(null)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}

      <footer className="bg-[#2c1810] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-sans">© 2025 N-Art Studio. Sva prava zadržana.</p>
        </div>
      </footer>

      <style jsx global>{`
        input[type="range"] {
          -webkit-appearance: none;
          height: 2px;
          background: white;
          border-radius: 2px;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }

        .clip-right {
          clip-path: inset(0 0 0 50%);
        }
      `}</style>
    </div>
  );
}

export default MainComponent;