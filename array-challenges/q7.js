// Array Challenge Q7 - Hard Copy using Spread Operator
// Objective: Create a deep/hard copy of an array (independent copy)
// Hard copy creates a new array with the same elements but separate from the original

// Create original array of top cities
let topcities = ["mumbai","berlin","new york"]

// Hard copy using spread operator (...)
// [...topcities] creates a NEW array with the same elements
// Changes to one array won't affect the other
let hardCopyCities = [...topcities]

// Display both arrays - they are now independent
console.log(topcities)  // Output: ["mumbai","berlin","new york"]
console.log(hardCopyCities)  // Output: ["mumbai","berlin","new york"]