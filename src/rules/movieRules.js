export const movieRules = [
  {
    condition: (movie) => Number(movie.imdbRating) >= 8,
    result: "🔥 Highly Recommended Movie",
  },

  {
    condition: (movie) => Number(movie.Year) < 2000,
    result: "🎬 Classic Movie",
  },

  {
    condition: (movie) => Number(movie.Runtime?.split(" ").at(0)) > 150,
    result: "⏳ Long Movie",
  },

  {
    condition: (movie) =>
      movie.Genre?.includes("Action") && Number(movie.imdbRating) > 7,
    result: "💥 Great Action Movie",
  },
];
