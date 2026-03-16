# Mermaid Diagrams

Mermaid is a powerful diagramming tool that lets you create diagrams using text-based syntax. Markdown Viewer has native support for all Mermaid diagram types.

## Supported Diagram Types

- **Flowchart** — Process flows, decision trees
- **Sequence Diagram** — API calls, message flows
- **Class Diagram** — OOP class relationships
- **State Diagram** — State machines
- **Entity Relationship (ER)** — Database schemas
- **Gantt Chart** — Project timelines
- **Pie Chart** — Distribution visualization
- **Git Graph** — Branch visualization
- **Journey** — User journey maps
- **Quadrant Chart** — Four-quadrant analysis
- **Requirement Diagram** — Requirements tracing

---

## Basic Syntax

Wrap your Mermaid code in a code block with the `mermaid` language identifier:

````markdown
```mermaid
graph TD
    A[Start] --> B[Process]
    B --> C[End]
```
````

---

## Flowchart

Create process flows and decision trees.

````markdown
```mermaid
graph TB
    A[User Request] --> B{Valid?}
    B -->|Yes| C[Process Request]
    B -->|No| D[Return Error]
    C --> E[Send Response]
    D --> E
    E --> F[Log Transaction]
```
````

### Flow Directions

- `TB` — Top to Bottom
- `BT` — Bottom to Top
- `LR` — Left to Right
- `RL` — Right to Left

### Node Shapes

```
[Rectangle]
(Rounded)
{Diamond}
([Stadium])
[[Subroutine]]
[(Database)]
((Circle))
```

---

## Sequence Diagram

Perfect for documenting API calls and message flows.

````markdown
```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant A as API
    participant D as Database
    
    U->>F: Click Submit
    F->>A: POST /data
    A->>D: INSERT query
    D-->>A: Success
    A-->>F: 200 OK
    F-->>U: Show success
```
````

### Arrow Types

- `->` — Solid line
- `-->` — Dotted line
- `->>` — Solid line with arrowhead
- `-->>` — Dotted line with arrowhead

---

## Class Diagram

Document object-oriented designs.

````markdown
```mermaid
classDiagram
    class Animal {
        +String name
        +int age
        +makeSound()
    }
    class Dog {
        +String breed
        +bark()
    }
    class Cat {
        +meow()
    }
    
    Animal <|-- Dog
    Animal <|-- Cat
```
````

---

## State Diagram

Model state machines and transitions.

````markdown
```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Processing: Start
    Processing --> Success: Complete
    Processing --> Error: Fail
    Success --> [*]
    Error --> Idle: Retry
```
````

---

## Entity Relationship Diagram

Document database schemas.

````markdown
```mermaid
erDiagram
    USER ||--o{ ORDER : places
    USER {
        int id PK
        string name
        string email
    }
    ORDER ||--|{ LINE_ITEM : contains
    ORDER {
        int id PK
        date created_at
        int user_id FK
    }
    PRODUCT ||--o{ LINE_ITEM : "ordered in"
    PRODUCT {
        int id PK
        string name
        decimal price
    }
```
````

---

## Gantt Chart

Create project timelines.

````markdown
```mermaid
gantt
    title Project Schedule
    dateFormat YYYY-MM-DD
    
    section Design
    Research       :a1, 2024-01-01, 7d
    Wireframes     :a2, after a1, 5d
    
    section Development
    Frontend       :b1, after a2, 14d
    Backend        :b2, after a2, 14d
    
    section Testing
    QA Testing     :c1, after b1, 7d
```
````

---

## Pie Chart

Show distribution data.

````markdown
```mermaid
pie title Market Share
    "Chrome" : 65
    "Safari" : 19
    "Firefox" : 8
    "Edge" : 5
    "Other" : 3
```
````

---

## Tips for Best Results

### Line Breaks in Labels

Use `\n` for line breaks in labels (Markdown Viewer automatically converts these):

```mermaid
graph TD
    A[First Line\nSecond Line] --> B
```

### Keep Diagrams Focused

- Split complex diagrams into multiple smaller ones
- Use subgraphs to organize related nodes
- Limit flowcharts to ~15-20 nodes for clarity

### Theme Integration

Mermaid diagrams automatically use fonts from your selected theme for consistent styling.

---

## Common Issues

### Diagram Not Rendering?

1. Check syntax — Mermaid is sensitive to spacing and keywords
2. Validate at [Mermaid Live Editor](https://mermaid.live)
3. Ensure the code block specifies `mermaid` language

### Text Clipped?

Some very long labels may get clipped. Solutions:
- Use shorter labels
- Use line breaks (`\n`)
- Use node IDs with separate labels

---

## Learn More

- [Mermaid Official Documentation](https://mermaid.js.org/intro/)
- [Mermaid Live Editor](https://mermaid.live) — Test diagrams online
