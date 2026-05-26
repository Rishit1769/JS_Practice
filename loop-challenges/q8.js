// Loop Challenge Q8 - forEach Loop Skipping Elements
// Objective: Use forEach to iterate and skip specific values

/*
  Requirements: Write a forEach loop that iterates through ["Berlin", "Tokyo", "Sydney", "Paris"].
  Skip "Sydney" and store the other cities in a new array named traveledCities.
*/

// Create cities array
let citiesToVisit = ["Berlin", "Tokyo", "Sydney", "Paris"];

// Initialize empty array for traveled cities
let traveledCities = [];

// forEach loop: Executes callback function for each element
citiesToVisit.forEach((city) => {
  // Check if current city is "Sydney"
  if (city === "Sydney") {
    // return statement: Skips to the next iteration (similar to continue)
    // The rest of this callback is not executed for this element
    return;  
  }
  // Add non-Sydney cities to traveledCities
  traveledCities.push(city);
});

// Output: ["Berlin", "Tokyo", "Paris"]