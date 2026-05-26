// Promise Pattern - Handle asynchronous operations with resolve/reject flow
// Promises represent an operation that may complete in the future
function fetchData(){
   // Return a new Promise that takes executor function with resolve and reject callbacks
   return new Promise((resolve,reject) =>{
        // Simulate an asynchronous operation with setTimeout
        setTimeout(() => {
            // Simulate a success/failure scenario
            let success = true;
            // Based on success, either resolve (success) or reject (failure) the promise
            if (success){
                // resolve() - Successfully completed, pass data forward
                resolve("Fetched data successfully");
            }else{
                // reject() - Failed to complete, pass error information forward
                reject("Unable to fetch data");
            }
        }, 3000);  // Wait 3 seconds before resolving/rejecting
   })
}

// Call fetchData() which returns a Promise
fetchData()
    // .then() - Handles the resolve case (success)
    .then((data) =>{
        // This block runs if the promise was resolved
        console.log(data)  // Output: Fetched data successfully
    })
    // .catch() - Handles the reject case (failure)
    .catch((error) =>{
        // This block runs if the promise was rejected
        console.log(error)
    })