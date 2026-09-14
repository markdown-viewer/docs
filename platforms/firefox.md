# Firefox Extension

docu.md for Firefox is the Firefox browser version of Markdown Viewer. It is for users who want Markdown preview, rich rendering, and document export inside a Firefox-based workflow.

## Why Use This Version

Use this version when Firefox is your daily browser or when you prefer installing from Firefox Add-ons. It is useful for reading local Markdown, reviewing online Markdown, and exporting documents without moving the source into another editor.

## Install

1. Open [docu.md Markdown Viewer on Firefox Add-ons](https://addons.mozilla.org/firefox/addon/markdown-viewer-extension/).
2. Click **Add to Firefox**.
3. Confirm the installation.
4. Pin or manage the extension from Firefox Add-ons if needed.

## First Run Setup

Firefox handles extension permissions differently from Chromium browsers. For local files, open `about:addons`, select docu.md Markdown Viewer, and confirm local file access is allowed. For web Markdown, open a supported raw Markdown URL.

## Main Workflows

### Open Local Markdown

Enable local file access, then open or drag a `.md` file into Firefox. docu.md renders the file as a document with formatted content and visual blocks.

### Review Markdown from the Web

Open a supported Markdown URL in Firefox. If a server sends unusual headers, save the file locally and open it from disk.

### Export Documents

Export when the rendered file is ready for handoff. DOCX is useful for editable Word documents. PDF, HTML, and EPUB are available where supported by the current platform build.

## Firefox Notes

Firefox uses different extension APIs for background work and request handling. The user-facing goal is the same as other browser versions, but permission prompts, file access, and content detection can behave differently.

## Rich Content Support

Firefox uses the shared rendering engine for standard Markdown, GitHub-style tables and task lists, images, highlighted code, math formulas, SVG content, complex HTML tables, and diagrams or charts from text-based formats such as PlantUML, Mermaid, Vega/Vega-Lite, drawio, Canvas, Infographic, Graphviz, and ECharts.

## Privacy

Normal preview and export processing happens locally. Your Markdown files do not need to be uploaded to a remote rendering service.

## Troubleshooting

### The extension does not activate

Check that the extension is enabled in `about:addons` and that the file or URL is a supported Markdown source.

### Local files do not open

Review the extension permissions in Firefox and allow local file access.

### Export fails

Wait for rendering to finish, confirm downloads are allowed, and try a writable save location.

## Related Platforms

- [Chrome](chrome.md) and [Edge](edge.md) for Chromium-based workflows.
- [VS Code](vscode.md) for editing and preview in the editor.
- [Platform Comparison](platform-comparison.md).