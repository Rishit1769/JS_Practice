// Closure Pattern - Inner function accessing outer function's variables
// Closures allow functions to access variables from their enclosing scope even after the outer function returns
function outer(){
    // Local variable that will be captured by the returned function
    let count = 4;
    // Return an inner function that forms a closure
    return function(){
        // Inner function can access and modify the outer function's 'count' variable
        count++  // Increment the count variable (closure captures it)
        return count  // Return the updated count value
    }
}

// Call outer() which returns the inner function
// The returned function 'remembers' the 'count' variable from outer's scope
let increment = outer()
// Call the returned function - it will increment and return count
console.log(increment())  // Output: 5