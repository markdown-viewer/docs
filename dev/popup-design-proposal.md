# Markdown Viewer Popup - 视觉风格与交互细节设计方案

> **设计范围**：保持现有布局和功能分布不变，仅优化视觉风格和交互细节

---

## 📌 设计目标与分析

### 设计目标

本方案旨在提升 Markdown Viewer 扩展的视觉品质和用户体验，使其更具专业感和现代感。核心目标：

1. **专业性** — 作为文档处理工具，界面需传达可靠、专业的品牌形象
2. **一致性** — 统一 Popup、Toolbar、TOC 三个界面区域的视觉语言
3. **易用性** — 通过清晰的视觉反馈提升交互体验
4. **轻量化** — 保持界面简洁，避免视觉干扰

### 现状分析

| 问题 | 现状 | 改进方向 |
|-----|------|---------|
| 色彩系统 | 缺乏系统性，颜色使用随意 | 建立完整的品牌色、功能色、中性色体系 |
| 交互反馈 | 悬停/点击状态不明显 | 统一过渡时间，增强状态区分度 |
| 视觉层次 | 阴影/边框使用不一致 | 规范阴影层级和边框样式 |
| 组件风格 | 各区域风格略有差异 | 统一按钮、卡片、列表项样式 |

### 设计原则

- **最小化改动** — 保持现有布局和功能逻辑，只调整视觉表现
- **渐进增强** — 基于现有样式优化，而非完全重写
- **性能优先** — 动画使用 `transform` 和 `opacity`，避免重排
- **仅浅色主题** — 目标场景为正式 DOCX 文档，无需深色模式

---

## 🎯 整体效果预览

<div style="display: flex; gap: 20px; margin: 20px 0; justify-content: center;">
  <div style="width: 320px; background: #f8fafc; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); overflow: hidden; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
    <div style="padding: 16px 20px; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px;">
      <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px;">M</div>
      <div style="flex: 1;">
        <div style="font-size: 18px; font-weight: 600; color: #0f172a;">Markdown Viewer</div>
        <div style="font-size: 11px; color: #64748b;">v1.4.0 · @xicilion</div>
      </div>
      <div style="padding: 3px 8px; background: #eff6ff; border-radius: 4px; font-size: 10px; color: #2563eb;">⭐ Rate</div>
    </div>
    <div style="background: #e6ebf5; display: flex; border-bottom: 1px solid #e2e8f0;">
      <div style="flex: 1; padding: 10px; text-align: center; font-size: 12px; font-weight: 500; color: #0f172a; background: #ffffff; border-bottom: 2px solid #2563eb;">History</div>
      <div style="flex: 1; padding: 10px; text-align: center; font-size: 12px; font-weight: 500; color: #475569;">Cache</div>
      <div style="flex: 1; padding: 10px; text-align: center; font-size: 12px; font-weight: 500; color: #475569;">Settings</div>
    </div>
    <div style="padding: 15px; background: #f8fafc;">
      <div style="background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #f1f5f9; box-shadow: 0 1px 3px rgba(0,0,0,0.04); margin-bottom: 12px;">
        <div style="font-size: 13px; font-weight: 600; color: #0f172a; margin-bottom: 8px;">Recent History</div>
        <div style="background: #ffffff; padding: 10px; border-radius: 4px; border: 1px solid #f1f5f9; border-left: 3px solid #2563eb; margin-bottom: 6px;">
          <div style="font-size: 11px; font-weight: 500; color: #0f172a;">Technical Doc.md</div>
          <div style="font-size: 9px; color: #64748b; margin-top: 2px;">3 minutes ago</div>
        </div>
        <div style="background: #ffffff; padding: 10px; border-radius: 4px; border: 1px solid #f1f5f9; border-left: 3px solid transparent;">
          <div style="font-size: 11px; font-weight: 500; color: #0f172a;">README.md</div>
          <div style="font-size: 9px; color: #64748b; margin-top: 2px;">2 hours ago</div>
        </div>
      </div>
      <div style="display: flex; gap: 8px; justify-content: center;">
        <div style="padding: 6px 14px; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 11px; color: #0f172a;">Refresh</div>
        <div style="padding: 6px 14px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; font-size: 11px; color: #ef4444;">Clear</div>
      </div>
    </div>
  </div>
