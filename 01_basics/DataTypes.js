// ======================================================
// JAVASCRIPT DATA TYPES - COMPLETE LEARNING FILE
// ======================================================

// In JavaScript, data types define the kind of data
// a variable can store.

// JavaScript is a DYNAMICALLY TYPED language.
// This means you do not need to define datatype manually.

// Example:
let value = 10;

console.log(value); // 10
console.log(typeof value); // number

value = "Hello";

console.log(value); // Hello
console.log(typeof value); // string

// ======================================================
// TYPES OF DATA TYPES
// ======================================================

// 1. Primitive Data Types
// 2. Non-Primitive Data Types (Reference Types)


// ======================================================
// ======================================================
// PRIMITIVE DATA TYPES
// ======================================================
// ======================================================



// ======================================================
// 1. STRING
// ======================================================

// Strings are used to store text.

// Strings can be written using:
// "", '', ``

let firstName = "Jagat";
let lastName = 'Bera';
let fullName = `Jagat Bera`;

console.log(firstName);
console.log(lastName);
console.log(fullName);

console.log(typeof firstName); // string

// String Concatenation

let language = "JavaScript";

console.log("I am learning " + language);

// Template Literals

let age = 20;

console.log(`My name is ${firstName} and I am ${age} years old.`);

// String Methods

let text = "hello world";

console.log(text.length); // total characters
console.log(text.toUpperCase()); // HELLO WORLD
console.log(text.toLowerCase()); // hello world
console.log(text.includes("world")); // true
console.log(text.slice(0,5)); // hello



// ======================================================
// 2. NUMBER
// ======================================================

// Numbers include integers and decimal values.

let marks = 95;
let price = 199.99;

console.log(marks);
console.log(price);

console.log(typeof marks); // number

// Basic Arithmetic

let a = 10;
let b = 5;

console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // modulus
console.log(a ** b); // power

// Special Number Values

console.log(10 / 0); // Infinity
console.log("hello" * 2); // NaN



// ======================================================
// 3. BOOLEAN
// ======================================================

// Boolean values are:
// true or false

let isStudent = true;
let isLoggedIn = false;

console.log(isStudent);
console.log(typeof isStudent); // boolean

// Booleans are mostly used in conditions.

if(isStudent){
    console.log("Welcome Student");
}else{
    console.log("Access Denied");
}



// ======================================================
// 4. UNDEFINED
// ======================================================

// A variable declared but not assigned any value
// automatically becomes undefined.

let score;

console.log(score); // undefined
console.log(typeof score); // undefined



// ======================================================
// 5. NULL
// ======================================================

// null means intentional empty value.

let user = null;

console.log(user); // null

// Weird JavaScript behavior

console.log(typeof user); // object

// This is an old JavaScript bug.



// ======================================================
// 6. BIGINT
// ======================================================

// BigInt is used for very large numbers.

let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber); // bigint



// ======================================================
// 7. SYMBOL
// ======================================================

// Symbols create unique identifiers.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false

console.log(typeof id1); // symbol



// ======================================================
// ======================================================
// NON-PRIMITIVE DATA TYPES
// ======================================================
// ======================================================



// ======================================================
// 1. OBJECT
// ======================================================

// Objects store data in key:value pairs.

let student = {
    name: "Jagat",
    age: 20,
    course: "BTech",
    isEnrolled: true
};

console.log(student);

console.log(typeof student); // object

// Accessing Object Values

console.log(student.name);
console.log(student.age);

// Updating Object Values

student.age = 21;

console.log(student);

// Adding New Property

student.city = "Kolkata";

console.log(student);



// ======================================================
// 2. ARRAY
// ======================================================

// Arrays store multiple values in a single variable.

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

console.log(typeof fruits); // object

// Accessing Array Values

console.log(fruits[0]);
console.log(fruits[1]);

// Array Methods

fruits.push("Orange"); // add at end
console.log(fruits);

fruits.pop(); // remove from end
console.log(fruits);

fruits.unshift("Grapes"); // add at start
console.log(fruits);

fruits.shift(); // remove from start
console.log(fruits);

console.log(fruits.length);



// ======================================================
// 3. FUNCTION
// ======================================================

// Functions are reusable blocks of code.

function greet(){
    console.log("Hello World");
}

greet();

console.log(typeof greet); // function

// Function with Parameters

function add(x, y){
    return x + y;
}

console.log(add(5, 10));



// ======================================================
// TYPE CONVERSION
// ======================================================

// JavaScript can convert one datatype into another.

// Number to String

let num = 100;

console.log(typeof num);

num = String(num);

console.log(typeof num);

// String to Number

let str = "500";

console.log(typeof str);

str = Number(str);

console.log(typeof str);

// Boolean Conversion

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false



// ======================================================
// COMPARISON BETWEEN == AND ===
// ======================================================

// == checks only value
// === checks value + datatype

console.log(5 == "5"); // true
console.log(5 === "5"); // false



// ======================================================
// TYPEOF OPERATOR
// ======================================================

// typeof is used to check datatype.

console.log(typeof "Jagat");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof function(){});



// ======================================================
// PRIMITIVE VS NON-PRIMITIVE
// ======================================================

// Primitive:
// Stored by VALUE

let x = 10;
let y = x;

y = 20;

console.log(x); // 10
console.log(y); // 20

// Non-Primitive:
// Stored by REFERENCE

let obj1 = {
    name: "Jagat"
};

let obj2 = obj1;

obj2.name = "JavaScript";

console.log(obj1.name); // JavaScript
console.log(obj2.name); // JavaScript



// ======================================================
// IMPORTANT INTERVIEW POINTS
// ======================================================

// 1. JavaScript is dynamically typed.

// 2. typeof null gives "object"
// because of an old JS bug.

// 3. Arrays are technically objects.

// 4. Functions are also objects in JS.

// 5. Primitive types are immutable.



// ======================================================
// QUICK REVISION TABLE
// ======================================================

/*

PRIMITIVE TYPES

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol


NON-PRIMITIVE TYPES

1. Object
2. Array
3. Function

*/



// ======================================================
// PRACTICE QUESTIONS
// ======================================================

// Predict Outputs

console.log(typeof "100");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});



// ======================================================
// OUTPUTS
// ======================================================

/*

string
number
boolean
undefined
object
object
object

*/



// ======================================================
// FINAL NOTES
// ======================================================

// Datatypes are one of the most important concepts
// in JavaScript.

// If your datatype understanding becomes strong,
// then:
// - conditions
// - functions
// - arrays
// - objects
// - DOM
// - React
// - Node.js

// everything becomes easier.



// ======================================================
// END OF FILE
// ======================================================
