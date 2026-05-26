// Polymorphism Pattern - Same method name, different implementations
// Polymorphism allows objects of different types to respond to the same method call differently
class Bird{
    // Base implementation of fly method
    fly(){
        return `Flying...`  // Default bird behavior
    }
}

// Penguin extends Bird and overrides the fly() method
class Penguin extends Bird{
    // Method Overriding - Penguin's fly() replaces Bird's fly()
    // Same method name, but different behavior specific to Penguin
    fly(){
        return `Penguins cant fly`  // Penguin-specific behavior
    }
}

// Create instances of both classes
let bird = new Bird()
let penguin = new Penguin()

// Both objects have a fly() method, but they behave differently (polymorphism)
console.log(bird.fly())  // Output: Flying...
console.log(penguin.fly())  // Output: Penguins cant fly