# Markdown Complete Guide

## 1. Headings

# H1 Heading

## H2 Heading

### H3 Heading

#### H4 Heading

---

## 2. Bold and Italic

**This is bold text**

_This is italic text_

**_This is bold + italic_**

---

## 3. Lists

### Bullet List

- Apple
- Banana
- Mango

### Numbered List

1. First
2. Second
3. Third

### Nested List

- Backend
  - API
  - Database
- Frontend
  - UI
  - Logic

---

## 4. Code Blocks

Inline code example:
`print("Hello")`

Multi-line code:

```python
def greet():
    print("Hello World")
```

---

## 5. Links and Images

Link example:
[Open Google](https://google.com)

Image example:
![Sample Image](/girish-saana-fullstack/foundations/documentation/How%20a%20login%20system%20works.png)

---

## 6. Tables

| Name   | Role      | Experience |
| ------ | --------- | ---------- |
| Girish | Developer | Fresher    |

---

## 7. Task Lists

- [x] Install Python
- [x] Learn Markdown
- [ ] Build Project
- [ ] Deploy App

---

## 8. Mermaid Diagram

## Flowchart

```mermaid
flowchart TD
Start --> Login
Login --> Success
Login --> Fail
```

---

## Sequence Diagram

```mermaid
sequenceDiagram
Client->>Server: GET /items
Server-->>Client: 200 OK
```

## State Diagram

```mermaid
stateDiagram-v2
[*] --> Created
Created --> Processing
Processing --> Shipped
Shipped --> Delivered
Delivered --> [*]
```

## class diagram

```mermaid
classDiagram
class User {
  +id
  +name
  +login()
}

class Account {
  +email
  +password
}

User --> Account
```

## block diagram

```mermaid
graph LR
Browser --> Frontend
Frontend --> Backend
Backend --> Database
Backend --> ExternalAPI
```
