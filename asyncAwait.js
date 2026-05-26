// Async/Await Pattern - Cleaner syntax for handling asynchronous code
// Async/await makes asynchronous code look and behave more like synchronous code

// Helper function that returns a Promise
function fetchData(){
    return new Promise((resolve,reject) =>{
        // Simulate network delay with setTimeout
        setTimeout(() => {
            // Resolve with user data after 3 seconds
            resolve({name: "rishitcodes",url: "rishit.codes"});
        }, 3000);
    });
}

// async keyword - Marks this function as asynchronous, allows use of await
async function fetchUserData() {
    // try block - Wraps code that might throw errors or reject promises
    try {
        console.log("data fetched successfully")
        // await keyword - Pauses execution until the Promise settles
        // Code looks synchronous but actually waits for the Promise
        let data = await fetchData();
        console.log(data)  // This runs after fetchData() resolves
    } catch (error) {
        // catch block - Handles any errors thrown or promises rejected
        // Runs if fetchData() rejects or any error occurs in try block
        console.error("Error fetching data")
    }
}

// Call the async function - it returns a Promise
fetchUserData()