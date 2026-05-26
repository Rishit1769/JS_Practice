// Condition Challenge Q4 - Boolean Value Checking
// Objective: Check if a boolean value is true or false

// Declare a boolean variable with value false
let ready = false

// if-else statement: Check the boolean value
// ! operator: Logical NOT (inverts the boolean value)
// !ready means "NOT ready", so if ready is false, !ready is true
if(!ready){
    // This block executes if ready is FALSE (since !false = true)
    console.log("It is false")
    // Output: It is false
}else{
    // This block executes if ready is TRUE
    console.log("It is true")
}