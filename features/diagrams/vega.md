# Vega / Vega-Lite Charts

Vega and Vega-Lite are powerful data visualization grammars. They're perfect for creating data-driven charts for business reports, analytics, and presentations.

## Vega vs Vega-Lite

| Feature | Vega-Lite | Vega |
|---------|-----------|------|
| Complexity | Simple, high-level | Complex, low-level |
| Learning Curve | Easy | Steep |
| Use Case | Quick charts | Custom visualizations |
| Recommended | ✅ For most users | Advanced users only |

**We recommend Vega-Lite** for most use cases — it's simpler and covers 90% of needs.

---

## Basic Syntax

### Vega-Lite

````markdown
```vega-lite
{
  "data": {
    "values": [
      {"category": "A", "value": 28},
      {"category": "B", "value": 55},
      {"category": "C", "value": 43}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "category", "type": "nominal"},
    "y": {"field": "value", "type": "quantitative"}
  }
}
```
````

### Vega

````markdown
```vega
{
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  ...
}
```
````

---

## Chart Types

### Bar Chart

````markdown
```vega-lite
{
  "data": {
    "values": [
      {"product": "Widget A", "sales": 28000},
      {"product": "Widget B", "sales": 55000},
      {"product": "Widget C", "sales": 43000},
      {"product": "Widget D", "sales": 91000},
      {"product": "Widget E", "sales": 81000}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "product", "type": "nominal", "axis": {"labelAngle": 0}},
    "y": {"field": "sales", "type": "quantitative", "title": "Sales ($)"},
    "color": {"field": "product", "type": "nominal", "legend": null}
  }
}
```
````

### Line Chart

````markdown
```vega-lite
{
  "data": {
    "values": [
      {"month": "Jan", "revenue": 120000},
      {"month": "Feb", "revenue": 135000},
      {"month": "Mar", "revenue": 145000},
      {"month": "Apr", "revenue": 160000},
      {"month": "May", "revenue": 155000},
      {"month": "Jun", "revenue": 175000}
    ]
  },
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "month", "type": "ordinal"},
    "y": {"field": "revenue", "type": "quantitative", "title": "Revenue ($)"}
  }
}
```
````

### Pie Chart (Arc)

````markdown
```vega-lite
{
  "data": {
    "values": [
      {"category": "Marketing", "amount": 25},
      {"category": "Engineering", "amount": 40},
      {"category": "Sales", "amount": 20},
      {"category": "Operations", "amount": 15}
    ]
  },
  "mark": {"type": "arc", "innerRadius": 50},
  "encoding": {
    "theta": {"field": "amount", "type": "quantitative"},
    "color": {"field": "category", "type": "nominal"}
  }
}
```
````

### Scatter Plot

````markdown
```vega-lite
{
  "data": {
    "values": [
      {"x": 1, "y": 2, "category": "A"},
      {"x": 2, "y": 3, "category": "A"},
      {"x": 3, "y": 5, "category": "B"},
      {"x": 4, "y": 4, "category": "B"},
      {"x": 5, "y": 6, "category": "A"},
      {"x": 6, "y": 7, "category": "B"}
    ]
  },
  "mark": "point",
  "encoding": {
    "x": {"field": "x", "type": "quantitative"},
    "y": {"field": "y", "type": "quantitative"},
    "color": {"field": "category", "type": "nominal"}
  }
}
```
````

### Area Chart

````markdown
```vega-lite
{
  "data": {
    "values": [
      {"date": "2024-01", "value": 100},
      {"date": "2024-02", "value": 150},
      {"date": "2024-03", "value": 120},
      {"date": "2024-04", "value": 180},
      {"date": "2024-05", "value": 200}
    ]
  },
  "mark": "area",
  "encoding": {
    "x": {"field": "date", "type": "temporal"},
    "y": {"field": "value", "type": "quantitative"}
  }
}
```
````

---

## Business Report Examples

### Quarterly Sales Comparison

