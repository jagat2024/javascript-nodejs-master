// ==========================================
// VARIABLES IN JAVASCRIPT
// ==========================================

// Variables are containers used to store data.

// ==========================================
// 1. var
// ==========================================

// 'var' is the old way of declaring variables.

var name = "Jagat";

console.log("Using var:");
console.log(name);

// var can be reassigned
name = "JavaScript";

console.log(name);

// ==========================================
// 2. let
// ==========================================

// 'let' is modern and recommended for variables
// whose values may change.

let age = 20;

console.log("\nUsing let:");
console.log(age);

// Reassigning value
age = 21;

console.log(age);

// ==========================================
// 3. const
// ==========================================

// 'const' is used when the value should NOT change.

const country = "India";

console.log("\nUsing const:");
console.log(country);

// Uncommenting the next line will cause an error
// country = "USA";

// ==========================================
// Variable Naming Rules
// ==========================================

// Valid variable names

let firstName = "John";
let _score = 95;
let $price = 100;
let user123 = "User";

console.log("\nVariable Naming Rules:");
console.log(firstName);
console.log(_score);
console.log($price);
console.log(user123);

// ==========================================
// Invalid Variable Names
// ==========================================

// Uncomment to test errors

// let 123name = "Invalid";
// let user-name = "Invalid";
// let let = "Invalid";

// ==========================================
// JavaScript is Dynamically Typed
// ==========================================

// A variable can hold different data types.

let data = "Hello";

console.log("\nDynamic Typing:");
console.log(data);

data = 100;

console.log(data);

data = true;

console.log(data);

// ==========================================
// Difference Between var, let, and const
// ==========================================

/*

var
- Function scoped
- Can be redeclared
- Can be reassigned

let
- Block scoped
- Cannot be redeclared
- Can be reassigned

const
- Block scoped
- Cannot be redeclared
- Cannot be reassigned

*/

// ==========================================
// Example of Block Scope
// ==========================================

{
    let city = "Kolkata";
    const pin = 700001;

    console.log("\nInside Block:");
    console.log(city);
    console.log(pin);
}

// Uncommenting below lines will cause error
// console.log(city);
// console.log(pin);

// ==========================================
// Hoisting Example
// ==========================================

console.log("\nHoisting Example:");

var x = 10;
console.log(x);

// let and const are hoisted too,
// but cannot be accessed before declaration.

// ==========================================
// Practice Variables
// ==========================================

let studentName = "Jagat";
let studentAge = 20;
let isLearningJS = true;

console.log("\nPractice Variables:");
console.log(studentName);
console.log(studentAge);
console.log(isLearningJS);

// ==========================================
// End of variables.js
// ==========================================
