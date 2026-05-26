// Array Challenge Q4 - Adding elements to array using push()
// Objective: Add a new element to the end of an array using the push() method

// Declare citiesVisited array with two cities
citiesVisited = ["mumbai","berlin"]

// push() method adds one or more elements to the end of an array
// It modifies the original array and returns the new length
citiesVisited.push("sydney")  // Array now has 3 elements

// Loop through and display the array after adding new city
for (let i = 0; i < citiesVisited.length; i++) {
    // Print the entire array (note: this prints the same array each iteration)
    console.log(citiesVisited)
    // Output: ["mumbai","berlin","sydney"] printed 3 times
}