// 'this' Context and Function Binding
// Demonstrates how 'this' keyword refers to different objects depending on context
const person = {
    name: "Rishit",
    // Method that uses 'this' to refer to the parent object
    greet(){
        // 'this' refers to the 'person' object when called as person.greet()
        console.log(`Hi, I am ${this.name}`)
    },
};

// Call the method directly - 'this' refers to 'person' object
person.greet()  // Output: Hi, I am Rishit

// bind() creates a new function with 'this' permanently bound to a specific object
// The new object {name:"Raunak"} becomes the permanent 'this' context
let boundGreet = person.greet.bind({name:"Raunak"})
// Call the bound function - 'this' now refers to {name:"Raunak"}
boundGreet()  // Output: Hi, I am Raunak
console.log(boundGreet)  // Show the function reference