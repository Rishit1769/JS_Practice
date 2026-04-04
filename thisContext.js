const person = {
    name: "Rishit",
    greet(){
        console.log(`Hi, I am ${this.name}`)
    },
};

person.greet()

let boundGreet = person.greet.bind({name:"Raunak"})
boundGreet()
console.log(boundGreet)