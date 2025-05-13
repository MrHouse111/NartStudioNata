"use client";
import React from "react";

function MainComponent() {
  const [tutorials, setTutorials] = useState([
    {
      id: 1,
      title: "Osnove Dnevnog Makeupa",
      category: "Osnovni",
      duration: "12:30",
      thumbnail:
        "https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/",
      videoUrl: "https://example.com/video1.mp4",
      description:
        "Naučite kako da kreirate savršen dnevni makeup look koji je prirodan i dugotrajan.",
    },
    {
      id: 2,
      title: "Glamurozni Večernji Makeup",
      category: "Napredni",
      duration: "15:45",
      thumbnail:
        "https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/",
      videoUrl: "https://example.com/video2.mp4",
      description:
        "Profesionalne tehnike za kreiranje glamuroznog večernjeg izgleda.",
    },
    {
      id: 3,
      title: "Contouring Tehnike",
      category: "Srednji",
      duration: "18:20",
      thumbnail:
        "https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/",
      videoUrl: "https://example.com/video3.mp4",
      description:
        "Detaljno objašnjenje tehnika konturisanja za različite oblike lica.",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("Sve");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ["Sve", "Osnovni", "Srednji", "Napredni"];

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesCategory =
      selectedCategory === "Sve" || tutorial.category === selectedCategory;
    const matchesSearch = tutorial.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      <head>
        <title>Video Tutorijali | N-Art Studio</title>
        <meta
          name="description"
          content="Pogledajte profesionalne video tutorijale za šminkanje - od osnovnih do naprednih tehnika."
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
            <a href="/tutorijali" className="text-[#d4a5a5] transition-colors">
              Tutorijali
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-playfair text-4xl text-[#2c1810] text-center mb-12">
            Video Tutorijali
          </h1>

          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category
                      ? "bg-[#d4a5a5] text-white"
                      : "bg-white text-[#2c1810] hover:bg-[#d4a5a5] hover:text-white"
                  } transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Pretraži tutorijale..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a5a5]"
              />
              <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-[#2c1810]"></i>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div
                  className="relative aspect-video cursor-pointer group"
                  onClick={() => setSelectedVideo(tutorial)}
                >
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="fas fa-play text-white text-4xl"></i>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {tutorial.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-playfair text-xl text-[#2c1810] mb-2">
                    {tutorial.title}
                  </h3>
                  <span className="inline-block bg-[#fdf8f5] text-[#2c1810] px-3 py-1 rounded-full text-sm mb-3">
                    {tutorial.category}
                  </span>
                  <p className="text-[#5c4d47] text-sm">
                    {tutorial.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <div className="aspect-video bg-black">
              <video
                controls
                className="w-full h-full"
                src={selectedVideo.videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4">
              <h3 className="font-playfair text-xl text-[#2c1810] mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-[#5c4d47]">{selectedVideo.description}</p>
            </div>
            <button
              className="absolute top-4 right-4 text-white bg-[#2c1810] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#d4a5a5] transition-colors"
              onClick={() => setSelectedVideo(null)}
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
    </div>
  );
}

export default MainComponent;