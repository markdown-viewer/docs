# Reading Mode

Markdown Viewer provides an enhanced reading experience with multiple layouts, zoom controls, navigation features, and smart caching.

## Layout Options

### Normal Layout (Default)

- **Width:** 1000px maximum
- **Best for:** General reading, balanced experience
- **Use when:** Reading most documents

### Full Screen Layout

- **Width:** Uses entire browser width
- **Best for:** Wide content, tables, code
- **Use when:** You have wide monitors or wide content

### Narrow Layout

- **Width:** 530px maximum
- **Best for:** Previewing Word export appearance
- **Use when:** You want to see how the document will look in Word

### Switching Layouts

Click the **Layout** button in the toolbar to cycle through options.

---

## Zoom Controls

Adjust the document size to your preference:

| Action | Keyboard Shortcut | Range |
|--------|-------------------|-------|
| Zoom In | `Ctrl/Cmd + +` | Up to 400% |
| Zoom Out | `Ctrl/Cmd + -` | Down to 50% |
| Reset Zoom | `Ctrl/Cmd + 0` | Back to 100% |

### Zoom Tips

- **Large monitors:** Try 125-150% for comfortable reading
- **Presentations:** Use 200%+ when showing to others
- **Dense content:** Zoom out to see more context

---

## Table of Contents

The sidebar Table of Contents is auto-generated from your document headings.

### Toggle TOC

- **Keyboard:** `Ctrl/Cmd + B`
- **Click:** TOC button in toolbar

### Features

- **Auto-generated** from H1-H6 headings
- **Click to navigate** — jumps to section
- **Current section highlighted** — shows where you are
- **Collapsible** — save screen space

### Best Practices

For the best TOC experience:
- Use meaningful heading text
- Maintain proper heading hierarchy (H1 → H2 → H3)
- Don't skip heading levels

---

## Position Memory

Markdown Viewer remembers where you were in each document.

### How It Works

1. **Auto-save:** Your scroll position is saved as you read
2. **Auto-restore:** When you reopen the same file, it returns to your position
3. **Per-document:** Each file has its own saved position

### Benefits

- Continue reading where you left off
- No need to search for your place
- Works across browser sessions

---

## Reading History

Track your recently viewed documents.

### Accessing History

Click the **History** icon in the toolbar or popup menu.

### Features

- **Recent documents** listed in order
- **Quick access** — click to reopen
- **Automatic cleanup** — old entries removed

---

## Smart Caching

For documents with diagrams, Markdown Viewer caches rendered images for instant subsequent loads.

### How Caching Works

| First Load | Subsequent Loads |
|------------|------------------|
| Text: Instant | Everything: Instant |
| Diagrams: ~5s total | From cache: <1s |

### Cache Benefits

- **10x faster** repeat opens
- **Minimal re-rendering** — only changed diagrams re-process
- **Automatic invalidation** — cache updates when content changes

### Cache Management

- **Default size:** 1000 items (~500MB)
- **Clear cache:** Available in extension settings
- **Automatic cleanup:** Oldest items removed when limit reached

---

## Keyboard Shortcuts Summary

| Action | Windows/Linux | macOS |
|--------|---------------|-------|
| Export to Word | `Ctrl + S` | `Cmd + S` |
| Toggle TOC | `Ctrl + B` | `Cmd + B` |
| Zoom In | `Ctrl + +` | `Cmd + +` |
| Zoom Out | `Ctrl + -` | `Cmd + -` |
| Reset Zoom | `Ctrl + 0` | `Cmd + 0` |

---

## Performance Tips

### Large Documents

For documents with 50+ diagrams:

1. **First open:** Be patient, text shows instantly, diagrams render in background
2. **Progress indicator:** Watch the progress bar
3. **Subsequent opens:** Nearly instant from cache

### Slow Rendering?

If documents are slow:

1. **Check diagram count** — Many complex Mermaid diagrams take time
2. **Simplify diagrams** — Split large diagrams into smaller ones
3. **Enable caching** — Don't clear cache frequently
4. **Close other tabs** — Free up browser memory

### Memory Usage

Markdown Viewer is optimized for performance:

- Diagrams render in a web worker
- Cache is stored efficiently
- Old cache entries are cleaned automatically

---

## Accessibility

### Font Scaling

- Use zoom controls for larger text
- Browser font settings are respected
- High contrast themes available

### Keyboard Navigation

- All features accessible via keyboard
- Tab through interactive elements
- Standard browser navigation works

### Screen Readers

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images

---

## Offline Reading

Markdown Viewer works completely offline:

- ✅ Local files work without internet
- ✅ Cached diagrams display offline
- ✅ All features work offline
- ✅ Export to Word works offline

No internet connection is ever required for core functionality.
