# Infographic Charts

Infographic is a specialized chart type for creating statistical charts, infographics, and data presentations. It uses a simple, human-readable syntax designed for quick creation of visual data displays.

## What is Infographic?

Infographic provides pre-designed chart templates optimized for presentations and reports. Unlike Vega-Lite which requires JSON, Infographic uses a simple YAML-like syntax.

---

## Basic Syntax

````markdown
```infographic
infographic <template-name>
data
  title Your Title
  items
    - label Item 1
      value 100
    - label Item 2
      value 200
```
````

---

## Available Templates

### Column Chart

Compare values across categories.

````markdown
```infographic
infographic column-chart
data
  title Quarterly Revenue
  items
    - label Q1
      value 150
    - label Q2
      value 200
    - label Q3
      value 180
    - label Q4
      value 250
```
````

### Bar Chart

Horizontal comparison.

````markdown
```infographic
infographic bar-chart
data
  title Department Budget
  items
    - label Marketing
      value 80000
    - label Engineering
      value 150000
    - label Sales
      value 60000
    - label Operations
      value 45000
```
````

### Pie Chart

Show proportions.

````markdown
```infographic
infographic pie-chart
data
  title Market Share
  items
    - label Product A
      value 45
    - label Product B
      value 30
    - label Product C
      value 25
```
````

### Progress Chart

Show completion or achievement.

````markdown
```infographic
infographic progress-chart
data
  title Project Completion
  items
    - label Phase 1
      value 100
    - label Phase 2
      value 75
    - label Phase 3
      value 30
```
````

### Comparison Chart

Side-by-side comparisons.

````markdown
```infographic
infographic comparison-chart
data
  title Feature Comparison
  items
    - label Performance
      value1 85
      value2 72
    - label Reliability
      value1 90
      value2 88
    - label Cost
      value1 65
      value2 80
```
````

---

## Use Cases

### Business Presentations

- Revenue summaries
- KPI dashboards
- Market analysis
- Budget breakdowns

### Reports

- Quarterly reviews
- Progress updates
- Comparative analysis
- Statistical summaries

### Marketing Materials

- Product comparisons
- Survey results
- Growth metrics
- Customer statistics

---

## Infographic vs Other Chart Types

| Feature | Infographic | Vega-Lite | Mermaid Pie |
|---------|-------------|-----------|-------------|
| Syntax | Simple YAML-like | JSON | Text-based |
| Learning Curve | Very Easy | Moderate | Easy |
| Templates | Pre-designed | Custom | Basic |
| Customization | Limited | Extensive | Limited |
| Best For | Quick presentations | Complex data viz | Simple charts |

### When to Use Infographic

✅ **Use Infographic when:**
- You need quick, attractive charts
- You want pre-designed templates
- You're creating presentations or summaries
- Simple syntax is preferred

❌ **Use Vega-Lite instead when:**
- You need complex data transformations
- You want full customization
- You have time-series or multi-dimensional data
- You need interactive features

---

## Tips for Best Results

### Keep Data Concise

- Limit to 5-7 items per chart for readability
- Use round numbers when possible
- Keep labels short

### Choose the Right Template

| Data Type | Recommended Template |
|-----------|---------------------|
| Categories comparison | Column or Bar |
| Proportions | Pie |
| Progress/Completion | Progress |
| Two-way comparison | Comparison |

### Pair with Context

Infographics work best when paired with explanatory text:

````markdown
## Q3 Performance Highlights

Our third quarter showed significant growth across all regions:

```infographic
infographic column-chart
data
  title Regional Growth
  items
    - label North
      value 23
    - label South
      value 18
    - label East
      value 31
    - label West
      value 27
```

The Eastern region led with 31% growth, driven by new product launches.
````

---

## Common Issues

### Syntax Errors

Infographic is indentation-sensitive. Make sure:
- Use consistent indentation (2 spaces recommended)
- `data`, `items`, and item properties are properly nested
- Each item has required properties (`label`, `value`)

### Template Not Found

If you get a template error:
- Check the template name spelling
- Use lowercase with hyphens (e.g., `column-chart`, not `ColumnChart`)

---

## Learn More

Infographic is powered by [AntV Infographic](https://github.com/antvis/infographic).