</div>

## 📋 现有布局（保持不变）

```
┌─────────────────────────────────────┐
│  Logo + Markdown Viewer    ⭐ Rate  │  Header
├─────────────────────────────────────┤
│  [History]  [Cache]  [Settings]     │  Tabs
├─────────────────────────────────────┤
│  Tab Content Area                   │  各 Tab 内容
└─────────────────────────────────────┘
```

## ✅ 本次优化重点

1. 色彩系统升级
2. 交互细节增强（悬停、点击、加载态）
3. 视觉层次优化（阴影、边框、间距）
4. 组件样式统一

---

## 🎨 一、色彩系统升级

### 1.1 主品牌色（蓝色系 - 专业、可信）

| 变量名 | 色值 | 用途 |
|-------|------|------|
| `--primary` | `#2563eb` | 主按钮、链接、选中态 |
| `--primary-hover` | `#1d4ed8` | 按钮悬停 |
| `--primary-light` | `#eff6ff` | 背景高亮、选中背景 |
| `--primary-subtle` | `#dbeafe` | 轻微强调 |

**效果预览：**

<div style="display: flex; gap: 8px; margin: 15px 0;">
  <div style="width: 60px; height: 40px; background: #2563eb; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 10px;">primary</div>
  <div style="width: 60px; height: 40px; background: #1d4ed8; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 10px;">hover</div>
  <div style="width: 60px; height: 40px; background: #eff6ff; border-radius: 4px; border: 1px solid #dbeafe; display: flex; align-items: center; justify-content: center; color: #2563eb; font-size: 10px;">light</div>
  <div style="width: 60px; height: 40px; background: #dbeafe; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #1d4ed8; font-size: 10px;">subtle</div>
</div>

### 1.2 功能色

| 变量名 | 色值 | 用途 |
|-------|------|------|
| `--success` | `#10b981` | 成功状态、已缓存 |
| `--warning` | `#f59e0b` | 警告、未缓存 |
| `--danger` | `#ef4444` | 删除、错误 |

**效果预览：**

<div style="display: flex; gap: 8px; margin: 15px 0;">
  <div style="width: 80px; height: 40px; background: #10b981; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 11px;">✅ success</div>
  <div style="width: 80px; height: 40px; background: #f59e0b; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 11px;">⚠️ warning</div>
  <div style="width: 80px; height: 40px; background: #ef4444; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 11px;">❌ danger</div>
</div>

### 1.3 中性色（灰度系统）

```css
--gray-50:  #f9fafb   /* 最浅背景 */
--gray-100: #f3f4f6   /* 次浅背景 */
--gray-200: #e5e7eb   /* 边框 */
--gray-300: #d1d5db   /* 禁用边框 */
--gray-400: #9ca3af   /* 占位符文字 */
--gray-500: #6b7280   /* 次要文字 */
--gray-600: #4b5563   /* 正文 */
--gray-700: #374151   /* 标题 */
--gray-900: #0f172a   /* 深色文字 */
```

**效果预览：**

<div style="display: flex; gap: 2px; margin: 15px 0;">
  <div style="width: 36px; height: 36px; background: #f9fafb; border: 1px solid #e5e7eb; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #374151;">50</div>
  <div style="width: 36px; height: 36px; background: #f3f4f6; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #374151;">100</div>
  <div style="width: 36px; height: 36px; background: #e5e7eb; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #374151;">200</div>
  <div style="width: 36px; height: 36px; background: #d1d5db; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #374151;">300</div>
  <div style="width: 36px; height: 36px; background: #9ca3af; display: flex; align-items: center; justify-content: center; font-size: 9px; color: white;">400</div>
  <div style="width: 36px; height: 36px; background: #6b7280; display: flex; align-items: center; justify-content: center; font-size: 9px; color: white;">500</div>
  <div style="width: 36px; height: 36px; background: #4b5563; display: flex; align-items: center; justify-content: center; font-size: 9px; color: white;">600</div>
  <div style="width: 36px; height: 36px; background: #374151; display: flex; align-items: center; justify-content: center; font-size: 9px; color: white;">700</div>
  <div style="width: 36px; height: 36px; background: #0f172a; display: flex; align-items: center; justify-content: center; font-size: 9px; color: white;">900</div>
