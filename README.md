# Data Science, Explained Colorfully

Interactive, colour-coded explanations of the core equations of statistics and machine learning, following the Data Science course week by week. Built with [Equations Explained Colorfully](https://github.com/stared/equations-explained-colorfully).

- `md/` – one Markdown file per equation ([content format](https://github.com/stared/equations-explained-colorfully/blob/main/README.md#content-format))
- `md/index.md` – order and sections of the index page; reorder by moving the `- file.md` lines
- `html/` – the built pages (`index.html` plus one page per equation)
- `build/compile.ts` – renders all equations with the app's own parser and HTML exporter
- `patches/hover-fix.patch` – makes terms under square roots and in denominators hoverable; applied on top of the pinned upstream revision

## Usage

Requires [just](https://github.com/casey/just), Node.js, and [uv](https://github.com/astral-sh/uv) for `just serve`.

```bash
just install   # clone the app into app/, apply the patch, install dependencies
just build     # compile md/ → html/ (optionally: just build accessible)
just serve     # build and serve at http://localhost:8000
just dev       # the app's live editor
```
