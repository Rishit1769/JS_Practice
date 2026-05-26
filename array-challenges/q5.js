// Array Challenge Q5 - Removing elements from array using pop()
// Objective: Remove the last element from an array and store it in a variable

// Declare teaOrders array with 3 tea orders
teaOrders = ["chai","adrak chai","elaichi chai"]

// pop() method removes and returns the last element from an array
// After this operation, teaOrders will have 2 elements
lastOrder = teaOrders.pop()  // Gets "elaichi chai" and removes it from array

// Output the removed last order
console.log(lastOrder)  // Output: elaichi chai