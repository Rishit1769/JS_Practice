// Static Methods - Methods that belong to the class itself, not to instances
// Static methods are called on the class, not on individual objects
class Calculator{
    // Static method - belongs to the Calculator class, not to instances
    // static keyword makes this method accessible via Calculator.add(), not instance.add()
    static add(a,b){
        // 'this' in static methods refers to the class, not an instance
        return a+b
    }
}

// Create an instance of Calculator
let calc = new Calculator()
// This would NOT work - static methods can't be called on instances
// console.log(calc.add(2,3))  // This would cause an error

// Static methods are called directly on the class name
// No need to create an instance to use static methods
console.log(Calculator.add(2,3))  // Output: 5