// Function Challenge Q4 - Higher-Order Functions (Functions as Arguments)
// Objective: Pass a function as an argument to another function

/*
  Requirements: Write a function named processTeaOrder that takes another function, 
  makeTea, as a parameter and calls it with the argument "earl grey". 
  Return the result of calling makeTea.
*/

// Helper function: Creates a tea making string
function makeTea(teaType) {
    return `Making ${teaType}`;
}

// Higher-order function: Takes another function as a parameter
// Parameter: makeTea - a function that will be called inside processTeaOrder
function processTeaOrder(makeTea) {
    // Call the passed function with "earl grey" as argument
    return makeTea("earl grey");
}

// Call processTeaOrder and pass the makeTea function as an argument
console.log(processTeaOrder(makeTea));  // Output: Making earl grey 