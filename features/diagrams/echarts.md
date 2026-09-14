# ECharts

ECharts is a full-featured charting library. In docu.md you describe a chart as a JSON `option` object inside an `echarts` code block, and the viewer renders it live — bar, line, pie, scatter, radar, candlestick, gauge, and the rest of the ECharts catalogue.

ECharts is the best choice when you need a *presentation-grade* chart with fine control over axes, legends, labels, and series styling.

---

## Basic Syntax

````markdown
```echarts
{
  "title": { "text": "Revenue by Quarter" },
  "xAxis": { "type": "category", "data": ["Q1", "Q2", "Q3", "Q4"] },
  "yAxis": { "type": "value" },
  "series": [
    { "type": "bar", "data": [120, 200, 150, 80] }
  ]
}
```
````

The block body is a JSON object — the same object you would pass to `echarts.setOption()`. No `echarts.init()` or DOM container needed.

---

## Chart Types

### Bar Chart

````markdown
```echarts
{
  "title": { "text": "Product Sales", "left": "center" },
  "tooltip": { "trigger": "axis" },
  "xAxis": {
    "type": "category",
    "data": ["Shirts", "Cardigans", "Chiffon", "Trousers", "Heels", "Socks"]
  },
  "yAxis": { "type": "value" },
  "series": [
    { "name": "Sales", "type": "bar", "data": [5, 20, 36, 10, 10, 20] }
  ]
}
```
````

### Grouped and Stacked Bars

````markdown
```echarts
{
  "tooltip": { "trigger": "axis" },
  "legend": { "data": ["Product A", "Product B"], "top": "bottom" },
  "xAxis": { "type": "category", "data": ["Q1", "Q2", "Q3", "Q4"] },
  "yAxis": { "type": "value" },
  "series": [
    { "name": "Product A", "type": "bar", "data": [120, 200, 150, 80] },
    { "name": "Product B", "type": "bar", "data": [90, 160, 180, 120] }
  ]
}
```
````

Add `"stack": "total"` to each series to stack them instead of grouping.

### Line Chart

````markdown
```echarts
{
  "tooltip": { "trigger": "axis" },
  "xAxis": { "type": "category", "data": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
  "yAxis": { "type": "value" },
  "series": [
    {
      "name": "Revenue",
      "type": "line",
      "smooth": true,
      "areaStyle": {},
      "data": [120, 135, 145, 160, 155, 175]
    }
  ]
}
```
````

### Pie Chart

````markdown
```echarts
{
  "tooltip": { "trigger": "item" },
  "legend": { "bottom": 0 },
  "series": [
    {
      "name": "Budget",
      "type": "pie",
      "radius": ["40%", "70%"],
      "data": [
        { "value": 25, "name": "Marketing" },
        { "value": 40, "name": "Engineering" },
        { "value": 20, "name": "Sales" },
        { "value": 15, "name": "Operations" }
      ]
    }
  ]
}
```
````

### Scatter Chart

````markdown
```echarts
{
  "xAxis": { "type": "value" },
  "yAxis": { "type": "value" },
  "series": [
    {
      "type": "scatter",
      "symbolSize": 14,
      "data": [[10, 8], [20, 15], [30, 22], [45, 30], [60, 38], [75, 52]]
    }
  ]
}
```
````

### Radar Chart

````markdown
```echarts
{
  "radar": {
    "indicator": [
      { "name": "Speed", "max": 100 },
      { "name": "Quality", "max": 100 },
      { "name": "Price", "max": 100 },
      { "name": "Support", "max": 100 }
    ]
  },
  "series": [
    {
      "type": "radar",
      "data": [{ "value": [85, 72, 60, 90], "name": "Our product" }]
    }
  ]
}
```
````

---

## Chart Size

Charts default to **800 × 450**. Add `width` and `height` to the option to change the layout size — they are read by the renderer and omitted from the ECharts call itself:

```json
{
  "width": 600,
  "height": 350,
  "series": [{ "type": "bar", "data": [5, 20, 36] }]
}
```

Exports keep the same proportions and scale up for print, so the chart stays sharp in DOCX, PDF, and PNG output.

---

## Themes and Fonts

Charts follow the document theme:

- **Dark document themes** (Midnight, Nord, VSCode Dark, …) switch ECharts to its dark palette.
- The theme's font family is applied as the default `textStyle.fontFamily`, so chart labels match the surrounding text.
- The background stays transparent, so the chart blends into the page or export surface.

Set `"textStyle": { "fontFamily": "..." }` inside the option to override the font for a single chart.

---

## Export

Every rendered chart is available in the export flows:

| Output | Result |
|--------|--------|
| DOCX | High-resolution PNG embedded in the document |
| PDF / print | Vector-backed chart at print resolution |
| HTML / EPUB | Self-contained chart |
| PNG (right-click) | Raster image at the render scale |
| SVG (right-click) | Vector source for further editing |
| CLI | `documd chart.echarts --format svg -o chart.svg` |

---

## Tips

### Turn Animations Off for Static Output

Animation is disabled automatically unless you ask for it. Set `"animation": true` only when you want the live preview to animate — exports are static either way.

### Keep Data Close to the Option

Inline `data` arrays are the simplest form to review and diff. For large series, load the data in the viewer and reference it, or pre-aggregate before writing the block.

### Prefer Titles Inside the Option

An ECharts `title` travels with the chart into exports, while a Markdown heading above the block may be styled differently per theme.

---

## ECharts vs Vega-Lite

| Aspect | ECharts | Vega-Lite |
|--------|---------|-----------|
| **Input** | JSON `option` object | Declarative grammar |
| **Built-in chart types** | Very broad (incl. gauge, candlestick, radar, tree, sankey) | Broad, composable |
| **Styling control** | Detailed, per-series | Grammar-driven |
| **Best for** | Polished reports and dashboards | Quick data exploration |

**Use ECharts** when a chart must match a report or a client-facing document precisely.

---

## Learn More

- [ECharts Documentation](https://echarts.apache.org/en/index.html)
- [ECharts Option Reference](https://echarts.apache.org/en/option.html)
- [ECharts Examples Gallery](https://echarts.apache.org/examples/en/index.html)
