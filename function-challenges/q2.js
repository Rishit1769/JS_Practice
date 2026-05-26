// Function Challenge Q2 - Nested Functions (Function Inside Function)
// Objective: Create a function that contains another function (inner function)

/*
  Requirements: Create a function named orderTea that takes one parameter, teaType. 
  Inside this function, create another function named confirmOrder that returns a message 
  like "Order confirmed for chai". Call confirmOrder from within orderTea and return the result.
*/

// Outer function: Takes teaType as parameter
function orderTea(teaType){
    // Inner function: Nested function defined inside orderTea
    // This function has access to the outer function's variables (closure)
    function confirmOrder(type){
        // Template literal using the outer function's 'teaType' variable
        return `confirmed ${teaType}`
    }
    // Call the inner function and return its result
    return confirmOrder(teaType)
}

// Call the outer function
console.log(orderTea("green tea"))  // Output: confirmed green tea