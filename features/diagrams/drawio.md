# drawio Diagrams

drawio (also known as diagrams.net) is a powerful diagramming tool that uses XML format. Markdown Viewer supports rendering drawio diagrams directly in Markdown, making it ideal for architecture diagrams, network topologies, and complex technical documentation.

## Use Cases

- **Architecture Diagrams** — System design, cloud infrastructure
- **Network Topologies** — Network layouts, connectivity maps
- **UML Diagrams** — Class diagrams, sequence diagrams, use cases
- **Flowcharts** — Complex process flows with custom shapes
- **Technical Documentation** — Pixel-perfect diagrams with rich styling

---

## Basic Syntax

Wrap your drawio XML in a code block with the `drawio` language identifier:

````markdown
```drawio
<?xml version="1.0" encoding="UTF-8"?>
<mxfile>
  <diagram name="Page-1" id="page1">
    <mxGraphModel dx="800" dy="600" grid="1" gridSize="10">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        <!-- Your shapes here -->
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
```
````

---

## Document Structure

Every drawio diagram requires this basic structure:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<mxfile>
  <diagram name="Page-1" id="unique-id">
    <mxGraphModel dx="800" dy="600" grid="1" gridSize="10">
      <root>
        <mxCell id="0"/>                    <!-- Root cell (required) -->
        <mxCell id="1" parent="0"/>         <!-- Default parent (required) -->
        <!-- Your content here -->
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
```

**Important:** The two root `<mxCell>` elements with `id="0"` and `id="1"` are required for the diagram to render.

---

## Creating Shapes

Shapes are created using `<mxCell>` with `vertex="1"`:

```xml
<mxCell id="shape1" value="My Box" style="rounded=0;whiteSpace=wrap;html=1;" 
        parent="1" vertex="1">
  <mxGeometry x="100" y="100" width="120" height="60" as="geometry"/>
</mxCell>
```

### Common Shapes

| Shape | Style |
|-------|-------|
| Rectangle | `rounded=0;whiteSpace=wrap;html=1;` |
| Rounded Rectangle | `rounded=1;whiteSpace=wrap;html=1;` |
| Ellipse/Circle | `ellipse;whiteSpace=wrap;html=1;` |
| Diamond | `rhombus;whiteSpace=wrap;html=1;` |
| Cylinder (Database) | `shape=cylinder;whiteSpace=wrap;html=1;` |
| Cloud | `ellipse;shape=cloud;whiteSpace=wrap;html=1;` |

---

## Creating Edges

Edges connect shapes using `<mxCell>` with `edge="1"`:

```xml
<mxCell id="edge1" style="edgeStyle=orthogonalEdgeStyle;rounded=0;endArrow=classic;" 
        parent="1" source="shape1" target="shape2" edge="1">
  <mxGeometry relative="1" as="geometry"/>
</mxCell>
```

### Arrow Types

| Arrow | Value |
|-------|-------|
| Classic | `endArrow=classic;` |
| Block | `endArrow=block;` |
| Open | `endArrow=open;` |
| Oval | `endArrow=oval;` |
| Diamond | `endArrow=diamond;` |
| None | `endArrow=none;` |

---

## Style Properties

Styles are semicolon-separated key-value pairs:

```
style="key1=value1;key2=value2;key3=value3;"
```

### Shape Styles

| Property | Values | Description |
|----------|--------|-------------|
| `fillColor` | `#FFFFFF`, `none` | Background color |
| `strokeColor` | `#000000`, `none` | Border color |
| `strokeWidth` | `1`, `2`, `3`... | Border width |
| `rounded` | `0`, `1` | Rounded corners |
| `fontColor` | `#000000` | Text color |
| `fontSize` | `12`, `14`, `16`... | Font size |
| `fontStyle` | `0`=normal, `1`=bold, `2`=italic | Text style |
| `align` | `left`, `center`, `right` | Horizontal alignment |
| `verticalAlign` | `top`, `middle`, `bottom` | Vertical alignment |

### Edge Styles

| Property | Values | Description |
|----------|--------|-------------|
| `edgeStyle` | `orthogonalEdgeStyle`, `elbowEdgeStyle` | Edge routing |
| `curved` | `0`, `1` | Curved edges |
| `dashed` | `0`, `1` | Dashed line |

---

## Example: Simple Architecture

````markdown
```drawio
<?xml version="1.0" encoding="UTF-8"?>
<mxfile>
  <diagram name="Architecture" id="arch1">
    <mxGraphModel dx="800" dy="600" grid="1" gridSize="10">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        
        <!-- Client -->
        <mxCell id="client" value="Client" 
                style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" 
                parent="1" vertex="1">
          <mxGeometry x="50" y="100" width="100" height="60" as="geometry"/>
        </mxCell>
        
        <!-- Server -->
        <mxCell id="server" value="Server" 
                style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;" 
                parent="1" vertex="1">
          <mxGeometry x="250" y="100" width="100" height="60" as="geometry"/>
        </mxCell>
        
        <!-- Database -->
        <mxCell id="db" value="Database" 
                style="shape=cylinder;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d79b00;" 
                parent="1" vertex="1">
          <mxGeometry x="450" y="90" width="80" height="80" as="geometry"/>
        </mxCell>
        
        <!-- Edges -->
        <mxCell id="e1" style="edgeStyle=orthogonalEdgeStyle;rounded=0;endArrow=classic;" 
                parent="1" source="client" target="server" edge="1">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="e2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;endArrow=classic;" 
                parent="1" source="server" target="db" edge="1">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
```
````

---

## Color Palette

Recommended colors for professional diagrams:

| Color | Fill | Stroke | Usage |
|-------|------|--------|-------|
| Light Blue | `#dae8fc` | `#6c8ebf` | Information, clients |
| Light Green | `#d5e8d4` | `#82b366` | Success, servers |
| Light Yellow | `#fff2cc` | `#d6b656` | Warning |
| Light Orange | `#ffe6cc` | `#d79b00` | Databases |
| Light Red | `#f8cecc` | `#b85450` | Danger, external |
| Light Purple | `#e1d5e7` | `#9673a6` | Special |

---

## Containers/Swimlanes

Group related elements:

```xml
<mxCell id="container1" value="Backend Services" 
        style="swimlane;whiteSpace=wrap;html=1;fillColor=#f5f5f5;" 
        parent="1" vertex="1">
  <mxGeometry x="50" y="50" width="300" height="200" as="geometry"/>
</mxCell>
```

Place child elements inside by setting their `parent` to the container's ID.

---

## Best Practices

1. **Use meaningful IDs** — Makes edges easier to connect
2. **Align to grid** — Use `gridSize="10"` and position on multiples of 10
3. **Consistent styling** — Use the same colors for similar elements
4. **Add labels** — Use the `value` attribute for shape labels
5. **Test incrementally** — Build complex diagrams step by step

---

## Common Issues

| Issue | Solution |
|-------|----------|
| Diagram not rendering | Check for missing root cells (id="0" and id="1") |
| Shapes not visible | Verify `vertex="1"` on shape cells |
| Edges not connecting | Check `source` and `target` match shape IDs |
| XML parse error | Validate XML syntax, check for unclosed tags |

---

## Resources

- [drawio Official](https://www.drawio.com/)
- [drawio Documentation](https://www.drawio.com/doc/)
- [diagrams.net](https://www.diagrams.net/)
