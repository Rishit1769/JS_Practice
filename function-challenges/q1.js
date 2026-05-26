// Function Challenge Q1 - Basic Function Definition and Call
// Objective: Create a function that takes a parameter and returns a formatted string

/*
  Requirements: Write a function named makeTea that takes one parameter, typeOfTea, 
  and returns a string like "Making green tea" when called with "green".
  Store the result in a variable named teaOrder.
*/

// Function definition: Declares a function named 'makeTea'
// Parameter: typeOfTea - receives the type of tea as an argument
function makeTea(typeOfTea){
    // Return statement: Sends back a template literal with the parameter interpolated
    // Template literal uses backticks (`) and ${} for variable interpolation
    return `making ${typeOfTea}`
}

// Function call: Invokes makeTea with "green tea" as the argument
console.log(makeTea("green tea"))  // Output: making green tea