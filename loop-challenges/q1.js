// Loop Challenge Q1 - For Loop with Break Statement
// Objective: Loop through an array and stop when a specific value is found

/*
  Requirements: Write a for loop that loops through ["green tea", "black tea", "chai", "oolong tea"] 
  and stops the loop when it finds "chai".
  Store all teas before "chai" in a new array named selectedTeas.
*/

// Create the tea flavours array
let teaFlavours = ["green tea", "black tea", "chai", "oolong tea"]

// Initialize empty array to store selected teas
let selectedTeas = []

// For loop: i starts at 0, continues while i < array length, increments by 1
for(let i = 0;i<teaFlavours.length;i++){
    // Check if current element is "chai"
    if(teaFlavours[i] == "chai"){
        // break statement: Immediately exits the loop
        break;
    }
    // If we reach here, push the current tea to selectedTeas
    selectedTeas.push(teaFlavours[i])
}

// Output the teas before "chai"
console.log(selectedTeas)  // Output: ["green tea", "black tea"]