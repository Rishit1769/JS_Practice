// Array Challenge Q8 - Merging Multiple Arrays
// Objective: Combine multiple arrays into a single array using concat()

// Create first array of Asian cities
let asianCities = ["mumbai","tokyo","kyoto"]

// Create second array of European cities
let europeanCities = ["london","monaco","amsterdam"]

// Create a base array with one city
let worldCities = ["new york"]

// concat() method combines arrays without modifying the original arrays
// It returns a NEW array containing all elements from all concatenated arrays
// Syntax: array1.concat(array2, array3, ...)
console.log(worldCities.concat(asianCities,europeanCities))
// Output: ["new york", "mumbai", "tokyo", "kyoto", "london", "monaco", "amsterdam"]
