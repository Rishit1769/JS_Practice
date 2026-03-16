class Person {
	constructor(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		if (typeof newName === "string" && newName.trim().length > 0) {
			this._name = newName.trim();
		} else {
			console.log("Name cannot be empty.");
		}
	}
}

const person1 = new Person("Rishit");

console.log(person1.name);

person1.name = "Aman";
console.log(person1.name);

person1.name = "";
