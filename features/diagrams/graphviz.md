# Graphviz DOT

Graphviz DOT is a powerful graph description language for creating directed and undirected graphs. It excels at complex relationship visualization.

## When to Use DOT

- **Dependency graphs** — Software module dependencies
- **Network topology** — Infrastructure diagrams
- **State machines** — Complex state transitions
- **Organizational charts** — Hierarchies with many levels
- **Decision trees** — Complex branching logic

DOT is ideal when you need more control over layout than Mermaid provides.

---

## Basic Syntax

Wrap your DOT code in a code block with the `dot` language identifier:

````markdown
```dot
digraph G {
    A -> B -> C;
    B -> D;
}
```
````

---

## Graph Types

### Directed Graph (digraph)

Arrows show direction:

````markdown
```dot
digraph G {
    rankdir=LR;
    A -> B -> C;
    A -> D -> C;
}
```
````

### Undirected Graph (graph)

Lines without direction:

````markdown
```dot
graph G {
    A -- B -- C;
    B -- D;
}
```
````

---

## Styling Nodes

```dot
digraph G {
    // Node shapes
    box [shape=box];
    circle [shape=circle];
    diamond [shape=diamond];
    ellipse [shape=ellipse];
    
    // Node colors
    red_node [color=red, style=filled, fillcolor=lightpink];
    blue_node [color=blue, fontcolor=white, style=filled, fillcolor=darkblue];
    
    // Node labels
    node_a [label="Custom Label"];
}
```

### Common Shapes

| Shape | Description |
|-------|-------------|
| `box` | Rectangle |
| `circle` | Circle |
| `ellipse` | Ellipse (default) |
| `diamond` | Diamond |
| `plaintext` | No border |
| `record` | Record with fields |
| `doublecircle` | Double circle |
| `folder` | Folder icon |
| `cylinder` | Database cylinder |

---

## Styling Edges

```dot
digraph G {
    // Edge styles
    A -> B [style=dashed];
    A -> C [style=dotted];
    A -> D [style=bold];
    
    // Edge labels
    E -> F [label="connects to"];
    
    // Edge colors
    G -> H [color=red];
    
    // Arrowheads
    I -> J [arrowhead=diamond];
    K -> L [arrowhead=none];
}
```

---

## Layout Control

### Direction

```dot
digraph G {
    rankdir=LR;  // Left to Right
    // Options: TB (Top-Bottom), BT, LR, RL
    
    A -> B -> C;
}
```

### Clusters (Subgraphs)

````markdown
```dot
digraph G {
    subgraph cluster_frontend {
        label="Frontend";
        style=dashed;
        React; Vue; Angular;
    }
    
    subgraph cluster_backend {
        label="Backend";
        Node; Python; Go;
    }
    
    React -> Node;
    Vue -> Python;
    Angular -> Go;
}
```
````

### Rank Constraints

```dot
digraph G {
    {rank=same; A; B; C}  // Force same horizontal level
    A -> D;
    B -> E;
    C -> F;
}
```

---

## Real-World Examples

### Software Architecture

````markdown
```dot
digraph Architecture {
    rankdir=TB;
    node [shape=box, style=rounded];
    
    // Layers
    subgraph cluster_presentation {
        label="Presentation Layer";
        WebApp; MobileApp; API;
    }
    
    subgraph cluster_business {
        label="Business Layer";
        AuthService; DataService; NotificationService;
    }
    
    subgraph cluster_data {
        label="Data Layer";
        PostgreSQL [shape=cylinder];
        Redis [shape=cylinder];
        S3 [shape=folder];
    }
    
    // Connections
    WebApp -> AuthService;
    WebApp -> DataService;
    MobileApp -> AuthService;
    MobileApp -> DataService;
    API -> AuthService;
    API -> DataService;
    
    AuthService -> PostgreSQL;
    DataService -> PostgreSQL;
    DataService -> Redis;
    DataService -> S3;
    
    NotificationService -> Redis;
}
```
````

### Dependency Tree

````markdown
```dot
digraph Dependencies {
    rankdir=LR;
    node [shape=box];
    
    MainApp -> LibA;
    MainApp -> LibB;
    LibA -> LibC;
    LibA -> LibD;
    LibB -> LibD;
    LibB -> LibE;
    LibC -> LibF;
    LibD -> LibF;
}
```
````

### State Machine

````markdown
```dot
digraph StateMachine {
    node [shape=circle];
    
    start [shape=point];
    end [shape=doublecircle];
    
    start -> Idle;
    Idle -> Running [label="start()"];
    Running -> Paused [label="pause()"];
    Paused -> Running [label="resume()"];
    Running -> Stopped [label="stop()"];
    Paused -> Stopped [label="stop()"];
    Stopped -> Idle [label="reset()"];
    Stopped -> end [label="exit()"];
}
```
````

---

## Tips for Best Results

### Keep It Simple

- Limit graphs to ~30-40 nodes for clarity
- Use clusters to organize related nodes
- Let Graphviz handle layout when possible

### Use Labels Effectively

```dot
digraph G {
    A [label="User\nAuthentication"];
    B [label="API\nGateway"];
    A -> B [label="HTTP/REST"];
}
```

### Control Spacing

```dot
digraph G {
    ranksep=1.0;  // Vertical spacing
    nodesep=0.5;  // Horizontal spacing
}
```

---

## Common Issues

### Graph Too Wide/Tall?

- Change `rankdir` (TB, LR, etc.)
- Use `ranksep` and `nodesep` to adjust spacing
- Split into multiple graphs

### Nodes Overlapping?

- Increase `nodesep` value
- Use `constraint=false` on some edges
- Add invisible edges to guide layout

---

## Learn More

- [Graphviz Official Documentation](https://graphviz.org/documentation/)
- [DOT Language Reference](https://graphviz.org/doc/info/lang.html)
- [Node, Edge and Graph Attributes](https://graphviz.org/doc/info/attrs.html)
