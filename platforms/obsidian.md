# Obsidian Plugin

docu.md for Obsidian brings the Markdown handoff workflow into your vault. It is designed for people who keep notes, research, project documentation, or AI-assisted drafts in Obsidian and want a polished preview plus export actions without leaving the vault.

## Why Use This Version

Obsidian is already where many Markdown files live. The plugin lets you keep source notes in the vault, open a richer preview, apply document themes, and export when a note needs to become a shareable document.

## Install

1. Open Obsidian.
2. Go to **Settings → Community plugins**.
3. Disable **Restricted mode** if Obsidian asks.
4. Browse community plugins and search for **Markdown Viewer**.
5. Install and enable the plugin.

## First Run Setup

After installation, use the command palette action **Open Markdown Viewer** or the ribbon icon. The preview opens inside Obsidian and follows the active file.

The plugin settings include file-type support toggles and auto-preview behavior. Adjust these if you only want docu.md to handle specific file types.

## Main Workflows

### Vault-Native Preview

Open a note and launch Markdown Viewer. The preview renders the active file with document-focused typography, rich content, and themes.

### Export from Notes

Use the preview title bar or more-options menu for export and print actions. This is useful when a vault note needs to become a report, handout, research draft, or shareable document.

### Review Generated Notes

AI-generated Markdown can be saved into the vault, reviewed with docu.md, themed, and exported without leaving Obsidian.

## Rich Content Support

The Obsidian plugin uses the shared docu.md rendering engine. It supports Markdown, tables, task lists, images, highlighted code, math formulas, SVG assets, complex HTML tables, and text-based diagrams or charts such as PlantUML, Mermaid, Vega/Vega-Lite, drawio, Canvas, Infographic, and Graphviz.

## Privacy

Preview and export run inside the Obsidian plugin environment. Normal workflows do not require uploading vault files to a remote rendering service.

## Platform Notes

- Works in Obsidian Desktop and Obsidian Mobile where plugin support is available.
- Opens a preview pane tied to the active file.
- Reuses the same themes and export pipeline as the other docu.md platforms.
- Host behavior follows Obsidian’s plugin and vault model.

## Troubleshooting

### Command not visible

Confirm the plugin is installed and enabled in Community plugins.

### Preview does not follow the expected note

Check the active file and plugin settings for auto-preview behavior.

### Export does not complete

Confirm the note has finished rendering and that Obsidian can write to the selected destination.

## Related Platforms

- [VS Code](vscode.md) for editor-side writing workflows.
- [Mobile](mobile.md) for file picker and share flows.
- [Platform Comparison](platform-comparison.md).