async function handler({ page = 1, perPage = 6 }) {
  try {
    const prompts = [
      "professional makeup portrait, beautiful woman, soft lighting, studio photography, high end beauty photography, flawless skin, glamour makeup",
      "bridal makeup portrait, elegant bride, natural makeup, wedding photography, soft glam, professional beauty shot",
      "evening makeup glamour shot, dramatic eye makeup, professional beauty photography, perfect skin, high fashion",
      "beauty editorial makeup, creative makeup art, professional studio lighting, fashion photography, flawless complexion",
      "natural glam makeup, professional beauty portrait, soft lighting, clean beauty, fresh faced",
      "dramatic makeup portrait, smokey eye makeup, professional beauty shot, studio lighting, perfect skin",
    ];

    const startIndex = (page - 1) * perPage;
    const selectedPrompts = prompts.slice(startIndex, startIndex + perPage);

    const imagePromises = selectedPrompts.map(async (prompt) => {
      const response = await fetch(
        `/integrations/stable-diffusion-v-3/?prompt=${encodeURIComponent(
          prompt
        )}&width=1024&height=1024}`
      );

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const data = await response.json();
      const imageUrl = data.data[0];

      return {
        id: Math.random().toString(36).substr(2, 9),
        url: imageUrl,
        thumbnail: imageUrl,
      };
    });

    const images = await Promise.all(imagePromises);

    return {
      images,
      hasMore: startIndex + perPage < prompts.length,
    };
  } catch (error) {
    console.error("Error generating images:", error);
    return {
      images: [],
      hasMore: false,
      error: "Failed to generate images",
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}