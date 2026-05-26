// Array Challenge Q6 - Soft Copy vs Shallow Copy
// Objective: Demonstrate what happens when assigning array to another variable (soft copy)
// WARNING: Soft copy creates only a reference, not a separate array!

// Create original array
let popularTeas = ["green tea","oolong tea","chai"]

// Soft copy: Assign the same reference to a new variable
// Both variables point to the SAME array in memory
let softCopyTeas = popularTeas

// Modify the original array by removing the last element
// Since both variables reference the same array, both are affected
popularTeas.pop()  // Removes "chai"

// Display both variables - they show the same modified array
console.log(popularTeas)  // Output: ["green tea","oolong tea"]
console.log(softCopyTeas)  // Output: ["green tea","oolong tea"] - SAME as popularTeas!