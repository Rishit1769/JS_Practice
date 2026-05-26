// ES6 Class Syntax - Modern way to define classes and handle inheritance
// Parent class (superclass) that defines common properties and methods
class Vehicle{
    // Constructor runs when a new instance is created
    constructor(make,model){
        this.make = make  // Store the make property on the instance
        this.model = model  // Store the model property on the instance
    }

    // Instance method that returns information about the vehicle
    start(){
        // Template literal to create a string with interpolated values
        return `${this.model} is a car from ${this.make}`
    }
}

// Inheritance - Car class extends Vehicle to inherit its properties and methods
class Car extends Vehicle{
    // Additional method specific to Car class
    drive(){
        return `${this.make} is an inheritance example`
    }
}

// Create a new instance of Car (also inherits Vehicle's constructor)
let myCar = new Car("Toyota","Camry")
// Call inherited method from Vehicle class
console.log(myCar.start())
// Call method from Car class
console.log(myCar.drive())