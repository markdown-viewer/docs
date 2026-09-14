# Microsoft Edge Extension

docu.md for Microsoft Edge is the Edge Add-ons distribution of the browser extension. It uses the same Chromium-oriented document engine as the Chrome version while fitting Edge-managed installation, update, and enterprise browser workflows.

## Why Use This Version

Choose the Edge version when Microsoft Edge is your default browser, when your organization manages extensions through Edge, or when you prefer installing from Microsoft Edge Add-ons. It is designed for opening local or online Markdown, reviewing rich documents in the browser, and exporting handoff files.

## Install

1. Open [docu.md Markdown Viewer on Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/documd-markdown-viewer/iphmkjlbnogmhofmmcahdhodiilokfca).
2. Click **Get**.
3. Confirm **Add extension**.
4. Pin the extension if you want quick access.

If your environment allows Chrome Web Store installations in Edge, the Chrome listing may also work. The Edge Add-ons listing is the recommended Edge-managed route.

## First Run Setup

For local Markdown files, open the extension details page in Edge and enable file URL access. Online Markdown can be opened directly when the URL and content type are supported.

## Main Workflows

### Browser Reading

Open Markdown files in Edge and read them with document typography, code highlighting, tables, math, diagrams, and themes instead of raw text.

### Document Handoff

Use export when the rendered document is ready for a colleague, client, reviewer, or archive. DOCX is the primary editable handoff format; PDF, HTML, and EPUB are available where supported.

### Managed Environments

Edge is often used in managed workplaces. If an administrator controls extension permissions, file URL access or downloads may need policy approval.

## Rich Content Support

The Edge extension supports the shared docu.md rich content set: standard Markdown, GitHub-style tables and task lists, images, highlighted code, math formulas, SVG content, complex HTML tables, and text-based diagrams or charts including PlantUML, Mermaid, Vega/Vega-Lite, drawio, Canvas, Infographic, Graphviz, and ECharts.

## Privacy

Normal rendering and export run locally in the extension. Documents do not need to be uploaded to a remote rendering service for regular preview or export workflows.

## Troubleshooting

### Local files do not render

Enable file URL access for the extension in Edge settings. In managed environments, ask your administrator if the setting is locked.

### Downloads are blocked

Check Edge download settings and organization policies. Export requires permission to save the generated file.

### Behavior differs from Chrome

Most rendering behavior is shared, but store policies, update timing, and managed browser settings can differ.

## Related Platforms

- [Chrome](chrome.md) for the Chrome Web Store route.
- [Firefox](firefox.md) for Firefox-specific browser APIs.
- [Platform Comparison](platform-comparison.md).