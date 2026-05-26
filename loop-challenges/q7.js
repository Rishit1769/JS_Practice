// Loop Challenge Q7 - forEach Loop with Return Statement
// Objective: Use forEach to iterate and understand why break/return works differently

/*
  Requirements: Write a forEach loop that iterates through ["earl grey", "green tea", "chai", "oolong tea"].
  Stop the loop when "chai" is found, and store all previous tea types in an array named availableTeas.
*/

// Create teas array
let teas = ["earl grey", "green tea", "chai", "oolong tea"];

// Initialize empty array for available teas
let availableTeas = [];

// forEach loop: Iterates through each element and executes callback function
// Syntax: array.forEach((element) => { function body })
teas.forEach((tea) => {
  // Check if current tea is "chai"
  if (tea === "chai") {
    // return statement: In forEach, return only exits current iteration (like continue)
    // It does NOT stop the entire loop (break doesn't work in forEach)
    return;  // Exit this iteration; forEach is actually a function, so return ≠ break
  }
  // Add teas before "chai" to availableTeas
  availableTeas.push(tea);
});

// Output: ["earl grey", "green tea"]