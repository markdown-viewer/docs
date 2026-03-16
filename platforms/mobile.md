# Mobile App

Markdown Viewer is available as a native mobile app for iOS and Android, built with Flutter.

## Overview

| Feature | Status |
|---------|--------|
| Markdown rendering | ✅ |
| Word export | ✅ |
| All diagram types | ✅ |
| LaTeX formulas | ✅ |
| Multiple themes | ✅ |
| Offline mode | ✅ |

---

## Features

| Feature | Status |
|---------|---------|
| Markdown rendering | ✅ |
| Word export | ✅ |
| Mermaid diagrams | ✅ |
| Graphviz DOT | ✅ |
| Vega/Vega-Lite | ✅ |
| LaTeX formulas | ✅ |
| Multiple themes | ✅ |
| Offline mode | ✅ |
| Cloud sync | 🤔 Considering |

---

## Platform Support

| Platform | Status |
|----------|--------|
| iOS | ✅ Released |
| Android | ✅ Released |
| iPadOS | ✅ Supported |
| Android Tablet | ✅ Supported |

---

## Technology

The mobile app is built with:

- **Flutter** — Cross-platform framework
- **Dart** — Programming language
- **WebView** — For rendering engine
- **Shared Core** — Same rendering code as browser extensions

This ensures consistent rendering across all platforms.

---

## Why Mobile?

### Use Cases

- **Read documentation** on the go
- **Review reports** during commute
- **Preview exports** before meetings
- **Quick edits** and re-export

### Benefits

- Same rendering as desktop
- Offline capable
- Share documents easily
- Native mobile experience

---

## Download

### iOS

Download from the App Store:

1. Open the App Store
2. Search for "Markdown Viewer"
3. Tap **Get** to install

### Android

Download from Google Play:

1. Open Google Play Store
2. Search for "Markdown Viewer"
3. Tap **Install**

---

## For Developers

### Building from Source

```bash
cd mobile
flutter pub get
flutter run
```

### Requirements

- Flutter SDK 3.0+
- Xcode (for iOS)
- Android Studio (for Android)

### Project Structure

```
mobile/
├── lib/           # Dart source code
├── android/       # Android-specific code
├── ios/           # iOS-specific code
├── macos/         # macOS support
└── src/           # Shared assets
```

---

## FAQ

### Is It Free?

Yes, the mobile app is completely free, consistent with our other platforms.

### Does It Sync with Desktop?

Currently, the app works with local files and cloud storage (iCloud, Google Drive). Direct sync between devices is planned for future updates.

### What About Tablets?

Fully supported! iPadOS and Android tablets have optimized layouts.

---

## Source Code

GitHub: [markdown-viewer-extension](https://github.com/markdown-viewer/markdown-viewer-extension)

Mobile app code is in the `mobile/` directory.
