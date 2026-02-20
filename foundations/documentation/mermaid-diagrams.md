# Mermaid Diagrams

This file contains system diagrams created using Mermaid.

## Block Diagram — Web App

```mermaid
graph LR
Browser --> Frontend
Frontend --> Backend
Backend --> Database
Backend --> ExternalAPI
```

## Flowchart — Login Process

```mermaid
flowchart TD
Start --> EnterCredentials
EnterCredentials --> Validate
Validate -->|Correct| Dashboard
Validate -->|Wrong| Error
Error --> EnterCredentials
```

## Sequence Diagram — API Request

```mermaid
sequenceDiagram
Client->>Server: Request Data
Server->>Database: Query
Database-->>Server: Result
Server-->>Client: JSON Response
```

## State Diagram — Signup Flow

```mermaid
stateDiagram-v2
[*] --> EnterDetails
EnterDetails --> Validating
Validating --> Success
Validating --> Error
Error --> EnterDetails
Success --> [*]
```

## state diagram traffic signal

```mermaid
stateDiagram-v2
[*] --> Red
Red --> Green
Green --> Yellow
Yellow --> Red
```