</div>

---

## 🖱️ 二、交互细节设计

### 2.1 过渡时间规范

```css
--transition-fast: 0.15s ease-out    /* 悬停、聚焦 */
--transition-normal: 0.25s ease-out  /* Tab 切换 */
--transition-slow: 0.35s ease-out    /* 展开/折叠 */
```

### 2.2 按钮交互

#### 普通按钮 `.btn`
- **默认**：背景 `gray-100`，边框 `gray-200`
- **悬停**：背景变深 + `translateY(-1px)` + 阴影增强
- **按下**：`translateY(0)` + 背景再深一档
- **禁用**：`opacity: 0.5` + `cursor: not-allowed`

**效果预览：**

<div style="display: flex; gap: 12px; margin: 15px 0; align-items: flex-end;">
  <div style="text-align: center;">
    <div style="padding: 8px 16px; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 12px; color: #0f172a;">Refresh</div>
    <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">默认</div>
  </div>
  <div style="text-align: center;">
    <div style="padding: 8px 16px; background: #e4e9f2; border: 1px solid #d1d5db; border-radius: 6px; font-size: 12px; color: #0f172a; transform: translateY(-2px); box-shadow: 0 2px 4px rgba(0,0,0,0.1);">Refresh</div>
    <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">悬停</div>
  </div>
  <div style="text-align: center;">
    <div style="padding: 8px 16px; background: #d1d5db; border: 1px solid #9ca3af; border-radius: 6px; font-size: 12px; color: #0f172a;">Refresh</div>
    <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">按下</div>
  </div>
  <div style="text-align: center;">
    <div style="padding: 8px 16px; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 12px; color: #0f172a; opacity: 0.5;">Refresh</div>
    <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">禁用</div>
  </div>
</div>

#### 危险按钮 `.btn.danger`
- **默认**：背景 `#fef2f2`，边框 `#fecaca`，文字 `#ef4444`
- **悬停**：背景 `#fee2e2`，边框变深

**效果预览：**

<div style="display: flex; gap: 12px; margin: 15px 0; align-items: flex-end;">
  <div style="text-align: center;">
    <div style="padding: 8px 16px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; font-size: 12px; color: #ef4444;">Clear</div>
    <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">默认</div>
  </div>
  <div style="text-align: center;">
    <div style="padding: 8px 16px; background: #fee2e2; border: 1px solid #f1b0b7; border-radius: 6px; font-size: 12px; color: #dc2626; transform: translateY(-2px); box-shadow: 0 2px 4px rgba(239,68,68,0.15);">Clear</div>
    <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">悬停</div>
  </div>
</div>

### 2.3 卡片/列表项交互

#### History 列表项
- **默认**：左边框 `3px transparent`
- **悬停**：
  - 背景变为 `gray-50`
  - 左边框变为 `3px solid #2563eb`
  - `translateX(2px)` 向右微移
- **点击**：打开对应 URL

**效果预览：**

