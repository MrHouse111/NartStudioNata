"use client";
import React from "react";

function MainComponent() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "5 Essential Tips za Dugotrajno Šminkanje",
      excerpt:
        "Saznajte kako da vaša šminka ostane postojana tokom celog dana uz ove profesionalne savete.",
      image:
        "https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/",
      date: "15. Januar 2025.",
      category: "Saveti",
    },
    {
      id: 2,
      title: "Trending: Prirodni Makeup Look za 2025",
      excerpt:
        "Otkrijte najnovije trendove u svetu prirodnog šminkanja i kako da ih primenite.",
      image:
        "https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/",
      date: "10. Januar 2025.",
      category: "Trendovi",
    },
    {
      id: 3,
      title: "Kako Odabrati Savršenu Podlogu",
      excerpt:
        "Vodič za pronalaženje idealne podloge prema vašem tipu kože i željenom finišu.",
      image:
        "https://ucarecdn.com/611d57c5-5af5-4caa-b9ee-71f2c337c0bc/-/format/auto/",
      date: "5. Januar 2025.",
      category: "Proizvodi",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      <head>
        <title>Blog | Nataša Balešević Makeup Artist</title>
        <meta
          name="description"
          content="Makeup saveti, trendovi i novosti iz beauty industrije. Profesionalni saveti za šminkanje."
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
            <a href="/blog" className="text-[#d4a5a5] transition-colors">
              Blog
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-playfair text-4xl text-[#2c1810] text-center mb-12">
            Beauty Blog
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-[#d4a5a5]">{post.date}</span>
                    <span className="text-sm px-2 py-1 bg-[#fdf8f5] text-[#2c1810] rounded">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="font-playfair text-xl text-[#2c1810] mb-3">
                    {post.title}
                  </h2>
                  <p className="text-[#5c4d47] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-[#d4a5a5] hover:text-[#c39292] transition-colors flex items-center gap-2">
                    Pročitaj više
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-[#d4a5a5] text-white px-8 py-3 rounded hover:bg-[#c39292] transition-all duration-300">
              Učitaj više postova
            </button>
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