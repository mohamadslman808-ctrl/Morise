import { movieRules } from "../rules/movieRules";

export function analyzeMovie(movie) {
  const recommendations = [];

  movieRules.forEach((rule) => {
    if (rule.condition(movie)) {
      recommendations.push(rule.result);
    }
  });

  return recommendations;
}
