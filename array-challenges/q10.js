// Array Challenge Q10 - Searching for Element in Array
// Objective: Check if an array contains a specific element

// Create a bucket list array of cities
let citiesBucketList = ["mumbai","delhi","london","newyork"]

// Initialize a boolean flag to track if 'london' is found
let isLondon = false

// Loop through the array to search for 'london'
for(let i = 0;i<citiesBucketList.length;i++){
    // Check if current element equals 'london'
    if(citiesBucketList[i] == "london"){
        // Found 'london', set flag to true
        isLondon = true
    }else{
        // Not a match, skip to next iteration
        continue
    }
}

// Output whether 'london' was found in the bucket list
console.log(isLondon)  // Output: true