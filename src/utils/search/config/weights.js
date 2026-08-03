/** Field weights for ranking. Higher = more important. */
export const WEIGHTS = {
  exactTitle: 120,
  intent: 100,
  alias: 80,
  keyword: 70,
  heading: 50,
  module: 40,
  category: 35,
  description: 25,
  body: 22,
  bodyPhrase: 40,
  phraseBonus: 55,
  actionEntityCombo: 45,
  fuzzyToken: 8,
  titleToken: 18,
};

/** Minimum score to include a result. */
export const MIN_MATCH_SCORE = 35;

/**
 * Best match if the top result is clearly ahead of the runner-up.
 */
export const BEST_MATCH = {
  minScore: 90,
  minGap: 30,
  minRatio: 1.3,
};

/** Fuzzy match: max edit distance by token length. */
export const FUZZY = {
  minLength: 4,
  maxDistanceShort: 1, // length 4–5
  maxDistanceLong: 2, // length 6+
};
