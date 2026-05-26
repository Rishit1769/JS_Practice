// Prototype-based Inheritance - Setting up the prototype chain manually
// Create a parent object (prototype) with shared properties
let genericCar = {
    tyres: 4  // Property shared by all cars through the prototype chain
}

// Create a child object with its own specific properties
let tesla = {
    driver: "AI"  // Specific property for tesla
}

// Set the prototype relationship - tesla's prototype is now genericCar
// This means tesla will inherit properties from genericCar
Object.setPrototypeOf(tesla,genericCar)

// Display the prototype relationship
// Object.getPrototypeOf() returns the prototype object of a given object
console.log(`tesla`, Object.getPrototypeOf(tesla))