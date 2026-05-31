```javascript
// ============================================================================
//                           JAVASCRIPT ARRAYS
// ============================================================================
//
// What is an Array?
// -----------------
// An array is a special JavaScript object used to store multiple values
// in a single variable.
//
// Arrays can store:
// - Numbers
// - Strings
// - Booleans
// - Objects
// - Functions
// - Even other Arrays
//
// ============================================================================



// ============================================================================
// 1. CREATING ARRAYS
// ============================================================================

const numbers = [10, 20, 30, 40, 50];

const fruits = ["Apple", "Mango", "Banana", "Orange"];

const mixedData = [
    "Jagat",
    21,
    true,
    { city: "Mumbai" }
];

console.log("\n📌 Creating Arrays");
console.log(numbers);
console.log(fruits);
console.log(mixedData);



// ============================================================================
// 2. ACCESSING ARRAY ELEMENTS
// ============================================================================
//
// Arrays use zero-based indexing.
//
// Index:
// Apple  -> 0
// Mango  -> 1
// Banana -> 2
// Orange -> 3
//

console.log("\n📌 Accessing Elements");

console.log(fruits[0]);
console.log(fruits[2]);



// ============================================================================
// 3. MODIFYING ARRAY ELEMENTS
// ============================================================================

fruits[1] = "Pineapple";

console.log("\n📌 Modifying Elements");

console.log(fruits);



// ============================================================================
// 4. ARRAY LENGTH
// ============================================================================

console.log("\n📌 Array Length");

console.log(fruits.length);



// ============================================================================
// 5. ADDING ELEMENTS
// ============================================================================

console.log("\n📌 Adding Elements");

fruits.push("Kiwi");        // Add at End
fruits.unshift("Grapes");  // Add at Beginning

console.log(fruits);



// ============================================================================
// 6. REMOVING ELEMENTS
// ============================================================================

console.log("\n📌 Removing Elements");

fruits.pop();      // Remove Last Element
fruits.shift();    // Remove First Element

console.log(fruits);



// ============================================================================
// 7. ITERATING THROUGH ARRAYS
// ============================================================================

console.log("\n📌 For Loop");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("\n📌 For...of Loop");

for (const fruit of fruits) {
    console.log(fruit);
}



// ============================================================================
// 8. ARRAY METHODS
// ============================================================================

const marks = [85, 70, 95, 65, 90];

console.log("\n📌 includes()");
console.log(marks.includes(95));

console.log("\n📌 indexOf()");
console.log(marks.indexOf(65));

console.log("\n📌 join()");
console.log(marks.join(" - "));



// ============================================================================
// 9. SLICE METHOD
// ============================================================================
//
// Returns a new array.
// Does not modify original array.
//

console.log("\n📌 slice()");

const slicedArray = marks.slice(1, 4);

console.log(slicedArray);
console.log(marks);



// ============================================================================
// 10. SPLICE METHOD
// ============================================================================
//
// Modifies original array.
//

let nums = [1, 2, 3, 4, 5];

console.log("\n📌 splice()");

nums.splice(2, 1);

console.log(nums);



// ============================================================================
// 11. ARRAY OF OBJECTS
// ============================================================================

const students = [
    {
        name: "Jagat",
        age: 21
    },
    {
        name: "Rahul",
        age: 22
    }
];

console.log("\n📌 Array of Objects");

console.log(students[0].name);
console.log(students[1].age);






// ============================================================================
// 12. PRACTICE PROGRAM : FIND SUM OF ARRAY
// ============================================================================

const values = [10, 20, 30, 40, 50];

let sum = 0;

for (const value of values) {
    sum += value;
}

console.log("\n📌 Sum of Array");

console.log(sum);



// ============================================================================
// 13. PRACTICE PROGRAM : FIND LARGEST ELEMENT
// ============================================================================

const arr = [12, 45, 67, 23, 89, 34];

let largest = arr[0];

for (let i = 1; i < arr.length; i++) {

    if (arr[i] > largest) {
        largest = arr[i];
    }

}

console.log("\n📌 Largest Element");

console.log(largest);



// ============================================================================
// 14. PRACTICE PROGRAM : COUNT EVEN NUMBERS
// ============================================================================

const numbersList = [1, 2, 3, 4, 5, 6, 7, 8];

let evenCount = 0;

for (const num of numbersList) {

    if (num % 2 === 0) {
        evenCount++;
    }

}

console.log("\n📌 Count Even Numbers");

console.log(evenCount);



// ============================================================================
//                              SUMMARY
// ============================================================================
//
// ✔ Creating Arrays
// ✔ Accessing Elements
// ✔ Modifying Elements
// ✔ Array Length
// ✔ push()
// ✔ pop()
// ✔ shift()
// ✔ unshift()
// ✔ for Loop
// ✔ for...of Loop
// ✔ includes()
// ✔ indexOf()
// ✔ join()
// ✔ slice()
// ✔ splice()
// ✔ Array of Objects
// ✔ Shallow Copy
// ✔ Deep Copy
// ✔ Array Practice Problems
//
// Arrays are one of the most important data structures in JavaScript.
// Mastering arrays is essential before learning:
// - Objects
// - DOM Manipulation
// - React
// - Node.js
// - DSA
//
// ============================================================================
```
