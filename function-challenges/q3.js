// Function Challenge Q3 - Arrow Function
// Objective: Use ES6 arrow function syntax for a concise function definition

// Arrow function: Modern ES6 syntax using => operator
// Parameters: price, quantity
// Syntax: const functionName = (param1, param2) => { function body }
const calculateTotal = (price,quantity) =>{
    // Return statement: Multiply price by quantity to get total cost
    return price*quantity
};

// Store the function result in a variable
let totalCost = calculateTotal(10,5)  // 10 * 5 = 50

// Output the total cost
console.log(totalCost)  // Output: 50