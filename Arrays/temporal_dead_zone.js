# JavaScript Temporal Dead Zone (TDZ) - Notes & Examples

## What is Temporal Dead Zone (TDZ)?

The Temporal Dead Zone (TDZ) is the time between entering a scope and the point where a `let` or `const` variable is declared and initialized.

During this period, the variable exists in memory but cannot be accessed.

---

## Example 1: Accessing a Variable Before Declaration

```javascript
console.log(name); // ReferenceError

let name = "Jagat";
```

### Explanation

```javascript
{
    // TDZ starts

    console.log(name); // ❌ Cannot access

    let name = "Jagat";

    // TDZ ends
}
```

### Output

```javascript
ReferenceError: Cannot access 'name' before initialization
```

---

## Example 2: Accessing After Declaration

```javascript
let name = "Jagat";

console.log(name);
```

### Output

```javascript
Jagat
```

---

# var vs let

## var

```javascript
console.log(age);

var age = 20;
```

### Behind the Scenes

```javascript
var age = undefined;

console.log(age);

age = 20;
```

### Output

```javascript
undefined
```

---

## let

```javascript
console.log(age);

let age = 20;
```

### Output

```javascript
ReferenceError
```

---

## Example 3: TDZ Inside a Function

```javascript
function greet() {
    console.log(message);

    let message = "Hello";
}

greet();
```

### Output

```javascript
ReferenceError
```

---

## Example 4: Shadowing + TDZ

```javascript
let fruit = "Mango";

function showFruit() {
    console.log(fruit);

    let fruit = "Apple";
}

showFruit();
```

### Output

```javascript
ReferenceError
```

### Why?

The local variable shadows the global variable.

```javascript
let fruit = "Mango";

function showFruit() {

    // TDZ for local fruit starts

    console.log(fruit); // ❌

    let fruit = "Apple";

    // TDZ ends
}
```

---

## Example 5: const and TDZ

```javascript
console.log(PI);

const PI = 3.14;
```

### Output

```javascript
ReferenceError
```

---

## Example 6: Block Scope TDZ

```javascript
{
    console.log(city);

    let city = "Kolkata";
}
```

### Output

```javascript
ReferenceError
```

---

## Example 7: Nested Scope

```javascript
let a = 10;

{
    console.log(a);

    let b = 20;
}
```

### Output

```javascript
10
```

---

# Interview Questions

## Question 1

```javascript
let x = 1;

function test() {
    console.log(x);

    let x = 2;
}

test();
```

### Output

```javascript
ReferenceError
```

---

## Question 2

```javascript
console.log(a);

let a = 5;
```

### Output

```javascript
ReferenceError
```

---

## Question 3

```javascript
var a = 5;

{
    console.log(a);

    let a = 10;
}
```

### Output

```javascript
ReferenceError
```

---

## Question 4

```javascript
let a = 10;

function demo() {
    console.log(a);

    if (true) {
        let a = 20;
    }
}

demo();
```

### Output

```javascript
10
```

---

## Question 5

```javascript
let x = 1;

{
    console.log(x);

    const x = 2;
}
```

### Output

```javascript
ReferenceError
```

---

## Question 6

```javascript
const a = 10;

function test() {
    console.log(a);
}

test();
```

### Output

```javascript
10
```

---

# Quick Revision Table

| Feature                     | var         | let | const |
| --------------------------- | ----------- | --- | ----- |
| Hoisted                     | ✅           | ✅   | ✅     |
| Initialized During Hoisting | ✅ undefined | ❌   | ❌     |
| Temporal Dead Zone          | ❌           | ✅   | ✅     |
| Redeclaration Allowed       | ✅           | ❌   | ❌     |
| Block Scoped                | ❌           | ✅   | ✅     |

---

# Key Takeaways

1. `let` and `const` are hoisted but not initialized.
2. Accessing them before declaration causes a `ReferenceError`.
3. The period before initialization is called the Temporal Dead Zone.
4. `var` is hoisted and initialized with `undefined`.
5. Variable shadowing combined with TDZ is a common interview question.
6. TDZ exists for both `let` and `const`.
7. Block scope and function scope can create separate TDZ regions.
