/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ovo je ključno za statički izvoz
  // Ako tvoj sajt NEĆE biti na root domeni (npr. https://tvojeime.github.io/NartStudioNata/)
  // ONDA OBAVEZNO DODAJ basePath i assetPrefix.
  // Ako je ime tvog repozitorijuma 'NartStudioNata', onda će basePath biti '/NartStudioNata'
  basePath: '/NartStudioNata',
  assetPrefix: '/NartStudioNata/', // Obavezno sa kosom crtom na kraju
  images: {
    unoptimized: true, // Potrebno za next/image sa statičkim izvozom na GitHub Pages
  },
  trailingSlash: true, // Opciono, ali često korisno za GitHub Pages da ispravno rutira
};

module.exports = nextConfig;