<div style="display: flex; gap: 20px; margin: 15px 0;">
  <div style="flex: 1;">
    <div style="font-size: 10px; color: #6b7280; margin-bottom: 6px;">默认状态</div>
    <div style="background: #ffffff; padding: 12px; border-radius: 4px; border: 1px solid #f1f5f9; border-left: 3px solid transparent;">
      <div style="font-size: 12px; font-weight: 500; color: #0f172a;">Technical Doc.md</div>
      <div style="font-size: 10px; color: #64748b; margin-top: 2px;">3 分钟前</div>
    </div>
  </div>
  <div style="flex: 1;">
    <div style="font-size: 10px; color: #6b7280; margin-bottom: 6px;">悬停状态</div>
    <div style="background: #f9fafb; padding: 12px; border-radius: 4px; border: 1px solid #f1f5f9; border-left: 3px solid #2563eb; transform: translateX(2px);">
      <div style="font-size: 12px; font-weight: 500; color: #0f172a;">Technical Doc.md</div>
      <div style="font-size: 10px; color: #64748b; margin-top: 2px;">3 分钟前</div>
    </div>
  </div>
</div>

#### Cache 列表项
- **默认**：边框 `gray-100`
- **悬停**：边框变为 `primary-light`

---

## 📐 三、组件样式规范

### 3.1 Header 区域

```css
.header {
  padding: 20px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  border-bottom: 1px solid #e2e8f0;
}

.logo { width: 48px; height: 48px; }

h1 {
  font-size: 24px;
  font-weight: 600;
  color: #0f172a;
}

h1:hover {
  color: #2563eb;
  text-decoration: underline;
}
```

### 3.2 Tab 栏

```css
.tabs {
  background: #e6ebf5;  /* 稍深的背景区分 */
  border-bottom: 1px solid #e2e8f0;
}

.tab {
  padding: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #475569;
  transition: all 0.25s ease-out;
}

.tab:hover {
  background: rgba(255, 255, 255, 0.6);
  color: #0f172a;
}

.tab.active {
  background: #ffffff;
  border-bottom: 2px solid #2563eb;
  color: #0f172a;
}
```

**效果预览：**

<div style="margin: 15px 0;">
  <div style="background: #e6ebf5; display: flex; border-bottom: 1px solid #e2e8f0; border-radius: 4px 4px 0 0; overflow: hidden;">
    <div style="flex: 1; padding: 12px; text-align: center; font-size: 13px; font-weight: 500; color: #0f172a; background: #ffffff; border-bottom: 2px solid #2563eb;">History</div>
    <div style="flex: 1; padding: 12px; text-align: center; font-size: 13px; font-weight: 500; color: #475569;">Cache</div>
    <div style="flex: 1; padding: 12px; text-align: center; font-size: 13px; font-weight: 500; color: #475569;">Settings</div>
  </div>
  <div style="background: #f8fafc; padding: 15px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 4px 4px;">
    <div style="font-size: 11px; color: #64748b;">Tab 内容区域...</div>
  </div>
</div>

### 3.3 Info Section 卡片

```css
.info-section {
  background: #ffffff;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  margin-bottom: 15px;
}

.info-section h3 {
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 8px;
}
```

**效果预览：**

<div style="background: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #f1f5f9; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04); margin: 15px 0;">
  <h4 style="font-size: 14px; font-weight: 600; color: #0f172a; margin: 0 0 8px 0;">Recent History</h4>
  <div style="font-size: 12px; color: #64748b; margin-bottom: 10px;">Click to revisit recently viewed files</div>
  <div style="background: #f8fafc; padding: 10px; border-radius: 4px; border: 1px dashed #e2e8f0; text-align: center; color: #94a3b8; font-size: 11px;">
    🕒 No history yet
  </div>
</div>

### 3.4 统计卡片

