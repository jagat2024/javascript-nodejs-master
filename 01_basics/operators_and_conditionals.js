// ==========================================================
// JAVASCRIPT OPERATORS & CONDITIONALS
// Complete Beginner Friendly Guide
// ==========================================================

// ==========================================================
// 1. ARITHMETIC OPERATORS
// ==========================================================

console.log("========== ARITHMETIC OPERATORS ==========");

let a = 10;
let b = 3;

console.log("Addition:", a + b);          
console.log("Subtraction:", a - b);       
console.log("Multiplication:", a * b);    
console.log("Division:", a / b);          
console.log("Modulus:", a % b);           
console.log("Exponent:", a ** b);         

// ==========================================================
// 2. ASSIGNMENT OPERATORS
// ==========================================================

console.log("\n========== ASSIGNMENT OPERATORS ==========");

let x = 10;

console.log("Initial Value:", x);

x += 5;
console.log("After += 5 :", x);

x -= 2;
console.log("After -= 2 :", x);

x *= 2;
console.log("After *= 2 :", x);

x /= 2;
console.log("After /= 2 :", x);

x %= 5;
console.log("After %= 5 :", x);

// ==========================================================
// 3. COMPARISON OPERATORS
// ==========================================================

console.log("\n========== COMPARISON OPERATORS ==========");

let num1 = 10;
let num2 = "10";

console.log("num1 == num2 :", num1 == num2);     
console.log("num1 === num2 :", num1 === num2);   
console.log("num1 != num2 :", num1 != num2);     
console.log("num1 !== num2 :", num1 !== num2);   
console.log("num1 > 5 :", num1 > 5);             
console.log("num1 < 20 :", num1 < 20);           
console.log("num1 >= 10 :", num1 >= 10);         
console.log("num1 <= 9 :", num1 <= 9);           

// ==========================================================
// 4. LOGICAL OPERATORS
// ==========================================================

console.log("\n========== LOGICAL OPERATORS ==========");

let age = 20;
let hasID = true;

console.log("AND (&&):", age >= 18 && hasID);
console.log("OR (||):", age < 18 || hasID);
console.log("NOT (!):", !hasID);

// ==========================================================
// 5. UNARY OPERATORS
// ==========================================================

console.log("\n========== UNARY OPERATORS ==========");

let count = 5;

console.log("Initial Value:", count);

console.log("Increment:", ++count);
console.log("Decrement:", --count);

// ==========================================================
// 6. TERNARY OPERATOR
// ==========================================================

console.log("\n========== TERNARY OPERATOR ==========");

let userAge = 17;

let result = userAge >= 18 ? "Adult" : "Minor";

console.log(result);

// ==========================================================
// 7. TYPE OPERATORS
// ==========================================================

console.log("\n========== TYPE OPERATORS ==========");

let userName = "Jagat";
let isStudent = true;
let marks = 95;

console.log(typeof userName);
console.log(typeof isStudent);
console.log(typeof marks);

// ==========================================================
// CONDITIONAL STATEMENTS
// ==========================================================

// ==========================================================
// 1. if STATEMENT
// ==========================================================

console.log("\n========== IF STATEMENT ==========");

let temperature = 35;

if (temperature > 30) {
    console.log("It is hot outside");
}

// ==========================================================
// 2. if...else STATEMENT
// ==========================================================

console.log("\n========== IF ELSE STATEMENT ==========");

let number = 7;

if (number % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// ==========================================================
// 3. if...else if...else
// ==========================================================

console.log("\n========== ELSE IF STATEMENT ==========");

let marksObtained = 85;

if (marksObtained >= 90) {
    console.log("Grade A");
} else if (marksObtained >= 70) {
    console.log("Grade B");
} else if (marksObtained >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// ==========================================================
// 4. NESTED if
// ==========================================================

console.log("\n========== NESTED IF ==========");

let loginAge = 20;
let loginID = true;

if (loginAge >= 18) {

    if (loginID) {
        console.log("Access Granted");
    } else {
        console.log("Please Bring ID");
    }

} else {
    console.log("Under Age");
}

// ==========================================================
// 5. SWITCH STATEMENT
// ==========================================================

console.log("\n========== SWITCH STATEMENT ==========");

let day = 3;

switch(day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Invalid Day");
}

// ==========================================================
// TRUTHY & FALSY VALUES
// ==========================================================

console.log("\n========== TRUTHY & FALSY ==========");

let usernameInput = "";

if (usernameInput) {
    console.log("User Found");
} else {
    console.log("No User Found");
}

// ==========================================================
// OPERATOR PRECEDENCE
// ==========================================================

console.log("\n========== OPERATOR PRECEDENCE ==========");

let result1 = 10 + 5 * 2;
console.log("Without Brackets:", result1);

let result2 = (10 + 5) * 2;
console.log("With Brackets:", result2);

// ==========================================================
// PRACTICE PROGRAM 1
// POSITIVE, NEGATIVE OR ZERO
// ==========================================================

console.log("\n========== POSITIVE / NEGATIVE / ZERO ==========");

let value = -5;

if (value > 0) {
    console.log("Positive Number");
} else if (value < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}

// ==========================================================
// PRACTICE PROGRAM 2
// LARGEST NUMBER
// ==========================================================

console.log("\n========== LARGEST NUMBER ==========");

let first = 25;
let second = 40;

if (first > second) {
    console.log("First Number is Greater");
} else {
    console.log("Second Number is Greater");
}

// ==========================================================
// PRACTICE PROGRAM 3
// SIMPLE LOGIN SYSTEM
// ==========================================================

console.log("\n========== LOGIN SYSTEM ==========");

let enteredUsername = "admin";
let enteredPassword = "1234";

if (enteredUsername === "admin" && enteredPassword === "1234") {

    console.log("Login Successful");

} else {

    console.log("Invalid Credentials");

}

// ==========================================================
// MINI PROJECT
// STUDENT RESULT SYSTEM
// ==========================================================

console.log("\n========== STUDENT RESULT SYSTEM ==========");

let studentName = "Jagat";
let studentMarks = 78;
let attendance = 85;

console.log("Student Name:", studentName);
console.log("Marks:", studentMarks);
console.log("Attendance:", attendance);

if (attendance >= 75) {

    if (studentMarks >= 90) {
        console.log("Grade A");
    } 
    else if (studentMarks >= 70) {
        console.log("Grade B");
    } 
    else if (studentMarks >= 50) {
        console.log("Grade C");
    } 
    else {
        console.log("Fail");
    }

} else {

    console.log("Attendance Too Low");

}

// ==========================================================
// END OF FILE
// ==========================================================

console.log("\n========== PROGRAM FINISHED ==========");
