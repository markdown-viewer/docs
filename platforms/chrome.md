# Chrome Extension

docu.md for Chrome is the browser-first version of Markdown Viewer. It is the best fit when you want to open local or online Markdown directly in a Chromium browser, review a polished document view, and export a handoff file without moving content into another editor.

## Why Use This Version

Use the Chrome extension when Markdown appears as a local file, a raw web URL, generated AI output, or documentation you want to inspect in the browser. The extension keeps the source Markdown intact while rendering tables, images, code, math, visual blocks, themes, and document spacing in a finished reading surface.

## Install

### Chrome Web Store

1. Open [docu.md Markdown Viewer on Chrome Web Store](https://chromewebstore.google.com/detail/markdown-viewer/jekhhoflgcfoikceikgeenibinpojaoi).
2. Click **Add to Chrome**.
3. Confirm the installation.
4. Pin the extension if you want quick access to actions and settings.

### Developer Build

```bash
npm install
npm run build:chrome
```

Then open `chrome://extensions/`, enable **Developer mode**, choose **Load unpacked**, and select `dist/chrome`.

## First Run Setup

For web Markdown, open a supported URL and let the extension render the file. For local files, enable **Allow access to file URLs** in the extension details page. This browser permission is required before an extension can read `file:///` documents from your device.

## Main Workflows

### Read Local Markdown

Open or drag a `.md` file into Chrome after enabling file URL access. docu.md renders a clean reading view with structure, code blocks, formulas, tables, images, and rendered visual content.

### Review Online Markdown

Open a supported raw Markdown URL. The extension detects compatible content and renders it in place, which is useful for documentation, changelogs, AI notes, and project files.

### Export a Handoff Document

Use the export action when the rendered result is ready. DOCX is useful for editable Word handoff. PDF and self-contained HTML are available where supported by the current build and platform.

## Rich Content Support

Chrome uses the shared docu.md rendering engine. It supports standard Markdown, GitHub-style tables and task lists, images, highlighted code, math formulas, SVG content, complex HTML tables, and text-based diagrams or charts such as PlantUML, Mermaid, Vega/Vega-Lite, drawio, Canvas, Infographic, and Graphviz.

## Permissions

| Permission | Purpose |
|---|---|
| `storage` | Save settings and local cache. |
| `unlimitedStorage` | Store render cache for large documents. |
| `offscreen` | Render heavy visual content without blocking the visible page. |
| `scripting` | Inject the viewer into supported pages. |
| `downloads` | Save exported documents when requested. |
| `file:///*` | Open local Markdown files after user approval. |
| `http://*/*`, `https://*/*` | Detect and render supported online Markdown. |

## Privacy

Normal preview and export work happens locally in the extension. Your Markdown files do not need to be uploaded to a remote rendering service to view or export them.

## Troubleshooting

### Local files open as plain text

Open `chrome://extensions/`, find docu.md Markdown Viewer, and enable **Allow access to file URLs**.

### Export does not start

Check that the document finished rendering and that browser downloads are allowed for the extension.

### Visual blocks render slowly

Large documents can take longer on the first render. Reopening the same document should be faster because cached render results can be reused.

## Related Platforms

- [Microsoft Edge](edge.md) for Edge Add-ons and Edge-managed updates.
- [Firefox](firefox.md) for Firefox-based browsing workflows.
- [VS Code](vscode.md) for editor-side preview and export.
- [Platform Comparison](platform-comparison.md).