# PlantUML Diagrams

PlantUML is a classic UML modeling tool that lets you create professional diagrams using simple text syntax. Markdown Viewer supports rendering PlantUML diagrams directly in your Markdown documents.

## Supported Diagram Types

- **Sequence Diagram** — API calls, message flows, interactions
- **Class Diagram** — OOP class relationships, interfaces, inheritance
- **Activity Diagram** — Workflows, business processes
- **Use Case Diagram** — System requirements, actor interactions
- **State Diagram** — State machines, lifecycle modeling
- **Component Diagram** — System architecture, dependencies
- **Object Diagram** — Instance relationships

---

## Basic Syntax

Wrap your PlantUML code in a code block with the `plantuml` language identifier:

````markdown
```plantuml
@startuml
Alice -> Bob: Hello
Bob --> Alice: Hi!
@enduml
```
````

You can also use `puml` as the language identifier:

````markdown
```puml
@startuml
Alice -> Bob: Hello
@enduml
```
````

---

## Sequence Diagram

Perfect for documenting API calls and message flows.

````markdown
```plantuml
@startuml
actor User
participant "Frontend" as F
participant "API Gateway" as G
participant "User Service" as S
database "Database" as DB

User -> F : Login request
F -> G : POST /api/login
G -> S : Validate credentials
S -> DB : Query user
DB --> S : User data
S --> G : JWT Token
G --> F : 200 OK + Token
F --> User : Login success
@enduml
```
````

### Fragments

Use `alt`, `loop`, `opt` for conditional and repeated flows:

````markdown
```plantuml
@startuml
participant Client
participant Server
database DB

Client -> Server : Request data

alt Cache hit
  Server --> Client : Return cached data
else Cache miss
  Server -> DB : Query database
  DB --> Server : Return data
  Server --> Client : Return data
end
@enduml
```
````

---

## Class Diagram

Define classes, interfaces, and relationships.

````markdown
```plantuml
@startuml
class Animal {
  +String name
  +int age
  +makeSound()
}

class Dog {
  +String breed
  +fetch()
}

class Cat {
  +boolean indoor
  +purr()
}

Animal <|-- Dog
Animal <|-- Cat
@enduml
```
````

### Relationship Types

```
A <|-- B    Inheritance
A <|.. B    Implementation
A *-- B     Composition
A o-- B     Aggregation
A --> B     Association
A ..> B     Dependency
```

---

## Activity Diagram

Model workflows and business processes.

````markdown
```plantuml
@startuml
start
:Receive Order;
if (Payment Valid?) then (yes)
  :Process Order;
  fork
    :Pack Items;
  fork again
    :Generate Invoice;
  end fork
  :Ship Order;
else (no)
  :Reject Order;
  :Notify Customer;
endif
stop
@enduml
```
````

---

## Use Case Diagram

Define system requirements and actor interactions.

````markdown
```plantuml
@startuml
left to right direction
actor Customer
actor Admin

rectangle "Order System" {
  usecase "Place Order" as UC1
  usecase "Cancel Order" as UC2
  usecase "Track Order" as UC3
  usecase "Manage Orders" as UC4
}

Customer --> UC1
Customer --> UC2
Customer --> UC3
Admin --> UC4
@enduml
```
````

---

## State Diagram

Model state machines and lifecycle transitions.

````markdown
```plantuml
@startuml
[*] --> Draft
Draft --> Review : Submit
Review --> Approved : Approve
Review --> Draft : Reject
Approved --> Published : Publish
Published --> Archived : Archive
Archived --> [*]
@enduml
```
````

---

## Tips for Best Results

### Keep Diagrams Focused

- Split complex diagrams into multiple smaller ones
- Use aliases to keep code readable
- Limit diagrams to a manageable number of elements for clarity

### Theme Integration

PlantUML diagrams automatically adapt to your selected theme for consistent styling.

### Standalone Files

You can also create standalone `.plantuml` or `.puml` files and open them directly in Markdown Viewer.

---

## Common Issues

### Diagram Not Rendering?

1. Check syntax — ensure `@startuml` and `@enduml` tags are present
2. Verify the code block specifies `plantuml` or `puml` language
3. Check for typos in arrow syntax (`->`, `-->`, `<--`)

### Layout Issues?

- Use `left to right direction` for horizontal layouts
- Use aliases (`as`) to control element naming
- Add `skinparam` settings to customize appearance

---

## Learn More

- [PlantUML Official Documentation](https://plantuml.com/)
- [PlantUML Language Reference](https://plantuml.com/guide)
