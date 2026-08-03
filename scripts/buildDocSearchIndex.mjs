/**
 * Builds a local content search index from all docs markdown and MDX files.
 * Run via: node scripts/buildDocSearchIndex.mjs
 * Merged at search-time with curated DOC_INDEX metadata.
 */
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');
const OUT_FILE = path.join(ROOT, 'src/utils/search/generatedContentIndex.js');

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) {
    return files;
  }
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (/\.mdx?$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) {
    return {meta: {}, body: raw};
  }
  const end = raw.indexOf('\n---', 3);
  if (end === -1) {
    return {meta: {}, body: raw};
  }
  const fm = raw.slice(3, end).trim();
  const body = raw.slice(end + 4);
  const meta = {};
  for (const line of fm.split('\n')) {
    const match = line.match(/^(\w+)\s*:\s*(.*)$/);
    if (!match) continue;
    const key = match[1];
    let value = match[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key === 'keywords' && value.startsWith('[')) {
      try {
        meta.keywords = JSON.parse(value.replace(/'/g, '"'));
      } catch {
        meta.keywords = value
          .replace(/[\[\]]/g, '')
          .split(',')
          .map((k) => k.trim().replace(/^["']|["']$/g, ''))
          .filter(Boolean);
      }
      continue;
    }
    meta[key] = value;
  }
  return {meta, body};
}

function stripMarkdown(text) {
  return text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[[^\]]*\]\([^)]+\)/g, (m) => {
      const label = m.match(/^\[([^\]]*)\]/);
      return label ? label[1] : ' ';
    })
    .replace(/<[^>]+>/g, ' ')
    .replace(/^import\s.+$/gm, ' ')
    .replace(/^export\s.+$/gm, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_~>|-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractHeadings(text) {
  const headings = [];
  for (const match of text.matchAll(/^#{1,6}\s+(.+)$/gm)) {
    const heading = match[1].replace(/[#*`]/g, '').trim();
    if (heading) {
      headings.push(heading);
    }
  }
  return headings;
}

function fileToDocPath(filePath) {
  const rel = path.relative(DOCS_DIR, filePath).replace(/\\/g, '/');
  const withoutExt = rel.replace(/\.mdx?$/i, '');
  const parts = withoutExt.split('/');
  // Docusaurus category-index convention: Folder/Folder.md → /docs/.../Folder
  if (
    parts.length >= 2 &&
    parts[parts.length - 1].toLowerCase() === parts[parts.length - 2].toLowerCase()
  ) {
    return `/docs/${parts.slice(0, -1).join('/')}`;
  }
  return `/docs/${withoutExt}`;
}

function titleFromPath(docPath) {
  const slug = docPath.split('/').pop() || 'Guide';
  return slug
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildIntentsFromHeadings(headings, title) {
  const intents = [];
  for (const heading of headings.slice(0, 12)) {
    const clean = heading.replace(/^\d+\.\s*/, '').trim();
    if (clean.length < 4 || clean.length > 80) continue;
    intents.push(clean.toLowerCase());
    intents.push(`how to ${clean.toLowerCase()}`);
  }
  if (title) {
    intents.push(`what is ${title.toLowerCase()}`);
    intents.push(`${title.toLowerCase()} guide`);
  }
  return [...new Set(intents)].slice(0, 24);
}

function buildEntry(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const {meta, body} = parseFrontmatter(raw);
  const headings = extractHeadings(body);
  const plain = stripMarkdown(body);
  const to = fileToDocPath(filePath);
  const title = meta.title || headings[0] || titleFromPath(to);
  const description =
    meta.description ||
    plain.slice(0, 180).replace(/\s+\S*$/, '') ||
    `Documentation for ${title}`;

  const keywordSet = new Set([
    ...(Array.isArray(meta.keywords) ? meta.keywords : []),
    ...title.toLowerCase().split(/\s+/).filter((w) => w.length > 2),
    ...headings
      .flatMap((h) => h.toLowerCase().split(/\s+/))
      .filter((w) => w.length > 3)
      .slice(0, 40),
  ]);

  return {
    label: title,
    title,
    to,
    description,
    body: plain.slice(0, 4000),
    headings,
    keywords: [...keywordSet].slice(0, 60),
    intents: buildIntentsFromHeadings(headings, title),
    aliases: headings.slice(0, 8).map((h) => h.toLowerCase()),
    source: 'generated',
  };
}

function main() {
  const files = walk(DOCS_DIR);
  const entries = files
    .map(buildEntry)
    .filter((entry) => entry.title && entry.to)
    .sort((a, b) => a.to.localeCompare(b.to));

  const banner = `/**
 * AUTO-GENERATED by scripts/buildDocSearchIndex.mjs
 * Do not edit by hand. Re-run: npm run index:docs
 * ${entries.length} documents indexed from docs/
 */
`;

  const content = `${banner}export const GENERATED_CONTENT_INDEX = ${JSON.stringify(
    entries,
    null,
    2,
  )};\n`;

  fs.mkdirSync(path.dirname(OUT_FILE), {recursive: true});
  fs.writeFileSync(OUT_FILE, content, 'utf8');
  console.log(`Indexed ${entries.length} docs → ${path.relative(ROOT, OUT_FILE)}`);
}

main();
