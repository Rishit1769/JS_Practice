// Loop Challenge Q6 - For-in Loop with Continue Statement
// Objective: Use for-in loop to skip objects with specific property values

/*
  Requirements: Use a for-in loop to loop through an object containing city populations.
  Skip any city with a population below 3 million and store the rest in a new object named largeCities.
  
  Original object would be:
  let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
  };
*/

// Initialize empty object to store large cities
let largeCities = {};

// For-in loop: Iterate through each city in worldCities object
for (const city in worldCities) {
  // Check if city population is less than 3 million
  if (worldCities[city] < 3000000) 
    // Skip cities with population below 3 million
    continue;
  // Add cities with 3+ million population to largeCities
  largeCities[city] = worldCities[city];
}

// Output would show only large cities
// Output: { Sydney: 5000000, Tokyo: 9000000, Berlin: 3500000 }