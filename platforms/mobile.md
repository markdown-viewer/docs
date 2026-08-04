# Mobile App

docu.md Mobile brings Markdown preview and handoff workflows to iOS and Android. It is built with Flutter and uses the shared rendering approach from the wider docu.md project.

## Why Use This Version

Use the mobile app when Markdown arrives through a file picker, cloud drive, chat attachment, email, or share sheet. It is best for reviewing content on the go, checking AI-generated drafts, and sharing a readable result from a phone or tablet.

## Install

Use the platform store when public builds are available for your device. For development builds, use the Flutter project in `mobile/`.

```bash
cd mobile
flutter pub get
flutter run
```

## First Run Setup

Mobile platforms grant access through system file pickers and share sheets. Choose a Markdown file, open one from another app, or return to a recent file. If the file is stored in a cloud provider, make sure it is downloaded locally before opening.

## Main Workflows

### Open from Files

Use the system picker to select a `.md` file or related document source. docu.md renders it in a mobile reading view.

### Open from Share Sheet

From another app, share a Markdown file to docu.md. This is useful for chat attachments, email files, and cloud-drive documents.

### Continue Recent Work

Use recent files to return to documents you reviewed earlier.

## Rich Content Support

The mobile app focuses on reading and review. It can display Markdown structure, tables, images, code blocks, math, themes, and visual content supported by the shared rendering engine. Heavy export or editing work may be more comfortable on desktop platforms.

## Export and Sharing

Mobile output options depend on iOS and Android file and sharing behavior. Use mobile for quick review and handoff; use browser, VS Code, or Obsidian when you need a larger workspace.

## Privacy

Normal preview processing happens on device. Files selected through the system picker or share sheet do not need to be uploaded to a remote rendering service.

## Platform Notes

- iOS and Android handle files and sharing differently.
- Large documents can be limited by device memory and background execution.
- Cloud files may need offline availability before rendering.
- Tablets provide a more comfortable layout for long-form review.

## Troubleshooting

### Cloud file does not open

Open the cloud provider first and make the file available offline.

### Shared file disappears

Save the file to a stable location or reopen it from the source app.

### Rendering is slow

Wait for visual blocks to finish or use a desktop platform for very large documents.

## Related Platforms

- [Chrome](chrome.md), [Edge](edge.md), and [Firefox](firefox.md) for browser workflows.
- [VS Code](vscode.md) and [Obsidian](obsidian.md) for writing workspaces.
- [Platform Comparison](platform-comparison.md).