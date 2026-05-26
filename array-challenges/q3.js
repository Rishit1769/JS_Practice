// Array Challenge Q3 - Modifying array elements
// Objective: Find and replace a specific element in an array

// Declare the teaTypes array with initial values
teaTypes = ["orange tea","lemon tea","white tea","masala chai"]

// First loop: Find 'white tea' and replace it with 'jasmine tea'
// Iterate through each element (i = 0, 1, 2, 3)
for (let i = 0; i < teaTypes.length; i++) {
    // Check if current element equals 'white tea'
    if(teaTypes[i] == "white tea"){
        // Replace it with 'jasmine tea'
        teaTypes[i] = "jasmine tea"
    }
}

// Second loop: Display all tea types after modification
for (let i = 0; i < teaTypes.length; i++) {
    // Print each tea type
    console.log(teaTypes[i])
    // Output: orange tea, lemon tea, jasmine tea, masala chai
}