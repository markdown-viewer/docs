# Obsidian Plugin

Markdown Viewer is available as an Obsidian community plugin for vault-native preview and export on desktop and mobile.

## Overview

| Feature | Status |
|---------|--------|
| Markdown preview | ✅ |
| Word export | ✅ |
| All diagram types | ✅ |
| LaTeX formulas | ✅ |
| 29 themes | ✅ |
| Vault integration | ✅ |
| Print | ✅ |
| Preview settings panel | ✅ |

**Version:** 5.0.0  
**Minimum Obsidian Version:** 1.0.0

---

## Installation

### From Obsidian Community Plugins

1. Open Obsidian
2. Go to **Settings → Community plugins**
3. Turn off **Restricted mode** if prompted
4. Click **Browse** and search for [Markdown Viewer](https://community.obsidian.md/plugins/markdown-viewer-extension)
5. Click **Install**, then **Enable**

### Open the Preview

After installation, run **Open Markdown Viewer** from the Command Palette or click the Markdown Viewer ribbon icon.

## Viewer Actions

The Obsidian host code exposes these actions directly in the preview view:

- **Command Palette:** `Open Markdown Viewer`
- **Ribbon icon:** `Markdown Viewer Preview`
- **More options menu:** Refresh Preview, Export to DOCX, Print
- **Preview title bar:** Export menu and Settings panel

The native plugin settings page also includes file-type support toggles and **Auto-preview on file open**.

---

## Supported Files

The plugin registers Markdown plus the shared format registry used across the repo:

| Extensions | Type |
|-----------|------|
| `.md`, `.markdown`, `.slides.md` | Markdown / Slidev documents |
| `.plantuml`, `.puml` | PlantUML diagrams |
| `.mermaid`, `.mmd` | Mermaid diagrams |
| `.vega`, `.vl`, `.vega-lite` | Vega / Vega-Lite charts |
| `.gv`, `.dot` | Graphviz DOT graphs |
| `.infographic` | Infographic charts |
| `.canvas` | Canvas diagrams |
| `.drawio` | draw.io diagrams |
| `.svg` | SVG assets handled by the preview view |

---

## Notes

- Works in Obsidian Desktop and Obsidian Mobile
- Opens preview in a split pane tied to the active file
- Watches the active file and refreshes the preview when the file changes
- Reuses the same export pipeline and themes as the other platforms

---

## Related Pages

- [VS Code Extension](vscode.md)
- [Platform Comparison](platform-comparison.md)