```css
.stat-item {
  background: #ffffff;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid #f1f5f9;
  text-align: center;
  transition: all 0.15s ease-out;
}

.stat-item:hover {
  transform: translateY(-2px);
  border-color: #dbeafe;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.08);
}

.stat-value {
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
}

.stat-label {
  font-size: 11px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

**效果预览：**

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 15px 0;">
  <div style="background: #ffffff; padding: 12px 10px; border-radius: 6px; border: 1px solid #f1f5f9; text-align: center;">
    <div style="font-size: 18px; font-weight: 700; color: #0f172a;">45</div>
    <div style="font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">ITEMS</div>
  </div>
  <div style="background: #ffffff; padding: 12px 10px; border-radius: 6px; border: 1px solid #dbeafe; text-align: center; transform: translateY(-2px); box-shadow: 0 4px 6px rgba(37, 99, 235, 0.08);">
    <div style="font-size: 18px; font-weight: 700; color: #0f172a;">128 MB</div>
    <div style="font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">SIZE (hover)</div>
  </div>
  <div style="background: #ffffff; padding: 12px 10px; border-radius: 6px; border: 1px solid #f1f5f9; text-align: center;">
    <div style="font-size: 18px; font-weight: 700; color: #0f172a;">25%</div>
    <div style="font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">USAGE</div>
  </div>
  <div style="background: #ffffff; padding: 12px 10px; border-radius: 6px; border: 1px solid #f1f5f9; text-align: center;">
    <div style="font-size: 18px; font-weight: 700; color: #0f172a;">512 MB</div>
    <div style="font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">CAPACITY</div>
  </div>
</div>

---

## ✨ 四、动画细节

### 4.1 Tab 切换动画

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

.tab-panel.active {
  animation: fadeIn 0.2s ease-out;
}
```

### 4.2 Modal 弹出动画

```css
@keyframes slideUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.modal-content {
  animation: slideUp 0.2s ease-out;
}
```

### 4.3 按钮加载态（可选）

```css
.btn.loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.btn.loading::after {
  content: '';
  position: absolute;
  width: 16px; height: 16px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
```

---

## 📏 五、间距与圆角系统

### 5.1 间距规范

```css
--space-xs: 4px;   /* 紧凑间距 */
--space-sm: 8px;   /* 小间距 */
--space-md: 12px;  /* 中等间距 */
--space-lg: 16px;  /* 大间距 */
--space-xl: 20px;  /* 区块间距 */
```

### 5.2 圆角规范

```css
--radius-sm: 4px;  /* 按钮、小元素 */
--radius-md: 6px;  /* 卡片、输入框 */
--radius-lg: 8px;  /* 大卡片、Modal */
```

### 5.3 阴影层级

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
```

---

## 🔧 六、Toolbar 工具栏设计

> Toolbar 是 Markdown 阅读器页面顶部的固定工具栏

### 6.1 工具栏整体结构

```
┌─────────────────────────────────────────────────────────────┐
│ [≡] filename.md  ○        [-] 100% [+] [□]      [↓] [🖨]  │
│ Left            Center                          Right       │
└─────────────────────────────────────────────────────────────┘
```

- **Left**: TOC 切换按钮 + 文件名 + 处理进度指示器
- **Center**: 缩放控制（-/+）+ 缩放比例 + 布局切换
- **Right**: 下载按钮 + 打印按钮

### 6.2 样式规范

```css
#toolbar {
  height: 50px;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
}
```

### 6.3 工具栏按钮

**默认态：**
```css
.toolbar-btn {
  background: transparent;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 6px 10px;
  color: #475569;
  transition: all 0.15s ease-out;
}
```

**悬停态：**
```css
.toolbar-btn:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  color: #0f172a;
}
```

**按下态：**
```css
.toolbar-btn:active {
  background: #e2e8f0;
}
```

**禁用态：**
```css
.toolbar-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

**效果预览：**

<div style="background: #ffffff; padding: 12px 20px; border-bottom: 1px solid #e2e8f0; box-shadow: 0 2px 4px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 12px; margin: 15px 0; border-radius: 4px;">
  <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
    <div style="width: 32px; height: 32px; background: transparent; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 14px; color: #475569;">≡</div>
    <span style="font-size: 14px; font-weight: 500; color: #0f172a; cursor: pointer;">Technical Doc.md</span>
  </div>
  <div style="display: flex; align-items: center; gap: 8px;">
    <div style="width: 32px; height: 32px; background: transparent; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 16px; color: #475569;">−</div>
    <span style="min-width: 45px; text-align: center; font-size: 13px; font-weight: 500; color: #64748b; padding: 4px 8px; border-radius: 4px; cursor: pointer;">100%</span>
    <div style="width: 32px; height: 32px; background: transparent; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 16px; color: #475569;">+</div>
    <div style="width: 32px; height: 32px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #0f172a;">□</div>
  </div>
  <div style="display: flex; align-items: center; gap: 8px; flex: 1; justify-content: flex-end;">
    <div style="width: 32px; height: 32px; background: transparent; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 14px; color: #475569;">↓</div>
    <div style="width: 32px; height: 32px; background: transparent; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #475569;">🖨</div>
  </div>
