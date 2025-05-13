"use client";
import React from "react";

function MainComponent() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Svi proizvodi" },
    { id: "face", name: "Lice" },
    { id: "eyes", name: "Oči" },
    { id: "lips", name: "Usne" },
    { id: "tools", name: "Pribor" },
  ];

  const products = [
    {
      id: 1,
      name: "Charlotte Tilbury Airbrush Flawless Foundation",
      brand: "Charlotte Tilbury",
      category: "face",
      image:
        "https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/",
      description: "Dugotrajni tečni puder koji pruža besprekoran izgled",
      rating: 5,
      tips: "Nanesite tanki sloj za prirodan izgled ili nadogradite za potpuno prekrivanje",
    },
    {
      id: 2,
      name: "MAC Pro Longwear Paint Pot",
      brand: "MAC",
      category: "eyes",
      image:
        "https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/",
      description: "Kremasta senka za oči dugotrajne formule",
      rating: 4,
      tips: "Savršena kao baza za senke ili samostalno za brz makeup look",
    },
    {
      id: 3,
      name: "NARS Radiant Creamy Concealer",
      brand: "NARS",
      category: "face",
      image:
        "https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/",
      description: "Korektor srednjeg do punog prekrivanja",
      rating: 5,
      tips: "Tapkajte prstima za prirodnije stapanje sa kožom",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      <head>
        <title>Profesionalni Proizvodi | N-Art Studio</title>
        <meta
          name="description"
          content="Otkrijte profesionalne proizvode za šminkanje koje koristi N-Art Studio. Saznajte više o brendovima i kako ih pravilno koristiti."
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
            <a href="/proizvodi" className="text-[#d4a5a5] transition-colors">
              Proizvodi
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-playfair text-4xl text-[#2c1810] text-center mb-12">
            Profesionalni Proizvodi
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#d4a5a5] text-white"
                    : "bg-white text-[#2c1810] hover:bg-[#d4a5a5] hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-square relative">
                  <img
                    src={product.image}
                    alt={`${product.name} by ${product.brand}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#d4a5a5] text-white px-3 py-1 rounded-full">
                    {product.brand}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl text-[#2c1810] mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    {[...Array.from({ length: 5 })].map((_, index) => (
                      <i
                        key={index}
                        className={`fas fa-star ${
                          index < product.rating
                            ? "text-[#d4a5a5]"
                            : "text-gray-300"
                        }`}
                      ></i>
                    ))}
                  </div>
                  <p className="text-[#5c4d47] mb-4">{product.description}</p>
                  <div className="bg-[#fdf8f5] p-4 rounded-lg">
                    <p className="text-[#2c1810] font-medium mb-2">
                      <i className="fas fa-lightbulb text-[#d4a5a5] mr-2"></i>
                      Pro Tip:
                    </p>
                    <p className="text-[#5c4d47] text-sm">{product.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="font-playfair text-2xl text-[#2c1810] mb-4">
              Zašto koristimo profesionalne proizvode?
            </h2>
            <p className="text-[#5c4d47] max-w-2xl mx-auto">
              U N-Art Studiju koristimo isključivo profesionalne proizvode
              vrhunskog kvaliteta koji garantuju:
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <i className="fas fa-clock text-[#d4a5a5] text-3xl mb-4"></i>
                <h3 className="font-playfair text-lg text-[#2c1810] mb-2">
                  Dugotrajnost
                </h3>
                <p className="text-[#5c4d47]">
                  Makeup koji traje tokom celog događaja
                </p>
              </div>
              <div>
                <i className="fas fa-heart text-[#d4a5a5] text-3xl mb-4"></i>
                <h3 className="font-playfair text-lg text-[#2c1810] mb-2">
                  Kvalitet
                </h3>
                <p className="text-[#5c4d47]">Najbolji sastojci za vašu kožu</p>
              </div>
              <div>
                <i className="fas fa-camera text-[#d4a5a5] text-3xl mb-4"></i>
                <h3 className="font-playfair text-lg text-[#2c1810] mb-2">
                  Fotogeničnost
                </h3>
                <p className="text-[#5c4d47]">
                  Savršen izgled na fotografijama
                </p>
              </div>
            </div>
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