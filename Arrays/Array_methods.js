// ================================
// JavaScript Array Methods Examples
// ================================

const arr = [1, 2, 8, 4, 9, 6];

console.log("Original Array:", arr);

// 1. sort()
const sortedArr = [...arr].sort((a, b) => a - b);
console.log("Sorted Array:", sortedArr);

// 2. reduce()
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of Elements:", sum);

// 3. indexOf()
const index = arr.indexOf(8);
console.log("Index of 8:", index);

// 4. find()
const foundElement = arr.find(num => num === 8);
console.log("Found Element:", foundElement);

// 5. findIndex()
const foundIndex = arr.findIndex(num => num === 8);
console.log("Found Index:", foundIndex);

// 6. filter()
const greaterThanFive = arr.filter(num => num > 5);
console.log("Numbers Greater Than 5:", greaterThanFive);

// 7. map()
const doubledNumbers = arr.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

// 8. forEach()
console.log("Array Elements:");
arr.forEach(num => console.log(num));

// 9. some()
const hasEvenNumber = arr.some(num => num % 2 === 0);
console.log("Contains Even Number:", hasEvenNumber);

// 10. every()
const allPositive = arr.every(num => num > 0);
console.log("All Numbers Positive:", allPositive);

// 11. includes()
console.log("Array Includes 9:", arr.includes(9));

// 12. slice()
const slicedArray = arr.slice(1, 4);
console.log("Sliced Array:", slicedArray);

// 13. splice()
const spliceExample = [...arr];
spliceExample.splice(2, 1);
console.log("After Splice:", spliceExample);

// 14. concat()
const newArr = [10, 11];
const combinedArray = arr.concat(newArr);
console.log("Concatenated Array:", combinedArray);

// 15. reverse()
const reversedArray = [...arr].reverse();
console.log("Reversed Array:", reversedArray);
