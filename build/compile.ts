#!/usr/bin/env tsx
// Compile every equation in md/ to a standalone interactive HTML page,
// plus an index.html whose order and sections come from md/index.md.
//
// Usage: tsx build/compile.ts [--md md] [--out html] [--scheme vibrant]

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { basename, join } from 'path';
import { parseArgs } from 'util';
import { parseContent } from '../app/src/utils/parser.ts';
import { exportToHTML } from '../app/src/export/htmlExport.ts';
import { escapeHTML } from '../app/src/export/escape.ts';
import { colorSchemes } from '../app/src/utils/colorSchemes.ts';

const { values: args } = parseArgs({
  options: {
    md: { type: 'string', default: 'md' },
    out: { type: 'string', default: 'html' },
    scheme: { type: 'string', default: 'vibrant' },
  },
});

const mdDir = args.md!;
const outDir = args.out!;
const scheme = colorSchemes[args.scheme!];
if (!scheme) {
  console.error(`Unknown scheme "${args.scheme}". Available: ${Object.keys(colorSchemes).join(', ')}`);
  process.exit(1);
}

const INDEX_FILE = 'index.md';

interface Equation {
  file: string; // e.g. mean.md
  slug: string; // e.g. mean
  title: string;
  label: string; // display label on the index page
  html: string; // full standalone page
  equationHtml: string; // rendered equation only, for the index cards
}

interface Section {
  heading: string | null;
  intro: string[];
  files: { file: string; label: string | null }[];
}

interface IndexSpec {
  title: string;
  intro: string[];
  sections: Section[];
}

