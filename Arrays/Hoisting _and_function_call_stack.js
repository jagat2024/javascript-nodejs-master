// =========================================================
// 1. HOISTING
// =========================================================

// Function declarations are fully hoisted.
greet("Jagat");

function greet(name) {
    console.log("Hello,", name);
}

// ---------------------------------------------------------
// Variable Hoisting
// ---------------------------------------------------------

console.log(student); // undefined

var student = "Ankit";


// =========================================================
// 2. FUNCTION CALL STACK
// =========================================================

function function4() {
    console.log("Function 4");
}

function function3() {
    function4();
    console.log("Function 3");
}

function function2() {
    function3();
    console.log("Function 2");
}

function function1() {
    function2();
    console.log("Function 1");
    return 1;
}

const result = function1();

console.log("Returned Value:", result);


// =========================================================
// 3. FUNCTIONS RETURNING FUNCTIONS (CLOSURE BASICS)
// =========================================================

function createSquareFunction() {
    return function (num) {
        return num * num;
    };
}

const square = createSquareFunction();

const squaredValue = square(10);

console.log("Square:", squaredValue);


// =========================================================
// 4. FUNCTIONS AS FIRST-CLASS CITIZENS
// =========================================================

const operations = [
    function add(a, b) {
        return a + b;
    },

    function subtract(a, b) {
        return a - b;
    },

    function multiply(a, b) {
        return a * b;
    }
];

const addOperation = operations[0];

const sum = addOperation(5, 10);

console.log("Addition Result:", sum);