</div>

### 6.4 文件名样式

```css
.file-name {
  font-size: 14px;
  font-weight: 500;
  color: #0f172a;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.15s ease-out;
}

.file-name:hover {
  color: #2563eb;
}
```

### 6.5 缩放显示

```css
.zoom-level {
  min-width: 50px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease-out;
}

.zoom-level:hover {
  background: #f1f5f9;
  color: #0f172a;
}
```

### 6.6 下载按钮加载态

**效果预览：**

<div style="display: flex; gap: 12px; margin: 15px 0; align-items: flex-end;">
  <div style="text-align: center;">
    <div style="width: 32px; height: 32px; background: transparent; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 14px; color: #475569;">↓</div>
    <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">默认</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 32px; height: 32px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 14px; color: #0f172a;">↓</div>
    <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">悬停</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 32px; height: 32px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
      <div style="width: 16px; height: 16px; border: 2px solid #94a3b8; border-top-color: #2563eb; border-radius: 50%;"></div>
    </div>
    <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">加载中</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 32px; height: 32px; background: transparent; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 14px; color: #475569; opacity: 0.5;">🖨</div>
    <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">禁用</div>
  </div>
</div>

---

## 📑 七、TOC 目录侧边栏设计

> TOC (Table of Contents) 是 Markdown 阅读器左侧的目录导航栏

### 7.1 整体布局

```
┌──────────────────┐
│ Heading 1        │  <- h1
│   Heading 2      │  <- h2 (缩进)
│     Heading 3    │  <- h3 (更多缩进)
│   Heading 2      │
│ Heading 1        │  <- 当前高亮
│   Heading 2      │
└──────────────────┘
```

### 7.2 容器样式

```css
#table-of-contents {
  width: 280px;
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
  position: fixed;
  top: 50px;
  left: 0;
  height: calc(100vh - 50px);
  overflow-y: auto;
  padding: 20px 0;
  transition: transform 0.3s ease;
}

#table-of-contents.hidden {
  transform: translateX(-100%);
}
```

### 7.3 目录项样式

**默认态：**
```css
#table-of-contents a {
  color: #475569;
  text-decoration: none;
  display: block;
  padding: 4px 8px;
  margin: 2px 12px;
  border-radius: 4px;
  font-size: 13px;
  transition: all 0.15s ease-out;
}
```

**悬停态：**
```css
#table-of-contents a:hover {
  color: #0f172a;
  background: #e2e8f0;
}
```

**激活态（当前阅读位置）：**
```css
#table-of-contents a.active {
  color: #2563eb;
  font-weight: 600;
  background: #eff6ff;
  border-left: 3px solid #2563eb;
  padding-left: 5px;
}
```

**效果预览：**

