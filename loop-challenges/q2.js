// Loop Challenge Q2 - For Loop with Continue Statement
// Objective: Loop through an array and skip a specific value

/*
  Requirements: Write a for loop that loops through ["London", "New York", "Paris", "Berlin"] 
  and skips "Paris".
  Store the other cities in a new array named visitedCities.
*/

// Create the cities array
let cities = ["London", "New York", "Paris", "Berlin"]

// Initialize empty array to store visited cities (excluding Paris)
let visitedCities = []

// For loop: Standard iteration
for(let i = 0;i<cities.length;i++){
    // Check if current city is "Paris"
    if(cities[i] == "Paris"){
        // continue statement: Skip to the next iteration without executing the rest of the loop body
        continue
    }else{
        // Add non-Paris cities to the array
        visitedCities.push(cities[i])
    }
}

// Output cities except Paris
console.log(visitedCities)  // Output: ["London", "New York", "Berlin"]