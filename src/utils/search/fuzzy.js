import {FUZZY} from './config/weights';

export function levenshtein(a, b) {
  if (a === b) {
    return 0;
  }
  if (!a.length) {
    return b.length;
  }
  if (!b.length) {
    return a.length;
  }

  const rows = a.length + 1;
  const cols = b.length + 1;
  const matrix = Array.from({length: rows}, () => new Array(cols).fill(0));

  for (let i = 0; i < rows; i += 1) {
    matrix[i][0] = i;
  }
  for (let j = 0; j < cols; j += 1) {
    matrix[0][j] = j;
  }

  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }

  return matrix[a.length][b.length];
}

function maxDistanceFor(token) {
  if (token.length < FUZZY.minLength) {
    return 0;
  }
  if (token.length <= 5) {
    return FUZZY.maxDistanceShort;
  }
  return FUZZY.maxDistanceLong;
}

/** Exact or near-exact token equality. */
export function tokensMatch(a, b) {
  if (!a || !b) {
    return false;
  }
  if (a === b) {
    return true;
  }
  const max = Math.max(maxDistanceFor(a), maxDistanceFor(b));
  if (!max) {
    return false;
  }
  if (Math.abs(a.length - b.length) > max) {
    return false;
  }
  return levenshtein(a, b) <= max;
}

export function tokenInList(token, list) {
  return list.some((item) => tokensMatch(token, item));
}

export function textHasToken(text, token) {
  if (!text || !token) {
    return false;
  }
  if (text.includes(token)) {
    return true;
  }
  const parts = text.split(/\s+/);
  return parts.some((part) => tokensMatch(part, token));
}
