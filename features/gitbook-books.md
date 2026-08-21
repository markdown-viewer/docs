# GitBook Books

Markdown Viewer detects GitBook-style books (any collection of Markdown pages
with a `SUMMARY.md` at the root or in a parent folder) and provides:

1. **In-page navigation** — a SUMMARY panel shows the book's table of contents;
   clicking a chapter loads it without a page refresh.
2. **Whole-book export** — export the entire book to a single DOCX, EPUB or PDF,
   with a title page, table of contents, and every chapter starting on a new page.

## How it works

When you open any Markdown file (`*.md`), the extension walks up the folder
tree (up to 20 levels) looking for `SUMMARY.md` / `summary.md`. If found, the
SUMMARY panel appears next to the document.

| Source | Supported |
|--------|-----------|
| GitHub (raw.githubusercontent.com) | ✅ |
| Gitee / GitLab / other Markdown hosts | ✅ |
| Local files (`file://`) | ✅ |
| GitBook.com hosted books (no SUMMARY.md exposed) | ❌ |

## Whole-book export

When a book is detected, an **Export book** button (dropdown with **DOCX**,
**EPUB** and **PDF** options) appears in the SUMMARY panel header. It is tied
to the panel: hiding the panel hides the button, and it only appears when a
book is found.

### Export book to DOCX

A single `.docx` containing:

- **Title page** — the book title taken from SUMMARY.md's own heading
  (omitted when there is no suitable title; the folder name is never used)
- **Table of contents** — Word field (`[toc]`), updated when the document is
  opened in Word
- **All chapters** — fetched in SUMMARY order, each starting on a new page

Each page keeps its relative images and links (resolved per page), LaTeX math
becomes editable Word equations, code blocks keep syntax highlighting, and
footnote numbering is continuous across chapters. Pages that fail to fetch
(e.g. private repos, 403) are skipped and reported at the end.

### Export book to EPUB

A single `.epub` (EPUB 3) where every SUMMARY page becomes its own chapter,
readable in Apple Books, Calibre, Kindle apps and other e-readers:

- **Table of contents** — reader-native navigation (`nav.xhtml`) built from
  the SUMMARY order
- **Math** — KaTeX formulas with the KaTeX fonts embedded, so equations
  render offline without a CDN
- **Images & diagrams** — embedded into the book (no network needed while
  reading); mermaid/plantuml diagrams are included as rendered graphics
- **Themes** — the current viewer theme's fonts, colors and layout carry over

Pages that fail to fetch (e.g. private repos, 403) are skipped and reported
at the end, same as DOCX export.

### Export book to PDF

Renders every chapter with the same pipeline as the viewer (KaTeX math,
diagrams, code highlighting, themes), then opens the browser print dialog —
choose **Save as PDF**. Each chapter starts on a new page, and diagrams/images
are kept intact across page breaks.

### Notes

- Books with 300+ pages may take a while; the button shows progress and the
  export can be cancelled.
- Only pages listed in `SUMMARY.md` are exported.
- The main toolbar export menu (current page) is unaffected.
