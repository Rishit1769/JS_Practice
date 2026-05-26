// Loop Challenge Q3 - For-of Loop with Break Statement
// Objective: Use for-of loop to iterate and stop at a condition

/*
  Requirements: Use a for-of loop to iterate through [1, 2, 3, 4, 5] and stop when the number 4 is found.
  Store the numbers before 4 in an array named smallNumbers.
*/

// Create numbers array
let numbers = [1, 2, 3, 4, 5];

// Initialize empty array for small numbers
let smallNumbers = [];

// For-of loop: Iterates through each value directly (not using index)
// Syntax: for (const variable of iterable)
// 'num' takes each value from the numbers array
for (const num of numbers) {
    // Check if current number equals 4
    if (num === 4) {
        // Stop the loop when 4 is found
        break;
    }
    // Push numbers before 4 to the array
    smallNumbers.push(num);
}

// Output would show smallNumbers array
// console.log(smallNumbers);  // Output: [1, 2, 3]