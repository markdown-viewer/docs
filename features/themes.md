# Themes

Markdown Viewer includes 34 professionally designed themes across 8 categories to match any document type or personal preference. One click switches typography, spacing, tables, and code colours together.

## Theme Categories

### Classic Document

Traditional formal styles for official documents, reports, papers

| Theme | Theme ID | Style |
|-------|----------|-------|
| **Standard** | `default` | 14pt FangSong body with Hei/Kai headings and first-line indent for general documents |
| **Official Document** | `official` | GB/T 9704 official document: San-hao FangSong body with Hei/Kai headings |
| **Academic** | `academic` | Song body with Hei headings, Chinese academic standard |
| **Business** | `business` | Sans-serif body with clear hierarchy for business reports and proposals |
| **Manuscript** | `manuscript` | Soft gray draft-paper surface with compact academic tables for research notes, review drafts, and working papers |
| **Newspaper** | `newspaper` | Traditional newspaper typography, formal and serious |

### Book & Reading

Comfortable long-form reading for novels, magazines, blogs

| Theme | Theme ID | Style |
|-------|----------|-------|
| **Book Publishing** | `palatino` | Palatino font with elegant book publishing style |
| **Long Reading** | `garamond` | Georgia font for comfortable long-form reading |
| **Typewriter** | `typewriter` | Courier New with a compact retro manuscript style |
| **Elegant Literary** | `elegant` | Georgia font with elegant literary style |

### Modern Tech

Clean modern design for technical docs and products

| Theme | Theme ID | Style |
|-------|----------|-------|
| **Technical** | `technical` | Designed for technical documentation with clean minimalist style |
| **Swiss Minimal** | `swiss` | Helvetica style with compact grid structure for clean modern documentation |
| **Minimal** | `minimal` | System font with minimal styling, focus on content itself |
| **VSCode Light** | `vscode` | Mirrors VSCode's built-in Markdown preview (light), with system fonts in the Segoe UI / SF style |

### Creative Expression

Creative styles for blogs, design, creative writing

| Theme | Theme ID | Style |
|-------|----------|-------|
| **Magazine** | `magazine` | Large title contrast with visual impact for creative content |
| **Presentation** | `century` | Century Gothic with display-scale layout for outlines and presentation materials |
| **Handwritten** | `handwritten` | Handwritten-feel type with gentle colors for diaries, essays, and personal notes |
| **Web Display** | `verdana` | Verdana font with clear and sharp screen display |

### Chinese Typography

Typography optimized for Chinese content

| Theme | Theme ID | Style |
|-------|----------|-------|
| **Hei Style** | `heiti` | Hei font with a clear compact style for Chinese reports |
| **Mixed Languages** | `mixed` | Song body with Georgia headings for mixed content |
| **Ink Poetry** | `water` | FangSong with low-saturation ink-gray colors for poetry and Chinese long reads |

### Colorful & Playful

Vibrant playful styles for students and kids

| Theme | Theme ID | Style |
|-------|----------|-------|
| **Rainbow** | `rainbow` | Multi-colored headings for vibrant rainbow style |
| **Candy** | `candy` | Sweet and adorable candy style |

### Nature Colors

Nature-inspired colors for warm visual experience

| Theme | Theme ID | Style |
|-------|----------|-------|
| **Forest Natural** | `forest` | Green for natural and eco-friendly forest style |
| **Ocean Fresh** | `ocean` | Blue-green for fresh and natural ocean style |

### Dark

Dark themes for night reading and developers

| Theme | Theme ID | Style |
|-------|----------|-------|
| **Midnight** | `midnight` | Deep blue night-reading base with editorial hierarchy |
| **Slate** | `slate` | Cool slate tones for tech blogs and product docs |
| **Dracula** | `dracula` | Softened Dracula palette—a developer classic |
| **Nord** | `nord` | Official Nord cool palette for long reads |
| **Solarized Dark** | `solarized-dark` | Solarized Dark with Garamond serif for book-like reading |
| **Gruvbox** | `gruvbox` | Gruvbox Dark palette with retro code vibe |
| **Carbon** | `carbon` | IBM Carbon near-black base with compact layout |
| **Obsidian** | `obsidian` | Catppuccin Mocha mauve base for notes and long reads |
| **VSCode Dark** | `vscode-dark` | Mirrors VSCode's built-in Markdown preview (Dark+ theme) |

### Theme Highlights

- **9 dark themes** for night reading and developer workflows: Midnight, Slate, Dracula, Nord, Solarized Dark, Gruvbox, Carbon, Obsidian, VSCode Dark.
- **5 CJK-first themes**: Hei Style, Mixed Languages, Ink Poetry, Standard, Official Document.
- **Editor-matched themes** — VSCode Light and VSCode Dark mirror the Markdown preview you already read in your editor.
- Every theme ships a matching code-highlighting palette and table style, so exports keep the same look as the preview.

---

## How to Switch Themes

### Method 1: Toolbar

1. Click the **Theme** button in the toolbar
2. Browse available themes, grouped by category
3. Click to apply — changes instantly

