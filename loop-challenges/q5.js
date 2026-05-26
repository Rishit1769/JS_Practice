// Loop Challenge Q5 - For-in Loop with Break Statement
// Objective: Use for-in loop to iterate through object properties and stop at a condition

/*
  Requirements: Use a for-in loop to loop through an object containing city populations.
  Stop the loop when the population of "Berlin" is found and store all previous cities' 
  populations in a new object named cityPopulations.
  
  Original object would be:
  let citiesPopulation = {
      "London": 8900000,
      "New York": 8400000,
      "Paris": 2200000,
      "Berlin": 3500000
  };
*/

// Initialize empty object to store city populations before Berlin
let cityPopulations = {};

// For-in loop: Iterates through the keys (property names) of an object
// Syntax: for (const key in object)
// 'city' will be each key name from citiesPopulation
for (const city in citiesPopulation) {
    // Check if current city is "Berlin"
    if (city === "Berlin") {
        // Stop the loop when Berlin is reached
        break;
    }
    // Store the population of cities before Berlin
    cityPopulations[city] = citiesPopulation[city];
}

console.log(cityPopulations);
// Output: { London: 8900000, 'New York': 8400000, Paris: 2200000 } 
