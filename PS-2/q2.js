let numOne = Number(prompt("Enter the first number: "))
let numTwo = Number(prompt("Enter the second number: "))
let choice = prompt("Enter the operation you want to do: ")

switch (choice) {
    case '+': console.log(numOne+numTwo)
                    break;
    case '-': console.log(numOne-numTwo)
                    break;
    case '*': console.log(numOne*numTwo)
                    break;
    case '/': console.log(numOne/numTwo)
                    break;
    case '%': console.log(numOne%numTwo)

    default:
        break;
}