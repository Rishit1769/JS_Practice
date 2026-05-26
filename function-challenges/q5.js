// Function Challenge Q5 - Function that Returns a Function (Higher-Order Function)
// Objective: Create a function that returns another function

/*
  Requirements: Write a function named createTeaMaker that returns another function. 
  The returned function should take one parameter, teaType, and return a message like 
  "Making green tea". Store the returned function in a variable named teaMaker and 
  call it with "green tea".
*/

// Higher-order function: Returns another function
function createTeaMaker() {
    // Return statement: Returns an anonymous arrow function
    // This returned function has access to createTeaMaker's scope (closure)
    return function (teaType) {
        return `Making ${teaType}`;
    };
}

// Store the returned function in a variable
// teaMaker now holds the function that was returned from createTeaMaker
const teaMaker = createTeaMaker();

// Call the stored function with "green tea" as argument
console.log(teaMaker("green tea"));  // Output: Making green tea 