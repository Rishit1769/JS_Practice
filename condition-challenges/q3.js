// Condition Challenge Q3 - Type Checking
// Objective: Check if a variable is a number or not

// Declare a variable with a string value
let variable = "Rishit"

// if-else statement: Check the data type of variable
// typeof operator: Returns the type of a value ("string", "number", "boolean", "object", etc.)
if(typeof(variable) == "number"){
    // This block executes if variable is a number
    console.log("It is a number")
}else{
    // This block executes if variable is NOT a number
    console.log("It is not a number")
    // Output: It is not a number (because "Rishit" is a string)
}