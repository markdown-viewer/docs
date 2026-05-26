# Platform Feature Comparison

This page provides a comparison of the main Markdown Viewer platform families and lists the official install location for every released platform.

## Install Locations

| Platform | Install |
|---------|---------|
| Chrome Extension | [Chrome Web Store](https://chromewebstore.google.com/detail/markdown-viewer/jekhhoflgcfoikceikgeenibinpojaoi) |
| Edge Extension | [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/documd-markdown-viewer/iphmkjlbnogmhofmmcahdhodiilokfca) |
| Firefox Extension | [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/markdown-viewer-extension/) |
| Obsidian Plugin | [Obsidian Community Plugin](https://community.obsidian.md/plugins/markdown-viewer-extension) |
| VS Code Extension | [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=xicilion.markdown-viewer-extension) · [Open VSX](https://open-vsx.org/extension/xicilion/markdown-viewer-extension) |
| Mobile App | App Store / Google Play |

## Capability Matrix

| Capability | Chrome | Edge | Firefox | Obsidian | VS Code | Mobile |
|---------|:------:|:----:|:-------:|:--------:|:-------:|:------:|
| Markdown rendering | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Shared diagram/file registry | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| DOCX export | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Print | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Theme switching | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Local/offline use | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Online URL handling | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Recent files/history | ✅ | ✅ | ✅ | Host-managed | ❌ | ✅ |
| Native share | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Scroll sync with editor | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Host integration | Browser | Browser | Browser | Vault + workspace | Editor + webview | Native app shell |

## Shared Format Registry

All released platforms are built on the same shared format registry in `src/types/formats.ts`:

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

Obsidian additionally registers `.svg` for preview handling inside the host app.

## Platform-Specific Features

### Chrome Extension

- **Permissions**: storage, unlimitedStorage, offscreen, scripting, downloads
- **Manifest**: V3
- **Special**: Offscreen document for background rendering
- **Install**: [Chrome Web Store](https://chromewebstore.google.com/detail/markdown-viewer/jekhhoflgcfoikceikgeenibinpojaoi)

### Firefox Extension

- **Permissions**: storage, unlimitedStorage, downloads, tabs, activeTab, scripting, webRequest, webRequestBlocking
- **Manifest**: V3
- **Minimum Version**: Firefox 140.0
- **Special**: Extended permissions for web request handling
- **Install**: [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/markdown-viewer-extension/)

### Edge Extension

- **Engine**: Chromium build with the same rendering and export feature set as Chrome
- **Distribution**: Native Microsoft Edge Add-ons listing
- **Special**: Best fit for users who want Edge-managed updates and permissions UI
- **Install**: [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/documd-markdown-viewer/iphmkjlbnogmhofmmcahdhodiilokfca)

### Obsidian Plugin

- **Platforms**: Obsidian Desktop and Mobile
- **Minimum Version**: Obsidian 1.0.0
- **Special**: Vault-native preview pane, ribbon icon, command palette entry, print/export/settings actions
- **Install**: [Obsidian Community Plugin](https://community.obsidian.md/plugins/markdown-viewer-extension)

### VS Code Extension

- **Commands**: Open Markdown Preview to the Side, Open Settings, Open Export Menu, Refresh, Print, Export DOCX
- **Settings**: Theme, Font Size, Font Family, Line Numbers, Scroll Sync, Deferred async render
- **Special**: Bidirectional scroll sync with editor, keyboard shortcuts
- **Install**: [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=xicilion.markdown-viewer-extension) · [Open VSX](https://open-vsx.org/extension/xicilion/markdown-viewer-extension)

### Mobile App

- **Platforms**: iOS, Android
- **Framework**: Flutter (Dart)
- **Special**: Native share, file picker, recent files, system theme integration
- **Services**: Cache, Localization, Recent Files, Settings, Theme
- **Install**: App Store / Google Play

## Version Information

Extension and plugin packages in this repository are currently on version **5.0.0**. The Flutter app package is version **5.0.0+1**.

## Related Pages

- [Chrome Extension](../platforms/chrome.md)
- [Edge Extension](../platforms/edge.md)
- [Firefox Extension](../platforms/firefox.md)
- [Obsidian Plugin](../platforms/obsidian.md)
- [VS Code Extension](../platforms/vscode.md)
- [Mobile App](../platforms/mobile.md)
