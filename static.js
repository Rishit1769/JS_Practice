class Calculator{
    static add(a,b){
        return a+b
    }
}

let calc = new Calculator()
// console.log(calc.add(2,3))
console.log(Calculator.add(2,3))