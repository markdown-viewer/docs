# Platform Feature Comparison

This page provides a comprehensive comparison of features available across all Markdown Viewer platforms.

## Quick Reference Matrix

| Feature | Chrome | Firefox | VS Code | Mobile |
|---------|:------:|:-------:|:-------:|:------:|
| **Markdown Rendering** | ✅ | ✅ | ✅ | ✅ |
| **GitHub Flavored Markdown** | ✅ | ✅ | ✅ | ✅ |
| **Math Formulas (KaTeX)** | ✅ | ✅ | ✅ | ✅ |
| **Code Syntax Highlighting** | ✅ | ✅ | ✅ | ✅ |
| **PlantUML Diagrams** | ✅ | ✅ | ✅ | ✅ |
| **Mermaid Diagrams** | ✅ | ✅ | ✅ | ✅ |
| **Vega/Vega-Lite Charts** | ✅ | ✅ | ✅ | ✅ |
| **drawio Diagrams** | ✅ | ✅ | ✅ | ✅ |
| **Canvas Diagrams** | ✅ | ✅ | ✅ | ✅ |
| **Infographics** | ✅ | ✅ | ✅ | ✅ |
| **Graphviz DOT Diagrams** | ✅ | ✅ | ✅ | ✅ |
| **Word Export (DOCX)** | ✅ | ✅ | ✅ | ✅ |
| **Table of Contents** | ✅ | ✅ | ✅ | ✅ |
| **29 Themes** | ✅ | ✅ | ✅ | ✅ |
| **28 Languages** | ✅ | ✅ | ✅ | ✅ |
| **Render Caching** | ✅ | ✅ | ✅ | ✅ |
| **History/Recent Files** | ✅ | ✅ | ❌ | ✅ |
| **Local File Access** | ✅ | ✅ | ✅ | ✅ |
| **Online File Access** | ✅ | ✅ | ❌ | ❌ |
| **Print Function** | ✅ | ✅ | ❌ | ❌ |
| **Native Share** | ❌ | ❌ | ❌ | ✅ |
| **Scroll Sync with Editor** | ❌ | ❌ | ✅ | ❌ |
| **Editor Integration** | ❌ | ❌ | ✅ | ❌ |
| **Standalone Files** | ✅ | ✅ | ❌ | ✅ |
| **Offline Mode** | ✅ | ✅ | ✅ | ✅ |

## Detailed Feature Breakdown

### Core Rendering Features

All platforms share the same core rendering engine built on unified/remark/rehype:

| Feature | Chrome | Firefox | VS Code | Mobile |
|---------|:------:|:-------:|:-------:|:------:|
| Headings (H1-H6) | ✅ | ✅ | ✅ | ✅ |
| Bold/Italic/Strikethrough | ✅ | ✅ | ✅ | ✅ |
| Links & Images | ✅ | ✅ | ✅ | ✅ |
| Blockquotes | ✅ | ✅ | ✅ | ✅ |
| Code Blocks | ✅ | ✅ | ✅ | ✅ |
| Tables | ✅ | ✅ | ✅ | ✅ |
| Task Lists | ✅ | ✅ | ✅ | ✅ |
| Footnotes | ✅ | ✅ | ✅ | ✅ |
| Auto-linking | ✅ | ✅ | ✅ | ✅ |
| Subscript/Superscript | ✅ | ✅ | ✅ | ✅ |

### Diagram Support

| Diagram Type | Chrome | Firefox | VS Code | Mobile |
|--------------|:------:|:-------:|:-------:|:------:|
| PlantUML Sequence | ✅ | ✅ | ✅ | ✅ |
| PlantUML Class | ✅ | ✅ | ✅ | ✅ |
| PlantUML Activity | ✅ | ✅ | ✅ | ✅ |
| PlantUML Use Case | ✅ | ✅ | ✅ | ✅ |
| Mermaid Flowcharts | ✅ | ✅ | ✅ | ✅ |
| Mermaid Sequence | ✅ | ✅ | ✅ | ✅ |
| Mermaid Class | ✅ | ✅ | ✅ | ✅ |
| Mermaid State | ✅ | ✅ | ✅ | ✅ |
| Mermaid ER | ✅ | ✅ | ✅ | ✅ |
| Mermaid Gantt | ✅ | ✅ | ✅ | ✅ |
| Mermaid Pie | ✅ | ✅ | ✅ | ✅ |
| Mermaid Mindmap | ✅ | ✅ | ✅ | ✅ |
| Vega Charts | ✅ | ✅ | ✅ | ✅ |
| Vega-Lite Charts | ✅ | ✅ | ✅ | ✅ |
| drawio | ✅ | ✅ | ✅ | ✅ |
| Canvas | ✅ | ✅ | ✅ | ✅ |
| Infographic | ✅ | ✅ | ✅ | ✅ |
| Graphviz DOT | ✅ | ✅ | ✅ | ✅ |

### Standalone File Formats

Support for opening dedicated diagram files:

| File Format | Chrome | Firefox | VS Code | Mobile |
|-------------|:------:|:-------:|:-------:|:------:|
| `.md`, `.markdown` | ✅ | ✅ | ✅ | ✅ |
| `.plantuml` | ✅ | ✅ | ✅ | ✅ |
| `.mermaid` | ✅ | ✅ | ✅ | ✅ |
| `.vega` | ✅ | ✅ | ✅ | ✅ |
| `.vl`, `.vega-lite` | ✅ | ✅ | ✅ | ✅ |
| `.drawio` | ✅ | ✅ | ✅ | ✅ |
| `.canvas` | ✅ | ✅ | ✅ | ✅ |
| `.infographic` | ✅ | ✅ | ✅ | ✅ |
| `.gv`, `.dot` | ✅ | ✅ | ✅ | ✅ |

### Export Capabilities

| Export Feature | Chrome | Firefox | VS Code | Mobile |
|----------------|:------:|:-------:|:-------:|:------:|
| DOCX Export | ✅ | ✅ | ✅ | ✅ |
| Math in DOCX | ✅ | ✅ | ✅ | ✅ |
| Code Highlighting in DOCX | ✅ | ✅ | ✅ | ✅ |
| Tables in DOCX | ✅ | ✅ | ✅ | ✅ |
| Images in DOCX | ✅ | ✅ | ✅ | ✅ |
| Diagrams as Images in DOCX | ✅ | ✅ | ✅ | ✅ |
| TOC in DOCX | ✅ | ✅ | ✅ | ✅ |
| HR as Page Break | ✅ | ✅ | ✅ | ✅ |
| Print to PDF | ✅ | ✅ | ❌ | ❌ |

### Themes

All 29 themes are available on all platforms:

| Theme Category | Themes |
|----------------|--------|
| Classic | Default, Academic, Business, Manuscript, Newspaper |
| Reading | Palatino, Garamond, Typewriter, Elegant |
| Modern | Technical, Swiss, Minimal |
| Creative | Magazine, Century, Handwritten, Verdana |
| Chinese | Heiti, Mixed, Water |
| Playful | Rainbow, Starry, Candy, Dinosaur, Space, Garden |
| Nature | Forest, Ocean, Coral, Sunset |

### User Interface Features

| UI Feature | Chrome | Firefox | VS Code | Mobile |
|------------|:------:|:-------:|:-------:|:------:|
| Table of Contents Panel | ✅ | ✅ | ✅ | ✅ (Drawer) |
| Theme Selector | ✅ | ✅ | ✅ | ✅ |
| Font Size Control | ✅ | ✅ | ✅ | ✅ |
| Popup Settings | ✅ | ✅ | ❌ | ❌ |
| Settings Page | ✅ | ✅ | ✅ | ✅ |
| Toolbar | ✅ | ✅ | ✅ | ✅ |

### Localization

All 28 languages are supported on all platforms:

- Danish (da), Dutch (nl), English (en), Estonian (et), Finnish (fi), French (fr)
- German (de), Hindi (hi), Indonesian (id), Italian (it), Japanese (ja), Korean (ko)
- Lithuanian (lt), Malay (ms), Norwegian (no), Polish (pl), Portuguese (Brazil: pt-BR, Portugal: pt-PT)
- Russian (ru), Spanish (es), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk)
- Vietnamese (vi), Belarusian (be), Chinese (Simplified: zh-CN, Traditional: zh-TW)

## Platform-Specific Features

### Chrome Extension

- **Permissions**: storage, unlimitedStorage, offscreen, scripting, downloads
- **Manifest**: V3
- **Special**: Offscreen document for background rendering
- **Install**: [Chrome Web Store](https://chromewebstore.google.com/detail/markdown-viewer/aacplhfjalgjjjngonlgkalnlpmkgmgi)

### Firefox Extension

- **Permissions**: storage, unlimitedStorage, downloads, tabs, activeTab, scripting, webRequest, webRequestBlocking
- **Manifest**: V3
- **Minimum Version**: Firefox 140.0
- **Special**: Extended permissions for web request handling
- **Install**: [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/markdown-viewer-extension/)

### VS Code Extension

- **Commands**: Preview, Preview to Side, Export DOCX, Open Settings, Refresh
- **Settings**: Theme, Font Size, Font Family, Line Numbers, Scroll Sync
- **Special**: Bidirectional scroll sync with editor, keyboard shortcuts
- **Install**: [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=xicilion.markdown-viewer-extension) · [Open VSX](https://open-vsx.org/extension/xicilion/markdown-viewer-extension)

### Mobile App

- **Platforms**: iOS, Android
- **Framework**: Flutter (Dart)
- **Special**: Native share, file picker, system theme integration
- **Services**: Cache, Localization, Recent Files, Settings, Theme
- **Install**: App Store / Google Play

## Version Information

All platforms are currently at version **1.4.0**.

## Related Pages

- [Chrome Extension](../platforms/chrome.md)
- [Firefox Extension](../platforms/firefox.md)
- [VS Code Extension](../platforms/vscode.md)
- [Mobile App](../platforms/mobile.md)
