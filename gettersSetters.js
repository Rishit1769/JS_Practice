// Getters and Setters - Provide controlled access to object properties
// Getters allow reading values with validation, Setters allow writing values with validation
class Person {
	// Constructor to initialize the person with a name
	constructor(name) {
		// Convention: prefix private properties with underscore (_name)
		this._name = name;
	}

	// Getter - Called when accessing person1.name (without parentheses)
	// Allows custom logic before returning the value
	get name() {
		return this._name;
	}

	// Setter - Called when assigning a value: person1.name = "Aman"
	// Allows validation and custom logic before setting the value
	set name(newName) {
		// Validate that the new name is a non-empty string
		if (typeof newName === "string" && newName.trim().length > 0) {
			// Only update if validation passes; also trim whitespace
			this._name = newName.trim();
		} else {
			// Reject invalid values
			console.log("Name cannot be empty.");
		}
	}
}

// Create a new Person instance
const person1 = new Person("Rishit");

// Use the getter - person1.name calls the get name() method
console.log(person1.name);  // Output: Rishit

// Use the setter - assigns "Aman" and runs validation through set name()
person1.name = "Aman";
console.log(person1.name);  // Output: Aman

// Try to set an empty name - setter validation will reject it
person1.name = "";  // Output: Name cannot be empty.
