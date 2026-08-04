# VS Code Extension

docu.md for VS Code is the editor-focused platform for Markdown preview and document export. It is built for writers, developers, researchers, and teams who want to keep Markdown in the workspace while seeing a polished preview beside the source.

## Why Use This Version

Use the VS Code extension when you are actively writing or editing Markdown. It fits project documentation, technical design notes, research drafts, README files, AI-assisted writing, and any workflow where source editing and preview should stay together.

## Install

### VS Code Marketplace

Open [docu.md Markdown Viewer on VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=xicilion.markdown-viewer-extension) and install it, or search for **Markdown Viewer** in the Extensions panel.

### Open VSX

For VSCodium and Open VSX environments, use [Open VSX](https://open-vsx.org/extension/xicilion/markdown-viewer-extension).

### Command Line

```bash
code --install-extension xicilion.markdown-viewer-extension
```

## First Run Setup

Open a Markdown file and run **Markdown Viewer: Open Markdown Preview to the Side (Advanced)** from the command palette. You can also use the editor title action when available.

Workspace files do not need browser-style file URL permission. In remote workspaces, processing happens where the VS Code extension host runs.

## Main Workflows

### Preview Beside Source

Keep the Markdown editor and docu.md preview open side by side. This is useful for long documents, documentation edits, and AI-generated drafts that need review.

### Export from the Workspace

Open the preview, use the export menu, and create a handoff document when the content is ready.

### Review Complex Markdown

Use docu.md when documents include code, tables, formulas, visual blocks, images, and themes that need to be checked before sharing.

## Rich Content Support

The VS Code extension supports Markdown, GitHub-style tables and task lists, images, highlighted code, math formulas, SVG content, complex HTML tables, and text-based diagrams or charts including PlantUML, Mermaid, Vega/Vega-Lite, drawio, Canvas, Infographic, and Graphviz.

## Settings

Common settings include theme, font size, font family, line numbers, scroll sync, and deferred async rendering for heavy documents. Configure them in VS Code settings under Markdown Viewer.

## Privacy

Normal preview and export processing runs in the VS Code extension environment. Markdown content does not need to be uploaded to a remote rendering service. For remote workspaces, treat the remote host as the processing location.

## Troubleshooting

### Preview does not open

Confirm the active file is Markdown or another supported source file, then run the command palette action again.

### Scroll sync is approximate

Large tables, generated sections, or rendered visual blocks can make line mapping approximate. Navigate by headings when needed.

### Export cannot write a file

Check workspace permissions and the selected output directory. In remote workspaces, verify the remote filesystem.

## Related Platforms

- [Obsidian](obsidian.md) for vault-native note workflows.
- [Browser extensions](platform-comparison.md) for local and web Markdown outside the editor.
- [Platform Comparison](platform-comparison.md).