// --- Parse md/index.md -------------------------------------------------------
// Format:
//   # Page title
//   Intro paragraph(s)
//   ## Section heading        (optional)
//   - mean.md                 (one list item per equation, in display order)
//   - [Custom label](mean.md)
function parseIndex(markdown: string): IndexSpec {
  const spec: IndexSpec = { title: 'Equations', intro: [], sections: [] };
  let current: Section = { heading: null, intro: [], files: [] };
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    const text = paragraph.join(' ');
    if (spec.sections.length === 0 && current.heading === null && current.files.length === 0) {
      spec.intro.push(text);
    } else {
      current.intro.push(text);
    }
    paragraph = [];
  };

  for (const raw of markdown.split('\n')) {
    const line = raw.trim();
    let m: RegExpMatchArray | null;
    if ((m = line.match(/^#\s+(.+)$/))) {
      flushParagraph();
      spec.title = m[1];
    } else if ((m = line.match(/^##\s+(.+)$/))) {
      flushParagraph();
      if (current.heading !== null || current.files.length > 0) spec.sections.push(current);
      current = { heading: m[1], intro: [], files: [] };
    } else if ((m = line.match(/^[-*]\s+(?:\[(.+?)\]\((.+?)\)|(\S+))\s*$/))) {
      flushParagraph();
      const file = basename(m[2] ?? m[3]);
      current.files.push({ file: file.endsWith('.md') ? file : `${file}.md`, label: m[1] ?? null });
    } else if (line === '') {
      flushParagraph();
    } else {
      paragraph.push(line);
    }
  }
  flushParagraph();
  if (current.heading !== null || current.files.length > 0) spec.sections.push(current);
  return spec;
}

// --- Compile each equation ---------------------------------------------------
// The app renders inline math in definitions but not markdown, so turn `code`
// spans in the definition sections into monospace math: $\texttt{code}$
function codeSpansToMath(markdown: string): string {
  const firstDefinition = markdown.search(/^## \./m);
  if (firstDefinition === -1) return markdown;
  const definitions = markdown.slice(firstDefinition).replace(/`([^`\n]+)`/g, (_, code: string) => {
    const escaped = code.replace(/\\/g, '\\textbackslash{}').replace(/([_#%&{}$])/g, '\\$1');
    return `$\\texttt{${escaped}}$`;
  });
  return markdown.slice(0, firstDefinition) + definitions;
}

// Colors follow the order in which terms first appear in the equation. A line
//   <!-- term-order: mae norm sum y pred abs -->
// overrides that order, so the same quantity can get the same color on related
// pages. Terms not listed keep their relative order after the listed ones.
const TERM_ORDER = /^<!--\s*term-order:\s*(.*?)\s*-->[ \t]*\n?/m;

function applyTermOrder(order: string[], parsed: ReturnType<typeof parseContent>) {
  const unknown = order.filter((t) => !parsed.termOrder.includes(t));
  if (unknown.length > 0) {
    parsed.errors.push(`term-order lists terms not marked in the equation: ${unknown.join(', ')}`);
    return;
  }
  parsed.termOrder = [...order, ...parsed.termOrder.filter((t) => !order.includes(t))];
}

function compile(file: string): Equation | null {
  let markdown = codeSpansToMath(readFileSync(join(mdDir, file), 'utf-8'));
  const termOrder = markdown.match(TERM_ORDER)?.[1].split(/[\s,]+/).filter(Boolean);
  markdown = markdown.replace(TERM_ORDER, '');
  const parsed = parseContent(markdown);
  if (termOrder) applyTermOrder(termOrder, parsed);
  parsed.warnings.forEach((w) => console.warn(`  ! ${file}: ${w}`));
  if (parsed.errors.length > 0) {
    parsed.errors.forEach((e) => console.error(`  ✗ ${file}: ${e}`));
    return null;
  }
  const html = exportToHTML(parsed, scheme);
  const match = html.match(/<div class="equation-container">\s*([\s\S]*?)\s*<\/div>\s*<div class="description">/);
  return {
    file,
    slug: file.replace(/\.md$/, ''),
    title: parsed.title,
    label: parsed.title,
    html,
    equationHtml: match ? match[1] : '',
  };
}

// Add "all equations" and prev/next links to a compiled page
function addNav(eq: Equation, prev: Equation | undefined, next: Equation | undefined): string {
  const link = (e: Equation | undefined, arrow: string, before: boolean) =>
    e ? `<a href="${e.slug}.html">${before ? arrow + ' ' : ''}${escapeHTML(e.label)}${before ? '' : ' ' + arrow}</a>` : '<span></span>';
  const nav = `
  <nav class="eq-nav">
    ${link(prev, '←', true)}
    <a href="index.html">All equations</a>
    ${link(next, '→', false)}
  </nav>`;
  const style = `
    .eq-nav { display: flex; justify-content: space-between; gap: 1rem; font-size: 0.9rem; margin-bottom: 1.5rem; }
    .eq-nav a { color: #6b7280; text-decoration: none; }
    .eq-nav a:hover { color: #2563eb; }

    /* Phones: smaller equations, and sideways scrolling for any that still
       don't fit (auto margins centre an equation that fits, and keep its
       left edge reachable when it overflows) */
    @media (max-width: 600px) {
      body { padding: 1.25rem 1rem; }
      .equation-container { justify-content: flex-start; overflow-x: auto; padding: 1rem 0; margin-bottom: 1rem; }
      .equation-container .katex-display { margin: 0 auto; }
      .equation-container .katex { font-size: 1.1rem; }
    }
  </style>`;
  return eq.html.replace('</style>', style).replace('<body>', `<body>${nav}`);
}

// --- Index page ----------------------------------------------------------------
function renderIndex(spec: IndexSpec, sections: { heading: string | null; intro: string[]; equations: Equation[] }[]): string {
  const paragraphs = (ps: string[]) => ps.map((p) => `<p class="intro">${escapeHTML(p)}</p>`).join('\n');
  const body = sections
    .map((s) => {
      const cards = s.equations
        .map(
          (eq) => `
      <a class="card" href="${eq.slug}.html">
        <h3>${escapeHTML(eq.label)}</h3>
        <div class="eq">${eq.equationHtml}</div>
      </a>`
        )
        .join('');
      return `
    <section>
      ${s.heading ? `<h2>${escapeHTML(s.heading)}</h2>` : ''}
      ${paragraphs(s.intro)}
      <div class="cards">${cards}
      </div>
    </section>`;
    })
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHTML(spec.title)}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.css" crossorigin="anonymous">
  <style>
    :root {
      --bg-color: #ffffff;
      --text-color: #1f2937;
      --muted-color: #6b7280;
      --border-color: #d1d5db;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'ETBembo', Palatino, 'Palatino Linotype', 'Book Antiqua', Georgia, serif;
      background-color: var(--bg-color);
      color: var(--text-color);
      line-height: 1.6;
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
    h1 { font-size: 2rem; font-weight: 400; margin-bottom: 1rem; }
    h2 { font-size: 1.35rem; font-weight: 400; margin: 2.5rem 0 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color); }
    .intro { color: var(--muted-color); margin-bottom: 1rem; }
    .cards { display: flex; flex-direction: column; gap: 0.75rem; }
    .card {
      display: block;
      color: inherit;
      text-decoration: none;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      padding: 1rem 1.25rem;
    }
    .card:hover, .card:focus-visible { border-color: var(--text-color); }
    .card h3 { font-size: 1rem; font-weight: 600; margin-bottom: 0.25rem; }
    .card .eq { overflow-x: auto; overflow-y: hidden; }
    .card .eq .katex { font-size: 1.3rem; }
    .card .eq .katex-display { margin: 0.5rem 0; }
    .footer { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-color); font-size: 0.875rem; color: var(--muted-color); text-align: center; }
    .footer a { color: inherit; }
  </style>
</head>
<body>
  <h1>${escapeHTML(spec.title)}</h1>
  ${paragraphs(spec.intro)}
${body}
  <div class="footer">
    <p>Created with <a href="https://github.com/stared/equations-explained-colorfully" target="_blank">Equations Explained Colorfully</a></p>
  </div>
</body>
</html>
`;
}

// --- Main ------------------------------------------------------------------------
const mdFiles = readdirSync(mdDir).filter((f) => f.endsWith('.md') && f !== INDEX_FILE).sort();
const indexPath = join(mdDir, INDEX_FILE);
const spec: IndexSpec = existsSync(indexPath)
  ? parseIndex(readFileSync(indexPath, 'utf-8'))
  : { title: 'Equations', intro: [], sections: [] };

let failed = false;
const compiled = new Map<string, Equation>();
for (const file of mdFiles) {
  const eq = compile(file);
  if (eq) compiled.set(file, eq);
  else failed = true;
}

// Resolve index order; equations not listed in index.md go into a trailing section
const listed = new Set<string>();
const sections = spec.sections.map((s) => ({
  heading: s.heading,
  intro: s.intro,
  equations: s.files.flatMap(({ file, label }) => {
    if (!mdFiles.includes(file)) {
      console.error(`  ✗ ${INDEX_FILE}: lists ${file}, which does not exist in ${mdDir}/`);
      failed = true;
      return [];
    }
    if (listed.has(file)) console.warn(`  ! ${INDEX_FILE}: ${file} is listed more than once`);
    listed.add(file);
    const eq = compiled.get(file);
    if (!eq) return [];
    if (label) eq.label = label;
    return [eq];
  }),
}));
const unlisted = mdFiles.filter((f) => !listed.has(f) && compiled.has(f));
if (unlisted.length > 0) {
  if (existsSync(indexPath)) console.warn(`  ! ${INDEX_FILE}: not listed, appended at the end: ${unlisted.join(', ')}`);
  sections.push({
    heading: spec.sections.length > 0 ? 'Other' : null,
    intro: [],
    equations: unlisted.map((f) => compiled.get(f)!),
  });
}

mkdirSync(outDir, { recursive: true });
const ordered = sections.flatMap((s) => s.equations);
ordered.forEach((eq, i) => {
  writeFileSync(join(outDir, `${eq.slug}.html`), addNav(eq, ordered[i - 1], ordered[i + 1]));
  console.log(`  ✓ ${eq.file} → ${outDir}/${eq.slug}.html`);
});
writeFileSync(join(outDir, 'index.html'), renderIndex(spec, sections));
console.log(`  ✓ ${INDEX_FILE} → ${outDir}/index.html (${ordered.length} equations, scheme: ${args.scheme})`);

if (failed) process.exit(1);
