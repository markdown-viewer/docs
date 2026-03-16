# Canvas Diagrams

Canvas is a JSON-based format for creating spatial node-based diagrams with free positioning. It's ideal for mind maps, knowledge graphs, concept maps, and planning boards where precise spatial layout matters.

Canvas is compatible with [Obsidian Canvas](https://obsidian.md/canvas) format.

## Use Cases

- **Mind Maps** — Brainstorming and idea organization
- **Knowledge Graphs** — Connecting related concepts
- **Concept Maps** — Visual learning and understanding
- **Planning Boards** — Project planning and task organization
- **Spatial Notes** — Free-form note arrangement

---

## Basic Syntax

Wrap your Canvas JSON in a code block with the `canvas` language identifier:

````markdown
```canvas
{
  "nodes": [
    {"id": "n1", "type": "text", "text": "Central Idea", "x": 0, "y": 0, "width": 150, "height": 60}
  ],
  "edges": []
}
```
````

---

## Node Types

Canvas supports four node types:

| Type | Required Fields | Purpose |
|------|-----------------|---------|
| `text` | `text` | Display custom text content |
| `file` | `file` | Reference external files |
| `link` | `url` | External URL references |
| `group` | `label` | Visual container for grouping nodes |

### Required Attributes

All nodes require these attributes:
- `id` — Unique identifier
- `type` — One of: text, file, link, group
- `x`, `y` — Position coordinates
- `width`, `height` — Node dimensions

---

## Example: Mind Map

````markdown
```canvas
{
  "nodes": [
    {"id": "center", "type": "text", "text": "Project Ideas", "x": 200, "y": 150, "width": 150, "height": 60, "color": "4"},
    {"id": "idea1", "type": "text", "text": "Mobile App", "x": 0, "y": 0, "width": 120, "height": 50, "color": "1"},
    {"id": "idea2", "type": "text", "text": "Web Platform", "x": 400, "y": 0, "width": 120, "height": 50, "color": "2"},
    {"id": "idea3", "type": "text", "text": "API Service", "x": 0, "y": 300, "width": 120, "height": 50, "color": "5"},
    {"id": "idea4", "type": "text", "text": "Documentation", "x": 400, "y": 300, "width": 120, "height": 50, "color": "6"}
  ],
  "edges": [
    {"id": "e1", "fromNode": "center", "toNode": "idea1", "toEnd": "arrow"},
    {"id": "e2", "fromNode": "center", "toNode": "idea2", "toEnd": "arrow"},
    {"id": "e3", "fromNode": "center", "toNode": "idea3", "toEnd": "arrow"},
    {"id": "e4", "fromNode": "center", "toNode": "idea4", "toEnd": "arrow"}
  ]
}
```
````

---

## Color Presets

Nodes can be colored using preset values:

| Value | Color |
|-------|-------|
| `"1"` | Red |
| `"2"` | Orange |
| `"3"` | Yellow |
| `"4"` | Green |
| `"5"` | Cyan |
| `"6"` | Purple |

Example: `{"id": "n1", "type": "text", "text": "Important", "color": "1", ...}`

---

## Edges

Connect nodes with edges:

```json
{
  "id": "e1",
  "fromNode": "n1",
  "fromSide": "right",
  "toNode": "n2",
  "toSide": "left",
  "toEnd": "arrow"
}
```

### Edge Properties

| Property | Values | Description |
|----------|--------|-------------|
| `fromNode` | node id | Source node |
| `toNode` | node id | Target node |
| `fromSide` | `top`, `right`, `bottom`, `left` | Connection point on source |
| `toSide` | `top`, `right`, `bottom`, `left` | Connection point on target |
| `toEnd` | `arrow`, `none` | Arrow head at target |

---

## Coordinate System

- Origin (0,0) is at the **top-left**
- X increases to the **right**
- Y increases **downward**

**Tip:** Use a 100px grid for consistent spacing between nodes.

---

## Groups

Create visual containers to group related nodes:

```json
{
  "id": "group1",
  "type": "group",
  "label": "Backend Services",
  "x": 0,
  "y": 0,
  "width": 400,
  "height": 300,
  "color": "5"
}
```

Place nodes inside a group by positioning them within the group's bounds.

---

## Best Practices

1. **Plan layout first** — Sketch node positions before coding
2. **Use consistent spacing** — 100px grid works well
3. **Size nodes for content** — Allow enough space for text
4. **Use colors meaningfully** — Group related concepts by color
5. **Keep IDs simple** — Use descriptive, lowercase IDs

---

## Common Issues

| Issue | Solution |
|-------|----------|
| Nodes overlapping | Increase spacing between nodes |
| Edges not visible | Verify `fromNode`/`toNode` match node IDs exactly |
| Invalid JSON | Check for missing quotes, commas, or brackets |
| Node too small | Increase `width`/`height` for longer text |

---

## Resources

- [JSON Canvas Specification](https://jsoncanvas.org/spec/1.0/)
- [Obsidian Canvas Documentation](https://help.obsidian.md/Plugins/Canvas)
