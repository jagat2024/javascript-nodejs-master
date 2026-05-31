/*
========================================================
            JAVASCRIPT LOOPS AND STRINGS
========================================================

Author: Jagat
Purpose: Learning and understanding JavaScript Loops
         and Strings with examples.

--------------------------------------------------------
WHAT ARE LOOPS?
--------------------------------------------------------

Loops are used to execute a block of code repeatedly
until a specified condition becomes false.

Instead of writing the same code multiple times,
we use loops to make programs shorter, cleaner,
and easier to maintain.

Common types of loops in JavaScript:

1. for loop
2. while loop
3. do...while loop
4. for...of loop
5. for...in loop

========================================================
1. FOR LOOP
========================================================

The for loop is used when the number of iterations
is known beforehand.

Syntax:

for(initialization; condition; update){
    // code
}

Example:
*/

for (let i = 1; i <= 5; i++) {
    console.log("For Loop:", i);
}

/*
Output:
For Loop: 1
For Loop: 2
For Loop: 3
For Loop: 4
For Loop: 5

Explanation:

Initialization → let i = 1
Condition      → i <= 5
Update         → i++

The loop continues until the condition becomes false.
*/


/*
========================================================
2. WHILE LOOP
========================================================

The while loop executes as long as the condition
remains true.

Syntax:

while(condition){
    // code
}
*/

let count = 1;

while (count <= 5) {
    console.log("While Loop:", count);
    count++;
}

/*
Useful when the number of iterations is unknown.
*/


/*
========================================================
3. DO-WHILE LOOP
========================================================

The do-while loop executes at least once,
even if the condition is false.

Syntax:

do{
   // code
}while(condition);
*/

let num = 1;

do {
    console.log("Do While Loop:", num);
    num++;
} while (num <= 5);


/*
========================================================
4. FOR...OF LOOP
========================================================

Used to iterate over iterable objects such as:

- Arrays
- Strings
- Maps
- Sets

Example:
*/

const language = "JavaScript";

for (const character of language) {
    console.log(character);
}

/*
Output:
J
a
v
a
S
c
r
i
p
t
*/


/*
========================================================
5. FOR...IN LOOP
========================================================

Used to iterate through object properties.
*/

const student = {
    name: "Jagat",
    age: 20,
    course: "Engineering"
};

for (const key in student) {
    console.log(key + ":", student[key]);
}

/*
Output:
name: Jagat
age: 20
course: Engineering
*/


/*
========================================================
            JAVASCRIPT STRINGS
========================================================

A string is a sequence of characters used
to represent text.

Strings can be enclosed in:

1. Double Quotes ""
2. Single Quotes ''
3. Backticks ``

Examples:
*/

let str1 = "Hello";
let str2 = 'World';
let str3 = `JavaScript`;

console.log(str1);
console.log(str2);
console.log(str3);


/*
========================================================
STRING PROPERTY: LENGTH
========================================================

Returns the number of characters in a string.
*/

let text = "JavaScript";

console.log("Length:", text.length);

/*
Output:
Length: 10
*/


/*
========================================================
toUpperCase()
========================================================

Converts all characters to uppercase.
*/

console.log(text.toUpperCase());

/*
Output:
JAVASCRIPT
*/


/*
========================================================
toLowerCase()
========================================================

Converts all characters to lowercase.
*/

console.log(text.toLowerCase());

/*
Output:
javascript
*/


/*
========================================================
charAt()
========================================================

Returns character at a specific position.
*/

console.log(text.charAt(0));

/*
Output:
J
*/


/*
========================================================
indexOf()
========================================================

Returns the position of a character or word.
*/

console.log(text.indexOf("S"));

/*
Output:
4
*/


/*
========================================================
includes()
========================================================

Checks if a string contains a value.
*/

console.log(text.includes("Script"));

/*
Output:
true
*/


/*
========================================================
slice()
========================================================

Extracts a portion of a string.
*/

console.log(text.slice(0, 4));

/*
Output:
Java
*/


/*
========================================================
replace()
========================================================

Replaces part of a string.
*/

let sentence = "Hello World";

console.log(sentence.replace("World", "JavaScript"));

/*
Output:
Hello JavaScript
*/


/*
========================================================
LOOPS WITH STRINGS
========================================================

Strings can be traversed character by character.
*/

let word = "Programming";

for (let character of word) {
    console.log(character);
}


/*
========================================================
PROGRAM 1: COUNT VOWELS
========================================================
*/

let input = "JavaScript";

let vowels = "aeiouAEIOU";
let vowelCount = 0;

for (let character of input) {
    if (vowels.includes(character)) {
        vowelCount++;
    }
}

console.log("Vowel Count:", vowelCount);


/*
========================================================
PROGRAM 2: REVERSE A STRING
========================================================
*/

let original = "Hello";
let reversed = "";

for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}

console.log("Original:", original);
console.log("Reversed:", reversed);


/*
========================================================
PROGRAM 3: PALINDROME CHECK
========================================================

A palindrome reads the same forwards
and backwards.

Examples:
madam
racecar
level
*/

let palindromeWord = "madam";

let reversedWord = palindromeWord
    .split("")
    .reverse()
    .join("");

if (palindromeWord === reversedWord) {
    console.log(palindromeWord + " is a palindrome");
} else {
    console.log(palindromeWord + " is not a palindrome");
}


/*
========================================================
REAL-WORLD USES OF LOOPS AND STRINGS
========================================================

1. Form Validation
2. Password Strength Checking
3. Search Features
4. Chat Applications
5. AI/NLP Text Processing
6. Data Analysis
7. Web Scraping
8. Log Processing
9. Dynamic Content Generation
10. Automation Scripts

========================================================
SUMMARY
========================================================

LOOPS:
- for
- while
- do...while
- for...of
- for...in

STRINGS:
- length
- toUpperCase()
- toLowerCase()
- charAt()
- indexOf()
- includes()
- slice()
- replace()

Important Practice Programs:
- Reverse String
- Count Vowels
- Palindrome Check

Mastering loops and strings is essential for:
- DSA
- Web Development
- Node.js
- AI/ML Data Processing
- Technical Interviews

========================================================
END OF FILE
========================================================
*/