<div style="width: 240px; background: #f8fafc; border-right: 1px solid #e2e8f0; padding: 15px 0; border-radius: 4px; margin: 15px 0;">
  <div style="padding: 4px 12px; margin: 2px 12px; font-size: 13px; color: #475569; border-radius: 4px;">Introduction</div>
  <div style="padding: 4px 12px; margin: 2px 12px 2px 32px; font-size: 13px; color: #475569; border-radius: 4px; background: #e2e8f0; color: #0f172a;">Getting Started (hover)</div>
  <div style="padding: 4px 12px; margin: 2px 12px 2px 52px; font-size: 13px; color: #475569; border-radius: 4px;">Installation</div>
  <div style="padding: 4px 12px; margin: 2px 12px; font-size: 13px; color: #2563eb; font-weight: 600; background: #eff6ff; border-left: 3px solid #2563eb; border-radius: 4px;">Features (active)</div>
  <div style="padding: 4px 12px; margin: 2px 12px 2px 32px; font-size: 13px; color: #475569; border-radius: 4px;">Mermaid Support</div>
  <div style="padding: 4px 12px; margin: 2px 12px 2px 32px; font-size: 13px; color: #475569; border-radius: 4px;">LaTeX Formulas</div>
  <div style="padding: 4px 12px; margin: 2px 12px; font-size: 13px; color: #475569; border-radius: 4px;">Configuration</div>
</div>

### 7.4 响应式行为

```css
/* 桌面端：TOC 固定显示 */
@media (min-width: 1025px) {
  #toc-overlay {
    display: none !important;
  }
}

/* 移动端：TOC 作为抽屉弹出 */
@media (max-width: 1024px) {
  #table-of-contents {
    z-index: 1000;
  }
  
  #toc-overlay:not(.hidden) {
    display: block;
    background: rgba(0, 0, 0, 0.5);
  }
}
```

---

## 🖥️ 八、完整页面布局预览

### 8.1 浅色模式完整效果

<div style="background: #f5f5f5; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 20px 0;">
  <div style="background: #ffffff; padding: 10px 16px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 10px; font-size: 12px;">
    <div style="width: 28px; height: 28px; background: transparent; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #475569;">≡</div>
    <span style="font-weight: 500; color: #0f172a;">README.md</span>
    <div style="flex: 1;"></div>
    <span style="color: #64748b; font-size: 11px;">100%</span>
    <div style="width: 28px; height: 28px; background: transparent; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #475569; font-size: 10px;">↓</div>
  </div>
  <div style="display: flex;">
    <div style="width: 180px; background: #f8fafc; border-right: 1px solid #e2e8f0; padding: 12px 0; font-size: 11px;">
      <div style="padding: 3px 10px; margin: 1px 8px; color: #2563eb; font-weight: 600; background: #eff6ff; border-left: 2px solid #2563eb; border-radius: 3px;">Overview</div>
      <div style="padding: 3px 10px; margin: 1px 8px 1px 20px; color: #475569;">Installation</div>
      <div style="padding: 3px 10px; margin: 1px 8px 1px 20px; color: #475569;">Quick Start</div>
      <div style="padding: 3px 10px; margin: 1px 8px; color: #475569;">Features</div>
      <div style="padding: 3px 10px; margin: 1px 8px 1px 20px; color: #475569;">Themes</div>
    </div>
    <div style="flex: 1; padding: 20px; background: #f5f5f5;">
      <div style="background: #ffffff; padding: 20px; border-radius: 4px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
        <div style="font-size: 18px; font-weight: 600; color: #0f172a; margin-bottom: 8px;">Markdown Viewer</div>
        <div style="font-size: 11px; color: #475569; line-height: 1.6;">Write in Markdown, export to perfect Word...</div>
      </div>
    </div>
  </div>
</div>

---

## 📝 九、实施清单

### 第一步：更新 CSS 变量
- [ ] 统一 Popup 色彩变量命名
- [ ] 统一 styles.css 色彩变量命名

### 第二步：Popup 交互细节
- [ ] 按钮悬停效果增强
- [ ] 列表项悬停动画
- [ ] Tab 切换动画

### 第三步：Toolbar 样式优化
- [ ] 工具栏按钮统一样式
- [ ] 文件名悬停效果
- [ ] 缩放显示交互优化
- [ ] 下载按钮加载态动画

### 第四步：TOC 侧边栏优化
- [ ] 目录项悬停效果
- [ ] 激活态高亮样式
- [ ] 滚动跟随平滑过渡

### 第五步：细节打磨
- [ ] 统一间距和圆角
- [ ] 优化阴影效果
- [ ] 跨浏览器兼容性测试