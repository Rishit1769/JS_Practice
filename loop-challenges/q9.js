// Loop Challenge Q9 - For Loop with Continue and Math Operation
// Objective: Loop through array, skip a value, and perform calculations

/*
  Requirements: Write a for loop that iterates through [2, 5, 7, 9].
  Skip the value 7 and multiply the rest by 2. Store the results in a new array named doubledNumbers.
*/

// Create numbers array
let numbers = [2, 5, 7, 9];

// Initialize empty array to store doubled numbers
let doubledNumbers = [];

// For loop: Standard iteration through array indices
for (let i = 0; i < numbers.length; i++) {
  // Check if current number equals 7
  if (numbers[i] === 7) {
    // continue: Skip the rest of this iteration and move to next element
    continue;  
  }
  // Double the number and push to result array
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);  // Output: [4, 10, 18]