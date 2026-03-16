# File Access Setup

To open local Markdown files by double-clicking them, you need to enable file access for the extension.

## Why is This Needed?

By default, Chrome extensions cannot access local files (`file://` URLs) for security reasons. You need to explicitly grant this permission.

## Enable File Access in Chrome

### Step 1: Open Extensions Page

Navigate to `chrome://extensions/` in your browser, or:

1. Click the three-dot menu (⋮) in Chrome
2. Go to **More tools** → **Extensions**

### Step 2: Find Markdown Viewer

Scroll through your extensions or use the search box to find **Markdown Viewer**.

### Step 3: Open Extension Details

Click **"Details"** on the Markdown Viewer card.

### Step 4: Enable File Access

Find the option **"Allow access to file URLs"** and toggle it **ON**.

![Enable file access toggle](../assets/file-access-toggle.png)

✅ **Done!** You can now double-click `.md` files to open them in Chrome.

---

## Enable File Access in Firefox

1. Go to `about:addons`
2. Find Markdown Viewer
3. Click the extension
4. Under Permissions, enable access to file URLs

---

## Setting Chrome as Default for .md Files

### Windows

1. Right-click any `.md` file
2. Select **"Open with"** → **"Choose another app"**
3. Select **Google Chrome**
4. Check **"Always use this app to open .md files"**
5. Click **OK**

### macOS

1. Right-click any `.md` file
2. Select **"Get Info"**
3. Under **"Open with"**, select **Google Chrome**
4. Click **"Change All..."** to apply to all `.md` files

### Linux

Depends on your desktop environment. Generally:

1. Right-click the `.md` file
2. Select **"Properties"** or **"Open With"**
3. Choose Chrome/Chromium as the default application

---

## Troubleshooting

### Files Still Don't Open?

1. **Verify the extension is enabled** — Check `chrome://extensions/`
2. **Confirm file access is on** — The toggle should be blue/enabled
3. **Restart Chrome** — Close all Chrome windows and reopen
4. **Check file association** — Make sure `.md` opens with Chrome

### Security Considerations

Enabling file access means the extension can read local Markdown files. This is safe because:

- ✅ Markdown Viewer only processes Markdown content
- ✅ No data is sent to any server
- ✅ All processing happens locally
- ✅ The extension is open source and auditable

---

## Alternative: Without File Access

If you prefer not to enable file access, you can still use Markdown Viewer:

### Drag and Drop

1. Open Chrome
2. Drag your `.md` file into the browser window
3. The file will be rendered

### Use the Open Dialog

1. Press `Ctrl/Cmd + O` in Chrome
2. Navigate to your file
3. Select and open it

### Online Files Only

View Markdown files on:
- GitHub
- GitLab
- Any website serving `.md` files

---

## Next Steps

Now that file access is set up:

- [Start using](first-use.md) Markdown Viewer
- Explore the [features](../features/README.md)
