# JavaScript Practice

Structured JavaScript practice repository focused on core language fundamentals and object-oriented programming concepts.

## Overview

This repository demonstrates practical JavaScript understanding through:

- Concept-focused files for OOP and language features
- Challenge-based exercises for arrays, conditions, functions, and loops
- Small, runnable examples that reinforce one concept at a time

## Repository Structure

```text
JS_PRACTICE/
|-- helloWorld.js
|-- constructorFunction.js
|-- class.js
|-- prototypes.js
|-- encapsulation.js
|-- abstraction.js
|-- polymorphism.js
|-- static.js
|-- gettersSetters.js
|-- README.md
|-- array-challenges/
|   |-- q1.js ... q10.js
|-- condition-challenges/
|   |-- q1.js ... q5.js
|-- function-challenges/
|   |-- q1.js ... q5.js
|-- loop-challenges/
|   |-- q1.js ... q10.js
```

## JavaScript Concepts and Definitions

| Concept | Definition | Example File |
|---|---|---|
| Hello World | Basic program output using `console.log` to verify runtime setup. | `helloWorld.js` |
| Constructor Function | A function used with `new` to create object instances with shared structure. | `constructorFunction.js` |
| Class | Modern syntax for creating blueprints for objects, including constructors and methods. | `class.js` |
| Prototypes | JavaScript inheritance model where objects can inherit properties and methods through the prototype chain. | `prototypes.js` |
| Encapsulation | Restricting direct access to internal data and exposing controlled methods to interact with it. | `encapsulation.js` |
| Abstraction | Hiding complex internal implementation details and exposing only essential behavior. | `abstraction.js` |
| Polymorphism | Same method name with different behavior depending on the object or class implementation. | `polymorphism.js` |
| Static Methods | Class-level methods that belong to the class itself, not to individual instances. | `static.js` |
| Getters and Setters | Controlled property access using `get` and `set`, often for validation and formatting. | `gettersSetters.js` |

## Challenge Sets

- `array-challenges/`: Array operations and problem-solving
- `condition-challenges/`: Conditional statements and decision logic
- `function-challenges/`: Functions, parameters, return values, and callbacks
- `loop-challenges/`: Iteration patterns and loop-based logic

## Run the Code

### Prerequisite

- Node.js installed

### Command

```bash
node <file-name>.js
```

### Examples

```bash
node helloWorld.js
node class.js
node gettersSetters.js
node array-challenges/q1.js
```

## Recent Update

- Added and documented a basic `gettersSetters.js` example with setter validation for empty input.

## Learning Outcome

By working through this repository, you strengthen:

- Core JavaScript syntax and runtime confidence
- OOP fundamentals in JavaScript
- Problem-solving through focused coding exercises
- Understanding of inheritance, data protection, and method behavior