### Method 2: Popup Menu

1. Click the Markdown Viewer extension icon
2. Select a theme from the dropdown
3. The document updates immediately

### Method 3: Settings or CLI

The theme ID is what you store in settings or pass to the CLI:

```bash
# Node.js CLI
npm run documd -- notes.md --theme technical
```

---

## Theme Anatomy

Each theme controls:

### Typography

- **Body Font** — Main text font family and size
- **Heading Fonts** — H1-H6 font styles
- **Code Font** — Monospace font for code blocks
- **Line Height** — Spacing between lines

### Spacing

- **Paragraph spacing** — Space between paragraphs
- **Heading spacing** — Space before/after headings
- **List spacing** — Space between list items

### Code Blocks

- **Code theme** — Syntax highlighting colors
- **Background** — Code block background color

### Tables

- **Table style** — Border style and cell formatting

---

## Theme Examples

### Standard Theme

```
Theme ID: default
Body: FangSong
Table style: grid
Code theme: light-clean
Best for: 14pt FangSong body with Hei/Kai headings and first-line indent for general documents
```

### Business Theme

```
Theme ID: business
Body: Arial
Table style: professional
Code theme: business-contrast
Best for: Sans-serif body with clear hierarchy for business reports and proposals
```

### Academic Theme

```
Theme ID: academic
Body: SimSun
Table style: academic
Code theme: light-clean
Best for: Song body with Hei headings, Chinese academic standard
```

### Midnight Theme

```
Theme ID: midnight
Body: Helvetica Neue
Table style: modern-tech
Code theme: midnight-code
Best for: Deep blue night-reading base with editorial hierarchy
```

---

## Theme Recommendations

| Document Type | Recommended Theme |
|--------------|-------------------|
| Business reports | Business |
| Technical docs | Technical |
| Academic papers | Academic |
| General use | Standard |
| Official Chinese documents | Official Document |
| Long reading | Book Publishing, Long Reading |
| Screen/web | Web Display, VSCode Light |
| Chinese docs | Hei Style, Mixed Languages |
| Creative writing | Typewriter, Handwritten |
| Night reading | Midnight, Nord, VSCode Dark |

---

## Code Highlighting Themes

Each document theme ships a matching code highlighting palette:

| Code Theme | Description | Used By |
|------------|-------------|---------|
| `light-clean` | Clean light color scheme for daily use | Standard, Official Document, Academic, Manuscript, Swiss Minimal, Minimal, Presentation, Hei Style, Forest Natural |
| `business-contrast` | Business contrast colors for presentation | Business |
| `warm-book` | Warm book-style colors for long reading | Newspaper, Book Publishing, Long Reading, Typewriter, Handwritten, Mixed Languages, Ink Poetry |
| `colorful` | Colorful scheme, vibrant and friendly | Elegant Literary, Rainbow, Candy |
| `cool-modern` | Modern cool-toned colors, professional and clean | Technical, Magazine, Web Display, Ocean Fresh |
| `vscode-light-code` | VSCode default Light+ semantic highlight palette | VSCode Light |
| `midnight-code` | Cool low-saturation code palette for midnight/slate/carbon | Midnight, Slate, Carbon |
| `dracula-code` | Dracula constants for dracula-soft and obsidian themes | Dracula, Obsidian |
| `nord-code` | Nord official highlight palette for nord-dark theme | Nord |
| `solarized-dark-code` | Retro warm-dark palette for solarized-dark and gruvbox-dark | Solarized Dark, Gruvbox |
| `vscode-dark-code` | VSCode default Dark+ semantic highlight palette | VSCode Dark |

---

## WYSIWYG Preview

The preview in your browser matches the exported document:

- Same fonts
- Same spacing
- Same code highlighting
- Same table styling

No surprises when you export.

---

## Tips for Choosing Themes

### Consider Your Audience

- **Formal/Business** → Standard, Business
- **Academic/Research** → Academic, Long Reading
- **Technical** → Technical, Swiss Minimal
- **Creative** → Typewriter, Handwritten

### Consider the Content

- **Code-heavy** → Technical, VSCode Dark
- **Math-heavy** → Academic, Standard
- **Text-heavy** → Book Publishing, Long Reading

### Consider the Medium

- **Print** → Long Reading, Book Publishing (serif)
- **Screen** → Web Display, Presentation (sans-serif)
- **Both** → Standard, Business

---

## Custom Themes

Currently, themes cannot be customized from the UI. However, the 34 built-in themes across 8 categories cover most use cases — and each preset is a readable JSON file in `src/themes/presets/` if you want to clone one.

**Coming soon:** Custom theme support for advanced users.

---

## Theme Compatibility

All themes export correctly to:

- ✅ Microsoft Word 2013+
- ✅ WPS Office
- ✅ LibreOffice
- ✅ Google Docs (when opened)
- ✅ Single-file HTML and EPUB exports

Font substitution may occur if the exact font isn't installed on the target system, but the document will remain readable.
