// ============================================================================
//                           JAVASCRIPT FUNCTIONS
// ============================================================================
//
// What is a Function?
// -------------------
// A function is a reusable block of code designed to perform a specific task.
// Functions help reduce code repetition, improve readability, and make
// programs easier to maintain.
//
// ============================================================================



// ============================================================================
// 1. FUNCTION DECLARATION
// ============================================================================

function greeting(userName, gender) {
    if (gender === "M") {
        console.log(`👋 Greetings Mr. ${userName}`);
    } else if (gender === "F") {
        console.log(`👋 Greetings Mrs. ${userName}`);
    } else {
        console.log(`👋 Greetings ${userName}`);
    }
}

// Function Calls
greeting("Jagat Prasanna Shaw", "M");
greeting("Anushka Hazra", "F");

// ============================================================================
// 2. FUNCTION EXPRESSION
// ============================================================================

const sum = function (x, y) {
    return x + y;
};

console.log("\n📌 Function Expression");
console.log(`Sum = ${sum(2, 3)}`);

// ============================================================================
// 3. ARROW FUNCTION (ES6)
// ============================================================================

const sumArrow = (x, y) => {
    return x + y;
};

console.log("\n📌 Arrow Function");
console.log(`Sum = ${sumArrow(10, 20)}`);

// ============================================================================
// 4. FUNCTION RETURNING VALUES
// ============================================================================

function multiply(a, b) {
    return a * b;
}

console.log("\n📌 Function Returning Value");
console.log(`Product = ${multiply(5, 4)}`);

// ============================================================================
// 5. PRIME NUMBER CHECKER
// ============================================================================
-
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
  
const number = 17;

console.log("\n📌 Prime Number Checker");

if (isPrime(number)) {
    console.log(`${number} is a Prime Number ✅`);
} else {
    console.log(`${number} is NOT a Prime Number ❌`);
}

// ============================================================================
// 6. DEFAULT PARAMETERS
// ============================================================================

function welcome(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}

console.log("\n📌 Default Parameters");
welcome();
welcome("Jagat");

// ============================================================================
// 7. CALLBACK FUNCTION
// ============================================================================

function completed() {
    console.log("Task Completed Successfully ✅");
}

function processUser(name, callback) {
    console.log(`Processing User: ${name}`);
    callback();
}

console.log("\n📌 Callback Function");
processUser("Jagat", completed);

// ============================================================================
//                                  SUMMARY
// ============================================================================

console.log(`
Topics Covered:
✔ Function Declaration
✔ Function Expression
✔ Arrow Function
✔ Return Values
✔ Prime Number Checker
✔ Default Parameters
✔ Callback Functions
`);
