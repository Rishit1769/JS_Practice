// Abstraction Pattern - Hiding complex implementation details behind simple interfaces
// Abstraction allows users to interact with objects without knowing internal complexity
class CoffeeMachine{
    // Public method that abstracts away the complex internal machinery
    start(){
        // The actual machine startup code would be complex (hardware drivers, diagnostics, etc.)
        // But users only see a simple method call
        //Complex Code would be here in real implementation
        return `Machine Starting`
    }

    // Another abstraction - brewing process is simplified for the user
    brewing(){
        // The real brewing involves temperature control, timing, pressure, etc.
        // All hidden behind this simple method
        //Complex Code would be here in real implementation
        return `Brewing Coffee`
    }
}

// Create an instance of CoffeeMachine
let myMachine = new CoffeeMachine()

// User simply calls the method without worrying about implementation details
console.log(myMachine.start())