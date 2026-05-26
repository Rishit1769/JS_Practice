// ES6 Module Imports - Demonstrates import syntax for both default and named exports
// Modules allow code organization by splitting functionality into separate files

// Default import: Import the default export from Maths.js
// Syntax: import defaultExport from "./filePath";
// The name 'multiplication' here is arbitrary (can be any name)
import multiplication from "./Maths.js";

// Named imports: Import specific named exports from Maths.js
// Syntax: import { namedExport1, namedExport2 } from "./filePath";
// The names must match the exported names exactly
import{add , subtract} from "./Maths.js";

// Call the imported functions
// add and subtract were exported as named exports
console.log(add(2,2));  // Output: 4
console.log(subtract(2,2));  // Output: 0
// multiplication was exported as default export
console.log(multiplication(2,2))  // Output: 4