````markdown
```vega-lite
{
  "data": {
    "values": [
      {"quarter": "Q1", "region": "North", "sales": 120},
      {"quarter": "Q1", "region": "South", "sales": 90},
      {"quarter": "Q2", "region": "North", "sales": 150},
      {"quarter": "Q2", "region": "South", "sales": 110},
      {"quarter": "Q3", "region": "North", "sales": 180},
      {"quarter": "Q3", "region": "South", "sales": 140},
      {"quarter": "Q4", "region": "North", "sales": 200},
      {"quarter": "Q4", "region": "South", "sales": 160}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "quarter", "type": "nominal"},
    "y": {"field": "sales", "type": "quantitative", "title": "Sales (K)"},
    "color": {"field": "region", "type": "nominal"},
    "xOffset": {"field": "region"}
  }
}
```
````

### KPI Dashboard Gauge

````markdown
```vega-lite
{
  "data": {"values": [{"value": 75}]},
  "layer": [
    {
      "mark": {"type": "arc", "innerRadius": 60, "outerRadius": 80, "theta": 3.14},
      "encoding": {
        "theta": {"value": 3.14},
        "color": {"value": "#eee"}
      }
    },
    {
      "mark": {"type": "arc", "innerRadius": 60, "outerRadius": 80},
      "encoding": {
        "theta": {"field": "value", "type": "quantitative", "scale": {"domain": [0, 100], "range": [0, 3.14]}},
        "color": {"value": "#4CAF50"}
      }
    },
    {
      "mark": {"type": "text", "fontSize": 24, "fontWeight": "bold"},
      "encoding": {
        "text": {"field": "value", "type": "quantitative", "format": ".0f"}
      }
    }
  ]
}
```
````

### Trend with Target Line

````markdown
```vega-lite
{
  "layer": [
    {
      "data": {
        "values": [
          {"month": "Jan", "actual": 80},
          {"month": "Feb", "actual": 90},
          {"month": "Mar", "actual": 95},
          {"month": "Apr", "actual": 110},
          {"month": "May", "actual": 105}
        ]
      },
      "mark": {"type": "line", "point": true, "color": "#1f77b4"},
      "encoding": {
        "x": {"field": "month", "type": "ordinal"},
        "y": {"field": "actual", "type": "quantitative", "title": "Performance"}
      }
    },
    {
      "data": {"values": [{"target": 100}]},
      "mark": {"type": "rule", "color": "red", "strokeDash": [4, 4]},
      "encoding": {
        "y": {"field": "target", "type": "quantitative"}
      }
    }
  ]
}
```
````

---

## Data Encoding

### Field Types

| Type | Description | Example |
|------|-------------|---------|
| `quantitative` | Numeric values | Revenue, counts |
| `nominal` | Categories | Product names, regions |
| `ordinal` | Ordered categories | Ratings (1-5), months |
| `temporal` | Date/time | Dates, timestamps |

### Encoding Channels

| Channel | Use |
|---------|-----|
| `x`, `y` | Position |
| `color` | Fill color |
| `size` | Point/mark size |
| `shape` | Point shape |
| `theta` | Angle (for pie/arc) |
| `text` | Labels |

---

## Tips for Best Results

### Keep Data Simple

- Inline data works best for small datasets
- Keep to essential fields only
- Pre-aggregate data when possible

### Customize Appearance

```json
{
  "config": {
    "view": {"stroke": null},
    "axis": {"labelFontSize": 12, "titleFontSize": 14},
    "legend": {"titleFontSize": 14}
  }
}
```

### Set Chart Size

```json
{
  "width": 400,
  "height": 300,
  ...
}
```

---

## Vega-Lite vs Mermaid

| Aspect | Vega-Lite | Mermaid |
|--------|-----------|---------|
| **Best for** | Data charts | Process flows |
| **Data** | JSON data arrays | Not data-focused |
| **Chart types** | Bar, line, scatter, etc. | Flowchart, sequence, etc. |
| **Interactivity** | Advanced | Basic |

**Use Vega-Lite** for business metrics, analytics, and data visualization.
**Use Mermaid** for flowcharts, architecture diagrams, and sequences.

---

## Learn More

- [Vega-Lite Documentation](https://vega.github.io/vega-lite/)
- [Vega-Lite Examples Gallery](https://vega.github.io/vega-lite/examples/)
- [Vega Documentation](https://vega.github.io/vega/)
