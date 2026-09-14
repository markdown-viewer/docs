# Features Overview

Markdown Viewer is packed with features designed to make your Markdown-to-document workflow seamless and professional.

## Core Features

### 📊 Diagram Conversion

Transform code-based diagrams into high-resolution images automatically:

- **[PlantUML](diagrams/plantuml.md)** — Sequence diagrams, class diagrams, activity diagrams, use case diagrams
- **[Mermaid](diagrams/mermaid.md)** — Flowcharts, sequence diagrams, class diagrams, and more
- **[Vega/Vega-Lite](diagrams/vega.md)** — Data visualization charts
- **[drawio](diagrams/drawio.md)** — Architecture diagrams, network topologies, UML
- **[Canvas](diagrams/canvas.md)** — Mind maps, knowledge graphs, concept maps
- **[Infographic](diagrams/infographic.md)** — Statistical charts and infographics
- **[Graphviz DOT](diagrams/graphviz.md)** — Network graphs, state machines, dependency diagrams
- **[ECharts](diagrams/echarts.md)** — Presentation-grade charts, dashboards, gauges, radar charts

### 📐 Math Formulas

[LaTeX formulas](formulas.md) are converted to **native Word equations** — fully editable, not images.

```latex
$$
E = mc^2
$$
```

### 🎨 Professional Themes

[34 built-in themes](themes.md) across 8 categories for every scenario:

| Category | Themes |
|----------|--------|
| Classic Document | Standard, Official Document, Academic, Business, Manuscript, Newspaper |
| Book & Reading | Book Publishing, Long Reading, Typewriter, Elegant Literary |
| Modern Tech | Technical, Swiss Minimal, Minimal, VSCode Light |
| Creative Expression | Magazine, Presentation, Handwritten, Web Display |
| Chinese Typography | Hei Style, Mixed Languages, Ink Poetry |
| Colorful & Playful | Rainbow, Candy |
| Nature Colors | Forest Natural, Ocean Fresh |
| Dark | Midnight, Slate, Dracula, Nord, Solarized Dark, Gruvbox, Carbon, Obsidian, VSCode Dark |

### 💻 Code Highlighting

[Syntax highlighting](code-highlight.md) for **100+ programming languages** with beautiful color schemes.

### 📖 Reading Mode

[Enhanced reading experience](reading-mode.md):

- Three layout modes
- Flexible zoom (50%-400%)
- Auto-generated table of contents
- Position memory
- Reading history

### 📚 GitBook Books

[Whole-book browsing and export](gitbook-books.md):

- SUMMARY.md navigation panel with in-page chapter switching
- Export an entire book to a single **DOCX** (title page, TOC, chapters on new pages)
- Export an entire book to a single **EPUB** (each SUMMARY page becomes a chapter)
- Export an entire book to **PDF** via browser print

---

## Full Markdown Support

Markdown Viewer supports the complete Markdown specification plus extensions:

### Standard Markdown

- Headings (H1-H6)
- Paragraphs
- **Bold** and *Italic* text
- ~~Strikethrough~~
- Ordered and unordered lists
- Task lists with checkboxes
- Blockquotes
- Code (inline and blocks)
- Tables
- Links and images
- Horizontal rules

### GitHub Flavored Markdown (GFM)

- Tables with alignment
- Task lists
- Autolinks
- Strikethrough
- Emoji shortcodes

### Extended Syntax

- PlantUML diagrams
- Mermaid diagrams
- Vega/Vega-Lite charts
- drawio diagrams
- Canvas diagrams
- Infographic syntax
- Graphviz DOT graphs
- ECharts charts
- LaTeX math (inline and block)
- Footnotes
- Definition lists

---

## Performance Features

### Smart Caching

| Scenario | Load Time |
|----------|-----------|
| First open | ~5 seconds |
| Cached open | <1 second |
| Text change | Instant |
| Diagram change | Only changed diagrams re-render |

### Incremental Rendering

- Text displays immediately
- Diagrams render in background
- Progress indicator shows status

### Cache Management

- Default: 1000 cached items (~500MB)
- Configurable limit
- Easy clear option in settings

---

## Export Capabilities

### Word Export (.docx)

- One-click export
- Preserves all formatting
- Diagrams as high-resolution images
- Formulas as editable equations
- Compatible with Word 2013+, WPS Office

### Other Exports

| Output | What you get | Where to find it |
|--------|--------------|------------------|
| **PDF** | Print-ready pages using the shared print stylesheet | Export menu → Print to PDF |
| **HTML** | One self-contained page for publishing or archiving | Export menu → Export to HTML |
| **EPUB** | A single ebook, or a whole GitBook exported as one EPUB | Export menu → Export to EPUB, or SUMMARY panel → Export book to EPUB |
| **XLSX** | A Markdown table saved as a spreadsheet | Right-click a table → Save as Excel (.xlsx) |
| **PNG / SVG** | Diagram exports for reuse outside the document | Right-click a rendered diagram |
| **Markdown** | The raw source file | Export menu → Save File |

### What's Converted

| Element | Export Result |
|---------|-------------|
| Headings | Styled headings |
| Lists | Proper list formatting |
| Tables | Formatted tables with borders (also exportable as XLSX) |
| Code blocks | Syntax highlighted |
| Images | Embedded high-quality |
| Mermaid / PlantUML / DOT / Vega / ECharts / drawio / Canvas / Infographic | High-resolution images |
| LaTeX | Native Word equations |

---

## Keyboard Shortcuts

| Action | Windows/Linux | macOS |
|--------|---------------|-------|
| Export to Word | `Ctrl + S` | `Cmd + S` |
| Toggle TOC | `Ctrl + B` | `Cmd + B` |
| Zoom in | `Ctrl + +` | `Cmd + +` |
| Zoom out | `Ctrl + -` | `Cmd + -` |
| Reset zoom | `Ctrl + 0` | `Cmd + 0` |

---

## Privacy & Security

- ✅ 100% local processing
- ✅ No data uploaded
- ✅ No tracking or analytics
- ✅ Open source code
- ✅ Manifest V3 compliant

---

## Explore Features

Dive deeper into each feature:

- [PlantUML Diagrams](diagrams/plantuml.md)
- [Mermaid Diagrams](diagrams/mermaid.md)
- [Vega/Vega-Lite Charts](diagrams/vega.md)
- [drawio Diagrams](diagrams/drawio.md)
- [Canvas Diagrams](diagrams/canvas.md)
- [Infographic](diagrams/infographic.md)
- [Graphviz DOT](diagrams/graphviz.md)
- [ECharts](diagrams/echarts.md)
- [Math Formulas](formulas.md)
- [Themes](themes.md)
- [Code Highlighting](code-highlight.md)
- [Reading Mode](reading-mode.md)
