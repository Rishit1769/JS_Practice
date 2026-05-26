// ES6 Module Exports - Demonstrates export syntax for both named and default exports
// Exporting functions makes them available for import in other files

// Named export: Function that can be imported by name
// Syntax: export function functionName(params) { }
// Importers must use: import { add } from "./Maths.js"
export function add(a,b){
    return a+b;
}

// Another named export: Second function
export function subtract(a,b){
    return a-b;
}

// Default export: Only one default export per module
// Syntax: export default function/variable
// Importers can name it anything: import anyName from "./Maths.js"
export default function multiplication(a,b){
    return a*b;
}