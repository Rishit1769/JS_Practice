// Loop Challenge Q10 - For-of Loop with String Length Condition
// Objective: Use for-of loop to iterate and stop based on string length

/*
  Requirements: Use a for-of loop to iterate through 
  ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] 
  and stop when the length of the current tea name is greater than 10.
  Store the teas iterated over in an array named shortTeas.
*/

// Create tea varieties array
let teaVarieties = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];

// Initialize empty array for short tea names
let shortTeas = [];

// For-of loop: Iterate through each tea value directly
for (const tea of teaVarieties) {
    // Check if the length of current tea name is greater than 10 characters
    if (tea.length > 10) {
        // Stop the loop when a name longer than 10 characters is found
        break;  
    }
    // Add teas with names 10 characters or less to the array
    shortTeas.push(tea);
}

console.log(shortTeas);  // Output: ["chai", "green tea", "black tea"] 