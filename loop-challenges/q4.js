// Loop Challenge Q4 - For-of Loop with Continue Statement
// Objective: Use for-of loop to skip a specific value

/*
  Requirements: Use a for-of loop to iterate through ["chai", "green tea", "herbal tea", "black tea"] 
  and skip "herbal tea".
  Store the other teas in an array named preferredTeas.
*/

// Create teas array
let teas = ["chai", "green tea", "herbal tea", "black tea"];

// Initialize empty array for preferred teas
let preferredTeas = [];

// For-of loop: Iterate through each tea value
for (const tea of teas) {
  // Check if current tea is "herbal tea"
  if (tea === "herbal tea") 
    // continue statement: Skip to next iteration without adding this tea
    continue;
  // Add non-herbal teas to preferred list
  preferredTeas.push(tea);
}

// Output would show preferredTeas
// Output: ["chai", "green tea", "black tea"]