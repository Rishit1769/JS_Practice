// DOM Exercise Q4 - Creating and Adding New DOM Elements
// Objective: Create a new element dynamically and append it to the DOM

// Get the button element
let btn = document.getElementById("addNewItem");

// Get the list element
let list = document.getElementById("shoppingList");

// Attach click event listener to button
btn.addEventListener("click", function () {
  // createElement() - Creates a new HTML element
  // This creates an <li> element but doesn't add it to the page yet
  const newItem = document.createElement("li");
  
  // Set the text content of the new element
  newItem.textContent = "Eggs";
  
  // appendChild() - Adds the new element as a child to the list
  // This places the new <li> inside the <ul>
  list.appendChild(newItem);
});