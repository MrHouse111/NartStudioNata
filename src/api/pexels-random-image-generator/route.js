async function handler({ page = 1, perPage = 30 } = {}) {
  try {
    // Koristimo specifične termine za pretragu na engleskom jer Pexels API bolje radi sa engleskim terminima
    const searchQueries = [
      "professional bridal makeup",
      "wedding makeup artist",
      "glamour makeup",
      "beauty makeup artist",
      "evening makeup",
    ];

    const randomQuery =
      searchQueries[Math.floor(Math.random() * searchQueries.length)];

    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(
        randomQuery
      )}&per_page=${perPage}&page=${page}`,
      {
        headers: {
          Authorization:
            "FlqunxpwlC35yNasaao5rvmduBTWgTMZ31BJj1oU9jpUDmF4ggDWeDpx",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.photos || data.photos.length === 0) {
      return { images: [] };
    }

    // Filtriramo fotografije da izbegnemo neprikladne rezultate
    const filteredPhotos = data.photos.filter(
      (photo) =>
        !photo.url.toLowerCase().includes("before") &&
        !photo.url.toLowerCase().includes("after") &&
        photo.width >= 800 // Samo kvalitetne fotografije
    );

    const images = filteredPhotos.map((photo) => ({
      id: photo.id,
      url: photo.src.original,
      thumbnail: photo.src.large2x, // Koristimo veću verziju za bolji kvalitet
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url,
      width: photo.width,
      height: photo.height,
      category: "makeup",
    }));

    return {
      images,
      totalResults: data.total_results,
      page,
      perPage,
      hasMore: page * perPage < data.total_results,
    };
  } catch (error) {
    console.error("Gallery error:", error);
    return { error: "Nije moguće učitati galeriju slika" };
  }
}
export async function POST(request) {
  return handler(await request.json());
}