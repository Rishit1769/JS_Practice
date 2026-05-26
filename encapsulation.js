// Encapsulation Pattern - Using private fields to hide internal data
// Encapsulation restricts direct access to object properties for data protection
class BankAccount{
    // Private field (marked with #) - cannot be accessed from outside the class
    // The '#' prefix makes 'balance' a truly private field, not accessible externally
    #balance = 0

    // Public method that controls how the private balance is modified
    deposit(amount){
        // Can only modify #balance through controlled methods
        this.#balance += amount;  // Add amount to balance
        return this.#balance;  // Return updated balance
    }

    // Public method to safely retrieve the private balance
    getBalance(){
        // Formatted output - prevents direct manipulation of balance
        return `$ ${this.#balance}`
    }
}

// Create a new BankAccount instance
let account = new BankAccount()
// Can only access balance through the getBalance() method
console.log(account.getBalance())  // Output: $ 0