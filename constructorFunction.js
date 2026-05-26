// Constructor Function Pattern - A traditional way to create objects in JavaScript
// Constructor functions use the 'new' keyword to create instances
function Car(make, model){
    // 'this' refers to the newly created object instance
    this.make = make  // Assign the make parameter to the instance's make property
    this.model = model  // Assign the model parameter to the instance's model property
}

// Create a new instance of Car by using the 'new' keyword
// This creates a new object and calls the Car function with 'this' bound to the new object
let myCar = new Car("Toyota","camry")
console.log(myCar)  // Output the Car object with its properties