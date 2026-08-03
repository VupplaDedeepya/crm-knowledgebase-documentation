import React from 'react';

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Highlight matching phrases (preferred) or significant tokens.
 * Avoids painting every repeated short keyword across the description.
 */
export function highlightMatches(text, query, matchPhrases = []) {
  const source = text || '';
  if (!source) {
    return source;
  }

  const phrases = (matchPhrases || [])
    .map((phrase) => String(phrase || '').trim())
    .filter((phrase) => phrase.length > 1)
    .sort((a, b) => b.length - a.length);

  let patterns = phrases;

  if (!patterns.length) {
    const trimmed = (query || '').trim();
    if (!trimmed) {
      return source;
    }
    patterns = trimmed
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter((token) => token.length > 2);
  }

  if (!patterns.length) {
    return source;
  }

  // Prefer longest phrases first; only highlight first occurrence of each
  const flags = [];
  const lower = source.toLowerCase();
  for (const phrase of patterns) {
    const idx = lower.indexOf(phrase.toLowerCase());
    if (idx === -1) {
      continue;
    }
    flags.push({start: idx, end: idx + phrase.length});
    break; // highlight one best phrase span in the string
  }

  // If no phrase found, highlight up to two distinct token hits
  if (!flags.length) {
    const tokens = patterns
      .flatMap((p) => p.split(/\s+/))
      .filter((t) => t.length > 2);
    const used = new Set();
    for (const token of tokens) {
      const idx = lower.indexOf(token.toLowerCase());
      if (idx === -1 || used.has(token.toLowerCase())) {
        continue;
      }
      used.add(token.toLowerCase());
      flags.push({start: idx, end: idx + token.length});
      if (flags.length >= 2) {
        break;
      }
    }
  }

  if (!flags.length) {
    return source;
  }

  flags.sort((a, b) => a.start - b.start);
  const merged = [];
  for (const span of flags) {
    const last = merged[merged.length - 1];
    if (last && span.start <= last.end) {
      last.end = Math.max(last.end, span.end);
    } else {
      merged.push({...span});
    }
  }

  const nodes = [];
  let cursor = 0;
  merged.forEach((span, index) => {
    if (span.start > cursor) {
      nodes.push(
        <React.Fragment key={`t-${index}`}>
          {source.slice(cursor, span.start)}
        </React.Fragment>,
      );
    }
    nodes.push(
      <mark key={`m-${index}`} className="docSearchMark">
        {source.slice(span.start, span.end)}
      </mark>,
    );
    cursor = span.end;
  });
  if (cursor < source.length) {
    nodes.push(
      <React.Fragment key="tail">{source.slice(cursor)}</React.Fragment>,
    );
  }
  return nodes;
}

// Keep escapeRegExp available for tests / future use
export {escapeRegExp};
